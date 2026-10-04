import type { Question } from "@/types/question";

/* =========================================================
 * M3T2 — TA'LIM MUASSASASI RAHBARLARI MA'NAVIY QIYOFASINING
 * RIVOJLANISHI
 *
 * 30 EASY + 30 MEDIUM + 30 HARD + 10 CASE = 100
 * ========================================================= */

export const MODULE_3_ID = "m3";
export const TOPIC_3_2_ID = "m3t2";

/* =========================================================
 * EASY — 30
 * ========================================================= */

export const M3T2_EASY_QUESTIONS: Question[] = [
  {
    id: "m3t2-easy-001",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ta’lim muassasasi rahbarining ma’naviy qiyofasi eng to‘g‘ri qaysi javobda ifodalangan?",
    options: [
      "Rahbarning tashqi ko‘rinishi va nutq uslubining yig‘indisi",
      "Rahbarning ichki qadriyatlari, e’tiqodi va axloqiy tamoyillarining yaxlit tizimi",
      "Rahbarning lavozim vakolatlari va ma’muriy topshiriqlari majmui",
      "Rahbarning kasbiy tajribasi va tashkiliy qobiliyatlari yig‘indisi",
    ],
    correctAnswer: 1,
    explanation: "Ma’naviy qiyofa ichki qadriyatlar, e’tiqod va axloqiy tamoyillarning yaxlit tizimidir.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-002",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Rahbar madaniyatining besh asosiy ustuni qaysi qatorda to‘g‘ri berilgan?",
    options: [
      "Odob, iymon, insof, adolat va iqtidor",
      "Nazorat, hisobot, intizom, buyruq va iqtidor",
      "Tajriba, lavozim, nazorat, reja va innovatsiya",
      "Bilim, texnologiya, moliya, intizom va hisobot",
    ],
    correctAnswer: 0,
    explanation: "Ma’ruzada rahbar madaniyati odob, iymon, insof, adolat va iqtidor majmui sifatida berilgan.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-003",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Rahbar madaniyatida adolat nimani anglatadi?",
    options: [
      "Barcha qarorlarni rahbarning shaxsiy tajribasiga asoslash",
      "Barcha xodimlarga teng imkoniyat berish va mehnatiga qarab baholash",
      "Jamoada nizolarni faqat intizomiy choralar orqali bartaraf etish",
      "Eng tajribali xodimlarni doimo ustuvor qo‘llab-quvvatlash",
    ],
    correctAnswer: 1,
    explanation: "Adolat barcha xodimlarga teng imkoniyat berish va mehnatiga qarab baholash bilan bog‘langan.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-004",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Insof tushunchasi rahbar faoliyatida nimani anglatadi?",
    options: [
      "Qaror qabul qilishda shaxsiy manfaatlardan voz kecha olish",
      "Jamoa faoliyatini muntazam nazorat qilish",
      "Har qanday vaziyatda qat’iy buyruq berish",
      "Yangi texnologiyalarni joriy qilish",
    ],
    correctAnswer: 0,
    explanation: "Ma’ruzaga ko‘ra, insof — qaror qabul qilishda shaxsiy manfaatlardan voz kecha olish.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-005",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Iymon rahbar madaniyatida qaysi mazmun bilan bog‘langan?",
    options: [
      "Tashkiliy nazorat va hisobot",
      "Ma’naviy mas’uliyat va poklik hissi",
      "Kasbiy tajriba va boshqaruv tezligi",
      "Jamoaviy rejalashtirish va monitoring",
    ],
    correctAnswer: 1,
    explanation: "Iymon ma’naviy mas’uliyat va poklik hissiga tayanishni bildiradi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-006",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Odob rahbar boshqaruvida asosan qaysi jihatda namoyon bo‘ladi?",
    options: [
      "Boshqaruv muloqotida madaniyat va vazminlikni saqlashda",
      "Hujjatlarni tezkor rasmiylashtirishda",
      "Xodimlarni qat’iy nazorat qilishda",
      "Moliyaviy resurslarni taqsimlashda",
    ],
    correctAnswer: 0,
    explanation: "Odob boshqaruv muloqotidagi madaniyat va vazminlik bilan bog‘liq.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-007",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Foresayt tushunchasi nimani anglatadi?",
    options: [
      "Muammo yuzaga kelgandan keyin unga javob berish tizimini",
      "Kelajakning mumkin bo‘lgan variantlarini tizimli baholab, bugungi qarorlarni shakllantirish texnologiyasini",
      "Faqat statistik hisobotlarni tahlil qilish usulini",
      "Jamoa intizomini kuchaytirish vositasini",
    ],
    correctAnswer: 1,
    explanation: "Foresayt kelajakning mumkin bo‘lgan variantlarini baholash va shu asosda bugungi qarorlarni qabul qilishdir.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-008",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Foresayt reaktiv boshqaruvdan qaysi boshqaruvga o‘tishni qo‘llab-quvvatlaydi?",
    options: [
      "Proaktiv boshqaruvga",
      "Ma’muriy boshqaruvga",
      "Markazlashgan boshqaruvga",
      "Nazoratga asoslangan boshqaruvga",
    ],
    correctAnswer: 0,
    explanation: "Foresayt muammolarni oldindan ko‘rish orqali proaktiv boshqaruvga o‘tishga yordam beradi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-009",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ma’naviy kompetensiya nima?",
    options: [
      "Faqat axloqiy qoidalarni bilish",
      "Axloqiy bilimlarni aniq boshqaruv vaziyatlarida qo‘llay olish qobiliyati",
      "Faqat xodimlarning xulqini nazorat qilish qobiliyati",
      "Rahbarning hujjatlar bilan ishlash ko‘nikmasi",
    ],
    correctAnswer: 1,
    explanation: "Ma’naviy kompetensiya axloqiy bilimlarni amaliy boshqaruv vaziyatlarida qo‘llashni anglatadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-010",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Refleksiya rahbar faoliyatida nimani anglatadi?",
    options: [
      "O‘z qarorlarini adolat, insof va mas’uliyat mezonlari asosida tahlil qilish",
      "Jamoa a’zolarining fikrlarini anonim yig‘ish",
      "Kelajakdagi vaziyatlarni ssenariy asosida ishlab chiqish",
      "Tajribali rahbarlardan maslahat olish",
    ],
    correctAnswer: 0,
    explanation: "Refleksiv mexanizm rahbarning o‘z qarorlarini ma’naviy mezonlar asosida baholashidir.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-011",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Empatik mexanizmning asosiy mazmuni nima?",
    options: [
      "Moliyaviy resurslarni tejash",
      "Jamoa a’zolarining ichki ruhiy holatini tushunish va insoniy yondashuvni kuchaytirish",
      "Kelajakdagi iqtisodiy xavflarni hisoblash",
      "Rahbarning o‘z faoliyatini statistik baholashi",
    ],
    correctAnswer: 1,
    explanation: "Empatiya boshqa insonlarning ichki holatini tushunish va ularga insoniy yondashishdir.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-012",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Uzluksiz ma’naviy mutolaaning asosiy maqsadi nima?",
    options: [
      "Faqat boshqaruv bo‘yicha yangi terminlarni yodlash",
      "Milliy va umuminsoniy qadriyatlarni o‘zlashtirish orqali dunyoqarashni kengaytirish",
      "Xodimlar faoliyatini nazorat qilish",
      "Rahbarning ma’muriy vakolatlarini oshirish",
    ],
    correctAnswer: 1,
    explanation: "Ma’naviy mutolaa rahbar dunyoqarashini kengaytirishga xizmat qiladi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-013",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ma’naviy qiyofaning individual-psixologik darajasi nimani ifodalaydi?",
    options: [
      "Rahbarning davlat oldidagi huquqiy majburiyatlarini",
      "Rahbarning ichki “Men”i, vijdon erkinligi, iymon butunligi va o‘z-o‘ziga talabchanligini",
      "Rahbarning jamoa bilan muloqot uslubini",
      "Rahbarning pedagogik etika qoidalariga rioya qilishini",
    ],
    correctAnswer: 1,
    explanation: "Individual-psixologik daraja rahbarning ichki “Men”i bilan bog‘liq.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-014",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ijtimoiy-pedagogik daraja nimaga taalluqli?",
    options: [
      "Rahbarning ichki e’tiqodiga",
      "Jamoa bilan muloqot madaniyati va ijtimoiy adolatni ta’minlash qobiliyatiga",
      "Faqat kasbiy bilimga",
      "Faqat hujjat yuritishga",
    ],
    correctAnswer: 1,
    explanation: "Ijtimoiy-pedagogik daraja jamoa bilan muloqot va ijtimoiy adolatni qamrab oladi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-015",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Kasbiy-etik darajaning muhim belgisi qaysi?",
    options: [
      "Pedagogik etika qoidalariga rioya qilish va davlat-jamiyat oldidagi mas’uliyatni anglash",
      "Rahbarning faqat shaxsiy rivojlanishiga e’tibor berishi",
      "Jamoa fikrini e’tiborsiz qoldirib tez qaror qabul qilishi",
      "Faqat texnologik samaradorlikka e’tibor berishi",
    ],
    correctAnswer: 0,
    explanation: "Kasbiy-etik daraja pedagogik etika va davlat-jamiyat oldidagi mas’uliyatni o‘z ichiga oladi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-016",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ma’naviy yetuklikning asosiy belgisi qaysi?",
    options: [
      "Dunyoqarashning kengligi va milliy hamda umuminsoniy qadriyatlarni anglash",
      "Qattiq nazorat tizimini yaratish",
      "Ko‘p sonli hisobotlar tayyorlash",
      "Har qanday qarorni tez qabul qilish",
    ],
    correctAnswer: 0,
    explanation: "Ma’naviy yetuklik keng dunyoqarash va qadriyatlarni chuqur anglash bilan belgilanadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-017",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Intellektual halollik nimani bildiradi?",
    options: [
      "Bilim va tajribani ezgulik yo‘lida qo‘llash, korrupsiya va shaxsiy manfaatlardan tiyilish",
      "Faqat ilmiy maqolalar o‘qish",
      "Rahbarning barcha qarorlarini jamoaga topshirish",
      "Har bir xodimning fikrini ma’qullash",
    ],
    correctAnswer: 0,
    explanation: "Intellektual halollik bilim va tajribadan ezgulik yo‘lida foydalanishni anglatadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-018",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Psixologik barqarorlik rahbarda qanday namoyon bo‘ladi?",
    options: [
      "Stressli vaziyatlarda bosiqlik va vazminlikni saqlash orqali",
      "Barcha vaziyatlarda qattiq talab qo‘yish orqali",
      "Muammolarni xodimlarga topshirish orqali",
      "Qarorlarni kechiktirish orqali",
    ],
    correctAnswer: 0,
    explanation: "Psixologik barqarorlik stressli vaziyatlarda bosiqlik va vazminlikni saqlashdir.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-019",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Kommunikativ madaniyatning tarkibiga qaysi jihat kiradi?",
    options: [
      "Tinglay olish, so‘z mas’uliyati va notiqlik san’ati",
      "Faqat buyruq berish tezligi",
      "Moliyaviy hisobotlarni yuritish",
      "Xodimlar ish vaqtini nazorat qilish",
    ],
    correctAnswer: 0,
    explanation: "Kommunikativ madaniyat tinglash, so‘z mas’uliyati va notiqlikni qamrab oladi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-020",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Rahbarning shaxsiy namunasi pedagogik jamoada avvalo nimaga ta’sir qiladi?",
    options: [
      "Ma’naviy-psixologik muhitga",
      "Faqat moliyaviy ko‘rsatkichlarga",
      "Faqat hujjatlar soniga",
      "Faqat dars jadvaliga",
    ],
    correctAnswer: 0,
    explanation: "Rahbarning shaxsiy namunasi jamoaning ma’naviy-psixologik muhitiga kuchli ta’sir ko‘rsatadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-021",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ma’naviy qiyofasi pok rahbarning topshirig‘i jamoa tomonidan qanday qabul qilinishi ma’ruzada qanday izohlangan?",
    options: [
      "Faqat ma’muriy buyruq sifatida",
      "Umumiy maqsad sari qadam sifatida",
      "Majburiy nazorat vositasi sifatida",
      "Faqat hisobot talabi sifatida",
    ],
    correctAnswer: 1,
    explanation: "Bunday rahbarning topshirig‘i buyruqdan ko‘ra umumiy maqsad sari qadam sifatida qabul qilinadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-022",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "360 darajali qayta aloqa qanday maqsadda qo‘llanadi?",
    options: [
      "Rahbarning faqat moliyaviy natijalarini baholash uchun",
      "Jamoa, ota-onalar va o‘quvchilarning anonim fikrlari orqali ko‘rinmayotgan xatolarni aniqlash uchun",
      "Xodimlarni intizomiy jazolash uchun",
      "Rahbarning ish vaqtini nazorat qilish uchun",
    ],
    correctAnswer: 1,
    explanation: "360° qayta aloqa rahbarning o‘zi ko‘rmayotgan kamchiliklarini aniqlashga yordam beradi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-023",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Individual rivojlanish trayektoriyasida qaysi faoliyat ma’ruzada tavsiya etilgan?",
    options: [
      "Faqat boshqaruv hujjatlarini o‘rganish",
      "Klassik adabiyot, falsafa va san’at bilan muntazam shug‘ullanish",
      "Faqat statistik hisobotlarni tahlil qilish",
      "Faqat texnologik kurslarda qatnashish",
    ],
    correctAnswer: 1,
    explanation: "Individual rivojlanish faqat boshqaruv emas, adabiyot, falsafa va san’at bilan boyitilishi kerak.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-024",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Etik yetakchilikning asosiy mezoni qaysi?",
    options: [
      "Texnologik samaradorlikni har qanday holatda ustun qo‘yish",
      "Adolat va halollikni texnologik samaradorlikdan ustun qo‘yish",
      "Nazoratni kuchaytirish",
      "Qarorlarni tezlashtirish",
    ],
    correctAnswer: 1,
    explanation: "Etik yetakchilikda adolat va halollik asosiy mezon hisoblanadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-025",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Raqamli gumanizm nimani anglatadi?",
    options: [
      "Texnologiyalar orqali xodimlarni doimiy nazorat qilishni",
      "Texnologiyalar asrida insoniy qadriyatlar va mehr-oqibatni saqlashni",
      "Barcha boshqaruvni algoritmlarga topshirishni",
      "Faqat raqamli hisobotlarni ko‘paytirishni",
    ],
    correctAnswer: 1,
    explanation: "Raqamli gumanizm texnologiyalardan foydalanishda insoniy qadriyatlarni saqlashni nazarda tutadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-026",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ma’naviy chidamlilik qaysi holatga mos keladi?",
    options: [
      "Global o‘zgarishlar sharoitida e’tiqod va milliy qadriyatlarga sobit turish",
      "Har qanday yangilikni rad etish",
      "Texnologiyalardan foydalanmaslik",
      "Jamoa fikrini e’tiborsiz qoldirish",
    ],
    correctAnswer: 0,
    explanation: "Resilience global o‘zgarish va axborot xurujlari sharoitida qadriyatlarga sobitlikni anglatadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-027",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Korreksion mexanizmning asosiy mazmuni nima?",
    options: [
      "Xatolarni tajribali ustoz-rahbarlar bilan muhokama qilib, to‘g‘rilash",
      "Jamoani doimiy nazorat qilish",
      "Faqat o‘z-o‘zini baholash",
      "Faqat anonim so‘rovnoma o‘tkazish",
    ],
    correctAnswer: 0,
    explanation: "Korreksion mexanizm mentorlar bilan murakkab axloqiy vaziyatlarni muhokama qilish va xatolarni to‘g‘rilashga asoslanadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-028",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Keys-stadi metodi rahbarning qaysi qobiliyatlarini birlashtiradi?",
    options: [
      "Faqat tashkiliy va moliyaviy qobiliyatlarni",
      "Kognitiv va axloqiy qobiliyatlarni",
      "Faqat kommunikativ va raqamli qobiliyatlarni",
      "Faqat nazorat va hisobot qobiliyatlarini",
    ],
    correctAnswer: 1,
    explanation: "Keys-stadi amaliy vaziyat orqali kognitiv va axloqiy qobiliyatlarni birlashtiradi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-029",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Rahbar nizoli vaziyatda “kim aybdor?” o‘rniga qaysi savolga tayanishi kerak?",
    options: [
      "Kim jazolanishi kerak?",
      "Qanday yechim adolatli?",
      "Kim ko‘proq vakolatga ega?",
      "Kim birinchi bo‘lib shikoyat qildi?",
    ],
    correctAnswer: 1,
    explanation: "Ma’naviy madaniyati yuksak rahbar nizoda adolatli yechimni izlaydi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },

  {
    id: "m3t2-easy-030",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "easy",
    text: "Ma’naviy algoritmning birinchi bosqichi qaysi?",
    options: [
      "Variantlarni generatsiya qilish",
      "Manfaatlar xaritasini tuzish",
      "Vaziyatning axloqiy diagnostikasi",
      "Qarorni jamoaga e’lon qilish",
    ],
    correctAnswer: 2,
    explanation: "Algoritm avval qaysi ma’naviy tamoyil xavf ostida ekanini aniqlashdan boshlanadi.",
    source: "M3T2 ma’ruza",
    points: 1,
  },
];

/* =========================================================
 * MEDIUM — 30
 * ========================================================= */

export const M3T2_MEDIUM_QUESTIONS: Question[] = [
  {
    id: "m3t2-medium-001",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Rahbar madaniyatining tarkibiy ustunlari va mazmunini moslashtiring.

1. Adolat
2. Insof
3. Iymon
4. Odob

A) Qaror qabul qilishda shaxsiy manfaatlardan voz kecha olish
B) Boshqaruv muloqotida madaniyat va vazminlikni saqlash
C) Barcha xodimlarga teng imkoniyat berish va mehnatiga qarab baholash
D) Ma’naviy mas’uliyat va poklik hissiga tayanish`,
    options: [
      "1-C, 2-D, 3-A, 4-B",
      "1-C, 2-A, 3-D, 4-B",
      "1-A, 2-E, 3-B, 4-D",
      "1-B, 2-A, 3-D, 4-C",
    ],
    correctAnswer: 1,
    explanation: "Adolat-C, Insof-A, Iymon-D, Odob-B.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-002",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Foresayt texnologiyasini egallagan rahbarning reaktiv rahbardan asosiy farqi nimada?",
    options: [
      "U boshqaruv qarorlarini hozirgi vaziyat tahlili asosida muvofiqlashtirib boradi",
      "U kelajakdagi ehtimoliy inqirozlarni oldindan ko‘rib, ularning oldini olish choralarini belgilaydi",
      "U mavjud muammolarga tezkor javob berib, jamoaviy intizom va hisobot tizimini kuchaytiradi",
      "U jamoa faoliyatini nazorat qilib, yuzaga kelgan kamchiliklarni keyingi rejaga kiritadi",
    ],
    correctAnswer: 1,
    explanation: "Foresaytning asosiy farqi kelajakdagi ehtimoliy vaziyatlarni oldindan ko‘rib, bugundan choralar ko‘rishdir.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-003",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ilmiy nuqtai nazardan rahbarning ma’naviy qiyofasi qanday kategoriyalar birlashmasi sifatida talqin etiladi?",
    options: [
      "Pedagogik va psixologik ko‘nikmalar birligi sifatida",
      "Individual va ijtimoiy xususiyatlar uyg‘unligi sifatida",
      "Ontologik va aksiologik kategoriyalar birlashmasi sifatida",
      "Kasbiy va axloqiy fazilatlar majmui sifatida",
    ],
    correctAnswer: 2,
    explanation: "Ma’ruzada ilmiy-nazariy asos ontologik va aksiologik kategoriyalar birlashmasi sifatida berilgan.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-004",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Rahbar odobi va iqtidori o‘rtasidagi dialektik bog‘lanish nimani anglatadi?",
    options: [
      "Rahbarning boshqaruv qobiliyati faqat tajriba bilan shakllanishini",
      "Rahbarning iqtidori ma’naviy madaniyati bilan uyg‘un bo‘lgandagina ijobiy yo‘nalishda namoyon bo‘lishini",
      "Rahbar odobi faqat muloqot madaniyatida namoyon bo‘lishini",
      "Rahbarning boshqaruv salohiyati faqat kasbiy bilimga bog‘liqligini",
    ],
    correctAnswer: 1,
    explanation: "Iqtidor boshqaruv qobiliyati bo‘lsa, odob uning qaysi yo‘nalishda ishlatilishini belgilaydi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-005",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Rahbar ma’naviy qiyofasining kasbiy-etik darajasi nimada namoyon bo‘ladi?",
    options: [
      "Rahbarning ichki “Men”i, vijdon erkinligi va iymon butunligida",
      "Rahbarning pedagogik etika qoidalariga rioya qilishi va davlat-jamiyat oldidagi mas’uliyatni anglashida",
      "Rahbarning jamoa bilan muloqot madaniyatida",
      "Rahbarning kasbiy mahorati va boshqaruv qarorlaridagi insonparvarlik mezonida",
    ],
    correctAnswer: 1,
    explanation: "Kasbiy-etik daraja pedagogik etika va davlat-jamiyat oldidagi mas’uliyat bilan belgilanadi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-006",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy portretni modellashtirish boshqaruvdagi tranzaksiya xarajatlarini qanday kamaytiradi?",
    options: [
      "Rahbar xodimlarni muntazam tekshirgani uchun",
      "Rahbar vazifalarni aniq taqsimlagani uchun",
      "Rahbar innovatsion loyihalarni qo‘llagani uchun",
      "Rahbar ishonchli muhit yaratgani sababli ortiqcha nazorat va qog‘ozbozlikka ehtiyoj kamaygani uchun",
    ],
    correctAnswer: 3,
    explanation: "Ma’ruzadagi asosiy g‘oya: ishonch mavjud joyda ortiqcha nazoratga ehtiyoj kamayadi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-007",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Tushunchalar va ularning mazmunini moslashtiring.

1. Refleksiya
2. Empatiya
3. Uzluksiz ma’naviy mutolaa

A) Xodimlar va o‘quvchilarning ichki holatini tushunib, ularga insoniy yondashish
B) Milliy va umuminsoniy qadriyatlarni o‘zlashtirish orqali rahbar dunyoqarashini kengaytirish
C) Har kuni qabul qilingan qarorlarni adolat va insof mezonlari asosida baholash`,
    options: [
      "1-A, 2-C, 3-B",
      "1-C, 2-A, 3-B",
      "1-D, 2-A, 3-C",
      "1-C, 2-B, 3-D",
    ],
    correctAnswer: 1,
    explanation: "Refleksiya-C, Empatiya-A, Mutolaa-B.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-008",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy qiyofasi pok rahbarning topshiriqlari jamoa tomonidan qanday qabul qilinadi?",
    options: [
      "Umumiy maqsad sari yo‘naltirilgan mazmunli harakat va ilhomlantiruvchi qadam sifatida",
      "Rahbarlik vakolatidan kelib chiqadigan majburiy tashkiliy ko‘rsatma sifatida",
      "Jamoani tartibga soluvchi intizomiy vazifa sifatida",
      "Natijalarni nazorat qiluvchi boshqaruv talabi sifatida",
    ],
    correctAnswer: 0,
    explanation: "Ma’naviy yetuk rahbarning topshirig‘i jamoada umumiy maqsad bilan bog‘lanadi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-009",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Foresayt va ma’naviyat integratsiyasi rahbar faoliyatida nimani anglatadi?",
    options: [
      "Kelajakdagi o‘zgarishlarga moslashish uchun ma’muriy nazoratni kuchaytirishni",
      "Kelajakdagi kutilmagan hodisalarga tayyor turib, boshqaruvni inson roziligi va ma’naviy birlik bilan uyg‘unlashtirishni",
      "Kelajakdagi vazifalarni faqat texnologiyalar orqali rejalashtirishni",
      "Ta’lim jarayonlarini faqat raqamli platformalar orqali boshqarishni",
    ],
    correctAnswer: 1,
    explanation: "Foresayt va ma’naviyat integratsiyasi kelajakni ko‘rish bilan insoniy birlikni uyg‘unlashtiradi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-010",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Iqtidorli, lekin odobsiz rahbar faoliyatidagi eng muhim xavf qaysi?",
    options: [
      "Rahbar qarorlarida qat’iylik kuchayishi",
      "Boshqaruv qobiliyati axloqiy mezonlar bilan boshqarilmagani sababli mustabid yondashuvga moyillik paydo bo‘lishi",
      "Tashkiliy salohiyatning yuqoriligi",
      "Xodimlar ehtiyojiga e’tiborning ortishi",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzaga ko‘ra, iqtidor odob bilan uyg‘unlashmasa, rahbar mustabid boshqaruvga moyil bo‘lishi mumkin.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-011",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy kompetensiya mazmuni qaysi javobda to‘g‘ri ifodalangan?",
    options: [
      "Intizom va hujjatlar bilan ishlash madaniyati",
      "Texnologik vositalardan foydalanish ko‘nikmasi",
      "Professional etika va shaxsiy vijdoniylikni uyg‘unlashtirib, boshqaruvda qo‘llash qobiliyati",
      "Topshiriqlarni taqsimlash va nazorat qilish qobiliyati",
    ],
    correctAnswer: 2,
    explanation: "Ma’naviy kompetensiya professional etika va shaxsiy vijdoniylik sintezidir.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-012",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Foresayt rahbarning ma’naviy mas’uliyatini qanday kengaytiradi?",
    options: [
      "Rahbarni xodimlar faoliyatini muntazam kuzatishga undaydi",
      "Rahbarni bugungi qarorlarning kelajakdagi ma’naviy ta’sirini oldindan o‘ylashga undaydi",
      "Rahbarni vazifalarni reja asosida taqsimlashga undaydi",
      "Rahbarni bugungi natijalarni jamoaviy baholashga undaydi",
    ],
    correctAnswer: 1,
    explanation: "Foresayt qarorlarning uzoq muddatli ma’naviy oqibatlarini hisobga olishni talab qiladi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-013",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Foresayt funksiyalarini mazmuni bilan moslashtiring.

1. Reaktivdan proaktiv boshqaruvga o‘tish
2. Ma’naviy mas’uliyatning kengayishi
3. Jamoaviy intellektni shakllantirish

A) Kelajakdagi ehtimoliy inqirozlarning oldini olish choralarini ishlab chiqish
B) Bugungi qarorning uzoq muddatli ma’naviy ta’sirini hisobga olish
C) Xodimlar bilan kelajakni birga loyihalashtirish`,
    options: [
      "1-C, 2-A, 3-B",
      "1-B, 2-C, 3-A",
      "1-A, 2-B, 3-C",
      "1-C, 2-B, 3-A",
    ],
    correctAnswer: 2,
    explanation: "1-A, 2-B, 3-C.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-014",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Rahbarning psixologik barqarorligi qaysi holatda eng aniq namoyon bo‘ladi?",
    options: [
      "Stressli holatlarda bosiqlik va vazminlikni saqlab, jamoaga xotirjamlik bag‘ishlashda",
      "Xodimlardan yuqori natijani qat’iy talab qilishda",
      "Murakkab vaziyatda tezkor buyruq berishda",
      "Vazifalarni qayta taqsimlashda",
    ],
    correctAnswer: 0,
    explanation: "Psixologik barqarorlikning asosiy belgisi stress sharoitida bosiqlikni saqlashdir.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-015",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Ma’naviy qiyofaning tarkibiy komponentlarini moslashtiring.

1. Ma’naviy yetuklik
2. Intellektual halollik
3. Psixologik barqarorlik
4. Kommunikativ madaniyat

A) Stressli vaziyatlarda bosiqlik va vazminlik
B) Tinglay olish va so‘z mas’uliyati
C) Bilim va tajribani ezgulik yo‘lida qo‘llash
D) Dunyoqarash kengligi va qadriyatlarni anglash`,
    options: [
      "1-D, 2-C, 3-A, 4-B",
      "1-C, 2-A, 3-D, 4-B",
      "1-D, 2-C, 3-B, 4-A",
      "1-B, 2-C, 3-A, 4-D",
    ],
    correctAnswer: 0,
    explanation: "1-D, 2-C, 3-A, 4-B.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-016",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Kelajak rahbarining ma’naviy portreti ustunlarini moslashtiring.

1. Etik yetakchilik
2. Raqamli gumanizm
3. Ma’naviy chidamlilik

A) Texnologiyalar asrida insoniy qadriyatlarni saqlash
B) Global o‘zgarishlar sharoitida qadriyatlarga sobit turish
C) Adolat va halollikni texnologik samaradorlikdan ustun qo‘yish`,
    options: [
      "1-C, 2-A, 3-B",
      "1-B, 2-C, 3-A",
      "1-A, 2-B, 3-C",
      "1-C, 2-B, 3-A",
    ],
    correctAnswer: 0,
    explanation: "Etik yetakchilik-C, raqamli gumanizm-A, ma’naviy chidamlilik-B.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-017",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Foresayt texnologiyasi rahbarning ma’naviy rivojlanishida nimaga xizmat qiladi?",
    options: [
      "Kelajakdagi axloqiy muammolarni tahlil qilib, rivojlanish yo‘nalishini aniqlashga",
      "Faqat qadriyatlar o‘zgarishini statistik baholashga",
      "Faqat boshqaruv vazifalarini taqsimlashga",
      "Faqat jamoa intizomini nazorat qilishga",
    ],
    correctAnswer: 0,
    explanation: "Foresayt kelajakdagi axloqiy chaqiriqlarni oldindan ko‘rish va tayyorgarlik ko‘rishga xizmat qiladi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-018",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Rahbar ma’naviy qiyofasining darajalarini moslashtiring.

1. Individual-psixologik
2. Ijtimoiy-pedagogik
3. Kasbiy-etik

A) Jamoa bilan muloqot va ijtimoiy adolat
B) Pedagogik etika va davlat-jamiyat oldidagi mas’uliyat
C) Ichki “Men”, vijdon va iymon`,
    options: [
      "1-C, 2-A, 3-B",
      "1-A, 2-B, 3-C",
      "1-B, 2-C, 3-A",
      "1-C, 2-B, 3-A",
    ],
    correctAnswer: 0,
    explanation: "1-C, 2-A, 3-B.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-019",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Kelajak rahbarining ma’naviy portreti nimani anglatadi?",
    options: [
      "Rahbarning shaxsiy imiji va ma’muriy vakolatlari yig‘indisini",
      "Rahbarning boshqaruv tajribasi va texnologik samaradorligi majmuini",
      "Kutilayotgan ijtimoiy-iqtisodiy muhitga mos keladigan axloqiy va professional fazilatlar majmuini",
      "Rahbarning innovatsion qarorlari va nazorat tizimini",
    ],
    correctAnswer: 2,
    explanation: "Kelajak rahbari portreti kelajak muhitiga mos axloqiy va professional fazilatlar majmuasidir.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-020",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "360 darajali qayta aloqa rahbar ma’naviy qiyofasini rivojlantirishda eng avvalo nimaga yordam beradi?",
    options: [
      "Rahbar qarorlarini faqat qonuniylik mezonida baholashga",
      "Rahbarning ichki pozitsiyasini mustaqil ravishda tahlil qilishga",
      "Rahbar haqidagi anonim fikrlar orqali o‘zi ko‘rmayotgan xatolarni aniqlashga",
      "Rahbar dunyoqarashini adabiyot orqali boyitishga",
    ],
    correctAnswer: 2,
    explanation: "360° qayta aloqa tashqi nuqtayi nazardan rahbarning ko‘rinmayotgan kamchiliklarini aniqlaydi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-021",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Rahbarning ma’naviy qiyofasi ta’lim muassasasida qanday asosiy vazifani bajaradi?",
    options: [
      "Pedagogik jamoada qadriyatlar, mas’uliyat va hamkorlik muhitini rivojlantirishga xizmat qiladi",
      "Faqat rahbarning shaxsiy nufuzini oshiradi",
      "Faqat intizomiy nazoratni kuchaytiradi",
      "Faqat tashqi imijni shakllantiradi",
    ],
    correctAnswer: 0,
    explanation: "Ma’naviy qiyofa butun jamoaning qadriyatlar va hamkorlik muhitiga ta’sir qiladi.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-022",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Rahbarning o‘z-o‘zini audit qilishi qaysi amaliy mazmunni anglatadi?",
    options: [
      "Kunlik qarorlarini adolat, insof va shaxsiy manfaat mezonida ichki baholab borish",
      "Boshqaruvga oid kitoblarni o‘qish",
      "Ota-onalar fikrini anonim yig‘ish",
      "Jamoa fikrini tashqi baholash orqali o‘rganish",
    ],
    correctAnswer: 0,
    explanation: "Self-Audit rahbarning o‘z qarorlarini ichki ma’naviy mezonlar orqali tekshirishidir.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-023",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Ma’naviy qiyofani shakllantirish bosqichlarini moslashtiring.

1. O‘z-o‘zini audit qilish
2. 360 darajali qayta aloqa
3. Individual rivojlanish trayektoriyasi

A) Kunlik qarorlarni adolat va insof asosida baholash
B) Jamoa, ota-ona va o‘quvchilar fikrini anonim o‘rganish
C) Adabiyot, falsafa va san’at orqali dunyoqarashni rivojlantirish`,
    options: [
      "1-B, 2-D, 3-C",
      "1-A, 2-B, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-C, 3-A",
    ],
    correctAnswer: 1,
    explanation: "1-A, 2-B, 3-C.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-024",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: `Ma’naviy kompetensiyani rivojlantirish mexanizmlarini moslashtiring.

1. Refleksiv
2. Empatik
3. Korreksion

A) Jamoa a’zolarining ruhiy holatini tushunishga qaratilgan yondashuv
B) Murakkab axloqiy vaziyatlarni mentorlar bilan muhokama qilib, xatolarni to‘g‘rilash
C) Qarorlarni adolat, insof va mas’uliyat mezonida baholash`,
    options: [
      "1-A, 2-B, 3-C",
      "1-D, 2-A, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-C, 3-D",
    ],
    correctAnswer: 2,
    explanation: "Refleksiv-C, empatik-A, korreksion-B.",
    source: "Foydalanuvchi yuborgan tayyor test",
    points: 2,
  },

  {
    id: "m3t2-medium-025",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Quyidagilardan qaysi biri Foresayt sessiyasining jamoaviy intellektni rivojlantirishdagi asosiy xususiyatini ifodalaydi?",
    options: [
      "Rahbar kelajakni faqat o‘zi belgilaydi",
      "Xodimlar bilan kelajakni birga loyihalash va turli qarashlarni eshitish",
      "Barcha qarorlarni tashqi ekspertlarga topshirish",
      "Faqat rahbarning tajribasiga tayanish",
    ],
    correctAnswer: 1,
    explanation: "Foresayt sessiyasi kollegial jarayon bo‘lib, kelajak birgalikda loyihalanadi.",
    source: "M3T2 ma’ruza",
    points: 2,
  },

  {
    id: "m3t2-medium-026",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy qiyofa va psixologik xavfsizlik o‘rtasidagi bog‘liqlik qaysi javobda to‘g‘ri?",
    options: [
      "Adolatli rahbar xodimlarga xato qilishdan qo‘rqmasdan yangi g‘oyalarni taklif qilish imkonini beradi",
      "Qattiq nazorat xodimlarda doimiy ijodiy faollikni shakllantiradi",
      "Jazo tizimi xodimlarning yangiliklarga ochiqligini kuchaytiradi",
      "Faqat yuqori natijalar psixologik xavfsizlikni ta’minlaydi",
    ],
    correctAnswer: 0,
    explanation: "Ishonch va psixologik xavfsizlik innovatsion tashabbuslarni qo‘llab-quvvatlaydi.",
    source: "M3T2 ma’ruza",
    points: 2,
  },

  {
    id: "m3t2-medium-027",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "“Ishonch = Tezlik” g‘oyasi ma’naviy portretni modellashtirishda nimani bildiradi?",
    options: [
      "Ishonch mavjud bo‘lsa, qarorlarning barchasi avtomatik to‘g‘ri bo‘ladi",
      "Ishonch ortiqcha nazorat va qog‘ozbozlikni kamaytirib, boshqaruv jarayonini tezlashtiradi",
      "Ishonch rahbarning barcha vakolatlarini jamoaga berishini anglatadi",
      "Ishonch faqat texnologik jarayonlarga taalluqli",
    ],
    correctAnswer: 1,
    explanation: "Ishonch ortiqcha nazorat xarajatlarini kamaytiradi va boshqaruv tezligini oshiradi.",
    source: "M3T2 ma’ruza",
    points: 2,
  },

  {
    id: "m3t2-medium-028",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy muammoli vaziyatni tahlil qilishda manfaatlar xaritasi qachon qo‘llanadi?",
    options: [
      "Vaziyatda kimga foyda va kimga zarar yetishi mumkinligini aniqlashda",
      "Rahbarning shaxsiy rivojlanish rejasini tuzishda",
      "Jamoaning texnologik ko‘nikmalarini baholashda",
      "Faqat qonun hujjatlarini izlashda",
    ],
    correctAnswer: 0,
    explanation: "Manfaatlar xaritasi qarorning turli tomonlarga ta’sirini aniqlashga xizmat qiladi.",
    source: "M3T2 ma’ruza",
    points: 2,
  },

  {
    id: "m3t2-medium-029",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy algoritmda variantlar generatsiyasidan keyin qaysi bosqich keladi?",
    options: [
      "Vaziyatning axloqiy diagnostikasi",
      "Manfaatlar xaritasini tuzish",
      "Oqibatlarni Foresayt asosida bashorat qilish",
      "Muammoni e’tiborsiz qoldirish",
    ],
    correctAnswer: 2,
    explanation: "Algoritm: diagnostika → manfaatlar xaritasi → variantlar → oqibatlarni bashorat qilish → qaror.",
    source: "M3T2 ma’ruza",
    points: 2,
  },

  {
    id: "m3t2-medium-030",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "medium",
    text: "Ma’naviy qiyofa rahbarning shaxsiy imijidan nimasi bilan farq qiladi?",
    options: [
      "Ma’naviy qiyofa faqat tashqi ko‘rinishga bog‘liq",
      "Ma’naviy qiyofa ichki qadriyatlar va axloqiy tamoyillar tizimini ham qamrab oladi",
      "Shaxsiy imij har doim ma’naviy qiyofadan ustun turadi",
      "Ular o‘rtasida mazmuniy farq mavjud emas",
    ],
    correctAnswer: 1,
    explanation: "Ma’naviy qiyofa tashqi imijdan kengroq bo‘lib, ichki qadriyat va axloqiy pozitsiyani qamrab oladi.",
    source: "M3T2 ma’ruza",
    points: 2,
  },
];

/* =========================================================
 * HARD — 30
 * ========================================================= */

export const M3T2_HARD_QUESTIONS: Question[] = [
  {
    id: "m3t2-hard-001",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbarning ma’naviy qiyofasi kasbiy mahorat va axloqiy fazilatlar sintezi sifatida qaralganda, boshqaruv qarorining sifatini belgilovchi asosiy natija qaysi?",
    options: [
      "Qarorning faqat tez va texnik jihatdan bajarilishi",
      "Qarorning insonparvarligi va jamoaviy manfaatlar ustuvorligini ta’minlashi",
      "Qarorning rahbar vakolatini kuchaytirishi",
      "Qarorning nazorat jarayonlarini qisqartirishi",
    ],
    correctAnswer: 1,
    explanation: "Ilmiy ta’rifga ko‘ra, ma’naviy qiyofa qarorlarning insonparvarligi va jamoaviy manfaatlar ustuvorligini ta’minlaydi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-002",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Direktor qarorining qonuniy ekanini aniqladi, biroq qaror ayrim xodimlarda asosli nohaqlik hissini tug‘dirishini ko‘rdi. Ma’ruza mantig‘iga ko‘ra, keyingi eng maqbul harakat qaysi?",
    options: [
      "Qonuniy bo‘lgani uchun qarorni o‘zgartirmaslik",
      "Qarorni shaxsiy manfaat nuqtayi nazaridan qayta ko‘rib chiqish",
      "Qarorning axloqiy oqibatlarini tahlil qilib, qonuniy va vijdonan to‘g‘ri variantni izlash",
      "Jamoa noroziligini kamaytirish uchun qarorni yashirin amalga oshirish",
    ],
    correctAnswer: 2,
    explanation: "Ma’naviy algoritm qonuniylik bilan birga vijdoniy va uzoq muddatli oqibatlarni ham hisobga olishni talab qiladi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-003",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: `Quyidagi fikrlardan qaysilari ma’ruzadagi kelajak rahbarining ma’naviy portretiga mos?

1. Adolat va halollikni texnologik samaradorlikdan ustun qo‘yish.
2. Texnologiyalarni insoniy qadriyatlar bilan uyg‘unlashtirish.
3. Global o‘zgarishlarda milliy qadriyatlarga sobit turish.
4. Texnologik natija uchun axloqiy mezonlarni ikkinchi o‘ringa qo‘yish.
5. Axborot xurujlari sharoitida ma’naviy chidamlilikni saqlash.`,
    options: [
      "1, 2, 3, 5",
      "1, 2, 4, 5",
      "1, 3, 4",
      "2, 3, 4",
    ],
    correctAnswer: 0,
    explanation: "1,2,3,5 ma’ruza mazmuniga mos; 4-variant mazmunga zid.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-004",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Foresaytning uch funksiyasi qaysi ketma-ketlikda mantiqan to‘g‘ri ifodalangan?",
    options: [
      "Muammoni bartaraf etish → nazoratni kuchaytirish → hisobot berish",
      "Kelajak xavfini oldindan ko‘rish → uzoq muddatli ma’naviy oqibatni baholash → jamoa bilan kelajakni loyihalash",
      "Hisobotni tahlil qilish → xodimlarni baholash → intizomiy choralar",
      "Qaror berish → vaziyatni aniqlash → kelajakni modellashtirish",
    ],
    correctAnswer: 1,
    explanation: "Bu ketma-ketlik Foresaytning proaktivlik, ma’naviy mas’uliyat va jamoaviy intellekt funksiyalarini qamrab oladi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-005",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Agar direktor Foresayt sessiyasida barcha kelajak ssenariylarini o‘zi belgilab, xodimlarning qarashlarini faqat tasdiqlash uchun eshitsa, ma’ruzadagi qaysi tamoyil eng ko‘p buziladi?",
    options: [
      "Jamoaviy intellekt va kollegial kelajak loyihalash tamoyili",
      "Psixologik barqarorlik tamoyili",
      "Uzluksiz ma’naviy mutolaa tamoyili",
      "Individual rivojlanish trayektoriyasi tamoyili",
    ],
    correctAnswer: 0,
    explanation: "Foresayt sessiyasi rahbar va jamoaning kelajakni birga loyihalashiga asoslanadi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-006",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi holatlarning qaysi birida raqamli gumanizm eng to‘liq namoyon bo‘ladi?",
    options: [
      "Raqamli tizim orqali barcha xodimlarning har bir harakatini nazorat qilish",
      "Raqamli nazoratni saqlagan holda xodimlarning insoniy ehtiyojlari, roziligi va rivojlanishini ham hisobga olish",
      "Hisobotlarni to‘liq avtomatlashtirib, inson omilini kamaytirish",
      "Texnologik natijalarni xodimlar ruhiy holatidan ustun qo‘yish",
    ],
    correctAnswer: 1,
    explanation: "Raqamli gumanizm texnologiyani insoniy qadriyatlar bilan uyg‘unlashtirishni anglatadi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-007",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Ma’naviy qiyofaning pedagogik jamoaga ta’sir mexanizmlarini to‘g‘ri ketma-ketlikda belgilang.",
    options: [
      "Nazorat → jazo → intizom → natija",
      "Adolat → ishonch → psixologik xavfsizlik → innovatsion tashabbus",
      "Buyruq → ijro → hisobot → nazorat",
      "Rag‘bat → raqobat → bosim → natija",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzada adolat ishonchni, ishonch psixologik xavfsizlikni, u esa innovatsion faollikni kuchaytirishi ko‘rsatilgan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-008",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "“Iqtidorli, ammo odobsiz rahbar” va “odobli, ammo iqtidorsiz rahbar” haqidagi ma’ruza xulosasini qaysi javob eng aniq ifodalaydi?",
    options: [
      "Birinchisi tizimni tezlashtiradi, ikkinchisi esa faqat jamoani ruhlantiradi",
      "Birinchisi mustabidlikka, ikkinchisi esa boshqaruv samarasizligiga olib kelishi mumkin; barqarorlik uchun ikkalasi uyg‘un bo‘lishi kerak",
      "Ikkalasining farqi faqat kommunikatsiya uslubida",
      "Iqtidor har doim odobdan ustun turadi",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzaning dialektik xulosasi — iqtidor va odob birligi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-009",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbar ma’naviy kompetensiyasini rivojlantirishda quyidagi jarayonlardan qaysi biri refleksiya → tashqi qayta aloqa → rivojlanish trayektoriyasi mantiqiga eng mos?",
    options: [
      "Kunlik qarorlarni tahlil qilish → anonim fikrlarni o‘rganish → shaxsiy rivojlanish rejasini tuzish",
      "Anonim fikrlarni o‘rganish → buyruqlar berish → hisobot tuzish",
      "Kitob o‘qish → nazorat → intizomiy baholash",
      "Qaror berish → jazo → qayta nazorat",
    ],
    correctAnswer: 0,
    explanation: "Bu uch bosqich Self-Audit, 360° Feedback va Individual Development Plan mantig‘iga mos.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-010",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbar qarorining kelajakdagi ma’naviy ta’sirini baholash Foresaytning qaysi jihati bilan bevosita bog‘liq?",
    options: [
      "Ma’naviy mas’uliyatning kengayishi",
      "Ma’muriy nazoratning kuchayishi",
      "Kommunikativ madaniyat",
      "Psixologik barqarorlik",
    ],
    correctAnswer: 0,
    explanation: "Foresayt rahbarni bugungi qarorning uzoq muddatli ma’naviy ta’sirini o‘ylashga undaydi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-011",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
   text: `Quyidagi fikrlardan qaysilari ma’naviy algoritmning tarkibiy qismlariga kiradi?

1. Axloqiy diagnostika
2. Manfaatlar xaritasi
3. Variantlar generatsiyasi
4. Oqibatlarni bashorat qilish
5. Qarorni asoslash"`,
    options: [
      "1, 2, 3",
      "1, 3, 4",
      "2, 3, 5",
      "1, 2, 3, 4, 5",
    ],
    correctAnswer: 3,
    explanation: "Ma’ruzadagi algoritm besh bosqichning barchasini qamrab oladi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-012",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Ma’naviy algoritmning to‘g‘ri ketma-ketligini belgilang.",
    options: [
      "Manfaatlar xaritasi → diagnostika → qaror → Foresayt → variantlar",
      "Diagnostika → manfaatlar xaritasi → variantlar → oqibatlarni bashorat qilish → qaror va asoslash",
      "Variantlar → diagnostika → manfaatlar xaritasi → qaror → bashorat",
      "Diagnostika → qaror → manfaatlar xaritasi → variantlar → asoslash",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzada aynan shu besh bosqichli ketma-ketlik berilgan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-013",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbarning ma’naviy qiyofasi bilan inson kapitalini saqlab qolish o‘rtasidagi bog‘liqlik qaysi mexanizm orqali tushuntiriladi?",
    options: [
      "Adolatli va qadrlovchi muhit xodimlarning maktabga bog‘liqligini kuchaytiradi",
      "Qattiq nazorat xodimlarni maktabda uzoqroq ushlab turadi",
      "Faqat yuqori ish haqi xodimlarning barqarorligini ta’minlaydi",
      "Texnologik nazorat xodimlarning kasbiy motivatsiyasini avtomatik oshiradi",
    ],
    correctAnswer: 0,
    explanation: "Ma’naviy muhitda o‘qituvchi o‘zini qadrlangan his qiladi va inson kapitali saqlanadi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-014",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi vaziyatda qaysi kombinatsiya ma’naviy kompetensiyaning eng to‘liq namunasidir? Direktor nizoli vaziyatni ko‘rib chiqdi, tomonlarni tingladi, manfaatlarni aniqladi, bir nechta yechim ishlab chiqdi va kelajak oqibatlarini baholadi.",
    options: [
      "Empatiya + nazorat",
      "Refleksiya + intizom",
      "Empatiya + manfaatlar tahlili + Foresayt",
      "Ma’muriy boshqaruv + hisobot",
    ],
    correctAnswer: 2,
    explanation: "Vaziyatda tinglash, manfaatlarni ko‘rish va kelajak oqibatlarini baholash birlashgan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-015",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbarning so‘zi va amali o‘rtasidagi nomuvofiqlik innovatsion islohotga qanday ta’sir qilishi mumkin?",
    options: [
      "Jamoa ishonchini pasaytirib, islohotning qabul qilinishini qiyinlashtirishi mumkin",
      "Har doim innovatsiya tezligini oshiradi",
      "Faqat tashqi imijga ta’sir qiladi",
      "Xodimlarning nazoratga bo‘lgan ehtiyojini yo‘q qiladi",
    ],
    correctAnswer: 0,
    explanation: "Role model sifatidagi rahbarning so‘zi va ishi uyg‘un bo‘lmasa, jamoa ishonchi pasayadi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-016",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Foresayt sessiyasining rahbarni “yakkahokim”dan “facilitator”ga olib boruvchi jihati qaysi?",
    options: [
      "Kelajakni jamoa bilan birgalikda loyihalash va turli qarashlarni eshitish",
      "Barcha qarorlarni xodimlarga topshirish",
      "Rahbar vakolatlarini kamaytirish",
      "Nazoratni to‘liq bekor qilish",
    ],
    correctAnswer: 0,
    explanation: "Facilitator rahbar jarayonni yo‘naltiradi va jamoaviy intellektdan foydalanadi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-017",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi fikrlardan qaysi biri “ma’naviy chidamlilik”ni noto‘g‘ri talqin qiladi?",
    options: [
      "Axborot xurujlari sharoitida qadriyatlarga sobit turish",
      "Global o‘zgarishlar sharoitida ichki ma’naviy tayanchni saqlash",
      "Har qanday tashqi o‘zgarishni rad etish va yangiliklardan voz kechish",
      "E’tiqod va milliy qadriyatlarni saqlash",
    ],
    correctAnswer: 2,
    explanation: "Chidamlilik yangilikni rad etish emas, o‘z qadriyatlarini saqlagan holda o‘zgarishlarga moslashishdir.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-018",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbarning 360° qayta aloqadan keyin aniqlangan kamchiliklarini rivojlanish rejasiga kiritishi qaysi mantiqni ifodalaydi?",
    options: [
      "Tashqi baho → refleksiya → individual rivojlanish",
      "Nazorat → jazo → intizom",
      "Hisobot → tekshiruv → buyruq",
      "Foresayt → texnologiya → nazorat",
    ],
    correctAnswer: 0,
    explanation: "360° feedback natijalari refleksiya va individual rivojlanish rejasiga asos bo‘lishi mumkin.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-019",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Ma’naviy qiyofasi yuksak rahbar nizoni hal qilishda qaysi ustuvorlikni tanlaydi?",
    options: [
      "Rahbarning mavqeini saqlab qolishni",
      "Aybdorni tezda aniqlashni",
      "Adolatli va insoniy yechimni topishni",
      "Jamoada rahbarga qarshi fikrlarni cheklashni",
    ],
    correctAnswer: 2,
    explanation: "Ma’ruzada nizoni “qanday yechim adolatli?” mezonida hal qilish ta’kidlangan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-020",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi qarorlardan qaysi biri “raqamli gumanizm + etik yetakchilik” uyg‘unligini eng yaxshi ifodalaydi?",
    options: [
      "Raqamli tizim natijalarini asosiy mezon qilib, insoniy e’tirozlarni chetga surish",
      "Raqamli ma’lumotlardan foydalanib, qarorni inson qadr-qimmati va adolat mezonlari bilan birgalikda ishlab chiqish",
      "Raqamli nazoratni kuchaytirib, xodimlarning fikrini kamaytirish",
      "Texnologik samaradorlik sabab barcha axloqiy baholashlarni qisqartirish",
    ],
    correctAnswer: 1,
    explanation: "Ikki tushuncha texnologik imkoniyatni insoniy va axloqiy mezonlar bilan uyg‘unlashtiradi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-021",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Ma’naviy kompetensiyaning “bilim”dan “kompetensiya”ga aylanishini qaysi holat eng aniq ko‘rsatadi?",
    options: [
      "Rahbar adolat tushunchasining ta’rifini yoddan aytadi",
      "Rahbar adolat mezonini real ustama taqsimoti vaziyatida xolis qaror ishlab chiqishda qo‘llaydi",
      "Rahbar ma’naviyatga oid kitoblarni ko‘paytiradi",
      "Rahbar ma’naviy qadriyatlar haqida yig‘ilish o‘tkazadi",
    ],
    correctAnswer: 1,
    explanation: "Kompetensiya bilimni real boshqaruv vaziyatida samarali qo‘llash orqali namoyon bo‘ladi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-022",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Foresayt va refleksiyaning farqi qaysi javobda eng aniq ifodalangan?",
    options: [
      "Foresayt kelajak ehtimollarini baholaydi, refleksiya esa o‘tgan yoki joriy qarorlarni ichki mezonlar orqali tahlil qiladi",
      "Foresayt faqat o‘tmishni, refleksiya esa faqat kelajakni o‘rganadi",
      "Ikkalasi faqat jamoa fikrini yig‘ishga xizmat qiladi",
      "Ikkalasi ham faqat texnologik jarayonlarni tahlil qiladi",
    ],
    correctAnswer: 0,
    explanation: "Foresayt kelajak yo‘nalishlariga, refleksiya esa o‘z faoliyatini anglash va baholashga yo‘naltiriladi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-023",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Agar rahbar har bir xodimni doimiy nazorat qilmasa ham jamoada yuqori mas’uliyat saqlansa, bu holat ma’ruzadagi qaysi mexanizm bilan ko‘proq izohlanadi?",
    options: [
      "Ishonchga asoslangan boshqaruv",
      "Ma’muriy bosim",
      "Jazo tizimi",
      "Nazoratni markazlashtirish",
    ],
    correctAnswer: 0,
    explanation: "Ishonch ortiqcha nazorat ehtiyojini kamaytiradi va mas’uliyatni ichki motivatsiya bilan mustahkamlaydi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-024",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbarning shaxsiy rivojlanish trayektoriyasiga Foresayt elementini qo‘shishning eng maqbul ko‘rinishi qaysi?",
    options: [
      "Faqat bugungi lavozim vazifalarini ro‘yxatlash",
      "5–10 yillik ehtimoliy ma’naviy chaqiriqlarni hisobga olib rivojlanish maqsadlarini belgilash",
      "Faqat o‘tgan faoliyatdagi xatolarni sanab chiqish",
      "Faqat qisqa muddatli hisobot ko‘rsatkichlarini belgilash",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzada 5–10 yillik ma’naviy yuksalish yo‘l xaritasi taklif qilingan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-025",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi uchliklardan qaysi biri ma’naviy qiyofaning uch darajasini to‘liq ifodalaydi?",
    options: [
      "Individual-psixologik + ijtimoiy-pedagogik + kasbiy-etik",
      "Kasbiy + moliyaviy + texnologik",
      "Psixologik + ma’muriy + iqtisodiy",
      "Individual + raqamli + strategik",
    ],
    correctAnswer: 0,
    explanation: "Ma’ruzada aynan shu uch daraja berilgan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-026",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Rahbar ma’naviy qiyofasini rivojlantirishning eng kuchli sikli qaysi?",
    options: [
      "Nazorat → jazo → hisobot → takroriy nazorat",
      "O‘z-o‘zini audit → 360° qayta aloqa → individual rivojlanish → qayta refleksiya",
      "Buyruq → ijro → hisobot → mukofot",
      "Foresayt → nazorat → intizom → hisobot",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzadagi amaliy rivojlanish yondashuvi uzluksiz o‘zini baholash va rivojlantirish sikliga asoslanadi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-027",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi holatda ma’naviy qiyofaning qaysi komponentlari bir vaqtning o‘zida namoyon bo‘ladi? Direktor bosim ostida ham bosiqlikni saqladi, dalillarni tekshirdi va qarorni shaxsiy manfaatdan xoli qabul qildi.",
    options: [
      "Psixologik barqarorlik + intellektual halollik + insof",
      "Kommunikativ madaniyat + raqamli gumanizm",
      "Ma’naviy mutolaa + jamoaviy intellekt",
      "Etik yetakchilik + texnologik samaradorlik",
    ],
    correctAnswer: 0,
    explanation: "Bosiqlik — psixologik barqarorlik, dalilga tayanish — intellektual halollik, shaxsiy manfaatdan voz kechish — insof.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-028",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Foresaytning “kelajakni bugundan qurish” g‘oyasi qaysi boshqaruv mantiqiga eng yaqin?",
    options: [
      "Muammo yuzaga kelgach, javob choralarini ishlab chiqish",
      "Ehtimoliy kelajaklarni baholab, hozirgi qarorlarni uzoq muddatli maqsad bilan bog‘lash",
      "Faqat mavjud ko‘rsatkichlarni qayta hisoblash",
      "Rahbarning shaxsiy tajribasiga tayanish",
    ],
    correctAnswer: 1,
    explanation: "Foresayt kelajak ehtimollarini bugungi strategik qarorlar bilan bog‘laydi.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-029",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: "Quyidagi variantlardan qaysi biri ma’naviy qiyofa, inson kapitali va ta’lim sifati o‘rtasidagi sabab-oqibat zanjirini to‘g‘ri ifodalaydi?",
    options: [
      "Adolatli muhit → xodim qadri → kadrlar barqarorligi → kuchli jamoa → ta’lim sifati",
      "Nazorat → qo‘rquv → tezkor ijro → yuqori ta’lim sifati",
      "Texnologiya → avtomatik ishonch → kadrlar barqarorligi",
      "Qattiq intizom → ijodkorlik → psixologik xavfsizlik → innovatsiya",
    ],
    correctAnswer: 0,
    explanation: "Ma’ruzada ma’naviy muhit inson kapitalining saqlanishi va ta’lim sifatiga ta’sir qilishi ko‘rsatilgan.",
    source: "M3T2 ma’ruza",
    points: 3,
  },

  {
    id: "m3t2-hard-030",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "hard",
    text: `Quyidagi fikrlardan qaysilari ma’ruzaning umumiy falsafasiga mos?

1. Rahbarning ma’naviy qiyofasi shaxsiy namuna orqali jamoaga ta’sir qiladi.
2. Foresayt bugungi qarorlarni kelajak oqibatlari bilan bog‘laydi.
3. Ma’naviy kompetensiya real boshqaruv vaziyatida namoyon bo‘ladi.
4. Texnologik samaradorlik axloqiy mezonlardan ustun turishi kerak.
5. Iqtidor va odob uyg‘unligi muhim."`,
    options: [
      "1, 2, 3, 5",
      "1, 2, 4, 5",
      "2, 3, 4",
      "1, 3, 4",
    ],
    correctAnswer: 0,
    explanation: "1,2,3,5 ma’ruzaga mos; 4-variant ma’ruza tamoyiliga zid.",
    source: "M3T2 ma’ruza",
    points: 3,
  },
];

/* =========================================================
 * CASE — 10
 * ========================================================= */

export const M3T2_CASE_QUESTIONS: Question[] = [
  {
    id: "m3t2-case-001",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Direktor muhim qaror qabul qilishdan oldin jamoa fikrini eshitdi,
turli tomonlarning manfaatini solishtirdi va qarorni shaxsiy manfaatga
emas, adolat mezoniga tayantirdi. Natijada o‘qituvchilar qarorni
ishonch bilan qabul qildi.

Savol: Bu vaziyat rahbar ma’naviy qiyofasining qaysi darajasini
ko‘proq ifodalaydi?`,
    options: [
      "Kasbiy-etik daraja",
      "Ijtimoiy-pedagogik daraja",
      "Tashkiliy-boshqaruv daraja",
      "Individual-psixologik daraja",
    ],
    correctAnswer: 0,
    explanation: "Qarorda adolat va jamoaviy manfaatning ustuvorligi kasbiy-etik darajani ifodalaydi.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-002",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Direktor yangi raqamli tizim joriy qildi. Hisobotlar yaxshilandi,
lekin o‘qituvchilar o‘z fikri inobatga olinmayotganini ayta boshladi.
Direktor keyingi qarorlarda raqamlar bilan birga jamoaning roziligi
va ma’naviy birlikni ham hisobga oldi.

Savol: Bu vaziyat Foresayt va ma’naviyat integratsiyasining qaysi
mazmunini ifodalaydi?`,
    options: [
      "Texnologiya va nazoratni birlashtirishni",
      "Raqamlar va natijani uyg‘un ko‘rishni",
      "Hisobot va intizomni muvofiqlashtirishni",
      "Inson roziligi va birlikni hisobga olishni",
    ],
    correctAnswer: 3,
    explanation: "Ma’ruzaga ko‘ra boshqaruv samaradorligi faqat raqamlar emas, inson roziligi va ma’naviy birlik bilan ham baholanadi.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-003",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Maktab rahbari kadrlar qo‘nimsizligi va yoshlar qadriyatidagi
o‘zgarishlar kelgusida muammo bo‘lishini oldindan sezdi. U jamoa
bilan kelajakdagi ehtimoliy vaziyatlarni muhokama qilib, oldini
olish choralarini belgiladi.

Savol: Bu holat Foresayt texnologiyasining qaysi funksiyasini
ifodalaydi?`,
    options: [
      "Ma’muriy nazoratni kengaytirish",
      "Reaktiv boshqaruvni kuchaytirish",
      "Proaktiv boshqaruvga o‘tish",
      "Hisobot tizimini takomillashtirish",
    ],
    correctAnswer: 2,
    explanation: "Muammoni yuzaga kelishidan oldin ko‘rib, choralar belgilash proaktiv boshqaruvdir.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-004",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Direktor tajribali, tashabbuskor va tez qaror qabul qiladi. Lekin dars
taqsimotida ayrim yaqin xodimlariga qulay sharoit yaratib, boshqalarga
ortiqcha yuklama berdi. Jamoada adolatsizlik hissi kuchaydi.

Savol: Bu holat rahbar odobi va iqtidori o‘rtasidagi qaysi muammoni
ko‘rsatadi?`,
    options: [
      "Iqtidorning ma’naviy mezon bilan uyg‘unlashmaganini",
      "Odobning tashkiliy nazorat bilan kuchaytirilmaganini",
      "Iymonning boshqaruv tajribasi bilan cheklanganini",
      "Adolatning kasbiy talabchanlik bilan almashtirilganini",
    ],
    correctAnswer: 0,
    explanation: "Yuqori boshqaruv qobiliyati adolat va axloqiy mezonlar bilan uyg‘unlashmagan.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-005",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Direktor pedagoglar o‘rtasidagi nizoni ko‘rib chiqdi. U bir tomonni
ayblashga shoshilmadi, har ikki tarafni tingladi va “kim aybdor?”
emas, “qaysi yechim adolatli?” degan yondashuv bilan masalani hal qildi.

Savol: Bu vaziyat ma’naviy qiyofaning pedagogik jamoaga ta’siridagi
qaysi mexanizmga mos keladi?`,
    options: [
      "Ishonch muhitini yaratish",
      "Motivatsiya va ilhomlantirish",
      "Nizolarni konstruktiv hal etish",
      "Kommunikativ ta’sirni kuchaytirish",
    ],
    correctAnswer: 2,
    explanation: "Vaziyatda asosiy mexanizm nizoni aybdor izlash emas, adolatli yechim orqali konstruktiv hal qilishdir.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-006",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Rahbar muhim qaror qabul qilishdan oldin uni “Adolat”, “Insof” va
“Mas’uliyat” mezonlari asosida qayta ko‘rib chiqdi. Qaror qonuniy
bo‘lsa-da, ayrim xodimlarga nohaqlik tug‘dirishi mumkinligini sezib,
uni tuzatdi.

Savol: Bu holat ma’naviy kompetensiyani rivojlantirishning qaysi
mexanizmiga mos keladi?`,
    options: [
      "Refleksiv mexanizm",
      "Korreksion mexanizm",
      "Keys-stadi mexanizmi",
      "Empatik mexanizm",
    ],
    correctAnswer: 0,
    explanation: "Rahbar o‘z qarorini ma’naviy mezonlarda qayta baholagani uchun bu refleksiv mexanizmdir.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-007",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Maktabda keskin vaziyat yuzaga keldi. O‘qituvchilar orasida norozilik
kuchaydi. Direktor shoshilinch jazolashga o‘tmadi, vaziyatni bosiqlik
bilan tingladi, tomonlarga xotirjam munosabat bildirdi va jamoani
keskinlikdan chiqardi.

Savol: Bu holatda rahbar ma’naviy qiyofasining qaysi komponenti
namoyon bo‘lgan?`,
    options: [
      "Ma’naviy yetuklik",
      "Psixologik barqarorlik",
      "Intellektual halollik",
      "Kommunikativ madaniyat",
    ],
    correctAnswer: 1,
    explanation: "Keskin vaziyatda bosiqlik va vazminlikni saqlash psixologik barqarorlikdir.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-008",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Direktor har kuni ish yakunida o‘z qarorlarini tahlil qiladi:
ayrim qarorlarida shaxsiy manfaat adolatdan ustun kelmadimi,
kimdir nohaq chetda qolmadimi, degan savollarni yozib boradi.

Savol: Bu holat rahbar ma’naviy qiyofasini shakllantirishning
qaysi bosqichiga mos keladi?`,
    options: [
      "Individual rivojlanish trayektoriyasi",
      "O‘z-o‘zini audit qilish",
      "360 darajali qayta aloqa",
      "Ma’naviy mas’uliyatni kengaytirish",
    ],
    correctAnswer: 1,
    explanation: "Kunlik qarorlarni ichki mezonlar asosida tahlil qilish Self-Audit hisoblanadi.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-009",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Maktabda yagona ustama uchun ikki nomzod ko‘rsatildi. Birinchi
o‘qituvchining natijalari yuqori, dars sifati yaxshi va KPI ko‘rsatkichlari
kuchli. Ikkinchi o‘qituvchi esa natijalari o‘rtacha bo‘lsa-da, jamoat
ishlarida faol, maktab tadbirlarida fidoyilik ko‘rsatadi va moddiy
yordamga muhtoj.

Savol: Rahbar ustama masalasini hal qilishda qaysi yondashuv orqali
adolat va insof tamoyillarini eng to‘g‘ri uyg‘unlashtiradi?`,
    options: [
      "Ustamani KPI asosida berib, ikkinchi nomzod uchun boshqa yordam yo‘lini izlash",
      "Ustamani teng taqsimlab, ikki tomon manfaatini muvozanatlash",
      "Ustamani jamoa fikri bilan berib, mas’uliyatni kengashga o‘tkazish",
      "Ustamani ehtiyoj asosida berib, birinchi nomzodni keyin rag‘batlantirish",
    ],
    correctAnswer: 0,
    explanation: "Professional rag‘bat xolis mezonlarga asoslanadi; insoniy yordam esa boshqa qonuniy mexanizmlar orqali ko‘rsatilishi mumkin.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },

  {
    id: "m3t2-case-010",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_2_ID,
    difficulty: "case",
    text: `Vaziyat:
Maktab direktori bo‘sh lavozimga nomzod tanlamoqda. Yuqori turuvchi
rahbar o‘ziga yaqin, ammo lavozim talablariga to‘liq mos kelmaydigan
nomzodni tavsiya qildi. Shu bilan birga, bilim va kasbiy tayyorgarligi
yuqori bo‘lgan yosh kadr ham hujjat topshirdi.

Savol: Rahbar ma’naviy jasorat, iymon va qonuniy adolat tamoyillarini
qanday qo‘llashi kerak?`,
    options: [
      "Yuqori tashkilot tavsiyasini qabul qilib, mas’uliyatni tashqi tomonga o‘tkazish",
      "Har ikki nomzodni xolis mezonlar asosida baholab, munosib kadrni qonuniy asosda tanlash",
      "Tavsiya qilingan nomzodni vaqtincha ishga olib, keyin qayta baholash",
      "Yosh nomzodni zaxiraga olib, tavsiya qilingan nomzodni qo‘llab-quvvatlash",
    ],
    correctAnswer: 1,
    explanation: "Ma’ruzadagi keysga ko‘ra, munosib nomzod xolis va qonuniy mezonlar asosida tanlanishi kerak.",
    source: "Foydalanuvchi yuborgan tayyor case",
    points: 3,
  },
];

/* =========================================================
 * ALL QUESTIONS
 * ========================================================= */

export const M3T2_QUESTIONS: Question[] = [
  ...M3T2_EASY_QUESTIONS,
  ...M3T2_MEDIUM_QUESTIONS,
  ...M3T2_HARD_QUESTIONS,
  ...M3T2_CASE_QUESTIONS,
];

/* =========================================================
 * COUNTS
 * ========================================================= */

export const M3T2_EASY_COUNT = M3T2_EASY_QUESTIONS.length;
export const M3T2_MEDIUM_COUNT = M3T2_MEDIUM_QUESTIONS.length;
export const M3T2_HARD_COUNT = M3T2_HARD_QUESTIONS.length;
export const M3T2_CASE_COUNT = M3T2_CASE_QUESTIONS.length;

export const M3T2_QUESTION_COUNT = M3T2_QUESTIONS.length;

/* =========================================================
 * VALIDATION
 * ========================================================= */

if (M3T2_EASY_COUNT !== 30) {
  console.warn(
    `[M3T2] Easy savollar soni 30 emas: ${M3T2_EASY_COUNT}`
  );
}

if (M3T2_MEDIUM_COUNT !== 30) {
  console.warn(
    `[M3T2] Medium savollar soni 30 emas: ${M3T2_MEDIUM_COUNT}`
  );
}

if (M3T2_HARD_COUNT !== 30) {
  console.warn(
    `[M3T2] Hard savollar soni 30 emas: ${M3T2_HARD_COUNT}`
  );
}

if (M3T2_CASE_COUNT !== 10) {
  console.warn(
    `[M3T2] Case savollar soni 10 emas: ${M3T2_CASE_COUNT}`
  );
}

if (M3T2_QUESTION_COUNT !== 100) {
  console.warn(
    `[M3T2] Jami savollar soni 100 emas: ${M3T2_QUESTION_COUNT}`
  );
}

/* =========================================================
 * DUPLICATE ID CHECK
 * ========================================================= */

const M3T2_ID_SET = new Set<string>();

for (const question of M3T2_QUESTIONS) {
  if (M3T2_ID_SET.has(question.id)) {
    console.warn(
      `[M3T2] Duplicate question ID topildi: ${question.id}`
    );
  }

  M3T2_ID_SET.add(question.id);
}

/* =========================================================
 * LEVEL REGISTRY
 *
 * quiz-data.ts aynan shu obyektni import qiladi:
 *
 * import { M3T2_LEVELS } from "./data/m3t2";
 * ========================================================= */

export const M3T2_LEVELS = {
  easy: M3T2_EASY_QUESTIONS,
  medium: M3T2_MEDIUM_QUESTIONS,
  hard: M3T2_HARD_QUESTIONS,
  case: M3T2_CASE_QUESTIONS,
};

/* =========================================================
 * ANSWER SHUFFLING
 *
 * Maqsad:
 * - to‘g‘ri javob doim bir xil pozitsiyada turmasin;
 * - A/B/C/D avtomatik aralashsin;
 * - correctAnswer yangi joyga avtomatik ko‘chsin;
 * - bir xil savolda variantlar har safar bir xil tartibda
 *   chiqishi uchun question.id asosida deterministic ishlasin.
 * ========================================================= */

function seededRandom(seed: string): () => number {
  let hash = 2166136261;

  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash +=
      (hash << 1) +
      (hash << 4) +
      (hash << 7) +
      (hash << 8) +
      (hash << 24);
  }

  return () => {
    hash += 0x6d2b79f5;

    let t = hash;

    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* =========================================================
 * MIX SINGLE QUESTION
 * ========================================================= */

export function shuffleM3T2Question(
  question: Question
): Question {
  const random = seededRandom(question.id);

  const originalCorrectAnswer = question.correctAnswer;

  const indexedOptions = question.options.map(
    (option, index) => ({
      option,
      originalIndex: index,
    })
  );

  for (
    let i = indexedOptions.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(random() * (i + 1));

    [
      indexedOptions[i],
      indexedOptions[j],
    ] = [
      indexedOptions[j],
      indexedOptions[i],
    ];
  }

  const newCorrectAnswer =
    indexedOptions.findIndex(
      (item) =>
        item.originalIndex === originalCorrectAnswer
    );

  return {
    ...question,
    options: indexedOptions.map(
      (item) => item.option
    ),
    correctAnswer: newCorrectAnswer,
  };
}

/* =========================================================
 * SHUFFLE QUESTION COLLECTION
 * ========================================================= */

export function shuffleM3T2Questions(
  questions: Question[]
): Question[] {
  return questions.map(
    shuffleM3T2Question
  );
}

/* =========================================================
 * READY-TO-USE LEVELS
 *
 * UI/test tizimiga shu variantni berish mumkin.
 * ========================================================= */

export const M3T2_SHUFFLED_LEVELS = {
  easy: shuffleM3T2Questions(
    M3T2_EASY_QUESTIONS
  ),

  medium: shuffleM3T2Questions(
    M3T2_MEDIUM_QUESTIONS
  ),

  hard: shuffleM3T2Questions(
    M3T2_HARD_QUESTIONS
  ),

  case: shuffleM3T2Questions(
    M3T2_CASE_QUESTIONS
  ),
};

/* =========================================================
 * READY-TO-USE ALL QUESTIONS
 * ========================================================= */

export const M3T2_SHUFFLED_QUESTIONS: Question[] = [
  ...M3T2_SHUFFLED_LEVELS.easy,
  ...M3T2_SHUFFLED_LEVELS.medium,
  ...M3T2_SHUFFLED_LEVELS.hard,
  ...M3T2_SHUFFLED_LEVELS.case,
];

/* =========================================================
 * DEFAULT EXPORT
 * ========================================================= */

export default M3T2_QUESTIONS;
