// components/slides/slide-creator.tsx
'use client'

import { useState } from 'react'
import type { PresentationData } from './slide-types'
// import pptxgen from 'pptxgenjs' // PPT uchun

const PAYMENT_CARD = '4073 4200 4205 8275'
const PRICE = '300 000'

export default function SlideCreator({ onBack }: { onBack: () => void }) {
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [group, setGroup] = useState('')
  const [screenshot, setScreenshot] = useState<File | null>(null)
  
  const [isSending, setIsSending] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [presentation, setPresentation] = useState<PresentationData | null>(null)
  
  // Foydalanuvchining unikal ID'si
  const [userId] = useState(() => Math.random().toString(36).substring(2, 15))

  const handleSendPayment = async () => {
    if (!screenshot || !topic || !author) {
      alert("Barcha maydonlarni to'ldiring va to'lov chekini (skrinshot) yuklang!")
      return
    }
    
    setIsSending(true)
    const formData = new FormData()
    formData.append('screenshot', screenshot)
    formData.append('topic', topic)
    formData.append('author', author)
    formData.append('userId', userId)

    try {
      const res = await fetch('/api/payment', { method: 'POST', body: formData })
      if (res.ok) {
        setIsWaiting(true)
        checkApproval()
      } else {
        alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.")
      }
    } catch (error) {
      alert("Tarmoq xatosi.")
    } finally {
      setIsSending(false)
    }
  }

  const checkApproval = () => {
    const interval = setInterval(async () => {
      const res = await fetch(`/api/telegram-webhook?userId=${userId}`)
      const data = await res.json()
      if (data.isApproved) {
        clearInterval(interval)
        setIsApproved(true)
        setIsWaiting(false)
        alert("✅ Admin to'lovni tasdiqladi! Endi slaydni yaratishingiz mumkin.")
      }
    }, 3000) // Har 3 soniyada tekshiradi
  }

  // ... AI orqali slayd yaratish kodi (oldingidek qoladi)

  if (presentation) {
    return ( /* Slaydni ko'rish qismi */ <div>Slayd tayyor!</div> )
  }

  return (
    <section className="mx-auto max-w-2xl p-6">
      <button onClick={onBack} className="mb-6 text-sm font-bold text-blue-600">← Orqaga</button>

      <div className="rounded-3xl border bg-card p-8 shadow-xl">
        <h1 className="text-2xl font-black mb-2">🎨 Aqlli Slayd Yaratish</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Narxi: <strong>{PRICE} so'm</strong>. Pulni o'tkazib, chekni (skrinshotni) yuklang.
        </p>

        <div className="space-y-5">
          {/* Mavzu va ism */}
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Mavzu..." className="w-full rounded-xl border p-3" />
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Muallif..." className="w-full rounded-xl border p-3" />
          
          {/* Karta raqami */}
          <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-4 mt-6">
            <p className="font-bold text-sm mb-2 text-amber-900">💳 Karta raqami:</p>
            <div className="bg-white p-3 rounded-lg border text-center font-mono text-lg font-bold tracking-wider text-blue-900">
              {PAYMENT_CARD}
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">TALATBEKOV NURMUHAMMAD</p>
          </div>

          {/* Rasm yuklash */}
          <div className="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-6 text-center">
            <p className="font-bold text-sm mb-2">📸 To'lov chekini (skrinshot) yuklang:</p>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
              className="w-full text-sm" 
            />
          </div>

          {/* Yuborish yoki kutish */}
          {!isWaiting && !isApproved && (
            <button
              onClick={handleSendPayment}
              disabled={!screenshot || !topic || !author || isSending}
              className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black text-white disabled:opacity-50 mt-4"
            >
              {isSending ? '⏳ Yuborilmoqda...' : '📤 Chekni adminga yuborish'}
            </button>
          )}

          {isWaiting && (
            <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="font-bold text-yellow-700">⏳ Admin tasdiqlashini kuting...</p>
              <p className="text-xs text-yellow-600 mt-1">Rasm Telegram botingizga yuborildi. Iltimos, 1-2 daqiqa kuting.</p>
            </div>
          )}

          {isApproved && (
            <button
              onClick={() => { /* AI generatsiya */ }}
              className="w-full rounded-xl bg-green-600 py-4 text-sm font-black text-white mt-4"
            >
              ✨ Endi slaydni yaratish
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
