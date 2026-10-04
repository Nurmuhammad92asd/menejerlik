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

export const M2T5_LEVELS: LevelSet = {
  // =========================================================
  // 30 TA OSON
  // =========================================================
  easy: [
    q(
      'm2t5-e01',
      'Bola xavfsizligi tushunchasining eng to‘g‘ri mazmuni qaysi?',
      [
        'Bolaning jismoniy, ruhiy va ijtimoiy jihatdan himoyalangan muhitda bo‘lishi',
        'Bolaning faqat maktab hududida bo‘lishi',
        'Bolaning faqat yuqori baho olishi',
        'Bolaning barcha topshiriqlarni vaqtida bajarishi',
      ],
      0,
      'Bola xavfsizligi jismoniy himoya bilan cheklanmaydi; ruhiy va ijtimoiy xavfsizlik ham muhim.',
    ),

    q(
      'm2t5-e02',
      '“Zo‘ravonlikka nol toqat” tamoyili nimani anglatadi?',
      [
        'Faqat og‘ir zo‘ravonlik holatlariga chora ko‘rishni',
        'Zo‘ravonlikning har qanday ko‘rinishiga befarq bo‘lmaslik va belgilangan tartibda javob berishni',
        'Barcha nizolar uchun bir xil jazo berishni',
        'Muammolarni jamoatchilikka oshkor qilishni',
      ],
      1,
      'Nol toqat har qanday zo‘ravonlik signalini jiddiy qabul qilishni anglatadi.',
    ),

    q(
      'm2t5-e03',
      'Bullingning muhim belgilaridan biri qaysi?',
      [
        'Faqat bir martalik kelishmovchilik',
        'O‘qituvchining tanbehi',
        'Takroriy bosim yoki tazyiqning mavjudligi',
        'Oddiy do‘stona bahs',
      ],
      2,
      'Bulling odatda takroriy tazyiq, bosim yoki kamsitish bilan tavsiflanadi.',
    ),

    q(
      'm2t5-e04',
      'Erta aniqlashning asosiy maqsadi nima?',
      [
        'Muammo yuzaga kelgandan keyin jazo berish',
        'Faqat ota-onani ogohlantirish',
        'Faqat hujjatlarni to‘ldirish',
        'Xavf belgilarini salbiy oqibat chuqurlashishidan oldin aniqlash',
      ],
      3,
      'Erta aniqlash profilaktik boshqaruvning asosiy vositalaridan biridir.',
    ),

    q(
      'm2t5-e05',
      'SOPning asosiy vazifasi nima?',
      [
        'Zo‘ravonlik holatida standart va ketma-ket harakatlarni belgilash',
        'Faqat jazo choralarini belgilash',
        'Faqat direktorning vakolatini oshirish',
        'Faqat psixolog faoliyatini tartibga solish',
      ],
      0,
      'SOP vaziyatda kim, qachon va qanday harakat qilishini izchil belgilaydi.',
    ),

    q(
      'm2t5-e06',
      'Zo‘ravonlik holatida birinchi navbatdagi ustuvor vazifa qaysi?',
      [
        'Hisobot yozish',
        'Bolaning xavfsizligini ta’minlash',
        'Ota-onalar guruhiga xabar berish',
        'Aybdorni jazolash',
      ],
      1,
      'Har qanday holatda bolaning bevosita xavfsizligi birinchi o‘rinda turadi.',
    ),

    q(
      'm2t5-e07',
      'Psixologik farovonlik nimani anglatadi?',
      [
        'Faqat yuqori baholarni',
        'Faqat jismoniy sog‘lomlikni',
        'Bolaning o‘zini xavfsiz, qadrlangan va qo‘llab-quvvatlangan his qilishini',
        'Faqat ko‘p do‘stlarga ega bo‘lishni',
      ],
      2,
      'Psixologik farovonlik xavfsiz va qo‘llab-quvvatlovchi muhit bilan bog‘liq.',
    ),

    q(
      'm2t5-e08',
      'Kiberbulling qaysi muhitda sodir bo‘ladi?',
      [
        'Faqat sport maydonida',
        'Faqat dars vaqtida',
        'Faqat maktab oshxonasida',
        'Raqamli va onlayn kommunikatsiya muhitida',
      ],
      3,
      'Kiberbulling internet, messenjerlar, ijtimoiy tarmoqlar va boshqa raqamli muhitlarda sodir bo‘ladi.',
    ),

    q(
      'm2t5-e09',
      'Diskriminatsiyaga qarshi yondashuvning asosiy maqsadi nima?',
      [
        'Teng huquq va imkoniyatlarni ta’minlash',
        'Barcha bolalarga mutlaqo bir xil sharoit yaratish',
        'Maxsus ehtiyojli bolalarni ajratish',
        'Faqat akademik natijalarni oshirish',
      ],
      0,
      'Tenglik va adolatli imkoniyat diskriminatsiyaga qarshi yondashuvning asosidir.',
    ),

    q(
      'm2t5-e10',
      'Maxsus ehtiyojli o‘quvchi uchun teng imkoniyatni ta’minlashda nima muhim?',
      [
        'Faqat bir xil talab qo‘yish',
        'Moslashtirilgan muhit va individual qo‘llab-quvvatlash',
        'Uni boshqa o‘quvchilardan ajratish',
        'Faqat ota-onaga vazifa yuklash',
      ],
      1,
      'Teng imkoniyat ehtiyojga mos muhit va qo‘llab-quvvatlashni nazarda tutadi.',
    ),

    q(
      'm2t5-e11',
      'Uch tomonlama hamkorlik kimlar o‘rtasida amalga oshiriladi?',
      [
        'Direktor, xo‘jalik mudiri va o‘qituvchi',
        'Faqat ota-ona va o‘qituvchi',
        'Bola, ota-ona va maktab',
        'Faqat psixolog va sinf rahbari',
      ],
      2,
      'Bola manfaatlari uchun bola, ota-ona va maktab hamkorligi muhim.',
    ),

    q(
      'm2t5-e12',
      'Maxfiylik tamoyili nimani talab qiladi?',
      [
        'Muammoni barcha xodimlarga aytishni',
        'Barcha ota-onalarni xabardor qilishni',
        'Holatni sinf oldida muhokama qilishni',
        'Sezgir ma’lumotlarni faqat zarur vakolatli shaxslar doirasida saqlashni',
      ],
      3,
      'Bola haqidagi sezgir ma’lumotlar himoyalangan bo‘lishi kerak.',
    ),

    q(
      'm2t5-e13',
      'Favqulodda vaziyat mashg‘ulotining asosiy maqsadi nima?',
      [
        'To‘g‘ri va tezkor harakat ko‘nikmasini shakllantirish',
        'Faqat hujjat tayyorlash',
        'O‘quvchilarni qo‘rqitish',
        'Faqat rahbarlarni tekshirish',
      ],
      0,
      'Mashg‘ulot amaliy tayyorgarlik va tezkor harakatni shakllantiradi.',
    ),

    q(
      'm2t5-e14',
      'Xavf monitoringining asosiy maqsadi nima?',
      [
        'Jazo sonini oshirish',
        'Xavf belgilarini kuzatish va boshqaruv qarorlarini yaxshilash',
        'Faqat hisobot tayyorlash',
        'Faqat direktor faoliyatini baholash',
      ],
      1,
      'Monitoring ma’lumotlari xavfni boshqarish va profilaktik qarorlar uchun ishlatiladi.',
    ),

    q(
      'm2t5-e15',
      'Bolaning darsga qiziqishi keskin pasayib, yopiqligi ortdi. Bu nimaga signal bo‘lishi mumkin?',
      [
        'Faqat dangasalikka',
        'Faqat past o‘zlashtirishga',
        'Psixologik yoki ijtimoiy xavfga',
        'Faqat intizomsizlikka',
      ],
      2,
      'Xulq va faollikdagi keskin o‘zgarishlar xavf indikatori bo‘lishi mumkin.',
    ),

    q(
      'm2t5-e16',
      'Zo‘ravonlik haqida murojaat kelganda nima qilinmasligi kerak?',
      [
        'Bolaning xavfsizligini ta’minlash',
        'Vaziyatni ehtiyotkorlik bilan baholash',
        'Kerakli tartibda qayd etish',
        'Holatni omma oldida muhokama qilish',
      ],
      3,
      'Ochiq muhokama maxfiylik va bolaning xavfsizligiga zarar yetkazishi mumkin.',
    ),

    q(
      'm2t5-e17',
      'Rahbarning bola xavfsizligi bo‘yicha asosiy roli qaysi?',
      [
        'Xavfsiz tizimni tashkil etish va javobgarlikni muvofiqlashtirish',
        'Barcha ishni psixologga topshirish',
        'Faqat jazo qo‘llash',
        'Faqat hujjatlarni imzolash',
      ],
      0,
      'Rahbar tizim, mas’uliyat, monitoring va hamkorlikni muvofiqlashtiradi.',
    ),

    q(
      'm2t5-e18',
      '“Bola manfaatlari ustuvorligi” tamoyili nimani bildiradi?',
      [
        'Faqat bolaning xohishini bajarish',
        'Qarorlarda bolaning xavfsizligi, huquqi va farovonligini markazga qo‘yish',
        'Barcha holatda ota-ona qarorini ustun qo‘yish',
        'Bolaning akademik natijasini birinchi o‘ringa qo‘yish',
      ],
      1,
      'Bola manfaatlari qarorlarning xavfsizlik, huquq va farovonlik jihatidan baholanishini talab qiladi.',
    ),

    q(
      'm2t5-e19',
      'Sinfdagi muntazam mazax va kamsitish aniqlansa, eng to‘g‘ri yondashuv qaysi?',
      [
        'Buni bolalar o‘rtasidagi oddiy hazil deb qabul qilish',
        'Faqat jabrlanuvchini boshqa sinfga o‘tkazish',
        'Holatni jiddiy qabul qilib, xavfsizlik va profilaktika choralarini boshlash',
        'Hech qanday aralashmaslik',
      ],
      2,
      'Takroriy mazax va kamsitish xavfsizlik muammosi sifatida ko‘rilishi kerak.',
    ),

    q(
      'm2t5-e20',
      'Dalillarni hujjatlashtirishdan asosiy maqsad nima?',
      [
        'Vaziyatni ishonchli qayd etish va keyingi choralarni asoslash',
        'Aybdorni omma oldida sharmanda qilish',
        'Hisobotlar sonini ko‘paytirish',
        'Ota-onalarni qo‘rqitish',
      ],
      0,
      'Hujjatlashtirish faktlarni saqlash va keyingi boshqaruv qarorlarini asoslashga xizmat qiladi.',
    ),

    q(
      'm2t5-e21',
      'Bola xavfsizligi va farovonligi o‘rtasidagi munosabat qanday?',
      [
        'Ular bir-biriga aloqasiz',
        'Xavfsiz muhit farovonlikning muhim shartlaridan biridir',
        'Faqat farovonlik xavfsizlikni ta’minlaydi',
        'Faqat jismoniy xavfsizlik muhim',
      ],
      1,
      'Xavfsizlik va farovonlik o‘zaro bog‘liq bo‘lib, xavfsiz muhit bolaning rivojlanishiga yordam beradi.',
    ),

    q(
      'm2t5-e22',
      'Erta xavf belgilarini kuzatishda qaysi yondashuv samaraliroq?',
      [
        'Faqat bir martalik kuzatuv',
        'Faqat imtihon natijalariga qarash',
        'Turli manbalardan ma’lumotlarni muntazam tahlil qilish',
        'Faqat ota-onalar shikoyatini kutish',
      ],
      2,
      'Tizimli va muntazam kuzatuv xavfni erta aniqlash imkonini oshiradi.',
    ),

    q(
      'm2t5-e23',
      'Maktabda xavfsizlik madaniyatining muhim belgisi qaysi?',
      [
        'Ko‘p sonli jazolar',
        'Muammolarni yashirish',
        'Faqat qat’iy intizom',
        'Bolalar va xodimlarning xavfsiz murojaat qila olishi',
      ],
      3,
      'Xavfsiz muhitda muammoni xabar qilish imkoniyati va ishonch mavjud bo‘ladi.',
    ),

    q(
      'm2t5-e24',
      'Kiberxavfsizlik bo‘yicha o‘quvchilar uchun nima muhim?',
      [
        'Raqamli gigiyena, xavfsiz muloqot va murojaat qilish tartibini bilish',
        'Telefonlardan foydalanishni butunlay taqiqlash',
        'Faqat parolni tez-tez almashtirish',
        'Faqat ota-onaning nazorati',
      ],
      0,
      'Raqamli xavfsizlik bilim, odat va murojaat mexanizmlarining uyg‘unligini talab qiladi.',
    ),

    q(
      'm2t5-e25',
      'Maktabda xavfsizlik bo‘yicha javobgarlik qanday tashkil etilishi kerak?',
      [
        'Faqat direktor zimmasida bo‘lishi',
        'Vazifalar va mas’uliyatlar aniq taqsimlangan tizim asosida',
        'Faqat sinf rahbarlari zimmasida',
        'Faqat psixolog zimmasida',
      ],
      1,
      'Samarali tizimda rollar va mas’uliyatlar oldindan aniq belgilanadi.',
    ),

    q(
      'm2t5-e26',
      'Zo‘ravonlik holatidan keyingi kuzatuvning vazifasi nima?',
      [
        'Aybdorni doimiy nazorat qilish',
        'Hujjatlarni ko‘paytirish',
        'Bolaning holatini va takroriy xavf ehtimolini kuzatish',
        'Faqat ota-onani tekshirish',
      ],
      2,
      'Keyingi monitoring bolaning tiklanishi va takroriy xavfni kamaytirishga qaratiladi.',
    ),

    q(
      'm2t5-e27',
      'Maktab rahbari xavfsizlik qarorini qaysi ma’lumotlarga asoslagani ma’qul?',
      [
        'Faqat shaxsiy taxminga',
        'Faqat bitta xodim fikriga',
        'Faqat bolaning baholariga',
        'Ishonchli faktlar, kuzatuvlar va tegishli ma’lumotlar tahliliga',
      ],
      3,
      'Dalillarga asoslangan boshqaruv subyektiv taxminlardan ko‘ra ishonchliroqdir.',
    ),

    q(
      'm2t5-e28',
      'Maktabda xavfsizlik qoidalari bo‘lishining o‘zi nima uchun yetarli emas?',
      [
        'Ularni amaliyotga joriy qilish, tushuntirish va monitoring qilish ham zarur',
        'Qoidalar faqat direktor uchun kerak',
        'Qoidalar faqat hujjat sifatida saqlanadi',
        'Qoidalar o‘quvchilarga tegishli emas',
      ],
      0,
      'Qoidaning samarasi uni bilish, bajarish va nazorat qilish mexanizmi bilan belgilanadi.',
    ),

    q(
      'm2t5-e29',
      'Maktabda xavfsizlik bo‘yicha muammo takrorlanayotgan bo‘lsa, rahbar nimani aniqlashi kerak?',
      [
        'Faqat aybdorni',
        'Muammoning sabab va tizimli omillarini',
        'Faqat sinf rahbarini',
        'Faqat ota-onani',
      ],
      1,
      'Takroriy muammoni bartaraf etish uchun uning ildiz sabablari aniqlanadi.',
    ),

    q(
      'm2t5-e30',
      'Bola xavfsizligi tizimining yakuniy maqsadi nima?',
      [
        'Jazo choralarini ko‘paytirish',
        'Hisobotlarni ko‘paytirish',
        'Xavfsiz, inklyuziv va farovon ta’lim muhitini ta’minlash',
        'Faqat maktab imijini yaxshilash',
      ],
      2,
      'Tizimning asosiy maqsadi bola uchun xavfsiz va rivojlantiruvchi ta’lim muhitini yaratishdir.',
    ),
  ],

  // =========================================================
  // 30 TA O‘RTA
  // =========================================================
  medium: [
    q(
      'm2t5-m01',
      'O‘quvchi so‘nggi bir oyda dars qoldirishni ko‘paytirdi va tengdoshlari bilan muloqotdan qochmoqda. Direktorning eng to‘g‘ri birinchi qadami qaysi?',
      [
        'Darhol intizomiy chora ko‘rish',
        'Belgilarni xavf indikatori sifatida ko‘rib, vaziyatni maxfiy o‘rganish',
        'Sinf oldida sababini so‘rash',
        'Ota-onaga ayb qo‘yish',
      ],
      1,
      'Davomat va xulqdagi birgalikdagi o‘zgarishlar erta xavf belgisi bo‘lishi mumkin.',
    ),

    q(
      'm2t5-m02',
      'Direktor zo‘ravonlik bo‘yicha murojaat oldi. Bola hozircha xavfsiz, ammo holat tafsilotlari noma’lum. Keyingi eng maqbul qadam nima?',
      [
        'Vaziyatni barcha o‘quvchilar bilan muhokama qilish',
        'Darhol aybdorni e’lon qilish',
        'Qisqa xavf baholashini o‘tkazib, zarur dalillarni maxfiy tartibda yig‘ish',
        'Murojaatni keyingi pedagogik kengashgacha qoldirish',
      ],
      2,
      'Xavf darajasi aniqlanib, dalillar maxfiy tartibda to‘planadi.',
    ),

    q(
      'm2t5-m03',
      'O‘quvchining telefoniga tahdidli xabarlar kelmoqda. Xabarlarni o‘chirib yuborishdan oldin nima qilish kerak?',
      [
        'Ularni boshqa o‘quvchilarga yuborish',
        'Dalillarni saqlab, bolaning xavfsizligini ta’minlash',
        'Telefonni sinfga ko‘rsatish',
        'Chatni hammaga ochish',
      ],
      1,
      'Raqamli dalillar keyingi baholash uchun muhim bo‘lishi mumkin.',
    ),

    q(
      'm2t5-m04',
      'Bir sinfda o‘quvchilar o‘rtasidagi mazax holatlari muntazam takrorlanmoqda. Direktor qanday yondashuvni tanlashi kerak?',
      [
        'Faqat eng faol o‘quvchini jazolash',
        'Barcha o‘quvchilarni bir xil jazolash',
        'Sinf muhitini tahlil qilish, xavf guruhlarini aniqlash va profilaktik chora ishlab chiqish',
        'Muammoni e’tiborsiz qoldirish',
      ],
      2,
      'Takroriy holat individual emas, sinf muhitidagi tizimli muammoni ham ko‘rsatishi mumkin.',
    ),

    q(
      'm2t5-m05',
      'Maxsus ehtiyojli bola maktabga jismoniy kirishi mumkin, lekin dars jarayonida materiallardan foydalana olmayapti. Qaysi yondashuv to‘g‘ri?',
      [
        'Kirish imkoniyati yetarli deb hisoblash',
        'Bolaning ehtiyojiga mos pedagogik va texnik moslashtirishlarni ko‘rib chiqish',
        'Uni alohida xonada o‘qitish',
        'Faqat ota-onaga vazifa berish',
      ],
      1,
      'Inklyuziya faqat binoga kirish emas, ta’lim jarayonida real ishtirok etishni ham anglatadi.',
    ),

    q(
      'm2t5-m06',
      'Ota-ona maktabda bolaning boshqa o‘quvchilar tomonidan muntazam mazax qilinayotganini bildirdi. Direktorning birinchi boshqaruv vazifasi nima?',
      [
        'Ota-onani tinchlantirib, masalani yopish',
        'Bolaning xavfsizligini va holatni dastlabki baholashni tashkil etish',
        'Sinf rahbarini jazolash',
        'Barcha ota-onalarni yig‘ish',
      ],
      1,
      'Murojaat jiddiy qabul qilinadi va avvalo bolaning xavfsizligi baholanadi.',
    ),

    q(
      'm2t5-m07',
      'SOPda “qisqa baholash” bosqichi nimaga xizmat qiladi?',
      [
        'Bolaning bahosini aniqlashga',
        'Ota-onaning mas’uliyatini belgilashga',
        'Vaziyatning xavf va murakkablik darajasini aniqlashga',
        'Jazo turini avtomatik belgilashga',
      ],
      2,
      'Qisqa baholash keyingi choralarni vaziyatning real xavf darajasiga moslashtiradi.',
    ),

    q(
      'm2t5-m08',
      'Direktor xavfsizlik bo‘yicha ko‘plab tadbirlar o‘tkazilganini, ammo o‘quvchilar murojaat qilish tartibini bilmasligini aniqladi. Eng muhim kamchilik nima?',
      [
        'Tadbirlar soni kamligi',
        'Amaliy murojaat mexanizmining yetarli tushuntirilmaganligi',
        'Bannerlar yetishmasligi',
        'Nazoratning haddan tashqari kuchliligi',
      ],
      1,
      'Xavfsizlik tizimi real vaziyatda qanday murojaat qilishni ham o‘rgatishi kerak.',
    ),

    q(
      'm2t5-m09',
      'Sinf rahbari xavf belgilarini sezdi, lekin “o‘tib ketadi” deb murojaat qilmadi. Rahbar qanday tizimli yechim yaratishi kerak?',
      [
        'Faqat sinf rahbarini jazolash',
        'Xavf indikatorlari va xabar berish tartibini xodimlarga aniq tushuntirish',
        'Barcha sinf rahbarlarini almashtirish',
        'Psixolog faoliyatini to‘xtatish',
      ],
      1,
      'Tizim xodimlarga xavfni qachon va qanday xabar qilishni aniq ko‘rsatishi kerak.',
    ),

    q(
      'm2t5-m10',
      'Bola zo‘ravonlik haqida aytdi, lekin o‘z ism-sharifining oshkor qilinishidan qo‘rqmoqda. Eng maqbul yondashuv qaysi?',
      [
        'Barcha sinfdoshlari oldida masalani ko‘tarish',
        'Murojaatni maxfiy va xavfsiz sharoitda davom ettirish',
        'Bolaning shikoyatini bekor qilish',
        'O‘quvchini boshqa maktabga yuborish',
      ],
      1,
      'Ishonchli va maxfiy muhit bolaning himoyasi va murojaat qilish imkonini kuchaytiradi.',
    ),

    q(
      'm2t5-m11',
      'Kiberbulling bo‘yicha maktab ichki tartibida eng muhim komponent qaysi?',
      [
        'Telefonlarni muntazam olib qo‘yish',
        'Muammoni oshkora muhokama qilish',
        'Aniq murojaat kanali, dalillarni saqlash va javob algoritmi',
        'Barcha chatlarni yopish',
      ],
      2,
      'Raqamli xavfsizlikda murojaat, dalil va javob mexanizmi muhim.',
    ),

    q(
      'm2t5-m12',
      'Direktor xavfsizlik monitoringida bir xil holatlarning takrorlanayotganini ko‘rdi. Qaysi tahlil eng foydali?',
      [
        'Faqat hodisalar sonini sanash',
        'Hodisa vaqti, joyi, ishtirokchilari va sabablarini taqqoslash',
        'Faqat aybdorlar ro‘yxatini tuzish',
        'Faqat ota-onalar fikrini yig‘ish',
      ],
      1,
      'Takrorlanish naqshini aniqlash sabab va xavf nuqtalarini ko‘rsatadi.',
    ),

    q(
      'm2t5-m13',
      'O‘quvchi darslarda faol, ammo tanaffuslarda doim yolg‘iz qoladi va xavotirli ko‘rinadi. Direktor nimani hisobga olishi kerak?',
      [
        'Faqat darsdagi yuqori natijani',
        'Tanaffusdagi ijtimoiy muhitni ham xavf tahliliga kiritishni',
        'Buni bolaning shaxsiy xususiyati deb qabul qilishni',
        'Hech qanday kuzatuv olib bormaslikni',
      ],
      1,
      'Xavfsizlik faqat dars jarayoni bilan cheklanmaydi; maktab muhitining barcha qismlari baholanadi.',
    ),

    q(
      'm2t5-m14',
      'Zo‘ravonlik holatida hujjatlashtirishning qaysi usuli eng professional?',
      [
        'Subyektiv baholarni ko‘p yozish',
        'Faqat og‘zaki ma’lumotga tayanish',
        'Fakt, vaqt, holat va ko‘rilgan choralarni aniq qayd etish',
        'Barcha ma’lumotni ijtimoiy tarmoqqa joylash',
      ],
      2,
      'Hujjat faktlarga asoslangan, aniq va maxfiy bo‘lishi kerak.',
    ),

    q(
      'm2t5-m15',
      'Bola xavfsizligi bo‘yicha ota-ona bilan muloqotda qaysi yondashuv samaraliroq?',
      [
        'Ayblovchi ohang',
        'Faqat tayyor qarorni e’lon qilish',
        'Bola manfaatini markazga qo‘ygan, faktlarga asoslangan hamkorlik',
        'Muammoni ota-onaga to‘liq topshirish',
      ],
      2,
      'Maktab va ota-ona hamkorligi bola manfaatlari va faktlarga asoslanishi kerak.',
    ),

    q(
      'm2t5-m16',
      'Favqulodda vaziyat mashg‘ulotidan keyin direktor tahlil o‘tkazdi. Qaysi natija eng qimmatli?',
      [
        'Mashg‘ulot necha daqiqa davom etgani',
        'Kim xato qilganini aniqlash',
        'Tizimdagi zaif nuqtalar va ularni bartaraf etish choralari',
        'Faqat hisobot soni',
      ],
      2,
      'After-action tahlilning maqsadi tizimni yaxshilashdir.',
    ),

    q(
      'm2t5-m17',
      'Bola haqida sezgir ma’lumotni xodimlar guruhiga yuborishdan oldin direktor nimani tekshirishi kerak?',
      [
        'Guruhda nechta xodim borligini',
        'Ma’lumotni oluvchilarning ushbu axborotga xizmat zarurati va vakolati borligini',
        'Xabar qanchalik tez yuborilishini',
        'Guruhning nomini',
      ],
      1,
      'Maxfiy axborot faqat zarur va vakolatli shaxslar doirasida bo‘lishi kerak.',
    ),

    q(
      'm2t5-m18',
      'Maktabda xavfsizlik bo‘yicha murojaatlar juda kam. Bu holatni qanday baholash to‘g‘ri?',
      [
        'Xavfsizlik muammosi yo‘q deb darhol xulosa qilish',
        'Murojaat qilishga ishonch va imkoniyat mavjudligini ham tekshirish',
        'Monitoringni to‘xtatish',
        'Faqat direktor faoliyatini baholash',
      ],
      1,
      'Kam murojaat ba’zan muammo yo‘qligini emas, murojaat qilishdagi to‘siqlarni bildirishi mumkin.',
    ),

    q(
      'm2t5-m19',
      'O‘quvchilar xavfsizlik qoidalarini biladi, lekin real vaziyatda qanday harakat qilishni bilmaydi. Qanday yechim ma’qul?',
      [
        'Faqat qoidalarni qayta yozish',
        'Amaliy mashg‘ulot va vaziyatli treninglarni joriy etish',
        'Jazo choralarini oshirish',
        'Qoidalarni bekor qilish',
      ],
      1,
      'Nazariy bilimni amaliy ko‘nikmaga aylantirish uchun vaziyatli mashg‘ulotlar kerak.',
    ),

    q(
      'm2t5-m20',
      'Direktor bir nechta xavfsizlik indikatorlarini yagona monitoring jadvalida birlashtirdi. Buning asosiy afzalligi nima?',
      [
        'Hisobotni ko‘paytirish',
        'Xavf dinamikasini kompleks ko‘rish',
        'Faqat statistik ko‘rsatkichni oshirish',
        'O‘qituvchilar ishini kamaytirish',
      ],
      1,
      'Yagona monitoring xavfning dinamikasini va o‘zaro bog‘liqligini ko‘rishga yordam beradi.',
    ),

    q(
      'm2t5-m21',
      'Sinfda bir o‘quvchi muntazam boshqalarning guruhidan chiqarib yuborilmoqda. Direktor buni qanday ko‘rishi kerak?',
      [
        'Oddiy do‘stlik tanlovi sifatida',
        'Ijtimoiy chetlashtirish xavfi sifatida',
        'Faqat akademik muammo sifatida',
        'Faqat ota-onaning muammosi sifatida',
      ],
      1,
      'Doimiy ijtimoiy chetlashtirish bolaning ruhiy farovonligiga ta’sir qilishi mumkin.',
    ),

    q(
      'm2t5-m22',
      'Direktor xavfsizlik tizimini takomillashtirish uchun eng avvalo nimani aniqlashi kerak?',
      [
        'Faqat mavjud hujjatlar sonini',
        'Xavfning asosiy manbalari va mavjud nazoratdagi bo‘shliqlarni',
        'Faqat xodimlarning ish stajini',
        'Faqat o‘quvchilar sonini',
      ],
      1,
      'Risk boshqaruvi avvalo xavf manbalarini va nazoratdagi bo‘shliqlarni aniqlashdan boshlanadi.',
    ),

    q(
      'm2t5-m23',
      'Ota-ona maktabga kelib, farzandi haqida boshqa bolalar oldida ma’lumot berishni talab qildi. Direktor qanday yo‘l tutishi kerak?',
      [
        'Talabni darhol bajarish',
        'Masalani maxfiy sharoitga o‘tkazish',
        'Barcha sinf rahbarlarini chaqirish',
        'Vaziyatni ijtimoiy tarmoqqa chiqarish',
      ],
      1,
      'Bola haqidagi sezgir masalalar maxfiy va hurmatli sharoitda muhokama qilinadi.',
    ),

    q(
      'm2t5-m24',
      'Maktabda “nol toqat” tamoyili e’lon qilingan, ammo xodimlar kichik zo‘ravonlik holatlarini qayd etmayapti. Asosiy muammo nima?',
      [
        'Banner yetishmasligi',
        'Tamoyilning amaliy protsedura va mas’uliyat bilan bog‘lanmaganligi',
        'O‘quvchilar sonining ko‘pligi',
        'Ota-onalar yig‘ilishi kamligi',
      ],
      1,
      'Tamoyil amaliy tartib, mas’uliyat va monitoring bilan qo‘llab-quvvatlanishi kerak.',
    ),

    q(
      'm2t5-m25',
      'Bola xavfsizligi bo‘yicha qarorda psixolog, sinf rahbari va rahbariyat ma’lumotlari turlicha chiqdi. Eng to‘g‘ri yo‘l qaysi?',
      [
        'Eng yuqori lavozimdagi shaxs fikrini avtomatik qabul qilish',
        'Barcha ma’lumotlarni faktlar asosida solishtirib, zarur qo‘shimcha baholash o‘tkazish',
        'Faqat bolaning bahosiga qarash',
        'Muammoni yopish',
      ],
      1,
      'Turli ma’lumotlar farq qilganda dalillarni tekshirish va qo‘shimcha baholash zarur.',
    ),

    q(
      'm2t5-m26',
      'Maktab xavfsizlik tizimida “profilaktika” nimani anglatadi?',
      [
        'Faqat hodisadan keyingi jazo',
        'Xavf yuzaga kelish ehtimolini kamaytiruvchi oldindan rejalashtirilgan choralar',
        'Faqat favqulodda vaziyat mashg‘uloti',
        'Faqat ota-onaga xat yozish',
      ],
      1,
      'Profilaktika xavfni oldindan kamaytirishga qaratiladi.',
    ),

    q(
      'm2t5-m27',
      'Direktor bola xavfsizligi bo‘yicha yangi tartib joriy etdi. Uning samaradorligini qanday aniqlash ma’qul?',
      [
        'Faqat xodimlarning fikrini so‘rash',
        'Aniq indikatorlar belgilab, oldingi va keyingi natijalarni taqqoslash',
        'Faqat yangi hujjat borligini tekshirish',
        'Faqat yig‘ilish o‘tkazish',
      ],
      1,
      'Samaradorlik o‘lchanadigan indikatorlar va taqqoslanadigan natijalar orqali baholanadi.',
    ),

    q(
      'm2t5-m28',
      'O‘quvchi xavfsizlik bo‘yicha murojaat qilgandan keyin uning sinfdoshlari uni masxara qila boshladi. Bu holatda direktor nimani hisobga olishi kerak?',
      [
        'Murojaat qilgani uchun bolaning o‘zi sababchi ekanini',
        'Ikkilamchi zarar va ta’qib xavfini',
        'Faqat sinf intizomini',
        'Faqat ota-onaning fikrini',
      ],
      1,
      'Murojaatdan keyingi bosim ham bolaning xavfsizligiga tahdid bo‘lishi mumkin.',
    ),

    q(
      'm2t5-m29',
      'Maktabda xavfsizlik bo‘yicha chora ko‘rildi, ammo qayta monitoring o‘tkazilmadi. Qaysi boshqaruv elementi yetishmayapti?',
      [
        'Rejalashtirish',
        'Qayta baholash va nazorat',
        'Jazo',
        'Ommaviy axborot',
      ],
      1,
      'Chora natijasini o‘lchash va takroriy xavfni kuzatish boshqaruv siklining muhim qismidir.',
    ),

    q(
      'm2t5-m30',
      'Bola xavfsizligi tizimida eng kuchli boshqaruv modeli qaysi?',
      [
        'Muammo → jazo → yopish',
        'Muammo → ommaviy muhokama → jazo',
        'Signal → baholash → himoya → yordam → monitoring → takomillashtirish',
        'Shikoyat → ota-ona → yakun',
      ],
      2,
      'Kompleks model xavfni aniqlashdan keyingi himoya, yordam va qayta monitoringni ham qamrab oladi.',
    ),
  ],

  // =========================================================
  // 30 TA QIYIN
  // =========================================================
  hard: [
    q(
      'm2t5-h01',
      'Bir o‘quvchida dars qoldirish, yopiqlik va tanaffuslarda yolg‘iz qolish holatlari uch oy davomida takrorlandi. Aniq zo‘ravonlik dalili yo‘q. Direktor uchun eng professional qaror qaysi?',
      [
        'Dalil yo‘qligi sababli vaziyatni e’tiborsiz qoldirish',
        'O‘quvchini intizomiy nazoratga olish',
        'Belgilarni kompleks xavf signali sifatida baholab, maxfiy kuzatuv va qo‘llab-quvvatlashni boshlash',
        'Sinf oldida o‘quvchidan sababni so‘rash',
      ],
      2,
      'Bir nechta takroriy indikator birgalikda xavf signali bo‘lishi mumkin. Aniq dalilni kutib turish profilaktik yondashuvga zid.',
    ),

    q(
      'm2t5-h02',
      'Kiberbulling bo‘yicha dalillar mavjud. Aybdor o‘quvchining ota-onasi vaziyatni “oddiy hazil” deb baholamoqda. Direktor qanday boshqaruv pozitsiyasini tanlashi kerak?',
      [
        'Ota-onaning fikrini asosiy mezon sifatida qabul qilish',
        'Holatni bola xavfsizligi, dalillar va belgilangan tartib asosida baholash',
        'Jabrlanuvchini ham javobgar qilish',
        'Chatni o‘chirib, muammoni yopish',
      ],
      1,
      'Vaziyat subyektiv baho bilan emas, dalillar, xavf va belgilangan tartib bilan boshqariladi.',
    ),

    q(
      'm2t5-h03',
      'Maktabda zo‘ravonlik holatlari bo‘yicha murojaatlar kamaygan. Shu bilan birga o‘quvchilar anonim so‘rovda “murojaat qilsam muammo kuchayadi” degan javoblarni ko‘paytirgan. Eng to‘g‘ri xulosa qaysi?',
      [
        'Zo‘ravonlik kamaygan',
        'Murojaat tizimiga ishonch pasaygan bo‘lishi mumkin va bu xavfni yashirishi ehtimolini tekshirish kerak',
        'Anonim so‘rovlar ishonchsiz',
        'Murojaat kanallarini qisqartirish kerak',
      ],
      1,
      'Past murojaat har doim past xavfni anglatmaydi; ishonch va xavfsiz xabar berish imkoniyati ham indikator.',
    ),

    q(
      'm2t5-h04',
      'Direktor “nol toqat” siyosatini faqat qattiq jazolar orqali amalga oshirmoqda. Qaysi jihat boshqaruv nuqtayi nazaridan yetishmayapti?',
      [
        'Jazo miqdori',
        'O‘qituvchilar soni',
        'Erta aniqlash, himoya, hujjatlashtirish va profilaktika tizimi',
        'Nazorat kameralarining soni',
      ],
      2,
      'Nol toqat jazodan kengroq bo‘lib, oldini olish va himoya mexanizmlarini ham qamrab oladi.',
    ),

    q(
      'm2t5-h05',
      'O‘quvchi zo‘ravonlik holatini aytdi, ammo uning hikoyasi guvohlar ma’lumotidan farq qiladi. Direktorning eng to‘g‘ri yondashuvi qaysi?',
      [
        'Bolaning gapini darhol yolg‘on deb baholash',
        'Guvohlarni bolaning oldida yuzlashtirish',
        'Ma’lumotlarni ehtiyotkorlik bilan solishtirib, xavfsizlikni ta’minlagan holda qo‘shimcha baholash',
        'Holatni yopish',
      ],
      2,
      'Turli ma’lumotlar mavjud bo‘lsa, shoshma-shosharlik bilan hukm qilmasdan, xavfsizlik va dalillar asosida baholash kerak.',
    ),

    q(
      'm2t5-h06',
      'Maktabda xavfsizlik bo‘yicha ko‘rsatkichlar yaxshilandi, ammo psixolog murojaatlari o‘zgarmadi. Direktor natijani qanday talqin qilishi kerak?',
      [
        'Tizim to‘liq ishlayapti deb xulosa qilish',
        'Faqat statistikani ko‘rish',
        'Ko‘rsatkichlar o‘rtasidagi bog‘liqlikni tahlil qilib, natijani bir nechta manba asosida baholash',
        'Psixolog ma’lumotini hisobga olmaslik',
      ],
      2,
      'Bitta indikator yakuniy xulosa uchun yetarli emas; ma’lumotlar triangulyatsiyasi zarur.',
    ),

    q(
      'm2t5-h07',
      'Sinfda bir o‘quvchi muntazam ravishda boshqalarning guruhidan chiqarib yuboriladi. Unga nisbatan haqorat aniqlanmagan. Rahbar qanday yondashishi kerak?',
      [
        'Hech qanday muammo yo‘q deb hisoblash',
        'Ijtimoiy chetlashtirishni farovonlik xavfi sifatida o‘rganish',
        'O‘quvchini boshqa sinfga o‘tkazish',
        'Faqat ota-onasini chaqirish',
      ],
      1,
      'Ijtimoiy chetlashtirish ham bolaning ruhiy farovonligiga ta’sir qiluvchi xavf bo‘lishi mumkin.',
    ),

    q(
      'm2t5-h08',
      'Maxsus ehtiyojli o‘quvchiga barcha o‘quvchilar bilan bir xil topshiriq berilmoqda, ammo u vazifani bajarish uchun qo‘shimcha yordamga muhtoj. Qaysi tamoyil muhim?',
      [
        'Bir xil talab har doim tenglikdir',
        'Teng imkoniyat uchun zarur moslashtirishlarni ta’minlash',
        'O‘quvchini baholamaslik',
        'Uni alohida ta’limga chiqarish',
      ],
      1,
      'Adolatli tenglik ba’zan ehtiyojga mos qo‘llab-quvvatlashni talab qiladi.',
    ),

    q(
      'm2t5-h09',
      'Direktor xavfsizlik monitoringida hodisa joylarini xaritada belgilab, ayniqsa tanaffus paytida takrorlanadigan nuqtalarni aniqladi. Bu qanday boshqaruv yondashuvi?',
      [
        'Subyektiv nazorat',
        'Risklarni ma’lumotlar asosida lokalizatsiya qilish',
        'Faqat intizomiy nazorat',
        'Faqat statistik hisobot',
      ],
      1,
      'Hodisa joyi va vaqtini tahlil qilish xavfning makon-vaqt naqshini aniqlashga yordam beradi.',
    ),

    q(
      'm2t5-h10',
      'SOP mavjud, ammo xodimlar real vaziyatda ketma-ketlikni bajara olmayapti. Muammoning eng ehtimoliy sababi nima?',
      [
        'SOPning mavjudligi ortiqcha',
        'Amaliy trening va rollarni mashq qilish yetarli emas',
        'O‘quvchilar soni ko‘p',
        'Ota-onalar yetarli emas',
      ],
      1,
      'Protokolni bilishning o‘zi yetarli emas; xodimlar uni real vaziyatda qo‘llashni mashq qilishi kerak.',
    ),

    q(
      'm2t5-h11',
      'Direktor zo‘ravonlik holatini faqat “aybdor kim?” savoli orqali boshqarmoqda. Qaysi muhim savol e’tibordan chetda qolmoqda?',
      [
        'Qanday jazo berish kerak?',
        'Nima sabab bo‘ldi va takrorlanish xavfini qanday kamaytirish mumkin?',
        'Kim ko‘proq aybdor?',
        'Qaysi sinfda sodir bo‘ldi?',
      ],
      1,
      'Riskni boshqarish faqat aybdorni aniqlash emas, sabab va takrorlanish xavfini ham tahlil qiladi.',
    ),

    q(
      'm2t5-h12',
      'Bola murojaatidan keyin maktabda uning haqida turli mish-mishlar tarqaldi. Rahbar uchun eng muhim vazifa qaysi?',
      [
        'Mish-mishlarni yanada kengroq muhokama qilish',
        'Bolaning o‘zini ayblash',
        'Maxfiylikni himoya qilish va ikkilamchi zarar xavfini kamaytirish',
        'Murojaatni bekor qilish',
      ],
      2,
      'Murojaatdan keyingi ikkilamchi bosim ham bola xavfsizligiga tahdid hisoblanadi.',
    ),

    q(
      'm2t5-h13',
      'Maktabda xavfsizlik bo‘yicha chora ko‘rilganidan keyin hodisalar kamaydi. Biroq rahbar tizimni samarali deb e’lon qilishdan oldin nima qilishi kerak?',
      [
        'Faqat hodisalar sonini ko‘rish',
        'Natijani boshqa indikatorlar va qayta monitoring bilan tekshirish',
        'Nazoratni to‘xtatish',
        'SOPni bekor qilish',
      ],
      1,
      'Barqaror natija uchun bir nechta indikator va vaqt davomida qayta baholash kerak.',
    ),

    q(
      'm2t5-h14',
      'Ota-ona maktabdagi zo‘ravonlik holati haqida ijtimoiy tarmoqda tafsilotlarni e’lon qilishni talab qildi. Direktorning professional pozitsiyasi qaysi?',
      [
        'Barcha tafsilotlarni e’lon qilish',
        'Maxfiylikni saqlagan holda rasmiy va zarur kommunikatsiya mexanizmlaridan foydalanish',
        'Barcha o‘quvchilarni nomlash',
        'Muammoni butunlay yashirish',
      ],
      1,
      'Shaffoflik maxfiylikni buzish hisobiga amalga oshirilmasligi kerak.',
    ),

    q(
      'm2t5-h15',
      'Maktabda zo‘ravonlikka qarshi qoidalar mavjud, ammo o‘quvchilar ularni “jazolash qoidalari” deb qabul qilmoqda. Rahbar nimani o‘zgartirishi kerak?',
      [
        'Faqat jazo miqdorini oshirish',
        'Qoidalarni bola xavfsizligi, huquqi va yordam olish mexanizmi bilan tushuntirish',
        'Qoidalarni bekor qilish',
        'Faqat ota-onalarga tushuntirish',
      ],
      1,
      'Xavfsizlik siyosati faqat jazo emas, huquq, himoya va yordam tizimi sifatida tushuntirilishi kerak.',
    ),

    q(
      'm2t5-h16',
      'Sinfda bir xil xavfli holatlar faqat bir o‘qituvchi darsida ko‘p uchramoqda. Rahbar qanday xulosaga shoshilmasligi kerak?',
      [
        'O‘qituvchi aybdor deb darhol xulosa qilish',
        'Vaziyatni chuqurroq tahlil qilish',
        'Dars muhitini kuzatish',
        'O‘quvchilar bilan maxfiy fikr almashish',
      ],
      0,
      'Korrelyatsiya aybni avtomatik anglatmaydi. Faktlar va muhitni kompleks baholash kerak.',
    ),

    q(
      'm2t5-h17',
      'Bola xavfsizligi bo‘yicha qaror qabul qilishda rahbar uchun qaysi prinsip eng muhim?',
      [
        'Maktab imijini saqlash',
        'Bola xavfsizligi va manfaatlarini ustuvor qo‘yish',
        'Jamoatchilik fikrini birinchi o‘ringa qo‘yish',
        'Hujjatlar sonini kamaytirish',
      ],
      1,
      'Bola manfaatlari va xavfsizligi qarorning asosiy mezoni bo‘lishi kerak.',
    ),

    q(
      'm2t5-h18',
      'Maktabda xavfsizlik bo‘yicha yangi tartib joriy qilindi. Bir oy o‘tib xodimlar undan turlicha foydalanayotgani aniqlandi. Eng yaxshi boshqaruv chorasi qaysi?',
      [
        'Tartibni bekor qilish',
        'Xodimlarni ayblash',
        'Protsedurani standartlashtirish, tushuntirish va amaliy mashqni qayta tashkil etish',
        'Faqat yangi buyruq chiqarish',
      ],
      2,
      'Bir xil qo‘llash uchun standart, tushuntirish va amaliy trening kerak.',
    ),

    q(
      'm2t5-h19',
      'Bola xavfsizligi bo‘yicha muammoni hal qilishda “faqat jazo” modelining asosiy kamchiligi nimada?',
      [
        'Jazo har doim ishlamaydi',
        'U sabablarni, profilaktikani va bolaning tiklanishini yetarli qamrab olmaydi',
        'Jazo hujjat talab qiladi',
        'Jazo juda tez amalga oshadi',
      ],
      1,
      'Barqaror xavfsizlik tizimi jazodan tashqari sabab, himoya, yordam va profilaktikani ham qamrab oladi.',
    ),

    q(
      'm2t5-h20',
      'Direktor xavfsizlik indikatorlarini tahlil qilib, muammo aynan ayrim vaqt oralig‘ida ko‘payishini aniqladi. Keyingi eng yaxshi qaror qaysi?',
      [
        'Nazoratni barcha vaqtga bir xil oshirish',
        'Xavf yuqori bo‘lgan vaqt va joyga maqsadli profilaktik choralar qo‘llash',
        'Faqat o‘quvchilarni jazolash',
        'Monitoringni to‘xtatish',
      ],
      1,
      'Riskga asoslangan boshqaruv resurslarni xavf yuqori bo‘lgan nuqtalarga yo‘naltiradi.',
    ),

    q(
      'm2t5-h21',
      'Maktabda bolaning xavfsizligi bo‘yicha turli bo‘limlar alohida-alohida ma’lumot yuritmoqda. Rahbar uchun asosiy boshqaruv muammosi nima?',
      [
        'Hujjatlar juda ko‘p',
        'Ma’lumotlar o‘zaro bog‘lanmagani sababli xavfning to‘liq manzarasi ko‘rinmasligi',
        'Xodimlar soni kamligi',
        'Ota-onalar faol emasligi',
      ],
      1,
      'Muvofiqlashtirilmagan ma’lumotlar xavfni kompleks baholashni qiyinlashtiradi.',
    ),

    q(
      'm2t5-h22',
      'O‘quvchi xavfsizlik bo‘yicha murojaat qildi. Uning hikoyasini aniqlash uchun direktor bir necha xodimni ketma-ket suhbatga kiritmoqchi. Asosiy xavf nima?',
      [
        'Vaqtning ko‘pligi',
        'Bolaning qayta-qayta voqeani aytishi sababli ruhiy bosim yoki ikkilamchi zarar kuchayishi',
        'Hujjatlar kamayishi',
        'Ota-onalar soni oshishi',
      ],
      1,
      'Bolani keraksiz takroriy suhbatlarga jalb qilish qo‘shimcha ruhiy bosim yaratishi mumkin.',
    ),

    q(
      'm2t5-h23',
      'Maktabda xavfsizlik bo‘yicha barcha qoidalar bajarilmoqda, ammo o‘quvchilar o‘zlarini xavfsiz his qilmayapti. Qaysi indikatorni qo‘shimcha o‘rganish zarur?',
      [
        'Faqat buyruqlar sonini',
        'Bolaning xavfsizlik hissi va murojaat qilishga bo‘lgan ishonchini',
        'Faqat o‘qituvchilar ish stajini',
        'Faqat maktab maydonini',
      ],
      1,
      'Formal talablarning bajarilishi subyektiv xavfsizlik hissini avtomatik ta’minlamaydi.',
    ),

    q(
      'm2t5-h24',
      'Direktor xavfsizlik muammosini hal qildi, ammo muammoning ildiz sababini aniqlamadi. Qaysi xavf saqlanib qoladi?',
      [
        'Hujjatlar ko‘payishi',
        'Muammoning boshqa shaklda takrorlanishi',
        'Ota-onalar faolligining oshishi',
        'Monitoringning qisqarishi',
      ],
      1,
      'Ildiz sabab bartaraf etilmasa, hodisa boshqa shaklda takrorlanishi mumkin.',
    ),

    q(
      'm2t5-h25',
      'Xavfsizlik bo‘yicha qarorda direktor “maktab obro‘siga zarar yetmasin” degan mezonni birinchi o‘ringa qo‘ydi. Bu yondashuvning asosiy xatosi nima?',
      [
        'Obro‘ muhim emas',
        'Bola manfaatlari va xavfsizligi tashqi imijdan ustun bo‘lishi kerak',
        'Ota-onalar fikri muhim emas',
        'Rahbar qaror qabul qilmasligi kerak',
      ],
      1,
      'Maktabning haqiqiy obro‘si muammolarni yashirish emas, xavfsizlik va mas’uliyat bilan belgilanadi.',
    ),

    q(
      'm2t5-h26',
      'Maktab xavfsizlik tizimini baholashda qaysi kombinatsiya eng to‘liq natija beradi?',
      [
        'Hodisalar soni + jazolar soni',
        'Murojaatlar + xavf indikatorlari + javob tezligi + takroriy holatlar + farovonlik ko‘rsatkichlari',
        'Faqat davomat',
        'Faqat ota-onalar shikoyati',
      ],
      1,
      'Kompleks indikatorlar tizimning real ishlashini yaxshiroq ko‘rsatadi.',
    ),

    q(
      'm2t5-h27',
      'O‘quvchi zo‘ravonlik holatidan keyin maktabga qaytdi. Direktor faqat aybdor o‘quvchini nazorat qilmoqda. Qaysi muhim jihat e’tibordan chetda qolgan?',
      [
        'Bolaning tiklanishi, moslashuvi va qayta xavf ehtimoli',
        'Aybdorning baholari',
        'Sinf jadvali',
        'Maktabning reklama faoliyati',
      ],
      0,
      'Jabrlangan bolaning keyingi farovonligi va xavfsizligi ham monitoring qilinishi kerak.',
    ),

    q(
      'm2t5-h28',
      'Maktabda xavfsizlik tizimi juda ko‘p hujjat talab qiladi, ammo xodimlar real vaziyatda nima qilishni bilmaydi. Eng to‘g‘ri xulosa qaysi?',
      [
        'Hujjatlar sonini yanada oshirish',
        'Formal nazorat amaliy kompetensiya bilan muvozanatlashtirilishi kerak',
        'Barcha hujjatlarni bekor qilish',
        'Faqat direktor ishlashi kerak',
      ],
      1,
      'Haqiqiy xavfsizlik tizimi hujjatdan tashqari amaliy ko‘nikma va aniq rollarga ega bo‘lishi kerak.',
    ),

    q(
      'm2t5-h29',
      'Quyidagi yondashuvlardan qaysi biri riskka asoslangan bola xavfsizligi boshqaruviga eng mos?',
      [
        'Barcha sinflarga bir xil nazorat',
        'Faqat sodir bo‘lgan hodisaga javob',
        'Xavf darajasi va indikatorlariga qarab resurs va choralarni ustuvorlashtirish',
        'Faqat og‘ir holatlarni nazorat qilish',
      ],
      2,
      'Riskka asoslangan boshqaruv xavf ehtimoli va ta’siriga qarab resurslarni yo‘naltiradi.',
    ),

    q(
      'm2t5-h30',
      'Bola xavfsizligi tizimining eng yetuk modeli qaysi?',
      [
        'Hodisa → jazo → yakun',
        'Shikoyat → tekshiruv → hisobot',
        'Signal → baholash → xavfsizlik → hujjatlashtirish → yordam → kuzatuv → tizimni takomillashtirish',
        'Muammo → ota-ona → sinf rahbari',
      ],
      2,
      'Yetuk tizim butun siklni: aniqlash, baholash, himoya, yordam, kuzatuv va takomillashtirishni qamrab oladi.',
    ),
  ],

  // =========================================================
  // 10 TA CASE
  // =========================================================
  case: [
    q(
      'm2t5-c01',
      'CASE: 7-sinf o‘quvchisi oxirgi uch haftada dars qoldirmoqda, tanaffuslarda yolg‘iz yurmoqda va telefonidagi ayrim xabarlarni yashirmoqda. Sinfdoshi uni muntazam masxara qilishayotganini aytdi. Direktorning eng maqbul harakatlar ketma-ketligi qaysi?',
      [
        'Darhol aybdorni jazolash → sinf yig‘ilishi → ishni yopish',
        'Bolaning xavfsizligini baholash → maxfiy ma’lumot yig‘ish → tegishli yordam → monitoring',
        'Ota-onalarni umumiy guruhga chaqirish → muammoni muhokama qilish',
        'O‘quvchini boshqa sinfga o‘tkazish → holatni yopish',
      ],
      1,
      'Bola xavfsizligi birinchi o‘rinda, keyin maxfiy baholash, yordam va qayta monitoring amalga oshiriladi.',
    ),

    q(
      'm2t5-c02',
      'CASE: Maktab chatida o‘quvchining ruxsatsiz surati tarqaldi. Ayrim o‘quvchilar uni masxara qilmoqda. Qaysi qaror eng to‘g‘ri?',
      [
        'Suratni barcha guruhlarga yuborib, aybdorni aniqlash',
        'Holatni hazil sifatida qabul qilish',
        'Bolaning xavfsizligini ta’minlash, dalillarni saqlash, maxfiylikni himoya qilish va belgilangan tartibni ishga tushirish',
        'Barcha o‘quvchilarning telefonlarini olib qo‘yish',
      ],
      2,
      'Ruxsatsiz tasvir va masxara raqamli xavfsizlik muammosidir. Dalillar va maxfiylik himoyalanadi.',
    ),

    q(
      'm2t5-c03',
      'CASE: Bir sinfda bir oy ichida uch marta o‘quvchilar o‘rtasida takroriy mazax holati qayd etildi. Har safar alohida o‘quvchi aybdor bo‘lib chiqmoqda. Direktor qanday strategik xulosaga kelishi kerak?',
      [
        'Faqat aybdorlarni almashtirib jazolash kerak',
        'Muammo individual emas, sinf muhitidagi tizimli omillar bilan bog‘liq bo‘lishi mumkin',
        'Sinfdagi barcha o‘quvchilarni jazolash kerak',
        'Sinf rahbarini darhol almashtirish kerak',
      ],
      1,
      'Bir xil turdagi hodisalarning takrorlanishi tizimli sabablarni o‘rganishni talab qiladi.',
    ),

    q(
      'm2t5-c04',
      'CASE: Maxsus ehtiyojli o‘quvchi uchun pandus o‘rnatildi. Ammo o‘quvchi darslarda topshiriqlarni bajarishda qiynalmoqda va guruh faoliyatida qatnashmayapti. Direktorning keyingi qarori qaysi?',
      [
        'Infratuzilma masalasi hal bo‘lgan deb hisoblash',
        'O‘quvchini alohida o‘qitish',
        'Individual ehtiyojlarni baholab, pedagogik, texnik va ijtimoiy qo‘llab-quvvatlashni moslashtirish',
        'Faqat ota-onasiga topshiriq berish',
      ],
      2,
      'Inklyuziv muhit jismoniy kirish bilan cheklanmaydi; ta’limdagi real ishtirok ham ta’minlanadi.',
    ),

    q(
      'm2t5-c05',
      'CASE: Xavfsizlik monitoringida maktabning orqa hovlisida tanaffus paytida bir xil turdagi nizolar ko‘p sodir bo‘layotgani aniqlandi. Eng samarali qaror qaysi?',
      [
        'Barcha tanaffuslarni bekor qilish',
        'Barcha o‘quvchilarni jazolash',
        'Xavf yuqori bo‘lgan joy va vaqtda maqsadli nazorat hamda profilaktik choralarni kuchaytirish',
        'Faqat nizoda qatnashganlarni boshqa sinfga o‘tkazish',
      ],
      2,
      'Riskka asoslangan yondashuv resurslarni xavf yuqori bo‘lgan nuqtalarga yo‘naltiradi.',
    ),

    q(
      'm2t5-c06',
      'CASE: O‘quvchi zo‘ravonlik haqida direktorning oldiga keldi. U “iltimos, bu haqda hech kimga aytmang” dedi. Direktor nima qilishi kerak?',
      [
        'Hech qanday harakat qilmaslik',
        'Holatni barcha xodimlarga aytish',
        'Bolaning xavfsizligini ta’minlab, maxfiylikni saqlagan holda zarur va vakolatli shaxslar bilan belgilangan tartibda ishlash',
        'O‘quvchini boshqa maktabga yuborish',
      ],
      2,
      'Maxfiylik muhim, ammo bolaning xavfsizligini ta’minlash uchun zarur professional harakatlar bajarilishi kerak.',
    ),

    q(
      'm2t5-c07',
      'CASE: Maktabda zo‘ravonlikka qarshi SOP mavjud. Favqulodda mashg‘ulot vaqtida xodimlar kimga xabar berishni va dalillarni qanday saqlashni bilmasligi aniqlandi. Direktor qanday xulosa qilishi kerak?',
      [
        'SOP juda murakkab',
        'SOP amaliy o‘rgatilmagan va rollar yetarli darajada mustahkamlanmagan',
        'Xodimlarni to‘liq almashtirish kerak',
        'SOPni bekor qilish kerak',
      ],
      1,
      'Protokolning mavjudligi yetarli emas; xodimlar uni amalda qo‘llashni bilishi kerak.',
    ),

    q(
      'm2t5-c08',
      'CASE: Maktabda xavfsizlik bo‘yicha murojaatlar keskin kamaydi. Biroq anonim so‘rovda o‘quvchilarning katta qismi “murojaat qilsam, meni ayblashadi” deb javob berdi. Direktorning eng to‘g‘ri xulosasi qaysi?',
      [
        'Xavfsizlik yaxshilangan',
        'Murojaat qilish madaniyati va ishonch mexanizmlarida muammo bor',
        'Anonim so‘rovni bekor qilish kerak',
        'Murojaat kanallarini qisqartirish kerak',
      ],
      1,
      'Murojaatlar kamayishi ishonchning pasayishi bilan bog‘liq bo‘lishi mumkin.',
    ),

    q(
      'm2t5-c09',
      'CASE: Zo‘ravonlik holati bo‘yicha barcha dastlabki choralar ko‘rildi. Bir oy o‘tib bola yana xavotirli xatti-harakatlar ko‘rsata boshladi. Direktor nima qilishi kerak?',
      [
        'Holat avval yopilganini aytib, hech narsa qilmaslik',
        'Faqat aybdorni qayta jazolash',
        'Qayta baholash o‘tkazib, takroriy xavf sabablarini aniqlash va qo‘llab-quvvatlashni yangilash',
        'Bolaning o‘qishini vaqtincha to‘xtatish',
      ],
      2,
      'Keyingi xavf belgilarida qayta baholash va yordamni yangilash zarur.',
    ),

    q(
      'm2t5-c10',
      'CASE: Direktor bola xavfsizligi tizimini yil yakunida baholamoqda. Quyidagi natijalardan qaysi biri tizim samaradorligini eng to‘liq ko‘rsatadi?',
      [
        'Maktabda xavfsizlik mavzusida 20 ta tadbir o‘tkazilgani',
        'Jazolar soni kamaygani',
        'Hodisalar erta aniqlanayotgani, murojaatlar xavfsiz qabul qilinayotgani, javob tezkorligi va takroriy holatlar monitoring qilinayotgani',
        'Xavfsizlik bo‘yicha ko‘plab buyruqlar chiqarilgani',
      ],
      2,
      'Samaradorlik tadbirlar soni bilan emas, real xavfni aniqlash, javob berish va natijani kuzatish bilan baholanadi.',
    ),
  ],
}
