// app/api/payment/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('screenshot') as File
    const topic = formData.get('topic') as string
    const author = formData.get('author') as string
    const userId = formData.get('userId') as string

    if (!file || !topic || !author) {
      return NextResponse.json({ error: "Ma'lumotlar to'liq emas" }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const adminId = process.env.TELEGRAM_ADMIN_ID

    if (!botToken || !adminId) {
      console.error("XATO: Bot token yoki Admin ID Vercel'da sozlanmagan!")
      return NextResponse.json({ error: "Bot sozlanmagan" }, { status: 500 })
    }

    // 1. Rasmni Base64 formatiga o'girish
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const base64Image = buffer.toString('base64')
    
    // 2. Data URL yaratish (Telegram buni tushunadi)
    const imageUrl = `data:${file.type || 'image/jpeg'};base64,${base64Image}`

    // 3. Telegramga yuborish uchun FormData
    const tgFormData = new FormData()
    tgFormData.append('chat_id', adminId)
    
    // Rasm o'rniga to'g'ridan-to'g'ri Base64 string yuboramiz
    tgFormData.append('photo', imageUrl) 
    tgFormData.append('caption', `💳 **YANGI TO'LOV**\n\n👤 Muallif: ${author}\n📚 Mavzu: ${topic}\n🆔 User ID: ${userId}`)

    const inlineKeyboard = {
      inline_keyboard: [
        [
          { text: "✅ Tasdiqlash", callback_data: `approve_${userId}` },
          { text: "❌ Rad etish", callback_data: `reject_${userId}` }
        ]
      ]
    }
    tgFormData.append('reply_markup', JSON.stringify(inlineKeyboard))

    // 4. So'rov yuborish
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: 'POST',
      body: tgFormData
    })

    if (!tgRes.ok) {
      const errorData = await tgRes.json()
      console.error("TELEGRAM XATOSI:", errorData)
      throw new Error(errorData.description || "Telegramga yuborishda xatolik")
    }

    return NextResponse.json({ success: true, message: "Skrinshot adminga yuborildi." })
    
  } catch (error: any) {
    console.error("SERVER XATOSI:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
