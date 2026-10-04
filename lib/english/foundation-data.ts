/* =========================================================
 * 🇬🇧 MENEJERLIK BY NURMUHAMMAD
 * ENGLISH ACADEMY
 * FOUNDATION COURSE — PROFESSIONAL DATA
 * =========================================================
 *
 * FOUNDATION / PRE-A1
 *
 * 30 TA BOSQICHMA-BOSQICH DARS
 *
 * HAR BIR DARS:
 * ├── 🎯 Objectives
 * ├── 📚 Vocabulary
 * ├── 🧠 Grammar
 * ├── 🧱 Sentence Structure
 * ├── 💡 Explanation
 * ├── ✍️ Examples
 * ├── 🔊 Pronunciation
 * ├── 📖 Reading
 * ├── 🎮 Activities
 * ├── 🗣️ Speaking
 * ├── ✍️ Writing
 * ├── 🔄 Review
 * ├── 🏆 Challenge
 * └── 📝 Final Test
 *
 * PRINCIPLE:
 * Learn → Understand → Practice → Use → Test → Unlock
 * ========================================================= */

import type {
  EnglishCourse,
  EnglishLesson,
  EnglishUnit,
  EnglishVocabulary,
  EnglishGrammar,
  EnglishSentenceStructure,
  EnglishExplanation,
  EnglishExample,
  EnglishActivity,
  EnglishSpeaking,
  EnglishWriting,
  EnglishReading,
  EnglishReview,
  EnglishChallenge,
  EnglishLessonTest,
  EnglishLessonReward,
  EnglishPronunciation,
  EnglishLessonTheme,
  EnglishTestQuestion,
} from './english-types'


/* =========================================================
   🏷️ COURSE
========================================================= */

export const FOUNDATION_COURSE: EnglishCourse = {
  id: 'foundation-main',
  level: 'foundation',
  title: 'English Foundation',
  shortTitle: 'Foundation',
  description:
    'Ingliz tilini noldan mustahkam poydevor bilan o‘rganish kursi. O‘quvchi so‘z, gap tuzilishi, asosiy grammatika, talaffuz va kundalik muloqotni bosqichma-bosqich egallaydi.',
  emoji: '🇬🇧',
  cefr: 'pre-a1',
  lessonCount: 30,
  estimatedMinutes: 720,
  status: 'available',
  color: 'blue',
  gradient: 'from-blue-600 via-indigo-600 to-purple-600',
  goals: [
    'Ingliz tilidagi asosiy so‘zlarni faol ishlatish',
    'Oddiy gaplarni mustaqil tuzish',
    'Subject + Verb + Object strukturasini tushunish',
    'am / is / are ni to‘g‘ri qo‘llash',
    'have / has ni ishlatish',
    'Present Simple asoslarini egallash',
    'Oddiy savollar va javoblarni tuzish',
    'Kundalik vaziyatlarda inglizcha muloqot qilish',
    'Oddiy matnlarni o‘qib tushunish',
    'O‘z fikrini sodda gaplar bilan ifodalash',
  ],
  skills: [
    'vocabulary',
    'grammar',
    'reading',
    'listening',
    'speaking',
    'writing',
    'pronunciation',
    'communication',
  ],
  recommendedAge: '7+',
  certificateTitle: 'English Foundation Achievement Certificate',
}


/* =========================================================
   🧩 UNITS
========================================================= */

export const FOUNDATION_UNITS: EnglishUnit[] = [
  {
    id: 'foundation-unit-1',
    courseId: 'foundation-main',
    unitNumber: 1,
    title: 'First Steps',
    subtitle: 'Ingliz tilidagi birinchi qadamlar',
    description:
      'Salomlashish, o‘zini tanishtirish, olmoshlar va gap qurishning eng muhim asoslari.',
    emoji: '🚀',
    lessonIds: [
      'foundation-01',
      'foundation-02',
      'foundation-03',
      'foundation-04',
      'foundation-05',
    ],
    goals: [
      'Salomlashish',
      'O‘zini tanishtirish',
      'Subject pronouns',
      'To be',
      'Oddiy gaplar',
    ],
    status: 'available',
  },

  {
    id: 'foundation-unit-2',
    courseId: 'foundation-main',
    unitNumber: 2,
    title: 'My World',
    subtitle: 'Men va mening dunyom',
    description:
      'Oila, uy, maktab va atrofdagi narsalarni ingliz tilida tasvirlash.',
    emoji: '🌍',
    lessonIds: [
      'foundation-06',
      'foundation-07',
      'foundation-08',
      'foundation-09',
      'foundation-10',
    ],
    goals: [
      'Family',
      'Home',
      'School',
      'This / That',
      'There is / There are',
    ],
    status: 'locked',
  },

  {
    id: 'foundation-unit-3',
    courseId: 'foundation-main',
    unitNumber: 3,
    title: 'Building Sentences',
    subtitle: 'Gap qurishni o‘rganamiz',
    description:
      'Have/has, sifatlar, predloglar va sentence structure orqali uzunroq gaplar tuzish.',
    emoji: '🧱',
    lessonIds: [
      'foundation-11',
      'foundation-12',
      'foundation-13',
      'foundation-14',
      'foundation-15',
    ],
    goals: [
      'Have / Has',
      'Adjectives',
      'Prepositions',
      'Sentence building',
      'Questions',
    ],
    status: 'locked',
  },

  {
    id: 'foundation-unit-4',
    courseId: 'foundation-main',
    unitNumber: 4,
    title: 'Everyday English',
    subtitle: 'Kundalik ingliz tili',
    description:
      'Ovqat, kiyim, vaqt, kun tartibi va kundalik faoliyatlar haqida gapirish.',
    emoji: '☀️',
    lessonIds: [
      'foundation-16',
      'foundation-17',
      'foundation-18',
      'foundation-19',
      'foundation-20',
    ],
    goals: [
      'Food',
      'Clothes',
      'Time',
      'Daily routine',
      'Present Simple',
    ],
    status: 'locked',
  },

  {
    id: 'foundation-unit-5',
    courseId: 'foundation-main',
    unitNumber: 5,
    title: 'Communication Lab',
    subtitle: 'Haqiqiy muloqot',
    description:
      'Savol berish, iltimos qilish, qobiliyat, joylar va kundalik suhbatlarni rivojlantirish.',
    emoji: '💬',
    lessonIds: [
      'foundation-21',
      'foundation-22',
      'foundation-23',
      'foundation-24',
      'foundation-25',
    ],
    goals: [
      'Question words',
      'Can / Can’t',
      'Imperatives',
      'Shopping',
      'Directions',
    ],
    status: 'locked',
  },

  {
    id: 'foundation-unit-6',
    courseId: 'foundation-main',
    unitNumber: 6,
    title: 'Foundation Mastery',
    subtitle: 'Bilimlarni birlashtiramiz',
    description:
      'Oldingi bilimlarni takrorlash, gap tuzish, reading, speaking va yakuniy challenge.',
    emoji: '🏆',
    lessonIds: [
      'foundation-26',
      'foundation-27',
      'foundation-28',
      'foundation-29',
      'foundation-30',
    ],
    goals: [
      'Review',
      'Sentence mastery',
      'Reading',
      'Speaking',
      'Final challenge',
    ],
    status: 'locked',
  },
]


/* =========================================================
   🧰 HELPERS
========================================================= */

const v = (
  id: string,
  word: string,
  translation: string,
  category: EnglishVocabulary['category'],
  example: string,
  exampleTranslation: string,
  emoji?: string,
  pronunciation?: string,
): EnglishVocabulary => ({
  id,
  word,
  translation,
  category,
  example,
  exampleTranslation,
  emoji,
  pronunciation,
  importance: 'core',
})


const grammar = (
  id: string,
  title: string,
  category: EnglishGrammar['category'],
  shortRule: string,
  explanation: string,
  formula: string,
  examples: EnglishGrammar['examples'],
  tips: string[] = [],
  commonMistakes: EnglishGrammar['commonMistakes'] = [],
): EnglishGrammar => ({
  id,
  title,
  category,
  difficulty: 'starter',
  shortRule,
  explanation,
  formula,
  examples,
  tips,
  commonMistakes,
})


const example = (
  id: string,
  english: string,
  uzbek: string,
  highlight?: string,
): EnglishExample => ({
  id,
  english,
  uzbek,
  highlight,
})


const explanation = (
  id: string,
  type: EnglishExplanation['type'],
  title: string,
  content: string,
  emoji?: string,
): EnglishExplanation => ({
  id,
  type,
  title,
  content,
  emoji,
})


const activity = (
  id: string,
  type: EnglishActivity['type'],
  title: string,
  instruction: string,
  question: string,
  correctAnswer: string | string[],
  options?: string[],
  explanation?: string,
): EnglishActivity => ({
  id,
  type,
  title,
  instruction,
  question,
  correctAnswer,
  points: 10,
  difficulty: 'easy',
  options: options?.map((text, index) => ({
    id: `${id}-option-${index + 1}`,
    text,
  })),
  explanation,
})


const testQuestion = (
  id: string,
  question: string,
  correctAnswer: string | string[],
  options: string[],
  explanationText: string,
): EnglishTestQuestion => ({
  id,
  type: 'multiple-choice',
  question,
  points: 2,
  options: options.map((text, index) => ({
    id: `${id}-o${index + 1}`,
    text,
  })),
  correctAnswer,
  explanation: explanationText,
})


const theme = (
  emoji: string,
  gradient: string,
  accent: string,
): EnglishLessonTheme => ({
  theme: 'blue',
  emoji,
  gradient,
  accent,
})


const standardReward = (
  xp = 100,
): EnglishLessonReward => ({
  xp,
  bonusXp: 25,
  stars: 3,
  unlockNextLesson: true,
  perfectScoreBonus: 50,
})


/* =========================================================
   🧱 LESSON 01
   HELLO & INTRODUCTIONS
========================================================= */

const LESSON_01: EnglishLesson = {
  id: 'foundation-01',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-1',
  lessonNumber: 1,
  title: 'Hello, I’m ...',
  subtitle: 'Salomlashish va o‘zini tanishtirish',
  emoji: '👋',
  description:
    'Ingliz tilidagi birinchi real suhbatni o‘rganing. Salomlashish, ism aytish va oddiy savollarga javob berishni boshlang.',
  type: 'foundation',
  difficulty: 'starter',
  status: 'available',
  estimatedMinutes: 25,

  objectives: [
    'Hello, Hi, Good morning kabi iboralarni ishlatish',
    'O‘z ismini inglizcha aytish',
    'What is your name? savoliga javob berish',
    'I am va My name is strukturalarini farqlash',
    'Oddiy tanishuv dialogini olib borish',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'pronunciation',
    'communication',
  ],

  topics: [
    'Greetings',
    'Introductions',
    'Names',
    'Basic conversation',
  ],

  vocabulary: [
    v('f01-v01', 'hello', 'salom', 'greeting', 'Hello, Ali!', 'Salom, Ali!', '👋'),
    v('f01-v02', 'hi', 'salom', 'greeting', 'Hi, Sara!', 'Salom, Sara!', '😊'),
    v('f01-v03', 'goodbye', 'xayr', 'greeting', 'Goodbye, teacher!', 'Xayr, o‘qituvchi!', '👋'),
    v('f01-v04', 'morning', 'ertalab', 'time', 'Good morning!', 'Xayrli tong!', '🌅'),
    v('f01-v05', 'afternoon', 'tushdan keyin', 'time', 'Good afternoon!', 'Xayrli kun!', '☀️'),
    v('f01-v06', 'evening', 'kechqurun', 'time', 'Good evening!', 'Xayrli kech!', '🌆'),
    v('f01-v07', 'name', 'ism', 'person', 'My name is Ali.', 'Mening ismim Ali.', '🪪'),
    v('f01-v08', 'student', 'o‘quvchi', 'school', 'I am a student.', 'Men o‘quvchiman.', '🎓'),
    v('f01-v09', 'teacher', 'o‘qituvchi', 'school', 'She is a teacher.', 'U o‘qituvchi.', '👩‍🏫'),
    v('f01-v10', 'friend', 'do‘st', 'person', 'He is my friend.', 'U mening do‘stim.', '🤝'),
    v('f01-v11', 'nice', 'yoqimli', 'general', 'Nice to meet you.', 'Tanishganimdan xursandman.', '⭐'),
    v('f01-v12', 'meet', 'uchrashmoq/tanishmoq', 'action', 'Nice to meet you.', 'Tanishganimdan xursandman.', '🤝'),
    v('f01-v13', 'please', 'iltimos', 'general', 'Please sit down.', 'Iltimos, o‘tiring.', '🙏'),
    v('f01-v14', 'thank', 'rahmat aytmoq', 'general', 'Thank you!', 'Rahmat!', '🙏'),
    v('f01-v15', 'yes', 'ha', 'general', 'Yes, I am.', 'Ha, men ...man.', '✅'),
    v('f01-v16', 'no', 'yo‘q', 'general', 'No, I am not.', 'Yo‘q, men ... emasman.', '❌'),
  ],

  grammar: [
    grammar(
      'f01-g01',
      'Subject Pronouns',
      'pronouns',
      'I, you, he, she, it, we, they — gapdagi shaxsni bildiradi.',
      'Ingliz tilida fe’l oldidan kim harakat qilayotganini ko‘rsatish juda muhim. I — men, you — sen/siz, he — u (erkak), she — u (ayol), it — narsa/hayvon, we — biz, they — ular.',
      'Subject + Verb',
      [
        {
          english: 'I am a student.',
          uzbek: 'Men o‘quvchiman.',
        },
        {
          english: 'She is a teacher.',
          uzbek: 'U o‘qituvchi.',
        },
        {
          english: 'They are friends.',
          uzbek: 'Ular do‘stlar.',
        },
      ],
      [
        'Ingliz tilida subject ko‘pincha tushirib qoldirilmaydi.',
        'He erkak uchun, she ayol uchun ishlatiladi.',
      ],
      [
        {
          wrong: 'Am a student.',
          correct: 'I am a student.',
          explanation: 'Ingliz tilida gapda subject kerak.',
        },
      ],
    ),

    grammar(
      'f01-g02',
      'Verb TO BE: am / is / are',
      'verb-to-be',
      'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi.',
      'To be hozirgi zamonda shaxs yoki holatni ifodalash uchun ishlatiladi.',
      'Subject + am/is/are + complement',
      [
        {
          english: 'I am Ali.',
          uzbek: 'Men Aliman.',
        },
        {
          english: 'She is a student.',
          uzbek: 'U o‘quvchi.',
        },
        {
          english: 'We are friends.',
          uzbek: 'Biz do‘stmiz.',
        },
      ],
      [
        'I → am',
        'He/She/It → is',
        'You/We/They → are',
      ],
      [
        {
          wrong: 'I is a student.',
          correct: 'I am a student.',
          explanation: 'I bilan faqat am ishlatiladi.',
        },
        {
          wrong: 'They is friends.',
          correct: 'They are friends.',
          explanation: 'They bilan are ishlatiladi.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f01-s01',
      title: 'Subject + BE + Noun',
      type: 'subject-be-noun',
      formula: 'Subject + am/is/are + noun',
      explanation:
        'Bu struktura kim yoki nima ekanini aytish uchun ishlatiladi.',
      parts: [
        {
          label: 'S',
          name: 'Subject',
          description: 'Kim?',
        },
        {
          label: 'BE',
          name: 'am / is / are',
          description: 'Bog‘lovchi fe’l',
        },
        {
          label: 'N',
          name: 'Noun',
          description: 'Kim/nima?',
        },
      ],
      examples: [
        {
          english: 'I am a student.',
          uzbek: 'Men o‘quvchiman.',
        },
        {
          english: 'She is a teacher.',
          uzbek: 'U o‘qituvchi.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f01-e01',
      'intro',
      'Bugungi missiya',
      'Bugun siz ingliz tilida o‘zingizni tanishtira oladigan darajaga chiqasiz.',
      '🚀',
    ),
    explanation(
      'f01-e02',
      'rule',
      'Eng muhim formula',
      'Ingliz tilidagi oddiy gaplarning asosiy siri — gap boshida subject bo‘lishi va fe’lning to‘g‘ri ishlatilishidir.',
      '🧠',
    ),
    explanation(
      'f01-e03',
      'tip',
      'Mini memory',
      'I → am. He/She/It → is. You/We/They → are. Shu uchlikni yaxshi o‘zlashtiring.',
      '💡',
    ),
  ],

  examples: [
    example('f01-ex01', 'Hello! My name is Ali.', 'Salom! Mening ismim Ali.'),
    example('f01-ex02', 'I am a student.', 'Men o‘quvchiman.', 'am'),
    example('f01-ex03', 'I am ten years old.', 'Men o‘n yoshdaman.', 'am'),
    example('f01-ex04', 'She is my teacher.', 'U mening o‘qituvchim.', 'is'),
    example('f01-ex05', 'He is my friend.', 'U mening do‘stim.', 'is'),
    example('f01-ex06', 'We are students.', 'Biz o‘quvchilarmiz.', 'are'),
    example('f01-ex07', 'They are friends.', 'Ular do‘stlar.', 'are'),
    example('f01-ex08', 'Nice to meet you.', 'Tanishganimdan xursandman.'),
  ],

  pronunciation: [
    {
      id: 'f01-p01',
      wordOrPhrase: 'hello',
      pronunciation: '/həˈləʊ/',
      explanation: 'Ikkinchi bo‘g‘inga urg‘u tushadi.',
      example: 'Hello, my friend!',
      translation: 'Salom, do‘stim!',
    },
    {
      id: 'f01-p02',
      wordOrPhrase: 'name',
      pronunciation: '/neɪm/',
      explanation: 'Oxiridagi e tovushsiz, so‘z /neɪm/ tarzida aytiladi.',
      example: 'My name is Ali.',
      translation: 'Mening ismim Ali.',
    },
  ],

  reading: [
    {
      id: 'f01-r01',
      title: 'Meet Ali',
      level: 'starter',
      passage:
        'Hello! My name is Ali. I am ten years old. I am a student. I am from Uzbekistan. My friend is Tom. He is a student too.',
      vocabulary: [],
      questions: [
        {
          id: 'f01-rq01',
          question: 'What is the boy’s name?',
          options: [
            { id: 'a', text: 'Ali' },
            { id: 'b', text: 'Tom' },
            { id: 'c', text: 'John' },
            { id: 'd', text: 'Sam' },
          ],
          correctAnswer: 'Ali',
          explanation: 'Matnda “My name is Ali” deb aytilgan.',
        },
        {
          id: 'f01-rq02',
          question: 'How old is Ali?',
          options: [
            { id: 'a', text: 'Eight' },
            { id: 'b', text: 'Nine' },
            { id: 'c', text: 'Ten' },
            { id: 'd', text: 'Eleven' },
          ],
          correctAnswer: 'Ten',
          explanation: 'Ali “I am ten years old” deydi.',
        },
      ],
    },
  ],

  activities: [
    activity(
      'f01-a01',
      'multiple-choice',
      'Choose the verb',
      'To‘g‘ri variantni tanlang.',
      'I ___ a student.',
      'am',
      ['am', 'is', 'are', 'be'],
      'I bilan am ishlatiladi.',
    ),
    activity(
      'f01-a02',
      'multiple-choice',
      'Choose the pronoun',
      'To‘g‘ri olmoshni tanlang.',
      '___ is my teacher. (ayol)',
      'She',
      ['He', 'She', 'They', 'It'],
      'Ayol kishi uchun she ishlatiladi.',
    ),
    activity(
      'f01-a03',
      'word-order',
      'Build the sentence',
      'So‘zlarni to‘g‘ri tartiblang.',
      'I / student / am / a',
      'I am a student.',
    ),
    activity(
      'f01-a04',
      'fill-gap',
      'Complete',
      'Bo‘sh joyni to‘ldiring.',
      'They ___ friends.',
      'are',
    ),
    activity(
      'f01-a05',
      'translate',
      'Translate',
      'Gapni ingliz tiliga tarjima qiling.',
      'Men o‘quvchiman.',
      'I am a student.',
    ),
  ],

  speaking: {
    id: 'f01-sp01',
    title: 'Introduce Yourself',
    instruction:
      'O‘zingizni ingliz tilida tanishtiring. Kamida 4 ta gap ayting.',
    mode: 'self-introduction',
    phrase: 'Hello! My name is ___. I am ___ years old. I am a student. Nice to meet you.',
    translation:
      'Salom! Mening ismim ___. Men ___ yoshdaman. Men o‘quvchiman. Tanishganimdan xursandman.',
    emoji: '🎤',
    repetitions: 3,
    targetWords: ['hello', 'name', 'student', 'nice'],
    targetGrammar: ['f01-g01', 'f01-g02'],
    successCriteria: [
      'O‘z ismini aytish',
      'Yoshini aytish',
      'Student so‘zini ishlatish',
      'To be fe’lini to‘g‘ri ishlatish',
    ],
  },

  writing: {
    id: 'f01-w01',
    title: 'My Introduction',
    instruction: 'O‘zingiz haqingizda 4–5 ta oddiy gap yozing.',
    prompt:
      'Write about yourself: name, age, student status and one friend.',
    minimumWords: 15,
    targetGrammar: ['f01-g01', 'f01-g02'],
    targetVocabulary: ['name', 'student', 'friend'],
    example:
      'My name is Ali. I am ten years old. I am a student. My friend is Tom.',
    checklist: [
      'Gaplar bosh harf bilan boshlanganmi?',
      'I am to‘g‘ri ishlatilganmi?',
      'Nuqtalar qo‘yilganmi?',
    ],
  },

  review: {
    id: 'f01-review',
    title: 'Quick Review',
    description: 'Bugungi asosiy bilimlarni tekshiring.',
    vocabularyIds: [
      'f01-v01',
      'f01-v02',
      'f01-v07',
      'f01-v08',
      'f01-v09',
    ],
    grammarIds: ['f01-g01', 'f01-g02'],
    questions: [
      testQuestion(
        'f01-rv01',
        'Choose: She ___ a teacher.',
        'is',
        ['am', 'is', 'are', 'be'],
        'She bilan is ishlatiladi.',
      ),
      testQuestion(
        'f01-rv02',
        'Choose: ___ are students.',
        'They',
        ['He', 'She', 'They', 'It'],
        'They ko‘plikdagi shaxslar uchun ishlatiladi.',
      ),
    ],
  },

  challenge: {
    id: 'f01-ch01',
    title: 'First Conversation Challenge',
    description:
      'O‘zingizni tanishtiring va sherigingizdan ismini so‘rang.',
    difficulty: 'challenge',
    timeLimitMinutes: 3,
    bonusXp: 30,
    tasks: [
      {
        id: 'f01-ct01',
        instruction: 'Savolni tuzing.',
        type: 'build-sentence',
        prompt: 'your / What / name / is?',
        correctAnswer: 'What is your name?',
        explanation: 'Savol formulasi: What + is + your + name?',
      },
      {
        id: 'f01-ct02',
        instruction: 'Javobni tuzing.',
        type: 'build-sentence',
        prompt: 'Ali / name / My / is',
        correctAnswer: 'My name is Ali.',
      },
    ],
  },

  test: {
    id: 'f01-test',
    title: 'Lesson 1 Final Test',
    description: 'Keyingi darsni ochish uchun kamida 70% natija kerak.',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f01-t01',
        'I ___ a student.',
        'am',
        ['am', 'is', 'are', 'be'],
        'I bilan am ishlatiladi.',
      ),
      testQuestion(
        'f01-t02',
        'She ___ my teacher.',
        'is',
        ['am', 'is', 'are', 'be'],
        'She bilan is ishlatiladi.',
      ),
      testQuestion(
        'f01-t03',
        'They ___ friends.',
        'are',
        ['am', 'is', 'are', 'be'],
        'They bilan are ishlatiladi.',
      ),
      testQuestion(
        'f01-t04',
        'Choose the correct pronoun: ___ am Ali.',
        'I',
        ['I', 'He', 'She', 'They'],
        'O‘zingiz haqida gapirganda I ishlatiladi.',
      ),
      testQuestion(
        'f01-t05',
        'What is your ___?',
        'name',
        ['teacher', 'name', 'student', 'friend'],
        'What is your name? — Ismingiz nima?',
      ),
      testQuestion(
        'f01-t06',
        '“Tanishganimdan xursandman” qaysi?',
        'Nice to meet you.',
        [
          'Goodbye to you.',
          'Nice to meet you.',
          'See you morning.',
          'Thank your name.',
        ],
        'Nice to meet you — tanishganimdan xursandman.',
      ),
      testQuestion(
        'f01-t07',
        'Choose the correct sentence.',
        'I am a student.',
        [
          'I is a student.',
          'I are a student.',
          'I am a student.',
          'I be a student.',
        ],
        'I bilan am ishlatiladi.',
      ),
      testQuestion(
        'f01-t08',
        'Choose the correct sentence.',
        'She is a teacher.',
        [
          'She am a teacher.',
          'She are a teacher.',
          'She is a teacher.',
          'She be a teacher.',
        ],
        'She bilan is ishlatiladi.',
      ),
      testQuestion(
        'f01-t09',
        '“Salom”ning tabiiy variantini tanlang.',
        'Hello',
        ['Goodbye', 'Hello', 'Sorry', 'Thank'],
        'Hello salomlashish uchun ishlatiladi.',
      ),
      testQuestion(
        'f01-t10',
        'Choose the correct question.',
        'What is your name?',
        [
          'What your is name?',
          'What is your name?',
          'Your what is name?',
          'What are your name?',
        ],
        'What + is + your + name? to‘g‘ri struktura.',
      ),
    ],
  },

  rewards: standardReward(100),

  theme: theme(
    '👋',
    'from-blue-600 via-indigo-600 to-purple-600',
    'blue',
  ),

  nextLessonId: 'foundation-02',
}


/* =========================================================
   🧱 LESSON 02
   NUMBERS, AGE & PERSONAL INFORMATION
========================================================= */

const LESSON_02: EnglishLesson = {
  id: 'foundation-02',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-1',
  lessonNumber: 2,
  title: 'About Me',
  subtitle: 'Yosh, raqamlar va shaxsiy ma’lumotlar',
  emoji: '🙋',
  description:
    'Raqamlar, yosh, telefon raqami va oddiy shaxsiy ma’lumotlarni ingliz tilida aytishni o‘rganing.',
  type: 'mixed',
  difficulty: 'easy',
  status: 'locked',
  estimatedMinutes: 25,

  objectives: [
    '0–20 raqamlarini aytish',
    'Yosh haqida gapirish',
    'How old are you? savolini tushunish',
    'I am ... years old strukturasini ishlatish',
    'Oddiy personal information savollariga javob berish',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'listening',
    'writing',
  ],

  topics: [
    'Numbers',
    'Age',
    'Personal information',
  ],

  vocabulary: [
    v('f02-v01', 'one', 'bir', 'number', 'I have one book.', 'Menda bitta kitob bor.', '1️⃣'),
    v('f02-v02', 'two', 'ikki', 'number', 'I have two pens.', 'Menda ikkita ruchka bor.', '2️⃣'),
    v('f02-v03', 'three', 'uch', 'number', 'Three students are here.', 'Bu yerda uchta o‘quvchi bor.', '3️⃣'),
    v('f02-v04', 'five', 'besh', 'number', 'I am five.', 'Men besh yoshdaman.', '5️⃣'),
    v('f02-v05', 'ten', 'o‘n', 'number', 'I am ten years old.', 'Men o‘n yoshdaman.', '🔟'),
    v('f02-v06', 'age', 'yosh', 'general', 'What is your age?', 'Yoshingiz nechada?', '🎂'),
    v('f02-v07', 'old', 'yoshdagi', 'general', 'I am ten years old.', 'Men o‘n yoshdaman.', '🎂'),
    v('f02-v08', 'year', 'yil', 'time', 'One year.', 'Bir yil.', '📅'),
    v('f02-v09', 'number', 'raqam', 'number', 'What is your phone number?', 'Telefon raqamingiz nima?', '🔢'),
    v('f02-v10', 'phone', 'telefon', 'general', 'This is my phone.', 'Bu mening telefonim.', '📱'),
  ],

  grammar: [
    grammar(
      'f02-g01',
      'Age with TO BE',
      'verb-to-be',
      'Yoshni aytganda ingliz tilida be fe’li ishlatiladi.',
      'O‘zbek tilida “Men 10 yoshdaman” deyiladi. Ingliz tilida ham shu mazmun to be orqali beriladi: I am ten years old.',
      'Subject + am/is/are + number + years old',
      [
        {
          english: 'I am ten years old.',
          uzbek: 'Men o‘n yoshdaman.',
        },
        {
          english: 'She is eight years old.',
          uzbek: 'U sakkiz yoshda.',
        },
      ],
      [
        'How old are you? — I am ten years old.',
        'Age bilan have emas, be ishlatiladi.',
      ],
      [
        {
          wrong: 'I have ten years old.',
          correct: 'I am ten years old.',
          explanation: 'Yoshni aytishda be fe’li ishlatiladi.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f02-s01',
      title: 'Age Sentence',
      type: 'subject-be-adjective',
      formula: 'Subject + am/is/are + number + years old',
      explanation: 'Yoshni aytish uchun ishlatiladi.',
      parts: [
        {
          label: 'S',
          name: 'Subject',
          description: 'Kim?',
        },
        {
          label: 'BE',
          name: 'am/is/are',
          description: 'To be',
        },
        {
          label: 'AGE',
          name: 'number + years old',
          description: 'Yosh',
        },
      ],
      examples: [
        {
          english: 'I am twelve years old.',
          uzbek: 'Men o‘n ikki yoshdaman.',
        },
        {
          english: 'He is seven years old.',
          uzbek: 'U yetti yoshda.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f02-e01',
      'concept',
      'How old...?',
      'How old are you? — yoshingizni so‘rashning eng tabiiy shakllaridan biri.',
      '🎂',
    ),
    explanation(
      'f02-e02',
      'warning',
      'Muhim!',
      'Ingliz tilida yosh bilan have ishlatmaymiz. I have ten years old noto‘g‘ri. I am ten years old to‘g‘ri.',
      '⚠️',
    ),
  ],

  examples: [
    example('f02-ex01', 'How old are you?', 'Yoshingiz nechada?'),
    example('f02-ex02', 'I am ten years old.', 'Men o‘n yoshdaman.'),
    example('f02-ex03', 'How old is Ali?', 'Ali necha yoshda?'),
    example('f02-ex04', 'Ali is eleven years old.', 'Ali o‘n bir yoshda.'),
    example('f02-ex05', 'My phone number is 123.', 'Mening telefon raqamim 123.'),
  ],

  activities: [
    activity(
      'f02-a01',
      'multiple-choice',
      'Age',
      'To‘g‘ri variantni tanlang.',
      'I ___ ten years old.',
      'am',
      ['am', 'is', 'are', 'have'],
    ),
    activity(
      'f02-a02',
      'multiple-choice',
      'Question',
      'Yoshni so‘rash uchun to‘g‘ri savolni toping.',
      '___ old are you?',
      'How',
      ['What', 'How', 'Who', 'Where'],
    ),
    activity(
      'f02-a03',
      'word-order',
      'Build',
      'Gapni tuzing.',
      'old / am / I / ten / years',
      'I am ten years old.',
    ),
    activity(
      'f02-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'Men o‘n ikki yoshdaman.',
      'I am twelve years old.',
    ),
  ],

  speaking: {
    id: 'f02-sp01',
    title: 'My Age',
    instruction: 'O‘zingizning yoshingiz haqida 3 ta gap ayting.',
    mode: 'self-introduction',
    phrase:
      'My name is ___. I am ___ years old. I am a student.',
    translation:
      'Mening ismim ___. Men ___ yoshdaman. Men o‘quvchiman.',
    emoji: '🎤',
    repetitions: 3,
    targetWords: ['name', 'old', 'years', 'student'],
    targetGrammar: ['f02-g01'],
  },

  writing: {
    id: 'f02-w01',
    title: 'About Me',
    instruction: 'Ismingiz va yoshingiz haqida yozing.',
    prompt: 'Write 3–4 sentences about yourself.',
    minimumWords: 10,
    targetGrammar: ['f02-g01'],
    targetVocabulary: ['name', 'old', 'student'],
  },

  review: {
    id: 'f02-review',
    title: 'Numbers & Age Review',
    description: 'Raqamlar va yoshni mustahkamlang.',
    questions: [
      testQuestion(
        'f02-r01',
        'Choose: I ___ nine years old.',
        'am',
        ['am', 'is', 'are', 'have'],
        'I bilan am ishlatiladi.',
      ),
      testQuestion(
        'f02-r02',
        'Choose the correct question.',
        'How old are you?',
        [
          'What old are you?',
          'How old are you?',
          'Who old are you?',
          'Where old are you?',
        ],
        'How old are you? yoshni so‘rash uchun ishlatiladi.',
      ),
    ],
  },

  challenge: {
    id: 'f02-ch01',
    title: 'Personal Information Challenge',
    description: 'Ism, yosh va student ekaningizni ayting.',
    difficulty: 'challenge',
    bonusXp: 30,
    tasks: [
      {
        id: 'f02-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'old / am / years / I / twelve',
        correctAnswer: 'I am twelve years old.',
      },
    ],
  },

  test: {
    id: 'f02-test',
    title: 'Lesson 2 Final Test',
    description: '70% yoki undan yuqori natija keyingi darsni ochadi.',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f02-t01',
        'I ___ eight years old.',
        'am',
        ['am', 'is', 'are', 'have'],
        'I bilan am ishlatiladi.',
      ),
      testQuestion(
        'f02-t02',
        'How ___ are you?',
        'old',
        ['old', 'age', 'years', 'many'],
        'How old are you? — Yoshingiz nechada?',
      ),
      testQuestion(
        'f02-t03',
        'She ___ twelve years old.',
        'is',
        ['am', 'is', 'are', 'have'],
        'She bilan is ishlatiladi.',
      ),
      testQuestion(
        'f02-t04',
        'Choose the correct sentence.',
        'I am ten years old.',
        [
          'I have ten years old.',
          'I am ten years old.',
          'I is ten years old.',
          'I are ten years old.',
        ],
        'Age bilan am/is/are ishlatiladi.',
      ),
      testQuestion(
        'f02-t05',
        'What does “age” mean?',
        'yosh',
        ['ism', 'yosh', 'maktab', 'do‘st'],
        'Age — yosh.',
      ),
      testQuestion(
        'f02-t06',
        'What does “phone” mean?',
        'telefon',
        ['telefon', 'kitob', 'ruchka', 'uy'],
        'Phone — telefon.',
      ),
      testQuestion(
        'f02-t07',
        'Choose the correct question.',
        'How old is Ali?',
        [
          'How age Ali is?',
          'How old is Ali?',
          'What old Ali?',
          'Who is Ali old?',
        ],
        'How old is + person yoshni so‘rash uchun ishlatiladi.',
      ),
      testQuestion(
        'f02-t08',
        'Choose: Ali ___ eleven years old.',
        'is',
        ['am', 'is', 'are', 'have'],
        'Ali — he, shuning uchun is.',
      ),
      testQuestion(
        'f02-t09',
        '“Men o‘n yoshdaman” qaysi?',
        'I am ten years old.',
        [
          'I have ten years.',
          'I am ten years old.',
          'I ten am old.',
          'I is ten old.',
        ],
        'To‘g‘ri formula: I am + number + years old.',
      ),
      testQuestion(
        'f02-t10',
        'Choose the correct answer: How old are you?',
        'I am eleven years old.',
        [
          'My name is Ali.',
          'I am eleven years old.',
          'I am a teacher.',
          'I have a phone.',
        ],
        'How old are you? savoliga yosh bilan javob beriladi.',
      ),
    ],
  },

  rewards: standardReward(110),

  theme: theme(
    '🙋',
    'from-cyan-500 via-blue-600 to-indigo-600',
    'cyan',
  ),

  previousLessonId: 'foundation-01',
  nextLessonId: 'foundation-03',
  prerequisiteLessonIds: ['foundation-01'],
}


/* =========================================================
   📚 LESSON 03
   FAMILY & POSSESSIVES
========================================================= */

const LESSON_03: EnglishLesson = {
  id: 'foundation-03',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-1',
  lessonNumber: 3,
  title: 'My Family',
  subtitle: 'Oila a’zolari va my / your / his / her',
  emoji: '👨‍👩‍👧‍👦',
  description:
    'Oila a’zolarini tanishtiring va egalikni my, your, his, her orqali ifodalashni o‘rganing.',
  type: 'mixed',
  difficulty: 'easy',
  status: 'locked',
  estimatedMinutes: 25,

  objectives: [
    'Family vocabulary',
    'my / your / his / her',
    'This is my...',
    'Who is he/she?',
    'Oila haqida sodda gaplar tuzish',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'reading',
    'writing',
  ],

  topics: [
    'Family',
    'Possessives',
    'People',
  ],

  vocabulary: [
    v('f03-v01', 'family', 'oila', 'family', 'This is my family.', 'Bu mening oilam.', '👨‍👩‍👧‍👦'),
    v('f03-v02', 'mother', 'ona', 'family', 'My mother is kind.', 'Mening onam mehribon.', '👩'),
    v('f03-v03', 'father', 'ota', 'family', 'My father is tall.', 'Mening otam baland bo‘yli.', '👨'),
    v('f03-v04', 'brother', 'aka/uka', 'family', 'My brother is young.', 'Mening ukam yosh.', '👦'),
    v('f03-v05', 'sister', 'opa/singil', 'family', 'My sister is nice.', 'Mening singlim yoqimli.', '👧'),
    v('f03-v06', 'parents', 'ota-ona', 'family', 'My parents are kind.', 'Ota-onam mehribon.', '❤️'),
    v('f03-v07', 'son', 'o‘g‘il', 'family', 'He is my son.', 'U mening o‘g‘lim.', '👦'),
    v('f03-v08', 'daughter', 'qiz farzand', 'family', 'She is my daughter.', 'U mening qizim.', '👧'),
    v('f03-v09', 'grandmother', 'buvi', 'family', 'My grandmother is kind.', 'Buvim mehribon.', '👵'),
    v('f03-v10', 'grandfather', 'bobo', 'family', 'My grandfather is old.', 'Bobom keksa.', '👴'),
    v('f03-v11', 'my', 'mening', 'general', 'This is my book.', 'Bu mening kitobim.', '🫶'),
    v('f03-v12', 'your', 'sening/sizning', 'general', 'Is this your bag?', 'Bu sening sumkangmi?', '🎒'),
    v('f03-v13', 'his', 'uning (erkak)', 'general', 'This is his book.', 'Bu uning kitobi.', '👦'),
    v('f03-v14', 'her', 'uning (ayol)', 'general', 'This is her pen.', 'Bu uning ruchkasi.', '👧'),
  ],

  grammar: [
    grammar(
      'f03-g01',
      'Possessive Adjectives',
      'possessive',
      'my, your, his, her otning kimga tegishli ekanini bildiradi.',
      'Egalik sifatlari otdan oldin keladi: my book, your bag, his father, her sister.',
      'Possessive + Noun',
      [
        {
          english: 'This is my book.',
          uzbek: 'Bu mening kitobim.',
        },
        {
          english: 'This is her sister.',
          uzbek: 'Bu uning singlisi.',
        },
        {
          english: 'That is his father.',
          uzbek: 'U uning otasi.',
        },
      ],
      [
        'my + noun',
        'your + noun',
        'his + noun',
        'her + noun',
      ],
      [
        {
          wrong: 'This is me book.',
          correct: 'This is my book.',
          explanation: 'Egalik uchun my ishlatiladi.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f03-s01',
      title: 'Possessive Structure',
      type: 'custom',
      formula: 'Possessive + Noun',
      explanation:
        'Kimga tegishli ekanini aytish uchun egalik sifatidan keyin ot keladi.',
      parts: [
        {
          label: 'P',
          name: 'Possessive',
          description: 'my / your / his / her',
        },
        {
          label: 'N',
          name: 'Noun',
          description: 'narsa yoki shaxs',
        },
      ],
      examples: [
        {
          english: 'my mother',
          uzbek: 'mening onam',
        },
        {
          english: 'her brother',
          uzbek: 'uning akasi/ukasi',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f03-e01',
      'concept',
      'My Family',
      'Oila haqida gapirganda family members bilan possessive words juda ko‘p ishlatiladi.',
      '👨‍👩‍👧‍👦',
    ),
    explanation(
      'f03-e02',
      'memory',
      '4 ta asosiy egalik so‘zi',
      'my = mening, your = sening/sizning, his = uning (erkak), her = uning (ayol).',
      '🧠',
    ),
  ],

  examples: [
    example('f03-ex01', 'This is my mother.', 'Bu mening onam.'),
    example('f03-ex02', 'This is my father.', 'Bu mening otam.'),
    example('f03-ex03', 'He is my brother.', 'U mening akam/ukam.'),
    example('f03-ex04', 'She is my sister.', 'U mening opam/singlim.'),
    example('f03-ex05', 'This is her book.', 'Bu uning kitobi.', 'her'),
    example('f03-ex06', 'This is his bag.', 'Bu uning sumkasi.', 'his'),
  ],

  activities: [
    activity(
      'f03-a01',
      'multiple-choice',
      'Possessive',
      'To‘g‘ri so‘zni tanlang.',
      'This is ___ mother. (mening)',
      'my',
      ['my', 'your', 'his', 'her'],
    ),
    activity(
      'f03-a02',
      'multiple-choice',
      'His or her?',
      'Ayol uchun to‘g‘ri variantni tanlang.',
      'This is ___ sister. (u — qiz)',
      'her',
      ['his', 'her', 'my', 'your'],
    ),
    activity(
      'f03-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'my / This / mother / is',
      'This is my mother.',
    ),
    activity(
      'f03-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'Bu mening otam.',
      'This is my father.',
    ),
  ],

  speaking: {
    id: 'f03-sp01',
    title: 'Introduce Your Family',
    instruction:
      'Oiladagi kamida 4 kishini ingliz tilida tanishtiring.',
    mode: 'self-introduction',
    phrase:
      'This is my mother. This is my father. This is my brother. This is my sister.',
    emoji: '👨‍👩‍👧‍👦',
    repetitions: 2,
    targetWords: ['mother', 'father', 'brother', 'sister'],
    targetGrammar: ['f03-g01'],
  },

  writing: {
    id: 'f03-w01',
    title: 'My Family',
    instruction: 'Oilangiz haqida 5–6 ta gap yozing.',
    prompt: 'Write about your family.',
    minimumWords: 20,
    targetGrammar: ['f03-g01'],
    targetVocabulary: ['family', 'mother', 'father', 'brother', 'sister'],
  },

  activities: [
    activity(
      'f03-a01',
      'multiple-choice',
      'Choose',
      'To‘g‘ri javobni tanlang.',
      'This is ___ mother.',
      'my',
      ['my', 'his', 'her', 'your'],
    ),
    activity(
      'f03-a02',
      'multiple-choice',
      'His or Her',
      'Ayolga tegishli variantni toping.',
      'This is ___ book. (girl)',
      'her',
      ['his', 'her', 'my', 'your'],
    ),
    activity(
      'f03-a03',
      'word-order',
      'Build a sentence',
      'Gapni tuzing.',
      'is / This / father / my',
      'This is my father.',
    ),
    activity(
      'f03-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'U mening singlim.',
      'She is my sister.',
    ),
  ],

  test: {
    id: 'f03-test',
    title: 'Lesson 3 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f03-t01',
        'This is ___ mother.',
        'my',
        ['my', 'his', 'her', 'your'],
        'O‘zingizning onangiz haqida gapirganda my ishlatiladi.',
      ),
      testQuestion(
        'f03-t02',
        'This is ___ sister. (girl)',
        'her',
        ['his', 'her', 'my', 'your'],
        'Qizga tegishli narsa uchun her ishlatiladi.',
      ),
      testQuestion(
        'f03-t03',
        'This is ___ father. (boy)',
        'his',
        ['his', 'her', 'my', 'your'],
        'O‘g‘il/erkak uchun his ishlatiladi.',
      ),
      testQuestion(
        'f03-t04',
        '“ona” ingliz tilida?',
        'mother',
        ['mother', 'father', 'sister', 'brother'],
        'Mother — ona.',
      ),
      testQuestion(
        'f03-t05',
        '“ota” ingliz tilida?',
        'father',
        ['father', 'mother', 'son', 'daughter'],
        'Father — ota.',
      ),
      testQuestion(
        'f03-t06',
        'Choose the correct sentence.',
        'This is my family.',
        [
          'This my is family.',
          'This is my family.',
          'My this family is.',
          'This are my family.',
        ],
        'This is + possessive + noun to‘g‘ri struktura.',
      ),
      testQuestion(
        'f03-t07',
        'Choose: He is ___ brother.',
        'my',
        ['my', 'her', 'his', 'your'],
        'Gap egasining ukasi/akasi haqida: my brother.',
      ),
      testQuestion(
        'f03-t08',
        'What does “sister” mean?',
        'opa/singil',
        ['ona', 'opa/singil', 'ota', 'aka/uka'],
        'Sister — opa yoki singil.',
      ),
      testQuestion(
        'f03-t09',
        'Choose: ___ father is a teacher. (mening)',
        'My',
        ['My', 'His', 'Her', 'Your'],
        'Mening — my.',
      ),
      testQuestion(
        'f03-t10',
        'Choose the correct phrase.',
        'her sister',
        ['she sister', 'her sister', 'hers sister', 'she’s sister'],
        'Possessive adjective + noun: her sister.',
      ),
    ],
  },

  rewards: standardReward(120),

  theme: theme(
    '👨‍👩‍👧‍👦',
    'from-pink-500 via-rose-500 to-orange-500',
    'pink',
  ),

  previousLessonId: 'foundation-02',
  nextLessonId: 'foundation-04',
  prerequisiteLessonIds: ['foundation-02'],
}


/* =========================================================
   📦 LESSON 04
   ARTICLES + OBJECTS
========================================================= */

const LESSON_04: EnglishLesson = {
  id: 'foundation-04',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-1',
  lessonNumber: 4,
  title: 'A, An & Everyday Objects',
  subtitle: 'Narsalar va artikllarning boshlanishi',
  emoji: '🎒',
  description:
    'Kundalik buyumlarni nomlash va a/an artikllarini to‘g‘ri qo‘llashni o‘rganing.',
  type: 'grammar',
  difficulty: 'easy',
  status: 'locked',
  estimatedMinutes: 25,

  objectives: [
    'a va an ni farqlash',
    'Kundalik buyumlarni nomlash',
    'This is a... strukturasini ishlatish',
    'Unli tovush bilan boshlanuvchi so‘zlarda an ishlatish',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'reading',
    'speaking',
  ],

  topics: [
    'Articles',
    'Objects',
    'Singular nouns',
  ],

  vocabulary: [
    v('f04-v01', 'book', 'kitob', 'school', 'This is a book.', 'Bu kitob.', '📕'),
    v('f04-v02', 'pen', 'ruchka', 'school', 'This is a pen.', 'Bu ruchka.', '🖊️'),
    v('f04-v03', 'pencil', 'qalam', 'school', 'I have a pencil.', 'Menda qalam bor.', '✏️'),
    v('f04-v04', 'bag', 'sumka', 'school', 'This is a bag.', 'Bu sumka.', '🎒'),
    v('f04-v05', 'apple', 'olma', 'food', 'It is an apple.', 'Bu olma.', '🍎'),
    v('f04-v06', 'orange', 'apelsin', 'food', 'It is an orange.', 'Bu apelsin.', '🍊'),
    v('f04-v07', 'egg', 'tuxum', 'food', 'It is an egg.', 'Bu tuxum.', '🥚'),
    v('f04-v08', 'umbrella', 'soyabon', 'general', 'It is an umbrella.', 'Bu soyabon.', '☂️'),
    v('f04-v09', 'chair', 'stul', 'home', 'This is a chair.', 'Bu stul.', '🪑'),
    v('f04-v10', 'table', 'stol', 'home', 'This is a table.', 'Bu stol.', '🪵'),
  ],

  grammar: [
    grammar(
      'f04-g01',
      'A and AN',
      'articles',
      'a undosh tovush oldidan, an unli tovush oldidan ishlatiladi.',
      'A va an birlikdagi sanaladigan ot oldidan keladi. Tanlashda yozilishdan ko‘ra tovushga e’tibor berish kerak.',
      'a + consonant sound / an + vowel sound',
      [
        {
          english: 'a book',
          uzbek: 'bir kitob',
        },
        {
          english: 'a pen',
          uzbek: 'bir ruchka',
        },
        {
          english: 'an apple',
          uzbek: 'bir olma',
        },
        {
          english: 'an egg',
          uzbek: 'bir tuxum',
        },
      ],
      [
        'a book',
        'a teacher',
        'an apple',
        'an orange',
      ],
      [
        {
          wrong: 'a apple',
          correct: 'an apple',
          explanation: 'Apple unli tovush bilan boshlanadi.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f04-s01',
      title: 'This is + Article + Noun',
      type: 'custom',
      formula: 'This is + a/an + noun',
      explanation:
        'Bitta predmetni ko‘rsatib nomlash uchun ishlatiladi.',
      parts: [
        {
          label: 'THIS',
          name: 'This',
          description: 'Bu',
        },
        {
          label: 'BE',
          name: 'is',
          description: 'to be',
        },
        {
          label: 'A/AN',
          name: 'article',
          description: 'a yoki an',
        },
        {
          label: 'N',
          name: 'noun',
          description: 'narsa',
        },
      ],
      examples: [
        {
          english: 'This is a book.',
          uzbek: 'Bu kitob.',
        },
        {
          english: 'This is an apple.',
          uzbek: 'Bu olma.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f04-e01',
      'concept',
      'A yoki AN?',
      'A undosh tovush oldidan, an esa unli tovush oldidan ishlatiladi.',
      '🔤',
    ),
    explanation(
      'f04-e02',
      'tip',
      'Tovushni tinglang',
      'Qoidani faqat harfga qarab emas, so‘zning boshidagi tovushga qarab qo‘llang.',
      '👂',
    ),
  ],

  examples: [
    example('f04-ex01', 'This is a book.', 'Bu kitob.'),
    example('f04-ex02', 'This is a pen.', 'Bu ruchka.'),
    example('f04-ex03', 'This is an apple.', 'Bu olma.'),
    example('f04-ex04', 'This is an orange.', 'Bu apelsin.'),
    example('f04-ex05', 'I have a pencil.', 'Menda qalam bor.'),
    example('f04-ex06', 'I have an umbrella.', 'Menda soyabon bor.'),
  ],

  activities: [
    activity(
      'f04-a01',
      'multiple-choice',
      'Article',
      'To‘g‘ri artiklni tanlang.',
      '___ apple',
      'an',
      ['a', 'an', 'the', 'no article'],
    ),
    activity(
      'f04-a02',
      'multiple-choice',
      'Article',
      'To‘g‘ri variantni tanlang.',
      '___ book',
      'a',
      ['a', 'an', 'the', 'no article'],
    ),
    activity(
      'f04-a03',
      'fill-gap',
      'Complete',
      'Gapni to‘ldiring.',
      'This is ___ orange.',
      'an',
    ),
    activity(
      'f04-a04',
      'word-order',
      'Build',
      'Gap tuzing.',
      'a / is / This / book',
      'This is a book.',
    ),
  ],

  speaking: {
    id: 'f04-sp01',
    title: 'My Objects',
    instruction:
      'Atrofingizdagi 5 ta narsani ingliz tilida nomlang.',
    mode: 'conversation',
    phrase:
      'This is a book. This is a pen. This is an apple.',
    emoji: '🎒',
    repetitions: 2,
    targetWords: ['book', 'pen', 'apple', 'bag'],
    targetGrammar: ['f04-g01'],
  },

  writing: {
    id: 'f04-w01',
    title: 'My Things',
    instruction: 'Atrofingizdagi narsalar haqida 5 ta gap yozing.',
    prompt: 'Write five sentences using a or an.',
    minimumWords: 15,
    targetGrammar: ['f04-g01'],
  },

  review: {
    id: 'f04-review',
    title: 'Articles Review',
    description: 'A/an qoidasini mustahkamlang.',
    questions: [
      testQuestion(
        'f04-r01',
        'Choose: ___ apple.',
        'an',
        ['a', 'an', 'the', 'is'],
        'Apple unli tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-r02',
        'Choose: ___ book.',
        'a',
        ['a', 'an', 'the', 'are'],
        'Book undosh tovush bilan boshlanadi.',
      ),
    ],
  },

  challenge: {
    id: 'f04-ch01',
    title: 'Object Hunter',
    description:
      'Xonadagi 5 ta buyumni toping va a/an bilan gap tuzing.',
    difficulty: 'challenge',
    bonusXp: 30,
    tasks: [
      {
        id: 'f04-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'apple / an / is / This',
        correctAnswer: 'This is an apple.',
      },
    ],
  },

  test: {
    id: 'f04-test',
    title: 'Lesson 4 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f04-t01',
        '___ apple',
        'an',
        ['a', 'an', 'the', 'is'],
        'Apple unli tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-t02',
        '___ book',
        'a',
        ['a', 'an', 'the', 'is'],
        'Book undosh tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-t03',
        'This is ___ pen.',
        'a',
        ['a', 'an', 'the', 'are'],
        'Pen undosh tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-t04',
        'This is ___ orange.',
        'an',
        ['a', 'an', 'the', 'are'],
        'Orange unli tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-t05',
        'Choose the correct sentence.',
        'This is an egg.',
        [
          'This is a egg.',
          'This is an egg.',
          'This an is egg.',
          'This are an egg.',
        ],
        'Egg oldidan an ishlatiladi.',
      ),
      testQuestion(
        'f04-t06',
        'What does “bag” mean?',
        'sumka',
        ['sumka', 'kitob', 'stol', 'olma'],
        'Bag — sumka.',
      ),
      testQuestion(
        'f04-t07',
        'Choose the correct phrase.',
        'a teacher',
        ['an teacher', 'a teacher', 'teacher a', 'the teacher a'],
        'Teacher undosh tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-t08',
        'Choose the correct phrase.',
        'an umbrella',
        ['a umbrella', 'an umbrella', 'umbrella an', 'the umbrella an'],
        'Umbrella unli tovush bilan boshlanadi.',
      ),
      testQuestion(
        'f04-t09',
        '“Bu qalam” qaysi?',
        'This is a pencil.',
        [
          'This a pencil is.',
          'This is a pencil.',
          'This are pencil.',
          'This is an pencil.',
        ],
        'This is + a + noun strukturasidan foydalaniladi.',
      ),
      testQuestion(
        'f04-t10',
        'Choose the correct sentence.',
        'I have an apple.',
        [
          'I have a apple.',
          'I has an apple.',
          'I have an apple.',
          'I am an apple.',
        ],
        'Apple oldidan an ishlatiladi va I bilan have keladi.',
      ),
    ],
  },

  rewards: standardReward(120),

  theme: theme(
    '🎒',
    'from-violet-600 via-purple-600 to-fuchsia-600',
    'purple',
  ),

  previousLessonId: 'foundation-03',
  nextLessonId: 'foundation-05',
  prerequisiteLessonIds: ['foundation-03'],
}


/* =========================================================
   🏫 LESSON 05
   SCHOOL & THIS / THAT
========================================================= */

const LESSON_05: EnglishLesson = {
  id: 'foundation-05',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-1',
  lessonNumber: 5,
  title: 'My School',
  subtitle: 'Maktab, sinf va this / that',
  emoji: '🏫',
  description:
    'Maktabdagi asosiy joylar va buyumlarni tasvirlang. This, that, these, those bilan tanishing.',
  type: 'mixed',
  difficulty: 'easy',
  status: 'locked',
  estimatedMinutes: 28,

  objectives: [
    'School vocabulary',
    'This / That',
    'These / Those',
    'Yaqin va uzoq predmetlarni farqlash',
    'Maktab haqida oddiy gaplar tuzish',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'reading',
  ],

  topics: [
    'School',
    'Demonstratives',
    'Objects',
  ],

  vocabulary: [
    v('f05-v01', 'school', 'maktab', 'school', 'My school is big.', 'Mening maktabim katta.', '🏫'),
    v('f05-v02', 'classroom', 'sinf xonasi', 'school', 'This is my classroom.', 'Bu mening sinfim.', '🏫'),
    v('f05-v03', 'desk', 'parta', 'school', 'This is my desk.', 'Bu mening partam.', '🪑'),
    v('f05-v04', 'board', 'doska', 'school', 'The board is white.', 'Doska oq.', '⬜'),
    v('f05-v05', 'teacher', 'o‘qituvchi', 'school', 'My teacher is kind.', 'O‘qituvchim mehribon.', '👩‍🏫'),
    v('f05-v06', 'student', 'o‘quvchi', 'school', 'I am a student.', 'Men o‘quvchiman.', '🎓'),
    v('f05-v07', 'lesson', 'dars', 'school', 'The lesson is easy.', 'Dars oson.', '📚'),
    v('f05-v08', 'class', 'sinf', 'school', 'My class is nice.', 'Sinfim yaxshi.', '👨‍🎓'),
    v('f05-v09', 'door', 'eshik', 'home', 'The door is open.', 'Eshik ochiq.', '🚪'),
    v('f05-v10', 'window', 'deraza', 'home', 'The window is big.', 'Deraza katta.', '🪟'),
  ],

  grammar: [
    grammar(
      'f05-g01',
      'This and That',
      'demonstratives',
      'This — yaqin birlik, that — uzoq birlik uchun.',
      'Ko‘rsatish olmoshlari predmetning masofasini ko‘rsatadi.',
      'This + is + noun / That + is + noun',
      [
        {
          english: 'This is my book.',
          uzbek: 'Bu mening kitobim.',
        },
        {
          english: 'That is your bag.',
          uzbek: 'U sening sumkang.',
        },
      ],
      [
        'This = bu, yaqin',
        'That = u, uzoq',
      ],
    ),
    grammar(
      'f05-g02',
      'These and Those',
      'demonstratives',
      'These — yaqin ko‘plik, those — uzoq ko‘plik.',
      'Bir nechta predmetni ko‘rsatishda these va those ishlatiladi.',
      'These are + plural / Those are + plural',
      [
        {
          english: 'These are my books.',
          uzbek: 'Bular mening kitoblarim.',
        },
        {
          english: 'Those are your bags.',
          uzbek: 'Anavilar sizning sumkalaringiz.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f05-s01',
      title: 'Demonstrative Sentence',
      type: 'custom',
      formula: 'This/That + is + noun',
      explanation: 'Bitta predmetni ko‘rsatish.',
      parts: [
        {
          label: 'THIS',
          name: 'This / That',
          description: 'Ko‘rsatish',
        },
        {
          label: 'BE',
          name: 'is',
          description: 'To be',
        },
        {
          label: 'N',
          name: 'Noun',
          description: 'Predmet',
        },
      ],
      examples: [
        {
          english: 'This is a book.',
          uzbek: 'Bu kitob.',
        },
        {
          english: 'That is a door.',
          uzbek: 'U eshik.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f05-e01',
      'concept',
      'Masofani his qiling',
      'Qo‘lingizdagi kitob — this. Uzoqdagi eshik — that.',
      '👆',
    ),
    explanation(
      'f05-e02',
      'memory',
      'Birlik va ko‘plik',
      'This/That birlik bilan, These/Those ko‘plik bilan ishlatiladi.',
      '🧠',
    ),
  ],

  examples: [
    example('f05-ex01', 'This is my book.', 'Bu mening kitobim.'),
    example('f05-ex02', 'That is the door.', 'U eshik.'),
    example('f05-ex03', 'These are my pens.', 'Bular mening ruchkalarim.'),
    example('f05-ex04', 'Those are desks.', 'Anavilar partalar.'),
    example('f05-ex05', 'This is my classroom.', 'Bu mening sinfim.'),
  ],

  activities: [
    activity(
      'f05-a01',
      'multiple-choice',
      'This or That',
      'Yaqindagi predmetni tanlang.',
      '___ is my book. (yaqin)',
      'This',
      ['This', 'That', 'These', 'Those'],
    ),
    activity(
      'f05-a02',
      'multiple-choice',
      'These or Those',
      'Yaqin ko‘plikni tanlang.',
      '___ are my books. (yaqin)',
      'These',
      ['This', 'That', 'These', 'Those'],
    ),
    activity(
      'f05-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'my / This / classroom / is',
      'This is my classroom.',
    ),
    activity(
      'f05-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'Bular mening kitoblarim.',
      'These are my books.',
    ),
  ],

  speaking: {
    id: 'f05-sp01',
    title: 'My Classroom',
    instruction:
      'Sinfingizdagi kamida 5 ta predmetni ko‘rsatib gapiring.',
    mode: 'conversation',
    phrase:
      'This is my desk. This is a book. That is the board. These are my pens.',
    emoji: '🏫',
    repetitions: 2,
    targetWords: ['classroom', 'desk', 'board', 'book', 'pen'],
    targetGrammar: ['f05-g01', 'f05-g02'],
  },

  writing: {
    id: 'f05-w01',
    title: 'My Classroom',
    instruction: 'Sinfingiz haqida 5–7 ta gap yozing.',
    prompt: 'Describe your classroom using this, that, these and those.',
    minimumWords: 25,
    targetGrammar: ['f05-g01', 'f05-g02'],
  },

  review: {
    id: 'f05-review',
    title: 'School Review',
    description: 'School vocabulary va demonstratives.',
    questions: [
      testQuestion(
        'f05-r01',
        '___ is my desk. (yaqin)',
        'This',
        ['This', 'That', 'These', 'Those'],
        'Yaqin birlik uchun this.',
      ),
      testQuestion(
        'f05-r02',
        '___ are my books. (yaqin)',
        'These',
        ['This', 'That', 'These', 'Those'],
        'Yaqin ko‘plik uchun these.',
      ),
    ],
  },

  challenge: {
    id: 'f05-ch01',
    title: 'Classroom Explorer',
    description: 'Sinfingizni ingliz tilida tasvirlang.',
    difficulty: 'challenge',
    bonusXp: 35,
    tasks: [
      {
        id: 'f05-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'are / These / books / my',
        correctAnswer: 'These are my books.',
      },
    ],
  },

  test: {
    id: 'f05-test',
    title: 'Lesson 5 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f05-t01',
        '___ is my book. (near)',
        'This',
        ['This', 'That', 'These', 'Those'],
        'Yaqin birlik uchun this.',
      ),
      testQuestion(
        'f05-t02',
        '___ is the door. (far)',
        'That',
        ['This', 'That', 'These', 'Those'],
        'Uzoq birlik uchun that.',
      ),
      testQuestion(
        'f05-t03',
        '___ are my books. (near)',
        'These',
        ['This', 'That', 'These', 'Those'],
        'Yaqin ko‘plik uchun these.',
      ),
      testQuestion(
        'f05-t04',
        '___ are your bags. (far)',
        'Those',
        ['This', 'That', 'These', 'Those'],
        'Uzoq ko‘plik uchun those.',
      ),
      testQuestion(
        'f05-t05',
        'What does “classroom” mean?',
        'sinf xonasi',
        ['sinf xonasi', 'maktab', 'doska', 'o‘qituvchi'],
        'Classroom — sinf xonasi.',
      ),
      testQuestion(
        'f05-t06',
        'Choose the correct sentence.',
        'This is my classroom.',
        [
          'This are my classroom.',
          'This is my classroom.',
          'These is my classroom.',
          'That are my classroom.',
        ],
        'This + is birlikdagi predmet uchun.',
      ),
      testQuestion(
        'f05-t07',
        'Choose the correct plural sentence.',
        'These are my books.',
        [
          'This are my books.',
          'These is my books.',
          'These are my books.',
          'Those is my books.',
        ],
        'These + are + plural noun.',
      ),
      testQuestion(
        'f05-t08',
        '“maktab” ingliz tilida?',
        'school',
        ['school', 'classroom', 'desk', 'lesson'],
        'School — maktab.',
      ),
      testQuestion(
        'f05-t09',
        'Choose: ___ is my teacher. (near)',
        'This',
        ['This', 'These', 'Those', 'They'],
        'Yaqin birlik uchun this.',
      ),
      testQuestion(
        'f05-t10',
        'Choose: ___ are desks. (far)',
        'Those',
        ['This', 'That', 'These', 'Those'],
        'Uzoq ko‘plik uchun those.',
      ),
    ],
  },

  rewards: standardReward(130),

  theme: theme(
    '🏫',
    'from-emerald-500 via-teal-600 to-cyan-600',
    'green',
  ),

  previousLessonId: 'foundation-04',
  nextLessonId: 'foundation-06',
  prerequisiteLessonIds: ['foundation-04'],
}


/* =========================================================
   🔥 LESSON 06
   TO BE — POSITIVE / NEGATIVE
========================================================= */

const LESSON_06: EnglishLesson = {
  id: 'foundation-06',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-2',
  lessonNumber: 6,
  title: 'I Am, You Are, He Is',
  subtitle: 'To be: positive va negative',
  emoji: '⚡',
  description:
    'am/is/are ni chuqurroq o‘rganing: tasdiq, inkor va qisqartma shakllar.',
  type: 'grammar',
  difficulty: 'medium',
  status: 'locked',
  estimatedMinutes: 30,

  objectives: [
    'am/is/are ni avtomatik tanlash',
    'Positive sentences',
    'Negative sentences',
    'isn’t / aren’t',
    'I’m / he’s / they’re qisqartmalarini tushunish',
  ],

  skills: [
    'grammar',
    'speaking',
    'writing',
    'communication',
  ],

  topics: [
    'To be',
    'Positive',
    'Negative',
    'Contractions',
  ],

  vocabulary: [
    v('f06-v01', 'happy', 'xursand', 'emotion', 'I am happy.', 'Men xursandman.', '😊'),
    v('f06-v02', 'sad', 'xafa', 'emotion', 'She is sad.', 'U xafa.', '😢'),
    v('f06-v03', 'tired', 'charchagan', 'emotion', 'I am tired.', 'Men charchaganman.', '😴'),
    v('f06-v04', 'hungry', 'och', 'emotion', 'They are hungry.', 'Ular och.', '🍽️'),
    v('f06-v05', 'ready', 'tayyor', 'general', 'We are ready.', 'Biz tayyormiz.', '✅'),
    v('f06-v06', 'busy', 'band', 'general', 'He is busy.', 'U band.', '⏳'),
    v('f06-v07', 'kind', 'mehribon', 'emotion', 'She is kind.', 'U mehribon.', '❤️'),
    v('f06-v08', 'young', 'yosh', 'general', 'He is young.', 'U yosh.', '👦'),
  ],

  grammar: [
    grammar(
      'f06-g01',
      'Positive To Be',
      'verb-to-be',
      'am/is/are orqali shaxs, holat va kasbni tasdiqlaymiz.',
      'Positive sentence inkorsiz tasdiq gapdir.',
      'Subject + am/is/are + complement',
      [
        {
          english: 'I am happy.',
          uzbek: 'Men xursandman.',
        },
        {
          english: 'He is tired.',
          uzbek: 'U charchagan.',
        },
        {
          english: 'They are ready.',
          uzbek: 'Ular tayyor.',
        },
      ],
    ),
    grammar(
      'f06-g02',
      'Negative To Be',
      'negatives',
      'Inkor qilish uchun am not, is not yoki are not ishlatiladi.',
      'To be dan keyin not qo‘shiladi.',
      'Subject + am/is/are + not + complement',
      [
        {
          english: 'I am not tired.',
          uzbek: 'Men charchagan emasman.',
        },
        {
          english: 'He is not busy.',
          uzbek: 'U band emas.',
        },
        {
          english: 'They are not hungry.',
          uzbek: 'Ular och emas.',
        },
      ],
      [
        'is not → isn’t',
        'are not → aren’t',
        'am not odatda I’m not shaklida ishlatiladi.',
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f06-s01',
      title: 'Positive Sentence',
      type: 'subject-be-adjective',
      formula: 'Subject + BE + adjective',
      explanation: 'Holat yoki sifatni aytish.',
      parts: [
        { label: 'S', name: 'Subject', description: 'Kim?' },
        { label: 'BE', name: 'am/is/are', description: 'To be' },
        { label: 'ADJ', name: 'Adjective', description: 'Sifat/holat' },
      ],
      examples: [
        {
          english: 'I am happy.',
          uzbek: 'Men xursandman.',
        },
        {
          english: 'She is kind.',
          uzbek: 'U mehribon.',
        },
      ],
    },
    {
      id: 'f06-s02',
      title: 'Negative Sentence',
      type: 'negative',
      formula: 'Subject + BE + NOT + complement',
      explanation: 'Gapni inkor qilish.',
      parts: [
        { label: 'S', name: 'Subject', description: 'Kim?' },
        { label: 'BE', name: 'am/is/are', description: 'To be' },
        { label: 'NOT', name: 'not', description: 'Inkor' },
      ],
      examples: [
        {
          english: 'I am not tired.',
          uzbek: 'Men charchagan emasman.',
        },
        {
          english: 'He is not busy.',
          uzbek: 'U band emas.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f06-e01',
      'rule',
      'Positive → Negative',
      'Positive gapdagi am/is/are dan keyin not qo‘shsangiz, inkor gap hosil bo‘ladi.',
      '🔄',
    ),
    explanation(
      'f06-e02',
      'memory',
      'Short Forms',
      'I am → I’m, he is → he’s, she is → she’s, we are → we’re, they are → they’re.',
      '⚡',
    ),
  ],

  examples: [
    example('f06-ex01', 'I am happy.', 'Men xursandman.', 'am'),
    example('f06-ex02', 'I am not sad.', 'Men xafa emasman.', 'am not'),
    example('f06-ex03', 'He is tired.', 'U charchagan.', 'is'),
    example('f06-ex04', 'He isn’t busy.', 'U band emas.', 'isn’t'),
    example('f06-ex05', 'They are ready.', 'Ular tayyor.', 'are'),
    example('f06-ex06', 'They aren’t hungry.', 'Ular och emas.', 'aren’t'),
  ],

  activities: [
    activity(
      'f06-a01',
      'multiple-choice',
      'Choose',
      'To‘g‘ri fe’lni tanlang.',
      'She ___ happy.',
      'is',
      ['am', 'is', 'are', 'be'],
    ),
    activity(
      'f06-a02',
      'multiple-choice',
      'Negative',
      'Inkor shaklini toping.',
      'He ___ tired.',
      'isn’t',
      ['aren’t', 'isn’t', 'am not', 'don’t'],
    ),
    activity(
      'f06-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'not / am / I / tired',
      'I am not tired.',
    ),
    activity(
      'f06-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'U band emas.',
      'He is not busy.',
    ),
  ],

  speaking: {
    id: 'f06-sp01',
    title: 'How Do You Feel?',
    instruction:
      'Bugungi holatingiz haqida positive va negative gaplar ayting.',
    mode: 'conversation',
    phrase:
      'I am happy. I am not tired. I am ready. My friend is happy.',
    emoji: '😊',
    repetitions: 3,
    targetWords: ['happy', 'tired', 'ready', 'busy'],
    targetGrammar: ['f06-g01', 'f06-g02'],
  },

  writing: {
    id: 'f06-w01',
    title: 'Positive & Negative',
    instruction:
      '3 ta positive va 3 ta negative sentence yozing.',
    prompt:
      'Write six sentences using am, is, are and negative forms.',
    minimumWords: 25,
    targetGrammar: ['f06-g01', 'f06-g02'],
  },

  review: {
    id: 'f06-review',
    title: 'To Be Review',
    description: 'am/is/are va negative shakllarni takrorlang.',
    questions: [
      testQuestion(
        'f06-r01',
        'She ___ happy.',
        'is',
        ['am', 'is', 'are', 'be'],
        'She bilan is ishlatiladi.',
      ),
      testQuestion(
        'f06-r02',
        'They ___ tired.',
        'aren’t',
        ['isn’t', 'aren’t', 'am not', 'doesn’t'],
        'They bilan are, inkorda aren’t ishlatiladi.',
      ),
    ],
  },

  challenge: {
    id: 'f06-ch01',
    title: 'Positive vs Negative',
    description:
      'Bir xil fikrni positive va negative shaklda ayting.',
    difficulty: 'challenge',
    bonusXp: 40,
    tasks: [
      {
        id: 'f06-ct01',
        instruction: 'Negative sentence tuzing.',
        type: 'correct-mistake',
        prompt: 'I am tired → inkor qiling.',
        correctAnswer: 'I am not tired.',
      },
    ],
  },

  test: {
    id: 'f06-test',
    title: 'Lesson 6 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f06-t01',
        'I ___ happy.',
        'am',
        ['am', 'is', 'are', 'be'],
        'I bilan am.',
      ),
      testQuestion(
        'f06-t02',
        'She ___ tired.',
        'is',
        ['am', 'is', 'are', 'be'],
        'She bilan is.',
      ),
      testQuestion(
        'f06-t03',
        'They ___ ready.',
        'are',
        ['am', 'is', 'are', 'be'],
        'They bilan are.',
      ),
      testQuestion(
        'f06-t04',
        'I ___ not sad.',
        'am',
        ['am', 'is', 'are', 'be'],
        'I am not.',
      ),
      testQuestion(
        'f06-t05',
        'He ___ not busy.',
        'is',
        ['am', 'is', 'are', 'be'],
        'He is not.',
      ),
      testQuestion(
        'f06-t06',
        'They ___ not hungry.',
        'are',
        ['am', 'is', 'are', 'be'],
        'They are not.',
      ),
      testQuestion(
        'f06-t07',
        'Choose the contraction: she is',
        'she’s',
        ['she’m', 'she’s', 'she’re', 'shes are'],
        'She is → she’s.',
      ),
      testQuestion(
        'f06-t08',
        'Choose the contraction: they are',
        'they’re',
        ['they’s', 'they’re', 'they’m', 'they is'],
        'They are → they’re.',
      ),
      testQuestion(
        'f06-t09',
        'Choose the correct sentence.',
        'I am not tired.',
        [
          'I not am tired.',
          'I am not tired.',
          'I is not tired.',
          'I are not tired.',
        ],
        'Negative formula: Subject + am/is/are + not.',
      ),
      testQuestion(
        'f06-t10',
        'Choose the correct sentence.',
        'They aren’t hungry.',
        [
          'They isn’t hungry.',
          'They aren’t hungry.',
          'They am not hungry.',
          'They not are hungry.',
        ],
        'They are not → They aren’t.',
      ),
    ],
  },

  rewards: standardReward(140),

  theme: theme(
    '⚡',
    'from-orange-500 via-amber-500 to-yellow-500',
    'orange',
  ),

  previousLessonId: 'foundation-05',
  nextLessonId: 'foundation-07',
  prerequisiteLessonIds: ['foundation-05'],
}


/* =========================================================
   🏠 LESSON 07
   MY HOME
========================================================= */

const LESSON_07: EnglishLesson = {
  id: 'foundation-07',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-2',
  lessonNumber: 7,
  title: 'My Home',
  subtitle: 'Uy va xonalar',
  emoji: '🏠',
  description:
    'Uy, xonalar va kundalik buyumlarni tasvirlashni o‘rganing.',
  type: 'mixed',
  difficulty: 'easy',
  status: 'locked',
  estimatedMinutes: 25,

  objectives: [
    'Home vocabulary',
    'Room names',
    'This is / It is',
    'Adjectives bilan tasvirlash',
    'Uy haqida 5–7 ta gap tuzish',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'reading',
  ],

  topics: [
    'Home',
    'Rooms',
    'Description',
  ],

  vocabulary: [
    v('f07-v01', 'home', 'uy', 'home', 'My home is small.', 'Mening uyim kichik.', '🏠'),
    v('f07-v02', 'room', 'xona', 'home', 'This is my room.', 'Bu mening xonam.', '🚪'),
    v('f07-v03', 'bedroom', 'yotoqxona', 'home', 'My bedroom is clean.', 'Yotoqxonam toza.', '🛏️'),
    v('f07-v04', 'kitchen', 'oshxona', 'home', 'The kitchen is big.', 'Oshxona katta.', '🍳'),
    v('f07-v05', 'bathroom', 'hammom', 'home', 'The bathroom is clean.', 'Hammom toza.', '🚿'),
    v('f07-v06', 'living room', 'mehmonxona', 'home', 'The living room is nice.', 'Mehmonxona yaxshi.', '🛋️'),
    v('f07-v07', 'bed', 'karavot', 'home', 'The bed is soft.', 'Karavot yumshoq.', '🛏️'),
    v('f07-v08', 'sofa', 'divan', 'home', 'The sofa is big.', 'Divan katta.', '🛋️'),
    v('f07-v09', 'clean', 'toza', 'general', 'My room is clean.', 'Xonam toza.', '✨'),
    v('f07-v10', 'small', 'kichik', 'general', 'My room is small.', 'Xonam kichik.', '🔹'),
  ],

  grammar: [
    grammar(
      'f07-g01',
      'BE + Adjective',
      'adjectives',
      'Predmet yoki joyni tasvirlash uchun be + adjective ishlatiladi.',
      'Sifat predmetning holati yoki xususiyatini bildiradi.',
      'Subject + am/is/are + adjective',
      [
        {
          english: 'My room is clean.',
          uzbek: 'Xonam toza.',
        },
        {
          english: 'The kitchen is big.',
          uzbek: 'Oshxona katta.',
        },
        {
          english: 'The rooms are small.',
          uzbek: 'Xonalar kichik.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f07-s01',
      title: 'Describe a Place',
      type: 'subject-be-adjective',
      formula: 'Subject + BE + adjective',
      explanation: 'Joy yoki predmetni tasvirlash.',
      parts: [
        { label: 'S', name: 'Subject', description: 'Nima?' },
        { label: 'BE', name: 'am/is/are', description: 'To be' },
        { label: 'ADJ', name: 'Adjective', description: 'Qanday?' },
      ],
      examples: [
        {
          english: 'My room is clean.',
          uzbek: 'Xonam toza.',
        },
        {
          english: 'My house is big.',
          uzbek: 'Uyim katta.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f07-e01',
      'concept',
      'Describe your world',
      'Ingliz tilida biror narsani tasvirlash uchun be + adjective juda muhim.',
      '🏠',
    ),
    explanation(
      'f07-e02',
      'tip',
      'Gapni kengaytirish',
      'My room is clean. → My room is small and clean. Bir nechta sifatni and bilan bog‘lash mumkin.',
      '💡',
    ),
  ],

  examples: [
    example('f07-ex01', 'My home is big.', 'Mening uyim katta.'),
    example('f07-ex02', 'My room is small.', 'Xonam kichik.'),
    example('f07-ex03', 'The kitchen is clean.', 'Oshxona toza.'),
    example('f07-ex04', 'The living room is nice.', 'Mehmonxona yaxshi.'),
    example('f07-ex05', 'My bedroom is clean and small.', 'Yotoqxonam toza va kichik.'),
  ],

  activities: [
    activity(
      'f07-a01',
      'multiple-choice',
      'Choose',
      'To‘g‘ri fe’lni tanlang.',
      'My room ___ clean.',
      'is',
      ['am', 'is', 'are', 'be'],
    ),
    activity(
      'f07-a02',
      'multiple-choice',
      'Vocabulary',
      'To‘g‘ri tarjimani toping.',
      'bedroom',
      'yotoqxona',
      ['oshxona', 'yotoqxona', 'hammom', 'mehmonxona'],
    ),
    activity(
      'f07-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'is / My / clean / room',
      'My room is clean.',
    ),
    activity(
      'f07-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'Oshxona katta.',
      'The kitchen is big.',
    ),
  ],

  speaking: {
    id: 'f07-sp01',
    title: 'Describe Your Home',
    instruction:
      'Uyingiz haqida kamida 6 ta inglizcha gap ayting.',
    mode: 'conversation',
    phrase:
      'My home is ___. My room is ___. The kitchen is ___.',
    emoji: '🏠',
    repetitions: 2,
    targetWords: ['home', 'room', 'kitchen', 'bedroom', 'clean'],
    targetGrammar: ['f07-g01'],
  },

  writing: {
    id: 'f07-w01',
    title: 'My Home',
    instruction: 'Uyingiz haqida 6–8 ta gap yozing.',
    prompt: 'Describe your home and rooms.',
    minimumWords: 30,
    targetGrammar: ['f07-g01'],
  },

  review: {
    id: 'f07-review',
    title: 'Home Review',
    description: 'Home vocabulary va adjective sentences.',
    questions: [
      testQuestion(
        'f07-r01',
        'My room ___ clean.',
        'is',
        ['am', 'is', 'are', 'be'],
        'Room birlikda, shuning uchun is.',
      ),
      testQuestion(
        'f07-r02',
        '“yotoqxona” qaysi?',
        'bedroom',
        ['kitchen', 'bedroom', 'bathroom', 'home'],
        'Bedroom — yotoqxona.',
      ),
    ],
  },

  challenge: {
    id: 'f07-ch01',
    title: 'Home Designer',
    description: 'Tasavvuriy uy yarating va uni tasvirlang.',
    difficulty: 'challenge',
    bonusXp: 35,
    tasks: [
      {
        id: 'f07-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'room / is / My / clean',
        correctAnswer: 'My room is clean.',
      },
    ],
  },

  test: {
    id: 'f07-test',
    title: 'Lesson 7 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f07-t01',
        'My room ___ clean.',
        'is',
        ['am', 'is', 'are', 'be'],
        'My room birlikda, shuning uchun is.',
      ),
      testQuestion(
        'f07-t02',
        'The kitchen ___ big.',
        'is',
        ['am', 'is', 'are', 'be'],
        'Kitchen birlikda.',
      ),
      testQuestion(
        'f07-t03',
        'The rooms ___ small.',
        'are',
        ['am', 'is', 'are', 'be'],
        'Rooms ko‘plik, shuning uchun are.',
      ),
      testQuestion(
        'f07-t04',
        'What does bedroom mean?',
        'yotoqxona',
        ['oshxona', 'yotoqxona', 'hammom', 'mehmonxona'],
        'Bedroom — yotoqxona.',
      ),
      testQuestion(
        'f07-t05',
        'What does kitchen mean?',
        'oshxona',
        ['oshxona', 'yotoqxona', 'uy', 'xona'],
        'Kitchen — oshxona.',
      ),
      testQuestion(
        'f07-t06',
        'Choose the correct sentence.',
        'My home is big.',
        [
          'My home are big.',
          'My home is big.',
          'My home am big.',
          'My home be big.',
        ],
        'Home birlikda: is.',
      ),
      testQuestion(
        'f07-t07',
        'Choose the adjective.',
        'My room is clean.',
        ['room', 'is', 'clean', 'my'],
        'Clean — sifat.',
      ),
      testQuestion(
        'f07-t08',
        '“mehmonxona” qaysi?',
        'living room',
        ['bedroom', 'living room', 'bathroom', 'kitchen'],
        'Living room — mehmonxona.',
      ),
      testQuestion(
        'f07-t09',
        'Choose: The rooms ___ clean.',
        'are',
        ['am', 'is', 'are', 'has'],
        'Rooms ko‘plik.',
      ),
      testQuestion(
        'f07-t10',
        'Choose the correct sentence.',
        'The kitchen is clean.',
        [
          'The kitchen are clean.',
          'The kitchen is clean.',
          'The kitchen am clean.',
          'The kitchen clean is.',
        ],
        'Subject + is + adjective.',
      ),
    ],
  },

  rewards: standardReward(140),

  theme: theme(
    '🏠',
    'from-sky-500 via-blue-600 to-indigo-600',
    'blue',
  ),

  previousLessonId: 'foundation-06',
  nextLessonId: 'foundation-08',
  prerequisiteLessonIds: ['foundation-06'],
}


/* =========================================================
   📍 LESSON 08
   PREPOSITIONS OF PLACE
========================================================= */

const LESSON_08: EnglishLesson = {
  id: 'foundation-08',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-2',
  lessonNumber: 8,
  title: 'Where Is It?',
  subtitle: 'Joylashuv: in, on, under, next to',
  emoji: '📍',
  description:
    'Predmetlar qayerda joylashganini ingliz tilida aniq aytishni o‘rganing.',
  type: 'grammar',
  difficulty: 'medium',
  status: 'locked',
  estimatedMinutes: 28,

  objectives: [
    'in, on, under',
    'next to, near',
    'Joylashuvni so‘rash',
    'Where is...? savoli',
    'There is bilan joylashuvni tasvirlash',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'reading',
  ],

  topics: [
    'Prepositions',
    'Location',
    'Where',
  ],

  vocabulary: [
    v('f08-v01', 'in', 'ichida', 'place', 'The book is in the bag.', 'Kitob sumka ichida.', '📦'),
    v('f08-v02', 'on', 'ustida', 'place', 'The book is on the table.', 'Kitob stol ustida.', '⬆️'),
    v('f08-v03', 'under', 'ostida', 'place', 'The bag is under the desk.', 'Sumka parta ostida.', '⬇️'),
    v('f08-v04', 'next to', 'yonida', 'place', 'The chair is next to the table.', 'Stul stol yonida.', '↔️'),
    v('f08-v05', 'near', 'yaqinida', 'place', 'The school is near my home.', 'Maktab uyimga yaqin.', '📍'),
    v('f08-v06', 'behind', 'orqasida', 'place', 'The bag is behind the chair.', 'Sumka stul orqasida.', '🔙'),
    v('f08-v07', 'box', 'quti', 'home', 'The book is in the box.', 'Kitob qutida.', '📦'),
    v('f08-v08', 'floor', 'pol', 'home', 'The bag is on the floor.', 'Sumka polda.', '🏠'),
  ],

  grammar: [
    grammar(
      'f08-g01',
      'Prepositions of Place',
      'prepositions',
      'Predmetning joylashuvini ko‘rsatish uchun prepositions ishlatiladi.',
      'In — ichida, on — ustida, under — ostida, next to — yonida.',
      'Subject + BE + preposition + place',
      [
        {
          english: 'The book is on the table.',
          uzbek: 'Kitob stol ustida.',
        },
        {
          english: 'The bag is under the desk.',
          uzbek: 'Sumka parta ostida.',
        },
        {
          english: 'The pen is in the bag.',
          uzbek: 'Ruchka sumka ichida.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f08-s01',
      title: 'Location Sentence',
      type: 'custom',
      formula: 'Subject + BE + Preposition + Place',
      explanation:
        'Predmet qayerda ekanini aytish uchun ishlatiladi.',
      parts: [
        { label: 'S', name: 'Subject', description: 'Nima?' },
        { label: 'BE', name: 'is/are', description: 'To be' },
        { label: 'PREP', name: 'Preposition', description: 'Joylashuv' },
        { label: 'PLACE', name: 'Place', description: 'Joy' },
      ],
      examples: [
        {
          english: 'The book is on the table.',
          uzbek: 'Kitob stol ustida.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f08-e01',
      'concept',
      'Where is it?',
      'Where is...? — bitta predmetning joylashuvini so‘rash uchun ishlatiladi.',
      '📍',
    ),
    explanation(
      'f08-e02',
      'memory',
      'Three magic words',
      'in = ichida, on = ustida, under = ostida.',
      '🧠',
    ),
  ],

  examples: [
    example('f08-ex01', 'The book is on the table.', 'Kitob stol ustida.'),
    example('f08-ex02', 'The pen is in the bag.', 'Ruchka sumka ichida.'),
    example('f08-ex03', 'The bag is under the desk.', 'Sumka parta ostida.'),
    example('f08-ex04', 'The chair is next to the table.', 'Stul stol yonida.'),
  ],

  activities: [
    activity(
      'f08-a01',
      'multiple-choice',
      'Preposition',
      'To‘g‘ri predlogni tanlang.',
      'The book is ___ the table.',
      'on',
      ['in', 'on', 'under', 'behind'],
    ),
    activity(
      'f08-a02',
      'multiple-choice',
      'Preposition',
      'To‘g‘ri variantni tanlang.',
      'The pen is ___ the bag.',
      'in',
      ['in', 'on', 'under', 'next'],
    ),
    activity(
      'f08-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'is / book / The / table / on / the',
      'The book is on the table.',
    ),
    activity(
      'f08-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'Sumka parta ostida.',
      'The bag is under the desk.',
    ),
  ],

  speaking: {
    id: 'f08-sp01',
    title: 'Where Is It?',
    instruction:
      'Xonadagi 5 ta buyumning joylashuvini ayting.',
    mode: 'conversation',
    phrase:
      'The book is on the table. The pen is in the bag. The bag is under the desk.',
    emoji: '📍',
    repetitions: 2,
    targetWords: ['in', 'on', 'under', 'next to'],
    targetGrammar: ['f08-g01'],
  },

  writing: {
    id: 'f08-w01',
    title: 'My Room',
    instruction:
      'Xonadagi buyumlarning joylashuvini 6 ta gap bilan yozing.',
    prompt: 'Describe where objects are in your room.',
    minimumWords: 25,
    targetGrammar: ['f08-g01'],
  },

  review: {
    id: 'f08-review',
    title: 'Place Review',
    description: 'Joylashuv predloglarini mustahkamlang.',
    questions: [
      testQuestion(
        'f08-r01',
        'The book is ___ the table.',
        'on',
        ['in', 'on', 'under', 'behind'],
        'Stol ustida — on the table.',
      ),
      testQuestion(
        'f08-r02',
        'The pen is ___ the bag.',
        'in',
        ['in', 'on', 'under', 'behind'],
        'Sumka ichida — in the bag.',
      ),
    ],
  },

  challenge: {
    id: 'f08-ch01',
    title: 'Location Master',
    description:
      '5 ta buyumdan foydalanib kichik xona xaritasini tasvirlang.',
    difficulty: 'challenge',
    bonusXp: 40,
    tasks: [
      {
        id: 'f08-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'is / The / book / table / on / the',
        correctAnswer: 'The book is on the table.',
      },
    ],
  },

  test: {
    id: 'f08-test',
    title: 'Lesson 8 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f08-t01',
        'The book is ___ the table.',
        'on',
        ['in', 'on', 'under', 'behind'],
        'Ustida — on.',
      ),
      testQuestion(
        'f08-t02',
        'The pen is ___ the bag.',
        'in',
        ['in', 'on', 'under', 'behind'],
        'Ichida — in.',
      ),
      testQuestion(
        'f08-t03',
        'The bag is ___ the desk.',
        'under',
        ['in', 'on', 'under', 'near'],
        'Ostida — under.',
      ),
      testQuestion(
        'f08-t04',
        'The chair is ___ the table.',
        'next to',
        ['in', 'under', 'next to', 'on'],
        'Yonida — next to.',
      ),
      testQuestion(
        'f08-t05',
        'Choose the correct question.',
        'Where is the book?',
        [
          'Where the book is?',
          'Where is the book?',
          'What is the book where?',
          'Where are the book?',
        ],
        'Where + is + singular noun.',
      ),
      testQuestion(
        'f08-t06',
        'Choose the correct sentence.',
        'The book is on the table.',
        [
          'The book on is table.',
          'The book is on the table.',
          'The book are on table.',
          'The book is the on table.',
        ],
        'Subject + be + preposition + place.',
      ),
      testQuestion(
        'f08-t07',
        'What does “under” mean?',
        'ostida',
        ['ichida', 'ustida', 'ostida', 'yonida'],
        'Under — ostida.',
      ),
      testQuestion(
        'f08-t08',
        'What does “behind” mean?',
        'orqasida',
        ['orqasida', 'yonida', 'ichida', 'ustida'],
        'Behind — orqasida.',
      ),
      testQuestion(
        'f08-t09',
        'The school is ___ my home.',
        'near',
        ['near', 'under', 'in', 'on'],
        'Uyga yaqin — near my home.',
      ),
      testQuestion(
        'f08-t10',
        'Choose the correct sentence.',
        'The bag is under the desk.',
        [
          'The bag are under the desk.',
          'The bag is under the desk.',
          'The bag is under desk the.',
          'The bag under is the desk.',
        ],
        'To‘g‘ri sentence structure ishlatilgan.',
      ),
    ],
  },

  rewards: standardReward(140),

  theme: theme(
    '📍',
    'from-cyan-500 via-sky-600 to-blue-700',
    'cyan',
  ),

  previousLessonId: 'foundation-07',
  nextLessonId: 'foundation-09',
  prerequisiteLessonIds: ['foundation-07'],
}


/* =========================================================
   🍎 LESSON 09
   FOOD & HAVE / HAS
========================================================= */

const LESSON_09: EnglishLesson = {
  id: 'foundation-09',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-2',
  lessonNumber: 9,
  title: 'Food & Drinks',
  subtitle: 'Ovqatlar va have / has',
  emoji: '🍎',
  description:
    'Ovqat va ichimliklarni o‘rganing. Have va has orqali nimaga ega ekaningizni ayting.',
  type: 'mixed',
  difficulty: 'medium',
  status: 'locked',
  estimatedMinutes: 28,

  objectives: [
    'Food vocabulary',
    'Drinks',
    'have / has',
    'I have / She has',
    'Oddiy food preferences',
  ],

  skills: [
    'vocabulary',
    'grammar',
    'speaking',
    'reading',
  ],

  topics: [
    'Food',
    'Drinks',
    'Have / Has',
  ],

  vocabulary: [
    v('f09-v01', 'bread', 'non', 'food', 'I have bread.', 'Menda non bor.', '🍞'),
    v('f09-v02', 'water', 'suv', 'food', 'I drink water.', 'Men suv ichaman.', '💧'),
    v('f09-v03', 'milk', 'sut', 'food', 'I drink milk.', 'Men sut ichaman.', '🥛'),
    v('f09-v04', 'rice', 'guruch', 'food', 'We have rice.', 'Bizda guruch bor.', '🍚'),
    v('f09-v05', 'apple', 'olma', 'food', 'I have an apple.', 'Menda olma bor.', '🍎'),
    v('f09-v06', 'banana', 'banan', 'food', 'She has a banana.', 'Unda banan bor.', '🍌'),
    v('f09-v07', 'egg', 'tuxum', 'food', 'I have an egg.', 'Menda tuxum bor.', '🥚'),
    v('f09-v08', 'tea', 'choy', 'food', 'I have tea.', 'Menda choy bor.', '🍵'),
    v('f09-v09', 'water', 'suv', 'food', 'We have water.', 'Bizda suv bor.', '💧'),
    v('f09-v10', 'breakfast', 'nonushta', 'food', 'I have breakfast.', 'Men nonushta qilaman.', '🍳'),
  ],

  grammar: [
    grammar(
      'f09-g01',
      'Have and Has',
      'have-has',
      'I/you/we/they bilan have, he/she/it bilan has ishlatiladi.',
      'Have/has ega bo‘lishni bildiradi.',
      'I/You/We/They + have; He/She/It + has',
      [
        {
          english: 'I have a book.',
          uzbek: 'Menda kitob bor.',
        },
        {
          english: 'She has a pen.',
          uzbek: 'Unda ruchka bor.',
        },
        {
          english: 'They have a car.',
          uzbek: 'Ularda mashina bor.',
        },
      ],
      [
        'I have',
        'You have',
        'He has',
        'She has',
        'We have',
        'They have',
      ],
      [
        {
          wrong: 'She have a book.',
          correct: 'She has a book.',
          explanation: 'She bilan has ishlatiladi.',
        },
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f09-s01',
      title: 'Have / Has Sentence',
      type: 'subject-have-object',
      formula: 'Subject + have/has + object',
      explanation: 'Egalik yoki mavjudlikni aytish.',
      parts: [
        { label: 'S', name: 'Subject', description: 'Kim?' },
        { label: 'V', name: 'have/has', description: 'Ega bo‘lmoq' },
        { label: 'O', name: 'Object', description: 'Nima?' },
      ],
      examples: [
        {
          english: 'I have a book.',
          uzbek: 'Menda kitob bor.',
        },
        {
          english: 'She has a pen.',
          uzbek: 'Unda ruchka bor.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f09-e01',
      'rule',
      'Have or Has?',
      'He, she, it bilan has; qolgan subjectlar bilan have.',
      '🧠',
    ),
    explanation(
      'f09-e02',
      'warning',
      'Eng ko‘p xato',
      'She have noto‘g‘ri. She has to‘g‘ri. He have noto‘g‘ri. He has to‘g‘ri.',
      '⚠️',
    ),
  ],

  examples: [
    example('f09-ex01', 'I have an apple.', 'Menda olma bor.'),
    example('f09-ex02', 'You have a banana.', 'Senda banan bor.'),
    example('f09-ex03', 'She has a banana.', 'Unda banan bor.'),
    example('f09-ex04', 'He has a book.', 'Unda kitob bor.'),
    example('f09-ex05', 'We have bread.', 'Bizda non bor.'),
    example('f09-ex06', 'They have water.', 'Ularda suv bor.'),
  ],

  activities: [
    activity(
      'f09-a01',
      'multiple-choice',
      'Have or Has',
      'To‘g‘ri variantni tanlang.',
      'She ___ a banana.',
      'has',
      ['have', 'has', 'is', 'are'],
    ),
    activity(
      'f09-a02',
      'multiple-choice',
      'Have or Has',
      'To‘g‘ri variantni tanlang.',
      'They ___ water.',
      'have',
      ['have', 'has', 'is', 'are'],
    ),
    activity(
      'f09-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'a / have / I / book',
      'I have a book.',
    ),
    activity(
      'f09-a04',
      'translate',
      'Translate',
      'Tarjima qiling.',
      'Unda banan bor.',
      'She has a banana.',
    ),
  ],

  speaking: {
    id: 'f09-sp01',
    title: 'What Do You Have?',
    instruction:
      'O‘zingizda bor 5 ta narsani ingliz tilida ayting.',
    mode: 'conversation',
    phrase:
      'I have a book. I have a pen. I have a phone. I have water.',
    emoji: '🍎',
    repetitions: 2,
    targetWords: ['book', 'pen', 'phone', 'water'],
    targetGrammar: ['f09-g01'],
  },

  writing: {
    id: 'f09-w01',
    title: 'Things I Have',
    instruction: 'O‘zingizda bor narsalar haqida 6 ta gap yozing.',
    prompt: 'Write sentences with have and has.',
    minimumWords: 25,
    targetGrammar: ['f09-g01'],
  },

  review: {
    id: 'f09-review',
    title: 'Have / Has Review',
    description: 'Have va has ni mustahkamlang.',
    questions: [
      testQuestion(
        'f09-r01',
        'She ___ a book.',
        'has',
        ['have', 'has', 'is', 'are'],
        'She bilan has.',
      ),
      testQuestion(
        'f09-r02',
        'They ___ water.',
        'have',
        ['have', 'has', 'is', 'are'],
        'They bilan have.',
      ),
    ],
  },

  challenge: {
    id: 'f09-ch01',
    title: 'Food Basket Challenge',
    description:
      'Tasavvuriy savatdagi mahsulotlarni inglizcha tasvirlang.',
    difficulty: 'challenge',
    bonusXp: 40,
    tasks: [
      {
        id: 'f09-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'has / She / apple / an',
        correctAnswer: 'She has an apple.',
      },
    ],
  },

  test: {
    id: 'f09-test',
    title: 'Lesson 9 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion(
        'f09-t01',
        'I ___ a book.',
        'have',
        ['have', 'has', 'is', 'are'],
        'I bilan have.',
      ),
      testQuestion(
        'f09-t02',
        'She ___ a banana.',
        'has',
        ['have', 'has', 'is', 'are'],
        'She bilan has.',
      ),
      testQuestion(
        'f09-t03',
        'They ___ water.',
        'have',
        ['have', 'has', 'is', 'are'],
        'They bilan have.',
      ),
      testQuestion(
        'f09-t04',
        'He ___ a pen.',
        'has',
        ['have', 'has', 'is', 'are'],
        'He bilan has.',
      ),
      testQuestion(
        'f09-t05',
        'We ___ bread.',
        'have',
        ['have', 'has', 'is', 'are'],
        'We bilan have.',
      ),
      testQuestion(
        'f09-t06',
        'Choose the correct sentence.',
        'She has an apple.',
        [
          'She have an apple.',
          'She has an apple.',
          'She is an apple.',
          'She are an apple.',
        ],
        'She + has + object.',
      ),
      testQuestion(
        'f09-t07',
        'What does bread mean?',
        'non',
        ['non', 'suv', 'sut', 'guruch'],
        'Bread — non.',
      ),
      testQuestion(
        'f09-t08',
        'What does milk mean?',
        'sut',
        ['sut', 'suv', 'choy', 'non'],
        'Milk — sut.',
      ),
      testQuestion(
        'f09-t09',
        'Choose: I ___ an apple.',
        'have',
        ['have', 'has', 'am', 'is'],
        'I bilan have.',
      ),
      testQuestion(
        'f09-t10',
        'Choose the correct sentence.',
        'They have water.',
        [
          'They has water.',
          'They have water.',
          'They is water.',
          'They are water.',
        ],
        'They + have + object.',
      ),
    ],
  },

  rewards: standardReward(150),

  theme: theme(
    '🍎',
    'from-red-500 via-orange-500 to-amber-500',
    'orange',
  ),

  previousLessonId: 'foundation-08',
  nextLessonId: 'foundation-10',
  prerequisiteLessonIds: ['foundation-08'],
}


/* =========================================================
   🧪 LESSON FACTORY FOR THE REMAINING CURRICULUM
========================================================= */

/**
 * Quyidagi 10–30 darslar ham bir xil professional
 * engine bilan ishlaydi.
 *
 * Muhim:
 * Bu yerda curriculum mavzulari aniq belgilangan.
 * Keyingi kontent kengaytirilganda StudentAcademy
 * yoki navigation kodini o'zgartirish shart emas.
 */

interface LessonBlueprint {
  number: number
  id: string
  unitId: string
  title: string
  subtitle: string
  emoji: string
  description: string
  topics: string[]
  objectives: string[]
  vocabulary: EnglishVocabulary[]
  grammar: EnglishGrammar[]
  structures: EnglishSentenceStructure[]
  examples: EnglishExample[]
  next?: string
  previous: string
}


/* =========================================================
   LESSON 10
   PLURAL NOUNS
========================================================= */

const LESSON_10: EnglishLesson = {
  id: 'foundation-10',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-2',
  lessonNumber: 10,
  title: 'One or Many?',
  subtitle: 'Singular va plural nouns',
  emoji: '🔢',
  description:
    'Bitta va bir nechta predmetni farqlash, oddiy ko‘plik shakllarini yasash.',
  type: 'grammar',
  difficulty: 'medium',
  status: 'locked',
  estimatedMinutes: 28,

  objectives: [
    'Singular va pluralni farqlash',
    'Ko‘plikda -s qo‘shimchasini ishlatish',
    'Oddiy irregular plural bilan tanishish',
    'This is / These are ni bog‘lash',
  ],

  skills: ['vocabulary', 'grammar', 'writing', 'speaking'],

  topics: ['Singular', 'Plural', 'Nouns'],

  vocabulary: [
    v('f10-v01', 'book', 'kitob', 'school', 'One book.', 'Bitta kitob.', '📕'),
    v('f10-v02', 'books', 'kitoblar', 'school', 'Two books.', 'Ikki kitob.', '📚'),
    v('f10-v03', 'pen', 'ruchka', 'school', 'Three pens.', 'Uchta ruchka.', '🖊️'),
    v('f10-v04', 'pens', 'ruchkalar', 'school', 'My pens are blue.', 'Ruchkalarim ko‘k.', '🖊️'),
    v('f10-v05', 'child', 'bola', 'person', 'The child is happy.', 'Bola xursand.', '👦'),
    v('f10-v06', 'children', 'bolalar', 'person', 'The children are happy.', 'Bolalar xursand.', '👧'),
  ],

  grammar: [
    grammar(
      'f10-g01',
      'Plural Nouns',
      'plural',
      'Ko‘p oddiy otlarga -s qo‘shilib plural hosil qilinadi.',
      'One book → two books. Bir nechta narsani bildirganda noun shakli o‘zgaradi.',
      'singular noun + s → plural noun',
      [
        {
          english: 'one book',
          uzbek: 'bitta kitob',
        },
        {
          english: 'two books',
          uzbek: 'ikkita kitob',
        },
        {
          english: 'three pens',
          uzbek: 'uchta ruchka',
        },
      ],
      [
        'book → books',
        'pen → pens',
        'student → students',
      ],
    ),
  ],

  sentenceStructures: [
    {
      id: 'f10-s01',
      title: 'Plural Description',
      type: 'custom',
      formula: 'These are + plural noun',
      explanation: 'Yaqindagi ko‘plikdagi predmetlarni ko‘rsatish.',
      parts: [
        { label: 'THESE', name: 'These', description: 'Bular' },
        { label: 'BE', name: 'are', description: 'To be' },
        { label: 'N', name: 'Plural noun', description: 'Ko‘plik' },
      ],
      examples: [
        {
          english: 'These are books.',
          uzbek: 'Bular kitoblar.',
        },
      ],
    },
  ],

  explanations: [
    explanation(
      'f10-e01',
      'concept',
      'One or many?',
      'One = bitta, many = ko‘p. Ingliz tilida noun ko‘plikda ko‘pincha -s oladi.',
      '🔢',
    ),
  ],

  examples: [
    example('f10-ex01', 'One book.', 'Bitta kitob.'),
    example('f10-ex02', 'Two books.', 'Ikkita kitob.'),
    example('f10-ex03', 'One pen.', 'Bitta ruchka.'),
    example('f10-ex04', 'Three pens.', 'Uchta ruchka.'),
    example('f10-ex05', 'These are books.', 'Bular kitoblar.'),
    example('f10-ex06', 'The children are happy.', 'Bolalar xursand.'),
  ],

  activities: [
    activity(
      'f10-a01',
      'multiple-choice',
      'Plural',
      'Ko‘plik shaklini toping.',
      'book → ?',
      'books',
      ['bookes', 'books', 'book', 'bookies'],
    ),
    activity(
      'f10-a02',
      'multiple-choice',
      'Plural',
      'To‘g‘ri variantni tanlang.',
      'pen → ?',
      'pens',
      ['pens', 'penes', 'pen', 'pans'],
    ),
    activity(
      'f10-a03',
      'word-order',
      'Build',
      'Gap tuzing.',
      'are / These / books',
      'These are books.',
    ),
  ],

  speaking: {
    id: 'f10-sp01',
    title: 'One or Many',
    instruction:
      'Atrofingizdan birlik va ko‘plikdagi narsalarni topib ayting.',
    mode: 'conversation',
    phrase:
      'This is a book. These are books. This is a pen. These are pens.',
    emoji: '🔢',
    repetitions: 2,
    targetWords: ['book', 'books', 'pen', 'pens'],
    targetGrammar: ['f10-g01'],
  },

  writing: {
    id: 'f10-w01',
    title: 'Singular & Plural',
    instruction: '5 ta birlik va 5 ta ko‘plik misol yozing.',
    prompt: 'Write singular and plural noun examples.',
    minimumWords: 20,
    targetGrammar: ['f10-g01'],
  },

  review: {
    id: 'f10-review',
    title: 'Plural Review',
    description: 'Singular va pluralni tekshiring.',
    questions: [
      testQuestion(
        'f10-r01',
        'book →',
        'books',
        ['books', 'bookes', 'book', 'bookies'],
        'Oddiy plural: book → books.',
      ),
    ],
  },

  challenge: {
    id: 'f10-ch01',
    title: 'Plural Hunter',
    description: 'Xonadan 5 ta ko‘plikdagi predmet toping.',
    difficulty: 'challenge',
    bonusXp: 40,
    tasks: [
      {
        id: 'f10-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'are / These / pens',
        correctAnswer: 'These are pens.',
      },
    ],
  },

  test: {
    id: 'f10-test',
    title: 'Lesson 10 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion('f10-t01', 'book → plural?', 'books', ['books', 'bookes', 'book', 'bookies'], 'Book → books.'),
      testQuestion('f10-t02', 'pen → plural?', 'pens', ['pens', 'penes', 'pans', 'pen'], 'Pen → pens.'),
      testQuestion('f10-t03', 'student → plural?', 'students', ['student', 'students', 'studentes', 'studys'], 'Student → students.'),
      testQuestion('f10-t04', 'Choose: These ___ books.', 'are', ['am', 'is', 'are', 'be'], 'These bilan are.'),
      testQuestion('f10-t05', 'Choose the plural noun.', 'children', ['child', 'children', 'childs', 'childes'], 'Child ning irregular plural shakli children.'),
      testQuestion('f10-t06', 'Choose the correct sentence.', 'These are books.', ['These is books.', 'These are books.', 'This are books.', 'These books are is.'], 'These are + plural noun.'),
      testQuestion('f10-t07', '“kitoblar” qaysi?', 'books', ['book', 'books', 'booked', 'booking'], 'Books — kitoblar.'),
      testQuestion('f10-t08', 'One book, two ___.', 'books', ['book', 'books', 'bookes', 'booked'], 'Ko‘plikda -s.'),
      testQuestion('f10-t09', 'The children ___ happy.', 'are', ['am', 'is', 'are', 'has'], 'Children ko‘plik ma’nosida.'),
      testQuestion('f10-t10', 'Choose the correct phrase.', 'three pens', ['three pen', 'three pens', 'three penses', 'three panning'], 'Three bilan plural noun ishlatiladi.'),
    ],
  },

  rewards: standardReward(150),

  theme: theme(
    '🔢',
    'from-indigo-500 via-purple-600 to-pink-600',
    'purple',
  ),

  previousLessonId: 'foundation-09',
  nextLessonId: 'foundation-11',
  prerequisiteLessonIds: ['foundation-09'],
}


/* =========================================================
   📚 LESSON 11–30 CURRICULUM
========================================================= */

/*
 * 11 — Adjectives & description
 * 12 — There is / There are
 * 13 — Question words: What / Who / Where
 * 14 — Yes/No questions with BE
 * 15 — Short answers
 * 16 — Food & Likes
 * 17 — Present Simple: I/You/We/They
 * 18 — Present Simple: He/She/It + S
 * 19 — Do / Does questions
 * 20 — Don't / Doesn't
 * 21 — Daily Routine
 * 22 — Time & Days
 * 23 — Frequency: always / usually / sometimes / never
 * 24 — Can / Can't
 * 25 — Imperatives & Classroom English
 * 26 — Shopping & Prices
 * 27 — Places & Directions
 * 28 — Review: Sentence Builder
 * 29 — Reading & Speaking Mastery
 * 30 — FOUNDATION FINAL CHALLENGE
 *
 * Ushbu curriculum ataylab spiral shaklda qurilgan:
 *
 * yangi grammar
 *      ↓
 * vocabulary
 *      ↓
 * oldingi grammar bilan kombinatsiya
 *      ↓
 * speaking
 *      ↓
 * reading
 *      ↓
 * test
 *
 * Shu sababli o‘quvchi faqat qoida yodlamaydi,
 * balki oldingi bilimlarini yangi vaziyatda ishlatadi.
 */


/* =========================================================
   🧠 LESSON 11
========================================================= */

const LESSON_11: EnglishLesson = {
  id: 'foundation-11',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-3',
  lessonNumber: 11,
  title: 'Describe the World',
  subtitle: 'Adjectives: big, small, good, beautiful...',
  emoji: '🎨',
  description:
    'Predmet, odam va joylarni sifatlar yordamida aniqroq tasvirlashni o‘rganing.',
  type: 'grammar',
  difficulty: 'medium',
  status: 'locked',
  estimatedMinutes: 30,
  objectives: [
    'Asosiy sifatlarni o‘rganish',
    'BE + adjective strukturasini mustahkamlash',
    'Bir nechta sifatni and bilan bog‘lash',
    'Odam va predmetni tasvirlash',
  ],
  skills: ['vocabulary', 'grammar', 'speaking', 'writing'],
  topics: ['Adjectives', 'Descriptions'],
  vocabulary: [
    v('f11-v01', 'big', 'katta', 'general', 'The house is big.', 'Uy katta.', '🏠'),
    v('f11-v02', 'small', 'kichik', 'general', 'The box is small.', 'Quti kichik.', '📦'),
    v('f11-v03', 'good', 'yaxshi', 'general', 'It is good.', 'Bu yaxshi.', '👍'),
    v('f11-v04', 'bad', 'yomon', 'general', 'It is bad.', 'Bu yomon.', '👎'),
    v('f11-v05', 'beautiful', 'chiroyli', 'general', 'The flower is beautiful.', 'Gul chiroyli.', '🌸'),
    v('f11-v06', 'new', 'yangi', 'general', 'My book is new.', 'Kitobim yangi.', '✨'),
    v('f11-v07', 'old', 'eski/keksa', 'general', 'The house is old.', 'Uy eski.', '🏚️'),
    v('f11-v08', 'clean', 'toza', 'general', 'The room is clean.', 'Xona toza.', '✨'),
    v('f11-v09', 'happy', 'xursand', 'emotion', 'She is happy.', 'U xursand.', '😊'),
    v('f11-v10', 'kind', 'mehribon', 'emotion', 'He is kind.', 'U mehribon.', '❤️'),
  ],
  grammar: [
    grammar(
      'f11-g01',
      'Adjectives after BE',
      'adjectives',
      'Be dan keyin adjective kelib subjectni tasvirlaydi.',
      'Adjective odam, predmet yoki joyning xususiyatini bildiradi.',
      'Subject + BE + adjective',
      [
        { english: 'The house is big.', uzbek: 'Uy katta.' },
        { english: 'She is kind.', uzbek: 'U mehribon.' },
        { english: 'The room is clean.', uzbek: 'Xona toza.' },
      ],
    ),
  ],
  sentenceStructures: [
    {
      id: 'f11-s01',
      title: 'Description',
      type: 'subject-be-adjective',
      formula: 'Subject + BE + adjective',
      explanation: 'Biror narsani tasvirlash.',
      parts: [
        { label: 'S', name: 'Subject', description: 'Kim/nima?' },
        { label: 'BE', name: 'am/is/are', description: 'To be' },
        { label: 'ADJ', name: 'Adjective', description: 'Qanday?' },
      ],
      examples: [
        { english: 'My house is beautiful.', uzbek: 'Uyim chiroyli.' },
        { english: 'The room is clean.', uzbek: 'Xona toza.' },
      ],
    },
  ],
  explanations: [
    explanation(
      'f11-e01',
      'tip',
      'Gapni kuchaytiring',
      'My house is big. My house is beautiful. My house is big and beautiful.',
      '🎨',
    ),
  ],
  examples: [
    example('f11-ex01', 'My house is big.', 'Uyim katta.'),
    example('f11-ex02', 'My house is big and beautiful.', 'Uyim katta va chiroyli.'),
    example('f11-ex03', 'My teacher is kind.', 'O‘qituvchim mehribon.'),
    example('f11-ex04', 'The classroom is clean.', 'Sinf toza.'),
  ],
  activities: [
    activity('f11-a01', 'multiple-choice', 'Choose', 'Sifatni tanlang.', 'The house is ___.', 'big', ['big', 'run', 'book', 'under']),
    activity('f11-a02', 'word-order', 'Build', 'Gap tuzing.', 'is / My / beautiful / house', 'My house is beautiful.'),
    activity('f11-a03', 'translate', 'Translate', 'Tarjima qiling.', 'O‘qituvchim mehribon.', 'My teacher is kind.'),
  ],
  speaking: {
    id: 'f11-sp01',
    title: 'Describe Something',
    instruction: 'Biror odam, xona yoki predmetni 5 ta sifat bilan tasvirlang.',
    mode: 'conversation',
    phrase: 'It is big. It is beautiful. It is clean. It is new.',
    emoji: '🎨',
    repetitions: 2,
    targetWords: ['big', 'small', 'beautiful', 'clean', 'new'],
    targetGrammar: ['f11-g01'],
  },
  writing: {
    id: 'f11-w01',
    title: 'Description',
    instruction: 'Biror xonani 6 ta gap bilan tasvirlang.',
    prompt: 'Describe a room using adjectives.',
    minimumWords: 25,
    targetGrammar: ['f11-g01'],
  },
  review: {
    id: 'f11-review',
    title: 'Adjective Review',
    description: 'Sifatlarni takrorlang.',
    questions: [
      testQuestion('f11-r01', 'The room is ___.', 'clean', ['clean', 'book', 'run', 'under'], 'Clean — sifat.'),
    ],
  },
  challenge: {
    id: 'f11-ch01',
    title: 'Description Challenge',
    description: 'Biror predmetni 5 ta gap bilan tasvirlang.',
    difficulty: 'challenge',
    bonusXp: 40,
    tasks: [
      {
        id: 'f11-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'is / beautiful / The / flower',
        correctAnswer: 'The flower is beautiful.',
      },
    ],
  },
  test: {
    id: 'f11-test',
    title: 'Lesson 11 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion('f11-t01', 'The house is ___.', 'big', ['big', 'book', 'run', 'under'], 'Big — sifat.'),
      testQuestion('f11-t02', 'The room is ___.', 'clean', ['clean', 'pen', 'run', 'in'], 'Clean — sifat.'),
      testQuestion('f11-t03', 'She is ___.', 'happy', ['happy', 'book', 'table', 'under'], 'Happy odam holatini bildiradi.'),
      testQuestion('f11-t04', 'My teacher is ___.', 'kind', ['kind', 'desk', 'run', 'in'], 'Kind — mehribon.'),
      testQuestion('f11-t05', 'Choose the correct sentence.', 'The house is beautiful.', ['The house beautiful is.', 'The house is beautiful.', 'The house are beautiful.', 'The house am beautiful.'], 'Subject + is + adjective.'),
      testQuestion('f11-t06', '“chiroyli” qaysi?', 'beautiful', ['beautiful', 'small', 'old', 'bad'], 'Beautiful — chiroyli.'),
      testQuestion('f11-t07', '“yangi” qaysi?', 'new', ['new', 'old', 'bad', 'big'], 'New — yangi.'),
      testQuestion('f11-t08', 'Choose: My room is big ___ clean.', 'and', ['and', 'or', 'is', 'are'], 'Ikki sifatni bog‘lash uchun and.'),
      testQuestion('f11-t09', 'Choose the adjective.', 'beautiful', ['house', 'beautiful', 'is', 'my'], 'Beautiful — sifat.'),
      testQuestion('f11-t10', 'Choose the correct sentence.', 'My teacher is kind.', ['My teacher are kind.', 'My teacher is kind.', 'My teacher am kind.', 'My teacher kind is.'], 'Teacher birlikda: is.'),
    ],
  },
  rewards: standardReward(160),
  theme: theme('🎨', 'from-fuchsia-500 via-purple-600 to-indigo-600', 'purple'),
  previousLessonId: 'foundation-10',
  nextLessonId: 'foundation-12',
  prerequisiteLessonIds: ['foundation-10'],
}


/* =========================================================
   🏡 LESSON 12
   THERE IS / THERE ARE
========================================================= */

const LESSON_12: EnglishLesson = {
  id: 'foundation-12',
  courseId: 'foundation-main',
  unitId: 'foundation-unit-3',
  lessonNumber: 12,
  title: 'There Is & There Are',
  subtitle: 'Biror joyda nima borligini aytish',
  emoji: '🏡',
  description:
    'Xona, sinf yoki shaharni tasvirlashda There is va There are dan foydalaning.',
  type: 'grammar',
  difficulty: 'medium',
  status: 'locked',
  estimatedMinutes: 30,
  objectives: [
    'There is',
    'There are',
    'Singular va pluralni ajratish',
    'Joyni batafsil tasvirlash',
    'There is/are + preposition',
  ],
  skills: ['grammar', 'speaking', 'reading', 'writing'],
  topics: ['There is', 'There are', 'Description'],
  vocabulary: [
    v('f12-v01', 'there', 'u yerda', 'place', 'There is a book.', 'U yerda kitob bor.', '📍'),
    v('f12-v02', 'lamp', 'chiroq', 'home', 'There is a lamp.', 'U yerda chiroq bor.', '💡'),
    v('f12-v03', 'picture', 'rasm', 'home', 'There is a picture.', 'U yerda rasm bor.', '🖼️'),
    v('f12-v04', 'plant', 'o‘simlik', 'nature', 'There is a plant.', 'U yerda o‘simlik bor.', '🌱'),
    v('f12-v05', 'computer', 'kompyuter', 'technology', 'There is a computer.', 'U yerda kompyuter bor.', '💻'),
    v('f12-v06', 'window', 'deraza', 'home', 'There are two windows.', 'U yerda ikkita deraza bor.', '🪟'),
  ],
  grammar: [
    grammar(
      'f12-g01',
      'There Is',
      'there-is-are',
      'Bitta predmet mavjudligini aytish uchun there is ishlatiladi.',
      'There is + singular noun.',
      'There is + singular noun',
      [
        { english: 'There is a book.', uzbek: 'Kitob bor.' },
        { english: 'There is a lamp on the table.', uzbek: 'Stol ustida chiroq bor.' },
      ],
    ),
    grammar(
      'f12-g02',
      'There Are',
      'there-is-are',
      'Bir nechta predmet mavjudligini aytish uchun there are ishlatiladi.',
      'There are + plural noun.',
      'There are + plural noun',
      [
        { english: 'There are two books.', uzbek: 'Ikkita kitob bor.' },
        { english: 'There are three chairs.', uzbek: 'Uchta stul bor.' },
      ],
    ),
  ],
  sentenceStructures: [
    {
      id: 'f12-s01',
      title: 'There Is',
      type: 'custom',
      formula: 'There is + singular noun + place',
      explanation: 'Bitta predmet mavjudligini tasvirlash.',
      parts: [
        { label: 'THERE', name: 'There', description: 'Mavjudlik' },
        { label: 'BE', name: 'is', description: 'Birlik' },
        { label: 'N', name: 'Noun', description: 'Predmet' },
      ],
      examples: [
        { english: 'There is a book on the table.', uzbek: 'Stol ustida kitob bor.' },
      ],
    },
    {
      id: 'f12-s02',
      title: 'There Are',
      type: 'custom',
      formula: 'There are + plural noun + place',
      explanation: 'Ko‘plikdagi predmetlar mavjudligini tasvirlash.',
      parts: [
        { label: 'THERE', name: 'There', description: 'Mavjudlik' },
        { label: 'BE', name: 'are', description: 'Ko‘plik' },
        { label: 'N', name: 'Plural noun', description: 'Predmetlar' },
      ],
      examples: [
        { english: 'There are two books on the table.', uzbek: 'Stol ustida ikkita kitob bor.' },
      ],
    },
  ],
  explanations: [
    explanation(
      'f12-e01',
      'concept',
      'There is yoki There are?',
      'Bitta narsa → There is. Bir nechta narsa → There are.',
      '🧠',
    ),
  ],
  examples: [
    example('f12-ex01', 'There is a book on the table.', 'Stol ustida kitob bor.'),
    example('f12-ex02', 'There is a lamp in the room.', 'Xonada chiroq bor.'),
    example('f12-ex03', 'There are two chairs.', 'Ikkita stul bor.'),
    example('f12-ex04', 'There are three windows.', 'Uchta deraza bor.'),
  ],
  activities: [
    activity('f12-a01', 'multiple-choice', 'There is', 'To‘g‘ri variantni tanlang.', '___ a book on the table.', 'There is', ['There is', 'There are', 'It are', 'They is']),
    activity('f12-a02', 'multiple-choice', 'There are', 'To‘g‘ri variantni tanlang.', '___ two chairs.', 'There are', ['There is', 'There are', 'It is', 'They is']),
    activity('f12-a03', 'word-order', 'Build', 'Gap tuzing.', 'is / There / a / book', 'There is a book.'),
    activity('f12-a04', 'translate', 'Translate', 'Tarjima qiling.', 'Xonada ikkita deraza bor.', 'There are two windows in the room.'),
  ],
  speaking: {
    id: 'f12-sp01',
    title: 'Describe a Room',
    instruction: 'Xonani There is/are bilan tasvirlang.',
    mode: 'conversation',
    phrase: 'There is a table. There is a lamp. There are two chairs.',
    emoji: '🏡',
    repetitions: 2,
    targetWords: ['table', 'lamp', 'chair', 'window'],
    targetGrammar: ['f12-g01', 'f12-g02'],
  },
  writing: {
    id: 'f12-w01',
    title: 'My Room',
    instruction: 'There is/are bilan 7 ta gap yozing.',
    prompt: 'Describe your room using there is and there are.',
    minimumWords: 30,
    targetGrammar: ['f12-g01', 'f12-g02'],
  },
  review: {
    id: 'f12-review',
    title: 'There Is / There Are',
    description: 'Mavjudlikni tasvirlashni takrorlang.',
    questions: [
      testQuestion('f12-r01', '___ a book.', 'There is', ['There is', 'There are', 'They are', 'It are'], 'Bitta kitob: There is.'),
      testQuestion('f12-r02', '___ two books.', 'There are', ['There is', 'There are', 'It is', 'He is'], 'Ko‘plik: There are.'),
    ],
  },
  challenge: {
    id: 'f12-ch01',
    title: 'Room Architect',
    description: 'Tasavvuriy xona yarating va uni 8 ta gap bilan tasvirlang.',
    difficulty: 'challenge',
    bonusXp: 45,
    tasks: [
      {
        id: 'f12-ct01',
        instruction: 'Gap tuzing.',
        type: 'build-sentence',
        prompt: 'There / a / is / lamp',
        correctAnswer: 'There is a lamp.',
      },
    ],
  },
  test: {
    id: 'f12-test',
    title: 'Lesson 12 Final Test',
    questionCount: 10,
    passingScore: 70,
    maxScore: 20,
    timeLimitMinutes: 8,
    retryAllowed: true,
    randomizeQuestions: true,
    randomizeOptions: true,
    questions: [
      testQuestion('f12-t01', '___ a book.', 'There is', ['There is', 'There are', 'It are', 'They is'], 'Singular: There is.'),
      testQuestion('f12-t02', '___ two books.', 'There are', ['There is', 'There are', 'It is', 'They is'], 'Plural: There are.'),
      testQuestion('f12-t03', '___ a lamp on the table.', 'There is', ['There is', 'There are', 'They are', 'It are'], 'Lamp birlikda.'),
      testQuestion('f12-t04', '___ three chairs.', 'There are', ['There is', 'There are', 'It is', 'He is'], 'Chairs ko‘plik.'),
      testQuestion('f12-t05', 'Choose the correct sentence.', 'There is a computer.', ['There are a computer.', 'There is a computer.', 'There be a computer.', 'There computer is.'], 'Singular noun bilan there is.'),
      testQuestion('f12-t06', 'Choose the correct sentence.', 'There are two windows.', ['There is two windows.', 'There are two windows.', 'There two are windows.', 'There windows is two.'], 'Plural noun bilan there are.'),
      testQuestion('f12-t07', '“chiroq” qaysi?', 'lamp', ['lamp', 'plant', 'picture', 'window'], 'Lamp — chiroq.'),
      testQuestion('f12-t08', '“o‘simlik” qaysi?', 'plant', ['plant', 'lamp', 'chair', 'desk'], 'Plant — o‘simlik.'),
      testQuestion('f12-t09', 'There ___ a plant in the room.', 'is', ['am', 'is', 'are', 'have'], 'A plant birlikda.'),
      testQuestion('f12-t10', 'There ___ five books.', 'are', ['am', 'is', 'are', 'has'], 'Five books ko‘plik.'),
    ],
  },
  rewards: standardReward(160),
  theme: theme('🏡', 'from-emerald-500 via-green-600 to-teal-600', 'green'),
  previousLessonId: 'foundation-11',
  nextLessonId: 'foundation-13',
  prerequisiteLessonIds: ['foundation-11'],
}


/* =========================================================
   📚 LESSONS 13–30
   CURRICULUM MAP
========================================================= */

/**
 * 13 — What / Who / Where
 * 14 — BE Questions
 * 15 — Short Answers
 * 16 — Food & Likes
 * 17 — Present Simple I/You/We/They
 * 18 — Present Simple He/She/It
 * 19 — Do / Does
 * 20 — Don't / Doesn't
 * 21 — Daily Routine
 * 22 — Time & Days
 * 23 — Frequency Adverbs
 * 24 — Can / Can't
 * 25 — Imperatives
 * 26 — Shopping
 * 27 — Directions
 * 28 — Sentence Builder Mastery
 * 29 — Reading & Speaking Mastery
 * 30 — Foundation Final Challenge
 *
 * 13–30 darslari ham yuqoridagi lesson contract bo‘yicha
 * ishlaydi.
 *
 * KEYINGI BOSQICHDA BU DARS MATERIALLARI
 * TO‘LIQ KONTENT BILAN KENGAYTIRILADI.
 */


/* =========================================================
   📦 LESSON REGISTRY
========================================================= */

export const FOUNDATION_LESSONS: EnglishLesson[] = [
  LESSON_01,
  LESSON_02,
  LESSON_03,
  LESSON_04,
  LESSON_05,
  LESSON_06,
  LESSON_07,
  LESSON_08,
  LESSON_09,
  LESSON_10,
  LESSON_11,
  LESSON_12,
]


/* =========================================================
   🔎 LESSON HELPERS
========================================================= */

export function getFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.id === lessonId,
  )
}


export function getFoundationLessonByNumber(
  lessonNumber: number,
): EnglishLesson | undefined {
  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.lessonNumber === lessonNumber,
  )
}


export function getNextFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  const current = getFoundationLesson(lessonId)

  if (!current?.nextLessonId) {
    return undefined
  }

  return getFoundationLesson(current.nextLessonId)
}


export function getPreviousFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  const current = getFoundationLesson(lessonId)

  if (!current?.previousLessonId) {
    return undefined
  }

  return getFoundationLesson(current.previousLessonId)
}


/* =========================================================
   📊 COURSE STATISTICS
========================================================= */

export const FOUNDATION_STATS = {
  totalLessons: 30,

  currentDataLessons: FOUNDATION_LESSONS.length,

  vocabularyTarget: 500,

  grammarTopics: [
    'Sentence Structure',
    'Subject Pronouns',
    'To Be',
    'Positive Sentences',
    'Negative Sentences',
    'Questions',
    'Short Answers',
    'Possessive Adjectives',
    'Articles',
    'Singular / Plural',
    'This / That',
    'These / Those',
    'Have / Has',
    'There Is / There Are',
    'Adjectives',
    'Prepositions',
    'Present Simple',
    'Do / Does',
    'Don’t / Doesn’t',
    'Question Words',
    'Can / Can’t',
    'Imperatives',
    'Frequency Adverbs',
  ],

  skills: [
    'Vocabulary',
    'Grammar',
    'Sentence Building',
    'Reading',
    'Speaking',
    'Writing',
    'Pronunciation',
    'Communication',
  ],

  passingScore: 70,

  perfectScore: 100,

  estimatedHours: 12,
}


/* =========================================================
   🧭 CURRICULUM ROADMAP
========================================================= */

export const FOUNDATION_ROADMAP = [
  {
    number: 1,
    title: 'Hello & Introductions',
    emoji: '👋',
    grammar: 'Pronouns + To Be',
  },
  {
    number: 2,
    title: 'About Me',
    emoji: '🙋',
    grammar: 'Age + To Be',
  },
  {
    number: 3,
    title: 'My Family',
    emoji: '👨‍👩‍👧‍👦',
    grammar: 'Possessives',
  },
  {
    number: 4,
    title: 'A, An & Objects',
    emoji: '🎒',
    grammar: 'Articles',
  },
  {
    number: 5,
    title: 'My School',
    emoji: '🏫',
    grammar: 'This / That',
  },
  {
    number: 6,
    title: 'I Am / You Are',
    emoji: '⚡',
    grammar: 'To Be + Negatives',
  },
  {
    number: 7,
    title: 'My Home',
    emoji: '🏠',
    grammar: 'Be + Adjectives',
  },
  {
    number: 8,
    title: 'Where Is It?',
    emoji: '📍',
    grammar: 'Prepositions',
  },
  {
    number: 9,
    title: 'Food & Drinks',
    emoji: '🍎',
    grammar: 'Have / Has',
  },
  {
    number: 10,
    title: 'One or Many?',
    emoji: '🔢',
    grammar: 'Plural Nouns',
  },
  {
    number: 11,
    title: 'Describe the World',
    emoji: '🎨',
    grammar: 'Adjectives',
  },
  {
    number: 12,
    title: 'There Is / There Are',
    emoji: '🏡',
    grammar: 'Existence',
  },
  {
    number: 13,
    title: 'Ask Questions',
    emoji: '❓',
    grammar: 'What / Who / Where',
  },
  {
    number: 14,
    title: 'Yes or No?',
    emoji: '❔',
    grammar: 'BE Questions',
  },
  {
    number: 15,
    title: 'Short Answers',
    emoji: '💬',
    grammar: 'Yes, I am / No, I’m not',
  },
  {
    number: 16,
    title: 'I Like Food',
    emoji: '❤️',
    grammar: 'Like + Noun',
  },
  {
    number: 17,
    title: 'What I Do',
    emoji: '🏃',
    grammar: 'Present Simple',
  },
  {
    number: 18,
    title: 'He Works, She Studies',
    emoji: '👩‍💻',
    grammar: 'He/She/It + s',
  },
  {
    number: 19,
    title: 'Do You...?',
    emoji: '❓',
    grammar: 'Do / Does',
  },
  {
    number: 20,
    title: 'I Don’t...',
    emoji: '🚫',
    grammar: 'Don’t / Doesn’t',
  },
  {
    number: 21,
    title: 'My Daily Routine',
    emoji: '🌅',
    grammar: 'Present Simple',
  },
  {
    number: 22,
    title: 'Time & Days',
    emoji: '🕐',
    grammar: 'Time Expressions',
  },
  {
    number: 23,
    title: 'How Often?',
    emoji: '🔄',
    grammar: 'Frequency Adverbs',
  },
  {
    number: 24,
    title: 'I Can!',
    emoji: '💪',
    grammar: 'Can / Can’t',
  },
  {
    number: 25,
    title: 'Classroom English',
    emoji: '🏫',
    grammar: 'Imperatives',
  },
  {
    number: 26,
    title: 'Let’s Go Shopping',
    emoji: '🛒',
    grammar: 'How much?',
  },
  {
    number: 27,
    title: 'Where Is the School?',
    emoji: '🗺️',
    grammar: 'Directions',
  },
  {
    number: 28,
    title: 'Sentence Builder',
    emoji: '🧱',
    grammar: 'Sentence Structure Mastery',
  },
  {
    number: 29,
    title: 'Read & Speak',
    emoji: '📖',
    grammar: 'Integrated Review',
  },
  {
    number: 30,
    title: 'Foundation Final Challenge',
    emoji: '🏆',
    grammar: 'Complete Foundation Review',
  },
]


/* =========================================================
 * 🇬🇧 END OF FOUNDATION DATA
 * ========================================================= */
