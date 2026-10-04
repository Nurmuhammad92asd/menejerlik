/* =========================================================
 * 🇬🇧 MENEJERLIK BY NURMUHAMMAD
 * ENGLISH ACADEMY — FOUNDATION DATA
 * =========================================================
 *
 * FOUNDATION
 * 30 BOSQICHLI INTERAKTIV ENGLISH KURSI
 *
 * FLOW:
 *
 * Lesson
 *   ↓
 * Vocabulary
 *   ↓
 * Explanation
 *   ↓
 * Examples
 *   ↓
 * Interactive Activity
 *   ↓
 * Speaking
 *   ↓
 * Final Test
 *   ↓
 * Pass 70%
 *   ↓
 * Next Lesson Unlock
 *
 * Rasmlar hozir emoji + image path bilan tayyorlangan.
 * Keyinchalik /public/english/images/ ichiga haqiqiy
 * professional rasmlarni joylashtirish mumkin.
 * ========================================================= */

import type {
  EnglishLesson,
  EnglishVocabulary,
  EnglishActivity,
  EnglishExplanation,
  EnglishExample,
  EnglishSpeaking,
  EnglishLessonTest,
  EnglishLessonReward,
  EnglishGrammar,
} from './english-types'

/* =========================================================
   🧩 HELPERS
========================================================= */

const vocabulary = (
  items: Array<
    Omit<EnglishVocabulary, 'id'> & {
      id?: string
    }
  >,
  lessonNumber: number,
): EnglishVocabulary[] =>
  items.map((item, index) => ({
    ...item,
    id: item.id ?? `foundation-${lessonNumber}-word-${index + 1}`,
  }))

const activity = (
  item: Omit<EnglishActivity, 'id'> & { id?: string },
  lessonNumber: number,
  index: number,
): EnglishActivity => ({
  ...item,
  id: item.id ?? `foundation-${lessonNumber}-activity-${index + 1}`,
})

const explanation = (
  item: Omit<EnglishExplanation, 'id'> & { id?: string },
  lessonNumber: number,
  index: number,
): EnglishExplanation => ({
  ...item,
  id: item.id ?? `foundation-${lessonNumber}-explanation-${index + 1}`,
})

const example = (
  item: Omit<EnglishExample, 'id'> & { id?: string },
  lessonNumber: number,
  index: number,
): EnglishExample => ({
  ...item,
  id: item.id ?? `foundation-${lessonNumber}-example-${index + 1}`,
})

const speaking = (
  item: Omit<EnglishSpeaking, 'id'> & { id?: string },
  lessonNumber: number,
): EnglishSpeaking => ({
  ...item,
  id: item.id ?? `foundation-${lessonNumber}-speaking`,
})

const test = (
  lessonNumber: number,
  questions: EnglishLessonTest['questions'],
): EnglishLessonTest => ({
  id: `foundation-${lessonNumber}-test`,
  title: '📝 Lesson Test',
  description:
    'Darsni yakunlash uchun bilimlaringizni tekshiring.',
  questionCount: questions.length,
  passingScore: 70,
  maxScore: questions.reduce(
    (sum, question) => sum + question.points,
    0,
  ),
  timeLimitMinutes: 5,
  questions,
})

const rewards = (
  lessonNumber: number,
): EnglishLessonReward => ({
  xp: 100,
  bonusXp: 50,
  stars: 3,
  badgeId:
    lessonNumber === 30
      ? 'foundation-champion'
      : undefined,
  badgeTitle:
    lessonNumber === 30
      ? '🏆 Foundation Champion'
      : undefined,
  unlockNextLesson: true,
})

const baseLesson = (
  lessonNumber: number,
  title: string,
  subtitle: string,
  emoji: string,
  description: string,
  topics: string[],
  words: EnglishVocabulary[],
  explanations: EnglishExplanation[],
  examples: EnglishExample[],
  activities: EnglishActivity[],
  speakingData: EnglishSpeaking,
  testData: EnglishLessonTest,
): EnglishLesson => ({
  id: `foundation-${lessonNumber}`,
  courseId: 'english-foundation',
  lessonNumber,
  title,
  subtitle,
  emoji,
  description,
  status: lessonNumber === 1 ? 'available' : 'locked',
  estimatedMinutes: 12,
  objectives: topics,
  topics,
  vocabulary: words,
  explanations,
  examples,
  activities,
  speaking: speakingData,
  test: testData,
  rewards: rewards(lessonNumber),
  nextLessonId:
    lessonNumber < 30
      ? `foundation-${lessonNumber + 1}`
      : undefined,
  previousLessonId:
    lessonNumber > 1
      ? `foundation-${lessonNumber - 1}`
      : undefined,
})

/* =========================================================
   📝 TEST QUESTION BUILDER
========================================================= */

const mcq = (
  id: string,
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  emoji?: string,
) => ({
  id,
  type: 'multiple-choice' as const,
  question,
  points: 2,
  options: options.map((text, index) => ({
    id: `${id}-${index + 1}`,
    text,
  })),
  correctAnswer,
  explanation,
  emoji,
})

const trueFalse = (
  id: string,
  question: string,
  correctAnswer: 'true' | 'false',
  explanation: string,
) => ({
  id,
  type: 'true-false' as const,
  question,
  points: 2,
  options: [
    {
      id: `${id}-true`,
      text: 'True',
    },
    {
      id: `${id}-false`,
      text: 'False',
    },
  ],
  correctAnswer,
  explanation,
})

/* =========================================================
   01 — HELLO
========================================================= */

const lesson01 = baseLesson(
  1,
  'Hello!',
  'Let’s start speaking English 👋',
  '👋',
  'Birinchi darsda ingliz tilida salomlashish va xayrlashishni o‘rganamiz.',
  [
    'Hello va Hi',
    'Good morning',
    'Good afternoon',
    'Goodbye',
  ],
  vocabulary(
    [
      {
        word: 'Hello',
        translation: 'Salom',
        pronunciation: 'heh-LOU',
        emoji: '👋',
        category: 'greeting',
        partOfSpeech: 'interjection',
        example: 'Hello, Ali!',
      },
      {
        word: 'Hi',
        translation: 'Salom',
        pronunciation: 'hai',
        emoji: '😊',
        category: 'greeting',
        partOfSpeech: 'interjection',
        example: 'Hi, Sara!',
      },
      {
        word: 'Good morning',
        translation: 'Xayrli tong',
        emoji: '🌅',
        category: 'greeting',
        partOfSpeech: 'phrase',
        example: 'Good morning, teacher!',
      },
      {
        word: 'Good afternoon',
        translation: 'Xayrli kun',
        emoji: '☀️',
        category: 'greeting',
        partOfSpeech: 'phrase',
      },
      {
        word: 'Goodbye',
        translation: 'Xayr',
        emoji: '👋',
        category: 'greeting',
        partOfSpeech: 'interjection',
      },
    ],
    1,
  ),
  [
    explanation(
      {
        type: 'intro',
        title: '👋 English starts with a greeting',
        content:
          'Hello va Hi ingliz tilidagi eng asosiy salomlashish so‘zlaridir.',
        emoji: '🌟',
      },
      1,
      1,
    ),
    explanation(
      {
        type: 'tip',
        title: '💡 Remember',
        content:
          'Morning — tong, afternoon — kunning ikkinchi qismi.',
        emoji: '🧠',
      },
      1,
      2,
    ),
  ],
  [
    example(
      {
        english: 'Hello! My name is Ali.',
        uzbek: 'Salom! Mening ismim Ali.',
        emoji: '👦',
        highlight: 'Hello',
      },
      1,
      1,
    ),
    example(
      {
        english: 'Good morning, teacher!',
        uzbek: 'Xayrli tong, ustoz!',
        emoji: '🌅',
      },
      1,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🎯 Choose the greeting',
        instruction: '“Salom” uchun mos inglizcha so‘zni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '“Salom” ingliz tilida qanday aytiladi?',
        emoji: '👋',
        options: [
          { id: 'a', text: 'Hello', emoji: '👋' },
          { id: 'b', text: 'Apple', emoji: '🍎' },
          { id: 'c', text: 'House', emoji: '🏠' },
          { id: 'd', text: 'Book', emoji: '📚' },
        ],
        correctAnswer: 'Hello',
        explanation: 'Hello ingliz tilida “Salom” degani.',
      },
      1,
      1,
    ),
    activity(
      {
        type: 'word-order',
        title: '🧩 Build the sentence',
        instruction: 'So‘zlarni to‘g‘ri tartibga keltiring.',
        points: 10,
        difficulty: 'easy',
        question: 'Salom, Ali!',
        words: ['Ali', 'Hello', '!'],
        correctAnswer: 'Hello Ali !',
        explanation:
          'Ingliz tilida greeting avval keladi: Hello, Ali!',
      },
      1,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Say Hello!',
      instruction:
        'Avval audio orqali eshiting, keyin ovoz chiqarib takrorlang.',
      mode: 'listen-repeat',
      phrase: 'Hello! Good morning!',
      translation: 'Salom! Xayrli tong!',
      emoji: '🎤',
      repetitions: 3,
      targetWords: ['Hello', 'Good morning'],
    },
    1,
  ),
  test(1, [
    mcq(
      'f1-q1',
      '“Hello” nimani anglatadi?',
      ['Salom', 'Rahmat', 'Xayr', 'Iltimos'],
      'Salom',
      'Hello — salomlashish uchun ishlatiladi.',
      '👋',
    ),
    mcq(
      'f1-q2',
      'Ertalab qanday salomlashamiz?',
      ['Good morning', 'Good night', 'Goodbye', 'Thank you'],
      'Good morning',
      'Good morning — xayrli tong degani.',
      '🌅',
    ),
    mcq(
      'f1-q3',
      '“Hi” so‘zining ma’nosi nima?',
      ['Salom', 'Uy', 'Kitob', 'Maktab'],
      'Salom',
      'Hi ham norasmiy salomlashish shaklidir.',
      '😊',
    ),
    mcq(
      'f1-q4',
      'Qaysi so‘z xayrlashishda ishlatiladi?',
      ['Goodbye', 'Hello', 'Hi', 'Morning'],
      'Goodbye',
      'Goodbye — xayr degani.',
      '👋',
    ),
    trueFalse(
      'f1-q5',
      '“Good morning” ertalab salomlashishda ishlatiladi.',
      'true',
      'Good morning ertalabki salomlashuvdir.',
    ),
  ]),
)

/* =========================================================
   02 — INTRODUCING YOURSELF
========================================================= */

const lesson02 = baseLesson(
  2,
  'My Name Is...',
  'Introduce yourself 🙋',
  '🙋',
  'O‘zingizni tanishtirishni va ismingizni aytishni o‘rganing.',
  ['My name is...', 'I am...', 'Nice to meet you'],
  vocabulary(
    [
      {
        word: 'name',
        translation: 'ism',
        emoji: '🏷️',
        category: 'person',
        partOfSpeech: 'noun',
      },
      {
        word: 'my',
        translation: 'mening',
        emoji: '🙋',
        category: 'person',
        partOfSpeech: 'determiner',
      },
      {
        word: 'I',
        translation: 'men',
        emoji: '👤',
        category: 'person',
        partOfSpeech: 'pronoun',
      },
      {
        word: 'meet',
        translation: 'uchrashmoq',
        emoji: '🤝',
        category: 'general',
        partOfSpeech: 'verb',
      },
      {
        word: 'nice',
        translation: 'yoqimli',
        emoji: '😊',
        category: 'general',
        partOfSpeech: 'adjective',
      },
    ],
    2,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🙋 Introduce yourself',
        content:
          '“My name is...” — Mening ismim... degani. Bu o‘zingizni tanishtirishning asosiy usullaridan biridir.',
        emoji: '🙋',
      },
      2,
      1,
    ),
    explanation(
      {
        type: 'memory',
        title: '🧠 Easy pattern',
        content:
          'My name is + ism. Masalan: My name is Ali.',
        emoji: '💡',
      },
      2,
      2,
    ),
  ],
  [
    example(
      {
        english: 'My name is Ali.',
        uzbek: 'Mening ismim Ali.',
        emoji: '👦',
        highlight: 'My name is',
      },
      2,
      1,
    ),
    example(
      {
        english: 'Nice to meet you.',
        uzbek: 'Siz bilan tanishganimdan xursandman.',
        emoji: '🤝',
      },
      2,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'sentence-builder',
        title: '🧩 Build it',
        instruction: 'O‘zingizni ingliz tilida tanishtiring.',
        points: 10,
        difficulty: 'easy',
        question: 'Mening ismim Ali.',
        words: ['My', 'name', 'is', 'Ali'],
        correctAnswer: 'My name is Ali',
        explanation: 'To‘g‘ri gap: My name is Ali.',
      },
      2,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🎯 Choose',
        instruction: 'To‘g‘ri iborani toping.',
        points: 10,
        difficulty: 'easy',
        question: '“Mening ismim Sara” qanday bo‘ladi?',
        options: [
          { id: 'a', text: 'My name is Sara' },
          { id: 'b', text: 'I name Sara' },
          { id: 'c', text: 'Name my Sara' },
          { id: 'd', text: 'Sara my name' },
        ],
        correctAnswer: 'My name is Sara',
        explanation:
          'Ingliz tilidagi to‘g‘ri struktura: My name is + ism.',
      },
      2,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Introduce yourself',
      instruction: 'Ismingizni ingliz tilida ayting.',
      mode: 'read-aloud',
      phrase: 'Hello! My name is Ali. Nice to meet you!',
      translation:
        'Salom! Mening ismim Ali. Siz bilan tanishganimdan xursandman!',
      emoji: '🗣️',
      repetitions: 3,
      targetWords: ['Hello', 'name', 'Nice', 'meet'],
    },
    2,
  ),
  test(2, [
    mcq(
      'f2-q1',
      '“Mening ismim Ali” qanday bo‘ladi?',
      [
        'My name is Ali',
        'I name Ali',
        'Ali is my',
        'Name Ali I',
      ],
      'My name is Ali',
      'To‘g‘ri struktura: My name is + ism.',
    ),
    mcq(
      'f2-q2',
      '“My” so‘zining tarjimasi?',
      ['Mening', 'Men', 'Sening', 'Uning'],
      'Mening',
      'My — mening.',
    ),
    mcq(
      'f2-q3',
      '“I” nimani anglatadi?',
      ['Men', 'Sen', 'U', 'Biz'],
      'Men',
      'I — men.',
    ),
    mcq(
      'f2-q4',
      '“Nice to meet you” qachon ishlatiladi?',
      [
        'Tanishganda',
        'Uxlaganda',
        'Ovqatlanganda',
        'Xayrlashganda',
      ],
      'Tanishganda',
      'Nice to meet you — tanishganimdan xursandman.',
    ),
    trueFalse(
      'f2-q5',
      '“My name is...” o‘zini tanishtirishda ishlatiladi.',
      'true',
      'Bu o‘zini tanishtirishning asosiy iboralaridan biridir.',
    ),
  ]),
)

/* =========================================================
   03 — ALPHABET
========================================================= */

const lesson03 = baseLesson(
  3,
  'ABC',
  'Meet the English alphabet 🔤',
  '🔤',
  'Ingliz alifbosidagi harflar va ularning nomlarini o‘rganing.',
  ['English alphabet', 'Letter names', 'Spelling'],
  vocabulary(
    [
      {
        word: 'letter',
        translation: 'harf',
        emoji: '🔤',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'alphabet',
        translation: 'alifbo',
        emoji: '🔠',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'spell',
        translation: 'harflab aytmoq',
        emoji: '📝',
        category: 'general',
        partOfSpeech: 'verb',
      },
      {
        word: 'word',
        translation: 'so‘z',
        emoji: '📖',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'English',
        translation: 'ingliz tili',
        emoji: '🇬🇧',
        category: 'general',
        partOfSpeech: 'noun',
      },
    ],
    3,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🔤 The English Alphabet',
        content:
          'Ingliz tilida 26 ta harf bor. Har bir harfning o‘z nomi va tovushi mavjud.',
        emoji: '🔤',
      },
      3,
      1,
    ),
    explanation(
      {
        type: 'tip',
        title: '🧠 Spell it!',
        content:
          'Ism yoki so‘zni harflab aytishda harflarning nomlarini ketma-ket aytamiz.',
        emoji: '📝',
      },
      3,
      2,
    ),
  ],
  [
    example(
      {
        english: 'A — B — C',
        uzbek: 'A — B — C',
        emoji: '🔤',
      },
      3,
      1,
    ),
    example(
      {
        english: 'My name is Ali. A-L-I.',
        uzbek: 'Mening ismim Ali. A-L-I.',
        emoji: '🏷️',
      },
      3,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🔤 Find the letter',
        instruction: 'To‘g‘ri harfni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '“Apple” so‘zi qaysi harf bilan boshlanadi?',
        options: [
          { id: 'a', text: 'A', emoji: '🅰️' },
          { id: 'b', text: 'B', emoji: '🅱️' },
          { id: 'c', text: 'C', emoji: '©️' },
          { id: 'd', text: 'D', emoji: '🔤' },
        ],
        correctAnswer: 'A',
        explanation: 'Apple A harfi bilan boshlanadi.',
      },
      3,
      1,
    ),
    activity(
      {
        type: 'word-order',
        title: '🧩 Spell the word',
        instruction: 'Harflarni to‘g‘ri tartibga qo‘ying.',
        points: 10,
        difficulty: 'easy',
        question: 'ALI',
        words: ['A', 'L', 'I'],
        correctAnswer: 'A L I',
        explanation: 'Ali so‘zi A-L-I harflaridan tuziladi.',
      },
      3,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Alphabet practice',
      instruction:
        'A, B, C harflarini aniq talaffuz qilib takrorlang.',
      mode: 'pronunciation',
      phrase: 'A — B — C',
      emoji: '🔤',
      repetitions: 3,
      targetWords: ['A', 'B', 'C'],
    },
    3,
  ),
  test(3, [
    mcq(
      'f3-q1',
      'Ingliz alifbosida nechta harf bor?',
      ['26', '24', '28', '30'],
      '26',
      'Ingliz alifbosida 26 ta harf mavjud.',
      '🔤',
    ),
    mcq(
      'f3-q2',
      '“Apple” qaysi harf bilan boshlanadi?',
      ['A', 'B', 'C', 'D'],
      'A',
      'Apple A harfi bilan boshlanadi.',
      '🍎',
    ),
    mcq(
      'f3-q3',
      '“Spell” nimani anglatadi?',
      ['Harflab aytmoq', 'O‘qimoq', 'Yozmoq', 'Tinglamoq'],
      'Harflab aytmoq',
      'Spell — so‘zni harflab aytish.',
    ),
    trueFalse(
      'f3-q4',
      'Ingliz alifbosida 26 ta harf mavjud.',
      'true',
      'Standart English alphabet 26 ta harfdan iborat.',
    ),
    mcq(
      'f3-q5',
      '“Letter” nimani anglatadi?',
      ['Harf', 'So‘z', 'Gap', 'Kitob'],
      'Harf',
      'Letter — harf.',
    ),
  ]),
)

/* =========================================================
   04 — NUMBERS
========================================================= */

const lesson04 = baseLesson(
  4,
  'Numbers',
  'Count in English 🔢',
  '🔢',
  '1 dan 100 gacha sonlarni ingliz tilida tanish va aytishni boshlang.',
  ['Numbers 1–20', 'Counting', 'Age'],
  vocabulary(
    [
      {
        word: 'one',
        translation: 'bir',
        emoji: '1️⃣',
        category: 'number',
        partOfSpeech: 'noun',
      },
      {
        word: 'two',
        translation: 'ikki',
        emoji: '2️⃣',
        category: 'number',
        partOfSpeech: 'noun',
      },
      {
        word: 'three',
        translation: 'uch',
        emoji: '3️⃣',
        category: 'number',
        partOfSpeech: 'noun',
      },
      {
        word: 'ten',
        translation: 'o‘n',
        emoji: '🔟',
        category: 'number',
        partOfSpeech: 'noun',
      },
      {
        word: 'twenty',
        translation: 'yigirma',
        emoji: '2️⃣0️⃣',
        category: 'number',
        partOfSpeech: 'noun',
      },
    ],
    4,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🔢 Count with English',
        content:
          'Sonlarni ingliz tilida aytish kundalik hayotda juda ko‘p kerak bo‘ladi.',
        emoji: '🔢',
      },
      4,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I am ten years old.',
        uzbek: 'Men o‘n yoshdaman.',
        emoji: '🎂',
      },
      4,
      1,
    ),
    example(
      {
        english: 'I have two books.',
        uzbek: 'Menda ikkita kitob bor.',
        emoji: '📚',
      },
      4,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🔢 Count',
        instruction: 'Sonning inglizcha shaklini toping.',
        points: 10,
        difficulty: 'easy',
        question: '“3” ingliz tilida qanday?',
        options: [
          { id: 'a', text: 'Three' },
          { id: 'b', text: 'Two' },
          { id: 'c', text: 'Four' },
          { id: 'd', text: 'Five' },
        ],
        correctAnswer: 'Three',
        explanation: '3 = three.',
      },
      4,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🎂 How old?',
        instruction: 'Yoshni ifodalovchi gapni toping.',
        points: 10,
        difficulty: 'easy',
        question: '“Men 10 yoshdaman”',
        options: [
          { id: 'a', text: 'I am ten years old.' },
          { id: 'b', text: 'I have ten years.' },
          { id: 'c', text: 'I ten old.' },
          { id: 'd', text: 'Ten I am.' },
        ],
        correctAnswer: 'I am ten years old.',
        explanation:
          'Yoshni aytishda: I am + number + years old.',
      },
      4,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Count!',
      instruction: '1 dan 10 gacha ingliz tilida sanang.',
      mode: 'read-aloud',
      phrase:
        'One, two, three, four, five, six, seven, eight, nine, ten.',
      emoji: '🔢',
      repetitions: 2,
      targetWords: [
        'one',
        'two',
        'three',
        'four',
        'five',
      ],
    },
    4,
  ),
  test(4, [
    mcq(
      'f4-q1',
      '3 ingliz tilida qanday?',
      ['Three', 'Two', 'Four', 'Five'],
      'Three',
      '3 = three.',
    ),
    mcq(
      'f4-q2',
      '10 ingliz tilida qanday?',
      ['Ten', 'Two', 'Twenty', 'One'],
      'Ten',
      '10 = ten.',
    ),
    mcq(
      'f4-q3',
      '“Two” qaysi son?',
      ['2', '3', '4', '5'],
      '2',
      'Two = 2.',
    ),
    mcq(
      'f4-q4',
      '“I am ten years old” nimani bildiradi?',
      [
        'Men 10 yoshdaman',
        'Menda 10 kitob bor',
        'Men 10 ta kitobman',
        'Men 10 yoshli emasman',
      ],
      'Men 10 yoshdaman',
      'Bu gap yoshni bildiradi.',
    ),
    trueFalse(
      'f4-q5',
      '“Twenty” 20 sonini bildiradi.',
      'true',
      'Twenty = 20.',
    ),
  ]),
)

/* =========================================================
   05 — COLORS
========================================================= */

const lesson05 = baseLesson(
  5,
  'Colors',
  'See the world in English 🎨',
  '🎨',
  'Asosiy ranglarni ingliz tilida o‘rganing.',
  ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'],
  vocabulary(
    [
      {
        word: 'red',
        translation: 'qizil',
        emoji: '🔴',
        category: 'color',
        partOfSpeech: 'adjective',
      },
      {
        word: 'blue',
        translation: 'ko‘k',
        emoji: '🔵',
        category: 'color',
        partOfSpeech: 'adjective',
      },
      {
        word: 'green',
        translation: 'yashil',
        emoji: '🟢',
        category: 'color',
        partOfSpeech: 'adjective',
      },
      {
        word: 'yellow',
        translation: 'sariq',
        emoji: '🟡',
        category: 'color',
        partOfSpeech: 'adjective',
      },
      {
        word: 'black',
        translation: 'qora',
        emoji: '⚫',
        category: 'color',
        partOfSpeech: 'adjective',
      },
      {
        word: 'white',
        translation: 'oq',
        emoji: '⚪',
        category: 'color',
        partOfSpeech: 'adjective',
      },
    ],
    5,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🎨 Colors everywhere',
        content:
          'Ranglarni bilish narsalarni tasvirlash va kundalik suhbatda juda foydali.',
        emoji: '🌈',
      },
      5,
      1,
    ),
  ],
  [
    example(
      {
        english: 'The apple is red.',
        uzbek: 'Olma qizil.',
        emoji: '🍎',
        highlight: 'red',
      },
      5,
      1,
    ),
    example(
      {
        english: 'The sky is blue.',
        uzbek: 'Osmon ko‘k.',
        emoji: '🌤️',
        highlight: 'blue',
      },
      5,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '🎨 Pick the color',
        instruction: 'Qizil rangni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Which color is red?',
        emoji: '🔴',
        options: [
          { id: 'a', text: 'Red', emoji: '🔴' },
          { id: 'b', text: 'Blue', emoji: '🔵' },
          { id: 'c', text: 'Green', emoji: '🟢' },
          { id: 'd', text: 'Yellow', emoji: '🟡' },
        ],
        correctAnswer: 'Red',
        explanation: 'Red = qizil.',
      },
      5,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🌈 Complete',
        instruction: 'Gapni to‘ldiring.',
        points: 10,
        difficulty: 'easy',
        question: 'The sky is ____.',
        options: [
          { id: 'a', text: 'blue', emoji: '🔵' },
          { id: 'b', text: 'red', emoji: '🔴' },
          { id: 'c', text: 'black', emoji: '⚫' },
          { id: 'd', text: 'yellow', emoji: '🟡' },
        ],
        correctAnswer: 'blue',
        explanation: 'The sky is blue.',
      },
      5,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Colors around me',
      instruction: 'Atrofingizdagi ranglarni ayting.',
      mode: 'read-aloud',
      phrase: 'Red, blue, green, yellow, black, white.',
      emoji: '🎨',
      repetitions: 2,
      targetWords: ['red', 'blue', 'green', 'yellow'],
    },
    5,
  ),
  test(5, [
    mcq(
      'f5-q1',
      'Red qaysi rang?',
      ['Qizil', 'Ko‘k', 'Yashil', 'Sariq'],
      'Qizil',
      'Red = qizil.',
    ),
    mcq(
      'f5-q2',
      'Blue qaysi rang?',
      ['Ko‘k', 'Qora', 'Oq', 'Yashil'],
      'Ko‘k',
      'Blue = ko‘k.',
    ),
    mcq(
      'f5-q3',
      'Green qaysi rang?',
      ['Yashil', 'Qizil', 'Sariq', 'Qora'],
      'Yashil',
      'Green = yashil.',
    ),
    mcq(
      'f5-q4',
      'The sky is usually...',
      ['blue', 'red', 'black', 'yellow'],
      'blue',
      'The sky is commonly described as blue.',
    ),
    trueFalse(
      'f5-q5',
      'White oq rangni bildiradi.',
      'true',
      'White = oq.',
    ),
  ]),
)

/* =========================================================
   06 — FAMILY
========================================================= */

const lesson06 = baseLesson(
  6,
  'My Family',
  'Meet the family 👨‍👩‍👧',
  '👨‍👩‍👧',
  'Oila a’zolarini ingliz tilida aytishni o‘rganing.',
  ['Family members', 'My family', 'Possessive my'],
  vocabulary(
    [
      {
        word: 'mother',
        translation: 'ona',
        emoji: '👩',
        category: 'family',
        partOfSpeech: 'noun',
      },
      {
        word: 'father',
        translation: 'ota',
        emoji: '👨',
        category: 'family',
        partOfSpeech: 'noun',
      },
      {
        word: 'brother',
        translation: 'aka / uka',
        emoji: '👦',
        category: 'family',
        partOfSpeech: 'noun',
      },
      {
        word: 'sister',
        translation: 'opa / singil',
        emoji: '👧',
        category: 'family',
        partOfSpeech: 'noun',
      },
      {
        word: 'family',
        translation: 'oila',
        emoji: '👨‍👩‍👧‍👦',
        category: 'family',
        partOfSpeech: 'noun',
      },
    ],
    6,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '👨‍👩‍👧 Family',
        content:
          'Family — oila. Mother — ona, father — ota, brother — aka/uka, sister — opa/singil.',
        emoji: '❤️',
      },
      6,
      1,
    ),
  ],
  [
    example(
      {
        english: 'This is my mother.',
        uzbek: 'Bu mening onam.',
        emoji: '👩',
      },
      6,
      1,
    ),
    example(
      {
        english: 'I have one brother.',
        uzbek: 'Mening bitta akam/ukam bor.',
        emoji: '👦',
      },
      6,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '👨‍👩‍👧 Who is she?',
        instruction: 'To‘g‘ri so‘zni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '👩',
        options: [
          { id: 'a', text: 'Mother', emoji: '👩' },
          { id: 'b', text: 'Father', emoji: '👨' },
          { id: 'c', text: 'Brother', emoji: '👦' },
          { id: 'd', text: 'Sister', emoji: '👧' },
        ],
        correctAnswer: 'Mother',
        explanation: 'Mother = ona.',
      },
      6,
      1,
    ),
    activity(
      {
        type: 'sentence-builder',
        title: '🧩 Build',
        instruction: 'Gapni tuzing.',
        points: 10,
        difficulty: 'easy',
        question: 'Bu mening otam.',
        words: ['This', 'is', 'my', 'father'],
        correctAnswer: 'This is my father',
        explanation: 'This is my father.',
      },
      6,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 My family',
      instruction: 'Oilangiz haqida bitta gap ayting.',
      mode: 'read-aloud',
      phrase: 'This is my family.',
      translation: 'Bu mening oilam.',
      emoji: '❤️',
      repetitions: 3,
      targetWords: ['family', 'mother', 'father'],
    },
    6,
  ),
  test(6, [
    mcq(
      'f6-q1',
      'Mother nimani anglatadi?',
      ['Ona', 'Ota', 'Aka', 'Singil'],
      'Ona',
      'Mother = ona.',
    ),
    mcq(
      'f6-q2',
      'Father nimani anglatadi?',
      ['Ota', 'Ona', 'Uka', 'Opa'],
      'Ota',
      'Father = ota.',
    ),
    mcq(
      'f6-q3',
      'Brother nimani anglatadi?',
      ['Aka yoki uka', 'Ona', 'Ota', 'Oila'],
      'Aka yoki uka',
      'Brother erkak farzand yoki aka/ukani bildiradi.',
    ),
    mcq(
      'f6-q4',
      '“This is my mother” tarjimasi?',
      [
        'Bu mening onam',
        'Bu mening otam',
        'Bu mening akam',
        'Bu mening oilam',
      ],
      'Bu mening onam',
      'Mother = ona.',
    ),
    trueFalse(
      'f6-q5',
      'Family “oila” degani.',
      'true',
      'Family = oila.',
    ),
  ]),
)

/* =========================================================
   07 — MY HOME
========================================================= */

const lesson07 = baseLesson(
  7,
  'My Home',
  'Welcome to my house 🏠',
  '🏠',
  'Uy va xonalar nomlarini ingliz tilida o‘rganing.',
  ['House', 'Room', 'Kitchen', 'Bedroom', 'Bathroom'],
  vocabulary(
    [
      {
        word: 'house',
        translation: 'uy',
        emoji: '🏠',
        category: 'home',
        partOfSpeech: 'noun',
      },
      {
        word: 'room',
        translation: 'xona',
        emoji: '🚪',
        category: 'home',
        partOfSpeech: 'noun',
      },
      {
        word: 'kitchen',
        translation: 'oshxona',
        emoji: '🍳',
        category: 'home',
        partOfSpeech: 'noun',
      },
      {
        word: 'bedroom',
        translation: 'yotoqxona',
        emoji: '🛏️',
        category: 'home',
        partOfSpeech: 'noun',
      },
      {
        word: 'bathroom',
        translation: 'hammom',
        emoji: '🛁',
        category: 'home',
        partOfSpeech: 'noun',
      },
    ],
    7,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🏠 My Home',
        content:
          'House — uy. Room — xona. Kitchen — oshxona. Bedroom — yotoqxona.',
        emoji: '🏠',
      },
      7,
      1,
    ),
  ],
  [
    example(
      {
        english: 'This is my house.',
        uzbek: 'Bu mening uyim.',
        emoji: '🏠',
      },
      7,
      1,
    ),
    example(
      {
        english: 'This is my bedroom.',
        uzbek: 'Bu mening yotoqxonam.',
        emoji: '🛏️',
      },
      7,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '🏠 Find the room',
        instruction: 'Yotoqxonani toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Where do you sleep?',
        options: [
          { id: 'a', text: 'Bedroom', emoji: '🛏️' },
          { id: 'b', text: 'Kitchen', emoji: '🍳' },
          { id: 'c', text: 'Bathroom', emoji: '🛁' },
          { id: 'd', text: 'Garden', emoji: '🌳' },
        ],
        correctAnswer: 'Bedroom',
        explanation: 'Bedroom — yotoqxona.',
      },
      7,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🎯 Choose',
        instruction: 'To‘g‘ri tarjimani tanlang.',
        points: 10,
        difficulty: 'easy',
        question: 'Kitchen = ?',
        options: [
          { id: 'a', text: 'Oshxona' },
          { id: 'b', text: 'Yotoqxona' },
          { id: 'c', text: 'Hammom' },
          { id: 'd', text: 'Bog‘' },
        ],
        correctAnswer: 'Oshxona',
        explanation: 'Kitchen = oshxona.',
      },
      7,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 My home',
      instruction: 'Uyingiz haqida gapiring.',
      mode: 'read-aloud',
      phrase: 'This is my house. This is my bedroom.',
      translation: 'Bu mening uyim. Bu mening yotoqxonam.',
      emoji: '🏠',
      repetitions: 2,
      targetWords: ['house', 'bedroom'],
    },
    7,
  ),
  test(7, [
    mcq('f7-q1', 'House = ?', ['Uy', 'Xona', 'Oshxona', 'Bog‘'], 'Uy', 'House = uy.'),
    mcq('f7-q2', 'Kitchen = ?', ['Oshxona', 'Hammom', 'Yotoqxona', 'Uy'], 'Oshxona', 'Kitchen = oshxona.'),
    mcq('f7-q3', 'Bedroom = ?', ['Yotoqxona', 'Oshxona', 'Hammom', 'Mehmonxona'], 'Yotoqxona', 'Bedroom = yotoqxona.'),
    mcq('f7-q4', 'Where do you sleep?', ['Bedroom', 'Kitchen', 'Bathroom', 'Garden'], 'Bedroom', 'Odatda bedroomda uxlaymiz.'),
    trueFalse('f7-q5', 'Room “xona” degani.', 'true', 'Room = xona.'),
  ]),
)

/* =========================================================
   08 — SCHOOL
========================================================= */

const lesson08 = baseLesson(
  8,
  'At School',
  'English at school 🎒',
  '🎒',
  'Maktabdagi asosiy buyumlarni ingliz tilida o‘rganing.',
  ['Book', 'Pen', 'Pencil', 'Bag', 'Teacher'],
  vocabulary(
    [
      {
        word: 'book',
        translation: 'kitob',
        emoji: '📚',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'pen',
        translation: 'ruchka',
        emoji: '🖊️',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'pencil',
        translation: 'qalam',
        emoji: '✏️',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'bag',
        translation: 'sumka',
        emoji: '🎒',
        category: 'school',
        partOfSpeech: 'noun',
      },
      {
        word: 'teacher',
        translation: 'o‘qituvchi',
        emoji: '👩‍🏫',
        category: 'school',
        partOfSpeech: 'noun',
      },
    ],
    8,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🎒 At School',
        content:
          'Maktabdagi narsalarni ingliz tilida bilish oddiy gaplarni tuzishga yordam beradi.',
        emoji: '🏫',
      },
      8,
      1,
    ),
  ],
  [
    example(
      {
        english: 'This is my book.',
        uzbek: 'Bu mening kitobim.',
        emoji: '📚',
      },
      8,
      1,
    ),
    example(
      {
        english: 'I have a pencil.',
        uzbek: 'Menda qalam bor.',
        emoji: '✏️',
      },
      8,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '✏️ What is it?',
        instruction: 'Rasmga mos so‘zni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '✏️',
        options: [
          { id: 'a', text: 'Pencil', emoji: '✏️' },
          { id: 'b', text: 'Book', emoji: '📚' },
          { id: 'c', text: 'Bag', emoji: '🎒' },
          { id: 'd', text: 'Pen', emoji: '🖊️' },
        ],
        correctAnswer: 'Pencil',
        explanation: 'Pencil = qalam.',
      },
      8,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🎒 School words',
        instruction: 'Tarjimani toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Teacher = ?',
        options: [
          { id: 'a', text: 'O‘qituvchi' },
          { id: 'b', text: 'O‘quvchi' },
          { id: 'c', text: 'Kitob' },
          { id: 'd', text: 'Sumka' },
        ],
        correctAnswer: 'O‘qituvchi',
        explanation: 'Teacher = o‘qituvchi.',
      },
      8,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 My school bag',
      instruction: 'Sumkangizdagi narsalar haqida gapiring.',
      mode: 'read-aloud',
      phrase: 'I have a book and a pencil.',
      translation: 'Menda kitob va qalam bor.',
      emoji: '🎒',
      repetitions: 3,
      targetWords: ['book', 'pencil', 'have'],
    },
    8,
  ),
  test(8, [
    mcq('f8-q1', 'Book = ?', ['Kitob', 'Qalam', 'Sumka', 'Ruchka'], 'Kitob', 'Book = kitob.'),
    mcq('f8-q2', 'Pencil = ?', ['Qalam', 'Kitob', 'O‘qituvchi', 'Sumka'], 'Qalam', 'Pencil = qalam.'),
    mcq('f8-q3', 'Teacher = ?', ['O‘qituvchi', 'O‘quvchi', 'Kitob', 'Maktab'], 'O‘qituvchi', 'Teacher = o‘qituvchi.'),
    mcq('f8-q4', '“I have a book” tarjimasi?', ['Menda kitob bor', 'Men kitobman', 'Men kitob o‘qidim', 'Kitob mening'], 'Menda kitob bor', 'Have egalikni ifodalashda ishlatiladi.'),
    trueFalse('f8-q5', 'Bag “sumka” degani.', 'true', 'Bag = sumka.'),
  ]),
)

/* =========================================================
   09 — ANIMALS
========================================================= */

const lesson09 = baseLesson(
  9,
  'Animals',
  'Meet the animals 🐶',
  '🐶',
  'Hayvonlarning inglizcha nomlarini o‘rganing.',
  ['Dog', 'Cat', 'Bird', 'Fish', 'Horse'],
  vocabulary(
    [
      { word: 'dog', translation: 'it', emoji: '🐶', category: 'animal', partOfSpeech: 'noun' },
      { word: 'cat', translation: 'mushuk', emoji: '🐱', category: 'animal', partOfSpeech: 'noun' },
      { word: 'bird', translation: 'qush', emoji: '🐦', category: 'animal', partOfSpeech: 'noun' },
      { word: 'fish', translation: 'baliq', emoji: '🐟', category: 'animal', partOfSpeech: 'noun' },
      { word: 'horse', translation: 'ot', emoji: '🐴', category: 'animal', partOfSpeech: 'noun' },
    ],
    9,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🐾 Animal World',
        content:
          'Hayvonlarni rasm bilan bog‘lab o‘rganish yangi so‘zlarni tezroq eslab qolishga yordam beradi.',
        emoji: '🐾',
      },
      9,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I have a cat.',
        uzbek: 'Menda mushuk bor.',
        emoji: '🐱',
      },
      9,
      1,
    ),
    example(
      {
        english: 'The dog is big.',
        uzbek: 'It katta.',
        emoji: '🐶',
      },
      9,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '🐾 Who is it?',
        instruction: 'Hayvonni aniqlang.',
        points: 10,
        difficulty: 'easy',
        question: '🐱',
        options: [
          { id: 'a', text: 'Cat', emoji: '🐱' },
          { id: 'b', text: 'Dog', emoji: '🐶' },
          { id: 'c', text: 'Bird', emoji: '🐦' },
          { id: 'd', text: 'Horse', emoji: '🐴' },
        ],
        correctAnswer: 'Cat',
        explanation: 'Cat = mushuk.',
      },
      9,
      1,
    ),
    activity(
      {
        type: 'matching',
        title: '🧩 Match',
        instruction: 'So‘zlarni ma’nosi bilan moslang.',
        points: 10,
        difficulty: 'easy',
        question: 'Match the animals.',
        pairs: [
          { left: 'dog', right: 'it' },
          { left: 'cat', right: 'mushuk' },
          { left: 'fish', right: 'baliq' },
        ],
        correctAnswer: ['dog-it', 'cat-mushuk', 'fish-baliq'],
        explanation: 'Har bir hayvonni to‘g‘ri tarjimasi bilan bog‘lang.',
      },
      9,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Animal sounds',
      instruction: 'Hayvonlarni ingliz tilida ayting.',
      mode: 'read-aloud',
      phrase: 'Dog, cat, bird, fish, horse.',
      emoji: '🐾',
      repetitions: 2,
      targetWords: ['dog', 'cat', 'bird', 'fish'],
    },
    9,
  ),
  test(9, [
    mcq('f9-q1', 'Dog = ?', ['It', 'Mushuk', 'Ot', 'Baliq'], 'It', 'Dog = it.'),
    mcq('f9-q2', 'Cat = ?', ['Mushuk', 'It', 'Qush', 'Ot'], 'Mushuk', 'Cat = mushuk.'),
    mcq('f9-q3', 'Fish = ?', ['Baliq', 'Qush', 'It', 'Ot'], 'Baliq', 'Fish = baliq.'),
    mcq('f9-q4', '🐴 qaysi hayvon?', ['Horse', 'Bird', 'Cat', 'Fish'], 'Horse', 'Horse = ot.'),
    trueFalse('f9-q5', 'Bird “qush” degani.', 'true', 'Bird = qush.'),
  ]),
)

/* =========================================================
   10 — FOOD
========================================================= */

const lesson10 = baseLesson(
  10,
  'Food & Drinks',
  'Let’s eat! 🍎',
  '🍎',
  'Oziq-ovqat va ichimliklarning asosiy nomlarini o‘rganing.',
  ['Apple', 'Bread', 'Water', 'Milk', 'Tea'],
  vocabulary(
    [
      { word: 'apple', translation: 'olma', emoji: '🍎', category: 'food', partOfSpeech: 'noun' },
      { word: 'bread', translation: 'non', emoji: '🍞', category: 'food', partOfSpeech: 'noun' },
      { word: 'water', translation: 'suv', emoji: '💧', category: 'food', partOfSpeech: 'noun' },
      { word: 'milk', translation: 'sut', emoji: '🥛', category: 'food', partOfSpeech: 'noun' },
      { word: 'tea', translation: 'choy', emoji: '🍵', category: 'food', partOfSpeech: 'noun' },
    ],
    10,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🍎 Food around us',
        content:
          'Food so‘zlari kundalik suhbatning eng muhim qismlaridan biridir.',
        emoji: '🍽️',
      },
      10,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I like apples.',
        uzbek: 'Men olmalarni yaxshi ko‘raman.',
        emoji: '🍎',
      },
      10,
      1,
    ),
    example(
      {
        english: 'I drink water.',
        uzbek: 'Men suv ichaman.',
        emoji: '💧',
      },
      10,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '🍎 What is it?',
        instruction: 'Rasmga mos so‘zni toping.',
        points: 10,
        difficulty: 'easy',
        question: '🍎',
        options: [
          { id: 'a', text: 'Apple', emoji: '🍎' },
          { id: 'b', text: 'Bread', emoji: '🍞' },
          { id: 'c', text: 'Milk', emoji: '🥛' },
          { id: 'd', text: 'Tea', emoji: '🍵' },
        ],
        correctAnswer: 'Apple',
        explanation: 'Apple = olma.',
      },
      10,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '💧 Choose',
        instruction: 'Ichimlikni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: 'Which one is a drink?',
        options: [
          { id: 'a', text: 'Water', emoji: '💧' },
          { id: 'b', text: 'Bread', emoji: '🍞' },
          { id: 'c', text: 'Apple', emoji: '🍎' },
          { id: 'd', text: 'Book', emoji: '📚' },
        ],
        correctAnswer: 'Water',
        explanation: 'Water — suv va ichimlik.',
      },
      10,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 I like...',
      instruction: 'O‘zingiz yoqtiradigan ovqat haqida ayting.',
      mode: 'read-aloud',
      phrase: 'I like apples. I drink water.',
      translation: 'Men olmalarni yaxshi ko‘raman. Men suv ichaman.',
      emoji: '🍎',
      repetitions: 2,
      targetWords: ['like', 'apples', 'drink', 'water'],
    },
    10,
  ),
  test(10, [
    mcq('f10-q1', 'Apple = ?', ['Olma', 'Non', 'Suv', 'Sut'], 'Olma', 'Apple = olma.'),
    mcq('f10-q2', 'Bread = ?', ['Non', 'Olma', 'Choy', 'Suv'], 'Non', 'Bread = non.'),
    mcq('f10-q3', 'Water = ?', ['Suv', 'Sut', 'Choy', 'Non'], 'Suv', 'Water = suv.'),
    mcq('f10-q4', '“I drink water” tarjimasi?', ['Men suv ichaman', 'Men suv yeyman', 'Men suv ko‘raman', 'Menda suv yo‘q'], 'Men suv ichaman', 'Drink — ichmoq.'),
    trueFalse('f10-q5', 'Milk “sut” degani.', 'true', 'Milk = sut.'),
  ]),
)

/* =========================================================
   11 — CLOTHES
========================================================= */

const lesson11 = baseLesson(
  11,
  'Clothes',
  'What are you wearing? 👕',
  '👕',
  'Kiyimlarning asosiy nomlarini o‘rganing.',
  ['Shirt', 'T-shirt', 'Shoes', 'Hat', 'Dress'],
  vocabulary(
    [
      { word: 'shirt', translation: 'ko‘ylak', emoji: '👔', category: 'clothes', partOfSpeech: 'noun' },
      { word: 'T-shirt', translation: 'futbolka', emoji: '👕', category: 'clothes', partOfSpeech: 'noun' },
      { word: 'shoes', translation: 'poyabzal', emoji: '👟', category: 'clothes', partOfSpeech: 'noun' },
      { word: 'hat', translation: 'shlyapa / bosh kiyim', emoji: '🧢', category: 'clothes', partOfSpeech: 'noun' },
      { word: 'dress', translation: 'ko‘ylak', emoji: '👗', category: 'clothes', partOfSpeech: 'noun' },
    ],
    11,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '👕 Clothes',
        content:
          'Kiyimlarni nomlash va ularning rangini aytish orqali sodda tasvirlar tuzish mumkin.',
        emoji: '👕',
      },
      11,
      1,
    ),
  ],
  [
    example(
      {
        english: 'My T-shirt is blue.',
        uzbek: 'Mening futbolkam ko‘k.',
        emoji: '👕',
      },
      11,
      1,
    ),
    example(
      {
        english: 'These are my shoes.',
        uzbek: 'Bular mening poyabzalim.',
        emoji: '👟',
      },
      11,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '👟 Find it',
        instruction: 'Poyabzalni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Which one is shoes?',
        options: [
          { id: 'a', text: 'Shoes', emoji: '👟' },
          { id: 'b', text: 'Hat', emoji: '🧢' },
          { id: 'c', text: 'Dress', emoji: '👗' },
          { id: 'd', text: 'T-shirt', emoji: '👕' },
        ],
        correctAnswer: 'Shoes',
        explanation: 'Shoes = poyabzal.',
      },
      11,
      1,
    ),
    activity(
      {
        type: 'sentence-builder',
        title: '🧩 Describe it',
        instruction: 'Gapni tuzing.',
        points: 10,
        difficulty: 'easy',
        question: 'Mening futbolkam ko‘k.',
        words: ['My', 'T-shirt', 'is', 'blue'],
        correctAnswer: 'My T-shirt is blue',
        explanation: 'My T-shirt is blue.',
      },
      11,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 What are you wearing?',
      instruction: 'Kiyimingiz haqida bitta gap ayting.',
      mode: 'read-aloud',
      phrase: 'My T-shirt is blue.',
      translation: 'Mening futbolkam ko‘k.',
      emoji: '👕',
      repetitions: 3,
      targetWords: ['T-shirt', 'blue'],
    },
    11,
  ),
  test(11, [
    mcq('f11-q1', 'T-shirt = ?', ['Futbolka', 'Poyabzal', 'Shlyapa', 'Ko‘ylak'], 'Futbolka', 'T-shirt = futbolka.'),
    mcq('f11-q2', 'Shoes = ?', ['Poyabzal', 'Futbolka', 'Shlyapa', 'Ko‘ylak'], 'Poyabzal', 'Shoes = poyabzal.'),
    mcq('f11-q3', 'Hat = ?', ['Bosh kiyim', 'Poyabzal', 'Futbolka', 'Shim'], 'Bosh kiyim', 'Hat = bosh kiyim.'),
    mcq('f11-q4', '“My T-shirt is blue” tarjimasi?', ['Mening futbolkam ko‘k', 'Mening poyabzalim ko‘k', 'Mening uyim ko‘k', 'Mening ko‘ylagim qizil'], 'Mening futbolkam ko‘k', 'T-shirt = futbolka, blue = ko‘k.'),
    trueFalse('f11-q5', 'Shoes poyabzalni bildiradi.', 'true', 'Shoes = poyabzal.'),
  ]),
)

/* =========================================================
   12 — BODY
========================================================= */

const lesson12 = baseLesson(
  12,
  'My Body',
  'Learn body parts 🧍',
  '🧍',
  'Tana a’zolarining asosiy nomlarini o‘rganing.',
  ['Head', 'Eyes', 'Ears', 'Nose', 'Mouth'],
  vocabulary(
    [
      { word: 'head', translation: 'bosh', emoji: '🙂', category: 'body', partOfSpeech: 'noun' },
      { word: 'eye', translation: 'ko‘z', emoji: '👁️', category: 'body', partOfSpeech: 'noun' },
      { word: 'ear', translation: 'quloq', emoji: '👂', category: 'body', partOfSpeech: 'noun' },
      { word: 'nose', translation: 'burun', emoji: '👃', category: 'body', partOfSpeech: 'noun' },
      { word: 'mouth', translation: 'og‘iz', emoji: '👄', category: 'body', partOfSpeech: 'noun' },
    ],
    12,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🧍 My Body',
        content:
          'Tana a’zolarini rasm bilan bog‘lab yodlash oson.',
        emoji: '🧠',
      },
      12,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I have two eyes.',
        uzbek: 'Mening ikkita ko‘zim bor.',
        emoji: '👀',
      },
      12,
      1,
    ),
    example(
      {
        english: 'This is my nose.',
        uzbek: 'Bu mening burnim.',
        emoji: '👃',
      },
      12,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '👀 Find it',
        instruction: 'Ko‘zni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Which word means ko‘z?',
        options: [
          { id: 'a', text: 'Eye', emoji: '👁️' },
          { id: 'b', text: 'Ear', emoji: '👂' },
          { id: 'c', text: 'Nose', emoji: '👃' },
          { id: 'd', text: 'Mouth', emoji: '👄' },
        ],
        correctAnswer: 'Eye',
        explanation: 'Eye = ko‘z.',
      },
      12,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🧠 Remember',
        instruction: 'Tarjimani toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Nose = ?',
        options: [
          { id: 'a', text: 'Burun' },
          { id: 'b', text: 'Quloq' },
          { id: 'c', text: 'Ko‘z' },
          { id: 'd', text: 'Og‘iz' },
        ],
        correctAnswer: 'Burun',
        explanation: 'Nose = burun.',
      },
      12,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 My body',
      instruction: 'Tana a’zolarini ayting.',
      mode: 'read-aloud',
      phrase: 'Head, eyes, ears, nose, mouth.',
      emoji: '🧍',
      repetitions: 2,
      targetWords: ['head', 'eyes', 'ears', 'nose'],
    },
    12,
  ),
  test(12, [
    mcq('f12-q1', 'Eye = ?', ['Ko‘z', 'Quloq', 'Burun', 'Og‘iz'], 'Ko‘z', 'Eye = ko‘z.'),
    mcq('f12-q2', 'Ear = ?', ['Quloq', 'Ko‘z', 'Burun', 'Bosh'], 'Quloq', 'Ear = quloq.'),
    mcq('f12-q3', 'Nose = ?', ['Burun', 'Og‘iz', 'Ko‘z', 'Quloq'], 'Burun', 'Nose = burun.'),
    mcq('f12-q4', 'Mouth = ?', ['Og‘iz', 'Bosh', 'Quloq', 'Burun'], 'Og‘iz', 'Mouth = og‘iz.'),
    trueFalse('f12-q5', 'Head “bosh” degani.', 'true', 'Head = bosh.'),
  ]),
)

/* =========================================================
   13 — FEELINGS
========================================================= */

const lesson13 = baseLesson(
  13,
  'Feelings',
  'How do you feel? 😊',
  '😊',
  'His-tuyg‘ularni ingliz tilida ifodalashni o‘rganing.',
  ['Happy', 'Sad', 'Angry', 'Tired', 'Fine'],
  vocabulary(
    [
      { word: 'happy', translation: 'xursand', emoji: '😊', category: 'emotion', partOfSpeech: 'adjective' },
      { word: 'sad', translation: 'xafa', emoji: '😢', category: 'emotion', partOfSpeech: 'adjective' },
      { word: 'angry', translation: 'jahli chiqqan', emoji: '😠', category: 'emotion', partOfSpeech: 'adjective' },
      { word: 'tired', translation: 'charchagan', emoji: '😴', category: 'emotion', partOfSpeech: 'adjective' },
      { word: 'fine', translation: 'yaxshi', emoji: '🙂', category: 'emotion', partOfSpeech: 'adjective' },
    ],
    13,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '😊 How do you feel?',
        content:
          '“How are you?” savoliga his-tuyg‘uni bildiruvchi so‘zlar bilan javob beramiz.',
        emoji: '💬',
      },
      13,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I am happy.',
        uzbek: 'Men xursandman.',
        emoji: '😊',
      },
      13,
      1,
    ),
    example(
      {
        english: 'I am tired.',
        uzbek: 'Men charchaganman.',
        emoji: '😴',
      },
      13,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '😊 Match the feeling',
        instruction: 'Rasmga mos so‘zni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '😊',
        options: [
          { id: 'a', text: 'Happy', emoji: '😊' },
          { id: 'b', text: 'Sad', emoji: '😢' },
          { id: 'c', text: 'Angry', emoji: '😠' },
          { id: 'd', text: 'Tired', emoji: '😴' },
        ],
        correctAnswer: 'Happy',
        explanation: 'Happy = xursand.',
      },
      13,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '💬 Answer',
        instruction: 'Savolga mos javobni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'How are you?',
        options: [
          { id: 'a', text: 'I am fine.' },
          { id: 'b', text: 'My name book.' },
          { id: 'c', text: 'I house.' },
          { id: 'd', text: 'Goodbye morning.' },
        ],
        correctAnswer: 'I am fine.',
        explanation: 'How are you? — I am fine.',
      },
      13,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 How are you?',
      instruction: 'Savol va javobni takrorlang.',
      mode: 'conversation',
      phrase: 'How are you? — I am fine, thank you!',
      translation: 'Qalaysiz? — Yaxshiman, rahmat!',
      emoji: '😊',
      repetitions: 3,
      targetWords: ['How', 'fine', 'thank'],
    },
    13,
  ),
  test(13, [
    mcq('f13-q1', 'Happy = ?', ['Xursand', 'Xafa', 'Charchagan', 'Jahldor'], 'Xursand', 'Happy = xursand.'),
    mcq('f13-q2', 'Sad = ?', ['Xafa', 'Xursand', 'Yaxshi', 'Charchagan'], 'Xafa', 'Sad = xafa.'),
    mcq('f13-q3', 'Tired = ?', ['Charchagan', 'Xursand', 'Jahldor', 'Yaxshi'], 'Charchagan', 'Tired = charchagan.'),
    mcq('f13-q4', 'How are you? ga mos javob?', ['I am fine.', 'My name is Ali.', 'Good morning.', 'This is a book.'], 'I am fine.', 'How are you? holatni so‘raydi.'),
    trueFalse('f13-q5', 'Happy xursand degani.', 'true', 'Happy = xursand.'),
  ]),
)

/* =========================================================
   14 — WEATHER
========================================================= */

const lesson14 = baseLesson(
  14,
  'Weather',
  'What’s the weather like? ☀️',
  '☀️',
  'Ob-havo haqida sodda gaplar tuzishni o‘rganing.',
  ['Sunny', 'Rainy', 'Cold', 'Hot', 'Windy'],
  vocabulary(
    [
      { word: 'sunny', translation: 'quyoshli', emoji: '☀️', category: 'weather', partOfSpeech: 'adjective' },
      { word: 'rainy', translation: 'yomg‘irli', emoji: '🌧️', category: 'weather', partOfSpeech: 'adjective' },
      { word: 'cold', translation: 'sovuq', emoji: '🥶', category: 'weather', partOfSpeech: 'adjective' },
      { word: 'hot', translation: 'issiq', emoji: '🔥', category: 'weather', partOfSpeech: 'adjective' },
      { word: 'windy', translation: 'shamolli', emoji: '💨', category: 'weather', partOfSpeech: 'adjective' },
    ],
    14,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '☀️ Talk about weather',
        content:
          'Ob-havo haqida gapirganda “It is...” strukturasidan foydalanishni boshlaymiz.',
        emoji: '🌤️',
      },
      14,
      1,
    ),
  ],
  [
    example(
      {
        english: 'It is sunny today.',
        uzbek: 'Bugun havo quyoshli.',
        emoji: '☀️',
      },
      14,
      1,
    ),
    example(
      {
        english: 'It is cold.',
        uzbek: 'Havo sovuq.',
        emoji: '🥶',
      },
      14,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '☀️ Weather',
        instruction: 'Rasmga mos ob-havoni toping.',
        points: 10,
        difficulty: 'easy',
        question: '☀️',
        options: [
          { id: 'a', text: 'Sunny', emoji: '☀️' },
          { id: 'b', text: 'Rainy', emoji: '🌧️' },
          { id: 'c', text: 'Cold', emoji: '🥶' },
          { id: 'd', text: 'Windy', emoji: '💨' },
        ],
        correctAnswer: 'Sunny',
        explanation: 'Sunny = quyoshli.',
      },
      14,
      1,
    ),
    activity(
      {
        type: 'sentence-builder',
        title: '🧩 Build',
        instruction: 'Gapni tuzing.',
        points: 10,
        difficulty: 'easy',
        question: 'Bugun havo quyoshli.',
        words: ['It', 'is', 'sunny', 'today'],
        correctAnswer: 'It is sunny today',
        explanation: 'It is sunny today.',
      },
      14,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Weather report',
      instruction: 'Bugungi ob-havoni ayting.',
      mode: 'read-aloud',
      phrase: 'It is sunny today.',
      translation: 'Bugun havo quyoshli.',
      emoji: '☀️',
      repetitions: 3,
      targetWords: ['sunny', 'today'],
    },
    14,
  ),
  test(14, [
    mcq('f14-q1', 'Sunny = ?', ['Quyoshli', 'Yomg‘irli', 'Sovuq', 'Shamolli'], 'Quyoshli', 'Sunny = quyoshli.'),
    mcq('f14-q2', 'Rainy = ?', ['Yomg‘irli', 'Quyoshli', 'Issiq', 'Qorli'], 'Yomg‘irli', 'Rainy = yomg‘irli.'),
    mcq('f14-q3', 'Cold = ?', ['Sovuq', 'Issiq', 'Shamolli', 'Quyoshli'], 'Sovuq', 'Cold = sovuq.'),
    mcq('f14-q4', '“It is sunny today” tarjimasi?', ['Bugun havo quyoshli', 'Bugun havo sovuq', 'Bugun yomg‘ir yog‘moqda', 'Bugun shamol bor'], 'Bugun havo quyoshli', 'Sunny = quyoshli.'),
    trueFalse('f14-q5', 'Hot “issiq” degani.', 'true', 'Hot = issiq.'),
  ]),
)

/* =========================================================
   15 — DAYS & MONTHS
========================================================= */

const lesson15 = baseLesson(
  15,
  'Days & Months',
  'Time on the calendar 📅',
  '📅',
  'Hafta kunlari va oylarning asosiy nomlarini o‘rganing.',
  ['Monday', 'Tuesday', 'Friday', 'January', 'March'],
  vocabulary(
    [
      { word: 'Monday', translation: 'dushanba', emoji: '📅', category: 'time', partOfSpeech: 'noun' },
      { word: 'Tuesday', translation: 'seshanba', emoji: '📅', category: 'time', partOfSpeech: 'noun' },
      { word: 'Friday', translation: 'juma', emoji: '📅', category: 'time', partOfSpeech: 'noun' },
      { word: 'January', translation: 'yanvar', emoji: '❄️', category: 'time', partOfSpeech: 'noun' },
      { word: 'March', translation: 'mart', emoji: '🌱', category: 'time', partOfSpeech: 'noun' },
    ],
    15,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '📅 Calendar English',
        content:
          'Hafta kunlari va oylar ingliz tilida bosh harf bilan yoziladi.',
        emoji: '📅',
      },
      15,
      1,
    ),
  ],
  [
    example(
      {
        english: 'Today is Monday.',
        uzbek: 'Bugun dushanba.',
        emoji: '📅',
      },
      15,
      1,
    ),
    example(
      {
        english: 'My birthday is in March.',
        uzbek: 'Mening tug‘ilgan kunim mart oyida.',
        emoji: '🎂',
      },
      15,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '📅 Day',
        instruction: 'Hafta kunini toping.',
        points: 10,
        difficulty: 'easy',
        question: '“Monday” qaysi kun?',
        options: [
          { id: 'a', text: 'Dushanba' },
          { id: 'b', text: 'Seshanba' },
          { id: 'c', text: 'Juma' },
          { id: 'd', text: 'Yakshanba' },
        ],
        correctAnswer: 'Dushanba',
        explanation: 'Monday = dushanba.',
      },
      15,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🎂 Month',
        instruction: 'Oyni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'March = ?',
        options: [
          { id: 'a', text: 'Mart' },
          { id: 'b', text: 'Yanvar' },
          { id: 'c', text: 'May' },
          { id: 'd', text: 'Iyul' },
        ],
        correctAnswer: 'Mart',
        explanation: 'March = mart.',
      },
      15,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Calendar',
      instruction: 'Bugungi kunni ingliz tilida ayting.',
      mode: 'read-aloud',
      phrase: 'Today is Monday.',
      translation: 'Bugun dushanba.',
      emoji: '📅',
      repetitions: 3,
      targetWords: ['today', 'Monday'],
    },
    15,
  ),
  test(15, [
    mcq('f15-q1', 'Monday = ?', ['Dushanba', 'Seshanba', 'Juma', 'Yakshanba'], 'Dushanba', 'Monday = dushanba.'),
    mcq('f15-q2', 'Tuesday = ?', ['Seshanba', 'Dushanba', 'Juma', 'Chorshanba'], 'Seshanba', 'Tuesday = seshanba.'),
    mcq('f15-q3', 'Friday = ?', ['Juma', 'Dushanba', 'Shanba', 'Yakshanba'], 'Juma', 'Friday = juma.'),
    mcq('f15-q4', 'March = ?', ['Mart', 'Yanvar', 'Aprel', 'May'], 'Mart', 'March = mart.'),
    trueFalse('f15-q5', 'January yanvar oyini bildiradi.', 'true', 'January = yanvar.'),
  ]),
)

/* =========================================================
   16 — TIME
========================================================= */

const lesson16 = baseLesson(
  16,
  'What Time?',
  'Let’s tell the time ⏰',
  '⏰',
  'Vaqt haqida oddiy savol-javoblarni o‘rganing.',
  ['Time', 'O’clock', 'Morning', 'Afternoon'],
  vocabulary(
    [
      { word: 'time', translation: 'vaqt', emoji: '⏰', category: 'time', partOfSpeech: 'noun' },
      { word: 'clock', translation: 'soat', emoji: '🕐', category: 'time', partOfSpeech: 'noun' },
      { word: 'morning', translation: 'ertalab', emoji: '🌅', category: 'time', partOfSpeech: 'noun' },
      { word: 'afternoon', translation: 'tushdan keyin', emoji: '☀️', category: 'time', partOfSpeech: 'noun' },
      { word: 'today', translation: 'bugun', emoji: '📅', category: 'time', partOfSpeech: 'adverb' },
    ],
    16,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '⏰ What time is it?',
        content:
          'Vaqtni so‘rash uchun “What time is it?” savolidan foydalanamiz.',
        emoji: '⏰',
      },
      16,
      1,
    ),
  ],
  [
    example(
      {
        english: 'What time is it?',
        uzbek: 'Soat necha?',
        emoji: '⏰',
      },
      16,
      1,
    ),
    example(
      {
        english: 'It is three o’clock.',
        uzbek: 'Soat uch.',
        emoji: '🕒',
      },
      16,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '⏰ Ask the time',
        instruction: 'To‘g‘ri savolni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '“Soat necha?”',
        options: [
          { id: 'a', text: 'What time is it?' },
          { id: 'b', text: 'What name is it?' },
          { id: 'c', text: 'Where time?' },
          { id: 'd', text: 'How name?' },
        ],
        correctAnswer: 'What time is it?',
        explanation: 'Vaqtni so‘rashning asosiy shakli shu.',
      },
      16,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🕒 Answer',
        instruction: 'Mos javobni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'What time is it? 🕒',
        options: [
          { id: 'a', text: 'It is three o’clock.' },
          { id: 'b', text: 'My name is Ali.' },
          { id: 'c', text: 'I am fine.' },
          { id: 'd', text: 'It is blue.' },
        ],
        correctAnswer: 'It is three o’clock.',
        explanation: 'Soatga javob berishda It is ... o’clock ishlatiladi.',
      },
      16,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Tell the time',
      instruction: 'Vaqtni ingliz tilida ayting.',
      mode: 'read-aloud',
      phrase: 'It is three o’clock.',
      translation: 'Soat uch.',
      emoji: '⏰',
      repetitions: 3,
      targetWords: ['three', 'o’clock'],
    },
    16,
  ),
  test(16, [
    mcq('f16-q1', '“Soat necha?” qanday?', ['What time is it?', 'What is your name?', 'Where are you?', 'How are you?'], 'What time is it?', 'Bu vaqtni so‘rash savoli.'),
    mcq('f16-q2', '“It is three o’clock” = ?', ['Soat uch', 'Soat besh', 'Bugun uch', 'Uchta soat'], 'Soat uch', 'Three o’clock = soat uch.'),
    mcq('f16-q3', 'Morning = ?', ['Ertalab', 'Kechqurun', 'Tushdan keyin', 'Tun'], 'Ertalab', 'Morning = ertalab.'),
    mcq('f16-q4', 'Clock = ?', ['Soat', 'Vaqt', 'Kun', 'Oy'], 'Soat', 'Clock = soat.'),
    trueFalse('f16-q5', '“What time is it?” vaqtni so‘raydi.', 'true', 'Bu savol soatni so‘rash uchun ishlatiladi.'),
  ]),
)

/* =========================================================
   17 — PLACES
========================================================= */

const lesson17 = baseLesson(
  17,
  'Places',
  'Where are we? 📍',
  '📍',
  'Kundalik joylarning inglizcha nomlarini o‘rganing.',
  ['School', 'Park', 'Shop', 'Hospital', 'Home'],
  vocabulary(
    [
      { word: 'school', translation: 'maktab', emoji: '🏫', category: 'place', partOfSpeech: 'noun' },
      { word: 'park', translation: 'bog‘', emoji: '🌳', category: 'place', partOfSpeech: 'noun' },
      { word: 'shop', translation: 'do‘kon', emoji: '🛒', category: 'place', partOfSpeech: 'noun' },
      { word: 'hospital', translation: 'kasalxona', emoji: '🏥', category: 'place', partOfSpeech: 'noun' },
      { word: 'home', translation: 'uy', emoji: '🏠', category: 'place', partOfSpeech: 'noun' },
    ],
    17,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '📍 Places around us',
        content:
          'Joy nomlarini bilish qayerda ekanligimizni aytishga yordam beradi.',
        emoji: '🗺️',
      },
      17,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I am at school.',
        uzbek: 'Men maktabdaman.',
        emoji: '🏫',
      },
      17,
      1,
    ),
    example(
      {
        english: 'I am at home.',
        uzbek: 'Men uydaman.',
        emoji: '🏠',
      },
      17,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'image-choice',
        title: '🏫 Find the place',
        instruction: 'Maktabni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Where do students study?',
        options: [
          { id: 'a', text: 'School', emoji: '🏫' },
          { id: 'b', text: 'Park', emoji: '🌳' },
          { id: 'c', text: 'Shop', emoji: '🛒' },
          { id: 'd', text: 'Hospital', emoji: '🏥' },
        ],
        correctAnswer: 'School',
        explanation: 'School = maktab.',
      },
      17,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '📍 Where?',
        instruction: 'Tarjimani toping.',
        points: 10,
        difficulty: 'easy',
        question: 'Hospital = ?',
        options: [
          { id: 'a', text: 'Kasalxona' },
          { id: 'b', text: 'Maktab' },
          { id: 'c', text: 'Do‘kon' },
          { id: 'd', text: 'Bog‘' },
        ],
        correctAnswer: 'Kasalxona',
        explanation: 'Hospital = kasalxona.',
      },
      17,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Where are you?',
      instruction: 'Qayerda ekaningizni ayting.',
      mode: 'conversation',
      phrase: 'I am at school.',
      translation: 'Men maktabdaman.',
      emoji: '🏫',
      repetitions: 3,
      targetWords: ['school', 'home'],
    },
    17,
  ),
  test(17, [
    mcq('f17-q1', 'School = ?', ['Maktab', 'Bog‘', 'Do‘kon', 'Uy'], 'Maktab', 'School = maktab.'),
    mcq('f17-q2', 'Park = ?', ['Bog‘', 'Kasalxona', 'Maktab', 'Uy'], 'Bog‘', 'Park = bog‘.'),
    mcq('f17-q3', 'Shop = ?', ['Do‘kon', 'Maktab', 'Bog‘', 'Uy'], 'Do‘kon', 'Shop = do‘kon.'),
    mcq('f17-q4', '“I am at home” = ?', ['Men uydaman', 'Men maktabdaman', 'Men bog‘daman', 'Men do‘kondaman'], 'Men uydaman', 'Home = uy.'),
    trueFalse('f17-q5', 'Hospital kasalxonani bildiradi.', 'true', 'Hospital = kasalxona.'),
  ]),
)

/* =========================================================
   18 — PREPOSITIONS
========================================================= */

const lesson18 = baseLesson(
  18,
  'Where Is It?',
  'In, on, under 📍',
  '📍',
  'Narsalarning joylashuvini ifodalashni o‘rganing.',
  ['in', 'on', 'under', 'near'],
  vocabulary(
    [
      { word: 'in', translation: 'ichida', emoji: '📦', category: 'place', partOfSpeech: 'preposition' },
      { word: 'on', translation: 'ustida', emoji: '⬆️', category: 'place', partOfSpeech: 'preposition' },
      { word: 'under', translation: 'ostida', emoji: '⬇️', category: 'place', partOfSpeech: 'preposition' },
      { word: 'near', translation: 'yonida / yaqinida', emoji: '📍', category: 'place', partOfSpeech: 'preposition' },
      { word: 'table', translation: 'stol', emoji: '🪑', category: 'home', partOfSpeech: 'noun' },
    ],
    18,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '📍 Where is it?',
        content:
          'Prepositions narsaning boshqa narsaga nisbatan qayerda ekanini ko‘rsatadi.',
        emoji: '🧭',
      },
      18,
      1,
    ),
  ],
  [
    example(
      {
        english: 'The book is on the table.',
        uzbek: 'Kitob stol ustida.',
        emoji: '📚',
      },
      18,
      1,
    ),
    example(
      {
        english: 'The cat is under the table.',
        uzbek: 'Mushuk stol ostida.',
        emoji: '🐱',
      },
      18,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '📍 Choose',
        instruction: 'To‘g‘ri predlogni toping.',
        points: 10,
        difficulty: 'easy',
        question: 'The book is ___ the table.',
        options: [
          { id: 'a', text: 'on' },
          { id: 'b', text: 'under' },
          { id: 'c', text: 'in' },
          { id: 'd', text: 'near' },
        ],
        correctAnswer: 'on',
        explanation: 'Stol ustida = on the table.',
      },
      18,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🐱 Where?',
        instruction: 'Rasmga qarab gapni toping.',
        points: 10,
        difficulty: 'easy',
        question: '🐱⬇️🪑',
        options: [
          { id: 'a', text: 'The cat is under the table.' },
          { id: 'b', text: 'The cat is on the table.' },
          { id: 'c', text: 'The cat is in the table.' },
          { id: 'd', text: 'The cat is near the table.' },
        ],
        correctAnswer: 'The cat is under the table.',
        explanation: 'Under = ostida.',
      },
      18,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Where is the book?',
      instruction: 'Joylashuvni ayting.',
      mode: 'read-aloud',
      phrase: 'The book is on the table.',
      translation: 'Kitob stol ustida.',
      emoji: '📚',
      repetitions: 3,
      targetWords: ['book', 'on', 'table'],
    },
    18,
  ),
  test(18, [
    mcq('f18-q1', 'In = ?', ['Ichida', 'Ustida', 'Ostida', 'Yaqinida'], 'Ichida', 'In = ichida.'),
    mcq('f18-q2', 'On = ?', ['Ustida', 'Ichida', 'Ostida', 'Yonida'], 'Ustida', 'On = ustida.'),
    mcq('f18-q3', 'Under = ?', ['Ostida', 'Ustida', 'Ichida', 'Yaqinida'], 'Ostida', 'Under = ostida.'),
    mcq('f18-q4', '“The book is on the table” = ?', ['Kitob stol ustida', 'Kitob stol ostida', 'Kitob uyda', 'Kitob sumkada'], 'Kitob stol ustida', 'On = ustida.'),
    trueFalse('f18-q5', 'Under “ostida” degani.', 'true', 'Under = ostida.'),
  ]),
)

/* =========================================================
   19 — THIS / THAT
========================================================= */

const lesson19 = baseLesson(
  19,
  'This / That',
  'Point and say 👉',
  '👉',
  'Yaqin va uzoq narsalarni ko‘rsatish uchun this va thatdan foydalaning.',
  ['this', 'that', 'these', 'those'],
  vocabulary(
    [
      { word: 'this', translation: 'bu', emoji: '👉', category: 'general', partOfSpeech: 'pronoun' },
      { word: 'that', translation: 'u / ana u', emoji: '👆', category: 'general', partOfSpeech: 'pronoun' },
      { word: 'these', translation: 'bular', emoji: '👈', category: 'general', partOfSpeech: 'pronoun' },
      { word: 'those', translation: 'anavilar', emoji: '👉', category: 'general', partOfSpeech: 'pronoun' },
      { word: 'object', translation: 'narsa', emoji: '📦', category: 'general', partOfSpeech: 'noun' },
    ],
    19,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '👉 Point and say',
        content:
          'This — yaqin birlik. That — uzoq birlik. These — yaqin ko‘plik. Those — uzoq ko‘plik.',
        emoji: '🧠',
      },
      19,
      1,
    ),
  ],
  [
    example(
      {
        english: 'This is a book.',
        uzbek: 'Bu kitob.',
        emoji: '📚',
      },
      19,
      1,
    ),
    example(
      {
        english: 'That is a house.',
        uzbek: 'U uy.',
        emoji: '🏠',
      },
      19,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '👉 Choose',
        instruction: 'Yaqindagi bitta narsani ko‘rsating.',
        points: 10,
        difficulty: 'easy',
        question: '___ is a book. 📚',
        options: [
          { id: 'a', text: 'This' },
          { id: 'b', text: 'Those' },
          { id: 'c', text: 'These' },
          { id: 'd', text: 'They' },
        ],
        correctAnswer: 'This',
        explanation: 'Yaqin birlik uchun this ishlatiladi.',
      },
      19,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '👆 Far away',
        instruction: 'Uzoqdagi bitta narsani tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '___ is a house. 🏠',
        options: [
          { id: 'a', text: 'That' },
          { id: 'b', text: 'This' },
          { id: 'c', text: 'These' },
          { id: 'd', text: 'Those' },
        ],
        correctAnswer: 'That',
        explanation: 'Uzoqdagi birlik uchun that ishlatiladi.',
      },
      19,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 This is...',
      instruction: 'Atrofingizdagi narsalarni ko‘rsatib ayting.',
      mode: 'read-aloud',
      phrase: 'This is a book. That is a house.',
      translation: 'Bu kitob. U uy.',
      emoji: '👉',
      repetitions: 3,
      targetWords: ['this', 'that'],
    },
    19,
  ),
  test(19, [
    mcq('f19-q1', 'This qachon ishlatiladi?', ['Yaqin birlikda', 'Uzoq birlikda', 'Yaqin ko‘plikda', 'Uzoq ko‘plikda'], 'Yaqin birlikda', 'This — yaqin bitta narsa.'),
    mcq('f19-q2', 'That qachon ishlatiladi?', ['Uzoq birlikda', 'Yaqin birlikda', 'Yaqin ko‘plikda', 'Uzoq ko‘plikda'], 'Uzoq birlikda', 'That — uzoq bitta narsa.'),
    mcq('f19-q3', 'These = ?', ['Bular', 'Bu', 'U', 'Anavilar'], 'Bular', 'These — yaqin ko‘plik.'),
    mcq('f19-q4', '“This is a book” = ?', ['Bu kitob', 'U kitob', 'Bular kitoblar', 'Anavilar kitoblar'], 'Bu kitob', 'This = bu.'),
    trueFalse('f19-q5', 'Those uzoqdagi ko‘plik uchun ishlatiladi.', 'true', 'Those — uzoqdagi ko‘plik.'),
  ]),
)

/* =========================================================
   20 — THERE IS / THERE ARE
========================================================= */

const lesson20 = baseLesson(
  20,
  'There Is / There Are',
  'What is in the room? 🏠',
  '🏠',
  'Xonada yoki joyda nimalar borligini aytishni o‘rganing.',
  ['There is', 'There are', 'Singular', 'Plural'],
  vocabulary(
    [
      { word: 'there', translation: 'u yerda', emoji: '📍', category: 'place', partOfSpeech: 'adverb' },
      { word: 'chair', translation: 'stul', emoji: '🪑', category: 'home', partOfSpeech: 'noun' },
      { word: 'table', translation: 'stol', emoji: '🪑', category: 'home', partOfSpeech: 'noun' },
      { word: 'window', translation: 'deraza', emoji: '🪟', category: 'home', partOfSpeech: 'noun' },
      { word: 'door', translation: 'eshik', emoji: '🚪', category: 'home', partOfSpeech: 'noun' },
    ],
    20,
  ),
  [
    explanation(
      {
        type: 'rule',
        title: '🏠 One or many?',
        content:
          'There is — bitta narsa. There are — bir nechta narsa.',
        emoji: '🧠',
      },
      20,
      1,
    ),
  ],
  [
    example(
      {
        english: 'There is a table.',
        uzbek: 'Stol bor.',
        emoji: '🪑',
      },
      20,
      1,
    ),
    example(
      {
        english: 'There are two chairs.',
        uzbek: 'Ikkita stul bor.',
        emoji: '🪑',
      },
      20,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '1️⃣ One thing',
        instruction: 'Bitta narsa uchun to‘g‘ri shaklni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '___ a book on the table.',
        options: [
          { id: 'a', text: 'There is' },
          { id: 'b', text: 'There are' },
          { id: 'c', text: 'They is' },
          { id: 'd', text: 'There am' },
        ],
        correctAnswer: 'There is',
        explanation: 'Bitta narsa: There is.',
      },
      20,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '2️⃣ Many things',
        instruction: 'Ko‘plik uchun to‘g‘ri shaklni tanlang.',
        points: 10,
        difficulty: 'easy',
        question: '___ two chairs.',
        options: [
          { id: 'a', text: 'There are' },
          { id: 'b', text: 'There is' },
          { id: 'c', text: 'There am' },
          { id: 'd', text: 'There be' },
        ],
        correctAnswer: 'There are',
        explanation: 'Ko‘plik: There are.',
      },
      20,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Describe the room',
      instruction: 'Xonadagi narsalarni ayting.',
      mode: 'read-aloud',
      phrase: 'There is a table. There are two chairs.',
      translation: 'Stol bor. Ikkita stul bor.',
      emoji: '🏠',
      repetitions: 2,
      targetWords: ['there', 'table', 'chairs'],
    },
    20,
  ),
  test(20, [
    mcq('f20-q1', 'Bitta narsa uchun nima ishlatiladi?', ['There is', 'There are', 'They are', 'There am'], 'There is', 'There is birlik uchun.'),
    mcq('f20-q2', 'Ko‘plik uchun nima ishlatiladi?', ['There are', 'There is', 'There am', 'There be'], 'There are', 'There are ko‘plik uchun.'),
    mcq('f20-q3', '“There is a table” = ?', ['Stol bor', 'Stullar bor', 'Stol yo‘q', 'Stol katta'], 'Stol bor', 'There is + birlik.'),
    mcq('f20-q4', '“There are two chairs” = ?', ['Ikkita stul bor', 'Bitta stul bor', 'Ikki stol bor', 'Stul yo‘q'], 'Ikkita stul bor', 'There are + two chairs.'),
    trueFalse('f20-q5', 'There are ko‘plik bilan ishlatiladi.', 'true', 'There are ko‘plik uchun ishlatiladi.'),
  ]),
)

/* =========================================================
   21 — AM / IS / ARE
========================================================= */

const lesson21 = baseLesson(
  21,
  'I Am / You Are',
  'Meet the verb BE 🧠',
  '🧠',
  'Am, is, are bilan sodda gaplar tuzishni o‘rganing.',
  ['I am', 'You are', 'He is', 'She is'],
  vocabulary(
    [
      { word: 'am', translation: 'man', emoji: '🙋', category: 'general', partOfSpeech: 'verb' },
      { word: 'is', translation: 'dir / bo‘ladi', emoji: '🔗', category: 'general', partOfSpeech: 'verb' },
      { word: 'are', translation: 'siz/biz/ular ...miz', emoji: '👥', category: 'general', partOfSpeech: 'verb' },
      { word: 'student', translation: 'o‘quvchi', emoji: '🎓', category: 'school', partOfSpeech: 'noun' },
      { word: 'teacher', translation: 'o‘qituvchi', emoji: '👩‍🏫', category: 'school', partOfSpeech: 'noun' },
    ],
    21,
  ),
  [
    explanation(
      {
        type: 'rule',
        title: '🧠 Be verb',
        content:
          'I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi.',
        emoji: '🔑',
      },
      21,
      1,
    ),
    explanation(
      {
        type: 'memory',
        title: '⚡ Easy memory',
        content:
          'I am. You are. He is. She is. We are. They are.',
        emoji: '💡',
      },
      21,
      2,
    ),
  ],
  [
    example(
      {
        english: 'I am a student.',
        uzbek: 'Men o‘quvchiman.',
        emoji: '🎓',
      },
      21,
      1,
    ),
    example(
      {
        english: 'She is a teacher.',
        uzbek: 'U o‘qituvchi.',
        emoji: '👩‍🏫',
      },
      21,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🧠 Choose the verb',
        instruction: 'To‘g‘ri shaklni tanlang.',
        points: 10,
        difficulty: 'medium',
        question: 'I ___ a student.',
        options: [
          { id: 'a', text: 'am' },
          { id: 'b', text: 'is' },
          { id: 'c', text: 'are' },
          { id: 'd', text: 'be' },
        ],
        correctAnswer: 'am',
        explanation: 'I bilan am ishlatiladi.',
      },
      21,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '👩‍🏫 Complete',
        instruction: 'Gapni to‘ldiring.',
        points: 10,
        difficulty: 'medium',
        question: 'She ___ a teacher.',
        options: [
          { id: 'a', text: 'is' },
          { id: 'b', text: 'am' },
          { id: 'c', text: 'are' },
          { id: 'd', text: 'be' },
        ],
        correctAnswer: 'is',
        explanation: 'He/She/It bilan is ishlatiladi.',
      },
      21,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Introduce yourself',
      instruction: 'O‘zingiz haqingizda ikki gap ayting.',
      mode: 'read-aloud',
      phrase: 'I am a student. I am happy.',
      translation: 'Men o‘quvchiman. Men xursandman.',
      emoji: '🎓',
      repetitions: 3,
      targetWords: ['I', 'am', 'student', 'happy'],
    },
    21,
  ),
  test(21, [
    mcq('f21-q1', 'I ___ a student.', ['am', 'is', 'are', 'be'], 'am', 'I bilan am ishlatiladi.'),
    mcq('f21-q2', 'She ___ a teacher.', ['is', 'am', 'are', 'be'], 'is', 'She bilan is ishlatiladi.'),
    mcq('f21-q3', 'You ___ happy.', ['are', 'is', 'am', 'be'], 'are', 'You bilan are ishlatiladi.'),
    mcq('f21-q4', 'He ___ my brother.', ['is', 'are', 'am', 'be'], 'is', 'He bilan is ishlatiladi.'),
    trueFalse('f21-q5', 'I bilan am ishlatiladi.', 'true', 'I am — to‘g‘ri birikma.'),
  ]),
)

/* =========================================================
   22 — HAVE / HAS
========================================================= */

const lesson22 = baseLesson(
  22,
  'Have / Has',
  'What do you have? 🎒',
  '🎒',
  'Egalikni ifodalashda have va hasdan foydalanishni o‘rganing.',
  ['have', 'has', 'I have', 'She has'],
  vocabulary(
    [
      { word: 'have', translation: 'ega bo‘lmoq / bor', emoji: '🎒', category: 'general', partOfSpeech: 'verb' },
      { word: 'has', translation: 'ega / bor', emoji: '📦', category: 'general', partOfSpeech: 'verb' },
      { word: 'book', translation: 'kitob', emoji: '📚', category: 'school', partOfSpeech: 'noun' },
      { word: 'car', translation: 'mashina', emoji: '🚗', category: 'general', partOfSpeech: 'noun' },
      { word: 'dog', translation: 'it', emoji: '🐶', category: 'animal', partOfSpeech: 'noun' },
    ],
    22,
  ),
  [
    explanation(
      {
        type: 'rule',
        title: '🎒 Have or has?',
        content:
          'I/you/we/they bilan have. He/she/it bilan has.',
        emoji: '🧠',
      },
      22,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I have a book.',
        uzbek: 'Menda kitob bor.',
        emoji: '📚',
      },
      22,
      1,
    ),
    example(
      {
        english: 'She has a dog.',
        uzbek: 'Uning iti bor.',
        emoji: '🐶',
      },
      22,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🎒 Choose',
        instruction: 'To‘g‘ri shaklni tanlang.',
        points: 10,
        difficulty: 'medium',
        question: 'I ___ a book.',
        options: [
          { id: 'a', text: 'have' },
          { id: 'b', text: 'has' },
          { id: 'c', text: 'is' },
          { id: 'd', text: 'are' },
        ],
        correctAnswer: 'have',
        explanation: 'I bilan have ishlatiladi.',
      },
      22,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🐶 Complete',
        instruction: 'Gapni to‘ldiring.',
        points: 10,
        difficulty: 'medium',
        question: 'She ___ a dog.',
        options: [
          { id: 'a', text: 'has' },
          { id: 'b', text: 'have' },
          { id: 'c', text: 'are' },
          { id: 'd', text: 'am' },
        ],
        correctAnswer: 'has',
        explanation: 'She bilan has ishlatiladi.',
      },
      22,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 What do you have?',
      instruction: 'O‘zingizdagi narsalar haqida gapiring.',
      mode: 'read-aloud',
      phrase: 'I have a book. I have a pen.',
      translation: 'Menda kitob bor. Menda ruchka bor.',
      emoji: '🎒',
      repetitions: 3,
      targetWords: ['have', 'book', 'pen'],
    },
    22,
  ),
  test(22, [
    mcq('f22-q1', 'I ___ a book.', ['have', 'has', 'is', 'are'], 'have', 'I bilan have ishlatiladi.'),
    mcq('f22-q2', 'She ___ a dog.', ['has', 'have', 'is', 'are'], 'has', 'She bilan has ishlatiladi.'),
    mcq('f22-q3', 'They ___ two books.', ['have', 'has', 'is', 'am'], 'have', 'They bilan have ishlatiladi.'),
    mcq('f22-q4', '“She has a car” = ?', ['Uning mashinasi bor', 'U mashina', 'U mashina haydamaydi', 'Mening mashinam bor'], 'Uning mashinasi bor', 'Has egalikni bildiradi.'),
    trueFalse('f22-q5', 'He bilan has ishlatiladi.', 'true', 'He has — to‘g‘ri shakl.'),
  ]),
)

/* =========================================================
   23 — LIKES
========================================================= */

const lesson23 = baseLesson(
  23,
  'I Like / I Don’t Like',
  'Tell what you love ❤️',
  '❤️',
  'Yoqtirish va yoqtirmaslikni sodda gaplarda ifodalang.',
  ['like', 'don’t like', 'food', 'hobbies'],
  vocabulary(
    [
      { word: 'like', translation: 'yoqtirmoq', emoji: '❤️', category: 'general', partOfSpeech: 'verb' },
      { word: 'love', translation: 'juda yaxshi ko‘rmoq', emoji: '💖', category: 'general', partOfSpeech: 'verb' },
      { word: 'play', translation: 'o‘ynamoq', emoji: '🎮', category: 'action', partOfSpeech: 'verb' },
      { word: 'read', translation: 'o‘qimoq', emoji: '📖', category: 'action', partOfSpeech: 'verb' },
      { word: 'music', translation: 'musiqa', emoji: '🎵', category: 'general', partOfSpeech: 'noun' },
    ],
    23,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '❤️ Say what you like',
        content:
          'I like — men yoqtiraman. I don’t like — men yoqtirmayman.',
        emoji: '❤️',
      },
      23,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I like English.',
        uzbek: 'Men ingliz tilini yoqtiraman.',
        emoji: '🇬🇧',
      },
      23,
      1,
    ),
    example(
      {
        english: 'I don’t like cold weather.',
        uzbek: 'Men sovuq ob-havoni yoqtirmayman.',
        emoji: '🥶',
      },
      23,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '❤️ Choose',
        instruction: 'Yoqtirishni ifodalovchi gapni toping.',
        points: 10,
        difficulty: 'medium',
        question: 'Men ingliz tilini yoqtiraman.',
        options: [
          { id: 'a', text: 'I like English.' },
          { id: 'b', text: 'I am English.' },
          { id: 'c', text: 'I English like.' },
          { id: 'd', text: 'English I am.' },
        ],
        correctAnswer: 'I like English.',
        explanation: 'I like + noun.',
      },
      23,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🚫 Don’t like',
        instruction: 'Yoqtirmaslikni toping.',
        points: 10,
        difficulty: 'medium',
        question: 'Men sovuqni yoqtirmayman.',
        options: [
          { id: 'a', text: 'I don’t like cold.' },
          { id: 'b', text: 'I like cold.' },
          { id: 'c', text: 'I am cold like.' },
          { id: 'd', text: 'I don’t cold.' },
        ],
        correctAnswer: 'I don’t like cold.',
        explanation: 'I don’t like ... — yoqtirmayman.',
      },
      23,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 My likes',
      instruction: 'Nimani yoqtirishingizni ayting.',
      mode: 'conversation',
      phrase: 'I like English. I like music.',
      translation: 'Men ingliz tilini yoqtiraman. Men musiqani yoqtiraman.',
      emoji: '❤️',
      repetitions: 3,
      targetWords: ['like', 'English', 'music'],
    },
    23,
  ),
  test(23, [
    mcq('f23-q1', 'Like = ?', ['Yoqtirmoq', 'Yozmoq', 'O‘qimoq', 'Yemoq'], 'Yoqtirmoq', 'Like = yoqtirmoq.'),
    mcq('f23-q2', '“I like English” = ?', ['Men ingliz tilini yoqtiraman', 'Men ingliz tiliman', 'Men ingliz tilida gapirmayman', 'Men ingliz tilini bilmayman'], 'Men ingliz tilini yoqtiraman', 'I like = men yoqtiraman.'),
    mcq('f23-q3', 'Yoqtirmaslik qanday?', ['I don’t like', 'I not like', 'I no like', 'I am not like'], 'I don’t like', 'Standart boshlang‘ich shakl: I don’t like.'),
    mcq('f23-q4', 'Read = ?', ['O‘qimoq', 'O‘ynamoq', 'Yemoq', 'Ichmoq'], 'O‘qimoq', 'Read = o‘qimoq.'),
    trueFalse('f23-q5', '“I don’t like” yoqtirmaslikni bildiradi.', 'true', 'I don’t like = men yoqtirmayman.'),
  ]),
)

/* =========================================================
   24 — DAILY ROUTINE
========================================================= */

const lesson24 = baseLesson(
  24,
  'Daily Life',
  'My everyday routine 🌅',
  '🌅',
  'Kundalik ishlar haqida sodda gaplar tuzing.',
  ['Wake up', 'Go to school', 'Study', 'Eat', 'Sleep'],
  vocabulary(
    [
      { word: 'wake up', translation: 'uyg‘onmoq', emoji: '⏰', category: 'daily-life', partOfSpeech: 'phrase' },
      { word: 'go', translation: 'bormoq', emoji: '🚶', category: 'action', partOfSpeech: 'verb' },
      { word: 'study', translation: 'o‘qimoq / o‘rganmoq', emoji: '📚', category: 'action', partOfSpeech: 'verb' },
      { word: 'eat', translation: 'yemoq', emoji: '🍽️', category: 'action', partOfSpeech: 'verb' },
      { word: 'sleep', translation: 'uxlamoq', emoji: '😴', category: 'action', partOfSpeech: 'verb' },
    ],
    24,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '🌅 My daily routine',
        content:
          'Har kuni takrorlanadigan ishlarni ingliz tilida sodda fe’llar bilan tasvirlash mumkin.',
        emoji: '🔄',
      },
      24,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I wake up at seven.',
        uzbek: 'Men soat yettida uyg‘onaman.',
        emoji: '⏰',
      },
      24,
      1,
    ),
    example(
      {
        english: 'I go to school.',
        uzbek: 'Men maktabga boraman.',
        emoji: '🏫',
      },
      24,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'word-order',
        title: '🔄 Build my day',
        instruction: 'Gapni to‘g‘ri tuzing.',
        points: 10,
        difficulty: 'medium',
        question: 'Men maktabga boraman.',
        words: ['I', 'go', 'to', 'school'],
        correctAnswer: 'I go to school',
        explanation: 'I go to school.',
      },
      24,
      1,
    ),
    activity(
      {
        type: 'matching',
        title: '🧩 Match actions',
        instruction: 'Fe’llarni tarjimasi bilan moslang.',
        points: 10,
        difficulty: 'medium',
        question: 'Match.',
        pairs: [
          { left: 'wake up', right: 'uyg‘onmoq' },
          { left: 'eat', right: 'yemoq' },
          { left: 'sleep', right: 'uxlamoq' },
        ],
        correctAnswer: [
          'wake up-uyg‘onmoq',
          'eat-yemoq',
          'sleep-uxlamoq',
        ],
        explanation: 'Kundalik harakatlarni moslang.',
      },
      24,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 My day',
      instruction: 'Kun tartibingizni ayting.',
      mode: 'read-aloud',
      phrase: 'I wake up. I go to school. I study.',
      translation: 'Men uyg‘onaman. Maktabga boraman. O‘qiyman.',
      emoji: '🌅',
      repetitions: 2,
      targetWords: ['wake up', 'go', 'study'],
    },
    24,
  ),
  test(24, [
    mcq('f24-q1', 'Wake up = ?', ['Uyg‘onmoq', 'Uxlamoq', 'Yemoq', 'Bormoq'], 'Uyg‘onmoq', 'Wake up = uyg‘onmoq.'),
    mcq('f24-q2', 'Go = ?', ['Bormoq', 'Yemoq', 'Uxlamoq', 'O‘qimoq'], 'Bormoq', 'Go = bormoq.'),
    mcq('f24-q3', 'Study = ?', ['O‘qimoq / o‘rganmoq', 'Yemoq', 'Uxlamoq', 'Uyg‘onmoq'], 'O‘qimoq / o‘rganmoq', 'Study = o‘qimoq/o‘rganmoq.'),
    mcq('f24-q4', '“I go to school” = ?', ['Men maktabga boraman', 'Men maktabda uxlayman', 'Men maktabni yoqtirmayman', 'Men maktabdan keldim'], 'Men maktabga boraman', 'Go to school = maktabga bormoq.'),
    trueFalse('f24-q5', 'Sleep “uxlamoq” degani.', 'true', 'Sleep = uxlamoq.'),
  ]),
)

/* =========================================================
   25 — QUESTION WORDS
========================================================= */

const lesson25 = baseLesson(
  25,
  'Question Words',
  'Ask smart questions ❓',
  '❓',
  'What, where, who, when, why va how kabi savol so‘zlarini o‘rganing.',
  ['What', 'Where', 'Who', 'When', 'How'],
  vocabulary(
    [
      { word: 'what', translation: 'nima', emoji: '❓', category: 'general', partOfSpeech: 'pronoun' },
      { word: 'where', translation: 'qayerda / qayerga', emoji: '📍', category: 'place', partOfSpeech: 'adverb' },
      { word: 'who', translation: 'kim', emoji: '👤', category: 'person', partOfSpeech: 'pronoun' },
      { word: 'when', translation: 'qachon', emoji: '⏰', category: 'time', partOfSpeech: 'adverb' },
      { word: 'how', translation: 'qanday', emoji: '🧠', category: 'general', partOfSpeech: 'adverb' },
    ],
    25,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '❓ Ask questions',
        content:
          'Savol so‘zlari suhbatda kerakli ma’lumotni topishga yordam beradi.',
        emoji: '🧠',
      },
      25,
      1,
    ),
  ],
  [
    example(
      {
        english: 'What is your name?',
        uzbek: 'Ismingiz nima?',
        emoji: '🏷️',
      },
      25,
      1,
    ),
    example(
      {
        english: 'Where are you?',
        uzbek: 'Siz qayerdasiz?',
        emoji: '📍',
      },
      25,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '❓ Choose the question word',
        instruction: '“Kim?” uchun to‘g‘ri so‘zni toping.',
        points: 10,
        difficulty: 'medium',
        question: '___ is he?',
        options: [
          { id: 'a', text: 'Who' },
          { id: 'b', text: 'Where' },
          { id: 'c', text: 'What' },
          { id: 'd', text: 'When' },
        ],
        correctAnswer: 'Who',
        explanation: 'Who = kim.',
      },
      25,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '📍 Where?',
        instruction: 'Joyni so‘rash uchun mos so‘zni toping.',
        points: 10,
        difficulty: 'medium',
        question: '___ are you?',
        options: [
          { id: 'a', text: 'Where' },
          { id: 'b', text: 'Who' },
          { id: 'c', text: 'When' },
          { id: 'd', text: 'What' },
        ],
        correctAnswer: 'Where',
        explanation: 'Where = qayerda/qayerga.',
      },
      25,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Ask me!',
      instruction: 'Savol so‘zlarini baland ovozda ayting.',
      mode: 'read-aloud',
      phrase: 'What? Where? Who? When? How?',
      emoji: '❓',
      repetitions: 3,
      targetWords: ['what', 'where', 'who', 'when', 'how'],
    },
    25,
  ),
  test(25, [
    mcq('f25-q1', 'What = ?', ['Nima', 'Kim', 'Qayerda', 'Qachon'], 'Nima', 'What = nima.'),
    mcq('f25-q2', 'Where = ?', ['Qayerda/qayerga', 'Kim', 'Nima', 'Qachon'], 'Qayerda/qayerga', 'Where joyni bildiradi.'),
    mcq('f25-q3', 'Who = ?', ['Kim', 'Nima', 'Qachon', 'Qanday'], 'Kim', 'Who = kim.'),
    mcq('f25-q4', 'When = ?', ['Qachon', 'Qayerda', 'Kim', 'Nima'], 'Qachon', 'When = qachon.'),
    trueFalse('f25-q5', 'How “qanday” ma’nosida ishlatilishi mumkin.', 'true', 'How ko‘pincha “qanday” ma’nosida ishlatiladi.'),
  ]),
)

/* =========================================================
   26 — CAN / CAN'T
========================================================= */

const lesson26 = baseLesson(
  26,
  'Can / Can’t',
  'I can do it! 💪',
  '💪',
  'Qobiliyat va qila olmaslikni ifodalashni o‘rganing.',
  ['can', 'cannot / can’t', 'abilities'],
  vocabulary(
    [
      { word: 'can', translation: 'qila olmoq', emoji: '💪', category: 'action', partOfSpeech: 'verb' },
      { word: 'cannot', translation: 'qila olmaslik', emoji: '🚫', category: 'action', partOfSpeech: 'verb' },
      { word: 'run', translation: 'yugurmoq', emoji: '🏃', category: 'action', partOfSpeech: 'verb' },
      { word: 'swim', translation: 'suzmoq', emoji: '🏊', category: 'action', partOfSpeech: 'verb' },
      { word: 'read', translation: 'o‘qimoq', emoji: '📖', category: 'action', partOfSpeech: 'verb' },
    ],
    26,
  ),
  [
    explanation(
      {
        type: 'rule',
        title: '💪 I can!',
        content:
          'Can qobiliyatni bildiradi. Can’t esa qila olmaslikni bildiradi.',
        emoji: '💪',
      },
      26,
      1,
    ),
  ],
  [
    example(
      {
        english: 'I can swim.',
        uzbek: 'Men suza olaman.',
        emoji: '🏊',
      },
      26,
      1,
    ),
    example(
      {
        english: 'I can’t fly.',
        uzbek: 'Men ucha olmayman.',
        emoji: '🚫',
      },
      26,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '💪 Can',
        instruction: 'Qobiliyatni ifodalovchi gapni tanlang.',
        points: 10,
        difficulty: 'medium',
        question: 'Men suza olaman.',
        options: [
          { id: 'a', text: 'I can swim.' },
          { id: 'b', text: 'I swim can.' },
          { id: 'c', text: 'I am swim.' },
          { id: 'd', text: 'I can swimming.' },
        ],
        correctAnswer: 'I can swim.',
        explanation: 'Can + fe’lning asosiy shakli.',
      },
      26,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🚫 Can’t',
        instruction: 'Qila olmaslikni toping.',
        points: 10,
        difficulty: 'medium',
        question: 'Men ucha olmayman.',
        options: [
          { id: 'a', text: 'I can’t fly.' },
          { id: 'b', text: 'I can fly.' },
          { id: 'c', text: 'I am fly.' },
          { id: 'd', text: 'I fly can’t.' },
        ],
        correctAnswer: 'I can’t fly.',
        explanation: 'Can’t + fe’l qila olmaslikni bildiradi.',
      },
      26,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 I can!',
      instruction: 'Qila oladigan ishingiz haqida ayting.',
      mode: 'read-aloud',
      phrase: 'I can read. I can run. I can learn English!',
      translation: 'Men o‘qiy olaman. Yugura olaman. Ingliz tilini o‘rgana olaman!',
      emoji: '💪',
      repetitions: 2,
      targetWords: ['can', 'read', 'run', 'learn'],
    },
    26,
  ),
  test(26, [
    mcq('f26-q1', 'Can = ?', ['Qila olmoq', 'Qila olmaslik', 'Yemoq', 'Uxlamoq'], 'Qila olmoq', 'Can qobiliyatni bildiradi.'),
    mcq('f26-q2', '“I can swim” = ?', ['Men suza olaman', 'Men suza olmayman', 'Men yuguraman', 'Men suzishni yoqtirmayman'], 'Men suza olaman', 'Can swim = suza olmoq.'),
    mcq('f26-q3', 'Can’t nimani bildiradi?', ['Qila olmaslik', 'Qila olish', 'Yoqtirish', 'Bilish'], 'Qila olmaslik', 'Can’t = cannot.'),
    mcq('f26-q4', 'Can dan keyin fe’l qanday keladi?', ['Asosiy shaklda', 'Doim -ing bilan', 'Doim -ed bilan', 'Faqat ot'], 'Asosiy shaklda', 'Can + base verb.'),
    trueFalse('f26-q5', '“I can read” grammatik jihatdan boshlang‘ich darajada to‘g‘ri gap.', 'true', 'Can + read to‘g‘ri tuzilma.'),
  ]),
)

/* =========================================================
   27 — READING
========================================================= */

const lesson27 = baseLesson(
  27,
  'Simple Reading',
  'Read a tiny story 📖',
  '📖',
  'Qisqa inglizcha matnni tushunish va asosiy ma’noni topishni mashq qiling.',
  ['Reading', 'Simple sentences', 'Comprehension'],
  vocabulary(
    [
      { word: 'live', translation: 'yashamoq', emoji: '🏠', category: 'general', partOfSpeech: 'verb' },
      { word: 'small', translation: 'kichik', emoji: '🔹', category: 'general', partOfSpeech: 'adjective' },
      { word: 'big', translation: 'katta', emoji: '🔸', category: 'general', partOfSpeech: 'adjective' },
      { word: 'friend', translation: 'do‘st', emoji: '🤝', category: 'person', partOfSpeech: 'noun' },
      { word: 'every', translation: 'har bir / har', emoji: '🔄', category: 'general', partOfSpeech: 'determiner' },
    ],
    27,
  ),
  [
    explanation(
      {
        type: 'concept',
        title: '📖 Read for meaning',
        content:
          'Har bir so‘zni tarjima qilish shart emas. Avval matnning umumiy ma’nosini tushunishga harakat qiling.',
        emoji: '🧠',
      },
      27,
      1,
    ),
  ],
  [
    example(
      {
        english:
          'My name is Ali. I am a student. I live in a small house. I like English.',
        uzbek:
          'Mening ismim Ali. Men o‘quvchiman. Men kichik uyda yashayman. Men ingliz tilini yoqtiraman.',
        emoji: '📖',
      },
      27,
      1,
    ),
  ],
  [
    activity(
      {
        type: 'reading',
        title: '📖 Read & answer',
        instruction: 'Matnni o‘qing va javobni toping.',
        points: 10,
        difficulty: 'medium',
        question: 'What is Ali?',
        passage:
          'My name is Ali. I am a student. I live in a small house. I like English.',
        options: [
          { id: 'a', text: 'A student' },
          { id: 'b', text: 'A teacher' },
          { id: 'c', text: 'A doctor' },
          { id: 'd', text: 'A driver' },
        ],
        correctAnswer: 'A student',
        explanation: 'Matnda “I am a student” deb yozilgan.',
      },
      27,
      1,
    ),
    activity(
      {
        type: 'multiple-choice',
        title: '🔎 Find the detail',
        instruction: 'Matndan ma’lumot toping.',
        points: 10,
        difficulty: 'medium',
        question: 'What does Ali like?',
        passage:
          'My name is Ali. I am a student. I live in a small house. I like English.',
        options: [
          { id: 'a', text: 'English' },
          { id: 'b', text: 'Football' },
          { id: 'c', text: 'Math' },
          { id: 'd', text: 'Music' },
        ],
        correctAnswer: 'English',
        explanation: 'Matnda “I like English” deyiladi.',
      },
      27,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Read aloud',
      instruction: 'Matnni sekin va aniq o‘qing.',
      mode: 'read-aloud',
      phrase: 'My name is Ali. I am a student. I like English.',
      translation: 'Mening ismim Ali. Men o‘quvchiman. Men ingliz tilini yoqtiraman.',
      emoji: '📖',
      repetitions: 2,
      targetWords: ['student', 'live', 'English'],
    },
    27,
  ),
  test(27, [
    mcq('f27-q1', 'Ali kim?', ['A student', 'A teacher', 'A doctor', 'A driver'], 'A student', 'Matnda Ali student ekanligi aytilgan.'),
    mcq('f27-q2', 'Ali nimani yoqtiradi?', ['English', 'Football', 'Music', 'Math'], 'English', 'Matnda I like English deyiladi.'),
    mcq('f27-q3', 'Live = ?', ['Yashamoq', 'O‘qimoq', 'Yemoq', 'Uxlamoq'], 'Yashamoq', 'Live = yashamoq.'),
    mcq('f27-q4', 'Small = ?', ['Kichik', 'Katta', 'Yangi', 'Eski'], 'Kichik', 'Small = kichik.'),
    trueFalse('f27-q5', 'Ali o‘quvchi.', 'true', 'Matnda “I am a student” deyiladi.'),
  ]),
)

/* =========================================================
   28 — LISTENING
========================================================= */

const lesson28 = baseLesson(
  28,
  'Listening Time',
  'Train your ears 🎧',
  '🎧',
  'Oddiy inglizcha gaplarni eshitib tushunishga tayyorlaning.',
  ['Listen', 'Recognize', 'Understand'],
  vocabulary(
    [
      { word: 'listen', translation: 'tinglamoq', emoji: '🎧', category: 'action', partOfSpeech: 'verb' },
      { word: 'hear', translation: 'eshitmoq', emoji: '👂', category: 'action', partOfSpeech: 'verb' },
      { word: 'say', translation: 'aytmoq', emoji: '🗣️', category: 'action', partOfSpeech: 'verb' },
      { word: 'again', translation: 'yana', emoji: '🔄', category: 'general', partOfSpeech: 'adverb' },
      { word: 'slowly', translation: 'sekin', emoji: '🐢', category: 'general', partOfSpeech: 'adverb' },
    ],
    28,
  ),
  [
    explanation(
      {
        type: 'tip',
        title: '🎧 Listening secret',
        content:
          'Birinchi tinglashda hamma so‘zni tushunmasangiz ham xavotir olmang. Asosiy ma’noni ushlashga harakat qiling.',
        emoji: '🧠',
      },
      28,
      1,
    ),
  ],
  [
    example(
      {
        english: 'Listen and repeat.',
        uzbek: 'Tinglang va takrorlang.',
        emoji: '🎧',
      },
      28,
      1,
    ),
    example(
      {
        english: 'Please say it again.',
        uzbek: 'Iltimos, yana ayting.',
        emoji: '🔄',
      },
      28,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'listen-choice',
        title: '🎧 Listen & choose',
        instruction: 'Audio orqali eshitgan so‘zingizni tanlang.',
        points: 10,
        difficulty: 'medium',
        question: 'Which word do you hear?',
        audioUrl: '/english/audio/foundation-28-hello.mp3',
        options: [
          { id: 'a', text: 'Hello' },
          { id: 'b', text: 'Goodbye' },
          { id: 'c', text: 'Morning' },
          { id: 'd', text: 'House' },
        ],
        correctAnswer: 'Hello',
        explanation: 'Eshitilgan so‘z Hello.',
      },
      28,
      1,
    ),
    activity(
      {
        type: 'listen-choice',
        title: '🎧 Listen again',
        instruction: 'Audioni yana tinglang.',
        points: 10,
        difficulty: 'medium',
        question: 'Which sentence do you hear?',
        audioUrl: '/english/audio/foundation-28-name.mp3',
        options: [
          { id: 'a', text: 'My name is Ali.' },
          { id: 'b', text: 'I am at school.' },
          { id: 'c', text: 'I like apples.' },
          { id: 'd', text: 'It is sunny.' },
        ],
        correctAnswer: 'My name is Ali.',
        explanation: 'Audio shu gapni aytadi.',
      },
      28,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Listen & repeat',
      instruction: 'Audioni tinglang va takrorlang.',
      mode: 'listen-repeat',
      phrase: 'Listen and repeat.',
      translation: 'Tinglang va takrorlang.',
      audioUrl: '/english/audio/foundation-28-repeat.mp3',
      emoji: '🎧',
      repetitions: 3,
      targetWords: ['listen', 'repeat'],
    },
    28,
  ),
  test(28, [
    mcq('f28-q1', 'Listen = ?', ['Tinglamoq', 'Gapirmoq', 'O‘qimoq', 'Yemoq'], 'Tinglamoq', 'Listen = tinglamoq.'),
    mcq('f28-q2', 'Hear = ?', ['Eshitmoq', 'Ko‘rmoq', 'Yozmoq', 'O‘qimoq'], 'Eshitmoq', 'Hear = eshitmoq.'),
    mcq('f28-q3', 'Again = ?', ['Yana', 'Sekin', 'Tez', 'Bugun'], 'Yana', 'Again = yana.'),
    mcq('f28-q4', '“Listen and repeat” = ?', ['Tinglang va takrorlang', 'O‘qing va yozing', 'Keling va o‘ynang', 'Turing va boring'], 'Tinglang va takrorlang', 'Listen = tinglamoq, repeat = takrorlamoq.'),
    trueFalse('f28-q5', 'Listening mashqida barcha so‘zlarni birinchi marta tushunmaslik tabiiy.', 'true', 'Listening asta-sekin rivojlanadigan ko‘nikmadir.'),
  ]),
)

/* =========================================================
   29 — BIG REVIEW
========================================================= */

const lesson29 = baseLesson(
  29,
  'Big Review',
  'Everything you learned 🧠',
  '🧠',
  'Foundation kursining asosiy bilimlarini bir joyda takrorlang.',
  [
    'Vocabulary',
    'Greetings',
    'Family',
    'Colors',
    'Grammar',
    'Daily English',
  ],
  vocabulary(
    [
      { word: 'hello', translation: 'salom', emoji: '👋', category: 'greeting', partOfSpeech: 'interjection' },
      { word: 'family', translation: 'oila', emoji: '👨‍👩‍👧‍👦', category: 'family', partOfSpeech: 'noun' },
      { word: 'school', translation: 'maktab', emoji: '🏫', category: 'school', partOfSpeech: 'noun' },
      { word: 'happy', translation: 'xursand', emoji: '😊', category: 'emotion', partOfSpeech: 'adjective' },
      { word: 'learn', translation: 'o‘rganmoq', emoji: '🧠', category: 'action', partOfSpeech: 'verb' },
    ],
    29,
  ),
  [
    explanation(
      {
        type: 'summary',
        title: '🧠 You are ready!',
        content:
          'Siz Foundation kursining asosiy mavzularini o‘rgandingiz. Endi ularni aralashtirib ishlatamiz.',
        emoji: '🚀',
      },
      29,
      1,
    ),
    explanation(
      {
        type: 'tip',
        title: '🎯 Think in English',
        content:
          'Har bir gapni tarjima qilishdan ko‘ra, inglizcha iborani vaziyat bilan bog‘lashga harakat qiling.',
        emoji: '💡',
      },
      29,
      2,
    ),
  ],
  [
    example(
      {
        english: 'Hello! My name is Ali. I am a student.',
        uzbek: 'Salom! Mening ismim Ali. Men o‘quvchiman.',
        emoji: '👋',
      },
      29,
      1,
    ),
    example(
      {
        english: 'I like English and I can read.',
        uzbek: 'Men ingliz tilini yoqtiraman va o‘qiy olaman.',
        emoji: '🇬🇧',
      },
      29,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🧠 Mixed challenge',
        instruction: 'Bilimlaringizni aralashtirib sinang.',
        points: 10,
        difficulty: 'medium',
        question: '___ name is Ali.',
        options: [
          { id: 'a', text: 'My' },
          { id: 'b', text: 'I' },
          { id: 'c', text: 'Me' },
          { id: 'd', text: 'Mine' },
        ],
        correctAnswer: 'My',
        explanation: 'My name is Ali.',
      },
      29,
      1,
    ),
    activity(
      {
        type: 'sentence-builder',
        title: '🚀 Build a sentence',
        instruction: 'So‘zlarni to‘g‘ri tartiblang.',
        points: 10,
        difficulty: 'medium',
        question: 'Men ingliz tilini yoqtiraman.',
        words: ['I', 'like', 'English'],
        correctAnswer: 'I like English',
        explanation: 'I like English.',
      },
      29,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Review speaking',
      instruction: 'O‘zingizni ingliz tilida tanishtiring.',
      mode: 'conversation',
      phrase:
        'Hello! My name is Ali. I am a student. I like English.',
      translation:
        'Salom! Mening ismim Ali. Men o‘quvchiman. Men ingliz tilini yoqtiraman.',
      emoji: '🚀',
      repetitions: 2,
      targetWords: ['Hello', 'name', 'student', 'English'],
    },
    29,
  ),
  test(29, [
    mcq('f29-q1', '“Mening ismim Ali” = ?', ['My name is Ali', 'I name Ali', 'Ali my name', 'Name Ali'], 'My name is Ali', 'My name is — tanishtirish strukturasi.'),
    mcq('f29-q2', '“Men o‘quvchiman” = ?', ['I am a student', 'I have student', 'I student am', 'I is student'], 'I am a student', 'I bilan am ishlatiladi.'),
    mcq('f29-q3', '“Men ingliz tilini yoqtiraman” = ?', ['I like English', 'I English like', 'I am English', 'I like Englishing'], 'I like English', 'I like + object.'),
    mcq('f29-q4', '“Men suza olaman” = ?', ['I can swim', 'I swim can', 'I am swim', 'I can swimming'], 'I can swim', 'Can + fe’lning asosiy shakli.'),
    trueFalse('f29-q5', 'Foundation kursida o‘rgangan so‘zlarni gaplarda ishlatish muhim.', 'true', 'So‘zlarni kontekstda ishlatish ularni faol bilimga aylantiradi.'),
  ]),
)

/* =========================================================
   30 — FOUNDATION FINAL
========================================================= */

const lesson30 = baseLesson(
  30,
  'Foundation Final',
  'You made it! 🏆',
  '🏆',
  'Foundation kursining yakuniy darsi. Barcha asosiy bilimlarni sinovdan o‘tkazing.',
  [
    'Vocabulary',
    'Basic grammar',
    'Reading',
    'Daily English',
    'Communication',
  ],
  vocabulary(
    [
      { word: 'learn', translation: 'o‘rganmoq', emoji: '🧠', category: 'action', partOfSpeech: 'verb' },
      { word: 'speak', translation: 'gapirmoq', emoji: '🗣️', category: 'action', partOfSpeech: 'verb' },
      { word: 'read', translation: 'o‘qimoq', emoji: '📖', category: 'action', partOfSpeech: 'verb' },
      { word: 'listen', translation: 'tinglamoq', emoji: '🎧', category: 'action', partOfSpeech: 'verb' },
      { word: 'practice', translation: 'mashq qilmoq', emoji: '🏋️', category: 'action', partOfSpeech: 'verb' },
    ],
    30,
  ),
  [
    explanation(
      {
        type: 'summary',
        title: '🏆 You made it!',
        content:
          'Siz Foundation bosqichining barcha asosiy mavzularini tugatdingiz. Endi yakuniy sinov va keyingi bosqichga tayyorgarlik vaqti.',
        emoji: '🏆',
      },
      30,
      1,
    ),
    explanation(
      {
        type: 'tip',
        title: '🚀 Keep learning',
        content:
          'Til o‘rganishda eng kuchli qurol — muntazamlik. Har kuni ozgina bo‘lsa ham ingliz tili bilan shug‘ullaning.',
        emoji: '🔥',
      },
      30,
      2,
    ),
  ],
  [
    example(
      {
        english:
          'I learn English every day.',
        uzbek:
          'Men har kuni ingliz tilini o‘rganaman.',
        emoji: '🇬🇧',
      },
      30,
      1,
    ),
    example(
      {
        english:
          'I can speak, read and listen in English.',
        uzbek:
          'Men ingliz tilida gapira, o‘qiy va tinglay olaman.',
        emoji: '🎓',
      },
      30,
      2,
    ),
  ],
  [
    activity(
      {
        type: 'multiple-choice',
        title: '🏆 Final Challenge',
        instruction: 'Eng yaxshi javobni tanlang.',
        points: 10,
        difficulty: 'hard',
        question: 'Which sentence is correct?',
        options: [
          { id: 'a', text: 'I learn English every day.' },
          { id: 'b', text: 'I English learn every day.' },
          { id: 'c', text: 'I am learn English.' },
          { id: 'd', text: 'I learns English every day.' },
        ],
        correctAnswer: 'I learn English every day.',
        explanation:
          'Boshlang‘ich darajada to‘g‘ri gap: I learn English every day.',
      },
      30,
      1,
    ),
    activity(
      {
        type: 'sentence-builder',
        title: '🚀 Final sentence',
        instruction: 'O‘zingiz haqingizda gap tuzing.',
        points: 10,
        difficulty: 'hard',
        question: 'Men ingliz tilini o‘rganyapman.',
        words: ['I', 'learn', 'English'],
        correctAnswer: 'I learn English',
        explanation:
          'Foundation darajasida bu asosiy va to‘g‘ri modeldir.',
      },
      30,
      2,
    ),
  ],
  speaking(
    {
      title: '🎤 Foundation Speech',
      instruction:
        'O‘zingizni 3–4 gap bilan ingliz tilida tanishtiring.',
      mode: 'conversation',
      phrase:
        'Hello! My name is Ali. I am a student. I like English. I can learn English!',
      translation:
        'Salom! Mening ismim Ali. Men o‘quvchiman. Men ingliz tilini yoqtiraman. Men ingliz tilini o‘rgana olaman!',
      emoji: '🏆',
      repetitions: 2,
      targetWords: [
        'Hello',
        'name',
        'student',
        'like',
        'English',
      ],
    },
    30,
  ),
  test(30, [
    mcq(
      'f30-q1',
      '“I learn English every day” tarjimasi?',
      [
        'Men har kuni ingliz tilini o‘rganaman',
        'Men ingliz tilini yoqtirmayman',
        'Men kecha ingliz tilini o‘rgandim',
        'Men ingliz tilida gapirmayman',
      ],
      'Men har kuni ingliz tilini o‘rganaman',
      'Learn English every day — har kuni ingliz tilini o‘rganmoq.',
    ),
    mcq(
      'f30-q2',
      '“I can speak English” nimani anglatadi?',
      [
        'Men ingliz tilida gapira olaman',
        'Men ingliz tilini yozaman',
        'Men ingliz tilini yoqtirmayman',
        'Men ingliz tilini o‘rganmayman',
      ],
      'Men ingliz tilida gapira olaman',
      'Can speak — gapira olmoq.',
    ),
    mcq(
      'f30-q3',
      '“Practice” nimani anglatadi?',
      [
        'Mashq qilmoq',
        'Uxlamoq',
        'Yemoq',
        'Xayrlashmoq',
      ],
      'Mashq qilmoq',
      'Practice = mashq qilmoq.',
    ),
    mcq(
      'f30-q4',
      'Foundation kursini tugatgandan keyingi eng muhim qadam nima?',
      [
        'Muntazam davom etish',
        'Ingliz tilini to‘xtatish',
        'Faqat tarjima qilish',
        'Faqat test yodlash',
      ],
      'Muntazam davom etish',
      'Til ko‘nikmasi muntazam amaliyot bilan rivojlanadi.',
    ),
    trueFalse(
      'f30-q5',
      'Muntazam mashq qilish ingliz tilini rivojlantirishga yordam beradi.',
      'true',
      'Muntazam amaliyot til ko‘nikmalarini mustahkamlaydi.',
    ),
  ]),
)

/* =========================================================
   🇬🇧 FOUNDATION LESSONS
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
]

/* =========================================================
   🌱 FOUNDATION COURSE
========================================================= */

export const FOUNDATION_COURSE = {
  id: 'english-foundation',
  level: 'foundation' as const,

  title: 'English Foundation',
  shortTitle: 'Foundation',

  description:
    'Ingliz tilini noldan boshlab bosqichma-bosqich o‘rganish uchun 30 ta interaktiv dars.',

  emoji: '🌱',

  coverImage: '/english/images/foundation-cover.webp',

  lessonCount: 30,

  estimatedMinutes: 360,

  status: 'available' as const,

  color: 'green',

  cefr: 'Pre-A1 → A1',

  goals: [
    'Asosiy inglizcha so‘zlarni o‘rganish',
    'Oddiy gaplar tuzish',
    'O‘zini tanishtirish',
    'Kundalik suhbatlarni tushunish',
    'Oddiy matnlarni o‘qish',
    'Oddiy audio topshiriqlarni bajarish',
    'Boshlang‘ich grammar asoslarini egallash',
    'Ingliz tilida gapirishga ishonch hosil qilish',
  ],
}

/* =========================================================
   🔎 FIND LESSON
========================================================= */

export function getFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.id === lessonId,
  )
}

/* =========================================================
   🔢 FIND BY NUMBER
========================================================= */

export function getFoundationLessonByNumber(
  lessonNumber: number,
): EnglishLesson | undefined {
  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.lessonNumber === lessonNumber,
  )
}

/* =========================================================
   🔓 UNLOCK LOGIC
========================================================= */

export function isFoundationLessonUnlocked(
  lessonNumber: number,
  completedLessons: string[],
): boolean {
  if (lessonNumber === 1) {
    return true
  }

  const previousLessonId =
    `foundation-${lessonNumber - 1}`

  return completedLessons.includes(previousLessonId)
}

/* =========================================================
   📊 COURSE PROGRESS
========================================================= */

export function calculateFoundationProgress(
  completedLessons: string[],
): number {
  const completed = FOUNDATION_LESSONS.filter(
    (lesson) =>
      completedLessons.includes(lesson.id),
  ).length

  return Math.round(
    (completed / FOUNDATION_LESSONS.length) * 100,
  )
}

/* =========================================================
   🧭 NEXT LESSON
========================================================= */

export function getNextFoundationLesson(
  completedLessons: string[],
): EnglishLesson | undefined {
  return FOUNDATION_LESSONS.find(
    (lesson) =>
      !completedLessons.includes(lesson.id),
  )
}

/* =========================================================
   🏆 FOUNDATION COMPLETED?
========================================================= */

export function isFoundationCompleted(
  completedLessons: string[],
): boolean {
  return FOUNDATION_LESSONS.every(
    (lesson) =>
      completedLessons.includes(lesson.id),
  )
}

/* =========================================================
   📦 DEFAULT EXPORT
========================================================= */

export default FOUNDATION_LESSONS
