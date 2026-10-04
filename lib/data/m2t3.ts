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
      'Kasbga yo‘naltirishning asosiy maqsadi qaysi javobda to‘g‘ri ifodalangan?',
      [
        'O‘quvchilarga imkon qadar ko‘p kasb nomlarini yodlatish',
        'O‘quvchining qiziqishi va qobiliyatini kasbiy tanlov bilan bog‘lash',
        'Barcha o‘quvchilarni bir xil kasbiy yo‘nalishga tayyorlash',
        'Kasb tanlashni bitiruv yiliga qoldirish',
      ],
      1,
      'Kasbga yo‘naltirish o‘quvchining individual imkoniyatlari va kelajakdagi tanlovini uyg‘unlashtirishga xizmat qiladi.',
    ),

    q(
      'm2t3-e02',
      'Maktab psixologining kasbga yo‘naltirishdagi muhim vazifasi qaysi?',
      [
        'Qiziqish, qobiliyat va individual xususiyatlarni aniqlash',
        'Barcha o‘quvchilarga bir xil kasbni tavsiya qilish',
        'Kasbiy tadbirlar uchun reklama tayyorlash',
        'O‘quvchilarni fanlar bo‘yicha qat’iy guruhlarga ajratish',
      ],
      0,
      'Psixologik xizmat o‘quvchining qiziqishi, qobiliyati va shaxsiy xususiyatlarini o‘rganishda muhim o‘rin tutadi.',
    ),

    q(
      'm2t3-e03',
      'Maktab va texnikum hamkorligining asosiy qiymati nimada?',
      [
        'Maktabdagi barcha fanlarni qisqartirishda',
        'Baholash mezonlarini bekor qilishda',
        'O‘quvchini kasbiy yo‘nalishlar va ularning amaliy talablari bilan tanishtirishda',
        'O‘quvchilarni majburiy ravishda texnikumga yuborishda',
      ],
      2,
      'Texnikum bilan hamkorlik kasbiy yo‘nalishlar haqida real va amaliy tasavvur hosil qilishga yordam beradi.',
    ),

    q(
      'm2t3-e04',
      'Ishlab chiqarish korxonasi bilan hamkorlikning eng bevosita natijasi qaysi?',
      [
        'Dars jadvalining qisqarishi',
        'O‘quvchilarning akademik baholari avtomatik oshishi',
        'Maktab hujjatlari kamayishi',
        'Real mehnat muhiti va amaliy faoliyat bilan tanishish',
      ],
      3,
      'Ishlab chiqarish bilan hamkorlik real mehnat sharoitini ko‘rish va amaliy ko‘nikmalarni tushunish imkonini beradi.',
    ),

    q(
      'm2t3-e05',
      '1–4-sinflarda kasbga yo‘naltirishning asosiy mazmuni qaysi?',
      [
        'Kasbiy imtihon topshirishga tayyorlash',
        'Turli kasblarning jamiyatdagi ahamiyati haqida dastlabki tasavvur berish',
        'Mehnat bozori bo‘yicha chuqur tahlil o‘tkazish',
        'Muayyan kasb bo‘yicha yakuniy qaror qabul qilish',
      ],
      1,
      'Boshlang‘ich bosqichda kasblar haqida dastlabki tasavvur va qiziqish shakllantiriladi.',
    ),

    q(
      'm2t3-e06',
      '7–9-sinflarda kasbga yo‘naltirishda qaysi jihatga ko‘proq e’tibor beriladi?',
      [
        'Qiziqish, qobiliyat va iqtidorlarni aniqlashga',
        'Faqat kasb nomlarini yodlashga',
        'Barcha o‘quvchilarni bitta kasbga birlashtirishga',
        'Kasbiy faoliyatni maktabdan chiqarib tashlashga',
      ],
      0,
      '7–9-sinflarda o‘quvchining qiziqishi, qobiliyati va iqtidorlari asosida keyingi yo‘nalish bo‘yicha tavsiyalar kuchayadi.',
    ),

    q(
      'm2t3-e07',
      'Kasbga yo‘naltirishni o‘quv jarayoniga integratsiya qilish nimani anglatadi?',
      [
        'Kasbga oid barcha ma’lumotlarni alohida fan sifatida o‘qitish',
        'Fan darslarini qisqartirib, tadbirlar sonini oshirish',
        'Fan mazmunini kasbiy kontekst va amaliy faoliyat bilan bog‘lash',
        'Kasb tanlashni ota-onalarga topshirish',
      ],
      2,
      'Integratsiya fan mazmunini o‘quvchining kelajakdagi amaliy va kasbiy faoliyati bilan bog‘laydi.',
    ),

    q(
      'm2t3-e08',
      'Mahalla va jamoat yetakchilarining kasbga yo‘naltirishdagi hissasi nimada?',
      [
        'O‘quvchilarga ijtimoiy qo‘llab-quvvatlash va motivatsiya berishda',
        'Maktab baholarini belgilashda',
        'Texnikum o‘rniga kasbiy imtihon olishda',
        'Darsliklarni tasdiqlashda',
      ],
      0,
      'Mahalla o‘quvchining ijtimoiy muhitini qo‘llab-quvvatlash va motivatsiyasini kuchaytirishda yordam beradi.',
    ),

    q(
      'm2t3-e09',
      'Kasbga yo‘naltirishda nazariy bilim va amaliy faoliyatning uyg‘unligi nimaga xizmat qiladi?',
      [
        'O‘quv dasturini qisqartirishga',
        'Kasbiy qarorni ongliroq shakllantirishga',
        'Nazariy fanlarni kamaytirishga',
        'Baholashni soddalashtirishga',
      ],
      1,
      'Nazariya va amaliyotning bog‘lanishi o‘quvchiga kasbning real mazmunini anglash va tanlovni asoslash imkonini beradi.',
    ),

    q(
      'm2t3-e10',
      'Quyidagilardan qaysi biri zamonaviy kasbiy kompetensiyaga kiradi?',
      [
        'Faqat ma’lumotni yodlash',
        'Faqat yozma topshiriqni bajarish',
        'Faqat kasb nomlarini bilish',
        'Muammoni hal qilish va muloqot qila olish',
      ],
      3,
      'Zamonaviy mehnat faoliyati muammo yechish, muloqot, hamkorlik va boshqa tayanch kompetensiyalarni talab qiladi.',
    ),

    q(
      'm2t3-e11',
      '“Kasblar alifbosi” bosqichi qaysi yosh guruhiga mos keladi?',
      [
        '5–6-sinflarga',
        '10–11-sinflarga',
        '1–4-sinflarga',
        'Maktabgacha yoshdagilarga',
      ],
      2,
      'Materialdagi bosqichlarga ko‘ra “Kasblar alifbosi” 1–4-sinflarda kasblar haqida tasavvurlarni kengaytirishga xizmat qiladi.',
    ),

    q(
      'm2t3-e12',
      '“Kasblar olami” bosqichi asosan qaysi sinflarga tegishli?',
      [
        '5–6-sinflarga',
        '1–4-sinflarga',
        '7–9-sinflarga',
        'Maktabgacha ta’limga',
      ],
      0,
      '5–6-sinflarda turli mehnat faoliyatlariga qiziqish uyg‘otish va keyingi ongli tanlovga tayyorgarlik kuchayadi.',
    ),

    q(
      'm2t3-e13',
      '“Mening kelajakdagi kasbim” yo‘nalishi qaysi bosqichga mos?',
      [
        '1–4-sinflar',
        '7–9-sinflar',
        '5–6-sinflar',
        'Maktabgacha ta’lim',
      ],
      1,
      '7–9-sinflarda qiziqish, qobiliyat va iqtidorlarni hisobga olib keyingi ta’lim yoki kasb-hunar yo‘nalishi bo‘yicha tavsiyalar beriladi.',
    ),

    q(
      'm2t3-e14',
      'Kasb tushunchasining muhim belgilaridan biri qaysi?',
      [
        'Maxsus tayyorgarlik va bilim talab qilishi',
        'Har qanday vaqtinchalik mashg‘ulot bo‘lishi',
        'Ijtimoiy ehtiyojlardan mustaqil bo‘lishi',
        'Natijasi bo‘lmasligi',
      ],
      0,
      'Kasb odatda maxsus bilim, ko‘nikma va tayyorgarlikni talab qiluvchi faoliyatdir.',
    ),

    q(
      'm2t3-e15',
      'Kasbning qonuniylik tamoyili nimani bildiradi?',
      [
        'Faoliyat faqat shaxsiy xohishga bog‘liq bo‘lishini',
        'Faoliyat huquqiy me’yorlarga mos amalga oshirilishini',
        'Kasb faqat davlat tashkilotida bajarilishini',
        'Barcha kasblar bir xil daromad berishini',
      ],
      1,
      'Qonuniylik kasbiy faoliyatning amaldagi huquqiy me’yorlarga muvofiqligini anglatadi.',
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
      'Foydalilik kasbiy faoliyatning shaxs yoki jamiyat uchun muayyan natija yaratishi bilan bog‘liq.',
    ),

    q(
      'm2t3-e17',
      'Kasbga yo‘naltirishni axborot berishdan kengroq tushunish nimani anglatadi?',
      [
        'Faqat kasblar ro‘yxatini berishni',
        'Kasblar haqidagi statistik ma’lumotlarni ko‘paytirishni',
        'Qiziqish va qobiliyatlarni ongli kasbiy qarorga aylantirishni',
        'Tadbirlar sonini oshirishni',
      ],
      2,
      'Kasbga yo‘naltirishning natijasi axborotning o‘zi emas, balki ongli va asoslangan kasbiy tanlovga tayyorgarlikdir.',
    ),

    q(
      'm2t3-e18',
      'Psixologik xizmat kasbga yo‘naltirishda nimani aniqlashga yordam beradi?',
      [
        'Maktabning moliyaviy imkoniyatlarini',
        'O‘quvchining qiziqishi, qobiliyati va shaxsiy xususiyatlarini',
        'Korxonaning ishlab chiqarish hajmini',
        'Texnikumning kontrakt miqdorini',
      ],
      1,
      'Psixologik diagnostika o‘quvchining individual xususiyatlarini kasbiy yo‘nalish bilan bog‘lashga yordam beradi.',
    ),

    q(
      'm2t3-e19',
      'Ishlab chiqarish ekskursiyasining asosiy pedagogik natijasi qaysi?',
      [
        'Kasbiy muhitni bevosita kuzatish',
        'O‘quv fanlarini kamaytirish',
        'Baholash tizimini almashtirish',
        'Maktab jadvalini qayta tuzish',
      ],
      0,
      'Ekskursiya o‘quvchiga kasbiy muhitni bevosita ko‘rish va faoliyat mazmunini anglash imkonini beradi.',
    ),

    q(
      'm2t3-e20',
      'Stajirovka o‘quvchiga eng avvalo nima beradi?',
      [
        'Nazariy ma’lumotlarni yodlash imkonini',
        'Real ish jarayonida tajriba orttirish imkonini',
        'Maktabdagi baholarni o‘zgartirish imkonini',
        'Kasbni avtomatik tanlash imkonini',
      ],
      1,
      'Stajirovka real faoliyat muhiti bilan amaliy tanishish va tajriba hosil qilishga xizmat qiladi.',
    ),

    q(
      'm2t3-e21',
      'Kelajak markazlari bilan hamkorlikning muhim yo‘nalishi qaysi?',
      [
        'Akademik baholarni qayta hisoblash',
        'Qiziqishlarga mos to‘garaklarni tashkil etish va metodik qo‘llab-quvvatlash',
        'O‘quvchilarni majburiy ishga joylashtirish',
        'Maktab fanlarini bekor qilish',
      ],
      1,
      'Kelajak markazlari qiziqishlarga mos faoliyatlarni tashkil etish va to‘garaklarni metodik qo‘llashga ko‘maklashadi.',
    ),

    q(
      'm2t3-e22',
      'Maktab maslahatchisining kasbga yo‘naltirishdagi asosiy roli qaysi?',
      [
        'O‘quvchilar tashabbuslarini qo‘llab-quvvatlash va yo‘naltirish',
        'Psixologik testlarni o‘zi tasdiqlash',
        'Korxonalar o‘rniga amaliy mashg‘ulot o‘tkazish',
        'Ota-onalar o‘rniga kasbiy qaror qabul qilish',
      ],
      0,
      'Maktab maslahatchisi o‘quvchi tashabbuslarini qo‘llab-quvvatlash va yo‘naltirish jarayonida muhim subyektdir.',
    ),

    q(
      'm2t3-e23',
      'Kasbga yo‘naltirishda ota-onalar bilan hamkorlik nima uchun muhim?',
      [
        'Ota-ona bolaning o‘rniga kasb tanlashi uchun',
        'O‘quvchining qiziqishlari va imkoniyatlari haqida umumiy tushunchani boyitish uchun',
        'Maktabdagi barcha qarorlarni ota-onaga topshirish uchun',
        'Kasbiy diagnostikani bekor qilish uchun',
      ],
      1,
      'Ota-onalar bilan hamkorlik o‘quvchining imkoniyatlarini turli nuqtai nazardan ko‘rishga yordam beradi.',
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
      'Tizimli yondashuv diagnostika, individual tavsiya, amaliy tajriba va keyingi kuzatuvni bog‘laydi.',
    ),

    q(
      'm2t3-e25',
      'Mehnat bozori talablarini hisobga olishning asosiy maqsadi nima?',
      [
        'O‘quvchini istalgan kasbga yo‘naltirish',
        'Shaxsiy imkoniyatlarni real kasbiy ehtiyojlar bilan uyg‘unlashtirish',
        'Maktabdagi fanlar sonini kamaytirish',
        'Barcha o‘quvchilarga bir xil kasb tavsiya qilish',
      ],
      1,
      'Kasbiy tanlov shaxsning imkoniyatlari va mehnat bozoridagi real ehtiyojlar o‘rtasidagi moslikka tayanishi kerak.',
    ),

    q(
      'm2t3-e26',
      'Quyidagilardan qaysi biri kasbiy motivatsiyani kuchaytirishi mumkin?',
      [
        'Real kasbiy muhit bilan tanishish',
        'Kasblarni faqat yodlash',
        'O‘quvchini tanlovdan chetlashtirish',
        'Barcha o‘quvchiga bir xil topshiriq berish',
      ],
      0,
      'Real faoliyatni ko‘rish o‘quvchida kasbning mazmuni va shaxsiy qiziqishi o‘rtasidagi bog‘lanishni kuchaytiradi.',
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
      'Ongli tanlov shaxsiy xususiyatlar va tashqi imkoniyatlarni tahlil qilishga asoslanadi.',
    ),

    q(
      'm2t3-e28',
      'Kasbiy integratsiyaning muhim belgisi qaysi?',
      [
        'Ta’limni real kasbiy muhit bilan bog‘lash',
        'Kasbga oid barcha fanlarni alohida o‘qitish',
        'Kasbiy tadbirlarni faqat bayramlarda o‘tkazish',
        'O‘quvchini amaliy faoliyatdan cheklash',
      ],
      0,
      'Kasbiy integratsiya ta’lim mazmuni va real kasbiy faoliyat o‘rtasidagi bog‘lanishni kuchaytiradi.',
    ),

    q(
      'm2t3-e29',
      'Kasbga yo‘naltirishda differensial yondashuv nima uchun zarur?',
      [
        'Barcha o‘quvchilarni tenglashtirish uchun',
        'Individual qiziqish va qobiliyatlar turlicha bo‘lgani uchun',
        'Kasbiy tanlovni tezlashtirish uchun',
        'Maktabdagi tadbirlarni kamaytirish uchun',
      ],
      1,
      'O‘quvchilarning qiziqishi, qobiliyati va rivojlanish sur’ati turlicha bo‘lgani uchun yondashuv ham moslashtiriladi.',
    ),

    q(
      'm2t3-e30',
      'Kasbga yo‘naltirish samaradorligining kuchli belgisi qaysi?',
      [
        'Tadbirlar sonining ko‘pligi',
        'Kasblar haqidagi videolar soni',
        'Har bir o‘quvchining asoslangan keyingi yo‘nalishi shakllanishi',
        'Hisobotlarning hajmi',
      ],
      2,
      'Samaradorlik tadbirlar sonidan ko‘ra o‘quvchining asoslangan kasbiy rivojlanish yo‘nalishi bilan baholanadi.',
    ),

    /* =========================================================
       30 TA O‘RTA
    ========================================================= */
    medium: [
      q(
        'm2t3-m01',
        'Quyidagi hamkorlik yo‘nalishlarini moslashtiring: A) Maktab va texnikumlar; B) Mahalla; C) Ishlab chiqarish. 1) Ijtimoiy qo‘llab-quvvatlash; 2) Kasbiy-amaliy tayyorgarlik; 3) Kasbiy yo‘nalishlar bilan tanishtirish.',
        [
          'A–3, B–1, C–2',
          'A–1, B–2, C–3',
          'A–2, B–3, C–1',
          'A–3, B–2, C–1',
        ],
        0,
        'Maktab–texnikum kasbiy yo‘nalishlarni ochadi, mahalla ijtimoiy qo‘llab-quvvatlaydi, ishlab chiqarish esa amaliy tajriba beradi.',
      ),

      q(
        'm2t3-m02',
        'Kasbga yo‘naltirish bosqichlari A) 1–4-sinf; B) 5–6-sinf; C) 7–9-sinf bilan mazmunlar 1) Qiziqish va qobiliyatni aniqlash; 2) Kasblarning jamiyatdagi o‘rnini tushuntirish; 3) Mehnat faoliyatiga qiziqish uyg‘otish tarzida moslashtirilsa, to‘g‘ri javob qaysi?',
        [
          'A–1, B–3, C–2',
          'A–2, B–3, C–1',
          'A–3, B–2, C–1',
          'A–2, B–1, C–3',
        ],
        1,
        '1–4-sinfda kasblarning o‘rni, 5–6-sinfda mehnatga qiziqish, 7–9-sinfda individual xususiyatlar aniqlanadi.',
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
        'Diagnostika mustaqil yakun emas, balki individual tavsiya va keyingi amaliy yo‘nalish uchun asos bo‘lishi kerak.',
      ),

      q(
        'm2t3-m04',
        'Bir maktabda kasbga oid uchrashuvlar ko‘p, ammo o‘quvchilarning qiziqishi o‘rganilmaydi. Direktor uchun birinchi boshqaruv chorasi qaysi?',
        [
          'Tadbirlar sonini yana oshirish',
          'Kasbiy diagnostika va qiziqishlarni aniqlash tizimini yo‘lga qo‘yish',
          'Barcha o‘quvchilarni bir xil to‘garakka jalb qilish',
          'Ota-onalarga barcha mas’uliyatni yuklash',
        ],
        1,
        'Tadbirlar mazmunli bo‘lishi uchun avval o‘quvchining individual ehtiyojlarini aniqlash kerak.',
      ),

      q(
        'm2t3-m05',
        'O‘quvchi texnik yo‘nalishga qiziqadi, biroq real ish jarayonini bilmaydi. Eng samarali keyingi qadam qaysi?',
        [
          'Qo‘shimcha kasb nomlarini yodlatish',
          'Texnik yo‘nalishdagi korxonaga amaliy tashrif tashkil etish',
          'Unga boshqa yo‘nalishni tavsiya qilish',
          'Kasbiy diagnostikani to‘xtatish',
        ],
        1,
        'Real ish muhiti o‘quvchining qiziqishini kasbning amaliy talablari bilan solishtirish imkonini beradi.',
      ),

      q(
        'm2t3-m06',
        'Kasbga yo‘naltirishni fan darslariga integratsiya qilishning yaxshi namunasi qaysi?',
        [
          'Biologiya darsida tibbiyot kasblarini yodlash',
          'Matematika darsida muhandislikdagi real hisob-kitob vaziyatidan foydalanish',
          'Har bir dars oxirida kasblar ro‘yxatini o‘qish',
          'Fan mavzusini kasbiy mavzu bilan to‘liq almashtirish',
        ],
        1,
        'Integratsiya fan mazmunini saqlagan holda uni real kasbiy kontekst bilan bog‘lashni anglatadi.',
      ),

      q(
        'm2t3-m07',
        'Maktab maslahatchisi va psixolog vazifalarini farqlashning eng maqbul varianti qaysi?',
        [
          'Ikkalasi ham o‘quvchining o‘rniga kasb tanlaydi',
          'Psixolog individual xususiyatlarni o‘rganadi, maslahatchi yo‘naltirish va tashabbusni qo‘llab-quvvatlaydi',
          'Maslahatchi psixologik testlarni tasdiqlaydi, psixolog tadbir tashkil qiladi',
          'Psixolog faqat ota-onalar bilan, maslahatchi faqat o‘qituvchilar bilan ishlaydi',
        ],
        1,
        'Ikki subyekt vazifasi bir-birini to‘ldiradi: diagnostika va amaliy yo‘naltirish o‘zaro bog‘lanadi.',
      ),

      q(
        'm2t3-m08',
        'Kasbiy tanlovda shaxsiy qiziqish va mehnat bozori talablarini birlashtirish nimani ta’minlaydi?',
        [
          'Shaxsiy xohishning to‘liq ustunligini',
          'Kasbiy qarorning shaxsiy va ijtimoiy omillar bilan asoslanishini',
          'Mehnat bozori talablarining o‘quvchidan ustun qo‘yilishini',
          'Kasb tanlashning maktab tomonidan belgilanilishini',
        ],
        1,
        'Ongli kasbiy tanlov shaxsiy imkoniyat va real mehnat ehtiyojlarini birgalikda hisobga oladi.',
      ),

      q(
        'm2t3-m09',
        'Ishlab chiqarish bilan hamkorlikning qaysi shakli nazariya va amaliyotni bevosita bog‘laydi?',
        [
          'Kasbga oid plakat tayyorlash',
          'Amaliy mashg‘ulot',
          'Umumiy targ‘ibot yig‘ilishi',
          'Kasblar ro‘yxatini tarqatish',
        ],
        1,
        'Amaliy mashg‘ulot nazariy bilimlarni real faoliyat bilan bog‘lashga xizmat qiladi.',
      ),

      q(
        'm2t3-m10',
        'Kasbiy yo‘naltirishda mahalla bilan hamkorlikning eng maqbul natijasi qaysi?',
        [
          'O‘quvchining ijtimoiy muhit va qo‘llab-quvvatlash imkoniyatlarini kengaytirish',
          'Maktab baholash mezonlarini mahallaga topshirish',
          'Kasbiy testlarni mahalla tomonidan o‘tkazish',
          'Texnikum o‘rniga mahallani asosiy ta’lim muassasasiga aylantirish',
        ],
        0,
        'Mahalla ijtimoiy muhit, motivatsiya va qo‘llab-quvvatlash mexanizmlarini kuchaytirishi mumkin.',
      ),

      q(
        'm2t3-m11',
        'Bir o‘quvchi san’atga qiziqadi, lekin uning akademik baholari o‘rtacha. Direktorning to‘g‘ri yondashuvi qaysi?',
        [
          'Avval barcha fanlardan yuqori baho olmaguncha san’at faoliyatini cheklash',
          'Uning san’atdagi qobiliyatini kasbiy rivojlanish nuqtasi sifatida ham o‘rganish',
          'San’atga qiziqishini akademik natijaga aloqasiz deb baholash',
          'Barcha o‘quvchilarni bir xil to‘garakka yo‘naltirish',
        ],
        1,
        'Kasbga yo‘naltirish o‘quvchining kuchli tomonlarini ham hisobga oladi.',
      ),

      q(
        'm2t3-m12',
        'Kasbiy axborotning o‘zi yetarli bo‘lmay qoladigan vaziyat qaysi?',
        [
          'O‘quvchi kasb nomini biladi, ammo o‘z imkoniyati va real ish talablarini taqqoslay olmaydi',
          'O‘quvchi bir nechta kasb nomini eslab qolgan',
          'Maktabda kasblar haqida bukletlar mavjud',
          'O‘qituvchi kasbga oid atamalarni tushuntirgan',
        ],
        0,
        'Kasbiy yo‘naltirish axborotni shaxsiy qaror va amaliy tajriba bilan bog‘lashni talab qiladi.',
      ),

      q(
        'm2t3-m13',
        'Quyidagi juftliklardan qaysi biri to‘g‘ri moslashtirilgan?',
        [
          'Ekskursiya — real kasbiy muhitni kuzatish',
          'Psixologik diagnostika — ishlab chiqarishdagi stajirovka',
          'Mahalla — kasbiy imtihonni baholash',
          'Texnikum — o‘quvchining oilaviy muammolarini aniqlash',
        ],
        0,
        'Ekskursiya kasbiy muhitni bevosita kuzatish imkonini beradi.',
      ),

      q(
        'm2t3-m14',
        'Kasbga yo‘naltirishda “individual tavsiya”ning kuchli tomoni nimada?',
        [
          'Barcha o‘quvchilarga bir xil yo‘l ko‘rsatadi',
          'O‘quvchining individual ma’lumotlarini keyingi ta’lim yo‘nalishi bilan bog‘laydi',
          'Kasbiy tanlovni maktab nomidan yakunlaydi',
          'Ota-onalar fikrini hisobga olishni bekor qiladi',
        ],
        1,
        'Individual tavsiya diagnostika ma’lumotlarini o‘quvchining keyingi imkoniyatlari bilan bog‘laydi.',
      ),

      q(
        'm2t3-m15',
        'Maktabdagi kasbga yo‘naltirish tizimi samaradorligini baholashda qaysi ko‘rsatkich kuchliroq?',
        [
          'O‘tkazilgan tadbirlar soni',
          'Tarqatilgan bukletlar soni',
          'O‘quvchilarning asoslangan kasbiy rejalari va amaliy tajribasi',
          'Ijtimoiy tarmoqlardagi postlar soni',
        ],
        2,
        'Natijaga yo‘naltirilgan monitoring tadbirlar sonidan ko‘ra o‘quvchining rivojlanish va tanlov sifatini baholaydi.',
      ),

      q(
        'm2t3-m16',
        '5–6-sinflarda kasbga yo‘naltirishning mantiqiy vazifasi qaysi?',
        [
          'Yakuniy kasbni belgilash',
          'Mehnat faoliyati va turli sohalarga qiziqishni rivojlantirish',
          'Kasbiy stajirovkani majburiy boshlash',
          'Oliy ta’lim yo‘nalishini tanlash',
        ],
        1,
        'Bu bosqichda qiziqishlarni kengaytirish va keyingi ongli tanlovga tayyorgarlik muhim.',
      ),

      q(
        'm2t3-m17',
        '7–9-sinflarda diagnostika natijalari bilan nima qilish maqsadga muvofiq?',
        [
          'Natijalarni arxivga joylash',
          'Natijalarni individual tavsiya va keyingi yo‘nalish bilan bog‘lash',
          'Natijalarni sinf reytingiga aylantirish',
          'Natijalarni ota-onalardan yashirish',
        ],
        1,
        'Diagnostika amaliy boshqaruv qaroriga aylangandagina kasbga yo‘naltirish samaradorligi oshadi.',
      ),

      q(
        'm2t3-m18',
        'Kasbiy kompetensiyalar turli kasblarda umumiy ahamiyatga ega bo‘lsa, bundan qanday xulosa kelib chiqadi?',
        [
          'Tor maxsus bilimlar keraksiz',
          'Barcha kasblar bir xil',
          'Tayanch kompetensiyalar kasbiy faoliyatning umumiy poydevorini tashkil etadi',
          'Faqat raqamli kasblar istiqbolli',
        ],
        2,
        'Muloqot, muammo yechish, hamkorlik kabi kompetensiyalar ko‘plab kasblarda umumiy ahamiyatga ega.',
      ),

      q(
        'm2t3-m19',
        'Maktabda kasbga yo‘naltirish ishlari yaxshi tashkil etilgan, ammo texnikum va korxonalar bilan aloqa sust. Direktor qaysi bo‘g‘inni kuchaytirishi kerak?',
        [
          'Faqat targ‘ibot',
          'Tashqi amaliy hamkorlik',
          'Faqat sinf rahbarlari hisobotini',
          'Kasb nomlarini yodlash mashqlarini',
        ],
        1,
        'Kasbiy tanlovni real talablar bilan bog‘lash uchun texnikum va ishlab chiqarish hamkorligi muhim.',
      ),

      q(
        'm2t3-m20',
        'O‘quvchining qiziqishi aniqlangan, lekin unga mos amaliy imkoniyat berilmagan. Qaysi qaror eng maqsadga muvofiq?',
        [
          'Qiziqishni hisobga olmaslik',
          'Mos to‘garak, loyiha yoki amaliy mashg‘ulot bilan bog‘lash',
          'Uni boshqa yo‘nalishga majburlash',
          'Kasbiy maslahatni to‘xtatish',
        ],
        1,
        'Qiziqish rivojlanishi uchun u amaliy faoliyat bilan qo‘llab-quvvatlanishi kerak.',
      ),

      q(
        'm2t3-m21',
        'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1) Psixolog; 2) Maslahatchi; 3) Korxona. a) Real ish muhiti; b) Individual diagnostika; c) Yo‘naltirish va tashabbusni qo‘llab-quvvatlash.',
        [
          '1–b, 2–c, 3–a',
          '1–c, 2–a, 3–b',
          '1–a, 2–b, 3–c',
          '1–b, 2–a, 3–c',
        ],
        0,
        'Psixolog diagnostika qiladi, maslahatchi yo‘naltiradi, korxona real ish muhitini beradi.',
      ),

      q(
        'm2t3-m22',
        'Kasbga yo‘naltirishning tashkiliy tadbirlarga qisqarib qolganini qaysi belgi ko‘rsatadi?',
        [
          'Diagnostika natijalarining amaliy yo‘nalishga aylantirilmasligi',
          'O‘quvchilarning qiziqishi muntazam o‘rganilishi',
          'Korxonalar bilan amaliy mashg‘ulotlar o‘tkazilishi',
          'Ota-onalar bilan individual maslahatlar olib borilishi',
        ],
        0,
        'Tadbirlar mavjud bo‘lsa-yu, ular individual yo‘naltirish va amaliy tajribaga ulanmasa, tizim formal tus oladi.',
      ),

      q(
        'm2t3-m23',
        'Kasbiy tanlovda temperamentni hisobga olish qanday yondashuvga yaqin?',
        [
          'Individual-psixologik yondashuvga',
          'Faqat ma’muriy yondashuvga',
          'Faqat statistik yondashuvga',
          'Faqat ishlab chiqarish yondashuviga',
        ],
        0,
        'Temperament shaxsning individual-psixologik xususiyatlaridan biri sifatida kasbiy yo‘naltirishda hisobga olinishi mumkin.',
      ),

      q(
        'm2t3-m24',
        'O‘quvchining kasbiy qarorini real mehnat bozori bilan bog‘lash uchun qaysi ma’lumotlar majmuasi foydaliroq?',
        [
          'Faqat kasb nomlari',
          'Qiziqish, qobiliyat, kasbiy talablar va amaliy tajriba',
          'Faqat o‘quvchining baholari',
          'Faqat ota-onaning kasbi',
        ],
        1,
        'Asoslangan tanlov bir nechta muhim manbalarni birlashtirish orqali shakllanadi.',
      ),

      q(
        'm2t3-m25',
        'Kasbiy yo‘naltirishning qaysi shakli o‘quvchiga kasbni “ichidan” ko‘rish imkonini ko‘proq beradi?',
        [
          'Reklama roligi',
          'Stajirovka',
          'Umumiy yig‘ilish',
          'Buklet tarqatish',
        ],
        1,
        'Stajirovka o‘quvchini real faoliyat jarayoniga yaqinlashtiradi.',
      ),

      q(
        'm2t3-m26',
        'Maktabda bir xil kasbiy tadbir barcha sinflarga bir xil mazmunda o‘tkazilmoqda. Qaysi kamchilik mavjud?',
        [
          'Yosh bosqichlari va individual ehtiyojlar yetarli hisobga olinmagan',
          'Tadbir o‘tkazilgani',
          'Kasblar haqida ma’lumot berilgani',
          'O‘quvchilar qatnashgani',
        ],
        0,
        'Kasbga yo‘naltirish yosh bosqichi va o‘quvchining rivojlanish ehtiyojiga moslashtirilishi kerak.',
      ),

      q(
        'm2t3-m27',
        'O‘quvchining qiziqishi bilan mehnat bozori talabi mos kelmasa, eng to‘g‘ri yondashuv qaysi?',
        [
          'Qiziqishni butunlay rad etish',
          'Bozor talabini e’tiborsiz qoldirish',
          'Mos variantlarni izlash va zarur kompetensiyalarni rivojlantirish',
          'O‘quvchining o‘rniga qaror qabul qilish',
        ],
        2,
        'Moslik izlash jarayonida qiziqish va real talab o‘rtasida rivojlanish imkoniyatlari topiladi.',
      ),

      q(
        'm2t3-m28',
        'Kasbiy yo‘naltirishda “hamkorlik modeli”ning eng muhim xususiyati qaysi?',
        [
          'Bitta subyekt barcha qarorni qabul qiladi',
          'Maktab, oila va tashqi hamkorlar o‘z vazifalarini birlashtiradi',
          'Ota-onalar jarayondan chetlashtiriladi',
          'Korxonalar faqat reklama uchun jalb qilinadi',
        ],
        1,
        'Tizimli kasbiy yo‘naltirish bir nechta subyektlarning o‘zaro to‘ldiruvchi faoliyatiga tayanadi.',
      ),

      q(
        'm2t3-m29',
        'Kasbiy yo‘naltirish monitoringida qaysi savol eng natijaviy hisoblanadi?',
        [
          'Nechta tadbir o‘tkazildi?',
          'Nechta surat joylandi?',
          'O‘quvchining kasbiy qarori va tayyorgarligida qanday o‘zgarish bo‘ldi?',
          'Nechta buklet tarqatildi?',
        ],
        2,
        'Monitoring natijaga qaratilganda o‘quvchidagi real o‘zgarish asosiy mezonga aylanadi.',
      ),

      q(
        'm2t3-m30',
        'Kasbga yo‘naltirishni boshqarishda direktor uchun eng to‘liq yondashuv qaysi?',
        [
          'Tadbirlar rejasini bajarish va hisobot yig‘ish',
          'Diagnostika, individual yo‘naltirish, amaliy hamkorlik va monitoringni yagona tizimga birlashtirish',
          'Faqat psixolog ishini nazorat qilish',
          'Faqat ishlab chiqarish bilan shartnoma tuzish',
        ],
        1,
        'Direktor kasbga yo‘naltirishning diagnostika, yo‘naltirish, hamkorlik va monitoring bo‘g‘inlarini tizimlashtirishi kerak.',
      ),
    ],

    /* =========================================================
       30 TA QIYIN
    ========================================================= */
    hard: [
      q(
        'm2t3-h01',
        'Maktabda kasbga yo‘naltirish bo‘yicha 20 ta tadbir o‘tkazildi, ammo o‘quvchilarning qiziqishi va keyingi yo‘nalishlari bo‘yicha ma’lumotlar mavjud emas. Direktor avvalo nimani o‘zgartirishi kerak?',
        [
          'Tadbirlar sonini 30 taga yetkazishi kerak',
          'Tadbirlar natijasini individual diagnostika va kuzatuv bilan bog‘lashi kerak',
          'Faqat ijtimoiy tarmoqlarda yoritishni kuchaytirishi kerak',
          'Kasbiy tadbirlarni sinf rahbarlariga to‘liq topshirishi kerak',
        ],
        1,
        'Faoliyat soni natijani kafolatlamaydi. Individual diagnostika va keyingi kuzatuv boshqaruv qarorini kuchaytiradi.',
      ),

      q(
        'm2t3-h02',
        'Psixolog o‘quvchining texnik sohalarga yuqori moyilligini aniqladi. Biroq o‘quvchi bu sohada real ish qanday kechishini bilmaydi. Eng kuchli boshqaruv qarori qaysi?',
        [
          'Natijani o‘zgarmas kasbiy hukm sifatida qabul qilish',
          'Diagnostika natijasini texnikum va korxonadagi amaliy tajriba bilan tekshirish',
          'O‘quvchini boshqa yo‘nalishga yo‘naltirish',
          'Faqat ota-onaning tanlovini kutish',
        ],
        1,
        'Diagnostika yo‘nalish beradi, amaliy tajriba esa qiziqish va real faoliyat talablarini solishtirish imkonini beradi.',
      ),

      q(
        'm2t3-h03',
        'Bir sinfda o‘quvchilarning kasbiy qiziqishlari keskin farq qiladi. Direktor bitta umumiy to‘garakni majburiy belgilash o‘rniga qanday modelni tanlashi maqsadga muvofiq?',
        [
          'Qiziqishlar xaritasi asosida bir nechta yo‘nalish va mos amaliy imkoniyatlarni shakllantirish',
          'Barcha o‘quvchilarni eng mashhur kasbga yo‘naltirish',
          'To‘garaklarni faqat akademik bahoga qarab taqsimlash',
          'Kasbiy yo‘naltirishni yuqori sinflargacha kechiktirish',
        ],
        0,
        'Individual qiziqishlar turlicha bo‘lsa, faoliyatni differensial tashkil etish samaraliroq.',
      ),

      q(
        'm2t3-h04',
        'Maktabda ota-onalar “farzandimizga qaysi kasb mosligini maktab belgilasin” deb murojaat qilmoqda. Direktorning professional javobi qaysi?',
        [
          'Maktab o‘quvchi uchun yakuniy kasbni belgilaydi',
          'Kasbiy tanlov diagnostika, maslahat, oila fikri va amaliy tajriba asosida o‘quvchining ongli qaroriga aylanishi kerak',
          'Kasbni ota-ona belgilashi eng xavfsiz yo‘l',
          'Kasbiy tanlov faqat baholarga asoslanadi',
        ],
        1,
        'Kasbga yo‘naltirishning vazifasi qarorni o‘quvchining o‘rniga qabul qilish emas, ongli tanlovga tayyorlashdir.',
      ),

      q(
        'm2t3-h05',
        'Maktab korxonaga ekskursiya tashkil etdi. O‘quvchilar ko‘rganlarini muhokama qilmasdan qaytishdi. Keyingi bosqich uchun eng to‘g‘ri yechim qaysi?',
        [
          'Ekskursiyalar sonini oshirish',
          'Ekskursiyadan oldingi tayyorgarlik va keyingi refleksiya hamda kasbiy tahlilni kiritish',
          'Ekskursiyalarni to‘xtatish',
          'O‘quvchilarga faqat korxona tarixi haqida ma’lumot berish',
        ],
        1,
        'Amaliy tashrifning pedagogik qiymati oldingi tayyorgarlik va keyingi tahlil bilan kuchayadi.',
      ),

      q(
        'm2t3-h06',
        'Maktabda 7–9-sinf o‘quvchilari bo‘yicha psixologik ma’lumotlar mavjud, ammo ular maslahatchi va ota-onalar bilan ishlashga ulanmagan. Tizimdagi asosiy uzilish qaysi?',
        [
          'Diagnostika natijalarini boshqaruv va yo‘naltirish qarorlariga integratsiya qilish mexanizmi yo‘q',
          'Psixologik testlar soni kam',
          'Ota-onalar soni ko‘p',
          'Kasblar haqidagi videolar yetarli emas',
        ],
        0,
        'Muammo diagnostika mavjudligida emas, undan keyingi hamkorlik va individual yo‘naltirish mexanizmining uzilishida.',
      ),

      q(
        'm2t3-h07',
        'O‘quvchining qiziqishi bir kasbga, mehnat bozori esa boshqa yo‘nalishga yuqori talab ko‘rsatmoqda. Direktorning pedagogik jihatdan eng maqbul pozitsiyasi qaysi?',
        [
          'Bozor talabini tanlab, o‘quvchi qiziqishini rad etish',
          'Qiziqishni saqlagan holda unga mos kompetensiyalar va yaqin kasbiy yo‘nalishlarni izlash',
          'O‘quvchining tanlovini butunlay ota-onaga topshirish',
          'Kasbiy maslahatni to‘xtatish',
        ],
        1,
        'Professional yo‘naltirish shaxsiy qiziqish va bozor imkoniyatlari o‘rtasida konstruktiv moslik izlaydi.',
      ),

      q(
        'm2t3-h08',
        'Kasbga yo‘naltirishda fan darslari, psixologik xizmat va korxona hamkorligi mavjud, biroq ular o‘zaro rejalashtirilmagan. Direktor qanday boshqaruv chorasi ko‘rishi kerak?',
        [
          'Har bir yo‘nalishni alohida qoldirish',
          'Umumiy maqsad, bosqich, mas’ul va natija indikatorlarini birlashtirgan tizim yaratish',
          'Faqat psixologni mas’ul qilish',
          'Tashqi hamkorlikni to‘xtatish',
        ],
        1,
        'Integratsiyalashgan boshqaruvda subyektlar umumiy natija va indikatorlar asosida ishlaydi.',
      ),

      q(
        'm2t3-h09',
        'Quyidagi ketma-ketliklardan qaysi biri kasbiy yo‘naltirishning rivojlantiruvchi modeli sifatida eng mantiqiy?',
        [
          'Targ‘ibot → qaror → diagnostika → amaliyot',
          'Diagnostika → individual tavsiya → amaliy tajriba → qayta tahlil',
          'Ekskursiya → yakuniy kasb → ota-ona roziligi',
          'Kasb nomi → reklama → sertifikat → tanlov',
        ],
        1,
        'Rivojlantiruvchi model diagnostikadan boshlanib, amaliy tajriba va qayta tahlil orqali takomillashadi.',
      ),

      q(
        'm2t3-h10',
        'Maktab kasbga yo‘naltirish samaradorligini “tadbirlar soni” bilan o‘lchamoqda. Qaysi indikatorlar tizimi metodik jihatdan kuchliroq?',
        [
          'Tadbirlar soni, postlar soni, bukletlar soni',
          'Qiziqish aniqligi, individual tavsiyalar, amaliy tajriba va keyingi yo‘nalishlar',
          'Yig‘ilishlar soni va qatnashuvchilar soni',
          'Video va fotosuratlar soni',
        ],
        1,
        'Natijaviy indikatorlar o‘quvchining kasbiy rivojlanishidagi real o‘zgarishni ko‘rsatishi kerak.',
      ),

      q(
        'm2t3-h11',
        '7–9-sinf o‘quvchilari uchun individual tavsiyalar ishlab chiqilgan. Biroq barcha tavsiyalar bir xil kasbiy yo‘nalishlarni ko‘rsatadi. Bu holat nimadan darak berishi mumkin?',
        [
          'Diagnostika natijalarining individual farqlarni aks ettirmayotganidan',
          'O‘quvchilarning barchasi bir xil qobiliyatli ekanidan',
          'Kasbiy yo‘naltirish juda muvaffaqiyatli ekanidan',
          'Texnikumlar soni kamligidan',
        ],
        0,
        'Bir xil natijalar individual diagnostika sifati va talqinini qayta ko‘rib chiqishni talab qilishi mumkin.',
      ),

      q(
        'm2t3-h12',
        'Kasbiy yo‘naltirishda “ota-ona fikri” va “o‘quvchi qiziqishi” qarama-qarshi kelmoqda. Eng maqbul pedagogik vosita qaysi?',
        [
          'Ota-onaning qarorini ustun qo‘yish',
          'O‘quvchi fikrini ota-onadan yashirish',
          'Dalillar, diagnostika va amaliy tajriba asosida birgalikdagi maslahat',
          'Masalani sinf rahbariga topshirish',
        ],
        2,
        'Hamkorlikdagi maslahat tomonlarning fikrini dalillar va o‘quvchi manfaatlari bilan muvofiqlashtiradi.',
      ),

      q(
        'm2t3-h13',
        'Maktab texnikum bilan hamkorlik qilmoqda, ammo faqat taqdimotlar o‘tkazilmoqda. Hamkorlikning keyingi sifat bosqichi qaysi?',
        [
          'Taqdimotlarni ko‘paytirish',
          'Amaliy mashg‘ulot va yo‘nalishlarga mos faoliyatni tashkil etish',
          'Faqat reklama materiallarini tarqatish',
          'Texnikum bilan aloqani maktab rahbariyatiga cheklash',
        ],
        1,
        'Hamkorlik axborotdan amaliy tajribaga o‘tganda kasbiy tayyorgarlik qiymati ortadi.',
      ),

      q(
        'm2t3-h14',
        'Maktabda kasbga yo‘naltirishning kuchli tomoni psixologik diagnostika, zaif tomoni esa amaliy tajriba ekanligi aniqlandi. Eng to‘g‘ri rivojlantirish strategiyasi qaysi?',
        [
          'Diagnostikani bekor qilish',
          'Diagnostika natijalarini texnikum va ishlab chiqarishdagi amaliy imkoniyatlarga bog‘lash',
          'Faqat yangi testlar sotib olish',
          'Kasbiy yo‘naltirishni faqat sinf soatlariga ko‘chirish',
        ],
        1,
        'Kuchli mavjud bo‘g‘inni saqlab, zaif bo‘g‘inni tizimga ulash samarali strategiyadir.',
      ),

      q(
        'm2t3-h15',
        'Kasbga yo‘naltirishda real ish muhiti bilan tanishgan o‘quvchi o‘z qiziqishi boshqa yo‘nalishga mosligini angladi. Bu natija qanday baholanadi?',
        [
          'Kasbiy yo‘naltirishdagi muvaffaqiyatsizlik',
          'Ongli tanlovni aniqlashtiruvchi ijobiy diagnostik natija',
          'O‘quvchining qobiliyatsizligi',
          'Maktabning noto‘g‘ri yo‘naltirgani',
        ],
        1,
        'Amaliy tajriba ba’zan avvalgi tasavvurni o‘zgartiradi; bu ongli tanlovning shakllanishidir.',
      ),

      q(
        'm2t3-h16',
        'Maktab maslahatchisi o‘quvchining qiziqishi va qobiliyatini biladi, ammo keyingi ta’lim imkoniyatlari haqida ma’lumot yetarli emas. Qaysi hamkorlik zarur?',
        [
          'Psixolog bilan diagnostikani takrorlash',
          'Texnikumlar, kasbiy markazlar va boshqa ta’lim subyektlari bilan axborot-amaliy hamkorlik',
          'Ota-onalardan mustaqil qaror olish',
          'Kasbga yo‘naltirishni to‘xtatish',
        ],
        1,
        'Individual ma’lumotni real ta’lim va kasbiy imkoniyatlar bilan bog‘lash uchun tashqi hamkorlik kerak.',
      ),

      q(
        'm2t3-h17',
        'Kasbga yo‘naltirishda barcha yosh bosqichlariga bir xil mazmun berishning asosiy xavfi nimada?',
        [
          'Tadbirlar kamayib ketishida',
          'Yoshga mos rivojlanish vazifalari e’tibordan chetda qolishida',
          'Psixologlar soni ortishida',
          'Texnikumlar bilan aloqa kuchayishida',
        ],
        1,
        'Kasbiy yo‘naltirish bosqichma-bosqich rivojlanadi; yoshga mos mazmun muhim.',
      ),

      q(
        'm2t3-h18',
        'Maktabda kasbga yo‘naltirish bo‘yicha ma’lumotlar ko‘p, ammo amaliy qarorlar kam. Boshqaruv nuqtai nazaridan asosiy muammo nima?',
        [
          'Axborotning qarorga aylantirilish mexanizmi yetarli emas',
          'Kasblar soni kam',
          'O‘quvchilar juda ko‘p',
          'Tadbirlar juda kam',
        ],
        0,
        'Ma’lumotlar boshqaruv qaroriga va individual faoliyatga ulanmasa, ularning amaliy qiymati pasayadi.',
      ),

      q(
        'm2t3-h19',
        'Maktabda ishlab chiqarish korxonasi bilan stajirovka yo‘lga qo‘yildi. Uning pedagogik samaradorligini baholash uchun qaysi mezon kuchliroq?',
        [
          'Necha nafar o‘quvchi borganligi',
          'O‘quvchining real ish talablari va o‘z qobiliyatlarini qayta baholay olishi',
          'Korxona logotipi tushirilgan materiallar soni',
          'Ekskursiya fotosuratlari soni',
        ],
        1,
        'Stajirovkaning pedagogik qiymati tajribaning o‘quvchida qanday kasbiy anglash hosil qilgani bilan belgilanadi.',
      ),

      q(
        'm2t3-h20',
        'Kasbga yo‘naltirishda “kasbiy targ‘ibot” va “kasbiy yo‘naltirish” o‘rtasidagi asosiy farq qaysi?',
        [
          'Targ‘ibot axborot va qiziqish uyg‘otadi, yo‘naltirish esa individual tanlovga tayyorlaydi',
          'Ikkalasi mazmunan mutlaqo bir xil',
          'Yo‘naltirish faqat reklama bilan amalga oshadi',
          'Targ‘ibot diagnostikadan keyin ham kerak emas',
        ],
        0,
        'Targ‘ibot yo‘nalishni tanishtiradi, yo‘naltirish esa individual xususiyatlar va amaliy imkoniyatlarni bog‘laydi.',
      ),

      q(
        'm2t3-h21',
        'Quyidagi qarorlardan qaysi biri maktabning kasbga yo‘naltirish tizimini “tadbirlar yig‘indisi”dan “boshqaruv tizimi”ga aylantiradi?',
        [
          'Yillik tadbirlar sonini oshirish',
          'Har bir bosqich uchun maqsad, mas’ul, indikator va keyingi amaliy choralarni belgilash',
          'Ko‘proq videorolik tayyorlash',
          'Faqat yakuniy hisobotni yaxshilash',
        ],
        1,
        'Boshqaruv tizimi aniq maqsad, mas’uliyat, indikator va keyingi harakatlar bilan ishlaydi.',
      ),

      q(
        'm2t3-h22',
        'O‘quvchining qiziqishi yuqori, ammo kerakli kompetensiyasi past. Kasbiy yo‘naltirishda eng maqbul qaror qaysi?',
        [
          'Kasbni darhol rad etish',
          'Qiziqishni saqlagan holda zarur kompetensiyalarni rivojlantirish rejasini tuzish',
          'O‘quvchiga boshqa kasbni majburan tanlatish',
          'Diagnostikani bekor qilish',
        ],
        1,
        'Qiziqish rivojlanish uchun resurs bo‘lishi mumkin; kompetensiyalar esa maqsadli faoliyat orqali shakllantiriladi.',
      ),

      q(
        'm2t3-h23',
        'Kasbiy yo‘naltirishda o‘quvchining “qobiliyati”ni aniqlashning o‘zi yetarlimi?',
        [
          'Ha, kasbiy tanlov shu bilan yakunlanadi',
          'Yo‘q, qobiliyat qiziqish, shaxsiy xususiyat va real kasbiy talablar bilan birga talqin qilinadi',
          'Ha, ota-ona fikri kerak emas',
          'Yo‘q, qobiliyatning umuman ahamiyati yo‘q',
        ],
        1,
        'Kasbiy moslik kompleks yondashuvni talab qiladi.',
      ),

      q(
        'm2t3-h24',
        'Maktabda kasbiy yo‘naltirish bo‘yicha turli subyektlar faoliyatini birlashtirish uchun qaysi vosita eng samarali?',
        [
          'Umumiy maqsad va hamkorlik rejasi',
          'Faqat yakuniy yig‘ilish',
          'Faqat ijtimoiy tarmoq guruhi',
          'Faqat direktorning og‘zaki topshirig‘i',
        ],
        0,
        'Hamkorlik rejasi vazifalar, muddatlar va mas’uliyatni muvofiqlashtirish imkonini beradi.',
      ),

      q(
        'm2t3-h25',
        'Kasbiy yo‘naltirishda o‘quvchining mustaqil qaror qabul qilishini qo‘llab-quvvatlash nima uchun muhim?',
        [
          'Mas’uliyatni maktabdan olib tashlash uchun',
          'O‘quvchining tanlov jarayonida faol subyekt bo‘lishini ta’minlash uchun',
          'Ota-onalarni jarayondan chiqarish uchun',
          'Diagnostika zaruratini kamaytirish uchun',
        ],
        1,
        'O‘quvchi kasbiy tanlovning faol subyekti bo‘lishi kerak.',
      ),

      q(
        'm2t3-h26',
        'Maktabda kasbiy yo‘naltirish natijalarini har yarim yilda qayta ko‘rib chiqishning asosiy maqsadi nima?',
        [
          'O‘quvchilarning dastlabki qiziqishlari o‘zgargan yoki aniqlashganini hisobga olish',
          'Avvalgi tavsiyalarni avtomatik tasdiqlash',
          'Yangi tadbirlar sonini ko‘paytirish',
          'Psixologik diagnostikani bekor qilish',
        ],
        0,
        'Kasbiy qiziqish va rejalarda vaqt davomida o‘zgarish bo‘lishi mumkin, shuning uchun qayta tahlil zarur.',
      ),

      q(
        'm2t3-h27',
        'Kasbga yo‘naltirishda maktab, oila, texnikum va korxona hamkorligining kuchli jihati nimada?',
        [
          'Har bir subyekt o‘quvchi uchun bir xil qaror qabul qiladi',
          'O‘quvchi haqida turli muhitlardan olingan ma’lumotlar yagona yo‘nalishga birlashadi',
          'Maktabning mas’uliyati butunlay kamayadi',
          'Kasbiy tanlov avtomatlashtiriladi',
        ],
        1,
        'Turli subyektlarning ma’lumotlari o‘quvchi rivojlanishini kompleks ko‘rishga yordam beradi.',
      ),

      q(
        'm2t3-h28',
        'Kasbiy yo‘naltirishda real ish muhiti bilan tanishtirishning chegarasi nimada?',
        [
          'U barcha o‘quvchilarni aynan shu korxonada ishlashga majbur qilmaydi',
          'U kasbiy tanlovni to‘liq bekor qiladi',
          'U faqat yuqori baholilar uchun kerak',
          'U psixologik diagnostikani almashtiradi',
        ],
        0,
        'Amaliy tajriba tanlovni asoslashga xizmat qiladi, lekin o‘quvchi nomidan yakuniy qaror qilmaydi.',
      ),

      q(
        'm2t3-h29',
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
        'm2t3-h30',
        'Direktor kasbga yo‘naltirish tizimida eng avvalo qaysi savolni berishi kerak?',
        [
          'Nechta tadbir o‘tkazdik?',
          'Qaysi o‘quvchida qanday o‘zgarish va keyingi kasbiy yo‘nalish shakllandi?',
          'Nechta post joyladik?',
          'Nechta mehmon taklif qildik?',
        ],
        1,
        'Strategik boshqaruv faoliyat hajmini emas, o‘quvchidagi natijani markazga qo‘yadi.',
      ),
    ],

    /* =========================================================
       10 TA KEYS
    ========================================================= */
    case: [
      q(
        'm2t3-c01',
        `128-sonli maktabda 7–9-sinflar bilan kasbga yo‘naltirish bo‘yicha tahlil o‘tkazildi. Kasblar haqida uchrashuvlar va videoroliklar mavjud, ammo individual qiziqish va qobiliyatlar yetarli o‘rganilmagan. Psixolog ayrim o‘quvchilarda kasbiy moyillik borligini aniqlagan, lekin bu ma’lumotlar ota-onalar va maktab maslahatchisi bilan tizimli ishlanmagan. Korxonalar bilan hamkorlik esa tanishtiruv darajasida qolgan.

Direktor tizimni qayta tashkil etmoqchi. Qaysi qaror eng to‘liq boshqaruv yechimi hisoblanadi?`,
        [
          'Tadbirlar sonini oshirib, diagnostikani keyingi bosqichga qoldirish',
          'Diagnostika natijalarini individual tavsiya, ota-ona hamkorligi va amaliy korxona tajribasi bilan bog‘lash',
          'Kasbga yo‘naltirishni faqat fan darslari orqali olib borish',
          'Barcha o‘quvchilarni bir xil amaliy yo‘nalishga jalb qilish',
        ],
        1,
        'Vaziyatdagi asosiy muammo axborot emas, diagnostika, hamkorlik va amaliy yo‘naltirish o‘rtasidagi uzilishdir.',
      ),

      q(
        'm2t3-c02',
        `97-sonli maktabda o‘quvchilarning ayrim kasbiy qiziqishlari aniqlangan, biroq ota-onalar bilan muntazam maslahatlashuv yo‘q. Texnikum va korxonalar bilan amaliy aloqa ham sust. Direktor psixolog, maktab maslahatchisi, ota-onalar va tashqi hamkorlarni yagona tizimga birlashtirishni rejalashtirmoqda.

Qaysi chora vaziyatga eng mos?`,
        [
          'Psixologik diagnostikani saqlab, individual tavsiyalarni hamkorlar va ota-onalar bilan muhokama qilish hamda amaliy tajribani kengaytirish',
          'Umumiy videoroliklar sonini ko‘paytirib, individual ishlarni keyinga qoldirish',
          'Kasbiy tanlovni ota-onalar yig‘ilishida umumiy tarzda hal qilish',
          'O‘quvchilarni faqat akademik baholar asosida yo‘naltirish',
        ],
        0,
        'Vaziyat diagnostika, hamkorlik va amaliy tajribani yagona yo‘nalishga birlashtirishni talab qiladi.',
      ),

      q(
        'm2t3-c03',
        `92-sonli maktabda kasblar haqida ma’lumotlar yetarli. Biroq o‘quvchilarning individual qiziqishi va qobiliyati kam o‘rganilgan, texnikum va ishlab chiqarish bilan amaliy aloqa sust. Psixolog ayrim o‘quvchilarda aniq kasbiy moyillik borligini bildirgan.

Direktor uchun eng to‘g‘ri strategik yondashuv qaysi?`,
        [
          'Kasblar haqidagi axborotni yanada ko‘paytirish',
          'Targ‘ibot tadbirlarini asosiy natija deb baholash',
          'Individual diagnostika, hamkorlik va amaliy tajribani yagona kasbiy yo‘naltirish tizimiga birlashtirish',
          'Kasbiy yo‘naltirishni faqat 11-sinfda kuchaytirish',
        ],
        2,
        'Muammo axborot yetishmasligida emas, axborotning individual va amaliy yo‘nalishga ulanmaganidadir.',
      ),

      q(
        'm2t3-c04',
        `114-sonli maktabda kasblar haqida uchrashuvlar muntazam o‘tkaziladi. Psixolog esa o‘quvchilarning texnik, ijodiy va ijtimoiy yo‘nalishlarga moyilligi turlicha ekanini aniqlagan. Lekin natijalar ota-onalar va maktab maslahatchisi bilan tizimli muhokama qilinmaydi. Texnikum va korxonalar bilan aloqa ham asosan tanishtiruv shaklida.

Quyidagi xulosalardan qaysi biri to‘g‘ri?`,
        [
          'Axborot berish yetarli, amaliy hamkorlik ikkinchi darajali',
          'Individual diagnostika natijalari keyingi yo‘naltirish va amaliy tajribaga aylantirilishi kerak',
          'O‘quvchilarning qiziqishlari yoshga qarab bir xil bo‘lishi kerak',
          'Ota-onalar kasbiy yo‘naltirish jarayonida ishtirok etmasligi ma’qul',
        ],
        1,
        'Vaziyatda asosiy boshqaruv vazifasi aniqlangan qiziqishlarni real rivojlanish imkoniyatlariga ulashdir.',
      ),

      q(
        'm2t3-c05',
        `105-sonli maktabda kasblar haqida targ‘ibot olib boriladi. O‘quvchilar nazariy ma’lumotlarga ega, ammo real ish muhiti va mehnat bozori talablari haqida tasavvurlari sust. Psixologik diagnostika, ota-onalar bilan maslahat va texnikum-korxonalar bilan amaliy hamkorlik yetarli emas.

Direktorning qaysi qarori tizimni eng ko‘p rivojlantiradi?`,
        [
          'Targ‘ibot materiallarini ko‘paytirish',
          'Kasbiy yo‘naltirishni diagnostika, individual maslahat, ota-ona hamkorligi va amaliy tajriba asosida qayta qurish',
          'Kasbiy yo‘naltirishni sinf soatlariga qisqartirish',
          'Faqat yuqori baholi o‘quvchilar uchun kasbiy tadbirlar tashkil etish',
        ],
        1,
        'Vaziyat kompleks tizimni talab qiladi: diagnostika, maslahat, oila va real kasbiy muhit bir-birini to‘ldirishi kerak.',
      ),

      q(
        'm2t3-c06',
        `Bir maktabda diagnostika natijasida 8-sinf o‘quvchilarining uchta asosiy qiziqish guruhi aniqlandi: texnik, ijodiy va ijtimoiy. Maktabda esa barcha o‘quvchilar uchun bitta kasbiy to‘garak mavjud. Direktor qanday qaror qilishi kerak?`,
        [
          'Bitta to‘garakni saqlab, barcha o‘quvchilarni unga jalb qilish',
          'Qiziqish guruhlariga mos yo‘nalishlarni bosqichma-bosqich tashkil etish va natijalarni kuzatish',
          'To‘garaklarni faqat yuqori baholilarga berish',
          'Kasbiy qiziqishlarni keyingi sinflargacha hisobga olmaslik',
        ],
        1,
        'Diagnostika natijasidagi farqlar differensial faoliyat va mos imkoniyatlarni talab qiladi.',
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
        'Kasbiy yo‘naltirishda real vaziyat va loyiha o‘quvchiga kasbning mazmunini faoliyat orqali anglash imkonini beradi.',
      ),

      q(
        'm2t3-c08',
        `Maktabda o‘quvchilarning qiziqishi bo‘yicha ma’lumotlar bor, lekin ular bir yil oldingi natijalarga asoslangan. Ayrim o‘quvchilar yangi yo‘nalishlarga qiziqa boshlagan. Direktor tizimni yangilashni rejalashtirmoqda.

Qaysi qaror eng maqbul?`,
        [
          'Eski diagnostika natijalarini o‘zgartirmasdan qo‘llash',
          'Yangi qiziqishlarni qayta aniqlash, oldingi natijalar bilan solishtirish va individual yo‘nalishlarni yangilash',
          'Barcha o‘quvchilarga avvalgi tavsiyani saqlab qolish',
          'Diagnostikani faqat bitiruvchilar bilan o‘tkazish',
        ],
        1,
        'Kasbiy qiziqishlar rivojlanishi mumkin, shuning uchun diagnostika va individual yo‘nalish vaqti-vaqti bilan yangilanadi.',
      ),

      q(
        'm2t3-c09',
        `Maktabda ota-onalar farzandlarini yuqori daromadli kasblarga yo‘naltirmoqda, ayrim o‘quvchilarning qiziqishi esa boshqa sohalarga mos. Direktor nizoni kuchaytirmasdan kasbiy yo‘naltirishni davom ettirmoqchi.

Eng to‘g‘ri yondashuv qaysi?`,
        [
          'Ota-onaning tanlovini avtomatik qabul qilish',
          'O‘quvchining qiziqishini hamma holatda ustun qo‘yish',
          'Diagnostika, mehnat bozori ma’lumotlari, amaliy tajriba va oilaviy suhbat asosida ongli tanlovni shakllantirish',
          'Masalani o‘quvchining o‘ziga topshirib, maktabni jarayondan chiqarish',
        ],
        2,
        'Kasbiy tanlovda turli manfaat va ma’lumotlarni muvozanatlashtirish hamkorlikdagi maslahat orqali amalga oshiriladi.',
      ),

      q(
        'm2t3-c10',
        `Maktab rahbariyati kasbga yo‘naltirishning yangi modelini joriy qilmoqchi. Modelda maktab psixologi individual xususiyatlarni aniqlaydi, maslahatchi o‘quvchi tashabbuslarini qo‘llab-quvvatlaydi, texnikum kasbiy tayyorgarlik imkoniyatlarini ochadi, korxona esa real ish tajribasini beradi.

Ushbu modelning eng muhim ustunligi nimada?`,
        [
          'Barcha qarorlarni tashqi hamkorlar qabul qiladi',
          'Kasbga yo‘naltirishning turli bo‘g‘inlari yagona o‘quvchi rivojlanish maqsadiga xizmat qiladi',
          'Psixologik xizmatning vazifasi kamayadi',
          'Maktabning mas’uliyati tashqi tashkilotlarga o‘tadi',
        ],
        1,
        'Modelning kuchi subyektlarni birlashtirish va ularning turli imkoniyatlarini o‘quvchi rivojlanishiga yo‘naltirishdadir.',
      ),
    ],
  ],
}
