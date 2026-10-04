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

export const M2T4_LEVELS: LevelSet = {
  // =========================================================
  // 30 TA OSON
  // =========================================================
  easy: [
    q(
      'm2t4-e01',
      'Mezonlarga asoslangan baholashning asosiy xususiyati nima?',
      [
        'O‘quvchilarni faqat bir-biri bilan solishtirish',
        'Natijani oldindan belgilangan mezonlar asosida baholash',
        'Faqat yakuniy nazorat orqali baholash',
        'Faqat o‘qituvchi fikriga tayanish',
      ],
      1,
      'Mezonlarga asoslangan baholashda o‘quvchi natijasi oldindan belgilangan aniq mezonlar asosida baholanadi.',
    ),

    q(
      'm2t4-e02',
      'Formativ baholashning asosiy maqsadi nima?',
      [
        'Faqat choraklik bahoni chiqarish',
        'O‘quvchilarni reyting bo‘yicha joylashtirish',
        'Xatolarni aniqlash va o‘quvchining rivojlanishiga yordam berish',
        'Faqat yakuniy natijani qayd etish',
      ],
      2,
      'Formativ baholash o‘quv jarayoni davomida xatolarni aniqlash, fikr-mulohaza berish va rivojlanishni qo‘llab-quvvatlashga xizmat qiladi.',
    ),

    q(
      'm2t4-e03',
      'PISA tadqiqotida asosan nima baholanadi?',
      [
        'Faqat yodlangan bilimlar',
        'Bilimni real hayotiy vaziyatlarda qo‘llash kompetensiyasi',
        'Faqat sport qobiliyati',
        'Faqat o‘qituvchining metodikasi',
      ],
      1,
      'PISA o‘quvchilarning bilim va ko‘nikmalarni real hayotiy hamda muammoli vaziyatlarda qo‘llay olishiga katta e’tibor beradi.',
    ),

    q(
      'm2t4-e04',
      'TIMSS tadqiqoti asosan qaysi fanlarni qamrab oladi?',
      [
        'Tarix va geografiya',
        'Matematika va tabiiy fanlar',
        'Ona tili va adabiyot',
        'Jismoniy tarbiya va musiqa',
      ],
      1,
      'TIMSS matematika va tabiiy fanlar bo‘yicha o‘quvchilarning bilim va ko‘nikmalarini xalqaro miqyosda baholaydi.',
    ),

    q(
      'm2t4-e05',
      'PIRLS tadqiqotining asosiy yo‘nalishi nima?',
      [
        'Boshlang‘ich sinf o‘quvchilarining o‘qish savodxonligini baholash',
        'O‘qituvchilarning ish haqini baholash',
        'Maktab binosining holatini baholash',
        'Sport natijalarini baholash',
      ],
      0,
      'PIRLS boshlang‘ich ta’lim bosqichidagi o‘quvchilarning o‘qish va matnni tushunish savodxonligini o‘rganadi.',
    ),

    q(
      'm2t4-e06',
      'BSB nimani anglatadi?',
      [
        'Bosqichli sinov baholashi',
        'Bo‘lim bo‘yicha summativ baholash',
        'Boshlang‘ich savodxonlik bahosi',
        'Boshqaruv samaradorligini baholash',
      ],
      1,
      'BSB — bo‘lim bo‘yicha summativ baholash bo‘lib, muayyan bo‘lim yakunidagi o‘quv natijalarini aniqlashga xizmat qiladi.',
    ),

    q(
      'm2t4-e07',
      'CHSB nimani anglatadi?',
      [
        'Chorak bo‘yicha summativ baholash',
        'Chuqurlashtirilgan bilim sinovi',
        'Choraklik hamkorlik samaradorligi bahosi',
        'Chegaraviy hisoblash sinovi',
      ],
      0,
      'CHSB chorak bo‘yicha summativ baholash bo‘lib, chorak davomida erishilgan natijalarni umumlashtirishga xizmat qiladi.',
    ),

    q(
      'm2t4-e08',
      'Ta’lim sifatini monitoring qilishning asosiy obyekti qaysi?',
      [
        'Faqat maktab binosi',
        'Faqat o‘qituvchining hujjatlari',
        'Ta’lim natijalari, jarayoni va sharoitlari',
        'Faqat ota-onalar fikri',
      ],
      2,
      'Sifat monitoringi natija, ta’lim jarayoni va ta’lim sharoitlarini kompleks o‘rganishi kerak.',
    ),

    q(
      'm2t4-e09',
      'Summativ baholashning asosiy vazifasi nima?',
      [
        'O‘quvchiga jarayon davomida maslahat berish',
        'Muayyan davr yakunidagi ta’lim natijasini aniqlash',
        'Faqat darsni kuzatish',
        'O‘quvchining qiziqishini aniqlash',
      ],
      1,
      'Summativ baholash muayyan bo‘lim, chorak yoki boshqa belgilangan davr yakunida erishilgan natijani aniqlaydi.',
    ),

    q(
      'm2t4-e10',
      'O‘quvchiga xatosini tushuntirib, uni qanday tuzatish bo‘yicha tavsiya berish qaysi baholashga xos?',
      [
        'Formativ baholash',
        'Faqat yakuniy baholash',
        'Attestatsiya',
        'Akkreditatsiya',
      ],
      0,
      'Xatoni aniqlash va uni tuzatish bo‘yicha fikr-mulohaza berish formativ baholashning muhim elementidir.',
    ),

    q(
      'm2t4-e11',
      'Davlat ta’lim standarti monitoringda qanday vazifani bajaradi?',
      [
        'Ta’lim natijalari uchun mezon va talablarni belgilashga xizmat qiladi',
        'Faqat o‘qituvchilar sonini belgilaydi',
        'Faqat maktab binosini baholaydi',
        'Faqat ota-onalar bilan ishlashni nazorat qiladi',
      ],
      0,
      'Davlat ta’lim standarti ta’lim mazmuni va natijalariga qo‘yiladigan asosiy talablarni belgilaydi.',
    ),

    q(
      'm2t4-e12',
      'Ta’lim sifatini baholashda faqat o‘quvchining yakuniy bahosiga tayanish nega yetarli emas?',
      [
        'Chunki baho hech qachon kerak emas',
        'Chunki ta’lim jarayoni va sharoitlari ham natijaga ta’sir qiladi',
        'Chunki faqat ota-ona baholashi kerak',
        'Chunki faqat o‘qituvchi baholashi kerak',
      ],
      1,
      'Sifatni to‘liq baholash uchun natija bilan birga jarayon, metodika, resurs va muhit ham tahlil qilinadi.',
    ),

    q(
      'm2t4-e13',
      'Ichki monitoringning asosiy maqsadi nima?',
      [
        'Faqat xodimni jazolash',
        'Muammolarni aniqlash va ta’lim sifatini yaxshilash',
        'Faqat hujjatlarni ko‘paytirish',
        'Faqat reyting tuzish',
      ],
      1,
      'Ichki monitoring rivojlantiruvchi boshqaruv vositasi bo‘lib, muammolarni aniqlash va ularni bartaraf etishga xizmat qiladi.',
    ),

    q(
      'm2t4-e14',
      'Riskka asoslangan monitoringda avvalo nima aniqlanadi?',
      [
        'Eng ko‘p hujjat yuritadigan xodim',
        'Yuqori xavf yoki muammo ehtimoli mavjud yo‘nalishlar',
        'Eng ko‘p dars o‘tadigan o‘qituvchi',
        'Eng katta sinf',
      ],
      1,
      'Riskka asoslangan yondashuv resurslarni muammo va xavf ehtimoli yuqori bo‘lgan yo‘nalishlarga yo‘naltiradi.',
    ),

    q(
      'm2t4-e15',
      'Xalqaro baholash dasturlarida ishtirok etishning strategik ahamiyati nimada?',
      [
        'Faqat diplom olishda',
        'Faqat o‘quvchilar sonini oshirishda',
        'Ta’lim natijalarini xalqaro mezonlar bilan solishtirish va rivojlanish yo‘nalishlarini aniqlashda',
        'Faqat maktab nomini reklama qilishda',
      ],
      2,
      'Xalqaro baholash natijalari ta’lim tizimining kuchli va zaif tomonlarini xalqaro mezonlar asosida ko‘rishga yordam beradi.',
    ),

    q(
      'm2t4-e16',
      'Mezonlarga asoslangan baholashda o‘quvchi nimani bilishi kerakligini qayerdan biladi?',
      [
        'Faqat sinfdoshlaridan',
        'Oldindan belgilangan mezon va talablar orqali',
        'Faqat chorak oxirida',
        'Faqat ota-onasidan',
      ],
      1,
      'Aniq mezonlar o‘quvchiga undan qanday natija kutilayotganini tushunishga yordam beradi.',
    ),

    q(
      'm2t4-e17',
      'Formativ baholash qachon amalga oshiriladi?',
      [
        'Faqat yil oxirida',
        'Faqat attestatsiya vaqtida',
        'Ta’lim jarayoni davomida',
        'Faqat maktab tekshirilganda',
      ],
      2,
      'Formativ baholash ta’lim jarayonining o‘zida amalga oshiriladi va keyingi o‘qishni takomillashtirishga xizmat qiladi.',
    ),

    q(
      'm2t4-e18',
      'Monitoring natijasidan keyingi eng muhim bosqich qaysi?',
      [
        'Natijani yashirish',
        'Muammoning sababini aniqlab, yechim ishlab chiqish',
        'Hujjatlarni ko‘paytirish',
        'Xodimni darhol jazolash',
      ],
      1,
      'Monitoring faqat ma’lumot yig‘ish emas; natija asosida sabab, yechim va keyingi qayta o‘lchash amalga oshiriladi.',
    ),

    q(
      'm2t4-e19',
      'Ta’lim sifati uchun o‘qituvchining qaysi jihati muhim?',
      [
        'Faqat ish staji',
        'Kasbiy mahorat va samarali metodlardan foydalanish',
        'Faqat hujjatlarni ko‘pligi',
        'Faqat dars soatlari soni',
      ],
      1,
      'O‘qituvchining kasbiy kompetensiyasi, metodik mahorati va ta’limni samarali tashkil eta olishi sifatga bevosita ta’sir qiladi.',
    ),

    q(
      'm2t4-e20',
      'Akkreditatsiyaning asosiy mazmuni nimaga bog‘liq?',
      [
        'Ta’lim tashkilotining belgilangan talab va mezonlarga muvofiqligini baholashga',
        'Faqat o‘quvchilar sonini sanashga',
        'Faqat dars jadvalini tuzishga',
        'Faqat ota-onalar yig‘ilishini o‘tkazishga',
      ],
      0,
      'Akkreditatsiya ta’lim tashkilotining belgilangan talab va mezonlarga muvofiqligini baholash jarayonidir.',
    ),

    q(
      'm2t4-e21',
      'O‘qituvchining o‘quvchi ishini tahlil qilib, xatolarini ko‘rsatishi nimaga xizmat qiladi?',
      [
        'Faqat jazolashga',
        'Keyingi ta’lim faoliyatini yaxshilashga',
        'Faqat reytingni pasaytirishga',
        'Faqat hujjat to‘ldirishga',
      ],
      1,
      'Tahliliy fikr-mulohaza o‘quvchining xatosini tushunishi va keyingi faoliyatini yaxshilashiga yordam beradi.',
    ),

    q(
      'm2t4-e22',
      'PISA topshiriqlarining muhim xususiyati qaysi?',
      [
        'Faqat ta’riflarni yodlash',
        'Bilimni muammoli va hayotiy vaziyatlarda qo‘llash',
        'Faqat formulalarni yozish',
        'Faqat diktant yozish',
      ],
      1,
      'PISA topshiriqlari bilimni amaliy va muammoli vaziyatlarda qo‘llashni talab qiladi.',
    ),

    q(
      'm2t4-e23',
      'TIMSSning asosiy yo‘nalishlaridan biri qaysi?',
      [
        'Matematika savodxonligi',
        'Huquqiy madaniyat',
        'Musiqa ijrochiligi',
        'Kasbiy maslahat',
      ],
      0,
      'TIMSS matematika va tabiiy fanlar bo‘yicha ta’lim natijalarini baholaydi.',
    ),

    q(
      'm2t4-e24',
      'PIRLSning asosiy e’tibori nimaga qaratiladi?',
      [
        'O‘qish savodxonligiga',
        'Matematika olimpiadasiga',
        'Jismoniy tayyorgarlikka',
        'O‘qituvchi ish haqiga',
      ],
      0,
      'PIRLS boshlang‘ich sinf o‘quvchilarining o‘qish savodxonligi va matnni tushunish darajasini o‘rganadi.',
    ),

    q(
      'm2t4-e25',
      'Ta’lim sifatini monitoring qilishda psixologik muhit nima uchun muhim?',
      [
        'O‘quvchilarning ta’lim olishiga ta’sir qilgani uchun',
        'Faqat maktab bezagi uchun',
        'Faqat direktor hisobotiga kerak bo‘lgani uchun',
        'Umuman ahamiyati yo‘q',
      ],
      0,
      'Sog‘lom psixologik muhit o‘quvchilarning faolligi, xavfsizligi va ta’lim natijalariga ta’sir ko‘rsatadi.',
    ),

    q(
      'm2t4-e26',
      'O‘quvchining o‘z faoliyatini baholashi qanday ataladi?',
      [
        'Tashqi nazorat',
        'O‘z-o‘zini baholash',
        'Akkreditatsiya',
        'Monitoring auditi',
      ],
      1,
      'O‘quvchining o‘z bilim va faoliyatini mezonlar asosida tahlil qilishi o‘z-o‘zini baholash hisoblanadi.',
    ),

    q(
      'm2t4-e27',
      'Sifat monitoringida dalillarga asoslangan boshqaruv nimani anglatadi?',
      [
        'Qarorni taxmin asosida qabul qilish',
        'Qarorni ishonchli ma’lumot va dalillar asosida qabul qilish',
        'Faqat shaxsiy fikrga tayanish',
        'Faqat yuqori rahbar fikrini kutish',
      ],
      1,
      'Dalillarga asoslangan boshqaruv real ma’lumotlar, natijalar va ishonchli dalillarga tayangan holda qaror qabul qilishni anglatadi.',
    ),

    q(
      'm2t4-e28',
      'Ta’lim sifatini oshirishda qayta o‘lchash nima uchun kerak?',
      [
        'Qabul qilingan yechim samara bergan-bermaganini aniqlash uchun',
        'Faqat hujjat sonini oshirish uchun',
        'Faqat o‘qituvchini tekshirish uchun',
        'Faqat reyting tuzish uchun',
      ],
      0,
      'Qayta o‘lchash amalga oshirilgan choralar natijani yaxshilaganini tekshirish imkonini beradi.',
    ),

    q(
      'm2t4-e29',
      'Ta’lim sifatini baholashda “jarayon” ko‘rsatkichi nimani ifodalaydi?',
      [
        'Faqat yakuniy bahoni',
        'Ta’lim qanday tashkil etilayotganini',
        'Faqat o‘quvchilar sonini',
        'Faqat bino holatini',
      ],
      1,
      'Jarayon ko‘rsatkichi dars metodikasi, pedagogik yondashuv va ta’limning qanday tashkil etilayotganini ko‘rsatadi.',
    ),

    q(
      'm2t4-e30',
      'Sifat monitoringining rivojlantiruvchi yondashuvi nimani nazarda tutadi?',
      [
        'Monitoringni faqat jazolash vositasi sifatida ishlatish',
        'Monitoring natijalaridan takomillashtirish va metodik yordam uchun foydalanish',
        'Muammolarni yashirish',
        'Faqat hisobot topshirish',
      ],
      1,
      'Rivojlantiruvchi monitoringning maqsadi aniqlangan muammolarni bartaraf etish va sifatni yaxshilashdir.',
    ),
  ],

  // =========================================================
  // 30 TA O'RTA
  // =========================================================
  medium: [
    q(
      'm2t4-m01',
      'Mezonlarga asoslangan baholashning nisbiy baholashdan asosiy farqi qaysi?',
      [
        'O‘quvchini sinfdoshlariga nisbatan emas, oldindan belgilangan mezonlarga nisbatan baholash',
        'Faqat yuqori baholarni qo‘yish',
        'Faqat yakuniy nazoratdan foydalanish',
        'O‘quvchilarni umuman baholamaslik',
      ],
      0,
      'Mezonli baholashda natija boshqa o‘quvchilar bilan emas, belgilangan o‘quv natijalari va mezonlar bilan solishtiriladi.',
    ),

    q(
      'm2t4-m02',
      'O‘qituvchi test natijalarini tahlil qilib, ko‘pchilik o‘quvchilar bir mavzuda xato qilganini aniqladi. Eng to‘g‘ri keyingi qadam qaysi?',
      [
        'Mavzuni o‘tmasdan keyingi mavzuga o‘tish',
        'Xatolar sababini aniqlab, qayta tushuntirish va qayta baholash',
        'Barcha o‘quvchilarga past baho qo‘yish',
        'Natijalarni e’tiborsiz qoldirish',
      ],
      1,
      'Natija muayyan bo‘shliqni ko‘rsatsa, sababni aniqlash, qo‘llab-quvvatlash va qayta o‘lchash eng maqbul yondashuvdir.',
    ),

    q(
      'm2t4-m03',
      'Maktab rahbari ta’lim sifatini baholashda faqat o‘quvchilarning yakuniy ballarini tahlil qilmoqda. Qaysi jihat yetishmayapti?',
      [
        'Faqat maktab nomi',
        'Jarayon va ta’lim sharoitlari tahlili',
        'Faqat sinf rahbarlari ro‘yxati',
        'Faqat dars jadvali',
      ],
      1,
      'Sifatni to‘liq baholash natija bilan birga jarayon, metodika, resurs va muhitni ham o‘rganishni talab qiladi.',
    ),

    q(
      'm2t4-m04',
      'Formativ baholashda eng samarali fikr-mulohaza qaysi?',
      [
        '“Yomon ishlabsan.”',
        '“5.”',
        '“Javobning asosiy qismi to‘g‘ri, lekin dalillash qismida sababni aniqroq ko‘rsat.”',
        '“Keyingi safar yaxshi qil.”',
      ],
      2,
      'Samarali feedback aniq, rivojlantiruvchi va o‘quvchiga nimani yaxshilash kerakligini ko‘rsatadi.',
    ),

    q(
      'm2t4-m05',
      'Xalqaro baholash natijasidan maktab rahbari qanday foydalanishi maqsadga muvofiq?',
      [
        'Faqat reyting uchun',
        'Muammoli kompetensiyalarni aniqlab, rivojlantirish rejasini tuzish uchun',
        'Faqat o‘qituvchilarni jazolash uchun',
        'Natijani yashirish uchun',
      ],
      1,
      'Xalqaro natijalar rivojlanish ehtiyojlarini aniqlash va aniq strategik choralarni belgilash uchun ishlatilishi kerak.',
    ),

    q(
      'm2t4-m06',
      'O‘quvchilarning 100 foizi fan bo‘yicha ijobiy baho oldi, lekin yuqori darajadagi topshiriqlarda natija past. Rahbar nimani tekshirishi kerak?',
      [
        'Faqat davomatni',
        'Kompetensiya va yuqori darajadagi fikrlash ko‘nikmalarini',
        'Faqat sinf xonasini',
        'Faqat o‘qituvchining hujjatlarini',
      ],
      1,
      'Yuqori o‘zlashtirishning o‘zi chuqur kompetensiya mavjudligini anglatmaydi. Murakkab topshiriqlar orqali fikrlash darajasini tahlil qilish zarur.',
    ),

    q(
      'm2t4-m07',
      'BSB va CHSB o‘rtasidagi asosiy farq qaysi?',
      [
        'BSB bo‘lim yakunini, CHSB esa chorak yakunini umumlashtiradi',
        'Ikkalasi ham faqat dars boshida o‘tkaziladi',
        'CHSB faqat boshlang‘ich sinf uchun',
        'BSB faqat o‘qituvchilar uchun',
      ],
      0,
      'BSB bo‘lim yakunidagi natijani, CHSB esa chorak yakunidagi natijani umumlashtiradi.',
    ),

    q(
      'm2t4-m08',
      'Direktor BSB va CHSB topshiriqlari haddan tashqari ko‘payib, o‘quvchilar yuklamasi oshayotganini aniqladi. Eng maqbul chorasi qaysi?',
      [
        'Nazoratlar sonini yanada oshirish',
        'Baholash yuklamasini me’yorlashtirish va jadvalni muvofiqlashtirish',
        'Barcha fanlarda bir xil topshiriq berish',
        'Muammoni e’tiborsiz qoldirish',
      ],
      1,
      'Baholash ham ta’lim yuklamasining bir qismi. Uni muvofiqlashtirish o‘quvchi va o‘qituvchi vaqtini himoya qiladi.',
    ),

    q(
      'm2t4-m09',
      'Riskka asoslangan monitoringning afzalligi nimada?',
      [
        'Barcha jarayonlarni bir xil intensivlikda tekshiradi',
        'Resursni muammoli va xavf yuqori bo‘lgan yo‘nalishga yo‘naltiradi',
        'Faqat hujjatlarni tekshiradi',
        'Faqat yuqori natijali sinflarni tekshiradi',
      ],
      1,
      'Riskka asoslangan monitoring monitoring resurslarini eng muhim va xavfli nuqtalarga yo‘naltirish imkonini beradi.',
    ),

    q(
      'm2t4-m10',
      'O‘qituvchi kasbiy mahoratini oshirish ta’lim sifatiga qanday ta’sir qiladi?',
      [
        'Metodika va ta’lim samaradorligini yaxshilashi mumkin',
        'Faqat hujjatlar sonini oshiradi',
        'Hech qanday ta’sir qilmaydi',
        'Faqat maktab reytingiga ta’sir qiladi',
      ],
      0,
      'Kasbiy rivojlanish zamonaviy metodlar, baholash va o‘quvchi ehtiyojlariga mos yondashuvni kuchaytiradi.',
    ),

    q(
      'm2t4-m11',
      'Monitoringda “natija” indikatoriga qaysi misol mos keladi?',
      [
        'O‘qituvchi dars rejasining mavjudligi',
        'O‘quvchilarning kompetensiya bo‘yicha erishgan natijasi',
        'Sinf xonasidagi partalar soni',
        'Dars davomiyligi',
      ],
      1,
      'Natija indikatori ta’lim yakunida erishilgan bilim, ko‘nikma va kompetensiyalarni ifodalaydi.',
    ),

    q(
      'm2t4-m12',
      'Monitoringda “jarayon” indikatoriga qaysi misol mos?',
      [
        'O‘quvchining yakuniy bali',
        'Darsda interaktiv va kompetensiyaga yo‘naltirilgan metodlardan foydalanish',
        'Maktabning umumiy o‘quvchilar soni',
        'Maktab binosining yoshi',
      ],
      1,
      'Jarayon indikatori ta’lim qanday tashkil etilayotganini ko‘rsatadi.',
    ),

    q(
      'm2t4-m13',
      'Monitoringda “sharoit-resurs” indikatoriga qaysi misol mos?',
      [
        'O‘quvchilarning yakuniy ballari',
        'O‘qituvchining darsdagi savollari',
        'Ta’lim uchun zarur raqamli va didaktik resurslarning mavjudligi',
        'O‘quvchining uy vazifasi',
      ],
      2,
      'Resurs va sharoit indikatorlari ta’limni tashkil etish uchun mavjud imkoniyatlarni ko‘rsatadi.',
    ),

    q(
      'm2t4-m14',
      'O‘qituvchi barcha o‘quvchilarga bir xil feedback beradi. Bunday yondashuvning asosiy kamchiligi nima?',
      [
        'Individual ehtiyojlarni hisobga olmasligi',
        'Baholashni butunlay bekor qilishi',
        'Dars vaqtini qisqartirishi',
        'Faqat yuqori natijali o‘quvchilarni qo‘llashi',
      ],
      0,
      'Samarali feedback o‘quvchining xatosi va ehtiyojiga mos bo‘lishi kerak.',
    ),

    q(
      'm2t4-m15',
      'PISA uslubidagi topshiriqning eng muhim belgisi qaysi?',
      [
        'Faqat darslikdagi ta’rifni so‘rash',
        'Bilimni yangi va hayotiy vaziyatga ko‘chirish',
        'Faqat yodlangan formulani yozish',
        'Faqat bitta so‘zli javob',
      ],
      1,
      'PISA yondashuvida bilimni notanish, real yoki muammoli vaziyatda qo‘llash muhim.',
    ),

    q(
      'm2t4-m16',
      'Maktabda ichki monitoring muammosi aniqladi. Qaysi ketma-ketlik eng maqbul?',
      [
        'Muammo → jazo → hisobot → yakun',
        'Muammo → sabab → yechim → qayta o‘lchash',
        'Hisobot → jazo → muammo → yechim',
        'Reyting → jazo → nazorat → yakun',
      ],
      1,
      'Rivojlantiruvchi monitoring sikli muammoni aniqlash, sababini tahlil qilish, yechim joriy etish va natijani qayta o‘lchashdan iborat.',
    ),

    q(
      'm2t4-m17',
      'O‘quvchi natijasi past, lekin o‘qituvchi dars metodikasiga oid muammo aniqlanmadi. Keyingi tekshiruvda nima o‘rganilishi mumkin?',
      [
        'Faqat maktab rahbarining ish vaqti',
        'O‘quvchining individual ehtiyoji va psixologik muhit',
        'Faqat hujjatlarning soni',
        'Faqat maktab binosi',
      ],
      1,
      'Natijaga ta’sir qiluvchi omillarni kompleks ko‘rish uchun individual ehtiyoj va ta’lim muhiti ham tahlil qilinadi.',
    ),

    q(
      'm2t4-m18',
      'Davlat ta’lim standarti bilan moslashtirilgan baholashning afzalligi nimada?',
      [
        'Natijani belgilangan ta’lim talablariga bog‘laydi',
        'Faqat yuqori baholarni ko‘paytiradi',
        'O‘quvchi sonini kamaytiradi',
        'Baholashni bekor qiladi',
      ],
      0,
      'Baholash DTSdagi kutiladigan natijalar bilan mos bo‘lsa, baho real o‘zlashtirishni aniqroq aks ettiradi.',
    ),

    q(
      'm2t4-m19',
      'O‘qituvchi xalqaro sertifikatga ega bo‘ldi. Bu ta’lim sifatini oshirish uchun qanday ishlatilishi mumkin?',
      [
        'Faqat sertifikatni devorga ilish',
        'Kasbiy tajribani maktab metodik hamjamiyatida tarqatish',
        'Boshqa o‘qituvchilarni chetlatish',
        'Monitoringni to‘xtatish',
      ],
      1,
      'Professional kompetensiyani jamoa bilan bo‘lishish butun maktabning metodik salohiyatini oshirishga xizmat qiladi.',
    ),

    q(
      'm2t4-m20',
      'Ta’lim sifatini boshqarishda ota-onalar fikrini o‘rganish qaysi sababga ko‘ra foydali?',
      [
        'Ta’lim xizmatining foydalanuvchi nuqtayi nazarini tushunish uchun',
        'Faqat reyting oshirish uchun',
        'O‘qituvchini jazolash uchun',
        'Darslarni bekor qilish uchun',
      ],
      0,
      'Ota-onalar fikri ta’lim sifati, kommunikatsiya va xizmatlardan foydalanish tajribasiga oid qo‘shimcha dalil beradi.',
    ),

    q(
      'm2t4-m21',
      'O‘quvchilarning iqtidorini monitoring qilishdan asosiy maqsad nima?',
      [
        'Faqat olimpiadaga yuborish',
        'Ularning rivojlanish ehtiyojlariga mos imkoniyat yaratish',
        'Faqat reyting tuzish',
        'Faqat boshqa o‘quvchilardan ajratish',
      ],
      1,
      'Iqtidorli o‘quvchilar uchun murakkabroq topshiriqlar, loyihalar va rivojlantiruvchi imkoniyatlar yaratilishi kerak.',
    ),

    q(
      'm2t4-m22',
      'Ta’lim sifati bo‘yicha ma’lumotlar turli manbalardan farq qilsa, rahbar nima qilishi kerak?',
      [
        'Eng yuqori ko‘rsatkichni tanlash',
        'Dalillarni tekshirib, ma’lumotlarni triangulyatsiya qilish',
        'Ma’lumotlarni butunlay rad etish',
        'Faqat bitta o‘qituvchining fikrini olish',
      ],
      1,
      'Turli manbalardan kelgan ma’lumotlarni taqqoslash va tekshirish ishonchli boshqaruv qarorini ta’minlaydi.',
    ),

    q(
      'm2t4-m23',
      'Ichki monitoringni faqat jazolash vositasiga aylantirishning xavfi nimada?',
      [
        'O‘qituvchilar muammolarni yashirishi va rivojlanish imkoniyati kamayishi mumkin',
        'Natijalar doim oshadi',
        'O‘quvchilar soni ko‘payadi',
        'Hujjatlar kamayadi',
      ],
      0,
      'Jazolovchi muhit muammolarni ochiq ko‘rsatishni kamaytirishi mumkin. Rivojlantiruvchi monitoring esa ochiqlik va takomillashtirishni qo‘llab-quvvatlaydi.',
    ),

    q(
      'm2t4-m24',
      'O‘qituvchining professional vaqtini himoya qilish ta’lim sifatiga qanday bog‘liq?',
      [
        'Keraksiz yuklamani kamaytirib, darsga tayyorgarlik va kasbiy rivojlanishga vaqt qoldiradi',
        'Faqat ish vaqtini uzaytiradi',
        'Ta’lim sifatiga aloqasi yo‘q',
        'Faqat hisobotlar sonini oshiradi',
      ],
      0,
      'O‘qituvchining asosiy professional vazifalariga vaqt ajratishi ta’lim sifati uchun muhim shartdir.',
    ),

    q(
      'm2t4-m25',
      'O‘quvchilarning bilimini faqat test orqali baholashning kamchiligi nimada?',
      [
        'Ba’zi amaliy, ijodiy va kommunikativ kompetensiyalar to‘liq ko‘rinmasligi mumkin',
        'Test har doim noto‘g‘ri',
        'Testdan foydalanish mumkin emas',
        'Test faqat boshlang‘ich sinfga mos',
      ],
      0,
      'Kompleks baholash turli topshiriq va usullar orqali kompetensiyaning turli jihatlarini ko‘rishga yordam beradi.',
    ),

    q(
      'm2t4-m26',
      'O‘quvchi o‘z xatosini mustaqil tahlil qilib, keyingi maqsadini belgiladi. Bu qaysi kompetensiyani rivojlantiradi?',
      [
        'O‘z-o‘zini baholash va metakognitiv ko‘nikmani',
        'Faqat yodlashni',
        'Faqat tez yozishni',
        'Faqat raqobatni',
      ],
      0,
      'O‘z faoliyatini tahlil qilish va keyingi maqsadni belgilash metakognitiv va o‘z-o‘zini boshqarish ko‘nikmalarini rivojlantiradi.',
    ),

    q(
      'm2t4-m27',
      'Ta’lim sifatini baholashda “evidence-based” yondashuvning mazmuni qaysi?',
      [
        'Qarorni odat bo‘yicha qabul qilish',
        'Qarorni dalil va tahlil qilingan ma’lumotlar asosida qabul qilish',
        'Faqat rahbar sezgisiga tayanish',
        'Faqat bitta natijaga qarash',
      ],
      1,
      'Evidence-based boshqaruv qarorlarni ishonchli dalillar, ma’lumotlar va tahlil asosida qabul qilishni anglatadi.',
    ),

    q(
      'm2t4-m28',
      'Agar o‘quvchilarning bilim darajasi yaxshi, lekin mustaqil muammo yechish ko‘nikmasi past bo‘lsa, qaysi chora samaraliroq?',
      [
        'Faqat ko‘proq yodlash topshiriqlari berish',
        'Muammoli, kompetensiyaga yo‘naltirilgan topshiriqlarni ko‘paytirish',
        'Faqat nazorat ishlarini ko‘paytirish',
        'Faqat darslikni qayta o‘qitish',
      ],
      1,
      'Mustaqil muammo yechish uchun real va muammoli vaziyatlar asosidagi kompetensiyaviy topshiriqlar samaraliroq.',
    ),

    q(
      'm2t4-m29',
      'Sifat monitoringida “ta’lim muhiti”ni baholashga qaysi holat kiradi?',
      [
        'Faqat test natijasi',
        'O‘quvchilar o‘zini xavfsiz va hurmat qilingan deb his qilishi',
        'Faqat o‘qituvchi sertifikati',
        'Faqat darslik soni',
      ],
      1,
      'Psixologik xavfsizlik, hurmat va hamkorlik muhiti ta’lim sifatining muhim shartlaridan biridir.',
    ),

    q(
      'm2t4-m30',
      'Maktab rahbari monitoring natijasida muammo topdi, ammo uning sababini aniqlamasdan chora belgiladi. Asosiy xato nimada?',
      [
        'Monitoring o‘tkazilgani',
        'Sabab-tahlil bosqichi o‘tkazib yuborilgani',
        'Natija o‘lchangani',
        'Ma’lumot yig‘ilgani',
      ],
      1,
      'Muammoning ildiz sababini aniqlamasdan berilgan chora ko‘pincha barqaror natija bermaydi.',
    ),
  ],

  // =========================================================
  // 30 TA QIYIN
  // =========================================================
  hard: [
    q(
      'm2t4-h01',
      'Maktabda o‘qituvchilarni rag‘batlantirish tizimi faqat o‘quvchilarning yakuniy ballariga bog‘langan. Eng maqbul takomillashtirish qaysi?',
      [
        'Faqat ball mezonini yanada oshirish',
        'Natija bilan birga metodika, rivojlanish, innovatsiya va jamoaviy hissani ham shaffof mezonlarda hisobga olish',
        'Rag‘batlantirishni butunlay bekor qilish',
        'Faqat ish stajiga qarab rag‘batlantirish',
      ],
      1,
      'Adolatli rag‘batlantirish ko‘p mezonli va shaffof bo‘lishi kerak. Faqat yakuniy ball o‘qituvchi faoliyatining barcha jihatlarini aks ettirmaydi.',
    ),

    q(
      'm2t4-h02',
      'Monitoringda o‘quvchilar natijasi pasaygani aniqlandi. Tahlil jarayonida o‘qituvchining metodikasi emas, davomat va uy sharoitidagi omillar ham ta’sir qilayotgani ma’lum bo‘ldi. Rahbarning eng to‘g‘ri yondashuvi qaysi?',
      [
        'Faqat o‘qituvchini ayblash',
        'Muammoni ko‘p omilli deb ko‘rib, tegishli qo‘llab-quvvatlash choralarini belgilash',
        'Natijani yashirish',
        'Faqat baholarni o‘zgartirish',
      ],
      1,
      'Ta’lim natijasi ko‘plab omillarga bog‘liq. Samarali boshqaruv muammoning real sabablarini kompleks tahlil qiladi.',
    ),

    q(
      'm2t4-h03',
      'Elektron monitoring tizimi maktabda ko‘plab ma’lumotlarni yig‘moqda, lekin rahbariyat ulardan qaror qabul qilishda foydalanmayapti. Eng muhim muammo nima?',
      [
        'Ma’lumotning ko‘pligi emas, undan tahliliy foydalanishning yo‘qligi',
        'Elektron tizimning mavjudligi',
        'O‘quvchilar soni',
        'Dars jadvali',
      ],
      0,
      'Raqamlashtirishning maqsadi ma’lumotni shunchaki yig‘ish emas, uni tahlil qilib boshqaruv qarorlariga aylantirishdir.',
    ),

    q(
      'm2t4-h04',
      'O‘quvchilarning BSB va CHSB ishlari bir davrga haddan tashqari jamlangan. Direktorning birinchi navbatdagi vazifasi nima?',
      [
        'Nazoratlarni yanada ko‘paytirish',
        'Baholash jadvalini muvofiqlashtirib, o‘quvchi yuklamasini me’yorlashtirish',
        'Barcha nazoratni bekor qilish',
        'Faqat bitta fan nazoratini qoldirish',
      ],
      1,
      'Baholashning o‘zi ham o‘quv yuklamasi hisoblanadi. Uni rejalashtirish va muvofiqlashtirish sifatli boshqaruvning bir qismidir.',
    ),

    q(
      'm2t4-h05',
      'O‘quvchilar mavzuni nazariy jihatdan yaxshi biladi, ammo real hayotdagi vaziyatda bilimdan foydalana olmaydi. Qaysi yo‘nalish eng muhim?',
      [
        'Faqat yodlash mashqlarini ko‘paytirish',
        'Kompetensiyaga va real vaziyatlarga asoslangan topshiriqlarni ko‘paytirish',
        'Faqat nazorat ishlarini ko‘paytirish',
        'Faqat darslikni qayta o‘qitish',
      ],
      1,
      'Nazariy bilimni amaliy vaziyatga ko‘chirish kompetensiyaviy ta’limning muhim belgisi hisoblanadi.',
    ),

    q(
      'm2t4-h06',
      'Sinfda o‘quvchilarning barchasi ijobiy baho olmoqda, ammo yuqori darajali topshiriqlarning aksariyati bajarilmayapti. Rahbar qanday xulosa qilishi kerak?',
      [
        'Ta’lim sifati mutlaqo yuqori',
        'Baholar ijobiy bo‘lsa-da, chuqur kompetensiyalarni alohida tahlil qilish kerak',
        'O‘qituvchi ishlamayapti',
        'Barcha baholarni bekor qilish kerak',
      ],
      1,
      'Yuqori o‘zlashtirish va yuqori kompetensiya bir xil tushuncha emas. Murakkab fikrlash va qo‘llash ko‘nikmalari ham o‘lchanishi kerak.',
    ),

    q(
      'm2t4-h07',
      'O‘qituvchi testdan keyin faqat baholarni e’lon qildi, lekin xatolar bo‘yicha feedback bermadi. Qaysi imkoniyat boy berildi?',
      [
        'Formativ rivojlantirish imkoniyati',
        'Faqat davomatni tekshirish',
        'Akkreditatsiya imkoniyati',
        'Faqat reyting tuzish',
      ],
      0,
      'Natijani e’lon qilishdan tashqari xatolarni tahlil qilish va keyingi qadamni ko‘rsatish formativ baholashning muhim vazifasidir.',
    ),

    q(
      'm2t4-h08',
      'Baholash topshiriqlari DTSda ko‘zda tutilgan kutilayotgan natijalarni emas, faqat darslikdagi faktlarni tekshirmoqda. Asosiy muammo qaysi?',
      [
        'Baholash va kutilayotgan ta’lim natijalari o‘rtasidagi moslikning buzilishi',
        'Darslikdan foydalanilgani',
        'Test tuzilganligi',
        'O‘quvchilar soni',
      ],
      0,
      'Baholash kutilayotgan natijalar bilan mos bo‘lishi kerak. Aks holda baho real kompetensiyani aks ettirmasligi mumkin.',
    ),

    q(
      'm2t4-h09',
      'Monitoringda o‘quvchi natijasi, dars metodikasi va sinfdagi psixologik muhit birgalikda tahlil qilindi. Bu qanday yondashuv?',
      [
        'Faqat natijaviy nazorat',
        'Kompleks sifat tahlili',
        'Faqat moliyaviy monitoring',
        'Faqat hujjat auditi',
      ],
      1,
      'Natija, jarayon va muhitni birgalikda ko‘rish ta’lim sifatiga kompleks yondashuvni bildiradi.',
    ),

    q(
      'm2t4-h10',
      'Ichki monitoringdan keyin rahbar o‘qituvchilar bilan muammo sabablarini muhokama qilib, metodik yordam rejasini tuzdi. Bu qanday boshqaruv yondashuvini ifodalaydi?',
      [
        'Faqat jazolovchi',
        'Rivojlantiruvchi va qo‘llab-quvvatlovchi',
        'Faqat ma’muriy',
        'Faqat statistik',
      ],
      1,
      'Monitoring natijasidan metodik yordam va rivojlanish rejasi uchun foydalanish rivojlantiruvchi boshqaruvga xos.',
    ),

    q(
      'm2t4-h11',
      'O‘quvchilarning PISA tipidagi topshiriqlarda natijasi past. Maktab rahbari eng avvalo qaysi savolni berishi kerak?',
      [
        'Qaysi o‘qituvchiga jazo beramiz?',
        'O‘quvchilar bilimni real va notanish vaziyatlarda qo‘llashga qanchalik o‘rgatilmoqda?',
        'Qaysi sinfda o‘quvchi ko‘p?',
        'Qaysi fan xonasi katta?',
      ],
      1,
      'PISA tipidagi topshiriqlar bilimni qo‘llash, tahlil qilish va muammo yechishni talab qiladi. Shu sababli metodika tahlil qilinadi.',
    ),

    q(
      'm2t4-h12',
      'Bir maktabda o‘qituvchilar yuqori natija ko‘rsatish uchun oson testlarni ko‘paytirmoqda. Rahbar qanday xavfni ko‘rishi kerak?',
      [
        'Natija sun’iy ravishda oshib, real kompetensiya haqida noto‘g‘ri tasavvur paydo bo‘lishi mumkin',
        'O‘quvchilar juda ko‘p bilim oladi',
        'Baholash yanada adolatli bo‘ladi',
        'Monitoringga ehtiyoj qolmaydi',
      ],
      0,
      'Faqat oson topshiriqlar natijani sun’iy oshirishi mumkin. Baholash kutilayotgan kompetensiyalarni haqiqiy aks ettirishi kerak.',
    ),

    q(
      'm2t4-h13',
      'O‘qituvchining kasbiy rivojlanishiga oid sertifikati bor, ammo dars kuzatuvida o‘quvchi faolligi past. Rahbar qanday xulosa qilishi kerak?',
      [
        'Sertifikat bo‘lsa, muammo bo‘lishi mumkin emas',
        'Sertifikat muhim dalil, ammo amaliy dars natijasi bilan birga baholanishi kerak',
        'O‘qituvchini darhol lavozimidan ozod qilish kerak',
        'Dars kuzatuvini bekor qilish kerak',
      ],
      1,
      'Professional sertifikat muhim ko‘rsatkich, lekin amaliy pedagogik faoliyat va o‘quvchi natijalari bilan kompleks baholanishi kerak.',
    ),

    q(
      'm2t4-h14',
      'Monitoring ma’lumotlari o‘qituvchining darslari sifatli, ammo o‘quvchilarning uyga vazifani bajarish darajasi pastligini ko‘rsatdi. Eng maqbul chora qaysi?',
      [
        'Faqat o‘qituvchini ayblash',
        'Muammoning sababini o‘quvchi, ota-ona va topshiriq dizayni kesimida o‘rganish',
        'Uy vazifasini butunlay bekor qilish',
        'Barcha o‘quvchilarga past baho qo‘yish',
      ],
      1,
      'Muammo ko‘p omilli bo‘lishi mumkin. Uy vazifasining mazmuni, o‘quvchi sharoiti va ota-ona hamkorligi tahlil qilinadi.',
    ),

    q(
      'm2t4-h15',
      'Maktabda monitoring natijalari yaxshi, lekin o‘qituvchilar muammolarni rahbariyatga bildirishdan qo‘rqadi. Bu nimani ko‘rsatishi mumkin?',
      [
        'Monitoring tizimi mutlaqo mukammal',
        'Jazolovchi tashkiliy muhit mavjud bo‘lishi mumkin',
        'O‘quvchilar juda kuchli',
        'Resurslar ortiqcha',
      ],
      1,
      'Muammolarni yashirish yoki bildirishdan qo‘rqish monitoringning jazolovchi muhitga aylanganidan dalolat berishi mumkin.',
    ),

    q(
      'm2t4-h16',
      'O‘quvchi o‘z xatolarini tahlil qilib, “Keyingi topshiriqda dalil keltirishni yaxshilayman” deb maqsad qo‘ydi. Bu qaysi jarayonni kuchaytiradi?',
      [
        'Faqat summativ baholashni',
        'O‘z-o‘zini baholash va metakognitiv nazoratni',
        'Faqat tashqi nazoratni',
        'Faqat reytingni',
      ],
      1,
      'O‘quvchi o‘z faoliyatini tahlil qilib, aniq rivojlanish maqsadini belgilashi metakognitiv yondashuvni kuchaytiradi.',
    ),

    q(
      'm2t4-h17',
      'Maktab rahbari o‘quvchilar natijasini faqat bitta test orqali baholadi. Natijani ishonchliroq qilish uchun nima qilish mumkin?',
      [
        'Faqat testni takrorlash',
        'Turli manbalar: kuzatuv, topshiriq, diagnostika va feedbackni birgalikda tahlil qilish',
        'Faqat o‘qituvchidan so‘rash',
        'Faqat ota-onalardan so‘rash',
      ],
      1,
      'Bir nechta ishonchli manbani birgalikda tahlil qilish natija haqida aniqroq tasavvur beradi.',
    ),

    q(
      'm2t4-h18',
      'Ta’lim sifatini boshqarishda “natija–jarayon–muhit” modelining afzalligi nimada?',
      [
        'Muammoni faqat yakuniy ball bilan cheklamaydi',
        'Faqat hujjatlarni ko‘paytiradi',
        'Faqat testlarni kamaytiradi',
        'Faqat direktor faoliyatini baholaydi',
      ],
      0,
      'Ushbu model natijani yuzaga keltiruvchi jarayon va muhitni ham tahlil qilish imkonini beradi.',
    ),

    q(
      'm2t4-h19',
      'O‘qituvchilar o‘quvchilar natijasi pastligini faqat o‘quvchilarning qobiliyatiga bog‘lashmoqda. Rahbar qanday yondashuvni taklif qilishi kerak?',
      [
        'Faqat o‘quvchini ayblash',
        'Natijaga ta’sir qiluvchi barcha omillarni dalillar asosida tahlil qilish',
        'Faqat sinfni almashtirish',
        'Faqat bahoni oshirish',
      ],
      1,
      'Natija ko‘plab omillarning mahsuli. Metodika, davomat, motivatsiya, muhit va resurslar ham tahlil qilinishi kerak.',
    ),

    q(
      'm2t4-h20',
      'O‘qituvchining ish vaqtining katta qismi ta’limga bevosita aloqasi bo‘lmagan topshiriqlarga ketmoqda. Bu holatni sifat nuqtayi nazaridan qanday baholash mumkin?',
      [
        'Professional vaqtning samarasiz sarflanishi',
        'Ta’lim sifatining avtomatik oshishi',
        'Monitoringga ehtiyoj yo‘qligi',
        'O‘quvchi natijasining oshishi',
      ],
      0,
      'O‘qituvchining professional vaqti asosan ta’lim, tayyorgarlik, baholash va rivojlanishga yo‘naltirilishi kerak.',
    ),

    q(
      'm2t4-h21',
      'Maktabda PISA natijalarini yaxshilash uchun faqat testga tayyorlov mashg‘ulotlari tashkil qilindi. Nima yetishmayapti?',
      [
        'Kompetensiyaga yo‘naltirilgan kundalik ta’lim amaliyoti',
        'Ko‘proq test blankalari',
        'Faqat reyting',
        'Faqat nazorat',
      ],
      0,
      'Barqaror natija uchun kompetensiyalar kundalik dars jarayonida shakllantirilishi kerak, faqat testga tayyorlash yetarli emas.',
    ),

    q(
      'm2t4-h22',
      'Baholash mezonlari o‘quvchilarga oldindan tushuntirilsa, qaysi ijobiy natija kutiladi?',
      [
        'O‘quvchi kutilayotgan natijani anglab, o‘z faoliyatini rejalashtira oladi',
        'O‘quvchi umuman ishlamaydi',
        'O‘qituvchi baholashdan voz kechadi',
        'Nazoratning barcha turlari bekor qilinadi',
      ],
      0,
      'Aniq mezonlar o‘quvchiga kutilayotgan natijani tushunish va o‘z faoliyatini unga moslashtirish imkonini beradi.',
    ),

    q(
      'm2t4-h23',
      'Monitoring natijasida bir sinfda matematika natijalari pasaygani aniqlandi. Rahbar faqat qo‘shimcha dars belgilashdan oldin nima qilishi kerak?',
      [
        'Sabablarni diagnostika orqali aniqlash',
        'Darhol o‘quvchilarni boshqa sinfga o‘tkazish',
        'Faqat baholarni oshirish',
        'O‘qituvchini almashtirish',
      ],
      0,
      'Muammoning sababini aniqlamasdan berilgan chora noto‘g‘ri bo‘lishi mumkin. Avval diagnostika zarur.',
    ),

    q(
      'm2t4-h24',
      'Ta’lim sifatini oshirish bo‘yicha joriy etilgan yangi metod uch oy davomida sinovdan o‘tkazildi. Keyingi boshqaruv qadami qaysi?',
      [
        'Natijani o‘lchab, samaradorligini baholash',
        'Metodni darhol barcha sinflarga majburiy joriy qilish',
        'Natijani tekshirmaslik',
        'Loyihani hujjatsiz tugatish',
      ],
      0,
      'Innovatsiyani kengaytirishdan oldin uning ta’siri va samaradorligini dalillar asosida baholash kerak.',
    ),

    q(
      'm2t4-h25',
      'O‘quvchilarning test natijalari yuqori, lekin dars kuzatuvida mustaqil fikrlash kamligi aniqlandi. Rahbar qaysi xulosani chiqarishi mumkin?',
      [
        'Baholash faqat test natijasi bilan cheklanmasligi kerak',
        'Testlar mutlaqo keraksiz',
        'O‘quvchilar umuman bilimga ega emas',
        'Dars kuzatuvi noto‘g‘ri',
      ],
      0,
      'Turli baholash va kuzatuv dalillarini birgalikda tahlil qilish ta’lim sifatining to‘liqroq manzarasini beradi.',
    ),

    q(
      'm2t4-h26',
      'Sifat monitoringida o‘quvchi natijasi pasayishi aniqlanganda eng kuchli boshqaruv savoli qaysi?',
      [
        'Kim aybdor?',
        'Bu natijaga olib kelgan asosiy sabablar qaysilar va ularni qanday bartaraf etamiz?',
        'Kimga tanbeh beramiz?',
        'Qaysi hujjatni ko‘paytiramiz?',
      ],
      1,
      'Rivojlantiruvchi boshqaruv aybdorni izlashdan ko‘ra sababni aniqlash va yechimga e’tibor qaratadi.',
    ),

    q(
      'm2t4-h27',
      'Ta’lim sifatini baholashda xalqaro tadqiqotlar natijasi bilan birga milliy va maktab ichki ma’lumotlarini ham tahlil qilishning afzalligi nimada?',
      [
        'Kontekstni hisobga olgan holda muammolarni chuqurroq tushunish imkonini beradi',
        'Faqat hisobotni ko‘paytiradi',
        'Xalqaro baholashni bekor qiladi',
        'Faqat reytingni oshiradi',
      ],
      0,
      'Turli darajadagi ma’lumotlarni birlashtirish muammoni kontekst bilan birga tahlil qilish imkonini beradi.',
    ),

    q(
      'm2t4-h28',
      'O‘quvchilarning mustaqil muammo yechish qobiliyatini baholash uchun qaysi topshiriq eng mos?',
      [
        'Ta’rifni aynan yoddan yozish',
        'Yangi vaziyatda bir nechta ma’lumotdan foydalanib yechim ishlab chiqish',
        'Faqat sanani aytish',
        'Faqat atamani ko‘chirish',
      ],
      1,
      'Kompetensiyaviy topshiriq yangi vaziyatni tahlil qilish, dalillardan foydalanish va mustaqil yechim ishlab chiqishni talab qiladi.',
    ),

    q(
      'm2t4-h29',
      'Monitoring natijasida aniqlangan muammo bo‘yicha chora ko‘rildi, ammo qayta o‘lchash amalga oshirilmadi. Qaysi bosqich yetishmayapti?',
      [
        'Nazorat va ta’sirni qayta baholash',
        'Muammoni aniqlash',
        'Ma’lumot yig‘ish',
        'Dastlabki tahlil',
      ],
      0,
      'Qayta o‘lchash chora haqiqatan natija berganini aniqlash uchun zarur.',
    ),

    q(
      'm2t4-h30',
      'Ta’lim sifatini boshqarishda eng barqaror natija qaysi yondashuv orqali yuzaga keladi?',
      [
        'Faqat nazoratni kuchaytirish',
        'Dalil → tahlil → yechim → monitoring → qayta takomillashtirish sikli',
        'Faqat jarima',
        'Faqat yakuniy test',
      ],
      1,
      'Sifatni uzluksiz yaxshilash dalillarni yig‘ish, tahlil qilish, yechim joriy etish va natijani qayta o‘lchash sikliga tayanadi.',
    ),
  ],

  // =========================================================
  // 10 TA CASE
  // =========================================================
  case: [
    q(
      'm2t4-c01',
      'CASE 1. Maktabda monitoring natijasida o‘quvchilarning yuqori darajadagi topshiriqlarni bajarishi pastligi aniqlandi. Quyidagi fikrlarni baholang: 1) Faqat testlar sonini ko‘paytirish yetarli. 2) Kompetensiyaviy topshiriqlarni ko‘paytirish maqsadga muvofiq. 3) Muammoni faqat o‘quvchi qobiliyati bilan izohlash kerak.',
      [
        '1 — To‘g‘ri, 2 — Noto‘g‘ri, 3 — To‘g‘ri',
        '1 — To‘g‘ri, 2 — To‘g‘ri, 3 — Noto‘g‘ri',
        '1 — Noto‘g‘ri, 2 — Noto‘g‘ri, 3 — To‘g‘ri',
        '1 — Noto‘g‘ri, 2 — To‘g‘ri, 3 — To‘g‘ri',
      ],
      1,
      'Faqat testlar sonini ko‘paytirish muammoni hal qilmaydi. Kompetensiyaviy topshiriqlar zarur, muammoni esa faqat o‘quvchi qobiliyati bilan izohlash noto‘g‘ri.',
    ),

    q(
      'm2t4-c02',
      'CASE 2. Maktabda BSB va CHSB topshiriqlari bir necha kun ichida jamlanib qoldi. O‘quvchilar yuklamasi oshdi va ayrim fanlarda tayyorgarlik sifati pasaydi. Direktorning eng to‘g‘ri boshqaruv yondashuvi qaysi?',
      [
        'Nazoratlarni yanada ko‘paytirish',
        'Baholash jadvalini muvofiqlashtirib, o‘quvchi yuklamasini me’yorlashtirish',
        'Barcha nazoratlarni bekor qilish',
        'Faqat eng kuchli sinflarda nazorat o‘tkazish',
      ],
      1,
      'Baholashni rejalashtirishda o‘quvchi va o‘qituvchi yuklamasi hisobga olinishi kerak.',
    ),

    q(
      'm2t4-c03',
      'CASE 3. O‘qituvchilarning professional vaqtini himoya qilish uchun qaysi choralar maqsadga muvofiq? 1) Keraksiz hisobotlarni qisqartirish. 2) Ta’limga aloqasiz topshiriqlarni kamaytirish. 3) O‘qituvchini barcha tashkiliy ishlarga jalb qilish. 4) Darsga tayyorgarlik uchun vaqt ajratish. 5) Faqat hujjat yuritishni kuchaytirish. 6) Metodik hamkorlik vaqtini rejalashtirish.',
      [
        '1, 2, 4',
        '1, 3, 5',
        '1, 2, 4, 6',
        '2, 3, 5, 6',
      ],
      2,
      'Professional vaqtni himoya qilish keraksiz yuklamani kamaytirish, tayyorgarlik va metodik hamkorlik uchun vaqt yaratishni nazarda tutadi.',
    ),

    q(
      'm2t4-c04',
      'CASE 4. Maktab PISA tipidagi topshiriqlarda past natija ko‘rsatmoqda. Qaysi choralar zamonaviy va dalillarga asoslangan yondashuvga mos? 1) Faqat test variantlarini ko‘paytirish. 2) Real hayotiy vaziyatlar asosidagi topshiriqlarni ko‘paytirish. 3) O‘quvchilarning xatolarini diagnostik tahlil qilish. 4) Faqat yodlash mashqlarini ko‘paytirish. 5) Muammoli va kompetensiyaviy topshiriqlarni darsga integratsiya qilish. 6) Natijani qayta o‘lchash.',
      [
        '1, 2, 4',
        '2, 3, 5',
        '2, 3, 5, 6',
        '1, 4, 5, 6',
      ],
      2,
      'PISA natijasini yaxshilash uchun real vaziyatlar, diagnostika, kompetensiyaviy topshiriqlar va qayta o‘lchash birgalikda qo‘llanadi.',
    ),

    q(
      'm2t4-c05',
      'CASE 5. Ichki monitoring natijasida quyidagilar aniqlandi: o‘quvchilar natijasi pasaygan, ayrim o‘qituvchilarda metodik qiyinchilik bor, sinfdagi psixologik muhit ham muammoli. Quyidagi fikrlardan qaysi biri to‘g‘ri? 1) Faqat o‘quvchini ayblash noto‘g‘ri. 2) Natija, jarayon va muhit birgalikda tahlil qilinishi kerak. 3) Muammoni hal qilish uchun sabablar aniqlanib, keyin yechim va qayta monitoring amalga oshirilishi kerak.',
      [
        'Faqat 1-to‘g‘ri',
        '1 va 2-to‘g‘ri',
        '2 va 3-to‘g‘ri',
        '1, 2 va 3 — barchasi to‘g‘ri',
      ],
      3,
      'Ta’lim sifati ko‘p omilli. Natija, jarayon va muhitni birgalikda tahlil qilish hamda sababdan yechimgacha bo‘lgan siklni tashkil etish eng maqbul yondashuvdir.',
    ),

    q(
      'm2t4-c06',
      'CASE 6. Rahbar o‘qituvchilarni rag‘batlantirish uchun yangi tizim joriy qilmoqchi. Qaysi model eng adolatli?',
      [
        'Faqat o‘quvchilarning yakuniy ballari asosida',
        'Faqat ish staji asosida',
        'Shaffof mezonlar: natija, metodik mahorat, kasbiy rivojlanish va innovatsion hissa asosida',
        'Faqat direktorning shaxsiy fikri asosida',
      ],
      2,
      'Ko‘p mezonli va shaffof tizim o‘qituvchi faoliyatining turli jihatlarini hisobga olib, adolatni oshiradi.',
    ),

    q(
      'm2t4-c07',
      'CASE 7. Maktabda elektron monitoring tizimi joriy qilindi. Tizim har oy natijalarni ko‘rsatmoqda, ammo ayrim sinflarda pasayish kuzatilmoqda. Direktorning birinchi amaliy qadami nima bo‘lishi kerak?',
      [
        'Pasaygan sinflarga darhol tanbeh berish',
        'Ma’lumotlarni tahlil qilib, muammo sabablarini aniqlash',
        'Elektron tizimni o‘chirib qo‘yish',
        'Barcha sinflarga bir xil chora qo‘llash',
      ],
      1,
      'Elektron monitoringning qiymati ma’lumotni qarorga aylantirishdadir. Avvalo pasayish sababi tahlil qilinishi kerak.',
    ),

    q(
      'm2t4-c08',
      'CASE 8. O‘quvchilar testlarda yaxshi natija ko‘rsatmoqda, ammo real hayotiy vaziyatlarda bilimdan foydalanish qiyin. Rahbar qaysi yo‘nalishni ustuvor deb bilishi kerak?',
      [
        'Faqat testlar sonini oshirish',
        'Faqat yodlash topshiriqlarini ko‘paytirish',
        'Kompetensiyaga yo‘naltirilgan, muammoli va real hayotiy topshiriqlarni kuchaytirish',
        'Faqat baholarni qayta hisoblash',
      ],
      2,
      'Bilimni real vaziyatda qo‘llash kompetensiyasini rivojlantirish uchun muammoli va hayotiy topshiriqlar zarur.',
    ),

    q(
      'm2t4-c09',
      'CASE 9. O‘qituvchi o‘quvchilarga baho qo‘ydi, lekin xatolarni tushuntirmadi. Keyingi darsda xuddi shu xatolar takrorlandi. Eng samarali yechim qaysi?',
      [
        'Faqat bahoni pasaytirish',
        'Formativ feedback berib, xatolarni tahlil qilish va qayta topshiriq berish',
        'Nazorat ishlarini butunlay bekor qilish',
        'O‘quvchilarga ko‘proq uy vazifasi berish',
      ],
      1,
      'Feedback xatoni tushunish, tuzatish va qayta qo‘llash imkonini beradi. Bu formativ baholashning asosiy vazifalaridan biridir.',
    ),

    q(
      'm2t4-c10',
      'CASE 10. Maktabda ichki monitoring natijasida bir muammo aniqlandi. Rahbar quyidagi ketma-ketliklardan qaysi birini tanlasa, evidence-based boshqaruvga eng mos bo‘ladi?',
      [
        'Muammo → jazo → hisobot → yakun',
        'Muammo → sabablarni dalillar bilan tahlil qilish → yechim → amalga oshirish → qayta o‘lchash',
        'Natija → tanbeh → hujjat → tugatish',
        'Muammo → umumiy yig‘ilish → tanbeh → keyingi mavzu',
      ],
      1,
      'Dalillarga asoslangan boshqaruv muammoni aniqlash, sabablarni dalillar bilan tahlil qilish, yechimni joriy etish va natijani qayta o‘lchash sikliga tayanadi.',
    ),
  ],
}
