// components/pisa/leaderboard.tsx
'use client'

import { useEffect, useState } from 'react'
import { BackButton } from './ui'

type Entry = {
  userId: string
  username: string | null
  totalXp: number
  bestLevel: number
  totalSessions: number
  totalCorrect: number
  totalQuestions: number
  updatedAt: number
}

export default function Leaderboard({
  currentUserId,
  onBack,
}: {
  currentUserId: string | null
  onBack: () => void
}) {
  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    fetch('/api/pisa/leaderboard?limit=50')
      .then(r => r.json())
      .then(data => {
        if (cancelled) return
        if (data.error) throw new Error(data.error)
        setEntries(data.leaderboard || [])
        setError(null)
      })
      .catch(err => {
        if (cancelled) return
        setError(err.message || "Reytingni yuklab bo'lmadi")
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const myRank = currentUserId
    ? entries.findIndex(e => e.userId === currentUserId) + 1
    : 0

  return (
    <section className="flex flex-col gap-5">
      <BackButton onClick={onBack} text="PISA Academy" />

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6 text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-yellow-300/20 blur-2xl" />
        <div className="relative">
          <div className="text-4xl">🏆</div>
          <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-yellow-100">
            PISA LEADERBOARD
          </p>
          <h1 className="mt-1 text-3xl font-black">Umumiy reyting</h1>
          <p className="mt-2 text-[11px] text-white/80">
            Eng ko'p XP to'plagan o'quvchilar
          </p>

          {myRank > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-3 py-1.5 text-[11px] font-black backdrop-blur-sm">
              🎯 Sizning o'rningiz: #{myRank}
            </div>
          )}
        </div>
      </div>

      {/* LIST */}
      {loading && (
        <div className="rounded-[28px] border bg-card p-10 text-center">
          <div className="text-3xl">⏳</div>
          <p className="mt-3 text-sm font-bold text-muted-foreground">
            Reyting yuklanmoqda...
          </p>
        </div>
      )}

      {error && !loading && (
        <div className="rounded-[28px] border border-red-200 bg-red-50 p-5 dark:border-red-900/30 dark:bg-red-950/20">
          <p className="text-sm font-black text-red-700 dark:text-red-400">
            ⚠️ {error}
          </p>
          <p className="mt-1 text-[10px] text-red-600 dark:text-red-400">
            D1 database sozlanmagan bo'lishi mumkin.
          </p>
        </div>
      )}

      {!loading && !error && entries.length === 0 && (
        <div className="rounded-[28px] border bg-card p-10 text-center">
          <div className="text-4xl">🥇</div>
          <p className="mt-3 text-sm font-black">Hali hech kim yo'q</p>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Birinchi bo'lib test topshiring va reytingga chiqing!
          </p>
        </div>
      )}

      {!loading && !error && entries.length > 0 && (
        <div className="overflow-hidden rounded-[28px] border bg-card shadow-sm">
          {entries.map((entry, index) => {
            const rank = index + 1
            const isMe = entry.userId === currentUserId
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null
            const accuracy =
              entry.totalQuestions > 0
                ? Math.round((entry.totalCorrect / entry.totalQuestions) * 100)
                : 0

            return (
              <div
                key={entry.userId}
                className={`flex items-center gap-3 border-b p-4 last:border-b-0 ${
                  isMe ? 'bg-blue-50 dark:bg-blue-950/20' : ''
                }`}
              >
                {/* RANK */}
                <div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                    rank === 1
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white'
                      : rank === 2
                        ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-white'
                        : rank === 3
                          ? 'bg-gradient-to-br from-orange-400 to-amber-600 text-white'
                          : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {medal || rank}
                </div>

                {/* INFO */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-black">
                      {entry.username || `O'quvchi #${entry.userId.slice(0, 6)}`}
                    </p>
                    {isMe && (
                      <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[8px] font-black text-white">
                        SIZ
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-muted-foreground">
                    {entry.totalSessions} ta test • {accuracy}% aniqlik • L
                    {entry.bestLevel}/8
                  </p>
                </div>

                {/* XP */}
                <div className="text-right">
                  <p className="text-base font-black text-blue-700 dark:text-blue-400">
                    {entry.totalXp.toLocaleString()}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
                    XP
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* INFO */}
      <div className="rounded-[25px] border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/20 dark:bg-blue-950/10">
        <div className="flex gap-3">
          <div className="text-xl">💡</div>
          <div>
            <p className="text-sm font-black">Reyting qanday ishlaydi?</p>
            <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
              Har bir test yakunlangach, XP avtomatik ravishda reytingga
              qo'shiladi. Eng ko'p XP to'plaganlar yuqorida turadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
