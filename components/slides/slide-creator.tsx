// components/slides/slide-creator.tsx
'use client'

import { useState } from 'react'
import type { PresentationData } from './slide-types'
import SlideViewer from './slide-viewer'
import pptxgen from 'pptxgenjs'

export default function SlideCreator({ onBack }: { onBack: () => void }) {
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [group, setGroup] = useState('')
  
  const [isGenerating, setIsGenerating] = useState(false)
  const [presentation, setPresentation] = useState<PresentationData | null>(null)

  // 🧠 To'g'ridan-to'g'ri AI orqali yaratish (To'lovsiz)
  const handleGenerate = async () => {
    if (!topic || !author || !group) {
      alert("Iltimos, mavzu, ism va guruhni to'ldiring!")
      return
    }
    
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

  // PPT yuklash
  const handleDownloadPPT = async () => {
    if (!presentation) return
    const pptx = new pptxgen()
    pptx.layout = 'LAYOUT_16x9'
    
    presentation.slides.forEach((s) => {
      const slide = pptx.addSlide()
      if (s.type === 'title') {
        slide.addText(presentation.topic, { x: 1, y: 3, w: 8, h: 2, fontSize: 32, bold: true, align: 'center' })
        slide.addText(presentation.author, { x: 1, y: 5, w: 8, h: 1, fontSize: 18, align: 'center' })
      } else {
        slide.addText(s.title || '', { x: 0.5, y: 0.5, w: 9, fontSize: 24, bold: true })
        if (s.content) slide.addText(s.content, { x: 0.5, y: 1.5, w: 9, fontSize: 14 })
        if (s.bullets) slide.addText(s.bullets.map(b => ({ text: `• ${b}`, options: { breakLine: true } })), { x: 0.5, y: 1.5, w: 9 })
      }
    })
    
    await pptx.writeFile({ fileName: `${presentation.author}.pptx` })
  }

  // Slayd tayyor bo'lsa ko'rsatish
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

  // Forma qismi
  return (
    <section className="mx-auto max-w-2xl p-6">
      <button onClick={onBack} className="mb-6 text-sm font-bold text-blue-600">← Orqaga</button>

      <div className="rounded-3xl border bg-card p-8 shadow-xl">
        <h1 className="text-2xl font-black mb-2">🎨 Aqlli Slayd Yaratish (Bepul Test)</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Mavzuni kiriting, Sun'iy Intellekt sizga 12 ta professional slaydni tayyorlab beradi.
        </p>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-bold mb-2 block">Mavzu nomi</label>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Masalan: Maktab maslahatchisini baholash diagnostika qilish" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Muallif (Ism-familiya)</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Masalan: TALATBEKOV NURMUHAMMAD" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Guruh / Kurs</label>
            <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} placeholder="Masalan: Menejerlik 2-kurs" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!topic || !author || !group || isGenerating}
            className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black text-white disabled:opacity-50 mt-4 hover:bg-blue-700 transition"
          >
            {isGenerating ? '⏳ Sun\'iy intellekt yozmoqda...' : '✨ Slaydni yaratish'}
          </button>
        </div>
      </div>
    </section>
  )
}
