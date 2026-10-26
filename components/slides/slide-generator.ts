// components/slides/slide-generator.ts
import type { PresentationData, SlideData } from './slide-types'

// Rasmlar (Internetdan avtomatik yuklanadi)
const IMAGES = {
  titleBg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
  books: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
  literature: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  success: 'https://images.unsplash.com/photo-1519832986547-1f5d4bc3ba4c?q=80&w=1000&auto=format&fit=crop',
}

// Mavzuga qarab ranglarni tanlash
export function getDesign(topic: string) {
  const t = topic.toLowerCase()
  if (t.includes('ta\'lim') || t.includes('maktab') || t.includes('bog\'cha')) {
    return { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b' }
  }
  return { primary: '#065f46', secondary: '#f0fdf4', accent: '#22c55e', textColor: '#064e3b' }
}

// 12 ta Slaydni avtomatik yozish
export function generatePresentation(topic: string, author: string, group: string): PresentationData {
  const slides: SlideData[] = [
    { id: '1', type: 'title', imageUrl: IMAGES.titleBg },
    {
      id: '2', type: 'relevance', title: 'Muammoning dolzarbligi',
      imageUrl: IMAGES.team,
      content: `"${topic}" masalasi bugungi kunda ta'lim tizimi va jamiyat rivojlanishida muhim o'rin tutadi. Pedagoglarning salohiyati, moddiy-texnik baza hamda ota-onalar bilan hamkorlik imkoniyatlaridan oqilona foydalanish orqali ortiqcha xarajatlarsiz yuqori natijalarga erishish mumkin.`
    },
    {
      id: '3', type: 'legal', title: "Me'yoriy-huquqiy hujjatlar",
      imageUrl: IMAGES.books,
      bullets: [
        "O'zbekiston Respublikasi Konstitutsiyasi — 50-modda.",
        "O'zbekiston Respublikasining 2020-yil 23-sentabrdagi O'RQ-637-son “Ta'lim to'g'risida”gi Qonuni.",
        "Prezidentning 2023-yil 26-maydagi PF-79-son Farmoni.",
        "O'zbekiston Respublikasining Budjet kodeksi."
      ]
    },
    {
      id: '4', type: 'literature', title: 'Foydalanilgan adabiyotlar',
      imageUrl: IMAGES.literature,
      bullets: [
        "Qurbonov Sh., Seytaliev O.E. Ta'lim sifatini boshqarish. — Toshkent, 2006.",
        "Turg'unov S.T. va boshqalar. Ta'lim menejmenti asoslari. — Toshkent, 2006.",
        "Pont B., Nusche D., Moorman H. Improving School Leadership. — OECD, 2008."
      ]
    },
    {
      id: '5', type: 'goal', title: 'Mavzuning maqsadi',
      content: `"${topic}" bo'yicha mavjud muammolarni tahlil qilish, xorijiy tajribalarni o'rganish va uni yechish bo'yicha amaliy takliflar ishlab chiqish.`
    },
    {
      id: '6', type: 'tasks', title: 'Vazifalar',
      bullets: [
        "Mavjud ichki imkoniyatlari va resurslarini chuqur tahlil qilish.",
        "Pedagoglarning kasbiy mahoratidan oqilona foydalanish.",
        "Moddiy-texnik resurslardan maqsadli foydalanishni tashkil etish.",
        "Ota-onalar va mahalla bilan hamkorlikni kuchaytirish."
      ]
    },
    {
      id: '7', type: 'foreign', title: 'Xorijiy tajribalar',
      content: "Finlandiya tajribasida pedagoglarning salohiyatini qo'llab-quvvatlashga e'tibor qaratiladi. Singapurda moliyaviy rejalashtirish muhim o'rin tutadi. Yaponiyada raqamli texnologiyalarni joriy etishga katta e'tibor beriladi."
    },
    {
      id: '8', type: 'comparison', title: 'Qiyosiy tahlil',
      tableData: {
        headers: ["Amaldagi holat (O'zbekistonda)", "Amaldagi holat (Xorijda)", "Taklif"],
        rows: [
          ["Direktorlar malaka oshirish kurslarida bilim oladilar.", "Finlandiyada pedagogik yetakchilikka e'tibor qaratiladi.", "Individual rivojlanish rejasini ishlab chiqish."],
          ["Budjet mablag'lari asosida ishlaydi.", "Singapurda moliyaviy rejalashtirish vakolatlari muhim.", "Xarajatlarni ustuvor yo'nalishlar asosida rejalashtirish."],
          ["Elektron platformalar joriy etilmoqda.", "Yaponiyada texnologiyalar jadal joriy etiladi.", "Elektron monitoring tizimini yo'lga qo'yish."]
        ]
      }
    },
    {
      id: '9', type: 'conclusion', title: 'Xulosa',
      content: "Ichki imkoniyatlardan samarali foydalanish ta'lim sifati va boshqaruv samaradorligini oshirishning muhim omilidir. Resurslardan oqilona foydalanish va ota-onalar bilan hamkorlikni kuchaytirish zarur."
    },
    {
      id: '10', type: 'proposal', title: 'Takliflar',
      bullets: [
        "Resurslarni xatlovdan o'tkazish va yillik rivojlanish rejasini ishlab chiqish.",
        "Mentorlik va o'zaro dars kuzatuvi tizimini yo'lga qo'yish.",
        "Ortiqcha xarajatlarni kamaytirish va qo'shimcha mablag' jalb etish.",
        "Boshqaruvda raqamli texnologiyalarni keng joriy etish."
      ]
    },
    {
      id: '11', type: 'action_plan', title: 'Chora-tadbirlar dasturi',
      tableData: {
        headers: ["№", "Muammo", "Amaliyot mexanizmi", "Mas'ullar", "Muddati", "Natija"],
        rows: [
          ["1", "Resurslardan to'liq foydalanilmagan.", "Resurslarni tahlil qilish, mentor biriktirish.", "Direktor", "Noyabr", "Ustuvor yo'nalishlar belgilanadi."],
          ["2", "Moliyaviy resurslar yetarli emas.", "Grant va homiylik jalb qilish.", "Buxgalter", "Muntazam", "Samarasiz xarajatlar qisqaradi."],
          ["3", "Raqamli texnologiyalar sust.", "Elektron monitoring tizimini yo'lga qo'yish.", "Informatika o'qituvchisi", "Har chorakda", "Boshqaruv qarorlari tezlashadi."]
        ]
      }
    },
    { id: '12', type: 'final', title: "E'tiboringiz uchun rahmat!", imageUrl: IMAGES.success }
  ]

  return {
    id: crypto.randomUUID(),
    topic,
    author,
    group,
    year: '2026',
    city: 'TOSHKENT',
    design: getDesign(topic),
    slides
  }
}
