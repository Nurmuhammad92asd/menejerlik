/* =========================================================
 * MENEJERLIK BY NURMUHAMMAD
 * ENGLISH ACADEMY
 * FOUNDATION COURSE DATA
 * =========================================================
 *
 * 30 ta professional Foundation dars.
 *
 * ARXITEKTURA:
 *
 * Lesson
 *  ├── Vocabulary
 *  ├── Grammar
 *  ├── Sentence Structure
 *  ├── Examples
 *  ├── Dialogue
 *  ├── Reading
 *  ├── Writing
 *  ├── Activities
 *  ├── Test
 *  └── Challenge
 *
 * PRINSIP:
 * Lesson 1 → Lesson 2 → ... → Lesson 30
 *
 * Har bir dars:
 *  - o'rganish
 *  - mashq
 *  - test
 *  - challenge
 *
 * Test < 70%  → RETRY
 * Test >= 70% → NEXT LESSON UNLOCK
 *
 * ========================================================= */

import type {
  EnglishCourse,
  EnglishUnit,
  EnglishLesson,
  EnglishVocabulary,
  EnglishGrammar,
  EnglishSentenceStructure,
  EnglishActivity,
  EnglishLessonTest,
  EnglishTestQuestion,
  EnglishLessonTheme,
  EnglishSpeaking,
  EnglishReading,
  EnglishWriting,
  EnglishChallenge,
  EnglishLessonReward,
} from './english-types';

/* =========================================================
   HELPERS
========================================================= */

const v = (
  id: string,
  word: string,
  meaning: string,
  phonetic: string,
  example: string,
): EnglishVocabulary => ({
  id,
  word,
  meaning,
  phonetic,
  partOfSpeech: 'word',
  example,
});

const g = (
  id: string,
  title: string,
  shortRule: string,
  formula: string,
  examples: string[],
): EnglishGrammar => ({
  id,
  title,
  category: 'foundation',
  difficulty: 'easy',
  shortRule,
  explanation: shortRule,
  formula,
  whenToUse: ['Oddiy kundalik gaplarda', 'Boshlang‘ich muloqotda'],
  positive: examples,
  negative: [],
  questions: [],
  shortAnswers: [],
  examples,
  commonMistakes: [],
  tips: [],
  memoryTip: shortRule,
});

const structure = (
  id: string,
  title: string,
  formula: string,
  examples: string[],
): EnglishSentenceStructure => ({
  id,
  title,
  formula,
  parts: [],
  examples: examples.map((sentence, index) => ({
    id: `${id}-ex-${index + 1}`,
    sentence,
    translation: '',
    breakdown: [],
  })),
});

const activity = (
  id: string,
  type: EnglishActivity['type'],
  instruction: string,
  question: string,
  correctAnswer: string | string[],
  options: string[] = [],
): EnglishActivity => ({
  id,
  type,
  instruction,
  question,
  correctAnswer,
  options: options.map((label, index) => ({
    id: `${id}-option-${index + 1}`,
    label,
  })),
});

const testQuestion = (
  id: string,
  question: string,
  options: string[],
  correctAnswer: string,
): EnglishTestQuestion => ({
  id,
  type: 'multiple-choice',
  question,
  options: options.map((label, index) => ({
    id: `${id}-${index + 1}`,
    label,
  })),
  correctAnswer,
});

const test = (
  id: string,
  questions: EnglishTestQuestion[],
): EnglishLessonTest => ({
  id,
  title: 'Lesson Test',
  description: 'Keyingi darsni ochish uchun kamida 70% natija kerak.',
  questions,
  passingScore: 70,
});

const theme = (
  primary: string,
  secondary: string,
  emoji: string,
): EnglishLessonTheme => ({
  primary,
  secondary,
  emoji,
});

const reward = (xp = 100): EnglishLessonReward => ({
  xp,
  bonusXp: 25,
  badge: undefined,
});

/* =========================================================
   LESSON 01
========================================================= */

const lesson01: EnglishLesson = {
  id: 'foundation-01',
  levelId: 'foundation',
  unitId: 'foundation-unit-1',
  order: 1,

  title: 'Hello! Meet the English World',
  subtitle: 'Salomlashish va o‘zingizni tanishtirish',
  description:
    'Ingliz tilidagi birinchi real muloqotingizni boshlang: salomlashish, ism aytish va suhbatni davom ettirish.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['speaking', 'listening', 'vocabulary', 'grammar'],
  theme: theme('blue', 'cyan', '👋'),

  objectives: [
    'Salomlashishni o‘rganish',
    'Ismni aytish',
    'Boshqa odamning ismini so‘rash',
    'Oddiy dialog qurish',
  ],

  vocabulary: [
    v('f01-v01', 'hello', 'salom', '/həˈləʊ/', 'Hello, I am Ali.'),
    v('f01-v02', 'hi', 'salom', '/haɪ/', 'Hi, my name is Sara.'),
    v('f01-v03', 'name', 'ism', '/neɪm/', 'My name is Ali.'),
    v('f01-v04', 'meet', 'uchrashmoq / tanishmoq', '/miːt/', 'Nice to meet you.'),
    v('f01-v05', 'nice', 'yoqimli', '/naɪs/', 'Nice to meet you.'),
    v('f01-v06', 'goodbye', 'xayr', '/ˌɡʊdˈbaɪ/', 'Goodbye, see you tomorrow.'),
  ],

  grammar: [
    g(
      'f01-g01',
      'I am / My name is',
      'I am odamning kimligini yoki holatini aytishda ishlatiladi.',
      'I + am + ...',
      ['I am Ali.', 'I am a student.', 'My name is Sara.'],
    ),
  ],

  sentenceStructures: [
    structure(
      'f01-s01',
      'Subject + be + noun',
      'Subject + am/is/are + noun',
      ['I am Ali.', 'I am a student.'],
    ),
  ],

  examples: [
    'Hello! I am Ali.',
    'Hi! My name is Sara.',
    'Nice to meet you.',
    'Nice to meet you, too.',
    'Goodbye! See you tomorrow.',
  ],

  dialogue: {
    id: 'f01-dialogue',
    title: 'First Meeting',
    lines: [
      { speaker: 'Ali', text: 'Hello!' },
      { speaker: 'Sara', text: 'Hi!' },
      { speaker: 'Ali', text: 'My name is Ali. What is your name?' },
      { speaker: 'Sara', text: 'My name is Sara.' },
      { speaker: 'Ali', text: 'Nice to meet you.' },
      { speaker: 'Sara', text: 'Nice to meet you, too.' },
    ],
  },

  reading: {
    id: 'f01-reading',
    title: 'A New Friend',
    text:
      'Hello! My name is Ali. I am a student. Today I meet Sara. She is a student too. We say hello and become friends.',
    questions: [
      {
        id: 'f01-rq1',
        question: 'What is the boy’s name?',
        answer: 'Ali',
      },
      {
        id: 'f01-rq2',
        question: 'Is Sara a student?',
        answer: 'Yes',
      },
    ],
  },

  writing: {
    id: 'f01-writing',
    instruction: 'O‘zingiz haqingizda 3 ta oddiy gap yozing.',
    model: 'My name is Ali. I am a student. I am from Uzbekistan.',
  },

  activities: [
    activity(
      'f01-a01',
      'multiple-choice',
      'To‘g‘ri javobni tanlang.',
      '___ name is Ali.',
      'My',
      ['My', 'I', 'Me', 'Am'],
    ),
    activity(
      'f01-a02',
      'multiple-choice',
      'To‘g‘ri iborani tanlang.',
      'Tanishganda nima deyiladi?',
      'Nice to meet you.',
      ['Good night.', 'Nice to meet you.', 'See you yesterday.', 'I am goodbye.'],
    ),
    activity(
      'f01-a03',
      'sentence-builder',
      'So‘zlarni to‘g‘ri tartiblang.',
      'am / I / student / a',
      'I am a student.',
    ),
  ],

  speaking: {
    id: 'f01-speaking',
    title: 'Introduce Yourself',
    prompt: 'O‘zingizni ingliz tilida tanishtiring.',
    targetPhrases: [
      'Hello.',
      'My name is ...',
      'I am a student.',
      'Nice to meet you.',
    ],
  },

  challenge: {
    id: 'f01-challenge',
    title: 'First Conversation',
    description:
      'Tasavvur qiling: yangi ingliz tilida so‘zlashuvchi do‘stingiz bilan tanishdingiz.',
    task:
      'Salomlashing, ismingizni ayting, suhbatdoshingiz ismini so‘rang va xayrlashing.',
    points: 20,
  },

  test: test('f01-test', [
    testQuestion(
      'f01-t1',
      '___ name is Aziz.',
      ['My', 'I', 'Me', 'Am'],
      'My',
    ),
    testQuestion(
      'f01-t2',
      '“Tanishganimdan xursandman” qaysi?',
      ['Goodbye.', 'Nice to meet you.', 'Good morning.', 'Thank you.'],
      'Nice to meet you.',
    ),
    testQuestion(
      'f01-t3',
      '“Men o‘quvchiman” qaysi?',
      ['I student.', 'I am student.', 'I am a student.', 'Am I student.'],
      'I am a student.',
    ),
    testQuestion(
      'f01-t4',
      '“What is your name?” nimani so‘raydi?',
      ['Yoshingizni', 'Ismingizni', 'Manzilingizni', 'Kasbingizni'],
      'Ismingizni',
    ),
    testQuestion(
      'f01-t5',
      '“Goodbye” qachon ishlatiladi?',
      ['Uchrashganda', 'Xayrlashganda', 'Ovqatlanganda', 'Savol berganda'],
      'Xayrlashganda',
    ),
  ]),

  reward: reward(100),

  unlock: {
    type: 'first-lesson',
  },
};

/* =========================================================
   LESSON 02
========================================================= */

const lesson02: EnglishLesson = {
  id: 'foundation-02',
  levelId: 'foundation',
  unitId: 'foundation-unit-1',
  order: 2,

  title: 'I, You, He, She',
  subtitle: 'Subject pronouns va odamlarni ifodalash',
  description:
    'Ingliz tilida gapning kim haqida ekanini aniq aytishni o‘rganing.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('purple', 'pink', '🧑‍🤝‍🧑'),

  objectives: [
    'I, you, he, she, it, we, they ni farqlash',
    'Pronounlarni gapda ishlatish',
    'Odam va narsalarni ifodalash',
  ],

  vocabulary: [
    v('f02-v01', 'boy', 'bola / o‘g‘il bola', '/bɔɪ/', 'He is a boy.'),
    v('f02-v02', 'girl', 'qiz bola', '/ɡɜːl/', 'She is a girl.'),
    v('f02-v03', 'friend', 'do‘st', '/frend/', 'He is my friend.'),
    v('f02-v04', 'teacher', 'o‘qituvchi', '/ˈtiːtʃə/', 'She is a teacher.'),
    v('f02-v05', 'student', 'o‘quvchi', '/ˈstjuːdənt/', 'They are students.'),
    v('f02-v06', 'book', 'kitob', '/bʊk/', 'It is a book.'),
  ],

  grammar: [
    g(
      'f02-g01',
      'Subject Pronouns',
      'Pronounlar otning o‘rnida keladi.',
      'I / you / he / she / it / we / they',
      [
        'I am a student.',
        'You are my friend.',
        'He is a teacher.',
        'She is a student.',
        'It is a book.',
        'We are friends.',
        'They are students.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f02-s01',
      'Subject + be + noun',
      'Pronoun + am/is/are + noun',
      ['He is a teacher.', 'She is a student.', 'They are friends.'],
    ),
  ],

  examples: [
    'I am a student.',
    'You are my friend.',
    'He is my brother.',
    'She is my sister.',
    'It is a book.',
    'We are students.',
    'They are teachers.',
  ],

  dialogue: {
    id: 'f02-dialogue',
    title: 'Who is he?',
    lines: [
      { speaker: 'Ali', text: 'Who is he?' },
      { speaker: 'Sara', text: 'He is my brother.' },
      { speaker: 'Ali', text: 'Who is she?' },
      { speaker: 'Sara', text: 'She is my sister.' },
    ],
  },

  reading: {
    id: 'f02-reading',
    title: 'My Friends',
    text:
      'I am Aziz. I have two friends. His name is Tom. Her name is Anna. We are students. They are very friendly.',
    questions: [
      {
        id: 'f02-rq1',
        question: 'Who is Aziz?',
        answer: 'A student',
      },
      {
        id: 'f02-rq2',
        question: 'Who are Tom and Anna?',
        answer: 'Friends',
      },
    ],
  },

  writing: {
    id: 'f02-writing',
    instruction:
      'I, he, she, we, they bilan 5 ta gap yozing.',
    model:
      'I am a student. He is my friend. She is my sister. We are students. They are teachers.',
  },

  activities: [
    activity(
      'f02-a01',
      'multiple-choice',
      'To‘g‘ri pronounni tanlang.',
      '___ is my brother.',
      'He',
      ['He', 'She', 'They', 'It'],
    ),
    activity(
      'f02-a02',
      'multiple-choice',
      'To‘g‘ri pronounni tanlang.',
      '___ is my sister.',
      'She',
      ['He', 'She', 'It', 'We'],
    ),
    activity(
      'f02-a03',
      'categorize',
      'Odamga mos pronounni toping.',
      'Anna → ?',
      'She',
      ['She', 'It', 'They', 'We'],
    ),
  ],

  speaking: {
    id: 'f02-speaking',
    title: 'People Around Me',
    prompt: 'Atrofingizdagi 4 kishini ingliz tilida tasvirlang.',
    targetPhrases: [
      'He is ...',
      'She is ...',
      'We are ...',
      'They are ...',
    ],
  },

  challenge: {
    id: 'f02-challenge',
    title: 'Pronoun Master',
    description:
      'Bir oilani 5 ta gap orqali tasvirlang.',
    task:
      'I, he, she, we va they pronounlaridan kamida 4 tasini ishlating.',
    points: 20,
  },

  test: test('f02-test', [
    testQuestion(
      'f02-t1',
      'Ali is a boy. ___ is a student.',
      ['He', 'She', 'It', 'They'],
      'He',
    ),
    testQuestion(
      'f02-t2',
      'Sara is a girl. ___ is my friend.',
      ['He', 'She', 'It', 'We'],
      'She',
    ),
    testQuestion(
      'f02-t3',
      'Tom and Ali are students. ___ are friends.',
      ['He', 'She', 'It', 'They'],
      'They',
    ),
    testQuestion(
      'f02-t4',
      '“It” odatda nimaga ishlatiladi?',
      ['Faqat ayolga', 'Narsa yoki hayvonga', 'Faqat erkakka', 'Faqat ko‘plikka'],
      'Narsa yoki hayvonga',
    ),
    testQuestion(
      'f02-t5',
      '“We” nimani bildiradi?',
      ['Men', 'Sen', 'Men va boshqalar', 'Ular'],
      'Men va boshqalar',
    ),
  ]),

  reward: reward(110),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-01',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 03
========================================================= */

const lesson03: EnglishLesson = {
  id: 'foundation-03',
  levelId: 'foundation',
  unitId: 'foundation-unit-1',
  order: 3,

  title: 'TO BE: am, is, are',
  subtitle: 'Ingliz tilining eng muhim fe’llaridan biri',
  description:
    'Am, is, are yordamida tasdiq, inkor va savol gaplarni qurishni boshlang.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'speaking', 'writing'],
  theme: theme('cyan', 'blue', '⚙️'),

  objectives: [
    'am/is/are ni to‘g‘ri tanlash',
    'Positive gap tuzish',
    'Negative gap tuzish',
    'Question gap tuzish',
  ],

  vocabulary: [
    v('f03-v01', 'happy', 'xursand', '/ˈhæpi/', 'I am happy.'),
    v('f03-v02', 'tired', 'charchagan', '/taɪəd/', 'He is tired.'),
    v('f03-v03', 'ready', 'tayyor', '/ˈredi/', 'We are ready.'),
    v('f03-v04', 'busy', 'band', '/ˈbɪzi/', 'She is busy.'),
    v('f03-v05', 'kind', 'mehribon', '/kaɪnd/', 'He is kind.'),
  ],

  grammar: [
    g(
      'f03-g01',
      'Verb TO BE',
      'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi.',
      'I am | He/She/It is | You/We/They are',
      [
        'I am happy.',
        'He is tired.',
        'She is ready.',
        'We are busy.',
        'They are kind.',
      ],
    ),
    g(
      'f03-g02',
      'TO BE negative',
      'Inkor gapda am not, is not yoki are not ishlatiladi.',
      'Subject + am/is/are + not',
      ['I am not tired.', 'He is not busy.', 'They are not ready.'],
    ),
  ],

  sentenceStructures: [
    structure(
      'f03-s01',
      'Positive',
      'Subject + am/is/are + complement',
      ['I am happy.', 'She is ready.', 'They are busy.'],
    ),
    structure(
      'f03-s02',
      'Negative',
      'Subject + am/is/are + not + complement',
      ['I am not tired.', 'He is not busy.'],
    ),
    structure(
      'f03-s03',
      'Question',
      'Am/Is/Are + subject + ...?',
      ['Are you ready?', 'Is she happy?', 'Are they busy?'],
    ),
  ],

  examples: [
    'I am ready.',
    'I am not tired.',
    'Are you ready?',
    'Yes, I am.',
    'No, I am not.',
    'She is happy.',
    'Is she happy?',
    'Yes, she is.',
    'They are busy.',
    'Are they busy?',
  ],

  dialogue: {
    id: 'f03-dialogue',
    title: 'Are You Ready?',
    lines: [
      { speaker: 'Teacher', text: 'Are you ready?' },
      { speaker: 'Ali', text: 'Yes, I am.' },
      { speaker: 'Teacher', text: 'Are you tired?' },
      { speaker: 'Ali', text: 'No, I am not.' },
    ],
  },

  reading: {
    id: 'f03-reading',
    title: 'A Busy Day',
    text:
      'I am a student. Today I am busy. My teacher is ready. My friends are ready too. We are not tired.',
    questions: [
      {
        id: 'f03-rq1',
        question: 'Is the student busy?',
        answer: 'Yes',
      },
      {
        id: 'f03-rq2',
        question: 'Are the friends tired?',
        answer: 'No',
      },
    ],
  },

  writing: {
    id: 'f03-writing',
    instruction:
      'am/is/are bilan 2 ta positive, 2 ta negative va 2 ta question gap yozing.',
    model:
      'I am ready. She is happy. I am not tired. They are not busy. Are you ready? Is he happy?',
  },

  activities: [
    activity(
      'f03-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ a student.',
      'am',
      ['am', 'is', 'are', 'be'],
    ),
    activity(
      'f03-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'They ___ ready.',
      'are',
      ['am', 'is', 'are', 'be'],
    ),
    activity(
      'f03-a03',
      'error-correction',
      'Xatoni toping.',
      'She are happy.',
      'She is happy.',
    ),
    activity(
      'f03-a04',
      'sentence-builder',
      'Gapni tuzing.',
      'you / Are / ready / ?',
      'Are you ready?',
    ),
  ],

  speaking: {
    id: 'f03-speaking',
    title: 'How Are You?',
    prompt: 'Bugungi holatingizni ingliz tilida ayting.',
    targetPhrases: [
      'I am happy.',
      'I am ready.',
      'I am not tired.',
      'I am busy.',
    ],
  },

  challenge: {
    id: 'f03-challenge',
    title: 'TO BE Challenge',
    description:
      'O‘zingiz haqingizda am/is/are yordamida mini profile yarating.',
    task:
      'Kamida 5 ta gap yozing: 3 ta positive, 1 ta negative, 1 ta question.',
    points: 25,
  },

  test: test('f03-test', [
    testQuestion(
      'f03-t1',
      'I ___ happy.',
      ['am', 'is', 'are', 'be'],
      'am',
    ),
    testQuestion(
      'f03-t2',
      'She ___ ready.',
      ['am', 'is', 'are', 'be'],
      'is',
    ),
    testQuestion(
      'f03-t3',
      'They ___ not tired.',
      ['am', 'is', 'are', 'be'],
      'are',
    ),
    testQuestion(
      'f03-t4',
      '___ you ready?',
      ['Am', 'Is', 'Are', 'Be'],
      'Are',
    ),
    testQuestion(
      'f03-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'He are happy.',
        'He am happy.',
        'He is happy.',
        'He be happy.',
      ],
      'He is happy.',
    ),
  ]),

  reward: reward(120),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-02',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 04
========================================================= */

const lesson04: EnglishLesson = {
  id: 'foundation-04',
  levelId: 'foundation',
  unitId: 'foundation-unit-1',
  order: 4,

  title: 'My Family',
  subtitle: 'Possessive adjectives: my, your, his, her',
  description:
    'Oila a’zolarini tanishtirish va kimga tegishli ekanini aytishni o‘rganing.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['vocabulary', 'grammar', 'speaking'],
  theme: theme('pink', 'rose', '👨‍👩‍👧‍👦'),

  objectives: [
    'Oila a’zolari nomlarini bilish',
    'my, your, his, her ni ishlatish',
    'Oila haqida gapirish',
  ],

  vocabulary: [
    v('f04-v01', 'father', 'ota', '/ˈfɑːðə/', 'My father is kind.'),
    v('f04-v02', 'mother', 'ona', '/ˈmʌðə/', 'My mother is kind.'),
    v('f04-v03', 'brother', 'aka / uka', '/ˈbrʌðə/', 'My brother is young.'),
    v('f04-v04', 'sister', 'opa / singil', '/ˈsɪstə/', 'My sister is young.'),
    v('f04-v05', 'family', 'oila', '/ˈfæməli/', 'My family is big.'),
    v('f04-v06', 'parents', 'ota-ona', '/ˈpeərənts/', 'My parents are kind.'),
  ],

  grammar: [
    g(
      'f04-g01',
      'Possessive Adjectives',
      'my, your, his, her ot oldidan kelib egalikni bildiradi.',
      'my + noun / your + noun / his + noun / her + noun',
      [
        'My father is kind.',
        'Your mother is nice.',
        'His brother is young.',
        'Her sister is smart.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f04-s01',
      'Possessive + noun',
      'Possessive adjective + noun',
      [
        'My father is kind.',
        'Her sister is smart.',
        'His brother is young.',
      ],
    ),
  ],

  examples: [
    'This is my father.',
    'This is my mother.',
    'His brother is young.',
    'Her sister is smart.',
    'Your family is big.',
  ],

  dialogue: {
    id: 'f04-dialogue',
    title: 'Meet My Family',
    lines: [
      { speaker: 'Ali', text: 'This is my family.' },
      { speaker: 'Tom', text: 'Who is he?' },
      { speaker: 'Ali', text: 'He is my father.' },
      { speaker: 'Tom', text: 'And who is she?' },
      { speaker: 'Ali', text: 'She is my mother.' },
    ],
  },

  reading: {
    id: 'f04-reading',
    title: 'My Family',
    text:
      'My family is big. My father is a teacher. My mother is a doctor. I have one brother and one sister. My brother is young. My sister is smart.',
    questions: [
      {
        id: 'f04-rq1',
        question: 'What is the father’s job?',
        answer: 'Teacher',
      },
      {
        id: 'f04-rq2',
        question: 'How many brothers does the writer have?',
        answer: 'One',
      },
    ],
  },

  writing: {
    id: 'f04-writing',
    instruction: 'Oilangiz haqida kamida 5 ta gap yozing.',
    model:
      'My family is big. My father is kind. My mother is nice. My brother is young. My sister is smart.',
  },

  activities: [
    activity(
      'f04-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'This is ___ father.',
      'my',
      ['my', 'I', 'me', 'am'],
    ),
    activity(
      'f04-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'This is Anna. ___ mother is a doctor.',
      'Her',
      ['His', 'Her', 'My', 'Your'],
    ),
    activity(
      'f04-a03',
      'error-correction',
      'Xatoni tuzating.',
      'He is my brother. Her name is Tom.',
      'He is my brother. His name is Tom.',
    ),
  ],

  speaking: {
    id: 'f04-speaking',
    title: 'My Family',
    prompt: 'Oilangizni ingliz tilida tanishtiring.',
    targetPhrases: [
      'This is my ...',
      'His name is ...',
      'Her name is ...',
      'My family is ...',
    ],
  },

  challenge: {
    id: 'f04-challenge',
    title: 'Family Profile',
    description:
      'Oila a’zolaringizni ingliz tilida kichik profile sifatida tasvirlang.',
    task:
      'my, his, her, your so‘zlaridan foydalanib kamida 6 ta gap yozing.',
    points: 25,
  },

  test: test('f04-test', [
    testQuestion(
      'f04-t1',
      'This is ___ mother.',
      ['my', 'I', 'me', 'am'],
      'my',
    ),
    testQuestion(
      'f04-t2',
      'Ali has a brother. ___ brother is young.',
      ['Her', 'His', 'My', 'Your'],
      'His',
    ),
    testQuestion(
      'f04-t3',
      'Sara has a sister. ___ sister is smart.',
      ['His', 'Her', 'My', 'Your'],
      'Her',
    ),
    testQuestion(
      'f04-t4',
      '“my” nimani bildiradi?',
      ['Mening', 'Sening', 'Uning', 'Bizning'],
      'Mening',
    ),
    testQuestion(
      'f04-t5',
      'To‘g‘ri gapni toping.',
      [
        'Her brother is young.',
        'Her brother are young.',
        'Her brother am young.',
        'Her brother be young.',
      ],
      'Her brother is young.',
    ),
  ]),

  reward: reward(130),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-03',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 05
========================================================= */

const lesson05: EnglishLesson = {
  id: 'foundation-05',
  levelId: 'foundation',
  unitId: 'foundation-unit-1',
  order: 5,

  title: 'A, An, The',
  subtitle: 'Articles bilan aniq va noaniq otlar',
  description:
    'Ingliz tilidagi a, an va the artikllarini real misollar orqali o‘rganing.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'vocabulary', 'writing'],
  theme: theme('amber', 'orange', '📚'),

  objectives: [
    'a artiklini ishlatish',
    'an artiklini ishlatish',
    'the artiklining vazifasini tushunish',
    'Ot oldidan artikl tanlash',
  ],

  vocabulary: [
    v('f05-v01', 'apple', 'olma', '/ˈæpəl/', 'I have an apple.'),
    v('f05-v02', 'book', 'kitob', '/bʊk/', 'I have a book.'),
    v('f05-v03', 'orange', 'apelsin', '/ˈɒrɪndʒ/', 'This is an orange.'),
    v('f05-v04', 'teacher', 'o‘qituvchi', '/ˈtiːtʃə/', 'She is a teacher.'),
    v('f05-v05', 'egg', 'tuxum', '/eɡ/', 'I have an egg.'),
  ],

  grammar: [
    g(
      'f05-g01',
      'A / AN',
      'A undosh tovush bilan boshlanuvchi birlik otlar oldidan, an unli tovush bilan boshlanuvchi birlik otlar oldidan ishlatiladi.',
      'a + consonant sound / an + vowel sound',
      [
        'a book',
        'a teacher',
        'an apple',
        'an egg',
        'an orange',
      ],
    ),
    g(
      'f05-g02',
      'THE',
      'The ma’lum yoki suhbatdoshga ma’lum bo‘lgan narsani bildiradi.',
      'the + specific noun',
      ['The book is on the table.'],
    ),
  ],

  sentenceStructures: [
    structure(
      'f05-s01',
      'Article + noun',
      'a/an/the + noun',
      ['a book', 'an apple', 'the book'],
    ),
  ],

  examples: [
    'I have a book.',
    'I have an apple.',
    'She is a teacher.',
    'The book is blue.',
    'The apple is on the table.',
  ],

  dialogue: {
    id: 'f05-dialogue',
    title: 'In the Classroom',
    lines: [
      { speaker: 'Teacher', text: 'What is this?' },
      { speaker: 'Ali', text: 'It is a book.' },
      { speaker: 'Teacher', text: 'What is that?' },
      { speaker: 'Ali', text: 'It is an apple.' },
    ],
  },

  reading: {
    id: 'f05-reading',
    title: 'A Classroom',
    text:
      'There is a classroom. There is a teacher and a student. The teacher has a book. The student has an apple.',
    questions: [
      {
        id: 'f05-rq1',
        question: 'What does the teacher have?',
        answer: 'A book',
      },
      {
        id: 'f05-rq2',
        question: 'What does the student have?',
        answer: 'An apple',
      },
    ],
  },

  writing: {
    id: 'f05-writing',
    instruction:
      'a, an va the bilan kamida 8 ta birikma yozing.',
    model:
      'a book, a teacher, an apple, an egg, the book, the teacher, an orange, a school',
  },

  activities: [
    activity(
      'f05-a01',
      'multiple-choice',
      'To‘g‘ri artiklni tanlang.',
      'I have ___ apple.',
      'an',
      ['a', 'an', 'the', 'am'],
    ),
    activity(
      'f05-a02',
      'multiple-choice',
      'To‘g‘ri artiklni tanlang.',
      'She is ___ teacher.',
      'a',
      ['a', 'an', 'the', 'is'],
    ),
    activity(
      'f05-a03',
      'multiple-choice',
      'To‘g‘ri artiklni tanlang.',
      '___ book on the table is mine.',
      'The',
      ['A', 'An', 'The', 'Am'],
    ),
  ],

  speaking: {
    id: 'f05-speaking',
    title: 'Objects Around Me',
    prompt: 'Atrofingizdagi narsalarni artikllar bilan ayting.',
    targetPhrases: [
      'a book',
      'an apple',
      'a pen',
      'the table',
    ],
  },

  challenge: {
    id: 'f05-challenge',
    title: 'Article Detective',
    description:
      'Xonadagi 10 ta narsani tasvirlang.',
    task:
      'Kamida 4 ta a, 3 ta an va 3 ta the ishlatishga harakat qiling.',
    points: 25,
  },

  test: test('f05-test', [
    testQuestion(
      'f05-t1',
      'I have ___ apple.',
      ['a', 'an', 'the', 'am'],
      'an',
    ),
    testQuestion(
      'f05-t2',
      'She is ___ teacher.',
      ['a', 'an', 'the', 'are'],
      'a',
    ),
    testQuestion(
      'f05-t3',
      'I have ___ book.',
      ['a', 'an', 'am', 'is'],
      'a',
    ),
    testQuestion(
      'f05-t4',
      '___ book on my desk is new.',
      ['A', 'An', 'The', 'Are'],
      'The',
    ),
    testQuestion(
      'f05-t5',
      'Qaysi biri to‘g‘ri?',
      [
        'an book',
        'a book',
        'a apple',
        'an teacher',
      ],
      'a book',
    ),
  ]),

  reward: reward(130),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-04',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 06
========================================================= */

const lesson06: EnglishLesson = {
  id: 'foundation-06',
  levelId: 'foundation',
  unitId: 'foundation-unit-1',
  order: 6,

  title: 'One or Many?',
  subtitle: 'Singular and plural nouns',
  description:
    'Bir dona va ko‘p dona narsalarni ingliz tilida to‘g‘ri ifodalashni o‘rganing.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'vocabulary', 'reading'],
  theme: theme('green', 'emerald', '🔢'),

  objectives: [
    'Singular va pluralni farqlash',
    '-s qo‘shimchasini ishlatish',
    '-es qo‘shimchasini tanish',
    'one / two / many bilan ishlash',
  ],

  vocabulary: [
    v('f06-v01', 'book', 'kitob', '/bʊk/', 'two books'),
    v('f06-v02', 'pen', 'ruchka', '/pen/', 'three pens'),
    v('f06-v03', 'box', 'quti', '/bɒks/', 'two boxes'),
    v('f06-v04', 'class', 'sinf', '/klɑːs/', 'two classes'),
    v('f06-v05', 'student', 'o‘quvchi', '/ˈstjuːdənt/', 'many students'),
  ],

  grammar: [
    g(
      'f06-g01',
      'Plural nouns',
      'Ko‘p birlikdagi ko‘pchilik otlarga -s yoki -es qo‘shiladi.',
      'noun + s/es',
      [
        'one book → two books',
        'one pen → three pens',
        'one box → two boxes',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f06-s01',
      'Number + plural noun',
      'number + plural noun',
      ['two books', 'three pens', 'four students'],
    ),
  ],

  examples: [
    'I have one book.',
    'I have two books.',
    'She has three pens.',
    'There are two boxes.',
    'We have many students.',
  ],

  dialogue: {
    id: 'f06-dialogue',
    title: 'How Many?',
    lines: [
      { speaker: 'Teacher', text: 'How many books do you have?' },
      { speaker: 'Ali', text: 'I have two books.' },
      { speaker: 'Teacher', text: 'How many pens?' },
      { speaker: 'Ali', text: 'I have three pens.' },
    ],
  },

  reading: {
    id: 'f06-reading',
    title: 'My School Bag',
    text:
      'I have one school bag. I have three books, two notebooks and four pens in my bag.',
    questions: [
      {
        id: 'f06-rq1',
        question: 'How many books are there?',
        answer: 'Three',
      },
      {
        id: 'f06-rq2',
        question: 'How many pens are there?',
        answer: 'Four',
      },
    ],
  },

  writing: {
    id: 'f06-writing',
    instruction:
      '5 ta singular ot va ularning plural shaklini yozing.',
    model:
      'book → books, pen → pens, box → boxes, class → classes, student → students',
  },

  activities: [
    activity(
      'f06-a01',
      'multiple-choice',
      'Plural shaklni tanlang.',
      'one book → two ___',
      'books',
      ['book', 'books', 'bookes', 'bookies'],
    ),
    activity(
      'f06-a02',
      'multiple-choice',
      'Plural shaklni tanlang.',
      'one box → two ___',
      'boxes',
      ['boxs', 'boxes', 'box', 'boxies'],
    ),
    activity(
      'f06-a03',
      'error-correction',
      'Xatoni tuzating.',
      'I have two book.',
      'I have two books.',
    ),
  ],

  speaking: {
    id: 'f06-speaking',
    title: 'Count My Things',
    prompt: 'O‘zingizdagi narsalarni sanang.',
    targetPhrases: [
      'I have one ...',
      'I have two ...',
      'I have three ...',
      'I have many ...',
    ],
  },

  challenge: {
    id: 'f06-challenge',
    title: 'Counting Challenge',
    description:
      'Xonangizdagi narsalarni sanab, ingliz tilida ayting.',
    task:
      'Kamida 8 ta singular/plural juftlik tuzing.',
    points: 25,
  },

  test: test('f06-test', [
    testQuestion(
      'f06-t1',
      'one pen → two ___',
      ['pen', 'pens', 'penes', 'penn'],
      'pens',
    ),
    testQuestion(
      'f06-t2',
      'one box → two ___',
      ['boxs', 'boxes', 'box', 'boxies'],
      'boxes',
    ),
    testQuestion(
      'f06-t3',
      'Which is plural?',
      ['book', 'pen', 'students', 'teacher'],
      'students',
    ),
    testQuestion(
      'f06-t4',
      'I have two ___.',
      ['book', 'books', 'a book', 'one book'],
      'books',
    ),
    testQuestion(
      'f06-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'I have two pen.',
        'I have two pens.',
        'I has two pens.',
        'I am two pens.',
      ],
      'I have two pens.',
    ),
  ]),

  reward: reward(135),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-05',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 07
========================================================= */

const lesson07: EnglishLesson = {
  id: 'foundation-07',
  levelId: 'foundation',
  unitId: 'foundation-unit-2',
  order: 7,

  title: 'This, That, These, Those',
  subtitle: 'Narsalarni yaqin-uzoq va birlik-ko‘plik bo‘yicha ko‘rsatish',
  description:
    'Biror narsani ko‘rsatish, nomlash va masofasini ifodalashni o‘rganing.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'vocabulary', 'speaking'],
  theme: theme('indigo', 'violet', '👉'),

  objectives: [
    'this va that ni farqlash',
    'these va those ni farqlash',
    'Birlik va ko‘plikni bog‘lash',
  ],

  vocabulary: [
    v('f07-v01', 'this', 'bu', '/ðɪs/', 'This is my book.'),
    v('f07-v02', 'that', 'u / ana u', '/ðæt/', 'That is your bag.'),
    v('f07-v03', 'these', 'bular', '/ðiːz/', 'These are my books.'),
    v('f07-v04', 'those', 'anavilar', '/ðəʊz/', 'Those are your bags.'),
    v('f07-v05', 'near', 'yaqin', '/nɪə/', 'The book is near.'),
    v('f07-v06', 'far', 'uzoq', '/fɑː/', 'The school is far.'),
  ],

  grammar: [
    g(
      'f07-g01',
      'Demonstratives',
      'This/that birlik, these/those ko‘plik bilan ishlatiladi.',
      'this + singular | that + singular | these + plural | those + plural',
      [
        'This is a book.',
        'That is a bag.',
        'These are books.',
        'Those are bags.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f07-s01',
      'Demonstrative sentence',
      'This/That + is + singular noun',
      ['This is a book.', 'That is a school.'],
    ),
    structure(
      'f07-s02',
      'Plural demonstrative',
      'These/Those + are + plural noun',
      ['These are books.', 'Those are students.'],
    ),
  ],

  examples: [
    'This is my pen.',
    'That is your bag.',
    'These are my books.',
    'Those are your shoes.',
  ],

  dialogue: {
    id: 'f07-dialogue',
    title: 'What Is This?',
    lines: [
      { speaker: 'Ali', text: 'What is this?' },
      { speaker: 'Sara', text: 'This is a pen.' },
      { speaker: 'Ali', text: 'What are those?' },
      { speaker: 'Sara', text: 'Those are books.' },
    ],
  },

  reading: {
    id: 'f07-reading',
    title: 'In the Classroom',
    text:
      'This is my desk. This is my book. These are my pens. That is the teacher’s desk. Those are the teacher’s books.',
    questions: [
      {
        id: 'f07-rq1',
        question: 'What is this?',
        answer: 'A desk',
      },
      {
        id: 'f07-rq2',
        question: 'What are those?',
        answer: 'Books',
      },
    ],
  },

  writing: {
    id: 'f07-writing',
    instruction:
      'this, that, these, those bilan 8 ta gap yozing.',
    model:
      'This is my pen. That is your bag. These are my books. Those are chairs.',
  },

  activities: [
    activity(
      'f07-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      '___ is my book. (near)',
      'This',
      ['This', 'Those', 'These', 'They'],
    ),
    activity(
      'f07-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      '___ are my shoes. (plural)',
      'These',
      ['This', 'That', 'These', 'It'],
    ),
    activity(
      'f07-a03',
      'error-correction',
      'Xatoni tuzating.',
      'These is my books.',
      'These are my books.',
    ),
  ],

  speaking: {
    id: 'f07-speaking',
    title: 'Point and Speak',
    prompt: 'Atrofingizdagi narsalarni ko‘rsatib gapiring.',
    targetPhrases: [
      'This is ...',
      'That is ...',
      'These are ...',
      'Those are ...',
    ],
  },

  challenge: {
    id: 'f07-challenge',
    title: 'Classroom Detective',
    description:
      'Xonani ingliz tilida ko‘rsatib tasvirlang.',
    task:
      'This, that, these, those ning barchasidan foydalaning.',
    points: 25,
  },

  test: test('f07-test', [
    testQuestion(
      'f07-t1',
      '___ is my pen. (near)',
      ['This', 'These', 'Those', 'They'],
      'This',
    ),
    testQuestion(
      'f07-t2',
      '___ are my books. (near)',
      ['This', 'That', 'These', 'It'],
      'These',
    ),
    testQuestion(
      'f07-t3',
      '___ is your school. (far)',
      ['This', 'That', 'These', 'Those'],
      'That',
    ),
    testQuestion(
      'f07-t4',
      '___ are those students. (far)',
      ['This', 'That', 'These', 'Those'],
      'Those',
    ),
    testQuestion(
      'f07-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'These is books.',
        'This are books.',
        'These are books.',
        'Those is books.',
      ],
      'These are books.',
    ),
  ]),

  reward: reward(140),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-06',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 08
========================================================= */

const lesson08: EnglishLesson = {
  id: 'foundation-08',
  levelId: 'foundation',
  unitId: 'foundation-unit-2',
  order: 8,

  title: 'Have and Has',
  subtitle: 'Egalikni ifodalash',
  description:
    'Kimda nima borligini have va has yordamida aytishni o‘rganing.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('teal', 'cyan', '🎒'),

  objectives: [
    'have va has ni farqlash',
    'Egalik haqida gapirish',
    'Have/has bilan savolga tayyorlanish',
  ],

  vocabulary: [
    v('f08-v01', 'bag', 'sumka', '/bæɡ/', 'I have a bag.'),
    v('f08-v02', 'phone', 'telefon', '/fəʊn/', 'She has a phone.'),
    v('f08-v03', 'car', 'mashina', '/kɑː/', 'He has a car.'),
    v('f08-v04', 'computer', 'kompyuter', '/kəmˈpjuːtə/', 'I have a computer.'),
    v('f08-v05', 'idea', 'g‘oya', '/aɪˈdɪə/', 'She has an idea.'),
  ],

  grammar: [
    g(
      'f08-g01',
      'Have / Has',
      'I, you, we, they bilan have; he, she, it bilan has ishlatiladi.',
      'I/You/We/They have | He/She/It has',
      [
        'I have a bag.',
        'You have a phone.',
        'He has a car.',
        'She has a computer.',
        'They have books.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f08-s01',
      'Possession',
      'Subject + have/has + object',
      [
        'I have a book.',
        'She has a phone.',
        'They have a car.',
      ],
    ),
  ],

  examples: [
    'I have a bag.',
    'You have a phone.',
    'He has a car.',
    'She has a computer.',
    'We have books.',
    'They have a house.',
  ],

  dialogue: {
    id: 'f08-dialogue',
    title: 'What Do You Have?',
    lines: [
      { speaker: 'Ali', text: 'I have a new phone.' },
      { speaker: 'Tom', text: 'Really? I have a new computer.' },
      { speaker: 'Ali', text: 'Does Sara have a phone?' },
      { speaker: 'Tom', text: 'Yes, she has a phone.' },
    ],
  },

  reading: {
    id: 'f08-reading',
    title: 'Our Things',
    text:
      'I have a school bag and a phone. My brother has a bicycle. My sister has a computer. We have many books.',
    questions: [
      {
        id: 'f08-rq1',
        question: 'What does the brother have?',
        answer: 'A bicycle',
      },
      {
        id: 'f08-rq2',
        question: 'What does the sister have?',
        answer: 'A computer',
      },
    ],
  },

  writing: {
    id: 'f08-writing',
    instruction:
      'O‘zingizda va oilangizda bor narsalar haqida 8 ta gap yozing.',
    model:
      'I have a phone. I have a book. My father has a car. My mother has a phone.',
  },

  activities: [
    activity(
      'f08-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ a book.',
      'have',
      ['have', 'has', 'am', 'is'],
    ),
    activity(
      'f08-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'She ___ a phone.',
      'has',
      ['have', 'has', 'are', 'am'],
    ),
    activity(
      'f08-a03',
      'error-correction',
      'Xatoni tuzating.',
      'He have a car.',
      'He has a car.',
    ),
  ],

  speaking: {
    id: 'f08-speaking',
    title: 'What I Have',
    prompt: 'O‘zingizdagi narsalarni ingliz tilida ayting.',
    targetPhrases: [
      'I have ...',
      'My father has ...',
      'My mother has ...',
      'We have ...',
    ],
  },

  challenge: {
    id: 'f08-challenge',
    title: 'My Things',
    description:
      'O‘zingiz va oilangizning narsalarini tasvirlang.',
    task:
      'have va has yordamida kamida 10 ta gap yozing.',
    points: 30,
  },

  test: test('f08-test', [
    testQuestion(
      'f08-t1',
      'I ___ a phone.',
      ['have', 'has', 'is', 'am'],
      'have',
    ),
    testQuestion(
      'f08-t2',
      'He ___ a car.',
      ['have', 'has', 'are', 'am'],
      'has',
    ),
    testQuestion(
      'f08-t3',
      'They ___ many books.',
      ['have', 'has', 'is', 'am'],
      'have',
    ),
    testQuestion(
      'f08-t4',
      'She ___ a computer.',
      ['have', 'has', 'are', 'be'],
      'has',
    ),
    testQuestion(
      'f08-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'He have a phone.',
        'He has a phone.',
        'He is a phone.',
        'He having a phone.',
      ],
      'He has a phone.',
    ),
  ]),

  reward: reward(145),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-07',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 09
========================================================= */

const lesson09: EnglishLesson = {
  id: 'foundation-09',
  levelId: 'foundation',
  unitId: 'foundation-unit-2',
  order: 9,

  title: 'There Is / There Are',
  subtitle: 'Joylashuv va mavjudlikni ifodalash',
  description:
    'Xona, uy, maktab yoki boshqa joylarda nima borligini ayting.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'speaking', 'reading'],
  theme: theme('emerald', 'green', '🏫'),

  objectives: [
    'There is ni birlik bilan ishlatish',
    'There are ni ko‘plik bilan ishlatish',
    'Joyni tasvirlash',
  ],

  vocabulary: [
    v('f09-v01', 'room', 'xona', '/ruːm/', 'There is a room.'),
    v('f09-v02', 'table', 'stol', '/ˈteɪbəl/', 'There is a table.'),
    v('f09-v03', 'chair', 'stul', '/tʃeə/', 'There are chairs.'),
    v('f09-v04', 'window', 'deraza', '/ˈwɪndəʊ/', 'There is a window.'),
    v('f09-v05', 'door', 'eshik', '/dɔː/', 'There is a door.'),
  ],

  grammar: [
    g(
      'f09-g01',
      'There is / There are',
      'There is birlik, there are ko‘plikdagi narsalar mavjudligini bildiradi.',
      'There is + singular | There are + plural',
      [
        'There is a table.',
        'There is a window.',
        'There are two chairs.',
        'There are many books.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f09-s01',
      'Existence',
      'There is/are + noun',
      [
        'There is a table.',
        'There are two chairs.',
      ],
    ),
  ],

  examples: [
    'There is a table in the room.',
    'There are two chairs.',
    'There is a window.',
    'There are many books.',
  ],

  dialogue: {
    id: 'f09-dialogue',
    title: 'Our Classroom',
    lines: [
      { speaker: 'Teacher', text: 'What is in the classroom?' },
      { speaker: 'Ali', text: 'There is a teacher.' },
      { speaker: 'Teacher', text: 'What else?' },
      { speaker: 'Ali', text: 'There are many students and books.' },
    ],
  },

  reading: {
    id: 'f09-reading',
    title: 'My Room',
    text:
      'My room is small. There is a bed, a desk and a window. There are two chairs and many books.',
    questions: [
      {
        id: 'f09-rq1',
        question: 'What is in the room?',
        answer: 'A bed, a desk and a window',
      },
      {
        id: 'f09-rq2',
        question: 'How many chairs are there?',
        answer: 'Two',
      },
    ],
  },

  writing: {
    id: 'f09-writing',
    instruction:
      'Xonangizni there is / there are bilan tasvirlang.',
    model:
      'There is a bed. There is a desk. There are two chairs. There are many books.',
  },

  activities: [
    activity(
      'f09-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      '___ a table in the room.',
      'There is',
      ['There is', 'There are', 'They is', 'It are'],
    ),
    activity(
      'f09-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      '___ two chairs.',
      'There are',
      ['There is', 'There are', 'It is', 'They is'],
    ),
    activity(
      'f09-a03',
      'error-correction',
      'Xatoni tuzating.',
      'There is two books.',
      'There are two books.',
    ),
  ],

  speaking: {
    id: 'f09-speaking',
    title: 'Describe a Room',
    prompt: 'Bir xonani ingliz tilida tasvirlang.',
    targetPhrases: [
      'There is ...',
      'There are ...',
      'There is a ...',
      'There are two ...',
    ],
  },

  challenge: {
    id: 'f09-challenge',
    title: 'Room Designer',
    description:
      'Tasavvuriy xona yarating.',
    task:
      'There is va there are bilan kamida 10 ta gap tuzing.',
    points: 30,
  },

  test: test('f09-test', [
    testQuestion(
      'f09-t1',
      '___ a desk in my room.',
      ['There is', 'There are', 'They are', 'It are'],
      'There is',
    ),
    testQuestion(
      'f09-t2',
      '___ two windows.',
      ['There is', 'There are', 'It is', 'They is'],
      'There are',
    ),
    testQuestion(
      'f09-t3',
      '___ many books on the table.',
      ['There is', 'There are', 'It is', 'He is'],
      'There are',
    ),
    testQuestion(
      'f09-t4',
      'Which sentence is correct?',
      [
        'There are a chair.',
        'There is a chair.',
        'There is two chair.',
        'There are one chair.',
      ],
      'There is a chair.',
    ),
    testQuestion(
      'f09-t5',
      'Ko‘plik bilan qaysi biri ishlatiladi?',
      ['There is', 'There are', 'There am', 'There be'],
      'There are',
    ),
  ]),

  reward: reward(150),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-08',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 10
========================================================= */

const lesson10: EnglishLesson = {
  id: 'foundation-10',
  levelId: 'foundation',
  unitId: 'foundation-unit-2',
  order: 10,

  title: 'My School Day',
  subtitle: 'Present Simple ga kirish',
  description:
    'Kundalik odat va harakatlarni oddiy fe’llar yordamida ifodalashni boshlang.',
  type: 'lesson',
  difficulty: 'easy',

  skills: ['grammar', 'vocabulary', 'speaking', 'reading'],
  theme: theme('blue', 'indigo', '🏫'),

  objectives: [
    'Kundalik harakatlarni aytish',
    'Present Simple bilan tanishish',
    'Subject + Verb strukturasini qo‘llash',
  ],

  vocabulary: [
    v('f10-v01', 'wake up', 'uyg‘onmoq', '/weɪk ʌp/', 'I wake up at seven.'),
    v('f10-v02', 'go', 'bormoq', '/ɡəʊ/', 'I go to school.'),
    v('f10-v03', 'study', 'o‘qimoq', '/ˈstʌdi/', 'I study English.'),
    v('f10-v04', 'eat', 'yemoq', '/iːt/', 'I eat breakfast.'),
    v('f10-v05', 'play', 'o‘ynamoq', '/pleɪ/', 'I play football.'),
    v('f10-v06', 'sleep', 'uxlamoq', '/sliːp/', 'I sleep at ten.'),
  ],

  grammar: [
    g(
      'f10-g01',
      'Present Simple',
      'Present Simple odat, kundalik ish va umumiy faktlar uchun ishlatiladi.',
      'Subject + base verb',
      [
        'I wake up early.',
        'I go to school.',
        'We study English.',
        'They play football.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f10-s01',
      'Subject + Verb',
      'Subject + base verb',
      [
        'I study.',
        'You work.',
        'We play.',
        'They learn.',
      ],
    ),
    structure(
      'f10-s02',
      'Subject + Verb + Object',
      'Subject + verb + object',
      [
        'I study English.',
        'We play football.',
        'They eat breakfast.',
      ],
    ),
  ],

  examples: [
    'I wake up at seven.',
    'I eat breakfast.',
    'I go to school.',
    'I study English.',
    'I play football.',
    'I sleep at ten.',
  ],

  dialogue: {
    id: 'f10-dialogue',
    title: 'My Daily Routine',
    lines: [
      { speaker: 'Ali', text: 'What do you do in the morning?' },
      { speaker: 'Tom', text: 'I wake up at seven.' },
      { speaker: 'Ali', text: 'Do you go to school?' },
      { speaker: 'Tom', text: 'Yes, I do.' },
    ],
  },

  reading: {
    id: 'f10-reading',
    title: 'My School Day',
    text:
      'I wake up at seven. I eat breakfast and go to school. I study English and mathematics. After school, I play football. I sleep at ten.',
    questions: [
      {
        id: 'f10-rq1',
        question: 'What time does the student wake up?',
        answer: 'Seven',
      },
      {
        id: 'f10-rq2',
        question: 'What does the student study?',
        answer: 'English and mathematics',
      },
    ],
  },

  writing: {
    id: 'f10-writing',
    instruction:
      'Kundalik tartibingiz haqida kamida 8 ta gap yozing.',
    model:
      'I wake up at seven. I eat breakfast. I go to school. I study English. I play football. I go home. I eat dinner. I sleep at ten.',
  },

  activities: [
    activity(
      'f10-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ English every day.',
      'study',
      ['study', 'studies', 'studying', 'am study'],
    ),
    activity(
      'f10-a02',
      'sentence-builder',
      'Gapni tuzing.',
      'school / I / go / to',
      'I go to school.',
    ),
    activity(
      'f10-a03',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'We ___ football.',
      'play',
      ['play', 'plays', 'playing', 'are play'],
    ),
  ],

  speaking: {
    id: 'f10-speaking',
    title: 'My Daily Routine',
    prompt: 'Kundalik hayotingizni ketma-ket ayting.',
    targetPhrases: [
      'I wake up ...',
      'I eat ...',
      'I go to ...',
      'I study ...',
      'I play ...',
      'I sleep ...',
    ],
  },

  challenge: {
    id: 'f10-challenge',
    title: 'My Day Challenge',
    description:
      'Bir kuningizni ingliz tilida hikoya qiling.',
    task:
      'Kamida 10 ta Present Simple gap ishlating.',
    points: 30,
  },

  test: test('f10-test', [
    testQuestion(
      'f10-t1',
      'I ___ English every day.',
      ['study', 'studies', 'studying', 'am study'],
      'study',
    ),
    testQuestion(
      'f10-t2',
      'We ___ football after school.',
      ['play', 'plays', 'playing', 'are play'],
      'play',
    ),
    testQuestion(
      'f10-t3',
      'To‘g‘ri gapni tanlang.',
      [
        'I go to school.',
        'I goes to school.',
        'I going to school.',
        'I am go school.',
      ],
      'I go to school.',
    ),
    testQuestion(
      'f10-t4',
      'Present Simple odatda nimani bildiradi?',
      [
        'Faqat hozirgi ayni lahzani',
        'Odat va kundalik ishlarni',
        'Faqat o‘tgan voqeani',
        'Faqat kelajakni',
      ],
      'Odat va kundalik ishlarni',
    ),
    testQuestion(
      'f10-t5',
      '“Men ingliz tilini o‘rganaman” qaysi?',
      [
        'I study English.',
        'I studies English.',
        'I am study English.',
        'I studying English.',
      ],
      'I study English.',
    ),
  ]),

  reward: reward(160),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-09',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSONS 11–30
   =========================================================
 *
 * Keyingi bosqichda:
 *
 * 11  Present Simple + He/She/It
 * 12  Do / Does
 * 13  Present Simple Negative
 * 14  Present Simple Questions
 * 15  Question Words
 * 16  Can / Can't
 * 17  Imperatives
 * 18  Prepositions of Place
 * 19  Prepositions of Time
 * 20  Adjectives
 * 21  Adverbs of Frequency
 * 22  Food and Drinks
 * 23  Likes and Dislikes
 * 24  Hobbies
 * 25  Daily Routine — Advanced Foundation
 * 26  Places and Directions
 * 27  Shopping
 * 28  Weather and Clothes
 * 29  Mixed Grammar Mission
 * 30  FOUNDATION FINAL CHALLENGE
 *
 * Bu darslar 1–10 dagi grammatikani
 * takrorlash emas, balki bosqichma-bosqich
 * birlashtirib boradi.
 *
 * ========================================================= */


/* =========================================================
   LESSON 11
========================================================= */

const lesson11: EnglishLesson = {
  id: 'foundation-11',
  levelId: 'foundation',
  unitId: 'foundation-unit-3',
  order: 11,

  title: 'He Works, She Studies',
  subtitle: 'He / She / It bilan fe’lga -s',
  description:
    'Present Simple ning eng muhim qoidalaridan biri: he, she, it bilan fe’l shaklining o‘zgarishi.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'writing'],
  theme: theme('violet', 'purple', '👨‍💼'),

  objectives: [
    'He/she/it bilan -s qo‘shimchasini ishlatish',
    'Kundalik odatlarni uchinchi shaxsda aytish',
    'I work va He works farqini tushunish',
  ],

  vocabulary: [
    v('f11-v01', 'work', 'ishlamoq', '/wɜːk/', 'He works at school.'),
    v('f11-v02', 'teach', 'dars bermoq', '/tiːtʃ/', 'She teaches English.'),
    v('f11-v03', 'read', 'o‘qimoq', '/riːd/', 'He reads books.'),
    v('f11-v04', 'watch', 'tomosha qilmoq', '/wɒtʃ/', 'She watches TV.'),
    v('f11-v05', 'go', 'bormoq', '/ɡəʊ/', 'He goes to school.'),
  ],

  grammar: [
    g(
      'f11-g01',
      'Third Person Singular',
      'He, she, it bilan Present Simple fe’liga odatda -s yoki -es qo‘shiladi.',
      'He/She/It + verb-s/es',
      [
        'He works.',
        'She reads.',
        'He goes.',
        'She watches TV.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f11-s01',
      'Third person',
      'He/She/It + verb-s/es',
      [
        'He works at school.',
        'She teaches English.',
        'He goes home.',
      ],
    ),
  ],

  examples: [
    'I work at school.',
    'He works at school.',
    'I read books.',
    'She reads books.',
    'They go to school.',
    'He goes to school.',
  ],

  dialogue: {
    id: 'f11-dialogue',
    title: 'What Does He Do?',
    lines: [
      { speaker: 'Ali', text: 'What does your father do?' },
      { speaker: 'Sara', text: 'He works at a school.' },
      { speaker: 'Ali', text: 'Does he teach?' },
      { speaker: 'Sara', text: 'Yes, he teaches English.' },
    ],
  },

  reading: {
    id: 'f11-reading',
    title: 'My Father',
    text:
      'My father works at a school. He teaches English. He reads books every evening. He watches the news at night.',
    questions: [
      {
        id: 'f11-rq1',
        question: 'Where does the father work?',
        answer: 'At a school',
      },
      {
        id: 'f11-rq2',
        question: 'What does he teach?',
        answer: 'English',
      },
    ],
  },

  writing: {
    id: 'f11-writing',
    instruction:
      'Bir oila a’zongizning kundalik faoliyati haqida 6 ta gap yozing.',
    model:
      'My father works at school. He reads books. He teaches students. He goes home at five.',
  },

  activities: [
    activity(
      'f11-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'He ___ English.',
      'teaches',
      ['teach', 'teaches', 'teaching', 'is teach'],
    ),
    activity(
      'f11-a02',
      'error-correction',
      'Xatoni tuzating.',
      'She work at school.',
      'She works at school.',
    ),
    activity(
      'f11-a03',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'He ___ to school every day.',
      'goes',
      ['go', 'goes', 'going', 'is go'],
    ),
  ],

  speaking: {
    id: 'f11-speaking',
    title: 'Talk About Someone',
    prompt: 'Bir insonning kundalik faoliyatini tasvirlang.',
    targetPhrases: [
      'He works ...',
      'She studies ...',
      'He goes ...',
      'She reads ...',
    ],
  },

  challenge: {
    id: 'f11-challenge',
    title: 'Third Person Mission',
    description:
      'Bir insonning kunini hikoya qiling.',
    task:
      'He yoki she bilan kamida 8 ta Present Simple gap tuzing.',
    points: 30,
  },

  test: test('f11-test', [
    testQuestion(
      'f11-t1',
      'He ___ at school.',
      ['work', 'works', 'working', 'is work'],
      'works',
    ),
    testQuestion(
      'f11-t2',
      'She ___ English.',
      ['teach', 'teaches', 'teaching', 'is teach'],
      'teaches',
    ),
    testQuestion(
      'f11-t3',
      'He ___ books.',
      ['read', 'reads', 'reading', 'is read'],
      'reads',
    ),
    testQuestion(
      'f11-t4',
      'She ___ TV.',
      ['watch', 'watches', 'watching', 'is watch'],
      'watches',
    ),
    testQuestion(
      'f11-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'He go to school.',
        'He goes to school.',
        'He going to school.',
        'He is go school.',
      ],
      'He goes to school.',
    ),
  ]),

  reward: reward(170),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-10',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 12
========================================================= */

const lesson12: EnglishLesson = {
  id: 'foundation-12',
  levelId: 'foundation',
  unitId: 'foundation-unit-3',
  order: 12,

  title: 'Do or Does?',
  subtitle: 'Present Simple savollariga kirish',
  description:
    'Do va does yordamida kundalik odatlar haqida savol berishni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'listening'],
  theme: theme('orange', 'amber', '❓'),

  objectives: [
    'Do va does ni farqlash',
    'Present Simple savollarini tuzish',
    'Yes/No javoblarini berish',
  ],

  vocabulary: [
    v('f12-v01', 'like', 'yoqtirmoq', '/laɪk/', 'I like English.'),
    v('f12-v02', 'play', 'o‘ynamoq', '/pleɪ/', 'Do you play football?'),
    v('f12-v03', 'study', 'o‘qimoq', '/ˈstʌdi/', 'Does he study English?'),
    v('f12-v04', 'live', 'yashamoq', '/lɪv/', 'Do you live here?'),
    v('f12-v05', 'speak', 'gapirmoq', '/spiːk/', 'Do you speak English?'),
  ],

  grammar: [
    g(
      'f12-g01',
      'Do / Does Questions',
      'I/you/we/they bilan do, he/she/it bilan does ishlatiladi.',
      'Do/Does + subject + base verb?',
      [
        'Do you like English?',
        'Do they play football?',
        'Does he study English?',
        'Does she live here?',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f12-s01',
      'Yes/No question',
      'Do/Does + subject + base verb?',
      [
        'Do you like English?',
        'Does he play football?',
      ],
    ),
  ],

  examples: [
    'Do you like English?',
    'Yes, I do.',
    'No, I do not.',
    'Does he play football?',
    'Yes, he does.',
    'No, he does not.',
  ],

  dialogue: {
    id: 'f12-dialogue',
    title: 'Do You Like English?',
    lines: [
      { speaker: 'Teacher', text: 'Do you like English?' },
      { speaker: 'Ali', text: 'Yes, I do.' },
      { speaker: 'Teacher', text: 'Does your friend like English?' },
      { speaker: 'Ali', text: 'Yes, he does.' },
    ],
  },

  reading: {
    id: 'f12-reading',
    title: 'A Short Interview',
    text:
      'Ali likes English. He studies English every day. He also plays football. His friend Tom likes football and English too.',
    questions: [
      {
        id: 'f12-rq1',
        question: 'Does Ali like English?',
        answer: 'Yes',
      },
      {
        id: 'f12-rq2',
        question: 'What does Ali play?',
        answer: 'Football',
      },
    ],
  },

  writing: {
    id: 'f12-writing',
    instruction:
      '5 ta Do/Does savol va ularga javob yozing.',
    model:
      'Do you like English? Yes, I do. Does he play football? No, he does not.',
  },

  activities: [
    activity(
      'f12-a01',
      'multiple-choice',
      'To‘g‘ri yordamchi fe’lni tanlang.',
      '___ you like English?',
      'Do',
      ['Do', 'Does', 'Is', 'Are'],
    ),
    activity(
      'f12-a02',
      'multiple-choice',
      'To‘g‘ri yordamchi fe’lni tanlang.',
      '___ she study English?',
      'Does',
      ['Do', 'Does', 'Is', 'Are'],
    ),
    activity(
      'f12-a03',
      'error-correction',
      'Xatoni tuzating.',
      'Does he likes football?',
      'Does he like football?',
    ),
  ],

  speaking: {
    id: 'f12-speaking',
    title: 'Mini Interview',
    prompt: 'Sherigingizga ingliz tilida 5 ta savol bering.',
    targetPhrases: [
      'Do you like ...?',
      'Do you play ...?',
      'Do you study ...?',
      'Does he/she ...?',
    ],
  },

  challenge: {
    id: 'f12-challenge',
    title: 'Interviewer',
    description:
      'Ingliz tilida kichik intervyu o‘tkazing.',
    task:
      'Kamida 8 ta Do/Does savol tuzing va javob bering.',
    points: 30,
  },

  test: test('f12-test', [
    testQuestion(
      'f12-t1',
      '___ you like English?',
      ['Do', 'Does', 'Is', 'Are'],
      'Do',
    ),
    testQuestion(
      'f12-t2',
      '___ she study English?',
      ['Do', 'Does', 'Is', 'Are'],
      'Does',
    ),
    testQuestion(
      'f12-t3',
      '___ they play football?',
      ['Do', 'Does', 'Is', 'Are'],
      'Do',
    ),
    testQuestion(
      'f12-t4',
      'Does he ___ football?',
      ['plays', 'play', 'playing', 'played'],
      'play',
    ),
    testQuestion(
      'f12-t5',
      '“Do you like English?” ga ijobiy qisqa javob:',
      ['Yes, I am.', 'Yes, I do.', 'Yes, I does.', 'Yes, I like.'],
      'Yes, I do.',
    ),
  ]),

  reward: reward(175),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-11',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 13
========================================================= */

const lesson13: EnglishLesson = {
  id: 'foundation-13',
  levelId: 'foundation',
  unitId: 'foundation-unit-3',
  order: 13,

  title: 'I Don’t, He Doesn’t',
  subtitle: 'Present Simple negative',
  description:
    'Kundalik odatlar va faktlarni inkor qilishni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'writing'],
  theme: theme('red', 'rose', '🚫'),

  objectives: [
    'do not / don’t ni ishlatish',
    'does not / doesn’t ni ishlatish',
    'Doesn’t dan keyin base verb ishlatish',
  ],

  vocabulary: [
    v('f13-v01', 'drink', 'ichmoq', '/drɪŋk/', 'I drink tea.'),
    v('f13-v02', 'eat', 'yemoq', '/iːt/', 'I eat breakfast.'),
    v('f13-v03', 'watch', 'tomosha qilmoq', '/wɒtʃ/', 'I watch TV.'),
    v('f13-v04', 'drive', 'haydamoq', '/draɪv/', 'He drives a car.'),
    v('f13-v05', 'cook', 'ovqat pishirmoq', '/kʊk/', 'She cooks dinner.'),
  ],

  grammar: [
    g(
      'f13-g01',
      'Present Simple Negative',
      'I/you/we/they bilan don’t, he/she/it bilan doesn’t ishlatiladi.',
      'Subject + do/does not + base verb',
      [
        'I don’t drink coffee.',
        'They don’t play tennis.',
        'He doesn’t watch TV.',
        'She doesn’t drive.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f13-s01',
      'Negative',
      'Subject + don’t/doesn’t + base verb',
      [
        'I don’t drink coffee.',
        'He doesn’t play football.',
      ],
    ),
  ],

  examples: [
    'I don’t drink coffee.',
    'We don’t watch TV.',
    'He doesn’t play tennis.',
    'She doesn’t drive.',
  ],

  dialogue: {
    id: 'f13-dialogue',
    title: 'What Don’t You Do?',
    lines: [
      { speaker: 'Ali', text: 'Do you drink coffee?' },
      { speaker: 'Tom', text: 'No, I don’t.' },
      { speaker: 'Ali', text: 'Does your brother drink coffee?' },
      { speaker: 'Tom', text: 'No, he doesn’t.' },
    ],
  },

  reading: {
    id: 'f13-reading',
    title: 'Different Habits',
    text:
      'I drink tea, but I don’t drink coffee. My brother likes coffee, but he doesn’t drink tea. We both like water.',
    questions: [
      {
        id: 'f13-rq1',
        question: 'Does the writer drink coffee?',
        answer: 'No',
      },
      {
        id: 'f13-rq2',
        question: 'Does the brother drink tea?',
        answer: 'No',
      },
    ],
  },

  writing: {
    id: 'f13-writing',
    instruction:
      'O‘zingiz haqingizda 5 ta positive va 5 ta negative gap yozing.',
    model:
      'I drink tea. I study English. I don’t drink coffee. I don’t play tennis.',
  },

  activities: [
    activity(
      'f13-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ drink coffee.',
      'don’t',
      ['don’t', 'doesn’t', 'am not', 'isn’t'],
    ),
    activity(
      'f13-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'He ___ play tennis.',
      'doesn’t',
      ['don’t', 'doesn’t', 'isn’t', 'aren’t'],
    ),
    activity(
      'f13-a03',
      'error-correction',
      'Xatoni tuzating.',
      'He doesn’t plays football.',
      'He doesn’t play football.',
    ),
  ],

  speaking: {
    id: 'f13-speaking',
    title: 'Likes and Habits',
    prompt: 'Nima qilishingiz va nima qilmasligingizni ayting.',
    targetPhrases: [
      'I ...',
      'I don’t ...',
      'He ...',
      'He doesn’t ...',
    ],
  },

  challenge: {
    id: 'f13-challenge',
    title: 'Negative Mission',
    description:
      'Kundalik hayotdagi odatlarni positive va negative shaklda ayting.',
    task:
      'Kamida 10 ta gap tuzing: 5 positive + 5 negative.',
    points: 30,
  },

  test: test('f13-test', [
    testQuestion(
      'f13-t1',
      'I ___ drink coffee.',
      ['don’t', 'doesn’t', 'isn’t', 'aren’t'],
      'don’t',
    ),
    testQuestion(
      'f13-t2',
      'She ___ play football.',
      ['don’t', 'doesn’t', 'isn’t', 'aren’t'],
      'doesn’t',
    ),
    testQuestion(
      'f13-t3',
      'He doesn’t ___ TV.',
      ['watches', 'watch', 'watching', 'watched'],
      'watch',
    ),
    testQuestion(
      'f13-t4',
      'They ___ study French.',
      ['doesn’t', 'don’t', 'isn’t', 'aren’t'],
      'don’t',
    ),
    testQuestion(
      'f13-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'She doesn’t likes tea.',
        'She don’t like tea.',
        'She doesn’t like tea.',
        'She not like tea.',
      ],
      'She doesn’t like tea.',
    ),
  ]),

  reward: reward(180),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-12',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 14
========================================================= */

const lesson14: EnglishLesson = {
  id: 'foundation-14',
  levelId: 'foundation',
  unitId: 'foundation-unit-3',
  order: 14,

  title: 'Ask the Right Question',
  subtitle: 'Present Simple: savol + qisqa javob',
  description:
    'Do/does savollarini kundalik suhbatlarda erkin qo‘llashni mashq qiling.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'listening'],
  theme: theme('blue', 'sky', '💬'),

  objectives: [
    'Do/does savollarini tez tuzish',
    'Yes/No javoblarini berish',
    'Savol-javob dialogini qurish',
  ],

  vocabulary: [
    v('f14-v01', 'morning', 'ertalab', '/ˈmɔːnɪŋ/', 'I study in the morning.'),
    v('f14-v02', 'evening', 'kechqurun', '/ˈiːvnɪŋ/', 'I read in the evening.'),
    v('f14-v03', 'weekend', 'dam olish kunlari', '/ˌwiːkˈend/', 'I play football at the weekend.'),
    v('f14-v04', 'usually', 'odatda', '/ˈjuːʒuəli/', 'I usually study at night.'),
    v('f14-v05', 'sometimes', 'ba’zan', '/ˈsʌmtaɪmz/', 'I sometimes play chess.'),
  ],

  grammar: [
    g(
      'f14-g01',
      'Do / Does Review',
      'Do/does yordamida kundalik odatlar haqida savollar tuziladi.',
      'Do/Does + subject + base verb?',
      [
        'Do you study English?',
        'Does she play chess?',
        'Do they work here?',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f14-s01',
      'Question + answer',
      'Do/Does + subject + verb?',
      [
        'Do you study English?',
        'Yes, I do.',
        'Does she play chess?',
        'No, she doesn’t.',
      ],
    ),
  ],

  examples: [
    'Do you study English?',
    'Yes, I do.',
    'Does your brother play chess?',
    'No, he doesn’t.',
    'Do they work here?',
    'Yes, they do.',
  ],

  dialogue: {
    id: 'f14-dialogue',
    title: 'Weekend Interview',
    lines: [
      { speaker: 'Ali', text: 'Do you play football at the weekend?' },
      { speaker: 'Tom', text: 'Yes, I do.' },
      { speaker: 'Ali', text: 'Does your brother play?' },
      { speaker: 'Tom', text: 'No, he doesn’t.' },
    ],
  },

  reading: {
    id: 'f14-reading',
    title: 'Weekend Activities',
    text:
      'At the weekend, I usually play football. My sister usually reads books. My brother sometimes plays chess.',
    questions: [
      {
        id: 'f14-rq1',
        question: 'What does the writer usually play?',
        answer: 'Football',
      },
      {
        id: 'f14-rq2',
        question: 'What does the brother sometimes play?',
        answer: 'Chess',
      },
    ],
  },

  writing: {
    id: 'f14-writing',
    instruction:
      'Do/Does yordamida 8 ta savol-javob yozing.',
    model:
      'Do you play football? Yes, I do. Does she read books? Yes, she does.',
  },

  activities: [
    activity(
      'f14-a01',
      'multiple-choice',
      'Savolni to‘g‘ri tuzing.',
      '___ you play chess?',
      'Do',
      ['Do', 'Does', 'Is', 'Are'],
    ),
    activity(
      'f14-a02',
      'multiple-choice',
      'Javobni tanlang.',
      'Does he study English?',
      'Yes, he does.',
      ['Yes, he do.', 'Yes, he does.', 'Yes, he is.', 'Yes, he studies.'],
    ),
    activity(
      'f14-a03',
      'sentence-builder',
      'So‘zlarni tartiblang.',
      'does / she / English / study / ?',
      'Does she study English?',
    ),
  ],

  speaking: {
    id: 'f14-speaking',
    title: 'Ask Me',
    prompt: 'Sherigingiz bilan savol-javob qiling.',
    targetPhrases: [
      'Do you ...?',
      'Does he ...?',
      'Yes, I do.',
      'No, I don’t.',
      'Yes, he does.',
      'No, he doesn’t.',
    ],
  },

  challenge: {
    id: 'f14-challenge',
    title: 'Interview Challenge',
    description:
      'Do‘stingiz haqida mini-intervyu tuzing.',
    task:
      '10 ta savol yozing va har biriga qisqa javob bering.',
    points: 35,
  },

  test: test('f14-test', [
    testQuestion(
      'f14-t1',
      '___ you play chess?',
      ['Do', 'Does', 'Is', 'Are'],
      'Do',
    ),
    testQuestion(
      'f14-t2',
      '___ she study English?',
      ['Do', 'Does', 'Is', 'Are'],
      'Does',
    ),
    testQuestion(
      'f14-t3',
      'Does he work here?',
      ['Yes, he do.', 'Yes, he does.', 'Yes, he is.', 'Yes, he works.'],
      'Yes, he does.',
    ),
    testQuestion(
      'f14-t4',
      'Do they play football?',
      ['No, they don’t.', 'No, they doesn’t.', 'No, they aren’t.', 'No, they not.'],
      'No, they don’t.',
    ),
    testQuestion(
      'f14-t5',
      'To‘g‘ri savolni tanlang.',
      [
        'Does she likes music?',
        'Does she like music?',
        'Do she like music?',
        'Is she like music?',
      ],
      'Does she like music?',
    ),
  ]),

  reward: reward(185),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-13',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 15
========================================================= */

const lesson15: EnglishLesson = {
  id: 'foundation-15',
  levelId: 'foundation',
  unitId: 'foundation-unit-4',
  order: 15,

  title: 'What, Where, Who, When, Why, How?',
  subtitle: 'Question Words',
  description:
    'Faqat yes/no emas, kerakli ma’lumotni olish uchun savol berishni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('fuchsia', 'purple', '🔎'),

  objectives: [
    'What savolini ishlatish',
    'Where savolini ishlatish',
    'Who savolini ishlatish',
    'When, why, how bilan tanishish',
  ],

  vocabulary: [
    v('f15-v01', 'what', 'nima', '/wɒt/', 'What is your name?'),
    v('f15-v02', 'where', 'qayerda', '/weə/', 'Where do you live?'),
    v('f15-v03', 'who', 'kim', '/huː/', 'Who is he?'),
    v('f15-v04', 'when', 'qachon', '/wen/', 'When do you study?'),
    v('f15-v05', 'why', 'nega', '/waɪ/', 'Why are you late?'),
    v('f15-v06', 'how', 'qanday', '/haʊ/', 'How are you?'),
  ],

  grammar: [
    g(
      'f15-g01',
      'Question Words',
      'Question words aniq ma’lumot olish uchun ishlatiladi.',
      'Question word + auxiliary + subject + verb?',
      [
        'What do you study?',
        'Where do you live?',
        'Who is he?',
        'When do you work?',
        'Why are you happy?',
        'How are you?',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f15-s01',
      'Wh-question',
      'Question word + auxiliary + subject + verb?',
      [
        'Where do you live?',
        'What do you study?',
        'When do you work?',
      ],
    ),
  ],

  examples: [
    'What is your name?',
    'Where do you live?',
    'Who is your teacher?',
    'When do you study?',
    'Why do you learn English?',
    'How are you?',
  ],

  dialogue: {
    id: 'f15-dialogue',
    title: 'Getting to Know You',
    lines: [
      { speaker: 'Ali', text: 'What is your name?' },
      { speaker: 'Tom', text: 'My name is Tom.' },
      { speaker: 'Ali', text: 'Where do you live?' },
      { speaker: 'Tom', text: 'I live in Tashkent.' },
      { speaker: 'Ali', text: 'Why do you learn English?' },
      { speaker: 'Tom', text: 'I learn English for my future.' },
    ],
  },

  reading: {
    id: 'f15-reading',
    title: 'Questions',
    text:
      'Ali is a student. He lives in Tashkent. He studies English because he wants to speak with international friends.',
    questions: [
      {
        id: 'f15-rq1',
        question: 'Where does Ali live?',
        answer: 'Tashkent',
      },
      {
        id: 'f15-rq2',
        question: 'Why does Ali study English?',
        answer: 'To speak with international friends',
      },
    ],
  },

  writing: {
    id: 'f15-writing',
    instruction:
      'What, where, who, when, why, how bilan 6 ta savol yozing.',
    model:
      'What do you study? Where do you live? Who is your teacher? When do you study? Why do you learn English? How are you?',
  },

  activities: [
    activity(
      'f15-a01',
      'multiple-choice',
      'To‘g‘ri question wordni tanlang.',
      '___ do you live?',
      'Where',
      ['What', 'Where', 'Who', 'Why'],
    ),
    activity(
      'f15-a02',
      'multiple-choice',
      'To‘g‘ri question wordni tanlang.',
      '___ is your teacher?',
      'Who',
      ['What', 'Where', 'Who', 'When'],
    ),
    activity(
      'f15-a03',
      'multiple-choice',
      'To‘g‘ri question wordni tanlang.',
      '___ do you study English?',
      'Why',
      ['What', 'Where', 'Why', 'Who'],
    ),
  ],

  speaking: {
    id: 'f15-speaking',
    title: 'Question Master',
    prompt: 'Sherigingizga turli xil savollar bering.',
    targetPhrases: [
      'What ...?',
      'Where ...?',
      'Who ...?',
      'When ...?',
      'Why ...?',
      'How ...?',
    ],
  },

  challenge: {
    id: 'f15-challenge',
    title: 'Detective Mode',
    description:
      'Savollar yordamida suhbatdoshingiz haqida ma’lumot to‘plang.',
    task:
      '6 xil question wordning har biri bilan savol bering.',
    points: 35,
  },

  test: test('f15-test', [
    testQuestion(
      'f15-t1',
      '___ do you live?',
      ['What', 'Where', 'Who', 'Why'],
      'Where',
    ),
    testQuestion(
      'f15-t2',
      '___ is your teacher?',
      ['What', 'Where', 'Who', 'When'],
      'Who',
    ),
    testQuestion(
      'f15-t3',
      '___ do you study English?',
      ['Why', 'Who', 'Where', 'What'],
      'Why',
    ),
    testQuestion(
      'f15-t4',
      '___ do you study?',
      ['What', 'Who', 'Why', 'When'],
      'What',
    ),
    testQuestion(
      'f15-t5',
      '“How are you?” nimani so‘raydi?',
      ['Joylashuvni', 'Holatni', 'Ismni', 'Vaqtni'],
      'Holatni',
    ),
  ]),

  reward: reward(190),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-14',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 16
========================================================= */

const lesson16: EnglishLesson = {
  id: 'foundation-16',
  levelId: 'foundation',
  unitId: 'foundation-unit-4',
  order: 16,

  title: 'I Can Do It!',
  subtitle: 'Can / Can’t',
  description:
    'Qobiliyat, imkoniyat va oddiy ruxsatni ifodalashni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('green', 'lime', '💪'),

  objectives: [
    'can bilan qobiliyatni aytish',
    'can’t bilan inkor qilish',
    'Can bilan savol tuzish',
  ],

  vocabulary: [
    v('f16-v01', 'swim', 'suzmoq', '/swɪm/', 'I can swim.'),
    v('f16-v02', 'run', 'yugurmoq', '/rʌn/', 'I can run.'),
    v('f16-v03', 'sing', 'kuylamoq', '/sɪŋ/', 'She can sing.'),
    v('f16-v04', 'dance', 'raqsga tushmoq', '/dɑːns/', 'He can dance.'),
    v('f16-v05', 'draw', 'rasm chizmoq', '/drɔː/', 'I can draw.'),
    v('f16-v06', 'cook', 'ovqat pishirmoq', '/kʊk/', 'I can cook.'),
  ],

  grammar: [
    g(
      'f16-g01',
      'Can / Can’t',
      'Can qobiliyatni bildiradi. Can’t inkor shaklidir.',
      'Subject + can + base verb',
      [
        'I can swim.',
        'She can sing.',
        'He can’t dance.',
        'Can you cook?',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f16-s01',
      'Ability',
      'Subject + can + verb',
      [
        'I can swim.',
        'She can sing.',
      ],
    ),
    structure(
      'f16-s02',
      'Can question',
      'Can + subject + verb?',
      [
        'Can you swim?',
        'Can he cook?',
      ],
    ),
  ],

  examples: [
    'I can swim.',
    'I can’t fly.',
    'She can sing.',
    'He can’t dance.',
    'Can you cook?',
    'Yes, I can.',
  ],

  dialogue: {
    id: 'f16-dialogue',
    title: 'What Can You Do?',
    lines: [
      { speaker: 'Ali', text: 'Can you swim?' },
      { speaker: 'Tom', text: 'Yes, I can.' },
      { speaker: 'Ali', text: 'Can you cook?' },
      { speaker: 'Tom', text: 'No, I can’t.' },
    ],
  },

  reading: {
    id: 'f16-reading',
    title: 'My Skills',
    text:
      'I can swim and run. I can also draw. My sister can sing and dance, but she cannot swim.',
    questions: [
      {
        id: 'f16-rq1',
        question: 'What can the writer do?',
        answer: 'Swim, run and draw',
      },
      {
        id: 'f16-rq2',
        question: 'Can the sister swim?',
        answer: 'No',
      },
    ],
  },

  writing: {
    id: 'f16-writing',
    instruction:
      'O‘zingiz qila oladigan va qila olmaydigan ishlar haqida 8 ta gap yozing.',
    model:
      'I can swim. I can draw. I can speak English. I can’t fly. I can’t drive a car.',
  },

  activities: [
    activity(
      'f16-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ swim.',
      'can',
      ['can', 'am', 'do', 'have'],
    ),
    activity(
      'f16-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'She ___ sing.',
      'can',
      ['can', 'is', 'does', 'has'],
    ),
    activity(
      'f16-a03',
      'error-correction',
      'Xatoni tuzating.',
      'Can you can swim?',
      'Can you swim?',
    ),
  ],

  speaking: {
    id: 'f16-speaking',
    title: 'My Abilities',
    prompt: 'Nimalarni qila olishingizni ayting.',
    targetPhrases: [
      'I can ...',
      'I can’t ...',
      'Can you ...?',
      'Yes, I can.',
      'No, I can’t.',
    ],
  },

  challenge: {
    id: 'f16-challenge',
    title: 'Super Skills',
    description:
      'O‘zingizning “super qobiliyatlaringiz” haqida gapiring.',
    task:
      'Kamida 5 ta can va 3 ta can’t gap tuzing.',
    points: 35,
  },

  test: test('f16-test', [
    testQuestion(
      'f16-t1',
      'I ___ swim.',
      ['can', 'am', 'do', 'have'],
      'can',
    ),
    testQuestion(
      'f16-t2',
      'She ___ sing.',
      ['can', 'is', 'does', 'has'],
      'can',
    ),
    testQuestion(
      'f16-t3',
      'I ___ fly.',
      ['can’t', 'don’t', 'am not', 'doesn’t'],
      'can’t',
    ),
    testQuestion(
      'f16-t4',
      '___ you cook?',
      ['Can', 'Do can', 'Are', 'Have'],
      'Can',
    ),
    testQuestion(
      'f16-t5',
      'Can he swim? —',
      ['Yes, he can.', 'Yes, he is.', 'Yes, he does.', 'Yes, he has.'],
      'Yes, he can.',
    ),
  ]),

  reward: reward(195),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-15',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 17
========================================================= */

const lesson17: EnglishLesson = {
  id: 'foundation-17',
  levelId: 'foundation',
  unitId: 'foundation-unit-4',
  order: 17,

  title: 'Do This! Don’t Do That!',
  subtitle: 'Imperatives',
  description:
    'Buyruq, ko‘rsatma, maslahat va oddiy classroom English iboralarini o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('amber', 'yellow', '📢'),

  objectives: [
    'Buyruq gaplarni tushunish',
    'Ijobiy imperative tuzish',
    'Don’t bilan inkor buyruq tuzish',
  ],

  vocabulary: [
    v('f17-v01', 'open', 'ochmoq', '/ˈəʊpən/', 'Open the book.'),
    v('f17-v02', 'close', 'yopmoq', '/kləʊz/', 'Close the door.'),
    v('f17-v03', 'listen', 'tinglamoq', '/ˈlɪsən/', 'Listen carefully.'),
    v('f17-v04', 'read', 'o‘qimoq', '/riːd/', 'Read the text.'),
    v('f17-v05', 'write', 'yozmoq', '/raɪt/', 'Write your name.'),
    v('f17-v06', 'wait', 'kutmoq', '/weɪt/', 'Wait here.'),
  ],

  grammar: [
    g(
      'f17-g01',
      'Imperatives',
      'Buyruq gaplarda fe’l odatda boshida keladi. Inkor buyruqda Don’t ishlatiladi.',
      'Verb + object | Don’t + verb',
      [
        'Open the door.',
        'Read the book.',
        'Listen carefully.',
        'Don’t run.',
        'Don’t talk.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f17-s01',
      'Imperative',
      'Base verb + object',
      ['Open the book.', 'Read the text.'],
    ),
    structure(
      'f17-s02',
      'Negative imperative',
      'Don’t + base verb',
      ['Don’t run.', 'Don’t talk.'],
    ),
  ],

  examples: [
    'Open the book.',
    'Close the door.',
    'Listen carefully.',
    'Read the text.',
    'Write your name.',
    'Don’t talk.',
    'Don’t run.',
  ],

  dialogue: {
    id: 'f17-dialogue',
    title: 'In the Classroom',
    lines: [
      { speaker: 'Teacher', text: 'Open your books.' },
      { speaker: 'Student', text: 'Okay.' },
      { speaker: 'Teacher', text: 'Listen carefully.' },
      { speaker: 'Student', text: 'Yes, teacher.' },
    ],
  },

  reading: {
    id: 'f17-reading',
    title: 'Classroom Rules',
    text:
      'Open your book. Listen to the teacher. Write the answers. Don’t talk loudly. Don’t run in the classroom.',
    questions: [
      {
        id: 'f17-rq1',
        question: 'What should students open?',
        answer: 'Their books',
      },
      {
        id: 'f17-rq2',
        question: 'Should students run?',
        answer: 'No',
      },
    ],
  },

  writing: {
    id: 'f17-writing',
    instruction:
      '5 ta positive va 5 ta negative imperative yozing.',
    model:
      'Open the book. Listen carefully. Don’t run. Don’t talk. Write your name.',
  },

  activities: [
    activity(
      'f17-a01',
      'multiple-choice',
      'To‘g‘ri buyruq gapni tanlang.',
      '___ the book.',
      'Open',
      ['Open', 'Opens', 'Opening', 'Is open'],
    ),
    activity(
      'f17-a02',
      'multiple-choice',
      'Inkor buyruqni tanlang.',
      '___ run.',
      'Don’t',
      ['Don’t', 'Doesn’t', 'Isn’t', 'Not'],
    ),
    activity(
      'f17-a03',
      'sentence-builder',
      'Gapni tuzing.',
      'talk / Don’t',
      'Don’t talk.',
    ),
  ],

  speaking: {
    id: 'f17-speaking',
    title: 'Teacher Mode',
    prompt: 'Tasavvur qiling, siz o‘qituvchisiz.',
    targetPhrases: [
      'Open your book.',
      'Listen carefully.',
      'Write your name.',
      'Don’t talk.',
      'Don’t run.',
    ],
  },

  challenge: {
    id: 'f17-challenge',
    title: 'Classroom Commander',
    description:
      'O‘zingizning classroom rules ro‘yxatingizni yarating.',
    task:
      'Kamida 10 ta instruction yozing.',
    points: 35,
  },

  test: test('f17-test', [
    testQuestion(
      'f17-t1',
      '___ the door.',
      ['Open', 'Opens', 'Opening', 'Is open'],
      'Open',
    ),
    testQuestion(
      'f17-t2',
      '___ talk loudly.',
      ['Don’t', 'Doesn’t', 'Isn’t', 'Not'],
      'Don’t',
    ),
    testQuestion(
      'f17-t3',
      'To‘g‘ri buyruqni tanlang.',
      [
        'Reads the book.',
        'Read the book.',
        'Reading the book.',
        'Is read the book.',
      ],
      'Read the book.',
    ),
    testQuestion(
      'f17-t4',
      '“Don’t run” nimani bildiradi?',
      ['Yugur!', 'Yugurma!', 'Yugurding!', 'Yuguraylik!'],
      'Yugurma!',
    ),
    testQuestion(
      'f17-t5',
      'Qaysi biri imperative?',
      [
        'She is reading.',
        'They are students.',
        'Open the window.',
        'He likes books.',
      ],
      'Open the window.',
    ),
  ]),

  reward: reward(200),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-16',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 18
========================================================= */

const lesson18: EnglishLesson = {
  id: 'foundation-18',
  levelId: 'foundation',
  unitId: 'foundation-unit-5',
  order: 18,

  title: 'Where Is It?',
  subtitle: 'Prepositions of place',
  description:
    'Narsalarning joylashuvini in, on, under, next to, behind, in front of bilan tasvirlang.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'vocabulary', 'speaking'],
  theme: theme('cyan', 'teal', '📍'),

  objectives: [
    'in va on ni ishlatish',
    'under va behind ni ishlatish',
    'next to va in front of ni ishlatish',
  ],

  vocabulary: [
    v('f18-v01', 'in', 'ichida', '/ɪn/', 'The book is in the bag.'),
    v('f18-v02', 'on', 'ustida', '/ɒn/', 'The book is on the table.'),
    v('f18-v03', 'under', 'tagida', '/ˈʌndə/', 'The bag is under the desk.'),
    v('f18-v04', 'behind', 'orqasida', '/bɪˈhaɪnd/', 'The chair is behind the desk.'),
    v('f18-v05', 'next to', 'yonida', '/nekst tuː/', 'The chair is next to the table.'),
    v('f18-v06', 'between', 'orasida', '/bɪˈtwiːn/', 'The school is between two buildings.'),
  ],

  grammar: [
    g(
      'f18-g01',
      'Prepositions of Place',
      'Prepositions narsaning qayerdaligini ko‘rsatadi.',
      'Subject + be + preposition + place',
      [
        'The book is on the table.',
        'The bag is under the desk.',
        'The pen is in the bag.',
        'The chair is next to the table.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f18-s01',
      'Location',
      'Subject + be + preposition + noun',
      [
        'The book is on the table.',
        'The bag is under the desk.',
      ],
    ),
  ],

  examples: [
    'The book is on the table.',
    'The pen is in the bag.',
    'The bag is under the desk.',
    'The chair is next to the table.',
    'The teacher is in front of the class.',
  ],

  dialogue: {
    id: 'f18-dialogue',
    title: 'Find My Pen',
    lines: [
      { speaker: 'Ali', text: 'Where is my pen?' },
      { speaker: 'Sara', text: 'It is on the table.' },
      { speaker: 'Ali', text: 'No, it isn’t.' },
      { speaker: 'Sara', text: 'Look! It is under the book.' },
    ],
  },

  reading: {
    id: 'f18-reading',
    title: 'My Desk',
    text:
      'My book is on the desk. My pen is in the pencil case. My bag is under the desk. My chair is next to the desk.',
    questions: [
      {
        id: 'f18-rq1',
        question: 'Where is the book?',
        answer: 'On the desk',
      },
      {
        id: 'f18-rq2',
        question: 'Where is the bag?',
        answer: 'Under the desk',
      },
    ],
  },

  writing: {
    id: 'f18-writing',
    instruction:
      'Xonadagi 8 ta narsaning joylashuvini yozing.',
    model:
      'The book is on the table. The bag is under the desk.',
  },

  activities: [
    activity(
      'f18-a01',
      'multiple-choice',
      'To‘g‘ri prepositionni tanlang.',
      'The book is ___ the table.',
      'on',
      ['on', 'in', 'under', 'behind'],
    ),
    activity(
      'f18-a02',
      'multiple-choice',
      'To‘g‘ri prepositionni tanlang.',
      'The bag is ___ the desk.',
      'under',
      ['on', 'in', 'under', 'between'],
    ),
    activity(
      'f18-a03',
      'error-correction',
      'Xatoni tuzating.',
      'The pen is in the table.',
      'The pen is on the table.',
    ),
  ],

  speaking: {
    id: 'f18-speaking',
    title: 'Where Is It?',
    prompt: 'Xonadagi narsalarning joylashuvini ayting.',
    targetPhrases: [
      'It is on ...',
      'It is in ...',
      'It is under ...',
      'It is next to ...',
    ],
  },

  challenge: {
    id: 'f18-challenge',
    title: 'Location Master',
    description:
      'Tasavvuriy xona xaritasini so‘z bilan tasvirlang.',
    task:
      'Kamida 10 ta preposition gap ishlating.',
    points: 35,
  },

  test: test('f18-test', [
    testQuestion(
      'f18-t1',
      'The book is ___ the table.',
      ['on', 'in', 'under', 'behind'],
      'on',
    ),
    testQuestion(
      'f18-t2',
      'The bag is ___ the desk.',
      ['on', 'under', 'between', 'behind'],
      'under',
    ),
    testQuestion(
      'f18-t3',
      'The pen is ___ the bag.',
      ['in', 'on', 'under', 'between'],
      'in',
    ),
    testQuestion(
      'f18-t4',
      '“next to” nimani bildiradi?',
      ['Orqasida', 'Yonida', 'Ichida', 'Tagida'],
      'Yonida',
    ),
    testQuestion(
      'f18-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'The book is on the table.',
        'The book are on table.',
        'The book is in table.',
        'The book am on table.',
      ],
      'The book is on the table.',
    ),
  ]),

  reward: reward(205),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-17',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 19
========================================================= */

const lesson19: EnglishLesson = {
  id: 'foundation-19',
  levelId: 'foundation',
  unitId: 'foundation-unit-5',
  order: 19,

  title: 'When?',
  subtitle: 'Time expressions and prepositions',
  description:
    'Vaqtni, kunlarni va odatlarni aniqroq ifodalashni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'vocabulary', 'speaking'],
  theme: theme('indigo', 'blue', '⏰'),

  objectives: [
    'at, on, in bilan tanishish',
    'Vaqtni ifodalash',
    'Kun va oylarni aytish',
  ],

  vocabulary: [
    v('f19-v01', 'today', 'bugun', '/təˈdeɪ/', 'I study today.'),
    v('f19-v02', 'tomorrow', 'ertaga', '/təˈmɒrəʊ/', 'See you tomorrow.'),
    v('f19-v03', 'morning', 'ertalab', '/ˈmɔːnɪŋ/', 'I study in the morning.'),
    v('f19-v04', 'afternoon', 'tushdan keyin', '/ˌɑːftəˈnuːn/', 'I work in the afternoon.'),
    v('f19-v05', 'night', 'tun', '/naɪt/', 'I sleep at night.'),
  ],

  grammar: [
    g(
      'f19-g01',
      'Time Prepositions',
      'At aniq vaqt, on kun/sana, in oy/yil yoki kunning bir qismi bilan ishlatiladi.',
      'at + time | on + day/date | in + month/year/period',
      [
        'at seven o’clock',
        'on Monday',
        'in the morning',
        'in January',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f19-s01',
      'Time expression',
      'Subject + verb + time expression',
      [
        'I study at seven.',
        'I work on Monday.',
        'I sleep at night.',
      ],
    ),
  ],

  examples: [
    'I wake up at seven.',
    'I study on Monday.',
    'I work in the morning.',
    'I play football in the afternoon.',
    'I sleep at night.',
  ],

  dialogue: {
    id: 'f19-dialogue',
    title: 'What Time?',
    lines: [
      { speaker: 'Ali', text: 'What time do you wake up?' },
      { speaker: 'Tom', text: 'I wake up at seven.' },
      { speaker: 'Ali', text: 'When do you study English?' },
      { speaker: 'Tom', text: 'I study English in the evening.' },
    ],
  },

  reading: {
    id: 'f19-reading',
    title: 'My Timetable',
    text:
      'I wake up at seven in the morning. I go to school at eight. I study English on Monday and Wednesday. I play football in the afternoon.',
    questions: [
      {
        id: 'f19-rq1',
        question: 'What time does the writer wake up?',
        answer: 'Seven',
      },
      {
        id: 'f19-rq2',
        question: 'When does the writer study English?',
        answer: 'Monday and Wednesday',
      },
    ],
  },

  writing: {
    id: 'f19-writing',
    instruction:
      'Kuningizni vaqt ifodalari bilan 8 ta gapda yozing.',
    model:
      'I wake up at seven. I go to school at eight. I study in the morning.',
  },

  activities: [
    activity(
      'f19-a01',
      'multiple-choice',
      'To‘g‘ri prepositionni tanlang.',
      'I wake up ___ seven.',
      'at',
      ['at', 'on', 'in', 'to'],
    ),
    activity(
      'f19-a02',
      'multiple-choice',
      'To‘g‘ri prepositionni tanlang.',
      'I study English ___ Monday.',
      'on',
      ['at', 'on', 'in', 'to'],
    ),
    activity(
      'f19-a03',
      'multiple-choice',
      'To‘g‘ri prepositionni tanlang.',
      'I sleep ___ night.',
      'at',
      ['at', 'on', 'in', 'to'],
    ),
  ],

  speaking: {
    id: 'f19-speaking',
    title: 'My Time',
    prompt: 'Kuningizdagi muhim vaqtlarni ayting.',
    targetPhrases: [
      'at seven',
      'in the morning',
      'on Monday',
      'in the evening',
      'at night',
    ],
  },

  challenge: {
    id: 'f19-challenge',
    title: 'Time Planner',
    description:
      'Bir kunlik jadvalingizni ingliz tilida yarating.',
    task:
      'Kamida 10 ta vaqt ifodasidan foydalaning.',
    points: 35,
  },

  test: test('f19-test', [
    testQuestion(
      'f19-t1',
      'I wake up ___ seven.',
      ['at', 'on', 'in', 'from'],
      'at',
    ),
    testQuestion(
      'f19-t2',
      'I study ___ Monday.',
      ['at', 'on', 'in', 'from'],
      'on',
    ),
    testQuestion(
      'f19-t3',
      'I study ___ the morning.',
      ['at', 'on', 'in', 'from'],
      'in',
    ),
    testQuestion(
      'f19-t4',
      'I sleep ___ night.',
      ['at', 'on', 'in', 'from'],
      'at',
    ),
    testQuestion(
      'f19-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'I study at Monday.',
        'I study on Monday.',
        'I study in Monday.',
        'I study to Monday.',
      ],
      'I study on Monday.',
    ),
  ]),

  reward: reward(210),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-18',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 20
========================================================= */

const lesson20: EnglishLesson = {
  id: 'foundation-20',
  levelId: 'foundation',
  unitId: 'foundation-unit-5',
  order: 20,

  title: 'Describe It!',
  subtitle: 'Adjectives bilan narsalarni tasvirlash',
  description:
    'Odamlar, joylar va narsalarni sifatlar yordamida aniqroq tasvirlashni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['vocabulary', 'grammar', 'speaking', 'writing'],
  theme: theme('rose', 'pink', '🎨'),

  objectives: [
    'Asosiy sifatlarni o‘rganish',
    'Adjective + noun strukturasini ishlatish',
    'Be + adjective gaplarini tuzish',
  ],

  vocabulary: [
    v('f20-v01', 'big', 'katta', '/bɪɡ/', 'a big house'),
    v('f20-v02', 'small', 'kichik', '/smɔːl/', 'a small room'),
    v('f20-v03', 'beautiful', 'chiroyli', '/ˈbjuːtɪfəl/', 'a beautiful city'),
    v('f20-v04', 'interesting', 'qiziqarli', '/ˈɪntrəstɪŋ/', 'an interesting book'),
    v('f20-v05', 'easy', 'oson', '/ˈiːzi/', 'an easy question'),
    v('f20-v06', 'difficult', 'qiyin', '/ˈdɪfɪkəlt/', 'a difficult task'),
  ],

  grammar: [
    g(
      'f20-g01',
      'Adjectives',
      'Adjective otni tasvirlaydi va ko‘pincha otning oldidan keladi.',
      'adjective + noun',
      [
        'a big house',
        'a small room',
        'an interesting book',
        'a difficult task',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f20-s01',
      'Be + adjective',
      'Subject + be + adjective',
      [
        'The room is small.',
        'The book is interesting.',
        'The task is difficult.',
      ],
    ),
  ],

  examples: [
    'This is a big house.',
    'My room is small.',
    'The book is interesting.',
    'English is easy.',
    'This task is difficult.',
  ],

  dialogue: {
    id: 'f20-dialogue',
    title: 'Describe Your Room',
    lines: [
      { speaker: 'Ali', text: 'How is your room?' },
      { speaker: 'Tom', text: 'It is small but beautiful.' },
      { speaker: 'Ali', text: 'Is your desk big?' },
      { speaker: 'Tom', text: 'No, it is small.' },
    ],
  },

  reading: {
    id: 'f20-reading',
    title: 'My City',
    text:
      'I live in a beautiful city. It is big and interesting. There are many beautiful places. Some streets are busy.',
    questions: [
      {
        id: 'f20-rq1',
        question: 'How is the city?',
        answer: 'Big and interesting',
      },
      {
        id: 'f20-rq2',
        question: 'Are there many beautiful places?',
        answer: 'Yes',
      },
    ],
  },

  writing: {
    id: 'f20-writing',
    instruction:
      'Bir xona yoki joyni 8 ta adjective yordamida tasvirlang.',
    model:
      'My room is small. It is clean and beautiful. My desk is big.',
  },

  activities: [
    activity(
      'f20-a01',
      'multiple-choice',
      'To‘g‘ri adjective ni tanlang.',
      'a ___ house',
      'big',
      ['big', 'quickly', 'run', 'are'],
    ),
    activity(
      'f20-a02',
      'multiple-choice',
      'To‘g‘ri gapni tanlang.',
      'The room ___ small.',
      'is',
      ['is', 'are', 'am', 'be'],
    ),
    activity(
      'f20-a03',
      'sentence-builder',
      'Gapni tuzing.',
      'book / interesting / is / The',
      'The book is interesting.',
    ),
  ],

  speaking: {
    id: 'f20-speaking',
    title: 'Describe Something',
    prompt: 'Biror narsa, xona yoki odamni tasvirlang.',
    targetPhrases: [
      'It is big.',
      'It is small.',
      'It is beautiful.',
      'It is interesting.',
      'It is difficult.',
    ],
  },

  challenge: {
    id: 'f20-challenge',
    title: 'Description Master',
    description:
      'Tasvirlash orqali tinglovchiga obyektni topdiring.',
    task:
      'Kamida 10 ta adjective ishlating.',
    points: 40,
  },

  test: test('f20-test', [
    testQuestion(
      'f20-t1',
      'a ___ house',
      ['big', 'quickly', 'run', 'are'],
      'big',
    ),
    testQuestion(
      'f20-t2',
      'The room ___ small.',
      ['is', 'are', 'am', 'be'],
      'is',
    ),
    testQuestion(
      'f20-t3',
      '“beautiful” qanday so‘z turkumi?',
      ['Verb', 'Adjective', 'Pronoun', 'Preposition'],
      'Adjective',
    ),
    testQuestion(
      'f20-t4',
      'To‘g‘ri birikmani tanlang.',
      ['a beautiful city', 'a city beautiful', 'beautiful a city', 'city a beautiful'],
      'a beautiful city',
    ),
    testQuestion(
      'f20-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'The book interesting is.',
        'The book is interesting.',
        'The book are interesting.',
        'The book interesting are.',
      ],
      'The book is interesting.',
    ),
  ]),

  reward: reward(215),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-19',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 21
========================================================= */

const lesson21: EnglishLesson = {
  id: 'foundation-21',
  levelId: 'foundation',
  unitId: 'foundation-unit-6',
  order: 21,

  title: 'Always, Usually, Sometimes, Never',
  subtitle: 'Adverbs of Frequency',
  description:
    'Biror ish qanchalik tez-tez bajarilishini aniqroq ayting.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('purple', 'indigo', '🔄'),

  objectives: [
    'always, usually, often, sometimes, never ni o‘rganish',
    'Ularni Present Simple bilan ishlatish',
    'Kundalik odatlarni aniqroq ifodalash',
  ],

  vocabulary: [
    v('f21-v01', 'always', 'har doim', '/ˈɔːlweɪz/', 'I always study.'),
    v('f21-v02', 'usually', 'odatda', '/ˈjuːʒuəli/', 'I usually walk.'),
    v('f21-v03', 'often', 'tez-tez', '/ˈɒfən/', 'I often read.'),
    v('f21-v04', 'sometimes', 'ba’zan', '/ˈsʌmtaɪmz/', 'I sometimes cook.'),
    v('f21-v05', 'never', 'hech qachon', '/ˈnevə/', 'I never smoke.'),
  ],

  grammar: [
    g(
      'f21-g01',
      'Adverbs of Frequency',
      'Frequency adverbs odatning qanchalik tez-tez sodir bo‘lishini bildiradi.',
      'Subject + frequency adverb + main verb',
      [
        'I always study.',
        'I usually walk.',
        'I often read.',
        'I sometimes cook.',
        'I never smoke.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f21-s01',
      'Frequency',
      'Subject + adverb + verb',
      [
        'I always study English.',
        'She usually walks to school.',
        'They often play football.',
      ],
    ),
  ],

  examples: [
    'I always study English.',
    'I usually go to school.',
    'I often read books.',
    'I sometimes play chess.',
    'I never smoke.',
  ],

  dialogue: {
    id: 'f21-dialogue',
    title: 'How Often?',
    lines: [
      { speaker: 'Ali', text: 'Do you often read books?' },
      { speaker: 'Tom', text: 'Yes, I usually read in the evening.' },
      { speaker: 'Ali', text: 'Do you ever play chess?' },
      { speaker: 'Tom', text: 'Yes, I sometimes play chess.' },
    ],
  },

  reading: {
    id: 'f21-reading',
    title: 'My Habits',
    text:
      'I always go to school on weekdays. I usually study English in the evening. I often read books. I sometimes play chess.',
    questions: [
      {
        id: 'f21-rq1',
        question: 'When does the writer usually study English?',
        answer: 'In the evening',
      },
      {
        id: 'f21-rq2',
        question: 'What does the writer sometimes play?',
        answer: 'Chess',
      },
    ],
  },

  writing: {
    id: 'f21-writing',
    instruction:
      'Frequency adverbs bilan 8 ta gap yozing.',
    model:
      'I always study. I usually read. I often play football. I sometimes cook. I never smoke.',
  },

  activities: [
    activity(
      'f21-a01',
      'multiple-choice',
      'Eng kuchli frequency adverbni tanlang.',
      '___ means 100% of the time.',
      'always',
      ['always', 'sometimes', 'never', 'rarely'],
    ),
    activity(
      'f21-a02',
      'multiple-choice',
      'To‘g‘ri gapni tanlang.',
      'I ___ read books.',
      'often',
      ['often', 'am often', 'often am', 'do often'],
    ),
    activity(
      'f21-a03',
      'sentence-builder',
      'Gapni tuzing.',
      'usually / I / English / study',
      'I usually study English.',
    ),
  ],

  speaking: {
    id: 'f21-speaking',
    title: 'My Habits',
    prompt: 'Odatlaringizni frequency adverbs bilan ayting.',
    targetPhrases: [
      'I always ...',
      'I usually ...',
      'I often ...',
      'I sometimes ...',
      'I never ...',
    ],
  },

  challenge: {
    id: 'f21-challenge',
    title: 'Habit Tracker',
    description:
      'Bir haftalik odatlaringizni ingliz tilida tasvirlang.',
    task:
      'Kamida 10 ta frequency sentence yozing.',
    points: 40,
  },

  test: test('f21-test', [
    testQuestion(
      'f21-t1',
      '100% ga eng yaqin qaysi?',
      ['always', 'sometimes', 'never', 'rarely'],
      'always',
    ),
    testQuestion(
      'f21-t2',
      'I ___ read books.',
      ['often', 'am often', 'often am', 'do often'],
      'often',
    ),
    testQuestion(
      'f21-t3',
      '“never” nimani bildiradi?',
      ['Har doim', 'Odatda', 'Ba’zan', 'Hech qachon'],
      'Hech qachon',
    ),
    testQuestion(
      'f21-t4',
      'To‘g‘ri gapni tanlang.',
      [
        'I usually study English.',
        'I study usually English.',
        'Usually I am study English.',
        'I usually am study English.',
      ],
      'I usually study English.',
    ),
    testQuestion(
      'f21-t5',
      '“sometimes” nimani bildiradi?',
      ['Har doim', 'Ba’zan', 'Hech qachon', 'Faqat kechasi'],
      'Ba’zan',
    ),
  ]),

  reward: reward(220),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-20',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 22
========================================================= */

const lesson22: EnglishLesson = {
  id: 'foundation-22',
  levelId: 'foundation',
  unitId: 'foundation-unit-6',
  order: 22,

  title: 'Food and Drinks',
  subtitle: 'Like, have, want va kundalik ovqatlanish',
  description:
    'Ovqat va ichimliklar haqida gapirishni o‘rganing.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['vocabulary', 'speaking', 'grammar'],
  theme: theme('orange', 'red', '🍎'),

  objectives: [
    'Food vocabulary',
    'like / don’t like',
    'want / have',
    'Ovqat haqida oddiy suhbat',
  ],

  vocabulary: [
    v('f22-v01', 'bread', 'non', '/bred/', 'I eat bread.'),
    v('f22-v02', 'rice', 'guruch / guruchli ovqat', '/raɪs/', 'I like rice.'),
    v('f22-v03', 'apple', 'olma', '/ˈæpəl/', 'I eat an apple.'),
    v('f22-v04', 'water', 'suv', '/ˈwɔːtə/', 'I drink water.'),
    v('f22-v05', 'tea', 'choy', '/tiː/', 'I drink tea.'),
    v('f22-v06', 'milk', 'sut', '/mɪlk/', 'I drink milk.'),
  ],

  grammar: [
    g(
      'f22-g01',
      'Likes and wants',
      'Like yoqtirishni, want xohishni bildiradi.',
      'Subject + like/want + noun',
      [
        'I like apples.',
        'I don’t like coffee.',
        'I want water.',
        'She wants tea.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f22-s01',
      'Preference',
      'Subject + like + object',
      [
        'I like rice.',
        'She likes tea.',
      ],
    ),
  ],

  examples: [
    'I like rice.',
    'I like apples.',
    'I don’t like coffee.',
    'I want water.',
    'She wants tea.',
  ],

  dialogue: {
    id: 'f22-dialogue',
    title: 'At Lunch',
    lines: [
      { speaker: 'Ali', text: 'What do you want?' },
      { speaker: 'Tom', text: 'I want some water.' },
      { speaker: 'Ali', text: 'Do you like rice?' },
      { speaker: 'Tom', text: 'Yes, I do.' },
    ],
  },

  reading: {
    id: 'f22-reading',
    title: 'My Favorite Food',
    text:
      'I like rice and apples. I drink tea in the morning. I drink water during the day. I don’t like coffee.',
    questions: [
      {
        id: 'f22-rq1',
        question: 'What food does the writer like?',
        answer: 'Rice and apples',
      },
      {
        id: 'f22-rq2',
        question: 'Does the writer like coffee?',
        answer: 'No',
      },
    ],
  },

  writing: {
    id: 'f22-writing',
    instruction:
      'Sevimli ovqatlaringiz haqida 8 ta gap yozing.',
    model:
      'I like rice. I like apples. I drink tea. I don’t like coffee.',
  },

  activities: [
    activity(
      'f22-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ rice.',
      'like',
      ['like', 'likes', 'am like', 'liking'],
    ),
    activity(
      'f22-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'She ___ tea.',
      'likes',
      ['like', 'likes', 'liking', 'is like'],
    ),
    activity(
      'f22-a03',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I want ___ water.',
      'some',
      ['some', 'many', 'a', 'an'],
    ),
  ],

  speaking: {
    id: 'f22-speaking',
    title: 'Food Talk',
    prompt: 'Sevimli ovqatlaringiz va ichimliklaringiz haqida gapiring.',
    targetPhrases: [
      'I like ...',
      'I don’t like ...',
      'I want ...',
      'I drink ...',
    ],
  },

  challenge: {
    id: 'f22-challenge',
    title: 'Restaurant Mission',
    description:
      'Restoranda buyurtma berayotganingizni tasavvur qiling.',
    task:
      'Kamida 8 ta gapdan iborat dialog yarating.',
    points: 40,
  },

  test: test('f22-test', [
    testQuestion(
      'f22-t1',
      'I ___ rice.',
      ['like', 'likes', 'liking', 'am like'],
      'like',
    ),
    testQuestion(
      'f22-t2',
      'She ___ tea.',
      ['like', 'likes', 'liking', 'is like'],
      'likes',
    ),
    testQuestion(
      'f22-t3',
      'I don’t ___ coffee.',
      ['like', 'likes', 'liking', 'am like'],
      'like',
    ),
    testQuestion(
      'f22-t4',
      'I want ___ water.',
      ['some', 'many', 'an', 'a'],
      'some',
    ),
    testQuestion(
      'f22-t5',
      '“I drink tea” nimani bildiradi?',
      ['Men choy ichaman.', 'Men choy sotaman.', 'Men choy pishiraman.', 'Men choy ko‘raman.'],
      'Men choy ichaman.',
    ),
  ]),

  reward: reward(225),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-21',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 23
========================================================= */

const lesson23: EnglishLesson = {
  id: 'foundation-23',
  levelId: 'foundation',
  unitId: 'foundation-unit-6',
  order: 23,

  title: 'I Like It!',
  subtitle: 'Likes, dislikes and preferences',
  description:
    'Yoqtirish va yoqtirmaslikni turli mavzularda ifodalang.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['grammar', 'speaking', 'vocabulary'],
  theme: theme('pink', 'rose', '❤️'),

  objectives: [
    'like / don’t like ni mustahkamlash',
    'he/she bilan likes / doesn’t like',
    'Preferences haqida gapirish',
  ],

  vocabulary: [
    v('f23-v01', 'music', 'musiqa', '/ˈmjuːzɪk/', 'I like music.'),
    v('f23-v02', 'football', 'futbol', '/ˈfʊtbɔːl/', 'He likes football.'),
    v('f23-v03', 'books', 'kitoblar', '/bʊks/', 'She likes books.'),
    v('f23-v04', 'chess', 'shaxmat', '/tʃes/', 'I like chess.'),
    v('f23-v05', 'movies', 'filmlar', '/ˈmuːviz/', 'They like movies.'),
  ],

  grammar: [
    g(
      'f23-g01',
      'Like / Likes',
      'I/you/we/they bilan like, he/she/it bilan likes ishlatiladi.',
      'I/You/We/They like | He/She/It likes',
      [
        'I like chess.',
        'They like football.',
        'He likes music.',
        'She likes books.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f23-s01',
      'Preference',
      'Subject + like(s) + object',
      [
        'I like chess.',
        'She likes music.',
        'They like movies.',
      ],
    ),
  ],

  examples: [
    'I like chess.',
    'She likes music.',
    'He likes football.',
    'I don’t like horror movies.',
    'She doesn’t like loud music.',
  ],

  dialogue: {
    id: 'f23-dialogue',
    title: 'What Do You Like?',
    lines: [
      { speaker: 'Ali', text: 'What do you like?' },
      { speaker: 'Sara', text: 'I like music and books.' },
      { speaker: 'Ali', text: 'Does your brother like football?' },
      { speaker: 'Sara', text: 'Yes, he does.' },
    ],
  },

  reading: {
    id: 'f23-reading',
    title: 'Our Interests',
    text:
      'I like chess and books. My brother likes football. My sister likes music. We all like English.',
    questions: [
      {
        id: 'f23-rq1',
        question: 'What does the writer like?',
        answer: 'Chess and books',
      },
      {
        id: 'f23-rq2',
        question: 'What does the brother like?',
        answer: 'Football',
      },
    ],
  },

  writing: {
    id: 'f23-writing',
    instruction:
      'O‘zingiz va boshqa bir insonning preferencesini solishtiring.',
    model:
      'I like chess. My brother likes football. I don’t like horror movies.',
  },

  activities: [
    activity(
      'f23-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'She ___ music.',
      'likes',
      ['like', 'likes', 'liking', 'is like'],
    ),
    activity(
      'f23-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'They ___ football.',
      'like',
      ['like', 'likes', 'liking', 'are like'],
    ),
    activity(
      'f23-a03',
      'error-correction',
      'Xatoni tuzating.',
      'He like chess.',
      'He likes chess.',
    ),
  ],

  speaking: {
    id: 'f23-speaking',
    title: 'Preference Talk',
    prompt: 'O‘zingiz yoqtiradigan va yoqtirmaydigan narsalarni ayting.',
    targetPhrases: [
      'I like ...',
      'I don’t like ...',
      'He likes ...',
      'She doesn’t like ...',
    ],
  },

  challenge: {
    id: 'f23-challenge',
    title: 'Preference Battle',
    description:
      'Ikki kishining qiziqishlarini taqqoslang.',
    task:
      'Kamida 10 ta gap tuzing.',
    points: 40,
  },

  test: test('f23-test', [
    testQuestion(
      'f23-t1',
      'She ___ music.',
      ['like', 'likes', 'liking', 'is like'],
      'likes',
    ),
    testQuestion(
      'f23-t2',
      'They ___ football.',
      ['like', 'likes', 'liking', 'are like'],
      'like',
    ),
    testQuestion(
      'f23-t3',
      'He ___ chess.',
      ['like', 'likes', 'liking', 'is like'],
      'likes',
    ),
    testQuestion(
      'f23-t4',
      'She doesn’t ___ horror movies.',
      ['like', 'likes', 'liking', 'is like'],
      'like',
    ),
    testQuestion(
      'f23-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'He like football.',
        'He likes football.',
        'He liking football.',
        'He is like football.',
      ],
      'He likes football.',
    ),
  ]),

  reward: reward(230),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-22',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 24
========================================================= */

const lesson24: EnglishLesson = {
  id: 'foundation-24',
  levelId: 'foundation',
  unitId: 'foundation-unit-7',
  order: 24,

  title: 'My Free Time',
  subtitle: 'Hobbies and activities',
  description:
    'Bo‘sh vaqtdagi faoliyatlar haqida gapiring va savol-javob qiling.',
  type: 'lesson',
  difficulty: 'medium',

  skills: ['vocabulary', 'speaking', 'grammar'],
  theme: theme('teal', 'emerald', '🎮'),

  objectives: [
    'Hobby vocabulary',
    'Do you ...? savollari',
    'Like + activity',
    'Bo‘sh vaqt haqida suhbat',
  ],

  vocabulary: [
    v('f24-v01', 'read', 'o‘qimoq', '/riːd/', 'I like reading.'),
    v('f24-v02', 'draw', 'rasm chizmoq', '/drɔː/', 'I like drawing.'),
    v('f24-v03', 'play chess', 'shaxmat o‘ynamoq', '/pleɪ tʃes/', 'I play chess.'),
    v('f24-v04', 'watch films', 'film ko‘rmoq', '/wɒtʃ fɪlmz/', 'I watch films.'),
    v('f24-v05', 'listen to music', 'musiqa tinglamoq', '/ˈlɪsən/', 'I listen to music.'),
    v('f24-v06', 'travel', 'sayohat qilmoq', '/ˈtrævəl/', 'I like to travel.'),
  ],

  grammar: [
    g(
      'f24-g01',
      'Hobbies',
      'Bo‘sh vaqt faoliyatlari Present Simple va like bilan ifodalanadi.',
      'Subject + verb/activity',
      [
        'I read books.',
        'I play chess.',
        'She listens to music.',
        'They watch films.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f24-s01',
      'Hobby sentence',
      'Subject + verb + object',
      [
        'I read books.',
        'I play chess.',
        'She listens to music.',
      ],
    ),
  ],

  examples: [
    'I read books in my free time.',
    'I play chess with my friends.',
    'She listens to music.',
    'They watch films.',
    'We travel at the weekend.',
  ],

  dialogue: {
    id: 'f24-dialogue',
    title: 'Free Time',
    lines: [
      { speaker: 'Ali', text: 'What do you do in your free time?' },
      { speaker: 'Tom', text: 'I play chess and read books.' },
      { speaker: 'Ali', text: 'Do you watch films?' },
      { speaker: 'Tom', text: 'Yes, sometimes.' },
    ],
  },

  reading: {
    id: 'f24-reading',
    title: 'My Weekend',
    text:
      'At the weekend, I read books and play chess. Sometimes I watch films with my family. I also listen to music.',
    questions: [
      {
        id: 'f24-rq1',
        question: 'What does the writer play?',
        answer: 'Chess',
      },
      {
        id: 'f24-rq2',
        question: 'Who does the writer watch films with?',
        answer: 'Family',
      },
    ],
  },

  writing: {
    id: 'f24-writing',
    instruction:
      'Bo‘sh vaqtingiz haqida 10 ta gap yozing.',
    model:
      'I read books. I play chess. I listen to music. I sometimes watch films.',
  },

  activities: [
    activity(
      'f24-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ chess.',
      'play',
      ['play', 'plays', 'playing', 'am play'],
    ),
    activity(
      'f24-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'She ___ to music.',
      'listens',
      ['listen', 'listens', 'listening', 'is listen'],
    ),
    activity(
      'f24-a03',
      'sentence-builder',
      'Gapni tuzing.',
      'books / read / I',
      'I read books.',
    ),
  ],

  speaking: {
    id: 'f24-speaking',
    title: 'My Hobby',
    prompt: 'Sevimli mashg‘ulotingiz haqida gapiring.',
    targetPhrases: [
      'I like ...',
      'I play ...',
      'I read ...',
      'I watch ...',
      'I listen to ...',
    ],
  },

  challenge: {
    id: 'f24-challenge',
    title: 'Weekend Story',
    description:
      'Dam olish kuningiz haqida mini story yarating.',
    task:
      'Kamida 12 ta gap va 5 ta hobby vocabulary ishlating.',
    points: 40,
  },

  test: test('f24-test', [
    testQuestion(
      'f24-t1',
      'I ___ chess.',
      ['play', 'plays', 'playing', 'am play'],
      'play',
    ),
    testQuestion(
      'f24-t2',
      'She ___ to music.',
      ['listen', 'listens', 'listening', 'is listen'],
      'listens',
    ),
    testQuestion(
      'f24-t3',
      'They ___ films.',
      ['watch', 'watches', 'watching', 'is watch'],
      'watch',
    ),
    testQuestion(
      'f24-t4',
      'What do you do in your free time?',
      ['I play chess.', 'I am chess.', 'I chess play.', 'I plays chess.'],
      'I play chess.',
    ),
    testQuestion(
      'f24-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'She listen to music.',
        'She listens to music.',
        'She listening music.',
        'She is listen music.',
      ],
      'She listens to music.',
    ),
  ]),

  reward: reward(235),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-23',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 25
========================================================= */

const lesson25: EnglishLesson = {
  id: 'foundation-25',
  levelId: 'foundation',
  unitId: 'foundation-unit-7',
  order: 25,

  title: 'My Full Day',
  subtitle: 'Sentence Structure Mastery',
  description:
    'Subject + Verb + Object + Place + Time strukturasini real hayotda ishlating.',
  type: 'lesson',
  difficulty: 'hard',

  skills: ['grammar', 'writing', 'speaking', 'reading'],
  theme: theme('indigo', 'purple', '🧩'),

  objectives: [
    'Uzunroq gap tuzish',
    'Object, place va time ni birlashtirish',
    'Gap tartibini mustahkamlash',
  ],

  vocabulary: [
    v('f25-v01', 'school', 'maktab', '/skuːl/', 'I study at school.'),
    v('f25-v02', 'home', 'uy', '/həʊm/', 'I study at home.'),
    v('f25-v03', 'library', 'kutubxona', '/ˈlaɪbrəri/', 'I read at the library.'),
    v('f25-v04', 'morning', 'ertalab', '/ˈmɔːnɪŋ/', 'I study in the morning.'),
    v('f25-v05', 'evening', 'kechqurun', '/ˈiːvnɪŋ/', 'I read in the evening.'),
  ],

  grammar: [
    g(
      'f25-g01',
      'Expanded Sentence Structure',
      'Oddiy gapga object, place va time qo‘shilib mazmun kengayadi.',
      'Subject + Verb + Object + Place + Time',
      [
        'I study English at school every morning.',
        'I read books at home in the evening.',
        'She plays chess with her brother at home.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f25-s01',
      'Expanded sentence',
      'Subject + Verb + Object + Place + Time',
      [
        'I study English at school every morning.',
        'She reads books at home in the evening.',
      ],
    ),
  ],

  examples: [
    'I study English at school every morning.',
    'I read books at home in the evening.',
    'She plays chess with her brother at home.',
    'They play football in the park at the weekend.',
  ],

  dialogue: {
    id: 'f25-dialogue',
    title: 'My Full Day',
    lines: [
      { speaker: 'Ali', text: 'What do you do in the morning?' },
      { speaker: 'Tom', text: 'I study English at school.' },
      { speaker: 'Ali', text: 'What do you do in the evening?' },
      { speaker: 'Tom', text: 'I read books at home.' },
    ],
  },

  reading: {
    id: 'f25-reading',
    title: 'A Student’s Day',
    text:
      'I wake up at seven in the morning. I eat breakfast at home. I study English at school. In the afternoon, I play football in the park. In the evening, I read books at home.',
    questions: [
      {
        id: 'f25-rq1',
        question: 'Where does the student study English?',
        answer: 'At school',
      },
      {
        id: 'f25-rq2',
        question: 'Where does the student play football?',
        answer: 'In the park',
      },
    ],
  },

  writing: {
    id: 'f25-writing',
    instruction:
      'Kuningizni kamida 12 ta uzunroq gap bilan yozing.',
    model:
      'I study English at school every morning. I read books at home in the evening.',
  },

  activities: [
    activity(
      'f25-a01',
      'sentence-builder',
      'So‘zlarni to‘g‘ri tartiblang.',
      'English / study / I / school / at',
      'I study English at school.',
    ),
    activity(
      'f25-a02',
      'multiple-choice',
      'To‘g‘ri gapni tanlang.',
      'Qaysi gap to‘liqroq va to‘g‘ri?',
      'I study English at school every morning.',
      [
        'I study English.',
        'I study every.',
        'I English school.',
        'I study English at school every morning.',
      ],
    ),
    activity(
      'f25-a03',
      'error-correction',
      'Gapni tuzating.',
      'I English study at school.',
      'I study English at school.',
    ),
  ],

  speaking: {
    id: 'f25-speaking',
    title: 'My Full Day',
    prompt: 'Kun tartibingizni uzunroq gaplarda ayting.',
    targetPhrases: [
      'I study ... at ...',
      'I play ... in ...',
      'I read ... at ...',
      'I go ... every ...',
    ],
  },

  challenge: {
    id: 'f25-challenge',
    title: 'Sentence Builder',
    description:
      'Oddiy gaplarni kengaytirib, mazmunli story yarating.',
    task:
      'Kamida 8 ta Subject + Verb + Object + Place + Time gap tuzing.',
    points: 45,
  },

  test: test('f25-test', [
    testQuestion(
      'f25-t1',
      'To‘g‘ri gapni tanlang.',
      [
        'I English study school.',
        'I study English at school.',
        'I study at English school.',
        'I English at school study.',
      ],
      'I study English at school.',
    ),
    testQuestion(
      'f25-t2',
      'Qaysi gapda object bor?',
      [
        'I sleep.',
        'I study English.',
        'I am.',
        'I run.',
      ],
      'I study English.',
    ),
    testQuestion(
      'f25-t3',
      '“I read books at home” gapida place qaysi?',
      ['I', 'read', 'books', 'at home'],
      'at home',
    ),
    testQuestion(
      'f25-t4',
      '“I study English at school” gapida object qaysi?',
      ['I', 'study', 'English', 'at school'],
      'English',
    ),
    testQuestion(
      'f25-t5',
      'To‘g‘ri gapni tanlang.',
      [
        'She books reads at home.',
        'She reads books at home.',
        'She at home reads books.',
        'She reads at books home.',
      ],
      'She reads books at home.',
    ),
  ]),

  reward: reward(250),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-24',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 26
========================================================= */

const lesson26: EnglishLesson = {
  id: 'foundation-26',
  levelId: 'foundation',
  unitId: 'foundation-unit-7',
  order: 26,

  title: 'Where Is the School?',
  subtitle: 'Places and directions',
  description:
    'Shahar ichidagi joylarni aytish va oddiy yo‘l ko‘rsatmalarini tushunish.',
  type: 'lesson',
  difficulty: 'hard',

  skills: ['vocabulary', 'speaking', 'grammar'],
  theme: theme('blue', 'cyan', '🗺️'),

  objectives: [
    'Shahar joylarini o‘rganish',
    'Where is ...? savolini ishlatish',
    'Chap/o‘ng va to‘g‘ri yurishni aytish',
  ],

  vocabulary: [
    v('f26-v01', 'school', 'maktab', '/skuːl/', 'The school is near.'),
    v('f26-v02', 'bank', 'bank', '/bæŋk/', 'The bank is next to the school.'),
    v('f26-v03', 'hospital', 'kasalxona', '/ˈhɒspɪtəl/', 'The hospital is near.'),
    v('f26-v04', 'park', 'bog‘', '/pɑːk/', 'The park is behind the school.'),
    v('f26-v05', 'left', 'chap', '/left/', 'Turn left.'),
    v('f26-v06', 'right', 'o‘ng', '/raɪt/', 'Turn right.'),
    v('f26-v07', 'straight', 'to‘g‘ri', '/streɪt/', 'Go straight.'),
  ],

  grammar: [
    g(
      'f26-g01',
      'Directions',
      'Joylashuv va buyruq gaplar yordamida yo‘l ko‘rsatiladi.',
      'Go + direction | Turn + left/right',
      [
        'Go straight.',
        'Turn left.',
        'Turn right.',
        'The bank is next to the school.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f26-s01',
      'Location question',
      'Where is + place?',
      [
        'Where is the school?',
        'Where is the bank?',
      ],
    ),
  ],

  examples: [
    'Where is the school?',
    'Go straight.',
    'Turn left.',
    'Turn right.',
    'The bank is next to the school.',
    'The park is behind the school.',
  ],

  dialogue: {
    id: 'f26-dialogue',
    title: 'Finding the School',
    lines: [
      { speaker: 'Tourist', text: 'Excuse me, where is the school?' },
      { speaker: 'Ali', text: 'Go straight.' },
      { speaker: 'Tourist', text: 'Then what?' },
      { speaker: 'Ali', text: 'Turn right. The school is next to the bank.' },
    ],
  },

  reading: {
    id: 'f26-reading',
    title: 'Around My Neighborhood',
    text:
      'There is a school near my house. The bank is next to the school. The park is behind the school. The hospital is on the right.',
    questions: [
      {
        id: 'f26-rq1',
        question: 'Where is the bank?',
        answer: 'Next to the school',
      },
      {
        id: 'f26-rq2',
        question: 'Where is the park?',
        answer: 'Behind the school',
      },
    ],
  },

  writing: {
    id: 'f26-writing',
    instruction:
      'Uy va maktabingiz orasidagi yo‘lni 8 ta gap bilan tasvirlang.',
    model:
      'Go straight. Turn right. The school is next to the bank.',
  },

  activities: [
    activity(
      'f26-a01',
      'multiple-choice',
      'To‘g‘ri yo‘nalishni tanlang.',
      '“O‘ngga buriling” qaysi?',
      'Turn right.',
      ['Turn left.', 'Turn right.', 'Go straight.', 'Stop here.'],
    ),
    activity(
      'f26-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      '“To‘g‘ri boring” qaysi?',
      'Go straight.',
      ['Go left.', 'Go straight.', 'Turn right.', 'Go back.'],
    ),
    activity(
      'f26-a03',
      'sentence-builder',
      'Savolni tuzing.',
      'school / where / is / the / ?',
      'Where is the school?',
    ),
  ],

  speaking: {
    id: 'f26-speaking',
    title: 'Give Directions',
    prompt: 'Bir kishiga maktabga qanday borishni tushuntiring.',
    targetPhrases: [
      'Go straight.',
      'Turn left.',
      'Turn right.',
      'It is next to ...',
      'It is behind ...',
    ],
  },

  challenge: {
    id: 'f26-challenge',
    title: 'City Guide',
    description:
      'O‘zingizni city guide sifatida tasavvur qiling.',
    task:
      'Kamida 10 ta yo‘nalish va joylashuv gapini ishlating.',
    points: 45,
  },

  test: test('f26-test', [
    testQuestion(
      'f26-t1',
      '“O‘ngga buriling” qaysi?',
      ['Turn left.', 'Turn right.', 'Go straight.', 'Go back.'],
      'Turn right.',
    ),
    testQuestion(
      'f26-t2',
      '“To‘g‘ri boring” qaysi?',
      ['Go straight.', 'Turn left.', 'Turn right.', 'Stop.'],
      'Go straight.',
    ),
    testQuestion(
      'f26-t3',
      '“Where is the bank?” nimani so‘raydi?',
      ['Bankning narxini', 'Bankning joylashuvini', 'Bankning vaqtini', 'Bankning rangini'],
      'Bankning joylashuvini',
    ),
    testQuestion(
      'f26-t4',
      'The bank is ___ the school.',
      ['next to', 'run', 'study', 'happy'],
      'next to',
    ),
    testQuestion(
      'f26-t5',
      'To‘g‘ri savolni tanlang.',
      [
        'Where the school is?',
        'Where is the school?',
        'Is where the school?',
        'Where school is the?',
      ],
      'Where is the school?',
    ),
  ]),

  reward: reward(260),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-25',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 27
========================================================= */

const lesson27: EnglishLesson = {
  id: 'foundation-27',
  levelId: 'foundation',
  unitId: 'foundation-unit-8',
  order: 27,

  title: 'At the Shop',
  subtitle: 'Shopping English',
  description:
    'Do‘konda narx so‘rash, mahsulot tanlash va oddiy xarid suhbatini olib borish.',
  type: 'lesson',
  difficulty: 'hard',

  skills: ['speaking', 'vocabulary', 'grammar'],
  theme: theme('emerald', 'teal', '🛍️'),

  objectives: [
    'Shop vocabulary',
    'How much ...? savoli',
    'I want / I would like bilan tanishish',
    'Narx haqida gapirish',
  ],

  vocabulary: [
    v('f27-v01', 'price', 'narx', '/praɪs/', 'What is the price?'),
    v('f27-v02', 'cheap', 'arzon', '/tʃiːp/', 'It is cheap.'),
    v('f27-v03', 'expensive', 'qimmat', '/ɪkˈspensɪv/', 'It is expensive.'),
    v('f27-v04', 'buy', 'sotib olmoq', '/baɪ/', 'I want to buy it.'),
    v('f27-v05', 'size', 'o‘lcham', '/saɪz/', 'What size do you need?'),
    v('f27-v06', 'money', 'pul', '/ˈmʌni/', 'I have enough money.'),
  ],

  grammar: [
    g(
      'f27-g01',
      'How much?',
      'How much narx yoki sanalmaydigan miqdor haqida so‘rashda ishlatiladi.',
      'How much + noun?',
      [
        'How much is it?',
        'How much is this shirt?',
        'How much money do you have?',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f27-s01',
      'Shopping question',
      'How much + be + object?',
      [
        'How much is this?',
        'How much is this shirt?',
      ],
    ),
  ],

  examples: [
    'How much is this?',
    'How much is this shirt?',
    'It is cheap.',
    'It is expensive.',
    'I want to buy it.',
    'I would like this one.',
  ],

  dialogue: {
    id: 'f27-dialogue',
    title: 'Buying a Shirt',
    lines: [
      { speaker: 'Customer', text: 'How much is this shirt?' },
      { speaker: 'Seller', text: 'It is 100,000 so‘m.' },
      { speaker: 'Customer', text: 'Do you have a smaller size?' },
      { speaker: 'Seller', text: 'Yes, we do.' },
      { speaker: 'Customer', text: 'I would like this one.' },
    ],
  },

  reading: {
    id: 'f27-reading',
    title: 'At the Shop',
    text:
      'Ali goes to a shop. He wants to buy a shirt. The shirt is 100,000 so‘m. Ali likes it and buys it.',
    questions: [
      {
        id: 'f27-rq1',
        question: 'What does Ali want to buy?',
        answer: 'A shirt',
      },
      {
        id: 'f27-rq2',
        question: 'How much is it?',
        answer: '100,000 so‘m',
      },
    ],
  },

  writing: {
    id: 'f27-writing',
    instruction:
      'Do‘kondagi xaridor va sotuvchi o‘rtasida 8 qatorli dialog yozing.',
    model:
      'How much is this? It is 50,000 so‘m. I would like this one.',
  },

  activities: [
    activity(
      'f27-a01',
      'multiple-choice',
      'Narx so‘rash uchun to‘g‘ri savolni tanlang.',
      '___ is this shirt?',
      'How much',
      ['How many', 'How much', 'How old', 'How often'],
    ),
    activity(
      'f27-a02',
      'multiple-choice',
      'To‘g‘ri javobni tanlang.',
      'How much is it?',
      'It is 50,000 so‘m.',
      ['It is 50,000 so‘m.', 'It is blue.', 'It is big.', 'It is mine.'],
    ),
    activity(
      'f27-a03',
      'sentence-builder',
      'Gapni tuzing.',
      'like / I / would / this / one',
      'I would like this one.',
    ),
  ],

  speaking: {
    id: 'f27-speaking',
    title: 'Shop Role Play',
    prompt: 'Xaridor yoki sotuvchi rolini bajaring.',
    targetPhrases: [
      'How much is this?',
      'Do you have ...?',
      'I would like ...',
      'It is cheap.',
      'It is expensive.',
    ],
  },

  challenge: {
    id: 'f27-challenge',
    title: 'Shopping Mission',
    description:
      'Do‘konda real suhbatni simulyatsiya qiling.',
    task:
      'Kamida 12 qatorli shopping dialogue yarating.',
    points: 45,
  },

  test: test('f27-test', [
    testQuestion(
      'f27-t1',
      '___ is this shirt?',
      ['How much', 'How many', 'How old', 'How often'],
      'How much',
    ),
    testQuestion(
      'f27-t2',
      'How much is it?',
      ['It is 50,000 so‘m.', 'It is blue.', 'It is big.', 'It is mine.'],
      'It is 50,000 so‘m.',
    ),
    testQuestion(
      'f27-t3',
      '“expensive” nimani bildiradi?',
      ['Arzon', 'Qimmat', 'Yangi', 'Kichik'],
      'Qimmat',
    ),
    testQuestion(
      'f27-t4',
      '“I would like this one” nimani bildiradi?',
      ['Men buni xohlayman / olmoqchiman.', 'Men buni ko‘rmayapman.', 'Men buni bilmayman.', 'Men buni sotdim.'],
      'Men buni xohlayman / olmoqchiman.',
    ),
    testQuestion(
      'f27-t5',
      'To‘g‘ri savolni tanlang.',
      [
        'How much this is?',
        'How much is this?',
        'How this much is?',
        'This is how much?',
      ],
      'How much is this?',
    ),
  ]),

  reward: reward(270),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-26',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 28
========================================================= */

const lesson28: EnglishLesson = {
  id: 'foundation-28',
  levelId: 'foundation',
  unitId: 'foundation-unit-8',
  order: 28,

  title: 'Weather and Clothes',
  subtitle: 'Ob-havo, kiyim va vaziyatga mos gaplar',
  description:
    'Ob-havoni tasvirlash va kiyim haqida gapirishni o‘rganing.',
  type: 'lesson',
  difficulty: 'hard',

  skills: ['vocabulary', 'speaking', 'grammar'],
  theme: theme('sky', 'blue', '🌤️'),

  objectives: [
    'Weather vocabulary',
    'Kiyimlar vocabulary',
    'It is ... bilan ob-havoni tasvirlash',
    'Ob-havoga mos kiyimni aytish',
  ],

  vocabulary: [
    v('f28-v01', 'sunny', 'quyoshli', '/ˈsʌni/', 'It is sunny.'),
    v('f28-v02', 'rainy', 'yomg‘irli', '/ˈreɪni/', 'It is rainy.'),
    v('f28-v03', 'cold', 'sovuq', '/kəʊld/', 'It is cold.'),
    v('f28-v04', 'hot', 'issiq', '/hɒt/', 'It is hot.'),
    v('f28-v05', 'jacket', 'kurtka', '/ˈdʒækɪt/', 'I wear a jacket.'),
    v('f28-v06', 'coat', 'palto', '/kəʊt/', 'I wear a coat.'),
  ],

  grammar: [
    g(
      'f28-g01',
      'Weather with IT',
      'Ob-havo haqida gapirganda it is strukturasi keng ishlatiladi.',
      'It is + adjective',
      [
        'It is sunny.',
        'It is cold.',
        'It is rainy.',
        'It is hot.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f28-s01',
      'Weather',
      'It is + adjective',
      [
        'It is sunny.',
        'It is cold.',
        'It is rainy.',
      ],
    ),
  ],

  examples: [
    'It is sunny today.',
    'It is cold in winter.',
    'It is rainy today.',
    'I wear a jacket.',
    'I wear a coat when it is cold.',
  ],

  dialogue: {
    id: 'f28-dialogue',
    title: 'What Is the Weather Like?',
    lines: [
      { speaker: 'Ali', text: 'What is the weather like today?' },
      { speaker: 'Tom', text: 'It is cold and rainy.' },
      { speaker: 'Ali', text: 'What do you wear?' },
      { speaker: 'Tom', text: 'I wear a coat.' },
    ],
  },

  reading: {
    id: 'f28-reading',
    title: 'A Cold Day',
    text:
      'Today is cold and rainy. I wear a warm coat and shoes. I take an umbrella because it is raining.',
    questions: [
      {
        id: 'f28-rq1',
        question: 'What is the weather like?',
        answer: 'Cold and rainy',
      },
      {
        id: 'f28-rq2',
        question: 'What does the writer wear?',
        answer: 'A warm coat and shoes',
      },
    ],
  },

  writing: {
    id: 'f28-writing',
    instruction:
      'Bugungi ob-havo va kiyimingiz haqida 8 ta gap yozing.',
    model:
      'It is cold today. I wear a jacket. I take an umbrella because it is rainy.',
  },

  activities: [
    activity(
      'f28-a01',
      'multiple-choice',
      'To‘g‘ri gapni tanlang.',
      'Bugun quyoshli.',
      'It is sunny today.',
      ['It sunny today.', 'It is sunny today.', 'It are sunny.', 'Sunny is it.'],
    ),
    activity(
      'f28-a02',
      'multiple-choice',
      'Sovuq havoga mos kiyimni tanlang.',
      'It is very cold. What do you wear?',
      'A coat',
      ['A T-shirt', 'A coat', 'Shorts', 'Sandals'],
    ),
    activity(
      'f28-a03',
      'sentence-builder',
      'Gapni tuzing.',
      'cold / is / It / today',
      'It is cold today.',
    ),
  ],

  speaking: {
    id: 'f28-speaking',
    title: 'Weather Reporter',
    prompt: 'O‘zingizni weather reporter deb tasavvur qiling.',
    targetPhrases: [
      'It is sunny.',
      'It is rainy.',
      'It is cold.',
      'It is hot.',
      'I wear ...',
    ],
  },

  challenge: {
    id: 'f28-challenge',
    title: 'Weather Report',
    description:
      'Bir kunlik ob-havo reportajini yarating.',
    task:
      'Ob-havo + kiyim + faoliyatni birlashtirib 10 ta gap ayting.',
    points: 45,
  },

  test: test('f28-test', [
    testQuestion(
      'f28-t1',
      '“Bugun quyoshli” qaysi?',
      [
        'It sunny today.',
        'It is sunny today.',
        'Sunny it today.',
        'It are sunny today.',
      ],
      'It is sunny today.',
    ),
    testQuestion(
      'f28-t2',
      'It is cold. What do you wear?',
      ['A coat', 'Shorts', 'Sandals', 'A T-shirt'],
      'A coat',
    ),
    testQuestion(
      'f28-t3',
      '“rainy” nimani bildiradi?',
      ['Quyoshli', 'Yomg‘irli', 'Qorli', 'Issiq'],
      'Yomg‘irli',
    ),
    testQuestion(
      'f28-t4',
      'To‘g‘ri gapni tanlang.',
      [
        'It is hot.',
        'It are hot.',
        'It hot is.',
        'Hot it are.',
      ],
      'It is hot.',
    ),
    testQuestion(
      'f28-t5',
      '“I wear a jacket” nimani bildiradi?',
      ['Men kurtka kiyaman.', 'Men kurtka sotaman.', 'Men kurtka tikaman.', 'Men kurtkani yuvaman.'],
      'Men kurtka kiyaman.',
    ),
  ]),

  reward: reward(280),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-27',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 29
========================================================= */

const lesson29: EnglishLesson = {
  id: 'foundation-29',
  levelId: 'foundation',
  unitId: 'foundation-unit-8',
  order: 29,

  title: 'Mission: English',
  subtitle: 'Foundation Grammar Integration',
  description:
    'Foundation davomida o‘rgangan grammatikalarni bitta real vaziyatda birlashtiring.',
  type: 'review',
  difficulty: 'hard',

  skills: [
    'grammar',
    'vocabulary',
    'speaking',
    'reading',
    'writing',
  ],

  theme: theme('gold', 'orange', '🚀'),

  objectives: [
    'TO BE ni ishlatish',
    'Present Simple ni ishlatish',
    'Do/does bilan savol tuzish',
    'Can/can’t ishlatish',
    'There is/are ishlatish',
    'Prepositions ishlatish',
    'Question words ishlatish',
  ],

  vocabulary: [
    v('f29-v01', 'student', 'o‘quvchi', '/ˈstjuːdənt/', 'I am a student.'),
    v('f29-v02', 'school', 'maktab', '/skuːl/', 'I go to school.'),
    v('f29-v03', 'friend', 'do‘st', '/frend/', 'He is my friend.'),
    v('f29-v04', 'learn', 'o‘rganmoq', '/lɜːn/', 'I learn English.'),
    v('f29-v05', 'future', 'kelajak', '/ˈfjuːtʃə/', 'English helps my future.'),
  ],

  grammar: [
    g(
      'f29-g01',
      'Foundation Review',
      'Foundationdagi asosiy grammarlar birlashtiriladi.',
      'TO BE + Present Simple + Questions + Can + There is/are',
      [
        'I am a student.',
        'I study English.',
        'Do you study English?',
        'I can speak English.',
        'There are books on the table.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f29-s01',
      'Integrated sentence',
      'Subject + Verb + Object + Place + Time',
      [
        'I study English at school every day.',
        'I read books at home in the evening.',
      ],
    ),
  ],

  examples: [
    'I am a student.',
    'I study English every day.',
    'I don’t study at night.',
    'Do you study English?',
    'I can speak a little English.',
    'There are books on my desk.',
    'My teacher is kind.',
    'I usually study in the evening.',
  ],

  dialogue: {
    id: 'f29-dialogue',
    title: 'English Learner Interview',
    lines: [
      { speaker: 'Teacher', text: 'What is your name?' },
      { speaker: 'Student', text: 'My name is Ali.' },
      { speaker: 'Teacher', text: 'Where do you live?' },
      { speaker: 'Student', text: 'I live in Tashkent.' },
      { speaker: 'Teacher', text: 'Why do you learn English?' },
      { speaker: 'Student', text: 'I learn English for my future.' },
      { speaker: 'Teacher', text: 'Can you speak English?' },
      { speaker: 'Student', text: 'Yes, I can speak a little English.' },
    ],
  },

  reading: {
    id: 'f29-reading',
    title: 'My English Journey',
    text:
      'My name is Ali. I am a student. I live in Tashkent. I study English every day because I want to communicate with people from different countries. I can speak simple English. I usually study in the evening. There are many English books on my desk.',
    questions: [
      {
        id: 'f29-rq1',
        question: 'Where does Ali live?',
        answer: 'Tashkent',
      },
      {
        id: 'f29-rq2',
        question: 'Why does he study English?',
        answer: 'To communicate with people from different countries',
      },
      {
        id: 'f29-rq3',
        question: 'When does he usually study?',
        answer: 'In the evening',
      },
    ],
  },

  writing: {
    id: 'f29-writing',
    instruction:
      'O‘zingizning English learner profilingizni 12–15 gapda yozing.',
    model:
      'My name is ... I am a student. I live in ... I study English every day...',
  },

  activities: [
    activity(
      'f29-a01',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'I ___ a student.',
      'am',
      ['am', 'is', 'are', 'be'],
    ),
    activity(
      'f29-a02',
      'multiple-choice',
      'To‘g‘ri variantni tanlang.',
      'She ___ English every day.',
      'studies',
      ['study', 'studies', 'studying', 'is study'],
    ),
    activity(
      'f29-a03',
      'multiple-choice',
      'To‘g‘ri savolni tanlang.',
      '___ you speak English?',
      'Can',
      ['Can', 'Does', 'Is', 'Has'],
    ),
    activity(
      'f29-a04',
      'error-correction',
      'Xatoni tuzating.',
      'There is two books on the table.',
      'There are two books on the table.',
    ),
  ],

  speaking: {
    id: 'f29-speaking',
    title: 'English Interview',
    prompt: 'O‘zingiz haqingizda to‘liq interviewga javob bering.',
    targetPhrases: [
      'My name is ...',
      'I am ...',
      'I live ...',
      'I study ...',
      'I like ...',
      'I can ...',
      'I usually ...',
      'I want ...',
    ],
  },

  challenge: {
    id: 'f29-challenge',
    title: 'Mission: Speak English',
    description:
      'Foundationdagi bilimlaringizni real hayotdagi suhbatga aylantiring.',
    task:
      'O‘zingiz haqingizda kamida 15 ta gapdan iborat mini presentation tayyorlang.',
    points: 50,
  },

  test: test('f29-test', [
    testQuestion(
      'f29-t1',
      'I ___ a student.',
      ['am', 'is', 'are', 'be'],
      'am',
    ),
    testQuestion(
      'f29-t2',
      'She ___ English every day.',
      ['study', 'studies', 'studying', 'is study'],
      'studies',
    ),
    testQuestion(
      'f29-t3',
      '___ you speak English?',
      ['Can', 'Does', 'Is', 'Has'],
      'Can',
    ),
    testQuestion(
      'f29-t4',
      '___ two books on the table.',
      ['There is', 'There are', 'It is', 'They is'],
      'There are',
    ),
    testQuestion(
      'f29-t5',
      '___ do you live?',
      ['Where', 'Who', 'Why', 'When'],
      'Where',
    ),
  ]),

  reward: reward(300),

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-28',
    requiredScore: 70,
  },
};

/* =========================================================
   LESSON 30
========================================================= */

const lesson30: EnglishLesson = {
  id: 'foundation-30',
  levelId: 'foundation',
  unitId: 'foundation-unit-8',
  order: 30,

  title: 'FOUNDATION FINAL CHALLENGE',
  subtitle: 'Sizning birinchi katta English missioningiz',
  description:
    'Foundation kursining barcha asosiy bilimlarini sinovdan o‘tkazadigan yakuniy challenge.',
  type: 'challenge',
  difficulty: 'hard',

  skills: [
    'grammar',
    'vocabulary',
    'speaking',
    'reading',
    'writing',
  ],

  theme: theme('gold', 'yellow', '🏆'),

  objectives: [
    'Foundation grammarni mustahkamlash',
    'Real vaziyatlarda gap tuzish',
    'Reading comprehension',
    'Vocabulary mastery',
    'Speaking confidence',
  ],

  vocabulary: [
    v('f30-v01', 'introduce', 'tanishtirmoq', '/ˌɪntrəˈdjuːs/', 'Let me introduce myself.'),
    v('f30-v02', 'experience', 'tajriba', '/ɪkˈspɪəriəns/', 'This is a new experience.'),
    v('f30-v03', 'practice', 'mashq qilmoq', '/ˈpræktɪs/', 'I practice English every day.'),
    v('f30-v04', 'improve', 'rivojlantirmoq', '/ɪmˈpruːv/', 'I want to improve my English.'),
    v('f30-v05', 'confidence', 'ishonch', '/ˈkɒnfɪdəns/', 'Practice gives me confidence.'),
  ],

  grammar: [
    g(
      'f30-g01',
      'Foundation Mastery',
      'Foundation bosqichidagi asosiy grammatik strukturalarni mustaqil qo‘llash.',
      'TO BE + Present Simple + Questions + Negatives + Can + There is/are',
      [
        'I am a student.',
        'I study English every day.',
        'I don’t study at night.',
        'Do you speak English?',
        'I can speak English.',
        'There are books on my desk.',
      ],
    ),
  ],

  sentenceStructures: [
    structure(
      'f30-s01',
      'Complete Foundation Sentence',
      'Subject + Verb + Object + Place + Time',
      [
        'I study English at school every morning.',
        'I read English books at home every evening.',
        'I practice English with my friends at school.',
      ],
    ),
  ],

  examples: [
    'My name is Nurmuhammad.',
    'I am a learner.',
    'I study English every day.',
    'I usually study in the evening.',
    'I don’t stop when English is difficult.',
    'I can speak simple English.',
    'I want to improve my English.',
  ],

  dialogue: {
    id: 'f30-dialogue',
    title: 'Final Interview',
    lines: [
      { speaker: 'Interviewer', text: 'What is your name?' },
      { speaker: 'Learner', text: 'My name is Ali.' },
      { speaker: 'Interviewer', text: 'Where do you live?' },
      { speaker: 'Learner', text: 'I live in Uzbekistan.' },
      { speaker: 'Interviewer', text: 'Why do you learn English?' },
      { speaker: 'Learner', text: 'I learn English for my future.' },
      { speaker: 'Interviewer', text: 'What can you do in English?' },
      { speaker: 'Learner', text: 'I can introduce myself and talk about my daily life.' },
    ],
  },

  reading: {
    id: 'f30-reading',
    title: 'My English Future',
    text:
      'My name is Ali and I am learning English. At first, English is difficult for me, but I practice every day. I learn new words, study grammar and speak with my friends. I usually study in the evening. I can now introduce myself, talk about my family, describe my daily routine and ask simple questions. I know that I still have much to learn, but I am ready for the next level.',
    questions: [
      {
        id: 'f30-rq1',
        question: 'How often does Ali practice?',
        answer: 'Every day',
      },
      {
        id: 'f30-rq2',
        question: 'What can Ali talk about?',
        answer: 'His family and daily routine',
      },
      {
        id: 'f30-rq3',
        question: 'Is Ali ready for the next level?',
        answer: 'Yes',
      },
    ],
  },

  writing: {
    id: 'f30-writing',
    instruction:
      '“My English Journey” mavzusida 15–20 gaplik yakuniy matn yozing.',
    model:
      'My name is ... I am ... I live in ... I study English every day. I want to improve my English because ...',
  },

  activities: [
    activity(
      'f30-a01',
      'multiple-choice',
      'TO BE ni tanlang.',
      'I ___ ready for the next level.',
      'am',
      ['am', 'is', 'are', 'be'],
    ),
    activity(
      'f30-a02',
      'multiple-choice',
      'Present Simple ni tanlang.',
      'I ___ English every day.',
      'practice',
      ['practice', 'practices', 'practicing', 'am practice'],
    ),
    activity(
      'f30-a03',
      'multiple-choice',
      'Savolni to‘g‘ri tuzing.',
      '___ do you live?',
      'Where',
      ['Where', 'Who', 'Why', 'When'],
    ),
    activity(
      'f30-a04',
      'multiple-choice',
      'Can bilan to‘g‘ri gapni tanlang.',
      'Men ingliz tilida gapira olaman.',
      'I can speak English.',
      [
        'I can speak English.',
        'I can speaks English.',
        'I can speaking English.',
        'I am can speak English.',
      ],
    ),
    activity(
      'f30-a05',
      'error-correction',
      'Xatoni tuzating.',
      'She don’t study English.',
      'She doesn’t study English.',
    ),
  ],

  speaking: {
    id: 'f30-speaking',
    title: 'FINAL SPEAKING CHALLENGE',
    prompt:
      'O‘zingizni ingliz tilida 1–2 daqiqa davomida tanishtiring.',
    targetPhrases: [
      'My name is ...',
      'I am ...',
      'I live in ...',
      'My family is ...',
      'I study ...',
      'I like ...',
      'I can ...',
      'I usually ...',
      'I want to ...',
      'My future goal is ...',
    ],
  },

  challenge: {
    id: 'f30-challenge',
    title: 'FOUNDATION HERO',
    description:
      'Siz Foundation bosqichini yakunlash uchun barcha bilimlaringizni birlashtirasiz.',
    task:
      'O‘zingizni tanishtiring, oilangiz, maktabingiz, kundalik hayotingiz, qiziqishlaringiz va English maqsadingiz haqida gapiring.',
    points: 100,
  },

  test: test('f30-test', [
    testQuestion(
      'f30-t1',
      'I ___ a student.',
      ['am', 'is', 'are', 'be'],
      'am',
    ),
    testQuestion(
      'f30-t2',
      'She ___ English every day.',
      ['study', 'studies', 'studying', 'is study'],
      'studies',
    ),
    testQuestion(
      'f30-t3',
      '___ you speak English?',
      ['Can', 'Does', 'Is', 'Has'],
      'Can',
    ),
    testQuestion(
      'f30-t4',
      'She ___ like coffee.',
      ['don’t', 'doesn’t', 'isn’t', 'aren’t'],
      'doesn’t',
    ),
    testQuestion(
      'f30-t5',
      '___ two books on the table.',
      ['There is', 'There are', 'It is', 'They is'],
      'There are',
    ),
  ]),

  reward: {
    xp: 500,
    bonusXp: 200,
    badge: 'foundation-master',
  },

  unlock: {
    type: 'previous-lesson',
    previousLessonId: 'foundation-29',
    requiredScore: 70,
  },
};

/* =========================================================
   ALL FOUNDATION LESSONS
========================================================= */

export const FOUNDATION_LESSONS: EnglishLesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  lesson26,
  lesson27,
  lesson28,
  lesson29,
  lesson30,
];

/* =========================================================
   FOUNDATION UNITS
========================================================= */

export const FOUNDATION_UNITS: EnglishUnit[] = [
  {
    id: 'foundation-unit-1',
    courseId: 'foundation',
    order: 1,
    title: 'My English Identity',
    description:
      'Salomlashish, pronounlar, TO BE, family va basic sentence structure.',
    lessonIds: [
      'foundation-01',
      'foundation-02',
      'foundation-03',
      'foundation-04',
      'foundation-05',
      'foundation-06',
    ],
  },

  {
    id: 'foundation-unit-2',
    courseId: 'foundation',
    order: 2,
    title: 'My World',
    description:
      'This/that, have/has, there is/are va kundalik obyektlar.',
    lessonIds: [
      'foundation-07',
      'foundation-08',
      'foundation-09',
      'foundation-10',
    ],
  },

  {
    id: 'foundation-unit-3',
    courseId: 'foundation',
    order: 3,
    title: 'Everyday English',
    description:
      'Present Simple, do/does, negative va savol-javoblar.',
    lessonIds: [
      'foundation-11',
      'foundation-12',
      'foundation-13',
      'foundation-14',
    ],
  },

  {
    id: 'foundation-unit-4',
    courseId: 'foundation',
    order: 4,
    title: 'Ask & Answer',
    description:
      'Question words, can/can’t va imperative structures.',
    lessonIds: [
      'foundation-15',
      'foundation-16',
      'foundation-17',
    ],
  },

  {
    id: 'foundation-unit-5',
    courseId: 'foundation',
    order: 5,
    title: 'Where & When',
    description:
      'Joylashuv, prepositions, vaqt va tasvirlash.',
    lessonIds: [
      'foundation-18',
      'foundation-19',
      'foundation-20',
    ],
  },

  {
    id: 'foundation-unit-6',
    courseId: 'foundation',
    order: 6,
    title: 'My Habits & Likes',
    description:
      'Frequency, food, preferences va hobbies.',
    lessonIds: [
      'foundation-21',
      'foundation-22',
      'foundation-23',
      'foundation-24',
    ],
  },

  {
    id: 'foundation-unit-7',
    courseId: 'foundation',
    order: 7,
    title: 'Real Life English',
    description:
      'Uzun gaplar, yo‘nalishlar va shopping.',
    lessonIds: [
      'foundation-25',
      'foundation-26',
      'foundation-27',
    ],
  },

  {
    id: 'foundation-unit-8',
    courseId: 'foundation',
    order: 8,
    title: 'Mission Complete',
    description:
      'Weather, integrated grammar va Foundation Final Challenge.',
    lessonIds: [
      'foundation-28',
      'foundation-29',
      'foundation-30',
    ],
  },
];

/* =========================================================
   FOUNDATION COURSE
========================================================= */

export const FOUNDATION_COURSE: EnglishCourse = {
  id: 'foundation',
  levelId: 'foundation',

  title: 'English Foundation',
  subtitle: 'Zero’dan mustahkam English poydevorigacha',

  description:
    '30 ta professional interaktiv dars orqali ingliz tilining mustahkam poydevorini yarating.',

  shortDescription:
    '30 dars • Grammar • Vocabulary • Speaking • Reading • Writing',

  cefr: 'Pre-A1',

  order: 1,

  lessonCount: 30,
  estimatedMinutes: 600,

  skills: [
    'grammar',
    'vocabulary',
    'speaking',
    'reading',
    'writing',
    'listening',
    'pronunciation',
  ],

  prerequisites: [],

  recommendedAge: '10+',

  certificateTitle: 'English Foundation Certificate',

  unitIds: FOUNDATION_UNITS.map((unit) => unit.id),
};

/* =========================================================
   LOOKUP MAPS
========================================================= */

export const FOUNDATION_LESSON_MAP: Record<string, EnglishLesson> =
  Object.fromEntries(
    FOUNDATION_LESSONS.map((lesson) => [lesson.id, lesson]),
  );

export const FOUNDATION_UNIT_MAP: Record<string, EnglishUnit> =
  Object.fromEntries(
    FOUNDATION_UNITS.map((unit) => [unit.id, unit]),
  );

/* =========================================================
   HELPERS
========================================================= */

export function getFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  return FOUNDATION_LESSON_MAP[lessonId];
}

export function getFoundationUnit(
  unitId: string,
): EnglishUnit | undefined {
  return FOUNDATION_UNIT_MAP[unitId];
}

export function getNextFoundationLesson(
  currentLessonId: string,
): EnglishLesson | undefined {
  const current = getFoundationLesson(currentLessonId);

  if (!current) return undefined;

  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.order === current.order + 1,
  );
}

export function getPreviousFoundationLesson(
  currentLessonId: string,
): EnglishLesson | undefined {
  const current = getFoundationLesson(currentLessonId);

  if (!current) return undefined;

  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.order === current.order - 1,
  );
}

/* =========================================================
   COURSE STATISTICS
========================================================= */

export const FOUNDATION_STATS = {
  lessons: FOUNDATION_LESSONS.length,

  units: FOUNDATION_UNITS.length,

  totalTestQuestions: FOUNDATION_LESSONS.reduce(
    (total, lesson) =>
      total + (lesson.test?.questions?.length ?? 0),
    0,
  ),

  totalVocabulary: FOUNDATION_LESSONS.reduce(
    (total, lesson) =>
      total + (lesson.vocabulary?.length ?? 0),
    0,
  ),

  totalActivities: FOUNDATION_LESSONS.reduce(
    (total, lesson) =>
      total + (lesson.activities?.length ?? 0),
    0,
  ),

  totalXP: FOUNDATION_LESSONS.reduce(
    (total, lesson) =>
      total + (lesson.reward?.xp ?? 0),
    0,
  ),

  passingScore: 70,
};

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default FOUNDATION_LESSONS;
