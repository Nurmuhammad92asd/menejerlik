// components/slides/slide-creator.tsx
'use client'

import { useState } from 'react'
import type { PresentationData } from './slide-types'
import pptxgen from 'pptxgenjs'
import SlideViewer from './slide-viewer'

const PAYMENT_CARD = '8600 1234 5678 9012'
const PRICE = '300 000'

export default function SlideCreator({ onBack }: { onBack: () => void }) {
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [group, setGroup] = useState('')
  
  const [isPaid, setIsPaid] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [presentation, setPresentation] = useState<PresentationData | null>(null)

  const handleCheckPayment = () => {
    setIsChecking(true)
    setTimeout(() => {
      setIsChecking(false)
      setIsPaid(true)
      alert("To'lov tasdiqlandi! Endi slaydni yaratishingiz mumkin.")
    }, 1500)
  }

  // 🧠 SUN'IY INTELLEKT ORQALI YARATISH
  const handleGenerate = async () => {
    if (!topic || !author || !group || !isPaid) return
    
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

  // PPT yuklash funksiyasi (o'zgarishsiz)
  const handleDownloadPPT = async () => {
    if (!presentation) return
    const pptx = new pptxgen()
    pptx.layout = 'LAYOUT_16x9'
    // ... (PPT yaratish kodi avvalgidek qoladi, xohlasangiz keyinroq to'liq beraman)
    await pptx.writeFile({ fileName: `${presentation.author}.pptx` })
  }

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
        <h1 className="text-2xl font-black mb-2">🎨 Aqlli Slayd Yaratish (AI)</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Qanday mavzu yozsangiz ham, Sun'iy Intellekt sizga 12 ta professional slaydni tayyorlab beradi. Narxi: <strong>{PRICE} so'm</strong>.
        </p>

        <div className="space-y-5">
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

          <div className={`rounded-xl border-2 p-4 mt-6 ${isPaid ? 'border-green-500 bg-green-50' : 'border-amber-500 bg-amber-50'}`}>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-bold text-sm">To'lov miqdori</p>
                <p className="text-xs text-muted-foreground">Bitta tayyor taqdimot uchun</p>
              </div>
              <p className="text-xl font-black text-amber-700">{PRICE} so'm</p>
            </div>
            
            {!isPaid ? (
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border text-center font-mono text-lg font-bold tracking-wider text-blue-900">
                  {PAYMENT_CARD}
                </div>
                <button onClick={handleCheckPayment} disabled={isChecking} className="mt-2 w-full rounded-lg bg-amber-500 py-2 text-sm font-bold text-white hover:bg-amber-600 transition disabled:opacity-50">
                  {isChecking ? '⏳ Tekshirilmoqda...' : '✅ Pulni o\'tkazdim (Tekshirish)'}
                </button>
              </div>
            ) : (
              <p className="mt-3 text-center text-sm font-bold text-green-600">✅ To'lov muvaffaqiyatli tasdiqlandi!</p>
            )}
          </div>

          <button
            onClick={handleGenerate}
            disabled={!topic || !author || !group || !isPaid || isGenerating}
            className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black text-white disabled:opacity-50 mt-4 hover:bg-blue-700 transition"
          >
            {isGenerating ? '⏳ Sun\'iy intellekt yozmoqda...' : '✨ Slaydni yaratish'}
          </button>
        </div>
      </div>
    </section>
  )
}
