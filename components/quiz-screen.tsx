/* =========================================================
   FINISH QUIZ — PROFESSIONAL RESULT ENGINE
========================================================= */

const finish = async (
  answers: AnswerRecord[],
) => {
  if (!quizSession) {
    return
  }

  try {
    /*
     * -------------------------------------------------------
     * 1. TEST MA'LUMOTLARI
     * -------------------------------------------------------
     */

    const questions =
      quizSession.questions ?? []

    const total =
      questions.length

    if (total === 0) {
      console.error(
        'Natijani hisoblash uchun savollar topilmadi.',
      )

      return
    }

    /*
     * -------------------------------------------------------
     * 2. JAVOBLARNI NORMALIZATSIYA QILISH
     *
     * AnswerRecord:
     *
     * question  -> savol
     * selected  -> foydalanuvchi tanlagan variant
     *
     * -1 = javob berilmagan
     * -------------------------------------------------------
     */

    const normalizedAnswers =
      answers.filter(
        (item) =>
          item &&
          item.question &&
          typeof item.selected ===
            'number',
      )

    /*
     * -------------------------------------------------------
     * 3. HAR BIR JAVOBNI TEKSHIRISH
     *
     * To'g'ri javob:
     *
     * selected === question.answer
     *
     * -------------------------------------------------------
     */

    const checkedAnswers =
      normalizedAnswers.map(
        (item) => {
          const selected =
            item.selected

          const correctAnswer =
            item.question.answer

          const isAnswered =
            selected >= 0

          const isCorrect =
            isAnswered &&
            selected ===
              correctAnswer

          return {
            ...item,

            isAnswered,

            isCorrect,

            isWrong:
              isAnswered &&
              !isCorrect,
          }
        },
      )

    /*
     * -------------------------------------------------------
     * 4. TO'G'RI JAVOBLAR
     * -------------------------------------------------------
     */

    const correct =
      checkedAnswers.filter(
        (item) =>
          item.isCorrect,
      ).length

    /*
     * -------------------------------------------------------
     * 5. JAVOB BERILMAGANLAR
     * -------------------------------------------------------
     */

    const unanswered =
      checkedAnswers.filter(
        (item) =>
          !item.isAnswered,
      ).length

    /*
     * -------------------------------------------------------
     * 6. NOTO'G'RI JAVOBLAR
     *
     * Faqat javob berilgan va
     * noto'g'ri tanlangan savollar.
     *
     * Javobsiz savollar alohida hisoblanadi.
     * -------------------------------------------------------
     */

    const wrong =
      checkedAnswers.filter(
        (item) =>
          item.isWrong,
      ).length

    /*
     * -------------------------------------------------------
     * 7. XAVFSIZ HISOB
     *
     * correct + wrong + unanswered
     * hech qachon totaldan oshmasligi kerak.
     * -------------------------------------------------------
     */

    const calculatedTotal =
      correct +
      wrong +
      unanswered

    /*
     * Agar qandaydir sabab bilan
     * AnswerRecord yetishmasa,
     * qolganlarini javobsiz deb hisoblaymiz.
     */

    const missing =
      Math.max(
        0,
        total -
          calculatedTotal,
      )

    const finalUnanswered =
      unanswered + missing

    /*
     * -------------------------------------------------------
     * 8. FOIZ
     *
     * Foiz faqat to'g'ri javoblardan hisoblanadi.
     * -------------------------------------------------------
     */

    const percentage =
      total > 0
        ? Math.round(
            (correct / total) *
              100,
          )
        : 0

    /*
     * -------------------------------------------------------
     * 9. SCORE
     *
     * Hozircha har bir to'g'ri javob = 1 ball.
     *
     * Agar keyinchalik 2 ballik Challenge tizimi
     * qo'shilsa, alohida score engine ulaymiz.
     * -------------------------------------------------------
     */

    const score = correct

    /*
     * -------------------------------------------------------
     * 10. YAKUNIY ANSWERS
     *
     * ResultScreen xatolarni ko'rsatishi uchun
     * original question + selected saqlanadi.
     * -------------------------------------------------------
     */

    const finalAnswers =
      checkedAnswers

    /*
     * -------------------------------------------------------
     * 11. RESULT OBJECT
     * -------------------------------------------------------
     */

    const result = {
      ...quizSession,

      questions,

      answers:
        finalAnswers,

      total,

      correct,

      wrong:
        wrong,

      percentage,

      score,

      unanswered:
        finalUnanswered,

      /*
       * Hozir vaqt o'lchagich alohida tizimda.
       * Keyingi bosqichda haqiqiy duration ulaymiz.
       */

      durationSec: 0,
    } as unknown as QuizResult

    /*
     * -------------------------------------------------------
     * 12. CONSOLE DEBUG
     *
     * Development vaqtida natijani tekshirish uchun.
     * -------------------------------------------------------
     */

    console.log(
      '========== TEST NATIJASI ==========',
    )

    console.log({
      total,
      correct,
      wrong,
      unanswered:
        finalUnanswered,
      percentage,
      score,
      answers:
        finalAnswers,
    })

    console.log(
      '===================================',
    )

    /*
     * -------------------------------------------------------
     * 13. NATIJANI DARHOL EKRANGA CHIQARISH
     *
     * D1 ishlamay qolsa ham foydalanuvchi
     * natijasini ko'rishi kerak.
     * -------------------------------------------------------
     */

    setQuizResult(result)

    setScreen('result')

    scrollToTop()

    /*
     * -------------------------------------------------------
     * 14. DATABASE + LOCAL HISTORY
     *
     * Natija ekrani database'dan mustaqil.
     * -------------------------------------------------------
     */

    await Promise.allSettled([
      saveResultToDatabase({
        correct,

        total,

        durationSec: 0,
      }),

      saveLocalHistory({
        correct,

        total,

        durationSec: 0,
      }),
    ])
  } catch (error) {
    /*
     * -------------------------------------------------------
     * 15. XAVFSIZLIK
     *
     * Hisoblashda kutilmagan xato bo'lsa,
     * foydalanuvchi butunlay natijasiz qolmaydi.
     * -------------------------------------------------------
     */

    console.error(
      'Test natijasini hisoblashda xatolik:',
      error,
    )

    /*
     * Minimal fallback natija.
     */

    const total =
      quizSession.questions?.length ??
      0

    const fallbackResult = {
      ...quizSession,

      questions:
        quizSession.questions,

      answers,

      total,

      correct: 0,

      wrong: total,

      percentage: 0,

      score: 0,

      unanswered: 0,

      durationSec: 0,
    } as unknown as QuizResult

    setQuizResult(
      fallbackResult,
    )

    setScreen('result')

    scrollToTop()
  }
}
