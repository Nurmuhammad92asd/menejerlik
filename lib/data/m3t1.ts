/* =========================================================
 * MENEJERLIK BY NURMUHAMMAD
 * MODULE 3 — KEYS / CASE QUESTIONS
 * 3.1 — ZAMONAVIY RAHBAR XUSUSIYATLARI VA BOSHQARUV
 * KOMPETENSIYASI
 *
 * Fayl: m3t1.ts
 *
 * 10 ta keys
 * Module 3
 * Topic 1
 *
 * correctAnswer:
 * A = 0
 * B = 1
 * C = 2
 * D = 3
 * ========================================================= */

import type { Question } from "@/types/question";

/* =========================================================
 * MODULE / TOPIC IDS
 * ========================================================= */

export const MODULE_3_ID = "m3";

export const TOPIC_3_1_ID = "m3t1";

/* =========================================================
 * M3T1 — CASE QUESTIONS
 * ========================================================= */

export const M3T1_CASE_QUESTIONS: Question[] = [
  /* =======================================================
   * CASE 01
   * ======================================================= */

  {
    id: "m3t1-case-001",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `83-sonli umumiy o‘rta ta’lim maktabida direktor faoliyati tahlil qilinganda ikki xil holat kuzatildi. Bir tomondan, hujjatlar yuritilishi, hisobot topshirish, ijro intizomi va tashkiliy tartib yaxshi yo‘lga qo‘yilgan. Ikkinchi tomondan, direktorning ma’muriy boshqaruvga ko‘proq vaqt ajratib, dars sifati, metodik qo‘llab-quvvatlash va o‘qituvchilar bilan individual ishlashga kamroq e’tibor berayotgani aniqlandi. Yosh pedagoglar amaliy yordamga, tajribali o‘qituvchilar esa murabbiylik faoliyatini kuchaytirishga ehtiyoj bildirdi.

Ushbu vaziyatda zamonaviy direktorning boshqaruv kompetensiyasiga mos harakatlar majmuasi qaysi?`,

    options: [
      `1, 2, 3, 5`,
      `2, 4, 5, 6`,
      `1, 3, 5`,
      `1, 2, 6`,
    ],

    correctAnswer: 3,

    explanation:
      `Zamonaviy direktor ma’muriy tartib va ijro intizomini saqlagan holda pedagogik yetakchilik, jamoani rivojlantirish va murabbiylikni ham kuchaytirishi kerak. Shuning uchun 1, 2 va 6-bandlar mazmunan mos keladi.`,

    source:
      `3.1-mavzu: Zamonaviy rahbar xususiyatlari va boshqaruv kompetensiyasi`,

    points: 3,
  },

  /* =======================================================
   * CASE 02
   * ======================================================= */

  {
    id: "m3t1-case-002",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `105-sonli umumiy o‘rta ta’lim maktabida so‘nggi ikki yil davomida tashkiliy intizom, hisobot sifati va ijro nazorati yaxshilandi. Biroq o‘quvchilar natijalari barqaror yuqori darajaga chiqmayapti. Ayrim o‘qituvchilar kasbiy rivojlanish bo‘yicha yetarli yordam olmayotganini, yosh pedagoglar esa metodik yo‘naltirishga ehtiyoj borligini bildirdi. Direktor esa “avvalo tartib, natija keyin keladi” degan pozitsiyani ilgari surdi.

Quyidagi mulohazalarning to‘g‘ri yoki noto‘g‘ri ekanligini aniqlang.

1. Zamonaviy direktor samaradorligi ma’muriy intizom bilan birga pedagogik yetakchilik, o‘qituvchilar rivoji va o‘quv natijalariga ta’sir ko‘rsatish bilan ham belgilanadi.

2. Xalqaro tajriba maktab sharoitidan qat’i nazar tayyor model sifatida to‘liq ko‘chirilishi mumkin.

3. Rahbar imiji asosan tashqi ko‘rinish va rasmiy nutq bilan belgilanadi, qarorlardagi adolat ikkilamchi hisoblanadi.`,

    options: [
      `1 — Noto‘g‘ri; 2 — To‘g‘ri; 3 — Noto‘g‘ri`,
      `1 — To‘g‘ri; 2 — Noto‘g‘ri; 3 — Noto‘g‘ri`,
      `1 — To‘g‘ri; 2 — Noto‘g‘ri; 3 — To‘g‘ri`,
      `1 — To‘g‘ri; 2 — To‘g‘ri; 3 — Noto‘g‘ri`,
    ],

    correctAnswer: 1,

    explanation:
      `1-mulohaza to‘g‘ri: zamonaviy rahbarlik faqat ma’muriy natijalar bilan cheklanmaydi. 2-mulohaza noto‘g‘ri: xalqaro tajriba mahalliy sharoit va jamoa ehtiyojiga moslashtiriladi. 3-mulohaza noto‘g‘ri: rahbar imiji adolat, izchillik, muloqot va inson qadriga hurmat bilan ham shakllanadi.`,

    source:
      `3.1-mavzu: Zamonaviy maktab direktorining shaxsiy fazilatlari va xalqaro tajriba`,

    points: 3,
  },

  /* =======================================================
   * CASE 03
   * ======================================================= */

  {
    id: "m3t1-case-003",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `97-sonli umumiy o‘rta ta’lim maktabida direktor ish faoliyatini yangi bosqichga olib chiqish maqsadida jamoa bilan birgalikda ichki tahlil o‘tkazdi. Tahlil natijasida maktabda hisobot va hujjatlar yuritilishi tartibli ekanligi, biroq pedagogik yetakchilik, yosh o‘qituvchilarni qo‘llab-quvvatlash, murabbiylik mexanizmlari va jamoani strategik maqsad atrofida birlashtirish borasida bo‘shliqlar mavjudligi aniqlandi.

Direktor xalqaro tajribalarni aynan ko‘chirish emas, balki maktab sharoitiga moslashtirib qo‘llash zarurligini tushundi.

Quyidagi mulohazalarning to‘g‘ri yoki noto‘g‘ri ekanligini aniqlang.

1. Zamonaviy maktab direktori faqat ma’muriy nazorat va hisobot yuritishga tayanib ishlasa ham, maktabning uzoq muddatli rivojlanishini samarali ta’minlay oladi.

2. Xalqaro tajribalar maktab ehtiyoji, jamoa salohiyati va mahalliy sharoitga moslashtirilishi kerak.

3. Murabbiylik tajribani uzatish, yosh pedagoglarni qo‘llab-quvvatlash va xatolardan o‘rganish orqali barqaror rivojlanishga xizmat qiladi.`,

    options: [
      `1 — To‘g‘ri; 2 — Noto‘g‘ri; 3 — To‘g‘ri`,
      `1 — Noto‘g‘ri; 2 — Noto‘g‘ri; 3 — To‘g‘ri`,
      `1 — To‘g‘ri; 2 — To‘g‘ri; 3 — Noto‘g‘ri`,
      `1 — Noto‘g‘ri; 2 — To‘g‘ri; 3 — To‘g‘ri`,
    ],

    correctAnswer: 3,

    explanation:
      `Ma’muriy nazoratning o‘zi strategik rivojlanishni ta’minlamaydi. Xalqaro tajriba maktab kontekstiga moslashtirilishi lozim. Murabbiylik esa pedagoglarning kasbiy o‘sishi va tajriba almashinuvini ta’minlaydi.`,

    source:
      `3.1-mavzu: Xalqaro modellar, strategik boshqaruv va murabbiylik`,

    points: 3,
  },

  /* =======================================================
   * CASE 04
   * ======================================================= */

  {
    id: "m3t1-case-004",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `57-sonli umumiy o‘rta ta’lim maktabida yangi o‘quv yili boshidan direktor maktab faoliyatini qat’iy nazorat asosida boshqarib kelmoqda. U ish kunining asosiy qismini hisobotlar, buyruqlar, topshiriqlar ijrosi va yuqori tashkilotlarga taqdim etiladigan hujjatlar bilan o‘tkazadi.

Pedagogik jamoa bilan uchrashuvlar asosan topshiriqlarni yetkazish shaklida bo‘lib, o‘qituvchilarning fikri va takliflari kam eshitiladi. Dars sifati, o‘qituvchilarning kasbiy rivoji, metodik yordam va yosh pedagoglarni qo‘llab-quvvatlash masalalari ikkinchi darajaga tushib qolgan.

Chorak yakunida hujjatlar yuritilishida tartib saqlangan bo‘lsa ham, o‘quvchilar natijalarida sezilarli o‘sish kuzatilmadi.

Ushbu vaziyatdan kelib chiqib, zamonaviy maktab boshqaruvi talablariga eng mos xulosa qaysi?`,

    options: [
      `Direktor faoliyati umumiy jihatdan boshqaruv talablariga mos, chunki hujjatlar yuritilishi va intizomning ta’minlanishi maktab barqarorligi uchun yetarli asos yaratadi.`,
      `Direktor faoliyatida intizom va nazorat mavjud, biroq zamonaviy rahbar modelida jamoa bilan hamkorlik va pedagogik rivojlanish masalalari ham kuchaytirilishi lozim.`,
      `Direktor faoliyati zamonaviy boshqaruv talablariga to‘liq mos emas, chunki ma’muriy nazorat ustun bo‘lib, pedagogik yetakchilik, jamoaviy boshqaruv, murabbiylik va strategik rivojlanishga yetarli e’tibor berilmagan.`,
      `Direktorning asosiy vazifasi tashkiliy tartibni saqlash bo‘lgani sababli ta’lim natijalaridagi o‘zgarishlar keyingi bosqichda alohida ko‘rib chiqilishi mumkin.`,
    ],

    correctAnswer: 2,

    explanation:
      `Vaziyatda ma’muriy boshqaruv mavjud, ammo zamonaviy rahbar modeli strategik boshqaruv, pedagogik liderlik, jamoaviy qarorlar, kasbiy rivojlanish va murabbiylikni ham talab qiladi.`,

    source:
      `3.1-mavzu: Ma’muriy boshqaruvdan strategik va rivojlantiruvchi boshqaruvga o‘tish`,

    points: 3,
  },

  /* =======================================================
   * CASE 05
   * ======================================================= */

  {
    id: "m3t1-case-005",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `118-sonli umumiy o‘rta ta’lim maktabida ichki tahlil o‘tkazildi. Maktabda hujjatlar yuritilishi, ijro intizomi va tashkiliy nazorat barqaror yo‘lga qo‘yilgan. Biroq direktorning dars sifati, o‘qituvchilarning kasbiy rivoji, yosh pedagoglarga murabbiylik ko‘magi va jamoani strategik maqsad atrofida birlashtirishga yetarli vaqt ajratmayotgani aniqlandi.

Direktor boshqaruvda ma’muriy intizom bilan bir qatorda strategik fikrlash, pedagogik liderlik, boshqaruv etikasi, dalillarga asoslangan qarorlar va murabbiylik faoliyatini uyg‘unlashtirish zarurligini tushundi.

Quyidagi harakatlarning 4 tasi zamonaviy boshqaruv kompetensiyasiga mos keladi.

1. Pedagogik liderlikni kuchaytirish bilan birga dars sifati va o‘qituvchilar rivojiga doir vazifalarni asosan direktor o‘rinbosarlariga topshirib, rahbarning o‘zi umumiy nazorat bilan cheklanishi.

2. Xalqaro tajribalarni maktabning real ehtiyoji, jamoa salohiyati va mavjud sharoitiga moslashtirib qo‘llash.

3. Qarorlarni kuzatuv, ichki tahlil, natijalar va boshqa dalillarga tayangan holda qabul qilish.

4. Boshqaruv etikasi, adolat, izchil muloqot va inson qadriga hurmatni natijador boshqaruvning tarkibiy qismi sifatida ko‘rish.

5. Yosh pedagoglarga murabbiylik qilish, tajribani tizimli uzatish va xatolarni kasbiy o‘sish imkoniyatiga aylantirish.

6. Strategik masalalarda maslahatlashuvni saqlagan holda ma’muriy barqarorlikni rivojlantiruvchi boshqaruvdan ustun qo‘yish.`,

    options: [
      `1, 2, 4, 6`,
      `1, 3, 4, 5`,
      `2, 3, 4, 5`,
      `2, 3, 5, 6`,
    ],

    correctAnswer: 2,

    explanation:
      `2, 3, 4 va 5-bandlar zamonaviy boshqaruvning moslashtirilgan xalqaro tajriba, analitik qaror, boshqaruv etikasi va murabbiylik tamoyillariga mos keladi.`,

    source:
      `3.1-mavzu: Zamonaviy rahbar kompetensiyalari va boshqaruv etikasi`,

    points: 3,
  },

  /* =======================================================
   * CASE 06
   * ======================================================= */

  {
    id: "m3t1-case-006",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `Maktabda o‘quvchilarning funksional savodxonligi so‘nggi davrda pasaygani aniqlandi. Direktor muammoni faqat yakuniy nazorat natijalari orqali baholash bilan cheklanmay, dars kuzatuvlari, o‘qituvchilarning metodik ehtiyojlari va avvalgi natijalarni ham tahlil qildi.

Tahlil davomida ayrim fanlarda metodik qo‘llab-quvvatlash yetarli emasligi aniqlandi. Direktor pedagoglar bilan birgalikda rivojlantirish rejasi ishlab chiqishni va keyingi davrda natijalarni qayta tahlil qilishni rejalashtirdi.

Direktorning boshqaruv jarayonini amalga oshirishidagi eng maqbul ketma-ketlikni aniqlang.

1. Muammo sabablarini aniqlash.
2. Pedagoglar bilan rivojlantirish rejasini ishlab chiqish.
3. Metodik yordamni tashkil etish.
4. Belgilangan davrdan so‘ng natijalarni qayta tahlil qilish.
5. Natijani faqat yakuniy test ballari orqali baholash.`,

    options: [
      `1 → 2 → 3 → 5`,
      `1 → 3 → 4 → 5`,
      `2 → 3 → 4`,
      `1 → 2 → 3 → 4`,
    ],

    correctAnswer: 3,

    explanation:
      `Rivojlantiruvchi boshqaruv muammoni aniqlash, sabablarni tahlil qilish, reja va yordamni tashkil etish hamda natijani qayta baholashning uzluksiz sikliga asoslanadi. Shuning uchun 1 → 2 → 3 → 4 ketma-ketligi to‘g‘ri.`,

    source:
      `3.1-mavzu: Nazoratdan rivojlantiruvchi boshqaruvga o‘tish`,

    points: 3,
  },

  /* =======================================================
   * CASE 07
   * ======================================================= */

  {
    id: "m3t1-case-007",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `Maktabga bir nechta yosh o‘qituvchi ishga qabul qilindi. Ularning nazariy tayyorgarligi yetarli bo‘lsa-da, darsni tashkil etish, baholash va ota-onalar bilan muloqot qilishda amaliy qiyinchiliklar kuzatildi.

Direktor muammolarni faqat nazorat choralariga bog‘lamasdan, tajribali pedagoglar bilan hamkorlikda murabbiylik tizimini yo‘lga qo‘yishni rejalashtirdi.

Ushbu qarorning boshqaruv nuqtayi nazaridan eng muhim mazmuni qaysi?`,

    options: [
      `Yosh pedagoglarning mustaqil qarorlarini cheklash va barcha murakkab vazifalarni tajribali xodimlarga topshirish.`,
      `Nazorat jarayonining asosiy qismini tajribali o‘qituvchilarga o‘tkazish orqali direktorning tashkiliy yuklamasini kamaytirish.`,
      `Inson kapitaliga investitsiya qilish orqali kasbiy rivojlanish, tajriba uzatish va kadrlar barqarorligini kuchaytirish.`,
      `Yosh pedagoglar faoliyatini asosan rasmiy baholash mezonlari orqali nazorat qilish.`,
    ],

    correctAnswer: 2,

    explanation:
      `Murabbiylikning maqsadi yosh pedagogni cheklash emas, balki tajribani tizimli uzatish, kasbiy rivojlanish va o‘rganuvchi jamoani shakllantirishdir.`,

    source:
      `3.1-mavzu: Maktab direktorining murabbiylik faoliyati`,

    points: 3,
  },

  /* =======================================================
   * CASE 08
   * ======================================================= */

  {
    id: "m3t1-case-008",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `Maktab direktori xalqaro tajribalarni o‘rganish jarayonida uch xil yondashuvga duch keldi. Birinchi yondashuvda maktab direktori yuqori darajadagi ishonch asosida ichki sifat uchun javobgar bo‘ladi. Ikkinchi yondashuvda direktorlikka nomzodning liderlik salohiyati oldindan aniqlanib, tayinlovdan oldin maxsus tayyorgarlikdan o‘tkaziladi. Uchinchi yondashuvda esa muammo yuzaga kelganda aybdor shaxsni izlashdan ko‘ra tizimni takomillashtirishga urg‘u beriladi.

Tavsiflarni mamlakatlar bilan to‘g‘ri moslashtiring.`,

    options: [
      `Finlyandiya — ichki sifat va ishonch; Singapur — oldindan tayyorlash va shaxsiy javobgarlik; Yaponiya — uzluksiz takomillashtirish`,
      `Singapur — ichki sifat va ishonch; Yaponiya — oldindan tayyorlash va shaxsiy javobgarlik; Finlyandiya — tizimni takomillashtirish`,
      `Yaponiya — ichki sifat va ishonch; Finlyandiya — oldindan tayyorlash va shaxsiy javobgarlik; Singapur — uzluksiz takomillashtirish`,
      `Finlyandiya — shaxsiy javobgarlik; Yaponiya — direktorlarni oldindan tayyorlash; Singapur — ichki sifat va jamoaviy ishonch`,
    ],

    correctAnswer: 0,

    explanation:
      `Finlyandiya modelida ishonch va ichki sifat mas’uliyati, Singapurda rahbarlik salohiyatini oldindan aniqlash va maxsus tayyorgarlik, Yaponiyada esa uzluksiz takomillashtirish yondashuvi ajralib turadi.`,

    source:
      `3.1-mavzu: Finlyandiya, Singapur va Yaponiya tajribasi`,

    points: 3,
  },

  /* =======================================================
   * CASE 09
   * ======================================================= */

  {
    id: "m3t1-case-009",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `Direktor o‘z faoliyatini maktab direktori kasb standarti asosida tahlil qildi. U maktab rivojlanish rejasini ishlab chiqish, resurslarni safarbar etish, o‘quvchilar ta’lim sifatini oshirish, pedagoglarning kasbiy rivojini qo‘llab-quvvatlash, xodimlarni motivatsiyalash va ota-onalar bilan hamkorlikni yo‘lga qo‘yish bo‘yicha ish olib borayotganini aniqladi.

Ushbu vaziyat bo‘yicha eng to‘g‘ri xulosani aniqlang.`,

    options: [
      `Direktor faoliyati asosan ish yuritish va hisobot yo‘nalishidagi mehnat vazifalarini ifodalaydi.`,
      `Direktor kasb standartidagi bir nechta umumlashtirilgan mehnat vazifalarini o‘zaro bog‘liq holda amalga oshirmoqda.`,
      `Direktor faoliyatida asosan personalni boshqarish kompetensiyasi namoyon bo‘lib, ta’lim sifati bilan bog‘liq yo‘nalishlar unga kirmaydi.`,
      `Direktor faoliyatining asosiy mazmuni jamoatchilik va ota-onalar bilan hamkorlikni tashkil etishdan iborat.`,
    ],

    correctAnswer: 1,

    explanation:
      `Vaziyatdagi faoliyatlar maktabni rivojlantirish va o‘quv-tarbiya jarayonini boshqarish, kasbiy rivojlanish, personalni boshqarish hamda jamoatchilik bilan hamkorlik kabi bir nechta mehnat yo‘nalishlarini qamrab oladi.`,

    source:
      `Maktab direktori kasb standarti; 3.1-mavzu`,

    points: 3,
  },

  /* =======================================================
   * CASE 10
   * ======================================================= */

  {
    id: "m3t1-case-010",
    moduleId: MODULE_3_ID,
    topicId: TOPIC_3_1_ID,
    difficulty: "case",

    text: `Maktabda hujjatlar va ijro intizomi yaxshi yo‘lga qo‘yilgan. Shunga qaramay, o‘quvchilarning natijalari kutilgan darajada emas. Dars kuzatuvlari muntazam tizimga tushmagan, yosh pedagoglar metodik yordamga muhtoj, jamoada strategik maqsadlar haqida yagona tasavvur shakllanmagan.

Direktor vaziyatni tahlil qilib, ma’muriy boshqaruvni saqlab qolgan holda pedagogik liderlik, strategik boshqaruv, murabbiylik, analitik qarorlar va jamoaviy boshqaruvni kuchaytirishga qaror qildi.

Quyidagi harakatlarning 4 tasi zamonaviy boshqaruv kompetensiyasiga eng mos keladi.

1. Ta’lim natijalari va dars sifatini muntazam tahlil qilish.
2. Strategik maqsadlarni jamoa bilan ishlab chiqish va natijalarni belgilash.
3. Yosh pedagoglar uchun murabbiylik mexanizmini yo‘lga qo‘yish.
4. Qarorlarni ichki tahlil va dalillarga asoslash.
5. Ma’muriy hisobotlarni boshqaruvning asosiy natijasi sifatida belgilash.
6. Jamoaviy muhokamani kamaytirib, qarorlarni tezkor yakka tartibda qabul qilish.`,

    options: [
      `1, 2, 3, 4`,
      `1, 2, 4, 6`,
      `1, 3, 5, 6`,
      `2, 3, 5, 6`,
    ],

    correctAnswer: 0,

    explanation:
      `1, 2, 3 va 4-bandlar pedagogik liderlik, strategik boshqaruv, murabbiylik va analitik boshqaruv tamoyillarini birlashtiradi. 5 va 6-bandlar esa zamonaviy jamoaviy va rivojlantiruvchi boshqaruvga zid yo‘nalishni kuchaytiradi.`,

    source:
      `3.1-mavzu: Strategik, pedagogik, analitik va jamoaviy boshqaruv`,

    points: 3,
  },
];

/* =========================================================
 * VALIDATION
 * ========================================================= */

export const M3T1_CASE_COUNT = M3T1_CASE_QUESTIONS.length;

/*
 * Kutilayotgan natija:
 * 10 ta case savol
 *
 * case-001 → D
 * case-002 → B
 * case-003 → D
 * case-004 → C
 * case-005 → C
 * case-006 → D
 * case-007 → C
 * case-008 → A
 * case-009 → B
 * case-010 → A
 */

/* =========================================================
 * DEFAULT EXPORT
 * ========================================================= */

export default M3T1_CASE_QUESTIONS;
