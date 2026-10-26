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
