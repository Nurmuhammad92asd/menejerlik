'use client'

import { useEffect, useState } from 'react'
import { Check, Clock, Lightbulb, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDuration, type AnswerRecord, type QuizSession } from '@/lib/quiz'
import { haptic } from '@/lib/telegram'
import { cn } from '@/lib/utils'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

type Props = {
  session: QuizSession
  showCloseButton: boolean
  onExit: () => void
  onFinish: (answers: AnswerRecord[]) => void
}

export function QuizScreen({ session, showCloseButton, onExit, onFinish }: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const elapsed = useElapsed(session.startedAt)

  const question = session.questions[index]
  const total = session.questions.length
  const isLast = index === total - 1
  const locked = selected !== null
  const progress = ((index + (locked ? 1 : 0)) / total) * 100

  function choose(optionIndex: number) {
    if (locked) return
    setSelected(optionIndex)
    setAnswers((prev) => [...prev, { question, selected: optionIndex }])
    haptic(optionIndex === question.answer ? 'success' : 'error')
  }

  function next() {
    haptic('light')
    if (isLast) {
      onFinish(answers)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  return (
    <div className="flex min-h-[calc(100dvh-3rem)] flex-col gap-5">
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          {showCloseButton && (
            <Button variant="ghost" size="icon" onClick={onExit} aria-label="Testni yakunlash">
              <X className="size-5" aria-hidden="true" />
            </Button>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{session.title}</p>
            <p className="text-xs text-muted-foreground tabular-nums">{`Savol ${index + 1} / ${total}`}</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm tabular-nums text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            <span aria-label="O'tgan vaqt">{formatDuration(elapsed)}</span>
          </span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Test jarayoni"
        >
          <div className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <section key={question.id} className="flex flex-1 flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
        <h2 className="text-xl font-semibold leading-snug text-pretty">{question.text}</h2>

        <ul className="flex flex-col gap-2.5" aria-label="Javob variantlari">
          {question.options.map((option, i) => {
            const isCorrect = i === question.answer
            const isChosen = i === selected
            const state = !locked ? 'idle' : isCorrect ? 'correct' : isChosen ? 'wrong' : 'dim'
            return (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  disabled={locked}
                  aria-pressed={isChosen}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-2xl border-2 bg-card p-4 text-left text-card-foreground transition-all focus-visible:outline-2',
                    state === 'idle' && 'border-border hover:border-primary/50 active:scale-[0.99]',
                    state === 'correct' && 'border-success bg-success/10',
                    state === 'wrong' && 'border-destructive bg-destructive/10',
                    state === 'dim' && 'border-border opacity-55',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold',
                      state === 'correct' && 'bg-success text-success-foreground',
                      state === 'wrong' && 'bg-destructive text-white',
                      (state === 'idle' || state === 'dim') && 'bg-muted text-muted-foreground',
                    )}
                  >
                    {state === 'correct' ? (
                      <Check className="size-4" aria-label="To'g'ri" />
                    ) : state === 'wrong' ? (
                      <X className="size-4" aria-label="Noto'g'ri" />
                    ) : (
                      LETTERS[i]
                    )}
                  </span>
                  <span className="text-[15px] leading-snug">{option}</span>
                </button>
              </li>
            )
          })}
        </ul>

        {locked && (
          <div
            role="status"
            className="flex gap-3 rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-secondary-foreground animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <Lightbulb className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <p>
              <span className="font-semibold">{selected === question.answer ? "To'g'ri! " : "Noto'g'ri. "}</span>
              {question.explanation}
            </p>
          </div>
        )}
      </section>

      <div className="sticky bottom-0 -mx-4 bg-background/95 px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur">
        <Button size="lg" className="h-12 w-full rounded-2xl text-base" disabled={!locked} onClick={next}>
          {!locked ? 'Javobni tanlang' : isLast ? "Natijani ko'rish" : 'Keyingi savol'}
        </Button>
      </div>
    </div>
  )
}

function useElapsed(startedAt: number) {
  const [now, setNow] = useState(startedAt)
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return Math.max(0, Math.floor((now - startedAt) / 1000))
}
