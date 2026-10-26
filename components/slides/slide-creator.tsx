// components/slides/slide-creator.tsx
'use client'

import { useState } from 'react'
import type { PresentationData } from './slide-types'
import pptxgen from 'pptxgenjs'
import SlideViewer from './slide-viewer'

const PAYMENT_CARD = '4073 4200 4205 8275'
const ADMIN_NAME = 'TALATBEKOV NURMUHAMMAD'
const PRICE = '300 000'

// 🔐 SIZ BERADIGAN MAXSUS KODLAR (O'zingiz xohlagancha qo'shishingiz mumkin)
// Har bir kod faqat 1 marta ishlaydi (keyin o'chiriladi)
const VALID_CODES = [
  'PISA-2026-A1',
  'PISA-2026-B2',
  'PISA-2026-C3',
]

export default function SlideCreator({ onBack }: { onBack: () => void }) {
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [group, setGroup] = useState('')
  
  const [enteredCode, setEnteredCode] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  
  const [isGenerating, setIsGenerating] = useState(false)
  const [presentation, setPresentation] = useState<PresentationData | null>(null)

  // 🔐 Kodni tekshirish
  const handleVerifyCode = () => {
    if (VALID_CODES.includes(enteredCode.trim())) {
      setIsVerified(true)
      alert("✅ Kod to'g'ri! Endi slaydni yaratishingiz mumkin.")
    } else {
      alert("❌ Kod noto'g'ri! Iltimos, to'lovni amalga oshirib, admin bilan bog'laning.")
    }
  }

  // 🧠 AI orqali yaratish
  const handleGenerate = async () => {
    if (!topic || !author || !group || !isVerified) return
    
    setIsGenerating(true)
    try {
      const res = await fetch('/api/generate-slides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, author, group })
      })
      
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "AI bilan bog'lanishda xatolik")
      }
      
      const data = await res.json()
      setPresentation(data)
    } catch (error: any) {
      alert("Xatolik yuz berdi: " + error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownloadPPT = async () => {
    if (!presentation) return
    const pptx = new pptxgen()
    pptx.layout = 'LAYOUT_16x9'
    // ... (PPT yuklash kodi)
    await pptx.writeFile({ fileName: `${presentation.author}.pptx` })
  }

  // Natijani ko'rsatish
  if (presentation) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4 py-4">
          <button onClick={handleDownloadPPT} className="rounded-xl bg-green-600 px-8 py-3 text-sm font-black text-white shadow-lg hover:bg-green-700 transition">
            ⬇️ PowerPoint (.pptx) yuklab olish
          </button>
          <button onClick={() => setPresentation(null)} className="rounded-xl border px-8 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
            ← Yangi slayd yaratish
          </button>
        </div>
        <SlideViewer data={presentation} onBack={() => setPresentation(null)} />
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-2xl p-6">
      <button onClick={onBack} className="mb-6 text-sm font-bold text-blue-600">← Orqaga</button>

      <div className="rounded-3xl border bg-card p-8 shadow-xl">
        <h1 className="text-2xl font-black mb-2">🎨 Aqlli Slayd Yaratish</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Narxi: <strong>{PRICE} so'm</strong>. To'lovni amalga oshirib, admin bergan maxsus kodni kiriting.
        </p>

        <div className="space-y-5">
          {/* 1. Mavzu va ism */}
          <div>
            <label className="text-sm font-bold mb-2 block">Mavzu nomi</label>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Masalan: Maktab maslahatchisini baholash diagnostika qilish" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Muallif (Ism-familiya)</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Masalan: AMINJONOVA MADINAXON" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Guruh / Kurs</label>
            <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} placeholder="Masalan: Menejerlik 2-kurs" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>

          {/* 2. To'lov ma'lumotlari */}
          <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-4 mt-6">
            <p className="font-bold text-sm mb-2 text-amber-900">💳 To'lov ma'lumotlari:</p>
            <div className="bg-white p-3 rounded-lg border text-center font-mono text-lg font-bold tracking-wider text-blue-900">
              {PAYMENT_CARD}
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">Ism: {ADMIN_NAME}</p>
            <p className="text-xs text-center text-amber-700 mt-2 font-bold">To'lovni amalga oshirib, admin bilan bog'laning va maxsus kod oling.</p>
          </div>

          {/* 3. Kodni tekshirish */}
          <div className={`rounded-xl border-2 p-4 mt-4 ${isVerified ? 'border-green-500 bg-green-50' : 'border-slate-300 bg-slate-50'}`}>
            <p className="font-bold text-sm mb-2">🔐 Admin bergan maxsus kod:</p>
            {!isVerified ? (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={enteredCode} 
                  onChange={(e) => setEnteredCode(e.target.value)} 
                  placeholder="PISA-2026-A1" 
                  className="flex-1 rounded-lg border p-2 outline-none focus:border-blue-500" 
                />
                <button onClick={handleVerifyCode} className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-bold text-white hover:bg-slate-700 transition">
                  Tekshirish
                </button>
              </div>
            ) : (
              <p className="text-sm font-bold text-green-600">✅ Kod tasdiqlandi! Endi slaydni yaratishingiz mumkin.</p>
            )}
          </div>

          {/* 4. Yaratish tugmasi */}
          <button
            onClick={handleGenerate}
            disabled={!topic || !author || !group || !isVerified || isGenerating}
            className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black text-white disabled:opacity-50 mt-4 hover:bg-blue-700 transition"
          >
            {isGenerating ? '⏳ Sun\'iy intellekt yozmoqda...' : '✨ Slaydni yaratish'}
          </button>
        </div>
      </div>
    </section>
  )
}
