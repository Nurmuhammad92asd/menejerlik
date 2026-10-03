'use client'

import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  ArrowLeft,
  Crown,
  Medal,
  RefreshCw,
  Trophy,
  UserRound,
  Zap,
} from 'lucide-react'

import { getTelegramUser } from '@/lib/telegram'

type RankingUser = {
  rank: number
  id: string
  name: string
  username?: string | null
  xp: number
  level: number
  tests: number
  bestScore: number
  totalCorrect: number
  totalQuestions: number
  average: number
}

type MyRanking = {
  rank: number | null
  totalUsers: number
  id: string
  name: string
  username?: string | null
  xp: number
  level: number
  tests: number
  bestScore: number
  totalCorrect: number
  totalQuestions: number
  average: number
}

type RankingResponse = {
  success: boolean
  ranking: RankingUser[]
  totalUsers: number
  me: MyRanking | null
  xpToNextRank: number
  updatedAt: number
  error?: string
}

type Props = {
  onBack: () => void
}

const LEVEL_NAMES: Record<number, string> = {
  1: 'Boshlovchi',
  2: 'O‘rganuvchi',
  3: 'Amaliyotchi',
  4: 'Menejer',
  5: 'Yetuk menejer',
  6: 'Strateg',
}

export function RankingScreen({
  onBack,
}: Props) {
  const [data, setData] =
    useState<RankingResponse | null>(null)

  const [loading, setLoading] =
    useState(true)

  const [refreshing, setRefreshing] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)

  const loadRanking = useCallback(
    async (silent = false) => {
      try {
        if (silent) {
          setRefreshing(true)
        } else {
          setLoading(true)
        }

        setError(null)

        const telegramUser =
          getTelegramUser()

        const telegramId =
          telegramUser?.id

        const url = telegramId
          ? `/api/ranking?telegramId=${encodeURIComponent(
              String(telegramId),
            )}`
          : '/api/ranking'

        const response =
          await fetch(url, {
            method: 'GET',
            cache: 'no-store',
          })

        const result =
          (await response.json()) as RankingResponse

        if (
          !response.ok ||
          !result.success
        ) {
          throw new Error(
            result.error ??
              'Reytingni yuklab bo‘lmadi',
          )
        }

        setData(result)
      } catch (err) {
        console.error(
          'Ranking load error:',
          err,
        )

        setError(
          err instanceof Error
            ? err.message
            : 'Reytingni yuklashda xatolik yuz berdi',
        )
      } finally {
        setLoading(false)
        setRefreshing(false)
      }
    },
    [],
  )

  useEffect(() => {
    loadRanking()
  }, [loadRanking])

  const ranking =
    data?.ranking ?? []

  const topThree =
    ranking.slice(0, 3)

  return (
    <div className="flex flex-col gap-5 pb-6">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="flex items-center justify-between gap-3 pt-2">

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={onBack}
            className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-card transition-colors hover:bg-muted"
            aria-label="Orqaga"
          >
            <ArrowLeft className="size-5" />
          </button>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Reyting
            </p>

            <h1 className="text-xl font-bold tracking-tight">
              TOP menejerlar
            </h1>
          </div>

        </div>

        <button
          type="button"
          onClick={() =>
            loadRanking(true)
          }
          disabled={refreshing}
          className="flex size-10 items-center justify-center rounded-xl border bg-card transition hover:bg-muted disabled:opacity-50"
          aria-label="Yangilash"
        >
          <RefreshCw
            className={[
              'size-4',
              refreshing
                ? 'animate-spin'
                : '',
            ].join(' ')}
          />
        </button>

      </header>

      {/* =====================================================
          ERROR
      ====================================================== */}

      {error && (
        <section className="rounded-3xl border border-red-200 bg-red-50 p-5">

          <div className="flex items-start gap-3">

            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white">
              ⚠️
            </div>

            <div className="min-w-0 flex-1">

              <h2 className="font-bold text-red-800">
                Reytingni yuklab bo‘lmadi
              </h2>

              <p className="mt-1 text-sm leading-5 text-red-700">
                {error}
              </p>

              <button
                type="button"
                onClick={() =>
                  loadRanking()
                }
                className="mt-3 rounded-xl bg-red-700 px-4 py-2 text-xs font-semibold text-white"
              >
                Qayta urinish
              </button>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          LOADING
      ====================================================== */}

      {loading && (
        <RankingSkeleton />
      )}

      {/* =====================================================
          CONTENT
      ====================================================== */}

      {!loading &&
        !error && (
          <>

            {/* =================================================
                HERO
            ================================================= */}

            <section className="relative overflow-hidden rounded-[2rem] bg-primary p-6 text-primary-foreground shadow-lg">

              <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-white/10" />

              <div className="pointer-events-none absolute -bottom-12 -left-8 size-32 rounded-full bg-white/5" />

              <div className="relative text-center">

                <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-primary-foreground/10 backdrop-blur-sm">

                  <Trophy
                    className="size-10"
                    strokeWidth={1.8}
                  />

                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                  MENEJERLIK
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  TOP-30
                </h2>

                <p className="mx-auto mt-2 max-w-[300px] text-sm leading-5 text-primary-foreground/75">
                  Menejerlik platformasidagi
                  haqiqiy natijalar asosida
                  shakllanadigan global reyting.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-xs font-semibold backdrop-blur-sm">

                  <UserRound className="size-4" />

                  {data?.totalUsers ?? 0}{' '}
                  ta menejer

                </div>

              </div>

            </section>

            {/* =================================================
                MY POSITION
            ================================================= */}

            {data?.me && (
              <MyPosition
                me={data.me}
                xpToNextRank={
                  data.xpToNextRank
                }
              />
            )}

            {/* =================================================
                TOP 3
            ================================================= */}

            {topThree.length > 0 && (
              <section>

                <div className="mb-3 px-1">

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Kuchli uchlik
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    Eng ko‘p XP to‘plaganlar
                  </h2>

                </div>

                <div className="grid grid-cols-3 gap-2">

                  {topThree[1] && (
                    <TopCard
                      user={topThree[1]}
                      place={2}
                    />
                  )}

                  {topThree[0] && (
                    <TopCard
                      user={topThree[0]}
                      place={1}
                      primary
                    />
                  )}

                  {topThree[2] && (
                    <TopCard
                      user={topThree[2]}
                      place={3}
                    />
                  )}

                </div>

              </section>
            )}

            {/* =================================================
                FULL RANKING
            ================================================= */}

            <section>

              <div className="mb-3 flex items-end justify-between px-1">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Reyting jadvali
                  </p>

                  <h2 className="mt-1 text-lg font-bold">
                    TOP-30
                  </h2>

                </div>

                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
                  {ranking.length}/30
                </span>

              </div>

              {ranking.length === 0 ? (
                <EmptyRanking />
              ) : (
                <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">

                  {ranking.map(
                    (user) => (
                      <RankingRow
                        key={user.id}
                        user={user}
                        currentUserId={
                          data?.me?.id
                        }
                      />
                    ),
                  )}

                </div>
              )}

            </section>

            {/* =================================================
                MY STATISTICS
            ================================================= */}

            {data?.me && (
              <section className="grid grid-cols-2 gap-3">

                <StatCard
                  icon="🔥"
                  label="XP"
                  value={data.me.xp}
                />

                <StatCard
                  icon="📝"
                  label="Testlar"
                  value={data.me.tests}
                />

                <StatCard
                  icon="🎯"
                  label="Eng yaxshi"
                  value={`${data.me.bestScore}%`}
                />

                <StatCard
                  icon="📊"
                  label="O‘rtacha"
                  value={`${data.me.average}%`}
                />

              </section>
            )}

            {/* =================================================
                INFO
            ================================================= */}

            <section className="rounded-3xl border bg-muted/40 p-5">

              <div className="flex gap-3">

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-card">

                  <Zap className="size-5 text-primary" />

                </div>

                <div>

                  <h3 className="text-sm font-bold">
                    Reyting qanday ishlaydi?
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Har bir yakunlangan test uchun
                    natijaga qarab XP beriladi.
                    XP ko‘paygani sari foydalanuvchi
                    reytingda yuqorilaydi.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <LevelBadge level={1} />
                    <LevelBadge level={2} />
                    <LevelBadge level={3} />
                    <LevelBadge level={4} />
                    <LevelBadge level={5} />
                    <LevelBadge level={6} />

                  </div>

                </div>

              </div>

            </section>

          </>
        )}

    </div>
  )
}

/* =========================================================
   MY POSITION
========================================================= */

function MyPosition({
  me,
  xpToNextRank,
}: {
  me: MyRanking
  xpToNextRank: number
}) {
  const rank =
    me.rank ?? 0

  const total =
    me.totalUsers ?? 0

  return (
    <section className="overflow-hidden rounded-3xl border bg-card shadow-sm">

      <div className="border-b bg-muted/30 px-5 py-4">

        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Sizning o‘rningiz
        </p>

      </div>

      <div className="p-5">

        <div className="flex items-center gap-4">

          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl font-black text-primary-foreground">

            {rank > 0
              ? `#${rank}`
              : '—'}

          </div>

          <div className="min-w-0 flex-1">

            <p className="truncate text-base font-bold">
              {me.name}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">

              {rank > 0
                ? `#${rank} / ${total}`
                : 'Reytingga hali kiritilmagan'}

            </p>

          </div>

          <div className="text-right">

            <p className="text-lg font-black">
              {me.xp}
            </p>

            <p className="text-[10px] font-semibold uppercase text-muted-foreground">
              XP
            </p>

          </div>

        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">

          <MiniStat
            label="Test"
            value={me.tests}
          />

          <MiniStat
            label="Eng yaxshi"
            value={`${me.bestScore}%`}
          />

          <MiniStat
            label="Daraja"
            value={
              LEVEL_NAMES[me.level] ??
              `Level ${me.level}`
            }
          />

        </div>

        {rank > 1 &&
          xpToNextRank > 0 && (
            <div className="mt-4 rounded-2xl bg-primary/5 p-4">

              <div className="flex items-center justify-between gap-3">

                <div>

                  <p className="text-xs font-semibold text-muted-foreground">
                    Keyingi o‘rin
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    Yana {xpToNextRank} XP kerak
                  </p>

                </div>

                <Zap className="size-5 text-primary" />

              </div>

            </div>
          )}

      </div>

    </section>
  )
}

/* =========================================================
   RANKING ROW
========================================================= */

function RankingRow({
  user,
  currentUserId,
}: {
  user: RankingUser
  currentUserId?: string
}) {
  const isMe =
    Boolean(
      currentUserId &&
        user.id ===
          currentUserId,
    )

  return (
    <div
      className={[
        'flex items-center gap-3 border-b p-4 last:border-b-0',
        isMe
          ? 'bg-primary/5'
          : '',
      ].join(' ')}
    >

      {/* RANK */}

      <div className="flex w-9 shrink-0 justify-center">

        {user.rank <= 3 ? (
          <Medal
            className={[
              'size-5',
              user.rank === 1
                ? 'text-yellow-500'
                : user.rank === 2
                  ? 'text-slate-400'
                  : 'text-amber-600',
            ].join(' ')}
          />
        ) : (
          <span className="text-sm font-bold text-muted-foreground">
            {user.rank}
          </span>
        )}

      </div>

      {/* AVATAR */}

      <div
        className={[
          'flex size-10 shrink-0 items-center justify-center rounded-xl',
          isMe
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary',
        ].join(' ')}
      >

        {user.rank === 1 ? (
          <Crown className="size-5" />
        ) : (
          <UserRound className="size-5" />
        )}

      </div>

      {/* USER */}

      <div className="min-w-0 flex-1">

        <div className="flex min-w-0 items-center gap-2">

          <p className="truncate text-sm font-semibold">
            {user.name}
          </p>

          {isMe && (
            <span className="shrink-0 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">
              SIZ
            </span>
          )}

        </div>

        <p className="mt-0.5 truncate text-xs text-muted-foreground">

          {LEVEL_NAMES[user.level] ??
            `Level ${user.level}`}

          {' · '}

          {user.tests} ta test

        </p>

      </div>

      {/* XP */}

      <div className="text-right">

        <p className="text-base font-black tabular-nums">
          {user.xp}
        </p>

        <p className="text-[10px] font-semibold text-muted-foreground">
          XP
        </p>

      </div>

    </div>
  )
}

/* =========================================================
   TOP CARD
========================================================= */

function TopCard({
  user,
  place,
  primary = false,
}: {
  user: RankingUser
  place: number
  primary?: boolean
}) {
  return (
    <div
      className={[
        'rounded-3xl border p-4 text-center shadow-sm',
        primary
          ? 'bg-primary text-primary-foreground'
          : 'bg-card',
      ].join(' ')}
    >

      <div
        className={[
          'mx-auto flex size-10 items-center justify-center rounded-xl',
          primary
            ? 'bg-primary-foreground/10'
            : 'bg-secondary',
        ].join(' ')}
      >

        {place === 1 ? (
          <Crown className="size-5" />
        ) : (
          <Medal className="size-5" />
        )}

      </div>

      <p
        className={[
          'mt-2 text-xs font-bold',
          primary
            ? 'text-primary-foreground/70'
            : 'text-muted-foreground',
        ].join(' ')}
      >
        {place}-o‘rin
      </p>

      <p className="mt-1 truncate text-sm font-bold">
        {user.name}
      </p>

      <p
        className={[
          'mt-1 text-lg font-black',
          primary
            ? 'text-primary-foreground'
            : 'text-primary',
        ].join(' ')}
      >
        {user.xp}
      </p>

      <p
        className={[
          'text-[10px]',
          primary
            ? 'text-primary-foreground/70'
            : 'text-muted-foreground',
        ].join(' ')}
      >
        XP
      </p>

    </div>
  )
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: string
  label: string
  value: string | number
}) {
  return (
    <div className="rounded-2xl border bg-card p-4">

      <div className="text-xl">
        {icon}
      </div>

      <p className="mt-2 text-lg font-black">
        {value}
      </p>

      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

    </div>
  )
}

/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({
  label,
  value,
}: {
  label: string
  value: string | number
}) {
  return (
    <div className="rounded-2xl bg-muted/50 p-3">

      <p className="truncate text-[10px] font-semibold uppercase text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-bold">
        {value}
      </p>

    </div>
  )
}

/* =========================================================
   LEVEL BADGE
========================================================= */

function LevelBadge({
  level,
}: {
  level: number
}) {
  return (
    <span className="rounded-full bg-card px-3 py-1 text-[10px] font-semibold shadow-sm">
      {level}. {LEVEL_NAMES[level] ?? `Level ${level}`}
    </span>
  )
}

/* =========================================================
   EMPTY
========================================================= */

function EmptyRanking() {
  return (
    <div className="rounded-3xl border bg-card px-6 py-12 text-center">

      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-secondary text-2xl">
        🏆
      </div>

      <h3 className="mt-4 font-bold">
        Reyting hali bo‘sh
      </h3>

      <p className="mt-2 text-sm leading-5 text-muted-foreground">
        Birinchi test natijalari
        yuborilgach, TOP-30 shu yerda
        ko‘rinadi.
      </p>

    </div>
  )
}

/* =========================================================
   SKELETON
========================================================= */

function RankingSkeleton() {
  return (
    <div className="flex flex-col gap-5 animate-pulse">

      <div className="h-56 rounded-[2rem] bg-muted" />

      <div className="h-40 rounded-3xl bg-muted" />

      <div className="h-32 rounded-3xl bg-muted" />

      <div className="overflow-hidden rounded-3xl border bg-card">

        {Array.from({
          length: 7,
        }).map(
          (_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b p-4 last:border-b-0"
            >

              <div className="size-8 rounded-xl bg-muted" />

              <div className="size-10 rounded-xl bg-muted" />

              <div className="flex-1">

                <div className="h-3 w-28 rounded bg-muted" />

                <div className="mt-2 h-2 w-20 rounded bg-muted" />

              </div>

              <div className="h-5 w-12 rounded bg-muted" />

            </div>
          ),
        )}

      </div>

    </div>
  )
}
