import { getCloudflareContext } from '@opennextjs/cloudflare'

type ResultRequest = {
  categoryId?: string
  topicId?: string
  level?: string
  correct: number
  total: number
  durationSec?: number
}

type TelegramUser = {
  id: number
  first_name?: string
  last_name?: string
  username?: string
}

function calculateXp(correct: number, total: number): number {
  if (!total || total <= 0) return 0

  const percentage = Math.round((correct / total) * 100)

  if (percentage >= 90) return 100
  if (percentage >= 80) return 80
  if (percentage >= 70) return 60
  if (percentage >= 60) return 40
  if (percentage >= 50) return 25

  return 10
}

function calculateLevel(xp: number): number {
  if (xp >= 5000) return 6
  if (xp >= 3000) return 5
  if (xp >= 1800) return 4
  if (xp >= 1000) return 3
  if (xp >= 500) return 2

  return 1
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ResultRequest & {
      telegramUser?: TelegramUser
    }

    const user = body.telegramUser

    if (!user?.id) {
      return Response.json(
        {
          success: false,
          error: 'Telegram foydalanuvchisi aniqlanmadi',
        },
        { status: 401 },
      )
    }

    const correct = Number(body.correct)
    const total = Number(body.total)

    if (
      !Number.isFinite(correct) ||
      !Number.isFinite(total) ||
      total <= 0 ||
      correct < 0 ||
      correct > total
    ) {
      return Response.json(
        {
          success: false,
          error: 'Test natijasi noto‘g‘ri',
        },
        { status: 400 },
      )
    }

    const score = Math.round((correct / total) * 100)
    const xp = calculateXp(correct, total)

    const now = Date.now()
    const telegramId = String(user.id)
    const attemptId = crypto.randomUUID()

    const { env } = await getCloudflareContext({
      async: true,
    })

    const db = env.DB

    if (!db) {
      return Response.json(
        {
          success: false,
          error: 'D1 database binding topilmadi',
        },
        { status: 500 },
      )
    }

    // -----------------------------------------------------
    // 1. Foydalanuvchini yaratish yoki yangilash
    // -----------------------------------------------------

    const existingUser = await db
      .prepare(
        `
        SELECT
          telegram_id,
          xp,
          level,
          tests_count,
          total_correct,
          total_questions,
          best_score
        FROM users
        WHERE telegram_id = ?
        `,
      )
      .bind(telegramId)
      .first<{
        telegram_id: string
        xp: number
        level: number
        tests_count: number
        total_correct: number
        total_questions: number
        best_score: number
      }>()

    if (!existingUser) {
      await db
        .prepare(
          `
          INSERT INTO users (
            telegram_id,
            first_name,
            last_name,
            username,
            xp,
            level,
            tests_count,
            total_correct,
            total_questions,
            best_score,
            created_at,
            updated_at
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `,
        )
        .bind(
          telegramId,
          user.first_name ?? null,
          user.last_name ?? null,
          user.username ?? null,
          xp,
          calculateLevel(xp),
          1,
          correct,
          total,
          score,
          now,
          now,
        )
        .run()
    } else {
      const newXp = existingUser.xp + xp
      const newTestsCount = existingUser.tests_count + 1
      const newTotalCorrect =
        existingUser.total_correct + correct
      const newTotalQuestions =
        existingUser.total_questions + total

      const newBestScore = Math.max(
        existingUser.best_score,
        score,
      )

      await db
        .prepare(
          `
          UPDATE users
          SET
            first_name = ?,
            last_name = ?,
            username = ?,
            xp = ?,
            level = ?,
            tests_count = ?,
            total_correct = ?,
            total_questions = ?,
            best_score = ?,
            updated_at = ?
          WHERE telegram_id = ?
          `,
        )
        .bind(
          user.first_name ?? null,
          user.last_name ?? null,
          user.username ?? null,
          newXp,
          calculateLevel(newXp),
          newTestsCount,
          newTotalCorrect,
          newTotalQuestions,
          newBestScore,
          now,
          telegramId,
        )
        .run()
    }

    // -----------------------------------------------------
    // 2. Test natijasini saqlash
    // -----------------------------------------------------

    await db
      .prepare(
        `
        INSERT INTO attempts (
          id,
          telegram_id,
          category_id,
          topic_id,
          level,
          correct,
          total,
          score,
          duration_sec,
          created_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
      )
      .bind(
        attemptId,
        telegramId,
        body.categoryId ?? null,
        body.topicId ?? null,
        body.level ?? null,
        correct,
        total,
        score,
        Number(body.durationSec ?? 0),
        now,
      )
      .run()

    // -----------------------------------------------------
    // 3. Mavzu statistikasi
    // -----------------------------------------------------

    if (body.topicId) {
      await db
        .prepare(
          `
          INSERT INTO topic_stats (
            telegram_id,
            topic_id,
            attempts,
            correct,
            total,
            updated_at
          )
          VALUES (?, ?, ?, ?, ?, ?)

          ON CONFLICT(telegram_id, topic_id)
          DO UPDATE SET
            attempts = attempts + 1,
            correct = correct + excluded.correct,
            total = total + excluded.total,
            updated_at = excluded.updated_at
          `,
        )
        .bind(
          telegramId,
          body.topicId,
          1,
          correct,
          total,
          now,
        )
        .run()
    }

    // -----------------------------------------------------
    // 4. Yangilangan user statistikasi
    // -----------------------------------------------------

    const updatedUser = await db
      .prepare(
        `
        SELECT
          telegram_id,
          first_name,
          last_name,
          username,
          xp,
          level,
          tests_count,
          total_correct,
          total_questions,
          best_score
        FROM users
        WHERE telegram_id = ?
        `,
      )
      .bind(telegramId)
      .first()

    return Response.json({
      success: true,

      result: {
        attemptId,
        correct,
        total,
        score,
        xpEarned: xp,
      },

      user: updatedUser,
    })
  } catch (error) {
    console.error('RESULT API ERROR:', error)

    return Response.json(
      {
        success: false,
        error: 'Server xatosi',
      },
      { status: 500 },
    )
  }
}
