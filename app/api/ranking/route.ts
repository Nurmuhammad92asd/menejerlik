import { getCloudflareContext } from '@opennextjs/cloudflare'

type RankingUser = {
  telegram_id: string
  first_name: string | null
  last_name: string | null
  username: string | null
  xp: number
  level: number
  tests_count: number
  total_correct: number
  total_questions: number
  best_score: number
}

function getDisplayName(
  user: RankingUser,
) {
  const fullName = [
    user.first_name,
    user.last_name,
  ]
    .filter(Boolean)
    .join(' ')
    .trim()

  if (fullName) {
    return fullName
  }

  if (user.username) {
    return `@${user.username}`
  }

  return 'Noma’lum menejer'
}

export async function GET(
  request: Request,
) {
  try {
    const url = new URL(request.url)

    const telegramId =
      url.searchParams.get(
        'telegramId',
      )

    const { env } =
      await getCloudflareContext({
        async: true,
      })

    const db = env.DB

    if (!db) {
      return Response.json(
        {
          success: false,
          error:
            'D1 database binding topilmadi',
        },
        { status: 500 },
      )
    }

    /*
     * =====================================================
     * TOP 30
     *
     * Asosiy mezon:
     * 1. XP
     * 2. best_score
     * 3. tests_count
     * =====================================================
     */

    const topUsers =
      await db
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
          ORDER BY
            xp DESC,
            best_score DESC,
            tests_count DESC,
            updated_at ASC
          LIMIT 30
          `,
        )
        .all<RankingUser>()

    /*
     * =====================================================
     * JAMI FOYDALANUVCHILAR
     * =====================================================
     */

    const totalResult =
      await db
        .prepare(
          `
          SELECT COUNT(*) AS total
          FROM users
          `,
        )
        .first<{
          total: number
        }>()

    const totalUsers =
      Number(
        totalResult?.total ?? 0,
      )

    /*
     * =====================================================
     * FOYDALANUVCHI O‘RNI
     * =====================================================
     */

    let myRank: number | null =
      null

    let myUser:
      | RankingUser
      | null = null

    if (telegramId) {
      myUser =
        (await db
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
          .first<RankingUser>()) ??
        null

      if (myUser) {
        /*
         * O‘zidan yuqorida turgan
         * foydalanuvchilar soni + 1.
         */

        const rankResult =
          await db
            .prepare(
              `
              SELECT COUNT(*) AS rank
              FROM users
              WHERE
                xp > ?
                OR (
                  xp = ?
                  AND best_score > ?
                )
                OR (
                  xp = ?
                  AND best_score = ?
                  AND tests_count > ?
                )
              `,
            )
            .bind(
              myUser.xp,
              myUser.xp,
              myUser.best_score,
              myUser.xp,
              myUser.best_score,
              myUser.tests_count,
            )
            .first<{
              rank: number
            }>()

        myRank =
          Number(
            rankResult?.rank ?? 0,
          ) + 1
      }
    }

    /*
     * =====================================================
     * FORMAT
     * =====================================================
     */

    const ranking =
      (topUsers.results ?? []).map(
        (user, index) => ({
          rank: index + 1,

          id: user.telegram_id,

          name:
            getDisplayName(user),

          username:
            user.username,

          xp: user.xp,

          level: user.level,

          tests:
            user.tests_count,

          bestScore:
            user.best_score,

          totalCorrect:
            user.total_correct,

          totalQuestions:
            user.total_questions,

          average:
            user.total_questions >
            0
              ? Math.round(
                  (user.total_correct /
                    user.total_questions) *
                    100,
                )
              : 0,
        }),
      )

    /*
     * =====================================================
     * MY DATA
     * =====================================================
     */

    const myData = myUser
      ? {
          rank: myRank,

          totalUsers,

          id: myUser.telegram_id,

          name:
            getDisplayName(
              myUser,
            ),

          username:
            myUser.username,

          xp: myUser.xp,

          level:
            myUser.level,

          tests:
            myUser.tests_count,

          bestScore:
            myUser.best_score,

          totalCorrect:
            myUser.total_correct,

          totalQuestions:
            myUser.total_questions,

          average:
            myUser.total_questions >
            0
              ? Math.round(
                  (myUser.total_correct /
                    myUser.total_questions) *
                    100,
                )
              : 0,
        }
      : null

    /*
     * =====================================================
     * NEXT RANK
     * =====================================================
     */

    let xpToNextRank = 0

    if (
      myUser &&
      myRank &&
      myRank > 1
    ) {
      const previousUser =
        await db
          .prepare(
            `
            SELECT xp
            FROM users
            WHERE
              xp > ?
              OR (
                xp = ?
                AND best_score > ?
              )
              OR (
                xp = ?
                AND best_score = ?
                AND tests_count > ?
              )
            ORDER BY
              xp ASC,
              best_score ASC,
              tests_count ASC
            LIMIT 1
            `,
          )
          .bind(
            myUser.xp,
            myUser.xp,
            myUser.best_score,
            myUser.xp,
            myUser.best_score,
            myUser.tests_count,
          )
          .first<{
            xp: number
          }>()

      if (previousUser) {
        xpToNextRank =
          Math.max(
            0,
            previousUser.xp -
              myUser.xp,
          )
      }
    }

    return Response.json({
      success: true,

      ranking,

      totalUsers,

      me: myData,

      xpToNextRank,

      updatedAt: Date.now(),
    })
  } catch (error) {
    console.error(
      'RANKING API ERROR:',
      error,
    )

    return Response.json(
      {
        success: false,
        error:
          'Reytingni yuklashda server xatosi',
      },
      { status: 500 },
    )
  }
}
