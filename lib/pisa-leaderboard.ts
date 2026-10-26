// lib/pisa-leaderboard.ts

export type LeaderboardEntry = {
  userId: string
  username: string | null
  totalXp: number
  bestLevel: number
  totalSessions: number
  totalCorrect: number
  totalQuestions: number
  updatedAt: number
}

export type SubmitResult = {
  userId: string
  username: string | null
  totalXp: number
  bestLevel: number
  domainScores: Record<string, number>
  correctAnswers: number
  totalAnswers: number
}

/**
 * Reytingga natija yuborish (upsert)
 */
export async function submitScore(db: D1Database, data: SubmitResult): Promise<void> {
  await db
    .prepare(
      `INSERT INTO pisa_leaderboard
        (user_id, username, total_xp, best_level, total_sessions, total_correct, total_questions, domain_scores, updated_at)
       VALUES (?, ?, ?, ?, 1, ?, ?, ?, unixepoch())
       ON CONFLICT(user_id) DO UPDATE SET
         username = excluded.username,
         total_xp = excluded.total_xp,
         best_level = MAX(pisa_leaderboard.best_level, excluded.best_level),
         total_sessions = pisa_leaderboard.total_sessions + 1,
         total_correct = pisa_leaderboard.total_correct + excluded.total_correct,
         total_questions = pisa_leaderboard.total_questions + excluded.total_questions,
         domain_scores = excluded.domain_scores,
         updated_at = unixepoch()`,
    )
    .bind(
      data.userId,
      data.username,
      data.totalXp,
      data.bestLevel,
      data.correctAnswers,
      data.totalAnswers,
      JSON.stringify(data.domainScores),
    )
    .run()
}

/**
 * Top N reytingni olish
 */
export async function getLeaderboard(
  db: D1Database,
  limit = 50,
): Promise<LeaderboardEntry[]> {
  const result = await db
    .prepare(
      `SELECT user_id, username, total_xp, best_level, total_sessions,
              total_correct, total_questions, updated_at
       FROM pisa_leaderboard
       ORDER BY total_xp DESC, best_level DESC
       LIMIT ?`,
    )
    .bind(limit)
    .all<{
      user_id: string
      username: string | null
      total_xp: number
      best_level: number
      total_sessions: number
      total_correct: number
      total_questions: number
      updated_at: number
    }>()

  return (result.results || []).map(row => ({
    userId: row.user_id,
    username: row.username,
    totalXp: row.total_xp,
    bestLevel: row.best_level,
    totalSessions: row.total_sessions,
    totalCorrect: row.total_correct,
    totalQuestions: row.total_questions,
    updatedAt: row.updated_at,
  }))
}

/**
 * Foydalanuvchining o'z o'rnini topish
 */
export async function getUserRank(db: D1Database, userId: string): Promise<number | null> {
  const row = await db
    .prepare(
      `SELECT COUNT(*) + 1 AS rank FROM pisa_leaderboard
       WHERE total_xp > (SELECT total_xp FROM pisa_leaderboard WHERE user_id = ?)`,
    )
    .bind(userId)
    .first<{ rank: number }>()

  return row?.rank ?? null
}
