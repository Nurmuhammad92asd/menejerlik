'use client'

import {
  ArrowLeft,
  Medal,
  Trophy,
  UserRound,
} from 'lucide-react'

type RankingUser = {
  id: string
  name: string
  score: number
  tests: number
}

type Props = {
  onBack: () => void
}

const DEMO_RANKING: RankingUser[] = [
  {
    id: '1',
    name: 'Nurmuhammad',
    score: 98,
    tests: 24,
  },
  {
    id: '2',
    name: 'Azizbek',
    score: 96,
    tests: 21,
  },
  {
    id: '3',
    name: 'Muhammadali',
    score: 94,
    tests: 19,
  },
  {
    id: '4',
    name: 'Shahzod',
    score: 92,
    tests: 17,
  },
  {
    id: '5',
    name: 'Dilshod',
    score: 90,
    tests: 16,
  },
]

export function RankingScreen({
  onBack,
}: Props) {
  return (
    <div className="flex flex-col gap-5 pb-6">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="flex items-center gap-3 pt-2">

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

      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

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
            Menejerlik
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            TOP reyting
          </h2>

          <p className="mx-auto mt-2 max-w-[300px] text-sm leading-5 text-primary-foreground/75">
            Testlarda yuqori natija ko‘rsatgan
            qatnashchilar reytingi.
          </p>

        </div>

      </section>

      {/* =====================================================
          TOP 3
      ====================================================== */}

      <section>

        <div className="mb-3 px-1">

          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Kuchli uchlik
          </p>

          <h2 className="mt-1 text-lg font-bold">
            Eng yuqori natijalar
          </h2>

        </div>

        <div className="grid grid-cols-3 gap-2">

          {/* 2-o‘rin */}

          <TopCard
            user={DEMO_RANKING[1]}
            place={2}
          />

          {/* 1-o‘rin */}

          <TopCard
            user={DEMO_RANKING[0]}
            place={1}
            primary
          />

          {/* 3-o‘rin */}

          <TopCard
            user={DEMO_RANKING[2]}
            place={3}
          />

        </div>

      </section>

      {/* =====================================================
          FULL RANKING
      ====================================================== */}

      <section>

        <div className="mb-3 flex items-center justify-between px-1">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Reyting jadvali
            </p>

            <h2 className="mt-1 text-lg font-bold">
              TOP qatnashchilar
            </h2>

          </div>

          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
            TOP {DEMO_RANKING.length}
          </span>

        </div>

        <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">

          {DEMO_RANKING.map((user, index) => {

            const place = index + 1

            return (
              <div
                key={user.id}
                className="flex items-center gap-3 border-b p-4 last:border-b-0"
              >

                {/* O‘rin */}

                <div className="flex w-8 shrink-0 justify-center">

                  {place <= 3 ? (
                    <Medal
                      className="size-5 text-primary"
                    />
                  ) : (
                    <span className="text-sm font-bold text-muted-foreground">
                      {place}
                    </span>
                  )}

                </div>

                {/* Avatar */}

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary">

                  <UserRound className="size-5 text-primary" />

                </div>

                {/* Ism */}

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-semibold">
                    {user.name}
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {user.tests} ta test ishlangan
                  </p>

                </div>

                {/* Ball */}

                <div className="text-right">

                  <p className="text-base font-bold tabular-nums">
                    {user.score}%
                  </p>

                  <p className="text-[10px] text-muted-foreground">
                    natija
                  </p>

                </div>

              </div>
            )
          })}

        </div>

      </section>

      {/* =====================================================
          INFO
      ====================================================== */}

      <section className="rounded-3xl border bg-muted/40 p-5">

        <div className="flex gap-3">

          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-card">

            <Trophy className="size-5 text-primary" />

          </div>

          <div>

            <h3 className="text-sm font-bold">
              Reyting qanday ishlaydi?
            </h3>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Reyting test natijalari asosida shakllanadi.
              Keyingi bosqichda har bir foydalanuvchining
              haqiqiy natijalari server bazasiga yoziladi
              va reyting avtomatik yangilanadi.
            </p>

          </div>

        </div>

      </section>

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
        <Medal className="size-5" />
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
          'mt-1 text-lg font-bold',
          primary
            ? 'text-primary-foreground'
            : 'text-primary',
        ].join(' ')}
      >
        {user.score}%
      </p>

    </div>
  )
}
