import type { PISAQuestion } from "../pisa-types";

/* =========================================================
   PISA MATHEMATICS — EASY
   Original PISA-style training questions
   ========================================================= */

export const PISA_MATH_EASY: PISAQuestion[] = [
  {
    id: "pisa-math-easy-001",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Quantity",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Do‘kondagi xarid",
      content:
        "Aziza 3 ta daftar sotib oldi. Har bir daftar 8 000 so‘m turadi."
    },

    question:
      "Aziza daftarlar uchun jami qancha pul to‘laydi?",

    options: [
      { id: "A", text: "11 000 so‘m" },
      { id: "B", text: "24 000 so‘m" },
      { id: "C", text: "26 000 so‘m" },
      { id: "D", text: "32 000 so‘m" }
    ],

    correctAnswer: "B",

    explanation:
      "3 × 8 000 = 24 000. Demak, jami 24 000 so‘m to‘lanadi.",

    learningObjective:
      "Real hayotdagi miqdorlarni ko‘paytirish orqali hisoblash",

    skill: "quantity",
    secondarySkills: ["calculation"],

    mathematics: {
      content: "quantity",
      process: "employ"
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["money", "multiplication", "daily-life"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-002",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Quantity",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Suv",
      content:
        "Bir shisha suv 500 ml. Anvar kun davomida 4 ta shunday shisha ichdi."
    },

    question:
      "Anvar jami qancha suv ichgan?",

    options: [
      { id: "A", text: "1 litr" },
      { id: "B", text: "1,5 litr" },
      { id: "C", text: "2 litr" },
      { id: "D", text: "2,5 litr" }
    ],

    correctAnswer: "C",

    explanation:
      "4 × 500 ml = 2 000 ml = 2 litr.",

    learningObjective:
      "Birliklarni tushunish va miqdorlarni birlashtirish",

    skill: "quantity",
    secondarySkills: ["measurement", "unit-conversion"],

    mathematics: {
      content: "quantity",
      process: "employ"
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["volume", "litre", "measurement"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-003",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Change and Relationships",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Yo‘l",
      content:
        "Dilshod maktabgacha 2 km yuradi. U maktabga borib, keyin uyiga xuddi shu yo‘l bilan qaytadi."
    },

    question:
      "Dilshod bir kunda jami necha kilometr yuradi?",

    options: [
      { id: "A", text: "2 km" },
      { id: "B", text: "3 km" },
      { id: "C", text: "4 km" },
      { id: "D", text: "6 km" }
    ],

    correctAnswer: "C",

    explanation:
      "Borish 2 km va qaytish 2 km: 2 + 2 = 4 km.",

    learningObjective:
      "Bir xil masofalarni qo‘shish",

    skill: "quantity",
    secondarySkills: ["distance", "reasoning"],

    mathematics: {
      content: "quantity",
      process: "employ"
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["distance", "daily-life"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-004",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Uncertainty and Data",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "table",
      title: "Mevalar",
      columns: ["Meva", "Soni"],
      rows: [
        ["Olma", "6"],
        ["Nok", "4"],
        ["Banan", "5"]
      ]
    },

    question:
      "Jadvaldagi mevalarning jami soni nechta?",

    options: [
      { id: "A", text: "10 ta" },
      { id: "B", text: "12 ta" },
      { id: "C", text: "15 ta" },
      { id: "D", text: "16 ta" }
    ],

    correctAnswer: "D",

    explanation:
      "6 + 4 + 5 = 15. Jadvaldagi jami meva soni 15 ta.",

    learningObjective:
      "Jadvaldagi ma’lumotlarni yig‘ish",

    skill: "data-interpretation",
    secondarySkills: ["addition", "table-reading"],

    mathematics: {
      content: "uncertainty-data",
      process: "interpret-evaluate"
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["table", "data"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-005",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Quantity",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Chegirma",
      content:
        "Bir futbol to‘pi 100 000 so‘m turadi. Do‘konda unga 10% chegirma berildi."
    },

    question:
      "Chegirma miqdori qancha?",

    options: [
      { id: "A", text: "1 000 so‘m" },
      { id: "B", text: "5 000 so‘m" },
      { id: "C", text: "10 000 so‘m" },
      { id: "D", text: "20 000 so‘m" }
    ],

    correctAnswer: "C",

    explanation:
      "100 000 ning 10 foizi 10 000 so‘m.",

    learningObjective:
      "Foizni real hayotiy vaziyatda qo‘llash",

    skill: "quantity",
    secondarySkills: ["percentage", "money"],

    mathematics: {
      content: "quantity",
      process: "employ"
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: ["percentage", "discount", "money"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-006",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Change and Relationships",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "table",
      title: "Haftalik yugurish",
      columns: ["Kun", "Masofa"],
      rows: [
        ["Dushanba", "2 km"],
        ["Seshanba", "3 km"],
        ["Chorshanba", "4 km"],
        ["Payshanba", "3 km"]
      ]
    },

    question:
      "Qaysi kuni eng katta masofa bosib o‘tilgan?",

    options: [
      { id: "A", text: "Dushanba" },
      { id: "B", text: "Seshanba" },
      { id: "C", text: "Chorshanba" },
      { id: "D", text: "Payshanba" }
    ],

    correctAnswer: "C",

    explanation:
      "Jadvaldagi eng katta qiymat 4 km bo‘lib, u Chorshanbaga tegishli.",

    learningObjective:
      "Jadvaldan eng katta qiymatni aniqlash",

    skill: "data-interpretation",
    secondarySkills: ["comparison", "table-reading"],

    mathematics: {
      content: "change-relationships",
      process: "interpret-evaluate"
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["table", "comparison"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-007",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Space and Shape",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Xona",
      content:
        "To‘g‘ri to‘rtburchak shaklidagi xonaning uzunligi 6 m, eni 4 m."
    },

    question:
      "Xonaning yuzi necha kvadrat metr?",

    options: [
      { id: "A", text: "10 m²" },
      { id: "B", text: "20 m²" },
      { id: "C", text: "24 m²" },
      { id: "D", text: "28 m²" }
    ],

    correctAnswer: "C",

    explanation:
      "To‘g‘ri to‘rtburchak yuzi uzunlik × eni. 6 × 4 = 24 m².",

    learningObjective:
      "To‘g‘ri to‘rtburchak yuzini real vaziyatda hisoblash",

    skill: "space-shape",
    secondarySkills: ["area", "multiplication"],

    mathematics: {
      content: "space-shape",
      process: "employ"
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: ["area", "geometry"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-008",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Uncertainty and Data",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "table",
      title: "Kutubxonaga tashrif",
      columns: ["Kun", "O‘quvchilar"],
      rows: [
        ["Dushanba", "20"],
        ["Seshanba", "25"],
        ["Chorshanba", "15"],
        ["Payshanba", "30"]
      ]
    },

    question:
      "Qaysi kuni kutubxonaga eng ko‘p o‘quvchi kelgan?",

    options: [
      { id: "A", text: "Dushanba" },
      { id: "B", text: "Seshanba" },
      { id: "C", text: "Chorshanba" },
      { id: "D", text: "Payshanba" }
    ],

    correctAnswer: "D",

    explanation:
      "Eng katta qiymat 30 bo‘lib, u Payshanba kuniga tegishli.",

    learningObjective:
      "Jadval ma’lumotlarini taqqoslash",

    skill: "data-interpretation",
    secondarySkills: ["comparison"],

    mathematics: {
      content: "uncertainty-data",
      process: "interpret-evaluate"
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["data", "table"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-009",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Quantity",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Avtobus",
      content:
        "Avtobusda 28 nafar yo‘lovchi bor edi. Bekatda 7 kishi tushdi."
    },

    question:
      "Avtobusda nechta yo‘lovchi qoldi?",

    options: [
      { id: "A", text: "19" },
      { id: "B", text: "21" },
      { id: "C", text: "25" },
      { id: "D", text: "35" }
    ],

    correctAnswer: "B",

    explanation:
      "28 − 7 = 21. Demak, 21 nafar yo‘lovchi qoldi.",

    learningObjective:
      "Real vaziyatdagi ayirish amalini bajarish",

    skill: "quantity",
    secondarySkills: ["subtraction"],

    mathematics: {
      content: "quantity",
      process: "employ"
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["transport", "subtraction"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-010",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Change and Relationships",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Telefon batareyasi",
      content:
        "Telefon batareyasi ertalab 80% edi. Kun davomida 25 foiz punktga kamaydi."
    },

    question:
      "Kun oxirida batareya necha foiz bo‘lgan?",

    options: [
      { id: "A", text: "45%" },
      { id: "B", text: "55%" },
      { id: "C", text: "65%" },
      { id: "D", text: "75%" }
    ],

    correctAnswer: "C",

    explanation:
      "80% − 25% = 55%. Demak, to‘g‘ri javob 55%.",

    learningObjective:
      "Foiz qiymatlaridagi o‘zgarishni hisoblash",

    skill: "change-relationships",
    secondarySkills: ["percentage", "subtraction"],

    mathematics: {
      content: "change-relationships",
      process: "employ"
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["percentage", "change"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-011",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Uncertainty and Data",
    context: "social",
    type: "single_choice",

    stimulus: {
      type: "table",
      title: "Sport to‘garaklari",
      columns: ["To‘garak", "O‘quvchilar soni"],
      rows: [
        ["Futbol", "24"],
        ["Shaxmat", "16"],
        ["Suzish", "20"],
        ["Tennis", "10"]
      ]
    },

    question:
      "Jadval bo‘yicha jami nechta o‘quvchi sport to‘garaklariga qatnashmoqda?",

    options: [
      { id: "A", text: "60" },
      { id: "B", text: "64" },
      { id: "C", text: "70" },
      { id: "D", text: "74" }
    ],

    correctAnswer: "C",

    explanation:
      "24 + 16 + 20 + 10 = 70.",

    learningObjective:
      "Bir nechta jadval qiymatlarini birlashtirib xulosa chiqarish",

    skill: "data-interpretation",
    secondarySkills: ["addition", "aggregation"],

    mathematics: {
      content: "uncertainty-data",
      process: "interpret-evaluate"
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: ["table", "data", "aggregation"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-012",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Quantity",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Narx",
      content:
        "Bir kitob 40 000 so‘m turadi. Ikkinchi kitob birinchisidan 50% arzon."
    },

    question:
      "Ikkinchi kitobning narxi qancha?",

    options: [
      { id: "A", text: "10 000 so‘m" },
      { id: "B", text: "20 000 so‘m" },
      { id: "C", text: "25 000 so‘m" },
      { id: "D", text: "30 000 so‘m" }
    ],

    correctAnswer: "B",

    explanation:
      "40 000 ning 50 foizi 20 000. 50% arzonlashganda 20 000 so‘m qoladi.",

    learningObjective:
      "Foizli chegirmani narxga qo‘llash",

    skill: "quantity",
    secondarySkills: ["percentage", "money"],

    mathematics: {
      content: "quantity",
      process: "employ"
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: ["percentage", "discount", "money"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-013",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Space and Shape",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Bog‘",
      content:
        "To‘g‘ri to‘rtburchak shaklidagi bog‘ning uzunligi 12 m, eni 5 m."
    },

    question:
      "Bog‘ning perimetri qancha?",

    options: [
      { id: "A", text: "17 m" },
      { id: "B", text: "24 m" },
      { id: "C", text: "34 m" },
      { id: "D", text: "60 m" }
    ],

    correctAnswer: "C",

    explanation:
      "Perimetr = 2 × (12 + 5) = 34 m.",

    learningObjective:
      "Geometrik shakl perimetrini hisoblash",

    skill: "space-shape",
    secondarySkills: ["perimeter", "addition"],

    mathematics: {
      content: "space-shape",
      process: "employ"
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: ["geometry", "perimeter"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-014",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Change and Relationships",
    context: "personal",
    type: "single_choice",

    stimulus: {
      type: "text",
      title: "Velosiped",
      content:
        "Madina velosipedda birinchi kuni 5 km, ikkinchi kuni 8 km yurdi."
    },

    question:
      "Ikkinchi kuni birinchi kunga nisbatan necha kilometr ko‘proq yurilgan?",

    options: [
      { id: "A", text: "2 km" },
      { id: "B", text: "3 km" },
      { id: "C", text: "4 km" },
      { id: "D", text: "13 km" }
    ],

    correctAnswer: "B",

    explanation:
      "8 − 5 = 3 km.",

    learningObjective:
      "Ikki miqdor orasidagi farqni aniqlash",

    skill: "change-relationships",
    secondarySkills: ["comparison", "subtraction"],

    mathematics: {
      content: "change-relationships",
      process: "interpret-evaluate"
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["distance", "comparison"],
    adaptiveEligible: true
  },

  {
    id: "pisa-math-easy-015",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Uncertainty and Data",
    context: "social",
    type: "single_choice",

    stimulus: {
      type: "table",
      title: "Ob-havo kuzatuvi",
      columns: ["Kun", "Harorat"],
      rows: [
        ["Dushanba", "18°C"],
        ["Seshanba", "21°C"],
        ["Chorshanba", "19°C"],
        ["Payshanba", "23°C"]
      ]
    },

    question:
      "Seshanbadan Payshanbagacha harorat necha darajaga oshgan?",

    options: [
      { id: "A", text: "1°C" },
      { id: "B", text: "2°C" },
      { id: "C", text: "3°C" },
      { id: "D", text: "4°C" }
    ],

    correctAnswer: "B",

    explanation:
      "23°C − 21°C = 2°C.",

    learningObjective:
      "Jadvaldagi vaqt bo‘yicha o‘zgarishni aniqlash",

    skill: "change-relationships",
    secondarySkills: ["temperature", "comparison"],

    mathematics: {
      content: "change-relationships",
      process: "interpret-evaluate"
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["temperature", "table", "change"],
    adaptiveEligible: true
  }
];

/* =========================================================
   HELPERS
========================================================= */

export function getPISAMathEasyQuestions(): PISAQuestion[] {
  return [...PISA_MATH_EASY];
}

export function getPISAMathEasyByDifficulty(
  difficulty: number
): PISAQuestion[] {
  return PISA_MATH_EASY.filter(
    (question) => question.difficulty === difficulty
  );
}

export function getPISAMathEasyByTopic(
  topic: string
): PISAQuestion[] {
  return PISA_MATH_EASY.filter(
    (question) => question.topic === topic
  );
}

export default PISA_MATH_EASY;
