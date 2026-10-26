// components/slides/slide-viewer.tsx
'use client'
import { useState } from 'react'
import type { PresentationData } from './slide-types'
import { TitleSlide, ContentSlide } from './slide-renderer'

export default function SlideViewer({ data, onBack }: { data: PresentationData, onBack: () => void }) {
  const [current, setCurrent] = useState(0)
  const slide = data.slides[current]

  return (
    <section className="flex flex-col gap-4 h-[90vh] p-4 bg-slate-100">
      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
        <button onClick={onBack} className="text-sm font-bold text-blue-600">← Yangi yaratish</button>
        <p className="text-sm font-bold">{data.topic}</p>
        <div className="bg-slate-200 px-3 py-1 rounded-full text-xs font-bold">{current + 1} / 12</div>
      </div>

      <div className="flex-1 overflow-hidden rounded-2xl shadow-2xl bg-white aspect-video mx-auto w-full max-w-5xl">
        {slide.type === 'title' ? <TitleSlide data={data} /> : <ContentSlide slide={slide} design={data.design} />}
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} className="rounded-xl border bg-white px-6 py-2 font-bold disabled:opacity-50">← Oldingi</button>
        <button onClick={() => setCurrent(c => Math.min(11, c + 1))} disabled={current === 11} className="rounded-xl bg-blue-600 px-6 py-2 font-bold text-white disabled:opacity-50">Keyingi →</button>
      </div>
    </section>
  )
}
