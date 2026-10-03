'use client'

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import { AIAssistant } from '@/components/ai-assistant'
import { HomeScreen } from '@/components/home-screen'
import { QuizScreen } from '@/components/quiz-screen'
import ResultScreen from '@/components/result-screen'
import { RankingScreen } from '@/components/ranking-screen'

import {
  createTopicSession,
  type AnswerRecord,
  type QuizLevel,
  type QuizResult,
  type QuizSession,
} from '@/lib/quiz'

import {
  CATEGORIES,
  PRESCHOOL_CATEGORIES,
  getModuleById,
  getTopicById,
  type Category,
} from '@/lib/quiz-data'

import { useHistory } from '@/hooks/use-history'

import {
  useBackButton,
  useTelegram,
} from '@/hooks/use-telegram'

import {
  getTelegramUser,
  setClosingConfirmation,
} from '@/lib/telegram'

/* =========================================================
   TYPES
========================================================= */

type EducationType =
  | 'preschool'
  | 'school'

type Screen =
  | 'home'
  | 'education'
  | 'modules'
  | 'topics'
  | 'levels'
  | 'quiz'
  | 'result'
  | 'ranking'
  | 'ai'

type NavigationState = {
  educationType:
    | EducationType
    | null

  moduleId: string | null

  topicId: string | null
}

const INITIAL_NAVIGATION: NavigationState = {
  educationType: null,
  moduleId: null,
  topicId: null,
}

/* =========================================================
   INTERNAL ANSWER TYPE
   =========================================================
   Biz AnswerRecord'ni quiz engine'dan olamiz.
   Hisoblash uchun esa uning real strukturasi:
   question + selected
   sifatida ishlaydi.
========================================================= */

type QuizAnswerData = {
  question: {
    id: string
    text: string
    options: string[]
    answer: number
    explanation?: string
  }
  selected: number
}

/* =========================================================
   MAIN APP
========================================================= */

export function MenejerlikApp() {
  const {
    isTelegram,
    webApp,
  } = useTelegram()

  const [screen, setScreen] =
    useState<Screen>('home')

  const [
    navigation,
    setNavigation,
  ] = useState<NavigationState>(
    INITIAL_NAVIGATION,
  )

  const [
    quizSession,
    setQuizSession,
  ] = useState<QuizSession | null>(
    null,
  )

  const [
    quizResult,
    setQuizResult,
  ] = useState<QuizResult | null>(
    null,
  )

  const [
    isFullscreen,
    setIsFullscreen,
  ] = useState(false)

  const [
    isClosingConfirmation,
    setIsClosingConfirmation,
  ] = useState(false)

  const history = useHistory()

  /* =========================================================
     TELEGRAM FULLSCREEN
  ========================================================= */

  useEffect(() => {
    if (!webApp) {
      return
    }

    try {
      webApp.ready()

      if (
        typeof webApp.expand ===
        'function'
      ) {
        webApp.expand()
      }

      if (
        typeof webApp.requestFullscreen ===
        'function'
      ) {
        webApp.requestFullscreen()
        setIsFullscreen(true)
      }
    } catch (error) {
      console.error(
        'Telegram fullscreen error:',
        error,
      )
    }
  }, [webApp])

  /* =========================================================
     FULLSCREEN EVENT
  ========================================================= */

  useEffect(() => {
    if (!webApp) {
      return
    }

    const handleFullscreenChanged =
      () => {
        try {
          if (
            typeof webApp.isFullscreen ===
            'boolean'
          ) {
            setIsFullscreen(
              webApp.isFullscreen,
            )
          }
        } catch {
          // Telegram versiyasiga bog'liq
        }
      }

    window.addEventListener(
      'fullscreenchange',
      handleFullscreenChanged,
    )

    return () => {
      window.removeEventListener(
        'fullscreenchange',
        handleFullscreenChanged,
      )
    }
  }, [webApp])

  /* =========================================================
     SCROLL
  ========================================================= */

  const scrollToTop = () => {
    if (
      typeof window ===
      'undefined'
    ) {
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /* =========================================================
     HOME
  ========================================================= */

  const goHome = () => {
    setScreen('home')

    setNavigation(
      INITIAL_NAVIGATION,
    )

    setQuizSession(null)

    setQuizResult(null)

    scrollToTop()
  }

  /* =========================================================
     RANKING
  ========================================================= */

  const openRanking = () => {
    setScreen('ranking')
    scrollToTop()
  }

  /* =========================================================
     AI
  ========================================================= */

  const openAI = () => {
    setScreen('ai')
    scrollToTop()
  }

  /* =========================================================
     CLOSE MINI APP
  ========================================================= */

  const closeMiniApp = () => {
    try {
      if (
        typeof webApp?.close ===
        'function'
      ) {
        webApp.close()
      }
    } catch (error) {
      console.error(
        'Mini App close error:',
        error,
      )
    }
  }

  /* =========================================================
     EDUCATION
  ========================================================= */

  const openEducationSelection =
    () => {
      setScreen('education')
      scrollToTop()
    }

  const selectEducation = (
    educationType: EducationType,
  ) => {
    setNavigation({
      educationType,
      moduleId: null,
      topicId: null,
    })

    setScreen('modules')

    scrollToTop()
  }

  /* =========================================================
     MODULE
  ========================================================= */

  const selectModule = (
    moduleId: string,
  ) => {
    setNavigation(
      (previous) => ({
        ...previous,
        moduleId,
        topicId: null,
      }),
    )

    setScreen('topics')

    scrollToTop()
  }

  /* =========================================================
     TOPIC
  ========================================================= */

  const selectTopic = (
    topicId: string,
  ) => {
    setNavigation(
      (previous) => ({
        ...previous,
        topicId,
      }),
    )

    setScreen('levels')

    scrollToTop()
  }

  /* =========================================================
     LEVEL
  ========================================================= */

  const selectLevel = (
    level: QuizLevel,
  ) => {
    if (
      !navigation.topicId
    ) {
      return
    }

    startQuiz(
      navigation.topicId,
      level,
    )
  }

  /* =========================================================
     START QUIZ
  ========================================================= */

  const startQuiz = (
    topicId: string,
    level: QuizLevel,
  ) => {
    try {
      const session =
        createTopicSession(
          topicId,
          level,
        )

      if (
        !session ||
        !session.questions ||
        session.questions.length ===
          0
      ) {
        console.error(
          'Test savollari topilmadi:',
          {
            topicId,
            level,
          },
        )

        return
      }

      /*
       * Yangi test boshlanganda
       * eski natijani tozalaymiz.
       */

      setQuizSession(session)

      setQuizResult(null)

      setScreen('quiz')

      scrollToTop()
    } catch (error) {
      console.error(
        'Testni boshlashda xatolik:',
        error,
      )
    }
  }

  /* =========================================================
     SAVE RESULT TO D1
  ========================================================= */

  const saveResultToDatabase =
    async ({
      correct,
      total,
      durationSec,
    }: {
      correct: number
      total: number
      durationSec: number
    }) => {
      try {
        const telegramUser =
          getTelegramUser()

        /*
         * Telegram ichidan ochilmagan holatda
         * user bo'lmasligi mumkin.
         */

        if (!telegramUser) {
          console.warn(
            'Telegram user topilmadi. D1 saqlash o‘tkazib yuborildi.',
          )

          return null
        }

        const response =
          await fetch(
            '/api/results',
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json',
              },

              body: JSON.stringify({
                telegramUser: {
                  id: telegramUser.id,

                  first_name:
                    telegramUser.first_name,

                  last_name:
                    telegramUser.last_name,

                  username:
                    telegramUser.username,
                },

                categoryId:
                  navigation.moduleId,

                topicId:
                  navigation.topicId,

                level:
                  quizSession?.level ??
                  null,

                correct,

                total,

                durationSec,
              }),
            },
          )

        if (!response.ok) {
          const errorText =
            await response.text()

          console.error(
            'D1 API xatosi:',
            response.status,
            errorText,
          )

          return null
        }

        const data =
          await response.json()

        console.log(
          '✅ Natija D1 ga saqlandi:',
          data,
        )

        return data
      } catch (error) {
        /*
         * Database xatosi test natijasini
         * bloklamaydi.
         */

        console.error(
          'D1 ga natija yuborishda xatolik:',
          error,
        )

        return null
      }
    }

  /* =========================================================
     SAVE LOCAL HISTORY
  ========================================================= */

  const saveLocalHistory =
    async ({
      correct,
      total,
      durationSec,
    }: {
      correct: number
      total: number
      durationSec: number
    }) => {
      try {
        await history.addAttempt({
          id: crypto.randomUUID(),

          categoryId:
            navigation.topicId ??
            navigation.moduleId ??
            'unknown',

          correct,

          total,

          durationSec,

          at: Date.now(),
        })
      } catch (error) {
        console.error(
          'Lokal tarixni saqlashda xatolik:',
          error,
        )
      }
    }

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
      /* -----------------------------------------------------
         1. SAVOLLAR
      ----------------------------------------------------- */

      const questions =
        quizSession.questions ?? []

      const total =
        questions.length

      if (total === 0) {
        console.error(
          'Natijani hisoblash uchun savollar mavjud emas.',
        )

        return
      }

      /* -----------------------------------------------------
         2. JAVOBLARNI REAL STRUKTURAGA O'TKAZISH
      ----------------------------------------------------- */

      const rawAnswers =
        answers as unknown as QuizAnswerData[]

      /* -----------------------------------------------------
         3. HAR BIR JAVOBNI TEKSHIRISH
      ----------------------------------------------------- */

      const checkedAnswers =
        rawAnswers.map(
          (item) => {
            const selected =
              Number.isInteger(
                item?.selected,
              )
                ? item.selected
                : -1

            const correctAnswer =
              item?.question?.answer

            const isAnswered =
              selected >= 0

            const isCorrect =
              isAnswered &&
              selected ===
                correctAnswer

            return {
              ...item,

              selected,

              isAnswered,

              isCorrect,

              isWrong:
                isAnswered &&
                !isCorrect,
            }
          },
        )

      /* -----------------------------------------------------
         4. TO'G'RI
      ----------------------------------------------------- */

      const correct =
        checkedAnswers.filter(
          (item) =>
            item.isCorrect,
        ).length

      /* -----------------------------------------------------
         5. JAVOBSIZ
      ----------------------------------------------------- */

      const unanswered =
        checkedAnswers.filter(
          (item) =>
            !item.isAnswered,
        ).length

      /* -----------------------------------------------------
         6. NOTO'G'RI
      ----------------------------------------------------- */

      const wrong =
        checkedAnswers.filter(
          (item) =>
            item.isWrong,
        ).length

      /* -----------------------------------------------------
         7. YETISHMAY QOLGAN RECORDLAR
      ----------------------------------------------------- */

      const counted =
        correct +
        wrong +
        unanswered

      const missing =
        Math.max(
          0,
          total - counted,
        )

      const finalUnanswered =
        unanswered + missing

      /* -----------------------------------------------------
         8. FOIZ
      ----------------------------------------------------- */

      const percentage =
        total > 0
          ? Math.round(
              (correct / total) *
                100,
            )
          : 0

      /* -----------------------------------------------------
         9. SCORE
      -----------------------------------------------------
         Oddiy test:
         1 to'g'ri = 1 ball.

         Daily Challenge uchun alohida
         2 ballik engine keyin ulanadi.
      ----------------------------------------------------- */

      const score = correct

      /* -----------------------------------------------------
         10. NATIJA
      ----------------------------------------------------- */

      const result = {
        ...quizSession,

        questions,

        answers:
          checkedAnswers,

        total,

        correct,

        wrong,

        percentage,

        score,

        unanswered:
          finalUnanswered,

        durationSec: 0,
      } as unknown as QuizResult

      /* -----------------------------------------------------
         11. DEBUG
      ----------------------------------------------------- */

      console.log(
        '========== TEST NATIJASI ==========',
      )

      console.table({
        total,

        correct,

        wrong,

        unanswered:
          finalUnanswered,

        percentage,

        score,
      })

      console.log(
        '===================================',
      )

      /* -----------------------------------------------------
         12. NATIJANI DARHOL KO'RSATAMIZ
      ----------------------------------------------------- */

      setQuizResult(result)

      setScreen('result')

      scrollToTop()

      /* -----------------------------------------------------
         13. SAQLASH
      ----------------------------------------------------- */

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
       * Fallback.
       *
       * Hisoblashda kutilmagan xato bo'lsa ham
       * foydalanuvchini testdan chiqarib yubormaymiz.
       */

      console.error(
        'Test natijasini hisoblashda xatolik:',
        error,
      )

      const total =
        quizSession.questions
          ?.length ?? 0

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

  /* =========================================================
     RETRY QUIZ
  ========================================================= */

  const retryQuiz = () => {
    if (
      !navigation.topicId ||
      !quizSession
    ) {
      return
    }

    const level =
      quizSession.level as QuizLevel

    startQuiz(
      navigation.topicId,
      level,
    )
  }

  /* =========================================================
     BACK
  ========================================================= */

  const goBack = () => {
    if (screen === 'home') {
      return
    }

    if (screen === 'ranking') {
      goHome()
      return
    }

    if (screen === 'ai') {
      goHome()
      return
    }

    if (screen === 'education') {
      goHome()
      return
    }

    if (screen === 'modules') {
      setScreen('education')
      scrollToTop()
      return
    }

    if (screen === 'topics') {
      setScreen('modules')
      scrollToTop()
      return
    }

    if (screen === 'levels') {
      setScreen('topics')
      scrollToTop()
      return
    }

    if (screen === 'quiz') {
      setScreen('levels')
      scrollToTop()
      return
    }

    if (screen === 'result') {
      setScreen('levels')

      setQuizResult(null)

      scrollToTop()

      return
    }
  }

  /* =========================================================
     TELEGRAM BACK BUTTON
  ========================================================= */

  useBackButton(
    screen !== 'home',
    goBack,
  )

  /* =========================================================
     CLOSE CONFIRMATION
  ========================================================= */

  useEffect(() => {
    const shouldConfirm =
      screen === 'quiz'

    setIsClosingConfirmation(
      shouldConfirm,
    )

    try {
      setClosingConfirmation(
        shouldConfirm,
      )
    } catch (error) {
      console.error(
        'Closing confirmation error:',
        error,
      )
    }

    return () => {
      try {
        setClosingConfirmation(
          false,
        )
      } catch {
        // ignore
      }
    }
  }, [screen])

  /* =========================================================
     ACTIVE CATEGORIES
  ========================================================= */

  const activeCategories =
    useMemo(() => {
      if (
        navigation.educationType ===
        'preschool'
      ) {
        return PRESCHOOL_CATEGORIES
      }

      return CATEGORIES
    }, [
      navigation.educationType,
    ])

  /* =========================================================
     ACTIVE MODULE
  ========================================================= */

  const activeModule =
    useMemo(() => {
      if (
        !navigation.moduleId
      ) {
        return undefined
      }

      return getModuleById(
        navigation.moduleId,
      )
    }, [
      navigation.moduleId,
    ])

  /* =========================================================
     ACTIVE TOPIC
  ========================================================= */

  const activeTopic =
    useMemo(() => {
      if (
        !navigation.topicId
      ) {
        return undefined
      }

      return getTopicById(
        navigation.topicId,
      )
    }, [
      navigation.topicId,
    ])

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main
      className="
        min-h-screen
        bg-background
        text-foreground
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          bg-background/95
          backdrop-blur
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-16
            max-w-3xl
            items-center
            justify-between
            px-4
          "
        >
          <button
            type="button"
            onClick={goHome}
            className="
              flex
              items-center
              gap-3
              text-left
            "
          >
            <div
              className="
                flex
                size-10
                items-center
                justify-center
                rounded-2xl
                bg-primary
                text-lg
                font-bold
                text-primary-foreground
              "
            >
              M
            </div>

            <div>
              <div className="text-sm font-bold">
                Menejerlik
              </div>

              <div className="text-[10px] text-muted-foreground">
                by Nurmuhammad
              </div>
            </div>
          </button>

          <div className="flex items-center gap-2">
            {isTelegram && (
              <span
                className="
                  hidden
                  rounded-full
                  bg-green-100
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  text-green-700
                  sm:inline-flex
                "
              >
                Telegram
              </span>
            )}

            {isFullscreen && (
              <span
                className="
                  hidden
                  rounded-full
                  bg-blue-100
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  text-blue-700
                  sm:inline-flex
                "
              >
                Fullscreen
              </span>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          mx-auto
          max-w-3xl
          px-4
          pb-10
          pt-5
        "
      >
        {/* HOME */}

        {screen === 'home' && (
          <HomeScreen
            onStart={
              openEducationSelection
            }
            onAI={openAI}
            onRanking={
              openRanking
            }
          />
        )}

        {/* RANKING */}

        {screen === 'ranking' && (
          <RankingScreen
            onBack={goBack}
          />
        )}

        {/* EDUCATION */}

        {screen === 'education' && (
          <EducationScreen
            onBack={goBack}
            onSelect={
              selectEducation
            }
          />
        )}

        {/* MODULES */}

        {screen === 'modules' && (
          <ModuleScreen
            categories={
              activeCategories
            }
            educationType={
              navigation.educationType
            }
            onBack={goBack}
            onSelect={
              selectModule
            }
          />
        )}

        {/* TOPICS */}

        {screen === 'topics' && (
          <TopicScreen
            module={activeModule}
            onBack={goBack}
            onSelect={
              selectTopic
            }
          />
        )}

        {/* LEVELS */}

        {screen === 'levels' && (
          <LevelScreen
            topic={activeTopic}
            onBack={goBack}
            onSelect={
              selectLevel
            }
          />
        )}

        {/* QUIZ */}

        {screen === 'quiz' &&
          quizSession && (
            <QuizScreen
              session={
                quizSession
              }
              showCloseButton={
                true
              }
              onFinish={
                finish
              }
              onExit={
                goBack
              }
            />
          )}

        {/* RESULT */}

        {screen === 'result' &&
          quizResult && (
            <ResultScreen
              result={
                quizResult
              }
              onRetry={
                retryQuiz
              }
              onHome={
                goHome
              }
            />
          )}

        {/* AI */}

        {screen === 'ai' && (
          <AIAssistant
            onBack={goBack}
          />
        )}
      </div>

      {/* =====================================================
          CLOSE CONFIRMATION
      ===================================================== */}

      {isClosingConfirmation && (
        <div className="sr-only">
          Test jarayoni davom etmoqda.
        </div>
      )}
    </main>
  )
}

/* =========================================================
   EDUCATION SCREEN
========================================================= */

function EducationScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void

  onSelect: (
    educationType: EducationType,
  ) => void
}) {
  return (
    <section className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="
          w-fit
          text-sm
          font-semibold
          text-muted-foreground
        "
      >
        ← Bosh sahifa
      </button>

      <div>
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
          "
        >
          YO‘NALISH
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Ta’lim yo‘nalishini tanlang
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Sizga kerakli testlar bo‘limini tanlang.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() =>
            onSelect('school')
          }
          className="
            rounded-3xl
            border
            bg-card
            p-6
            text-left
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            🏫
          </div>

          <h2 className="text-lg font-bold">
            Umumiy o‘rta ta’lim
          </h2>

          <p className="mt-2 text-sm leading-5 text-muted-foreground">
            Maktab rahbarlari va ta’lim boshqaruvi
            bo‘yicha menejerlik testlari.
          </p>
        </button>

        <button
          type="button"
          onClick={() =>
            onSelect('preschool')
          }
          className="
            rounded-3xl
            border
            bg-card
            p-6
            text-left
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
            👶
          </div>

          <h2 className="text-lg font-bold">
            Maktabgacha ta’lim
          </h2>

          <p className="mt-2 text-sm leading-5 text-muted-foreground">
            Maktabgacha ta’lim boshqaruvi va
            rahbarlik faoliyatiga oid testlar.
          </p>
        </button>
      </div>
    </section>
  )
}

/* =========================================================
   MODULE SCREEN
========================================================= */

function ModuleScreen({
  categories,
  educationType,
  onBack,
  onSelect,
}: {
  categories: Category[]

  educationType:
    | EducationType
    | null

  onBack: () => void

  onSelect: (
    moduleId: string,
  ) => void
}) {
  return (
    <section className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="
          w-fit
          text-sm
          font-semibold
          text-muted-foreground
        "
      >
        ← Yo‘nalishlar
      </button>

      <div>
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
          "
        >
          MODULLAR
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Menejerlik modullari
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {educationType ===
          'preschool'
            ? 'Maktabgacha ta’lim'
            : 'Umumiy o‘rta ta’lim'}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {categories.map(
          (
            category,
            index,
          ) => (
            <button
              key={
                category.id
              }
              type="button"
              onClick={() =>
                onSelect(
                  category.id,
                )
              }
              className="
                group
                flex
                items-center
                gap-4
                rounded-3xl
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  size-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-secondary
                  text-2xl
                "
              >
                {getModuleIcon(
                  category,
                  index,
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-bold">
                  {
                    category.title
                  }
                </h2>

                {'description' in
                  category &&
                  category.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {
                        category.description
                      }
                    </p>
                  )}
              </div>

              <span
                className="
                  text-xl
                  text-muted-foreground
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>
          ),
        )}
      </div>

      {categories.length ===
        0 && (
        <EmptyState
          icon="📚"
          title="Modullar mavjud emas"
          text="Hozircha ushbu yo‘nalishda modullar kiritilmagan."
        />
      )}
    </section>
  )
}

/* =========================================================
   TOPIC SCREEN
========================================================= */

function TopicScreen({
  module,
  onBack,
  onSelect,
}: {
  module:
    | ReturnType<
        typeof getModuleById
      >
    | undefined

  onBack: () => void

  onSelect: (
    topicId: string,
  ) => void
}) {
  const topics =
    module &&
    'topics' in module
      ? module.topics
      : []

  if (!module) {
    return (
      <section className="flex flex-col gap-5">
        <button
          type="button"
          onClick={onBack}
          className="
            w-fit
            text-sm
            font-semibold
            text-muted-foreground
          "
        >
          ← Modullar
        </button>

        <EmptyState
          icon="⚠️"
          title="Modul topilmadi"
          text="Tanlangan modul mavjud emas."
        />
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="
          w-fit
          text-sm
          font-semibold
          text-muted-foreground
        "
      >
        ← Modullar
      </button>

      <div>
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
          "
        >
          MAVZULAR
        </p>

        <h1 className="mt-2 text-2xl font-bold">
          {module.title}
        </h1>

        {'description' in
          module &&
          module.description && (
            <p className="mt-2 text-sm leading-5 text-muted-foreground">
              {
                module.description
              }
            </p>
          )}
      </div>

      <div className="flex flex-col gap-3">
        {topics.map(
          (
            topic,
            index,
          ) => (
            <button
              key={
                topic.id
              }
              type="button"
              onClick={() =>
                onSelect(
                  topic.id,
                )
              }
              className="
                group
                flex
                items-center
                gap-4
                rounded-3xl
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  size-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-secondary
                  text-sm
                  font-bold
                "
              >
                {String(
                  index + 1,
                ).padStart(
                  2,
                  '0',
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="font-bold">
                  {
                    topic.title
                  }
                </h2>

                {topic.description && (
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {
                      topic.description
                    }
                  </p>
                )}
              </div>

              <span
                className="
                  text-xl
                  text-muted-foreground
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>
          ),
        )}
      </div>

      {topics.length ===
        0 && (
        <EmptyState
          icon="📝"
          title="Mavzular mavjud emas"
          text="Bu modulga hali mavzular qo‘shilmagan."
        />
      )}
    </section>
  )
}

/* =========================================================
   LEVEL SCREEN
========================================================= */

function LevelScreen({
  topic,
  onBack,
  onSelect,
}: {
  topic:
    | ReturnType<
        typeof getTopicById
      >
    | undefined

  onBack: () => void

  onSelect: (
    level: QuizLevel,
  ) => void
}) {
  if (!topic) {
    return (
      <section className="flex flex-col gap-5">
        <button
          type="button"
          onClick={onBack}
          className="
            w-fit
            text-sm
            font-semibold
            text-muted-foreground
          "
        >
          ← Mavzular
        </button>

        <EmptyState
          icon="⚠️"
          title="Mavzu topilmadi"
          text="Tanlangan mavzu mavjud emas."
        />
      </section>
    )
  }

  const levels: Array<{
    id: QuizLevel
    icon: string
    title: string
    description: string
    questions: number
  }> = [
    {
      id: 'easy',
      icon: '🟢',
      title: 'Oson',
      description:
        'Asosiy tushunchalar va bilimlar',
      questions:
        topic.levels.easy
          .length,
    },

    {
      id: 'medium',
      icon: '🟡',
      title: 'O‘rta',
      description:
        'Amaliy qo‘llash va vaziyatlar',
      questions:
        topic.levels.medium
          .length,
    },

    {
      id: 'hard',
      icon: '🔴',
      title: 'Qiyin',
      description:
        'Tahliliy va murakkab savollar',
      questions:
        topic.levels.hard
          .length,
    },

    {
      id: 'case',
      icon: '🔵',
      title: 'Keys',
      description:
        'Real boshqaruv vaziyatlari',
      questions:
        topic.levels.case
          .length,
    },

    {
      id: 'mixed',
      icon: '🟣',
      title: 'Aralash test',
      description:
        '100 ta savoldan tasodifiy 30 ta',
      questions: 30,
    },
  ]

  return (
    <section className="flex flex-col gap-6">
      <button
        type="button"
        onClick={onBack}
        className="
          w-fit
          text-sm
          font-semibold
          text-muted-foreground
        "
      >
        ← Mavzular
      </button>

      <div>
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
          "
        >
          TEST
        </p>

        <h1 className="mt-2 text-2xl font-bold">
          {topic.title}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Test turini tanlang.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {levels.map(
          (
            level,
          ) => (
            <button
              key={
                level.id
              }
              type="button"
              onClick={() =>
                onSelect(
                  level.id,
                )
              }
              className="
                group
                flex
                items-center
                gap-4
                rounded-3xl
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition
                hover:-translate-y-0.5
                hover:shadow-lg
                active:scale-[0.99]
              "
            >
              <div
                className="
                  flex
                  size-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-secondary
                  text-2xl
                "
              >
                {
                  level.icon
                }
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="font-bold">
                    {
                      level.title
                    }
                  </h2>

                  <span
                    className="
                      rounded-full
                      bg-muted
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold
                    "
                  >
                    {
                      level.questions
                    }
                  </span>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {
                    level.description
                  }
                </p>
              </div>

              <span
                className="
                  text-xl
                  text-muted-foreground
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </button>
          ),
        )}
      </div>

      <div
        className="
          rounded-3xl
          border
          border-purple-200
          bg-purple-50
          p-5
        "
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">
            🟣
          </div>

          <div>
            <h3 className="font-bold">
              Aralash test
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Ushbu mavzudagi 100 ta savol
              ichidan har safar tasodifiy
              30 ta savol tanlanadi.
              Testni qayta boshlasangiz,
              savollar yana aralashtiriladi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   MODULE ICON
========================================================= */

function getModuleIcon(
  category: Category,
  index: number,
) {
  const icons = [
    '🎯',
    '📚',
    '👨‍💼',
    '👥',
    '📊',
    '⚖️',
    '💡',
    '🏫',
    '🌐',
    '🚀',
  ]

  if (
    'icon' in category &&
    category.icon
  ) {
    return category.icon
  }

  return icons[
    index % icons.length
  ]
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        bg-card
        px-6
        py-12
        text-center
      "
    >
      <div className="text-4xl">
        {icon}
      </div>

      <h2 className="mt-4 text-lg font-bold">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {text}
      </p>
    </div>
  )
}
