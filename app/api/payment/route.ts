// app/api/payment/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('screenshot') as File
    const topic = formData.get('topic') as string
    const author = formData.get('author') as string
    const userId = formData.get('userId') as string

    // 1. Ma'lumotlar to'liqligini tekshirish
    if (!file || !topic || !author) {
      return NextResponse.json({ error: "Ma'lumotlar to'liq emas" }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const adminId = process.env.TELEGRAM_ADMIN_ID

    if (!botToken || !adminId) {
      console.error("XATO: Bot token yoki Admin ID Vercel'da sozlanmagan!")
      return NextResponse.json({ error: "Bot sozlanmagan" }, { status: 500 })
    }

    // 2. Rasmni o'qib, to'g'ri formatga keltirish
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // 3. Telegramga yuborish uchun FormData tayyorlash
    const tgFormData = new FormData()
    tgFormData.append('chat_id', adminId)
    
    // Rasmni Blob ko'rinishida qo'shish (Bu eng ishonchli usul)
    const blob = new Blob([buffer], { type: file.type || 'image/jpeg' })
    tgFormData.append('photo', blob, 'screenshot.jpg')
    
    tgFormData.append('caption', `💳 **YANGI TO'LOV (300 000 so'm)**\n\n👤 Muallif: ${author}\n📚 Mavzu: ${topic}\n🆔 User ID: ${userId}\n\nTo'lovni tasdiqlaysizmi?`)

    // 4. Tugmalar (Inline Keyboard)
    const inlineKeyboard = {
      inline_keyboard: [
        [
          { text: "✅ Tasdiqlash", callback_data: `approve_${userId}` },
          { text: "❌ Rad etish", callback_data: `reject_${userId}` }
        ]
      ]
    }
    tgFormData.append('reply_markup', JSON.stringify(inlineKeyboard))

    // 5. Telegram API'ga so'rov yuborish
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: 'POST',
      body: tgFormData
    })

    // 6. Agar Telegram xato qaytarsa, aniq xatoni konsolga chiqarish
    if (!tgRes.ok) {
      const errorData = await tgRes.json()
      console.error("Telegram API Xatosi:", errorData)
      throw new Error(errorData.description || "Telegramga yuborishda xatolik")
    }

    return NextResponse.json({ success: true, message: "Skrinshot adminga yuborildi." })
    
  } catch (error: any) {
    console.error("Server Xatosi:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
