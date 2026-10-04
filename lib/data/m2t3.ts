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

export const M2T3_LEVELS: LevelSet = {
  /* =========================================================
     30 TA OSON
  ========================================================= */
  easy: [
    q(
      'm2t3-e01',
      'Kasbga yo‘naltirishning asosiy maqsadi qaysi?',
      [
        'Kasblar nomlarini yodlatish',
        'Qiziqish va qobiliyatni kasbiy tanlov bilan bog‘lash',
        'Barcha o‘quvchilarni bir kasbga yo‘naltirish',
        'Kasb tanlashni bitiruvgacha kechiktirish',
      ],
      1,
      'Kasbga yo‘naltirish o‘quvchining individual imkoniyatlarini kelajakdagi kasbiy tanlov bilan uyg‘unlashtiradi.',
    ),

    q(
      'm2t3-e02',
      'Maktab psixologining kasbga yo‘naltirishdagi muhim vazifasi qaysi?',
      [
        'Qiziqish, qobiliyat va individual xususiyatlarni aniqlash',
        'Barcha o‘quvchilarga bir xil kasb tavsiya qilish',
        'Dars jadvalini tuzish',
        'Kasblar bo‘yicha reklama tayyorlash',
      ],
      0,
      'Psixolog o‘quvchining individual xususiyatlarini aniqlash orqali kasbiy yo‘nalishni asoslashga yordam beradi.',
    ),

    q(
      'm2t3-e03',
      'Maktab va texnikum hamkorligining asosiy foydasi nimada?',
      [
        'Maktab fanlarini kamaytirishda',
        'Baholashni bekor qilishda',
        'Kasbiy yo‘nalishlar va amaliy imkoniyatlar bilan tanishtirishda',
        'O‘quvchilarni majburan texnikumga yuborishda',
      ],
      2,
      'Texnikum bilan hamkorlik o‘quvchiga kasbiy ta’lim yo‘nalishlari va amaliy imkoniyatlarni tushunishga yordam beradi.',
    ),

    q(
      'm2t3-e04',
      'Ishlab chiqarish korxonasi bilan hamkorlikning eng bevosita natijasi qaysi?',
      [
        'Dars jadvalining qisqarishi',
        'Baholarning avtomatik oshishi',
        'Maktab hujjatlarining kamayishi',
        'Real mehnat muhiti bilan tanishish',
      ],
      3,
      'Korxonaga tashrif o‘quvchiga real mehnat muhiti va kasbiy faoliyatni kuzatish imkonini beradi.',
    ),

    q(
      'm2t3-e05',
      '1–4-sinflarda kasbga yo‘naltirishning asosiy mazmuni qaysi?',
      [
        'Kasbiy imtihonga tayyorlash',
        'Turli kasblar haqida dastlabki tasavvur berish',
        'Mehnat bozorini chuqur tahlil qilish',
        'Yakuniy kasb tanlash',
      ],
      1,
      'Boshlang‘ich bosqichda asosiy vazifa turli kasblar haqida ijobiy va dastlabki tasavvur shakllantirishdir.',
    ),

    q(
      'm2t3-e06',
      '7–9-sinflarda kasbga yo‘naltirishda nimaga ko‘proq e’tibor beriladi?',
      [
        'Qiziqish, qobiliyat va iqtidorni aniqlashga',
        'Kasb nomlarini yodlashga',
        'Bitta kasbni tanlatishga',
        'Kasbiy faoliyatni cheklashga',
      ],
      0,
      'Bu bosqichda individual xususiyatlarni aniqlash va keyingi yo‘nalishni asoslash muhimlashadi.',
    ),

    q(
      'm2t3-e07',
      'Kasbga yo‘naltirishni o‘quv jarayoniga integratsiya qilish nimani anglatadi?',
      [
        'Kasbiy ma’lumotlarni alohida fan qilish',
        'Fanlarni qisqartirish',
        'Fan mazmunini kasbiy kontekst bilan bog‘lash',
        'Kasb tanlashni ota-onaga topshirish',
      ],
      2,
      'Integratsiya mavjud fan mazmunini real kasbiy faoliyat bilan bog‘lashni anglatadi.',
    ),

    q(
      'm2t3-e08',
      'Mahalla va jamoat yetakchilarining kasbga yo‘naltirishdagi hissasi nimada?',
      [
        'Ijtimoiy qo‘llab-quvvatlash va motivatsiyada',
        'Maktab baholarini belgilashda',
        'Kasbiy imtihon olishda',
        'Darsliklarni tasdiqlashda',
      ],
      0,
      'Mahalla o‘quvchining ijtimoiy muhitini qo‘llab-quvvatlash va motivatsiyasini kuchaytirishi mumkin.',
    ),

    q(
      'm2t3-e09',
      'Nazariy bilim va amaliy faoliyat uyg‘unligi nimaga xizmat qiladi?',
      [
        'O‘quv dasturini qisqartirishga',
        'Kasbiy qarorni ongliroq shakllantirishga',
        'Nazariy fanlarni kamaytirishga',
        'Baholashni soddalashtirishga',
      ],
      1,
      'Nazariya va amaliyotning bog‘lanishi o‘quvchiga kasbning real mazmunini tushunishga yordam beradi.',
    ),

    q(
      'm2t3-e10',
      'Zamonaviy kasbiy kompetensiyaga qaysi ko‘nikma kiradi?',
      [
        'Faqat ma’lumot yodlash',
        'Faqat yozma topshiriq bajarish',
        'Faqat kasb nomlarini bilish',
        'Muammoni hal qilish va muloqot qila olish',
      ],
      3,
      'Zamonaviy kasbiy faoliyat muammoni hal qilish, muloqot va hamkorlik kabi kompetensiyalarni talab qiladi.',
    ),

    q(
      'm2t3-e11',
      '“Kasblar alifbosi” bosqichi qaysi yosh guruhiga mos?',
      [
        '5–6-sinflarga',
        '10–11-sinflarga',
        '1–4-sinflarga',
        'Faqat maktabgacha yoshga',
      ],
      2,
      'Boshlang‘ich bosqichda o‘quvchilarga kasblar olami haqida dastlabki tasavvurlar beriladi.',
    ),

    q(
      'm2t3-e12',
      '“Kasblar olami” yo‘nalishi asosan qaysi sinflarga mos?',
      [
        '5–6-sinflarga',
        '1–4-sinflarga',
        '7–9-sinflarga',
        'Faqat maktabgacha ta’limga',
      ],
      0,
      '5–6-sinflarda turli mehnat faoliyatlariga qiziqish uyg‘otish va kasblar olamini kengroq o‘rganish muhim.',
    ),

    q(
      'm2t3-e13',
      '“Mening kelajakdagi kasbim” yo‘nalishi qaysi bosqichga mos?',
      [
        '1–4-sinflarga',
        '7–9-sinflarga',
        '5–6-sinflarga',
        'Maktabgacha ta’limga',
      ],
      1,
      '7–9-sinflarda o‘quvchining qiziqishi va qobiliyatiga mos keyingi yo‘nalish haqida tavsiya berish kuchayadi.',
    ),

    q(
      'm2t3-e14',
      'Kasbning muhim belgilaridan biri qaysi?',
      [
        'Maxsus bilim va tayyorgarlik talab qilishi',
        'Faqat vaqtinchalik mashg‘ulot bo‘lishi',
        'Ijtimoiy ehtiyojdan mustaqil bo‘lishi',
        'Muayyan natijaga ega bo‘lmasligi',
      ],
      0,
      'Kasb maxsus bilim, ko‘nikma va tayyorgarlikni talab qiluvchi mehnat faoliyatidir.',
    ),

    q(
      'm2t3-e15',
      'Kasbning qonuniylik tamoyili nimani bildiradi?',
      [
        'Faoliyat faqat shaxsiy xohishga bog‘liq bo‘lishini',
        'Faoliyat huquqiy me’yorlarga muvofiq bo‘lishini',
        'Kasb faqat davlat tashkilotida bajarilishini',
        'Barcha kasblar bir xil daromad berishini',
      ],
      1,
      'Kasbiy faoliyat amaldagi huquqiy talablar va me’yorlarga muvofiq amalga oshirilishi kerak.',
    ),

    q(
      'm2t3-e16',
      'Kasbning foydalilik tamoyili nimani ifodalaydi?',
      [
        'Faoliyat ijtimoiy yoki moddiy natija keltirishini',
        'Kasb faqat yuqori daromad berishini',
        'Barcha kasblar bir xil bo‘lishini',
        'Faoliyat tayyorgarliksiz bajarilishini',
      ],
      0,
      'Foydalilik kasbiy faoliyatning shaxs yoki jamiyat uchun natija yaratishi bilan bog‘liq.',
    ),

    q(
      'm2t3-e17',
      'Kasbga yo‘naltirishni oddiy axborot berishdan kengroq tushunish nimani anglatadi?',
      [
        'Faqat kasblar ro‘yxatini berishni',
        'Statistik ma’lumotlarni ko‘paytirishni',
        'Qiziqish va qobiliyatni ongli kasbiy qarorga aylantirishni',
        'Tadbirlar sonini oshirishni',
      ],
      2,
      'Kasbga yo‘naltirishning maqsadi axborot berishdan tashqari ongli va asoslangan tanlovga tayyorlashdir.',
    ),

    q(
      'm2t3-e18',
      'Psixologik xizmat kasbga yo‘naltirishda nimani aniqlashga yordam beradi?',
      [
        'Maktabning moliyaviy imkoniyatlarini',
        'O‘quvchining qiziqishi, qobiliyati va shaxsiy xususiyatlarini',
        'Korxonaning ishlab chiqarish hajmini',
        'Texnikum kontrakt miqdorini',
      ],
      1,
      'Psixologik diagnostika o‘quvchining individual xususiyatlarini kasbiy yo‘nalish bilan bog‘lashga xizmat qiladi.',
    ),

    q(
      'm2t3-e19',
      'Ishlab chiqarish ekskursiyasining asosiy pedagogik natijasi qaysi?',
      [
        'Kasbiy muhitni bevosita kuzatish',
        'O‘quv fanlarini kamaytirish',
        'Baholash tizimini almashtirish',
        'Maktab jadvalini o‘zgartirish',
      ],
      0,
      'Ekskursiya o‘quvchiga kasbiy muhitni bevosita ko‘rish imkonini beradi.',
    ),

    q(
      'm2t3-e20',
      'Stajirovka o‘quvchiga eng avvalo nima beradi?',
      [
        'Nazariy ma’lumotni yodlash imkonini',
        'Real ish jarayonida tajriba orttirish imkonini',
        'Maktab bahosini o‘zgartirish imkonini',
        'Kasbni avtomatik tanlash imkonini',
      ],
      1,
      'Stajirovka real faoliyat muhiti bilan tanishish va amaliy tajriba hosil qilishga xizmat qiladi.',
    ),

    q(
      'm2t3-e21',
      'Kelajak markazlari bilan hamkorlikning muhim yo‘nalishi qaysi?',
      [
        'Akademik baholarni qayta hisoblash',
        'Qiziqishga mos to‘garaklar va metodik qo‘llab-quvvatlash',
        'O‘quvchilarni majburiy ishga joylashtirish',
        'Maktab fanlarini bekor qilish',
      ],
      1,
      'Bunday hamkorlik o‘quvchilarning qiziqishiga mos faoliyatlarni rivojlantirishga yordam beradi.',
    ),

    q(
      'm2t3-e22',
      'Maktab maslahatchisining kasbga yo‘naltirishdagi asosiy roli qaysi?',
      [
        'O‘quvchi tashabbuslarini qo‘llab-quvvatlash va yo‘naltirish',
        'Barcha psixologik testlarni tasdiqlash',
        'Korxona o‘rniga amaliy mashg‘ulot o‘tkazish',
        'Ota-ona o‘rniga kasb tanlash',
      ],
      0,
      'Maslahatchi o‘quvchi tashabbuslarini qo‘llab-quvvatlab, uning rivojlanish yo‘nalishini topishga yordam beradi.',
    ),

    q(
      'm2t3-e23',
      'Kasbga yo‘naltirishda ota-onalar bilan hamkorlik nima uchun muhim?',
      [
        'Ota-ona bolaning o‘rniga kasb tanlashi uchun',
        'O‘quvchining imkoniyatlari haqida ma’lumotni boyitish uchun',
        'Barcha qarorlarni ota-onaga topshirish uchun',
        'Diagnostikani bekor qilish uchun',
      ],
      1,
      'Ota-onalar o‘quvchining qiziqishi va imkoniyatlarini boshqa nuqtai nazardan baholashga yordam beradi.',
    ),

    q(
      'm2t3-e24',
      'Kasbga yo‘naltirishning qaysi modeli tizimli yondashuvga mos?',
      [
        'Tadbir → surat → hisobot',
        'Axborot → targ‘ibot → yakun',
        'Tashxis → tavsiya → amaliy tajriba → kuzatuv',
        'Uchrashuv → reklama → sertifikat',
      ],
      2,
      'Tizimli model diagnostika, tavsiya, amaliy tajriba va keyingi monitoringni birlashtiradi.',
    ),

    q(
      'm2t3-e25',
      'Mehnat bozori talablarini hisobga olishdan asosiy maqsad nima?',
      [
        'O‘quvchini istalgan kasbga yo‘naltirish',
        'Shaxsiy imkoniyatlarni real ehtiyojlar bilan uyg‘unlashtirish',
        'Maktab fanlari sonini kamaytirish',
        'Barcha o‘quvchiga bir xil kasb tavsiya qilish',
      ],
      1,
      'Kasbiy tanlov shaxsiy imkoniyatlar va mehnat bozoridagi real ehtiyojlar uyg‘unligiga tayanadi.',
    ),

    q(
      'm2t3-e26',
      'Quyidagilardan qaysi biri kasbiy motivatsiyani kuchaytiradi?',
      [
        'Real kasbiy muhit bilan tanishish',
        'Kasblarni faqat yodlash',
        'O‘quvchini tanlovdan chetlashtirish',
        'Barcha o‘quvchiga bir xil topshiriq berish',
      ],
      0,
      'Real faoliyatni ko‘rish o‘quvchining qiziqishini kasb mazmuni bilan bog‘laydi.',
    ),

    q(
      'm2t3-e27',
      'Kasbga yo‘naltirishda “ongli tanlov” nimani anglatadi?',
      [
        'Do‘st tanlagan kasbni tanlash',
        'Ota-ona aytgan kasbni qabul qilish',
        'Qiziqish, qobiliyat va imkoniyatlarni hisobga olib qaror qilish',
        'Eng mashhur kasbni tanlash',
      ],
      2,
      'Ongli tanlov shaxsiy xususiyatlar va mavjud imkoniyatlarni tahlil qilishga asoslanadi.',
    ),

    q(
      'm2t3-e28',
      'Kasbiy integratsiyaning muhim belgisi qaysi?',
      [
        'Ta’limni real kasbiy muhit bilan bog‘lash',
        'Barcha kasbiy fanlarni alohida o‘qitish',
        'Tadbirlarni faqat bayramlarda o‘tkazish',
        'O‘quvchini amaliy faoliyatdan cheklash',
      ],
      0,
      'Kasbiy integratsiya ta’lim mazmuni va real kasbiy faoliyat o‘rtasidagi aloqani kuchaytiradi.',
    ),

    q(
      'm2t3-e29',
      'Kasbga yo‘naltirishda differensial yondashuv nima uchun zarur?',
      [
        'Barcha o‘quvchilarni tenglashtirish uchun',
        'Individual qiziqish va qobiliyatlar turlicha bo‘lgani uchun',
        'Kasbiy tanlovni tezlashtirish uchun',
        'Tadbirlar sonini kamaytirish uchun',
      ],
      1,
      'O‘quvchilarning qiziqishi, qobiliyati va rivojlanish sur’ati turlicha bo‘lgani uchun yondashuv ham moslashtiriladi.',
    ),

    q(
      'm2t3-e30',
      'Kasbga yo‘naltirish samaradorligining kuchli belgisi qaysi?',
      [
        'Tadbirlar sonining ko‘pligi',
        'Videoroliklar sonining ko‘pligi',
        'O‘quvchining asoslangan keyingi yo‘nalishi shakllanishi',
        'Hisobotlarning hajmi',
      ],
      2,
      'Samaradorlik faoliyat hajmi bilan emas, o‘quvchining rivojlanish natijasi bilan baholanadi.',
    ),
  ],

  /* =========================================================
     30 TA O‘RTA
  ========================================================= */
  medium: [
    q(
      'm2t3-m01',
      'Hamkorlik yo‘nalishlarini moslashtiring: A) texnikum; B) mahalla; C) ishlab chiqarish. 1) Ijtimoiy qo‘llab-quvvatlash; 2) Amaliy tajriba; 3) Kasbiy yo‘nalishlar bilan tanishtirish.',
      [
        'A–3, B–1, C–2',
        'A–1, B–2, C–3',
        'A–2, B–3, C–1',
        'A–3, B–2, C–1',
      ],
      0,
      'Texnikum yo‘nalishlarni tanishtiradi, mahalla ijtimoiy qo‘llab-quvvatlaydi, ishlab chiqarish amaliy tajriba beradi.',
    ),

    q(
      'm2t3-m02',
      'Bosqichlarni moslashtiring: A) 1–4; B) 5–6; C) 7–9. 1) Qiziqish va qobiliyatni aniqlash; 2) Kasblarning jamiyatdagi o‘rnini tushuntirish; 3) Mehnat faoliyatiga qiziqish uyg‘otish.',
      [
        'A–1, B–3, C–2',
        'A–2, B–3, C–1',
        'A–3, B–2, C–1',
        'A–2, B–1, C–3',
      ],
      1,
      '1–4-sinfda kasblarning o‘rni, 5–6-sinfda qiziqish, 7–9-sinfda individual xususiyatlar chuqurroq o‘rganiladi.',
    ),

    q(
      'm2t3-m03',
      'Psixologik diagnostika natijasidan foydalanishning eng maqbul ketma-ketligi qaysi?',
      [
        'Test → reyting → majburiy kasb tanlovi',
        'Tashxis → individual tavsiya → amaliy yo‘nalish → kuzatuv',
        'Tashxis → umumiy tadbir → hisobot → yakun',
        'Test → ota-ona qarori → o‘quvchi roziligi',
      ],
      1,
      'Diagnostika yakuniy hukm emas, individual tavsiya va keyingi faoliyat uchun asosdir.',
    ),

    q(
      'm2t3-m04',
      'Maktabda kasbiy uchrashuvlar ko‘p, ammo o‘quvchilarning qiziqishi o‘rganilmaydi. Direktorning birinchi chorasi qaysi?',
      [
        'Tadbirlar sonini oshirish',
        'Kasbiy diagnostika tizimini yo‘lga qo‘yish',
        'Barcha o‘quvchilarni bitta to‘garakka jalb qilish',
        'Mas’uliyatni ota-onalarga topshirish',
      ],
      1,
      'Sifatli yo‘naltirish uchun avvalo o‘quvchining individual ehtiyojlari aniqlanishi kerak.',
    ),

    q(
      'm2t3-m05',
      'O‘quvchi texnik yo‘nalishga qiziqadi, lekin real ish jarayonini bilmaydi. Eng samarali qadam qaysi?',
      [
        'Kasb nomlarini ko‘proq yodlatish',
        'Texnik yo‘nalishdagi korxonaga amaliy tashrif tashkil etish',
        'Boshqa kasbni tavsiya qilish',
        'Diagnostikani to‘xtatish',
      ],
      1,
      'Amaliy tashrif qiziqishni real kasbiy talablar bilan taqqoslash imkonini beradi.',
    ),

    q(
      'm2t3-m06',
      'Kasbga yo‘naltirishni fan darsiga integratsiya qilishning yaxshi namunasi qaysi?',
      [
        'Biologiyada tibbiyot kasblarini yodlash',
        'Matematikada muhandislikdagi real hisob-kitobdan foydalanish',
        'Har darsda kasblar ro‘yxatini o‘qish',
        'Fan mavzusini kasbiy mavzu bilan almashtirish',
      ],
      1,
      'Integratsiya fan mazmunini saqlagan holda uni real kasbiy vaziyat bilan bog‘laydi.',
    ),

    q(
      'm2t3-m07',
      'O‘quvchining qiziqishi bilan mehnat bozori talabi o‘rtasida nomuvofiqlik aniqlansa, eng maqbul yondashuv qaysi?',
      [
        'O‘quvchi qiziqishini butunlay rad etish',
        'Faqat bozor talabini hisobga olish',
        'Qiziqish, qobiliyat va bozor imkoniyatlarini birgalikda tahlil qilish',
        'Kasbiy maslahatni to‘xtatish',
      ],
      2,
      'Kasbiy tanlovda shaxsiy moyillik va real imkoniyatlar o‘zaro muvozanatlashtiriladi.',
    ),

    q(
      'm2t3-m08',
      'Kasbiy diagnostika natijasida o‘quvchi uch xil yo‘nalishga mos ekanligi aniqlandi. Keyingi bosqich qaysi?',
      [
        'Bitta kasbni majburan tanlatish',
        'Har uchala yo‘nalish haqida amaliy ma’lumot berish',
        'Natijani e’tiborsiz qoldirish',
        'Faqat ota-ona qarorini kutish',
      ],
      1,
      'Bir nechta mos yo‘nalish mavjud bo‘lsa, o‘quvchi ularni taqqoslash va amalda sinab ko‘rish imkoniga ega bo‘lishi kerak.',
    ),

    q(
      'm2t3-m09',
      'Kasbiy yo‘naltirishda “individual marshrut” nimani anglatadi?',
      [
        'Barcha o‘quvchilar uchun bir xil reja',
        'O‘quvchining xususiyatlariga mos rivojlanish va kasbiy tanlov yo‘li',
        'Faqat yakuniy kasb nomi',
        'Faqat ota-onalar uchun tavsiya',
      ],
      1,
      'Individual marshrut o‘quvchining qiziqishi, qobiliyati va maqsadiga mos bosqichlarni belgilaydi.',
    ),

    q(
      'm2t3-m10',
      'Kasbiy yo‘naltirish monitoringida eng muhim ko‘rsatkich qaysi?',
      [
        'O‘tkazilgan tadbirlar soni',
        'Tarqatilgan bukletlar soni',
        'O‘quvchilarning asoslangan kasbiy rejalari va rivojlanish dinamikasi',
        'Taklif etilgan mehmonlar soni',
      ],
      2,
      'Monitoring faoliyat hajmini emas, o‘quvchining real natijasi va rivojlanishini ko‘rsatishi kerak.',
    ),

    q(
      'm2t3-m11',
      'Kasbiy yo‘naltirishda portfolio qanday vazifani bajaradi?',
      [
        'Faqat hujjatlarni saqlaydi',
        'O‘quvchining qiziqishi, yutuqlari va rivojlanish yo‘lini ko‘rsatadi',
        'Baholarni avtomatik oshiradi',
        'Kasbni avtomatik tanlaydi',
      ],
      1,
      'Portfolio o‘quvchining rivojlanishi, qiziqishlari va faoliyat natijalarini tizimli kuzatishga yordam beradi.',
    ),

    q(
      'm2t3-m12',
      'Kasbiy yo‘naltirishda ota-ona bilan individual suhbatning afzalligi nimada?',
      [
        'Barcha qarorni ota-onaga berishda',
        'O‘quvchining ehtiyojlarini oilaviy sharoit bilan bog‘liq holda muhokama qilishda',
        'Diagnostikani bekor qilishda',
        'Maktab mas’uliyatini kamaytirishda',
      ],
      1,
      'Individual suhbat o‘quvchi imkoniyatlari, oilaviy kutishlar va rivojlanish rejasini birgalikda ko‘rib chiqishga imkon beradi.',
    ),

    q(
      'm2t3-m13',
      'Kasbiy yo‘naltirishda amaliy loyiha nima uchun samarali?',
      [
        'O‘quvchini nazariyadan ozod qiladi',
        'Kasbiy vazifalarni faoliyat orqali sinab ko‘rishga imkon beradi',
        'Baholashni bekor qiladi',
        'Barcha kasblarni bir xil ko‘rsatadi',
      ],
      1,
      'Loyiha orqali o‘quvchi kasbga xos vazifalarni amalda bajarib, o‘z qiziqishi va imkoniyatini sinab ko‘radi.',
    ),

    q(
      'm2t3-m14',
      'Kasbiy yo‘naltirishda “sinov faoliyati”ning maqsadi nima?',
      [
        'O‘quvchini yakuniy kasbga majburlash',
        'Kasbiy faoliyat elementlarini xavfsiz sharoitda sinab ko‘rish',
        'Faqat baho qo‘yish',
        'O‘quvchini darsdan ozod qilish',
      ],
      1,
      'Sinov faoliyati o‘quvchiga kasbiy faoliyatni tajriba orqali baholash imkonini beradi.',
    ),

    q(
      'm2t3-m15',
      'Maktab kasbga yo‘naltirishda korxona bilan shartli hamkorlikni boshladi. Birinchi navbatda nima belgilanadi?',
      [
        'Faqat tashrif sanasi',
        'Hamkorlik maqsadi, vazifasi va kutilayotgan natija',
        'Faqat mehmonlar ro‘yxati',
        'Faqat suratga olish rejasi',
      ],
      1,
      'Samarali hamkorlik aniq maqsad va kutilayotgan natijaga asoslanadi.',
    ),

    q(
      'm2t3-m16',
      'Kasbiy yo‘naltirishda “qobiliyat” va “qiziqish”ning farqi nimada?',
      [
        'Ular doimo bir xil',
        'Qiziqish istakni, qobiliyat esa faoliyatni muvaffaqiyatli bajarish imkoniyatini bildiradi',
        'Qobiliyat faqat baho bilan o‘lchanadi',
        'Qiziqishning kasb tanlashga aloqasi yo‘q',
      ],
      1,
      'Kasbiy maslahatda o‘quvchining nimaga qiziqishi va nimani samarali bajara olishi birgalikda ko‘rib chiqiladi.',
    ),

    q(
      'm2t3-m17',
      'Agar o‘quvchi yuqori baholarga ega bo‘lsa, bu uning istalgan kasbga mosligini anglatadimi?',
      [
        'Ha, baho barcha omillarni belgilaydi',
        'Ha, boshqa diagnostika kerak emas',
        'Yo‘q, qiziqish, qobiliyat va shaxsiy xususiyatlar ham hisobga olinadi',
        'Faqat ota-ona qarori muhim',
      ],
      2,
      'Akademik natija muhim, ammo kasbiy moslikni belgilovchi yagona omil emas.',
    ),

    q(
      'm2t3-m18',
      'Kasbiy yo‘naltirishda “mentor” yoki mutaxassis bilan suhbatning kuchli jihati qaysi?',
      [
        'Kasb haqida real tajriba asosida tasavvur beradi',
        'Kasbni avtomatik tanlaydi',
        'Diagnostikani bekor qiladi',
        'O‘quvchini majburiy ishga joylashtiradi',
      ],
      0,
      'Amaliyotchi mutaxassis real kasbiy vazifalar, qiyinchiliklar va imkoniyatlar haqida hayotiy ma’lumot beradi.',
    ),

    q(
      'm2t3-m19',
      'Kasbiy yo‘naltirish rejasida “mas’ul shaxs”ni belgilash nima uchun zarur?',
      [
        'Hisobotni ko‘paytirish uchun',
        'Vazifalarning bajarilishini boshqarish va nazorat qilish uchun',
        'Tadbirni rasmiylashtirish uchun',
        'O‘quvchini baholash uchun',
      ],
      1,
      'Mas’ul shaxs vazifaning aniq egasini belgilaydi va ijroni monitoring qilish imkonini beradi.',
    ),

    q(
      'm2t3-m20',
      'Kasbiy yo‘naltirishda qayta aloqa qanday vazifani bajaradi?',
      [
        'Faqat tadbirni maqtash',
        'Natijani tahlil qilib, keyingi faoliyatni takomillashtirish',
        'Kasb tanlovini bekor qilish',
        'O‘quvchini jazolash',
      ],
      1,
      'Qayta aloqa tizimning kuchli va zaif tomonlarini aniqlashga yordam beradi.',
    ),

    q(
      'm2t3-m21',
      'Kasbiy yo‘naltirishda xavf guruhi sifatida qaysi holatni alohida kuzatish kerak?',
      [
        'Kasbiy rejasini tez-tez o‘zgartiradigan va qo‘llab-quvvatlashga muhtoj o‘quvchini',
        'Faqat yuqori baholi o‘quvchini',
        'Faqat sport bilan shug‘ullanuvchini',
        'Faqat faol o‘quvchini',
      ],
      0,
      'Kasbiy rejasida noaniqlik yoki keskin o‘zgarishlar bo‘lgan o‘quvchi qo‘shimcha maslahat va qo‘llab-quvvatlashga muhtoj bo‘lishi mumkin.',
    ),

    q(
      'm2t3-m22',
      'Kasbiy yo‘naltirishda ma’lumotlar bazasini yuritishning asosiy foydasi nimada?',
      [
        'O‘quvchilarni reytinglashda',
        'Individual rivojlanish dinamikasini kuzatishda',
        'Faqat hisobot tayyorlashda',
        'O‘quvchini bitta kasbga biriktirishda',
      ],
      1,
      'Tizimli ma’lumotlar individual yo‘nalishning vaqt davomida qanday o‘zgarayotganini ko‘rsatadi.',
    ),

    q(
      'm2t3-m23',
      'Kasbiy yo‘naltirishda o‘quvchining “qobiliyati”ni aniqlashning o‘zi yetarlimi?',
      [
        'Ha, kasbiy tanlov shu bilan yakunlanadi',
        'Yo‘q, qobiliyat qiziqish, shaxsiy xususiyat va real kasbiy talablar bilan birga talqin qilinadi',
        'Ha, ota-ona fikri kerak emas',
        'Yo‘q, qobiliyatning ahamiyati yo‘q',
      ],
      1,
      'Kasbiy moslik kompleks yondashuvni talab qiladi.',
    ),

    q(
      'm2t3-m24',
      'Maktabda kasbiy yo‘naltirish bo‘yicha turli subyektlar faoliyatini birlashtirish uchun qaysi vosita samaraliroq?',
      [
        'Umumiy maqsad va hamkorlik rejasi',
        'Faqat yakuniy yig‘ilish',
        'Faqat ijtimoiy tarmoq guruhi',
        'Faqat og‘zaki topshiriq',
      ],
      0,
      'Hamkorlik rejasi vazifalar, muddatlar va mas’uliyatni muvofiqlashtiradi.',
    ),

    q(
      'm2t3-m25',
      'Kasbiy yo‘naltirishda o‘quvchining mustaqil qaror qabul qilishini qo‘llab-quvvatlash nima uchun muhim?',
      [
        'Mas’uliyatni maktabdan olib tashlash uchun',
        'O‘quvchining tanlov jarayonida faol subyekt bo‘lishini ta’minlash uchun',
        'Ota-onalarni chiqarib tashlash uchun',
        'Diagnostikani kamaytirish uchun',
      ],
      1,
      'O‘quvchi kasbiy tanlovning faol subyekti bo‘lishi va o‘z qarorini asoslay olishi kerak.',
    ),

    q(
      'm2t3-m26',
      'Kasbiy yo‘naltirish natijalarini davriy qayta ko‘rib chiqishdan asosiy maqsad nima?',
      [
        'Qiziqish va rejalar o‘zgarishini hisobga olish',
        'Eski tavsiyalarni avtomatik tasdiqlash',
        'Tadbirlar sonini ko‘paytirish',
        'Diagnostikani bekor qilish',
      ],
      0,
      'O‘quvchining qiziqishi va rejalari vaqt davomida o‘zgarishi mumkin.',
    ),

    q(
      'm2t3-m27',
      'Maktab, oila, texnikum va korxona hamkorligining kuchli jihati nimada?',
      [
        'Barcha subyektlar bir xil qaror qabul qiladi',
        'Turli muhitlardan olingan ma’lumotlar yagona yo‘nalishga birlashadi',
        'Maktab mas’uliyati butunlay kamayadi',
        'Kasbiy tanlov avtomatlashtiriladi',
      ],
      1,
      'Turli subyektlarning ma’lumotlari o‘quvchi rivojlanishini kompleks ko‘rishga yordam beradi.',
    ),

    q(
      'm2t3-m28',
      'Real ish muhiti bilan tanishtirishning muhim chegarasi nimada?',
      [
        'U o‘quvchini aynan shu korxonada ishlashga majbur qilmaydi',
        'U kasbiy tanlovni bekor qiladi',
        'U faqat yuqori baholilar uchun kerak',
        'U diagnostikani to‘liq almashtiradi',
      ],
      0,
      'Amaliy tajriba tanlovni asoslaydi, ammo o‘quvchi nomidan yakuniy qaror qabul qilmaydi.',
    ),

    q(
      'm2t3-m29',
      'Kasbga yo‘naltirish samaradorligini oshirishda qaysi kombinatsiya eng to‘liq?',
      [
        'Targ‘ibot + hisobot + tadbir',
        'Diagnostika + individual tavsiya + amaliy tajriba + hamkorlik + monitoring',
        'Uchrashuv + reklama + sertifikat',
        'Baholash + sinf rahbari + ota-ona',
      ],
      1,
      'Kompleks model diagnostika, individual yo‘naltirish, amaliy tajriba, hamkorlik va monitoringni birlashtiradi.',
    ),

    q(
      'm2t3-m30',
      'Direktor kasbga yo‘naltirish tizimida eng avvalo qaysi savolni berishi kerak?',
      [
        'Nechta tadbir o‘tkazdik?',
        'Qaysi o‘quvchida qanday o‘zgarish va keyingi yo‘nalish shakllandi?',
        'Nechta post joyladik?',
        'Nechta mehmon taklif qildik?',
      ],
      1,
      'Strategik boshqaruv faoliyat hajmini emas, o‘quvchidagi natijani markazga qo‘yadi.',
    ),
  ],

  /* =========================================================
     30 TA QIYIN
  ========================================================= */
  hard: [
    q(
      'm2t3-h01',
      'Maktabda kasbiy yo‘naltirish tadbirlari ko‘p, ammo bitiruvchilarning keyingi ta’lim yo‘nalishi bilan bog‘liq natijalar kuzatilmaydi. Direktor qaysi boshqaruv modelini joriy qilishi kerak?',
      [
        'Tadbirlar sonini oshirish',
        'Tadbir → hisobot modelini saqlash',
        'Diagnostika → individual reja → amaliy tajriba → natijani kuzatish modelini joriy qilish',
        'Faqat bitiruvchilar bilan suhbat o‘tkazish',
      ],
      2,
      'Natijaga yo‘naltirilgan model faoliyatni o‘quvchining keyingi rivojlanish natijasi bilan bog‘laydi.',
    ),

    q(
      'm2t3-h02',
      'Bir o‘quvchining qiziqishi yuqori, ammo shu yo‘nalishdagi asosiy ko‘nikmalari sust. Eng maqbul pedagogik qaror qaysi?',
      [
        'Kasbni darhol rad etish',
        'Qiziqishni e’tiborsiz qoldirish',
        'Qiziqishni saqlagan holda rivojlantirilishi zarur ko‘nikmalar uchun individual reja tuzish',
        'O‘quvchini boshqa kasbga majburlash',
      ],
      2,
      'Qiziqish va mavjud kompetensiya o‘rtasidagi farq rivojlanish rejasi orqali bartaraf etilishi mumkin.',
    ),

    q(
      'm2t3-h03',
      'Ota-ona o‘quvchini yuqori daromadli kasbga yo‘naltirmoqda, diagnostika esa boshqa yo‘nalishga moyillikni ko‘rsatmoqda. Maktab qanday pozitsiyani egallashi kerak?',
      [
        'Ota-onaning qarorini avtomatik qabul qilish',
        'Diagnostika natijasini mutlaq qaror deb olish',
        'Dalillarni oilaviy suhbat va amaliy tajriba bilan muhokama qilish',
        'Ota-onani jarayondan chiqarish',
      ],
      2,
      'Kasbiy maslahatda turli manfaatlar ochiq muloqot, dalillar va amaliy tajriba orqali uyg‘unlashtiriladi.',
    ),

    q(
      'm2t3-h04',
      'Kasbiy diagnostikada o‘quvchi bir nechta yo‘nalishga yuqori moslik ko‘rsatdi. Bu holatda qaysi yondashuv to‘g‘ri?',
      [
        'Eng yuqori ko‘rsatkichni yagona kasb sifatida belgilash',
        'Barcha yo‘nalishlarni rad etish',
        'Yo‘nalishlarni amaliy tajriba va qo‘shimcha ma’lumot orqali taqqoslash',
        'Faqat ota-onaning tanlovini kutish',
      ],
      2,
      'Diagnostika yo‘nalishlarni aniqlaydi, yakuniy tanlov esa qo‘shimcha tajriba va tahlil bilan asoslanadi.',
    ),

    q(
      'm2t3-h05',
      'Maktabda kasbiy yo‘naltirish natijalari faqat o‘tkazilgan tadbirlar soni bilan baholanmoqda. Direktor nimani o‘zgartirishi kerak?',
      [
        'Tadbirlar sonini yanada oshirish',
        'Natija ko‘rsatkichlarini o‘quvchi rivojlanishi bilan bog‘lash',
        'Faqat hisobot shaklini o‘zgartirish',
        'Tadbirlarni butunlay to‘xtatish',
      ],
      1,
      'Sifatli monitoring faoliyat hajmidan tashqari o‘quvchi natijalarini ham o‘lchashi kerak.',
    ),

    q(
      'm2t3-h06',
      'O‘quvchi korxonadagi faoliyatni qiziqarli deb topdi, ammo kasbning kundalik vazifalari unga mos emasligi aniqlandi. Bu tajriba qanday talqin qilinadi?',
      [
        'Kasbiy yo‘naltirish muvaffaqiyatsiz bo‘ldi',
        'O‘quvchi kasb tanlashdan voz kechishi shart',
        'Amaliy tajriba ongli tanlov uchun muhim diagnostik ma’lumot berdi',
        'Korxona bilan hamkorlikni to‘xtatish kerak',
      ],
      2,
      'Amaliy tajriba faqat qiziqishni tasdiqlash emas, nomuvofiqliklarni aniqlash uchun ham xizmat qiladi.',
    ),

    q(
      'm2t3-h07',
      'Kasbiy yo‘naltirish tizimida psixolog, sinf rahbari va maslahatchi bir xil o‘quvchi haqida turli xulosaga keldi. Direktor nima qilishi kerak?',
      [
        'Faqat psixolog xulosasini qabul qilish',
        'Faqat sinf rahbari fikrini olish',
        'Dalillarni birlashtirib, o‘quvchi bilan individual suhbat va qo‘shimcha kuzatuv tashkil qilish',
        'Eng ko‘p ovoz olgan fikrni tanlash',
      ],
      2,
      'Turli professional kuzatuvlarni birlashtirish kompleksroq qaror qabul qilish imkonini beradi.',
    ),

    q(
      'm2t3-h08',
      'Kasbiy yo‘naltirishda mehnat bozori ma’lumotlari tez o‘zgaradigan yo‘nalishda maktab qanday yondashuvni tanlashi kerak?',
      [
        'Bir marta tuzilgan kasblar ro‘yxatidan foydalanish',
        'Ma’lumotlarni muntazam yangilab borish',
        'Faqat ota-onalar fikriga tayanish',
        'Faqat darslikdagi ma’lumotlardan foydalanish',
      ],
      1,
      'Mehnat bozori dinamik bo‘lgani sababli kasbiy ma’lumotlar muntazam yangilanib turishi zarur.',
    ),

    q(
      'm2t3-h09',
      'Bir sinfda o‘quvchilarning kasbiy qiziqishlari keskin farq qiladi. Eng maqbul tashkil etish usuli qaysi?',
      [
        'Barchaga bir xil kasbiy topshiriq berish',
        'Qiziqish guruhlari asosida differensial faoliyat tashkil etish',
        'Faqat eng yuqori baholilarni ajratish',
        'Kasbiy yo‘naltirishni keyinga qoldirish',
      ],
      1,
      'Differensial yondashuv turli qiziqish va ehtiyojlarga mos faoliyatni tashkil etishga imkon beradi.',
    ),

    q(
      'm2t3-h10',
      'Kasbiy yo‘naltirish tizimida eng katta boshqaruv xatolaridan biri qaysi?',
      [
        'Individual ma’lumotlardan foydalanish',
        'Natijalarni muntazam tahlil qilish',
        'Faoliyatni faqat tadbirlar soni bilan baholash',
        'Tashqi hamkorlarni jalb qilish',
      ],
      2,
      'Tadbirlar soni natijani to‘liq ifodalamaydi; asosiy e’tibor o‘quvchi rivojlanishiga qaratilishi kerak.',
    ),

    q(
      'm2t3-h11',
      'O‘quvchi kasb tanlashda faqat do‘stlarining fikriga tayanmoqda. Maktabning eng maqbul yordami qaysi?',
      [
        'Do‘stlari tanlovini noto‘g‘ri deb e’lon qilish',
        'O‘quvchiga o‘z qiziqishi, qobiliyati va kasb talablari bo‘yicha tahlil qilish imkonini berish',
        'Kasb tanlashni ota-onaga topshirish',
        'Diagnostikani o‘tkazmaslik',
      ],
      1,
      'Ongli tanlov tashqi ta’sirdan ko‘ra dalillangan o‘z-o‘zini anglashga tayanadi.',
    ),

    q(
      'm2t3-h12',
      'Kasbiy yo‘naltirish dasturida barcha o‘quvchilar bir xil diagnostikadan o‘tkazilmoqda. Bunga qanday qo‘shimcha zarur?',
      [
        'Natijalarni individual suhbat va kuzatuv bilan to‘ldirish',
        'Diagnostikani butunlay bekor qilish',
        'Faqat baholarni qo‘shish',
        'Faqat ota-onalar so‘rovini olish',
      ],
      0,
      'Standart diagnostika individual suhbat, kuzatuv va faoliyat natijalari bilan boyitilganda aniqroq bo‘ladi.',
    ),

    q(
      'm2t3-h13',
      'Kasbiy yo‘naltirish bo‘yicha yillik reja tuzishda eng muhim tamoyil qaysi?',
      [
        'Tadbirlarni imkon qadar ko‘paytirish',
        'Faoliyatlarni o‘quvchi rivojlanish bosqichlari bilan bog‘lash',
        'Faqat bayram kunlariga tadbir qo‘yish',
        'Faqat tashqi tashkilotlarga tayanish',
      ],
      1,
      'Yillik reja uzluksiz va bosqichma-bosqich rivojlanish mantig‘iga ega bo‘lishi kerak.',
    ),

    q(
      'm2t3-h14',
      'Kasbiy yo‘naltirishda “natija indikatori” sifatida qaysi ko‘rsatkich kuchliroq?',
      [
        'O‘tkazilgan uchrashuvlar soni',
        'Tarqatilgan materiallar soni',
        'O‘quvchining asoslangan kasbiy rejasini ishlab chiqishi',
        'Taklif etilgan mehmonlar soni',
      ],
      2,
      'Natija indikatori o‘quvchining kasbiy rivojlanishidagi real o‘zgarishni ko‘rsatishi kerak.',
    ),

    q(
      'm2t3-h15',
      'Maktabda kasbiy yo‘naltirish bo‘yicha ma’lumotlar mavjud, ammo ular turli xodimlarda alohida saqlanadi. Direktorning eng maqbul qarori qaysi?',
      [
        'Ma’lumotlarni yagona monitoring tizimida birlashtirish',
        'Har bir xodimga alohida ishlashni topshirish',
        'Ma’lumotlarni qisqartirish',
        'Faqat qog‘oz hujjat saqlash',
      ],
      0,
      'Yagona ma’lumotlar tizimi o‘quvchining rivojlanishini kompleks ko‘rish va qarorlarni asoslashga yordam beradi.',
    ),

    q(
      'm2t3-h16',
      'Kasbiy yo‘naltirishda o‘quvchining qiziqishi yuqori, lekin ota-onasi uni boshqa yo‘nalishga undamoqda. Qaysi vosita konstruktivroq?',
      [
        'Ota-onani rad etish',
        'O‘quvchi fikrini mutlaq ustun qo‘yish',
        'Dalillar asosidagi uch tomonlama maslahat',
        'Masalani e’tiborsiz qoldirish',
      ],
      2,
      'O‘quvchi, ota-ona va maktab o‘rtasidagi asoslangan muloqot qarama-qarshilikni konstruktiv yechimga aylantiradi.',
    ),

    q(
      'm2t3-h17',
      'O‘quvchining kasbiy rejasi bir yil ichida ikki marta o‘zgardi. Buni qanday baholash kerak?',
      [
        'Har doim noto‘g‘ri qaror sifatida',
        'Kasbiy qiziqishlarni qayta tahlil qilish uchun signal sifatida',
        'Maktab ishining muvaffaqiyatsizligi sifatida',
        'O‘quvchini tanlovdan chiqarish sababi sifatida',
      ],
      1,
      'Kasbiy qiziqishlarning o‘zgarishi tabiiy bo‘lishi mumkin va qo‘shimcha maslahat zarurligini ko‘rsatadi.',
    ),

    q(
      'm2t3-h18',
      'Kasbiy yo‘naltirishda korxonaga tashrifdan oldin eng muhim tayyorgarlik qaysi?',
      [
        'Faqat transport masalasini hal qilish',
        'Tashrif maqsadi va o‘quvchilar uchun kuzatuv topshiriqlarini belgilash',
        'Faqat suratga olishni rejalashtirish',
        'Tashrifdan keyin maqsadni belgilash',
      ],
      1,
      'Maqsadli tashrif o‘quvchining kuzatuvini faol o‘rganishga aylantiradi.',
    ),

    q(
      'm2t3-h19',
      'Kasbiy yo‘naltirishning “uzluksizlik” tamoyili nimani anglatadi?',
      [
        'Faqat 9-sinfda ishlashni',
        'Har yili bir xil tadbirni takrorlashni',
        'Kasbiy rivojlanishni yosh bosqichlariga mos ravishda davom ettirishni',
        'Faqat bitiruvchilarga maslahat berishni',
      ],
      2,
      'Uzluksizlik kasbiy rivojlanish ishlarini o‘quvchining yosh va rivojlanish bosqichlari bo‘yicha davom ettirishni anglatadi.',
    ),

    q(
      'm2t3-h20',
      'Kasbiy yo‘naltirishda “moslik” tushunchasini eng to‘liq ifodalovchi javob qaysi?',
      [
        'Faqat o‘quvchining xohishi',
        'Faqat akademik baholar',
        'Shaxsiy xususiyatlar, qobiliyat, qiziqish va kasb talablari uyg‘unligi',
        'Faqat mehnat bozori talabi',
      ],
      2,
      'Kasbiy moslik bir nechta omilning o‘zaro uyg‘unligidan shakllanadi.',
    ),

    q(
      'm2t3-h21',
      'Kasbiy yo‘naltirishda “axborot assimetriyasi” muammosini kamaytirishning eng samarali yo‘li qaysi?',
      [
        'Faqat internetdan ma’lumot berish',
        'O‘quvchini real mutaxassislar, ta’lim muassasalari va ish muhiti bilan bog‘lash',
        'Kasblar ro‘yxatini yodlatish',
        'Faqat ota-onalardan ma’lumot olish',
      ],
      1,
      'Turli manbalardan olingan real ma’lumotlar kasb haqidagi bir tomonlama tasavvurni kamaytiradi.',
    ),

    q(
      'm2t3-h22',
      'Maktab kasbiy yo‘naltirishda bir nechta hamkor bilan ishlaydi. Hamkorlikni baholash uchun qaysi mezon eng to‘g‘ri?',
      [
        'Hamkorlar soni',
        'Ularning logotiplari soni',
        'Hamkorlikning o‘quvchi rivojlanishiga qo‘shgan amaliy hissasi',
        'O‘tkazilgan yig‘ilishlar soni',
      ],
      2,
      'Hamkorlikning qiymati uning soni bilan emas, o‘quvchi uchun yaratgan real imkoniyati bilan baholanadi.',
    ),

    q(
      'm2t3-h23',
      'Kasbiy yo‘naltirishda o‘quvchining qobiliyatini aniqlashning o‘zi yetarlimi?',
      [
        'Ha, qobiliyat kasbni to‘liq belgilaydi',
        'Yo‘q, qobiliyat qiziqish, shaxsiy xususiyat va kasbiy talablar bilan birga tahlil qilinadi',
        'Ha, ota-ona fikri kerak emas',
        'Yo‘q, qobiliyatning ahamiyati yo‘q',
      ],
      1,
      'Kasbiy moslik kompleks yondashuv orqali aniqlanadi.',
    ),

    q(
      'm2t3-h24',
      'Turli subyektlar faoliyatini birlashtirish uchun qaysi vosita eng samarali?',
      [
        'Umumiy maqsad va hamkorlik rejasi',
        'Faqat yakuniy yig‘ilish',
        'Faqat ijtimoiy tarmoq guruhi',
        'Faqat og‘zaki topshiriq',
      ],
      0,
      'Umumiy reja vazifalar, muddatlar va mas’uliyatni muvofiqlashtiradi.',
    ),

    q(
      'm2t3-h25',
      'O‘quvchining mustaqil kasbiy qaror qabul qilishini qo‘llab-quvvatlashning asosiy maqsadi nima?',
      [
        'Mas’uliyatni maktabdan olib tashlash',
        'O‘quvchini tanlov jarayonining faol subyekti qilish',
        'Ota-onalarni chiqarib tashlash',
        'Diagnostikani kamaytirish',
      ],
      1,
      'O‘quvchi o‘z tanlovini anglab, asoslay oladigan faol subyekt bo‘lishi kerak.',
    ),

    q(
      'm2t3-h26',
      'Kasbiy yo‘naltirish natijalarini muntazam qayta ko‘rib chiqishning strategik foydasi nimada?',
      [
        'O‘quvchidagi o‘zgarishlarni hisobga olib individual yo‘nalishni yangilash',
        'Eski tavsiyalarni o‘zgartirmaslik',
        'Tadbirlar sonini oshirish',
        'Diagnostikani bekor qilish',
      ],
      0,
      'Dinamik monitoring o‘quvchining yangi qiziqishlari va rivojlanish ehtiyojlariga moslashish imkonini beradi.',
    ),

    q(
      'm2t3-h27',
      'Maktab, oila, texnikum va korxona hamkorligining eng katta boshqaruv afzalligi qaysi?',
      [
        'Mas’uliyatni bir-biriga o‘tkazish',
        'O‘quvchi haqida turli manbalardan ma’lumot yig‘ish va yagona qaror uchun foydalanish',
        'Maktab ishini kamaytirish',
        'Barcha qarorni korxonaga topshirish',
      ],
      1,
      'Turli subyektlarning ma’lumotlari asoslangan individual yo‘nalish yaratishga xizmat qiladi.',
    ),

    q(
      'm2t3-h28',
      'Real ish muhiti bilan tanishtirishning pedagogik chegarasi qaysi?',
      [
        'Amaliy tajriba o‘quvchi nomidan yakuniy qaror qabul qilmaydi',
        'Amaliy tajriba barcha boshqa usullarni almashtiradi',
        'Faqat yuqori baholilar qatnashadi',
        'Amaliyot kasbiy diagnostikani bekor qiladi',
      ],
      0,
      'Amaliy tajriba tanlovni boyitadi, lekin yakuniy qaror uchun boshqa ma’lumotlar ham zarur.',
    ),

    q(
      'm2t3-h29',
      'Kasbiy yo‘naltirishning eng rivojlangan boshqaruv modeli qaysi?',
      [
        'Tadbir → hisobot',
        'Diagnostika → individual reja → amaliy tajriba → hamkorlik → monitoring',
        'Uchrashuv → surat → sertifikat',
        'Reklama → targ‘ibot → hisobot',
      ],
      1,
      'Rivojlangan model diagnostika, individual rejalashtirish, amaliyot, hamkorlik va monitoringni yagona siklga birlashtiradi.',
    ),

    q(
      'm2t3-h30',
      'Direktor kasbiy yo‘naltirish tizimining haqiqiy samaradorligini aniqlamoqchi. Qaysi savol eng strategik?',
      [
        'Nechta tadbir o‘tkazildi?',
        'Nechta mehmon kelgan?',
        'O‘quvchilarning kasbiy qarorlarida qanday ijobiy o‘zgarish yuz berdi?',
        'Nechta foto va hisobot tayyorlandi?',
      ],
      2,
      'Strategik baholash faoliyat hajmidan ko‘ra o‘quvchi natijasidagi real o‘zgarishga e’tibor beradi.',
    ),
  ],

  /* =========================================================
     10 TA KEYS
  ========================================================= */
  case: [
    q(
      'm2t3-c01',
      `128-sonli maktabda 7–9-sinflar bilan kasbga yo‘naltirish bo‘yicha tahlil o‘tkazildi. Kasblar haqida uchrashuvlar va videoroliklar mavjud, ammo individual qiziqish va qobiliyatlar yetarli o‘rganilmagan. Psixolog ayrim o‘quvchilarda kasbiy moyillik borligini aniqlagan, lekin bu ma’lumotlar ota-onalar va maktab maslahatchisi bilan tizimli ishlanmagan. Korxonalar bilan hamkorlik esa tanishtiruv darajasida qolgan.

Direktor tizimni qayta tashkil qilmoqchi. Qaysi qaror eng to‘liq boshqaruv yechimi hisoblanadi?`,
      [
        'Tadbirlar sonini oshirib, diagnostikani keyingi bosqichga qoldirish',
        'Diagnostika natijalarini individual tavsiya, ota-ona hamkorligi va amaliy korxona tajribasi bilan bog‘lash',
        'Kasbga yo‘naltirishni faqat fan darslari orqali olib borish',
        'Barcha o‘quvchilarni bir xil amaliy yo‘nalishga jalb qilish',
      ],
      1,
      'Muammo axborot yetishmasligida emas, diagnostika, hamkorlik va amaliy yo‘naltirish o‘rtasidagi uzilishdadir.',
    ),

    q(
      'm2t3-c02',
      `97-sonli maktabda o‘quvchilarning ayrim kasbiy qiziqishlari aniqlangan, biroq ota-onalar bilan muntazam maslahatlashuv yo‘q. Texnikum va korxonalar bilan amaliy aloqa ham sust. Direktor psixolog, maslahatchi, ota-onalar va tashqi hamkorlarni yagona tizimga birlashtirmoqchi.

Qaysi chora vaziyatga eng mos?`,
      [
        'Diagnostikani saqlab, individual tavsiyalarni ota-onalar va hamkorlar bilan muhokama qilish hamda amaliy tajribani kengaytirish',
        'Videoroliklar sonini ko‘paytirib, individual ishlarni keyinga qoldirish',
        'Kasbiy tanlovni ota-onalar yig‘ilishida umumiy tarzda hal qilish',
        'O‘quvchilarni faqat akademik baholar asosida yo‘naltirish',
      ],
      0,
      'Vaziyat diagnostika, hamkorlik va amaliy tajribani yagona tizimga birlashtirishni talab qiladi.',
    ),

    q(
      'm2t3-c03',
      `92-sonli maktabda kasblar haqida ma’lumotlar yetarli. Biroq o‘quvchilarning individual qiziqishi va qobiliyati kam o‘rganilgan, texnikum va ishlab chiqarish bilan amaliy aloqa sust. Psixolog ayrim o‘quvchilarda aniq kasbiy moyillik borligini bildirgan.

Direktor uchun eng to‘g‘ri strategik yondashuv qaysi?`,
      [
        'Kasblar haqidagi axborotni yanada ko‘paytirish',
        'Targ‘ibot tadbirlarini asosiy natija deb baholash',
        'Individual diagnostika, hamkorlik va amaliy tajribani yagona tizimga birlashtirish',
        'Kasbiy yo‘naltirishni faqat 11-sinfda kuchaytirish',
      ],
      2,
      'Asosiy muammo axborot yetishmasligi emas, uning individual va amaliy yo‘nalishga ulanmaganidadir.',
    ),

    q(
      'm2t3-c04',
      `114-sonli maktabda kasblar haqida uchrashuvlar muntazam o‘tkaziladi. Psixolog o‘quvchilarning texnik, ijodiy va ijtimoiy yo‘nalishlarga moyilligi turlicha ekanini aniqlagan. Lekin natijalar ota-onalar va maslahatchi bilan tizimli muhokama qilinmaydi. Texnikum va korxonalar bilan aloqa ham asosan tanishtiruv shaklida.

Qaysi xulosa to‘g‘ri?`,
      [
        'Axborot berish yetarli, amaliy hamkorlik ikkinchi darajali',
        'Individual diagnostika natijalari keyingi yo‘naltirish va amaliy tajribaga aylantirilishi kerak',
        'O‘quvchilarning qiziqishlari bir xil bo‘lishi kerak',
        'Ota-onalar jarayonda ishtirok etmasligi ma’qul',
      ],
      1,
      'Aniqlangan qiziqishlar real rivojlanish imkoniyatlari va amaliy faoliyat bilan bog‘lanishi kerak.',
    ),

    q(
      'm2t3-c05',
      `105-sonli maktabda kasblar haqida targ‘ibot olib boriladi. O‘quvchilar nazariy ma’lumotlarga ega, ammo real ish muhiti va mehnat bozori talablari haqida tasavvurlari sust. Psixologik diagnostika, ota-onalar bilan maslahat va texnikum-korxonalar bilan amaliy hamkorlik yetarli emas.

Direktorning qaysi qarori tizimni eng ko‘p rivojlantiradi?`,
      [
        'Targ‘ibot materiallarini ko‘paytirish',
        'Kasbiy yo‘naltirishni diagnostika, individual maslahat, ota-ona hamkorligi va amaliy tajriba asosida qayta qurish',
        'Kasbiy yo‘naltirishni faqat sinf soatlariga qisqartirish',
        'Faqat yuqori baholi o‘quvchilar uchun tadbirlar tashkil etish',
      ],
      1,
      'Vaziyat kompleks tizimni talab qiladi: diagnostika, maslahat, oila va real kasbiy muhit bir-birini to‘ldirishi kerak.',
    ),

    q(
      'm2t3-c06',
      `Bir maktabda diagnostika natijasida 8-sinf o‘quvchilarining uchta asosiy qiziqish guruhi aniqlandi: texnik, ijodiy va ijtimoiy. Maktabda esa barcha o‘quvchilar uchun bitta kasbiy to‘garak mavjud.

Direktor qanday qaror qilishi kerak?`,
      [
        'Bitta to‘garakni saqlab, barcha o‘quvchilarni unga jalb qilish',
        'Qiziqish guruhlariga mos yo‘nalishlarni bosqichma-bosqich tashkil etish va natijalarni kuzatish',
        'To‘garaklarni faqat yuqori baholilarga berish',
        'Kasbiy qiziqishlarni keyingi sinflargacha hisobga olmaslik',
      ],
      1,
      'Diagnostikadagi farqlar differensial faoliyat va mos imkoniyatlarni talab qiladi.',
    ),

    q(
      'm2t3-c07',
      `Bir o‘qituvchi o‘quvchilarni kasbga yo‘naltirishda faqat kasblar haqida ma’lumot beradi. Direktor esa uning faoliyatiga real ish vaziyatlari, kichik loyihalar va korxona tajribasini qo‘shishni taklif qildi.

Bu qarorning asosiy pedagogik mantiqi nima?`,
      [
        'Nazariy bilimlarni amaliy faoliyat bilan bog‘lash',
        'Fan mazmunini kamaytirish',
        'Kasb tanlashni o‘qituvchi zimmasiga topshirish',
        'Tadbirlar sonini oshirish',
      ],
      0,
      'Real vaziyat va loyiha o‘quvchiga kasb mazmunini faoliyat orqali anglash imkonini beradi.',
    ),

    q(
      'm2t3-c08',
      `Maktabda o‘quvchilarning qiziqishi bo‘yicha ma’lumotlar bor, lekin ular bir yil oldingi natijalarga asoslangan. Ayrim o‘quvchilar yangi yo‘nalishlarga qiziqa boshlagan. Direktor tizimni yangilamoqchi.

Qaysi qaror eng maqbul?`,
      [
        'Eski diagnostika natijalarini o‘zgartirmasdan qo‘llash',
        'Yangi qiziqishlarni qayta aniqlash, oldingi natijalar bilan solishtirish va individual yo‘nalishlarni yangilash',
        'Barcha o‘quvchilarga avvalgi tavsiyani saqlab qolish',
        'Diagnostikani faqat bitiruvchilar bilan o‘tkazish',
      ],
      1,
      'Kasbiy qiziqishlar rivojlanadi, shuning uchun diagnostika va individual yo‘nalish vaqti-vaqti bilan yangilanadi.',
    ),

    q(
      'm2t3-c09',
      `Maktabda ota-onalar farzandlarini yuqori daromadli kasblarga yo‘naltirmoqda, ayrim o‘quvchilarning qiziqishi esa boshqa sohalarga mos. Direktor nizoni kuchaytirmasdan kasbiy yo‘naltirishni davom ettirmoqchi.

Eng to‘g‘ri yondashuv qaysi?`,
      [
        'Ota-onaning tanlovini avtomatik qabul qilish',
        'O‘quvchining tanlovini barcha holatda ustun qo‘yish',
        'Diagnostika, mehnat bozori ma’lumotlari, amaliy tajriba va oilaviy suhbat asosida ongli tanlovni shakllantirish',
        'Masalani o‘quvchining o‘ziga topshirib, maktabni jarayondan chiqarish',
      ],
      2,
      'Turli manfaatlarni muvozanatlashtirish dalillar, amaliy tajriba va hamkorlikdagi maslahatga tayanadi.',
    ),

    q(
      'm2t3-c10',
      `Maktab rahbariyati kasbga yo‘naltirishning yangi modelini joriy qilmoqchi. Psixolog individual xususiyatlarni aniqlaydi, maslahatchi o‘quvchi tashabbuslarini qo‘llab-quvvatlaydi, texnikum kasbiy tayyorgarlik imkoniyatlarini ochadi, korxona esa real ish tajribasini beradi.

Ushbu modelning eng muhim ustunligi nimada?`,
      [
        'Barcha qarorlarni tashqi hamkorlar qabul qiladi',
        'Kasbga yo‘naltirishning turli bo‘g‘inlari yagona o‘quvchi rivojlanish maqsadiga xizmat qiladi',
        'Psixologik xizmatning vazifasi kamayadi',
        'Maktab mas’uliyati tashqi tashkilotlarga o‘tadi',
      ],
      1,
      'Modelning kuchi turli subyektlarning imkoniyatlarini o‘quvchi rivojlanishiga birlashtirishidadir.',
    ),
  ],
}
