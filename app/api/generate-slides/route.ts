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
      
      Menga aynan 12 ta slayd uchun ma'lumotlarni JSON formatida qaytaring.
      Javobingiz faqat toza JSON bo'lishi shart, hech qanday qo'shimcha matn yozmang.
      
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
          { "type": "foreign", "title": "Xorijiy tajribalar", "foreignData": [{"country": "Finlandiya", "flag": "🇫🇮", "text": "Ular buni qanday qiladi..."}, {"country": "Yaponiya", "flag": "🇯🇵", "text": "Ularning tajribasi..."}] },
          { "type": "comparison", "title": "Qiyosiy tahlil", "tableData": { "headers": ["O'zbekiston", "Xorij", "Taklif"], "rows": [["Bizda nima bor", "Ularda nima bor", "Nima qilish kerak"]] } },
          { "type": "conclusion", "title": "Xulosa", "content": "Umumiy xulosa matni..." },
          { "type": "proposal", "title": "Takliflar", "bullets": ["Taklif 1", "Taklif 2"] },
          { "type": "action_plan", "title": "Chora-tadbirlar rejasi", "tableData": { "headers": ["№", "Muammo", "Mexanizm", "Mas'ullar", "Muddati", "Natija"], "rows": [["1", "Muammo 1", "Qanday hal qilinadi", "Mavzuga mos mas'ullarni o'zingiz yozing", "2026-yil", "Kutilayotgan natija"]] } },
          { "type": "final", "title": "E'tiboringiz uchun rahmat!", "content": "" }
        ]
      }
    `

    // Groq API ga so'rov yuborish (Model yangilandi!)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // 👈 YANGI VA ISHLAYOTGAN MODEL
        messages: [
          { role: "system", content: "Siz faqat toza JSON qaytaradigan yordamchisiz. Javobingizda hech qanday qo'shimcha matn (masalan, ```json) bo'lmasligi kerak." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      })
    })

    const data = await response.json()
    
    // Agar Groq API xato qaytarsa, konsolga aniq yozamiz
    if (!response.ok) {
      console.error("GROQ API XATOSI:", data)
      throw new Error(data.error?.message || "AI xatolik berdi")
    }

    const generatedText = data.choices[0].message.content
    
    // Ba'zi modellar JSON ni ```json ... ``` ichida qaytarishi mumkin. Uni tozalaymiz.
    const cleanJson = generatedText.replace(/```json/g, '').replace(/```/g, '').trim()
    const parsedData = JSON.parse(cleanJson)

    // Rasmlarni qo'shish
    const finalPresentation = {
      id: crypto.randomUUID(),
      topic,
      author,
      group,
      year: '2026',
      city: 'TOSHKENT',
      design: parsedData.design,
      slides: parsedData.slides.map((s: any, i: number) => ({
        id: String(i + 1),
        ...s,
        imageUrl: s.type === 'title' ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' 
                 : s.type === 'final' ? 'https://images.unsplash.com/photo-1519832986547-1f5d4bc3ba4c?q=80&w=1000&auto=format&fit=crop' 
                 : undefined
      }))
    }

    return NextResponse.json(finalPresentation)

  } catch (error: any) {
    console.error("AI Error:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
