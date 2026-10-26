// components/slides/slide-generator.ts
import type { PresentationData, SlideData } from './slide-types'

const IMAGES = {
  titleBg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
  books: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
  literature: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  success: 'https://images.unsplash.com/photo-1519832986547-1f5d4bc3ba4c?q=80&w=1000&auto=format&fit=crop',
}

export function generatePresentation(topic: string, author: string, group: string): PresentationData {
  const slides: SlideData[] = [
    // 1. Titul
    { id: '1', type: 'title', imageUrl: IMAGES.titleBg },
    
    // 2. Dolzarblik (Katta hajmda)
    {
      id: '2', type: 'relevance', title: 'Muammoning dolzarbligi',
      imageUrl: IMAGES.team,
      content: `Hozirgi kunda "${topic}" masalasi davlat siyosatining eng muhim va ustuvor yo'nalishlaridan biri hisoblanadi. Jamiyat taraqqiyoti, iqtisodiy barqarorlik va kelajak avlod tarbiyasi bevosita ushbu sohaning qay darajada to'g'ri yo'lga qo'yilganligiga bog'liq. \n\nAmaldagi holat tahlili shuni ko'rsatadiki, bu borada bir qator tizimli muammolar va qiyinchiliklar mavjud. Xususan, moddiy-texnik bazaning eskirganligi, kadrlar malakasini oshirish tizimining yetarli darajada ishlamayotganligi, zamonaviy innovatsion texnologiyalarning joriy etilishida sustkashlik kuzatilmoqda. Shu bois, mazkur mavzuni har tomonlama chuqur o'rganish, xorijiy ilg'or tajribalarni tahlil qilish va aniq amaliy takliflar ishlab chiqish bugungi kunning dolzarb talabidir.`
    },
    
    // 3. Me'yoriy hujjatlar
    {
      id: '3', type: 'legal', title: "Me'yoriy-huquqiy hujjatlar",
      imageUrl: IMAGES.books,
      bullets: [
        "O'zbekiston Respublikasi Konstitutsiyasi (tegishli moddalari).",
        "O'zbekiston Respublikasining “Ta'lim to'g'risida”gi Qonuni (2020-yil 23-sentabr, O'RQ-637).",
        "O'zbekiston Respublikasi Prezidentining “Ta'lim va tarbiya tizimini yanada rivojlantirish” bo'yicha Farmonlari va Qarorlari.",
        "Vazirlar Mahkamasining sohaga oid qarorlari va nizomlari.",
        "Xalqaro standartlar va tavsiyalar (UNESCO, OECD hujjatlari)."
      ]
    },
    
    // 4. Adabiyotlar
    {
      id: '4', type: 'literature', title: 'Foydalanilgan adabiyotlar',
      imageUrl: IMAGES.literature,
      bullets: [
        `"${topic}" bo'yicha mahalliy va xorijiy mualliflarning ilmiy maqolalari va monografiyalari.`,
        "Sohaga oid darsliklar, o'quv qo'llanmalar va metodik tavsiyanomalar.",
        "Davlat statistika qo'mitasi va tegishli vazirliklarning yillik hisobotlari.",
        "Xalqaro tashkilotlarning (BMT, YUNESKO) tahliliy hisobotlari.",
        "Ilmiy-amaliy konferensiyalar to'plamlari."
      ]
    },
    
    // 5. Maqsad
    {
      id: '5', type: 'goal', title: 'Mavzuning maqsadi',
      content: `Ushbu taqdimotning asosiy maqsadi — "${topic}" sohasidagi mavjud muammolarni har tomonlama tahlil qilish, ilg'or xorijiy tajribalarni o'rganish asosida amaldagi holatni yaxshilash bo'yicha aniq va samarali takliflar hamda chora-tadbirlar rejasini ishlab chiqishdan iborat.`
    },
    
    // 6. Vazifalar
    {
      id: '6', type: 'tasks', title: 'Vazifalar',
      bullets: [
        "Mavzuga oid nazariy manbalar va ilmiy adabiyotlarni chuqur o'rganish.",
        "Sohadagi mavjud muammolarni aniqlash va ularni tizimlashtirish.",
        "Rivojlangan xorijiy davlatlarning (masalan, Finlandiya, Singapur, Yaponiya) ilg'or tajribalarini tahlil qilish.",
        "O'zbekiston sharoitiga mos keladigan amaliy yechimlar va innovatsion yondashuvlarni taklif qilish.",
        "Takliflarni amalga oshirishning aniq chora-tadbirlar rejasini (roadmap) tuzish."
      ]
    },
    
    // 7. Xorijiy tajribalar
    {
      id: '7', type: 'foreign', title: 'Xorijiy tajribalar',
      foreignData: [
        {
          country: 'Finlandiya',
          flag: '🇫🇮',
          text: 'Ta’lim tizimida pedagoglarning kasbiy salohiyatini oshirishga, ularning mustaqil qaror qabul qilishiga va o‘zaro hamkorligiga katta e’tibor qaratiladi. Resurslardan oqilona foydalanish orqali yuqori natijalarga erishilgan.'
        },
        {
          country: 'Singapur',
          flag: '🇸🇬',
          text: 'Maktablarni boshqarishda moliyaviy rejalashtirish va resurslarni to‘g‘ri taqsimlash vakolatlari rahbarlarga berilgan. Raqamli texnologiyalar ta’lim jarayoniga chuqur integratsiya qilingan.'
        },
        {
          country: 'Yaponiya',
          flag: '🇯🇵',
          text: 'Raqamli texnologiyalarni ta’lim va boshqaruv jarayoniga joriy etish hamda uzluksiz monitoring qilish tizimi yo‘lga qo‘yilgan. Har bir xodimning mas’uliyati aniq belgilangan.'
        }
      ]
    },
    
    // 8. Qiyosiy tahlil (Jadval)
    {
      id: '8', type: 'comparison', title: 'Qiyosiy tahlil',
      tableData: {
        headers: ["Amaldagi holat (O'zbekistonda)", "Amaldagi holat (Xorijda)", "Taklif"],
        rows: [
          ["Rahbarlar asosan malaka oshirish kurslarida bilim oladilar.", "Finlandiyada pedagogik yetakchilikka va amaliyotga e'tibor qaratiladi.", "Rahbarlarning individual rivojlanish rejasini (IDP) ishlab chiqish."],
          ["Budjet mablag'lari qat'iy taqsimlangan holda ishlatiladi.", "Singapurda moliyaviy rejalashtirish vakolatlari maktabgacha berilgan.", "Xarajatlarni ustuvor yo'nalishlar (ta'lim sifati) asosida rejalashtirish."],
          ["Elektron platformalar joriy etilmoqda, lekin integratsiya to'liq emas.", "Yaponiyada yagona raqamli monitoring tizimi ishlaydi.", "Yagona elektron monitoring va boshqaruv tizimini yo'lga qo'yish."]
        ]
      }
    },
    
    // 9. Xulosa
    {
      id: '9', type: 'conclusion', title: 'Xulosa',
      content: `O'tkazilgan tahlillar va o'rganilgan xorijiy tajribalar asosida shuni xulosa qilish mumkinki, "${topic}" sohasidagi mavjud muammolarni hal qilish uchun tizimli yondashuv talab etiladi. Buning uchun inson kapitalini rivojlantirish, moddiy-texnik bazani yangilash, raqamli texnologiyalarni keng joriy etish hamda barcha manfaatdor tomonlarning (davlat, jamoatchilik, xususiy sektor) o'zaro hamkorligini kuchaytirish zarur.`
    },
    
    // 10. Takliflar
    {
      id: '10', type: 'proposal', title: 'Takliflar',
      bullets: [
        "Sohadagi mavjud resurslarni xatlovdan o'tkazish va yillik rivojlanish strategiyasini ishlab chiqish.",
        "Xodimlar malakasini oshirishning yangicha, amaliyotga yo'naltirilgan tizimini (mentorlik, treninglar) joriy etish.",
        "Ortiqcha va samarasiz xarajatlarni qisqartirish, qonunchilik doirasida qo'shimcha grant va homiylik mablag'larini jalb qilish.",
        "Boshqaruv va ta'lim jarayoniga zamonaviy raqamli texnologiyalarni keng joriy etish."
      ]
    },
    
    // 11. Chora-tadbirlar jadvali
    {
      id: '11', type: 'action_plan', title: 'Chora-tadbirlar dasturi',
      tableData: {
        headers: ["№", "Muammo", "Amalga oshirish mexanizmi", "Mas'ullar", "Muddati", "Natija"],
        rows: [
          ["1", "Resurslardan to'liq foydalanilmagan.", "Resurslarni tahlil qilish, mentor biriktirish, monitoring qilish.", "Direktor, O'quv ishlari bo'yicha o'rinbosar", "2026-yil noyabr", "Ustuvor yo'nalishlar belgilanadi."],
          ["2", "Moliyaviy resurslar yetarli emas.", "Xarajatlarni optimallashtirish, grant va homiylik jalb qilish.", "Direktor, Buxgalter, Xo'jalik mudiri", "2026-yil noyabrdan", "Samarasiz xarajatlar qisqaradi."],
          ["3", "Raqamli texnologiyalar sust.", "Elektron hujjat aylanishi va monitoring tizimini yo'lga qo'yish.", "Direktor, Informatika o'qituvchisi", "Har chorakda", "Boshqaruv qarorlari tezlashadi."]
        ]
      }
    },
    
    // 12. Yakuniy
    { id: '12', type: 'final', title: "E'tiboringiz uchun rahmat!", imageUrl: IMAGES.success }
  ]

  return {
    id: crypto.randomUUID(),
    topic,
    author,
    group,
    year: '2026',
    city: 'TOSHKENT',
    design: { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b' },
    slides
  }
}
