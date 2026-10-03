/*
 * =========================================================
 * LEADERBOARD — faqat hisob-kitob (saqlash yo‘q)
 * =========================================================
 *
 * Bu fayl natijalarni qayerda saqlashni bilmaydi. Natijalar
 * serverdagi bazadan (api/ orqali) olinadi va shu yerga
 * beriladi. Shunda hamma foydalanuvchi bitta umumiy
 * reytingni ko‘radi.
 */

export type LeaderboardEntry = {
  userId: string // Telegram ID
  name: string
  mode: string // masalan: 'm1t1:aralash' | 'm1t1:easy'
  score: number // to‘g‘ri javoblar soni
  total: number
  percent: number
  timeSec: number // sarflangan vaqt
  date: string // ISO
}

/** Ko‘p foiz yaxshi; teng bo‘lsa — kam vaqt yaxshi */
function isBetter(a: LeaderboardEntry, b: LeaderboardEntry): boolean {
  if (a.percent !== b.percent) return a.percent > b.percent
  return a.timeSec < b.timeSec
}

/** Har bir foydalanuvchining eng yaxshi natijasi */
export function bestPerUser(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const best = new Map<string, LeaderboardEntry>()

  for (const entry of entries) {
    const prev = best.get(entry.userId)

    if (!prev || isBetter(entry, prev)) {
      best.set(entry.userId, entry)
    }
  }

  return [...best.values()]
}

export type Standing = {
  rank: number // siz nechinchi o‘rindasiz
  totalParticipants: number // jami qatnashchilar
  topPercent: number // «eng yaxshi X% ichidasiz»
  top: LeaderboardEntry[] // birinchi 10 ta
  message: string
}

/**
 * `entries` — shu rejimdagi barcha natijalar.
 * `me` — joriy natija (test tugagan yoki hozirgi vaqtinchalik).
 *
 * Test davomida ham chaqirish mumkin: «hozirgi o‘rningiz» jonli
 * ko‘rsatiladi.
 */
export function getStanding(
  entries: LeaderboardEntry[],
  me: LeaderboardEntry,
): Standing {
  const others = bestPerUser(entries).filter((e) => e.userId !== me.userId)

  const previous = entries.filter((e) => e.userId === me.userId)

  const myBest = [me, ...previous].reduce((a, b) => (isBetter(a, b) ? a : b))

  const ranked = [...others, myBest].sort((a, b) =>
    isBetter(a, b) ? -1 : isBetter(b, a) ? 1 : 0,
  )

  const rank = ranked.findIndex((e) => e.userId === me.userId) + 1
  const total = ranked.length
  const topPercent = Math.max(1, Math.round((rank / total) * 100))

  let message: string

  if (total === 1) {
    message =
      '🌟 Siz birinchi qatnashchisiz! Boshqalar sizni quvib yetishga harakat qiladi.'
  } else if (rank === 1) {
    message = `🥇 Siz ${total} kishi orasida 1-o‘rindasiz!`
  } else if (rank <= 3) {
    message = `🏅 Siz ${total} kishi orasida ${rank}-o‘rindasiz — sovrinli uchlikda!`
  } else if (topPercent <= 25) {
    message = `🔥 ${total} kishi ichida ${rank}-o‘rin — eng yaxshi ${topPercent}% qatorida.`
  } else {
    message = `📈 ${total} kishi ichida ${rank}-o‘rindasiz. Yana urinib ko‘ring — yuqoriga ko‘tarilish mumkin!`
  }

  return {
    rank,
    totalParticipants: total,
    topPercent,
    top: ranked.slice(0, 10),
    message,
  }
}

/** Test natijasidan reyting yozuvini yasaydi */
export function buildEntry(
  user: { id: string; name: string },
  mode: string,
  result: { correct: number; total: number; durationSec: number },
): LeaderboardEntry {
  return {
    userId: user.id,
    name: user.name,
    mode,
    score: result.correct,
    total: result.total,
    percent:
      result.total === 0 ? 0 : Math.round((result.correct / result.total) * 100),
    timeSec: result.durationSec,
    date: new Date().toISOString(),
  }
}
