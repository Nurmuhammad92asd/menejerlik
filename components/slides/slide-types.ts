// components/slides/slide-types.ts

/**
 * Slayd turlari (12 ta qat'iy qolip)
 * Har bir slayd o'z vazifasiga ega.
 */
export type SlideType =
  | 'title'       // 1. Titul varaq (Logotip, mavzu, muallif)
  | 'relevance'   // 2. Muammoning dolzarbligi
  | 'legal'       // 3. Me'yoriy-huquqiy hujjatlar
  | 'literature'  // 4. Foydalanilgan adabiyotlar
  | 'goal'        // 5. Mavzuning maqsadi
  | 'tasks'       // 6. Vazifalar
  | 'foreign'     // 7. Xorijiy tajribalar
  | 'comparison'  // 8. Qiyosiy tahlil (3 ustunli jadval)
  | 'conclusion'  // 9. Xulosa
  | 'proposal'    // 10. Takliflar
  | 'action_plan' // 11. Chora-tadbirlar rejasi (6 ustunli jadval)
  | 'final'       // 12. Yakuniy so'z (Rahmat)

/**
 * Bitta slaydning ma'lumotlari
 */
export type SlideData = {
  id: string
  type: SlideType
  title?: string
  content?: string
  bullets?: string[]
  imageUrl?: string // Slaydga tushadigan rasm (URL)
  
  // Jadval ma'lumotlari (faqat 'comparison' va 'action_plan' uchun ishlatiladi)
  tableData?: {
    headers: string[]
    rows: string[][]
  }
}

/**
 * Butun taqdimotning asosiy ma'lumotlari
 */
export type PresentationData = {
  id: string
  topic: string       // Mavzu nomi
  author: string      // Muallif ismi
  group: string       // Guruh / Kurs
  year: string        // Yil (masalan: 2026)
  city: string        // Shahar (masalan: TOSHKENT)
  
  // Dizayn ranglari (Mavzuga qarab avtomatik tanlanadi)
  design: {
    primary: string
    secondary: string
    accent: string
    textColor: string
  }
  
  // 12 ta slaydlar ro'yxati
  slides: SlideData[]
}
// components/slides/slide-types.ts (eng pastiga qo'shing)

export const PALETTES = [
  { name: "Klassik ko'k", primary: "#1e3a8a", secondary: "#eff6ff", accent: "#3b82f6", textColor: "#1e293b" },
  { name: "Zamonaviy yashil", primary: "#065f46", secondary: "#f0fdf4", accent: "#22c55e", textColor: "#064e3b" },
  { name: "Tarixiy jigarrang", primary: "#78350f", secondary: "#fef3c7", accent: "#d97706", textColor: "#451a03" },
  { name: "Neon texnologiya", primary: "#0f172a", secondary: "#1e293b", accent: "#06b6d4", textColor: "#f8fafc" },
  { name: "Qirollik binafshasi", primary: "#4c1d95", secondary: "#f5f3ff", accent: "#8b5cf6", textColor: "#2e1065" },
  { name: "Olov ranglari", primary: "#991b1b", secondary: "#fef2f2", accent: "#ef4444", textColor: "#450a0a" },
  { name: "Dengiz to'lqini", primary: "#164e63", secondary: "#ecfeff", accent: "#06b6d4", textColor: "#083344" },
  { name: "Oltin va qora", primary: "#171717", secondary: "#fafafa", accent: "#eab308", textColor: "#262626" },
  { name: "Pushti orzular", primary: "#831843", secondary: "#fdf2f8", accent: "#ec4899", textColor: "#500724" },
  { name: "Kumush va ko'k", primary: "#334155", secondary: "#f1f5f9", accent: "#64748b", textColor: "#0f172a" },
  { name: "Yashil o'rmon", primary: "#14532d", secondary: "#f0fdf4", accent: "#16a34a", textColor: "#052e16" },
  { name: "To'q sariq", primary: "#7c2d12", secondary: "#fff7ed", accent: "#f97316", textColor: "#431407" },
  { name: "Moviy osmon", primary: "#0c4a6e", secondary: "#f0f9ff", accent: "#0ea5e9", textColor: "#082f49" },
  { name: "Zumrad", primary: "#064e3b", secondary: "#ecfdf5", accent: "#10b981", textColor: "#022c22" },
  { name: "Binafsha tuman", primary: "#581c87", secondary: "#faf5ff", accent: "#a855f7", textColor: "#3b0764" },
  { name: "Qip-qizil", primary: "#7f1d1d", secondary: "#fef2f2", accent: "#dc2626", textColor: "#450a0a" },
  { name: "To'q ko'k", primary: "#1e1b4b", secondary: "#eef2ff", accent: "#6366f1", textColor: "#312e81" },
  { name: "Zaytun", primary: "#3f6212", secondary: "#f7fee7", accent: "#84cc16", textColor: "#1a2e05" },
  { name: "Marjon", primary: "#9a3412", secondary: "#fff7ed", accent: "#fb923c", textColor: "#431407" },
  { name: "Firuza", primary: "#134e4a", secondary: "#f0fdfa", accent: "#14b8a6", textColor: "#042f2e" },
  // ... Bu yerga yana 30 ta rang qo'shishingiz mumkin, hozircha 20 tasi yetarli
  { name: "Qorong'u rejim", primary: "#ffffff", secondary: "#27272a", accent: "#a1a1aa", textColor: "#f4f4f5" },
  { name: "Yorqin sariq", primary: "#713f12", secondary: "#fefce8", accent: "#facc15", textColor: "#422006" },
  { name: "Nilufar", primary: "#312e81", secondary: "#e0e7ff", accent: "#818cf8", textColor: "#1e1b4b" },
  { name: "Tropik", primary: "#065f46", secondary: "#ecfdf5", accent: "#34d399", textColor: "#064e3b" },
  { name: "Gilos", primary: "#881337", secondary: "#fff1f2", accent: "#f43f5e", textColor: "#4c0519" },
  { name: "Slate", primary: "#0f172a", secondary: "#f8fafc", accent: "#94a3b8", textColor: "#1e293b" },
  { name: "Mis", primary: "#7c2d12", secondary: "#fff7ed", accent: "#ea580c", textColor: "#431407" },
  { name: "Okean", primary: "#172554", secondary: "#eff6ff", accent: "#3b82f6", textColor: "#1e3a8a" },
  { name: "Zahar", primary: "#3b0764", secondary: "#faf5ff", accent: "#c084fc", textColor: "#4c1d95" },
  { name: "Lava", primary: "#450a0a", secondary: "#fef2f2", accent: "#f87171", textColor: "#7f1d1d" },
  { name: "Oltin barg", primary: "#422006", secondary: "#fefce8", accent: "#fbbf24", textColor: "#713f12" },
  { name: "Bahor", primary: "#14532d", secondary: "#f0fdf4", accent: "#4ade80", textColor: "#166534" },
  { name: "Kosmik", primary: "#020617", secondary: "#0f172a", accent: "#38bdf8", textColor: "#e2e8f0" },
  { name: "Qum", primary: "#57534e", secondary: "#fafaf9", accent: "#a8a29e", textColor: "#292524" },
  { name: "Malina", primary: "#4c0519", secondary: "#fff1f2", accent: "#fb7185", textColor: "#881337" },
  { name: "Sirk", primary: "#172554", secondary: "#f8fafc", accent: "#ef4444", textColor: "#1e3a8a" },
  { name: "Zangori", primary: "#083344", secondary: "#ecfeff", accent: "#22d3ee", textColor: "#164e63" },
  { name: "Krem", primary: "#44403c", secondary: "#fafaf9", accent: "#d6d3d1", textColor: "#1c1917" },
  { name: "Yashil choy", primary: "#365314", secondary: "#f7fee7", accent: "#a3e635", textColor: "#1a2e05" },
  { name: "Gilos gullari", primary: "#831843", secondary: "#fdf2f8", accent: "#f472b6", textColor: "#500724" },
]
