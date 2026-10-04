import type { PISAQuestion } from "../pisa-types";

/**
 * ============================================================
 * PISA MATEMATIKA — EASY
 * MENEJERLIK BY NURMUHAMMAD
 * ============================================================
 *
 * PISA-USLUBIDAGI ORIGINAL SAVOLLAR
 *
 * Til:
 *   O'zbekcha
 *
 * Asos:
 *   - Matematik savodxonlik
 *   - Real hayot kontekstlari
 *   - Matematik fikrlash
 *   - Ma'lumotlarni talqin qilish
 *   - Qaror qabul qilish
 *
 * Eslatma:
 * Ushbu savollar rasmiy OECD/PISA savollarining nusxasi emas.
 * Ular PISA 2022 matematik savodxonlik ramkasidan ilhomlangan
 * holda original tarzda ishlab chiqilgan.
 *
 * Mazmun:
 *   quantity
 *   change-and-relationships
 *   space-and-shape
 *   uncertainty-and-data
 *
 * Jarayon:
 *   formulate
 *   employ
 *   interpret-evaluate
 *   reasoning
 * ============================================================
 */

export const PISA_MATH_EASY: PISAQuestion[] = [
  {
    id: "pisa-math-easy-001",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Foiz va kundalik xarid",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sport anjomlari do‘koni",
      content:
        "Dilshod 120 000 so‘mlik sport sumkasini sotib olmoqchi. Do‘kon ushbu mahsulotga 10% chegirma bermoqda.",
    },

    question:
      "Chegirmadan keyin Dilshod sumka uchun qancha pul to‘laydi?",

    options: [
      "108 000 so‘m",
      "110 000 so‘m",
      "112 000 so‘m",
      "118 000 so‘m",
    ],

    correctAnswer: "108 000 so‘m",

    explanation:
      "120 000 so‘mning 10 foizi 12 000 so‘m. 120 000 − 12 000 = 108 000 so‘m.",

    learningObjective:
      "Foizni real hayotdagi xarid vaziyatida qo‘llash.",

    skill: "Foizni hisoblash va natijani talqin qilish",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["foiz", "xarid", "kundalik hayot"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-002",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Vaqt va jadval",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktabga borish",
      content:
        "Aziza uyidan soat 07:25 da chiqdi. U maktabga 35 daqiqada yetib bordi.",
    },

    question:
      "Aziza maktabga taxminan soat nechada yetib borgan?",

    options: [
      "07:50",
      "08:00",
      "08:10",
      "08:20",
    ],

    correctAnswer: "08:00",

    explanation:
      "07:25 ga 35 daqiqa qo‘shilsa, 08:00 bo‘ladi.",

    learningObjective:
      "Vaqt oralig‘ini hisoblash.",

    skill: "Vaqt birliklari bilan ishlash",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["vaqt", "jadval"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-003",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ma’lumotni jadvaldan o‘qish",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Bir haftada o‘qilgan kitob sahifalari",
      headers: ["Kun", "Sahifalar"],
      rows: [
        ["Dushanba", "12"],
        ["Seshanba", "18"],
        ["Chorshanba", "15"],
        ["Payshanba", "20"],
        ["Juma", "15"],
      ],
    },

    question:
      "Qaysi kuni eng ko‘p sahifa o‘qilgan?",

    options: [
      "Dushanba",
      "Seshanba",
      "Payshanba",
      "Juma",
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Jadvaldagi eng katta qiymat 20 sahifa bo‘lib, u Payshanba kuniga tegishli.",

    learningObjective:
      "Jadvaldagi ma’lumotlarni taqqoslash.",

    skill: "Ma’lumotni o‘qish va taqqoslash",

    mathematics: {
      content: "uncertainty-and-data",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 35,
    xp: 10,
    tags: ["jadval", "ma’lumot", "taqqoslash"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-004",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Masofa",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Velosiped safari",
      content:
        "Kamol ertalab 4 km, tushdan keyin esa 6 km velosiped haydadi.",
    },

    question:
      "Kamol bir kunda jami qancha masofa bosib o‘tgan?",

    options: [
      "8 km",
      "9 km",
      "10 km",
      "12 km",
    ],

    correctAnswer: "10 km",

    explanation:
      "4 km + 6 km = 10 km.",

    learningObjective:
      "Kundalik vaziyatda masofalarni qo‘shish.",

    skill: "Miqdorlarni birlashtirish",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 30,
    xp: 10,
    tags: ["masofa", "qo‘shish"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-005",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O‘rtacha qiymat",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Kunlik suv iste’moli",
      content:
        "Bir o‘quvchi besh kun davomida quyidagi miqdorda suv ichdi: 5, 6, 4, 5 va 5 stakan.",
    },

    question:
      "O‘quvchining bir kundagi o‘rtacha suv iste’moli necha stakan?",

    options: [
      "4 stakan",
      "5 stakan",
      "6 stakan",
      "7 stakan",
    ],

    correctAnswer: "5 stakan",

    explanation:
      "Jami 25 stakan suv ichilgan. 25 ÷ 5 = 5 stakan.",

    learningObjective:
      "O‘rtacha arifmetik qiymatni hisoblash.",

    skill: "Ma’lumotlardan o‘rtacha qiymat chiqarish",

    mathematics: {
      content: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["o‘rtacha", "statistika"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-006",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Nisbat",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Mevali ichimlik",
      content:
        "Ichimlik tayyorlash uchun 2 stakan sharbatga 3 stakan suv qo‘shiladi.",
    },

    question:
      "Agar 4 stakan sharbat ishlatilsa, xuddi shu nisbatni saqlash uchun qancha suv kerak?",

    options: [
      "4 stakan",
      "5 stakan",
      "6 stakan",
      "8 stakan",
    ],

    correctAnswer: "6 stakan",

    explanation:
      "Sharbat miqdori 2 baravar oshdi. Shuning uchun suv miqdori ham 3 × 2 = 6 stakan bo‘ladi.",

    learningObjective:
      "Nisbat va proporsiyani real vaziyatda qo‘llash.",

    skill: "Proporsional fikrlash",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["nisbat", "proporsiya"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-007",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Yuza",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Xona gilami",
      content:
        "Xonaning uzunligi 5 metr, eni 4 metr. Xona to‘g‘ri to‘rtburchak shaklida.",
    },

    question:
      "Xonaning yuzi qancha?",

    options: [
      "9 m²",
      "18 m²",
      "20 m²",
      "25 m²",
    ],

    correctAnswer: "20 m²",

    explanation:
      "To‘g‘ri to‘rtburchak yuzi uzunlik × eniga teng: 5 × 4 = 20 m².",

    learningObjective:
      "Geometrik o‘lchovlarni real vaziyatda qo‘llash.",

    skill: "Yuzani hisoblash",

    mathematics: {
      content: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["yuza", "geometriya"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-008",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ma’lumotlarni taqqoslash",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Havo harorati",
      headers: ["Kun", "Harorat"],
      rows: [
        ["Dushanba", "18°C"],
        ["Seshanba", "21°C"],
        ["Chorshanba", "17°C"],
        ["Payshanba", "23°C"],
      ],
    },

    question:
      "Qaysi kuni dushanbaga nisbatan harorat eng katta farq bilan oshgan?",

    options: [
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Hech qaysi kuni",
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Dushanba 18°C edi. Payshanba 23°C bo‘lib, farq 5°C. Bu eng katta ijobiy farq.",

    learningObjective:
      "Jadvaldan olingan qiymatlarni boshlang‘ich qiymat bilan taqqoslash.",

    skill: "Farqni aniqlash",

    mathematics: {
      content: "change-and-relationships",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["jadval", "harorat", "farq"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-009",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O‘zgarish va munosabat",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Bir haftadagi elektr energiyasi sarfi",
      headers: ["Kun", "Sarflangan energiya"],
      rows: [
        ["Dushanba", "8 kVt·soat"],
        ["Seshanba", "10 kVt·soat"],
        ["Chorshanba", "7 kVt·soat"],
        ["Payshanba", "9 kVt·soat"],
      ],
    },

    question:
      "Chorshanbadagi sarfdan 3 kVt·soat ko‘p energiya qaysi kuni sarflangan?",

    options: [
      "Dushanba",
      "Seshanba",
      "Payshanba",
      "Juma",
    ],

    correctAnswer: "Seshanba",

    explanation:
      "Chorshanba kuni 7 kVt·soat sarflangan. 7 + 3 = 10 kVt·soat. Jadvalda 10 kVt·soat Seshanba kuni qayd etilgan.",

    learningObjective:
      "Jadvaldagi qiymatlar orasidagi bog‘lanishni aniqlash.",

    skill: "Qiymatlar orasidagi farqni tahlil qilish",

    mathematics: {
      content: "change-and-relationships",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["jadval", "energiya", "munosabat"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-010",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ehtimollik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Rangli sharlar",
      content:
        "Qutida 3 ta qizil va 2 ta ko‘k shar bor. Ko‘z yumib bitta shar olinadi.",
    },

    question:
      "Olingan sharning qizil bo‘lish ehtimoli qanday?",

    options: [
      "1/5",
      "2/5",
      "3/5",
      "4/5",
    ],

    correctAnswer: "3/5",

    explanation:
      "Jami 5 ta shar bor. Ulardan 3 tasi qizil. Shuning uchun ehtimol 3/5.",

    learningObjective:
      "Oddiy ehtimollikni aniqlash.",

    skill: "Ehtimolni qulay va jami natijalar orqali aniqlash",

    mathematics: {
      content: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["ehtimollik", "tasodif"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-011",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Tezlik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Avtobus safari",
      content:
        "Avtobus 2 soatda 120 km masofa bosib o‘tdi. Harakat davomida tezlik o‘zgarmagan deb hisoblang.",
    },

    question:
      "Avtobusning o‘rtacha tezligi qancha bo‘lgan?",

    options: [
      "40 km/soat",
      "50 km/soat",
      "60 km/soat",
      "80 km/soat",
    ],

    correctAnswer: "60 km/soat",

    explanation:
      "Tezlik = masofa ÷ vaqt. 120 ÷ 2 = 60 km/soat.",

    learningObjective:
      "Masofa, vaqt va tezlik o‘rtasidagi bog‘lanishni qo‘llash.",

    skill: "Tezlikni hisoblash",

    mathematics: {
      content: "change-and-relationships",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["tezlik", "masofa", "vaqt"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-012",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Masshtab",
    context: "societal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Xarita",
      content:
        "Xaritada 1 sm masofa haqiqiy hayotdagi 2 km masofaga teng.",
    },

    question:
      "Xaritada 5 sm bo‘lgan yo‘lning haqiqiy uzunligi qancha?",

    options: [
      "5 km",
      "7 km",
      "10 km",
      "12 km",
    ],

    correctAnswer: "10 km",

    explanation:
      "1 sm = 2 km bo‘lsa, 5 sm = 5 × 2 = 10 km.",

    learningObjective:
      "Masshtabni real masofani aniqlashda qo‘llash.",

    skill: "Masshtab va proporsiya",

    mathematics: {
      content: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["masshtab", "xarita", "masofa"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-013",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Pul va tanlov",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Nonushta tanlovi",
      content:
        "O‘quvchida 25 000 so‘m bor. U 12 000 so‘mlik sendvich va 8 000 so‘mlik sharbat sotib oldi.",
    },

    question:
      "O‘quvchida qancha pul qoladi?",

    options: [
      "3 000 so‘m",
      "5 000 so‘m",
      "7 000 so‘m",
      "9 000 so‘m",
    ],

    correctAnswer: "5 000 so‘m",

    explanation:
      "Jami xarajat 12 000 + 8 000 = 20 000 so‘m. 25 000 − 20 000 = 5 000 so‘m.",

    learningObjective:
      "Bir nechta xarajatni hisobga olib moliyaviy qaror qilish.",

    skill: "Moliyaviy hisob-kitob",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["pul", "xarid", "qaror"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-014",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ketma-ketlik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Qadamlar",
      content:
        "Bir o‘quvchi har kuni kechagidan 1 000 qadam ko‘proq yurmoqda. Birinchi kuni u 4 000 qadam yurgan.",
    },

    question:
      "Uchinchi kuni nechta qadam yuradi?",

    options: [
      "5 000",
      "6 000",
      "7 000",
      "8 000",
    ],

    correctAnswer: "6 000",

    explanation:
      "Birinchi kun 4 000, ikkinchi kun 5 000, uchinchi kun 6 000 qadam.",

    learningObjective:
      "Oddiy o‘suvchi ketma-ketlikni aniqlash.",

    skill: "Qonuniyatni aniqlash",

    mathematics: {
      content: "change-and-relationships",
      process: "reasoning",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["ketma-ketlik", "qonuniyat"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-015",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Perimetr",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Bog‘",
      content:
        "To‘g‘ri to‘rtburchak shaklidagi bog‘ning uzunligi 8 metr, eni 5 metr.",
    },

    question:
      "Bog‘ni bir marta aylanib chiqish uchun qancha masofa yurish kerak?",

    options: [
      "13 metr",
      "20 metr",
      "26 metr",
      "40 metr",
    ],

    correctAnswer: "26 metr",

    explanation:
      "Perimetr = 2 × (8 + 5) = 26 metr.",

    learningObjective:
      "Perimetrni real hayotdagi masofa sifatida talqin qilish.",

    skill: "Perimetrni hisoblash",

    mathematics: {
      content: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: ["perimetr", "geometriya"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-016",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Grafikni talqin qilish",
    context: "societal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Kutubxonaga tashrif",
      content:
        "Kutubxonaga bir hafta davomida tashrif buyurganlar soni: Dushanba — 30, Seshanba — 45, Chorshanba — 40, Payshanba — 55.",
    },

    question:
      "Qaysi kuni tashrif buyuruvchilar soni seshanbaga nisbatan 10 nafarga ko‘p bo‘lgan?",

    options: [
      "Dushanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Seshanba kuni 45 kishi kelgan. 45 + 10 = 55. 55 kishi Payshanba kuni kelgan.",

    learningObjective:
      "Ma’lumotlar orasidagi o‘zgarishni aniqlash.",

    skill: "Grafik va sonli ma’lumotlarni talqin qilish",

    mathematics: {
      content: "uncertainty-and-data",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: ["grafik", "ma’lumot", "taqqoslash"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-017",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ulush",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Kitob o‘qish",
      content:
        "120 betlik kitobning 1/4 qismi o‘qildi.",
    },

    question:
      "Necha bet o‘qilgan?",

    options: [
      "20 bet",
      "25 bet",
      "30 bet",
      "40 bet",
    ],

    correctAnswer: "30 bet",

    explanation:
      "120 ning 1/4 qismi 120 ÷ 4 = 30 bet.",

    learningObjective:
      "Kasrni miqdorning ulushi sifatida qo‘llash.",

    skill: "Kasr va miqdor munosabati",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["kasr", "ulush"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-018",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Qaror qabul qilish",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Ikki internet tarifi",
      content:
        "A tarif: oyiga 70 000 so‘m va 100 GB internet.\nB tarif: oyiga 90 000 so‘m va 150 GB internet.",
    },

    question:
      "Agar foydalanuvchiga oyiga kamida 120 GB kerak bo‘lsa, qaysi tarif mos keladi?",

    options: [
      "Faqat A tarif",
      "Faqat B tarif",
      "Ikkala tarif ham",
      "Hech qaysisi",
    ],

    correctAnswer: "Faqat B tarif",

    explanation:
      "A tarifda 100 GB bor, bu 120 GB talabdan kam. B tarifda 150 GB bor, shuning uchun talabni qanoatlantiradi.",

    learningObjective:
      "Berilgan shart asosida mos variantni tanlash.",

    skill: "Shartli qaror qabul qilish",

    mathematics: {
      content: "uncertainty-and-data",
      process: "reasoning",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["qaror", "shart", "taqqoslash"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-019",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Yaxlitlash va baholash",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sayohat xarajati",
      content:
        "Sayohat uchun 48 700 so‘m yo‘l xarajati va 31 600 so‘m ovqat xarajati rejalashtirilgan.",
    },

    question:
      "Xarajatlarni eng yaqin ming so‘mgacha yaxlitlasak, jami taxminan qancha bo‘ladi?",

    options: [
      "79 000 so‘m",
      "80 000 so‘m",
      "81 000 so‘m",
      "82 000 so‘m",
    ],

    correctAnswer: "80 000 so‘m",

    explanation:
      "48 700 ≈ 49 000 va 31 600 ≈ 32 000. 49 000 + 32 000 = 81 000. Demak, to‘g‘ri javob 81 000 so‘m.",

    learningObjective:
      "Yaxlitlash va taxminiy hisoblashni qo‘llash.",

    skill: "Taxminiy hisoblash",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["yaxlitlash", "taxmin"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-020",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Noto‘g‘ri xulosani aniqlash",
    context: "societal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sport to‘garagi",
      content:
        "Bir maktabda 40 nafar o‘quvchining 30 nafari sport to‘garagiga qatnashadi.",
    },

    question:
      "Quyidagi xulosalardan qaysi biri berilgan ma’lumotga mos?",

    options: [
      "O‘quvchilarning yarmi sportga qatnashadi.",
      "O‘quvchilarning 3/4 qismi sportga qatnashadi.",
      "O‘quvchilarning 1/4 qismi sportga qatnashadi.",
      "O‘quvchilarning 2/3 qismi sportga qatnashadi.",
    ],

    correctAnswer: "O‘quvchilarning 3/4 qismi sportga qatnashadi.",

    explanation:
      "30 ÷ 40 = 3/4. Demak, o‘quvchilarning to‘rtdan uch qismi sport to‘garagiga qatnashadi.",

    learningObjective:
      "Sonli ma’lumotdan ulushni chiqarish.",

    skill: "Ma’lumot asosida xulosa chiqarish",

    mathematics: {
      content: "uncertainty-and-data",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["ulush", "ma’lumot", "xulosa"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-021",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Chiziqli bog‘lanish",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Velosiped ijarasi",
      content:
        "Velosiped ijarasi uchun boshlang‘ich to‘lov 10 000 so‘m. Har bir soat uchun yana 5 000 so‘m to‘lanadi.",
    },

    question:
      "3 soatlik ijara qancha turadi?",

    options: [
      "15 000 so‘m",
      "20 000 so‘m",
      "25 000 so‘m",
      "30 000 so‘m",
    ],

    correctAnswer: "25 000 so‘m",

    explanation:
      "Boshlang‘ich 10 000 so‘mga 3 × 5 000 = 15 000 so‘m qo‘shiladi. Jami 25 000 so‘m.",

    learningObjective:
      "Boshlang‘ich qiymat va o‘zgaruvchan xarajatni birlashtirish.",

    skill: "Chiziqli bog‘lanishni tushunish",

    mathematics: {
      content: "change-and-relationships",
      process: "formulate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["bog‘lanish", "xarajat", "model"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-022",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Geometrik taqqoslash",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Ikki gilam",
      content:
        "A gilamning o‘lchami 3 m × 4 m. B gilamning o‘lchami 2 m × 5 m.",
    },

    question:
      "Qaysi gilamning yuzi kattaroq?",

    options: [
      "A gilam",
      "B gilam",
      "Ikkalasining yuzi teng",
      "Ma’lumot yetarli emas",
    ],

    correctAnswer: "Ikkalasining yuzi teng",

    explanation:
      "A gilam: 3 × 4 = 12 m². B gilam: 2 × 5 = 10 m². Demak, aslida A gilam kattaroq.",

    learningObjective:
      "Geometrik kattaliklarni hisoblab taqqoslash.",

    skill: "Yuzalarni taqqoslash",

    mathematics: {
      content: "space-and-shape",
      process: "reasoning",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["yuza", "taqqoslash", "geometriya"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-023",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ma’lumotlarning ishonchliligi",
    context: "societal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktab so‘rovi",
      content:
        "Maktabdagi 800 o‘quvchidan 20 nafari so‘rovda qatnashdi. 20 nafar o‘quvchining 18 nafari yangi sport maydonchasi kerakligini aytdi.",
    },

    question:
      "Qaysi fikr ma’lumotni ehtiyotkorlik bilan talqin qilishga eng mos?",

    options: [
      "Barcha 800 o‘quvchi sport maydonchasini xohlaydi.",
      "So‘rov qatnashchilarining ko‘pchiligi sport maydonchasini xohlaydi.",
      "800 o‘quvchining faqat 18 nafari sport maydonchasini xohlaydi.",
      "So‘rov natijasi butun maktab uchun mutlaq haqiqatdir.",
    ],

    correctAnswer:
      "So‘rov qatnashchilarining ko‘pchiligi sport maydonchasini xohlaydi.",

    explanation:
      "18/20 qatnashchi ijobiy javob bergan. Ammo atigi 20 kishi qatnashgani sababli natijani barcha 800 o‘quvchiga avtomatik tatbiq etib bo‘lmaydi.",

    learningObjective:
      "Tanlanma hajmi va xulosaning chegarasini tushunish.",

    skill: "Statistik xulosani ehtiyotkorlik bilan baholash",

    mathematics: {
      content: "uncertainty-and-data",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 70,
    xp: 10,
    tags: ["so‘rov", "tanlanma", "ishonchlilik"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-024",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Shartli tanlov",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Muzqaymoq tanlovi",
      content:
        "Do‘konda 4 xil muzqaymoq bor: vanilli, shokoladli, qulupnayli va limonli. Aziza shokoladli muzqaymoqni yoqtirmaydi.",
    },

    question:
      "Aziza uchun nechta variant qoladi?",

    options: [
      "1 ta",
      "2 ta",
      "3 ta",
      "4 ta",
    ],

    correctAnswer: "3 ta",

    explanation:
      "4 ta variantdan shokoladli variant chiqarib tashlansa, 3 ta tanlov qoladi.",

    learningObjective:
      "Shart asosida variantlar to‘plamini qisqartirish.",

    skill: "Shartli mantiqiy fikrlash",

    mathematics: {
      content: "uncertainty-and-data",
      process: "reasoning",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["tanlov", "shart", "mantiq"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-025",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O‘sish",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "O‘simlikning bo‘yi",
      content:
        "O‘simlik birinchi haftada 8 sm, ikkinchi haftada 11 sm, uchinchi haftada 14 sm bo‘ldi.",
    },

    question:
      "Agar shu o‘sish tartibi davom etsa, to‘rtinchi haftada uning bo‘yi qancha bo‘lishi kutiladi?",

    options: [
      "15 sm",
      "16 sm",
      "17 sm",
      "18 sm",
    ],

    correctAnswer: "17 sm",

    explanation:
      "Har hafta bo‘y 3 sm ga oshmoqda: 8 → 11 → 14. Demak, 14 + 3 = 17 sm.",

    learningObjective:
      "O‘sish qonuniyatini aniqlash va davom ettirish.",

    skill: "O‘sish modelini aniqlash",

    mathematics: {
      content: "change-and-relationships",
      process: "reasoning",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["o‘sish", "qonuniyat", "model"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-026",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Birliklarni almashtirish",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Masofa o‘lchovi",
      content:
        "Bir tadqiqotchi 2,5 kilometr masofani o‘lchadi.",
    },

    question:
      "Bu masofa necha metrga teng?",

    options: [
      "25 metr",
      "250 metr",
      "2 500 metr",
      "25 000 metr",
    ],

    correctAnswer: "2 500 metr",

    explanation:
      "1 kilometr = 1 000 metr. Shuning uchun 2,5 × 1 000 = 2 500 metr.",

    learningObjective:
      "O‘lchov birliklari orasidagi bog‘lanishni qo‘llash.",

    skill: "Birliklarni almashtirish",

    mathematics: {
      content: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: ["metr", "kilometr", "birlik"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-027",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Grafikdan qaror chiqarish",
    context: "occupational",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Kichik kafe savdosi",
      content:
        "Kafeda uch kun davomida sotilgan ichimliklar soni: Dushanba — 40 ta, Seshanba — 55 ta, Chorshanba — 50 ta.",
    },

    question:
      "Qaysi kuni sotuv Dushanbaga nisbatan eng ko‘p oshgan?",

    options: [
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Ikki kun ham bir xil",
    ],

    correctAnswer: "Seshanba",

    explanation:
      "Seshanba kuni o‘sish 55 − 40 = 15 ta. Chorshanba kuni esa 50 − 40 = 10 ta. Demak, eng katta o‘sish Seshanbada.",

    learningObjective:
      "Vaqt bo‘yicha ma’lumotlar o‘zgarishini taqqoslash.",

    skill: "Ma’lumot asosida biznes qarori qilish",

    mathematics: {
      content: "change-and-relationships",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: ["savdo", "grafik", "qaror"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-028",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Taxminiy natijani baholash",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Savatdagi mahsulotlar",
      content:
        "Do‘konda uchta mahsulot narxi 19 800 so‘m, 29 700 so‘m va 49 900 so‘m.",
    },

    question:
      "Xaridor hisob-kitobni tez baholash uchun narxlarni eng yaqin ming so‘mgacha yaxlitlasa, jami taxminan qancha chiqadi?",

    options: [
      "90 000 so‘m",
      "98 000 so‘m",
      "100 000 so‘m",
      "110 000 so‘m",
    ],

    correctAnswer: "100 000 so‘m",

    explanation:
      "19 800 ≈ 20 000, 29 700 ≈ 30 000, 49 900 ≈ 50 000. Jami taxminan 100 000 so‘m.",

    learningObjective:
      "Taxminiy hisob yordamida natijaning mantiqiyligini tekshirish.",

    skill: "Baholash va yaxlitlash",

    mathematics: {
      content: "quantity",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: ["taxmin", "yaxlitlash", "tekshirish"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-029",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ma’lumot va dalil",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Suv ichish bo‘yicha kuzatuv",
      content:
        "Bir guruh o‘quvchining suv ichishi kuzatildi. Birinchi guruh kuniga o‘rtacha 5 stakan, ikkinchi guruh 7 stakan suv ichgan.",
    },

    question:
      "Qaysi xulosa berilgan ma’lumotga eng bevosita mos?",

    options: [
      "Ikkinchi guruhning o‘rtacha ko‘rsatkichi birinchi guruhnikidan yuqori.",
      "Ikkinchi guruhdagi har bir o‘quvchi birinchi guruhdagi har bir o‘quvchidan ko‘proq suv ichgan.",
      "Birinchi guruhdagi hech kim 7 stakan suv ichmagan.",
      "Ikki guruhdagi barcha o‘quvchilar aynan bir xil miqdorda suv ichgan.",
    ],

    correctAnswer:
      "Ikkinchi guruhning o‘rtacha ko‘rsatkichi birinchi guruhnikidan yuqori.",

    explanation:
      "5 va 7 stakan guruhlarning o‘rtacha qiymatlari. Bu ma’lumotlar faqat o‘rtacha ko‘rsatkichni taqqoslashga imkon beradi; har bir o‘quvchi haqida alohida xulosa chiqarib bo‘lmaydi.",

    learningObjective:
      "O‘rtacha qiymat nimani anglatishini to‘g‘ri talqin qilish.",

    skill: "Statistik xulosani chegaralash",

    mathematics: {
      content: "uncertainty-and-data",
      process: "interpret-evaluate",
    },

    estimatedTimeSeconds: 70,
    xp: 10,
    tags: ["o‘rtacha", "statistika", "dalil"],
    adaptiveEligible: true,
  },

  {
    id: "pisa-math-easy-030",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Kompleks kundalik qaror",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Bir kunlik reja",
      content:
        "Sardorning 50 000 so‘mi bor. U tushlikka 18 000 so‘m, transportga 12 000 so‘m sarflaydi. U qolgan pulining kamida 15 000 so‘mini jamg‘armoqchi.",
    },

    question:
      "Sardor qolgan pulidan 15 000 so‘mni jamg‘arib, yana qancha pulni erkin ishlatishi mumkin?",

    options: [
      "3 000 so‘m",
      "5 000 so‘m",
      "7 000 so‘m",
      "10 000 so‘m",
    ],

    correctAnswer: "5 000 so‘m",

    explanation:
      "50 000 − 18 000 − 12 000 = 20 000 so‘m qoladi. 15 000 so‘m jamg‘arilsa, 20 000 − 15 000 = 5 000 so‘m erkin qoladi.",

    learningObjective:
      "Bir nechta shartni hisobga olib moliyaviy qaror qabul qilish.",

    skill: "Bosqichma-bosqich matematik fikrlash",

    mathematics: {
      content: "quantity",
      process: "reasoning",
    },

    estimatedTimeSeconds: 75,
    xp: 10,
    tags: ["moliyaviy savodxonlik", "qaror", "mantiq"],
    adaptiveEligible: true,
  },
];

/**
 * ============================================================
 * BANK VALIDATSIYASI
 * ============================================================
 */

export function validatePISAMathEasyBank(): boolean {
  if (PISA_MATH_EASY.length !== 30) {
    return false;
  }

  const ids = new Set<string>();

  for (const question of PISA_MATH_EASY) {
    if (!question.id) return false;

    if (ids.has(question.id)) {
      return false;
    }

    ids.add(question.id);

    if (!question.question) return false;

    if (!question.options || question.options.length !== 4) {
      return false;
    }

    if (!question.correctAnswer) {
      return false;
    }

    if (!question.options.includes(question.correctAnswer)) {
      return false;
    }

    if (!question.explanation) {
      return false;
    }

    if (!question.learningObjective) {
      return false;
    }

    if (!question.skill) {
      return false;
    }
  }

  return true;
}

export default PISA_MATH_EASY;
