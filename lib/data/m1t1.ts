import type { Question } from '../quiz-data'

/*
 * =========================================================
 * 1-MODUL · 1-MAVZU
 * Umumiy ta’lim muassasasini boshqarish
 * ---------------------------------------------------------
 * 30 oson · 30 o‘rta · 30 qiyin · 10 keys
 * =========================================================
 */

const q = (
  id: string,
  text: string,
  options: string[],
  answer: number,
  explanation: string,
): Question => ({ id, text, options, answer, explanation })

/* 🟢 OSON — 30 TA */
const easy: Question[] = [
  q('m1t1-e01', 'Maktabni boshqarishning bosh maqsadi nima?', [
    'Faqat hujjatlar sonini ko‘paytirish',
    'Ta’lim sifati va tarbiya samaradorligini oshirish',
    'Faqat o‘qituvchilar faoliyatini nazorat qilish',
    'Maktabning moddiy bazasini kengaytirish',
  ], 1, 'Maktab boshqaruvining bosh maqsadi ta’lim sifati va tarbiya samaradorligini oshirishdir.'),

  q('m1t1-e02', 'Maktab boshqaruvida qaysi faoliyat ta’lim-tarbiya jarayonini boshqarishga bevosita kiradi?', [
    'Ta’lim-tarbiya jarayonini rejalashtirish va tashkil etish',
    'Faqat maktab binosini ta’mirlash',
    'Faqat moliyaviy hisobot tayyorlash',
    'Faqat sport musobaqalarini o‘tkazish',
  ], 0, 'Ta’lim-tarbiya jarayonini rejalashtirish va tashkil etish maktab boshqaruvining asosiy yo‘nalishidir.'),

  q('m1t1-e03', 'Boshqaruv tamoyillari qanday vazifani bajaradi?', [
    'Faqat moliyaviy nazoratni amalga oshiradi',
    'Boshqaruv faoliyatini yo‘naltiruvchi asosiy qoidalar bo‘lib xizmat qiladi',
    'Faqat o‘quvchilarni baholaydi',
    'Faqat hujjatlarni saqlaydi',
  ], 1, 'Boshqaruv tamoyillari rahbar va jamoa faoliyatini yo‘naltiruvchi asosiy qoidalardir.'),

  q('m1t1-e04', 'Maqsadlilik tamoyili nimani anglatadi?', [
    'Boshqaruvni tasodifiy amalga oshirishni',
    'Barcha faoliyatni aniq maqsad va vazifalarga yo‘naltirishni',
    'Faqat uzoq muddatli rejalar tuzishni',
    'Faqat moliyaviy resurslarni nazorat qilishni',
  ], 1, 'Maqsadlilik barcha boshqaruv faoliyatini aniq maqsad va vazifalarga yo‘naltirishni anglatadi.'),

  q('m1t1-e05', 'Maktabni yagona tizim sifatida ko‘rib, barcha yo‘nalishlarni o‘zaro bog‘liq holda boshqarish qaysi tamoyilga tegishli?', [
    'Rag‘batlantirish',
    'Rejalilik',
    'Tizimlilik va kompleks yondashuv',
    'Shaffoflik',
  ], 2, 'Maktabdagi barcha subyekt va jarayonlarning o‘zaro bog‘liqligi tizimlilik tamoyilini ifodalaydi.'),

  q('m1t1-e06', 'Boshqaruv qarorlarini taxmin emas, dalil va tahlillarga asoslanib qabul qilish qaysi tamoyil?', [
    'Ilmiylik',
    'Demokratiklik',
    'Hamkorlik',
    'Rejalilik',
  ], 0, 'Dalil, tahlil, monitoring va diagnostikaga tayanish ilmiylik tamoyiliga mos.'),

  q('m1t1-e07', 'Quyidagilardan qaysi biri ilmiylik tamoyiliga mos keladi?', [
    'Qarorni odat asosida qabul qilish',
    'Qarorni shaxsiy taxmin asosida qabul qilish',
    'O‘quvchilarning o‘zlashtirish ko‘rsatkichlarini tahlil qilish',
    'Qarorni faqat bitta xodim fikriga asoslash',
  ], 2, 'O‘zlashtirish ko‘rsatkichlarini tahlil qilish ilmiy va dalillarga asoslangan boshqaruvga misoldir.'),

  q('m1t1-e08', 'Qaror qabul qilishda pedagogik kengash va jamoa fikrini inobatga olish qaysi tamoyilga mos?', [
    'Demokratiklik va jamoaviy boshqaruv',
    'Ilmiylik',
    'Rejalilik',
    'Nazorat',
  ], 0, 'Jamoa fikrini qaror qabul qilishga jalb etish demokratik boshqaruvga xos.'),

  q('m1t1-e09', 'Demokratik boshqaruvda yakuniy mas’uliyat kimning zimmasida bo‘ladi?', [
    'Har bir o‘qituvchining',
    'Ota-onalar qo‘mitasining',
    'Maktab direktorining',
    'O‘quvchilar yetakchisining',
  ], 2, 'Jamoaviy muhokama mavjud bo‘lsa-da, yakuniy mas’uliyat rahbar zimmasida qoladi.'),

  q('m1t1-e10', 'Maktab faoliyatining rejasiz bo‘lishi mumkin emasligini ifodalovchi tamoyil qaysi?', [
    'Ilmiylik',
    'Rejalilik',
    'Shaffoflik',
    'Motivatsiya',
  ], 1, 'Maktab faoliyatini oldindan belgilash va tashkil etish rejalilik tamoyiliga asoslanadi.'),

  q('m1t1-e11', 'Quyidagilardan qaysi biri maktabning rejalashtirish hujjatlariga kiradi?', [
    'Yillik ish rejasi',
    'Faqat reklama rejasi',
    'Faqat xodimlarning shaxsiy rejasi',
    'Faqat sport rejasi',
  ], 0, 'Yillik ish rejasi maktab faoliyatini rejalashtirishning asosiy hujjatlaridan biridir.'),

  q('m1t1-e12', 'Nazoratning asosiy maqsadi materialga ko‘ra nima?', [
    'Xodimlarni qo‘rqitish',
    'Faqat kamchilik topish',
    'Sifatni oshirish',
    'Faqat hisobot yig‘ish',
  ], 2, 'Nazorat faqat tekshirish emas, balki sifatni oshirish vositasidir.'),

  q('m1t1-e13', 'Nazorat natijasida rahbar xulosa chiqarib, tavsiya berishi nimani ta’minlaydi?', [
    'Teskari aloqani',
    'Moliyaviy nazoratni',
    'Ish taqsimotini',
    'Reklamani',
  ], 0, 'Nazoratdan keyingi tavsiya va yordam teskari aloqani ta’minlaydi.'),

  q('m1t1-e14', 'Barcha xodimlarga teng talab va mezon qo‘yish qaysi tamoyilga mos?', [
    'Hamkorlik',
    'Adolatlilik va shaffoflik',
    'Ilmiylik',
    'Rejalilik',
  ], 1, 'Teng mezon va talablar adolatlilik hamda shaffoflikni ta’minlaydi.'),

  q('m1t1-e15', 'Quyidagilardan qaysi biri ma’naviy rag‘batlantirishga misol bo‘ladi?', [
    'E’tirof va tashakkurnoma',
    'Ish vaqtini qisqartirish',
    'Hujjatlarni tekshirish',
    'Monitoring o‘tkazish',
  ], 0, 'E’tirof va tashakkurnoma ma’naviy rag‘batlantirish shakllaridir.'),

  q('m1t1-e16', 'Ota-onalar, mahalla, OTM va tashkilotlar bilan hamkorlik qilish qaysi tamoyilga tegishli?', [
    'Ilmiylik',
    'Hamkorlik va ijtimoiy sheriklik',
    'Rejalilik',
    'Nazorat',
  ], 1, 'Tashqi hamkorlar bilan ishlash hamkorlik va ijtimoiy sheriklik tamoyiliga kiradi.'),

  q('m1t1-e17', 'Maktab boshqaruvida maqsadlar aniq bo‘lsa, nima to‘g‘ri taqsimlanadi?', [
    'Faqat o‘quvchilar',
    'Resurslar',
    'Faqat darsliklar',
    'Faqat hujjatlar',
  ], 1, 'Aniq maqsad resurslarni to‘g‘ri yo‘naltirish va taqsimlashga yordam beradi.'),

  q('m1t1-e18', 'O‘quvchilarning rivojlanishini muntazam kuzatish maktab boshqaruvining qaysi yo‘nalishiga kiradi?', [
    'Monitoring',
    'Reklama',
    'Moliyalashtirish',
    'Ishga qabul qilish',
  ], 0, 'O‘quvchilar rivojlanishini kuzatish monitoring faoliyatidir.'),

  q('m1t1-e19', 'Boshqaruv tamoyillarini ularning mazmuni bilan moslashtiring: 1-Maqsadlilik, 2-Ilmiylik, 3-Rejalilik, 4-Rag‘batlantirish.', [
    '1-c, 2-b, 3-a, 4-d',
    '1-a, 2-c, 3-d, 4-b',
    '1-b, 2-d, 3-c, 4-a',
    '1-d, 2-a, 3-b, 4-c',
  ], 0, 'Maqsadlilik—aniq maqsad; ilmiylik—dalil; rejalilik—reja; rag‘batlantirish—mehnatni baholash.'),

  q('m1t1-e20', 'Boshqaruv yo‘nalishlarini moslashtiring: 1-Pedagoglar, 2-O‘quvchilar, 3-Ota-onalar, 4-Moddiy resurslar.', [
    '1-b, 2-a, 3-c, 4-d',
    '1-a, 2-b, 3-d, 4-c',
    '1-c, 2-d, 3-a, 4-b',
    '1-d, 2-c, 3-b, 4-a',
  ], 0, 'Pedagoglar faoliyati muvofiqlashtiriladi, o‘quvchilar monitoring qilinadi, ota-onalar bilan hamkorlik qilinadi.'),

  q('m1t1-e21', 'Akkreditatsiyadan o‘tkazish bosqichlarining boshlang‘ich bosqichini aniqlang.', [
    'Attestatsiya jarayoniga tayyorgarlik ko‘rish',
    'Ta’lim sifati monitoringini amalga oshirish',
    'Kamchiliklarni bartaraf etish',
    'Ijroni nazorat qilish',
  ], 0, 'Akkreditatsiya jarayonida dastlab attestatsiyaga tayyorgarlik ko‘riladi.'),

  q('m1t1-e22', 'Akkreditatsiya bosqichlarining to‘g‘ri ketma-ketligini belgilang: 1-Tayyorgarlik, 2-Attestatsiya va tahlil, 3-Qaror, 4-Kamchiliklarni bartaraf etish.', [
    '1 → 2 → 3 → 4',
    '2 → 1 → 4 → 3',
    '3 → 2 → 1 → 4',
    '4 → 3 → 2 → 1',
  ], 0, 'Akkreditatsiya jarayoni tayyorgarlikdan boshlanib, attestatsiya, qaror va kamchiliklarni bartaraf etish bosqichlariga o‘tadi.'),

  q('m1t1-e23', 'Quyidagi boshqaruv faoliyatlarining mantiqiy ketma-ketligini belgilang: 1-Maqsadni belgilash, 2-Reja tuzish, 3-Amalga oshirish, 4-Nazorat.', [
    '1 → 2 → 3 → 4',
    '2 → 1 → 4 → 3',
    '3 → 2 → 1 → 4',
    '4 → 3 → 2 → 1',
  ], 0, 'Boshqaruvda avval maqsad, keyin reja, ijro va nazorat amalga oshiriladi.'),

  q('m1t1-e24', 'Attestatsiya nima?', [
    'Ta’lim tashkilotining faoliyatini baholashda davlat nazoratining asosiy shakli',
    'O‘qituvchilarni ishga qabul qilish jarayoni',
    'Maktabning moliyaviy rejasi',
    'O‘quvchilarni yakuniy baholash shakli',
  ], 0, 'Attestatsiya ta’lim tashkilotining faoliyatini baholashda davlat nazoratining asosiy shaklidir.'),

  q('m1t1-e25', 'Attestatsiyaning asosiy maqsadi nima?', [
    'Maktabning moliyaviy holatini aniqlash',
    'Ta’lim sifatining davlat ta’lim standartlari va davlat ta’lim talablariga muvofiqligini aniqlash',
    'O‘qituvchilar sonini kamaytirish',
    'Ota-onalar faoliyatini baholash',
  ], 1, 'Attestatsiyaning maqsadi ta’lim sifatining belgilangan davlat standartlari va talablariga muvofiqligini aniqlashdir.'),

  q('m1t1-e26', 'Attestatsiyaning asosiy prinsiplaridan biri qaysi?', [
    'Mustaqillik',
    'Jazolash',
    'Yashirinlik',
    'Bir tomonlama boshqaruv',
  ], 0, 'Mustaqillik attestatsiyaning asosiy prinsiplaridan biridir.'),

  q('m1t1-e27', 'Umumiy o‘rta ta’lim tashkilotlarining attestatsiyasida oxirgi necha yillik faoliyati kompleks tahlil qilinadi?', [
    '1 yil',
    '2 yil',
    '3 yil',
    '5 yil',
  ], 1, 'Attestatsiya jarayonida oxirgi ikki yillik faoliyat kompleks tahlil qilinadi.'),

  q('m1t1-e28', 'Yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti necha yil muddatga akkreditatsiyadan o‘tgan deb hisoblanadi?', [
    '5 yil',
    '7 yil',
    '10 yil',
    '11 yil',
  ], 3, 'Materialga ko‘ra, yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti 11 yilga akkreditatsiyadan o‘tgan deb hisoblanadi.'),

  q('m1t1-e29', 'TALIS qanday tadqiqot?', [
    'O‘quvchilar uchun imtihon',
    'O‘qituvchilar va maktab rahbarlarining anonim so‘rovnomasi',
    'Maktablarni moliyaviy tekshirish tizimi',
    'O‘qituvchilarni attestatsiyadan o‘tkazish imtihoni',
  ], 1, 'TALIS o‘qituvchilar va maktab rahbarlarining anonim so‘rovnomalariga asoslangan xalqaro tadqiqotdir.'),

  q('m1t1-e30', 'TALIS ma’lumotlarni qanday usul orqali to‘playdi?', [
    'Standartlashtirilgan so‘rovnomalar orqali',
    'Faqat yozma imtihon orqali',
    'Faqat direktorlarning buyruqlari orqali',
    'Faqat moliyaviy hisobotlar orqali',
  ], 0, 'TALIS standartlashtirilgan so‘rovnomalar orqali ma’lumot to‘playdi.'),
]

/* 🟡 O‘RTA — 30 TA */
const medium: Question[] = [
  q('m1t1-m01', 'Maktab rahbari choraklik vazifalarni maktabning uzoq muddatli ta’lim sifati maqsadlari bilan bog‘ladi. Bu qaysi tamoyilning amaliy ko‘rinishi?', [
    'Rag‘batlantirish',
    'Maqsadlilik',
    'Hamkorlik',
    'Shaffoflik',
  ], 1, 'Qisqa va uzoq muddatli maqsadlarni uyg‘unlashtirish maqsadlilik tamoyiliga mos.'),

  q('m1t1-m02', 'Maktabda o‘quvchilarning o‘zlashtirish darajasi pasaymoqda. Direktor davomat, intizom, psixologik muhit va metodik ta’minotni ham birgalikda tahlil qildi. Qaysi tamoyil qo‘llanilgan?', [
    'Tizimlilik va kompleks yondashuv',
    'Yakkaboshchilik',
    'Rag‘batlantirish',
    'Rejalilik',
  ], 0, 'Bir muammoni bir nechta o‘zaro bog‘liq omillar bilan birga ko‘rish kompleks yondashuvdir.'),

  q('m1t1-m03', 'Direktor o‘qituvchining faoliyatiga oid qarorni dars kuzatuvi, monitoring va pedagogik diagnostika natijalariga asoslab qabul qildi. Bu qaysi tamoyilga mos?', [
    'Demokratiklik',
    'Ilmiylik',
    'Hamkorlik',
    'Motivatsiya',
  ], 1, 'Dalillarga asoslangan boshqaruv ilmiylik tamoyiliga mos.'),

  q('m1t1-m04', 'Maktabdagi yangi metodik yondashuvni joriy etishdan oldin direktor pedagogik kengash va metodik birlashmalar fikrini o‘rgandi. Qaysi tamoyil ustuvor?', [
    'Demokratiklik va jamoaviy boshqaruv',
    'Nazorat va teskari aloqa',
    'Rejalilik',
    'Adolatlilik',
  ], 0, 'Jamoa fikrini qaror jarayoniga jalb etish demokratik boshqaruvni ifodalaydi.'),

  q('m1t1-m05', 'Jamoa qarorni muhokama qilishda faol qatnashdi, ammo qarorning bajarilishi uchun yakuniy mas’uliyat direktor zimmasida qoldi. Bu holat nimani ifodalaydi?', [
    'Demokratiklik va rahbar mas’uliyatining uyg‘unligini',
    'Faqat jamoaviy boshqaruvni',
    'Faqat yakkaboshchilikni',
    'Nazoratning bekor qilinishini',
  ], 0, 'Jamoaviy ishtirok rahbarning yakuniy mas’uliyatini bekor qilmaydi.'),

  q('m1t1-m06', 'Maktabda ichki nazorat rejasida dars kuzatuvi, bilim monitoringi va hujjatlar ijrosi belgilangan. Bu qaysi tamoyilning amaliy ifodasidir?', [
    'Rejalilik',
    'Rag‘batlantirish',
    'Hamkorlik',
    'Demokratiklik',
  ], 0, 'Nazorat faoliyatining oldindan rejalashtirilishi rejalilik tamoyilini ko‘rsatadi.'),

  q('m1t1-m07', 'Direktor dars kuzatuvidan keyin o‘qituvchiga faqat kamchiliklarini ko‘rsatib, ularni tuzatish bo‘yicha tavsiya bermadi. Qaysi jihat yetishmayapti?', [
    'Teskari aloqa',
    'Rejalilik',
    'Ijtimoiy sheriklik',
    'Moliyaviy boshqaruv',
  ], 0, 'Nazoratdan keyingi tavsiya va yordam teskari aloqaning muhim qismidir.'),

  q('m1t1-m08', 'Bir xil ishni bajarayotgan ikki pedagogga turlicha mezon qo‘llanildi. Bu qaysi tamoyilga zid?', [
    'Ilmiylik',
    'Adolatlilik va shaffoflik',
    'Hamkorlik',
    'Tizimlilik',
  ], 1, 'Bir xil holatga turlicha mezon qo‘llash adolatlilik va shaffoflikka zid.'),

  q('m1t1-m09', 'O‘qituvchining yaxshi natijasi jamoa oldida e’tirof etildi va unga kasbiy rivojlanish imkoniyati yaratildi. Bu qaysi yondashuvga mos?', [
    'Nazorat',
    'Motivatsiya va rag‘batlantirish',
    'Intizomiy ta’sir',
    'Akkreditatsiya',
  ], 1, 'E’tirof va kasbiy rivojlanish motivatsiyaning muhim shakllaridir.'),

  q('m1t1-m10', 'Maktab o‘quvchilarni kasbga yo‘naltirishni kuchaytirish uchun OTM va mahalliy tashkilotlar bilan hamkorlik qildi. Bu qaysi tamoyilning amaliy ko‘rinishi?', [
    'Hamkorlik va ijtimoiy sheriklik',
    'Ilmiylik',
    'Rejalilik',
    'Nazorat',
  ], 0, 'OTM va tashkilotlar bilan hamkorlik ijtimoiy sheriklikni ifodalaydi.'),

  q('m1t1-m11', 'Quyidagi holatlardan qaysi biri tizimlilik va kompleks yondashuvga eng mos?', [
    'Faqat o‘quvchilar baholarini tahlil qilish',
    'Faqat o‘qituvchilar davomatini tekshirish',
    'Ta’lim sifati bilan birga tarbiya, intizom, psixologik muhit va resurslarni tahlil qilish',
    'Faqat maktab binosini ta’mirlash',
  ], 2, 'Kompleks yondashuv ta’lim bilan bog‘liq bir nechta omillarni birgalikda ko‘rib chiqadi.'),

  q('m1t1-m12', 'Maktab rahbari “o‘quvchilar natijasi yaxshilanadi” degan umumiy maqsadni o‘lchash uchun o‘zlashtirish va davomat ko‘rsatkichlarini belgiladi. Bu qanday yondashuv?', [
    'Natijalarni indikatorlar orqali o‘lchash',
    'Jamoaviy boshqaruvdan voz kechish',
    'Faqat nazoratni kuchaytirish',
    'Akkreditatsiyaga tayyorgarlik',
  ], 0, 'O‘zlashtirish va davomat maqsadga erishishni o‘lchash indikatorlari sifatida qo‘llanmoqda.'),

  q('m1t1-m13', 'Rahbar ichki nazoratni xodimlarni jazolash vositasi emas, ularning faoliyatini yaxshilash vositasi sifatida tashkil etdi. Bu qaysi yondashuvga mos?', [
    'Nazoratni rivojlantirish vositasi sifatida qo‘llash',
    'Nazoratni bekor qilish',
    'Faqat intizomiy nazorat',
    'Faqat tashqi baholash',
  ], 0, 'Materialda nazoratni qo‘rqitish emas, rivojlantirish vositasi sifatida tashkil etish ko‘rsatilgan.'),

  q('m1t1-m14', 'Maktabda maqsadlar aniq belgilanmaganligi sababli resurslar samarasiz taqsimlandi. Qaysi tamoyil yetarli darajada ta’minlanmagan?', [
    'Maqsadlilik',
    'Hamkorlik',
    'Rag‘batlantirish',
    'Demokratiklik',
  ], 0, 'Aniq maqsad resurslarni to‘g‘ri yo‘naltirish uchun asos bo‘ladi.'),

  q('m1t1-m15', 'Quyidagilardan qaysi biri ilmiylik tamoyiliga mos kelmaydi?', [
    'Monitoring natijalarini tahlil qilish',
    'So‘rovnoma natijalaridan foydalanish',
    'Dars kuzatuvlarini hisobga olish',
    'Qarorni faqat rahbarning shaxsiy taxminiga asoslash',
  ], 3, 'Shaxsiy taxmin dalil va tahlilga asoslangan ilmiy boshqaruvga mos kelmaydi.'),

  q('m1t1-m16', 'Tamoyillarni moslashtiring: 1-Maqsadlilik, 2-Ilmiylik, 3-Demokratiklik, 4-Adolatlilik. a-Dalillarga asoslash, b-Aniq maqsad, c-Jamoa fikri, d-Teng mezon.', [
    '1-b, 2-a, 3-c, 4-d',
    '1-a, 2-b, 3-d, 4-c',
    '1-c, 2-d, 3-a, 4-b',
    '1-d, 2-c, 3-b, 4-a',
  ], 0, 'Har bir tamoyil o‘zining mazmuniy tavsifiga moslashtirilgan.'),

  q('m1t1-m17', 'Nazorat shakllarini moslashtiring: 1-Dars kuzatuvi, 2-Bilim monitoringi, 3-Hujjatlar nazorati, 4-Tarbiyaviy ishlar tahlili.', [
    '1-b, 2-a, 3-c, 4-d',
    '1-a, 2-b, 3-d, 4-c',
    '1-c, 2-d, 3-a, 4-b',
    '1-d, 2-c, 3-b, 4-a',
  ], 0, 'Dars kuzatuvi—dars jarayoni; bilim monitoringi—natija; hujjatlar nazorati—ijro; tarbiyaviy tahlil—tarbiya samaradorligi.'),

  q('m1t1-m18', 'Rag‘batlantirish shakllarini moslashtiring: 1-Ma’naviy, 2-Kasbiy rivojlanish, 3-Moddiy.', [
    '1-b, 2-a, 3-c',
    '1-a, 2-c, 3-b',
    '1-c, 2-b, 3-a',
    '1-b, 2-c, 3-a',
  ], 0, 'Tashakkurnoma—ma’naviy, seminar—kasbiy, belgilangan tartibdagi to‘lov—moddiy rag‘bat.'),

  q('m1t1-m19', 'Attestatsiya va akkreditatsiyani mazmuniga ko‘ra moslashtiring.', [
    '1-attestatsiya: muvofiqlikni aniqlash; 2-akkreditatsiya: muvofiqlikni davlat tomonidan e’tirof etish',
    '1-attestatsiya: davlat tomonidan e’tirof; 2-akkreditatsiya: sifatni aniqlash',
    'Ikkalasi ham faqat ichki monitoring',
    'Ikkalasi ham TALIS so‘rovi',
  ], 0, 'Attestatsiya muvofiqlikni aniqlaydi, akkreditatsiya esa muvofiqlikning davlat tomonidan e’tirofidir.'),

  q('m1t1-m20', 'TALIS yo‘nalishlarini moslashtiring: 1-Ish sharoitlari, 2-Kasbiy rivojlanish, 3-Kasbiy qoniqish, 4-Maktab madaniyati va boshqaruvi.', [
    '1-c, 2-a, 3-d, 4-b',
    '1-a, 2-c, 3-b, 4-d',
    '1-d, 2-b, 3-c, 4-a',
    '1-b, 2-d, 3-a, 4-c',
  ], 0, 'TALIS o‘qituvchilarning ish sharoiti, rivojlanishi, qoniqishi va maktab boshqaruvini o‘rganadi.'),

  q('m1t1-m21', 'Maktab boshqaruvida maqsad va natijaga yo‘naltirilgan faoliyatning mantiqiy ketma-ketligini belgilang.', [
    'Maqsad → reja → amalga oshirish → nazorat',
    'Reja → maqsad → nazorat → amalga oshirish',
    'Amalga oshirish → maqsad → reja → nazorat',
    'Nazorat → reja → maqsad → amalga oshirish',
  ], 0, 'Boshqaruv jarayoni maqsadni belgilashdan boshlanib, rejalashtirish, ijro va nazorat bilan davom etadi.'),

  q('m1t1-m22', 'Akkreditatsiya jarayonining to‘g‘ri ketma-ketligini belgilang.', [
    'Tayyorgarlik → attestatsiya va tahlil → qaror → kamchiliklarni bartaraf etish → ijroni nazorat qilish → xavf-xatarga asoslangan monitoring',
    'Attestatsiya → tayyorgarlik → qaror → monitoring → kamchiliklarni bartaraf etish → nazorat',
    'Tayyorgarlik → qaror → attestatsiya → monitoring → nazorat → kamchiliklar',
    'Kamchiliklarni bartaraf etish → tayyorgarlik → attestatsiya → qaror → monitoring → nazorat',
  ], 0, 'Materialda akkreditatsiyaning olti bosqichi aynan shu ketma-ketlikda berilgan.'),

  q('m1t1-m23', 'Ilmiy asoslangan boshqaruv qarorini qabul qilish jarayonini belgilang.', [
    'Muammoni aniqlash → ma’lumot yig‘ish → tahlil → qaror',
    'Ma’lumot yig‘ish → qaror → muammoni aniqlash → tahlil',
    'Tahlil → qaror → ma’lumot yig‘ish → muammo',
    'Qaror → muammo → tahlil → ma’lumot',
  ], 0, 'Ilmiy boshqaruv avval muammoni aniqlash, dalil yig‘ish va tahlil qilishni talab qiladi.'),

  q('m1t1-m24', 'Maktabda o‘zlashtirish ko‘rsatkichlari pasaydi. Rahbar dars kuzatuvi, o‘quvchilar natijalari, suhbat va so‘rovnoma ma’lumotlarini yig‘di. Bu harakatning asosiy tamoyili qaysi?', [
    'Ilmiylik',
    'Rag‘batlantirish',
    'Hamkorlik',
    'Yakkaboshchilik',
  ], 0, 'Turli dalillarni yig‘ib, muammoni tahlil qilish ilmiylik tamoyiliga mos.'),

  q('m1t1-m25', 'Direktor yangi ichki tartibni ishlab chiqishda pedagoglar, sinf rahbarlari va ota-onalar vakillarining fikrlarini oldi. Buning asosiy maqsadi nimaga mos?', [
    'Jamoaning boshqaruvdagi ishtirokini ta’minlash',
    'Rahbar mas’uliyatini bekor qilish',
    'Nazoratni to‘xtatish',
    'Rejalashtirishdan voz kechish',
  ], 0, 'Turli manfaatdor tomonlarning fikrini olish demokratik boshqaruvni kuchaytiradi.'),

  q('m1t1-m26', 'Maktab rahbari o‘qituvchilarning ish samaradorligini oshirish uchun metodik seminar, individual maslahat va kasbiy rivojlanish imkoniyatlarini tashkil etdi. Bu qaysi yo‘nalishga mos?', [
    'Motivatsiya va kasbiy rivojlanishni qo‘llab-quvvatlash',
    'Faqat intizomiy nazorat',
    'Akkreditatsiya',
    'Moliyaviy audit',
  ], 0, 'Kasbiy rivojlanish va metodik yordam xodimlarni rivojlantirish hamda motivatsiyalashga xizmat qiladi.'),

  q('m1t1-m27', 'TALIS tadqiqotining asosiy xususiyati qaysi javobda to‘g‘ri berilgan?', [
    'O‘quvchilar bilimini individual baholaydigan imtihon',
    'O‘qituvchilar va maktab rahbarlaridan standartlashtirilgan so‘rovnomalar orqali ma’lumot yig‘adigan tadqiqot',
    'Maktablarni davlat akkreditatsiyasidan o‘tkazish mexanizmi',
    'Faqat direktorlar faoliyatini tekshiruvchi nazorat turi',
  ], 1, 'TALIS imtihon emas, standartlashtirilgan so‘rovnomalar asosidagi xalqaro tadqiqotdir.'),

  q('m1t1-m28', 'Yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti haqida qaysi fikr materialga muvofiq?', [
    'Tashkil etilgan kundan boshlab 5 yil akkreditatsiyadan o‘tgan hisoblanadi',
    'Tashkil etilgan kundan boshlab 11 yil akkreditatsiyadan o‘tgan hisoblanadi',
    'Faqat attestatsiyadan keyin akkreditatsiyadan o‘tgan hisoblanadi',
    '11 oy muddatga akkreditatsiyadan o‘tgan hisoblanadi',
  ], 1, 'Materialga ko‘ra yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti 11 yilga akkreditatsiyadan o‘tgan deb hisoblanadi.'),

  q('m1t1-m29', 'Attestatsiyada umumiy o‘rta ta’lim tashkilotining qaysi faoliyat davri kompleks tahlil qilinadi?', [
    'Oxirgi 6 oylik faoliyati',
    'Oxirgi bir yillik faoliyati',
    'Oxirgi ikki yillik faoliyati',
    'Oxirgi besh yillik faoliyati',
  ], 2, 'Attestatsiyada oxirgi ikki yillik faoliyat kompleks tahlil qilinadi.'),

  q('m1t1-m30', 'Maktab rahbari boshqaruvni transformatsiya qilishda qaysi yo‘nalishni strategik yo‘nalish sifatida belgilashi mumkin?', [
    'Jamoatchilik ishtirokini kamaytirish',
    'Avtonomiyani hisobdorlikdan ajratish',
    'Samarali kadrlar zaxirasini yaratish',
    'Xalqaro tajribadan foydalanmaslik',
  ], 2, 'Samarali kadrlar zaxirasini yaratish boshqaruv transformatsiyasining taklif etilgan strategik yo‘nalishlaridan biridir.'),
]

/* 🔴 QIYIN — 30 TA */
const hard: Question[] = [
  q('m1t1-h01', 'Maktabda o‘quvchilarning o‘zlashtirish ko‘rsatkichi pasaygan. Direktor faqat fan o‘qituvchilarini nazorat qilish o‘rniga davomat, intizom, psixologik muhit, metodik ta’minot va o‘quv natijalarini birgalikda tahlil qildi. Qarorning metodologik asosi qaysi?', [
    'Nazorat va teskari aloqa',
    'Tizimlilik va kompleks yondashuv',
    'Demokratiklik va jamoaviy boshqaruv',
    'Rag‘batlantirish va motivatsiya',
  ], 1, 'Muammoni o‘zaro bog‘liq bir nechta omillar orqali tahlil qilish kompleks yondashuvdir.'),

  q('m1t1-h02', 'Direktor yangi boshqaruv qarorini qabul qilishdan oldin dars kuzatuvlari, o‘zlashtirish monitoringi va pedagoglar so‘rovi natijalarini oldi. Qaysi tamoyil eng bevosita namoyon bo‘lmoqda?', [
    'Ilmiylik',
    'Rejalilik',
    'Adolatlilik',
    'Hamkorlik',
  ], 0, 'Bir nechta dalil va tahlil manbalaridan foydalanish ilmiylik tamoyiliga mos.'),

  q('m1t1-h03', 'Quyidagi vaziyatlardan qaysi biri demokratik boshqaruv va rahbar mas’uliyatining bir vaqtda ta’minlanganini eng aniq ifodalaydi?', [
    'Direktor barcha qarorlarni mustaqil qabul qiladi',
    'Jamoa qarorni muhokama qiladi, direktor me’yoriy talablar asosida yakuniy qaror qabul qilib, ijro uchun javob beradi',
    'Qaror jamoa tomonidan qabul qilinadi va direktor faqat kuzatadi',
    'Qaror ota-onalar tomonidan qabul qilinadi',
  ], 1, 'Demokratik muhokama va rahbarning yakuniy mas’uliyati birgalikda ta’minlangan.'),

  q('m1t1-h04', 'Direktor “ta’lim sifatini oshirish”ni strategik maqsad sifatida belgiladi, ammo maqsadga erishilganini aniqlash uchun ko‘rsatkichlar belgilanmadi. Qaysi jihat yetishmayapti?', [
    'Maqsadni jamoaga topshirish',
    'Natijalarni o‘lchash indikatorlarini belgilash',
    'Tashqi hamkorlarni jalb qilish',
    'Moddiy rag‘batni kuchaytirish',
  ], 1, 'Maqsad natija indikatorlari orqali o‘lchanadigan bo‘lishi kerak.'),

  q('m1t1-h05', 'Maktab rahbari dars kuzatuvi yakunida 4 ta kamchilikni ko‘rsatdi, ammo ularni bartaraf etish bo‘yicha tavsiya yoki yordam bermadi. Boshqaruv siklining qaysi elementi to‘liq amalga oshmagan?', [
    'Nazorat',
    'Teskari aloqa',
    'Rejalashtirish',
    'Maqsad belgilash',
  ], 1, 'Nazoratdan keyingi tavsiya, yordam va rivojlantirish teskari aloqani tashkil etadi.'),

  q('m1t1-h06', 'Quyidagi juftliklardan qaysi biri mazmun jihatidan to‘g‘ri moslashtirilgan?', [
    'Attestatsiya — davlat tomonidan e’tirof; akkreditatsiya — sifatni aniqlash',
    'Attestatsiya — sifatning davlat standartlari va talablariga muvofiqligini aniqlash; akkreditatsiya — muvofiqlikning davlat tomonidan e’tirof etilishi',
    'Attestatsiya — TALIS; akkreditatsiya — ichki monitoring',
    'Attestatsiya — moliyaviy audit; akkreditatsiya — pedagogik kengash qarori',
  ], 1, 'Materialda attestatsiya va akkreditatsiyaning vazifalari aynan shu tarzda farqlangan.'),

  q('m1t1-h07', 'Quyidagi holatlardan qaysi biri nazoratni rivojlantirish vositasi sifatida qo‘llashga eng mos?', [
    'Kamchilik aniqlangach, xodimni darhol jazolash',
    'Darsni kuzatish, muammoni aniqlash, tavsiya berish va keyingi natijani qayta kuzatish',
    'Faqat hisobotni talab qilish',
    'Faqat hujjatlarni tekshirish',
  ], 1, 'Nazorat natijasini rivojlantirish, tavsiya va keyingi monitoring bilan bog‘lash kerak.'),

  q('m1t1-h08', 'Direktor o‘qituvchini rag‘batlantirdi, ammo aynan nima uchun rag‘batlantirilgani ochiq mezonlarda ko‘rsatilmagan. Qaysi tamoyil bilan bog‘liq muammo yuzaga kelishi mumkin?', [
    'Ilmiylik',
    'Adolatlilik va shaffoflik',
    'Tizimlilik',
    'Rejalilik',
  ], 1, 'Rag‘batlantirish mezonlarining noaniqligi shaffoflik va adolatlilik muammosini keltirib chiqarishi mumkin.'),

  q('m1t1-h09', 'Maktabda ta’lim sifati yuqori, ammo ota-onalar bilan aloqa sust va kasbga yo‘naltirish ishlari yetarli emas. Rahbar faqat ta’lim sifatiga e’tibor qaratmoqda. Qaysi tamoyil nuqtayi nazaridan bu yondashuv muammoli?', [
    'Tizimlilik va kompleks yondashuv',
    'Ilmiylik',
    'Rag‘batlantirish',
    'Rejalilik',
  ], 0, 'Maktab faoliyatining boshqa muhim yo‘nalishlarini e’tiborsiz qoldirish kompleks yondashuvga zid.'),

  q('m1t1-h10', 'Qaysi qaror ilmiylik va tizimlilik tamoyillarining birgalikdagi qo‘llanilishiga eng mos?', [
    'Direktor o‘z tajribasiga asoslanib tizim joriy qildi',
    'Direktor monitoring ma’lumotlarini tahlil qilib, ta’lim sifati pasayishiga ta’sir qilayotgan bir nechta omillar bo‘yicha kompleks chora ishlab chiqdi',
    'Direktor jamoa fikrini eshitmasdan qaror qabul qildi',
    'Direktor faqat bitta fan natijasiga asoslandi',
  ], 1, 'Dalillar asosida bir nechta bog‘liq omillarni tahlil qilish ikkala tamoyilni birlashtiradi.'),

  q('m1t1-h11', 'Ilmiy asoslangan boshqaruv qarorini ishlab chiqishning eng mantiqiy ketma-ketligini belgilang.', [
    'Muammoni aniqlash → dalillarni yig‘ish → tahlil → qaror → monitoring',
    'Dalillarni yig‘ish → muammo → qaror → monitoring → tahlil',
    'Muammo → tahlil → dalillar → monitoring → qaror',
    'Qaror → muammo → tahlil → dalillar → monitoring',
  ], 0, 'Muammo aniqlanadi, dalillar yig‘iladi, tahlil qilinadi, qaror qabul qilinadi va natija kuzatiladi.'),

  q('m1t1-h12', 'Akkreditatsiya jarayonidagi quyidagi bosqichlarning to‘g‘ri ketma-ketligini belgilang: 1-Kamchiliklarni bartaraf etish, 2-Tayyorgarlik, 3-Monitoring, 4-Attestatsiya va tahlil, 5-Qaror, 6-Ijroni nazorat qilish.', [
    '2 → 4 → 5 → 1 → 6 → 3',
    '4 → 2 → 5 → 1 → 3 → 6',
    '2 → 5 → 4 → 1 → 6 → 3',
    '1 → 2 → 4 → 5 → 6 → 3',
  ], 0, 'Materialdagi akkreditatsiya bosqichlari aynan shu ketma-ketlikda berilgan.'),

  q('m1t1-h13', 'Rahbar avval maqsadni belgiladi, keyin indikatorlarni aniqladi, resurslarni taqsimladi va monitoring mexanizmini belgiladi. Ushbu faoliyatning boshqaruv mantig‘i qaysi?', [
    'Maqsad → o‘lchov → resurs → nazorat',
    'Nazorat → maqsad → resurs → o‘lchov',
    'Resurs → nazorat → maqsad → o‘lchov',
    'O‘lchov → resurs → nazorat → maqsad',
  ], 0, 'Aniq maqsad, uni o‘lchash, resurslarni yo‘naltirish va nazorat qilish boshqaruvning mantiqiy ketma-ketligidir.'),

  q('m1t1-h14', '“Davomatni oshirish” maqsadini eng to‘liq amalga oshiruvchi yondashuv qaysi?', [
    '“Davomatni yaxshilash kerak.”',
    '“Davomatni oshirish uchun o‘qituvchilarga topshiriq beriladi.”',
    '“Mavjud ko‘rsatkich tahlil qilinadi, indikator belgilanadi, choralar rejalashtiriladi va natija monitoring qilinadi.”',
    '“Davomat bo‘yicha yig‘ilish o‘tkaziladi.”',
  ], 2, 'Maqsad, indikator, reja va monitoring birgalikda natijaga yo‘naltirilgan boshqaruvni ta’minlaydi.'),

  q('m1t1-h15', 'Direktor motivatsiya uchun faqat moddiy rag‘batdan foydalanmoqda. Materialga ko‘ra qaysi yondashuv to‘liqroq?', [
    'Faqat moddiy rag‘bat yetarli',
    'Ma’naviy rag‘bat, kasbiy o‘sish va belgilangan tartibdagi moddiy rag‘batni uyg‘unlashtirish',
    'Faqat intizomiy choralarni kuchaytirish',
    'Faqat jamoa oldida tanqid qilish',
  ], 1, 'Material motivatsiyaning ma’naviy, kasbiy va moddiy shakllarini uyg‘un qo‘llashni ko‘rsatadi.'),

  q('m1t1-h16', 'Maktab rahbari ota-onalar, mahalla va OTM bilan hamkorlikni yo‘lga qo‘ydi. Natijada kasbga yo‘naltirish imkoniyatlari kengaydi. Qaysi natija bevosita namoyon bo‘lgan?', [
    'Maktab ichki intizomining kuchayishi',
    'Resurs va imkoniyatlarning kengayishi',
    'Attestatsiya muddatining qisqarishi',
    'TALIS natijasining avtomatik oshishi',
  ], 1, 'Hamkorlik resurs va imkoniyatlarni kengaytirishi materialda bevosita ko‘rsatilgan.'),

  q('m1t1-h17', 'Quyidagi holatlardan qaysi biri adolatlilik va shaffoflik tamoyiliga eng katta xavf tug‘diradi?', [
    'Barcha pedagoglarga bir xil mezon e’lon qilinishi',
    'Rag‘batlantirish mezonlarining oldindan ma’lum qilinishi',
    'Bir xil natijaga ega xodimlarga turli mezon asosida baho berilishi',
    'Qarorlarning asoslarini jamoaga tushuntirish',
  ], 2, 'Bir xil natijaga turlicha mezon qo‘llash adolatlilikka zid.'),

  q('m1t1-h18', 'Direktor pedagogik kengash fikrini oldi, ammo jamoa fikri me’yoriy talablarga zid bo‘lgani sababli boshqa qaror qabul qildi. Bu holat qanday tushuntiriladi?', [
    'Demokratiklik mavjud emas',
    'Demokratik muhokama rahbarning yakuniy mas’uliyatini bekor qilmaydi',
    'Jamoa fikri har qanday holatda majburiydir',
    'Direktor qaror qabul qilish huquqidan voz kechishi kerak',
  ], 1, 'Jamoa fikri inobatga olinadi, ammo yakuniy qaror rahbarning qonuniy mas’uliyati doirasida qabul qilinadi.'),

  q('m1t1-h19', 'Ta’lim tashkilotining oxirgi ikki yillik faoliyatini kompleks tahlil qilish qaysi jarayon bilan bevosita bog‘liq?', [
    'TALIS',
    'Attestatsiya',
    'Motivatsiya',
    'Ichki metodik seminar',
  ], 1, 'Materialda attestatsiyada oxirgi ikki yillik faoliyat kompleks tahlil qilinishi ko‘rsatilgan.'),

  q('m1t1-h20', 'Quyidagilardan qaysi biri umumiy o‘rta ta’lim tashkilotlarini attestatsiyadan o‘tkazishda o‘rganiladigan baholash sohalariga kirmaydi?', [
    'Tashkiliy-boshqaruv faoliyatining samaradorligi',
    'Ta’lim sifati ko‘rsatkichlari',
    'Xavfsizlik',
    'Xodimlarning shaxsiy moliyaviy daromadlari',
  ], 3, 'Xodimlarning shaxsiy moliyaviy daromadlari materialda attestatsiyaning baholash sohasi sifatida keltirilmagan.'),

  q('m1t1-h21', 'Attestatsiyaning asosiy prinsiplaridan qaysi qatorda faqat materialda ko‘rsatilgan prinsiplar berilgan?', [
    'Mustaqillik, xolislik, oshkoralik, shaffoflik',
    'Tezkorlik, raqobat, maxfiylik, jazolash',
    'Ierarxiya, majburiylik, raqobat, markazlashuv',
    'Innovatsiya, tejamkorlik, raqobat, maxfiylik',
  ], 0, 'Mustaqillik, xolislik, oshkoralik va shaffoflik attestatsiyaning asosiy prinsiplaridir.'),

  q('m1t1-h22', 'Qaysi fikr akkreditatsiya mazmunini eng to‘liq ifodalaydi?', [
    'Ta’lim tashkilotining faoliyatini faqat ichki baholash',
    'Ta’lim tashkiloti faoliyatining davlat ta’lim standartlari va talablariga muvofiqligining davlat tomonidan e’tirof etilishi',
    'O‘qituvchilarni kasbiy rivojlantirish dasturi',
    'Maktabning yillik ish rejasini tasdiqlash',
  ], 1, 'Akkreditatsiya davlat tomonidan muvofiqlikni e’tirof etish mazmunini anglatadi.'),

  q('m1t1-h23', 'Direktor TALISni o‘quvchilar bilimini bevosita baholaydigan xalqaro imtihon deb hisoblaydi. Qaysi javob uning xatosini eng aniq ko‘rsatadi?', [
    'TALIS faqat o‘qituvchilarni qamrab oladi',
    'TALIS faqat direktorlarni qamrab oladi',
    'TALIS anonim so‘rovnoma bo‘lib, imtihon emas',
    'TALIS faqat akkreditatsiya uchun o‘tkaziladi',
  ], 2, 'Material TALISni o‘qituvchilar va maktab rahbarlarining anonim so‘rovnomasi sifatida belgilaydi.'),

  q('m1t1-h24', 'TALIS ma’lumotlaridan foydalanishning boshqaruv nuqtayi nazaridan eng bevosita ahamiyati qaysi?', [
    'Barcha maktablarga bir xil qaror berish',
    'Boshqaruv qarorlari uchun ilmiy asos yaratish',
    'O‘quvchilarni avtomatik baholash',
    'Maktab akkreditatsiyasini avtomatik amalga oshirish',
  ], 1, 'TALIS ma’lumotlari boshqaruv qarorlarini ilmiy asoslashga xizmat qilishi mumkin.'),

  q('m1t1-h25', 'TALISning maqsadiga eng to‘liq mos keladigan javobni belgilang.', [
    'Faqat maktab direktorlarini reytinglash',
    'Samarali o‘quv jarayonini ta’minlovchi mexanizmlarni aniqlash va o‘qituvchi hamda rahbarlar haqidagi ma’lumotlarni qiyosiy tahlil qilish',
    'O‘quvchilarni yakuniy attestatsiyadan o‘tkazish',
    'Maktablarning moliyaviy faoliyatini tekshirish',
  ], 1, 'TALIS samarali o‘quv jarayoni mexanizmlarini o‘rganish va xalqaro qiyoslashga xizmat qiladi.'),

  q('m1t1-h26', 'Tushunchalarni moslashtiring: 1-Ilmiylik, 2-Demokratiklik, 3-Nazorat va teskari aloqa, 4-Hamkorlik.', [
    '1-b, 2-d, 3-c, 4-a',
    '1-d, 2-b, 3-a, 4-c',
    '1-c, 2-a, 3-d, 4-b',
    '1-a, 2-c, 3-b, 4-d',
  ], 0, 'Ilmiylik—dalil; demokratiklik—jamoa; teskari aloqa—tavsiya; hamkorlik—tashqi sheriklar.'),

  q('m1t1-h27', 'Quyidagi uch tushunchaning to‘g‘ri mosligini aniqlang: 1-Attestatsiya, 2-Akkreditatsiya, 3-TALIS.', [
    '1-muvofiqlikni aniqlash; 2-davlat tomonidan e’tirof; 3-xalqaro so‘rovnoma',
    '1-davlat tomonidan e’tirof; 2-muvofiqlikni aniqlash; 3-imtihon',
    '1-so‘rovnoma; 2-ichki monitoring; 3-attestatsiya',
    '1-imtihon; 2-so‘rovnoma; 3-akkreditatsiya',
  ], 0, 'Uch tushuncha materialda aynan shu funksional farqlar bilan berilgan.'),

  q('m1t1-h28', 'Maktabda o‘zlashtirish pasaydi. Quyidagi ketma-ketliklardan qaysi biri ilmiy boshqaruvga eng mos?', [
    'Dars kuzatuvi → natijalar tahlili → suhbat → sabablarni aniqlash → chora-tadbir',
    'Chora-tadbir → dars kuzatuvi → sabab → natija → suhbat',
    'Tanbeh → chora → monitoring → sabab → tahlil',
    'Rag‘bat → qaror → monitoring → sabab → tahlil',
  ], 0, 'Dalillarni yig‘ish va sababni aniqlashdan keyin chora ishlab chiqiladi.'),

  q('m1t1-h29', 'Qaysi variant maqsadlilik, ilmiylik, demokratiklik, rejalilik va nazorat tamoyillarini birgalikda eng to‘liq aks ettiradi?', [
    'Faqat direktorning yakka qarori',
    'Maqsad va indikatorlarni belgilash, ma’lumotlarni tahlil qilish, jamoa fikrini olish, reja tuzish va monitoring qilish',
    'Faqat xodimlarni tekshirish',
    'Faqat moddiy rag‘bat berish',
  ], 1, 'Variantda bir nechta asosiy boshqaruv tamoyillari yagona jarayonda uyg‘unlashgan.'),

  q('m1t1-h30', 'Maktab rahbari ta’lim sifatini oshirish tizimini joriy etdi. O‘zlashtirish, davomat va intizom yaxshilandi. Ammo direktor natijani faqat o‘z tajribasi bilan izohladi va boshqa omillarni tahlil qilmadi. Qaysi jihat yetarli emas?', [
    'Ilmiylik — natijani dalillar asosida kompleks tahlil qilish',
    'Hamkorlik — ota-onalar bilan aloqani to‘xtatish',
    'Rag‘batlantirish — barcha xodimlarga mukofot berish',
    'Rejalilik — yangi reja tuzishni bekor qilish',
  ], 0, 'Natijani faqat shaxsiy tajriba bilan izohlash ilmiy va dalillarga asoslangan tahlilni yetarli ta’minlamaydi.'),
]

/* 🔵 KEYS — 10 TA */
const caseStudies: Question[] = [
  q('m1t1-c01', 'Maktabda 7-sinf o‘quvchilarining matematika fanidan o‘zlashtirish ko‘rsatkichi ikki chorak davomida pasaydi. Ayrim o‘qituvchilar bunga o‘quvchilarning qiziqishi pastligini sabab qilib ko‘rsatmoqda. Direktor muammoni aniqlash uchun dars kuzatuvlari, o‘zlashtirish ko‘rsatkichlari, davomat ma’lumotlari va o‘quvchilar bilan suhbat natijalarini o‘rganmoqchi. Direktorning eng maqbul birinchi harakati qaysi?', [
    'Darhol matematika o‘qituvchilariga intizomiy chora ko‘rish',
    'Muammoni dalillar va monitoring natijalari asosida kompleks tahlil qilish',
    'Barcha o‘qituvchilarga qo‘shimcha topshiriq berish',
    'Ota-onalarni yig‘ib, o‘quvchilarni tanqid qilish',
  ], 1, 'Muammoni avval dalillar asosida kompleks tahlil qilish ilmiylik va tizimlilik tamoyillariga mos.'),

  q('m1t1-c02', 'Maktabda yangi ichki nazorat tizimi joriy etilmoqda. Direktor pedagogik kengashda o‘qituvchilar, metodik birlashma rahbarlari va sinf rahbarlarining fikrlarini eshitdi. Ayrim takliflar amaldagi talablarga mos emasligi aniqlandi. Direktor nima qilishi kerak?', [
    'Jamoaning barcha takliflarini o‘zgartirmasdan qabul qilish',
    'Jamoa fikrlarini inobatga olib, amaldagi talablar asosida yakuniy qaror qabul qilish',
    'Jamoa fikrini umuman hisobga olmaslik',
    'Qarorni faqat metodik birlashma rahbarlariga topshirish',
  ], 1, 'Demokratik muhokama rahbarning qonuniy va yakuniy mas’uliyatini bekor qilmaydi.'),

  q('m1t1-c03', 'Direktor bir o‘qituvchining darsini kuzatdi. Darsda ayrim metodik kamchiliklar aniqlandi. Direktor faqat “dars sifati talab darajasida emas” deb xulosa yozdi va boshqa tavsiya bermadi. Qaysi harakat yetishmayapti?', [
    'O‘qituvchini boshqa lavozimga o‘tkazish',
    'Kamchiliklarni bartaraf etish bo‘yicha teskari aloqa, tavsiya va yordam berish',
    'Dars kuzatuvlarini butunlay to‘xtatish',
    'O‘qituvchini jamoa oldida tanqid qilish',
  ], 1, 'Nazorat rivojlantirishga xizmat qilishi uchun teskari aloqa va metodik yordam berilishi kerak.'),

  q('m1t1-c04', 'Maktabda ikki nafar o‘qituvchi bir xil natijaga erishdi. Birinchi o‘qituvchi rahbariyatga yaqin bo‘lgani sababli rag‘batlantirildi, ikkinchisiga rag‘bat berilmadi. Oldindan belgilangan aniq mezonlar ham mavjud emas. Rahbar qanday chora ko‘rishi kerak?', [
    'Faqat birinchi o‘qituvchini rag‘batlantirishni davom ettirish',
    'Rag‘batlantirish mezonlarini aniq va shaffof belgilash',
    'Umuman rag‘batlantirishni bekor qilish',
    'Barcha xodimlarga bir xil miqdorda mukofot berish',
  ], 1, 'Aniq va shaffof mezonlar adolatlilikni ta’minlash uchun zarur.'),

  q('m1t1-c05', 'Direktor yangi o‘quv yilida “ta’lim sifatini oshirish”ni asosiy maqsad qilib belgiladi. Ammo maqsadga erishilganini qanday aniqlash bo‘yicha mezonlar belgilanmagan. Keyingi eng zarur boshqaruv harakati qaysi?', [
    'Faqat yig‘ilishlar sonini ko‘paytirish',
    'Maqsadni o‘lchash uchun aniq indikatorlarni belgilash',
    'Barcha o‘qituvchilarga qo‘shimcha vazifa berish',
    'Maktabning tashqi ko‘rinishini yaxshilash',
  ], 1, 'Maqsadga erishilganini baholash uchun aniq va o‘lchanadigan indikatorlar kerak.'),

  q('m1t1-c06', 'Maktabda attestatsiya jarayoniga tayyorgarlik boshlandi. Direktor faqat hujjatlarni tartibga keltirmoqchi. Biroq attestatsiyada tashkilot faoliyatining oxirgi ikki yillik holati kompleks tahlil qilinadi. Eng to‘g‘ri yondashuv qaysi?', [
    'Faqat hujjatlarni tartibga keltirish',
    'Faqat o‘qituvchilar faoliyatini tekshirish',
    'Baholash sohalari bo‘yicha maktab faoliyatini kompleks tahlil qilish va tayyorgarlik ko‘rish',
    'Faqat maktab binosini ta’mirlash',
  ], 2, 'Attestatsiyada oxirgi ikki yillik faoliyat kompleks tahlil qilinishi sababli tayyorgarlik ham kompleks bo‘lishi kerak.'),

  q('m1t1-c07', 'Direktor yig‘ilishda: “TALISdan yuqori natija olish uchun o‘qituvchilarni imtihonga tayyorlashimiz kerak”, dedi. Material asosida bu fikr qanday to‘g‘rilanadi?', [
    'TALIS o‘quvchilar uchun imtihon ekanini tushuntirish kerak',
    'TALIS o‘qituvchilar va maktab rahbarlarining anonim so‘rovnomasi ekanini tushuntirish kerak',
    'TALIS faqat direktorlar uchun imtihon ekanini tushuntirish kerak',
    'TALIS akkreditatsiya jarayonining bir bosqichi ekanini tushuntirish kerak',
  ], 1, 'Materialda TALIS imtihon emas, o‘qituvchi va maktab rahbarlarining anonim so‘rovnomasi sifatida berilgan.'),

  q('m1t1-c08', 'Maktabda davomat pasaygan. Direktor faqat sinf rahbarlariga tanbeh berdi. Keyingi oyda ham davomat yaxshilanmadi. Tahlil natijasida oilaviy sharoit, transport, o‘quvchilarning qiziqishi va ayrim darslarning tashkil etilishi bilan bog‘liq omillar aniqlandi. Direktor keyingi bosqichda nima qilishi kerak?', [
    'Faqat sinf rahbarlariga yana tanbeh berish',
    'Muammoni bir nechta o‘zaro bog‘liq omillar asosida kompleks hal qilish',
    'Barcha o‘quvchilarni jazolash',
    'Davomat monitoringini bekor qilish',
  ], 1, 'Muammo bir nechta omilga bog‘liq bo‘lsa, kompleks yondashuv asosida choralar ko‘riladi.'),

  q('m1t1-c09', 'Maktabda o‘quvchilarni kasbga yo‘naltirish ishlari sust. Maktab rahbari yaqin hududdagi OTMlar, tashkilotlar va mahalla bilan hamkorlik qilish imkoniyatlari mavjudligini aniqladi. Eng maqbul qaror qaysi?', [
    'Kasbga yo‘naltirishni faqat maktab ichida tashkil etish',
    'Ota-onalar, mahalla, OTM va hamkor tashkilotlar bilan tizimli hamkorlikni yo‘lga qo‘yish',
    'Faqat sinf rahbarlariga qo‘shimcha topshiriq berish',
    'Kasbga yo‘naltirish ishlarini keyingi yilga qoldirish',
  ], 1, 'Hamkorlik va ijtimoiy sheriklik maktabning imkoniyat va resurslarini kengaytiradi.'),

  q('m1t1-c10', 'Maktabda ta’lim sifati, davomat va intizom ko‘rsatkichlari bir vaqtda pasaymoqda. Direktor uch variantni ko‘rib chiqdi: 1) barcha o‘qituvchilarga tanbeh berish; 2) faqat davomatni nazorat qilishni kuchaytirish; 3) ma’lumotlarni tahlil qilish, sabablarni aniqlash, jamoa bilan muhokama qilish, maqsad va indikatorlarni belgilash, chora-tadbirlar rejasini tuzish hamda natijani monitoring qilish. Qaysi variant materialdagi boshqaruv tamoyillariga eng to‘liq mos?', [
    '1-variant',
    '2-variant',
    '3-variant',
    '1 va 2-variant',
  ], 2, '3-variant ilmiylik, tizimlilik, demokratiklik, maqsadlilik, rejalilik hamda nazorat va teskari aloqani birlashtiradi.'),
]

export const M1T1_LEVELS = {
  easy,
  medium,
  hard,
  case: caseStudies,
}
