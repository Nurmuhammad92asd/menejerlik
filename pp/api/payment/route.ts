// app/api/payment/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('screenshot') as File
    const topic = formData.get('topic') as string
    const author = formData.get('author') as string
    const userId = formData.get('userId') as string // Foydalanuvchining unikal ID'si

    if (!file || !topic || !author) {
      return NextResponse.json({ error: "Ma'lumotlar to'liq emas" }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const adminId = process.env.TELEGRAM_ADMIN_ID

    if (!botToken || !adminId) {
      return NextResponse.json({ error: "Bot sozlanmagan" }, { status: 500 })
    }

    // 1. Skrinshotni Telegramga yuborish
    const tgFormData = new FormData()
    tgFormData.append('chat_id', adminId)
    tgFormData.append('photo', file)
    tgFormData.append('caption', `💳 **YANGI TO'LOV!**\n\n👤 Muallif: ${author}\n📚 Mavzu: ${topic}\n🆔 User ID: ${userId}\n\nTo'lovni tasdiqlaysizmi?`)

    // Inline tugmalar (Tasdiqlash / Rad etish)
    const inlineKeyboard = {
      inline_keyboard: [
        [
          { text: "✅ Tasdiqlash", callback_data: `approve_${userId}` },
          { text: "❌ Rad etish", callback_data: `reject_${userId}` }
        ]
      ]
    }
    tgFormData.append('reply_markup', JSON.stringify(inlineKeyboard))

    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: 'POST',
      body: tgFormData
    })

    if (!tgRes.ok) {
      throw new Error("Telegramga yuborishda xatolik")
    }

    return NextResponse.json({ success: true, message: "Skrinshot adminga yuborildi. Tasdiqlanishini kuting." })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
