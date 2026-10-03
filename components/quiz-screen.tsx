'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Clock, Lightbulb, X } from 'lucide-react'

import type { Question } from '@/lib/quiz-data'

const QUESTION_TIME = 120

export type AnswerRecord = {
  question: Question
  selected: number
}

type QuizSession = {
  questions: Question[]
  topicId?: string
  level?: string
  title?: string
  [key: string]: unknown
}

type QuizScreenProps = {
  session: QuizSession
  onFinish: (answers: AnswerRecord[]) => void
  onExit?: () => void
}

export function QuizScreen({
  session,
  onFinish,
  onExit,
}: QuizScreenProps) {
  const questions = session.questions ?? []

  const [index, setIndex] = useState(0)
  const [selected, setSelected] =
    useState<number | null>(null)

  const [timeLeft, setTimeLeft] =
    useState(QUESTION_TIME)

  const answersRef =
    useRef<AnswerRecord[]>([])

  const selectedRef =
    useRef<number | null>(null)

  const stoppedRef =
    useRef(false)

  const timerRef =
    useRef<ReturnType<typeof setInterval> | null>(null)

  const question =
    questions[index]

  /*
   * Savol mavjud bo'lmasa,
   * xavfsiz chiqamiz.
   */
  if (!question) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-6">
        <div className="text-center">
          <p className="text-lg font-semibold">
            Savollar topilmadi.
          </p>

          {onExit && (
            <button
              type="button"
              onClick={onExit}
              className="mt-4 rounded-xl px-5 py-3"
            >
              Orqaga
            </button>
          )}
        </div>
      </div>
    )
  }

  /*
   * Javobni ikkala ref va state'da saqlaymiz.
   */
  const chooseAnswer = (
    optionIndex: number,
  ) => {
    if (
      stoppedRef.current ||
      selected !== null
    ) {
      return
    }

    selectedRef.current =
      optionIndex

    setSelected(optionIndex)
  }

  /*
   * Joriy savol uchun javob yozish.
   */
  const saveCurrentAnswer = (
    selectedAnswer: number,
  ) => {
    const record: AnswerRecord = {
      question,
      selected:
        selectedAnswer,
    }

    const existingIndex =
      answersRef.current.findIndex(
        (item) =>
          item.question.id ===
          question.id,
      )

    if (existingIndex >= 0) {
      answersRef.current[
        existingIndex
      ] = record
    } else {
      answersRef.current.push(
        record,
      )
    }
  }

  /*
   * Savolni o'tkazib yuborish.
   */
  const saveUnanswered = () => {
    const record: AnswerRecord = {
      question,
      selected: -1,
    }

    const existingIndex =
      answersRef.current.findIndex(
        (item) =>
          item.question.id ===
          question.id,
      )

    if (existingIndex >= 0) {
      answersRef.current[
        existingIndex
      ] = record
    } else {
      answersRef.current.push(
        record,
      )
    }
  }

  /*
   * Keyingi savol.
   */
  const nextQuestion = () => {
    if (stoppedRef.current) {
      return
    }

    const currentSelected =
      selectedRef.current

    if (
      currentSelected !== null
    ) {
      saveCurrentAnswer(
        currentSelected,
      )
    } else {
      saveUnanswered()
    }

    /*
     * Oxirgi savol.
     */
    if (
      index >=
      questions.length - 1
    ) {
      stoppedRef.current =
        true

      if (timerRef.current) {
        clearInterval(
          timerRef.current,
        )
      }

      onFinish(
        [...answersRef.current],
      )

      return
    }

    /*
     * Keyingi savolga o'tamiz.
     */
    setIndex(
      (current) => current + 1,
    )

    selectedRef.current = null

    setSelected(null)

    setTimeLeft(
      QUESTION_TIME,
    )
  }

  /*
   * Timer.
   */
  useEffect(() => {
    if (stoppedRef.current) {
      return
    }

    if (timerRef.current) {
      clearInterval(
        timerRef.current,
      )
    }

    timerRef.current =
      setInterval(() => {
        setTimeLeft(
          (current) => {
            if (current <= 1) {
              /*
               * Vaqt tugadi.
               */
              if (
                timerRef.current
              ) {
                clearInterval(
                  timerRef.current,
                )
              }

              setTimeout(() => {
                nextQuestion()
              }, 0)

              return 0
            }

            return current - 1
          },
        )
      }, 1000)

    return () => {
      if (timerRef.current) {
        clearInterval(
          timerRef.current,
        )
      }
    }
  }, [index])

  /*
   * Timer foizi.
   */
  const timerPercentage =
    Math.max(
      0,
      Math.min(
        100,
        (timeLeft /
          QUESTION_TIME) *
          100,
      ),
    )

  const progress =
    questions.length > 0
      ? ((index + 1) /
          questions.length) *
        100
      : 0

  const isAnswered =
    selected !== null

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-10 pt-4">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-sm opacity-70">
            Savol
          </div>

          <div className="text-xl font-bold">
            {index + 1}
            <span className="mx-1 opacity-40">
              /
            </span>
            {questions.length}
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border px-4 py-2">
          <Clock
            className="h-5 w-5"
            aria-hidden="true"
          />

          <span className="font-semibold tabular-nums">
            {Math.floor(
              timeLeft / 60,
            )
              .toString()
              .padStart(2, '0')}
            :
            {(timeLeft % 60)
              .toString()
              .padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-current transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="text-xs opacity-60">
          {Math.round(progress)}% bajarildi
        </div>
      </div>

      {/* Timer progress */}
      <div className="mb-6">
        <div className="h-1 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-current transition-all"
            style={{
              width: `${timerPercentage}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="mb-3 flex items-start gap-3">
          <div className="mt-1 shrink-0">
            <Lightbulb
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-xl font-bold leading-relaxed sm:text-2xl">
            {question.text}
          </h1>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map(
          (option, i) => {
            const isSelected =
              selected === i

            const isCorrect =
              i === question.answer

            let className =
              'w-full rounded-2xl border p-4 text-left transition'

            if (!isAnswered) {
              className +=
                ' hover:opacity-80'
            }

            if (
              isAnswered &&
              isCorrect
            ) {
              className +=
                ' border-green-500 bg-green-500/10'
            }

            if (
              isAnswered &&
              isSelected &&
              !isCorrect
            ) {
              className +=
                ' border-red-500 bg-red-500/10'
            }

            return (
              <button
                key={`${question.id}-${i}`}
                type="button"
                disabled={isAnswered}
                onClick={() =>
                  chooseAnswer(i)
                }
                className={
                  className
                }
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold">
                    {String.fromCharCode(
                      65 + i,
                    )}
                  </div>

                  <div className="flex-1 pt-1">
                    {option}
                  </div>

                  {isAnswered &&
                    isCorrect && (
                      <Check
                        className="mt-1 h-5 w-5 shrink-0"
                        aria-label="To'g'ri javob"
                      />
                    )}

                  {isAnswered &&
                    isSelected &&
                    !isCorrect && (
                      <X
                        className="mt-1 h-5 w-5 shrink-0"
                        aria-label="Noto'g'ri javob"
                      />
                    )}
                </div>
              </button>
            )
          },
        )}
      </div>

      {/* Explanation */}
      {isAnswered &&
        question.explanation && (
          <div className="mt-5 rounded-2xl border p-4">
            <div className="mb-1 font-semibold">
              Izoh
            </div>

            <div className="text-sm leading-relaxed opacity-80">
              {question.explanation}
            </div>
          </div>
        )}

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        {onExit && (
          <button
            type="button"
            onClick={onExit}
            className="rounded-2xl border px-5 py-3 font-medium"
          >
            Chiqish
          </button>
        )}

        <button
          type="button"
          disabled={!isAnswered}
          onClick={nextQuestion}
          className="flex-1 rounded-2xl border px-5 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-40"
        >
          {index ===
          questions.length - 1
            ? 'Natijani ko‘rish'
            : 'Keyingi savol'}
        </button>
      </div>
    </div>
  )
}
