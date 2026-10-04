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
  createModuleSession,
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
  | 'school'
  | 'preschool'

type SchoolRole =
  | 'director'
  | 'deputy'
  | 'teacher'

type PreschoolRole =
  | 'director'
  | 'deputy'
  | 'pedagogue'

type RoleId =
  | SchoolRole
  | PreschoolRole

type Screen =
  | 'home'
  | 'education'
  | 'roles'
  | 'subjects'
  | 'modules'
  | 'topics'
  | 'levels'
  | 'quiz'
  | 'result'
  | 'ranking'
  | 'ai'

type QuizSource =
  | 'topic'
  | 'module'

type NavigationState = {
  educationType:
    | EducationType
    | null

  role:
    | RoleId
    | null

  moduleId:
    | string
    | null

  topicId:
    | string
    | null

  subjectId:
    | string
    | null

  quizSource:
    | QuizSource
    | null
}

const INITIAL_NAVIGATION: NavigationState = {
  educationType: null,
  role: null,
  moduleId: null,
  topicId: null,
  subjectId: null,
  quizSource: null,
}

/* =========================================================
   ANSWER TYPE
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
   SUBJECTS
========================================================= */

type Subject = {
  id: string
  icon: string
  title: string
  description: string
}

const SCHOOL_SUBJECTS: Subject[] = [
  {
    id: 'matematika',
    icon: '📐',
    title: 'Matematika',
    description:
      'Matematika fani o‘qituvchilari uchun attestatsiya testlari.',
  },
  {
    id: 'ona-tili-adabiyot',
    icon: '📖',
    title: 'Ona tili va adabiyot',
    description:
      'Ona tili va adabiyot fani bo‘yicha attestatsiyaga tayyorgarlik.',
  },
  {
    id: 'ingliz-tili',
    icon: '🇬🇧',
    title: 'Ingliz tili',
    description:
      'Ingliz tili o‘qituvchilari uchun professional testlar.',
  },
  {
    id: 'rus-tili',
    icon: '🇷🇺',
    title: 'Rus tili',
    description:
      'Rus tili fani bo‘yicha attestatsiya tayyorgarligi.',
  },
  {
    id: 'kimyo',
    icon: '🧪',
    title: 'Kimyo',
    description:
      'Kimyo fani o‘qituvchilari uchun testlar.',
  },
  {
    id: 'fizika',
    icon: '⚛️',
    title: 'Fizika',
    description:
      'Fizika fani bo‘yicha attestatsiya testlari.',
  },
  {
    id: 'biologiya',
    icon: '🧬',
    title: 'Biologiya',
    description:
      'Biologiya fani o‘qituvchilari uchun testlar.',
  },
  {
    id: 'geografiya',
    icon: '🌍',
    title: 'Geografiya',
    description:
      'Geografiya fani bo‘yicha professional tayyorgarlik.',
  },
  {
    id: 'tarix',
    icon: '📜',
    title: 'Tarix',
    description:
      'Tarix fani o‘qituvchilari uchun attestatsiya testlari.',
  },
  {
    id: 'informatika',
    icon: '💻',
    title: 'Informatika',
    description:
      'Informatika va AKT bo‘yicha testlar.',
  },
  {
    id: 'musiqa',
    icon: '🎵',
    title: 'Musiqa',
    description:
      'Musiqa fani bo‘yicha attestatsiyaga tayyorgarlik.',
  },
  {
    id: 'tasviriy-sanat',
    icon: '🎨',
    title: 'Tasviriy san’at',
    description:
      'Tasviriy san’at fani bo‘yicha testlar.',
  },
  {
    id: 'texnologiya',
    icon: '🛠️',
    title: 'Texnologiya',
    description:
      'Texnologiya fani o‘qituvchilari uchun testlar.',
  },
  {
    id: 'jismoniy-tarbiya',
    icon: '🏃',
    title: 'Jismoniy tarbiya',
    description:
      'Jismoniy tarbiya fani bo‘yicha testlar.',
  },
]

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
          // ignore
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
      ...INITIAL_NAVIGATION,
      educationType,
    })

    /*
     * MUHIM:
     *
     * Endi Maktab tanlangandan keyin
     * to‘g‘ridan-to‘g‘ri lavozimlar chiqadi.
     *
     * Eski:
     *
     * Maktab → Modullar
     *
     * yo‘q.
     */

    setScreen('roles')

    scrollToTop()
  }

  /* =========================================================
     ROLE
  ========================================================= */

  const selectRole = (
    role: RoleId,
  ) => {
    setNavigation(
      (previous) => ({
        ...previous,

        role,

        moduleId: null,

        topicId: null,

        subjectId: null,

        quizSource: null,
      }),
    )

    if (
      navigation.educationType ===
      'school'
    ) {
      if (
        role === 'teacher'
      ) {
        setScreen('subjects')
      } else {
        setScreen('modules')
      }
    } else {
      if (
        role === 'pedagogue'
      ) {
        setScreen('subjects')
      } else {
        setScreen('modules')
      }
    }

    scrollToTop()
  }

  /* =========================================================
     SUBJECT
  ========================================================= */

  const selectSubject = (
    subjectId: string,
  ) => {
    setNavigation(
      (previous) => ({
        ...previous,
        subjectId,
      }),
    )

    /*
     * Hozircha fan savol banklari
     * quiz-data.ts ga kiritilmagan.
     *
     * Shuning uchun uydirma test
     * boshlamaymiz.
     */

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

        quizSource: null,
      }),
    )

    setScreen('topics')

    scrollToTop()
  }

  /* =========================================================
     MODULE MIXED
  ========================================================= */

  const startModuleMixed = (
    moduleId: string,
  ) => {
    try {
      const session =
        createModuleSession(
          moduleId,
        )

      if (
        !session.questions ||
        session.questions.length ===
          0
      ) {
        console.error(
          'Modul bo‘yicha savollar topilmadi:',
          moduleId,
        )

        return
      }

      setNavigation(
        (previous) => ({
          ...previous,

          moduleId,

          topicId: null,

          quizSource: 'module',
        }),
      )

      setQuizSession(session)

      setQuizResult(null)

      setScreen('quiz')

      scrollToTop()
    } catch (error) {
      console.error(
        'Modul aralash testini boshlashda xatolik:',
        error,
      )
    }
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

        quizSource: null,
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

    startTopicQuiz(
      navigation.topicId,
      level,
    )
  }

  /* =========================================================
     TOPIC QUIZ
  ========================================================= */

  const startTopicQuiz = (
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

      setNavigation(
        (previous) => ({
          ...previous,

          topicId,

          quizSource: 'topic',
        }),
      )

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

        if (!telegramUser) {
          console.warn(
            'Telegram user topilmadi.',
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

        return await response.json()
      } catch (error) {
        console.error(
          'D1 ga natija yuborishda xatolik:',
          error,
        )

        return null
      }
    }

  /* =========================================================
     LOCAL HISTORY
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
            navigation.subjectId ??
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
     FINISH
  ========================================================= */

  const finish = async (
    answers: AnswerRecord[],
  ) => {
    if (!quizSession) {
      return
    }

    try {
      const questions =
        quizSession.questions ?? []

      const total =
        questions.length

      if (total === 0) {
        return
      }

      const rawAnswers =
        answers as unknown as QuizAnswerData[]

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

      const correct =
        checkedAnswers.filter(
          (item) =>
            item.isCorrect,
        ).length

      const unanswered =
        checkedAnswers.filter(
          (item) =>
            !item.isAnswered,
        ).length

      const wrong =
        checkedAnswers.filter(
          (item) =>
            item.isWrong,
        ).length

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

      const percentage =
        total > 0
          ? Math.round(
              (correct / total) *
                100,
            )
          : 0

      const result = {
        ...quizSession,

        questions,

        answers:
          checkedAnswers,

        total,

        correct,

        wrong,

        percentage,

        score: correct,

        unanswered:
          finalUnanswered,

        durationSec: 0,
      } as unknown as QuizResult

      setQuizResult(result)

      setScreen('result')

      scrollToTop()

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
     RETRY
  ========================================================= */

  const retryQuiz = () => {
    if (
      !quizSession
    ) {
      return
    }

    if (
      navigation.quizSource ===
        'module' &&
      navigation.moduleId
    ) {
      startModuleMixed(
        navigation.moduleId,
      )

      return
    }

    if (
      navigation.quizSource ===
        'topic' &&
      navigation.topicId
    ) {
      startTopicQuiz(
        navigation.topicId,
        quizSession.level,
      )
    }
  }

  /* =========================================================
     BACK
  ========================================================= */

  const goBack = () => {
    if (
      screen === 'home'
    ) {
      return
    }

    if (
      screen === 'ranking' ||
      screen === 'ai'
    ) {
      goHome()
      return
    }

    if (
      screen === 'education'
    ) {
      goHome()
      return
    }

    if (
      screen === 'roles'
    ) {
      setScreen('education')
      scrollToTop()
      return
    }

    if (
      screen === 'subjects'
    ) {
      setScreen('roles')
      scrollToTop()
      return
    }

    if (
      screen === 'modules'
    ) {
      setScreen('roles')
      scrollToTop()
      return
    }

    if (
      screen === 'topics'
    ) {
      setScreen('modules')
      scrollToTop()
      return
    }

    if (
      screen === 'levels'
    ) {
      setScreen('topics')
      scrollToTop()
      return
    }

    if (
      screen === 'quiz'
    ) {
      if (
        navigation.quizSource ===
        'module'
      ) {
        setScreen('topics')
      } else {
        setScreen('levels')
      }

      scrollToTop()
      return
    }

    if (
      screen === 'result'
    ) {
      if (
        navigation.quizSource ===
        'module'
      ) {
        setScreen('topics')
      } else {
        setScreen('levels')
      }

      setQuizResult(null)

      scrollToTop()
    }
  }

  /* =========================================================
     TELEGRAM BACK
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
      {/* HEADER */}

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
                MENEJERLIK
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

      {/* CONTENT */}

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
            onSelectEducation={
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

        {/* AI */}

        {screen === 'ai' && (
          <AIAssistant
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

        {/* ROLES */}

        {screen === 'roles' && (
          <RoleScreen
            educationType={
              navigation.educationType
            }
            onBack={goBack}
            onSelect={
              selectRole
            }
          />
        )}

        {/* SUBJECTS */}

        {screen === 'subjects' && (
          <SubjectScreen
            educationType={
              navigation.educationType
            }
            subjects={
              navigation.educationType ===
              'school'
                ? SCHOOL_SUBJECTS
                : []
            }
            selectedSubjectId={
              navigation.subjectId
            }
            onBack={goBack}
            onSelect={
              selectSubject
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
            role={
              navigation.role
            }
            onBack={goBack}
            onSelect={
              selectModule
            }
            onMixed={
              startModuleMixed
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
      </div>

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
      <BackButton
        onClick={onBack}
        text="Bosh sahifa"
      />

      <div>
        <Eyebrow>
          TA’LIM YO‘NALISHI
        </Eyebrow>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Qaysi yo‘nalishda
          tayyorlanasiz?
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Attestatsiya va professional
          rivojlanish uchun yo‘nalishingizni
          tanlang.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <EducationCardNew
          icon="🏫"
          title="MAKTAB"
          subtitle="Umumiy o‘rta ta’lim"
          description="Maktab direktori, direktor o‘rinbosari va fan o‘qituvchilari."
          onClick={() =>
            onSelect('school')
          }
        />

        <EducationCardNew
          icon="🧸"
          title="MAKTABGACHA TA’LIM"
          subtitle="Maktabgacha ta’lim"
          description="Maktabgacha ta’lim rahbarlari va pedagoglari."
          onClick={() =>
            onSelect('preschool')
          }
        />
      </div>
    </section>
  )
}

/* =========================================================
   ROLE SCREEN
========================================================= */

function RoleScreen({
  educationType,
  onBack,
  onSelect,
}: {
  educationType:
    | EducationType
    | null

  onBack: () => void

  onSelect: (
    role: RoleId,
  ) => void
}) {
  const isSchool =
    educationType ===
    'school'

  const roles = isSchool
    ? [
        {
          id: 'director' as RoleId,
          icon: '👨‍💼',
          title: 'Maktab direktori',
          description:
            'Maktab rahbari uchun menejerlik va attestatsiya tayyorgarligi.',
          badge: 'RAHBAR',
        },
        {
          id: 'deputy' as RoleId,
          icon: '👨‍💼',
          title:
            'Direktor o‘rinbosari',
          description:
            'O‘quv, tarbiyaviy va boshqaruv faoliyati bo‘yicha tayyorgarlik.',
          badge: 'RAHBAR',
        },
        {
          id: 'teacher' as RoleId,
          icon: '👨‍🏫',
          title:
            'Fan o‘qituvchilari',
          description:
            'Fanlar kesimida attestatsiya testlari va pedagogik mahorat.',
          badge: 'PEDAGOG',
        },
      ]
    : [
        {
          id: 'director' as RoleId,
          icon: '👩‍💼',
          title:
            'Direktor / mudir',
          description:
            'Maktabgacha ta’lim tashkiloti rahbari uchun menejerlik tayyorgarligi.',
          badge: 'RAHBAR',
        },
        {
          id: 'deputy' as RoleId,
          icon: '👩‍💼',
          title:
            'Direktor o‘rinbosari',
          description:
            'Boshqaruv va ta’lim jarayonini tashkil etish bo‘yicha tayyorgarlik.',
          badge: 'RAHBAR',
        },
        {
          id: 'pedagogue' as RoleId,
          icon: '👩‍🏫',
          title: 'Pedagoglar',
          description:
            'Tarbiyachi va mutaxassis pedagoglar uchun attestatsiya tayyorgarligi.',
          badge: 'PEDAGOG',
        },
      ]

  return (
    <section className="flex flex-col gap-6">
      <BackButton
        onClick={onBack}
        text="Yo‘nalishlar"
      />

      <div>
        <Eyebrow>
          {isSchool
            ? 'MAKTAB'
            : 'MAKTABGACHA TA’LIM'}
        </Eyebrow>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Lavozimingizni tanlang
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Sizga tegishli attestatsiya
          tayyorgarligi yo‘nalishini tanlang.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {roles.map(
          (role) => (
            <button
              key={role.id}
              type="button"
              onClick={() =>
                onSelect(
                  role.id,
                )
              }
              className="
                group
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-xl
                active:scale-[0.99]
              "
            >
              <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/5 transition-transform group-hover:scale-125" />

              <div className="relative flex items-center gap-4">
                <div
                  className="
                    flex
                    size-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-secondary
                    text-3xl
                  "
                >
                  {role.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-primary/10
                      px-2.5
                      py-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-primary
                    "
                  >
                    {role.badge}
                  </span>

                  <h2 className="mt-2 text-lg font-bold">
                    {role.title}
                  </h2>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {role.description}
                  </p>
                </div>

                <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </button>
          ),
        )}
      </div>

      <div className="rounded-3xl border bg-muted/40 p-5">
        <div className="flex items-start gap-3">
          <div className="text-2xl">
            🎯
          </div>

          <div>
            <p className="font-bold">
              Attestatsiyaga tayyorgarlik
            </p>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Har bir lavozim uchun testlar
              tegishli kasbiy kompetensiyalar
              asosida shakllantiriladi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   SUBJECT SCREEN
========================================================= */

function SubjectScreen({
  educationType,
  subjects,
  selectedSubjectId,
  onBack,
  onSelect,
}: {
  educationType:
    | EducationType
    | null

  subjects: Subject[]

  selectedSubjectId:
    | string
    | null

  onBack: () => void

  onSelect: (
    subjectId: string,
  ) => void
}) {
  const isSchool =
    educationType ===
    'school'

  const preschoolRoles = [
    {
      icon: '👩‍🏫',
      title: 'Tarbiyachi',
    },
    {
      icon: '🎵',
      title: 'Musiqa rahbari',
    },
    {
      icon: '🗣️',
      title: 'Logoped',
    },
    {
      icon: '🧠',
      title: 'Psixolog',
    },
    {
      icon: '🏃',
      title:
        'Jismoniy tarbiya yo‘riqchisi',
    },
  ]

  return (
    <section className="flex flex-col gap-6">
      <BackButton
        onClick={onBack}
        text="Lavozimlar"
      />

      <div>
        <Eyebrow>
          {isSchool
            ? 'FAN O‘QITUVCHILARI'
            : 'PEDAGOGLAR'}
        </Eyebrow>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {isSchool
            ? 'Fanni tanlang'
            : 'Pedagogik yo‘nalishni tanlang'}
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Attestatsiya testlari fan yoki
          pedagogik faoliyat yo‘nalishi
          bo‘yicha tashkil etiladi.
        </p>
      </div>

      {isSchool ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {subjects.map(
            (subject) => {
              const active =
                selectedSubjectId ===
                subject.id

              return (
                <button
                  key={
                    subject.id
                  }
                  type="button"
                  onClick={() =>
                    onSelect(
                      subject.id,
                    )
                  }
                  className={`
                    group
                    rounded-3xl
                    border
                    bg-card
                    p-5
                    text-left
                    shadow-sm
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-lg
                    ${
                      active
                        ? 'border-primary ring-2 ring-primary/10'
                        : ''
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
                      {
                        subject.icon
                      }
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="font-bold">
                        {
                          subject.title
                        }
                      </h2>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {
                          subject.description
                        }
                      </p>
                    </div>

                    <span className="text-lg text-muted-foreground">
                      →
                    </span>
                  </div>

                  {active && (
                    <div className="mt-4 rounded-2xl bg-muted/50 p-3">
                      <p className="text-xs font-semibold text-primary">
                        Test bazasi
                      </p>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        Savollar bazasi keyingi
                        bosqichda ushbu fan uchun
                        ulanadi.
                      </p>
                    </div>
                  )}
                </button>
              )
            },
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {preschoolRoles.map(
            (item) => (
              <button
                key={
                  item.title
                }
                type="button"
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
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
                  {
                    item.icon
                  }
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-bold">
                    {
                      item.title
                    }
                  </h2>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Attestatsiyaga
                    tayyorgarlik
                  </p>
                </div>

                <span className="text-lg text-muted-foreground">
                  →
                </span>
              </button>
            ),
          )}
        </div>
      )}

      <div className="rounded-3xl border border-dashed bg-muted/30 p-5">
        <p className="font-bold">
          🧠 Test tizimi
        </p>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Fan va pedagogik yo‘nalishlar
          uchun alohida savollar bazasi
          shakllantiriladi:
          Oson · O‘rta · Qiyin ·
          Pedagogik mahorat · Aralash.
        </p>
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
  role,
  onBack,
  onSelect,
  onMixed,
}: {
  categories: Category[]

  educationType:
    | EducationType
    | null

  role:
    | RoleId
    | null

  onBack: () => void

  onSelect: (
    moduleId: string,
  ) => void

  onMixed: (
    moduleId: string,
  ) => void
}) {
  const roleTitle =
    role === 'director'
      ? 'Rahbar'
      : role === 'deputy'
        ? 'Direktor o‘rinbosari'
        : ''

  return (
    <section className="flex flex-col gap-6">
      <BackButton
        onClick={onBack}
        text="Lavozimlar"
      />

      <div>
        <Eyebrow>
          {educationType ===
          'preschool'
            ? 'MAKTABGACHA TA’LIM'
            : 'MAKTAB'}
        </Eyebrow>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Menejerlik modullari
        </h1>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {roleTitle
            ? `${roleTitle} uchun attestatsiya va menejerlik tayyorgarligi.`
            : 'Boshqaruv kompetensiyalari bo‘yicha tayyorgarlik.'}
        </p>
      </div>

      {/* MODULE MIXED */}

      <div className="rounded-[1.75rem] bg-primary p-5 text-primary-foreground shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl">
            🔀
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
              TEZKOR TAYYORLANISH
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Aralash test
            </h2>

            <p className="mt-1 text-sm leading-5 text-primary-foreground/75">
              Modul ichidagi mavzulardan
              tasodifiy 30 ta savol.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-primary-foreground/70">
          Aralash testni modul ichidan
          alohida boshlash uchun avval
          modulni tanlang.
        </p>
      </div>

      {/* MODULES */}

      <div className="flex flex-col gap-3">
        {categories.map(
          (
            category,
            index,
          ) => (
            <div
              key={
                category.id
              }
              className="
                overflow-hidden
                rounded-3xl
                border
                bg-card
                shadow-sm
              "
            >
              <button
                type="button"
                onClick={() =>
                  onSelect(
                    category.id,
                  )
                }
                className="
                  group
                  flex
                  w-full
                  items-center
                  gap-4
                  p-5
                  text-left
                  transition
                  hover:bg-muted/30
                "
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
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
                      <p className="mt-1 text-sm leading-5 text-muted-foreground">
                        {
                          category.description
                        }
                      </p>
                    )}
                </div>

                <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onMixed(
                    category.id,
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  border-t
                  bg-muted/30
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  transition
                  hover:bg-muted/50
                "
              >
                <span>
                  🔀 Shu modul bo‘yicha
                  aralash test
                </span>

                <span className="text-primary">
                  30 ta →
                </span>
              </button>
            </div>
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
        <BackButton
          onClick={onBack}
          text="Modullar"
        />

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
      <BackButton
        onClick={onBack}
        text="Modullar"
      />

      <div>
        <Eyebrow>
          MAVZULAR
        </Eyebrow>

        <h1 className="mt-2 text-2xl font-bold">
          {module.title}
        </h1>

        {'description' in
          module &&
          module.description && (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-sm font-bold">
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

                <div className="mt-2 flex flex-wrap gap-1.5">
                  <MiniBadge>
                    🟢 Oson
                  </MiniBadge>

                  <MiniBadge>
                    🟡 O‘rta
                  </MiniBadge>

                  <MiniBadge>
                    🔴 Qiyin
                  </MiniBadge>

                  <MiniBadge>
                    🔵 Keys
                  </MiniBadge>

                  <MiniBadge>
                    🟣 Aralash
                  </MiniBadge>
                </div>
              </div>

              <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
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
        <BackButton
          onClick={onBack}
          text="Mavzular"
        />

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
        topic.levels.easy.length,
    },
    {
      id: 'medium',
      icon: '🟡',
      title: 'O‘rta',
      description:
        'Amaliy qo‘llash va vaziyatlar',
      questions:
        topic.levels.medium.length,
    },
    {
      id: 'hard',
      icon: '🔴',
      title: 'Qiyin',
      description:
        'Tahliliy va murakkab savollar',
      questions:
        topic.levels.hard.length,
    },
    {
      id: 'case',
      icon: '🔵',
      title: 'Keys',
      description:
        'Real boshqaruv vaziyatlari',
      questions:
        topic.levels.case.length,
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
      <BackButton
        onClick={onBack}
        text="Mavzular"
      />

      <div>
        <Eyebrow>
          TEST TURINI TANLANG
        </Eyebrow>

        <h1 className="mt-2 text-2xl font-bold">
          {topic.title}
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Attestatsiyaga tayyorgarlik
          darajasini tanlang.
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
              disabled={
                level.questions ===
                  0 &&
                level.id !==
                  'mixed'
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
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
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

                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold">
                    {
                      level.questions
                    }
                  </span>
                </div>

                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {
                    level.description
                  }
                </p>
              </div>

              <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          ),
        )}
      </div>

      <div className="rounded-3xl border border-purple-200 bg-purple-50 p-5">
        <div className="flex items-start gap-3">
          <div className="text-2xl">
            🟣
          </div>

          <div>
            <h3 className="font-bold">
              Aralash test qanday ishlaydi?
            </h3>

            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Oson, o‘rta, qiyin va keys
              savollaridan foydalanib,
              har safar tasodifiy 30 ta
              savol shakllantiriladi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function BackButton({
  onClick,
  text,
}: {
  onClick: () => void
  text: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-fit
        text-sm
        font-semibold
        text-muted-foreground
        transition
        hover:text-foreground
      "
    >
      ← {text}
    </button>
  )
}

function Eyebrow({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p
      className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-primary
      "
    >
      {children}
    </p>
  )
}

function MiniBadge({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-semibold text-muted-foreground">
      {children}
    </span>
  )
}

function EducationCardNew({
  icon,
  title,
  subtitle,
  description,
  onClick,
}: {
  icon: string
  title: string
  subtitle: string
  description: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.75rem]
        border
        bg-card
        p-6
        text-left
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
        active:scale-[0.99]
      "
    >
      <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/5 transition-transform group-hover:scale-125" />

      <div className="relative">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-3xl">
          {icon}
        </div>

        <span className="mt-5 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary">
          {subtitle}
        </span>

        <h2 className="mt-3 text-xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm font-semibold">
          <span>
            Boshlash
          </span>

          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </button>
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
    index %
      icons.length
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
