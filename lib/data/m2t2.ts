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
   M2T1
   TA'LIM SIFATINI BOSHQARISH
   Professional test bank
   30 Easy + 30 Medium + 30 Hard + 10 Case
========================================================= */

/* =========================================================
   1-DARAJA: OSON — 30 TA
========================================================= */

const easy: Question[] = [
  q(
    'm2t1-e01',
    'Ta’lim sifatini boshqarishning asosiy maqsadi nima?',
    [
      'O‘quvchilarning ta’lim natijalarini izchil yaxshilash',
      'Hisobotlar sonini ko‘paytirish',
      'Faqat yakuniy baholarni oshirish',
      'Nazorat tadbirlarini ko‘paytirish',
    ],
    0,
    'Ta’lim sifatini boshqarishning markaziy maqsadi — ta’lim natijalarini tizimli ravishda yaxshilash.'
  ),

  q(
    'm2t1-e02',
    'Maktabda ta’lim sifati qaysi omillar majmuasi bilan bog‘liq?',
    [
      'Faqat o‘quvchilar baholari bilan',
      'O‘qituvchi, metodika, baholash, muhit va boshqa omillar bilan',
      'Faqat darsliklar soni bilan',
      'Faqat o‘quvchilar davomatiga bog‘liq',
    ],
    1,
    'Ta’lim sifati ko‘plab o‘zaro bog‘liq omillar ta’sirida shakllanadi.'
  ),

  q(
    'm2t1-e03',
    'Direktorning ta’lim sifatini boshqarishdagi muhim vazifalaridan biri qaysi?',
    [
      'Faqat hujjatlarni tekshirish',
      'Faqat intizomni nazorat qilish',
      'Ta’lim jarayonini tahlil qilib, rivojlantirish choralarini belgilash',
      'Barcha qarorlarni o‘qituvchilarga topshirish',
    ],
    2,
    'Direktor ma’lumotlarni tahlil qilib, muammolar va rivojlanish yo‘nalishlari bo‘yicha qaror qabul qiladi.'
  ),

  q(
    'm2t1-e04',
    'Davlat ta’lim standarti ta’lim jarayonida qanday vazifani bajaradi?',
    [
      'Ta’lim natijalariga qo‘yiladigan asosiy talablarni belgilaydi',
      'O‘qituvchilarning ish vaqtini belgilaydi',
      'Maktabning ichki tartib qoidalarini almashtiradi',
      'Faqat dars jadvalini tartibga soladi',
    ],
    0,
    'Davlat ta’lim standarti ta’lim mazmuni va kutiladigan natijalarga doir asosiy talablarni belgilaydi.'
  ),

  q(
    'm2t1-e05',
    'Ta’lim sifatining natija ko‘rsatkichiga qaysi biri misol bo‘ladi?',
    [
      'Sinfxona jihozlari',
      'O‘qituvchining dars rejasi',
      'O‘quvchining kompetensiyani egallash darajasi',
      'Maktabdagi xona soni',
    ],
    2,
    'Natija ko‘rsatkichi o‘quvchining ta’lim yakunida erishgan natijasini ifodalaydi.'
  ),

  q(
    'm2t1-e06',
    'Ichki monitoringning asosiy vazifasi nima?',
    [
      'Muammolarni aniqlash va ta’lim sifatini yaxshilash uchun ma’lumot berish',
      'O‘qituvchilarni jazolash',
      'Faqat reyting tuzish',
      'Hujjatlarni ko‘paytirish',
    ],
    0,
    'Ichki monitoring maktabdagi ta’lim jarayonining holatini aniqlash va takomillashtirishga xizmat qiladi.'
  ),

  q(
    'm2t1-e07',
    'Formativ baholashning asosiy maqsadi nima?',
    [
      'Faqat yakuniy bahoni chiqarish',
      'O‘quv jarayonida rivojlanish uchun feedback berish',
      'O‘quvchilarni reytingga joylashtirish',
      'Faqat nazorat ishini rasmiylashtirish',
    ],
    1,
    'Formativ baholash o‘quvchining keyingi rivojlanishi uchun o‘z vaqtida fikr-mulohaza beradi.'
  ),

  q(
    'm2t1-e08',
    'Kompetensiyaga yo‘naltirilgan ta’lim nimaga urg‘u beradi?',
    [
      'Faqat ma’lumotni yodlashga',
      'Bilimni real vaziyatlarda qo‘llashga',
      'Faqat darslikni qayta aytishga',
      'Faqat test topshirishga',
    ],
    1,
    'Kompetensiya bilim va ko‘nikmalarni amaliy vaziyatlarda qo‘llay olishni nazarda tutadi.'
  ),

  q(
    'm2t1-e09',
    'Ta’lim sifatining jarayon ko‘rsatkichiga qaysi biri kiradi?',
    [
      'Darsning qanday tashkil etilishi',
      'Maktab binosining maydoni',
      'O‘quvchi uyining joylashuvi',
      'Maktabning nomi',
    ],
    0,
    'Jarayon ko‘rsatkichi ta’lim qanday tashkil etilayotganini ifodalaydi.'
  ),

  q(
    'm2t1-e10',
    'O‘qituvchining kasbiy salohiyati ta’lim sifatiga qanday ta’sir qiladi?',
    [
      'Ta’sir qilmaydi',
      'Faqat hujjatlar soniga ta’sir qiladi',
      'Dars sifati va o‘quv natijalariga bevosita ta’sir qiladi',
      'Faqat davomatga ta’sir qiladi',
    ],
    2,
    'O‘qituvchining bilim, metodik va pedagogik kompetensiyasi o‘quv natijalariga bevosita ta’sir ko‘rsatadi.'
  ),

  q(
    'm2t1-e11',
    'Ta’lim sifatini boshqarishda ma’lumotlardan foydalanish nimani anglatadi?',
    [
      'Qarorlarni dalillar va tahlil asosida qabul qilishni',
      'Faqat hisobotlarni saqlashni',
      'Faqat rahbar fikriga tayanishni',
      'Barcha qarorlarni bir xil qilishni',
    ],
    0,
    'Ma’lumotlarga asoslangan boshqaruv qarorlarni dalillar bilan asoslashni talab qiladi.'
  ),

  q(
    'm2t1-e12',
    'O‘quvchilarning bilim darajasini aniqlash uchun qaysi vosita samarali?',
    [
      'Diagnostik topshiriq',
      'Faqat davomat jurnali',
      'Faqat sinf xonasi kuzatuvi',
      'Faqat maktab reytingi',
    ],
    0,
    'Diagnostik topshiriq o‘quvchilarning mavjud bilim va ko‘nikmalarini aniqlashga yordam beradi.'
  ),

  q(
    'm2t1-e13',
    'Ta’lim sifatini boshqarishda feedback nima uchun kerak?',
    [
      'Jarayonni yaxshilash uchun fikr va dalil olish uchun',
      'Faqat o‘quvchini baholash uchun',
      'Hisobot hajmini oshirish uchun',
      'Nazoratni bekor qilish uchun',
    ],
    0,
    'Feedback mavjud holatni tushunish va keyingi takomillashtirish choralarini belgilashga yordam beradi.'
  ),

  q(
    'm2t1-e14',
    'Differensial ta’limning asosiy xususiyati qaysi?',
    [
      'Barcha o‘quvchilarga aynan bir xil topshiriq berish',
      'O‘quvchilarning ehtiyoj va tayyorgarligiga mos topshiriqlar berish',
      'Faqat kuchli o‘quvchilar bilan ishlash',
      'Faqat nazorat ishlarini ko‘paytirish',
    ],
    1,
    'Differensial yondashuv o‘quvchilarning tayyorgarligi va ehtiyojlaridagi farqlarni hisobga oladi.'
  ),

  q(
    'm2t1-e15',
    'Ta’lim muhitining sifatga ta’sir qiluvchi jihati qaysi?',
    [
      'Psixologik xavfsizlik va hamkorlik',
      'Faqat sinf devorlarining rangi',
      'Faqat maktab binosining kattaligi',
      'Faqat darsliklar soni',
    ],
    0,
    'Sog‘lom psixologik muhit o‘quvchilarning faolligi va o‘qishga munosabatiga ijobiy ta’sir qiladi.'
  ),

  q(
    'm2t1-e16',
    'Resurs ko‘rsatkichiga qaysi biri misol bo‘ladi?',
    [
      'O‘quvchining mustaqil fikrlashi',
      'O‘qituvchining darsdagi savollari',
      'Ta’lim uchun mavjud jihoz va infratuzilma',
      'O‘quvchining yakuniy natijasi',
    ],
    2,
    'Resurs ko‘rsatkichlari ta’limni tashkil etish uchun mavjud moddiy va tashkiliy imkoniyatlarni ifodalaydi.'
  ),

  q(
    'm2t1-e17',
    'Ta’lim sifatini yaxshilash siklining to‘g‘ri ketma-ketligi qaysi?',
    [
      'Muammo → sabab → yechim → qayta o‘lchash',
      'Jazo → hisobot → muammo → xulosa',
      'Reyting → tanbeh → nazorat → yakun',
      'Hisobot → arxiv → baho → qaror',
    ],
    0,
    'Sifatni yaxshilash muammoni aniqlash, sababni tahlil qilish, yechimni qo‘llash va natijani qayta tekshirishni talab qiladi.'
  ),

  q(
    'm2t1-e18',
    'O‘qituvchi darsini kuzatishning rivojlantiruvchi maqsadi nima?',
    [
      'Kamchilik uchun jazo berish',
      'Metodik kuchli va rivojlanadigan jihatlarni aniqlash',
      'O‘qituvchini reytingga joylashtirish',
      'Hisobot sonini oshirish',
    ],
    1,
    'Dars kuzatuvi professional rivojlanish uchun dalil va feedback berishi kerak.'
  ),

  q(
    'm2t1-e19',
    'O‘quvchi natijasi pasayganda eng maqbul birinchi qadam nima?',
    [
      'Sababni aniqlash',
      'Darhol jazolash',
      'Bahoni avtomatik pasaytirish',
      'O‘quvchini boshqa sinfga o‘tkazish',
    ],
    0,
    'Natijaning o‘zi yetarli emas; avvalo uning sabablarini aniqlash zarur.'
  ),

  q(
    'm2t1-e20',
    'Ta’lim sifatini boshqarishda direktor qanday rolni bajarishi kerak?',
    [
      'Faqat nazoratchi',
      'Pedagogik, tahliliy va o‘zgarishlarni boshqaruvchi lider',
      'Faqat hujjatlarni imzolovchi',
      'Faqat xo‘jalik ishlarini nazorat qiluvchi',
    ],
    1,
    'Zamonaviy direktor pedagogik jarayonni tahlil qiladi, rivojlantiradi va o‘zgarishlarni boshqaradi.'
  ),

  q(
    'm2t1-e21',
    'Ota-onalar bilan hamkorlik ta’lim sifatiga qanday yordam beradi?',
    [
      'O‘quvchi rivojlanishi bo‘yicha qo‘shimcha hamkorlik imkonini yaratadi',
      'O‘qituvchining vazifalarini to‘liq ota-onaga topshiradi',
      'Baholashni bekor qiladi',
      'Nazoratni kamaytiradi',
    ],
    0,
    'Maktab va oila hamkorligi o‘quvchining rivojlanishini qo‘llab-quvvatlash imkoniyatini kengaytiradi.'
  ),

  q(
    'm2t1-e22',
    'Ichki monitoring faqat yakuniy natijani emas, yana nimani o‘rganishi kerak?',
    [
      'Jarayon va natijaga ta’sir qiluvchi omillarni',
      'Faqat o‘qituvchi yoshini',
      'Faqat sinfxona hajmini',
      'Faqat maktab nomini',
    ],
    0,
    'Sifat monitoringi natija bilan birga jarayon va unga ta’sir qiluvchi omillarni ham qamrab oladi.'
  ),

  q(
    'm2t1-e23',
    'Innovatsiyani joriy etishdan oldin nimani aniqlash muhim?',
    [
      'Muammo yoki ehtiyojni',
      'Faqat tadbirlar sonini',
      'Faqat o‘qituvchi xohishini',
      'Faqat reklama imkoniyatini',
    ],
    0,
    'Innovatsiya aniq ehtiyoj yoki muammoni hal qilishga xizmat qilishi kerak.'
  ),

  q(
    'm2t1-e24',
    'Pilot loyiha nima uchun qo‘llanadi?',
    [
      'Yangi yechimni kichik miqyosda sinab ko‘rish uchun',
      'Innovatsiyani darhol butun maktabga yoyish uchun',
      'Nazoratni bekor qilish uchun',
      'Faqat hisobot tayyorlash uchun',
    ],
    0,
    'Pilot sinov yangi yondashuvning samaradorligi va amalga oshirish sharoitlarini tekshirish imkonini beradi.'
  ),

  q(
    'm2t1-e25',
    'Baholash mezonlarining aniq bo‘lishi nimani ta’minlaydi?',
    [
      'Adolatli va tushunarli baholashni',
      'Baholarni avtomatik oshirishni',
      'Nazoratni bekor qilishni',
      'Faqat yuqori natijani',
    ],
    0,
    'Aniq mezonlar o‘quvchi natijasini tushunarli va adolatli baholashga yordam beradi.'
  ),

  q(
    'm2t1-e26',
    'O‘quvchining real vaziyatda bilimini qo‘llay olishi nimani ko‘rsatadi?',
    [
      'Faqat yodlash darajasini',
      'Kompetensiyani amalda namoyon etishini',
      'Faqat davomatini',
      'Faqat intizomini',
    ],
    1,
    'Bilimni real vaziyatda qo‘llash kompetensiyaning muhim belgilaridan biridir.'
  ),

  q(
    'm2t1-e27',
    'Maktabda sifatni yaxshilash uchun muammo aniqlangach nima qilinadi?',
    [
      'Sabablar tahlil qilinadi va mos yechim belgilanadi',
      'Muammo yashiriladi',
      'Faqat hisobot yoziladi',
      'Mas’ul shaxs jazolanadi',
    ],
    0,
    'Muammo sabablarini tushunish to‘g‘ri va maqsadli yechim tanlash uchun zarur.'
  ),

  q(
    'm2t1-e28',
    'Qaysi holat ma’lumotlarga asoslangan boshqaruvga misol bo‘ladi?',
    [
      'Direktorning shaxsiy taxminiga asoslangan qaror',
      'Diagnostika natijalari asosida qo‘shimcha mashg‘ulot rejasini tuzish',
      'An’anaga ko‘ra bir xil qarorni takrorlash',
      'Barcha sinflarga bir xil chorani qo‘llash',
    ],
    1,
    'Ma’lumotlarga asoslangan boshqaruvda qaror aniq dalillar asosida shakllanadi.'
  ),

  q(
    'm2t1-e29',
    'Ta’lim sifatini boshqarishda doimiy takomillashtirish nimani anglatadi?',
    [
      'Bir marta qaror qabul qilib, uni o‘zgartirmaslikni',
      'Natijalarni muntazam tahlil qilib, jarayonni yaxshilab borishni',
      'Faqat nazoratni kuchaytirishni',
      'Faqat yangi hujjatlar yaratishni',
    ],
    1,
    'Doimiy takomillashtirish natijalarni muntazam tahlil qilish va zarur o‘zgarishlarni kiritishni anglatadi.'
  ),

  q(
    'm2t1-e30',
    'Ta’lim sifatini boshqarishning eng muhim tamoyillaridan biri qaysi?',
    [
      'Muammoni yashirish',
      'Dalilga asoslanish va natijani qayta tekshirish',
      'Faqat jazoga tayanish',
      'Barcha vaziyatlarda bir xil qaror qabul qilish',
    ],
    1,
    'Sifat boshqaruvi dalillar, maqsadli choralar va qayta baholashga tayangan holda amalga oshiriladi.'
  ),
]

/* =========================================================
   2-DARAJA: O‘RTA — 30 TA
========================================================= */

const medium: Question[] = [
  q(
    'm2t1-m01',
    'Maktabda o‘quvchilarning yakuniy natijalari pasaydi. Direktorning eng asosli birinchi harakati qaysi?',
    [
      'O‘qituvchilarga darhol tanbeh berish',
      'Natijani fan, sinf va kompetensiyalar kesimida tahlil qilish',
      'Qo‘shimcha nazoratlarni ko‘paytirish',
      'Barcha o‘quvchilarga bir xil qo‘shimcha topshiriq berish',
    ],
    1,
    'Natijaning qayerda va qaysi kompetensiyada pasaygani aniqlansa, keyingi chorani aniq belgilash mumkin.'
  ),

  q(
    'm2t1-m02',
    'Bir sinfda chorak baholari yuqori, ammo mustaqil topshiriqlarda natijalar past. Direktor nimani tekshirishi kerak?',
    [
      'Faqat davomatni',
      'Baholash mezonlari va topshiriqlarning kompetensiyani o‘lchash darajasini',
      'Faqat sinfdagi o‘quvchilar sonini',
      'Faqat ota-onalar fikrini',
    ],
    1,
    'Yuqori baholar real mustaqil natija bilan mos kelmasa, baholashning validligi tahlil qilinadi.'
  ),

  q(
    'm2t1-m03',
    'Bir sinfda o‘quvchilarning tayyorgarlik darajasi keskin farq qiladi. Qaysi boshqaruv yechimi maqsadga muvofiq?',
    [
      'Barcha o‘quvchilarga bir xil murakkablikdagi topshiriq berish',
      'Differensial topshiriqlar tizimini qo‘llab-quvvatlash',
      'Faqat kuchli o‘quvchilar bilan ishlash',
      'Past natijali o‘quvchilarni topshiriqlardan ozod qilish',
    ],
    1,
    'Differensiallashtirish turli tayyorgarlik darajalariga mos ta’lim imkonini beradi.'
  ),

  q(
    'm2t1-m04',
    'Direktor dars kuzatuvidan keyin o‘qituvchiga faqat kamchiliklarni sanab bermay, keyingi dars uchun aniq metodik tavsiyalar berdi. Bu qanday yondashuv?',
    [
      'Rivojlantiruvchi monitoring',
      'Jazo asosidagi nazorat',
      'Formal attestatsiya',
      'Reyting nazorati',
    ],
    0,
    'Monitoring rivojlanish uchun aniq feedback va amaliy yordam bilan yakunlanmoqda.'
  ),

  q(
    'm2t1-m05',
    'Maktabda ayrim to‘garaklarga qatnashuv juda past. Direktor birinchi navbatda qaysi ma’lumotni o‘rganishi kerak?',
    [
      'O‘qituvchilarning ish stajini',
      'O‘quvchilarning qiziqish va ehtiyojlarini',
      'Faqat xonalar sonini',
      'Faqat maktab reytingini',
    ],
    1,
    'Qatnashuv past bo‘lishining sababini tushunish uchun o‘quvchi ehtiyojlarini o‘rganish muhim.'
  ),

  q(
    'm2t1-m06',
    'O‘quvchi portfoliosidan boshqaruv qarorida foydalanishning eng katta afzalligi nimada?',
    [
      'Faqat yakuniy bahoni ko‘rsatadi',
      'Rivojlanishning turli dalillarini bir joyda ko‘rsatadi',
      'Faqat davomatni nazorat qiladi',
      'Faqat intizomiy holatni aks ettiradi',
    ],
    1,
    'Portfolio baho bilan birga loyiha, ijodiy ish va boshqa rivojlanish dalillarini ko‘rsatishi mumkin.'
  ),

  q(
    'm2t1-m07',
    'Past o‘zlashtirishni “signal” sifatida ko‘rish qanday qarorni talab qiladi?',
    [
      'Sabablarni aniqlash va mos yordamni rejalashni',
      'Darhol intizomiy chora ko‘rishni',
      'O‘quvchini reytingdan chiqarishni',
      'Bahoni avtomatik pasaytirishni',
    ],
    0,
    'Signal yondashuvi natija ortidagi sabablarni aniqlash va mos chorani tanlashga asoslanadi.'
  ),

  q(
    'm2t1-m08',
    'O‘qituvchi o‘quvchini “dangasa” deb ta’rifladi. Direktor uchun eng professional savol qaysi?',
    [
      'Uni qanday jazolash kerak?',
      'Bu xatti-harakat yoki natijaga qanday omillar ta’sir qilmoqda?',
      'Nega unga yuqori baho bermadingiz?',
      'Uni boshqa sinfga o‘tkazamizmi?',
    ],
    1,
    'Professional boshqaruv yorliq qo‘yishdan ko‘ra kuzatilayotgan natijaning sabablarini izlaydi.'
  ),

  q(
    'm2t1-m09',
    'Ota-ona suhbatda himoyaviy munosabat bildirdi. Qaysi muloqot modeli samaraliroq?',
    [
      'Kamchiliklarni ketma-ket sanash',
      'Kuchli tomon → muammo → kelishilgan yechim',
      'Talab → ogohlantirish → jazo',
      'Baholash → taqqoslash → tanbeh',
    ],
    1,
    'Ijobiy boshlanish va kelishilgan yechim himoyaviy reaksiyani kamaytiradi.'
  ),

  q(
    'm2t1-m10',
    '“Eng katta o‘sish” mezonini rag‘batlantirish tizimiga kiritishning asosiy afzalligi nima?',
    [
      'Faqat yuqori natijali o‘quvchilarni ajratish',
      'Turli boshlang‘ich darajadagi o‘quvchilarning rivojlanishini e’tirof etish',
      'Baholashni bekor qilish',
      'Sinf reytingini tenglashtirish',
    ],
    1,
    'O‘sish mezoni faqat mutlaq natijani emas, o‘quvchining rivojlanish dinamikasini ham qadrlaydi.'
  ),

  q(
    'm2t1-m11',
    'Direktor o‘quvchilarning qiziqishlarini o‘rganib, bo‘sh vaqt dasturini qayta tuzdi. Bu qanday boshqaruvga misol?',
    [
      'Ma’lumotlarga asoslangan boshqaruvga',
      'Faqat ma’muriy boshqaruvga',
      'Tasodifiy boshqaruvga',
      'Faqat nazoratga',
    ],
    0,
    'Qaror oldindan yig‘ilgan ma’lumotga tayanganligi sababli dalillarga asoslangan boshqaruv hisoblanadi.'
  ),

  q(
    'm2t1-m12',
    'Raqamli vosita darsga joriy qilindi, ammo natija yaxshilanmadi. Qaysi xulosa eng asosli?',
    [
      'Texnologiya o‘z-o‘zidan ta’lim sifatini kafolatlamaydi',
      'Barcha raqamli vositalardan voz kechish kerak',
      'O‘quvchilar texnologiyaga qarshi',
      'An’anaviy darslar har doim samaraliroq',
    ],
    0,
    'Texnologiyaning samarasi uning pedagogik maqsadga mos va to‘g‘ri qo‘llanishiga bog‘liq.'
  ),

  q(
    'm2t1-m13',
    'O‘quvchilarning vizual axborotni yaxshi qabul qilishi aniqlansa, qaysi yechim maqsadga muvofiq?',
    [
      'Faqat uzun matnli topshiriqlar',
      'Sxema, diagramma, video va infografikalardan maqsadli foydalanish',
      'Faqat og‘zaki bayon',
      'Faqat yozma nazorat',
    ],
    1,
    'Vizual vositalar o‘quv materialini tushunishni yengillashtirishi mumkin.'
  ),

  q(
    'm2t1-m14',
    'Direktor o‘quv rejasini tahlil qilib, “Bu fan va mavzu maktabning rivojlanish maqsadiga qanday xizmat qiladi?” degan savolni qo‘ydi. Bu nimani anglatadi?',
    [
      'Strategik moslikni tahlil qilishni',
      'Dars jadvalini texnik tekshirishni',
      'Fanlarni qisqartirishni',
      'O‘qituvchining mustaqilligini cheklashni',
    ],
    0,
    'Savol o‘quv mazmunining maktab strategik maqsadlari bilan bog‘liqligini tekshiradi.'
  ),

  q(
    'm2t1-m15',
    'Ta’lim sifatini boshqarishda faqat yakuniy natijalarni tahlil qilishning cheklovi nimada?',
    [
      'Natija juda tez o‘zgaradi',
      'Jarayon va sabablar haqida yetarli ma’lumot bermaydi',
      'Baholashni murakkablashtiradi',
      'O‘quvchilar sonini kamaytiradi',
    ],
    1,
    'Yakuniy natija muammoni ko‘rsatadi, lekin uning qanday yuzaga kelganini to‘liq tushuntirmasligi mumkin.'
  ),

  q(
    'm2t1-m16',
    'Quyidagi qaysi ketma-ketlik diagnostik boshqaruvga mos?',
    [
      'Natija → tanbeh → jazo → hisobot',
      'Muammo → sabab → yechim → qayta baholash',
      'Reyting → taqqoslash → tanbeh → yakun',
      'Hisobot → arxiv → baho → qaror',
    ],
    1,
    'Diagnostik boshqaruv muammoni aniqlab, sababni tahlil qiladi va natijani qayta tekshiradi.'
  ),

  q(
    'm2t1-m17',
    'Maktabda o‘quvchilarning bo‘sh vaqti uchun yangi yo‘nalish ochishdan oldin qaysi ma’lumotlar muhim?',
    [
      'Faqat o‘qituvchi xohishi',
      'Qiziqish, ehtiyoj, mavjud resurs va kutilayotgan natija',
      'Faqat xona mavjudligi',
      'Faqat boshqa maktablar tajribasi',
    ],
    1,
    'Yangi faoliyat ehtiyoj, resurs va kutilayotgan natija o‘rtasidagi moslik asosida rejalashtiriladi.'
  ),

  q(
    'm2t1-m18',
    'Kompetensiyaga yo‘naltirilgan topshiriqning asosiy belgisi qaysi?',
    [
      'Ko‘proq ta’rif yodlatish',
      'Bilimni yangi yoki real vaziyatda qo‘llash',
      'Darslik matnini qayta yozish',
      'Faqat test variantlarini belgilash',
    ],
    1,
    'Kompetensiyaviy topshiriq bilimdan yangi sharoitda foydalanishni talab qiladi.'
  ),

  q(
    'm2t1-m19',
    'Direktor dars kuzatuvida o‘qituvchining kuchli jihatlarini ham qayd etdi. Buning boshqaruviy qiymati nimada?',
    [
      'O‘qituvchini baholashdan voz kechishda',
      'Rivojlanish uchun mavjud professional resurslarni aniqlashda',
      'Faqat ijobiy hisobot tayyorlashda',
      'Kamchiliklarni yashirishda',
    ],
    1,
    'Kuchli jihatlar keyingi professional rivojlanish uchun tayanch sifatida ishlatilishi mumkin.'
  ),

  q(
    'm2t1-m20',
    'Maktabda baholash mezonlari o‘qituvchilar bo‘yicha sezilarli farq qilmoqda. Direktorning birinchi vazifasi nima?',
    [
      'Barcha baholarni oshirish',
      'Mezonlarni aniqlashtirish va umumiy talablarga moslashtirish',
      'Baholashni bekor qilish',
      'Faqat past baho qo‘ygan o‘qituvchilarni tanqid qilish',
    ],
    1,
    'Baholashdagi izchillik aniq va umumiy mezonlar orqali ta’minlanadi.'
  ),

  q(
    'm2t1-m21',
    'O‘quvchining bilim bo‘shlig‘i aniqlanganda qaysi chora eng maqsadli?',
    [
      'Qo‘shimcha va korreksion mashg‘ulotlarni ehtiyojga mos tashkil etish',
      'Faqat nazorat ishlarini ko‘paytirish',
      'O‘quvchini jazolash',
      'Barcha mavzularni qayta boshlash',
    ],
    0,
    'Korreksion yordam aynan aniqlangan bilim bo‘shlig‘iga yo‘naltirilishi kerak.'
  ),

  q(
    'm2t1-m22',
    'Ota-onalar bilan hamkorlikka asoslangan muloqotda qaysi savol konstruktivroq?',
    [
      'Nega farzandingiz bunday?',
      'Biz birgalikda bu holatni yaxshilash uchun nima qila olamiz?',
      'Nega siz nazorat qilmadingiz?',
      'Kim aybdor?',
    ],
    1,
    'Savol aybdor izlashdan ko‘ra umumiy mas’uliyat va amaliy yechimga yo‘naltiradi.'
  ),

  q(
    'm2t1-m23',
    'Maktabda o‘quvchilarning qiziqishlari o‘rganildi, lekin natijalar asosida hech qanday qaror qabul qilinmadi. Bu holat nimani ko‘rsatadi?',
    [
      'Ma’lumot yig‘ish qaror bilan bog‘lanmagan',
      'Monitoring juda samarali bo‘lgan',
      'Qiziqishlar boshqaruv uchun ahamiyatsiz',
      'Barcha ehtiyojlar avtomatik qondirilgan',
    ],
    0,
    'Ma’lumot boshqaruv qaroriga aylantirilmasa, uning amaliy qiymati pasayadi.'
  ),

  q(
    'm2t1-m24',
    'O‘quvchilar o‘zlashtirish tezligi bo‘yicha farq qilmoqda. Qaysi yechim individual yondashuvni kuchaytiradi?',
    [
      'Barcha o‘quvchilar uchun bir xil temp',
      'Bosqichli va individual topshiriqlar',
      'Faqat kuchli o‘quvchilar bilan ishlash',
      'Past natijali o‘quvchilarni topshiriqlardan ozod qilish',
    ],
    1,
    'Bosqichli va individual topshiriqlar turli o‘zlashtirish sur’atlarini hisobga olishga imkon beradi.'
  ),

  q(
    'm2t1-m25',
    'Rag‘batlantirish tizimi faqat a’lochi o‘quvchilarni qamrab olmoqda. Qaysi o‘zgarish rivojlanish madaniyatiga mos?',
    [
      'Rag‘batni butunlay bekor qilish',
      'O‘sish, tashabbus va turli kuchli tomonlarni ham e’tirof etish',
      'Faqat eng yuqori bahoni mukofotlash',
      'Faqat musobaqa g‘oliblarini rag‘batlantirish',
    ],
    1,
    'Rivojlanish madaniyati turli shakldagi ijobiy o‘sish va tashabbusni qadrlaydi.'
  ),

  q(
    'm2t1-m26',
    'Maktabda dars kuzatuvlari ko‘p, ammo o‘qituvchilar metodik jihatdan rivojlanmayapti. Muammo nimada bo‘lishi mumkin?',
    [
      'Kuzatuv natijalari rivojlantiruvchi feedback bilan bog‘lanmagan',
      'Dars kuzatuvi umuman kerak emas',
      'O‘qituvchilar juda ko‘p',
      'Baholar yetarlicha yuqori',
    ],
    0,
    'Kuzatuvning o‘zi emas, undan keyingi tahlil, feedback va qo‘llab-quvvatlash rivojlanishni ta’minlaydi.'
  ),

  q(
    'm2t1-m27',
    'Direktor bir nechta manbadan ma’lumot oldi: diagnostika, davomat, dars kuzatuvi va ota-onalar feedbacki. Eng to‘g‘ri keyingi qadam qaysi?',
    [
      'Faqat eng yuqori ko‘rsatkichni olish',
      'Ma’lumotlarni o‘zaro taqqoslab, umumiy xulosa chiqarish',
      'Faqat direktor fikriga tayanish',
      'Qolgan ma’lumotlarni e’tiborsiz qoldirish',
    ],
    1,
    'Bir nechta manbani birgalikda tahlil qilish holatni aniqroq tushunishga yordam beradi.'
  ),

  q(
    'm2t1-m28',
    'Innovatsion metodning pilot sinovida natija kutilganidan past bo‘ldi. Eng to‘g‘ri xulosa qaysi?',
    [
      'Innovatsiya doimo samarasiz',
      'Amalga oshirish sharoitlari va metodik qo‘llash sifati ham tekshirilishi kerak',
      'Pilot natijasi umuman ahamiyatsiz',
      'Metodni darhol barcha sinflarda qo‘llash kerak',
    ],
    1,
    'Pilot natijasi metodning o‘zi bilan birga uni qanday qo‘llash sharoitlarini ham tahlil qilishni talab qiladi.'
  ),

  q(
    'm2t1-m29',
    'Maktabda o‘quvchi natijalarini yaxshilash uchun diagnostika, differensial topshiriq va ota-ona hamkorligi birgalikda qo‘llanmoqda. Bu qanday yondashuv?',
    [
      'Kompleks boshqaruv',
      'Faqat ma’muriy nazorat',
      'Faqat individual baholash',
      'Faqat psixologik yondashuv',
    ],
    0,
    'Bir nechta omil va mexanizmni birlashtirish kompleks boshqaruvga xos.'
  ),

  q(
    'm2t1-m30',
    '“Ma’lumot → qaror → natija → qayta tahlil” modeli nimani ifodalaydi?',
    [
      'Bir martalik nazoratni',
      'Uzluksiz takomillashtirish siklini',
      'Faqat hujjat yuritishni',
      'Faqat yakuniy attestatsiyani',
    ],
    1,
    'Qayta tahlil natijasida keyingi qarorlar takomillashtiriladi va boshqaruv sikli davom etadi.'
  ),
]

/* =========================================================
   3-DARAJA: QIYIN — 30 TA
========================================================= */

const hard: Question[] = [
  q(
    'm2t1-h01',
    'Maktabda fanlar bo‘yicha yakuniy natijalar barqaror, ammo o‘quvchilarning real vaziyatdagi topshiriqlarni bajarish darajasi past. Direktor qaysi muammoni birinchi navbatda tekshirishi kerak?',
    [
      'Baholash va topshiriqlarning kompetensiyani o‘lchash darajasini',
      'Faqat o‘quvchilar sonini',
      'Faqat davomatni',
      'Faqat maktab infratuzilmasini',
    ],
    0,
    'Yuqori formal natija va past amaliy qo‘llash o‘rtasidagi tafovut baholashning mazmuni va validligini tekshirishni talab qiladi.'
  ),

  q(
    'm2t1-h02',
    'Bir sinfda past natija qayd etildi. Tahlilda bilim bo‘shlig‘i, oilaviy bosim va metodik nomuvofiqlik bir vaqtda aniqlandi. Qaysi boshqaruv qarori eng maqbul?',
    [
      'Faqat o‘qituvchiga tanbeh berish',
      'Har bir sababga mos choralarni birlashtirgan reja tuzish',
      'Faqat ota-onalar bilan ishlash',
      'Faqat qo‘shimcha test o‘tkazish',
    ],
    1,
    'Muammo ko‘p omilli bo‘lsa, yechim ham har bir muhim sababga mos mexanizmlarni qamrab olishi kerak.'
  ),

  q(
    'm2t1-h03',
    'Innovatsion metod 7-A sinfida samarali, 7-B sinfida esa samarasiz bo‘ldi. Dars kuzatuvi 7-Bda metodning asosiy bosqichlari to‘liq bajarilmaganini ko‘rsatdi. Direktor qanday xulosa qilishi kerak?',
    [
      'Metod faqat 7-A uchun mos',
      'Metodning samarasi uni to‘g‘ri amalga oshirish sifati bilan ham bog‘liq',
      'Innovatsiya umuman kerak emas',
      '7-B sinfini qo‘shimcha jazolash kerak',
    ],
    1,
    'Pilot natijasidagi farq metodning amalga oshirilish sifati ham natijaga ta’sir qilishini ko‘rsatadi.'
  ),

  q(
    'm2t1-h04',
    'Direktor o‘quvchi natijalarini tahlil qilib, muammo sabablarini aniqladi, korreksion reja tuzdi va uch oy o‘tib natijani qayta o‘lchadi. Ushbu boshqaruvning eng kuchli jihati nima?',
    [
      'Faqat nazoratning kuchaytirilgani',
      'Qarorning natija bilan tekshirilgani',
      'Hisobotlar sonining oshgani',
      'O‘qituvchilar sonining ko‘paygani',
    ],
    1,
    'Qayta o‘lchash qo‘llangan choralar natija bergan-bermaganini aniqlash imkonini beradi.'
  ),

  q(
    'm2t1-h05',
    'Maktabda o‘quvchilarning baholari yuqori, ammo xalqaro tipdagi kompetensiyaviy topshiriqlarda natijalar past. Qaysi strategik chorani tanlash maqsadga muvofiq?',
    [
      'Faqat uy vazifalarini ko‘paytirish',
      'Ta’lim topshiriqlari va baholashni real qo‘llashga yo‘naltirish',
      'Baholarni yanada oshirish',
      'Faqat nazorat ishlarini ko‘paytirish',
    ],
    1,
    'Kompetensiyaviy natija uchun topshiriqlar bilimni yangi vaziyatda qo‘llashni talab qilishi kerak.'
  ),

  q(
    'm2t1-h06',
    'Maktabda o‘qituvchilar dars kuzatuvlarini “nazorat” sifatida qabul qilmoqda. Direktor ushbu qarashni o‘zgartirmoqchi. Qaysi choraga ustuvorlik berish kerak?',
    [
      'Kuzatuvlar sonini ko‘paytirishga',
      'Kuzatuvni feedback va metodik qo‘llab-quvvatlash bilan bog‘lashga',
      'Kuzatuvni bekor qilishga',
      'Har bir kuzatuvdan keyin tanbeh berishga',
    ],
    1,
    'Kuzatuv rivojlantirish vositasiga aylantirilsa, o‘qituvchilarning professional o‘sishiga xizmat qiladi.'
  ),

  q(
    'm2t1-h07',
    'Maktabda barcha sinflar uchun bir xil qo‘shimcha mashg‘ulot rejasi tuzildi, biroq muammolar sinflar kesimida farq qiladi. Qaysi boshqaruv xatosi mavjud?',
    [
      'Resurslardan ko‘p foydalanilgan',
      'Muammo xususiyatlari differensial tahlil qilinmagan',
      'Monitoring haddan tashqari aniq bo‘lgan',
      'O‘quvchilar haddan tashqari ko‘p baholangan',
    ],
    1,
    'Turli muammolarga bir xil yechim berish ehtiyojlarning farqini hisobga olmaslikka olib keladi.'
  ),

  q(
    'm2t1-h08',
    'Direktor o‘quvchilar qiziqishlari bo‘yicha audit o‘tkazdi. Natijada texnika va ingliz tiliga talab yuqori ekanligi aniqlandi, lekin maktabda tegishli resurs cheklangan. Eng maqbul strategiya qaysi?',
    [
      'Talabni e’tiborsiz qoldirish',
      'Mavjud resurs, hamkorlik va bosqichli joriy etish imkoniyatlarini tahlil qilish',
      'Barcha to‘garaklarni yopish',
      'Talabni hisobga olmasdan an’anaviy yo‘nalishlarni saqlash',
    ],
    1,
    'Ehtiyoj aniqlangach, uni mavjud resurs va hamkorlik imkoniyatlari bilan uyg‘unlashtirish kerak.'
  ),

  q(
    'm2t1-h09',
    'O‘quvchilarning past natijasi faqat o‘qituvchi metodikasi bilan izohlanmoqda. Keyingi tahlil esa ayrim o‘quvchilarda tayanch bilim bo‘shlig‘i va psixologik muammo borligini ko‘rsatdi. Bu holat nimani ko‘rsatadi?',
    [
      'Ta’lim sifati faqat o‘qituvchiga bog‘liq',
      'Ta’lim natijasi ko‘p omilli tizim sifatida ko‘rilishi kerak',
      'Psixologik omillar ahamiyatsiz',
      'Diagnostika boshqaruvga kerak emas',
    ],
    1,
    'Ta’lim natijalariga pedagogik, kognitiv, psixologik va boshqa omillar birgalikda ta’sir qilishi mumkin.'
  ),

  q(
    'm2t1-h10',
    'O‘quvchi akademik jihatdan sust, biroq sport va jamoaviy faoliyatda yuqori natija ko‘rsatmoqda. Direktorning qaysi qarori rivojlantiruvchi yondashuvga mos?',
    [
      'Sport faoliyatini cheklash',
      'Kuchli tomonlardan akademik motivatsiyani kuchaytirishda foydalanish',
      'Faqat akademik baholarni hisobga olish',
      'Rag‘batni to‘xtatish',
    ],
    1,
    'Kuchli tomonlar o‘quvchida muvaffaqiyat hissini yaratib, boshqa sohalardagi rivojlanish uchun resurs bo‘lishi mumkin.'
  ),

  q(
    'm2t1-h11',
    'Maktabda ota-onalar fikri juda ijobiy, ammo diagnostika o‘quvchilarning mustaqil fikrlashi pastligini ko‘rsatdi. Direktor qaysi qarorni tanlashi kerak?',
    [
      'Faqat ota-onalar fikriga tayanish',
      'Diagnostika, dars kuzatuvi va ota-onalar feedbackini birgalikda tahlil qilish',
      'Diagnostikani bekor qilish',
      'O‘qituvchilar fikrini umuman hisobga olmaslik',
    ],
    1,
    'Turli manbalardan kelgan dalillarni birgalikda tahlil qilish muammoni yaxshiroq ko‘rsatadi.'
  ),

  q(
    'm2t1-h12',
    'Bir o‘qituvchining o‘quvchilari testlarda yuqori natija ko‘rsatmoqda, ammo loyiha va ochiq topshiriqlarda qiynalmoqda. Direktor qaysi yo‘nalishni tekshirishi kerak?',
    [
      'Test topshiriqlari va ta’lim faoliyatining kompetensiyaga mosligini',
      'Faqat davomatni',
      'Faqat sinf xonasini',
      'Faqat uy vazifasi hajmini',
    ],
    0,
    'Testdagi natija amaliy kompetensiyani to‘liq aks ettirmasligi mumkin; topshiriqlar mazmuni tahlil qilinadi.'
  ),

  q(
    'm2t1-h13',
    'Maktabda innovatsiyani joriy etishdan oldin ehtiyoj tahlili qilinmagan. Keyinchalik o‘qituvchilar qarshilik bildirdi. Muammoning asosiy sabablaridan biri nima bo‘lishi mumkin?',
    [
      'O‘zgarishning maqsadi va zarurati yetarlicha asoslanmagan',
      'O‘qituvchilar soni ko‘pligi',
      'Maktabda baholash mavjudligi',
      'O‘quvchilar soni kamligi',
    ],
    0,
    'O‘zgarish ehtiyoj va dalil bilan asoslanmasa, uni qabul qilish va amalga oshirish qiyinlashadi.'
  ),

  q(
    'm2t1-h14',
    'Direktor monitoring natijasida bir fan bo‘yicha muammo borligini aniqladi. Muammo aynan bitta sinfda kuzatilmoqda. Qaysi qaror eng asosli?',
    [
      'Butun maktabga bir xil chora qo‘llash',
      'Muammoning mahalliy sabablarini aniqlab, maqsadli yordam ko‘rsatish',
      'Fan bo‘yicha nazoratni butunlay bekor qilish',
      'Barcha o‘qituvchilarga tanbeh berish',
    ],
    1,
    'Muammo chegaralangan bo‘lsa, yechim ham uning aniq sababi va doirasiga mos bo‘lishi kerak.'
  ),

  q(
    'm2t1-h15',
    'Direktor bir muammoni hal qilish uchun uch xil chorani sinab ko‘rdi. Qaysi ko‘rsatkichlar choraning samaradorligini aniqlashga ko‘proq yordam beradi?',
    [
      'Faqat bajarilgan ishlar soni',
      'Boshlang‘ich va keyingi natijalar o‘rtasidagi o‘zgarish',
      'Faqat xodimlarning fikri',
      'Faqat yozilgan hisobotlar soni',
    ],
    1,
    'Samaradorlik natijaning choradan oldingi va keyingi holati bilan taqqoslanganda aniqroq ko‘rinadi.'
  ),

  q(
    'm2t1-h16',
    'Maktabda resurs cheklangan, ammo bo‘sh xonalar mavjud. Direktor yangi xona qurishdan oldin nima qilishi kerak?',
    [
      'Mavjud resurslardan ko‘p funksiyali foydalanish imkoniyatini tahlil qilish',
      'Darhol yangi bino loyihasini boshlash',
      'Bo‘sh xonalarni yopish',
      'Darsdan keyingi faoliyatni qisqartirish',
    ],
    0,
    'Strategik resurs boshqaruvi mavjud imkoniyatlardan samarali foydalanishni birinchi navbatda ko‘rib chiqadi.'
  ),

  q(
    'm2t1-h17',
    'Quyidagi qarorlardan qaysi biri “monitoring”ni oddiy nazoratdan farqlaydi?',
    [
      'Natijani qayd etib, keyingi rivojlantirish choralarini belgilash',
      'Kamchiliklarni sanab berish',
      'Faqat hisobot yozish',
      'Faqat mas’ul shaxsni aniqlash',
    ],
    0,
    'Monitoring ma’lumotni qayd etish bilan cheklanmay, undan rivojlantiruvchi qarorlar uchun foydalanadi.'
  ),

  q(
    'm2t1-h18',
    'Maktabda o‘qituvchilar malakasini oshirish tadbirlari ko‘p, lekin dars sifati sezilarli o‘zgarmadi. Direktor nimani tahlil qilishi kerak?',
    [
      'Malaka oshirish mazmuni amaliy ehtiyojlarga mosligini',
      'Faqat tadbirlar sonini',
      'Faqat qatnashganlar ro‘yxatini',
      'Faqat sertifikatlar sonini',
    ],
    0,
    'Kasbiy rivojlanish natija berishi uchun uning mazmuni real metodik ehtiyoj bilan bog‘langan bo‘lishi kerak.'
  ),

  q(
    'm2t1-h19',
    'Maktabda diagnostika o‘tkazildi, lekin natijalar o‘qituvchilarga qaytarilmadi. Bu holatning asosiy kamchiligi nima?',
    [
      'Diagnostika natijasi rivojlantiruvchi feedbackga aylantirilmagan',
      'Diagnostika juda tez o‘tkazilgan',
      'O‘quvchilar soni kam bo‘lgan',
      'Natijalar haddan tashqari yuqori bo‘lgan',
    ],
    0,
    'Diagnostik ma’lumot keyingi ta’lim qarorlariga xizmat qilishi uchun tegishli tomonlarga yetkazilishi va tahlil qilinishi kerak.'
  ),

  q(
    'm2t1-h20',
    'Bir maktabda past natijalar qayd etilganda faqat o‘quvchilarga qo‘shimcha topshiriq berildi. Natija o‘zgarmadi. Qaysi xulosa asosli?',
    [
      'Faqat topshiriq hajmini oshirish yetarli bo‘lmasligi mumkin',
      'O‘quvchilar o‘qishni istamaydi',
      'Monitoring kerak emas',
      'Baholashni bekor qilish kerak',
    ],
    0,
    'Natija o‘zgarmasa, muammoning asl sababi va qo‘llangan choraning mosligi qayta tahlil qilinadi.'
  ),

  q(
    'm2t1-h21',
    'O‘quvchilarning natijasi past, lekin davomat yuqori. Qaysi taxminni tekshirish mantiqan to‘g‘ri?',
    [
      'Ta’lim jarayonining sifati va metodik samaradorligini',
      'Faqat davomat tizimini',
      'Faqat maktab binosini',
      'Faqat ota-onalar sonini',
    ],
    0,
    'Davomat yaxshi bo‘lsa-yu natija past bo‘lsa, ta’lim jarayonining mazmuni va metodikasi tahlil qilinishi kerak.'
  ),

  q(
    'm2t1-h22',
    'Direktor “o‘quvchi portreti”ni ishlab chiqishda qaysi ma’lumotlar majmuasidan foydalanishi maqsadga muvofiq?',
    [
      'Faqat baholar',
      'Natija, qiziqish, ehtiyoj, rivojlanish va psixologik-pedagogik ma’lumotlar',
      'Faqat davomat',
      'Faqat intizomiy qaydlar',
    ],
    1,
    'O‘quvchi portreti kengroq ma’lumotlar asosida shakllanganda individual yondashuv uchun foydaliroq bo‘ladi.'
  ),

  q(
    'm2t1-h23',
    'Maktabda barcha o‘quvchilarga bir xil qo‘shimcha mashg‘ulot berish rejalashtirildi. Diagnostika esa muammolar turlicha ekanini ko‘rsatdi. Qaysi yechim yaxshiroq?',
    [
      'Umumiy mashg‘ulotni yanada ko‘paytirish',
      'Diagnostika asosida kichik guruhlar va individual yordamni tashkil etish',
      'Qo‘shimcha mashg‘ulotni bekor qilish',
      'Faqat kuchli o‘quvchilar bilan ishlash',
    ],
    1,
    'Muammo turi va darajasiga moslashtirilgan yordam resurslardan samaraliroq foydalanishga imkon beradi.'
  ),

  q(
    'm2t1-h24',
    'Maktabda ota-onalar bilan hamkorlik yaxshi yo‘lga qo‘yilgan, ammo o‘qituvchilar o‘quvchi natijalari bo‘yicha umumiy ma’lumot bera olmayapti. Qaysi tizimni kuchaytirish zarur?',
    [
      'Ma’lumotlarni muntazam yig‘ish va tahlil qilish tizimini',
      'Faqat tadbirlar sonini',
      'Faqat ota-onalar yig‘ilishini',
      'Faqat nazorat ishlarini',
    ],
    0,
    'Hamkorlik samarali bo‘lishi uchun tomonlarda o‘quvchi rivojlanishi haqida ishonchli ma’lumot bo‘lishi kerak.'
  ),

  q(
    'm2t1-h25',
    'Maktabda yangi metod joriy etildi. O‘qituvchilarga material berildi, ammo amaliy qo‘llash bo‘yicha yordam berilmadi. Qaysi xavf yuzaga keladi?',
    [
      'Metodning amalga oshirilish sifati pasayishi mumkin',
      'O‘quvchilar soni avtomatik kamayadi',
      'Baholar avtomatik oshadi',
      'Monitoringga ehtiyoj qolmaydi',
    ],
    0,
    'Innovatsiyani joriy etishda metodik qo‘llab-quvvatlash uning amaliy sifatini belgilovchi muhim omildir.'
  ),

  q(
    'm2t1-h26',
    'Direktor ta’lim sifatini oshirish bo‘yicha ko‘plab tadbirlar rejasini tuzdi, ammo har bir tadbir uchun natija ko‘rsatkichi belgilanmagan. Asosiy muammo nimada?',
    [
      'Faoliyat va kutilayotgan natija o‘rtasidagi bog‘liqlik aniqlanmagan',
      'Tadbirlar soni juda kam',
      'O‘qituvchilar soni yetarli emas',
      'Monitoring ortiqcha',
    ],
    0,
    'Strategik reja faqat faoliyatlarni emas, ularning o‘lchanadigan kutilayotgan natijalarini ham ko‘rsatishi kerak.'
  ),

  q(
    'm2t1-h27',
    'Maktabdagi bir muammo uch oy davomida takrorlanmoqda, garchi bir necha marta nazorat o‘tkazilgan bo‘lsa ham. Qaysi xulosa ehtimolga yaqin?',
    [
      'Nazoratning o‘zi muammoni hal qilish uchun yetarli emas',
      'Muammo mavjud emas',
      'Nazoratni yanada ko‘paytirish kifoya',
      'Barcha mas’ullarni almashtirish kerak',
    ],
    0,
    'Nazorat muammoni aniqlaydi, ammo uning sababiga mos yechim va qo‘llab-quvvatlash bo‘lmasa natija o‘zgarmasligi mumkin.'
  ),

  q(
    'm2t1-h28',
    'Direktor ta’lim sifatini baholashda faqat o‘quvchi natijasiga emas, dars jarayoni va ta’lim muhitiga ham qaramoqda. Bu qanday yondashuv?',
    [
      'Tizimli yondashuv',
      'Faqat natijaviy yondashuv',
      'Faqat ma’muriy yondashuv',
      'Faqat statistik yondashuv',
    ],
    0,
    'Tizimli yondashuv natija bilan birga jarayon, muhit va resurslarni ham hisobga oladi.'
  ),

  q(
    'm2t1-h29',
    'Maktabda sifat ko‘rsatkichlari belgilandi. Ularning ayrimlari o‘quvchi natijasini, ayrimlari jarayonni, boshqalari resurs va muhitni ifodalaydi. Bu nima uchun foydali?',
    [
      'Sifatni bir nechta o‘zaro bog‘liq jihatdan baholash imkonini beradi',
      'Faqat hisobotni ko‘paytiradi',
      'Natijani yashirish imkonini beradi',
      'Faqat resurslarni hisoblash uchun kerak',
    ],
    0,
    'Ko‘rsatkichlarning turli guruhlari ta’lim sifatining kompleks holatini ko‘rishga yordam beradi.'
  ),

  q(
    'm2t1-h30',
    'Direktor diagnostika natijasiga asoslanib choralar ko‘rdi, ammo kutilgan o‘zgarish kuzatilmadi. Keyingi eng to‘g‘ri qadam qaysi?',
    [
      'Chorani o‘zgartirmasdan davom ettirish',
      'Sabablar va qo‘llangan choraning mosligini qayta tahlil qilish',
      'Natijani e’tiborsiz qoldirish',
      'Faqat o‘quvchilarni ayblash',
    ],
    1,
    'Kutilgan natija bo‘lmasa, muammo sababi va tanlangan yechim qayta ko‘rib chiqiladi.'
  ),
]

/* =========================================================
   4-DARAJA: KEYS — 10 TA
========================================================= */

const cases: Question[] = [
  q(
    'm2t1-c01',
    `107-sonli maktabda 7-sinf o‘quvchilarining ikki chorakdagi natijalari pasaydi. Tahlilda ayrim o‘quvchilarda tayanch bilim bo‘shlig‘i, ba’zilarida oilaviy zo‘riqish, ayrim fanlarda esa metodik nomuvofiqlik aniqlandi. Direktor muammoni faqat baho bilan izohlashdan voz kechib, sabablar kesimida tahlil qilishni boshladi.

Direktorning keyingi eng maqbul qarori qaysi?`,
    [
      'Har bir sababga mos korreksion choralarni belgilab, natijani qayta o‘lchash',
      'Barcha o‘quvchilarga bir xil qo‘shimcha topshiriq berish',
      'Faqat davomat nazoratini kuchaytirish',
      'Faqat past baho qo‘ygan o‘qituvchilarni tanqid qilish',
    ],
    0,
    'Muammo ko‘p omilli bo‘lgani uchun choralar ham bilim, psixologik va metodik omillarga moslashtirilishi kerak.'
  ),

  q(
    'm2t1-c02',
    `134-sonli maktabda darsdan keyingi to‘garaklarga qatnashuv pasaygan. O‘tkazilgan qiziqishlar auditi o‘quvchilarning amaldagi to‘garaklarning ayrimlariga qiziqishi pastligini ko‘rsatdi. Shu bilan birga, rag‘batlantirish tizimi asosan yuqori baholarga ega o‘quvchilarni qamrab olmoqda.

Quyidagi qarorlardan qaysi biri vaziyatga eng mos?`,
    [
      'Qiziqishlarga mos yo‘nalishlarni qayta tashkil etish va rivojlanish dinamikasini ham rag‘batlantirish',
      'Barcha mavjud to‘garaklarni o‘zgartirmasdan saqlash',
      'Faqat to‘garaklar sonini ko‘paytirish',
      'Rag‘batlantirish tizimini butunlay bekor qilish',
    ],
    0,
    'Audit natijasi faoliyatni o‘quvchi ehtiyojlariga moslashtirishni, rag‘batlantirish esa rivojlanishni ham qamrab olishini ko‘rsatadi.'
  ),

  q(
    'm2t1-c03',
    `129-sonli maktabda ayrim o‘quvchilarning natijalari pasaydi. Psixolog oilaviy zo‘riqish va o‘ziga ishonchsizlikni aniqladi. Dars kuzatuvida barcha o‘quvchilarga bir xil topshiriqlar berilayotgani ma’lum bo‘ldi. Ota-onalar bilan suhbatlarda esa ko‘pincha bolaning kamchiliklari sanab o‘tilgan.

Qaysi boshqaruv strategiyasi eng to‘g‘ri?`,
    [
      'Psixologik qo‘llab-quvvatlash, differensial topshiriq va hamkorlikdagi ota-ona muloqotini birlashtirish',
      'Faqat nazorat ishlarini ko‘paytirish',
      'Ota-onalarga qat’iy talablarni kuchaytirish',
      'Barcha o‘quvchilarga bir xil qo‘shimcha topshiriq berish',
    ],
    0,
    'Vaziyat psixologik, metodik va oilaviy omillarni ko‘rsatmoqda; shuning uchun kompleks yondashuv zarur.'
  ),

  q(
    'm2t1-c04',
    `113-sonli maktabda 6–8-sinflarda o‘zlashtirish pasaygan. Tahlilda tayanch bilim bo‘shliqlari, oilaviy muhit, tengdoshlar ta’siri va ayrim metodik nomuvofiqliklar aniqlandi. Direktor muammoni faqat bitta sabab bilan tushuntirish noto‘g‘ri ekanini ta’kidladi.

Quyidagi harakatlardan qaysi biri kompleks boshqaruvga mos?`,
    [
      'Sabablarni guruhlash, maqsadli korreksion yordam berish, metodik qo‘llab-quvvatlash va natijani qayta o‘lchash',
      'Faqat o‘quvchilarga qo‘shimcha uy vazifasi berish',
      'Faqat ota-onalar bilan intizomiy suhbat o‘tkazish',
      'Faqat yakuniy baholarni qayta ko‘rib chiqish',
    ],
    0,
    'Kompleks boshqaruv muammoning turli sabablarini hisobga olib, mos choralar va qayta o‘lchashni birlashtiradi.'
  ),

  q(
    'm2t1-c05',
    `146-sonli maktabda ayrim to‘garaklar formallashgan, o‘quvchilar qiziqishi yetarli o‘rganilmagan. Iqtidorli o‘quvchilarning ayrimlari boshqa markazlarga ketmoqda. Past o‘zlashtiruvchi, biroq sport, sahna yoki texnikaga qiziqadigan o‘quvchilar esa rag‘batlantirish tizimida deyarli ko‘rinmaydi.

Direktor uchun qaysi strategiya eng maqbul?`,
    [
      'Qiziqishlar auditini o‘tkazish, faoliyatni moslashtirish va turli kuchli tomonlarni rag‘batlantirish',
      'Faqat yuqori baholi o‘quvchilar uchun yangi to‘garaklar ochish',
      'To‘garaklar sonini ehtiyojni o‘rganmasdan ko‘paytirish',
      'Past o‘zlashtiruvchi o‘quvchilarni qo‘shimcha faoliyatdan cheklash',
    ],
    0,
    'Maktab bo‘sh vaqt tizimi o‘quvchi qiziqishi, kuchli tomonlari va rivojlanish ehtiyojlariga mos bo‘lishi kerak.'
  ),

  q(
    'm2t1-c06',
    `152-sonli maktabda chorak baholari yuqori, biroq mustaqil va amaliy topshiriqlarda o‘quvchilarning natijasi past. Tahlilda o‘qituvchi baholashda asosan og‘zaki javob va darsdagi faollikka tayangani aniqlandi. O‘quvchilar bilimni yangi vaziyatga ko‘chirishda qiynalmoqda.

Direktor qanday qaror qabul qilishi kerak?`,
    [
      'Baholash mezonlari va topshiriqlarni kompetensiyaviy natijalar nuqtayi nazaridan audit qilish',
      'Chorak baholarini avtomatik pasaytirish',
      'Faqat uy vazifalari hajmini oshirish',
      'O‘quvchilarning mustaqil topshiriqlarini bekor qilish',
    ],
    0,
    'Formal baholar va amaliy kompetensiya o‘rtasidagi tafovut baholash mezonlari hamda topshiriqlarini audit qilishni talab qiladi.'
  ),

  q(
    'm2t1-c07',
    `161-sonli maktabda yangi interaktiv metod ikki sinfda pilot qilindi. 7-A sinfida natija yaxshilandi, 7-B sinfida esa sezilarli o‘zgarish bo‘lmadi. Dars kuzatuvida 7-B sinfida metodning asosiy bosqichlari to‘liq bajarilmagani aniqlandi.

Direktorning eng maqbul qarori qaysi?`,
    [
      'Metodni darhol butun maktabga joriy qilish',
      'Metodni butunlay bekor qilish',
      'O‘qituvchiga metodik yordam berib, amalga oshirish sifatini yaxshilash va qayta sinash',
      'Faqat 7-B o‘quvchilarini qo‘shimcha nazorat qilish',
    ],
    2,
    'Pilotdagi farq metodning o‘zidan tashqari uni amalga oshirish sifati bilan ham bog‘liq ekanini ko‘rsatadi.'
  ),

  q(
    'm2t1-c08',
    `174-sonli maktabda ota-onalar maktab faoliyatidan mamnun. Shu bilan birga, diagnostik topshiriqlar o‘quvchilarning mustaqil fikrlashi pastligini ko‘rsatdi. Dars kuzatuvlarida ham tayyor algoritmlardan ortiqcha foydalanish aniqlandi.

Direktor qaysi boshqaruv qarorini tanlashi kerak?`,
    [
      'Ota-onalar mamnunligi sabab o‘zgarish kiritmaslik',
      'Diagnostika, dars kuzatuvi va ota-onalar feedbackini birgalikda tahlil qilish',
      'Faqat ota-onalar fikriga tayanish',
      'Mustaqil fikrlashni baholashni vaqtincha to‘xtatish',
    ],
    1,
    'Turli manbalardan kelgan ma’lumotlarni birlashtirish vaziyatni yaxlit ko‘rish va asosli qaror qabul qilish imkonini beradi.'
  ),

  q(
    'm2t1-c09',
    `183-sonli maktabda resurslar cheklangan. Kutubxona kun davomida kam ishlatiladi, ayrim xonalar esa darsdan keyin bo‘sh turadi. Shu bilan birga, o‘quvchilarda loyiha va mustaqil ishlashga ehtiyoj yuqori.

Qaysi qaror resurslarni strategik boshqarishga eng mos?`,
    [
      'Yangi bino qurilishini kutish',
      'Mavjud kutubxona va xonalarni ko‘p funksiyali ta’lim maydonlariga moslashtirish',
      'Darsdan keyingi faoliyatni qisqartirish',
      'Kutubxonadan faqat kitob o‘qish uchun foydalanish',
    ],
    1,
    'Mavjud resurslarni bir nechta ta’limiy maqsadga moslashtirish cheklangan sharoitda samaradorlikni oshiradi.'
  ),

  q(
    'm2t1-c10',
    `195-sonli maktabda direktor chorak boshida o‘quvchilarning fanlarga qiziqishi, qaysi mavzularda qiynalayotgani va rivojlanish dinamikasini aniqladi. Natijalarga ko‘ra qo‘shimcha mashg‘ulotlar qayta taqsimlandi. Chorak oxirida o‘quvchilar natijalari yana o‘lchandi.

Ushbu boshqaruv jarayonining asosiy kuchli tomoni nimada?`,
    [
      'Qaror diagnostika asosida qabul qilinib, natija qayta o‘lchangan',
      'Faqat qo‘shimcha mashg‘ulotlar soni oshirilgan',
      'Barcha o‘quvchilar bir xil guruhlarga ajratilgan',
      'Nazorat davri qisqartirilgan',
    ],
    0,
    'Jarayon diagnostika → qaror → amalga oshirish → qayta o‘lchash siklini namoyon qiladi.'
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
