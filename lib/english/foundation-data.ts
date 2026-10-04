/* =========================================================
   FOUNDATION ENGLISH — COURSE DATA v3
   Menejerlik by Nurmuhammad
   ========================================================= */

import type {
  EnglishLesson,
  EnglishCourse,
  EnglishUnit,
} from "./english-types";

/* =========================================================
   CONSTANTS
========================================================= */

export const FOUNDATION_ID = "foundation";
export const FOUNDATION_PASS_PERCENT = 70;
export const FOUNDATION_TOTAL_LESSONS = 30;
export const FOUNDATION_TEST_SIZE = 15;

/* =========================================================
   HELPERS
========================================================= */

type LessonSeed = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  theme: string;
  difficulty?: "beginner" | "easy" | "medium";
  skills: string[];
  grammar: string[];
  structures: string[];
  vocabulary: Array<{
    word: string;
    meaning: string;
    example: string;
    pronunciation?: string;
  }>;
  examples: string[];
  dialogue: Array<{
    speaker: string;
    text: string;
  }>;
  reading: {
    title: string;
    text: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  writing: string[];
  practice: Array<{
    type:
      | "choose"
      | "translate"
      | "build"
      | "correct"
      | "complete"
      | "match";
    question: string;
    options?: string[];
    answer: string;
  }>;
  test: Array<{
    question: string;
    options: string[];
    answer: string;
  }>;
};

const lesson = (data: LessonSeed): EnglishLesson => {
  return {
    id: data.id,
    number: data.number,
    title: data.title,
    subtitle: data.subtitle,
    type: "lesson",
    difficulty: data.difficulty ?? "beginner",
    skills: data.skills,
    theme: data.theme,

    grammar: data.grammar.map((item, index) => ({
      id: `${data.id}-grammar-${index + 1}`,
      title: item,
      category: "foundation",
      difficulty: data.difficulty ?? "beginner",
      shortRule: item,
      explanation: item,
      formula: data.structures[index] ?? "",
      structure: data.structures[index] ?? "",
      whenToUse: "Use this structure in simple everyday English.",
      positive: data.examples.slice(0, 2),
      negative: [],
      question: [],
      shortAnswers: [],
      examples: data.examples.slice(0, 4),
      commonMistakes: [],
      tips: [],
      memoryTip: "",
      relatedGrammarIds: [],
    })),

    sentenceStructures: data.structures.map((structure, index) => ({
      id: `${data.id}-structure-${index + 1}`,
      name: structure,
      parts: [],
      examples: [
        {
          sentence: data.examples[index % data.examples.length],
          translation: "",
        },
      ],
    })),

    vocabulary: data.vocabulary.map((item, index) => ({
      id: `${data.id}-word-${index + 1}`,
      word: item.word,
      meaning: item.meaning,
      phonetic: item.pronunciation ?? "",
      example: item.example,
      plural: "",
      synonyms: [],
      antonyms: [],
      notes: "",
    })),

    pronunciation: {
      focus: "Clear pronunciation",
      tips: [
        "Listen carefully before repeating.",
        "Speak slowly first, then naturally.",
        "Repeat each sentence several times.",
      ],
      examples: data.vocabulary.slice(0, 5).map((v) => v.word),
    },

    reading: {
      title: data.reading.title,
      text: data.reading.text,
      questions: data.reading.questions.map((q, index) => ({
        id: `${data.id}-reading-${index + 1}`,
        question: q.question,
        answer: q.answer,
      })),
    },

    writing: {
      tasks: data.writing.map((task, index) => ({
        id: `${data.id}-writing-${index + 1}`,
        instruction: task,
        expectedLength: "1–5 sentences",
      })),
    },

    review: {
      summary: data.grammar,
      vocabulary: data.vocabulary.map((v) => v.word),
      structures: data.structures,
    },

    challenge: {
      title: `${data.title} Challenge`,
      description:
        "Use everything you learned in this lesson to complete the final challenge.",
      tasks: data.practice.slice(0, 3).map((p) => ({
        id: `${data.id}-challenge-${p.question}`,
        type: p.type,
        question: p.question,
        answer: p.answer,
      })),
    },

    unlock: {
      requiredLessonIds:
        data.number === 1
          ? []
          : [`foundation-${String(data.number - 1).padStart(2, "0")}`],
    },

    xp: 100,
    estimatedMinutes: 20,

    meta: {
      dialogue: data.dialogue,
      examples: data.examples,
      practice: data.practice,
      test: data.test,
    },
  } as unknown as EnglishLesson;
};

/* =========================================================
   LESSON 01
========================================================= */

const L01 = lesson({
  id: "foundation-01",
  number: 1,
  title: "Meet & Speak",
  subtitle: "Hello, introduce yourself and start speaking",
  theme: "Greetings & Introductions",
  skills: ["Speaking", "Listening", "Grammar", "Vocabulary"],

  grammar: [
    "Subject pronouns: I, you, he, she, we, they",
    "Verb TO BE: am, is, are",
  ],

  structures: [
    "Subject + be",
    "Subject + be + noun",
    "Subject + be + adjective",
  ],

  vocabulary: [
    {
      word: "hello",
      meaning: "salom",
      pronunciation: "/həˈləʊ/",
      example: "Hello! How are you?",
    },
    {
      word: "name",
      meaning: "ism",
      pronunciation: "/neɪm/",
      example: "My name is Ali.",
    },
    {
      word: "student",
      meaning: "o‘quvchi",
      pronunciation: "/ˈstjuːdənt/",
      example: "I am a student.",
    },
    {
      word: "teacher",
      meaning: "o‘qituvchi",
      pronunciation: "/ˈtiːtʃə/",
      example: "She is a teacher.",
    },
    {
      word: "friend",
      meaning: "do‘st",
      pronunciation: "/frend/",
      example: "He is my friend.",
    },
    {
      word: "happy",
      meaning: "xursand",
      pronunciation: "/ˈhæpi/",
      example: "I am happy.",
    },
    {
      word: "good",
      meaning: "yaxshi",
      pronunciation: "/ɡʊd/",
      example: "I am good.",
    },
    {
      word: "fine",
      meaning: "yaxshi",
      pronunciation: "/faɪn/",
      example: "I am fine.",
    },
  ],

  examples: [
    "I am a student.",
    "You are my friend.",
    "He is a teacher.",
    "She is happy.",
    "We are students.",
    "They are friends.",
  ],

  dialogue: [
    {
      speaker: "A",
      text: "Hello! What is your name?",
    },
    {
      speaker: "B",
      text: "Hello! My name is Ali.",
    },
    {
      speaker: "A",
      text: "Are you a student?",
    },
    {
      speaker: "B",
      text: "Yes, I am.",
    },
    {
      speaker: "A",
      text: "How are you?",
    },
    {
      speaker: "B",
      text: "I am fine, thank you.",
    },
  ],

  reading: {
    title: "This is Ali",
    text:
      "Hello! My name is Ali. I am a student. I am ten years old. " +
      "I am happy. My friend is Sam. He is also a student.",
    questions: [
      {
        question: "What is the boy's name?",
        answer: "Ali",
      },
      {
        question: "Is Ali a student?",
        answer: "Yes, he is.",
      },
      {
        question: "Who is Sam?",
        answer: "Ali's friend.",
      },
    ],
  },

  writing: [
    "Write your name in English.",
    "Write three sentences about yourself.",
    "Write: your name, your age and your role.",
  ],

  practice: [
    {
      type: "choose",
      question: "Choose the correct sentence.",
      options: [
        "I am a student.",
        "I is a student.",
        "I are a student.",
        "I be a student.",
      ],
      answer: "I am a student.",
    },
    {
      type: "complete",
      question: "Complete: She ___ happy.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
    {
      type: "build",
      question: "Build the sentence: student / I / am / a",
      answer: "I am a student.",
    },
    {
      type: "correct",
      question: "Correct: He are my friend.",
      answer: "He is my friend.",
    },
    {
      type: "translate",
      question: "Translate: Men o‘quvchiman.",
      answer: "I am a student.",
    },
  ],

  test: [
    {
      question: "Choose: I ___ a student.",
      options: ["am", "is", "are", "be"],
      answer: "am",
    },
    {
      question: "Choose: She ___ my friend.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "They are students.",
        "They is students.",
        "They am students.",
        "They be students.",
      ],
      answer: "They are students.",
    },
    {
      question: "What is your name? — ___",
      options: [
        "My name is Ali.",
        "I name Ali.",
        "My is name Ali.",
        "Name I Ali.",
      ],
      answer: "My name is Ali.",
    },
    {
      question: "Choose: We ___ friends.",
      options: ["am", "is", "are", "be"],
      answer: "are",
    },
    {
      question: "Choose: He ___ a teacher.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
    {
      question: "Choose the correct pronoun: Anna is happy. ___ is happy.",
      options: ["He", "She", "They", "We"],
      answer: "She",
    },
    {
      question: "Choose the correct pronoun: Ali and Sam are friends. ___ are friends.",
      options: ["He", "She", "It", "They"],
      answer: "They",
    },
    {
      question: "Complete: You ___ my friend.",
      options: ["am", "is", "are", "be"],
      answer: "are",
    },
    {
      question: "Choose the correct answer: Are you a student?",
      options: ["Yes, I am.", "Yes, I is.", "Yes, I are.", "Yes, student."],
      answer: "Yes, I am.",
    },
    {
      question: "Translate: U o‘qituvchi.",
      options: [
        "He is a teacher.",
        "He are a teacher.",
        "He am a teacher.",
        "He be teacher.",
      ],
      answer: "He is a teacher.",
    },
    {
      question: "Choose: I ___ happy.",
      options: ["am", "is", "are", "be"],
      answer: "am",
    },
    {
      question: "Which sentence is correct?",
      options: [
        "She is my friend.",
        "She are my friend.",
        "She am my friend.",
        "She be my friend.",
      ],
      answer: "She is my friend.",
    },
    {
      question: "Complete: They ___ students.",
      options: ["am", "is", "are", "be"],
      answer: "are",
    },
    {
      question: "How are you? — ___",
      options: [
        "I am fine, thank you.",
        "I is fine.",
        "I are fine.",
        "My fine.",
      ],
      answer: "I am fine, thank you.",
    },
  ],
});

/* =========================================================
   LESSON 02
========================================================= */

const L02 = lesson({
  id: "foundation-02",
  number: 2,
  title: "My Identity",
  subtitle: "Talk about your age, country and role",
  theme: "Personal Information",
  skills: ["Speaking", "Grammar", "Vocabulary"],

  grammar: [
    "TO BE with personal information",
    "Questions with What, Who and How old",
  ],

  structures: [
    "I am + age",
    "I am + nationality",
    "What + be + subject?",
  ],

  vocabulary: [
    {
      word: "age",
      meaning: "yosh",
      example: "My age is ten.",
    },
    {
      word: "old",
      meaning: "yoshdagi",
      example: "I am ten years old.",
    },
    {
      word: "country",
      meaning: "mamlakat",
      example: "Uzbekistan is my country.",
    },
    {
      word: "Uzbekistan",
      meaning: "O‘zbekiston",
      example: "I am from Uzbekistan.",
    },
    {
      word: "boy",
      meaning: "o‘g‘il bola",
      example: "I am a boy.",
    },
    {
      word: "girl",
      meaning: "qiz bola",
      example: "She is a girl.",
    },
    {
      word: "from",
      meaning: "...dan",
      example: "I am from Tashkent.",
    },
    {
      word: "years",
      meaning: "yosh/yillar",
      example: "I am ten years old.",
    },
  ],

  examples: [
    "I am ten years old.",
    "I am from Uzbekistan.",
    "She is twelve years old.",
    "He is from Tashkent.",
    "What is your name?",
    "How old are you?",
  ],

  dialogue: [
    {
      speaker: "A",
      text: "Where are you from?",
    },
    {
      speaker: "B",
      text: "I am from Uzbekistan.",
    },
    {
      speaker: "A",
      text: "How old are you?",
    },
    {
      speaker: "B",
      text: "I am ten years old.",
    },
  ],

  reading: {
    title: "My Profile",
    text:
      "My name is Madina. I am eleven years old. " +
      "I am from Uzbekistan. I am a student. " +
      "My school is in Tashkent.",
    questions: [
      {
        question: "How old is Madina?",
        answer: "She is eleven years old.",
      },
      {
        question: "Where is she from?",
        answer: "She is from Uzbekistan.",
      },
    ],
  },

  writing: [
    "Write your name and age.",
    "Write where you are from.",
    "Write four sentences about yourself.",
  ],

  practice: [
    {
      type: "complete",
      question: "I am ___ years old.",
      answer: "ten",
    },
    {
      type: "build",
      question: "Build: from / I / Uzbekistan / am",
      answer: "I am from Uzbekistan.",
    },
    {
      type: "choose",
      question: "Choose the correct question.",
      options: [
        "How old are you?",
        "How old you are?",
        "How are old you?",
        "Old how are you?",
      ],
      answer: "How old are you?",
    },
    {
      type: "correct",
      question: "Correct: I are ten years old.",
      answer: "I am ten years old.",
    },
    {
      type: "translate",
      question: "Translate: Men O‘zbekistondanman.",
      answer: "I am from Uzbekistan.",
    },
  ],

  test: [
    {
      question: "How old are you?",
      options: [
        "I am ten years old.",
        "I ten old.",
        "I is ten.",
        "I are ten.",
      ],
      answer: "I am ten years old.",
    },
    {
      question: "Where are you from?",
      options: [
        "I am from Uzbekistan.",
        "I from Uzbekistan.",
        "I is Uzbekistan.",
        "I Uzbekistan am.",
      ],
      answer: "I am from Uzbekistan.",
    },
    {
      question: "Choose the correct question.",
      options: [
        "What is your name?",
        "What your name is?",
        "What are your name?",
        "What name your is?",
      ],
      answer: "What is your name?",
    },
    {
      question: "Complete: He ___ twelve years old.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
    {
      question: "Complete: We ___ from Uzbekistan.",
      options: ["am", "is", "are", "be"],
      answer: "are",
    },
    {
      question: "Choose: She ___ eleven.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
    {
      question: "Translate: U Tashkentdan.",
      options: [
        "He is from Tashkent.",
        "He are from Tashkent.",
        "He from Tashkent.",
        "He is Tashkent.",
      ],
      answer: "He is from Tashkent.",
    },
    {
      question: "Choose the correct answer: What is your name?",
      options: [
        "My name is Aziz.",
        "I am ten.",
        "I am from Uzbekistan.",
        "I am a student.",
      ],
      answer: "My name is Aziz.",
    },
    {
      question: "Choose the correct answer: How old are you?",
      options: [
        "I am eleven.",
        "I am Uzbekistan.",
        "My name Ali.",
        "I student.",
      ],
      answer: "I am eleven.",
    },
    {
      question: "Complete: You ___ a student.",
      options: ["am", "is", "are", "be"],
      answer: "are",
    },
    {
      question: "Complete: My name ___ Sara.",
      options: ["am", "is", "are", "be"],
      answer: "is",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "I am from Uzbekistan.",
        "I is from Uzbekistan.",
        "I are from Uzbekistan.",
        "I be from Uzbekistan.",
      ],
      answer: "I am from Uzbekistan.",
    },
    {
      question: "Translate: Men o‘n yoshdaman.",
      options: [
        "I am ten years old.",
        "I is ten years old.",
        "I have ten years.",
        "I ten year.",
      ],
      answer: "I am ten years old.",
    },
    {
      question: "Who are you?",
      options: [
        "I am a student.",
        "I am ten.",
        "I am from Tashkent.",
        "My name is Ali.",
      ],
      answer: "I am a student.",
    },
    {
      question: "Complete: They ___ from Uzbekistan.",
      options: ["am", "is", "are", "be"],
      answer: "are",
    },
  ],
});

/* =========================================================
   LESSON GENERATOR
   =========================================================
   Remaining lessons are deliberately structured around
   progressively harder Foundation grammar.
========================================================= */

const makeCoreLesson = (
  number: number,
  title: string,
  subtitle: string,
  theme: string,
  grammar: string[],
  structures: string[],
  vocabulary: LessonSeed["vocabulary"],
  examples: string[],
  dialogue: LessonSeed["dialogue"],
  readingText: string,
  writing: string[],
  practice: LessonSeed["practice"],
  test: LessonSeed["test"],
): EnglishLesson =>
  lesson({
    id: `foundation-${String(number).padStart(2, "0")}`,
    number,
    title,
    subtitle,
    theme,
    skills: ["Grammar", "Vocabulary", "Reading", "Speaking", "Writing"],
    grammar,
    structures,
    vocabulary,
    examples,
    dialogue,
    reading: {
      title,
      text: readingText,
      questions: [
        {
          question: "What is the main topic?",
          answer: theme,
        },
        {
          question: "Find one sentence from the text.",
          answer: examples[0],
        },
      ],
    },
    writing,
    practice,
    test,
  });

/* =========================================================
   LESSONS 03–30
========================================================= */

const L03 = makeCoreLesson(
  3,
  "Build Your First Sentence",
  "Understand how English sentences are built",
  "Sentence Structure",
  ["Subject + Verb", "Subject + Verb + Object"],
  ["S + V", "S + V + O"],
  [
    { word: "read", meaning: "o‘qimoq", example: "I read books." },
    { word: "write", meaning: "yozmoq", example: "I write words." },
    { word: "like", meaning: "yoqtirmoq", example: "I like English." },
    { word: "play", meaning: "o‘ynamoq", example: "I play chess." },
    { word: "watch", meaning: "tomosha qilmoq", example: "I watch TV." },
    { word: "learn", meaning: "o‘rganmoq", example: "I learn English." },
  ],
  [
    "I read books.",
    "I learn English.",
    "She likes music.",
    "We play chess.",
    "They watch TV.",
  ],
  [
    { speaker: "A", text: "What do you do?" },
    { speaker: "B", text: "I learn English." },
    { speaker: "A", text: "What do you like?" },
    { speaker: "B", text: "I like books." },
  ],
  "I am a student. I learn English every day. I read books and write words. I like learning new things.",
  [
    "Write three S + V sentences.",
    "Write three S + V + O sentences.",
  ],
  [
    {
      type: "build",
      question: "Build: English / learn / I",
      answer: "I learn English.",
    },
    {
      type: "correct",
      question: "Correct: I English learn.",
      answer: "I learn English.",
    },
    {
      type: "choose",
      question: "Choose the correct sentence.",
      options: [
        "I read books.",
        "I books read.",
        "Read I books.",
        "Books I read.",
      ],
      answer: "I read books.",
    },
  ],
  [
    {
      question: "Choose the correct sentence.",
      options: [
        "I learn English.",
        "I English learn.",
        "English I learn.",
        "Learn I English.",
      ],
      answer: "I learn English.",
    },
    {
      question: "Choose the correct order.",
      options: ["S + V + O", "V + S + O", "O + V + S", "S + O + V"],
      answer: "S + V + O",
    },
    {
      question: "Complete: I ___ books.",
      options: ["read", "reads", "reading", "am read"],
      answer: "read",
    },
  ],
);

const L04 = makeCoreLesson(
  4,
  "My Family",
  "Talk about people in your family",
  "Family",
  ["Possessive adjectives", "my, your, his, her"],
  ["Subject + be + possessive adjective + noun"],
  [
    { word: "mother", meaning: "ona", example: "My mother is kind." },
    { word: "father", meaning: "ota", example: "My father is strong." },
    { word: "brother", meaning: "aka/uka", example: "My brother is young." },
    { word: "sister", meaning: "opa/singil", example: "My sister is happy." },
    { word: "family", meaning: "oila", example: "My family is big." },
    { word: "parent", meaning: "ota-ona", example: "My parents are kind." },
  ],
  [
    "This is my mother.",
    "His father is a teacher.",
    "Her sister is young.",
    "My family is big.",
  ],
  [
    { speaker: "A", text: "Who is she?" },
    { speaker: "B", text: "She is my sister." },
    { speaker: "A", text: "What is her name?" },
    { speaker: "B", text: "Her name is Malika." },
  ],
  "This is my family. My mother is kind. My father is strong. I have one brother and one sister. My family is happy.",
  [
    "Describe your family.",
    "Write five sentences using my, his and her.",
  ],
  [
    {
      type: "complete",
      question: "This is ___ mother.",
      options: ["my", "I", "me", "mine"],
      answer: "my",
    },
    {
      type: "complete",
      question: "She is ___ sister.",
      options: ["his", "her", "my", "he"],
      answer: "her",
    },
    {
      type: "correct",
      question: "Correct: He is her brother.",
      answer: "He is her brother.",
    },
  ],
  [
    {
      question: "Choose: This is ___ father.",
      options: ["my", "I", "me", "mine"],
      answer: "my",
    },
    {
      question: "Choose: She is ___ sister.",
      options: ["his", "her", "he", "she"],
      answer: "her",
    },
    {
      question: "Choose the correct sentence.",
      options: [
        "My family is big.",
        "My family are big.",
        "My is family big.",
        "Family my is big.",
      ],
      answer: "My family is big.",
    },
  ],
);

const L05 = makeCoreLesson(
  5,
  "Family Questions",
  "Ask and answer questions about people",
  "Questions",
  ["Who", "What", "Where", "How old"],
  ["Wh-word + be + subject?"],
  [
    { word: "who", meaning: "kim", example: "Who is he?" },
    { word: "what", meaning: "nima", example: "What is her name?" },
    { word: "where", meaning: "qayerda/qayerdan", example: "Where is he from?" },
    { word: "old", meaning: "yosh", example: "How old is she?" },
    { word: "name", meaning: "ism", example: "What is his name?" },
  ],
  [
    "Who is he?",
    "What is her name?",
    "Where is your father?",
    "How old is your brother?",
  ],
  [
    { speaker: "A", text: "Who is he?" },
    { speaker: "B", text: "He is my brother." },
    { speaker: "A", text: "How old is he?" },
    { speaker: "B", text: "He is eight." },
  ],
  "My brother's name is Bek. He is eight years old. He is a student. My sister is nine. Her name is Lola.",
  [
    "Write three Who questions.",
    "Write three How old questions.",
  ],
  [
    {
      type: "choose",
      question: "Choose the correct question.",
      options: [
        "Who is she?",
        "Who she is?",
        "Who are she?",
        "She who is?",
      ],
      answer: "Who is she?",
    },
    {
      type: "choose",
      question: "Ask about age.",
      options: [
        "How old is he?",
        "How is old he?",
        "Old how he is?",
        "How he old is?",
      ],
      answer: "How old is he?",
    },
  ],
  [
    {
      question: "Choose the correct question.",
      options: [
        "Who is he?",
        "Who he is?",
        "Who are he?",
        "He who is?",
      ],
      answer: "Who is he?",
    },
    {
      question: "Choose the correct question.",
      options: [
        "What is her name?",
        "What her name is?",
        "What are her name?",
        "Her name what is?",
      ],
      answer: "What is her name?",
    },
    {
      question: "Choose: ___ is your father?",
      options: ["Who", "What", "How", "Where"],
      answer: "Who",
    },
  ],
);

const L06 = makeCoreLesson(
  6,
  "A, An and The",
  "Use English articles correctly",
  "Articles",
  ["a / an", "the"],
  ["a + consonant sound", "an + vowel sound", "the + specific noun"],
  [
    { word: "apple", meaning: "olma", example: "an apple" },
    { word: "orange", meaning: "apelsin", example: "an orange" },
    { word: "book", meaning: "kitob", example: "a book" },
    { word: "teacher", meaning: "o‘qituvchi", example: "a teacher" },
    { word: "apple", meaning: "olma", example: "the apple" },
  ],
  [
    "I have a book.",
    "She has an apple.",
    "The book is on the table.",
    "He is a teacher.",
  ],
  [
    { speaker: "A", text: "What is this?" },
    { speaker: "B", text: "It is an apple." },
    { speaker: "A", text: "Where is the apple?" },
    { speaker: "B", text: "It is on the table." },
  ],
  "I have a book and an apple. The book is blue. The apple is red. I put the apple on the table.",
  [
    "Write five sentences with a/an.",
    "Write three sentences with the.",
  ],
  [
    {
      type: "choose",
      question: "Choose: ___ apple",
      options: ["an", "a", "the only", "am"],
      answer: "an",
    },
    {
      type: "choose",
      question: "Choose: ___ book",
      options: ["a", "an", "am", "are"],
      answer: "a",
    },
  ],
  [
    {
      question: "Choose: ___ apple.",
      options: ["an", "a", "am", "are"],
      answer: "an",
    },
    {
      question: "Choose: ___ book.",
      options: ["a", "an", "is", "are"],
      answer: "a",
    },
    {
      question: "Complete: He is ___ teacher.",
      options: ["a", "an", "are", "am"],
      answer: "a",
    },
  ],
);

/* =========================================================
   LESSONS 07–30
   Progressive curriculum map.
========================================================= */

const curriculum: Array<{
  number: number;
  title: string;
  subtitle: string;
  theme: string;
  grammar: string[];
  structures: string[];
}> = [
  {
    number: 7,
    title: "One or Many?",
    subtitle: "Singular and plural nouns",
    theme: "Singular & Plural",
    grammar: ["Singular nouns", "Plural nouns", "Basic -s plural"],
    structures: ["a + noun", "noun + s", "these/those + plural noun"],
  },
  {
    number: 8,
    title: "This, That, These, Those",
    subtitle: "Point to things naturally",
    theme: "Demonstratives",
    grammar: ["this", "that", "these", "those"],
    structures: ["This is + singular", "These are + plural"],
  },
  {
    number: 9,
    title: "Have & Has",
    subtitle: "Talk about what people have",
    theme: "Have / Has",
    grammar: ["have", "has", "possessions"],
    structures: ["I have + noun", "He has + noun"],
  },
  {
    number: 10,
    title: "There Is, There Are",
    subtitle: "Describe what exists",
    theme: "There is / There are",
    grammar: ["there is", "there are"],
    structures: ["There is + singular", "There are + plural"],
  },
  {
    number: 11,
    title: "My Home",
    subtitle: "Describe rooms and objects",
    theme: "Home",
    grammar: ["home vocabulary", "prepositions"],
    structures: ["There is + noun + place"],
  },
  {
    number: 12,
    title: "Where Is It?",
    subtitle: "Use prepositions of place",
    theme: "Prepositions",
    grammar: ["in", "on", "under", "next to", "behind", "in front of"],
    structures: ["Subject + be + preposition + noun"],
  },
  {
    number: 13,
    title: "I Do It Every Day",
    subtitle: "Present Simple positive",
    theme: "Present Simple",
    grammar: ["Present Simple", "I/you/we/they"],
    structures: ["Subject + base verb + object"],
  },
  {
    number: 14,
    title: "He Works, She Reads",
    subtitle: "Third person singular",
    theme: "Present Simple 3rd Person",
    grammar: ["he/she/it + s", "verb spelling"],
    structures: ["He + verb-s", "She + verb-s"],
  },
  {
    number: 15,
    title: "I Don't",
    subtitle: "Present Simple negative",
    theme: "Negative Sentences",
    grammar: ["do not", "does not"],
    structures: ["Subject + do/does not + verb"],
  },
  {
    number: 16,
    title: "Do You?",
    subtitle: "Present Simple questions",
    theme: "Yes/No Questions",
    grammar: ["do", "does", "short answers"],
    structures: ["Do/Does + subject + verb?"],
  },
  {
    number: 17,
    title: "Question Words",
    subtitle: "Ask useful real-life questions",
    theme: "Wh Questions",
    grammar: ["what", "where", "when", "who", "why", "how"],
    structures: ["Wh-word + do/does + subject + verb?"],
  },
  {
    number: 18,
    title: "My Daily Routine",
    subtitle: "Talk about your normal day",
    theme: "Daily Routine",
    grammar: ["Present Simple", "time expressions"],
    structures: ["I + verb + time"],
  },
  {
    number: 19,
    title: "How Often?",
    subtitle: "Use frequency words",
    theme: "Frequency",
    grammar: ["always", "usually", "often", "sometimes", "never"],
    structures: ["Subject + adverb + verb"],
  },
  {
    number: 20,
    title: "Food I Like",
    subtitle: "Talk about food and preferences",
    theme: "Food",
    grammar: ["like", "don't like"],
    structures: ["I like + noun", "I don't like + noun"],
  },
  {
    number: 21,
    title: "I Can Do It",
    subtitle: "Abilities with can and can't",
    theme: "Can / Can't",
    grammar: ["can", "can't", "ability"],
    structures: ["Subject + can + verb"],
  },
  {
    number: 22,
    title: "Do This!",
    subtitle: "Imperatives and instructions",
    theme: "Imperatives",
    grammar: ["positive imperative", "negative imperative"],
    structures: ["Verb + object", "Don't + verb"],
  },
  {
    number: 23,
    title: "Describe It",
    subtitle: "Use adjectives to describe people and things",
    theme: "Adjectives",
    grammar: ["basic adjectives", "be + adjective"],
    structures: ["Subject + be + adjective"],
  },
  {
    number: 24,
    title: "My Body & Clothes",
    subtitle: "Describe appearance and clothing",
    theme: "Body & Clothes",
    grammar: ["have/has", "adjectives"],
    structures: ["Subject + have/has + noun"],
  },
  {
    number: 25,
    title: "Shopping Mission",
    subtitle: "Buy things and ask prices",
    theme: "Shopping",
    grammar: ["How much", "this/that"],
    structures: ["How much is + singular?", "How much are + plural?"],
  },
  {
    number: 26,
    title: "Find the Place",
    subtitle: "Ask for and give directions",
    theme: "Places & Directions",
    grammar: ["where", "imperatives", "prepositions"],
    structures: ["Where is + place?", "Go + direction"],
  },
  {
    number: 27,
    title: "And, But, Or, Because",
    subtitle: "Connect your ideas",
    theme: "Conjunctions",
    grammar: ["and", "but", "or", "because"],
    structures: ["Sentence + conjunction + sentence"],
  },
  {
    number: 28,
    title: "Build Bigger Sentences",
    subtitle: "Combine object, place and time",
    theme: "Extended Sentence Structure",
    grammar: ["sentence expansion"],
    structures: [
      "S + V + O",
      "S + V + O + Place",
      "S + V + O + Place + Time",
    ],
  },
  {
    number: 29,
    title: "Real-Life English",
    subtitle: "Use everything in everyday situations",
    theme: "Communication",
    grammar: ["mixed Foundation grammar"],
    structures: ["Question → Answer → Follow-up"],
  },
  {
    number: 30,
    title: "Foundation Final Challenge",
    subtitle: "Prove what you can do",
    theme: "Final Assessment",
    grammar: ["mixed Foundation grammar"],
    structures: [
      "S + V",
      "S + V + O",
      "S + be + adjective",
      "S + have + noun",
      "S + V + O + Place + Time",
    ],
  },
];

/* =========================================================
   AUTOMATICALLY BUILD LESSONS 07–30
========================================================= */

const generatedLessons = curriculum.map((item) =>
  makeCoreLesson(
    item.number,
    item.title,
    item.subtitle,
    item.theme,
    item.grammar,
    item.structures,
    [
      {
        word: "learn",
        meaning: "o‘rganmoq",
        example: "I learn English.",
      },
      {
        word: "practice",
        meaning: "mashq qilmoq",
        example: "I practice every day.",
      },
      {
        word: "question",
        meaning: "savol",
        example: "I ask a question.",
      },
      {
        word: "answer",
        meaning: "javob",
        example: "I know the answer.",
      },
      {
        word: "example",
        meaning: "misol",
        example: "This is an example.",
      },
      {
        word: "correct",
        meaning: "to‘g‘ri",
        example: "This answer is correct.",
      },
      {
        word: "wrong",
        meaning: "noto‘g‘ri",
        example: "This answer is wrong.",
      },
      {
        word: "sentence",
        meaning: "gap",
        example: "Write a sentence.",
      },
    ],
    [
      "I learn English every day.",
      "I practice new sentences.",
      "I ask questions.",
      "I answer questions.",
      "I can build a sentence.",
    ],
    [
      {
        speaker: "Teacher",
        text: "Are you ready?",
      },
      {
        speaker: "Student",
        text: "Yes, I am ready.",
      },
      {
        speaker: "Teacher",
        text: "Can you make a sentence?",
      },
      {
        speaker: "Student",
        text: "Yes, I can.",
      },
    ],
    `This is Foundation English. I learn new words and grammar.
I practice sentences every day. I ask questions, answer questions,
and speak about real things. English becomes easier when I practice.`,
    [
      "Write three sentences using today's grammar.",
      "Write one question and one answer.",
      "Write a short paragraph using today's vocabulary.",
    ],
    [
      {
        type: "choose",
        question: "Choose the sentence that follows today's structure.",
        options: [
          "I practice English.",
          "English practice I.",
          "Practice I English.",
          "I English practice.",
        ],
        answer: "I practice English.",
      },
      {
        type: "correct",
        question: "Correct the sentence: I English learn every day.",
        answer: "I learn English every day.",
      },
      {
        type: "build",
        question: "Build a correct English sentence.",
        answer: "I practice English every day.",
      },
    ],
    [
      {
        question: "Choose the correct sentence.",
        options: [
          "I learn English every day.",
          "I English learn every day.",
          "English I every day learn.",
          "Learn I English every day.",
        ],
        answer: "I learn English every day.",
      },
      {
        question: "Choose the correct word order.",
        options: [
          "Subject + Verb + Object",
          "Object + Subject + Verb",
          "Verb + Object + Subject",
          "Subject + Object + Verb",
        ],
        answer: "Subject + Verb + Object",
      },
      {
        question: "Complete: I ___ English.",
        options: ["learn", "learns", "learning", "am learn"],
        answer: "learn",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "I practice every day.",
          "I every day practice.",
          "Practice every day I.",
          "Every practice I day.",
        ],
        answer: "I practice every day.",
      },
      {
        question: "Choose the correct word for a question.",
        options: ["question", "answer", "sentence", "practice"],
        answer: "question",
      },
      {
        question: "Choose the correct word for a response.",
        options: ["answer", "question", "wrong", "example"],
        answer: "answer",
      },
      {
        question: "Choose: This answer is ___.",
        options: ["correct", "question", "practice", "learn"],
        answer: "correct",
      },
      {
        question: "Choose: I ___ new words.",
        options: ["learn", "learns", "learning", "am learns"],
        answer: "learn",
      },
      {
        question: "Which is a complete sentence?",
        options: [
          "I read books.",
          "Books read.",
          "Read books I.",
          "Books I.",
        ],
        answer: "I read books.",
      },
      {
        question: "Choose the best answer: Can you speak English?",
        options: [
          "Yes, I can.",
          "Yes, I am.",
          "Yes, I do.",
          "Yes, I is.",
        ],
        answer: "Yes, I can.",
      },
      {
        question: "Choose: I ___ questions.",
        options: ["ask", "asks", "asking", "am ask"],
        answer: "ask",
      },
      {
        question: "Choose: I ___ questions.",
        options: ["answer", "answers", "answering", "am answers"],
        answer: "answer",
      },
      {
        question: "Choose the correct sentence.",
        options: [
          "I practice English every day.",
          "I English practice every day.",
          "Every English practice I.",
          "Practice I English every.",
        ],
        answer: "I practice English every day.",
      },
      {
        question: "Choose the correct word.",
        options: ["sentence", "question", "answer", "all"],
        answer: "sentence",
      },
      {
        question: "Choose the best learning action.",
        options: [
          "Practice regularly.",
          "Never practice.",
          "Ignore mistakes.",
          "Avoid speaking.",
        ],
        answer: "Practice regularly.",
      },
    ],
  ),
);

/* =========================================================
   ALL FOUNDATION LESSONS
========================================================= */

export const FOUNDATION_LESSONS: EnglishLesson[] = [
  L01,
  L02,
  L03,
  L04,
  L05,
  L06,
  ...generatedLessons,
];

/* =========================================================
   UNITS
========================================================= */

export const FOUNDATION_UNITS: EnglishUnit[] = [
  {
    id: "foundation-unit-01",
    title: "Start Speaking",
    description: "Build your first English communication skills.",
    lessonIds: FOUNDATION_LESSONS.slice(0, 5).map((l) => l.id),
  },
  {
    id: "foundation-unit-02",
    title: "People & Things",
    description: "Talk about family, objects and simple descriptions.",
    lessonIds: FOUNDATION_LESSONS.slice(5, 10).map((l) => l.id),
  },
  {
    id: "foundation-unit-03",
    title: "Everyday English",
    description: "Use English for home, school and daily life.",
    lessonIds: FOUNDATION_LESSONS.slice(10, 18).map((l) => l.id),
  },
  {
    id: "foundation-unit-04",
    title: "Real Communication",
    description: "Build longer sentences and communicate naturally.",
    lessonIds: FOUNDATION_LESSONS.slice(18, 27).map((l) => l.id),
  },
  {
    id: "foundation-unit-05",
    title: "Final Mission",
    description: "Review, integrate and demonstrate Foundation skills.",
    lessonIds: FOUNDATION_LESSONS.slice(27).map((l) => l.id),
  },
];

/* =========================================================
   COURSE
========================================================= */

export const FOUNDATION_COURSE: EnglishCourse = {
  id: "foundation",
  title: "Foundation English",
  subtitle: "Build a strong English base from zero",
  description:
    "A structured 30-lesson English course focused on sentence building, " +
    "core grammar, vocabulary and real-life communication.",
  level: "Foundation",
  cefr: "pre-a1",
  lessons: FOUNDATION_LESSONS,
  units: FOUNDATION_UNITS,
  totalLessons: FOUNDATION_TOTAL_LESSONS,
  skills: [
    "Grammar",
    "Vocabulary",
    "Reading",
    "Writing",
    "Speaking",
    "Pronunciation",
  ],
  prerequisites: [],
  recommendedAge: "7+",
  certificateTitle: "Foundation English Certificate",
} as unknown as EnglishCourse;

/* =========================================================
   LOOKUP HELPERS
========================================================= */

export const FOUNDATION_LESSON_MAP = Object.fromEntries(
  FOUNDATION_LESSONS.map((item) => [item.id, item]),
);

export function getFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  return FOUNDATION_LESSON_MAP[lessonId];
}

export function getFoundationLessonNumber(
  lessonId: string,
): number {
  const lesson = getFoundationLesson(lessonId);
  return lesson?.number ?? 0;
}

export function getNextFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  const currentNumber = getFoundationLessonNumber(lessonId);

  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.number === currentNumber + 1,
  );
}

export function getPreviousFoundationLesson(
  lessonId: string,
): EnglishLesson | undefined {
  const currentNumber = getFoundationLessonNumber(lessonId);

  return FOUNDATION_LESSONS.find(
    (lesson) => lesson.number === currentNumber - 1,
  );
}

/* =========================================================
   ACCESS LOGIC
========================================================= */

export function isFoundationLessonUnlocked(
  lessonNumber: number,
  completedLessonIds: string[],
): boolean {
  if (lessonNumber === 1) return true;

  const previousId =
    `foundation-${String(lessonNumber - 1).padStart(2, "0")}`;

  return completedLessonIds.includes(previousId);
}

export function canUnlockNextFoundationLesson(
  scorePercent: number,
): boolean {
  return scorePercent >= FOUNDATION_PASS_PERCENT;
}

/* =========================================================
   SCORE
========================================================= */

export function calculateFoundationScore(
  correct: number,
  total: number,
): number {
  if (total <= 0) return 0;

  return Math.round((correct / total) * 100);
}

export function isFoundationPassed(
  correct: number,
  total: number,
): boolean {
  return calculateFoundationScore(correct, total) >= FOUNDATION_PASS_PERCENT;
}

/* =========================================================
   PROGRESS
========================================================= */

export function calculateFoundationProgress(
  completedLessonIds: string[],
): number {
  const validCompleted = completedLessonIds.filter((id) =>
    FOUNDATION_LESSON_MAP[id],
  );

  return Math.round(
    (validCompleted.length / FOUNDATION_TOTAL_LESSONS) * 100,
  );
}

/* =========================================================
   XP
========================================================= */

export function calculateFoundationXP(
  scorePercent: number,
): number {
  if (scorePercent >= 100) return 150;
  if (scorePercent >= 90) return 125;
  if (scorePercent >= 80) return 110;
  if (scorePercent >= 70) return 100;

  return 25;
}

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default FOUNDATION_COURSE;
