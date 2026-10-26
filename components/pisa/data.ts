// components/pisa/data.ts
import type { Question, Lesson, Domain } from './types'

// ═══════════════════════════════════════════════════════
// DOMAIN META
// ═══════════════════════════════════════════════════════

export const DOMAIN_META: Record<
  Domain,
  { icon: string; title: string; short: string; description: string; gradient: string }
> = {
  mathematics: {
    icon: '📐',
    title: 'Matematik savodxonlik',
    short: 'Matematika',
    description: "Real hayotdagi miqdor, nisbat va ma'lumotlarni tahlil qiling.",
    gradient: 'from-blue-600 to-cyan-500',
  },
  reading: {
    icon: '📖',
    title: "O'qish savodxonligi",
    short: "O'qish",
    description: "Matnni tushuning, dalillarni bog'lang, xulosa chiqaring.",
    gradient: 'from-violet-600 to-fuchsia-500',
  },
  science: {
    icon: '🔬',
    title: 'Tabiiy-ilmiy savodxonlik',
    short: 'Fan',
    description: 'Ilmiy hodisalar, tajribalar va dalillarni tahlil qiling.',
    gradient: 'from-emerald-600 to-teal-500',
  },
  'problem-solving': {
    icon: '🧠',
    title: 'Muammo yechish',
    short: 'Muammo',
    description: "Murakkab vaziyatlarda strategiya tanlang va qaror qabul qiling.",
    gradient: 'from-orange-600 to-amber-500',
  },
}

export const DIFFICULTY_META: Record<
  number,
  { label: string; color: string }
> = {
  1: { label: "Boshlang'ich", color: 'text-emerald-600' },
  2: { label: 'Oson', color: 'text-emerald-600' },
  3: { label: 'Rivojlanish', color: 'text-cyan-600' },
  4: { label: "O'rta", color: 'text-blue-600' },
  5: { label: "Yuqori o'rta", color: 'text-indigo-600' },
  6: { label: 'Qiyin', color: 'text-violet-600' },
  7: { label: "Ilg'or", color: 'text-orange-600' },
  8: { label: 'Master', color: 'text-red-600' },
}

// ═══════════════════════════════════════════════════════
// QUESTIONS — 64 ta (har domainga 16 tadan, d1-d8 × 2)
// ═══════════════════════════════════════════════════════

export const QUESTIONS: Question[] = [
  // ─────── MATEMATIKA (16 ta) ───────
  { id: 'math-d1-01', domain: 'mathematics', difficulty: 1, category: "Qo'shish", context: 'Shaxsiy hayot', stimulus: 'Ali 5 ta olma va 3 ta nok sotib oldi.', question: 'Ali jami nechta meva sotib oldi?', options: ['7', '8', '9', '10'], correct: 1, explanation: '5 + 3 = 8.', hint: "Ikkala sonni qo'shing.", xp: 10 },
  { id: 'math-d1-02', domain: 'mathematics', difficulty: 1, category: 'Ayirish', context: 'Maktab', stimulus: "Sinfda 20 o'quvchi bor, 8 tasi uyga ketdi.", question: "Sinfda nechta o'quvchi qoldi?", options: ['10', '11', '12', '13'], correct: 2, explanation: '20 - 8 = 12.', hint: 'Umumiydan ketganni ayiring.', xp: 10 },
  { id: 'math-d2-01', domain: 'mathematics', difficulty: 2, category: "Ko'paytirish", context: 'Shaxsiy hayot', stimulus: "Bitta daftar 3000 so'm.", question: "5 ta daftar qancha turadi?", options: ['12 000', '15 000', '18 000', '20 000'], correct: 1, explanation: "3000 × 5 = 15 000 so'm.", hint: "Narxni songa ko'paytiring.", xp: 15 },
  { id: 'math-d2-02', domain: 'mathematics', difficulty: 2, category: "Bo'lish", context: 'Maktab', stimulus: "24 ta qalam 4 ta o'quvchiga teng taqsimlanadi.", question: "Har bir o'quvchi nechta qalam oladi?", options: ['4', '5', '6', '8'], correct: 2, explanation: '24 ÷ 4 = 6.', hint: "Umumiyni guruhga bo'ling.", xp: 15 },
  { id: 'math-d3-01', domain: 'mathematics', difficulty: 3, category: "O'rtacha", context: 'Maktab', stimulus: '4 ta sinfda 24, 28, 26, 22 nafar o\'quvchi.', question: "O'rtacha o'quvchi soni?", options: ['24', '25', '26', '27'], correct: 1, explanation: '(24+28+26+22) ÷ 4 = 25.', hint: "Hammasini qo'shib, songa bo'ling.", xp: 20 },
  { id: 'math-d3-02', domain: 'mathematics', difficulty: 3, category: 'Nisbat', context: 'Shaxsiy hayot', stimulus: '2 ta olma 1 ta nok bilan almashtiriladi.', question: '8 ta olmaga nechta nok olinadi?', options: ['2', '3', '4', '6'], correct: 2, explanation: '8 ÷ 2 = 4.', hint: "Nisbatni hisoblang.", xp: 20 },
  { id: 'math-d4-01', domain: 'mathematics', difficulty: 4, category: "Ma'lumotlar", context: 'Jamiyat', stimulus: 'Dush 42, Sesh 36, Chor 51, Pay 45 tashrif.', question: "Eng ko'p qaysi kuni?", options: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba'], correct: 2, explanation: '51 eng katta son.', hint: 'Eng katta qiymatni toping.', xp: 25 },
  { id: 'math-d4-02', domain: 'mathematics', difficulty: 4, category: "O'nlik kasr", context: 'Shaxsiy hayot', stimulus: '1 kg olma 12 500 so\'m.', question: "0.5 kg olma qancha?", options: ['5 000', '6 250', '7 500', '8 000'], correct: 1, explanation: '12 500 × 0.5 = 6 250.', hint: 'Yarmini oling.', xp: 25 },
  { id: 'math-d5-01', domain: 'mathematics', difficulty: 5, category: 'Foiz', context: 'Ilmiy', stimulus: "200 o'quvchining 70% kutubxonadan foydalanadi.", question: "Nechta o'quvchi foydalanadi?", options: ['120', '130', '140', '150'], correct: 2, explanation: '200 × 0.70 = 140.', hint: "Sonni foizga ko'paytiring.", xp: 30 },
  { id: 'math-d5-02', domain: 'mathematics', difficulty: 5, category: 'Nisbat', context: 'Ilmiy', stimulus: 'Retseptda 2 stakan un, 3 stakan suv.', question: "6 stakan un uchun necha stakan suv?", options: ['6', '9', '12', '15'], correct: 1, explanation: '2:3 = 6:9.', hint: "Nisbatni saqlang.", xp: 30 },
  { id: 'math-d6-01', domain: 'mathematics', difficulty: 6, category: 'Chegirma', context: 'Shaxsiy hayot', stimulus: "Telefon 2 000 000 so'm, 15% chegirma.", question: "Yangi narx?", options: ['1 600 000', '1 650 000', '1 700 000', '1 850 000'], correct: 2, explanation: "2 000 000 - 300 000 = 1 700 000.", hint: "Chegirmani hisoblab, ayiring.", xp: 35 },
  { id: 'math-d6-02', domain: 'mathematics', difficulty: 6, category: 'Tenglama', context: 'Ilmiy', stimulus: 'x + 15 = 42.', question: 'x nechaga teng?', options: ['17', '27', '37', '57'], correct: 1, explanation: 'x = 42 - 15 = 27.', hint: "15 ni ayiring.", xp: 35 },
  { id: 'math-d7-01', domain: 'mathematics', difficulty: 7, category: 'Murakkab foiz', context: 'Jamiyat', stimulus: "100 000 so'm yillik 10% bilan 2 yil.", question: '2 yildan keyin qancha?', options: ['120 000', '121 000', '122 000', '125 000'], correct: 1, explanation: '100 000 × 1.1² = 121 000.', hint: 'Murakkab foiz formulasi.', xp: 40 },
  { id: 'math-d7-02', domain: 'mathematics', difficulty: 7, category: 'Geometriya', context: 'Ilmiy', stimulus: 'To\'g\'ri to\'rtburchak 8×5.', question: 'Yuzasi nechaga teng?', options: ['13', '26', '40', '80'], correct: 2, explanation: '8 × 5 = 40.', hint: 'En × bo\'yi.', xp: 40 },
  { id: 'math-d8-01', domain: 'mathematics', difficulty: 8, category: 'Ehtimollik', context: 'Ilmiy', stimulus: "10 ta shar: 3 qizil, 7 ko'k. Bittasi olinadi.", question: 'Qizil chiqish ehtimoli?', options: ['0.3', '0.5', '0.7', '0.9'], correct: 0, explanation: '3 ÷ 10 = 0.3.', hint: "Qizillarni umumiyga bo'ling.", xp: 50 },
  { id: 'math-d8-02', domain: 'mathematics', difficulty: 8, category: 'Funksiya', context: 'Ilmiy', stimulus: 'f(x) = 2x + 3.', question: 'f(5) nechaga teng?', options: ['10', '11', '13', '15'], correct: 2, explanation: '2×5 + 3 = 13.', hint: "x o'rniga 5 qo'ying.", xp: 50 },

  // ─────── O'QISH (16 ta) ───────
  { id: 'read-d1-01', domain: 'reading', difficulty: 1, category: 'Axborot topish', context: 'Maktab', stimulus: 'Kutubxona 8:00 da ochiladi.', question: 'Soat nechada ochiladi?', options: ['7:00', '8:00', '9:00', '10:00'], correct: 1, explanation: "Matnda 8:00 deb yozilgan.", hint: "Vaqtni qidiring.", xp: 10 },
  { id: 'read-d1-02', domain: 'reading', difficulty: 1, category: 'Axborot topish', context: 'Shaxsiy hayot', stimulus: 'Ali 3 ta kitob o\'qidi.', question: 'Ali nechta kitob o\'qidi?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'Matnda 3 deb yozilgan.', hint: 'Sonni toping.', xp: 10 },
  { id: 'read-d2-01', domain: 'reading', difficulty: 2, category: 'Tushunish', context: 'Maktab', stimulus: 'Kutubxona shanba 9:00-13:00 ishlaydi.', question: 'Shanba nechagacha?', options: ['11:00', '12:00', '13:00', '17:00'], correct: 2, explanation: 'Matnda 13:00 deb yozilgan.', hint: "Yopilish vaqtini qidiring.", xp: 15 },
  { id: 'read-d2-02', domain: 'reading', difficulty: 2, category: 'Tushunish', context: 'Shaxsiy hayot', stimulus: "Aziza nonushtaga non va sut oldi.", question: "Aziza nima oldi?", options: ['Non va suv', 'Non va sut', 'Sut va sharbat', 'Faqat non'], correct: 1, explanation: "Matnda non va sut deyilgan.", hint: "Ovqatlarni sanang.", xp: 15 },
  { id: 'read-d3-01', domain: 'reading', difficulty: 3, category: 'Xulosa', context: 'Maktab', stimulus: "O'quvchi har kuni mashq qildi va natijasi yaxshilandi.", question: 'Xulosa?', options: ['Mashq natijani yaxshilaydi', 'Mashq zararli', "Natija o'zgarmadi", 'Mashq kerak emas'], correct: 0, explanation: "Matnda mashq va natija bog'liq.", hint: "Sabab va natijani bog'lang.", xp: 20 },
  { id: 'read-d3-02', domain: 'reading', difficulty: 3, category: 'Xulosa', context: 'Jamiyat', stimulus: 'Yomg\'ir yog\'di, ko\'chalar bo\'sh qoldi.', question: 'Nega?', options: ['Issiq', 'Yomg\'ir', 'Shamollar', 'Bayram'], correct: 1, explanation: "Yomg'ir sabab odamlar uyda.", hint: "Sababni toping.", xp: 20 },
  { id: 'read-d4-01', domain: 'reading', difficulty: 4, category: 'Xulosa', context: 'Jamiyat', stimulus: "Qayta ishlatiladigan idish ishlatilgach, plastik chiqindi kamaydi.", question: 'Xulosa?', options: ["O'quvchilar suv ichmay qo'ydi", 'Qayta ishlatish chiqindini kamaytirdi', 'Butun chiqindi yo\'qoldi', 'Plastik sotila boshlandi'], correct: 1, explanation: "Matnda qayta ishlatish va chiqindi kamayishi bog'liq.", hint: "Dalilga tayaning.", xp: 25 },
  { id: 'read-d4-02', domain: 'reading', difficulty: 4, category: 'Tahlil', context: 'Raqamli muhit', stimulus: '"Mashq qilmang" degan maqola hech qanday manba keltirmagan.', question: 'Bu maqola ishonchlimi?', options: ['Ha, chunki mashhur', 'Yo\'q, manba yo\'q', 'Ha, chunki qiziqarli', 'Bilmadim'], correct: 1, explanation: "Manbasiz da'vo ishonchsiz.", hint: "Manbani qidiring.", xp: 25 },
  { id: 'read-d5-01', domain: 'reading', difficulty: 5, category: 'Baholash', context: 'Raqamli muhit', stimulus: '"Har kuni suv ichish barcha kasalliklarni davolaydi" — manbasiz blog.', question: 'Eng muhim savol?', options: ['Dizayn chiroyli?', 'Muallif yoqimli?', 'Dalil yoki manba bormi?', 'Nechta rasm?'], correct: 2, explanation: "Ishonchlilik uchun dalil kerak.", hint: "Dalilni so'rang.", xp: 30 },
  { id: 'read-d5-02', domain: 'reading', difficulty: 5, category: 'Tahlil', context: 'Jamiyat', stimulus: "Ikki tadqiqot: biri 100 kishida, boshqasi 10 000 kishida o'tkazilgan.", question: 'Qaysi ishonchli?', options: ['100 kishi', '10 000 kishi', 'Ikkisi teng', 'Hech biri'], correct: 1, explanation: "Katta namuna ishonchliroq.", hint: "Namuna hajmini solishtiring.", xp: 30 },
  { id: 'read-d6-01', domain: 'reading', difficulty: 6, category: 'Sinov', context: 'Ilmiy', stimulus: '"A vitamini ko\'rishni yaxshilaydi" — 3 ta tadqiqot, 2 tasi tasdiqlaydi.', question: 'Xulosa?', options: ["To'liq isbotlangan", "Ehtimol to'g'ri, lekin to'liq emas", "Noto'g'ri", "Bilmadim"], correct: 1, explanation: "Ko'p tadqiqot kerak.", hint: "Ilmiy ehtiyotkorlik.", xp: 35 },
  { id: 'read-d6-02', domain: 'reading', difficulty: 6, category: 'Tahlil', context: 'Raqamli muhit', stimulus: "Yangilik: 'Falon mahsulot 10 daqiqada davolaydi' — manba: reklama.", question: 'Nima qilish kerak?', options: ['Darhol sotib olish', 'Boshqa mustaqil manbalarni tekshirish', 'Do\'stlarga aytish', 'E\'tiborsiz qoldirish'], correct: 1, explanation: "Reklama manbasi ishonchsiz.", hint: "Mustaqil manba qidiring.", xp: 35 },
  { id: 'read-d7-01', domain: 'reading', difficulty: 7, category: 'Tanqidiy fikrlash', context: 'Jamiyat', stimulus: "Ikki maqola: biri iqlim o'zgarishini inkor etadi (neft kompaniyasi homiyligi), boshqasi ilmiy jurnalda.", question: 'Qaysi ishonchli?', options: ['Birinchi', 'Ikkinchi', 'Ikkisi teng', 'Hech biri'], correct: 1, explanation: "Manfaatlar to'qnashuvi bor.", hint: "Manba manfaatini ko'ring.", xp: 40 },
  { id: 'read-d7-02', domain: 'reading', difficulty: 7, category: 'Tahlil', context: 'Ilmiy', stimulus: "Maqola: 'Kofe sog'liqqa zararli' — 50 kishida o'tkazilgan tadqiqot.", question: 'Xulosa?', options: ['Kofe zararli', "Namuna kichik, ehtiyot bo'ling", 'Kofe foydali', 'Bilmadim'], correct: 1, explanation: "Kichik namuna ishonchsiz.", hint: "Namuna hajmini tekshiring.", xp: 40 },
  { id: 'read-d8-01', domain: 'reading', difficulty: 8, category: 'Tanqidiy baholash', context: 'Ilmiy', stimulus: "Tadqiqot: A vitamini va ko'rish. 1000 kishi, 6 oy, platsebo nazorati. Natija: sezilarli farq yo'q.", question: 'To\'g\'ri xulosa?', options: ["A vitamini ko'rishni yaxshilaydi", "A vitamini ko'rishga sezilarli ta'sir qilmaydi", 'A vitamini zararli', 'Tadqiqot noto\'g\'ri'], correct: 1, explanation: "Platsebo nazoratli katta tadqiqot natijasi.", hint: "Natijani o'qing.", xp: 50 },
  { id: 'read-d8-02', domain: 'reading', difficulty: 8, category: 'Tanqidiy fikrlash', context: 'Jamiyat', stimulus: "Statistika: 'Kofe ichuvchilar uzoq yashaydi' — lekin kofe ichuvchilar boyroq, sog'liq xizmatiga ko'proq ega.", question: 'Asosiy muammo?', options: ["Kofe foydali", "Boshqa omillar ta'sir qiladi", "Kofe zararli", "Statistika noto'g'ri"], correct: 1, explanation: "Aralash omillar (confounders).", hint: "Boshqa omillarni ko'ring.", xp: 50 },

  // ─────── FAN (16 ta) ───────
  { id: 'sci-d1-01', domain: 'science', difficulty: 1, category: 'Kuzatish', context: 'Atrof-muhit', stimulus: "O'simlik quyosh nurida yashil bo'ldi.", question: "Nega yashil?", options: ['Suv', 'Quyosh nuri', 'Tuproq', 'Shamol'], correct: 1, explanation: "Quyosh nuri fotosintezga yordam beradi.", hint: "Yorug'likni o'ylang.", xp: 10 },
  { id: 'sci-d1-02', domain: 'science', difficulty: 1, category: 'Kuzatish', context: 'Atrof-muhit', stimulus: 'Muz issiqda eridi.', question: 'Nega?', options: ['Sovuq', 'Issiqlik', 'Shamol', 'Yorug\'lik'], correct: 1, explanation: "Issiqlik muzni eritadi.", hint: "Haroratni o'ylang.", xp: 10 },
  { id: 'sci-d2-01', domain: 'science', difficulty: 2, category: 'Tushunish', context: 'Atrof-muhit', stimulus: "O'simliklar kislorod chiqaradi.", question: 'Qaysi jarayonda?', options: ['Nafas olish', 'Fotosintez', 'Bug\'lanish', 'Erish'], correct: 1, explanation: "Fotosintezda kislorod chiqadi.", hint: "Yorug'lik jarayoni.", xp: 15 },
  { id: 'sci-d2-02', domain: 'science', difficulty: 2, category: 'Tushunish', context: 'Ilmiy', stimulus: 'Suv 100°C da qaynaydi.', question: 'Nima bo\'ladi?', options: ['Muzlaydi', 'Qaynaydi', 'Erish', 'Bug\'lanmaydi'], correct: 1, explanation: "100°C — qaynash nuqtasi.", hint: "Haroratni o'ylang.", xp: 15 },
  { id: 'sci-d3-01', domain: 'science', difficulty: 3, category: 'Tushuntirish', context: 'Atrof-muhit', stimulus: "O'simlik quyosh nurida saqlandi, barglari sog'lom.", question: 'Ilmiy izoh?', options: ['Fotosintez', "Faqat qorong'ida oziq", 'Yorug\'lik kerak emas', 'Suvsizlik'], correct: 0, explanation: "Fotosintez yorug'likda bo'ladi.", hint: "Fotosintezni eslang.", xp: 20 },
  { id: 'sci-d3-02', domain: 'science', difficulty: 3, category: 'Tushuntirish', context: 'Ilmiy', stimulus: 'Temir zanglaydi.', question: 'Sabab?', options: ['Suv + kislorod', 'Faqat suv', 'Faqat issiqlik', 'Yorug\'lik'], correct: 0, explanation: "Zang — oksidlanish.", hint: "Kislorod va suv.", xp: 20 },
  { id: 'sci-d4-01', domain: 'science', difficulty: 4, category: 'Tahlil', context: 'Ilmiy', stimulus: 'Ikki o\'simlik: biri quyoshda, biri soyada.', question: 'Farqni qanday o\'lchash?', options: ['Rangi', "Bo'yi", 'Hidi', 'Rangi va bo\'yi'], correct: 3, explanation: "Bir nechta ko'rsatkich.", hint: "O'lchovni tanlang.", xp: 25 },
  { id: 'sci-d4-02', domain: 'science', difficulty: 4, category: 'Tahlil', context: 'Atrof-muhit', stimulus: "Ikki xil suv: issiq va sovuq. Shakar qaysi birida tez eriydi?", question: 'Faraz?', options: ['Sovuqda tez', 'Issiqda tez', 'Ikkisida teng', 'Erimaydi'], correct: 1, explanation: "Harorat erish tezligini oshiradi.", hint: "Haroratni o'ylang.", xp: 25 },
  { id: 'sci-d5-01', domain: 'science', difficulty: 5, category: 'Talqin', context: 'Ilmiy', stimulus: 'Suv harorati 20°C → 40°C, erish tezligi oshdi.', question: 'Xulosa?', options: ['Harorat ta\'sir qiladi', 'Ta\'sir yo\'q', '40°C da muzlaydi', 'Doim bir xil'], correct: 0, explanation: "Harorat oshdi → tezlik oshdi.", hint: "Bog'liqlikni ko'ring.", xp: 30 },
  { id: 'sci-d5-02', domain: 'science', difficulty: 5, category: 'Tajriba', context: 'Ilmiy', stimulus: "O'g'it ta'sirini o'rganish uchun 2 o'simlik.", question: 'Nima nazorat qilinadi?', options: ['Faqat o\'g\'it', 'Suv, yorug\'lik, tuproq bir xil', 'Faqat suv', 'Hech narsa'], correct: 1, explanation: "Boshqa omillar bir xil bo'lishi kerak.", hint: "Nazorat o'zgaruvchilari.", xp: 30 },
  { id: 'sci-d6-01', domain: 'science', difficulty: 6, category: 'Dizayn', context: 'Ilmiy', stimulus: "Ikki xil o'g'itni solishtirish. 2 o'simlik.", question: 'Nimani bir xil saqlash kerak?', options: ['Boshlang\'ich holat', 'Faqat o\'g\'it', 'Birini olib tashlash', 'Suvsiz'], correct: 0, explanation: "Adolatli tajriba uchun.", hint: "Boshlang'ich holat.", xp: 35 },
  { id: 'sci-d6-02', domain: 'science', difficulty: 6, category: 'Tahlil', context: 'Ilmiy', stimulus: 'Gipoteza: "Yorug\'lik o\'simlik o\'sishini tezlashtiradi".', question: 'Qanday tekshirish?', options: ['Ikki guruh, bir xil sharoit, biri yorug\'likda', 'Bitta o\'simlik', 'Faqat kuzatish', 'Tasodifiy'], correct: 0, explanation: "Nazorat guruhi kerak.", hint: "Nazorat guruhi tuzing.", xp: 35 },
  { id: 'sci-d7-01', domain: 'science', difficulty: 7, category: 'Tahlil', context: 'Ilmiy', stimulus: 'Tajriba: yangi dori 100 kishida sinovdan o\'tdi. 60% yaxshilandi, 40% yo\'q.', question: 'Xulosa?', options: ['Dori samarali', "Ehtimol samarali, ko'proq sinov kerak", 'Samarasiz', 'Bilmadim'], correct: 1, explanation: "100 kishi kichik namuna.", hint: "Namuna hajmi.", xp: 40 },
  { id: 'sci-d7-02', domain: 'science', difficulty: 7, category: 'Tahlil', context: 'Atrof-muhit', stimulus: "Ikki shahar: A da havo iflos, B da toza. A da astma ko'p.", question: 'Xulosa?', options: ['Iflos havo astmaga sabab', 'Boshqa omillar ham bor', 'Astma yuqumli', 'Bilmadim'], correct: 1, explanation: "Boshqa omillar ham bo'lishi mumkin.", hint: "Boshqa omillarni ko'ring.", xp: 40 },
  { id: 'sci-d8-01', domain: 'science', difficulty: 8, category: 'Ilmiy dizayn', context: 'Ilmiy', stimulus: "Yangi dori: 200 kishi, platsebo nazorati, 3 oy. Natija: 5% yaxshilanish, statistik ahamiyatli emas.", question: 'Xulosa?', options: ['Dori samarali', 'Dori samarali emas (bu sinovda)', 'Dori zararli', 'Sinov noto\'g\'ri'], correct: 1, explanation: "Statistik ahamiyatsiz = samarasiz.", hint: "Statistik ahamiyat.", xp: 50 },
  { id: 'sci-d8-02', domain: 'science', difficulty: 8, category: 'Ilmiy tahlil', context: 'Ilmiy', stimulus: "Tadqiqot: 'Shakar semizlikka sabab'. 10 yil, 5000 kishi, boshqa omillar nazorat qilingan.", question: 'Xulosa?', options: ['Shakar semizlikka sabab', 'Boshqa omillar', 'Shakar foydali', 'Bilmadim'], correct: 0, explanation: "Katta namuna, uzoq vaqt, nazorat.", hint: "Tadqiqot sifatini ko'ring.", xp: 50 },

  // ─────── MUAMMO YECHISH (16 ta) ───────
  { id: 'prob-d1-01', domain: 'problem-solving', difficulty: 1, category: 'Mantiq', context: 'Maktab', stimulus: 'Ali, Vali, Soli. Ali Validan baland, Vali Solidan baland.', question: 'Eng baland kim?', options: ['Ali', 'Vali', 'Soli', 'Teng'], correct: 0, explanation: "Ali > Vali > Soli.", hint: "Zanjirni tuzing.", xp: 10 },
  { id: 'prob-d1-02', domain: 'problem-solving', difficulty: 1, category: 'Mantiq', context: 'Shaxsiy hayot', stimulus: 'Bugun dushanba.', question: 'Ertaga qaysi kun?', options: ['Yakshanba', 'Seshanba', 'Chorshanba', 'Payshanba'], correct: 1, explanation: "Dushanbadan keyin seshanba.", hint: "Kunlar tartibi.", xp: 10 },
  { id: 'prob-d2-01', domain: 'problem-solving', difficulty: 2, category: 'Mantiq', context: 'Maktab', stimulus: "5 ta qalam, 2 tasi qizil, qolgani ko'k.", question: "Nechta ko'k?", options: ['2', '3', '4', '5'], correct: 1, explanation: '5 - 2 = 3.', hint: "Ayiring.", xp: 15 },
  { id: 'prob-d2-02', domain: 'problem-solving', difficulty: 2, category: 'Mantiq', context: 'Shaxsiy hayot', stimulus: "Poyezd 10:00 da jo'nadi, 3 soat yo'l.", question: 'Soat nechada yetib boradi?', options: ['12:00', '13:00', '14:00', '15:00'], correct: 1, explanation: "10 + 3 = 13:00.", hint: "Vaqtni qo'shing.", xp: 15 },
  { id: 'prob-d3-01', domain: 'problem-solving', difficulty: 3, category: 'Strategiya', context: 'Maktab', stimulus: "30 o'quvchi, har guruhda 5-10 kishi.", question: 'Qaysi variant mos?', options: ['2 guruh', '3 guruh', '4 guruh', '7 guruh'], correct: 1, explanation: '30 ÷ 3 = 10.', hint: "Bo'linishni tekshiring.", xp: 20 },
  { id: 'prob-d3-02', domain: 'problem-solving', difficulty: 3, category: 'Strategiya', context: 'Shaxsiy hayot', stimulus: "100 000 so'm, kitob 30 000, daftar 15 000.", question: "Ikkitasini olsa qancha qoladi?", options: ['45 000', '50 000', '55 000', '60 000'], correct: 2, explanation: "100 - 45 = 55 000.", hint: "Ayiring.", xp: 20 },
  { id: 'prob-d4-01', domain: 'problem-solving', difficulty: 4, category: 'Mantiq', context: 'Jamiyat', stimulus: "A → B, B → C.", question: 'A → C?', options: ['Ha', "Yo'q", 'Bilmadim', 'Ba'zan'], correct: 0, explanation: "Tranzitivlik.", hint: "Zanjirni davom ettiring.", xp: 25 },
  { id: 'prob-d4-02', domain: 'problem-solving', difficulty: 4, category: 'Strategiya', context: 'Shaxsiy hayot', stimulus: "3 ta ish: A 1 soat, B 2 soat, C 3 soat. Jami vaqt?", question: 'Necha soat?', options: ['4', '5', '6', '7'], correct: 2, explanation: "1+2+3 = 6.", hint: "Qo'shing.", xp: 25 },
  { id: 'prob-d5-01', domain: 'problem-solving', difficulty: 5, category: 'Strategiya', context: 'Shaxsiy hayot', stimulus: "120 000 so'm. Kitob 55 000, daftar 18 000, ruchka 7 000, sumka 65 000.", question: "Qaysi kombinatsiya 120 000 dan oshmaydi?", options: ["Kitob+daftar+ruchka", "Kitob+sumka+ruchka", "Sumka+daftar+ruchka", "Kitob+daftar+sumka"], correct: 0, explanation: "55+18+7 = 80 000.", hint: "Har birini qo'shing.", xp: 30 },
  { id: 'prob-d5-02', domain: 'problem-solving', difficulty: 5, category: 'Mantiq', context: 'Maktab', stimulus: "Har 5 daqiqada 1 ta savol. 10 ta savol.", question: 'Necha daqiqa?', options: ['40', '45', '50', '55'], correct: 2, explanation: '5 × 10 = 50.', hint: "Ko'paytiring.", xp: 30 },
  { id: 'prob-d6-01', domain: 'problem-solving', difficulty: 6, category: 'Strategiya', context: 'Jamiyat', stimulus: "3 ta ishchi 6 soatda bajaradi. 2 ta ishchi?", question: 'Necha soat?', options: ['6', '9', '12', '15'], correct: 1, explanation: "3×6 = 18 ish-soat; 18 ÷ 2 = 9.", hint: "Ish-soatni hisoblang.", xp: 35 },
  { id: 'prob-d6-02', domain: 'problem-solving', difficulty: 6, category: 'Mantiq', context: 'Shaxsiy hayot', stimulus: "A: 'Men yolg'onchiman'.", question: 'A kim?', options: ['Rostgo\'y', 'Yolg\'onchi', 'Bilmadim', 'Ikkisi'], correct: 1, explanation: "Paradoks — yolg'onchi.", hint: "O'z-o'zini inkor.", xp: 35 },
  { id: 'prob-d7-01', domain: 'problem-solving', difficulty: 7, category: 'Strategiya', context: 'Jamiyat', stimulus: "180 mehmon, 12 o'rindiq/qator, har 3 qatordan keyin 1m bo'sh joy.", question: "Birinchi navbatda nima kerak?", options: ['Rang', 'Xona o\'lchami', 'Yosh', 'Rang'], correct: 1, explanation: "Xona o'lchami kerak.", hint: "Fizik joy.", xp: 40 },
  { id: 'prob-d7-02', domain: 'problem-solving', difficulty: 7, category: 'Mantiq', context: 'Ilmiy', stimulus: "A, B, C. A > B, B > C, C > A.", question: 'Nima?', options: ['To\'g\'ri', 'Ziddiyat', 'Bilmadim', 'Ba\'zan'], correct: 1, explanation: "Tranzitivlik buzilgan.", hint: "Zanjirni tekshiring.", xp: 40 },
  { id: 'prob-d8-01', domain: 'problem-solving', difficulty: 8, category: 'Strategiya', context: 'Jamiyat', stimulus: "A: 60% foyda 80% ehtimol. B: 100% foyda 40% ehtimol.", question: "Kutilgan qiymat bo'yicha qaysi yaxshi?", options: ['A', 'B', 'Teng', 'Bilmadim'], correct: 0, explanation: "A: 0.48, B: 0.40 → A.", hint: "Kutilgan qiymat = ehtimol × foyda.", xp: 50 },
  { id: 'prob-d8-02', domain: 'problem-solving', difficulty: 8, category: 'Strategiya', context: 'Ilmiy', stimulus: "3 ta quti: biri 2 qizil, biri 2 ko'k, biri 1 qizil 1 ko'k. Bittasi tanlandi, 1 qizil chiqdi.", question: "Qolgan shar qizil bo'lish ehtimoli?", options: ['1/3', '1/2', '2/3', '1'], correct: 2, explanation: "Bayes: 3 ta holat, 2 tasida qolgan qizil.", hint: "Bayes teoremasi.", xp: 50 },
]

// ═══════════════════════════════════════════════════════
// LESSONS — har domainga 1 tadan
// ═══════════════════════════════════════════════════════

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-math-percent',
    domain: 'mathematics',
    difficulty: 5,
    title: 'Foizlarni hisoblash',
    subtitle: "Real hayotda foiz qanday ishlaydi",
    icon: '📐',
    xp: 30,
    steps: [
      {
        type: 'concept',
        title: 'Foiz nima?',
        body: "Foiz — 100 ga nisbatan olingan qism. 70% = har 100 tadan 70 tasi. Kasrga aylantirish: 70% = 0.70.",
        emoji: '💡',
      },
      {
        type: 'example',
        problem: "200 ning 70% ini toping.",
        steps: [
          "1. Foizni kasrga aylantiramiz: 70% ÷ 100 = 0.70",
          "2. Umumiy songa ko'paytiramiz: 200 × 0.70",
          "3. Natija: 140",
        ],
        answer: '140',
      },
      {
        type: 'example',
        problem: "Telefon 2 000 000 so'm. 15% chegirma. Yangi narx?",
        steps: [
          "1. Chegirma: 2 000 000 × 0.15 = 300 000",
          "2. Yangi narx: 2 000 000 - 300 000",
          "3. Natija: 1 700 000 so'm",
        ],
        answer: "1 700 000 so'm",
      },
      {
        type: 'check',
        question: "500 ning 20% i nechaga teng?",
        options: ['50', '100', '150', '200'],
        correct: 1,
        explanation: "500 × 0.20 = 100.",
      },
    ],
  },
  {
    id: 'lesson-read-inference',
    domain: 'reading',
    difficulty: 4,
    title: 'Xulosa chiqarish',
    subtitle: "Matndan to'g'ri xulosa chiqarish",
    icon: '📖',
    xp: 30,
    steps: [
      {
        type: 'concept',
        title: 'Xulosa nima?',
        body: "Xulosa — matnda to'g'ridan-to'g'ri aytilmagan, lekin dalillardan kelib chiqadigan fikr. Yaxshi xulosa matnga tayanadi va ortiqcha narsa qo'shmaydi.",
        emoji: '🧩',
      },
      {
        type: 'example',
        problem: 'Matn: "Qayta ishlatiladigan idish ishlatilgach, plastik chiqindi kamaydi." Qaysi xulosa to\'g\'ri?',
        steps: [
          "A) O'quvchilar suv ichmay qo'ydi — ❌ matnda yo'q",
          "B) Qayta ishlatish chiqindini kamaytirdi — ✅ matnga tayanadi",
          "C) Barcha chiqindi yo'qoldi — ❌ haddan tashqari",
        ],
        answer: 'B varianti',
      },
      {
        type: 'check',
        question: "Matn: \"Yangi o'g'it ishlatilgach, hosil 20% oshdi.\" Xulosa?",
        options: [
          "O'g'it barcha kasalliklarni davolaydi",
          "Yangi o'g'it hosilni oshirishga yordam berdi",
          'Hosil hech qachon kamaymaydi',
          'Eski o\'g\'it yaroqsiz',
        ],
        correct: 1,
        explanation: 'Faqat dalilga tayanamiz: hosil oshdi → o\'g\'it yordam berdi.',
      },
    ],
  },
  {
    id: 'lesson-sci-photosynthesis',
    domain: 'science',
    difficulty: 3,
    title: 'Fotosintez',
    subtitle: "O'simliklar qanday ovqat tayyorlaydi",
    icon: '🔬',
    xp: 30,
    steps: [
      {
        type: 'concept',
        title: 'Fotosintez nima?',
        body: "Fotosintez — o'simliklar quyosh nuri, suv va karbonat angidriddan oziq (glyukoza) va kislorod hosil qiladigan jarayon.",
        emoji: '🌱',
      },
      {
        type: 'example',
        problem: "Nega o'simlik quyosh nurida yaxshiroq o'sadi?",
        steps: [
          "1. Quyosh nuri — energiya manbai",
          "2. Fotosintez yorug'likda tezroq bo'ladi",
          "3. Natija: ko'proq oziq → tezroq o'sish",
        ],
        answer: "Yorug'lik fotosintezni tezlashtiradi",
      },
      {
        type: 'check',
        question: 'Fotosintez uchun nima kerak?',
        options: ['Faqat suv', 'Yorug\'lik, suv, CO₂', 'Faqat tuproq', 'Faqat kislorod'],
        correct: 1,
        explanation: 'Uchala komponent kerak.',
      },
    ],
  },
  {
    id: 'lesson-prob-logic',
    domain: 'problem-solving',
    difficulty: 4,
    title: 'Mantiqiy zanjirlar',
    subtitle: "Murakkab masalalarni qadam-baqadam yechish",
    icon: '🧠',
    xp: 30,
    steps: [
      {
        type: 'concept',
        title: 'Mantiqiy zanjir nima?',
        body: "Agar A > B va B > C bo'lsa, unda A > C. Bu tranzitivlik deyiladi. Ko'p masalalar shu tamoyilga asoslanadi.",
        emoji: '🔗',
      },
      {
        type: 'example',
        problem: "Ali Validan baland, Vali Solidan baland. Eng baland kim?",
        steps: [
          "1. Ali > Vali",
          "2. Vali > Soli",
          "3. Zanjir: Ali > Vali > Soli",
          "4. Eng baland: Ali",
        ],
        answer: 'Ali',
      },
      {
        type: 'check',
        question: 'A > B, B > C, C > A. Bu nima?',
        options: ["To'g'ri zanjir", 'Ziddiyat', 'Bilmadim', "Ba'zan"],
        correct: 1,
        explanation: 'Tranzitivlik buzilgan — ziddiyat.',
      },
    ],
  },
]
