'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Clock, Lightbulb, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  type AnswerRecord,
  type QuizSession,
} from '@/lib/quiz'
import { haptic } from '@/lib/telegram'
import { cn } from '@/lib/utils'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

// HAR BIR SAVOLGA 2 DAQIQA
const QUESTION_TIME = 120

type Props = {
  session: QuizSession
  showCloseButton: boolean
  onExit: () => void
  onFinish: (answers: AnswerRecord[]) => void
}

export function QuizScreen({
  session,
  showCloseButton,
  onExit,
  onFinish,
}: Props) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME)

  // Stale closure muammosini oldini olish uchun ref
  const answersRef = useRef<AnswerRecord[]>([])
  const selectedRef = useRef<number | null>(null)
  const finishedRef = useRef(false)

  const question = session.questions[index]
  const total = session.questions.length
  const isLast = index === total - 1
  const locked = selected !== null

  const progress =
    ((index + (locked ? 1 : 0)) / total) * 100

  /**
   * Har bir yangi savolga kirilganda
   * vaqt yana 2:00 dan boshlanadi.
   */
  useEffect(() => {
    setTimeLeft(QUESTION_TIME)
    setSelected(null)
    selectedRef.current = null

    const timer = setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 1) {
          clearInterval(timer)

          // Savolga javob berilmagan bo'lsa,
          // -1 sifatida saqlaymiz
          if (selectedRef.current === null) {
            const unanswered: AnswerRecord = {
              question: session.questions[index],
              selected: -1,
            }

            const updatedAnswers = [
              ...answersRef.current,
              unanswered,
            ]

            answersRef.current = updatedAnswers
            setAnswers(updatedAnswers)

            haptic('error')

            // Oxirgi savol bo'lsa test tugaydi
            if (isLast) {
              if (!finishedRef.current) {
                finishedRef.current = true

                setTimeout(() => {
                  onFinish(updatedAnswers)
                }, 300)
              }
            } else {
              // Keyingi savolga o'tamiz
              setTimeout(() => {
                setIndex((currentIndex) => currentIndex + 1)
              }, 300)
            }
          } else {
            // Javob allaqachon berilgan bo'lsa,
            // uni qayta qo'shmaymiz.
            if (isLast) {
              if (!finishedRef.current) {
                finishedRef.current = true

                setTimeout(() => {
                  onFinish(answersRef.current)
                }, 300)
              }
            } else {
              setTimeout(() => {
                setIndex((currentIndex) => currentIndex + 1)
              }, 300)
            }
          }

          return 0
        }

        return currentTime - 1
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [index, isLast, onFinish, session.questions])

  /**
   * Javob tanlash
   */
  function choose(optionIndex: number) {
    if (locked || finishedRef.current) {
      return
    }

    selectedRef.current = optionIndex
    setSelected(optionIndex)

    const record: AnswerRecord = {
      question,
      selected: optionIndex,
    }

    const updatedAnswers = [
      ...answersRef.current,
      record,
    ]

    answersRef.current = updatedAnswers
    setAnswers(updatedAnswers)

    haptic(
      optionIndex === question.answer
        ? 'success'
        : 'error',
    )
  }

  /**
   * Keyingi savol
   */
  function next() {
    if (!locked || finishedRef.current) {
      return
    }

    haptic('light')

    if (isLast) {
      finishedRef.current = true
      onFinish(answersRef.current)
      return
    }

    setIndex((currentIndex) => currentIndex + 1)
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const timerDanger = timeLeft <= 10
  const timerWarning =
    timeLeft > 10 && timeLeft <= 30

  return (
    <div className="flex min-h-[calc(100dvh-3rem)] flex-col gap-5">
      {/* HEADER */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          {showCloseButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onExit}
              aria-label="Testni yakunlash"
            >
              <X
                className="size-5"
                aria-hidden="true"
              />
            </Button>
          )}

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              {session.title}
            </p>

            <p className="text-xs text-muted-foreground tabular-nums">
              Savol {index + 1} / {total}
            </p>
          </div>

          {/* TIMER */}
          <span
            className={cn(
              'flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold tabular-nums',
              timerDanger &&
                'bg-destructive/15 text-destructive',
              timerWarning &&
                'bg-yellow-500/15 text-yellow-600',
              !timerDanger &&
                !timerWarning &&
                'bg-muted text-muted-foreground',
            )}
          >
            <Clock
              className="size-3.5"
              aria-hidden="true"
            />

            <span>
              {minutes}:
              {seconds
                .toString()
                .padStart(2, '0')}
            </span>
          </span>
        </div>

        {/* PROGRESS */}
        <div
          className="h-2 overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Test jarayoni"
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* TIMER INFO */}
        <p className="text-center text-xs text-muted-foreground">
          Bu savol uchun vaqt: <b>2 daqiqa</b>
        </p>
      </header>

      {/* QUESTION */}
      <section
        key={question.id}
        className="flex flex-1 flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300"
      >
        <h2 className="text-xl font-semibold leading-snug text-pretty">
          {question.text}
        </h2>

        {/* OPTIONS */}
        <ul
          className="flex flex-col gap-2.5"
          aria-label="Javob variantlari"
        >
          {question.options.map((option, i) => {
            const isCorrect =
              i === question.answer

            const isChosen =
              i === selected

            const state = !locked
              ? 'idle'
              : isCorrect
                ? 'correct'
                : isChosen
                  ? 'wrong'
                  : 'dim'

            return (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  disabled={locked}
                  aria-pressed={isChosen}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-2xl border-2 bg-card p-4 text-left text-card-foreground transition-all focus-visible:outline-2',

                    state === 'idle' &&
                      'border-border hover:border-primary/50 active:scale-[0.99]',

                    state === 'correct' &&
                      'border-success bg-success/10',

                    state === 'wrong' &&
                      'border-destructive bg-destructive/10',

                    state === 'dim' &&
                      'border-border opacity-55',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold',

                      state === 'correct' &&
                        'bg-success text-success-foreground',

                      state === 'wrong' &&
                        'bg-destructive text-white',

                      (state === 'idle' ||
                        state === 'dim') &&
                        'bg-muted text-muted-foreground',
                    )}
                  >
                    {state === 'correct' ? (
                      <Check
                        className="size-4"
                        aria-label="To'g'ri"
                      />
                    ) : state === 'wrong' ? (
                      <X
                        className="size-4"
                        aria-label="Noto'g'ri"
                      />
                    ) : (
                      LETTERS[i]
                    )}
                  </span>

                  <span className="text-[15px] leading-snug">
                    {option}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* EXPLANATION */}
        {locked && (
          <div
            role="status"
            className="flex gap-3 rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-secondary-foreground animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <Lightbulb
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />

            <p>
              <span className="font-semibold">
                {selected === question.answer
                  ? "To'g'ri! "
                  : "Noto'g'ri. "}
              </span>

              {question.explanation}
            </p>
          </div>
        )}
      </section>

      {/* BOTTOM BUTTON */}
      <div className="sticky bottom-0 -mx-4 bg-background/95 px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur">
        <Button
          size="lg"
          className="h-12 w-full rounded-2xl text-base"
          disabled={!locked}
          onClick={next}
        >
          {!locked
            ? 'Javobni tanlang'
            : isLast
              ? "Natijani ko'rish"
              : 'Keyingi savol'}
        </Button>
      </div>
    </div>
  )
}
