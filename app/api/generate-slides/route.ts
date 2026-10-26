// app/api/generate-slides/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { topic, author, group } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: "Mavzu kiritilmadi" }, { status: 400 })
    }

    const prompt = `
      Siz professional taqdimot (slayd) yaratuvchi tizimsiz.
      Foydalanuvchi quyidagi mavzuni kiritdi: "${topic}".
      
      Menga aynan 12 ta slayd uchun ma'lumotlarni FAQAT JSON formatida qaytaring.
      Javobingizda "slides" degan massiv (array) bo'lishi shart va u 12 ta elementdan iborat bo'lsin.
      
      JSON formati:
      {
        "design": {
          "primary": "#1e3a8a", 
          "secondary": "#eff6ff",
          "accent": "#3b82f6",
          "textColor": "#1e293b"
        },
        "slides": [
          { "type": "title", "title": "${topic}", "content": "" },
          { "type": "relevance", "title": "Mavzuning dolzarbligi", "content": "Bu yerga 3-4 ta gapdan iborat juda mazmunli va rasmiy dolzarblik matnini yozing" },
          { "type": "legal", "title": "Me'yoriy hujjatlar", "bullets": ["Qonun 1", "Farmon 2", "Qaror 3"] },
          { "type": "literature", "title": "Adabiyotlar", "bullets": ["Kitob 1", "Maqola 2"] },
          { "type": "goal", "title": "Maqsad", "content": "Mavzuga mos bitta aniq maqsad yozing" },
          { "type": "tasks", "title": "Vazifalar", "bullets": ["Vazifa 1", "Vazifa 2", "Vazifa 3"] },
          { "type": "foreign", "title": "Xorijiy tajribalar", "foreignData": [{"country": "Finlandiya", "flag": "🇫🇮", "text": "Ular buni qanday qiladi..."}] },
          { "type": "comparison", "title": "Qiyosiy tahlil", "tableData": { "headers": ["O'zbekiston", "Xorij", "Taklif"], "rows": [["Bizda nima bor", "Ularda nima bor", "Nima qilish kerak"]] } },
          { "type": "conclusion", "title": "Xulosa", "content": "Umumiy xulosa matni..." },
          { "type": "proposal", "title": "Takliflar", "bullets": ["Taklif 1", "Taklif 2"] },
          { "type": "action_plan", "title": "Chora-tadbirlar rejasi", "tableData": { "headers": ["№", "Muammo", "Mexanizm", "Mas'ullar", "Muddati", "Natija"], "rows": [["1", "Muammo 1", "Qanday hal qilinadi", "Mas'ullar", "2026-yil", "Kutilayotgan natija"]] } },
          { "type": "final", "title": "E'tiboringiz uchun rahmat!", "content": "" }
        ]
      }
    `

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b", 
        messages: [
          { role: "system", content: "Siz faqat toza JSON qaytaradigan yordamchisiz." },
          { role: "user", content: prompt }
        ],
        temperature: 0.5,
        response_format: { type: "json_object" }
      })
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error("GROQ XATOSI:", data)
      throw new Error(data.error?.message || "AI xatolik berdi")
    }

    const generatedText = data.choices[0].message.content
    console.log("AI QAYTARGAN MATN:", generatedText) // Vercel logida ko'rish uchun
    
    const cleanJson = generatedText.replace(/```json/g, '').replace(/```/g, '').trim()
    const parsedData = JSON.parse(cleanJson)

    // Default dizayn (agar AI dizayn bermasa, sayt qulamasligi uchun)
    const defaultDesign = {
      primary: '#1e3a8a', 
      secondary: '#eff6ff', 
      accent: '#3b82f6', 
      textColor: '#1e293b'
    }

    // Slaydlar massivini tekshirish
    const slidesArray = (parsedData.slides && Array.isArray(parsedData.slides)) 
      ? parsedData.slides 
      : []

    const finalPresentation = {
      id: crypto.randomUUID(),
      topic,
      author,
      group,
      year: '2026',
      city: 'TOSHKENT',
      design: parsedData.design || defaultDesign,
      slides: slidesArray.map((s: any, i: number) => ({
        id: String(i + 1),
        ...s,
        imageUrl: s.type === 'title' ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' 
                 : s.type === 'final' ? 'https://images.unsplash.com/photo-1519832986547-1f5d4bc3ba4c?q=80&w=1000&auto=format&fit=crop' 
                 : undefined
      }))
    }

    return NextResponse.json(finalPresentation)

  } catch (error: any) {
    console.error("UMUMIY XATO:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
