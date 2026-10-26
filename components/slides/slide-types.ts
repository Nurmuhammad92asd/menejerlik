// components/slides/slide-types.ts

export type SlideType =
  | 'title'       // 1. Titul
  | 'relevance'   // 2. Dolzarbligi
  | 'legal'       // 3. Me'yoriy hujjatlar
  | 'literature'  // 4. Adabiyotlar
  | 'goal'        // 5. Maqsad
  | 'tasks'       // 6. Vazifalar
  | 'foreign'     // 7. Xorijiy tajriba
  | 'comparison'  // 8. Qiyosiy tahlil (Jadval)
  | 'conclusion'  // 9. Xulosa
  | 'proposal'    // 10. Takliflar
  | 'action_plan' // 11. Chora-tadbirlar (Jadval)
  | 'final'       // 12. Rahmat

export type SlideData = {
  id: string
  type: SlideType
  title?: string
  content?: string
  bullets?: string[]
  imageUrl?: string // Slaydga tushadigan rasm
  tableData?: {
    headers: string[]
    rows: string[][]
  }
}

export type PresentationData = {
  id: string
  topic: string
  author: string
  group: string
  year: string
  city: string
  design: {
    primary: string
    secondary: string
    accent: string
    textColor: string
  }
  slides: SlideData[]
}
