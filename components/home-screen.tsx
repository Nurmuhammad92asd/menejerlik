'use client'

import { ChevronRight, GraduationCap, History } from 'lucide-react'
import { CategoryIcon } from '@/components/category-icon'
import type { Attempt } from '@/hooks/use-history'
import { MIXED_COUNT, MIXED_ID, getCategoryTitle } from '@/lib/quiz'
import { CATEGORIES, TOTAL_QUESTIONS } from '@/lib/quiz-data'
import type { TelegramUser } from '@/lib/telegram'

type Props = {
  user: TelegramUser | null
  history: Attempt[]
  stats: { count: number; average: number; best: number }
  bestByCategory: Record<string, number>
  onStart: (categoryId: string) => void
}

export function HomeScreen({ user, history, stats, bestByCategory, onStart }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <GraduationCap className="size-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h1 className="text-xl font-semibold leading-tight tracking-tight text-balance">Menejerlik</h1>
          <p className="text-sm text-muted-foreground">by Nurmuhammad</p>
        </div>
      </header>

      <section aria-labelledby="greeting" className="rounded-3xl bg-primary p-5 text-primary-foreground">
        <h2 id="greeting" className="text-lg font-semibold text-pretty">
          {user ? `Salom, ${user.first_name}!` : 'Xush kelibsiz!'}
        </h2>
        <p className="mt-1 text-sm leading-relaxed opacity-85 text-pretty">
          {`${CATEGORIES.length} ta yo'nalish, ${TOTAL_QUESTIONS} ta savol. Bilimingizni sinang va natijangizni kuzating.`}
        </p>
        <dl className="mt-5 grid grid-cols-3 gap-2">
          <Stat label="Testlar" value={String(stats.count)} />
          <Stat label="O'rtacha" value={`${stats.average}%`} />
          <Stat label="Eng yaxshi" value={`${stats.best}%`} />
        </dl>
      </section>

      <section aria-labelledby="mixed" className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => onStart(MIXED_ID)}
          className="group flex items-center gap-4 rounded-2xl border border-dashed border-primary/40 bg-secondary p-4 text-left transition-colors hover:bg-accent focus-visible:outline-2"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <CategoryIcon id={MIXED_ID} />
          </span>
          <span className="min-w-0 flex-1">
            <span id="mixed" className="block font-medium text-secondary-foreground">
              Aralash test
            </span>
            <span className="block text-sm text-muted-foreground">{`Barcha mavzulardan ${MIXED_COUNT} ta tasodifiy savol`}</span>
          </span>
          <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </section>

      <section aria-labelledby="categories" className="flex flex-col gap-3">
        <h2 id="categories" className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {"Yo'nalishlar"}
        </h2>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map((category) => {
            const best = bestByCategory[category.id]
            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => onStart(category.id)}
                  className="group flex w-full items-center gap-4 rounded-2xl border bg-card p-4 text-left text-card-foreground transition-colors hover:bg-muted focus-visible:outline-2"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <CategoryIcon id={category.id} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium">{category.title}</span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {`${category.questions.length} savol · ${category.description}`}
                    </span>
                  </span>
                  {best !== undefined ? (
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold tabular-nums text-secondary-foreground">
                      {`${best}%`}
                    </span>
                  ) : (
                    <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      {history.length > 0 && (
        <section aria-labelledby="history" className="flex flex-col gap-3">
          <h2 id="history" className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            <History className="size-4" aria-hidden="true" />
            {"So'nggi natijalar"}
          </h2>
          <ul className="divide-y rounded-2xl border bg-card">
            {history.slice(0, 5).map((attempt) => {
              const pct = Math.round((attempt.correct / attempt.total) * 100)
              return (
                <li key={attempt.id} className="flex items-center gap-3 p-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{getCategoryTitle(attempt.categoryId)}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(attempt.at).toLocaleDateString('uz-UZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  <span className="text-sm tabular-nums text-muted-foreground">{`${attempt.correct}/${attempt.total}`}</span>
                  <span
                    className={
                      pct >= 70
                        ? 'w-12 text-right text-sm font-semibold tabular-nums text-success'
                        : 'w-12 text-right text-sm font-semibold tabular-nums text-destructive'
                    }
                  >
                    {`${pct}%`}
                  </span>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-primary-foreground/12 px-3 py-2.5">
      <dt className="text-xs opacity-80">{label}</dt>
      <dd className="text-lg font-semibold tabular-nums">{value}</dd>
    </div>
  )
}
