// lib/data/m1t3.ts

import type { Question } from '../quiz-data'

type LevelSet = {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
}

const q = (
  id: string,
  text: string,
  options: string[],
  answer: number,
  explanation: string,
): Question => ({
  id,
  text,
  options,
  answer,
  explanation,
})

export const M1T3_LEVELS: LevelSet = {
  // =========================================================
  // 30 TA OSON
  // =========================================================
  easy: [
    q(
      'm1t3e01',
      'Boshqaruv psixologiyasining asosiy e’tibor markazi nimaga qaratiladi?',
      [
        'Faqat hujjatlar yuritilishiga',
        'Inson omili va boshqaruv munosabatlariga',
        'Faqat moliyaviy nazoratga',
        'Faqat texnik vositalarga',
      ],
      1,
      'Boshqaruv psixologiyasi rahbar, xodim, jamoa, muloqot va motivatsiya kabi inson omillarini o‘rganadi.',
    ),

    q(
      'm1t3e02',
      'Sangvinik temperamentga xos kuchli jihat qaysi?',
      [
        'Tez moslashish va ijtimoiy faollik',
        'Haddan tashqari xavotir',
        'Doimiy sustkashlik',
        'Keskin hissiy beqarorlik',
      ],
      0,
      'Sangvinik odatda faol, ochiqko‘ngil, optimistik va vaziyatga tez moslashuvchan bo‘ladi.',
    ),

    q(
      'm1t3e03',
      'Flegmatik temperamentning asosiy xususiyati qaysi?',
      [
        'Shoshqaloqlik',
        'Hissiy portlash',
        'Vazminlik va sabr-toqat',
        'Doimiy xavotir',
      ],
      2,
      'Flegmatik temperament vazminlik, barqarorlik va sabr-toqat bilan tavsiflanadi.',
    ),

    q(
      'm1t3e04',
      'Xolerik rahbarning kuchli jihati qaysi?',
      [
        'Tezkorlik va tashabbuskorlik',
        'Doimiy ikkilanib qolish',
        'Past faollik',
        'Haddan tashqari ehtiyotkorlik',
      ],
      0,
      'Xolerik rahbar odatda energiyali, qat’iyatli va tashabbuskor bo‘ladi.',
    ),

    q(
      'm1t3e05',
      'Melanxolik temperamentga ko‘proq xos xususiyat qaysi?',
      [
        'Yuqori shovqinli faollik',
        'Chuqur sezgirlik va tahlilga moyillik',
        'Keskin buyruqbozlik',
        'Tezkor ijtimoiy moslashuv',
      ],
      1,
      'Melanxolik shaxs sezgir, ehtiyotkor va voqealarni chuqur tahlil qilishga moyil bo‘lishi mumkin.',
    ),

    q(
      'm1t3e06',
      'Emotsional intellekt nimani anglatadi?',
      [
        'Faqat kuchli hissiyotlarni namoyon etishni',
        'Hissiyotlarni anglash va boshqarish qobiliyatini',
        'Faqat buyruq berish qobiliyatini',
        'Xodimlarni qattiq nazorat qilishni',
      ],
      1,
      'Emotsional intellekt o‘z va boshqalarning hissiyotlarini anglash, boshqarish va ulardan oqilona foydalanishni anglatadi.',
    ),

    q(
      'm1t3e07',
      'Rahbar tanqidni qanday qabul qilishi maqsadga muvofiq?',
      [
        'Darhol qarshi javob berishi',
        'Tanqid qilgan xodimni jazolashi',
        'Mazmunini xolis tahlil qilishi',
        'Tanqidni butunlay rad etishi',
      ],
      2,
      'Yetuk rahbar tanqidni hissiy emas, xolis va rivojlanishga xizmat qiladigan axborot sifatida ko‘rib chiqadi.',
    ),

    q(
      'm1t3e08',
      'Delegatsiya nima?',
      [
        'Barcha ishni rahbarning o‘zi bajarishi',
        'Vakolat va vazifalarning tegishli xodimlarga topshirilishi',
        'Xodimlarni nazoratsiz qoldirish',
        'Faqat hujjatlarni topshirish',
      ],
      1,
      'Delegatsiya — vazifa va tegishli vakolatlarni xodimlarga topshirish jarayonidir.',
    ),

    q(
      'm1t3e09',
      'Konstruktiv tanqidning asosiy xususiyati nima?',
      [
        'Shaxsni kamsitish',
        'Muammoni aniq ko‘rsatib, tuzatish yo‘lini taklif qilish',
        'Jamoa oldida uyaltirish',
        'Faqat ayb izlash',
      ],
      1,
      'Konstruktiv tanqid shaxsga emas, xatti-harakatga qaratiladi va rivojlanish yo‘lini ko‘rsatadi.',
    ),

    q(
      'm1t3e10',
      'Rahbarning o‘zini boshqarishi eng avvalo nimada namoyon bo‘ladi?',
      [
        'Har bir vaziyatda buyruq berishda',
        'Hissiyot va xatti-harakatlarini ongli nazorat qilishda',
        'Xodimlarning barcha ishini o‘zi bajarishda',
        'Tanqidni qabul qilmaslikda',
      ],
      1,
      'O‘zini boshqarish hissiyot, nutq, vaqt va xatti-harakatlarni ongli ravishda nazorat qilishni anglatadi.',
    ),

    q(
      'm1t3e11',
      '“Biz” tilidan foydalanish rahbar nutqida nimani kuchaytiradi?',
      [
        'Jamoaviylik hissini',
        'Qo‘rquvni',
        'Masofani',
        'Shaxsiy raqobatni',
      ],
      0,
      '“Biz” tili umumiy maqsad va jamoaviy mas’uliyat hissini kuchaytiradi.',
    ),

    q(
      'm1t3e12',
      'Rahbarning fakt va dalillarga tayanishi nimani ta’minlaydi?',
      [
        'Subyektivlikni oshiradi',
        'Qarorning xolisligini kuchaytiradi',
        'Nizolarni ko‘paytiradi',
        'Muloqotni to‘xtatadi',
      ],
      1,
      'Fakt va dalillar qarorlarni shaxsiy taxminlardan ajratib, xolislikni kuchaytiradi.',
    ),

    q(
      'm1t3e13',
      'Rahbarning haddan tashqari markazlashgan nazorati qanday xavf tug‘diradi?',
      [
        'Delegatsiya va mustaqillikning susayishi',
        'Jamoa ijodkorligining avtomatik oshishi',
        'Xodimlarning vakolati kengayishi',
        'Mas’uliyatning to‘liq taqsimlanishi',
      ],
      0,
      'Barcha qarorlarni rahbarning o‘zi nazorat qilishi xodimlarning mustaqilligi va tashabbusini susaytirishi mumkin.',
    ),

    q(
      'm1t3e14',
      'Rahbarning psixologik yetukligi qaysi xatti-harakatda yaqqol ko‘rinadi?',
      [
        'Xatoni tan olmaslikda',
        'Hissiy javobni nazorat qilib, muammoni tahlil qilishda',
        'Har bir tanqidga javoban jazoda',
        'Barcha vazifalarni o‘z zimmasiga olishda',
      ],
      1,
      'Psixologik yetuk rahbar hissiyotini boshqaradi va vaziyatni xolis tahlil qiladi.',
    ),

    q(
      'm1t3e15',
      'Sangvinik rahbarning ehtimoliy zaif tomoni qaysi?',
      [
        'Vaziyatni ba’zan yetarlicha chuqur baholamaslik',
        'Har doim sust harakat qilish',
        'Muloqotdan butunlay qochish',
        'Hissiy jihatdan mutlaqo befarq bo‘lish',
      ],
      0,
      'Sangvinikning optimizmi ayrim vaziyatlarda muammoni yetarlicha jiddiy baholamaslikka olib kelishi mumkin.',
    ),

    q(
      'm1t3e16',
      'Xolerik rahbar uchun qaysi ko‘nikma ayniqsa muhim?',
      [
        'Hissiy o‘zini boshqarish',
        'Har qanday qarorni kechiktirish',
        'Muloqotdan voz kechish',
        'Tashabbusni kamaytirish',
      ],
      0,
      'Xolerikning yuqori energiyasi samarali bo‘lishi uchun hissiy reaksiyalarni boshqarish muhim.',
    ),

    q(
      'm1t3e17',
      'Melanxolik rahbarning kuchli jihati qaysi bo‘lishi mumkin?',
      [
        'Chuqur tahlil va detallarga e’tibor',
        'Doimiy shoshqaloqlik',
        'Keskin buyruqbozlik',
        'Muammolarni e’tiborsiz qoldirish',
      ],
      0,
      'Melanxolikning sezgirligi va tahliliy yondashuvi murakkab vaziyatlarni chuqur ko‘rib chiqishda foydali bo‘lishi mumkin.',
    ),

    q(
      'm1t3e18',
      'Flegmatik rahbarning ehtimoliy cheklovi qaysi?',
      [
        'Haddan tashqari keskin reaksiya',
        'Ayrim vaziyatlarda sekinroq reaksiya qilish',
        'Doimiy nizoga intilish',
        'Jamoada ortiqcha shovqin yaratish',
      ],
      1,
      'Flegmatik vazmin bo‘lsa-da, tezkor qaror talab qilinadigan vaziyatlarda sekinroq reaksiya qilishi mumkin.',
    ),

    q(
      'm1t3e19',
      'Rahbarning empatiyasi nimani anglatadi?',
      [
        'Boshqalarning holatini tushunishga harakat qilishni',
        'Barcha qarorlarni xodimga topshirishni',
        'Tanqidni bekor qilishni',
        'Xodimning barcha fikrini avtomatik qabul qilishni',
      ],
      0,
      'Empatiya boshqa insonning hissiy holati va nuqtayi nazarini tushunishga intilishdir.',
    ),

    q(
      'm1t3e20',
      'Rahbarning professional intizomi nimani o‘z ichiga oladi?',
      [
        'Vaqt, vazifa va xatti-harakatlarni tartibli boshqarishni',
        'Faqat xodimlarni nazorat qilishni',
        'Faqat buyruqlar berishni',
        'Shaxsiy manfaatni ustun qo‘yishni',
      ],
      0,
      'Professional intizom vaqt, vazifalar, nutq va xatti-harakatlarning mas’uliyatli boshqarilishini nazarda tutadi.',
    ),

    q(
      'm1t3e21',
      'Adolat tamoyiliga amal qiluvchi rahbar qanday yo‘l tutadi?',
      [
        'Xodimlarni shaxsiy munosabatiga qarab baholaydi',
        'Bir xil vaziyatlarda yagona va aniq mezonlardan foydalanadi',
        'Faqat tajribali xodimlarni qo‘llab-quvvatlaydi',
        'Tanqidni faqat ayrim xodimlarga qo‘llaydi',
      ],
      1,
      'Adolat yagona mezon va xolis munosabatni talab qiladi.',
    ),

    q(
      'm1t3e22',
      'Rahbarning tanqidni shaxsga emas, xatti-harakatga qaratishi qanday natija beradi?',
      [
        'Himoyalanish reaksiyasini kamaytiradi',
        'Nizoni majburiy kuchaytiradi',
        'Xodimni jamoatdan ajratadi',
        'Muammoni yashiradi',
      ],
      0,
      'Aniq xatti-harakatni muhokama qilish shaxsiy hujum hissini kamaytiradi.',
    ),

    q(
      'm1t3e23',
      '“O‘zini saqlash qonuni” rahbar psixologiyasida nimani anglatadi?',
      [
        'Mavqe va obro‘ni saqlashga intilish',
        'Har qanday xatoni tan olish',
        'Barcha vakolatni topshirish',
        'Faqat jamoa fikriga bo‘ysunish',
      ],
      0,
      'Mazkur qonun rahbarning mavqe, obro‘ va o‘zini himoya qilishga intilishini ifodalaydi.',
    ),

    q(
      'm1t3e24',
      'Natijaning noaniqliligi qonuni nimani ko‘rsatadi?',
      [
        'Bir xil topshiriq turli xodimlarda turlicha natija berishi mumkinligini',
        'Barcha xodimlar bir xil ishlashini',
        'Faqat rahbar natijani belgilashini',
        'Natija hech qachon baholanmasligini',
      ],
      0,
      'Xodimlarning individual xususiyatlari sabab bir xil topshiriq turlicha bajarilishi mumkin.',
    ),

    q(
      'm1t3e25',
      'Boshqaruv ma’lumotlari mazmunining yo‘qolib borishi nimani anglatadi?',
      [
        'Axborot uzatilganda uning mazmuni o‘zgarishi mumkinligini',
        'Axborot doimo aniq saqlanishini',
        'Faqat yozma axborot muhimligini',
        'Rahbar axborotga muhtoj emasligini',
      ],
      0,
      'Axborot bir necha bosqichdan o‘tganda uning dastlabki mazmuni buzilishi yoki o‘zgarishi mumkin.',
    ),

    q(
      'm1t3e26',
      'Kompensatsiya qonuni qanday holatni tushuntiradi?',
      [
        'Kamchiliklarning ayrim kuchli jihatlar bilan qoplanishini',
        'Barcha kamchiliklarni yashirishni',
        'Rahbarning xodimni jazolashini',
        'Vakolatlarni bekor qilishni',
      ],
      0,
      'Kompensatsiya ayrim zaif jihatlarni boshqa kuchli imkoniyatlar hisobiga muvozanatlashni anglatadi.',
    ),

    q(
      'm1t3e27',
      'Rahbarning qisqa va aniq nutqi qanday foyda beradi?',
      [
        'Keraksiz axborot yuklamasini kamaytiradi',
        'Nizolarni majburiy kuchaytiradi',
        'Jamoaviylikni yo‘qotadi',
        'Mas’uliyatni kamaytiradi',
      ],
      0,
      'Qisqa va aniq nutq xabarni tushunishni osonlashtiradi va ortiqcha hissiy yuklamani kamaytiradi.',
    ),

    q(
      'm1t3e28',
      'Rahbar uchun psixologik xavfsiz muhitning muhim belgisi qaysi?',
      [
        'Xodimlar fikrini qo‘rqmasdan bildira olishi',
        'Faqat rahbar gapirishi',
        'Tanqidning taqiqlanishi',
        'Xatolar yashirilishi',
      ],
      0,
      'Psixologik xavfsizlik xodimlarga fikr, savol va muammolarni qo‘rquvsiz bildirish imkonini beradi.',
    ),

    q(
      'm1t3e29',
      'Rahbarning delegatsiya qilishi nimani anglatmaydi?',
      [
        'Nazoratni butunlay bekor qilishni',
        'Vakolatni topshirishni',
        'Mas’uliyatni taqsimlashni',
        'Xodimga ishonch bildirishni',
      ],
      0,
      'Delegatsiya nazoratni bekor qilish emas; natijani kelishilgan mezonlar orqali kuzatish davom etadi.',
    ),

    q(
      'm1t3e30',
      'Boshqaruv psixologiyasini bilish rahbarga eng avvalo nima beradi?',
      [
        'Insonlar bilan samarali ishlash imkonini',
        'Barcha muammolarni avtomatik hal qilish imkonini',
        'Nazoratni butunlay bekor qilish imkonini',
        'Faqat hujjatlarni tezroq tayyorlash imkonini',
      ],
      0,
      'Boshqaruv psixologiyasi inson omilini hisobga olib, muloqot, motivatsiya va jamoa boshqaruvini yaxshilashga yordam beradi.',
    ),
  ],

  // =========================================================
  // 30 TA O‘RTA
  // =========================================================
  medium: [
    q(
      'm1t3m01',
      'Rahbarning stressga munosabatini tahlil qilishda sangvinik temperamentning asosiy psixologik ustunligi qaysi jihatda namoyon bo‘ladi?',
      [
        'Stressni inkor etish va muammolardan chetlashish orqali',
        'Hissiy bosimni ichida saqlab, tashqi reaksiya orqali moslashuvni tezlashtirish orqali',
        'Ijobiy fikrlash va ijtimoiy muloqot orqali moslashuvni tezlashtirish orqali',
        'Vaziyatni haddan tashqari chuqur tahlil qilish orqali moslashuvni tezlashtirish orqali',
      ],
      2,
      'Sangvinik temperamentning kuchli jihati ijobiy fikrlash, faol muloqot va vaziyatga tez moslashishdir.',
    ),

    q(
      'm1t3m02',
      'Flegmatik temperamentning boshqaruv jarayonidagi potensial cheklovi qaysi holatda yuzaga chiqishi mumkin?',
      [
        'Jamoada keskinlikni kuchaytirish holatida',
        'Hissiy beqarorlikning oshib borishida',
        'Vaziyatlarga kech reaksiya bildirish ehtimolida',
        'Muammolarni haddan tashqari tez hal qilishga intilishda',
      ],
      2,
      'Flegmatik rahbar vazmin va barqaror bo‘lishi mumkin, ammo ayrim vaziyatlarda reaksiya sekinlashadi.',
    ),

    q(
      'm1t3m03',
      'Qaysi holatlar rahbarning tanqidga psixologik jihatdan yetuk munosabatini ifodalaydi? A) E’tirozni tinglash. B) Tanqidni shaxsiy tahdid deb qabul qilish. C) Xatosini tan olish. D) Darhol buyruq berish.',
      [
        'A, C',
        'B, D',
        'A, D',
        'B, C',
      ],
      0,
      'Yetuk rahbar tanqidni xolis tinglaydi va asosli xatosini tan olishdan qochmaydi.',
    ),

    q(
      'm1t3m04',
      'Qaysi xususiyatlar samarali boshqaruvga ichki to‘siq bo‘lishi mumkin? A) Qadriyatlarning shakllanmaganligi. B) Muammo yechish ko‘nikmasining zaifligi. C) Ijodiy yondashuvning rivojlanmaganligi. D) Ochiq muloqotga tayyorlik.',
      [
        'B, C, D',
        'A, B, C',
        'A, C, D',
        'A, B, D',
      ],
      1,
      'A, B va C boshqaruvni cheklovchi omillar; D esa ijobiy xususiyatdir.',
    ),

    q(
      'm1t3m05',
      'Qaysi temperamentlar stressni nisbatan barqaror boshqarishga moyil?',
      [
        'Melanxolik va xolerik',
        'Sangvinik va flegmatik',
        'Flegmatik va melanxolik',
        'Sangvinik va xolerik',
      ],
      1,
      'Sangvinikning moslashuvchanligi va flegmatikning vazminligi stressni boshqarishda yordam beradi.',
    ),

    q(
      'm1t3m06',
      'Rahbar tanbehni xodimning ijobiy jihatini e’tirof etgach bersa, qanday psixologik natija kutiladi?',
      [
        'Himoyalanish hissi kamayadi',
        'Tanqidning ma’muriy kuchi ortadi',
        'Xodim tanqidni umuman qabul qilmaydi',
        'Jamoa oldidagi bosim kuchayadi',
      ],
      0,
      'Ijobiy jihatni tan olish xodimga tanqidni shaxsiy hujum sifatida qabul qilmaslikka yordam beradi.',
    ),

    q(
      'm1t3m07',
      'Xodimni umumiy koyish o‘rniga aniq xatti-harakatni tahlil qilish qaysi tamoyilga mos?',
      [
        'Shaxsni umumiy baholash',
        'Faqat ma’muriy nazorat',
        'Xulq-atvorni aniq tahlil qilish',
        'Jamoa oldida tanqid qilish',
      ],
      2,
      'Konstruktiv yondashuv shaxsni emas, aniq kuzatilgan xatti-harakatni tahlil qiladi.',
    ),

    q(
      'm1t3m08',
      'Temperament va rahbarlik ta’sirini to‘g‘ri moslashtiring. A) Flegmatik va sangvinik. B) Xolerik. C) Melanxolik. 1) Barqarorlik va moslashuvchanlik. 2) Tezkorlik va yuqori energiya. 3) Sezgirlik va chuqur tahlil.',
      [
        'A–2, B–1, C–3',
        'A–3, B–2, C–1',
        'A–1, B–3, C–2',
        'A–1, B–2, C–3',
      ],
      3,
      'Flegmatik va sangvinik — 1, xolerik — 2, melanxolik — 3.',
    ),

    q(
      'm1t3m09',
      'Flegmatik rahbarning stressli vaziyatlarda barqarorligi nimaga ko‘proq bog‘liq?',
      [
        'Keskin qarorlar va yuqori shoshqaloqlikka',
        'Hissiy vazminlik va sabr-toqatga',
        'Doimiy ijtimoiy faollikka',
        'Vaziyatni hissiy jihatdan kuchaytirishga',
      ],
      1,
      'Flegmatik temperamentning asosiy ustunligi vazminlik va sabr-toqatdir.',
    ),

    q(
      'm1t3m10',
      'Kuchli rahbar pozitsiyasi qaysi xatti-harakatda ko‘proq namoyon bo‘ladi?',
      [
        'Barcha qarorlarni faqat o‘zi qabul qilishda',
        'Vakolat berish va ishonchga asoslangan boshqaruvda',
        'Jamoa faoliyatini haddan tashqari cheklashda',
        'Xodimlarning fikrini e’tiborsiz qoldirishda',
      ],
      1,
      'Kuchli rahbar jamoaga ishonadi, vakolatlarni taqsimlaydi va umumiy natijaga yo‘naltiradi.',
    ),

    q(
      'm1t3m11',
      '“Inson inson tomonidan yetarli aks ettirilmasligi” qonuni rahbarga qanday xulosa beradi?',
      [
        'Xodimni faqat tashqi xulqiga qarab to‘liq baholash mumkin',
        'Dastlabki taassurot har doim to‘liq va aniq bo‘ladi',
        'Xodim haqidagi dastlabki tasavvur to‘liq bo‘lmasligi mumkin',
        'Psixologik baholashga ehtiyoj yo‘q',
      ],
      2,
      'Insonning ichki imkoniyatlarini faqat tashqi kuzatuv asosida to‘liq anglash qiyin.',
    ),

    q(
      'm1t3m12',
      'Boshqaruv psixologiyasi rahbar faoliyatida qaysi yo‘nalishlarni qamrab oladi?',
      [
        'Shaxsiy fazilat, muloqot, motivatsiya va nizolarni boshqarish',
        'Faqat moliyaviy rejalashtirish',
        'Faqat ta’lim mazmunini standartlashtirish',
        'Faqat hujjatlarni nazorat qilish',
      ],
      0,
      'Boshqaruv psixologiyasi inson omili bilan bog‘liq keng yo‘nalishlarni qamrab oladi.',
    ),

    q(
      'm1t3m13',
      'Tushunchalarni moslashtiring: 1) Emotsional intellekt. 2) O‘zini boshqarish. 3) Professional intizom. 4) Adolat. a) Dalillarga tayangan qaror. b) Hissiyotlarni anglash. c) Vaqt va xatti-harakatni nazorat qilish. d) Yagona mezon.',
      [
        '1–b, 2–c, 3–a, 4–d',
        '1–c, 2–b, 3–a, 4–d',
        '1–b, 2–c, 3–d, 4–a',
        '1–a, 2–c, 3–b, 4–d',
      ],
      0,
      'Emotsional intellekt — b; o‘zini boshqarish — c; professional intizom — a; adolat — d.',
    ),

    q(
      'm1t3m14',
      '“Hammasini o‘zim nazorat qilishim kerak” degan rahbarlik pozitsiyasining asosiy xavfi nima?',
      [
        'Jamoa mustaqilligining kuchayishi',
        'Vakolatlarning markazlashuvi va tashabbusning pasayishi',
        'Hujjatlar sifati avtomatik oshishi',
        'Xodimlar mas’uliyatining ortishi',
      ],
      1,
      'Haddan tashqari markazlashuv delegatsiya va xodimlar tashabbusini susaytiradi.',
    ),

    q(
      'm1t3m15',
      'Xolerik rahbarning yuqori motivatsiyasi qachon xavf omiliga aylanishi mumkin?',
      [
        'Jamoa fikri hisobga olinganda',
        'Vazifalar delegatsiya qilinganda',
        'Hissiy reaksiyalar boshqarilmaganda',
        'Strategik maqsadlar aniq bo‘lganda',
      ],
      2,
      'Xolerikning kuchli energiyasi hissiy o‘zini boshqarish bo‘lmasa nizoga olib kelishi mumkin.',
    ),

    q(
      'm1t3m16',
      'Emotsional intellekt namoyon bo‘ladigan holatlarni aniqlang. A) Hissiyotni nazorat qilish. B) Muammoni shaxsdan ajratish. C) Faqat lavozimga tayanish. D) Xatoni shaxsni kamsitmasdan tuzatish.',
      [
        'A, C, D',
        'A, B, D',
        'B, C, D',
        'A, B, C',
      ],
      1,
      'A, B va D emotsional yetuklikni ko‘rsatadi; C esa faqat lavozim vakolatiga tayanishdir.',
    ),

    q(
      'm1t3m17',
      '“Natijaning noaniqliligi qonuni”ni hisobga olgan rahbar qaysi yondashuvni tanlaydi? A) Individual imkoniyatni hisobga olish. B) Hammadan bir xil ijro usulini talab qilish. C) Turli ijro usullariga yo‘l qo‘yish. D) Farqni darhol intizomiy muammo deb baholash.',
      [
        'C, D',
        'A, C',
        'B, D',
        'A, D',
      ],
      1,
      'Individual farqlarni hisobga olish va natijaga olib boruvchi turli usullarga yo‘l qo‘yish qonuniyatga mos.',
    ),

    q(
      'm1t3m18',
      'Temperamentlarni stress xususiyatlari bilan moslashtiring: 1) Sangvinik. 2) Xolerik. 3) Melanxolik. 4) Flegmatik. a) Hissiy nazoratda qiyinchilik. b) Tinch va sabrli. c) Stressni chuqur his qilish. d) Tez moslashish.',
      [
        '1–d, 2–c, 3–a, 4–b',
        '1–d, 2–a, 3–c, 4–b',
        '1–c, 2–a, 3–d, 4–b',
        '1–b, 2–a, 3–c, 4–d',
      ],
      1,
      'Sangvinik — d; xolerik — a; melanxolik — c; flegmatik — b.',
    ),

    q(
      'm1t3m19',
      'Xolerik rahbar xususiyatlarini moslashtiring: A) Xulq. B) Stress. C) Afzallik. D) Kamchilik. 1) Tezkor va tashabbuskor. 2) Tez qaror va yuqori energiya. 3) Bosimda faol, lekin hissiy nazorat susayishi mumkin. 4) Keskin hissiyotlar nizoga olib kelishi mumkin.',
      [
        'A–1, B–2, C–3, D–4',
        'A–2, B–3, C–1, D–4',
        'A–1, B–3, C–2, D–4',
        'A–3, B–1, C–2, D–4',
      ],
      2,
      'Xulq — 1; stressdagi munosabat — 3; afzallik — 2; kamchilik — 4.',
    ),

    q(
      'm1t3m20',
      'Qaysi tavsif rahbarlikda barqarorlik va vazmin qaror qabul qilishga ko‘proq mos?',
      [
        'Shoshilmasdan tahlil qilib, ehtiyotkor xulosa chiqarish',
        'Yuqori energiya bilan darhol qaror qilish',
        'Muammolarni faqat optimizm bilan baholash',
        'Tanqidni chuqur hissiy qabul qilish',
      ],
      0,
      'Vazminlik, ehtiyotkorlik va tahlil barqaror qaror qabul qilishga yordam beradi.',
    ),

    q(
      'm1t3m21',
      'Qonuniyatlarni moslashtiring: 1) Noadekvat o‘zini baholash. 2) Axborot mazmunining yo‘qolishi. 3) O‘zini saqlash. 4) Kompensatsiya. a) Axborot mazmuni o‘zgarishi. b) Imkoniyatni noto‘g‘ri baholash. c) Kuchli jihat bilan kamchilikni muvozanatlash. d) Mavqeni saqlash.',
      [
        '1–c, 2–a, 3–d, 4–b',
        '1–b, 2–a, 3–c, 4–d',
        '1–b, 2–d, 3–a, 4–c',
        '1–b, 2–a, 3–d, 4–c',
      ],
      3,
      '1–b, 2–a, 3–d, 4–c to‘g‘ri moslikdir.',
    ),

    q(
      'm1t3m22',
      'Rahbarlik yondashuvlarini moslashtiring: A) 3 soniya qoidasi. B) Ta’sirchan nutq. C) Konstruktiv tanqid. 1) Qisqa va dalillarga asoslangan murojaat. 2) Hissiy javobni kechiktirish. 3) Aniq xatti-harakat va tuzatish yo‘lini ko‘rsatish.',
      [
        'A–2, B–1, C–3',
        'A–3, B–1, C–2',
        'A–1, B–3, C–2',
        'A–2, B–3, C–1',
      ],
      0,
      '3 soniya qoidasi — 2; ta’sirchan nutq — 1; konstruktiv tanqid — 3.',
    ),

    q(
      'm1t3m23',
      'Temperamentlarni moslashtiring: A) Sangvinik. B) Xolerik. C) Melanxolik. D) Flegmatik. 1) Tinch va barqaror. 2) Optimistik va moslashuvchan. 3) Yuqori energiyali. 4) Sezgir va tahliliy.',
      [
        'A–2, B–3, C–4, D–1',
        'A–2, B–4, C–3, D–1',
        'A–1, B–3, C–4, D–2',
        'A–4, B–2, C–3, D–1',
      ],
      0,
      'Sangvinik — 2; xolerik — 3; melanxolik — 4; flegmatik — 1.',
    ),

    q(
      'm1t3m24',
      'Sangvinik rahbar xususiyatlarini moslashtiring: A) Xulq. B) Stress. C) Afzallik. D) Kamchilik. 1) Ijobiy muhit yaratish. 2) Muammoni yengil baholash. 3) Ochiq va serharakat. 4) Muloqot orqali stressni yengish.',
      [
        'A–3, B–1, C–4, D–2',
        'A–4, B–3, C–1, D–2',
        'A–3, B–4, C–1, D–2',
        'A–1, B–4, C–3, D–2',
      ],
      2,
      'Xulq — 3; stress — 4; afzallik — 1; kamchilik — 2.',
    ),

    q(
      'm1t3m25',
      'Rahbar nutqiy ta’sir qoidalarini moslashtiring: 1) Qisqa nutq. 2) Faktga tayangan nutq. 3) “Biz” tili. 4) E’tirof bilan yakunlash. a) Jamoaviylik. b) Ortiqcha yuklamani kamaytirish. c) Qo‘llab-quvvatlash. d) Real vaziyatga tayanish.',
      [
        '1–c, 2–d, 3–a, 4–b',
        '1–b, 2–d, 3–a, 4–c',
        '1–d, 2–b, 3–a, 4–c',
        '1–b, 2–a, 3–d, 4–c',
      ],
      1,
      'Qisqa nutq — b; fakt — d; “biz” — a; e’tirof — c.',
    ),

    q(
      'm1t3m26',
      'Sangvinik rahbarning ehtimoliy kamchiligi boshqaruvda qaysi xavfni keltirib chiqaradi?',
      [
        'Muammoni yetarlicha jiddiy baholamaslik',
        'Jamoani doimiy qo‘rqitish',
        'Yangiliklarga butunlay yopiq bo‘lish',
        'Qarorlarni har doim kechiktirish',
      ],
      0,
      'Haddan tashqari optimizm muammolarning xavf darajasini past baholashga sabab bo‘lishi mumkin.',
    ),

    q(
      'm1t3m27',
      'Xolerik rahbarning stressga chidamliligini murakkablashtiruvchi asosiy omil qaysi?',
      [
        'Hissiy reaksiyalarni boshqarishdagi qiyinchilik',
        'Tashabbuskorlikning yo‘qligi',
        'Doimiy sustkashlik',
        'Muloqotga umuman qiziqmaslik',
      ],
      0,
      'Xolerikning kuchli hissiy reaksiyalari o‘zini boshqarish sust bo‘lsa stressni kuchaytirishi mumkin.',
    ),

    q(
      'm1t3m28',
      'Temperamentlarni stress bilan bog‘liq xususiyatlari bilan moslashtiring: 1) Sangvinik. 2) Xolerik. 3) Melanxolik. a) Chuqur xavotir. b) Kuchli hissiy reaksiya. c) Tez moslashish.',
      [
        '1–b, 2–c, 3–a',
        '1–c, 2–a, 3–b',
        '1–a, 2–b, 3–c',
        '1–c, 2–b, 3–a',
      ],
      3,
      'Sangvinik — c; xolerik — b; melanxolik — a.',
    ),

    q(
      'm1t3m29',
      'Ijtimoiy-psixologik tushunchalarni moslashtiring: 1) Missiya. 2) E’tiqod. 3) Qadriyat. 4) Ustanovka. a) Uzoq muddatli ma’no. b) Barqaror ichki ishonch. c) Ustuvor ichki mezon. d) Muayyan vaziyatdagi psixologik tayyorgarlik.',
      [
        '1–a, 2–c, 3–b, 4–d',
        '1–c, 2–b, 3–a, 4–d',
        '1–a, 2–b, 3–c, 4–d',
        '1–a, 2–d, 3–c, 4–b',
      ],
      2,
      'Missiya — a; e’tiqod — b; qadriyat — c; ustanovka — d.',
    ),

    q(
      'm1t3m30',
      'Rahbarning individual temperamentini hisobga olishdan asosiy maqsad nima?',
      [
        'Temperamentni kasbiy kompetensiyadan ustun qo‘yish',
        'Xodimlarni faqat temperamentiga qarab baholash',
        'Muloqot va boshqaruv uslubini individual farqlarga moslashtirish',
        'Barcha xodimlarga bir xil psixologik yondashuvni majburan qo‘llash',
      ],
      2,
      'Temperamentni bilish rahbarga individual farqlarni hisobga olib samaraliroq muloqot qilish imkonini beradi.',
    ),
  ],

  // =========================================================
  // 30 TA QIYIN
  // =========================================================
  hard: [
    q(
      'm1t3h01',
      'Direktor juda faol xodimni tezkorligi uchun yuqori baholaydi, ammo u ko‘pincha jamoa fikrini kutmasdan qaror qiladi. Eng maqbul boshqaruv chorasi qaysi?',
      [
        'Uning barcha qarorlarini cheklash',
        'Tezkorlikni saqlagan holda qaror oldidan qisqa maslahat mexanizmini joriy etish',
        'Uni faqat individual vazifalarga o‘tkazish',
        'Tashabbuslarini butunlay to‘xtatish',
      ],
      1,
      'Kuchli jihatni yo‘qotmasdan, jamoaviy maslahat orqali xavfni kamaytirish eng maqbul yondashuvdir.',
    ),

    q(
      'm1t3h02',
      'Rahbar xodimning xatosini jamoa oldida keskin tanqid qildi. Keyingi yig‘ilishlarda xodim fikr bildirishdan qo‘rqmoqda. Qaysi xulosa to‘g‘ri?',
      [
        'Tanqid yetarlicha qat’iy bo‘lmagan',
        'Rahbar psixologik xavfsizlikka salbiy ta’sir ko‘rsatgan',
        'Xodim mas’uliyatsizligini isbotlagan',
        'Jamoaviy boshqaruvga ehtiyoj qolmagan',
      ],
      1,
      'Shaxsni jamoa oldida kamsituvchi tanqid psixologik xavfsizlik va ochiq muloqotni susaytirishi mumkin.',
    ),

    q(
      'm1t3h03',
      'Bir xil topshiriqni ikki xodim turli usulda bajardi, ammo ikkalasi ham kutilgan natijaga erishdi. “Natijaning noaniqliligi qonuni” nuqtayi nazaridan rahbar nima qilishi kerak?',
      [
        'Faqat rahbar qo‘llagan usulni majburiy qilish',
        'Turli usullarni natija mezoni asosida baholash',
        'Bir xodimni intizomiy jazolash',
        'Barcha usullarni taqiqlash',
      ],
      1,
      'Qonuniyat natijaga turli yo‘llar orqali erishish mumkinligini hisobga olishni talab qiladi.',
    ),

    q(
      'm1t3h04',
      'Rahbar o‘zini juda adolatli deb hisoblaydi, ammo xodimlar ayrim qarorlar tanish-bilishchilik asosida qabul qilinayotganini aytmoqda. Qaysi vosita eng foydali?',
      [
        'Rahbarning o‘z bahosiga tayanish',
        'Qaror mezonlarini ochiq belgilash va qayta aloqa yig‘ish',
        'Tanqid qilgan xodimlarni ogohlantirish',
        'Baholashni butunlay bekor qilish',
      ],
      1,
      'Adolat faqat rahbarning o‘z tasavvuri emas, balki shaffof mezonlar va qayta aloqa bilan tekshirilishi kerak.',
    ),

    q(
      'm1t3h05',
      'Rahbar stress vaqtida juda tez javob berishga moyil. Unga “3 soniya qoidasi”ni qo‘llash tavsiya qilindi. Buning asosiy maqsadi nima?',
      [
        'Qaror qabul qilishni doim kechiktirish',
        'Hissiy impuls va ongli javob o‘rtasida qisqa pauza yaratish',
        'Jamoa fikrini butunlay bekor qilish',
        'Har qanday nizoni yopish',
      ],
      1,
      'Qisqa pauza impulsiv javobni kamaytirib, vaziyatni ongli baholashga imkon beradi.',
    ),

    q(
      'm1t3h06',
      'Rahbarning kuchli optimizmi jamoada ijobiy muhit yaratmoqda, lekin xavfli muammolarni ham yengil baholayapti. Qaysi kompensatsion yondashuv maqsadga muvofiq?',
      [
        'Optimistik yondashuvni butunlay bekor qilish',
        'Optimizmni saqlagan holda daliliy xavf tahlilini joriy etish',
        'Faqat salbiy ma’lumotlarni ko‘rib chiqish',
        'Barcha qarorlarni boshqa xodimga topshirish',
      ],
      1,
      'Kuchli jihatni yo‘qotmasdan, uning zaif tomonini daliliy tahlil bilan muvozanatlash kompensatsion yondashuvdir.',
    ),

    q(
      'm1t3h07',
      'Rahbar xodimning past natijasini faqat “mas’uliyatsizlik” bilan izohladi. Psixologik jihatdan qaysi xato yuzaga kelgan?',
      [
        'Individual sabablarni yetarli tahlil qilmaslik',
        'Delegatsiyani ortiqcha qo‘llash',
        'Jamoa fikrini haddan tashqari hisobga olish',
        'Professional intizomni kuchaytirish',
      ],
      0,
      'Natijani faqat bitta sabab bilan izohlash xodimning qobiliyati, sharoiti va vazifa xususiyatlarini e’tibordan chetda qoldiradi.',
    ),

    q(
      'm1t3h08',
      'Rahbar muhim topshiriqni og‘zaki berdi. Uch bosqichdan keyin topshiriq mazmuni o‘zgardi. Qaysi qonuniyat bu vaziyatni tushuntiradi?',
      [
        'Kompensatsiya qonuni',
        'O‘z-o‘zini saqlash qonuni',
        'Boshqaruv ma’lumotlari mazmunining yo‘qolib borishi qonuni',
        'Natijaning noaniqliligi qonuni',
      ],
      2,
      'Axborot uzatilish jarayonida mazmunning o‘zgarishi mazkur qonuniyat bilan izohlanadi.',
    ),

    q(
      'm1t3h09',
      'Rahbar xodimni tanqid qilishdan oldin uning uchta ijobiy natijasini qayd etdi. Bu yondashuvning asosiy psixologik vazifasi nima?',
      [
        'Tanqidni bekor qilish',
        'Xodimning himoyalanish reaksiyasini kamaytirish',
        'Xodimni boshqalardan ustun qo‘yish',
        'Intizomiy chorani kuchaytirish',
      ],
      1,
      'Ijobiy jihatlarni tan olish xodimning o‘zini hujum ostida his qilish ehtimolini kamaytiradi.',
    ),

    q(
      'm1t3h10',
      'Direktor barcha vazifalarni o‘zi tekshiradi va xodimlar tashabbus ko‘rsatmay qo‘ydi. Muammoning eng ehtimoliy sababi nima?',
      [
        'Haddan tashqari delegatsiya',
        'Nazoratning markazlashuvi',
        'Psixologik xavfsizlikning ortishi',
        'Xodimlarning ortiqcha mustaqilligi',
      ],
      1,
      'Mikroboshqaruv xodimlarning tashabbus va mustaqilligini pasaytiradi.',
    ),

    q(
      'm1t3h11',
      'Rahbar xodimni “sust odam” deb baholadi, holbuki xodim faqat bir vazifani bajarishda qiynalgan. Qaysi yondashuv to‘g‘ri?',
      [
        'Shaxsga umumiy yorliq qo‘yish',
        'Muayyan xatti-harakat va vazifa natijasini alohida tahlil qilish',
        'Xodimni boshqa jamoaga o‘tkazish',
        'Muammoni e’tiborsiz qoldirish',
      ],
      1,
      'Psixologik jihatdan xulq-atvorni shaxsning umumiy sifatidan ajratib baholash xolisroqdir.',
    ),

    q(
      'm1t3h12',
      'Xodim tanqidni qabul qilmayapti. Rahbar avval xodimning nuqtayi nazarini tingladi, keyin dalillarni ko‘rsatdi. Bu qanday yondashuv?',
      [
        'Konfrontatsion boshqaruv',
        'Empatik va daliliy muloqot',
        'Faqat ma’muriy nazorat',
        'Buyruqbozlik',
      ],
      1,
      'Empatiya va dalilni birlashtirish himoyalanishni kamaytirib, muammoni muhokama qilish imkonini beradi.',
    ),

    q(
      'm1t3h13',
      'Rahbar o‘z qarorini tanqid qilgan xodimning motivatsiyasini tushirmasdan qanday javob berishi kerak?',
      [
        'Tanqidni darhol rad etish',
        'E’tirozni dalil sifatida ko‘rib, asosli qismini ajratish',
        'Xodimni jamoa oldida ogohlantirish',
        'Qarorni izohsiz qoldirish',
      ],
      1,
      'Yetuk rahbar qarorga nisbatan e’tirozni shaxsiy tahdid emas, qo‘shimcha axborot sifatida ko‘rib chiqadi.',
    ),

    q(
      'm1t3h14',
      'Melanxolik xodimga keskin va ommaviy tanqid berish ehtimoliy qanday oqibatga olib keladi?',
      [
        'Stress va ichki xavotir kuchayishi mumkin',
        'Avtomatik ravishda yuqori motivatsiya paydo bo‘ladi',
        'Tezkorlik keskin oshadi',
        'Muloqot sifati darhol yaxshilanadi',
      ],
      0,
      'Yuqori sezgir xodimlarda keskin ommaviy tanqid xavotirni kuchaytirishi mumkin.',
    ),

    q(
      'm1t3h15',
      'Flegmatik rahbar tezkor krizisga duch keldi. Uning temperamentiga mos boshqaruv xavfini qanday kamaytirish mumkin?',
      [
        'Qarorlarni cheksiz kechiktirish',
        'Oldindan belgilangan tezkor qaror protokollaridan foydalanish',
        'Jamoa fikrini butunlay rad etish',
        'Hissiy bosimni kuchaytirish',
      ],
      1,
      'Aniq protokol flegmatik rahbarning vazminligini saqlagan holda tezkorlikni ta’minlashga yordam beradi.',
    ),

    q(
      'm1t3h16',
      'Xolerik rahbar nizoda keskin gapirdi, keyin xatosini tan oldi va vaziyatni qayta muhokama qildi. Bu nimani ko‘rsatadi?',
      [
        'Faqat hissiy beqarorlikni',
        'O‘zini boshqarish rivojlanayotganini',
        'Rahbarlik qobiliyati yo‘qligini',
        'Delegatsiya muammosini',
      ],
      1,
      'Xatoni tan olish va vaziyatni qayta ko‘rib chiqish psixologik yetuklik belgisi hisoblanadi.',
    ),

    q(
      'm1t3h17',
      'Rahbar xodimlarni bir xil mezon bilan baholayapti, lekin har bir xodimga vazifani bajarishda bir xil usulni majburlamayapti. Bu qaysi prinsipga mos?',
      [
        'Natijaga yo‘naltirilgan xolis baholash',
        'To‘liq nazoratsizlik',
        'Standartdan voz kechish',
        'Subyektiv boshqaruv',
      ],
      0,
      'Yagona natija mezonlari adolatni ta’minlaydi, turli ijro usullariga imkon berish esa individual farqlarni hisobga oladi.',
    ),

    q(
      'm1t3h18',
      'Rahbar o‘zining emotsional intellektini rivojlantirmoqchi. Qaysi amaliyot eng to‘liq?',
      [
        'Faqat nutq texnikasini mashq qilish',
        'Hissiyotlarni aniqlash, impulsni boshqarish va empatik tinglashni mashq qilish',
        'Faqat buyruq berish usullarini o‘rganish',
        'Tanqidni cheklash',
      ],
      1,
      'Emotsional intellekt o‘z hissiyotini anglash, boshqarish va boshqalarning holatini tushunishni qamrab oladi.',
    ),

    q(
      'm1t3h19',
      'Jamoada rahbar haqida dastlabki ijobiy taassurot mavjud, ammo keyinchalik ayrim xatti-harakatlar bunga mos kelmadi. Qaysi psixologik tamoyil muhim?',
      [
        'Dastlabki tasavvurni mutlaq haqiqat deb qabul qilish',
        'Insonni birgina kuzatuv bilan to‘liq baholab bo‘lmasligi',
        'Xodimlar fikrini butunlay rad etish',
        'Rahbarning obro‘sini avtomatik himoya qilish',
      ],
      1,
      'Insonning ichki xususiyatlari tashqi kuzatuv bilan to‘liq aks etmasligi mumkin.',
    ),

    q(
      'm1t3h20',
      'Rahbar jamoada yuqori motivatsiya yaratgan, biroq xodimlar xato haqida xabar berishdan qo‘rqadi. Qaysi komponent yetishmayapti?',
      [
        'Psixologik xavfsizlik',
        'Nazorat',
        'Vazifa taqsimoti',
        'Rasmiy tartib',
      ],
      0,
      'Motivatsiya bilan birga xatolar va muammolarni ochiq aytish imkonini beruvchi psixologik xavfsizlik ham zarur.',
    ),

    q(
      'm1t3h21',
      'Rahbar o‘z kuchli tomonlarini biladi, lekin zaif tomonlarini inkor etadi. Qaysi psixologik xavf yuzaga keladi?',
      [
        'Adekvat o‘zini baholamaslik',
        'Delegatsiya kuchayishi',
        'Empatiya ortishi',
        'Jamoaviylikning kuchayishi',
      ],
      0,
      'O‘z imkoniyatlarini faqat yuqori baholash noadekvat o‘z-o‘zini baholashga olib kelishi mumkin.',
    ),

    q(
      'm1t3h22',
      'Rahbar jamoada nizolar ko‘payganini ko‘rib, faqat aybdorni qidirmoqda. Psixologik jihatdan samaraliroq yondashuv qaysi?',
      [
        'Aybdorni tezda jazolash',
        'Nizo sababi, manfaatlar va muloqot jarayonini tahlil qilish',
        'Nizoni yashirish',
        'Barcha xodimlarni bir xil jazolash',
      ],
      1,
      'Nizoni boshqarishda sabablar va munosabatlar tizimini tahlil qilish uzoq muddatli yechim beradi.',
    ),

    q(
      'm1t3h23',
      'Rahbarning ichki pozitsiyasi “jamoaning natijasi — mening shaxsiy natijam”ga asoslangan. Buning ijobiy tomoni nima?',
      [
        'Jamoaviy mas’uliyatni kuchaytirishi mumkin',
        'Barcha vakolatni rahbarga qaytaradi',
        'Xodimlar mustaqilligini yo‘qotadi',
        'Tanqidni bekor qiladi',
      ],
      0,
      'Jamoa natijasini umumiy yutuq sifatida ko‘rish hamkorlik va mas’uliyatni kuchaytiradi.',
    ),

    q(
      'm1t3h24',
      'Rahbar xodimga tanqid bildirganda uch elementni qo‘lladi: aniq vaziyat, kuzatilgan xatti-harakat, kutilgan tuzatish. Bu qanday yondashuv?',
      [
        'Konstruktiv fikr-mulohaza',
        'Shaxsiy baholash',
        'Ommaviy tanbeh',
        'Norasmiy bosim',
      ],
      0,
      'Aniq vaziyat, xatti-harakat va kutilgan o‘zgarish konstruktiv feedbackning asosiy elementlaridir.',
    ),

    q(
      'm1t3h25',
      'Rahbarning stressga chidamliligini oshirish uchun qaysi tizim eng to‘liq?',
      [
        'Faqat dam olish',
        'Prioritetlarni belgilash, hissiy o‘zini boshqarish va yordam so‘rash',
        'Faqat ish vaqtini uzaytirish',
        'Muammolarni inkor etish',
      ],
      1,
      'Stressni boshqarish faqat dam olish emas, balki ustuvorlik, hissiy nazorat va ijtimoiy yordamni ham talab qiladi.',
    ),

    q(
      'm1t3h26',
      'Rahbarning “men bilaman” pozitsiyasi kuchli bo‘lsa, jamoa fikrini tinglash kamayadi. Qaysi xavf kuchayadi?',
      [
        'Kognitiv yopilish va noto‘g‘ri qarorni vaqtida tuzatmaslik',
        'Delegatsiya samaradorligi',
        'Psixologik xavfsizlik',
        'Kollektiv fikrlashning ijobiy tomoni',
      ],
      0,
      'Faqat o‘z qarashiga tayanish qo‘shimcha axborotni rad etishga va qaror xatolarini tuzatmaslikka olib kelishi mumkin.',
    ),

    q(
      'm1t3h27',
      'Rahbar jamoa a’zolarining temperamentini hisobga olib, bir xodimga qisqa topshiriq, boshqasiga batafsil yo‘riqnoma beradi. Bu nimani anglatadi?',
      [
        'Adolatsizlik',
        'Individual yondashuv',
        'Standartlarning bekor qilinishi',
        'Nazoratdan voz kechish',
      ],
      1,
      'Bir xil maqsadga turli muloqot va qo‘llab-quvvatlash usullari bilan erishish individual yondashuvdir.',
    ),

    q(
      'm1t3h28',
      'Rahbarning psixologik kompetensiyasini baholashda qaysi kombinatsiya eng to‘liq?',
      [
        'Hissiy nazorat + empatiya + konstruktiv muloqot + refleksiya',
        'Buyruq + nazorat + jazolash + hisobot',
        'Tezkorlik + qat’iylik + tanqid + bosim',
        'Tajriba + lavozim + hujjat + buyruq',
      ],
      0,
      'Psixologik kompetensiya o‘zini anglash, hissiy boshqaruv, empatiya, muloqot va refleksiyani qamrab oladi.',
    ),

    q(
      'm1t3h29',
      'Rahbar xodim xatosini tuzatdi, ammo sababini aniqlamadi. Xato yana takrorlandi. Qaysi boshqaruv kamchiligi mavjud?',
      [
        'Faqat oqibatga ta’sir qilingan, sabab tahlil qilinmagan',
        'Delegatsiya haddan tashqari kuchli',
        'Motivatsiya juda yuqori',
        'Jamoa psixologik xavfsizligi ortiqcha',
      ],
      0,
      'Barqaror yechim uchun xatoning ildiz sababi aniqlanishi kerak.',
    ),

    q(
      'm1t3h30',
      'Maktab direktorining boshqaruv psixologiyasidagi eng yetuk pozitsiyasi qaysi?',
      [
        '“Men rahbarman, demak, hamma qaror meniki.”',
        '“Jamoa men aytganimni bajarishi kerak.”',
        '“Men natija uchun mas’ulman, jamoa salohiyatini ishga solishim kerak.”',
        '“Xatolar uchun avvalo aybdorni topish kerak.”',
      ],
      2,
      'Yetuk rahbar yakuniy natija uchun mas’uliyatni saqlagan holda jamoaning salohiyati va mustaqilligini rivojlantiradi.',
    ),
  ],

  // =========================================================
  // 10 TA CASE
  // =========================================================
  case: [
    q(
      'm1t3c01',
      'Direktor yig‘ilish vaqtida bir o‘qituvchining xatosidan jahli chiqdi. U darhol keskin tanbeh bermoqchi bo‘ldi. Eng maqbul birinchi harakat qaysi?',
      [
        'Darhol jamoa oldida tanbeh berish',
        'Qisqa pauza qilib, hissiy reaksiyani nazorat qilish va vaziyatni aniqlashtirish',
        'Xodimni darhol lavozimidan chetlatish',
        'Muammoni butunlay e’tiborsiz qoldirish',
      ],
      1,
      'Rahbar avvalo o‘z hissiy reaksiyasini boshqarib, keyin vaziyatni xolis tahlil qilishi kerak.',
    ),

    q(
      'm1t3c02',
      'Maktabda ikki xodim bir xil natijaga turli usul bilan erishdi. Ulardan biri direktor qo‘llaydigan usulni, ikkinchisi esa o‘zining samarali usulini tanladi. Rahbarning eng to‘g‘ri qarori qaysi?',
      [
        'Faqat direktor usulini majburiy qilish',
        'Turli usullarga yo‘l qo‘yib, natijani umumiy mezon asosida baholash',
        'Ikkinchi xodimni intizomiy jazolash',
        'Barcha ijro usullarini standartlashtirib, tashabbusni cheklash',
      ],
      1,
      'Muhim jihat — yagona natija mezoni; unga olib boruvchi samarali usullar esa turlicha bo‘lishi mumkin.',
    ),

    q(
      'm1t3c03',
      'Direktor o‘zini adolatli deb hisoblaydi. Biroq xodimlar ayrim ustuvor vazifalar tanish-bilishchilik asosida berilayotganini aytmoqda. Eng kuchli diagnostik qadam qaysi?',
      [
        'Xodimlarning e’tirozlarini rad etish',
        'Vazifalar taqsimoti mezonlarini ochiqlash va xodimlardan tizimli qayta aloqa olish',
        'Barcha vazifalarni faqat direktorning o‘zi taqsimlashi',
        'Tanqid bildirgan xodimlarni ogohlantirish',
      ],
      1,
      'Adolat haqidagi tasavvurni shaffof mezonlar va qayta aloqa orqali tekshirish kerak.',
    ),

    q(
      'm1t3c04',
      'Yangi direktor juda faol va tezkor. Dastlab natijalar oshdi, keyinchalik xodimlar “rahbar bizni tinglamaydi” deb shikoyat qila boshladi. Eng maqbul rivojlanish yo‘nalishi qaysi?',
      [
        'Tezkorlikni saqlagan holda tinglash va maslahat mexanizmini kuchaytirish',
        'Barcha qarorlarni xodimlarga topshirish',
        'Tezkorlikni butunlay to‘xtatish',
        'Faqat yozma buyruqlar bilan ishlash',
      ],
      0,
      'Rahbar o‘zining kuchli tezkorligini saqlashi, biroq empatik tinglash va jamoaviy fikrni kuchaytirishi kerak.',
    ),

    q(
      'm1t3c05',
      'Direktor bir xodimni “sust” deb baholadi. Tahlilda esa xodim faqat yangi elektron tizim bilan ishlashda qiynalayotgani aniqlandi. Rahbar qanday xulosa chiqarishi kerak?',
      [
        'Xodimning umumiy qobiliyati past',
        'Muayyan kompetensiya bo‘yicha qo‘llab-quvvatlash zarur',
        'Xodimni boshqa lavozimga o‘tkazish kerak',
        'Muammo xodimning temperamentida',
      ],
      1,
      'Aniq muammoni umumiy shaxsiy sifat bilan tenglashtirmasdan, zarur kompetensiyani rivojlantirish kerak.',
    ),

    q(
      'm1t3c06',
      'Maktabda xodimlar rahbarga muammolar haqida xabar berishdan qo‘rqadi. Natijada muammolar faqat jiddiylashgandan keyin aniqlanmoqda. Qaysi boshqaruv muhitini rivojlantirish kerak?',
      [
        'Qattiq intizom muhitini',
        'Psixologik xavfsizlik va ochiq qayta aloqa muhitini',
        'Faqat yozma hisobot muhitini',
        'Raqobat muhitini',
      ],
      1,
      'Muammolarni erta aniqlash uchun xodimlar fikr va xavotirlarini xavfsiz bildira olishi kerak.',
    ),

    q(
      'm1t3c07',
      'Direktor xodimga “Siz mas’uliyatsizsiz” dedi. Keyin xodim himoyalanib, suhbatni davom ettirmadi. Qaysi o‘zgarish eng to‘g‘ri?',
      [
        '“Siz doim shunday qilasiz” deb kuchaytirish',
        'Aniq vaziyat va xatti-harakatni ko‘rsatib, kutilgan natijani tushuntirish',
        'Suhbatni jamoa oldida davom ettirish',
        'Xodimni boshqa vazifaga o‘tkazish',
      ],
      1,
      'Shaxsga yorliq qo‘yish o‘rniga kuzatilgan xatti-harakatni muhokama qilish konstruktivroq.',
    ),

    q(
      'm1t3c08',
      'Flegmatik direktor strategik masalalarda puxta qaror qiladi, ammo favqulodda vaziyatlarda qarorlar kechikadi. Eng maqbul tizimli yechim qaysi?',
      [
        'Barcha qarorlarni boshqalarga topshirish',
        'Favqulodda holatlar uchun oldindan belgilangan qaror protokollarini ishlab chiqish',
        'Rahbarni doimiy bosim ostida ushlash',
        'Strategik tahlilni ham qisqartirish',
      ],
      1,
      'Oldindan tayyorlangan protokol vazmin rahbarning kuchli tahlilini saqlab, favqulodda vaziyatlarda tezkorlikni oshiradi.',
    ),

    q(
      'm1t3c09',
      'Sangvinik direktor jamoada ijobiy muhit yaratdi. Biroq ayrim muammolarni “hammasi yaxshi bo‘ladi” deb kechiktirmoqda. Qaysi mexanizm eng to‘g‘ri?',
      [
        'Optimistik uslubni butunlay bekor qilish',
        'Ijobiy muhitni saqlagan holda muammolar uchun aniq indikator va muddatlar belgilash',
        'Muammolarni boshqa xodimga topshirish',
        'Faqat salbiy ma’lumotlarni muhokama qilish',
      ],
      1,
      'Optimizmni daliliy monitoring va aniq muddatlar bilan muvozanatlash uning zaif tomonini kompensatsiya qiladi.',
    ),

    q(
      'm1t3c10',
      'Maktab rahbari barcha vazifalarni o‘zi bajarib, xodimlarga vakolat bermaydi. Bir necha oy o‘tib jamoa tashabbusi pasaydi. Eng to‘g‘ri strategik yechim qaysi?',
      [
        'Nazoratni yanada kuchaytirish',
        'Delegatsiya, aniq mas’uliyat va natija mezonlarini joriy etish',
        'Xodimlarni tez-tez tanqid qilish',
        'Barcha qarorlarni faqat direktor qabul qilishda davom etish',
      ],
      1,
      'Delegatsiya xodimlarning mustaqilligi va mas’uliyatini rivojlantiradi, nazorat esa natija mezonlari orqali saqlanadi.',
    ),
  ],
}
