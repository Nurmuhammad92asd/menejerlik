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
  explanation: string
): Question => ({
  id,
  text,
  options,
  answer,
  explanation,
})

/* =========================================================
   1-DARAJA: OSON — 30 TA
========================================================= */

const easy: Question[] = [
  q(
    'm2t1-e01',
    'Ota-onalar bilan muloqotni “Biz birgalikda qanday yordam bera olamiz?” formatiga o‘tkazish nimani anglatadi?',
    [
      'Hamkorlik va ishtirokchilikka asoslangan yondashuvni',
      'Nazoratni kuchaytirishga asoslangan yondashuvni',
      'Mas’uliyatni ota-onaga topshirish yondashuvini',
      'Intizomiy talablarni oshirish yondashuvini',
    ],
    0,
    'Muammoni birgalikda hal qilish ota-ona va maktab hamkorligini kuchaytiradi.'
  ),

  q(
    'm2t1-e02',
    'O‘quvchi portfoliosining asosiy vazifasi nimani ko‘rsatishdan iborat?',
    [
      'O‘quvchining faqat chorak baholarini',
      'O‘quvchining rivojlanish va yutuqlar dinamikasini',
      'O‘quvchining intizomiy holatini',
      'O‘quvchining davomat ko‘rsatkichlarini',
    ],
    1,
    'Portfolio yutuqlar, ijodiy ishlar va rivojlanish dinamikasini jamlaydi.'
  ),

  q(
    'm2t1-e03',
    '“Nazoratdan qo‘llab-quvvatlashga” o‘tish qaysi liderlik yondashuviga mos?',
    [
      'Rivojlantiruvchi va hamroh bo‘luvchi liderlik',
      'Qattiq intizomiy liderlik',
      'Hisobotga asoslangan liderlik',
      'Reytingga asoslangan liderlik',
    ],
    0,
    'Direktor muammoni qayd etishdan ko‘ra o‘qituvchining rivojlanishiga yordam beradi.'
  ),

  q(
    'm2t1-e04',
    'Muammoli o‘quvchining kuchli tomonlaridan foydalanishning asosiy maqsadi nima?',
    [
      'Nazorat sonini kamaytirish',
      'Ichki ishonch va motivatsiyani kuchaytirish',
      'Baholash mezonlarini bekor qilish',
      'O‘quv yuklamasini kamaytirish',
    ],
    1,
    'Kuchli tomonlarga tayangan muvaffaqiyat o‘quvchida “men qila olaman” ishonchini shakllantiradi.'
  ),

  q(
    'm2t1-e05',
    'Moslashuvchan dars jadvali nimani nazarda tutadi?',
    [
      'Barcha o‘quvchilar uchun bir xil jadvalni',
      'O‘quvchi ehtiyojlariga qarab ta’lim imkoniyatlarini moslashtirishni',
      'Dars soatlarini kamaytirishni',
      'To‘garaklarni darslardan ajratishni',
    ],
    1,
    'Moslashuvchanlik o‘quvchilarning ehtiyojlari va rivojlanish sur’atlarini hisobga oladi.'
  ),

  q(
    'm2t1-e06',
    'Qiziqishlar auditi qanday ma’lumot beradi?',
    [
      'O‘qituvchilar ish yuklamasini',
      'O‘quvchilarning qiziqish va ehtiyojlarini',
      'Maktabning moliyaviy xarajatlarini',
      'Sinflarning yakuniy reytingini',
    ],
    1,
    'Audit o‘quvchilar qaysi faoliyat va yo‘nalishlarga qiziqishini aniqlashga xizmat qiladi.'
  ),

  q(
    'm2t1-e07',
    'Ijobiy mustahkamlashning asosiy mazmuni qaysi?',
    [
      'Kerakli xatti-harakatni ijobiy e’tirof orqali kuchaytirish',
      'Xatolar uchun qat’iy jazo belgilash',
      'Barcha o‘quvchilarni bir xil nazorat qilish',
      'O‘quvchini boshqa guruhga ajratish',
    ],
    0,
    'Ijobiy xatti-harakatni vaqtida e’tirof etish uning takrorlanish ehtimolini oshiradi.'
  ),

  q(
    'm2t1-e08',
    'Shaxsiy shartnoma usuli nimaga asoslanadi?',
    [
      'Ommaviy tanqidga',
      'Oldindan kelishilgan qoidalar va rag‘batlarga',
      'Umumiy reytingga',
      'Tasodifiy rag‘batlantirishga',
    ],
    1,
    'Shaxsiy shartnoma o‘quvchi bilan aniq kutishlar va rag‘batlar bo‘yicha kelishuvni nazarda tutadi.'
  ),

  q(
    'm2t1-e09',
    'Loyiha usulida faol o‘quvchining energiyasi qanday yo‘naltiriladi?',
    [
      'Intizomiy jazoga',
      'Foydali va mas’uliyatli faoliyatga',
      'Nazorat topshiriqlariga',
      'Baholarni oshirishga',
    ],
    1,
    'Loyiha va mas’uliyatli vazifalar o‘quvchining faolligini konstruktiv yo‘nalishga buradi.'
  ),

  q(
    'm2t1-e10',
    'Past o‘zlashtirishni “signal” sifatida ko‘rish nimani talab qiladi?',
    [
      'Sabablarni diagnostika qilishni',
      'Darhol jazo berishni',
      'O‘quvchini boshqa guruhga o‘tkazishni',
      'Yakuniy bahoni o‘zgartirishni',
    ],
    0,
    'Signal yondashuvi natijaning ortidagi sabablarni aniqlashni talab qiladi.'
  ),

  q(
    'm2t1-e11',
    'Quyidagi moslashtirishlardan to‘g‘risini aniqlang.\n\nA) Qiziqishlar xaritasi\nB) Portfolio\nC) Moslashuvchan jadval\n\n1) Rivojlanish natijalarini jamlash\n2) Qiziqishlarni aniqlash\n3) Ehtiyojga mos mashg‘ulotlarni rejalash',
    [
      'A–2, B–1, C–3',
      'A–1, B–2, C–3',
      'A–3, B–1, C–2',
      'A–2, B–3, C–1',
    ],
    0,
    'Qiziqishlar xaritasi — qiziqish, portfolio — rivojlanish, jadval — ehtiyojga moslashuv.'
  ),

  q(
    'm2t1-e12',
    'Qaysi yondashuv “o‘quvchi = trayektoriya” qarashiga mos?',
    [
      'Faqat chorak bahosiga qarash',
      'Rivojlanish bosqichlari va yutuqlarini kuzatish',
      'Intizomiy holatni qayd etish',
      'Sinf reytingini taqqoslash',
    ],
    1,
    'Trayektoriya o‘quvchining vaqt davomida qanday rivojlanayotganini ko‘rsatadi.'
  ),

  q(
    'm2t1-e13',
    '“Bahodan shaxsga” o‘tish nimani bildiradi?',
    [
      'Baholashni butunlay bekor qilishni',
      'O‘quvchini uning qobiliyat va rivojlanishi bilan birga ko‘rishni',
      'Yuqori baholarni kamaytirishni',
      'Nazoratni boshqa xodimga topshirishni',
    ],
    1,
    'O‘quvchi faqat baho emas, balki qobiliyat, qiziqish va rivojlanish subyekti sifatida qaraladi.'
  ),

  q(
    'm2t1-e14',
    '“Yopiq tizimdan ochiq hamkorlikka” o‘tishda qaysi harakat muhim?',
    [
      'Ota-onalarni muhokamalarga jalb qilish',
      'Hisobotlarni ko‘paytirish',
      'Nazoratlarni qisqartirish',
      'To‘garaklarni kamaytirish',
    ],
    0,
    'Ochiq hamkorlik ota-ona va boshqa manfaatdor tomonlarning ishtirokini kuchaytiradi.'
  ),

  q(
    'm2t1-e15',
    '“Kichik g‘alaba” topshirig‘i qanday bo‘lishi kerak?',
    [
      'O‘quvchi uchun bajarib bo‘lmaydigan',
      'O‘quvchining imkoniyatiga mos va natija beradigan',
      'Barcha sinfga bir xil murakkablikdagi',
      'Faqat yuqori bahoga qaratilgan',
    ],
    1,
    'Kichik g‘alaba o‘quvchida muvaffaqiyat tajribasini yaratadi.'
  ),

  q(
    'm2t1-e16',
    'Quyidagilardan qaysi biri psixologik muhitga oid sabab?',
    [
      'Oldingi mavzudagi bilim bo‘shlig‘i',
      'Oiladagi zo‘riqish yoki tengdoshlar bosimi',
      'Mos kelmaydigan dars metodikasi',
      'O‘quv rejasidagi yuklama',
    ],
    1,
    'Oilaviy va tengdoshlar bilan bog‘liq bosim psixologik muhit omiliga kiradi.'
  ),

  q(
    'm2t1-e17',
    'Kognitiv to‘siqqa misol qaysi?',
    [
      'Oldingi mavzulardagi tayanch bilimlarning yetishmasligi',
      'Oiladagi nizolar',
      'O‘qituvchi metodikasining mos kelmasligi',
      'To‘garakka qiziqishning kamayishi',
    ],
    0,
    'Kognitiv to‘siq bilim va ko‘nikmalardagi bo‘shliq bilan bog‘liq.'
  ),

  q(
    'm2t1-e18',
    'Metodik xato qaysi holatda yuzaga keladi?',
    [
      'O‘quvchi oilasida muammo bo‘lsa',
      'O‘qitish usuli o‘quvchining qabul qilish xususiyatiga mos kelmasa',
      'O‘quvchining davomatida uzilish bo‘lsa',
      'O‘quvchi sportga qiziqsa',
    ],
    1,
    'Metodik xato ta’lim usulining o‘quvchi ehtiyojiga mos kelmasligi bilan bog‘liq.'
  ),

  q(
    'm2t1-e19',
    'O‘quvchining vizual axborotni tez qabul qilishi nimani qo‘llashni asoslaydi?',
    [
      'Video va infografikalardan foydalanishni',
      'Faqat yozma topshiriqlarni',
      'Darsni qisqartirishni',
      'Nazoratni kuchaytirishni',
    ],
    0,
    'Vizual qabul qilishga mos materiallar tushunishni yengillashtiradi.'
  ),

  q(
    'm2t1-e20',
    'O‘zlashtirish tezligi turlicha bo‘lgan o‘quvchilar uchun qaysi yechim mos?',
    [
      'Bir xil tempni saqlash',
      'Individual o‘quv trayektoriyalarini joriy etish',
      'Baholarni tenglashtirish',
      'Qo‘shimcha nazoratni bekor qilish',
    ],
    1,
    'Individual trayektoriya turli o‘zlashtirish sur’atlarini hisobga olish imkonini beradi.'
  ),

  q(
    'm2t1-e21',
    'Kompetensiyaga yo‘naltirilgan ta’limning belgisi qaysi?',
    [
      'Faktlarni ko‘proq yodlatish',
      'Bilimni real vaziyatda qo‘llashga yo‘naltirish',
      'Darslikni to‘liq ko‘chirish',
      'Faqat nazariy tushuntirish',
    ],
    1,
    'Kompetensiya bilimni amaliy vaziyatda qo‘llay olishni talab qiladi.'
  ),

  q(
    'm2t1-e22',
    'Mavzular integratsiyasiga qaysi holat mos?',
    [
      'Fanlar mazmunini real vazifalar atrofida bog‘lash',
      'Har bir fanni boshqa fanlardan ajratish',
      'Faqat darslik ketma-ketligini saqlash',
      'Qo‘shimcha misollardan foydalanmaslik',
    ],
    0,
    'Integratsiya fanlararo mazmuniy bog‘lanish va real vazifalarni kuchaytiradi.'
  ),

  q(
    'm2t1-e23',
    '“Eng katta o‘sishga erishgan o‘quvchi” nominatsiyasi nimani rag‘batlantiradi?',
    [
      'Faqat yuqori bahoni',
      'Rivojlanish dinamikasini',
      'Sinf ichidagi raqobatni',
      'Intizomiy nazoratni',
    ],
    1,
    'Bu nominatsiya boshlang‘ich darajadan o‘sishni ham qadrlaydi.'
  ),

  q(
    'm2t1-e24',
    'Ijtimoiy rag‘batning asosiy ta’siri qaysi?',
    [
      'Jamoa oldidagi ijtimoiy maqomni oshirish',
      'O‘quv yuklamasini kamaytirish',
      'Uy vazifasini bekor qilish',
      'Baholashni o‘zgartirish',
    ],
    0,
    'Ijtimoiy rag‘bat o‘quvchining jamoa oldidagi e’tirofi va maqomini kuchaytiradi.'
  ),

  q(
    'm2t1-e25',
    'Hissiy rag‘bat nimani kuchaytiradi?',
    [
      'Nazorat mexanizmini',
      'Ijobiy emotsional bog‘liqlikni',
      'O‘quv yuklamasini',
      'Reyting bosimini',
    ],
    1,
    'Hissiy rag‘bat ijobiy emotsional aloqa va qo‘llab-quvvatlashni kuchaytiradi.'
  ),

  q(
    'm2t1-e26',
    'Resurslarni optimallashtirishga mos yechim qaysi?',
    [
      'Mavjud joylardan ko‘p funksiyali foydalanish',
      'Xonalarni faqat dars vaqtida ishlatish',
      'Kutubxonani yopiq saqlash',
      'Yangi bino qurishni birinchi o‘ringa qo‘yish',
    ],
    0,
    'Mavjud resurslardan ko‘p funksiyali foydalanish samaradorlikni oshiradi.'
  ),

  q(
    'm2t1-e27',
    'Bo‘sh vaqtni boshqarishda birinchi qadam nima bo‘lishi mumkin?',
    [
      'To‘garaklar sonini darhol oshirish',
      'O‘quvchilarning qiziqishlarini aniqlash',
      'Nazoratni kuchaytirish',
      'Barcha o‘quvchilarni bir xil faoliyatga jalb qilish',
    ],
    1,
    'Faoliyatni ehtiyojga moslashtirish uchun avval qiziqishlar o‘rganiladi.'
  ),

  q(
    'm2t1-e28',
    'Quyidagi moslashtirishlardan to‘g‘risini toping.\n\nA) Kognitiv to‘siq\nB) Psixologik muhit\nC) Metodik xato\n\n1) Oilaviy bosim\n2) Tayanch bilim bo‘shlig‘i\n3) Mos kelmagan o‘qitish usuli',
    [
      'A–2, B–1, C–3',
      'A–1, B–2, C–3',
      'A–3, B–1, C–2',
      'A–2, B–3, C–1',
    ],
    0,
    'Kognitiv — bilim bo‘shlig‘i, psixologik — bosim, metodik — o‘qitish usuli.'
  ),

  q(
    'm2t1-e29',
    'O‘qituvchiga qo‘shimcha korreksion mashg‘ulotlarni strategik ish sifatida ko‘rsatish nimaga xizmat qiladi?',
    [
      'Past natijalarni yashirishga',
      'Maktab natijadorligini yaxshilashga',
      'Nazorat hujjatlarini ko‘paytirishga',
      'O‘qituvchi yuklamasini kamaytirishga',
    ],
    1,
    'Korreksion ishlar muammoli o‘quvchilar natijasini yaxshilash orqali umumiy sifatga ta’sir qiladi.'
  ),

  q(
    'm2t1-e30',
    '“O‘quvchi = baho” qarashidan voz kechish nimani anglatadi?',
    [
      'Baholashni bekor qilishni',
      'O‘quvchini kengroq rivojlanish ko‘rsatkichlari bilan baholashni',
      'Reytingni majburiy qilishni',
      'Nazoratni kamaytirishni',
    ],
    1,
    'O‘quvchining shaxsiy yutuqlari, qiziqishi va rivojlanishi ham hisobga olinadi.'
  ),
]

/* =========================================================
   2-DARAJA: O‘RTA — 30 TA
========================================================= */

const medium: Question[] = [
  q(
    'm2t1-m01',
    'Ota-ona suhbatida qaysi ketma-ketlik hamkorlikka ko‘proq yordam beradi?',
    [
      'Muammo → ayblash → talab',
      'Kuchli tomon → muammo → birgalikdagi yechim',
      'Talab → ogohlantirish → nazorat',
      'Baholash → taqqoslash → xulosa',
    ],
    1,
    'Ijobiy boshlanish himoyaviy reaksiyani kamaytirib, yechimga o‘tishni osonlashtiradi.'
  ),

  q(
    'm2t1-m02',
    'Direktor o‘qituvchining past natijasini ko‘rib, darhol tanbeh bermadi. Avval darsni kuzatib, sabablarni aniqladi. Bu qaysi yondashuv?',
    [
      'Rivojlantiruvchi boshqaruv',
      'Jazo asosidagi boshqaruv',
      'Reyting nazorati',
      'Ma’muriy bosim',
    ],
    0,
    'Sababni aniqlash va yordam ko‘rsatish rivojlantiruvchi boshqaruvga mos.'
  ),

  q(
    'm2t1-m03',
    'Bir o‘quvchi tez, ikkinchisi sekin o‘zlashtiradi. Direktor qanday qarorni qo‘llab-quvvatlashi kerak?',
    [
      'Bir xil topshiriq va bir xil temp',
      'Individual va differensial topshiriqlar',
      'Past o‘zlashtiruvchini chetlatish',
      'Barcha o‘quvchilarga qo‘shimcha nazorat',
    ],
    1,
    'Differensial yondashuv o‘quvchilarning turli sur’atlarini hisobga oladi.'
  ),

  q(
    'm2t1-m04',
    'Quyidagi moslashtirishlardan to‘g‘risini aniqlang.\n\nA) Nazoratdan qo‘llab-quvvatlashga\nB) Bahodan shaxsga\nC) Yopiq tizimdan ochiq hamkorlikka\n\n1) Ota-onalarni muloqotga jalb qilish\n2) Qobiliyat va qiziqishni hisobga olish\n3) Metodik yordam va maslahat berish',
    [
      'A–3, B–2, C–1',
      'A–2, B–1, C–3',
      'A–1, B–3, C–2',
      'A–3, B–1, C–2',
    ],
    0,
    'Har bir yo‘nalishning amaliy ko‘rinishi mos ravishda 3, 2 va 1.'
  ),

  q(
    'm2t1-m05',
    'Direktor qiziqishlar auditidan so‘ng ayrim to‘garaklarni o‘zgartirdi. Bu qarorning asosiy dalili nima?',
    [
      'Mavjud jadvalning qulayligi',
      'O‘quvchilarning real ehtiyojlari',
      'O‘qituvchilar sonining ko‘pligi',
      'An’anaviy yo‘nalishlarning mavjudligi',
    ],
    1,
    'Audit ma’lumotlari faoliyat yo‘nalishlarini real qiziqishlarga moslashtirish uchun ishlatiladi.'
  ),

  q(
    'm2t1-m06',
    'O‘quvchi portfoliosida ijodiy ishlar, loyihalar va yutuqlar jamlanmoqda. Bu qaysi boshqaruv qarorini qo‘llab-quvvatlaydi?',
    [
      'O‘quvchini faqat baho bilan baholashni',
      'Rivojlanish trayektoriyasini tahlil qilishni',
      'Intizomiy choralarni kuchaytirishni',
      'Sinf reytingini bekor qilishni',
    ],
    1,
    'Portfolio o‘quvchining vaqt davomida rivojlanishini ko‘rsatadi.'
  ),

  q(
    'm2t1-m07',
    'Quyidagi moslashtirishlardan to‘g‘risini toping.\n\nA) Ijobiy mustahkamlash\nB) Shaxsiy shartnoma\nC) Loyiha usuli\n\n1) Oldindan kelishilgan qoidalar\n2) Ijobiy xatti-harakatni e’tirof etish\n3) Faollikni foydali vazifaga yo‘naltirish',
    [
      'A–2, B–1, C–3',
      'A–1, B–2, C–3',
      'A–3, B–1, C–2',
      'A–2, B–3, C–1',
    ],
    0,
    'Instrumentlarning asosiy ta’siri 2, 1 va 3 bilan mos.'
  ),

  q(
    'm2t1-m08',
    'Past o‘zlashtiruvchi o‘quvchiga kichik va bajariladigan topshiriq berish qanday natijani ko‘zlaydi?',
    [
      'Rasmiy nazoratni oshirishni',
      'Muvaffaqiyat tajribasini yaratishni',
      'Yuklamani butunlay bekor qilishni',
      'Sinf reytingini o‘zgartirishni',
    ],
    1,
    'Bajariladigan vazifa muvaffaqiyatni his qilish va keyingi harakatga tayyorlikni kuchaytiradi.'
  ),

  q(
    'm2t1-m09',
    'Quyidagi sabablarni moslashtiring.\n\nA) Kognitiv to‘siq\nB) Psixologik muhit\nC) Metodik xato\n\n1) Oila va tengdoshlar bosimi\n2) Tayanch bilimning yetishmasligi\n3) O‘qitish usulining mos kelmasligi',
    [
      'A–2, B–1, C–3',
      'A–1, B–3, C–2',
      'A–3, B–2, C–1',
      'A–2, B–3, C–1',
    ],
    0,
    'Sabablar mos ravishda bilim bo‘shlig‘i, psixologik muhit va metodikaga taalluqli.'
  ),

  q(
    'm2t1-m10',
    'Direktor o‘quvchilarni rag‘batlantirishda “eng katta o‘sish” mezonini qo‘shdi. Buning afzalligi nimada?',
    [
      'Yuqori natijali o‘quvchilarni ajratishda',
      'Turli boshlang‘ich darajadagi o‘quvchilarni rivojlanishga undashda',
      'Baholash mezonlarini soddalashtirishda',
      'Reytingdagi farqni kamaytirishda',
    ],
    1,
    'O‘sish mezoni boshlang‘ich darajasi turlicha bo‘lgan o‘quvchilarning yutug‘ini ko‘rsatadi.'
  ),

  q(
    'm2t1-m11',
    'Maktabda barcha o‘quvchilarga bir xil topshiriq berish natijasida ayrimlari ortda qolmoqda. Eng mos boshqaruv chorasi qaysi?',
    [
      'Topshiriq hajmini barcha uchun oshirish',
      'Differensial topshiriqlarni joriy etish',
      'Nazorat ishlarini ko‘paytirish',
      'Ortda qolganlarni alohida guruhga chiqarish',
    ],
    1,
    'Differensial topshiriqlar turli tayyorgarlik darajalariga mos yordam beradi.'
  ),

  q(
    'm2t1-m12',
    'Raqamli savodxonligi yuqori o‘quvchilar uchun direktor qaysi yo‘nalishni qo‘llab-quvvatlashi maqsadga muvofiq?',
    [
      'Raqamli resurslardan maqsadli foydalanishni',
      'Raqamli vositalardan voz kechishni',
      'Barcha darslarni qisqartirishni',
      'Faqat an’anaviy topshiriqlarni',
    ],
    0,
    'Raqamli savodxonlikni ta’limiy maqsadga yo‘naltirish zamonaviy boshqaruvga mos.'
  ),

  q(
    'm2t1-m13',
    'Vizual axborotni tez qabul qiladigan o‘quvchilar uchun qaysi vosita maqsadga muvofiq?',
    [
      'Faqat uzun matnli bayon',
      'Video, sxema va infografika',
      'Faqat yozma nazorat',
      'Faqat og‘zaki so‘rov',
    ],
    1,
    'Vizual materiallar o‘quvchining qabul qilish xususiyatiga mos keladi.'
  ),

  q(
    'm2t1-m14',
    'Direktor “Nima uchun aynan shu fanlar va shu ketma-ketlik?” deb so‘radi. Bu savol nimani ko‘rsatadi?',
    [
      'O‘quv rejasini strategik tahlil qilishni',
      'O‘qituvchi tashabbusini cheklashni',
      'Jadvalni texnik tekshirishni',
      'Fanlarni kamaytirishni',
    ],
    0,
    'Savol fanlar mazmuni va ketma-ketligining strategik maqsadga mosligini tekshiradi.'
  ),

  q(
    'm2t1-m15',
    'O‘quv rejasini “amaliy natijaga yo‘naltirilgan strategiya” deb ko‘rish nimani talab qiladi?',
    [
      'Fanlar va maktab rivojlanish maqsadlarini uyg‘unlashtirishni',
      'Fanlar sonini kamaytirishni',
      'Faqat davlat hujjatini takrorlashni',
      'Dars jadvalini o‘zgartirmaslikni',
    ],
    0,
    'O‘quv rejasi maktabning rivojlanish yo‘nalishlari bilan bog‘langanda strategik vositaga aylanadi.'
  ),

  q(
    'm2t1-m16',
    'Qaysi harakat “diagnostik yondashuv”ga mos?',
    [
      'Past bahoni ko‘rib, darhol tanbeh berish',
      'Natijaning ortidagi sabablarni aniqlash',
      'O‘quvchini reytingdan chiqarish',
      'Bir xil topshiriq berishni davom ettirish',
    ],
    1,
    'Diagnostika natija sabablarini aniqlash va keyingi chorani asoslashga xizmat qiladi.'
  ),

  q(
    'm2t1-m17',
    'Quyidagilardan qaysilari resurslarni optimallashtirishga mos?\n\nA) Maktab binosidan darsdan keyin foydalanish\nB) Kutubxonani hamkorlik hududiga aylantirish\nC) Mavjud joylardan ko‘p funksiyali foydalanish\nD) Infratuzilmani faqat dars vaqtida ishlatish',
    [
      'A, B, C',
      'A, C, D',
      'B, C, D',
      'A, B, D',
    ],
    0,
    'Uchala yondashuv ham mavjud resurslardan samaraliroq foydalanishni ko‘zlaydi.'
  ),

  q(
    'm2t1-m18',
    'Quyidagi moslashtirishni aniqlang.\n\n1) Vizual qabul\n2) Raqamli savodxonlik\n3) Turli o‘zlashtirish tezligi\n4) Kompetensiyaga ehtiyoj\n\na) Individual trayektoriya\nb) Video va infografika\nc) Real vaziyatdagi topshiriqlar\nd) Raqamli resurslar',
    [
      '1–b, 2–d, 3–a, 4–c',
      '1–a, 2–b, 3–d, 4–c',
      '1–b, 2–a, 3–c, 4–d',
      '1–c, 2–d, 3–a, 4–b',
    ],
    0,
    'Xususiyatlar mos ravishda vizual, raqamli, individual va kompetensiyaviy yechimlar bilan bog‘lanadi.'
  ),

  q(
    'm2t1-m19',
    'Ota-onaning himoyaviy pozitsiyasini kamaytirishda qaysi boshlanish samaraliroq?',
    [
      'Bolaning kamchiliklarini sanab berish',
      'Bolaning kuchli tomonlarini tan olish',
      'Mas’uliyatni ota-onaga yuklash',
      'Qat’iy talablarni bayon qilish',
    ],
    1,
    'Ijobiy jihatni tan olish suhbat uchun xavfsizroq psixologik muhit yaratadi.'
  ),

  q(
    'm2t1-m20',
    'Direktor qo‘shimcha mashg‘ulotlarni o‘qituvchi uchun strategik ish sifatida belgiladi. Bu nimani anglatadi?',
    [
      'Korreksion ishni sifatni oshirish mexanizmi sifatida ko‘rishni',
      'O‘qituvchining asosiy vazifasini kamaytirishni',
      'Past natijalarni yashirishni',
      'Hisobotlar sonini oshirishni',
    ],
    0,
    'Qo‘shimcha yordam muammoli o‘quvchilar natijasini yaxshilashga qaratilgan strategik chora bo‘lishi mumkin.'
  ),

  q(
    'm2t1-m21',
    'Quyidagi rag‘batlantirishlarni ta’siri bilan moslang.\n\nA) Ijtimoiy rag‘bat\nB) Imtiyozli rag‘bat\nC) Hissiy rag‘bat\n\n1) Ishonch va mas’uliyatni kuchaytirish\n2) Jamoa oldidagi maqomni oshirish\n3) Ijobiy emotsional aloqani kuchaytirish',
    [
      'A–2, B–1, C–3',
      'A–1, B–2, C–3',
      'A–3, B–1, C–2',
      'A–2, B–3, C–1',
    ],
    0,
    'Rag‘bat turlari mos ravishda maqom, ishonch va emotsional aloqaga ta’sir qiladi.'
  ),

  q(
    'm2t1-m22',
    '“Mavzular integratsiyasi” va “kompetensiyaga yo‘naltirilganlik” o‘rtasidagi farq qaysi javobda to‘g‘ri berilgan?',
    [
      'Birinchisi fanlararo bog‘lanish, ikkinchisi bilimni qo‘llashga urg‘u beradi',
      'Birinchisi nazorat, ikkinchisi intizomga urg‘u beradi',
      'Birinchisi baholash, ikkinchisi dars jadvaliga urg‘u beradi',
      'Birinchisi yuklama, ikkinchisi hisobotga urg‘u beradi',
    ],
    0,
    'Integratsiya mazmunlar bog‘lanishini, kompetensiya esa bilimdan amalda foydalanishni anglatadi.'
  ),

  q(
    'm2t1-m23',
    'Direktor o‘qituvchiga darsni kuzatib, keyin metodik tavsiya berdi. Bu qanday boshqaruv amaliyoti?',
    [
      'Nazorat va jazolash',
      'Kuzatuv asosidagi metodik qo‘llab-quvvatlash',
      'Reyting nazorati',
      'Ma’muriy cheklov',
    ],
    1,
    'Kuzatuv ma’lumotlari yordam ko‘rsatish uchun ishlatilmoqda.'
  ),

  q(
    'm2t1-m24',
    'O‘quvchining qiziqishi va qobiliyatini aniqlashdan keyin qo‘shimcha mashg‘ulotlarni qayta taqsimlash nimaga misol?',
    [
      'Dalillarga asoslangan boshqaruv qaroriga',
      'Tasodifiy tashkiliy qarorga',
      'Intizomiy choraga',
      'Yagona standartlashtirishga',
    ],
    0,
    'Qaror oldindan yig‘ilgan ma’lumot asosida qabul qilinmoqda.'
  ),

  q(
    'm2t1-m25',
    'O‘qituvchi “bu bola dangasa” degan xulosaga keldi. Direktor qanday savol bilan vaziyatni chuqurlashtirishi mumkin?',
    [
      'Qanday qilib jazolaymiz?',
      'Bu natijaning ortida qanday sabablar bor?',
      'Nega bahosini oshirmadingiz?',
      'Qaysi guruhga o‘tkazamiz?',
    ],
    1,
    'Sababni izlash yorliq qo‘yishdan ko‘ra samarali boshqaruv qaroriga olib keladi.'
  ),

  q(
    'm2t1-m26',
    'Ota-onalar bilan uchrashuvlarda muammoni ayblashsiz muhokama qilishning asosiy foydasi nima?',
    [
      'Suhbat vaqtini qisqartirish',
      'Hamkorlik uchun psixologik sharoit yaratish',
      'Talablarni kamaytirish',
      'Baholashni o‘zgartirish',
    ],
    1,
    'Himoyalanish kamayganda ota-ona yechim izlash jarayonida faolroq qatnashadi.'
  ),

  q(
    'm2t1-m27',
    'Direktor “o‘quvchining qaysi jihati kuchli?” savolini berganda qaysi qarash namoyon bo‘ladi?',
    [
      'Muammoga yo‘naltirilgan yondashuv',
      'Resurs va kuchli tomonlarga tayanuvchi yondashuv',
      'Intizomiy nazorat',
      'Reytingga asoslangan boshqaruv',
    ],
    1,
    'Kuchli tomonlarni izlash keyingi rivojlanish uchun ichki resursni aniqlaydi.'
  ),

  q(
    'm2t1-m28',
    'Maktab bo‘sh vaqt dasturini qayta tuzishda qaysi ketma-ketlik maqsadga muvofiq?',
    [
      'Qiziqishlarni aniqlash → yo‘nalish tanlash → resurslarni moslashtirish',
      'To‘garak ochish → qiziqishni aniqlash → ehtiyojni baholash',
      'Hisobot → nazorat → qiziqishlarni aniqlash',
      'Jadval → hisobot → o‘quvchi fikri',
    ],
    0,
    'Avval ehtiyoj aniqlanadi, keyin faoliyat va resurslar unga moslashtiriladi.'
  ),

  q(
    'm2t1-m29',
    'Past natijali o‘quvchi bilan ishlashda quyidagi qarorlardan qaysi biri eng konstruktiv?',
    [
      'Bir xil topshiriqni ko‘proq berish',
      'Sababni aniqlab, mos topshiriq va rag‘bat tanlash',
      'O‘quvchini reytingdan chiqarish',
      'Intizomiy chorani kuchaytirish',
    ],
    1,
    'Diagnostika asosida mos yordam tanlash muammoni aniqroq hal qiladi.'
  ),

  q(
    'm2t1-m30',
    'Quyidagi bosqichlarning qaysi ketma-ketligi “jonli” rag‘batlantirish tizimiga mos?',
    [
      'E’tirof → maqsadli motivatsiya → muvaffaqiyat tuyg‘usi',
      'Maqsadli motivatsiya → muvaffaqiyat tuyg‘usi → e’tirof',
      'Muvaffaqiyat tuyg‘usi → e’tirof → maqsadli motivatsiya',
      'Nazorat → baholash → jazo',
    ],
    1,
    'Avval ma’no va maqsad shakllanadi, keyin muvaffaqiyat tajribasi va e’tirof mustahkamlanadi.'
  ),
]

/* =========================================================
   3-DARAJA: QIYIN — 30 TA
========================================================= */

const hard: Question[] = [
  q(
    'm2t1-h01',
    'Maktabda past natijalar qayd etildi. O‘qituvchilar buni o‘quvchilarning sustligi bilan izohladi. Direktorning birinchi boshqaruv qadami qaysi bo‘lishi kerak?',
    [
      'Muammoni ko‘rsatkichlar va sabablar kesimida diagnostika qilish',
      'O‘qituvchilarga natijani oshirish bo‘yicha topshiriq berish',
      'Past natijali o‘quvchilarni alohida guruhga ajratish',
      'Ota-onalarga intizomiy talablarni kuchaytirish',
    ],
    0,
    'Boshqaruv qarori dalil va sabablarni aniqlashdan boshlanishi kerak.'
  ),

  q(
    'm2t1-h02',
    'Bir sinfda baholar yuqori, ammo mustaqil topshiriqlarda natijalar past. Direktor nimani tekshirishi kerak?',
    [
      'Faqat davomat ko‘rsatkichlarini',
      'Baholash mezonlari va topshiriqlarning haqiqiy kompetensiyani o‘lchashini',
      'O‘quvchilar sonini',
      'To‘garaklar qamrovini',
    ],
    1,
    'Yuqori baho va past mustaqil natija baholashning validligi masalasini ko‘rsatishi mumkin.'
  ),

  q(
    'm2t1-h03',
    'Innovatsion metod ikki sinfda sinovdan o‘tkazildi. Birida natija yaxshilandi, ikkinchisida o‘zgarish bo‘lmadi. Direktor darhol barcha sinflarga joriy etishi kerakmi?',
    [
      'Ha, chunki bir sinfda natija ijobiy bo‘ldi',
      'Yo‘q, avval qo‘llash sharoiti va metodik amalga oshirilishini tahlil qilish kerak',
      'Ha, chunki innovatsiya doimo bir xil ishlaydi',
      'Yo‘q, chunki innovatsiyalar maktabda qo‘llanmasligi kerak',
    ],
    1,
    'Pilot natijalarini kengaytirishdan oldin amalga oshirish sifati va sharoitlar tekshiriladi.'
  ),

  q(
    'm2t1-h04',
    'Quyidagi ketma-ketliklardan qaysi biri muammoli o‘quvchi bilan ishlashning dalillarga asoslangan sikliga mos?',
    [
      'Baholash → ogohlantirish → jazo → hisobot',
      'Muammo → sabab → yechim → qayta o‘lchash',
      'Nazorat → reyting → taqqoslash → xulosa',
      'Topshiriq → baho → tanbeh → yakun',
    ],
    1,
    'Sikl muammoni aniqlash, sababni tushunish, chorani qo‘llash va natijani qayta o‘lchashdan iborat.'
  ),

  q(
    'm2t1-h05',
    'Ota-ona suhbatda himoyalanishga o‘tdi. Direktorning qaysi harakati vaziyatni konstruktiv yo‘nalishga buradi?',
    [
      'Muammoning barcha salbiy jihatlarini sanash',
      'Bolaning kuchli tomonini tan olib, keyin muammo va hamkorlikdagi qadamni muhokama qilish',
      'Ota-onaning mas’uliyatini alohida ta’kidlash',
      'Suhbatni rasmiy ogohlantirish bilan yakunlash',
    ],
    1,
    'Ijobiy boshlanish va birgalikdagi yechim himoyaviy pozitsiyani kamaytiradi.'
  ),

  q(
    'm2t1-h06',
    'Direktor past o‘zlashtirishni uch guruh sabab bilan tahlil qildi: bilim bo‘shlig‘i, psixologik bosim, metodik nomuvofiqlik. Bu qanday boshqaruv kuchini ko‘rsatadi?',
    [
      'Muammoni ko‘p omilli tizim sifatida ko‘rishni',
      'Muammoni bitta sababga qisqartirishni',
      'Nazoratni o‘qituvchiga topshirishni',
      'Baholashni ikkilamchi deb hisoblashni',
    ],
    0,
    'Ko‘p omilli diagnostika muammoni kompleks boshqarishga imkon beradi.'
  ),

  q(
    'm2t1-h07',
    'Maktabda barcha o‘quvchilarga bir xil topshiriq beriladi. Kuchli o‘quvchilar zerikadi, sust o‘quvchilar qiynaladi. Eng maqbul strategik yechim qaysi?',
    [
      'Topshiriqlarni ko‘paytirish',
      'Differensial va individual topshiriqlar tizimini ishlab chiqish',
      'Barcha topshiriqlarni soddalashtirish',
      'Nazorat ishlarini ko‘paytirish',
    ],
    1,
    'Bir xil topshiriq turli ehtiyojlarni qondirmaydi; differensiallashtirish samaraliroq.'
  ),

  q(
    'm2t1-h08',
    'Qaysi juftlik “muammo → boshqaruv chorasi” jihatidan eng to‘g‘ri?',
    [
      'Psixologik bosim → ko‘proq nazorat',
      'Bilim bo‘shlig‘i → diagnostika va korreksion yordam',
      'Metodik xato → o‘quvchini boshqa sinfga o‘tkazish',
      'Qiziqish pastligi → bir xil topshiriqlarni ko‘paytirish',
    ],
    1,
    'Bilim bo‘shlig‘i diagnostika va maqsadli korreksion yordamni talab qiladi.'
  ),

  q(
    'm2t1-h09',
    'Direktor bo‘sh vaqt tizimini qayta ko‘rib chiqmoqda. Qaysi qaror eng ko‘p dalil talab qiladi?',
    [
      'Mavjud to‘garaklarni saqlash',
      'Qiziqishlar auditiga asoslanib yangi yo‘nalishlarni ochish',
      'Tadbirlar sonini oshirish',
      'Jadvalni o‘zgartirmaslik',
    ],
    1,
    'Yangi yo‘nalish ochish resurs va ehtiyoj mosligini ko‘rsatuvchi ma’lumotni talab qiladi.'
  ),

  q(
    'm2t1-h10',
    'Bir o‘quvchi akademik jihatdan sust, lekin sportda yuqori natija ko‘rsatmoqda. Direktorning eng maqbul qarori qaysi?',
    [
      'Sport faoliyatini vaqtincha to‘xtatish',
      'Kuchli tomonini motivatsiya va rivojlanish uchun resurs sifatida ishlatish',
      'Uni faqat sport guruhiga o‘tkazish',
      'Akademik muammo hal bo‘lmaguncha rag‘bat bermaslik',
    ],
    1,
    'Kuchli tomon muvaffaqiyat tajribasini yaratib, akademik rivojlanishga ham ko‘maklashishi mumkin.'
  ),

  q(
    'm2t1-h11',
    'Quyidagi moslashtirishni aniqlang.\n\nA) Nazoratdan qo‘llab-quvvatlashga\nB) Bahodan shaxsga\nC) Ochiq hamkorlik\nD) Individual trayektoriya\n\n1) Ota-ona bilan birgalikdagi reja\n2) O‘quvchi yutuqlari va qiziqishlarini hisobga olish\n3) Metodik maslahat va dars kuzatuvi\n4) Bosqichli maqsad va monitoring',
    [
      'A–3, B–2, C–1, D–4',
      'A–2, B–3, C–4, D–1',
      'A–1, B–2, C–3, D–4',
      'A–3, B–1, C–2, D–4',
    ],
    0,
    'Yo‘nalishlar mos ravishda metodik yordam, shaxsiy rivojlanish, hamkorlik va trayektoriyaga ulanadi.'
  ),

  q(
    'm2t1-h12',
    'Maktabda “eng katta o‘sish” nominatsiyasi joriy etildi. Qaysi xavfni oldini olish uchun mezon aniq belgilanadi?',
    [
      'Yuqori baholarni kamaytirish',
      'Boshlang‘ich darajalar farqi sababli noto‘g‘ri taqqoslash',
      'To‘garaklar sonining kamayishi',
      'Ota-onalar ishtirokining oshishi',
    ],
    1,
    'O‘sish mezoni boshlang‘ich daraja bilan bog‘liq farqlarni hisobga olishi kerak.'
  ),

  q(
    'm2t1-h13',
    'Direktor o‘quvchi portfoliosidan foydalanib qaror chiqarmoqda. Qaysi ma’lumotlar eng mazmunli?',
    [
      'Faqat yakuniy baholar',
      'Baholar, ijodiy ishlar, loyihalar va rivojlanish dinamikasi',
      'Faqat davomat',
      'Faqat intizomiy qaydlar',
    ],
    1,
    'Portfolio ko‘p manbali rivojlanish dalillarini jamlaydi.'
  ),

  q(
    'm2t1-h14',
    'Qaysi vaziyat kompetensiyaga yo‘naltirilganlikni eng aniq ko‘rsatadi?',
    [
      'O‘quvchi ta’riflarni yod oladi',
      'O‘quvchi real muammoni tahlil qilib, bilimini yechimda qo‘llaydi',
      'O‘quvchi darslikdagi barcha mashqlarni bajaradi',
      'O‘quvchi nazariy qoidalarni qayta aytadi',
    ],
    1,
    'Kompetensiya bilimni real vaziyatda mustaqil qo‘llashni talab qiladi.'
  ),

  q(
    'm2t1-h15',
    'Direktor dars ishlanmasining o‘quvchi portretiga mosligini tekshirmoqda. Bu nazoratning asosiy maqsadi nima?',
    [
      'Hujjat hajmini tekshirish',
      'Ta’lim mazmunining o‘quvchi ehtiyojlariga mosligini aniqlash',
      'Dars sonini kamaytirish',
      'O‘qituvchi hujjatini standartlashtirish',
    ],
    1,
    'Dars rejasining o‘quvchi xususiyatlariga mosligi ta’lim samaradorligiga bevosita ta’sir qiladi.'
  ),

  q(
    'm2t1-h16',
    'Direktor raqamli vositalarni joriy qildi, lekin o‘quv natijasi o‘zgarmadi. Qaysi xulosa to‘g‘riroq?',
    [
      'Texnologiya o‘z-o‘zidan natijani kafolatlamaydi',
      'Raqamli vositalardan foydalanish har doim noto‘g‘ri',
      'O‘quvchilar raqamli vositalarni qabul qilmaydi',
      'An’anaviy darslarni bekor qilish kerak',
    ],
    0,
    'Vosita emas, uning pedagogik maqsadga mos va samarali qo‘llanishi natijani belgilaydi.'
  ),

  q(
    'm2t1-h17',
    'Quyidagi ketma-ketliklardan qaysi biri innovatsiyani boshqarish uchun maqbul?',
    [
      'Keng joriy etish → ehtiyoj → monitoring → metodik yordam',
      'Ehtiyojni aniqlash → pilot → metodik yordam → monitoring va kengaytirish',
      'Monitoring → joriy etish → ehtiyoj → pilot',
      'Pilot → kengaytirish → ehtiyoj → baholash',
    ],
    1,
    'Innovatsiya avval ehtiyojga asoslanadi, kichik miqyosda sinovdan o‘tadi va keyin kengayadi.'
  ),

  q(
    'm2t1-h18',
    'Qaysi qaror dalillarga asoslangan boshqaruvga eng yaqin?',
    [
      'Direktorning shaxsiy kuzatuvi asosida jadvalni o‘zgartirish',
      'Diagnostika, davomat va feedback ma’lumotlari asosida yordam rejasini tuzish',
      'O‘qituvchilarning umumiy fikri asosida barcha to‘garaklarni yopish',
      'An’anaviy amaliyotni o‘zgartirmaslik',
    ],
    1,
    'Bir nechta dalil manbasini birlashtirish qarorni asosli qiladi.'
  ),

  q(
    'm2t1-h19',
    'Ota-onalar bilan muloqotda “muammo — yechim — kelishilgan qadam” modeli nimani kuchaytiradi?',
    [
      'Tomonlarning qarama-qarshiligini',
      'Birgalikdagi mas’uliyat va amaliy hamkorlikni',
      'Nazorat bosimini',
      'Rasmiy hisobotni',
    ],
    1,
    'Kelishilgan qadamlar hamkorlikni aniq harakatlarga aylantiradi.'
  ),

  q(
    'm2t1-h20',
    'Maktabda past natijalar mavjud, ammo direktor faqat yakuniy baholarni tahlil qilmoqda. Qaysi muammo yuzaga keladi?',
    [
      'Jarayon va sabablar haqida yetarli dalil yig‘ilmaydi',
      'Baholash juda batafsil bo‘ladi',
      'Ota-onalar ishtiroki ortadi',
      'O‘quvchilar qiziqishi avtomatik aniqlanadi',
    ],
    0,
    'Faqat yakuniy natija sabab va jarayonni to‘liq ko‘rsatmaydi.'
  ),

  q(
    'm2t1-h21',
    'Qaysi kombinatsiya past o‘zlashtirishni kompleks boshqarishga mos?',
    [
      'Baholash + intizomiy choralar',
      'Diagnostika + differensial topshiriq + hamkorlik + qayta baholash',
      'Reyting + tanbeh',
      'Qo‘shimcha vazifa + umumiy nazorat',
    ],
    1,
    'Kompleks yondashuv sababni aniqlash, mos yordam, hamkorlik va natijani qayta tekshirishni birlashtiradi.'
  ),

  q(
    'm2t1-h22',
    'Direktor qiziqishlar auditini o‘tkazdi, ammo audit natijalaridan keyin faoliyat dasturi o‘zgarmadi. Qaysi xulosa to‘g‘ri?',
    [
      'Auditning boshqaruv qiymati qaror bilan bog‘lanmagan',
      'Audit natijalari doimo noto‘g‘ri',
      'O‘quvchilar qiziqishi boshqaruvga taalluqli emas',
      'To‘garaklar soni yetarli',
    ],
    0,
    'Ma’lumot qarorga aylantirilmasa, uning boshqaruvdagi qiymati kamayadi.'
  ),

  q(
    'm2t1-h23',
    'Quyidagi holatlarning qaysi biri “bahodan shaxsga” yondashuvga mos emas?',
    [
      'Ijodiy ishlarni hisobga olish',
      'Qiziqishlarni tahlil qilish',
      'O‘quvchining faqat chorak bahosini asosiy dalil qilish',
      'Shaxsiy yutuqlarni e’tirof etish',
    ],
    2,
    'Shaxsga yo‘naltirilgan yondashuv bahodan kengroq ma’lumotlarni talab qiladi.'
  ),

  q(
    'm2t1-h24',
    'Direktor o‘qituvchiga “bu o‘quvchi bilan ishlashda qaysi usulni o‘zgartirish mumkin?” deb savol berdi. Bu nimani ko‘rsatadi?',
    [
      'Muammoni faqat o‘quvchiga yuklashni',
      'Metodik refleksiya va qo‘llab-quvvatlashni',
      'Intizomiy nazoratni',
      'Reytingni oshirishni',
    ],
    1,
    'Savol o‘qituvchining metodik imkoniyatlarini tahlil qilishga undaydi.'
  ),

  q(
    'm2t1-h25',
    'Bir o‘quvchi oilaviy bosim sabab darsda diqqatini jamlay olmayapti. Qaysi chorani birinchi o‘ringa qo‘yish maqsadga muvofiq?',
    [
      'Qo‘shimcha nazorat ishlarini berish',
      'Psixologik qo‘llab-quvvatlash va xavfsiz muloqot muhitini yaratish',
      'Intizomiy talabni kuchaytirish',
      'Reytingini pasaytirish',
    ],
    1,
    'Psixologik omil mavjud bo‘lsa, qo‘llab-quvvatlovchi muhit muhim.'
  ),

  q(
    'm2t1-h26',
    'Direktor “hamma uchun bir xil” topshiriqning o‘rniga turli darajadagi vazifalarni taklif qilmoqda. Bu qarorning asosiy sababi nima?',
    [
      'O‘qituvchi ishini ko‘paytirish',
      'O‘quvchilarning ehtiyoj va imkoniyatlarini hisobga olish',
      'Baholarni tenglashtirish',
      'Nazoratni kamaytirish',
    ],
    1,
    'Differensial vazifa o‘quvchilar o‘rtasidagi tayyorgarlik farqlarini hisobga oladi.'
  ),

  q(
    'm2t1-h27',
    'Maktabda rag‘batlantirish tizimi faqat a’lochilarga qaratilgan. Qaysi o‘zgarish rivojlanish madaniyatiga ko‘proq xizmat qiladi?',
    [
      'Rag‘batni bekor qilish',
      'O‘sish, tashabbus va turli kuchli tomonlarni ham e’tirof etish',
      'Faqat sportchilarni rag‘batlantirish',
      'Faqat yuqori bahoni mukofotlash',
    ],
    1,
    'Rivojlanish madaniyati turli shakldagi ijobiy o‘sishni qadrlaydi.'
  ),

  q(
    'm2t1-h28',
    'Quyidagi fikrlardan qaysi biri zamonaviy o‘quvchi portretiga eng mos?',
    [
      'Barcha o‘quvchilar bir xil tempda o‘rganadi',
      'O‘quvchilarning qabul qilish usuli va rivojlanish sur’ati farqlanadi',
      'O‘quvchiga vizual vositalar kerak emas',
      'Kompetensiya yodlash bilan cheklanadi',
    ],
    1,
    'Zamonaviy boshqaruv individual farqlar va kompetensiyaviy ehtiyojlarni hisobga oladi.'
  ),

  q(
    'm2t1-h29',
    'Direktor bir vaqtning o‘zida diagnostika, o‘qituvchi yordami va ota-ona hamkorligini yo‘lga qo‘ydi. Buning asosiy afzalligi nima?',
    [
      'Muammoni bir nechta omil orqali boshqarish',
      'Nazorat hujjatlarini kamaytirish',
      'O‘quvchi bahosini tez oshirish',
      'Ota-onalar mas’uliyatini kuchaytirish',
    ],
    0,
    'Muammo turli omillarga ega bo‘lsa, boshqaruv ham bir nechta mexanizmni birlashtiradi.'
  ),

  q(
    'm2t1-h30',
    'Qaysi qaror “ma’lumot → qaror → natijani qayta tekshirish” sikliga eng mos?',
    [
      'Audit → hisobot → arxiv',
      'Diagnostika → individual reja → qayta diagnostika',
      'Reyting → tanbeh → yakun',
      'Suhbat → ogohlantirish → hisobot',
    ],
    1,
    'Diagnostika natijasi reja tuzishga, qayta diagnostika esa choraning samarasini baholashga xizmat qiladi.'
  ),
]

/* =========================================================
   4-DARAJA: KEYS — 10 TA
   1–5: foydalanuvchi yuborgan keyslar asosida
   6–10: yangi tuzilgan keyslar
========================================================= */

const cases: Question[] = [
  q(
    'm2t1-c01',
    `107-sonli maktabda 7-sinf o‘quvchisi Azizning ikki chorak davomida o‘zlashtirishi pasaydi. Davomatida uzilishlar bor, darsdagi faolligi kamaygan. Ayrim o‘qituvchilar unga barcha o‘quvchilar bilan bir xil topshiriq bermoqda. Ota-onasi suhbatda oilada ham qiyinchiliklar borligini bildirdi. Direktor muammoni faqat baho bilan emas, qiziqish, psixologik holat, oilaviy muhit va metodik yondashuv bilan birgalikda ko‘rmoqda.

Qaysi boshqaruv qarori eng maqbul?`,
    [
      'Sabablarni kompleks diagnostika qilib, ota-ona bilan hamkorlik va differensial qo‘llab-quvvatlash rejasini tuzish',
      'O‘quvchiga ko‘proq uy vazifasi berib, natijani chorak oxirida tekshirish',
      'Barcha fanlarda bir xil topshiriqlarni saqlab, davomatni kuchaytirish',
      'O‘quvchini past o‘zlashtiruvchilar guruhiga ajratib, umumiy talabni kamaytirish',
    ],
    0,
    'Vaziyatda bir nechta sabab mavjud. Shuning uchun diagnostika, hamkorlik va differensial yordam birgalikda qo‘llanadi.'
  ),

  q(
    'm2t1-c02',
    `134-sonli maktabda darsdan keyingi bo‘sh vaqt tizimi kutilgan natijani bermayapti. Ayrim to‘garaklarga qatnashuv past, o‘quvchilar esa bo‘sh vaqtining bir qismini nazoratsiz o‘tkazmoqda. Tahlilda mavjud to‘garaklarning ayrimlari o‘quvchilar qiziqishiga mos emasligi aniqlandi. Rag‘batlantirish ham asosan yuqori natijalilarga qaratilgan.

Qaysi fikrlar vaziyatga mos?

1. Qiziqishlar auditini o‘tkazish zarur.
2. Rag‘batlantirishda o‘sish dinamikasini ham hisobga olish kerak.
3. To‘garaklar sonini oshirishning o‘zi muammoni hal qiladi.`,
    [
      '1 — to‘g‘ri, 2 — to‘g‘ri, 3 — noto‘g‘ri',
      '1 — to‘g‘ri, 2 — noto‘g‘ri, 3 — to‘g‘ri',
      '1 — noto‘g‘ri, 2 — to‘g‘ri, 3 — to‘g‘ri',
      '1 — noto‘g‘ri, 2 — noto‘g‘ri, 3 — to‘g‘ri',
    ],
    0,
    'Qiziqish va o‘sish dinamikasi hisobga olinadi; faoliyat sonini oshirishning o‘zi yetarli emas.'
  ),

  q(
    'm2t1-c03',
    `129-sonli maktabda ayrim o‘quvchilarning natijalari pasaydi. Psixolog oilaviy zo‘riqish va o‘ziga ishonchsizlikni qayd etdi. Dars kuzatuvida esa barcha o‘quvchilarga bir xil topshiriqlar berilayotgani aniqlandi. Ota-onalar bilan ayrim suhbatlar bolaning kamchiliklarini sanashga aylanib qolgan.

Quyidagi fikrlardan qaysilari to‘g‘ri?

1. Past natijani sabablarni izlashga undovchi signal sifatida ko‘rish mumkin.
2. O‘quvchining kuchli tomonlari motivatsiya uchun resurs bo‘lishi mumkin.
3. Ota-onalar bilan suhbatni ayblash formatida davom ettirish kerak.`,
    [
      '1 — to‘g‘ri, 2 — to‘g‘ri, 3 — noto‘g‘ri',
      '1 — to‘g‘ri, 2 — noto‘g‘ri, 3 — to‘g‘ri',
      '1 — noto‘g‘ri, 2 — noto‘g‘ri, 3 — to‘g‘ri',
      '1 — noto‘g‘ri, 2 — to‘g‘ri, 3 — to‘g‘ri',
    ],
    0,
    'Past natija sabablarni izlashga signal bo‘ladi; kuchli tomonlar motivatsiya resursi, ayblash esa hamkorlikni susaytiradi.'
  ),

  q(
    'm2t1-c04',
    `113-sonli maktabda 6–8-sinflarda sust o‘zlashtirish ko‘paydi. Tahlilda bilim bo‘shliqlari, oilaviy muhit, tengdoshlar ta’siri va ayrim metodik nomuvofiqliklar aniqlandi. Ayrim o‘qituvchilar barcha o‘quvchilarga bir xil topshiriq bermoqda. Ota-onalar bilan suhbatlar ham ayrim hollarda ayblash ohangida kechmoqda.

Qaysi harakatlar vaziyatga mos?

1. Sabablarni kognitiv, psixologik va metodik kesimlarda aniqlash.
2. Differensial topshiriqlar va kichik g‘alaba vazifalarini joriy etish.
3. Ota-onalarga qat’iy talablarni kuchaytirishni tavsiya qilish.
4. Ota-onalar bilan hamkorlikka asoslangan muloqotga o‘tish.
5. O‘quvchining kuchli tomonlarini qo‘llab-quvvatlash.`,
    [
      '1, 2, 4, 5',
      '1, 3, 4',
      '2, 3, 5',
      '1, 2, 3, 5',
    ],
    0,
    'Kompleks diagnostika, differensial yordam, hamkorlik va kuchli tomonlarga tayanish vaziyatga mos.'
  ),

  q(
    'm2t1-c05',
    `146-sonli maktabda ayrim to‘garaklar formallashgan, o‘quvchilar qiziqishi yetarli o‘rganilmagan. Iqtidorli bolalarning ayrimlari boshqa markazlarga ketmoqda. Past o‘zlashtiruvchi, ammo sport, sahna yoki texnikaga qiziqadigan o‘quvchilar esa rag‘batlantirish tizimida yetarli ko‘rinmayapti.

Direktor qanday choralarni tanlashi kerak?

1. Qiziqishlar auditini o‘tkazish.
2. Rag‘batni o‘sish va turli kuchli tomonlarni ham qamrab oladigan qilish.
3. O‘quvchilarni bo‘sh vaqtni tashkil etishda ishtirok ettirish.
4. To‘garaklar sonini o‘quvchi ehtiyojidan qat’i nazar ko‘paytirish.`,
    [
      '1, 2, 3',
      '1, 3, 4',
      '2, 3, 4',
      '1, 2, 4',
    ],
    0,
    'Audit, kengroq rag‘batlantirish va o‘quvchi ishtiroki mazmunli bo‘sh vaqt tizimini kuchaytiradi.'
  ),

  q(
    'm2t1-c06',
    `152-sonli maktabda bir sinfda chorak baholari yuqori. Biroq direktor mustaqil topshiriq va amaliy vazifalarda o‘quvchilarning natijasi ancha pastligini aniqladi. O‘qituvchi baholarni darsdagi faol ishtirok va og‘zaki javoblarga tayanib qo‘ygan. O‘quvchilar esa bilimni yangi vaziyatga ko‘chirishda qiynalmoqda.

Direktor uchun eng to‘g‘ri boshqaruv qarori qaysi?`,
    [
      'Baholarni saqlab, faqat davomatni nazorat qilish',
      'Baholash mezonlari va topshiriqlarni kompetensiyani o‘lchash nuqtayi nazaridan audit qilish',
      'O‘quvchilarga qo‘shimcha nazorat ishlarini ko‘paytirish',
      'O‘qituvchidan chorak baholarini pasaytirishni talab qilish',
    ],
    1,
    'Yuqori baho va past amaliy natija baholashning mazmuni hamda mezonlarini qayta ko‘rib chiqishni talab qiladi.'
  ),

  q(
    'm2t1-c07',
    `161-sonli maktabda yangi interaktiv metod ikki sinfda pilot tarzda sinovdan o‘tkazildi. 7-A sinfida natija yaxshilandi, 7-B sinfida esa deyarli o‘zgarish bo‘lmadi. Tahlilda 7-Bda o‘qituvchi metodning ayrim bosqichlarini muntazam qo‘llamagani aniqlandi.

Direktor qanday yo‘l tutishi kerak?`,
    [
      'Metodni darhol barcha sinflarga joriy qilish',
      'Metodni bekor qilish va eski usulga qaytish',
      'Avval amalga oshirish sifati va metodik qo‘llab-quvvatlashni yaxshilab, keyin qayta sinash',
      'Natija bermagan sinfni qo‘shimcha nazoratga olish',
    ],
    2,
    'Pilot natijasidagi farq metodning o‘zidan tashqari uni qanday amalga oshirilganini ham tahlil qilish zarurligini ko‘rsatadi.'
  ),

  q(
    'm2t1-c08',
    `174-sonli maktabda ota-onalar maktab faoliyatidan mamnunligini bildirmoqda. Biroq diagnostik topshiriqlar o‘quvchilarning mustaqil fikrlashi pastligini ko‘rsatdi. O‘qituvchilar ham darslarda tayyor algoritmlarga ko‘proq tayanmoqda. Direktor ota-onalar fikrini ijobiy deb hisoblab, boshqa ma’lumotlarni e’tiborsiz qoldirishni o‘ylamoqda.

Qaysi qaror dalillarga asoslangan boshqaruvga mos?`,
    [
      'Ota-onalar fikri ijobiy bo‘lgani uchun o‘zgarish kiritmaslik',
      'Diagnostika, dars kuzatuvi va ota-onalar feedbackini birgalikda tahlil qilish',
      'Faqat o‘qituvchilarning fikriga tayanish',
      'Mustaqil fikrlashni baholashni vaqtincha to‘xtatish',
    ],
    1,
    'Turli manbalardan olingan dalillarni triangulyatsiya qilish aniqroq boshqaruv qarorini beradi.'
  ),

  q(
    'm2t1-c09',
    `183-sonli maktabda resurslar cheklangan. Kutubxona kun davomida kam ishlatiladi, ayrim xonalar esa darsdan keyin bo‘sh turadi. Shu bilan birga, o‘quvchilarda loyiha va mustaqil ishlashga ehtiyoj bor.

Direktorning qaysi qarori resurslarni optimallashtirishga eng mos?`,
    [
      'Yangi xona qurilishini kutish',
      'Mavjud kutubxona va xonalarni ko‘p funksiyali o‘quv maydoniga aylantirish',
      'Darsdan keyingi faoliyatni kamaytirish',
      'Kutubxonadan foydalanishni faqat kitob o‘qish bilan cheklash',
    ],
    1,
    'Cheklangan sharoitda mavjud infratuzilmani bir nechta ta’limiy vazifaga moslashtirish samarali.'
  ),

  q(
    'm2t1-c10',
    `195-sonli maktabda direktor chorak boshida o‘quvchilarning fanlarga moyilligi, qaysi mavzularda qiynalayotgani va rivojlanish dinamikasini aniqladi. Keyin qo‘shimcha mashg‘ulotlar qayta taqsimlandi. Chorak oxirida natijalar yana o‘lchandi.

Bu jarayonning eng kuchli tomoni nimada?`,
    [
      'Qarorlar diagnostika asosida qabul qilinib, keyin natija qayta tekshirilgan',
      'Qo‘shimcha mashg‘ulotlar soni ko‘paygan',
      'O‘quvchilar bir xil guruhlarga ajratilgan',
      'Nazorat davri qisqartirilgan',
    ],
    0,
    'Bu jarayon diagnostika → qaror → qayta o‘lchash siklini namoyon qiladi.'
  ),
]

/* =========================================================
   EXPORT
========================================================= */

export const M2T1_LEVELS: LevelSet = {
  easy,
  medium,
  hard,
  case: cases,
}
