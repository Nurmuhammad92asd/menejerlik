export type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation: string
}

export type Topic = {
  id: string
  title: string
  description: string

  /*
   * Har bir mavzu 4 darajaga bo‘linadi:
   *
   * easy   → Oson
   * medium → O‘rta
   * hard   → Qiyin
   * case   → Keys
   */

  levels: {
    easy: Question[]
    medium: Question[]
    hard: Question[]
    case: Question[]
  }
}

export type Category = {
  id: string
  title: string
  description: string
  topics: Topic[]
}

/*
 * =========================================================
 * MAKTAB — 10 TA MODUL
 * =========================================================
 */

export const CATEGORIES: Category[] = [
  {
    id: 'm1',
    title: '1-MODUL. Umumiy ta’lim muassasasini boshqarish',
    description:
      'Ta’lim muassasasini samarali boshqarish, strategik menejment va rahbarlik qarorlarini qabul qilish.',
    topics: [
{
  id: 'm1t1',
  title: 'Umumiy ta’lim muassasasini boshqarish',
  description:
    'Umumiy o‘rta ta’lim muassasasini boshqarish, boshqaruv tamoyillari, attestatsiya, akkreditatsiya va TALIS.',
  levels: {
    // =========================================================
    // 🟢 OSON — 30 TA
    // =========================================================
    easy: [
      {
        id: 'm1t1-e01',
        text: 'Maktabni boshqarishning bosh maqsadi nima?',
        options: [
          'Faqat hujjatlar sonini ko‘paytirish',
          'Ta’lim sifati va tarbiya samaradorligini oshirish',
          'Faqat o‘qituvchilar faoliyatini nazorat qilish',
          'Maktabning moddiy bazasini kengaytirish',
        ],
        answer: 1,
        explanation:
          'Maktab boshqaruvining bosh maqsadi ta’lim sifati va tarbiya samaradorligini oshirishdir.',
      },
      {
        id: 'm1t1-e02',
        text: 'Maktab boshqaruvida qaysi faoliyat ta’lim-tarbiya jarayonini boshqarishga bevosita kiradi?',
        options: [
          'Ta’lim-tarbiya jarayonini rejalashtirish va tashkil etish',
          'Faqat maktab binosini ta’mirlash',
          'Faqat moliyaviy hisobot tayyorlash',
          'Faqat sport musobaqalarini o‘tkazish',
        ],
        answer: 0,
        explanation:
          'Ta’lim-tarbiya jarayonini rejalashtirish va tashkil etish maktab boshqaruvining asosiy yo‘nalishidir.',
      },
      {
        id: 'm1t1-e03',
        text: 'Boshqaruv tamoyillari qanday vazifani bajaradi?',
        options: [
          'Faqat moliyaviy nazoratni amalga oshiradi',
          'Boshqaruv faoliyatini yo‘naltiruvchi asosiy qoidalar bo‘lib xizmat qiladi',
          'Faqat o‘quvchilarni baholaydi',
          'Faqat hujjatlarni saqlaydi',
        ],
        answer: 1,
        explanation:
          'Boshqaruv tamoyillari rahbar va jamoa faoliyatini yo‘naltiruvchi asosiy qoidalardir.',
      },
      {
        id: 'm1t1-e04',
        text: 'Maqsadlilik tamoyili nimani anglatadi?',
        options: [
          'Boshqaruvni tasodifiy amalga oshirishni',
          'Barcha faoliyatni aniq maqsad va vazifalarga yo‘naltirishni',
          'Faqat uzoq muddatli rejalar tuzishni',
          'Faqat moliyaviy resurslarni nazorat qilishni',
        ],
        answer: 1,
        explanation:
          'Maqsadlilik barcha boshqaruv faoliyatini aniq maqsad va vazifalarga yo‘naltirishni anglatadi.',
      },
      {
        id: 'm1t1-e05',
        text: 'Maktabni yagona tizim sifatida ko‘rib, barcha yo‘nalishlarni o‘zaro bog‘liq holda boshqarish qaysi tamoyilga tegishli?',
        options: [
          'Rag‘batlantirish',
          'Rejalilik',
          'Tizimlilik va kompleks yondashuv',
          'Shaffoflik',
        ],
        answer: 2,
        explanation:
          'Maktabdagi barcha subyekt va jarayonlarning o‘zaro bog‘liqligi tizimlilik tamoyilini ifodalaydi.',
      },
      {
        id: 'm1t1-e06',
        text: 'Boshqaruv qarorlarini taxmin emas, dalil va tahlillarga asoslanib qabul qilish qaysi tamoyil?',
        options: [
          'Ilmiylik',
          'Demokratiklik',
          'Hamkorlik',
          'Rejalilik',
        ],
        answer: 0,
        explanation:
          'Dalil, tahlil, monitoring va diagnostikaga tayanish ilmiylik tamoyiliga mos.',
      },
      {
        id: 'm1t1-e07',
        text: 'Quyidagilardan qaysi biri ilmiylik tamoyiliga mos keladi?',
        options: [
          'Qarorni odat asosida qabul qilish',
          'Qarorni shaxsiy taxmin asosida qabul qilish',
          'O‘quvchilarning o‘zlashtirish ko‘rsatkichlarini tahlil qilish',
          'Qarorni faqat bitta xodim fikriga asoslash',
        ],
        answer: 2,
        explanation:
          'O‘zlashtirish ko‘rsatkichlarini tahlil qilish ilmiy va dalillarga asoslangan boshqaruvga misoldir.',
      },
      {
        id: 'm1t1-e08',
        text: 'Qaror qabul qilishda pedagogik kengash va jamoa fikrini inobatga olish qaysi tamoyilga mos?',
        options: [
          'Demokratiklik va jamoaviy boshqaruv',
          'Ilmiylik',
          'Rejalilik',
          'Nazorat',
        ],
        answer: 0,
        explanation:
          'Jamoa fikrini qaror qabul qilishga jalb etish demokratik boshqaruvga xos.',
      },
      {
        id: 'm1t1-e09',
        text: 'Demokratik boshqaruvda yakuniy mas’uliyat kimning zimmasida bo‘ladi?',
        options: [
          'Har bir o‘qituvchining',
          'Ota-onalar qo‘mitasining',
          'Maktab direktorining',
          'O‘quvchilar yetakchisining',
        ],
        answer: 2,
        explanation:
          'Jamoaviy muhokama mavjud bo‘lsa-da, yakuniy mas’uliyat rahbar zimmasida qoladi.',
      },
      {
        id: 'm1t1-e10',
        text: 'Maktab faoliyatining rejasiz bo‘lishi mumkin emasligini ifodalovchi tamoyil qaysi?',
        options: [
          'Ilmiylik',
          'Rejalilik',
          'Shaffoflik',
          'Motivatsiya',
        ],
        answer: 1,
        explanation:
          'Maktab faoliyatini oldindan belgilash va tashkil etish rejalilik tamoyiliga asoslanadi.',
      },
      {
        id: 'm1t1-e11',
        text: 'Quyidagilardan qaysi biri maktabning rejalashtirish hujjatlariga kiradi?',
        options: [
          'Yillik ish rejasi',
          'Faqat reklama rejasi',
          'Faqat xodimlarning shaxsiy rejasi',
          'Faqat sport rejasi',
        ],
        answer: 0,
        explanation:
          'Yillik ish rejasi maktab faoliyatini rejalashtirishning asosiy hujjatlaridan biridir.',
      },
      {
        id: 'm1t1-e12',
        text: 'Nazoratning asosiy maqsadi materialga ko‘ra nima?',
        options: [
          'Xodimlarni qo‘rqitish',
          'Faqat kamchilik topish',
          'Sifatni oshirish',
          'Faqat hisobot yig‘ish',
        ],
        answer: 2,
        explanation:
          'Nazorat faqat tekshirish emas, balki sifatni oshirish vositasidir.',
      },
      {
        id: 'm1t1-e13',
        text: 'Nazorat natijasida rahbar xulosa chiqarib, tavsiya berishi nimani ta’minlaydi?',
        options: [
          'Teskari aloqani',
          'Moliyaviy nazoratni',
          'Ish taqsimotini',
          'Reklamani',
        ],
        answer: 0,
        explanation:
          'Nazoratdan keyingi tavsiya va yordam teskari aloqani ta’minlaydi.',
      },
      {
        id: 'm1t1-e14',
        text: 'Barcha xodimlarga teng talab va mezon qo‘yish qaysi tamoyilga mos?',
        options: [
          'Hamkorlik',
          'Adolatlilik va shaffoflik',
          'Ilmiylik',
          'Rejalilik',
        ],
        answer: 1,
        explanation:
          'Teng mezon va talablar adolatlilik hamda shaffoflikni ta’minlaydi.',
      },
      {
        id: 'm1t1-e15',
        text: 'Quyidagilardan qaysi biri ma’naviy rag‘batlantirishga misol bo‘ladi?',
        options: [
          'E’tirof va tashakkurnoma',
          'Ish vaqtini qisqartirish',
          'Hujjatlarni tekshirish',
          'Monitoring o‘tkazish',
        ],
        answer: 0,
        explanation:
          'E’tirof va tashakkurnoma ma’naviy rag‘batlantirish shakllaridir.',
      },
      {
        id: 'm1t1-e16',
        text: 'Ota-onalar, mahalla, OTM va tashkilotlar bilan hamkorlik qilish qaysi tamoyilga tegishli?',
        options: [
          'Ilmiylik',
          'Hamkorlik va ijtimoiy sheriklik',
          'Rejalilik',
          'Nazorat',
        ],
        answer: 1,
        explanation:
          'Tashqi hamkorlar bilan ishlash hamkorlik va ijtimoiy sheriklik tamoyiliga kiradi.',
      },
      {
        id: 'm1t1-e17',
        text: 'Maktab boshqaruvida maqsadlar aniq bo‘lsa, nima to‘g‘ri taqsimlanadi?',
        options: [
          'Faqat o‘quvchilar',
          'Resurslar',
          'Faqat darsliklar',
          'Faqat hujjatlar',
        ],
        answer: 1,
        explanation:
          'Aniq maqsad resurslarni to‘g‘ri yo‘naltirish va taqsimlashga yordam beradi.',
      },
      {
        id: 'm1t1-e18',
        text: 'O‘quvchilarning rivojlanishini muntazam kuzatish maktab boshqaruvining qaysi yo‘nalishiga kiradi?',
        options: [
          'Monitoring',
          'Reklama',
          'Moliyalashtirish',
          'Ishga qabul qilish',
        ],
        answer: 0,
        explanation:
          'O‘quvchilar rivojlanishini kuzatish monitoring faoliyatidir.',
      },
      {
        id: 'm1t1-e19',
        text: 'Boshqaruv tamoyillarini ularning mazmuni bilan moslashtiring: 1-Maqsadlilik, 2-Ilmiylik, 3-Rejalilik, 4-Rag‘batlantirish.',
        options: [
          '1-c, 2-b, 3-a, 4-d',
          '1-a, 2-c, 3-d, 4-b',
          '1-b, 2-d, 3-c, 4-a',
          '1-d, 2-a, 3-b, 4-c',
        ],
        answer: 0,
        explanation:
          'Maqsadlilik—aniq maqsad; ilmiylik—dalil; rejalilik—reja; rag‘batlantirish—mehnatni baholash.',
      },
      {
        id: 'm1t1-e20',
        text: 'Boshqaruv yo‘nalishlarini moslashtiring: 1-Pedagoglar, 2-O‘quvchilar, 3-Ota-onalar, 4-Moddiy resurslar.',
        options: [
          '1-b, 2-a, 3-c, 4-d',
          '1-a, 2-b, 3-d, 4-c',
          '1-c, 2-d, 3-a, 4-b',
          '1-d, 2-c, 3-b, 4-a',
        ],
        answer: 0,
        explanation:
          'Pedagoglar faoliyati muvofiqlashtiriladi, o‘quvchilar monitoring qilinadi, ota-onalar bilan hamkorlik qilinadi.',
      },
      {
        id: 'm1t1-e21',
        text: 'Akkreditatsiyadan o‘tkazish bosqichlarining boshlang‘ich bosqichini aniqlang.',
        options: [
          'Attestatsiya jarayoniga tayyorgarlik ko‘rish',
          'Ta’lim sifati monitoringini amalga oshirish',
          'Kamchiliklarni bartaraf etish',
          'Ijroni nazorat qilish',
        ],
        answer: 0,
        explanation:
          'Akkreditatsiya jarayonida dastlab attestatsiyaga tayyorgarlik ko‘riladi.',
      },
      {
        id: 'm1t1-e22',
        text: 'Akkreditatsiya bosqichlarining to‘g‘ri ketma-ketligini belgilang: 1-Tayyorgarlik, 2-Attestatsiya va tahlil, 3-Qaror, 4-Kamchiliklarni bartaraf etish.',
        options: [
          '1 → 2 → 3 → 4',
          '2 → 1 → 4 → 3',
          '3 → 2 → 1 → 4',
          '4 → 3 → 2 → 1',
        ],
        answer: 0,
        explanation:
          'Akkreditatsiya jarayoni tayyorgarlikdan boshlanib, attestatsiya, qaror va kamchiliklarni bartaraf etish bosqichlariga o‘tadi.',
      },
      {
        id: 'm1t1-e23',
        text: 'Quyidagi boshqaruv faoliyatlarining mantiqiy ketma-ketligini belgilang: 1-Maqsadni belgilash, 2-Reja tuzish, 3-Amalga oshirish, 4-Nazorat.',
        options: [
          '1 → 2 → 3 → 4',
          '2 → 1 → 4 → 3',
          '3 → 2 → 1 → 4',
          '4 → 3 → 2 → 1',
        ],
        answer: 0,
        explanation:
          'Boshqaruvda avval maqsad, keyin reja, ijro va nazorat amalga oshiriladi.',
      },
      {
        id: 'm1t1-e24',
        text: 'Attestatsiya nima?',
        options: [
          'Ta’lim tashkilotining faoliyatini baholashda davlat nazoratining asosiy shakli',
          'O‘qituvchilarni ishga qabul qilish jarayoni',
          'Maktabning moliyaviy rejasi',
          'O‘quvchilarni yakuniy baholash shakli',
        ],
        answer: 0,
        explanation:
          'Attestatsiya ta’lim tashkilotining faoliyatini baholashda davlat nazoratining asosiy shaklidir.',
      },
      {
        id: 'm1t1-e25',
        text: 'Attestatsiyaning asosiy maqsadi nima?',
        options: [
          'Maktabning moliyaviy holatini aniqlash',
          'Ta’lim sifatining davlat ta’lim standartlari va davlat ta’lim talablariga muvofiqligini aniqlash',
          'O‘qituvchilar sonini kamaytirish',
          'Ota-onalar faoliyatini baholash',
        ],
        answer: 1,
        explanation:
          'Attestatsiyaning maqsadi ta’lim sifatining belgilangan davlat standartlari va talablariga muvofiqligini aniqlashdir.',
      },
      {
        id: 'm1t1-e26',
        text: 'Attestatsiyaning asosiy prinsiplaridan biri qaysi?',
        options: [
          'Mustaqillik',
          'Jazolash',
          'Yashirinlik',
          'Bir tomonlama boshqaruv',
        ],
        answer: 0,
        explanation:
          'Mustaqillik attestatsiyaning asosiy prinsiplaridan biridir.',
      },
      {
        id: 'm1t1-e27',
        text: 'Umumiy o‘rta ta’lim tashkilotlarining attestatsiyasida oxirgi necha yillik faoliyati kompleks tahlil qilinadi?',
        options: [
          '1 yil',
          '2 yil',
          '3 yil',
          '5 yil',
        ],
        answer: 1,
        explanation:
          'Attestatsiya jarayonida oxirgi ikki yillik faoliyat kompleks tahlil qilinadi.',
      },
      {
        id: 'm1t1-e28',
        text: 'Yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti necha yil muddatga akkreditatsiyadan o‘tgan deb hisoblanadi?',
        options: [
          '5 yil',
          '7 yil',
          '10 yil',
          '11 yil',
        ],
        answer: 3,
        explanation:
          'Materialga ko‘ra, yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti 11 yilga akkreditatsiyadan o‘tgan deb hisoblanadi.',
      },
      {
        id: 'm1t1-e29',
        text: 'TALIS qanday tadqiqot?',
        options: [
          'O‘quvchilar uchun imtihon',
          'O‘qituvchilar va maktab rahbarlarining anonim so‘rovnomasi',
          'Maktablarni moliyaviy tekshirish tizimi',
          'O‘qituvchilarni attestatsiyadan o‘tkazish imtihoni',
        ],
        answer: 1,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlarining anonim so‘rovnomalariga asoslangan xalqaro tadqiqotdir.',
      },
      {
        id: 'm1t1-e30',
        text: 'TALIS ma’lumotlarni qanday usul orqali to‘playdi?',
        options: [
          'Standartlashtirilgan so‘rovnomalar orqali',
          'Faqat yozma imtihon orqali',
          'Faqat direktorlarning buyruqlari orqali',
          'Faqat moliyaviy hisobotlar orqali',
        ],
        answer: 0,
        explanation:
          'TALIS standartlashtirilgan so‘rovnomalar orqali ma’lumot to‘playdi.',
      },
    ],

    // =========================================================
    // 🟡 O‘RTA — 30 TA
    // =========================================================
    medium: [
      {
        id: 'm1t1-m01',
        text: 'Maktab rahbari choraklik vazifalarni maktabning uzoq muddatli ta’lim sifati maqsadlari bilan bog‘ladi. Bu qaysi tamoyilning amaliy ko‘rinishi?',
        options: [
          'Rag‘batlantirish',
          'Maqsadlilik',
          'Hamkorlik',
          'Shaffoflik',
        ],
        answer: 1,
        explanation:
          'Qisqa va uzoq muddatli maqsadlarni uyg‘unlashtirish maqsadlilik tamoyiliga mos.',
      },
      {
        id: 'm1t1-m02',
        text: 'Maktabda o‘quvchilarning o‘zlashtirish darajasi pasaymoqda. Direktor davomat, intizom, psixologik muhit va metodik ta’minotni ham birgalikda tahlil qildi. Qaysi tamoyil qo‘llanilgan?',
        options: [
          'Tizimlilik va kompleks yondashuv',
          'Yakkaboshchilik',
          'Rag‘batlantirish',
          'Rejalilik',
        ],
        answer: 0,
        explanation:
          'Bir muammoni bir nechta o‘zaro bog‘liq omillar bilan birga ko‘rish kompleks yondashuvdir.',
      },
      {
        id: 'm1t1-m03',
        text: 'Direktor o‘qituvchining faoliyatiga oid qarorni dars kuzatuvi, monitoring va pedagogik diagnostika natijalariga asoslab qabul qildi. Bu qaysi tamoyilga mos?',
        options: [
          'Demokratiklik',
          'Ilmiylik',
          'Hamkorlik',
          'Motivatsiya',
        ],
        answer: 1,
        explanation:
          'Dalillarga asoslangan boshqaruv ilmiylik tamoyiliga mos.',
      },
      {
        id: 'm1t1-m04',
        text: 'Maktabdagi yangi metodik yondashuvni joriy etishdan oldin direktor pedagogik kengash va metodik birlashmalar fikrini o‘rgandi. Qaysi tamoyil ustuvor?',
        options: [
          'Demokratiklik va jamoaviy boshqaruv',
          'Nazorat va teskari aloqa',
          'Rejalilik',
          'Adolatlilik',
        ],
        answer: 0,
        explanation:
          'Jamoa fikrini qaror jarayoniga jalb etish demokratik boshqaruvni ifodalaydi.',
      },
      {
        id: 'm1t1-m05',
        text: 'Jamoa qarorni muhokama qilishda faol qatnashdi, ammo qarorning bajarilishi uchun yakuniy mas’uliyat direktor zimmasida qoldi. Bu holat nimani ifodalaydi?',
        options: [
          'Demokratiklik va rahbar mas’uliyatining uyg‘unligini',
          'Faqat jamoaviy boshqaruvni',
          'Faqat yakkaboshchilikni',
          'Nazoratning bekor qilinishini',
        ],
        answer: 0,
        explanation:
          'Jamoaviy ishtirok rahbarning yakuniy mas’uliyatini bekor qilmaydi.',
      },
      {
        id: 'm1t1-m06',
        text: 'Maktabda ichki nazorat rejasida dars kuzatuvi, bilim monitoringi va hujjatlar ijrosi belgilangan. Bu qaysi tamoyilning amaliy ifodasidir?',
        options: [
          'Rejalilik',
          'Rag‘batlantirish',
          'Hamkorlik',
          'Demokratiklik',
        ],
        answer: 0,
        explanation:
          'Nazorat faoliyatining oldindan rejalashtirilishi rejalilik tamoyilini ko‘rsatadi.',
      },
      {
        id: 'm1t1-m07',
        text: 'Direktor dars kuzatuvidan keyin o‘qituvchiga faqat kamchiliklarini ko‘rsatib, ularni tuzatish bo‘yicha tavsiya bermadi. Qaysi jihat yetishmayapti?',
        options: [
          'Teskari aloqa',
          'Rejalilik',
          'Ijtimoiy sheriklik',
          'Moliyaviy boshqaruv',
        ],
        answer: 0,
        explanation:
          'Nazoratdan keyingi tavsiya va yordam teskari aloqaning muhim qismidir.',
      },
      {
        id: 'm1t1-m08',
        text: 'Bir xil ishni bajarayotgan ikki pedagogga turlicha mezon qo‘llanildi. Bu qaysi tamoyilga zid?',
        options: [
          'Ilmiylik',
          'Adolatlilik va shaffoflik',
          'Hamkorlik',
          'Tizimlilik',
        ],
        answer: 1,
        explanation:
          'Bir xil holatga turlicha mezon qo‘llash adolatlilik va shaffoflikka zid.',
      },
      {
        id: 'm1t1-m09',
        text: 'O‘qituvchining yaxshi natijasi jamoa oldida e’tirof etildi va unga kasbiy rivojlanish imkoniyati yaratildi. Bu qaysi yondashuvga mos?',
        options: [
          'Nazorat',
          'Motivatsiya va rag‘batlantirish',
          'Intizomiy ta’sir',
          'Akkreditatsiya',
        ],
        answer: 1,
        explanation:
          'E’tirof va kasbiy rivojlanish motivatsiyaning muhim shakllaridir.',
      },
      {
        id: 'm1t1-m10',
        text: 'Maktab o‘quvchilarni kasbga yo‘naltirishni kuchaytirish uchun OTM va mahalliy tashkilotlar bilan hamkorlik qildi. Bu qaysi tamoyilning amaliy ko‘rinishi?',
        options: [
          'Hamkorlik va ijtimoiy sheriklik',
          'Ilmiylik',
          'Rejalilik',
          'Nazorat',
        ],
        answer: 0,
        explanation:
          'OTM va tashkilotlar bilan hamkorlik ijtimoiy sheriklikni ifodalaydi.',
      },
      {
        id: 'm1t1-m11',
        text: 'Quyidagi holatlardan qaysi biri tizimlilik va kompleks yondashuvga eng mos?',
        options: [
          'Faqat o‘quvchilar baholarini tahlil qilish',
          'Faqat o‘qituvchilar davomatini tekshirish',
          'Ta’lim sifati bilan birga tarbiya, intizom, psixologik muhit va resurslarni tahlil qilish',
          'Faqat maktab binosini ta’mirlash',
        ],
        answer: 2,
        explanation:
          'Kompleks yondashuv ta’lim bilan bog‘liq bir nechta omillarni birgalikda ko‘rib chiqadi.',
      },
      {
        id: 'm1t1-m12',
        text: 'Maktab rahbari “o‘quvchilar natijasi yaxshilanadi” degan umumiy maqsadni o‘lchash uchun o‘zlashtirish va davomat ko‘rsatkichlarini belgiladi. Bu qanday yondashuv?',
        options: [
          'Natijalarni indikatorlar orqali o‘lchash',
          'Jamoaviy boshqaruvdan voz kechish',
          'Faqat nazoratni kuchaytirish',
          'Akkreditatsiyaga tayyorgarlik',
        ],
        answer: 0,
        explanation:
          'O‘zlashtirish va davomat maqsadga erishishni o‘lchash indikatorlari sifatida qo‘llanmoqda.',
      },
      {
        id: 'm1t1-m13',
        text: 'Rahbar ichki nazoratni xodimlarni jazolash vositasi emas, ularning faoliyatini yaxshilash vositasi sifatida tashkil etdi. Bu qaysi yondashuvga mos?',
        options: [
          'Nazoratni rivojlantirish vositasi sifatida qo‘llash',
          'Nazoratni bekor qilish',
          'Faqat intizomiy nazorat',
          'Faqat tashqi baholash',
        ],
        answer: 0,
        explanation:
          'Materialda nazoratni qo‘rqitish emas, rivojlantirish vositasi sifatida tashkil etish ko‘rsatilgan.',
      },
      {
        id: 'm1t1-m14',
        text: 'Maktabda maqsadlar aniq belgilanmaganligi sababli resurslar samarasiz taqsimlandi. Qaysi tamoyil yetarli darajada ta’minlanmagan?',
        options: [
          'Maqsadlilik',
          'Hamkorlik',
          'Rag‘batlantirish',
          'Demokratiklik',
        ],
        answer: 0,
        explanation:
          'Aniq maqsad resurslarni to‘g‘ri yo‘naltirish uchun asos bo‘ladi.',
      },
      {
        id: 'm1t1-m15',
        text: 'Quyidagilardan qaysi biri ilmiylik tamoyiliga mos kelmaydi?',
        options: [
          'Monitoring natijalarini tahlil qilish',
          'So‘rovnoma natijalaridan foydalanish',
          'Dars kuzatuvlarini hisobga olish',
          'Qarorni faqat rahbarning shaxsiy taxminiga asoslash',
        ],
        answer: 3,
        explanation:
          'Shaxsiy taxmin dalil va tahlilga asoslangan ilmiy boshqaruvga mos kelmaydi.',
      },
      {
        id: 'm1t1-m16',
        text: 'Tamoyillarni moslashtiring: 1-Maqsadlilik, 2-Ilmiylik, 3-Demokratiklik, 4-Adolatlilik. a-Dalillarga asoslash, b-Aniq maqsad, c-Jamoa fikri, d-Teng mezon.',
        options: [
          '1-b, 2-a, 3-c, 4-d',
          '1-a, 2-b, 3-d, 4-c',
          '1-c, 2-d, 3-a, 4-b',
          '1-d, 2-c, 3-b, 4-a',
        ],
        answer: 0,
        explanation:
          'Har bir tamoyil o‘zining mazmuniy tavsifiga moslashtirilgan.',
      },
      {
        id: 'm1t1-m17',
        text: 'Nazorat shakllarini moslashtiring: 1-Dars kuzatuvi, 2-Bilim monitoringi, 3-Hujjatlar nazorati, 4-Tarbiyaviy ishlar tahlili.',
        options: [
          '1-b, 2-a, 3-c, 4-d',
          '1-a, 2-b, 3-d, 4-c',
          '1-c, 2-d, 3-a, 4-b',
          '1-d, 2-c, 3-b, 4-a',
        ],
        answer: 0,
        explanation:
          'Dars kuzatuvi—dars jarayoni; bilim monitoringi—natija; hujjatlar nazorati—ijro; tarbiyaviy tahlil—tarbiya samaradorligi.',
      },
      {
        id: 'm1t1-m18',
        text: 'Rag‘batlantirish shakllarini moslashtiring: 1-Ma’naviy, 2-Kasbiy rivojlanish, 3-Moddiy.',
        options: [
          '1-b, 2-a, 3-c',
          '1-a, 2-c, 3-b',
          '1-c, 2-b, 3-a',
          '1-b, 2-c, 3-a',
        ],
        answer: 0,
        explanation:
          'Tashakkurnoma—ma’naviy, seminar—kasbiy, belgilangan tartibdagi to‘lov—moddiy rag‘bat.',
      },
      {
        id: 'm1t1-m19',
        text: 'Attestatsiya va akkreditatsiyani mazmuniga ko‘ra moslashtiring.',
        options: [
          '1-attestatsiya: muvofiqlikni aniqlash; 2-akkreditatsiya: muvofiqlikni davlat tomonidan e’tirof etish',
          '1-attestatsiya: davlat tomonidan e’tirof; 2-akkreditatsiya: sifatni aniqlash',
          'Ikkalasi ham faqat ichki monitoring',
          'Ikkalasi ham TALIS so‘rovi',
        ],
        answer: 0,
        explanation:
          'Attestatsiya muvofiqlikni aniqlaydi, akkreditatsiya esa muvofiqlikning davlat tomonidan e’tirofidir.',
      },
      {
        id: 'm1t1-m20',
        text: 'TALIS yo‘nalishlarini moslashtiring: 1-Ish sharoitlari, 2-Kasbiy rivojlanish, 3-Kasbiy qoniqish, 4-Maktab madaniyati va boshqaruvi.',
        options: [
          '1-c, 2-a, 3-d, 4-b',
          '1-a, 2-c, 3-b, 4-d',
          '1-d, 2-b, 3-c, 4-a',
          '1-b, 2-d, 3-a, 4-c',
        ],
        answer: 0,
        explanation:
          'TALIS o‘qituvchilarning ish sharoiti, rivojlanishi, qoniqishi va maktab boshqaruvini o‘rganadi.',
      },
      {
        id: 'm1t1-m21',
        text: 'Maktab boshqaruvida maqsad va natijaga yo‘naltirilgan faoliyatning mantiqiy ketma-ketligini belgilang.',
        options: [
          'Maqsad → reja → amalga oshirish → nazorat',
          'Reja → maqsad → nazorat → amalga oshirish',
          'Amalga oshirish → maqsad → reja → nazorat',
          'Nazorat → reja → maqsad → amalga oshirish',
        ],
        answer: 0,
        explanation:
          'Boshqaruv jarayoni maqsadni belgilashdan boshlanib, rejalashtirish, ijro va nazorat bilan davom etadi.',
      },
      {
        id: 'm1t1-m22',
        text: 'Akkreditatsiya jarayonining to‘g‘ri ketma-ketligini belgilang.',
        options: [
          'Tayyorgarlik → attestatsiya va tahlil → qaror → kamchiliklarni bartaraf etish → ijroni nazorat qilish → xavf-xatarga asoslangan monitoring',
          'Attestatsiya → tayyorgarlik → qaror → monitoring → kamchiliklarni bartaraf etish → nazorat',
          'Tayyorgarlik → qaror → attestatsiya → monitoring → nazorat → kamchiliklar',
          'Kamchiliklarni bartaraf etish → tayyorgarlik → attestatsiya → qaror → monitoring → nazorat',
        ],
        answer: 0,
        explanation:
          'Materialda akkreditatsiyaning olti bosqichi aynan shu ketma-ketlikda berilgan.',
      },
      {
        id: 'm1t1-m23',
        text: 'Ilmiy asoslangan boshqaruv qarorini qabul qilish jarayonini belgilang.',
        options: [
          'Muammoni aniqlash → ma’lumot yig‘ish → tahlil → qaror',
          'Ma’lumot yig‘ish → qaror → muammoni aniqlash → tahlil',
          'Tahlil → qaror → ma’lumot yig‘ish → muammo',
          'Qaror → muammo → tahlil → ma’lumot',
        ],
        answer: 0,
        explanation:
          'Ilmiy boshqaruv avval muammoni aniqlash, dalil yig‘ish va tahlil qilishni talab qiladi.',
      },
      {
        id: 'm1t1-m24',
        text: 'Maktabda o‘zlashtirish ko‘rsatkichlari pasaydi. Rahbar dars kuzatuvi, o‘quvchilar natijalari, suhbat va so‘rovnoma ma’lumotlarini yig‘di. Bu harakatning asosiy tamoyili qaysi?',
        options: [
          'Ilmiylik',
          'Rag‘batlantirish',
          'Hamkorlik',
          'Yakkaboshchilik',
        ],
        answer: 0,
        explanation:
          'Turli dalillarni yig‘ib, muammoni tahlil qilish ilmiylik tamoyiliga mos.',
      },
      {
        id: 'm1t1-m25',
        text: 'Direktor yangi ichki tartibni ishlab chiqishda pedagoglar, sinf rahbarlari va ota-onalar vakillarining fikrlarini oldi. Buning asosiy maqsadi nimaga mos?',
        options: [
          'Jamoaning boshqaruvdagi ishtirokini ta’minlash',
          'Rahbar mas’uliyatini bekor qilish',
          'Nazoratni to‘xtatish',
          'Rejalashtirishdan voz kechish',
        ],
        answer: 0,
        explanation:
          'Turli manfaatdor tomonlarning fikrini olish demokratik boshqaruvni kuchaytiradi.',
      },
      {
        id: 'm1t1-m26',
        text: 'Maktab rahbari o‘qituvchilarning ish samaradorligini oshirish uchun metodik seminar, individual maslahat va kasbiy rivojlanish imkoniyatlarini tashkil etdi. Bu qaysi yo‘nalishga mos?',
        options: [
          'Motivatsiya va kasbiy rivojlanishni qo‘llab-quvvatlash',
          'Faqat intizomiy nazorat',
          'Akkreditatsiya',
          'Moliyaviy audit',
        ],
        answer: 0,
        explanation:
          'Kasbiy rivojlanish va metodik yordam xodimlarni rivojlantirish hamda motivatsiyalashga xizmat qiladi.',
      },
      {
        id: 'm1t1-m27',
        text: 'TALIS tadqiqotining asosiy xususiyati qaysi javobda to‘g‘ri berilgan?',
        options: [
          'O‘quvchilar bilimini individual baholaydigan imtihon',
          'O‘qituvchilar va maktab rahbarlaridan standartlashtirilgan so‘rovnomalar orqali ma’lumot yig‘adigan tadqiqot',
          'Maktablarni davlat akkreditatsiyasidan o‘tkazish mexanizmi',
          'Faqat direktorlar faoliyatini tekshiruvchi nazorat turi',
        ],
        answer: 1,
        explanation:
          'TALIS imtihon emas, standartlashtirilgan so‘rovnomalar asosidagi xalqaro tadqiqotdir.',
      },
      {
        id: 'm1t1-m28',
        text: 'Yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti haqida qaysi fikr materialga muvofiq?',
        options: [
          'Tashkil etilgan kundan boshlab 5 yil akkreditatsiyadan o‘tgan hisoblanadi',
          'Tashkil etilgan kundan boshlab 11 yil akkreditatsiyadan o‘tgan hisoblanadi',
          'Faqat attestatsiyadan keyin akkreditatsiyadan o‘tgan hisoblanadi',
          '11 oy muddatga akkreditatsiyadan o‘tgan hisoblanadi',
        ],
        answer: 1,
        explanation:
          'Materialga ko‘ra yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti 11 yilga akkreditatsiyadan o‘tgan deb hisoblanadi.',
      },
      {
        id: 'm1t1-m29',
        text: 'Attestatsiyada umumiy o‘rta ta’lim tashkilotining qaysi faoliyat davri kompleks tahlil qilinadi?',
        options: [
          'Oxirgi 6 oylik faoliyati',
          'Oxirgi bir yillik faoliyati',
          'Oxirgi ikki yillik faoliyati',
          'Oxirgi besh yillik faoliyati',
        ],
        answer: 2,
        explanation:
          'Attestatsiyada oxirgi ikki yillik faoliyat kompleks tahlil qilinadi.',
      },
      {
        id: 'm1t1-m30',
        text: 'Maktab rahbari boshqaruvni transformatsiya qilishda qaysi yo‘nalishni strategik yo‘nalish sifatida belgilashi mumkin?',
        options: [
          'Jamoatchilik ishtirokini kamaytirish',
          'Avtonomiyani hisobdorlikdan ajratish',
          'Samarali kadrlar zaxirasini yaratish',
          'Xalqaro tajribadan foydalanmaslik',
        ],
        answer: 2,
        explanation:
          'Samarali kadrlar zaxirasini yaratish boshqaruv transformatsiyasining taklif etilgan strategik yo‘nalishlaridan biridir.',
      },
    ],

    // =========================================================
    // 🔴 QIYIN — 30 TA
    // =========================================================
    hard: [
      {
        id: 'm1t1-h01',
        text: 'Maktabda o‘quvchilarning o‘zlashtirish ko‘rsatkichi pasaygan. Direktor faqat fan o‘qituvchilarini nazorat qilish o‘rniga davomat, intizom, psixologik muhit, metodik ta’minot va o‘quv natijalarini birgalikda tahlil qildi. Qarorning metodologik asosi qaysi?',
        options: [
          'Nazorat va teskari aloqa',
          'Tizimlilik va kompleks yondashuv',
          'Demokratiklik va jamoaviy boshqaruv',
          'Rag‘batlantirish va motivatsiya',
        ],
        answer: 1,
        explanation:
          'Muammoni o‘zaro bog‘liq bir nechta omillar orqali tahlil qilish kompleks yondashuvdir.',
      },
      {
        id: 'm1t1-h02',
        text: 'Direktor yangi boshqaruv qarorini qabul qilishdan oldin dars kuzatuvlari, o‘zlashtirish monitoringi va pedagoglar so‘rovi natijalarini oldi. Qaysi tamoyil eng bevosita namoyon bo‘lmoqda?',
        options: [
          'Ilmiylik',
          'Rejalilik',
          'Adolatlilik',
          'Hamkorlik',
        ],
        answer: 0,
        explanation:
          'Bir nechta dalil va tahlil manbalaridan foydalanish ilmiylik tamoyiliga mos.',
      },
      {
        id: 'm1t1-h03',
        text: 'Quyidagi vaziyatlardan qaysi biri demokratik boshqaruv va rahbar mas’uliyatining bir vaqtda ta’minlanganini eng aniq ifodalaydi?',
        options: [
          'Direktor barcha qarorlarni mustaqil qabul qiladi',
          'Jamoa qarorni muhokama qiladi, direktor me’yoriy talablar asosida yakuniy qaror qabul qilib, ijro uchun javob beradi',
          'Qaror jamoa tomonidan qabul qilinadi va direktor faqat kuzatadi',
          'Qaror ota-onalar tomonidan qabul qilinadi',
        ],
        answer: 1,
        explanation:
          'Demokratik muhokama va rahbarning yakuniy mas’uliyati birgalikda ta’minlangan.',
      },
      {
        id: 'm1t1-h04',
        text: 'Direktor “ta’lim sifatini oshirish”ni strategik maqsad sifatida belgiladi, ammo maqsadga erishilganini aniqlash uchun ko‘rsatkichlar belgilanmadi. Qaysi jihat yetishmayapti?',
        options: [
          'Maqsadni jamoaga topshirish',
          'Natijalarni o‘lchash indikatorlarini belgilash',
          'Tashqi hamkorlarni jalb qilish',
          'Moddiy rag‘batni kuchaytirish',
        ],
        answer: 1,
        explanation:
          'Maqsad natija indikatorlari orqali o‘lchanadigan bo‘lishi kerak.',
      },
      {
        id: 'm1t1-h05',
        text: 'Maktab rahbari dars kuzatuvi yakunida 4 ta kamchilikni ko‘rsatdi, ammo ularni bartaraf etish bo‘yicha tavsiya yoki yordam bermadi. Boshqaruv siklining qaysi elementi to‘liq amalga oshmagan?',
        options: [
          'Nazorat',
          'Teskari aloqa',
          'Rejalashtirish',
          'Maqsad belgilash',
        ],
        answer: 1,
        explanation:
          'Nazoratdan keyingi tavsiya, yordam va rivojlantirish teskari aloqani tashkil etadi.',
      },
      {
        id: 'm1t1-h06',
        text: 'Quyidagi juftliklardan qaysi biri mazmun jihatidan to‘g‘ri moslashtirilgan?',
        options: [
          'Attestatsiya — davlat tomonidan e’tirof; akkreditatsiya — sifatni aniqlash',
          'Attestatsiya — sifatning davlat standartlari va talablariga muvofiqligini aniqlash; akkreditatsiya — muvofiqlikning davlat tomonidan e’tirof etilishi',
          'Attestatsiya — TALIS; akkreditatsiya — ichki monitoring',
          'Attestatsiya — moliyaviy audit; akkreditatsiya — pedagogik kengash qarori',
        ],
        answer: 1,
        explanation:
          'Materialda attestatsiya va akkreditatsiyaning vazifalari aynan shu tarzda farqlangan.',
      },
      {
        id: 'm1t1-h07',
        text: 'Quyidagi holatlardan qaysi biri nazoratni rivojlantirish vositasi sifatida qo‘llashga eng mos?',
        options: [
          'Kamchilik aniqlangach, xodimni darhol jazolash',
          'Darsni kuzatish, muammoni aniqlash, tavsiya berish va keyingi natijani qayta kuzatish',
          'Faqat hisobotni talab qilish',
          'Faqat hujjatlarni tekshirish',
        ],
        answer: 1,
        explanation:
          'Nazorat natijasini rivojlantirish, tavsiya va keyingi monitoring bilan bog‘lash kerak.',
      },
      {
        id: 'm1t1-h08',
        text: 'Direktor o‘qituvchini rag‘batlantirdi, ammo aynan nima uchun rag‘batlantirilgani ochiq mezonlarda ko‘rsatilmagan. Qaysi tamoyil bilan bog‘liq muammo yuzaga kelishi mumkin?',
        options: [
          'Ilmiylik',
          'Adolatlilik va shaffoflik',
          'Tizimlilik',
          'Rejalilik',
        ],
        answer: 1,
        explanation:
          'Rag‘batlantirish mezonlarining noaniqligi shaffoflik va adolatlilik muammosini keltirib chiqarishi mumkin.',
      },
      {
        id: 'm1t1-h09',
        text: 'Maktabda ta’lim sifati yuqori, ammo ota-onalar bilan aloqa sust va kasbga yo‘naltirish ishlari yetarli emas. Rahbar faqat ta’lim sifatiga e’tibor qaratmoqda. Qaysi tamoyil nuqtayi nazaridan bu yondashuv muammoli?',
        options: [
          'Tizimlilik va kompleks yondashuv',
          'Ilmiylik',
          'Rag‘batlantirish',
          'Rejalilik',
        ],
        answer: 0,
        explanation:
          'Maktab faoliyatining boshqa muhim yo‘nalishlarini e’tiborsiz qoldirish kompleks yondashuvga zid.',
      },
      {
        id: 'm1t1-h10',
        text: 'Qaysi qaror ilmiylik va tizimlilik tamoyillarining birgalikdagi qo‘llanilishiga eng mos?',
        options: [
          'Direktor o‘z tajribasiga asoslanib tizim joriy qildi',
          'Direktor monitoring ma’lumotlarini tahlil qilib, ta’lim sifati pasayishiga ta’sir qilayotgan bir nechta omillar bo‘yicha kompleks chora ishlab chiqdi',
          'Direktor jamoa fikrini eshitmasdan qaror qabul qildi',
          'Direktor faqat bitta fan natijasiga asoslandi',
        ],
        answer: 1,
        explanation:
          'Dalillar asosida bir nechta bog‘liq omillarni tahlil qilish ikkala tamoyilni birlashtiradi.',
      },
      {
        id: 'm1t1-h11',
        text: 'Ilmiy asoslangan boshqaruv qarorini ishlab chiqishning eng mantiqiy ketma-ketligini belgilang.',
        options: [
          'Muammoni aniqlash → dalillarni yig‘ish → tahlil → qaror → monitoring',
          'Dalillarni yig‘ish → muammo → qaror → monitoring → tahlil',
          'Muammo → tahlil → dalillar → monitoring → qaror',
          'Qaror → muammo → tahlil → dalillar → monitoring',
        ],
        answer: 0,
        explanation:
          'Muammo aniqlanadi, dalillar yig‘iladi, tahlil qilinadi, qaror qabul qilinadi va natija kuzatiladi.',
      },
      {
        id: 'm1t1-h12',
        text: 'Akkreditatsiya jarayonidagi quyidagi bosqichlarning to‘g‘ri ketma-ketligini belgilang: 1-Kamchiliklarni bartaraf etish, 2-Tayyorgarlik, 3-Monitoring, 4-Attestatsiya va tahlil, 5-Qaror, 6-Ijroni nazorat qilish.',
        options: [
          '2 → 4 → 5 → 1 → 6 → 3',
          '4 → 2 → 5 → 1 → 3 → 6',
          '2 → 5 → 4 → 1 → 6 → 3',
          '1 → 2 → 4 → 5 → 6 → 3',
        ],
        answer: 0,
        explanation:
          'Materialdagi akkreditatsiya bosqichlari aynan shu ketma-ketlikda berilgan.',
      },
      {
        id: 'm1t1-h13',
        text: 'Rahbar avval maqsadni belgiladi, keyin indikatorlarni aniqladi, resurslarni taqsimladi va monitoring mexanizmini belgiladi. Ushbu faoliyatning boshqaruv mantig‘i qaysi?',
        options: [
          'Maqsad → o‘lchov → resurs → nazorat',
          'Nazorat → maqsad → resurs → o‘lchov',
          'Resurs → nazorat → maqsad → o‘lchov',
          'O‘lchov → resurs → nazorat → maqsad',
        ],
        answer: 0,
        explanation:
          'Aniq maqsad, uni o‘lchash, resurslarni yo‘naltirish va nazorat qilish boshqaruvning mantiqiy ketma-ketligidir.',
      },
      {
        id: 'm1t1-h14',
        text: '“Davomatni oshirish” maqsadini eng to‘liq amalga oshiruvchi yondashuv qaysi?',
        options: [
          '“Davomatni yaxshilash kerak.”',
          '“Davomatni oshirish uchun o‘qituvchilarga topshiriq beriladi.”',
          '“Mavjud ko‘rsatkich tahlil qilinadi, indikator belgilanadi, choralar rejalashtiriladi va natija monitoring qilinadi.”',
          '“Davomat bo‘yicha yig‘ilish o‘tkaziladi.”',
        ],
        answer: 2,
        explanation:
          'Maqsad, indikator, reja va monitoring birgalikda natijaga yo‘naltirilgan boshqaruvni ta’minlaydi.',
      },
      {
        id: 'm1t1-h15',
        text: 'Direktor motivatsiya uchun faqat moddiy rag‘batdan foydalanmoqda. Materialga ko‘ra qaysi yondashuv to‘liqroq?',
        options: [
          'Faqat moddiy rag‘bat yetarli',
          'Ma’naviy rag‘bat, kasbiy o‘sish va belgilangan tartibdagi moddiy rag‘batni uyg‘unlashtirish',
          'Faqat intizomiy choralarni kuchaytirish',
          'Faqat jamoa oldida tanqid qilish',
        ],
        answer: 1,
        explanation:
          'Material motivatsiyaning ma’naviy, kasbiy va moddiy shakllarini uyg‘un qo‘llashni ko‘rsatadi.',
      },
      {
        id: 'm1t1-h16',
        text: 'Maktab rahbari ota-onalar, mahalla va OTM bilan hamkorlikni yo‘lga qo‘ydi. Natijada kasbga yo‘naltirish imkoniyatlari kengaydi. Qaysi natija bevosita namoyon bo‘lgan?',
        options: [
          'Maktab ichki intizomining kuchayishi',
          'Resurs va imkoniyatlarning kengayishi',
          'Attestatsiya muddatining qisqarishi',
          'TALIS natijasining avtomatik oshishi',
        ],
        answer: 1,
        explanation:
          'Hamkorlik resurs va imkoniyatlarni kengaytirishi materialda bevosita ko‘rsatilgan.',
      },
      {
        id: 'm1t1-h17',
        text: 'Quyidagi holatlardan qaysi biri adolatlilik va shaffoflik tamoyiliga eng katta xavf tug‘diradi?',
        options: [
          'Barcha pedagoglarga bir xil mezon e’lon qilinishi',
          'Rag‘batlantirish mezonlarining oldindan ma’lum qilinishi',
          'Bir xil natijaga ega xodimlarga turli mezon asosida baho berilishi',
          'Qarorlarning asoslarini jamoaga tushuntirish',
        ],
        answer: 2,
        explanation:
          'Bir xil natijaga turlicha mezon qo‘llash adolatlilikka zid.',
      },
      {
        id: 'm1t1-h18',
        text: 'Direktor pedagogik kengash fikrini oldi, ammo jamoa fikri me’yoriy talablarga zid bo‘lgani sababli boshqa qaror qabul qildi. Bu holat qanday tushuntiriladi?',
        options: [
          'Demokratiklik mavjud emas',
          'Demokratik muhokama rahbarning yakuniy mas’uliyatini bekor qilmaydi',
          'Jamoa fikri har qanday holatda majburiydir',
          'Direktor qaror qabul qilish huquqidan voz kechishi kerak',
        ],
        answer: 1,
        explanation:
          'Jamoa fikri inobatga olinadi, ammo yakuniy qaror rahbarning qonuniy mas’uliyati doirasida qabul qilinadi.',
      },
      {
        id: 'm1t1-h19',
        text: 'Ta’lim tashkilotining oxirgi ikki yillik faoliyatini kompleks tahlil qilish qaysi jarayon bilan bevosita bog‘liq?',
        options: [
          'TALIS',
          'Attestatsiya',
          'Motivatsiya',
          'Ichki metodik seminar',
        ],
        answer: 1,
        explanation:
          'Materialda attestatsiyada oxirgi ikki yillik faoliyat kompleks tahlil qilinishi ko‘rsatilgan.',
      },
      {
        id: 'm1t1-h20',
        text: 'Quyidagilardan qaysi biri umumiy o‘rta ta’lim tashkilotlarini attestatsiyadan o‘tkazishda o‘rganiladigan baholash sohalariga kirmaydi?',
        options: [
          'Tashkiliy-boshqaruv faoliyatining samaradorligi',
          'Ta’lim sifati ko‘rsatkichlari',
          'Xavfsizlik',
          'Xodimlarning shaxsiy moliyaviy daromadlari',
        ],
        answer: 3,
        explanation:
          'Xodimlarning shaxsiy moliyaviy daromadlari materialda attestatsiyaning baholash sohasi sifatida keltirilmagan.',
      },
      {
        id: 'm1t1-h21',
        text: 'Attestatsiyaning asosiy prinsiplaridan qaysi qatorda faqat materialda ko‘rsatilgan prinsiplar berilgan?',
        options: [
          'Mustaqillik, xolislik, oshkoralik, shaffoflik',
          'Tezkorlik, raqobat, maxfiylik, jazolash',
          'Ierarxiya, majburiylik, raqobat, markazlashuv',
          'Innovatsiya, tejamkorlik, raqobat, maxfiylik',
        ],
        answer: 0,
        explanation:
          'Mustaqillik, xolislik, oshkoralik va shaffoflik attestatsiyaning asosiy prinsiplaridir.',
      },
      {
        id: 'm1t1-h22',
        text: 'Qaysi fikr akkreditatsiya mazmunini eng to‘liq ifodalaydi?',
        options: [
          'Ta’lim tashkilotining faoliyatini faqat ichki baholash',
          'Ta’lim tashkiloti faoliyatining davlat ta’lim standartlari va talablariga muvofiqligining davlat tomonidan e’tirof etilishi',
          'O‘qituvchilarni kasbiy rivojlantirish dasturi',
          'Maktabning yillik ish rejasini tasdiqlash',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya davlat tomonidan muvofiqlikni e’tirof etish mazmunini anglatadi.',
      },
      {
        id: 'm1t1-h23',
        text: 'Direktor TALISni o‘quvchilar bilimini bevosita baholaydigan xalqaro imtihon deb hisoblaydi. Qaysi javob uning xatosini eng aniq ko‘rsatadi?',
        options: [
          'TALIS faqat o‘qituvchilarni qamrab oladi',
          'TALIS faqat direktorlarni qamrab oladi',
          'TALIS anonim so‘rovnoma bo‘lib, imtihon emas',
          'TALIS faqat akkreditatsiya uchun o‘tkaziladi',
        ],
        answer: 2,
        explanation:
          'Material TALISni o‘qituvchilar va maktab rahbarlarining anonim so‘rovnomasi sifatida belgilaydi.',
      },
      {
        id: 'm1t1-h24',
        text: 'TALIS ma’lumotlaridan foydalanishning boshqaruv nuqtayi nazaridan eng bevosita ahamiyati qaysi?',
        options: [
          'Barcha maktablarga bir xil qaror berish',
          'Boshqaruv qarorlari uchun ilmiy asos yaratish',
          'O‘quvchilarni avtomatik baholash',
          'Maktab akkreditatsiyasini avtomatik amalga oshirish',
        ],
        answer: 1,
        explanation:
          'TALIS ma’lumotlari boshqaruv qarorlarini ilmiy asoslashga xizmat qilishi mumkin.',
      },
      {
        id: 'm1t1-h25',
        text: 'TALISning maqsadiga eng to‘liq mos keladigan javobni belgilang.',
        options: [
          'Faqat maktab direktorlarini reytinglash',
          'Samarali o‘quv jarayonini ta’minlovchi mexanizmlarni aniqlash va o‘qituvchi hamda rahbarlar haqidagi ma’lumotlarni qiyosiy tahlil qilish',
          'O‘quvchilarni yakuniy attestatsiyadan o‘tkazish',
          'Maktablarning moliyaviy faoliyatini tekshirish',
        ],
        answer: 1,
        explanation:
          'TALIS samarali o‘quv jarayoni mexanizmlarini o‘rganish va xalqaro qiyoslashga xizmat qiladi.',
      },
      {
        id: 'm1t1-h26',
        text: 'Tushunchalarni moslashtiring: 1-Ilmiylik, 2-Demokratiklik, 3-Nazorat va teskari aloqa, 4-Hamkorlik.',
        options: [
          '1-b, 2-d, 3-c, 4-a',
          '1-d, 2-b, 3-a, 4-c',
          '1-c, 2-a, 3-d, 4-b',
          '1-a, 2-c, 3-b, 4-d',
        ],
        answer: 0,
        explanation:
          'Ilmiylik—dalil; demokratiklik—jamoa; teskari aloqa—tavsiya; hamkorlik—tashqi sheriklar.',
      },
      {
        id: 'm1t1-h27',
        text: 'Quyidagi uch tushunchaning to‘g‘ri mosligini aniqlang: 1-Attestatsiya, 2-Akkreditatsiya, 3-TALIS.',
        options: [
          '1-muvofiqlikni aniqlash; 2-davlat tomonidan e’tirof; 3-xalqaro so‘rovnoma',
          '1-davlat tomonidan e’tirof; 2-muvofiqlikni aniqlash; 3-imtihon',
          '1-so‘rovnoma; 2-ichki monitoring; 3-attestatsiya',
          '1-imtihon; 2-so‘rovnoma; 3-akkreditatsiya',
        ],
        answer: 0,
        explanation:
          'Uch tushuncha materialda aynan shu funksional farqlar bilan berilgan.',
      },
      {
        id: 'm1t1-h28',
        text: 'Maktabda o‘zlashtirish pasaydi. Quyidagi ketma-ketliklardan qaysi biri ilmiy boshqaruvga eng mos?',
        options: [
          'Dars kuzatuvi → natijalar tahlili → suhbat → sabablarni aniqlash → chora-tadbir',
          'Chora-tadbir → dars kuzatuvi → sabab → natija → suhbat',
          'Tanbeh → chora → monitoring → sabab → tahlil',
          'Rag‘bat → qaror → monitoring → sabab → tahlil',
        ],
        answer: 0,
        explanation:
          'Dalillarni yig‘ish va sababni aniqlashdan keyin chora ishlab chiqiladi.',
      },
      {
        id: 'm1t1-h29',
        text: 'Qaysi variant maqsadlilik, ilmiylik, demokratiklik, rejalilik va nazorat tamoyillarini birgalikda eng to‘liq aks ettiradi?',
        options: [
          'Faqat direktorning yakka qarori',
          'Maqsad va indikatorlarni belgilash, ma’lumotlarni tahlil qilish, jamoa fikrini olish, reja tuzish va monitoring qilish',
          'Faqat xodimlarni tekshirish',
          'Faqat moddiy rag‘bat berish',
        ],
        answer: 1,
        explanation:
          'Variantda bir nechta asosiy boshqaruv tamoyillari yagona jarayonda uyg‘unlashgan.',
      },
      {
        id: 'm1t1-h30',
        text: 'Maktab rahbari ta’lim sifatini oshirish tizimini joriy etdi. O‘zlashtirish, davomat va intizom yaxshilandi. Ammo direktor natijani faqat o‘z tajribasi bilan izohladi va boshqa omillarni tahlil qilmadi. Qaysi jihat yetarli emas?',
        options: [
          'Ilmiylik — natijani dalillar asosida kompleks tahlil qilish',
          'Hamkorlik — ota-onalar bilan aloqani to‘xtatish',
          'Rag‘batlantirish — barcha xodimlarga mukofot berish',
          'Rejalilik — yangi reja tuzishni bekor qilish',
        ],
        answer: 0,
        explanation:
          'Natijani faqat shaxsiy tajriba bilan izohlash ilmiy va dalillarga asoslangan tahlilni yetarli ta’minlamaydi.',
      },
    ],

    // =========================================================
    // 🔵 KEYS — 10 TA
    // =========================================================
    case: [
      {
        id: 'm1t1-c01',
        text: 'Maktabda 7-sinf o‘quvchilarining matematika fanidan o‘zlashtirish ko‘rsatkichi ikki chorak davomida pasaydi. Ayrim o‘qituvchilar bunga o‘quvchilarning qiziqishi pastligini sabab qilib ko‘rsatmoqda. Direktor muammoni aniqlash uchun dars kuzatuvlari, o‘zlashtirish ko‘rsatkichlari, davomat ma’lumotlari va o‘quvchilar bilan suhbat natijalarini o‘rganmoqchi. Direktorning eng maqbul birinchi harakati qaysi?',
        options: [
          'Darhol matematika o‘qituvchilariga intizomiy chora ko‘rish',
          'Muammoni dalillar va monitoring natijalari asosida kompleks tahlil qilish',
          'Barcha o‘qituvchilarga qo‘shimcha topshiriq berish',
          'Ota-onalarni yig‘ib, o‘quvchilarni tanqid qilish',
        ],
        answer: 1,
        explanation:
          'Muammoni avval dalillar asosida kompleks tahlil qilish ilmiylik va tizimlilik tamoyillariga mos.',
      },
      {
        id: 'm1t1-c02',
        text: 'Maktabda yangi ichki nazorat tizimi joriy etilmoqda. Direktor pedagogik kengashda o‘qituvchilar, metodik birlashma rahbarlari va sinf rahbarlarining fikrlarini eshitdi. Ayrim takliflar amaldagi talablarga mos emasligi aniqlandi. Direktor nima qilishi kerak?',
        options: [
          'Jamoaning barcha takliflarini o‘zgartirmasdan qabul qilish',
          'Jamoa fikrlarini inobatga olib, amaldagi talablar asosida yakuniy qaror qabul qilish',
          'Jamoa fikrini umuman hisobga olmaslik',
          'Qarorni faqat metodik birlashma rahbarlariga topshirish',
        ],
        answer: 1,
        explanation:
          'Demokratik muhokama rahbarning qonuniy va yakuniy mas’uliyatini bekor qilmaydi.',
      },
      {
        id: 'm1t1-c03',
        text: 'Direktor bir o‘qituvchining darsini kuzatdi. Darsda ayrim metodik kamchiliklar aniqlandi. Direktor faqat “dars sifati talab darajasida emas” deb xulosa yozdi va boshqa tavsiya bermadi. Qaysi harakat yetishmayapti?',
        options: [
          'O‘qituvchini boshqa lavozimga o‘tkazish',
          'Kamchiliklarni bartaraf etish bo‘yicha teskari aloqa, tavsiya va yordam berish',
          'Dars kuzatuvlarini butunlay to‘xtatish',
          'O‘qituvchini jamoa oldida tanqid qilish',
        ],
        answer: 1,
        explanation:
          'Nazorat rivojlantirishga xizmat qilishi uchun teskari aloqa va metodik yordam berilishi kerak.',
      },
      {
        id: 'm1t1-c04',
        text: 'Maktabda ikki nafar o‘qituvchi bir xil natijaga erishdi. Birinchi o‘qituvchi rahbariyatga yaqin bo‘lgani sababli rag‘batlantirildi, ikkinchisiga rag‘bat berilmadi. Oldindan belgilangan aniq mezonlar ham mavjud emas. Rahbar qanday chora ko‘rishi kerak?',
        options: [
          'Faqat birinchi o‘qituvchini rag‘batlantirishni davom ettirish',
          'Rag‘batlantirish mezonlarini aniq va shaffof belgilash',
          'Umuman rag‘batlantirishni bekor qilish',
          'Barcha xodimlarga bir xil miqdorda mukofot berish',
        ],
        answer: 1,
        explanation:
          'Aniq va shaffof mezonlar adolatlilikni ta’minlash uchun zarur.',
      },
      {
        id: 'm1t1-c05',
        text: 'Direktor yangi o‘quv yilida “ta’lim sifatini oshirish”ni asosiy maqsad qilib belgiladi. Ammo maqsadga erishilganini qanday aniqlash bo‘yicha mezonlar belgilanmagan. Keyingi eng zarur boshqaruv harakati qaysi?',
        options: [
          'Faqat yig‘ilishlar sonini ko‘paytirish',
          'Maqsadni o‘lchash uchun aniq indikatorlarni belgilash',
          'Barcha o‘qituvchilarga qo‘shimcha vazifa berish',
          'Maktabning tashqi ko‘rinishini yaxshilash',
        ],
        answer: 1,
        explanation:
          'Maqsadga erishilganini baholash uchun aniq va o‘lchanadigan indikatorlar kerak.',
      },
      {
        id: 'm1t1-c06',
        text: 'Maktabda attestatsiya jarayoniga tayyorgarlik boshlandi. Direktor faqat hujjatlarni tartibga keltirmoqchi. Biroq attestatsiyada tashkilot faoliyatining oxirgi ikki yillik holati kompleks tahlil qilinadi. Eng to‘g‘ri yondashuv qaysi?',
        options: [
          'Faqat hujjatlarni tartibga keltirish',
          'Faqat o‘qituvchilar faoliyatini tekshirish',
          'Baholash sohalari bo‘yicha maktab faoliyatini kompleks tahlil qilish va tayyorgarlik ko‘rish',
          'Faqat maktab binosini ta’mirlash',
        ],
        answer: 2,
        explanation:
          'Attestatsiyada oxirgi ikki yillik faoliyat kompleks tahlil qilinishi sababli tayyorgarlik ham kompleks bo‘lishi kerak.',
      },
      {
        id: 'm1t1-c07',
        text: 'Direktor yig‘ilishda: “TALISdan yuqori natija olish uchun o‘qituvchilarni imtihonga tayyorlashimiz kerak”, dedi. Material asosida bu fikr qanday to‘g‘rilanadi?',
        options: [
          'TALIS o‘quvchilar uchun imtihon ekanini tushuntirish kerak',
          'TALIS o‘qituvchilar va maktab rahbarlarining anonim so‘rovnomasi ekanini tushuntirish kerak',
          'TALIS faqat direktorlar uchun imtihon ekanini tushuntirish kerak',
          'TALIS akkreditatsiya jarayonining bir bosqichi ekanini tushuntirish kerak',
        ],
        answer: 1,
        explanation:
          'Materialda TALIS imtihon emas, o‘qituvchi va maktab rahbarlarining anonim so‘rovnomasi sifatida berilgan.',
      },
      {
        id: 'm1t1-c08',
        text: 'Maktabda davomat pasaygan. Direktor faqat sinf rahbarlariga tanbeh berdi. Keyingi oyda ham davomat yaxshilanmadi. Tahlil natijasida oilaviy sharoit, transport, o‘quvchilarning qiziqishi va ayrim darslarning tashkil etilishi bilan bog‘liq omillar aniqlandi. Direktor keyingi bosqichda nima qilishi kerak?',
        options: [
          'Faqat sinf rahbarlariga yana tanbeh berish',
          'Muammoni bir nechta o‘zaro bog‘liq omillar asosida kompleks hal qilish',
          'Barcha o‘quvchilarni jazolash',
          'Davomat monitoringini bekor qilish',
        ],
        answer: 1,
        explanation:
          'Muammo bir nechta omilga bog‘liq bo‘lsa, kompleks yondashuv asosida choralar ko‘riladi.',
      },
      {
        id: 'm1t1-c09',
        text: 'Maktabda o‘quvchilarni kasbga yo‘naltirish ishlari sust. Maktab rahbari yaqin hududdagi OTMlar, tashkilotlar va mahalla bilan hamkorlik qilish imkoniyatlari mavjudligini aniqladi. Eng maqbul qaror qaysi?',
        options: [
          'Kasbga yo‘naltirishni faqat maktab ichida tashkil etish',
          'Ota-onalar, mahalla, OTM va hamkor tashkilotlar bilan tizimli hamkorlikni yo‘lga qo‘yish',
          'Faqat sinf rahbarlariga qo‘shimcha topshiriq berish',
          'Kasbga yo‘naltirish ishlarini keyingi yilga qoldirish',
        ],
        answer: 1,
        explanation:
          'Hamkorlik va ijtimoiy sheriklik maktabning imkoniyat va resurslarini kengaytiradi.',
      },
      {
        id: 'm1t1-c10',
        text: 'Maktabda ta’lim sifati, davomat va intizom ko‘rsatkichlari bir vaqtda pasaymoqda. Direktor uch variantni ko‘rib chiqdi: 1) barcha o‘qituvchilarga tanbeh berish; 2) faqat davomatni nazorat qilishni kuchaytirish; 3) ma’lumotlarni tahlil qilish, sabablarni aniqlash, jamoa bilan muhokama qilish, maqsad va indikatorlarni belgilash, chora-tadbirlar rejasini tuzish hamda natijani monitoring qilish. Qaysi variant materialdagi boshqaruv tamoyillariga eng to‘liq mos?',
        options: [
          '1-variant',
          '2-variant',
          '3-variant',
          '1 va 2-variant',
        ],
        answer: 2,
        explanation:
          '3-variant ilmiylik, tizimlilik, demokratiklik, maqsadlilik, rejalilik hamda nazorat va teskari aloqani birlashtiradi.',
      },
    ],
  },
},
  description:
    'Ta’lim tashkilotlarini akkreditatsiyadan o‘tkazish, TALIS tadqiqoti va zamonaviy ta’lim boshqaruvining asosiy yo‘nalishlari.',

  levels: {
    /*
     * =====================================================
     * 🟢 OSON — 10 TA
     * =====================================================
     */

    easy: [
      {
        id: 'm1t1-e01',
        text:
          'Ta’lim tashkilotlarini akkreditatsiyadan o‘tkazishning asosiy mazmuni nimaga qaratilgan?',
        options: [
          'Ta’lim tashkiloti faoliyatining belgilangan talab va standartlarga muvofiqligini baholashga',
          'Faqat o‘qituvchilarning ish haqini belgilashga',
          'Faqat o‘quvchilar sonini aniqlashga',
          'Maktab binosining tashqi ko‘rinishini baholashga',
        ],
        answer: 0,
        explanation:
          'Akkreditatsiya ta’lim tashkiloti faoliyatining belgilangan davlat ta’lim standartlari va talablariga muvofiqligini baholashga xizmat qiladi.',
      },

      {
        id: 'm1t1-e02',
        text:
          'TALIS tadqiqotining asosiy xususiyati qaysi javobda to‘g‘ri ko‘rsatilgan?',
        options: [
          'U barcha o‘qituvchilar uchun majburiy attestatsiya imtihonidir.',
          'U o‘qituvchilar va maktab rahbarlari ishtirokidagi anonim xalqaro so‘rov tadqiqotidir.',
          'U faqat o‘quvchilar bilimini tekshiruvchi imtihondir.',
          'U maktablarning moliyaviy auditidir.',
        ],
        answer: 1,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlarining qarashlari hamda tajribalarini o‘rganishga qaratilgan anonim xalqaro so‘rov tadqiqotidir.',
      },

      {
        id: 'm1t1-e03',
        text:
          'TALIS tadqiqoti asosan kimlar haqidagi ma’lumotlarni o‘rganadi?',
        options: [
          'Faqat ota-onalar',
          'Faqat o‘quvchilar',
          'O‘qituvchilar va maktab rahbarlari',
          'Faqat davlat organlari xodimlari',
        ],
        answer: 2,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlarining faoliyati, qarashlari va ish sharoitlari haqida xalqaro taqqoslanadigan ma’lumot beradi.',
      },

      {
        id: 'm1t1-e04',
        text:
          'TALIS tadqiqotida ma’lumotlar qanday asosiy vosita orqali yig‘iladi?',
        options: [
          'Standartlashtirilgan so‘rovnomalar orqali',
          'Faqat og‘zaki suhbatlar orqali',
          'Faqat direktor buyruqlari orqali',
          'Faqat o‘quvchilar kundaliklari orqali',
        ],
        answer: 0,
        explanation:
          'TALIS xalqaro miqyosda taqqoslanadigan ma’lumot olish uchun standartlashtirilgan so‘rovnomalardan foydalanadi.',
      },

      {
        id: 'm1t1-e05',
        text:
          'Yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti necha yil muddatga akkreditatsiyadan o‘tgan deb hisoblanadi?',
        options: [
          '3 yil',
          '5 yil',
          '10 yil',
          '11 yil',
        ],
        answer: 3,
        explanation:
          'Berilgan o‘quv materialiga ko‘ra, yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti tashkil etilgan kundan boshlab 11 yil davomida akkreditatsiyadan o‘tgan deb hisoblanadi.',
      },

      {
        id: 'm1t1-e06',
        text:
          'Akkreditatsiya jarayonining dastlabki bosqichi qaysi?',
        options: [
          'Kamchiliklarni bartaraf etish',
          'Attestatsiyaga tayyorgarlik',
          'Monitoring o‘tkazish',
          'Yakuniy qaror chiqarish',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya jarayoni attestatsiyaga tayyorgarlik bosqichidan boshlanadi.',
      },

      {
        id: 'm1t1-e07',
        text:
          'TALIS nimani anglatadi?',
        options: [
          'Xalqaro o‘qitish va maktab boshqaruvi bo‘yicha so‘rov tadqiqotini',
          'Maktablar uchun moliyaviy nazorat tizimini',
          'O‘quvchilar uchun xalqaro imtihonni',
          'Ta’lim tashkilotlarini litsenziyalash tizimini',
        ],
        answer: 0,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlari haqidagi xalqaro taqqoslanadigan ma’lumotlarni shakllantiruvchi so‘rov tadqiqotidir.',
      },

      {
        id: 'm1t1-e08',
        text:
          'Akkreditatsiya jarayonida attestatsiyadan keyin qanday ish amalga oshiriladi?',
        options: [
          'Faqat yangi o‘quvchilar qabul qilinadi.',
          'Attestatsiya natijalari tahlil qilinadi.',
          'Maktab faoliyati to‘xtatiladi.',
          'Faqat moliyaviy hisobot tuziladi.',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya bosqichlaridan biri attestatsiya va uning natijalarini tahlil qilishdan iborat.',
      },

      {
        id: 'm1t1-e09',
        text:
          'TALIS tadqiqotining muhim maqsadlaridan biri nima?',
        options: [
          'Maktablarni reyting bo‘yicha jazolash',
          'O‘qituvchilarga individual jarima belgilash',
          'Samarali ta’limni qo‘llab-quvvatlovchi mexanizmlarni aniqlash',
          'Maktablarning daromadini hisoblash',
        ],
        answer: 2,
        explanation:
          'TALIS samarali o‘qitish va ta’limni qo‘llab-quvvatlovchi omillar va mexanizmlarni aniqlashga yordam beradi.',
      },

      {
        id: 'm1t1-e10',
        text:
          'TALIS ma’lumotlarining muhim afzalligi nimada?',
        options: [
          'Ular xalqaro miqyosda taqqoslanadigan ma’lumot beradi.',
          'Ular faqat bitta maktab uchun ishlatiladi.',
          'Ular faqat moliyaviy ma’lumotlarni beradi.',
          'Ular faqat o‘quvchilar baholarini aks ettiradi.',
        ],
        answer: 0,
        explanation:
          'Standartlashtirilgan metodologiya TALIS ma’lumotlarini turli mamlakatlar kesimida taqqoslash imkonini beradi.',
      },
    ],

    /*
     * =====================================================
     * 🟡 O‘RTA — 10 TA
     * =====================================================
     */

    medium: [
      {
        id: 'm1t1-m01',
        text:
          'Maktab rahbari TALIS natijalaridan foydalanib, o‘qituvchilarning kasbiy rivojlanish ehtiyojlarini aniqlamoqchi. Qaysi yondashuv eng mantiqiy?',
        options: [
          'Faqat bitta o‘qituvchining fikriga asoslanish',
          'TALIS ma’lumotlarini boshqa ichki monitoring ma’lumotlari bilan tahlil qilish',
          'Faqat o‘quvchilar sonini hisoblash',
          'TALIS natijalarini umuman hisobga olmaslik',
        ],
        answer: 1,
        explanation:
          'TALIS ma’lumotlari boshqaruv qarorlarini dalillarga asoslash uchun boshqa maktab ma’lumotlari bilan birgalikda tahlil qilinishi mumkin.',
      },

      {
        id: 'm1t1-m02',
        text:
          'Akkreditatsiya jarayonida aniqlangan kamchiliklarni bartaraf etish bosqichining asosiy vazifasi nima?',
        options: [
          'Aniqlangan muammolarni bartaraf etish bo‘yicha choralarni amalga oshirish',
          'Yangi maktab binosini qurish',
          'Faqat o‘qituvchilar sonini kamaytirish',
          'TALIS so‘rovnomasini bekor qilish',
        ],
        answer: 0,
        explanation:
          'Kamchiliklarni bartaraf etish bosqichida attestatsiya va baholash natijalarida aniqlangan muammolarni tuzatishga qaratilgan choralar amalga oshiriladi.',
      },

      {
        id: 'm1t1-m03',
        text:
          'Maktab rahbari boshqaruv qarorini faqat shaxsiy fikriga asoslab qabul qilmoqda. Zamonaviy boshqaruv nuqtayi nazaridan qanday yondashuv maqsadga muvofiq?',
        options: [
          'Qarorni tezroq qabul qilish uchun ma’lumotlardan voz kechish',
          'Qarorni faqat bir xodim bilan muhokama qilish',
          'Mavjud dalillar va ma’lumotlarni tahlil qilish',
          'Har qanday qarorni tasodifiy qabul qilish',
        ],
        answer: 2,
        explanation:
          'Zamonaviy boshqaruvda qarorlarni dalillar va mavjud ma’lumotlar asosida qabul qilish samaradorlikni oshiradi.',
      },

      {
        id: 'm1t1-m04',
        text:
          'TALIS ma’lumotlari turli mamlakatlarda ta’lim boshqaruvini o‘rganishda nima uchun foydali?',
        options: [
          'Chunki barcha mamlakatlarda ta’lim tizimi bir xil.',
          'Chunki standartlashtirilgan ma’lumotlar xalqaro taqqoslash imkonini beradi.',
          'Chunki TALIS faqat bitta mamlakatni o‘rganadi.',
          'Chunki TALIS barcha maktablarni bir xil boshqaradi.',
        ],
        answer: 1,
        explanation:
          'TALISning standartlashtirilgan yondashuvi turli mamlakatlar tajribasini taqqoslash imkonini beradi.',
      },

      {
        id: 'm1t1-m05',
        text:
          'Ta’lim boshqaruvini transformatsiya qilishda “avtonomiya va hisobdorlik muvozanati” nimani anglatadi?',
        options: [
          'Rahbarga cheksiz vakolat berishni',
          'Barcha qarorlarni yuqori tashkilot qabul qilishini',
          'Mustaqil qaror qabul qilish imkoniyati bilan natijalar uchun mas’uliyatni uyg‘unlashtirishni',
          'Hisobdorlikni butunlay bekor qilishni',
        ],
        answer: 2,
        explanation:
          'Muvozanat rahbarga muayyan mustaqillik berish bilan birga natijalar va qarorlar uchun javobgarlikni ham ta’minlaydi.',
      },

      {
        id: 'm1t1-m06',
        text:
          'Pedagogik liderlikning boshqaruvdagi asosiy yo‘nalishi nimaga qaratiladi?',
        options: [
          'Ta’lim va o‘qitish jarayonini rivojlantirishga',
          'Faqat binoni boshqarishga',
          'Faqat moliyaviy masalalarga',
          'Faqat hujjatlarni ko‘paytirishga',
        ],
        answer: 0,
        explanation:
          'Pedagogik liderlik markazida ta’lim sifati, o‘qitish jarayoni va pedagoglarning rivojlanishi turadi.',
      },

      {
        id: 'm1t1-m07',
        text:
          'Akkreditatsiya natijasida kamchiliklar aniqlansa, boshqaruv nuqtayi nazaridan keyingi muhim qadam qaysi?',
        options: [
          'Muammoni yashirish',
          'Kamchiliklarni bartaraf etish choralarini belgilash va amalga oshirish',
          'Barcha faoliyatni to‘xtatish',
          'Faqat yangi hisobot yaratish',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya natijalari boshqaruvni yaxshilashga xizmat qilishi uchun aniqlangan kamchiliklarni bartaraf etish bo‘yicha amaliy choralar ko‘riladi.',
      },

      {
        id: 'm1t1-m08',
        text:
          'TALIS ma’lumotlari asosida o‘qituvchilarning kasbiy rivojlanishiga oid ehtiyojlar aniqlansa, rahbarning keyingi qadami qanday bo‘lishi mumkin?',
        options: [
          'Ehtiyojlarni inkor etish',
          'Kasbiy rivojlanish tadbirlarini rejalashtirish',
          'Barcha o‘qituvchilarni bir xil usulda baholash',
          'Monitoringni bekor qilish',
        ],
        answer: 1,
        explanation:
          'Aniqlangan ehtiyojlar asosida malaka oshirish, mentorlik va boshqa kasbiy rivojlanish tadbirlarini rejalashtirish mumkin.',
      },

      {
        id: 'm1t1-m09',
        text:
          '“Dalillarga asoslangan boshqaruv”ning asosiy belgisi qaysi?',
        options: [
          'Qarorni faqat odat asosida qabul qilish',
          'Qarorni faqat rahbarning shaxsiy tajribasiga asoslash',
          'Qarorlarni ishonchli ma’lumot va tahlil asosida qabul qilish',
          'Ma’lumotlarni boshqaruvdan chiqarib tashlash',
        ],
        answer: 2,
        explanation:
          'Dalillarga asoslangan boshqaruvda ma’lumotlar tahlil qilinadi va ular asosida qarorlar ishlab chiqiladi.',
      },

      {
        id: 'm1t1-m10',
        text:
          'TALIS natijalaridan maktab rivojlanish rejasida foydalanishning asosiy maqsadi nima?',
        options: [
          'Muammolarni aniqlash va rivojlanish choralarini asoslash',
          'Faqat hisobot hajmini oshirish',
          'O‘qituvchilarni jazolash',
          'Maktab faoliyatini to‘xtatish',
        ],
        answer: 0,
        explanation:
          'TALIS ma’lumotlari ta’lim muhiti va pedagogik faoliyat bilan bog‘liq masalalarni aniqlash va rivojlanish choralarini asoslashda yordam beradi.',
      },
    ],

    /*
     * =====================================================
     * 🔴 QIYIN — 10 TA
     * =====================================================
     */

    hard: [
      {
        id: 'm1t1-h01',
        text:
          'Maktabda ta’lim sifati bo‘yicha muammolar mavjud. Rahbar xalqaro tajribadan foydalanmoqchi. Qaysi yondashuv boshqaruv nuqtayi nazaridan asosliroq?',
        options: [
          'Boshqa mamlakat tajribasini hech qanday moslashtirishsiz ko‘chirish',
          'Xalqaro ma’lumotlarni maktabning mahalliy sharoiti va ichki ma’lumotlari bilan taqqoslab tahlil qilish',
          'Faqat bitta xalqaro ko‘rsatkich asosida qaror qabul qilish',
          'Xalqaro tajribani umuman o‘rganmaslik',
        ],
        answer: 1,
        explanation:
          'Xalqaro tajribadan samarali foydalanish uchun uni mahalliy sharoit, mavjud resurslar va maktabning ichki ma’lumotlari bilan uyg‘un holda tahlil qilish zarur.',
      },

      {
        id: 'm1t1-h02',
        text:
          'TALIS natijalari o‘qituvchilarning kasbiy rivojlanish ehtiyojlari borligini ko‘rsatdi. Rahbar faqat seminarlar sonini ko‘paytirsa, bu natijaga erishish uchun yetarlimi?',
        options: [
          'Ha, seminarlar soni har doim asosiy mezon hisoblanadi.',
          'Yo‘q, ehtiyoj, mazmun, ishtirok va natijani baholash tizimi ham ko‘rib chiqilishi kerak.',
          'Ha, chunki kasbiy rivojlanish faqat seminar bilan belgilanadi.',
          'Yo‘q, chunki TALIS ma’lumotlaridan foydalanib bo‘lmaydi.',
        ],
        answer: 1,
        explanation:
          'Kasbiy rivojlanishning samaradorligi faqat tadbirlar soni bilan emas, balki aniqlangan ehtiyoj, mazmun, amaliy qo‘llash va natijalar bilan ham baholanadi.',
      },

      {
        id: 'm1t1-h03',
        text:
          'Akkreditatsiya jarayonida aniqlangan kamchiliklar bartaraf etildi. Boshqaruv siklining keyingi mantiqiy elementi nima bo‘lishi mumkin?',
        options: [
          'Natijalarni nazorat va monitoring qilish',
          'Barcha hujjatlarni yo‘q qilish',
          'Muammolar qayta ko‘tarilmasligini taxmin qilish',
          'Ta’lim sifatini baholashni to‘xtatish',
        ],
        answer: 0,
        explanation:
          'Kamchiliklarni bartaraf etishdan keyin choralar ijrosini monitoring qilish muhim boshqaruv bosqichi hisoblanadi.',
      },

      {
        id: 'm1t1-h04',
        text:
          'Maktab rahbariyati TALIS ma’lumotlari bilan ichki monitoring natijalari o‘rtasida farq aniqladi. Eng maqbul boshqaruv yondashuvi qaysi?',
        options: [
          'Darhol bir manbani noto‘g‘ri deb e’lon qilish',
          'Farq sabablarini aniqlash uchun metodologiya va ma’lumotlarni tahlil qilish',
          'Ichki monitoringni bekor qilish',
          'TALIS natijalarini yashirish',
        ],
        answer: 1,
        explanation:
          'Turli ma’lumotlar o‘rtasidagi farqni ko‘r-ko‘rona rad etish emas, balki ularning manbasi, metodologiyasi va mazmunini tahlil qilish boshqaruv jihatdan asosliroqdir.',
      },

      {
        id: 'm1t1-h05',
        text:
          '“Avtonomiya va hisobdorlik muvozanati” buzilganda qaysi xavf yuzaga kelishi mumkin?',
        options: [
          'Mustaqil qarorlar va natijalar o‘rtasidagi bog‘liqlik susayishi',
          'Har doim ta’lim sifati avtomatik oshishi',
          'Barcha xodimlarning motivatsiyasi avtomatik ortishi',
          'Monitoringga ehtiyoj qolmasligi',
        ],
        answer: 0,
        explanation:
          'Avtonomiya mas’uliyat va hisobdorlik bilan muvozanatlanmasa, mustaqil qarorlarning natijalari ustidan nazorat susayishi mumkin.',
      },

      {
        id: 'm1t1-h06',
        text:
          'Rahbar xalqaro tajribani o‘z maktabiga joriy qilmoqchi. Birinchi navbatda nimani aniqlashi muhim?',
        options: [
          'Faqat boshqa davlatdagi maktab nomini',
          'Tajribaning maqsadi, sharti, resurslari va mahalliy sharoitga mosligini',
          'Faqat taqdimot dizaynini',
          'Faqat tajriba muallifining lavozimini',
        ],
        answer: 1,
        explanation:
          'Xalqaro tajribani ko‘chirishdan oldin uning maqsadi, ishlash shartlari, resurslari va mahalliy kontekstga mosligi baholanadi.',
      },

      {
        id: 'm1t1-h07',
        text:
          'TALIS ma’lumotlari asosida muammo aniqlandi, ammo uni bartaraf etish bo‘yicha hech qanday chora rejalashtirilmadi. Bunda boshqaruvning qaysi elementi yetishmayapti?',
        options: [
          'Faqat ma’lumot yig‘ish',
          'Natijalarni amaliy boshqaruv qarorlariga aylantirish',
          'Faqat xalqaro taqqoslash',
          'Faqat so‘rovnomani takrorlash',
        ],
        answer: 1,
        explanation:
          'Ma’lumotning boshqaruvdagi qiymati undan amaliy qarorlar va rivojlanish choralarini ishlab chiqishda foydalanilganda yuzaga chiqadi.',
      },

      {
        id: 'm1t1-h08',
        text:
          'Akkreditatsiya va TALISning boshqaruvdagi vazifalarini qiyoslaganda qaysi fikr to‘g‘ri?',
        options: [
          'Ikkalasi ham aynan bir xil jarayon.',
          'Akkreditatsiya muvofiqlikni baholash jarayoniga, TALIS esa o‘qituvchi va rahbarlar tajribasi haqidagi xalqaro so‘rov ma’lumotlariga yo‘naltirilgan.',
          'TALIS litsenziya berish jarayonidir.',
          'Akkreditatsiya faqat anonim so‘rovdan iborat.',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya va TALISning maqsadi hamda metodologiyasi turlicha: biri ta’lim tashkilotining belgilangan talablarga muvofiqligini baholashga, ikkinchisi esa xalqaro so‘rov orqali ma’lumot yig‘ishga xizmat qiladi.',
      },

      {
        id: 'm1t1-h09',
        text:
          'Maktab rahbari rivojlanish qarorini qabul qilishdan oldin bir nechta manbadan ma’lumot yig‘di. Keyingi eng muhim bosqich nima?',
        options: [
          'Barcha ma’lumotlarni o‘zgartirish',
          'Ma’lumotlarni tahlil qilib, muammo va sabablar o‘rtasidagi bog‘liqlikni aniqlash',
          'Faqat eng ijobiy ko‘rsatkichni tanlash',
          'Qarorni oldindan belgilab qo‘yish',
        ],
        answer: 1,
        explanation:
          'Ma’lumot yig‘ishning o‘zi yetarli emas. Qaror uchun ma’lumotlar tahlil qilinib, muammo va sabablar aniqlanishi kerak.',
      },

      {
        id: 'm1t1-h10',
        text:
          'Ta’lim boshqaruvini transformatsiya qilishda jamoatchilik ishtirokining ahamiyati nimada?',
        options: [
          'Barcha qarorlarni faqat jamoatchilik qabul qiladi.',
          'Qarorlar muhokamasida manfaatdor tomonlarning fikrini hisobga olish imkonini beradi.',
          'Rahbarning barcha vakolatlarini bekor qiladi.',
          'Monitoringni keraksiz qiladi.',
        ],
        answer: 1,
        explanation:
          'Demokratik boshqaruv va jamoatchilik ishtiroki manfaatdor tomonlarning fikrlarini hisobga olish hamda boshqaruv jarayonining ochiqligini kuchaytirishga xizmat qiladi.',
      },
    ],

    /*
     * =====================================================
     * 🔵 KEYS — 10 TA
     * =====================================================
     */

    case: [
      {
        id: 'm1t1-c01',
        text:
          'Maktabda o‘qituvchilarning kasbiy rivojlanishiga ehtiyoj borligi aniqlandi. Direktor darhol barcha o‘qituvchilarni bir xil seminarga yubormoqchi. Siz rahbar maslahatchisi sifatida qanday yondashuvni taklif qilasiz?',
        options: [
          'Barcha o‘qituvchilarni bir xil seminarga yuborish',
          'Ehtiyojlarni guruhlar bo‘yicha aniqlab, maqsadli kasbiy rivojlanish rejasini tuzish',
          'Kasbiy rivojlanishni vaqtincha to‘xtatish',
          'Faqat tajribali o‘qituvchilarni rivojlantirish',
        ],
        answer: 1,
        explanation:
          'Kasbiy rivojlanish ehtiyojlari turlicha bo‘lishi mumkin. Shuning uchun ehtiyojlarni aniqlash va maqsadli reja tuzish samaraliroq yondashuvdir.',
      },

      {
        id: 'm1t1-c02',
        text:
          'Akkreditatsiya jarayonida maktabda bir nechta kamchilik aniqlandi. Direktor ularni faqat hisobotda qayd etib qo‘ydi. Keyingi boshqaruv chorasi qanday bo‘lishi kerak?',
        options: [
          'Kamchiliklarni unutish',
          'Har bir kamchilik bo‘yicha aniq chora, mas’ul va muddat belgilash',
          'Faqat yangi hisobot yozish',
          'Muammoni boshqa maktabga yuklash',
        ],
        answer: 1,
        explanation:
          'Kamchiliklarni qayd etishning o‘zi yetarli emas. Ularni bartaraf etish uchun aniq choralar, mas’ullar va muddatlar belgilanadi.',
      },

      {
        id: 'm1t1-c03',
        text:
          'Maktabning ichki monitoringi o‘quvchilarning natijalari pasayganini ko‘rsatdi. Rahbar faqat o‘qituvchilarni tanqid qilish bilan cheklanmoqda. Zamonaviy boshqaruv nuqtayi nazaridan nima qilish kerak?',
        options: [
          'Faqat tanqidni kuchaytirish',
          'Muammoning sabablarini ma’lumotlar asosida aniqlab, rivojlanish choralarini ishlab chiqish',
          'Monitoringni bekor qilish',
          'O‘quvchilar sonini kamaytirish',
        ],
        answer: 1,
        explanation:
          'Samarali boshqaruv muammoni aniqlash, sabablarini tahlil qilish va amaliy rivojlanish choralarini ishlab chiqishni talab qiladi.',
      },

      {
        id: 'm1t1-c04',
        text:
          'TALIS natijalari maktab rahbariyatiga o‘qituvchilarning ish sharoitlari haqida yangi ma’lumot berdi. Rahbar undan qanday foydalanishi mumkin?',
        options: [
          'Ma’lumotlarni e’tiborsiz qoldirishi mumkin.',
          'Maktabning rivojlanish rejasida tegishli muammolarni hisobga olishi mumkin.',
          'Faqat o‘qituvchilarni jazolashi mumkin.',
          'Maktab faoliyatini to‘xtatishi mumkin.',
        ],
        answer: 1,
        explanation:
          'TALIS ma’lumotlari maktabdagi o‘qituvchilar va rahbarlar faoliyati bilan bog‘liq masalalarni rivojlanish rejasini ishlab chiqishda hisobga olishga yordam beradi.',
      },

      {
        id: 'm1t1-c05',
        text:
          'Rahbar xalqaro tajribani o‘rganib, uni maktabga to‘liq ko‘chirishga qaror qildi. Ammo maktab sharoiti boshqa. Qaysi qaror boshqaruv nuqtayi nazaridan asosli?',
        options: [
          'Tajribani aynanligicha ko‘chirish',
          'Tajribani mahalliy sharoitga moslashtirish',
          'Xalqaro tajribadan butunlay voz kechish',
          'Faqat tajriba nomini o‘zgartirish',
        ],
        answer: 1,
        explanation:
          'Xalqaro tajribadan foydalanishda mahalliy sharoit, resurslar va ehtiyojlarni hisobga olish muhim.',
      },

      {
        id: 'm1t1-c06',
        text:
          'Maktab rahbariyatida qarorlar faqat direktor tomonidan qabul qilinmoqda. Jamoa fikri deyarli inobatga olinmaydi. Demokratik boshqaruvni kuchaytirish uchun nima qilish mumkin?',
        options: [
          'Barcha qarorlarni faqat direktor qabul qilishda davom etishi',
          'Muhim masalalarda manfaatdor tomonlar fikrini o‘rganish va muhokama qilish',
          'Jamoa bilan aloqani kamaytirish',
          'Hisobotlarni bekor qilish',
        ],
        answer: 1,
        explanation:
          'Demokratik boshqaruv jamoa va manfaatdor tomonlarning fikrini muhim qarorlar jarayonida hisobga olishni nazarda tutadi.',
      },

      {
        id: 'm1t1-c07',
        text:
          'Akkreditatsiya natijasida maktab faoliyatida kamchiliklar borligi aniqlandi. Bir oy o‘tib direktor “hammasi tuzatildi” deb hisobot berdi, lekin dalillar mavjud emas. Qaysi yondashuv to‘g‘ri?',
        options: [
          'Hisobotni dalilsiz qabul qilish',
          'Amalga oshirilgan choralar natijasini monitoring orqali tekshirish',
          'Muammoni yopilgan deb hisoblash',
          'Monitoringni bekor qilish',
        ],
        answer: 1,
        explanation:
          'Kamchiliklarni bartaraf etish bo‘yicha choralar ijrosi monitoring qilinishi va natijalar dalillar bilan tasdiqlanishi muhim.',
      },

      {
        id: 'm1t1-c08',
        text:
          'Maktabda o‘qituvchilar o‘rtasida jamoaviy hamkorlik sust. Rahbar pedagogik liderlikni kuchaytirmoqchi. Qaysi chora mantiqan mos?',
        options: [
          'O‘qituvchilar o‘rtasidagi hamkorlikni cheklash',
          'Kasbiy hamkorlik, tajriba almashish va birgalikda muammolarni hal qilish imkoniyatlarini kengaytirish',
          'Faqat nazoratni kuchaytirish',
          'Jamoaviy yig‘ilishlarni butunlay bekor qilish',
        ],
        answer: 1,
        explanation:
          'Pedagogik liderlik jamoaviy kasbiy rivojlanish, hamkorlik va ta’lim jarayonini takomillashtirishga yo‘naltiriladi.',
      },

      {
        id: 'm1t1-c09',
        text:
          'Rahbar maktabning rivojlanish rejasini tuzmoqda. Unda faqat umumiy maqsadlar yozilgan, lekin natijani o‘lchash mezonlari yo‘q. Qanday takomillashtirish zarur?',
        options: [
          'Maqsadlarni butunlay olib tashlash',
          'Maqsadlar bilan birga o‘lchab bo‘ladigan natija ko‘rsatkichlarini belgilash',
          'Faqat hisobot sonini ko‘paytirish',
          'Rejani faqat direktor fikriga asoslash',
        ],
        answer: 1,
        explanation:
          'Rivojlanish rejasida maqsadlar bilan birga natijani kuzatish imkonini beruvchi aniq ko‘rsatkichlar bo‘lishi boshqaruvni samaraliroq qiladi.',
      },

      {
        id: 'm1t1-c10',
        text:
          'Maktab rahbari TALIS, ichki monitoring va o‘qituvchilar fikrlarini o‘rgandi. Uchala manbada ham bir xil muammo ko‘rindi. Eng maqbul keyingi qadam nima?',
        options: [
          'Muammoni e’tiborsiz qoldirish',
          'Muammo bo‘yicha ustuvor chora-tadbirlar rejasini ishlab chiqish',
          'Faqat yana ma’lumot yig‘ish bilan cheklanish',
          'Barcha xodimlarni jazolash',
        ],
        answer: 1,
        explanation:
          'Bir nechta mustaqil manbada bir xil muammo aniqlanishi boshqaruv qarorini asoslash uchun muhim signal bo‘lib, keyingi bosqich amaliy choralarni rejalashtirishdir.',
      },
    ],
  },
      {
        id: 'm1t2',
        title: 'Strategik menejment',
        description:
          'Maktab rivojlanishini strategik rejalashtirish va uzoq muddatli maqsadlarni belgilash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t3',
        title: 'Boshqaruv psixologiyasi',
        description:
          'Rahbar, jamoa, motivatsiya va samarali boshqaruvning psixologik asoslari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t4',
        title: 'Korrupsiyaviy xavf-xatarlarni oldini olish',
        description:
          'Ta’lim muassasasida korrupsiyaviy xavflarni aniqlash va oldini olish mexanizmlari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t5',
        title: 'Boshqaruv qarorlari',
        description:
          'Ma’lumotlarga asoslangan boshqaruv qarorlarini ishlab chiqish va amalga oshirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t6',
        title: 'Maktab imijini shakllantirish',
        description:
          'Maktabning ijobiy imiji, kommunikatsiya va jamoatchilik bilan aloqalarni rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm2',
    title: '2-MODUL. Ta’lim muassasasini rivojlantirish',
    description:
      'Ta’lim sifati, o‘quvchi natijalari, kasbga yo‘naltirish va bola farovonligini boshqarish.',
    topics: [
      {
        id: 'm2t1',
        title: 'Ta’lim sifatini boshqarish',
        description:
          'Ta’lim sifatini monitoring qilish, tahlil qilish va rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t2',
        title: 'O‘quvchilarning ta’lim dasturlarini o‘zlashtirishi',
        description:
          'O‘quvchilarning bilim va ko‘nikmalarini tahlil qilish hamda natijalarni yaxshilash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t3',
        title: 'O‘quvchilarni kasbga yo‘naltirish va kasb tanlash',
        description:
          'O‘quvchilarning qiziqish va qobiliyatlarini hisobga olgan holda kasbga yo‘naltirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t4',
        title: 'Ta’lim sifatini baholash',
        description:
          'Ta’lim natijalarini baholash va baholash ma’lumotlaridan boshqaruvda foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t5',
        title: 'Bola xavfsizligi va farovonligini ta’minlash',
        description:
          'Maktab muhitida o‘quvchilarning xavfsizligi, himoyasi va farovonligini ta’minlash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm3',
    title:
      '3-MODUL. Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',
    description:
      'Zamonaviy rahbarning kasbiy, shaxsiy va boshqaruv kompetensiyalarini rivojlantirish.',
    topics: [
      {
        id: 'm3t1',
        title:
          'Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',
        description:
          'Zamonaviy rahbar uchun zarur bo‘lgan boshqaruv kompetensiyalari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm3t2',
        title:
          'Rahbarning boshqaruv va shaxsiy samaradorligini rivojlantirish',
        description:
          'Vaqt, resurs, jamoa va shaxsiy samaradorlikni boshqarish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm3t3',
        title:
          'Pedagog xodimlarni kasbiy rivojlantirish va ish samaradorligini oshirish',
        description:
          'Pedagoglarning kasbiy rivojlanishi va faoliyat samaradorligini qo‘llab-quvvatlash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm4',
    title: '4-MODUL. Inson resurslarini boshqarish',
    description:
      'Maktabda inson resurslarini samarali boshqarish va mehnat munosabatlarini tashkil etish.',
    topics: [
      {
        id: 'm4t1',
        title: 'Inson resurslarini boshqarish strategiyasi',
        description:
          'Kadrlarni rejalashtirish, rivojlantirish va samarali boshqarish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm4t2',
        title:
          'Ta’lim muassasalarida mehnat munosabatlari va mehnat qonunchiligi',
        description:
          'Mehnat munosabatlari va xodimlar bilan ishlashning huquqiy asoslari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm4t3',
        title:
          'Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarning yuritilishi',
        description:
          'Kadrlar bo‘yicha hujjatlarni to‘g‘ri yuritish va hisobini tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm4t4',
        title: 'Inson resurslari faoliyatini baholash',
        description:
          'Xodimlar faoliyatini mezonlar asosida baholash va rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm5',
    title: '5-MODUL. Ish yuritish va hisobot',
    description:
      'Boshqaruv hujjatlari, normativ-huquqiy hujjatlar va hisobdorlik tizimi.',
    topics: [
      {
        id: 'm5t1',
        title:
          'Boshqaruv normativ-huquqiy hujjatlar bilan ishlash',
        description:
          'Normativ-huquqiy hujjatlarni o‘rganish, qo‘llash va boshqaruv qarorlarida foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm5t2',
        title:
          'Maktablarda ish yuritish hujjatlari bilan ishlash va hisobdorlik',
        description:
          'Maktab hujjatlarini yuritish, nazorat va hisobotlarni tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm6',
    title: '6-MODUL. Jamoatchilik va ota-onalar bilan ishlash',
    description:
      'Ota-onalar, jamoatchilik, davlat va jamoat tashkilotlari bilan samarali hamkorlik.',
    topics: [
      {
        id: 'm6t1',
        title:
          'Maktabning ota-onalar va jamoatchilik bilan hamkorligi',
        description:
          'Ota-onalar va jamoatchilikni ta’lim jarayoniga samarali jalb qilish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm6t2',
        title:
          'Maktabning davlat va jamoat tashkilotlari bilan hamkorligi',
        description:
          'Tashqi hamkorlar bilan tizimli va natijador hamkorlikni tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm6t3',
        title: 'Boshqaruv va media savodxonlik',
        description:
          'Axborot bilan ishlash, media muhit va kommunikatsiya kompetensiyalarini rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm7',
    title: '7-MODUL. Boshqaruvda raqamli kompetentlik',
    description:
      'Raqamli vositalar va sun’iy intellektdan boshqaruvda samarali foydalanish.',
    topics: [
      {
        id: 'm7t1',
        title: 'Boshqaruvda raqamli kompetentlik',
        description:
          'Raqamli texnologiyalar yordamida boshqaruv jarayonlarini takomillashtirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm7t2',
        title:
          'Sun’iy intellekt tizimlaridan foydalanish',
        description:
          'Sun’iy intellekt imkoniyatlaridan ta’lim va boshqaruv jarayonlarida foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm8',
    title:
      '8-MODUL. Ta’limda liderlik va o‘zgarishlarni boshqarish',
    description:
      'O‘zgarishlarni boshqarish, jamoa muhitini rivojlantirish va risklarni boshqarish.',
    topics: [
      {
        id: 'm8t1',
        title:
          'O‘zgarish sharoitida qiyinchiliklarni boshqarish',
        description:
          'Tashkilotdagi o‘zgarishlarga moslashish va qarshiliklarni boshqarish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm8t2',
        title:
          'Jamoada sog‘lom muhitni tashkil etish va ahil jamoani shakllantirish',
        description:
          'Sog‘lom psixologik muhit, jamoaviy hamkorlik va ishonchni rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm8t3',
        title:
          'Ta’lim muassasasida risk va xavf-xatarlarni boshqarish',
        description:
          'Risklarni aniqlash, baholash va ularning oldini olish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm9',
    title: '9-MODUL. Inklyuziv ta’limni tashkil etish',
    description:
      'Inklyuziv ta’limning mazmuni, mexanizmlari va gospital ta’lim.',
    topics: [
      {
        id: 'm9t1',
        title:
          'Inklyuziv ta’limning mazmun-mohiyati va ahamiyati',
        description:
          'Inklyuziv ta’limning asosiy tamoyillari va ahamiyati.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm9t2',
        title:
          'Inklyuziv ta’limni tashkil etish mexanizmi',
        description:
          'Inklyuziv ta’limni tashkil etish va boshqarish mexanizmlari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm9t3',
        title: 'Gospital ta’lim',
        description:
          'Davolanish jarayonidagi bolalar uchun ta’limni tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm10',
    title: '10-MODUL. Moliyaviy munosabatlar',
    description:
      'Ta’lim muassasasining moliyaviy faoliyati, ish haqi va budjetdan tashqari mablag‘lar.',
    topics: [
      {
        id: 'm10t1',
        title:
          'Ta’lim muassasasining moliyaviy faoliyatini tashkil etish',
        description:
          'Ta’lim muassasasida moliyaviy boshqaruv va mablag‘lardan foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm10t2',
        title:
          'Xodimlar mehnatiga haq to‘lash va tarifikatsiyalarini me’yor asosida tuzish amaliyoti',
        description:
          'Mehnatga haq to‘lash va tarifikatsiya jarayonlarini me’yor asosida tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm10t3',
        title:
          'Budjetdan tashqari mablag‘larni topish va samarali tasarruf etish',
        description:
          'Qo‘shimcha mablag‘larni jalb qilish va ulardan maqsadli foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm10t4',
        title:
          'Umumiy o‘rta ta’lim maktablarida ta’lim xizmatlari',
        description:
          'Ta’lim xizmatlarini tashkil etish va ularni boshqarish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },
]

/*
 * =========================================================
 * BOG‘CHA
 * =========================================================
 *
 * Hozircha bo‘sh.
 *
 * Bog‘cha uchun mavzular va savollarni siz bergan
 * materiallar asosida keyingi bosqichda qo‘shamiz.
 */

export const PRESCHOOL_CATEGORIES: Category[] = []

/*
 * =========================================================
 * STATISTICS
 * =========================================================
 */

export const TOTAL_MODULES = CATEGORIES.length

export const TOTAL_TOPICS = CATEGORIES.reduce(
  (total, module) => total + module.topics.length,
  0,
)

export const TOTAL_QUESTIONS = CATEGORIES.reduce(
  (total, module) =>
    total +
    module.topics.reduce(
      (topicTotal, topic) =>
        topicTotal +
        topic.levels.easy.length +
        topic.levels.medium.length +
        topic.levels.hard.length +
        topic.levels.case.length,
      0,
    ),
  0,
)

/*
 * =========================================================
 * HELPERS
 * =========================================================
 */

export function getModuleById(
  moduleId: string,
): Category | undefined {
  return CATEGORIES.find(
    (module) => module.id === moduleId,
  )
}

export function getTopicById(
  topicId: string,
): Topic | undefined {
  for (const module of CATEGORIES) {
    const topic = module.topics.find(
      (item) => item.id === topicId,
    )

    if (topic) {
      return topic
    }
  }

  return undefined
}

export function getTopicQuestions(
  topicId: string,
): Question[] {
  const topic = getTopicById(topicId)

  if (!topic) {
    return []
  }

  return [
    ...topic.levels.easy,
    ...topic.levels.medium,
    ...topic.levels.hard,
    ...topic.levels.case,
  ]
}

export function getLevelQuestions(
  topicId: string,
  level: 'easy' | 'medium' | 'hard' | 'case',
): Question[] {
  const topic = getTopicById(topicId)

  if (!topic) {
    return []
  }

  return topic.levels[level]
}

export function getModuleQuestions(
  moduleId: string,
): Question[] {
  const module = getModuleById(moduleId)

  if (!module) {
    return []
  }

  return module.topics.flatMap((topic) => [
    ...topic.levels.easy,
    ...topic.levels.medium,
    ...topic.levels.hard,
    ...topic.levels.case,
  ])
}

/*
 * =========================================================
 * MIXED TEST
 * =========================================================
 *
 * Keyinchalik barcha modullardan avtomatik
 * tasodifiy savollar olinadi.
 */

export const MIXED_ID = 'aralash'

export const MIXED_COUNT = 30

export const MIXED_QUESTIONS: Question[] = []
