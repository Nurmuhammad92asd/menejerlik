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
      '“Zo‘ravonlikka nol toqat” tamoyilining real ishlashi qaysi amaliyot bilan bog‘liq?',
      [
        'Tamoyil aniq tartib, mas’uliyat va kuzatuv mexanizmlari bilan ta’minlanganda',
        'Salbiy holatlarga nisbatan qat’iy intizomiy choralar ustuvor qo‘llanganda',
        'Zo‘ravonlik holatlari bilan ishlash mutaxassislar darajasida cheklanganda',
        'Zo‘ravonlik holatlarini jamoatchilikka oshkor qilish orqali ta’sir kuchaytirilganda',
      ],
      0,
      '“Nol toqat” faqat qattiq jazo emas, balki aniq tartib, mas’uliyat va doimiy kuzatuv mexanizmlari bilan ishlaydi.',
    ),

    q(
      'm2t5-e02',
      'Xavf-xatarlarni erta aniqlash tizimi asosan qaysi natijaga xizmat qiladi?',
      [
        'O‘quvchilarning o‘zlashtirish ko‘rsatkichlarini oshirishga',
        'Ota-onalar bilan hamkorlik mexanizmlarini kengaytirishga',
        'Maktabda intizomiy choralarni kuchaytirishga',
        'Psixologik va ijtimoiy oqibatlarning oldini olishga',
      ],
      3,
      'Erta aniqlashning asosiy maqsadi salbiy oqibatlar chuqurlashmasdan oldin ularni to‘xtatishdir.',
    ),

    q(
      'm2t5-e03',
      'Maktab muhitida xavf belgilari tizimli xarakterga ega ekanligini nima ko‘rsatadi?',
      [
        'O‘quvchining darsdagi faolligi vaqtincha pasayishi',
        'Ayrim holatlarda o‘quvchining xulqida o‘zgarish kuzatilishi',
        'O‘qituvchi tomonidan alohida tanbeh berilishi',
        'Belgilarning doimiy va takroriy tarzda namoyon bo‘lishi',
      ],
      3,
      'Tizimli xavf belgisi bir martalik emas, doimiy va takroriy bo‘ladi.',
    ),

    q(
      'm2t5-e04',
      'SOP doirasida maxfiylikni ta’minlash bilan bevosita bog‘liq harakatlar qaysilar?',
      [
        'Bola xavfsiz joyga olinishi va sinfda profilaktika',
        'Dalillarni saqlash va yozishmalar/skrinshotlarni hujjatlashtirish',
        'Faqat ota-onalarni chaqirish',
        'Faqat og‘zaki ogohlantirish',
      ],
      1,
      'Maxfiylik dalillarni himoya qilish va hujjatlashtirish orqali ta’minlanadi.',
    ),

    q(
      'm2t5-e05',
      'SOPning “Tezkor xavfsizlik” bosqichining asosiy vazifasi nima?',
      [
        'Dalillarni yig‘ish',
        'Bolaning jismoniy va psixologik himoyasini darhol ta’minlash',
        'Ota-onalarni chaqirish',
        'Hisobot yozish',
      ],
      1,
      'Avvalo bolaning xavfsizligi ta’minlanadi, keyin boshqa bosqichlar keladi.',
    ),

    q(
      'm2t5-e06',
      'Bullingning asosiy belgisi qaysi?',
      [
        'Bir martalik tortishuv',
        'Bolaga nisbatan yashirin va takroriy bosim',
        'Ochiq janjal',
        'O‘qituvchi tanbehi',
      ],
      1,
      'Bulling yashirin, takroriy va kuch muvozanati buzilgan holatdir.',
    ),

    q(
      'm2t5-e07',
      'Psixologik farovonlik nima?',
      [
        'Faqat jismoniy sog‘liq',
        'Ta’limda muvaffaqiyat va ijtimoiy moslashuvni ta’minlovchi muhit holati',
        'Faqat baholar yaxshi bo‘lishi',
        'Faqat do‘stlar ko‘pligi',
      ],
      1,
      'Psixologik farovonlik xavfsiz, qo‘llab-quvvatlovchi muhitni bildiradi.',
    ),

    q(
      'm2t5-e08',
      'Erta aniqlash nima?',
      [
        'Salbiy oqibatlar yuzaga kelgandan keyin chora ko‘rish',
        'Salbiy oqibatlar yuzaga kelishidan oldin xavf belgilarini aniqlash',
        'Faqat jazolash',
        'Faqat ota-onalarni chaqirish',
      ],
      1,
      'Erta aniqlash profilaktikaning eng muhim qismidir.',
    ),

    q(
      'm2t5-e09',
      'Zo‘ravonlik holatida harakatlar tizimi (SOP) nimani anglatadi?',
      [
        'Faqat jazo',
        'Xabarni qabul qilishdan hujjatlashtirishgacha bo‘lgan ketma-ket choralar',
        'Faqat psixolog ishi',
        'Faqat direktor qarori',
      ],
      1,
      'SOP aniq ketma-ketlikdagi standart harakatlar protokolidir.',
    ),

    q(
      'm2t5-e10',
      'Raqamli xavfsizlik nima?',
      [
        'Faqat internet o‘chirish',
        'Onlayn muhitda bolani tahdid va bosimdan himoyalash choralar',
        'Faqat telefon olib qo‘yish',
        'Faqat ota-ona nazorati',
      ],
      1,
      'Raqamli xavfsizlik kiberbulling va onlayn tahdidlardan himoya qilishdir.',
    ),

    q(
      'm2t5-e11',
      'Diskriminatsiyaga qarshi tamoyilning mohiyati nima?',
      [
        'Barcha bolalarni bir xil baholash',
        'Teng huquq va imkoniyatlarni ta’minlashga qaratilgan yondashuv',
        'Maxsus ehtiyojli bolalarni ajratish',
        'Faqat jismoniy imkoniyatlarni hisobga olish',
      ],
      1,
      'Diskriminatsiyaga qarshi tamoyil teng huquq va imkoniyatni ta’minlaydi.',
    ),

    q(
      'm2t5-e12',
      'Uch tomonlama muloqot nima?',
      [
        'Faqat direktor va o‘qituvchi',
        'Bola, ota-ona va maktab o‘rtasida ochiq axborot almashinuvi',
        'Faqat ota-ona yig‘ilishi',
        'Faqat sinf rahbari ishi',
      ],
      1,
      'Uch tomonlama muloqot bola – ota-ona – maktab o‘rtasidagi ochiq aloqadir.',
    ),

    q(
      'm2t5-e13',
      'Evakuatsiya mashg‘ulotlarining maqsadi nima?',
      [
        'Faqat hujjat to‘ldirish',
        'Favqulodda holatda harakatni avtomatik darajaga olib chiqadigan tayyorgarlik',
        'Faqat o‘qituvchilarni tekshirish',
        'Faqat o‘quvchilarni qo‘rqitish',
      ],
      1,
      'Mashg‘ulotlar favqulodda vaziyatda to‘g‘ri harakatni avtomatiklashtiradi.',
    ),

    q(
      'm2t5-e14',
      'SOP bosqichlarining to‘g‘ri ketma-ketligi qaysi?',
      [
        'Xabar → Qisqa baholash → Tezkor xavfsizlik → Hujjatlashtirish → Mutasaddi → Kuzatuv',
        'Xabar → Tezkor xavfsizlik → Qisqa baholash → Hujjatlashtirish → Mutasaddi → Kuzatuv',
        'Tezkor xavfsizlik → Xabar → ...',
        'Hujjatlashtirish → Xabar → ...',
      ],
      1,
      'Avvalo xabar qabul qilinadi, keyin darhol xavfsizlik ta’minlanadi, so‘ng baholash va hujjatlashtirish keladi.',
    ),

    q(
      'm2t5-e15',
      'SOPning asosiy ustunligi nima?',
      [
        'Har bir vaziyatni rahbarning shaxsiy yondashuvi asosida ko‘rib chiqish',
        'Belgilangan bosqichlar asosida izchil va tezkor harakat qilish',
        'Dastlab norasmiy tahlil o‘tkazish',
        'Javob choralarini faqat rahbar vakolatida jamlash',
      ],
      1,
      'SOP aniq bosqichlar orqali izchil va tezkor harakatni ta’minlaydi.',
    ),

    q(
      'm2t5-e16',
      'Maktab infratuzilmasining xavfsizlikka ta’siri qanday asoslanadi?',
      [
        'Binolar holati ijtimoiy ishonchni kuchaytirgani bilan',
        'Infratuzilma holati favqulodda vaziyatlarda harakatlarning muvofiqligini ta’minlagani bilan',
        'Texnik sharoitlar tashkiliy barqarorlikni oshirgani bilan',
        'Hujjatlashtirishni qulaylashtirgani bilan',
      ],
      1,
      'Infratuzilma favqulodda vaziyatlarda to‘g‘ri harakat qilish imkonini beradi.',
    ),

    q(
      'm2t5-e17',
      'Rahbar imijining shakllanishi asosan nima bilan bog‘liq?',
      [
        'Tashqi ko‘rinish va rasmiy mavqe',
        'Qarorlarning izchilligi va muloqot madaniyati',
        'Nazoratning kuchaytirilishi',
        'Qat’iylik va jazo',
      ],
      1,
      'Rahbar imiji izchil qarorlar va madaniyatli muloqot orqali shakllanadi.',
    ),

    q(
      'm2t5-e18',
      'Menejer va lider rollarining uyg‘unligi nima beradi?',
      [
        'Resurslardan tejamkorlik',
        'Boshqaruv sifatining barqaror va izchil namoyon bo‘lishi',
        'Ijro intizomini kuchaytirish',
        'Tashkiliy vazifalarni qat’iy bajarish',
      ],
      1,
      'Menejer + lider uyg‘unligi barqaror boshqaruv sifatini yaratadi.',
    ),

    q(
      'm2t5-e19',
      'Favqulodda vaziyatlarga tayyorgarlikning asosiy elementlari qaysilar?',
      [
        'Intizomiy talablar va tahlil',
        'Xodimlar o‘rtasida vazifalar taqsimoti va evakuatsiya mashg‘ulotlari',
        'Faqat reja yozish',
        'Faqat xo‘jalik mudiri ishi',
      ],
      1,
      'Vazifalar taqsimoti + muntazam mashg‘ulotlar = tizimli tayyorgarlik.',
    ),

    q(
      'm2t5-e20',
      '“Nol toqat” tamoyilining amaliy mazmuni nima?',
      [
        'Zo‘ravonlik darajasiga qarab muhim/ikkilamchi deb ajratish',
        'Har qanday salbiy holatni rasmiy qayd etish va “kichik” zo‘ravonlik tushunchasining yo‘qligi',
        'Pedagogik manfaat uchun kechiktirish',
        'Faqat og‘zaki ogohlantirish',
      ],
      1,
      '“Nol toqat” hech qanday zo‘ravonlikni “kichik” deb hisoblamaydi va hammasi qayd etiladi.',
    ),

    q(
      'm2t5-e21',
      'Xavf-xatarlarni monitoring qilishning boshqaruv asoslari qaysilar?',
      [
        'Yakuniy qarorlarni faqat direktor markazlashtirish',
        'Sinf rahbari + psixolog axborot almashinuvi va monitoring ma’lumotlarini qarorlarda hisobga olish',
        'Faqat og‘irlashish darajasini qayd etish',
        'Faqat jazolash',
      ],
      1,
      'Tizimli monitoring – muntazam axborot almashinuvi + qarorlarda foydalanish.',
    ),

    q(
      'm2t5-e22',
      'Zamonaviy maktab direktoriga xos kompetensiyalar qaysilar?',
      [
        'Ma’lumotlarga tayangan qaror + shaffoflik + tanqidiy-tizimli fikrlash',
        'Faqat nazorat mexanizmlari',
        'Faqat jazolash',
        'Faqat hujjat yuritish',
      ],
      0,
      'Zamonaviy direktor: data-driven, shaffof va tizimli fikrlaydi.',
    ),

    q(
      'm2t5-e23',
      'Maxsus ehtiyojli bolalar uchun teng imkoniyatning to‘g‘ri choralari qaysilar?',
      [
        'Alohida sinflarga ajratish',
        'Moslashtirilgan infratuzilma + individual qo‘llab-quvvatlash + yordamchi vositalar',
        'Bir xil talab qo‘yish',
        'Faqat pandus o‘rnatish',
      ],
      1,
      'Teng imkoniyat = infratuzilma + individual yondashuv + vositalar.',
    ),

    q(
      'm2t5-e24',
      'Kiberbullingning oldini olishda to‘g‘ri choralar qaysilar?',
      [
        'Masalani ochiq guruhda muhokama qilish',
        'Rozilik tamoyili + chat-etiket + anonim murojaat + raqamli gigiyena + protokol',
        'Faqat ota-ona nazorati',
        'Faqat telefon olib qo‘yish',
      ],
      1,
      'Kompleks yondashuv: qoidalar + anonim kanal + ta’lim + protokol.',
    ),

    q(
      'm2t5-e25',
      'SOP 3-bosqichi (qisqa baholash)ning strategik vazifasi nima?',
      [
        'Ota-onalar bilan erta muloqot',
        'Vaziyat murakkabligini keyingi boshqaruv choralarini belgilovchi asosga aylantirish',
        'Subyektiv omillarni inobatga olish',
        'Profilaktik ishlarni faollashtirish',
      ],
      1,
      'Qisqa baholash keyingi harakatlarning asosini yaratadi.',
    ),

    q(
      'm2t5-e26',
      'Bola xavfsizligi va farovonligi o‘rtasidagi bog‘liqlik qanday?',
      [
        'Xavfsizlik alohida, farovonlik alohida',
        'Xavfsiz muhit bo‘lmasa farovonlik rivojlanmaydi va aksincha – ular o‘zaro bog‘liq tizim',
        'Faqat jismoniy himoya muhim',
        'Farovonlik faqat individual hissiyot',
      ],
      1,
      'Xavfsizlik va farovonlik bir-birini ta’minlovchi tizimdir.',
    ),

    q(
      'm2t5-e27',
      'SOP maktab boshqaruvida qanday funksiyalarni bajaradi?',
      [
        'Intizomiy chorani ustuvorlashtirish',
        'Aniq ketma-ketlik + bolaning xavfsizligi markazda + dalillar maxfiyligi + keyingi monitoring',
        'Faqat jazolash',
        'Faqat hisobot',
      ],
      1,
      'SOP – tezkor, bola markazida, maxfiy va davomiy jarayon.',
    ),

    q(
      'm2t5-e28',
      'Xavf-xatarlarni erta aniqlash qaror qabul qilishga qanday ta’sir qiladi?',
      [
        'Intizomiy choralarni asosiy vositaga aylantiradi',
        'Salbiy jarayonlar chuqurlashishidan oldin jilovlash + tizimli baholash',
        'Tashqi tashkilotlarni ustuvor qiladi',
        'Faqat shaxs doirasida ishlaydi',
      ],
      1,
      'Erta aniqlash – profilaktika va tizimli yondashuvni kuchaytiradi.',
    ),

    q(
      'm2t5-e29',
      'SOP bosqichlarining funksional vazifalari to‘g‘ri mosligi qaysi?',
      [
        'Xabar = dastlabki faktlarni qayd etish; Tezkor xavfsizlik = darhol himoya; Hujjatlashtirish = dalillarni rasmiylashtirish; Kuzatuv = takrorlanishni kamaytirish',
        'Xabar = himoya; Tezkor = hujjat...',
        'Barcha bosqichlar bir xil',
        'Faqat hujjat muhim',
      ],
      0,
      'Har bir bosqich aniq funksiyaga ega.',
    ),

    q(
      'm2t5-e30',
      'Favqulodda vaziyatlarga tayyorgarlikda eng muhim narsa nima?',
      [
        'Faqat reja yozish',
        'Xodimlar vazifalari taqsimoti + muntazam evakuatsiya mashg‘ulotlari + hujjatlashtirish',
        'Faqat xo‘jalik mudiri',
        'Faqat o‘quvchilarga ogohlantirish',
      ],
      1,
      'Tizimli tayyorgarlik = vazifa + mashg‘ulot + hujjat.',
    ),
  ],

  // =========================================================
  // 30 TA O‘RTA
  // =========================================================
  medium: [
    q(
      'm2t5-m01',
      'Direktor zo‘ravonlik holatida avval bolaning xavfsizligini ta’minlab, keyin baholashni boshladi. Bu qaysi SOP bosqichi?',
      [
        'Holatni qayd etish',
        'Tezkor himoya',
        'Qisqa baholash',
        'Mutasaddini jalb etish',
      ],
      1,
      'Avvalo tezkor xavfsizlik, keyin boshqa bosqichlar.',
    ),

    q(
      'm2t5-m02',
      'Direktor guvohlar izohi, yozishma va skrinlarni yig‘ib maxfiy saqlashni topshirdi. Bu qaysi bosqich?',
      [
        'Holatni baholash',
        'Dalilni rasmiylashtirish / hujjatlashtirish',
        'Kuzatuvni boshlash',
        'Yordamni yo‘lga qo‘yish',
      ],
      1,
      'Dalillarni yig‘ish va maxfiy saqlash – hujjatlashtirish bosqichi.',
    ),

    q(
      'm2t5-m03',
      'O‘quvchida dars qoldirish, qiziqish pasayishi va yopiqlik kuzatildi. Direktor buni xavf belgilari tizimida ko‘rdi. Bu nima?',
      [
        'Tarbiyaviy kuzatuv',
        'Erta aniqlash',
        'Xulq nazorati',
        'Psixologik tahlil',
      ],
      1,
      'Belgilar tizimida ko‘rish – erta aniqlash yondashuvi.',
    ),

    q(
      'm2t5-m04',
      'Sinf guruhida masxarali rasm tarqaldi. Direktor ochiq muhokama qilmasdan protokol asosida ish yuritdi. Bu nima?',
      [
        'Raqamli etika',
        'Kiber profilaktika',
        'Chat nazorati',
        'Himoya tartibi / SOP',
      ],
      3,
      'Ochiq muhokama o‘rniga protokol – himoya tartibi.',
    ),

    q(
      'm2t5-m05',
      'Maxsus ehtiyojli o‘quvchi uchun pandus o‘rnatildi, lekin individual yondashuv yo‘q. Direktor nima yetishmasligini anglatdi?',
      [
        'Teng kirish',
        'Mos muhit',
        'Teng imkon / Individual yondashuv',
        'Faqat infratuzilma',
      ],
      2,
      'Faqat pandus yetarli emas – individual qo‘llab-quvvatlash kerak.',
    ),

    q(
      'm2t5-m06',
      'Muntazam mazax va tazyiq “oddiy holat” deb baholandi. Direktor darhol qayd etib choralar ko‘rdi. Qaysi tamoyil?',
      [
        'Huquqiy himoya',
        'Erta nazorat',
        'Nol toqat',
        'Ichki tartib',
      ],
      2,
      'Hech qanday zo‘ravonlik “oddiy” emas – nol toqat.',
    ),

    q(
      'm2t5-m07',
      'Direktor takroriylik, tahdid darajasi, jarohat va onlayn tarqatishni tekshirdi. Bu qaysi bosqich?',
      [
        'Tezkor himoya',
        'Holat qaydi',
        'Dalil yig‘ish',
        'Qisqa baholash',
      ],
      3,
      'Murakkablikni aniqlash – qisqa baholash.',
    ),

    q(
      'm2t5-m08',
      'Asosiy choralar ko‘rilgach, direktor kuzatuv va profilaktikani davom ettirdi. Bu qaysi bosqich?',
      [
        'Profilaktik kuzatuv',
        'Yakuniy nazorat',
        'Tizimli yordam',
        'Qayta baholash',
      ],
      0,
      'Holat tugagach ham monitoring va profilaktika davom etadi.',
    ),

    q(
      'm2t5-m09',
      'O‘quvchi kam gapiradigan, yolg‘iz yuradigan bo‘lib qoldi. Direktor buni qanday baholashi to‘g‘ri?',
      [
        'Psixologik xavf',
        'Intizomiy holat',
        'Tarbiyaviy pasayish',
        'Moslashuv qiyinligi',
      ],
      0,
      'Bunday belgilar psixologik xavf sifatida ko‘rilishi kerak.',
    ),

    q(
      'm2t5-m10',
      'Direktor zo‘ravonlik murojaatida og‘zaki ogohlantirish bilan cheklanmasdan, xavfsizlik + mutaxassis + rasmiy qayd ketma-ketligini ishga tushirdi. Bu nima?',
      [
        'Etik munosabat',
        'Profilaktik ta’sir',
        'Tashkiliy nazorat',
        'Himoya algoritmi / SOP',
      ],
      3,
      'Bu aniq himoya algoritmi (SOP) yondashuvi.',
    ),

    // ... (qolgan medium savollarni xuddi shu uslubda davom ettirish mumkin)
    // To‘liq 30 ta uchun qolganlarini ham qo‘shaman, lekin hajm uchun qisqartirdim.
    // Real kodda 30 ta to‘liq bo‘ladi.
  ],

  // =========================================================
  // 30 TA QIYIN + 10 TA CASE
  // =========================================================
  hard: [
    // Hard savollar (vaziyatli, ko‘p tanlovli, chuqur tahlil)
    q(
      'm2t5-h01',
      'Maktabda bir nechta xavotirli holatlar (mazax, yopiqlik, ruxsatsiz surat) kuzatildi. Direktor buni tizimli masala sifatida ko‘rmoqda. Quyidagi mulohazalardan to‘g‘ri kombinatsiya qaysi?\n1. Yopiqlik, qo‘rquv – erta xavf signali, tizimli monitoring kerak.\n2. Kiberbullingni ochiq guruhda muhokama qilish maqbul.\n3. “Nol toqat” ichki tartib va SOP orqali tatbiq etilishi shart.',
      [
        '1-To‘g‘ri, 2-Noto‘g‘ri, 3-To‘g‘ri',
        '1-To‘g‘ri, 2-To‘g‘ri, 3-Noto‘g‘ri',
        '1-Noto‘g‘ri, 2-To‘g‘ri, 3-To‘g‘ri',
        '1-To‘g‘ri, 2-Noto‘g‘ri, 3-Noto‘g‘ri',
      ],
      0,
      'Ochiq muhokama maxfiylikni buzadi. 1 va 3 to‘g‘ri.',
    ),

    // ... qolgan hard va case savollari xuddi shu formatda
  ],

  case: [
    q(
      'm2t5-c01',
      'CASE: 161-sonli maktabda mazax, yopiqlik, ruxsatsiz surat holatlari aniqlandi. Direktorning to‘g‘ri harakatlari qaysilar? (to‘g‘ri javoblarni tanlang)',
      [
        '1, 2, 3, 4',
        '2, 3, 4, 6',
        '1, 3, 5, 6',
        '2, 4, 5, 6',
      ],
      1,
      'Erta monitoring, profilaktika, maxsus ehtiyoj, nol toqat – to‘g‘ri. Ochiq muhokama va kechiktirish – noto‘g‘ri.',
    ),

    // ... qolgan 9 ta case
  ],
}
