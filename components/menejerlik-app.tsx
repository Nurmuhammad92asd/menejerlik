'use client'

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import { AIAssistant } from '@/components/ai-assistant'
import { HomeScreen } from '@/components/home-screen'
import { QuizScreen } from '@/components/quiz-screen'
import ResultScreen from '@/components/result-screen'
import { RankingScreen } from '@/components/ranking-screen'
import StudentAcademy from '@/components/student-academy'
import PisaAcademy from '@/components/pisa/pisa-academy'

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
  | 'student-academy'
  | 'pisa'
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
   QUIZ ANSWER TYPE
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
   SUBJECT TYPE
========================================================= */

type Subject = {
  id: string
  icon: string
  title: string
  description: string
}

/* =========================================================
   SCHOOL SUBJECTS
========================================================= */

const SCHOOL_SUBJECTS: Subject[] = [
  {
    id: 'matematika',
    icon: '📐',
    title: 'Matematika',
    description:
      'Matematika fani o‘qituvchilari uchun professional testlar.',
  },
  {
    id: 'ona-tili-adabiyot',
    icon: '📖',
    title: 'Ona tili va adabiyot',
    description:
      'Ona tili va adabiyot bo‘yicha attestatsiyaga tayyorgarlik.',
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
      'Rus tili bo‘yicha attestatsiyaga tayyorgarlik.',
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
      'Fizika bo‘yicha professional tayyorgarlik.',
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
      'Geografiya bo‘yicha professional tayyorgarlik.',
  },
  {
    id: 'tarix',
    icon: '📜',
    title: 'Tarix',
    description:
      'Tarix fani bo‘yicha attestatsiya testlari.',
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
      'Musiqa fani bo‘yicha professional tayyorgarlik.',
  },
  {
    id: 'tasviriy-sanat',
    icon: '🎨',
    title: 'Tasviriy san’at',
    description:
      'Tasviriy san’at bo‘yicha testlar.',
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
      'Jismoniy tarbiya bo‘yicha testlar.',
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

  const [navigation, setNavigation] =
    useState<NavigationState>(
      INITIAL_NAVIGATION,
    )

  const [quizSession, setQuizSession] =
    useState<QuizSession | null>(null)

  const [quizResult, setQuizResult] =
    useState<QuizResult | null>(null)

  const [isFullscreen, setIsFullscreen] =
    useState(false)

  const [
    isClosingConfirmation,
    setIsClosingConfirmation,
  ] = useState(false)

  const history = useHistory()

  /* =======================================================
     TELEGRAM INITIALIZATION
  ======================================================= */

  useEffect(() => {
    if (!webApp) return

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
        '[Telegram] initialization error:',
        error,
      )
    }
  }, [webApp])

  /* =======================================================
     FULLSCREEN STATE
  ======================================================= */

  useEffect(() => {
    if (!webApp) return

    const handleFullscreen = () => {
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
        // Telegram API may not support it
      }
    }

    window.addEventListener(
      'fullscreenchange',
      handleFullscreen,
    )

    return () => {
      window.removeEventListener(
        'fullscreenchange',
        handleFullscreen,
      )
    }
  }, [webApp])

  /* =======================================================
     SCROLL
  ======================================================= */

  const scrollToTop = () => {
    if (
      typeof window === 'undefined'
    ) {
      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /* =======================================================
     HOME
  ======================================================= */

  const goHome = () => {
    setScreen('home')
    setNavigation(
      INITIAL_NAVIGATION,
    )
    setQuizSession(null)
    setQuizResult(null)

    scrollToTop()
  }

  /* =======================================================
     STUDENT ACADEMY
  ======================================================= */

  const openStudentAcademy = () => {
    setQuizSession(null)
    setQuizResult(null)

    setNavigation(
      INITIAL_NAVIGATION,
    )

    setScreen(
      'student-academy',
    )

    scrollToTop()
  }

  /* =======================================================
     PISA
  ======================================================= */

  const openPisaAcademy = () => {
    setQuizSession(null)
    setQuizResult(null)

    setNavigation(
      INITIAL_NAVIGATION,
    )

    setScreen('pisa')

    scrollToTop()
  }

  /* =======================================================
     RANKING
  ======================================================= */

  const openRanking = () => {
    setScreen('ranking')
    scrollToTop()
  }

  /* =======================================================
     AI
  ======================================================= */

  const openAI = () => {
    setScreen('ai')
    scrollToTop()
  }

  /* =======================================================
     PROFESSIONAL ACADEMY
  ======================================================= */

  const openEducationSelection = () => {
    setQuizSession(null)
    setQuizResult(null)

    setNavigation(
      INITIAL_NAVIGATION,
    )

    setScreen('education')

    scrollToTop()
  }

  /* =======================================================
     EDUCATION
  ======================================================= */

  const selectEducation = (
    educationType: EducationType,
  ) => {
    setNavigation({
      ...INITIAL_NAVIGATION,
      educationType,
    })

    setScreen('roles')
    scrollToTop()
  }

  /* =======================================================
     ROLE
  ======================================================= */

  const selectRole = (
    role: RoleId,
  ) => {
    const educationType =
      navigation.educationType

    setNavigation(
      previous => ({
        ...previous,
        role,
        moduleId: null,
        topicId: null,
        subjectId: null,
        quizSource: null,
      }),
    )

    if (
      educationType === 'school'
    ) {
      if (role === 'teacher') {
        setScreen('subjects')
      } else {
        setScreen('modules')
      }
    } else {
      if (role === 'pedagogue') {
        setScreen('subjects')
      } else {
        setScreen('modules')
      }
    }

    scrollToTop()
  }

  /* =======================================================
     SUBJECT
  ======================================================= */

  const selectSubject = (
    subjectId: string,
  ) => {
    setNavigation(
      previous => ({
        ...previous,
        subjectId,
      }),
    )

    scrollToTop()
  }

  /* =======================================================
     MODULE
  ======================================================= */

  const selectModule = (
    moduleId: string,
  ) => {
    setNavigation(
      previous => ({
        ...previous,
        moduleId,
        topicId: null,
        quizSource: null,
      }),
    )

    setScreen('topics')
    scrollToTop()
  }

  /* =======================================================
     MODULE MIXED TEST
  ======================================================= */

  const startModuleMixed = (
    moduleId: string,
  ) => {
    try {
      const session =
        createModuleSession(
          moduleId,
        )

      if (
        !session?.questions?.length
      ) {
        console.error(
          '[Quiz] Module questions not found:',
          moduleId,
        )
        return
      }

      setNavigation(
        previous => ({
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
        '[Quiz] Module mixed error:',
        error,
      )
    }
  }

  /* =======================================================
     TOPIC
  ======================================================= */

  const selectTopic = (
    topicId: string,
  ) => {
    setNavigation(
      previous => ({
        ...previous,
        topicId,
        quizSource: null,
      }),
    )

    setScreen('levels')
    scrollToTop()
  }

  /* =======================================================
     LEVEL
  ======================================================= */

  const selectLevel = (
    level: QuizLevel,
  ) => {
    if (!navigation.topicId) {
      return
    }

    startTopicQuiz(
      navigation.topicId,
      level,
    )
  }

  /* =======================================================
     START TOPIC QUIZ
  ======================================================= */

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
        !session?.questions?.length
      ) {
        console.error(
          '[Quiz] Questions not found:',
          {
            topicId,
            level,
          },
        )
        return
      }

      setNavigation(
        previous => ({
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
        '[Quiz] Start error:',
        error,
      )
    }
  }

  /* =======================================================
     SAVE RESULT TO D1
  ======================================================= */

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
          console.error(
            '[D1] Result save failed:',
            response.status,
          )

          return null
        }

        return await response.json()
      } catch (error) {
        console.error(
          '[D1] Save result error:',
          error,
        )

        return null
      }
    }

  /* =======================================================
     SAVE LOCAL HISTORY
  ======================================================= */

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
          '[History] Save error:',
          error,
        )
      }
    }

  /* =======================================================
     FINISH QUIZ
  ======================================================= */

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
          item => {
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
          item =>
            item.isCorrect,
        ).length

      const unanswered =
        checkedAnswers.filter(
          item =>
            !item.isAnswered,
        ).length

      const wrong =
        checkedAnswers.filter(
          item =>
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
              (correct /
                total) *
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
        '[Quiz] Result calculation error:',
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

  /* =======================================================
     RETRY
  ======================================================= */

  const retryQuiz = () => {
    if (!quizSession) {
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

  /* =======================================================
     BACK NAVIGATION
  ======================================================= */

  const goBack = () => {
    switch (screen) {
      case 'home':
        return

      case 'pisa':
        setScreen(
          'student-academy',
        )
        scrollToTop()
        return

      case 'student-academy':
        goHome()
        return

      case 'ranking':
      case 'ai':
      case 'education':
        goHome()
        return

      case 'roles':
        setScreen('education')
        scrollToTop()
        return

      case 'subjects':
        setScreen('roles')
        scrollToTop()
        return

      case 'modules':
        setScreen('roles')
        scrollToTop()
        return

      case 'topics':
        setScreen('modules')
        scrollToTop()
        return

      case 'levels':
        setScreen('topics')
        scrollToTop()
        return

      case 'quiz':
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

      case 'result':
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
        return
    }
  }

  /* =======================================================
     TELEGRAM BACK BUTTON
  ======================================================= */

  useBackButton(
    screen !== 'home',
    goBack,
  )

  /* =======================================================
     CLOSE CONFIRMATION
  ======================================================= */

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
        '[Telegram] Closing confirmation:',
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

  /* =======================================================
     ACTIVE CATEGORIES
  ======================================================= */

  const activeCategories =
    useMemo(() => {
      return navigation.educationType ===
        'preschool'
        ? PRESCHOOL_CATEGORIES
        : CATEGORIES
    }, [
      navigation.educationType,
    ])

  /* =======================================================
     ACTIVE MODULE
  ======================================================= */

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

  /* =======================================================
     ACTIVE TOPIC
  ======================================================= */

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

  /* =======================================================
     GLOBAL HEADER
  ======================================================= */

  return (
    <main
      className="
        min-h-screen
        bg-[#f6f8fc]
        text-slate-950
        dark:bg-background
        dark:text-foreground
      "
    >
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-slate-200/80
          bg-white/90
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-background/90
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[68px]
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
              group
              flex
              items-center
              gap-3
              text-left
            "
          >
            <div
              className="
                relative
                flex
                size-10
                items-center
                justify-center
                rounded-[14px]
                bg-gradient-to-br
                from-blue-700
                via-blue-800
                to-slate-950
                text-sm
                font-black
                text-white
                shadow-lg
                shadow-blue-900/20
                transition
                group-hover:scale-105
              "
            >
              M

              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  size-2.5
                  rounded-full
                  border-2
                  border-white
                  bg-amber-400
                  dark:border-background
                "
              />
            </div>

            <div className="leading-none">
              <div
                className="
                  text-[13px]
                  font-black
                  tracking-tight
                "
              >
                MENEJERLIK
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-blue-700
                "
              >
                by Nurmuhammad
              </div>
            </div>
          </button>

          <div className="flex items-center gap-2">
            {isTelegram && (
              <StatusBadge
                dot="green"
                text="Telegram"
              />
            )}

            {isFullscreen && (
              <StatusBadge
                dot="blue"
                text="Fullscreen"
              />
            )}
          </div>
        </div>
      </header>

      <div
        className="
          mx-auto
          max-w-3xl
          px-4
          pb-12
          pt-5
        "
      >
        {/* =================================================
            HOME
        ================================================= */}

        {screen === 'home' && (
          <HomeScreen
            user={getTelegramUser()}
            history={
              history.attempts
            }
            stats={{
              count:
                history.stats.count,

              average:
                history.stats.average,

              best:
                history.stats.best,
            }}
            bestByCategory={
              history.bestByCategory
            }
            onSelectEducation={
              openEducationSelection
            }
            onStudentAcademy={
              openStudentAcademy
            }
            onAI={openAI}
            onRanking={
              openRanking
            }
          />
        )}

        {/* =================================================
            STUDENT ACADEMY
        ================================================= */}

        {screen ===
          'student-academy' && (
         <StudentAcademy
  onBack={goBack}
  onPisa={openPisaAcademy}
/>
        )}

        {/* =================================================
            PISA ACADEMY
        ================================================= */}

        {screen === 'pisa' && (
          <PisaAcademy
            onBack={goBack}
          />
        )}

        {/* =================================================
            RANKING
        ================================================= */}

        {screen === 'ranking' && (
          <RankingScreen
            onBack={goBack}
          />
        )}

        {/* =================================================
            AI
        ================================================= */}

        {screen === 'ai' && (
          <AIAssistant
            onBack={goBack}
          />
        )}

        {/* =================================================
            PROFESSIONAL EDUCATION
        ================================================= */}

        {screen === 'education' && (
          <EducationScreen
            onBack={goBack}
            onSelect={
              selectEducation
            }
          />
        )}

        {/* =================================================
            ROLES
        ================================================= */}

        {screen === 'roles' && (
          <RoleScreen
            educationType={
              navigation.educationType
            }
            onBack={goBack}
            onSelect={selectRole}
          />
        )}

        {/* =================================================
            SUBJECTS
        ================================================= */}

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

        {/* =================================================
            MODULES
        ================================================= */}

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

        {/* =================================================
            TOPICS
        ================================================= */}

        {screen === 'topics' && (
          <TopicScreen
            module={
              activeModule
            }
            onBack={goBack}
            onSelect={
              selectTopic
            }
          />
        )}

        {/* =================================================
            LEVELS
        ================================================= */}

        {screen === 'levels' && (
          <LevelScreen
            topic={
              activeTopic
            }
            onBack={goBack}
            onSelect={
              selectLevel
            }
          />
        )}

        {/* =================================================
            QUIZ
        ================================================= */}

        {screen === 'quiz' &&
          quizSession && (
            <QuizScreen
              session={
                quizSession
              }
              showCloseButton
              onFinish={
                finish
              }
              onExit={
                goBack
              }
            />
          )}

        {/* =================================================
            RESULT
        ================================================= */}

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
          Test jarayoni davom
          etmoqda.
        </div>
      )}
    </main>
  )
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({
  dot,
  text,
}: {
  dot: 'green' | 'blue'
  text: string
}) {
  const dotClass =
    dot === 'green'
      ? 'bg-emerald-500'
      : 'bg-blue-500'

  const wrapperClass =
    dot === 'green'
      ? 'border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-400'
      : 'border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-400'

  return (
    <span
      className={`
        hidden
        items-center
        gap-1.5
        rounded-full
        border
        px-2.5
        py-1.5
        text-[9px]
        font-bold
        sm:inline-flex
        ${wrapperClass}
      `}
    >
      <span
        className={`
          size-1.5
          rounded-full
          ${dotClass}
        `}
      />

      {text}
    </span>
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

      <PageHeading
        eyebrow="TA’LIM YO‘NALISHI"
        title="Professional akademiya"
        description="Attestatsiya, menejerlik va professional rivojlanish uchun o‘zingizga mos yo‘nalishni tanlang."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <EducationCardNew
          icon="🏫"
          title="MAKTAB"
          subtitle="UMUMIY O‘RTA TA’LIM"
          description="Maktab direktori, direktor o‘rinbosari va fan o‘qituvchilari uchun professional tayyorgarlik."
          accent="blue"
          onClick={() =>
            onSelect('school')
          }
        />

        <EducationCardNew
          icon="🧸"
          title="MAKTABGACHA TA’LIM"
          subtitle="MTT"
          description="Maktabgacha ta’lim rahbarlari va pedagoglari uchun professional tayyorgarlik."
          accent="gold"
          onClick={() =>
            onSelect('preschool')
          }
        />
      </div>

      <InfoCard
        icon="🎯"
        title="Professional yo‘l"
        text="Yo‘nalish → Lavozim → Modul → Mavzu → Daraja → Test → Natija."
      />
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
    educationType === 'school'

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

      <PageHeading
        eyebrow={
          isSchool
            ? 'MAKTAB'
            : 'MAKTABGACHA TA’LIM'
        }
        title="Lavozimingizni tanlang"
        description="Sizga tegishli professional tayyorgarlik yo‘nalishini tanlang."
      />

      <div className="flex flex-col gap-3">
        {roles.map(role => (
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
              rounded-[25px]
              border
              bg-card
              p-5
              text-left
              shadow-sm
              transition-all
              hover:-translate-y-0.5
              hover:shadow-lg
              active:scale-[0.99]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                size-32
                rounded-full
                bg-blue-500/5
                transition-transform
                group-hover:scale-125
              "
            />

            <div className="relative flex items-center gap-4">
              <div
                className="
                  flex
                  size-15
                  shrink-0
                  items-center
                  justify-center
                  rounded-[19px]
                  bg-gradient-to-br
                  from-blue-50
                  to-indigo-100
                  text-[27px]
                  dark:from-blue-950/30
                  dark:to-indigo-950/20
                "
              >
                {role.icon}
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-blue-50
                    px-2
                    py-1
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-blue-700
                    dark:bg-blue-950/30
                    dark:text-blue-400
                  "
                >
                  {role.badge}
                </span>

                <h2 className="mt-2 text-[16px] font-black">
                  {role.title}
                </h2>

                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                  {role.description}
                </p>
              </div>

              <Arrow />
            </div>
          </button>
        ))}
      </div>

      <InfoCard
        icon="🎯"
        title="Attestatsiyaga tayyorgarlik"
        text="Har bir lavozim uchun testlar tegishli kasbiy kompetensiyalar asosida shakllantiriladi."
      />
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
    educationType === 'school'

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

      <PageHeading
        eyebrow={
          isSchool
            ? 'FAN O‘QITUVCHILARI'
            : 'PEDAGOGLAR'
        }
        title={
          isSchool
            ? 'Fanni tanlang'
            : 'Pedagogik yo‘nalishni tanlang'
        }
        description="Attestatsiya testlari fan yoki pedagogik faoliyat yo‘nalishi bo‘yicha tashkil etiladi."
      />

      {isSchool ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {subjects.map(
            subject => {
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
                    rounded-[23px]
                    border
                    bg-card
                    p-5
                    text-left
                    shadow-sm
                    transition-all
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    ${
                      active
                        ? 'border-blue-500 ring-2 ring-blue-500/10'
                        : ''
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        size-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-[18px]
                        bg-gradient-to-br
                        from-blue-50
                        to-indigo-100
                        text-2xl
                        dark:from-blue-950/30
                        dark:to-indigo-950/20
                      "
                    >
                      {
                        subject.icon
                      }
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-black">
                        {
                          subject.title
                        }
                      </h2>

                      <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                        {
                          subject.description
                        }
                      </p>
                    </div>

                    <Arrow />
                  </div>

                  {active && (
                    <div
                      className="
                        mt-4
                        rounded-2xl
                        bg-blue-50/70
                        p-3
                        dark:bg-blue-950/20
                      "
                    >
                      <p className="text-[10px] font-black uppercase tracking-wider text-blue-700">
                        FAN TANLANDI
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                        Ushbu fan uchun
                        professional
                        test bazasi
                        keyingi
                        bosqichlarda
                        ishga tushiriladi.
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
            item => (
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
                  rounded-[23px]
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
                <div
                  className="
                    flex
                    size-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-gradient-to-br
                    from-amber-50
                    to-yellow-100
                    text-2xl
                    dark:from-amber-950/30
                    dark:to-yellow-950/20
                  "
                >
                  {
                    item.icon
                  }
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-black">
                    {
                      item.title
                    }
                  </h2>

                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Attestatsiyaga tayyorgarlik
                  </p>
                </div>

                <Arrow />
              </button>
            ),
          )}
        </div>
      )}

      <InfoCard
        icon="🧠"
        title="Test tizimi"
        text="Fan va pedagogik yo‘nalishlar uchun alohida savollar bazasi: Oson · O‘rta · Qiyin · Keys · Aralash."
      />
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
      ? 'Maktab rahbari'
      : role === 'deputy'
        ? 'Direktor o‘rinbosari'
        : role === 'teacher'
          ? 'Fan o‘qituvchisi'
          : role === 'pedagogue'
            ? 'Pedagog'
            : ''

  return (
    <section className="flex flex-col gap-6">
      <BackButton
        onClick={onBack}
        text="Lavozimlar"
      />

      <PageHeading
        eyebrow={
          educationType ===
          'preschool'
            ? 'MAKTABGACHA TA’LIM'
            : 'MENEJERLIK AKADEMIYASI'
        }
        title="Professional modullar"
        description={
          roleTitle
            ? `${roleTitle} uchun kompetensiyalar va attestatsiya tayyorgarligi.`
            : 'Boshqaruv kompetensiyalari bo‘yicha tayyorgarlik.'
        }
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[26px]
          bg-gradient-to-br
          from-[#081a3a]
          via-[#0c3470]
          to-[#1684c7]
          p-6
          text-white
          shadow-xl
          shadow-blue-900/15
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            size-40
            rounded-full
            bg-white/5
          "
        />

        <div className="relative">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                size-14
                shrink-0
                items-center
                justify-center
                rounded-[18px]
                bg-white/10
                text-2xl
                ring-1
                ring-white/10
              "
            >
              🚀
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/50">
                PROFESSIONAL PREP
              </p>

              <h2 className="mt-1 text-lg font-black">
                Tezkor aralash test
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-lg text-[11px] leading-5 text-white/70">
            Modul ichidagi mavzulardan
            tasodifiy savollar bilan
            bilimlaringizni sinang.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <DarkPill>
              🟢 Oson
            </DarkPill>

            <DarkPill>
              🟡 O‘rta
            </DarkPill>

            <DarkPill>
              🔴 Qiyin
            </DarkPill>

            <DarkPill>
              🔵 Keys
            </DarkPill>
          </div>
        </div>
      </div>

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
                rounded-[24px]
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
                <div
                  className="
                    flex
                    size-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-blue-50
                    text-2xl
                    dark:bg-blue-950/20
                  "
                >
                  {getModuleIcon(
                    category,
                    index,
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-[15px] font-black">
                    {
                      category.title
                    }
                  </h2>

                  {'description' in
                    category &&
                    category.description && (
                      <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                        {
                          category.description
                        }
                      </p>
                    )}
                </div>

                <Arrow />
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
                  text-[10px]
                  font-bold
                  transition
                  hover:bg-muted/50
                "
              >
                <span>
                  🔀 Shu modul
                  bo‘yicha
                  aralash test
                </span>

                <span className="font-black text-blue-700">
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

      <PageHeading
        eyebrow="MAVZULAR"
        title={module.title}
        description={
          'description' in
            module &&
          module.description
            ? module.description
            : 'Ushbu modul bo‘yicha professional tayyorgarlik mavzulari.'
        }
      />

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
                rounded-[24px]
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
                  rounded-[16px]
                  bg-blue-50
                  text-xs
                  font-black
                  text-blue-700
                  dark:bg-blue-950/20
                  dark:text-blue-400
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
                <h2 className="text-sm font-black">
                  {
                    topic.title
                  }
                </h2>

                {topic.description && (
                  <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
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

              <Arrow />
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
        'Asosiy tushunchalar va bilimlar.',
      questions:
        topic.levels.easy.length,
    },
    {
      id: 'medium',
      icon: '🟡',
      title: 'O‘rta',
      description:
        'Amaliy qo‘llash va vaziyatlar.',
      questions:
        topic.levels.medium.length,
    },
    {
      id: 'hard',
      icon: '🔴',
      title: 'Qiyin',
      description:
        'Tahliliy va murakkab savollar.',
      questions:
        topic.levels.hard.length,
    },
    {
      id: 'case',
      icon: '🔵',
      title: 'Keys',
      description:
        'Real boshqaruv vaziyatlari.',
      questions:
        topic.levels.case.length,
    },
    {
      id: 'mixed',
      icon: '🟣',
      title: 'Aralash test',
      description:
        'Barcha darajadagi savollardan.',
      questions: 30,
    },
  ]

  return (
    <section className="flex flex-col gap-6">
      <BackButton
        onClick={onBack}
        text="Mavzular"
      />

      <PageHeading
        eyebrow="TEST TURINI TANLANG"
        title={topic.title}
        description="Attestatsiyaga tayyorgarlik darajasini tanlang."
      />

      <div className="flex flex-col gap-3">
        {levels.map(
          level => (
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
                rounded-[23px]
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <div
                className="
                  flex
                  size-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-[18px]
                  bg-muted
                  text-2xl
                "
              >
                {
                  level.icon
                }
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-black">
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
                      text-[9px]
                      font-bold
                    "
                  >
                    {
                      level.questions
                    }
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                  {
                    level.description
                  }
                </p>
              </div>

              <Arrow />
            </button>
          ),
        )}
      </div>

      <InfoCard
        icon="🧠"
        title="Aralash test"
        text="Turli darajadagi savollar aralashtirilib, har safar yangi test shakllantiriladi."
      />
    </section>
  )
}

/* =========================================================
   PAGE HEADING
========================================================= */

function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div>
      <Eyebrow>
        {eyebrow}
      </Eyebrow>

      <h1 className="mt-2 text-[29px] font-black tracking-tight">
        {title}
      </h1>

      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

/* =========================================================
   BACK BUTTON
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
        group
        flex
        w-fit
        items-center
        gap-1.5
        rounded-lg
        py-1
        text-[12px]
        font-bold
        text-muted-foreground
        transition
        hover:text-blue-700
      "
    >
      <span
        className="
          text-base
          transition-transform
          group-hover:-translate-x-0.5
        "
      >
        ←
      </span>

      {text}
    </button>
  )
}

/* =========================================================
   EYEBROW
========================================================= */

function Eyebrow({
  children,
}: {
  children: ReactNode
}) {
  return (
    <p
      className="
        text-[10px]
        font-black
        uppercase
        tracking-[0.18em]
        text-blue-700
      "
    >
      {children}
    </p>
  )
}

/* =========================================================
   ARROW
========================================================= */

function Arrow() {
  return (
    <span
      className="
        flex
        size-9
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-muted
        text-muted-foreground
        transition-all
        group-hover:translate-x-0.5
        group-hover:bg-blue-50
        group-hover:text-blue-700
      "
    >
      →
    </span>
  )
}

/* =========================================================
   MINI BADGE
========================================================= */

function MiniBadge({
  children,
}: {
  children: ReactNode
}) {
  return (
    <span
      className="
        rounded-full
        border
        bg-muted/70
        px-2
        py-0.5
        text-[8px]
        font-bold
        text-muted-foreground
      "
    >
      {children}
    </span>
  )
}

/* =========================================================
   DARK PILL
========================================================= */

function DarkPill({
  children,
}: {
  children: ReactNode
}) {
  return (
    <span
      className="
        rounded-full
        border
        border-white/10
        bg-white/10
        px-3
        py-1.5
        text-[9px]
        font-bold
        text-white/80
      "
    >
      {children}
    </span>
  )
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
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
        rounded-[24px]
        border
        border-blue-100
        bg-blue-50/60
        p-5
        dark:border-blue-900/20
        dark:bg-blue-950/10
      "
    >
      <div className="flex items-start gap-3">
        <div
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-white
            text-lg
            shadow-sm
            dark:bg-card
          "
        >
          {icon}
        </div>

        <div>
          <p className="text-sm font-black">
            {title}
          </p>

          <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   EDUCATION CARD
========================================================= */

function EducationCardNew({
  icon,
  title,
  subtitle,
  description,
  accent,
  onClick,
}: {
  icon: string
  title: string
  subtitle: string
  description: string
  accent:
    | 'blue'
    | 'gold'
  onClick: () => void
}) {
  const gold =
    accent === 'gold'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        bg-card
        p-6
        text-left
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
        active:scale-[0.99]
        ${
          gold
            ? 'border-amber-100 dark:border-amber-900/20'
            : 'border-blue-100 dark:border-blue-900/20'
        }
      `}
    >
      <div
        className={`
          pointer-events-none
          absolute
          -right-10
          -top-10
          size-36
          rounded-full
          ${
            gold
              ? 'bg-amber-400/5'
              : 'bg-blue-500/5'
          }
          transition-transform
          group-hover:scale-125
        `}
      />

      <div className="relative">
        <div
          className={`
            flex
            size-16
            items-center
            justify-center
            rounded-[20px]
            text-3xl
            ${
              gold
                ? 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/30 dark:to-yellow-950/20'
                : 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/20'
            }
          `}
        >
          {icon}
        </div>

        <span
          className={`
            mt-5
            inline-flex
            rounded-full
            px-2.5
            py-1
            text-[8px]
            font-black
            uppercase
            tracking-[0.12em]
            ${
              gold
                ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400'
                : 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
            }
          `}
        >
          {subtitle}
        </span>

        <h2 className="mt-3 text-xl font-black tracking-tight">
          {title}
        </h2>

        <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
          {description}
        </p>

        <div
          className={`
            mt-5
            flex
            items-center
            justify-between
            text-[11px]
            font-black
            ${
              gold
                ? 'text-amber-700'
                : 'text-blue-700'
            }
          `}
        >
          <span>
            Boshlash
          </span>

          <span
            className="
              transition-transform
              group-hover:translate-x-1
            "
          >
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
        rounded-[26px]
        border
        bg-card
        px-6
        py-12
        text-center
        shadow-sm
      "
    >
      <div
        className="
          flex
          size-16
          items-center
          justify-center
          rounded-[20px]
          bg-muted
          text-3xl
        "
      >
        {icon}
      </div>

      <h2 className="mt-4 text-lg font-black">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-[11px] leading-5 text-muted-foreground">
        {text}
      </p>
    </div>
  )
}
