'use client'

import { useMemo, useState } from 'react'

type AnswerRecord = {
  questionId: string
  selectedAnswer?: number
  isCorrect: boolean
}

type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation?: string
}

type ResultScreenProps = {
  result: {
    percentage?: number
    correct?: number
    wrong?: number
    total?: number
    score?: number
    durationSec?: number
    answers?: AnswerRecord[]
    questions?: Question[]
  } | null

  onRetry: () => void
  onHome: () => void
}

export default function ResultScreen({
  result,
  onRetry,
  onHome,
}: ResultScreenProps) {
  const [showErrors, setShowErrors] = useState(false)

  /*
   * NATIJA
   */

  const total = Math.max(
    0,
    Number(result?.total ?? result?.questions?.length ?? 0),
  )

  const correct = Math.max(
    0,
    Math.min(
      total,
      Number(result?.correct ?? 0),
    ),
  )

  const wrong = Math.max(
    0,
    total - correct,
  )

  /*
   * Foizni qaytadan hisoblaymiz.
   *
   * Bu juda muhim:
   * ResultScreen faqat result.percentage ga
   * bog‘lanib qolmaydi.
   */

  const percentage =
    total > 0
      ? Math.round(
          (correct / total) * 100,
        )
      : 0

  /*
   * BALL
   *
   * Agar QuizResult ichida score mavjud bo‘lsa,
   * shuni ishlatamiz.
   *
   * Aks holda har bir to‘g‘ri javobga 1 ball.
   */

  const score =
    typeof result?.score === 'number'
      ? result.score
      : correct

  /*
   * VAQT
   */

  const durationSec = Math.max(
    0,
    Number(result?.durationSec ?? 0),
  )

  const formatDuration = (
    seconds: number,
  ) => {
    if (!seconds) {
      return '—'
    }

    const minutes = Math.floor(
      seconds / 60,
    )

    const remainingSeconds =
      seconds % 60

    return `${String(minutes).padStart(
      2,
      '0',
    )}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`
  }

  /*
   * XATO JAVOBLAR
   */

  const incorrectAnswers = useMemo(() => {
    const answers =
      result?.answers ?? []

    const questions =
      result?.questions ?? []

    return answers
      .filter(
        (answer) =>
          answer.isCorrect !== true,
      )
      .map((answer) => {
        const question =
          questions.find(
            (item) =>
              item.id ===
              answer.questionId,
          )

        return {
          answer,
          question,
        }
      })
  }, [
    result?.answers,
    result?.questions,
  ])

  /*
   * NATIJA XABARI
   */

  let message =
    'Harakatni davom ettiring!'

  let messageClass =
    'text-orange-600'

  if (percentage >= 90) {
    message =
      'Ajoyib natija!'

    messageClass =
      'text-green-600'
  } else if (
    percentage >= 70
  ) {
    message =
      'Juda yaxshi natija!'

    messageClass =
      'text-blue-600'
  } else if (
    percentage >= 50
  ) {
    message =
      'Yaxshi natija!'

    messageClass =
      'text-yellow-600'
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="bg-blue-600 px-6 py-8 text-center text-white sm:px-8">

          <div className="text-sm font-bold uppercase tracking-widest text-blue-100">
            TEST YAKUNLANDI
          </div>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Test natijasi
          </h1>

          {/* FOIZ */}

          <div className="mx-auto mt-7 flex h-40 w-40 items-center justify-center rounded-full border-8 border-white/30 bg-white/10">

            <div className="text-center">

              <div className="text-5xl font-black">
                {percentage}%
              </div>

              <div className="mt-1 text-sm font-semibold text-blue-100">
                natija
              </div>

            </div>

          </div>

          <p className="mt-5 text-lg font-bold">
            {message}
          </p>

        </div>

        {/* =====================================================
            STATISTIKA
        ===================================================== */}

        <div className="p-5 sm:p-8">

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

            {/* TO‘G‘RI */}

            <div className="rounded-2xl bg-green-50 p-4 text-center">

              <div className="text-3xl font-black text-green-600">
                {correct}
              </div>

              <div className="mt-1 text-sm font-semibold text-slate-600">
                To‘g‘ri
              </div>

            </div>

            {/* NOTO‘G‘RI */}

            <div className="rounded-2xl bg-red-50 p-4 text-center">

              <div className="text-3xl font-black text-red-600">
                {wrong}
              </div>

              <div className="mt-1 text-sm font-semibold text-slate-600">
                Noto‘g‘ri
              </div>

            </div>

            {/* JAMI */}

            <div className="rounded-2xl bg-blue-50 p-4 text-center">

              <div className="text-3xl font-black text-blue-600">
                {total}
              </div>

              <div className="mt-1 text-sm font-semibold text-slate-600">
                Jami
              </div>

            </div>

            {/* BALL */}

            <div className="rounded-2xl bg-purple-50 p-4 text-center">

              <div className="text-3xl font-black text-purple-600">
                {score}
              </div>

              <div className="mt-1 text-sm font-semibold text-slate-600">
                Ball
              </div>

            </div>

          </div>

          {/* ===================================================
              NATIJA
          =================================================== */}

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-center">

            <div className="text-sm font-semibold text-slate-500">
              Sizning natijangiz
            </div>

            <div className="mt-2 text-2xl font-black">

              <span className={messageClass}>
                {percentage}%
              </span>

              <span className="text-slate-700">
                {' '}— {correct} / {total}
              </span>

            </div>

            <div className="mt-2 text-sm text-slate-500">
              {correct} ta to‘g‘ri · {wrong} ta noto‘g‘ri
            </div>

          </div>

          {/* ===================================================
              VAQT
          =================================================== */}

          <div className="mt-4 grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-slate-200 p-4 text-center">

              <div className="text-xl">
                ⏱️
              </div>

              <div className="mt-1 text-lg font-black">
                {formatDuration(
                  durationSec,
                )}
              </div>

              <div className="text-xs text-slate-500">
                Sarflangan vaqt
              </div>

            </div>

            <div className="rounded-2xl border border-slate-200 p-4 text-center">

              <div className="text-xl">
                📊
              </div>

              <div className="mt-1 text-lg font-black">
                {percentage}%
              </div>

              <div className="text-xs text-slate-500">
                Natija
              </div>

            </div>

          </div>

          {/* ===================================================
              XATOLAR
          =================================================== */}

          {wrong > 0 && (
            <div className="mt-6">

              <button
                type="button"
                onClick={() =>
                  setShowErrors(
                    (previous) =>
                      !previous,
                  )
                }
                className="
                  flex
                  min-h-12
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-red-200
                  bg-red-50
                  px-5
                  py-3
                  text-left
                  font-bold
                  text-red-700
                  transition
                  hover:bg-red-100
                "
              >

                <span>
                  {showErrors
                    ? '▲ Xatolarni yashirish'
                    : `❌ Xatolarimni ko‘rish (${wrong})`}
                </span>

                <span>
                  {showErrors
                    ? '↑'
                    : '↓'}
                </span>

              </button>

              {showErrors && (
                <div className="mt-4 flex flex-col gap-4">

                  {incorrectAnswers.length >
                  0 ? (
                    incorrectAnswers.map(
                      (
                        item,
                        index,
                      ) => {
                        const question =
                          item.question

                        if (
                          !question
                        ) {
                          return (
                            <div
                              key={`${item.answer.questionId}-${index}`}
                              className="rounded-2xl border border-red-200 bg-red-50 p-4"
                            >
                              <div className="font-bold text-red-700">
                                {index +
                                  1}
                                -savol
                              </div>

                              <p className="mt-2 text-sm text-slate-600">
                                Savol ma’lumotlari topilmadi.
                              </p>
                            </div>
                          )
                        }

                        const selectedAnswer =
                          item.answer.selectedAnswer

                        const correctAnswer =
                          question.answer

                        return (
                          <div
                            key={`${question.id}-${index}`}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                          >

                            {/* SAVOL */}

                            <div className="flex gap-3">

                              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-black text-red-600">
                                {index +
                                  1}
                              </div>

                              <div className="min-w-0">

                                <div className="text-sm font-bold leading-6 text-slate-900">
                                  {question.text}
                                </div>

                              </div>

                            </div>

                            {/* FOYDALANUVCHI JAVOBI */}

                            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3">

                              <div className="text-xs font-bold uppercase tracking-wide text-red-600">
                                Sizning javobingiz
                              </div>

                              <div className="mt-1 text-sm font-semibold text-slate-800">

                                {typeof selectedAnswer ===
                                'number'
                                  ? question.options[
                                      selectedAnswer
                                    ] ??
                                    'Noma’lum javob'
                                  : 'Javob berilmagan'}

                              </div>

                            </div>

                            {/* TO‘G‘RI JAVOB */}

                            <div className="mt-3 rounded-xl border border-green-200 bg-green-50 p-3">

                              <div className="text-xs font-bold uppercase tracking-wide text-green-600">
                                To‘g‘ri javob
                              </div>

                              <div className="mt-1 text-sm font-semibold text-slate-800">
                                {
                                  question.options[
                                    correctAnswer
                                  ]
                                }
                              </div>

                            </div>

                            {/* IZOH */}

                            {question.explanation && (
                              <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3">

                                <div className="text-xs font-bold uppercase tracking-wide text-blue-600">
                                  Izoh
                                </div>

                                <div className="mt-1 text-sm leading-6 text-slate-700">
                                  {
                                    question.explanation
                                  }
                                </div>

                              </div>
                            )}

                          </div>
                        )
                      },
                    )
                  ) : (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm text-slate-500">
                      Xato javoblar ma’lumotlari mavjud emas.
                    </div>
                  )}

                </div>
              )}

            </div>
          )}

          {/* ===================================================
              BUTTONS
          =================================================== */}

          <div className="mt-6 flex flex-col gap-3">

            <button
              type="button"
              onClick={onRetry}
              className="
                min-h-12
                rounded-2xl
                bg-blue-600
                px-5
                py-3
                text-base
                font-bold
                text-white
                transition
                hover:bg-blue-700
                active:scale-[0.99]
              "
            >
              🔄 Qayta ishlash
            </button>

            <button
              type="button"
              onClick={onHome}
              className="
                min-h-12
                rounded-2xl
                border-2
                border-slate-200
                bg-white
                px-5
                py-3
                text-base
                font-bold
                text-slate-700
                transition
                hover:bg-slate-50
              "
            >
              🏠 Bosh sahifaga qaytish
            </button>

          </div>

        </div>

      </div>
    </main>
  )
}
