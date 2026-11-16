
import { getCloudflareContext } from '@opennextjs/cloudflare'

type RankingUser = {
  telegram_id: string
  first_name: string | null
  last_name: string | null
  username: string | null
  xp: number | null
  level: number | null
  tests_count: number | null
  total_correct: number | null
  total_questions: number | null
  best_score: number | null
  updated_at?: string | null
}

function getDisplayName(user: RankingUser) {
  const fullName = [
    user.first_name,
    user.last_name,
  ]
    .filter(Boolean)
    .join(' ')
    .trim()

  if (fullName) return fullName
  if (user.username) return `@${user.username}`

  return 'Noma’lum foydalanuvchi'
}

function formatUser(user: RankingUser, rank?: number) {
  const totalCorrect = Number(user.total_correct ?? 0)
  const totalQuestions = Number(user.total_questions ?? 0)

  return {
    ...(rank !== undefined ? { rank } : {}),
    id: user.telegram_id,
    name: getDisplayName(user),
    username: user.username,
    xp: Number(user.xp ?? 0),
    level: Number(user.level ?? 1),
    tests: Number(user.tests_count ?? 0),
    bestScore: Number(user.best_score ?? 0),
    totalCorrect,
    totalQuestions,
    average:
      totalQuestions > 0
        ? Math.round((totalCorrect / totalQuestions) * 100)
        : 0,
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const telegramId = url.searchParams.get('telegramId')

    const { env } = await getCloudflareContext({ async: true })
    const db = env.DB

    if (!db) {
      return Response.json(
        {
          success: false,
          error: 'D1 database binding topilmadi',
        },
        { status: 500 }
      )
    }

    // Reytingning yagona tartiblash mezoni.
    const ORDER_BY = `
      xp DESC,
      best_score DESC,
      tests_count DESC,
      updated_at ASC,
      telegram_id ASC
    `

    // TOP 30 foydalanuvchi.
    const topResult = await db
      .prepare(`
        SELECT
          telegram_id,
          first_name,
          last_name,
          username,
          COALESCE(xp, 0) AS xp,
          COALESCE(level, 1) AS level,
          COALESCE(tests_count, 0) AS tests_count,
          COALESCE(total_correct, 0) AS total_correct,
          COALESCE(total_questions, 0) AS total_questions,
          COALESCE(best_score, 0) AS best_score,
          updated_at
        FROM users
        ORDER BY ${ORDER_BY}
        LIMIT 30
      `)
      .all<RankingUser>()

    const ranking = (topResult.results ?? []).map((user, index) =>
      formatUser(user, index + 1)
    )

    // Jami foydalanuvchilar.
    const totalResult = await db
      .prepare('SELECT COUNT(*) AS total FROM users')
      .first<{ total: number }>()

    const totalUsers = Number(totalResult?.total ?? 0)

    let myData = null
    let myRank: number | null = null
    let xpToNextRank = 0

    if (telegramId) {
      const myUser = await db
        .prepare(`
          SELECT
            telegram_id,
            first_name,
            last_name,
            username,
            COALESCE(xp, 0) AS xp,
            COALESCE(level, 1) AS level,
            COALESCE(tests_count, 0) AS tests_count,
            COALESCE(total_correct, 0) AS total_correct,
            COALESCE(total_questions, 0) AS total_questions,
            COALESCE(best_score, 0) AS best_score,
            updated_at
          FROM users
          WHERE telegram_id = ?
          LIMIT 1
        `)
        .bind(telegramId)
        .first<RankingUser>()

      if (myUser) {
        // Reytingdagi o‘rin: o‘zidan oldinda turganlar soni + 1.
        const rankResult = await db
          .prepare(`
            SELECT COUNT(*) AS rank
            FROM users
            WHERE
              COALESCE(xp, 0) > ?
              OR (
                COALESCE(xp, 0) = ?
                AND COALESCE(best_score, 0) > ?
              )
              OR (
                COALESCE(xp, 0) = ?
                AND COALESCE(best_score, 0) = ?
                AND COALESCE(tests_count, 0) > ?
              )
              OR (
                COALESCE(xp, 0) = ?
                AND COALESCE(best_score, 0) = ?
                AND COALESCE(tests_count, 0) = ?
                AND updated_at < ?
              )
              OR (
                COALESCE(xp, 0) = ?
                AND COALESCE(best_score, 0) = ?
                AND COALESCE(tests_count, 0) = ?
                AND updated_at = ?
                AND telegram_id < ?
              )
          `)
          .bind(
            Number(myUser.xp ?? 0),
            Number(myUser.xp ?? 0),
            Number(myUser.best_score ?? 0),
            Number(myUser.xp ?? 0),
            Number(myUser.best_score ?? 0),
            Number(myUser.tests_count ?? 0),
            Number(myUser.xp ?? 0),
            Number(myUser.best_score ?? 0),
            Number(myUser.tests_count ?? 0),
            myUser.updated_at,
            Number(myUser.xp ?? 0),
            Number(myUser.best_score ?? 0),
            Number(myUser.tests_count ?? 0),
            myUser.updated_at,
            myUser.telegram_id
          )
          .first<{ rank: number }>()

        myRank = Number(rankResult?.rank ?? 0) + 1

        myData = {
          ...formatUser(myUser),
          rank: myRank,
          totalUsers,
        }

        // O‘zidan bir pog‘ona yuqoridagi foydalanuvchi.
        if (myRank > 1) {
          const previousUser = await db
            .prepare(`
              SELECT
                COALESCE(xp, 0) AS xp
              FROM users
              WHERE
                COALESCE(xp, 0) > ?
                OR (
                  COALESCE(xp, 0) = ?
                  AND COALESCE(best_score, 0) > ?
                )
                OR (
                  COALESCE(xp, 0) = ?
                  AND COALESCE(best_score, 0) = ?
                  AND COALESCE(tests_count, 0) > ?
                )
                OR (
                  COALESCE(xp, 0) = ?
                  AND COALESCE(best_score, 0) = ?
                  AND COALESCE(tests_count, 0) = ?
                  AND updated_at < ?
                )
                OR (
                  COALESCE(xp, 0) = ?
                  AND COALESCE(best_score, 0) = ?
                  AND COALESCE(tests_count, 0) = ?
                  AND updated_at = ?
                  AND telegram_id < ?
                )
              ORDER BY ${ORDER_BY.replaceAll('updated_at', 'updated_at')}
              LIMIT 1
            `)
            .bind(
              Number(myUser.xp ?? 0),
              Number(myUser.xp ?? 0),
              Number(myUser.best_score ?? 0),
              Number(myUser.xp ?? 0),
              Number(myUser.best_score ?? 0),
              Number(myUser.tests_count ?? 0),
              Number(myUser.xp ?? 0),
              Number(myUser.best_score ?? 0),
              Number(myUser.tests_count ?? 0),
              myUser.updated_at,
              Number(myUser.xp ?? 0),
              Number(myUser.best_score ?? 0),
              Number(myUser.tests_count ?? 0),
              myUser.updated_at,
              myUser.telegram_id
            )
            .first<{ xp: number }>()

          if (previousUser) {
            xpToNextRank = Math.max(
              0,
              Number(previousUser.xp ?? 0) - Number(myUser.xp ?? 0)
            )
          }
        }
      }
    }

    return Response.json(
      {
        success: true,
        ranking,
        totalUsers,
        me: myData,
        xpToNextRank,
        updatedAt: Date.now(),
      },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      }
    )
  } catch (error) {
    console.error('RANKING API ERROR:', error)

    return Response.json(
      {
        success: false,
        error: 'Reytingni yuklashda server xatosi',
        details:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}
