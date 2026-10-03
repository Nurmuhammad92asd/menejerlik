import type { Question } from '../quiz-data'

export const M1T4_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  easy: [
    {
      id: 'm1t4e01',
      text: 'Korrupsiya ta’lim sohasiga qanday ta’sir ko‘rsatishi mumkin?',
      options: [
        'Ta’lim sifati va ijtimoiy ishonchni pasaytirishi mumkin',
        'Faqat dars vaqtini uzaytiradi',
        'Faqat o‘quvchilar sonini oshiradi',
        'Ta’lim sifatiga ta’sir qilmaydi',
      ],
      answer: 0,
      explanation:
        'Korrupsiya mablag‘larning noto‘g‘ri sarflanishi bilan birga ta’lim sifati va jamiyat ishonchiga ham salbiy ta’sir ko‘rsatadi.',
    },
    {
      id: 'm1t4e02',
      text: 'Maktabgacha va maktab ta’limi vazirligining 2023-yil 27-iyundagi 196-sonli buyrug‘ining asosiy yo‘nalishlaridan biri nima?',
      options: [
        'Korrupsiyaga qarshi ichki idoraviy hujjatlarni tasdiqlash',
        'Faqat dars jadvalini tasdiqlash',
        'Faqat o‘quvchilar formasini belgilash',
        'Faqat ta’til muddatini belgilash',
      ],
      answer: 0,
      explanation:
        '196-sonli buyruq tizimdagi bo‘linmalar va muassasalar uchun korrupsiyaga qarshi ichki idoraviy hujjatlarni tasdiqlashga qaratilgan.',
    },
    {
      id: 'm1t4e03',
      text: 'Korrupsiyaga qarshi boshqaruvning asosiy maqsadlaridan biri qaysi?',
      options: [
        'Korrupsiyaviy xavflarning oldini olish',
        'Nazoratni butunlay bekor qilish',
        'Faqat jazolashni kuchaytirish',
        'Hujjatlar sonini ko‘paytirish',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi tizimning muhim maqsadi korrupsiyaviy xavflarning oldini olishdir.',
    },
    {
      id: 'm1t4e04',
      text: 'Manfaatlar to‘qnashuvini nazorat qilish nima uchun muhim?',
      options: [
        'Shaxsiy manfaatning xizmat manfaatiga noqonuniy ta’sirini kamaytirish uchun',
        'Xodimlar sonini kamaytirish uchun',
        'Darslarni qisqartirish uchun',
        'Faqat moliyaviy hisobot tuzish uchun',
      ],
      answer: 0,
      explanation:
        'Manfaatlar to‘qnashuvini nazorat qilish shaxsiy manfaatning xizmat vazifalariga noqonuniy ta’sir ko‘rsatishining oldini olishga xizmat qiladi.',
    },
    {
      id: 'm1t4e05',
      text: 'ISO 37001:2016 nimaga oid xalqaro standart?',
      options: [
        'Korrupsiyaga qarshi boshqaruv tizimiga',
        'Ta’lim dasturlariga',
        'Mehnat ta’tiliga',
        'Dars jadvaliga',
      ],
      answer: 0,
      explanation:
        'ISO 37001:2016 korrupsiyaga qarshi boshqaruv tizimiga oid xalqaro standart sifatida berilgan.',
    },
    {
      id: 'm1t4e06',
      text: 'Raqamlashtirish korrupsiyaga qarshi kurashda qanday vosita hisoblanadi?',
      options: [
        'Samarali vositalardan biri',
        'Keraksiz vosita',
        'Faqat o‘quvchilar uchun vosita',
        'Faqat reklama vositasi',
      ],
      answer: 0,
      explanation:
        'Materialda raqamlashtirish korrupsiyaga qarshi kurashning eng samarali vositalaridan biri sifatida ko‘rsatilgan.',
    },
    {
      id: 'm1t4e07',
      text: 'Quyidagilardan qaysi biri elektron tizimga ko‘chirilishi mumkin bo‘lgan jarayon?',
      options: [
        'O‘quvchilarni qabul qilish va ro‘yxatdan o‘tkazish',
        'Faqat sinf xonasini bezash',
        'Faqat sport mashg‘uloti',
        'Faqat tanaffus',
      ],
      answer: 0,
      explanation:
        'O‘quvchilarni qabul qilish va ro‘yxatdan o‘tkazish elektron tizimga o‘tkazilishi mumkin bo‘lgan jarayonlardan biridir.',
    },
    {
      id: 'm1t4e08',
      text: 'O‘qituvchilarni ishga olishda elektron test tizimidan foydalanishning maqsadi nima?',
      options: [
        'Shaffoflikni oshirish',
        'Tanlovni yashirish',
        'Shaxsiy manfaatni oshirish',
        'Nazoratni kamaytirish',
      ],
      answer: 0,
      explanation:
        'Elektron test tizimi ishga qabul qilish jarayonida ochiqlik va shaffoflikni kuchaytiradi.',
    },
    {
      id: 'm1t4e09',
      text: 'Moliyaviy faoliyat ustidan nazoratning asosiy maqsadi nima?',
      options: [
        'Mablag‘lardan to‘g‘ri va shaffof foydalanishni ta’minlash',
        'Mablag‘lardan foydalanishni yashirish',
        'Xaridlarni nazoratsiz qoldirish',
        'Hisobotlarni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Moliyaviy nazorat mablag‘lardan to‘g‘ri foydalanish va korrupsiyaviy xatti-harakatlarning oldini olishga xizmat qiladi.',
    },
    {
      id: 'm1t4e10',
      text: 'Ota-onalar va jamoatchilik ishtiroki qanday natijaga yordam beradi?',
      options: [
        'Tizimning shaffof va hisobdor bo‘lishiga',
        'Nazoratning yo‘qolishiga',
        'Yopiq boshqaruvga',
        'Faqat hujjatlar ko‘payishiga',
      ],
      answer: 0,
      explanation:
        'Jamoatchilik va ota-onalar ishtiroki maktab faoliyatining shaffofligi va hisobdorligini oshiradi.',
    },
    {
      id: 'm1t4e11',
      text: 'Proaktiv yondashuv nimaga qaratilgan?',
      options: [
        'Korrupsiyaning oldini olish va profilaktikaga',
        'Faqat sodir bo‘lgandan keyin jazolashga',
        'Muammolarni yashirishga',
        'Nazoratni bekor qilishga',
      ],
      answer: 0,
      explanation:
        'Proaktiv yondashuv korrupsiyani sodir bo‘lishidan oldin aniqlash va oldini olishga qaratilgan.',
    },
    {
      id: 'm1t4e12',
      text: '“Halollik vaksinasi” nima?',
      options: [
        'Halollik va axloqiy mas’uliyatni shakllantirishga qaratilgan tizimli pedagogik yondashuv',
        'Tibbiy emlash turi',
        'Faqat huquqiy hujjat',
        'Faqat nazorat shakli',
      ],
      answer: 0,
      explanation:
        '“Halollik vaksinasi” o‘quvchi, o‘qituvchi va rahbariyatda halollik, mas’uliyat va axloqiy qaror qabul qilish ko‘nikmalarini rivojlantirishga qaratilgan.',
    },
    {
      id: 'm1t4e13',
      text: '“Halollik vaksinasi”ning asosiy maqsadlaridan biri qaysi?',
      options: [
        'O‘quvchilarda halollik, adolat va mas’uliyat tuyg‘ularini shakllantirish',
        'Faqat baholarni oshirish',
        'Faqat intizomiy jazo berish',
        'Faqat nazoratni kuchaytirish',
      ],
      answer: 0,
      explanation:
        'Halollik vaksinasi halollik, adolat va mas’uliyat tuyg‘ularini shakllantirishga qaratilgan.',
    },
    {
      id: 'm1t4e14',
      text: '“Halollik daqiqasi” qanday tashkil etilishi mumkin?',
      options: [
        'Har bir sinfda haftalik tarzda',
        'Faqat yil oxirida',
        'Faqat direktor xonasida',
        'Faqat imtihon paytida',
      ],
      answer: 0,
      explanation:
        'Materialda har bir sinfda haftalik “Halollik daqiqasi” tashkil etish tavsiya qilingan.',
    },
    {
      id: 'm1t4e15',
      text: 'Axloqiy ta’lim integratsiyasida qaysi tushunchalar muntazam yoritiladi?',
      options: [
        'Halollik, adolat va mas’uliyat',
        'Faqat matematika',
        'Faqat moliya',
        'Faqat texnologiya',
      ],
      answer: 0,
      explanation:
        'Axloqiy ta’lim integratsiyasida halollik, adolat va mas’uliyat tushunchalari muntazam kiritiladi.',
    },
    {
      id: 'm1t4e16',
      text: 'Shaxsiy namuna va liderlik yo‘nalishida kimlar halollikni o‘z xatti-harakatida namoyish etishi kerak?',
      options: [
        'O‘qituvchilar va maktab rahbarlari',
        'Faqat o‘quvchilar',
        'Faqat ota-onalar',
        'Faqat texnik xodimlar',
      ],
      answer: 0,
      explanation:
        'O‘qituvchilar va maktab rahbarlari o‘z xatti-harakati bilan halollikni namoyish etishi kerak.',
    },
    {
      id: 'm1t4e17',
      text: '“Halollik loyihasi” kimlar bilan hamkorlikda ishlab chiqilishi mumkin?',
      options: [
        'Ota-onalar bilan',
        'Faqat o‘quvchilar bilan',
        'Faqat direktor bilan',
        'Faqat nazorat organlari bilan',
      ],
      answer: 0,
      explanation:
        'Materialda ota-onalar bilan hamkorlikda “Halollik loyihasi” ishlab chiqish ko‘rsatilgan.',
    },
    {
      id: 'm1t4e18',
      text: 'Halollikni monitoring qilishda nima aniqlanadi?',
      options: [
        'Halollik ko‘rsatkichlari',
        'Faqat o‘quvchilar soni',
        'Faqat o‘qituvchi ish haqi',
        'Faqat dars davomati',
      ],
      answer: 0,
      explanation:
        'Tizimli monitoring orqali sinf va maktab darajasida halollik ko‘rsatkichlarini aniqlash mumkin.',
    },
    {
      id: 'm1t4e19',
      text: 'Maktablarda moliyaviy korrupsiyaga misol qaysi?',
      options: [
        'O‘quvchilarni majburiy to‘lov evaziga qo‘shimcha mashg‘ulotlarga jalb qilish',
        'Bepul dars tashkil etish',
        'Elektron hisobot yuritish',
        'Ota-onalar bilan uchrashuv o‘tkazish',
      ],
      answer: 0,
      explanation:
        'Materialda majburiy to‘lov evaziga qo‘shimcha mashg‘ulotlarga jalb qilish moliyaviy korrupsion holat sifatida ko‘rsatilgan.',
    },
    {
      id: 'm1t4e20',
      text: 'Kadrlar bilan bog‘liq korrupsiyaga qaysi holat misol bo‘ladi?',
      options: [
        'Tanish-bilish orqali ishga qabul qilishda ustunlik berish',
        'Ochiq tanlov o‘tkazish',
        'Elektron testdan foydalanish',
        'Baholash mezonlarini e’lon qilish',
      ],
      answer: 0,
      explanation:
        'Tanish-bilish orqali ustunlik berish kadrlar bilan bog‘liq korrupsion holatlardan biridir.',
    },
    {
      id: 'm1t4e21',
      text: 'Baholash va imtihonlardagi korrupsiyaga qaysi holat kiradi?',
      options: [
        'O‘quvchiga adolatsiz ustunlik berish',
        'Bir xil mezonda baholash',
        'Ochiq test o‘tkazish',
        'Natijalarni shaffof e’lon qilish',
      ],
      answer: 0,
      explanation:
        'O‘quvchilarga baholashda adolatsiz ustunlik berish korrupsion holat hisoblanadi.',
    },
    {
      id: 'm1t4e22',
      text: 'Moliyaviy omillardan biri qaysi?',
      options: [
        'Moliyaviy nazoratning zaifligi',
        'Shaffof tanlov',
        'Elektron monitoring',
        'Ochiq hisobot',
      ],
      answer: 0,
      explanation:
        'Moliyaviy nazoratning zaifligi korrupsion xavflarni keltirib chiqaruvchi moliyaviy omillardan biridir.',
    },
    {
      id: 'm1t4e23',
      text: 'Tashkiliy omillardan biri qaysi?',
      options: [
        'Qaror qabul qilishda shaffoflikning yetishmasligi',
        'Elektron nazorat',
        'Ochiq tanlov',
        'Jamoatchilik ishtiroki',
      ],
      answer: 0,
      explanation:
        'Qaror qabul qilish jarayonida shaffoflikning yetishmasligi tashkiliy xavf omilidir.',
    },
    {
      id: 'm1t4e24',
      text: 'Axloqiy va ijtimoiy omillardan biri qaysi?',
      options: [
        'Korrupsiyani normal holat deb qabul qilish',
        'Halollikni targ‘ib qilish',
        'Axloqiy tarbiyani kuchaytirish',
        'Ochiq monitoring',
      ],
      answer: 0,
      explanation:
        'Korrupsiyani normal holat deb qabul qilish axloqiy va ijtimoiy xavf omillaridan biridir.',
    },
    {
      id: 'm1t4e25',
      text: 'Psixologik omillardan biri qaysi?',
      options: [
        'Shaxsiy manfaatni jamiyat manfaatidan ustun qo‘yish',
        'Adolatli qaror qabul qilish',
        'Halollikni targ‘ib qilish',
        'Ochiq monitoring',
      ],
      answer: 0,
      explanation:
        'Shaxsiy manfaatni jamiyat yoki maktab manfaatidan ustun qo‘yish psixologik xavf omili hisoblanadi.',
    },
    {
      id: 'm1t4e26',
      text: 'Korrupsiyaviy xavflarni aniqlashda rahbarning asosiy vazifasi nima?',
      options: [
        'Korrupsiyaga moyil jarayon va funksiyalarni tahlil qilish',
        'Muammolarni yashirish',
        'Nazoratni bekor qilish',
        'Faqat jazolash',
      ],
      answer: 0,
      explanation:
        'Rahbar korrupsiyaga moyil vazifalar, funksiyalar va jarayonlarni tahlil qilishi kerak.',
    },
    {
      id: 'm1t4e27',
      text: 'Rahbar aniqlangan xavflarga nisbatan nima ishlab chiqishi kerak?',
      options: [
        'Tizimli chora-tadbirlar va dasturlar',
        'Faqat ogohlantirish',
        'Faqat og‘zaki topshiriq',
        'Hech qanday chora emas',
      ],
      answer: 0,
      explanation:
        'Aniqlangan korrupsiyaviy xavflarni bartaraf etish uchun tizimli dastur va chora-tadbirlar ishlab chiqiladi.',
    },
    {
      id: 'm1t4e28',
      text: 'Xodimlarni korrupsiyaga qarshi o‘qitishda nimalar o‘rgatiladi?',
      options: [
        'Korrupsiya qonunchiligi, axloqiy kodekslar va xavflarni aniqlash usullari',
        'Faqat kompyuter dasturlari',
        'Faqat dars metodikasi',
        'Faqat hujjatlarni tikish',
      ],
      answer: 0,
      explanation:
        'Xodimlar korrupsiya qonunchiligi, axloqiy kodekslar va xavflarni aniqlash usullari bo‘yicha muntazam o‘qitilishi kerak.',
    },
    {
      id: 'm1t4e29',
      text: 'Korrupsiyaga qarshi monitoringda nima yuritilishi mumkin?',
      options: [
        'Korrupsiyaga moyil munosabatlar reyestri',
        'Faqat davomat daftari',
        'Faqat sinf jurnali',
        'Faqat dars jadvali',
      ],
      answer: 0,
      explanation:
        'Materialda shaffoflikni ta’minlash va korrupsiyaga moyil munosabatlar reyestrini yuritish ko‘rsatilgan.',
    },
    {
      id: 'm1t4e30',
      text: 'Korrupsiya holati aniqlanganda rahbar nima qilishi kerak?',
      options: [
        'Darhol tegishli chora ko‘rishi',
        'Holatni yashirishi',
        'Muammoni keyinga qoldirishi',
        'Faqat og‘zaki gapirishi',
      ],
      answer: 0,
      explanation:
        'Korrupsiya holati aniqlanganda tegishli qonuniy choralar ko‘rilishi va profilaktik choralar kuchaytirilishi kerak.',
    },
  ],

  medium: [
    {
      id: 'm1t4m01',
      text: 'Korrupsiyaga qarshi kurashda raqamlashtirishning asosiy afzalligi nimada?',
      options: [
        'Jarayonlarning shaffofligi va kuzatuvchanligini oshirishda',
        'Inson nazoratini butunlay bekor qilishda',
        'Faqat hujjatlarni ko‘paytirishda',
        'Faqat ish vaqtini qisqartirishda',
      ],
      answer: 0,
      explanation:
        'Raqamlashtirish jarayonlarni kuzatish, hujjatlashtirish va shaffoflikni oshirish orqali korrupsion xavflarni kamaytiradi.',
    },
    {
      id: 'm1t4m02',
      text: 'Elektron qabul tizimi korrupsion xavfni qanday kamaytiradi?',
      options: [
        'Ro‘yxatni manipulyatsiya qilish va pul talab qilish imkoniyatlarini kamaytiradi',
        'Ota-onalarni jarayondan chiqarib tashlaydi',
        'Qabulni butunlay bekor qiladi',
        'Faqat qog‘oz hujjatlarni ko‘paytiradi',
      ],
      answer: 0,
      explanation:
        'Elektron ariza tizimi qabul jarayonini shaffoflashtirib, shaxsiy manfaat uchun ro‘yxatni manipulyatsiya qilish imkoniyatini kamaytiradi.',
    },
    {
      id: 'm1t4m03',
      text: 'Kadrlarni tanlashda komissiya qarorlari va baholarining elektron platformada saqlanishi nimani kuchaytiradi?',
      options: [
        'Ochiqlik va hisobdorlikni',
        'Yashirin qarorlarni',
        'Subyektivlikni',
        'Norasmiy kelishuvlarni',
      ],
      answer: 0,
      explanation:
        'Elektron saqlash qarorlar va baholarning izini qoldirib, jarayonning hisobdorligini oshiradi.',
    },
    {
      id: 'm1t4m04',
      text: 'Kadrlar tanlovida baholash mezonlarining ochiqligi qanday xavfni kamaytiradi?',
      options: [
        'Subyektiv va korrupsion qarorlar xavfini',
        'Ochiq raqobatni',
        'Malakali kadrlarni',
        'Jamoatchilik ishtirokini',
      ],
      answer: 0,
      explanation:
        'Ochiq mezonlar barcha nomzodlar uchun teng sharoit yaratishga va subyektiv qarorlar xavfini kamaytirishga yordam beradi.',
    },
    {
      id: 'm1t4m05',
      text: 'Elektron tender tizimining korrupsiyaga qarshi ahamiyati nimada?',
      options: [
        'Xarid jarayonining shaffofligini oshirishda',
        'Xaridlarni yashirishda',
        'Faqat xarajatlarni ko‘paytirishda',
        'Nazoratni kamaytirishda',
      ],
      answer: 0,
      explanation:
        'Elektron tender xarid jarayonini kuzatish va shaffofligini oshirishga xizmat qiladi.',
    },
    {
      id: 'm1t4m06',
      text: 'Muntazam auditning vazifasi nimaga yaqin?',
      options: [
        'Moliyaviy mablag‘lardan foydalanishni nazorat qilish',
        'O‘quvchilarni jazolash',
        'Dars jadvalini tuzish',
        'O‘qituvchi malakasini avtomatik oshirish',
      ],
      answer: 0,
      explanation:
        'Audit moliyaviy mablag‘lar va hisobotlarning to‘g‘riligini nazorat qilish mexanizmlaridan biridir.',
    },
    {
      id: 'm1t4m07',
      text: 'Har bir xarajatning elektron izohli hujjat bilan tasdiqlanishi nimaga xizmat qiladi?',
      options: [
        'Mablag‘lar harakatining kuzatilishiga',
        'Xarajatlarni yashirishga',
        'Nazoratni bekor qilishga',
        'Norasmiy to‘lovlarni ko‘paytirishga',
      ],
      answer: 0,
      explanation:
        'Elektron tasdiqlovchi hujjatlar xarajatlarning izini saqlash va ularni nazorat qilish imkonini beradi.',
    },
    {
      id: 'm1t4m08',
      text: 'Ota-onalar qo‘mitasining byudjet va xarid jarayonini kuzatishi qaysi tamoyilni kuchaytiradi?',
      options: [
        'Jamoatchilik nazorati',
        'Yopiq boshqaruv',
        'Shaxsiy manfaat',
        'Norasmiy boshqaruv',
      ],
      answer: 0,
      explanation:
        'Ota-onalar ishtiroki jamoatchilik nazoratini va hisobdorlikni kuchaytiradi.',
    },
    {
      id: 'm1t4m09',
      text: 'Reaktiv choradan proaktiv tizimga o‘tish nimani anglatadi?',
      options: [
        'Korrupsiya sodir bo‘lishidan oldin xavflarni aniqlash va oldini olish',
        'Faqat jazoni kuchaytirish',
        'Korrupsiya haqida gapirmaslik',
        'Nazoratni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Proaktiv tizim xavfni oldindan aniqlash, profilaktika va tizimli nazoratga asoslanadi.',
    },
    {
      id: 'm1t4m10',
      text: '“Halollik vaksinasi”ning “axloqiy immunitet” g‘oyasi nimani anglatadi?',
      options: [
        'Shaxsni halol va mas’uliyatli qaror qabul qilishga tayyorlashni',
        'Jismoniy immunitetni kuchaytirishni',
        'Faqat jazodan qo‘rqishni',
        'Faqat qonunlarni yodlashni',
      ],
      answer: 0,
      explanation:
        'Halollik vaksinasi shaxsda korrupsiyaga qarshi axloqiy immunitet va mas’uliyatli qaror qabul qilish ko‘nikmalarini shakllantirishga qaratilgan.',
    },
    {
      id: 'm1t4m11',
      text: '“Halollik daqiqasi”da real vaziyatlardan foydalanishdan maqsad nima?',
      options: [
        'O‘quvchilarda axloqiy qaror qabul qilish ko‘nikmasini rivojlantirish',
        'Faqat vaqtni to‘ldirish',
        'Faqat baho qo‘yish',
        'Faqat nazorat qilish',
      ],
      answer: 0,
      explanation:
        'Real vaziyatlar o‘quvchilarga halollik va adolat tamoyillarini amaliy qarorlarda qo‘llashni o‘rgatadi.',
    },
    {
      id: 'm1t4m12',
      text: 'Rol o‘yinlari va diskussiyalar “Halollik vaksinasi”ning qaysi yo‘nalishiga mos?',
      options: [
        'Axloqiy ta’lim integratsiyasiga',
        'Moliyaviy auditga',
        'Kadrlar tanloviga',
        'Tashqi nazoratga',
      ],
      answer: 0,
      explanation:
        'Rol o‘yinlari va diskussiyalar axloqiy ta’limni amaliy va interaktiv tarzda tashkil etishga yordam beradi.',
    },
    {
      id: 'm1t4m13',
      text: '“Halollik yetakchisi” rolini o‘quvchilarga berishdan maqsad nima?',
      options: [
        'Ularni kichik qarorlar va loyihalarda mas’uliyatli boshqaruvga jalb qilish',
        'Ularni jazolash',
        'Faqat baho qo‘yish',
        'O‘qituvchi vazifasini to‘liq topshirish',
      ],
      answer: 0,
      explanation:
        '“Halollik yetakchisi” o‘quvchilarning mas’uliyat, liderlik va halollik tamoyillarini amaliyotda qo‘llashiga yordam beradi.',
    },
    {
      id: 'm1t4m14',
      text: 'Maktabdagi kichik moliyaviy yoki ijtimoiy qarorlarni o‘quvchilar bilan birgalikda muhokama qilish qanday ko‘nikmani rivojlantiradi?',
      options: [
        'Mas’uliyatli va halol qaror qabul qilishni',
        'Yashirin boshqaruvni',
        'Shaxsiy manfaatni',
        'Nazoratdan qochishni',
      ],
      answer: 0,
      explanation:
        'Jamoaviy loyihalar o‘quvchilarning mas’uliyatli, adolatli va halol qarorlar qabul qilish ko‘nikmasini rivojlantiradi.',
    },
    {
      id: 'm1t4m15',
      text: 'Korrupsiyani normal holat deb qabul qilish qanday omil hisoblanadi?',
      options: [
        'Axloqiy va ijtimoiy omil',
        'Faqat moliyaviy omil',
        'Faqat texnik omil',
        'Faqat tabiiy omil',
      ],
      answer: 0,
      explanation:
        'Korrupsiyani odatiy hol deb qabul qilish axloqiy va ijtimoiy xavf omillaridan biridir.',
    },
    {
      id: 'm1t4m16',
      text: 'Ichki reglament va nazorat mexanizmlarining samarali ishlamasligi qaysi turdagi omil?',
      options: [
        'Tashkiliy omil',
        'Psixologik omil',
        'Tabiiy omil',
        'Biologik omil',
      ],
      answer: 0,
      explanation:
        'Ichki reglament va nazorat mexanizmlarining zaifligi tashkiliy omil sifatida ko‘rsatilgan.',
    },
    {
      id: 'm1t4m17',
      text: 'Shaxsiy moliyaviy manfaatni ustun qo‘yish qaysi omil bilan bog‘liq?',
      options: [
        'Moliyaviy-iqtisodiy omil',
        'Pedagogik omil',
        'Texnik omil',
        'Tabiiy omil',
      ],
      answer: 0,
      explanation:
        'Shaxsiy moliyaviy manfaatni ustun qo‘yish moliyaviy-iqtisodiy xavf omillari tarkibida berilgan.',
    },
    {
      id: 'm1t4m18',
      text: 'Adolatsiz rag‘bat va tanlov tizimi qaysi xavf omiliga kiradi?',
      options: [
        'Psixologik omil',
        'Tabiiy omil',
        'Texnik omil',
        'Faqat moliyaviy omil',
      ],
      answer: 0,
      explanation:
        'Adolatsiz rag‘bat va tanlov tizimi psixologik omillar qatorida keltirilgan.',
    },
    {
      id: 'm1t4m19',
      text: 'Ota-onalar va jamiyatning maktabdagi xatti-harakatlarga beparvoligi qaysi omil?',
      options: [
        'Axloqiy va ijtimoiy omil',
        'Moliyaviy omil',
        'Texnik omil',
        'Tabiiy omil',
      ],
      answer: 0,
      explanation:
        'Ota-onalar va jamiyatning beparvoligi axloqiy va ijtimoiy xavf omili hisoblanadi.',
    },
    {
      id: 'm1t4m20',
      text: 'Rahbar korrupsiyaviy xavflarni baholashda avvalo nimani tahlil qiladi?',
      options: [
        'Korrupsiyaga moyil vazifa, funksiya va jarayonlarni',
        'Faqat xodimlarning shaxsiy hayotini',
        'Faqat o‘quvchilar baholarini',
        'Faqat dars jadvalini',
      ],
      answer: 0,
      explanation:
        'Xavflarni baholash tashkilotdagi korrupsiyaga moyil vazifa, funksiya va jarayonlarni tahlil qilishni anglatadi.',
    },
    {
      id: 'm1t4m21',
      text: 'Aniqlangan korrupsiyaviy xavflar bo‘yicha dastur ishlab chiqish nima uchun kerak?',
      options: [
        'Xavflarni tizimli ravishda kamaytirish va bartaraf etish uchun',
        'Faqat hujjat sonini ko‘paytirish uchun',
        'Muammolarni yashirish uchun',
        'Nazoratni bekor qilish uchun',
      ],
      answer: 0,
      explanation:
        'Tizimli dastur xavflarni faqat bir martalik emas, doimiy va rejalashtirilgan tarzda kamaytirishga yordam beradi.',
    },
    {
      id: 'm1t4m22',
      text: 'Xodimlarni muntazam o‘qitish korrupsiyaga qarshi tizimda qanday vazifa bajaradi?',
      options: [
        'Xodimlarning huquqiy va axloqiy xabardorligini oshiradi',
        'Nazoratni yo‘q qiladi',
        'Faqat ish vaqtini ko‘paytiradi',
        'Faqat hisobot sonini oshiradi',
      ],
      answer: 0,
      explanation:
        'Muntazam o‘qitish xodimlarning qonunchilik, axloqiy kodeks va xavflarni aniqlash bo‘yicha bilimini oshiradi.',
    },
    {
      id: 'm1t4m23',
      text: 'Korrupsiyaga moyil munosabatlar reyestri nimaga yordam beradi?',
      options: [
        'Xavfli munosabatlarni kuzatish va monitoring qilishga',
        'Xodimlarni yashirishga',
        'Nazoratni bekor qilishga',
        'Faqat ish haqi hisoblashga',
      ],
      answer: 0,
      explanation:
        'Reyestr korrupsiyaga moyil munosabatlarni tizimli kuzatish va monitoring qilish imkonini beradi.',
    },
    {
      id: 'm1t4m24',
      text: 'Korrupsiya holatlari aniqlanganda rahbarning vazifasi nima?',
      options: [
        'Tegishli qonuniy chora ko‘rish va profilaktikani kuchaytirish',
        'Holatni yashirish',
        'Faqat xodimni ogohlantirish',
        'Muammoni keyingi yilga qoldirish',
      ],
      answer: 0,
      explanation:
        'Rahbar aniqlangan holat bo‘yicha tegishli chorani ko‘rishi va kelgusida takrorlanishining oldini olish choralarini kuchaytirishi kerak.',
    },
    {
      id: 'm1t4m25',
      text: 'Jamoat ishonchini mustahkamlashda korrupsiyaga qarshi kurashning qanday ahamiyati bor?',
      options: [
        'Shaffof va hisobdor boshqaruvga ishonchni oshiradi',
        'Ishonchni kamaytiradi',
        'Faqat hujjatlarni ko‘paytiradi',
        'Faqat jazolar sonini oshiradi',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi kurash jamiyatning davlat va ta’lim tizimiga bo‘lgan ishonchini mustahkamlashga yordam beradi.',
    },
    {
      id: 'm1t4m26',
      text: 'Ta’lim tashkilotlarining korrupsiyaga qarshi qonunlarga amal qilishi qaysi jihat bilan bog‘liq?',
      options: [
        'Huquqiy majburiyat',
        'Ixtiyoriy reklama',
        'Faqat tarbiyaviy tadbir',
        'Faqat moliyaviy reja',
      ],
      answer: 0,
      explanation:
        'Ta’lim tashkilotlari korrupsiyaga qarshi qonunchilik talablariga rioya qilishi huquqiy majburiyat hisoblanadi.',
    },
    {
      id: 'm1t4m27',
      text: 'Korrupsiyaning oldini olish tashkilot samaradorligiga qanday ta’sir qiladi?',
      options: [
        'Faoliyat samaradorligini oshirishga yordam beradi',
        'Samaradorlikni pasaytiradi',
        'Hech qanday ta’sir qilmaydi',
        'Faqat hujjatlarni ko‘paytiradi',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi samarali tizim resurslardan oqilona foydalanish va tashkilot samaradorligini oshirishga xizmat qiladi.',
    },
    {
      id: 'm1t4m28',
      text: 'Baholash va imtihonlarda shaffoflikning buzilishi qanday oqibatga olib kelishi mumkin?',
      options: [
        'Adolatsiz ustunlik va shaxsiy manfaat yuzaga kelishiga',
        'Baholashning obyektivligi oshishiga',
        'Ishonchning oshishiga',
        'Tenglikning kuchayishiga',
      ],
      answer: 0,
      explanation:
        'Baholashda shaffoflik buzilsa, shaxsiy manfaat va adolatsiz ustunlik yuzaga kelishi mumkin.',
    },
    {
      id: 'm1t4m29',
      text: 'Lavozimlarni adolatsiz taqsimlash qanday xavfni oshiradi?',
      options: [
        'Manfaatlar to‘qnashuvi va korrupsion xavfni',
        'Shaffoflikni',
        'Jamoatchilik ishonchini',
        'Adolatni',
      ],
      answer: 0,
      explanation:
        'Lavozim va resurslarni adolatsiz taqsimlash korrupsion xavflarni kuchaytirishi mumkin.',
    },
    {
      id: 'm1t4m30',
      text: 'Rahbarning korrupsiyaga qarshi faoliyatidagi eng muhim yondashuv qaysi?',
      options: [
        'Monitoring, tizimli nazorat va profilaktik choralarni birgalikda olib borish',
        'Faqat jazolash',
        'Faqat shikoyat kutish',
        'Faqat hujjatlarni tekshirish',
      ],
      answer: 0,
      explanation:
        'Rahbar faol monitoring, tizimli nazorat va barqaror profilaktik choralar orqali korrupsiyaviy xavflarni kamaytirishi kerak.',
    },
  ],

  hard: [
    {
      id: 'm1t4h01',
      text: 'Maktabda o‘qishga qabul qilish jarayonida elektron ariza tizimi joriy etildi. Buning korrupsiyaga qarshi eng muhim ta’siri qaysi?',
      options: [
        'Ro‘yxatni shaxsiy manfaat uchun manipulyatsiya qilish imkoniyatini kamaytiradi',
        'Qabul jarayonini butunlay bekor qiladi',
        'Ota-onalarni jarayondan chiqaradi',
        'Faqat qog‘oz hujjatlarni ko‘paytiradi',
      ],
      answer: 0,
      explanation:
        'Elektron ariza tizimi qabul jarayonini izchil va kuzatiladigan qilib, pul talab qilish yoki ro‘yxatni manipulyatsiya qilish imkoniyatini kamaytiradi.',
    },
    {
      id: 'm1t4h02',
      text: 'Ishga qabul qilishda elektron test natijalari saqlanadi, ammo baholash mezonlari nomzodlarga ma’lum qilinmaydi. Qaysi muammo saqlanib qolishi mumkin?',
      options: [
        'Baholash jarayonining yetarli darajada shaffof emasligi',
        'Raqamlashtirishning ortiqligi',
        'Jamoatchilik ishtirokining ko‘pligi',
        'Auditning kuchayishi',
      ],
      answer: 0,
      explanation:
        'Elektron tizimning o‘zi yetarli emas; baholash mezonlarining ochiqligi ham shaffoflik uchun muhim.',
    },
    {
      id: 'm1t4h03',
      text: 'Maktab xaridlarida elektron tender mavjud, lekin xarajatlarni tasdiqlovchi hujjatlar yuritilmaydi. Qaysi xavf saqlanib qoladi?',
      options: [
        'Mablag‘lardan foydalanishni to‘liq kuzatish qiyinlashadi',
        'Shaffoflik avtomatik ravishda to‘liq ta’minlanadi',
        'Korrupsiya xavfi butunlay yo‘qoladi',
        'Auditga ehtiyoj qolmaydi',
      ],
      answer: 0,
      explanation:
        'Elektron tender muhim vosita bo‘lsa-da, har bir xarajatning hujjat bilan tasdiqlanishi ham moliyaviy nazorat uchun zarur.',
    },
    {
      id: 'm1t4h04',
      text: 'Maktabda korrupsiyaga qarshi faqat jazolash choralari mavjud, xavflarni oldindan aniqlash tizimi yo‘q. Qaysi yondashuv yetishmayapti?',
      options: [
        'Proaktiv profilaktik yondashuv',
        'Faqat reaktiv yondashuv',
        'Moliyaviy hisobot',
        'Kadrlar tanlovi',
      ],
      answer: 0,
      explanation:
        'Materialda jazolashdan tashqari xavflarni oldindan aniqlash va profilaktika qilishga asoslangan proaktiv tizim zarurligi ta’kidlangan.',
    },
    {
      id: 'm1t4h05',
      text: 'Direktor o‘qituvchilardan biri qarindoshiga tanlovda ustunlik berish uchun baholash mezonlarini o‘zgartirdi. Qaysi xavf yuzaga kelgan?',
      options: [
        'Manfaatlar to‘qnashuvi va kadrlar tanlovidagi korrupsion xavf',
        'Faqat pedagogik xato',
        'Faqat texnik muammo',
        'Faqat dars sifati muammosi',
      ],
      answer: 0,
      explanation:
        'Shaxsiy manfaat asosida tanlov mezonlarini o‘zgartirish manfaatlar to‘qnashuvi va korrupsion xavfni yuzaga keltiradi.',
    },
    {
      id: 'm1t4h06',
      text: 'Maktabda ota-onalar qo‘mitasi xaridlar bo‘yicha ma’lumotlarni ko‘rish imkoniga ega emas. Qaysi prinsip zaiflashgan?',
      options: [
        'Jamoatchilik ishtiroki va shaffoflik',
        'Faqat pedagogik mahorat',
        'Faqat dars sifati',
        'Faqat ish haqi tizimi',
      ],
      answer: 0,
      explanation:
        'Jamoatchilikning xarid jarayonlari haqida ma’lumot olish imkoniyati shaffoflik va hisobdorlik uchun muhim.',
    },
    {
      id: 'm1t4h07',
      text: 'O‘quvchi imtihonda yuqori baho olish uchun o‘qituvchiga norasmiy to‘lov taklif qildi. Rahbarning korrupsiyaga qarshi tizimi nuqtayi nazaridan eng muhim chora nima?',
      options: [
        'Holatni tegishli tartibda aniqlash, hujjatlashtirish va qonuniy choralar ko‘rish',
        'Holatni yashirish',
        'O‘qituvchini boshqa sinfga o‘tkazish bilan cheklanish',
        'Boshqa o‘quvchilarga aytmaslik',
      ],
      answer: 0,
      explanation:
        'Korrupsion holat aniqlanganda tegishli choralar ko‘rilishi va profilaktik mexanizmlar kuchaytirilishi kerak.',
    },
    {
      id: 'm1t4h08',
      text: 'Maktabda korrupsiyani “hamma joyda bo‘ladigan oddiy holat” deb qabul qilish kuchaydi. Qaysi profilaktik yo‘nalishni kuchaytirish kerak?',
      options: [
        'Halollik, axloqiy ta’lim va shaxsiy namuna',
        'Faqat moliyaviy audit',
        'Faqat jazolash',
        'Faqat elektron hujjatlar',
      ],
      answer: 0,
      explanation:
        'Korrupsiyani normal holat sifatida qabul qilish axloqiy va ijtimoiy xavfdir. Halollik vaksinasi, shaxsiy namuna va axloqiy ta’lim buni kamaytirishga xizmat qiladi.',
    },
    {
      id: 'm1t4h09',
      text: '“Halollik vaksinasi” faqat bir martalik tadbir sifatida tashkil etildi. Material mazmuniga ko‘ra qaysi jihat yetishmayapti?',
      options: [
        'Tizimlilik va muntazamlik',
        'Faqat reklama',
        'Faqat jazolash',
        'Faqat nazorat',
      ],
      answer: 0,
      explanation:
        'Halollik vaksinasi tizimli pedagogik yondashuv bo‘lib, axloqiy ta’lim, shaxsiy namuna, loyihalar va monitoringni o‘z ichiga oladi.',
    },
    {
      id: 'm1t4h10',
      text: 'Rahbar korrupsiyaga moyil jarayonlarni aniqladi, ammo ularga qarshi hech qanday dastur ishlab chiqmadi. Qaysi mas’uliyat yo‘nalishi bajarilmagan?',
      options: [
        'Tizimli chora-tadbirlarni ishlab chiqish va amalga oshirish',
        'Faqat xodimlarni maqtash',
        'Faqat jamoatchilik bilan uchrashish',
        'Faqat dars jadvalini tuzish',
      ],
      answer: 0,
      explanation:
        'Xavfni aniqlashdan keyingi muhim bosqich — uni kamaytirish va bartaraf etishga qaratilgan tizimli chora-tadbirlarni ishlab chiqish.',
    },
    {
      id: 'm1t4h11',
      text: 'Rahbar xodimlarni korrupsiyaga qarshi qonunchilik bo‘yicha o‘qitmaydi, biroq qoidabuzarlik sodir bo‘lganda jazolaydi. Qaysi tamoyil zaif?',
      options: [
        'Profilaktik ta’lim va xabardorlik',
        'Jazo',
        'Tashqi nazorat',
        'Moliyaviy audit',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi tizim faqat jazoga emas, xodimlarni muntazam o‘qitish va profilaktikaga ham tayanishi kerak.',
    },
    {
      id: 'm1t4h12',
      text: 'Maktabda moliyaviy nazorat mavjud, ammo xodimlarning shaxsiy manfaatlari bilan bog‘liq holatlar tekshirilmaydi. Qaysi yo‘nalish kuchaytirilishi kerak?',
      options: [
        'Manfaatlar to‘qnashuvini nazorat qilish',
        'Faqat dars jadvali',
        'Faqat o‘quvchilar davomatini',
        'Faqat sport mashg‘ulotlarini',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi tizimda manfaatlar to‘qnashuvini aniqlash va nazorat qilish muhim yo‘nalishdir.',
    },
    {
      id: 'm1t4h13',
      text: 'Maktabda o‘qituvchini ishga olishda elektron test o‘tkazildi, lekin komissiya baholarini o‘zgartirish imkoniyati mavjud. Qaysi mexanizmni kuchaytirish kerak?',
      options: [
        'Elektron natijalarni himoyalash, komissiya qarorlarini qayd etish va monitoring',
        'Faqat test savollarini ko‘paytirish',
        'Faqat suhbatni bekor qilish',
        'Faqat qog‘oz hujjatlarni ko‘paytirish',
      ],
      answer: 0,
      explanation:
        'Elektron testning samarasi natijalarni himoyalash, baholarni qayd etish va jarayonni monitoring qilish bilan kuchayadi.',
    },
    {
      id: 'm1t4h14',
      text: 'Maktab rahbari korrupsion xavfni faqat sodir bo‘lgan holatdan keyin tahlil qiladi. Qaysi boshqaruv yondashuvini o‘zgartirish kerak?',
      options: [
        'Oldindan xavfni baholash va profilaktik monitoringga o‘tish',
        'Jazoni butunlay bekor qilish',
        'Nazoratni kamaytirish',
        'Hisobotlarni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Samarali korrupsiyaga qarshi boshqaruv xavfni sodir bo‘lishidan oldin aniqlash va profilaktika qilishni ham talab etadi.',
    },
    {
      id: 'm1t4h15',
      text: 'Maktabda qo‘shimcha mashg‘ulotlar faqat pul to‘lagan o‘quvchilarga ochiq qilindi va to‘lov majburiylashtirildi. Bu holat qaysi xavfga mos?',
      options: [
        'Moliyaviy korrupsiya xavfiga',
        'Faqat psixologik omilga',
        'Faqat tashkiliy yutuqqa',
        'Faqat pedagogik innovatsiyaga',
      ],
      answer: 0,
      explanation:
        'O‘quvchilarni majburiy to‘lov evaziga qo‘shimcha mashg‘ulotlarga jalb qilish materialda moliyaviy korrupsion holat sifatida berilgan.',
    },
    {
      id: 'm1t4h16',
      text: 'Maktabda lavozimlar tanish-bilish asosida taqsimlanmoqda. Qaysi islohot mexanizmi eng bevosita xavfni kamaytiradi?',
      options: [
        'Ochiq va shaffof kadrlar tanlovi',
        'Faqat og‘zaki topshiriqlar',
        'Nazoratni kamaytirish',
        'Tanlovni yopiq o‘tkazish',
      ],
      answer: 0,
      explanation:
        'Ochiq tanlov, elektron test, aniq mezonlar va komissiya qarorlarini qayd etish kadrlar korrupsiyasi xavfini kamaytiradi.',
    },
    {
      id: 'm1t4h17',
      text: 'Maktabda ota-onalar murojaatlarini faqat og‘zaki qabul qilishadi va yozma yoki elektron iz qoldirilmaydi. Qaysi xavf kuchayadi?',
      options: [
        'Hisobdorlik va murojaatlarni kuzatishning zaiflashishi',
        'Shaffoflikning kuchayishi',
        'Nazoratning yaxshilanishi',
        'Jamoatchilik ishtirokining oshishi',
      ],
      answer: 0,
      explanation:
        'Elektron yoki yozma qayd bo‘lmasa, murojaatlarning bajarilishini kuzatish va hisobdorlikni ta’minlash qiyinlashadi.',
    },
    {
      id: 'm1t4h18',
      text: 'Rahbar maktabdagi korrupsion xavflarni baholashda faqat moliyaviy operatsiyalarni tekshiradi. Qaysi yo‘nalishlar ham tahlil qilinishi kerak?',
      options: [
        'Kadrlar, baholash, qabul, qaror qabul qilish va boshqa xavfli jarayonlar',
        'Faqat sport',
        'Faqat dars jadvali',
        'Faqat kutubxona',
      ],
      answer: 0,
      explanation:
        'Korrupsion xavflar moliya bilan cheklanmaydi; kadrlar, baholash, o‘quvchilarni tanlash va qaror qabul qilish jarayonlarida ham yuzaga kelishi mumkin.',
    },
    {
      id: 'm1t4h19',
      text: 'Xodim shaxsiy manfaatini maktab manfaatidan ustun qo‘yadi. Bu qaysi omilga eng mos?',
      options: [
        'Psixologik omil',
        'Texnik omil',
        'Tabiiy omil',
        'Faqat tashqi omil',
      ],
      answer: 0,
      explanation:
        'Shaxsiy manfaatni tashkilot yoki jamiyat manfaatidan ustun qo‘yish psixologik xavf omili sifatida ko‘rsatilgan.',
    },
    {
      id: 'm1t4h20',
      text: 'Maktabda ichki nazorat tizimi bor, ammo u amalda ishlamaydi. Qaysi omil yuzaga kelmoqda?',
      options: [
        'Tashkiliy omil',
        'Faqat moliyaviy omil',
        'Faqat psixologik omil',
        'Tabiiy omil',
      ],
      answer: 0,
      explanation:
        'Ichki reglament va nazorat mexanizmlarining samarali ishlamasligi tashkiliy omil hisoblanadi.',
    },
    {
      id: 'm1t4h21',
      text: 'Maktab xodimlari korrupsiyaga qarshi qonunlarni bilmaydi. Rahbarning eng maqbul chorasi qaysi?',
      options: [
        'Muntazam o‘qitish va huquqiy-ma’rifiy tushuntirish ishlarini tashkil etish',
        'Faqat jazolash',
        'Muammoni yashirish',
        'Nazoratni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Xodimlarni qonunchilik va axloqiy kodekslar bo‘yicha muntazam o‘qitish profilaktikaning muhim qismidir.',
    },
    {
      id: 'm1t4h22',
      text: 'Maktab rahbari korrupsiyaga qarshi tizimni faqat direktorning shaxsiy nazoratiga bog‘lab qo‘ydi. Nima yetishmayapti?',
      options: [
        'Tizimli va institutsional mexanizmlar',
        'Faqat shaxsiy nazorat',
        'Faqat og‘zaki topshiriqlar',
        'Faqat jazolash',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi boshqaruv faqat bir rahbar nazoratiga emas, tizimli mexanizm, monitoring va profilaktikaga tayanishi kerak.',
    },
    {
      id: 'm1t4h23',
      text: '“Halollik vaksinasi”da o‘quvchilar faqat ma’ruza tinglaydi, real vaziyatlar muhokama qilinmaydi. Qaysi imkoniyatdan foydalanilmagan?',
      options: [
        'Amaliy axloqiy qaror qabul qilish mashqlaridan',
        'Faqat nazoratdan',
        'Faqat moliyaviy auditdan',
        'Faqat elektron testdan',
      ],
      answer: 0,
      explanation:
        'Material real vaziyatlar, rol o‘yinlari va diskussiyalar orqali axloqiy qaror qabul qilishni amaliy rivojlantirishni tavsiya qiladi.',
    },
    {
      id: 'm1t4h24',
      text: 'Maktab rahbari korrupsiya xavfi aniqlanganda faqat aybdorni jazoladi, lekin tizimdagi sababni bartaraf etmadi. Qaysi yondashuv yetishmayapti?',
      options: [
        'Profilaktik va tizimli yondashuv',
        'Faqat jazo',
        'Faqat nazorat',
        'Faqat hisobot',
      ],
      answer: 0,
      explanation:
        'Korrupsion holatga javob berish bilan birga uni keltirib chiqargan tizimli sabablarni ham bartaraf etish zarur.',
    },
    {
      id: 'm1t4h25',
      text: 'Maktab byudjeti va xaridlar bo‘yicha jamoatchilikka ma’lumot berilmaydi. Qaysi xavf kuchayishi mumkin?',
      options: [
        'Shaffoflikning pasayishi va korrupsion xavfning ortishi',
        'Hisobdorlikning kuchayishi',
        'Jamoatchilik ishonchining avtomatik oshishi',
        'Nazoratning kuchayishi',
      ],
      answer: 0,
      explanation:
        'Byudjet va xaridlar haqida ochiqlik bo‘lmasa, jamoatchilik nazorati va hisobdorlik zaiflashishi mumkin.',
    },
    {
      id: 'm1t4h26',
      text: 'Rahbar xodimlar manfaatlar to‘qnashuvini deklaratsiya qilish yoki ma’lum qilish mexanizmini yo‘lga qo‘ymagan. Qaysi yo‘nalish kuchaytirilishi kerak?',
      options: [
        'Manfaatlar to‘qnashuvini nazorat qilish',
        'Faqat baholash',
        'Faqat dars jadvali',
        'Faqat sport tadbirlari',
      ],
      answer: 0,
      explanation:
        'Manfaatlar to‘qnashuvini nazorat qilish korrupsiyaga qarshi boshqaruvning muhim yo‘nalishlaridan biridir.',
    },
    {
      id: 'm1t4h27',
      text: 'Korrupsiyaga qarshi tizimda eng samarali kombinatsiya qaysi?',
      options: [
        'Raqamlashtirish, shaffoflik, monitoring, jamoatchilik ishtiroki va profilaktika',
        'Faqat jazolash',
        'Faqat rahbar nazorati',
        'Faqat elektron hujjatlar',
      ],
      answer: 0,
      explanation:
        'Material korrupsiyaga qarshi kompleks tizim sifatida raqamlashtirish, shaffoflik, nazorat, jamoatchilik ishtiroki va profilaktikani ko‘rsatadi.',
    },
    {
      id: 'm1t4h28',
      text: 'Rahbar korrupsiyaga moyil jarayonni aniqladi, ammo xodimlarni bu xavf haqida xabardor qilmadi. Qaysi chora yetishmayapti?',
      options: [
        'Xodimlarni o‘qitish va xabardor qilish',
        'Faqat jazo',
        'Faqat audit',
        'Faqat elektron tizim',
      ],
      answer: 0,
      explanation:
        'Aniqlangan xavflar bo‘yicha xodimlarni o‘qitish va xavflarni aniqlash usullarini tushuntirish profilaktikaning muhim qismidir.',
    },
    {
      id: 'm1t4h29',
      text: 'Korrupsiyaga qarshi tizimda rahbarning shaxsiy namunasi nima uchun muhim?',
      options: [
        'Halollik va axloqiy me’yorlarni amalda namoyish etadi',
        'Faqat nazoratni kuchaytiradi',
        'Faqat hujjatlarni ko‘paytiradi',
        'Faqat jazoni kuchaytiradi',
      ],
      answer: 0,
      explanation:
        'Rahbar va o‘qituvchilarning shaxsiy namunasi halollik madaniyatini shakllantirishda muhim pedagogik vositadir.',
    },
    {
      id: 'm1t4h30',
      text: 'Maktab rahbari korrupsiyaviy xavflarni kamaytirishda qaysi ketma-ketlikka amal qilishi maqsadga muvofiq?',
      options: [
        'Xavfni aniqlash → baholash → chora ishlab chiqish → amalga oshirish → monitoring',
        'Jazolash → yashirish → unutish',
        'Faqat hisobot → jazo',
        'Muammo → beparvolik → kutish',
      ],
      answer: 0,
      explanation:
        'Samarali boshqaruvda xavfni aniqlash, baholash, unga qarshi chora ishlab chiqish, amalga oshirish va monitoring qilish tizimli yondashuvni ta’minlaydi.',
    },
  ],

  case: [
    {
      id: 'm1t4c01',
      text: 'Maktabda o‘quvchilarni qo‘shimcha mashg‘ulotga jalb qilish uchun ayrim ota-onalardan majburiy pul yig‘ilmoqda. Rahbar vaziyatni qanday baholashi kerak?',
      options: [
        'Moliyaviy korrupsion xavf sifatida ko‘rib, holatni tekshirish va tegishli choralar ko‘rish',
        'Buni oddiy maktab amaliyoti deb qabul qilish',
        'Faqat ota-onalarni ogohlantirish',
        'Holatni yashirish',
      ],
      answer: 0,
      explanation:
        'Majburiy to‘lov evaziga qo‘shimcha mashg‘ulotlarga jalb qilish materialda moliyaviy korrupsion holat sifatida ko‘rsatilgan.',
    },
    {
      id: 'm1t4c02',
      text: 'Direktorning qarindoshi maktabdagi bo‘sh lavozimga boshqa nomzodlardan ustun qo‘yildi. Tanlov mezonlari ham unga moslab o‘zgartirildi. Bu vaziyatda asosiy xavf nima?',
      options: [
        'Manfaatlar to‘qnashuvi va kadrlar tanlovidagi korrupsiya',
        'Oddiy pedagogik xato',
        'Faqat texnik muammo',
        'Faqat dars sifati muammosi',
      ],
      answer: 0,
      explanation:
        'Shaxsiy manfaat asosida tanlov mezonlarini o‘zgartirish manfaatlar to‘qnashuvi va korrupsion xavfni yuzaga keltiradi.',
    },
    {
      id: 'm1t4c03',
      text: 'Maktabda barcha xaridlar elektron tizim orqali amalga oshirilmoqda, ammo xarajatlarning tasdiqlovchi hujjatlari yuritilmayapti. Rahbar nimani kuchaytirishi kerak?',
      options: [
        'Har bir xarajatni elektron izohli hujjat bilan tasdiqlash va auditni kuchaytirish',
        'Elektron tizimni bekor qilish',
        'Xaridlarni yashirish',
        'Jamoatchilikni jarayondan chiqarish',
      ],
      answer: 0,
      explanation:
        'Elektron xarid tizimi bilan birga har bir xarajatni hujjat bilan tasdiqlash va moliyaviy nazoratni olib borish zarur.',
    },
    {
      id: 'm1t4c04',
      text: 'O‘quvchilar “Halollik daqiqasi”da o‘qituvchi bergan real vaziyatni muhokama qilib, halol qaror variantlarini ishlab chiqishdi. Bu qaysi maqsadga xizmat qiladi?',
      options: [
        'Axloqiy qaror qabul qilish ko‘nikmasini rivojlantirishga',
        'Faqat vaqtni o‘tkazishga',
        'Faqat nazoratga',
        'Faqat baholashga',
      ],
      answer: 0,
      explanation:
        'Real vaziyatlar asosida muhokama qilish “Halollik vaksinasi”ning amaliy maqsadlaridan biri bo‘lgan axloqiy qaror qabul qilishni rivojlantiradi.',
    },
    {
      id: 'm1t4c05',
      text: 'Maktabda korrupsiya haqida “bu oddiy holat” degan qarash keng tarqalgan. Rahbar qanday kompleks chora ko‘rishi maqsadga muvofiq?',
      options: [
        'Halollik ta’limi, shaxsiy namuna, monitoring va profilaktik tadbirlarni kuchaytirish',
        'Faqat jazolash',
        'Faqat elektron tizim o‘rnatish',
        'Muammoni e’tiborsiz qoldirish',
      ],
      answer: 0,
      explanation:
        'Korrupsiyani normal holat sifatida qabul qilish axloqiy-ijtimoiy xavfdir. Uni kamaytirish uchun tizimli halollik ta’limi va profilaktika zarur.',
    },
    {
      id: 'm1t4c06',
      text: 'Maktabda ishga qabul qilish elektron test orqali o‘tkazildi, ammo komissiya yakuniy baholarni ochiq e’lon qilmaydi. Rahbar qaysi yo‘nalishni kuchaytirishi kerak?',
      options: [
        'Baholash mezonlari va natijalarining shaffofligini',
        'Faqat test savollarini',
        'Faqat suhbatni',
        'Faqat reklama ishlarini',
      ],
      answer: 0,
      explanation:
        'Elektron test bilan birga baholash mezonlari va natijalarning shaffofligi ham korrupsion xavfni kamaytiradi.',
    },
    {
      id: 'm1t4c07',
      text: 'Maktab rahbari korrupsiyaga moyil jarayonlarni aniqladi. Keyingi eng muhim qadam qaysi?',
      options: [
        'Xavflarni kamaytirish bo‘yicha tizimli chora-tadbirlar dasturini ishlab chiqish',
        'Muammoni unutish',
        'Faqat xodimni ogohlantirish',
        'Holatni jamoatchilikdan yashirish',
      ],
      answer: 0,
      explanation:
        'Xavfni aniqlashdan keyin uni bartaraf etishga qaratilgan tizimli dastur va chora-tadbirlar ishlab chiqilishi kerak.',
    },
    {
      id: 'm1t4c08',
      text: 'O‘qituvchi korrupsiyaga qarshi qonunchilikni bilmaydi va manfaatlar to‘qnashuvi haqida xabardor emas. Rahbar nima qilishi kerak?',
      options: [
        'Muntazam o‘qitish va tushuntirish ishlarini tashkil etish',
        'Darhol ishdan bo‘shatish',
        'Muammoni yashirish',
        'Faqat og‘zaki tanbeh berish',
      ],
      answer: 0,
      explanation:
        'Xodimlarni korrupsiya qonunchiligi, axloqiy kodekslar va xavflarni aniqlash usullari bo‘yicha o‘qitish rahbar mas’uliyatining muhim qismidir.',
    },
    {
      id: 'm1t4c09',
      text: 'Ota-onalar maktab xaridlari haqida ma’lumot olishni so‘rashdi, lekin rahbariyat hech qanday ma’lumot bermadi. Qaysi prinsipni kuchaytirish kerak?',
      options: [
        'Shaffoflik, hisobdorlik va jamoatchilik ishtirokini',
        'Yopiq boshqaruvni',
        'Norasmiy qarorlarni',
        'Faqat ichki nazoratni',
      ],
      answer: 0,
      explanation:
        'Ota-onalar va jamoatchilik ishtiroki maktab faoliyatini shaffof va hisobdor qilishga xizmat qiladi.',
    },
    {
      id: 'm1t4c10',
      text: 'Maktabda korrupsion holat aniqlandi. Direktor faqat aybdorni jazoladi, lekin holatga sabab bo‘lgan nazoratdagi kamchilikni o‘zgartirmadi. Qaysi yondashuv yetishmayapti?',
      options: [
        'Profilaktik va tizimli yondashuv',
        'Faqat jazo',
        'Faqat audit',
        'Faqat hisobot',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi samarali boshqaruv nafaqat jazolash, balki holatni keltirib chiqargan tizimli sabablarni bartaraf etishni ham talab qiladi.',
    },
  ],
}
