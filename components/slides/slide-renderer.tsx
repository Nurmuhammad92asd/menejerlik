// components/slides/slide-renderer.tsx
'use client'
import type { PresentationData, SlideData } from './slide-types'

export function TitleSlide({ data }: { data: PresentationData }) {
  const d = data.design || { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b' }
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-slate-900 p-12 text-white">
      <div className="absolute inset-0">
        <img src={data.slides[0]?.imageUrl || ''} alt="bg" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>
      <div className="relative z-10 flex items-center justify-between">
         <div className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase">Menejerlik Akademiyasi</div>
         <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-[10px] font-bold text-center backdrop-blur-md">ABDULLA<br/>AVLONIY</div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h1 className="text-5xl font-black uppercase leading-tight max-w-4xl shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
          {data.topic}
        </h1>
        <div className="mt-12 h-1 w-32" style={{ backgroundColor: d.accent }} />
      </div>
      <div className="relative z-10 mt-10 flex justify-between items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: d.accent }}>Muallif:</p>
          <h2 className="text-2xl font-black">{data.author}</h2>
          <p className="text-sm font-semibold text-slate-400">{data.group}</p>
        </div>
        <p className="text-sm font-black tracking-widest text-slate-400">{data.city} {data.year}</p>
      </div>
    </div>
  )
}

export function ContentSlide({ slide, design }: { slide: SlideData; design: any }) {
  const d = design || { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b' }
  return (
    <div className="flex h-full w-full flex-col bg-white p-12 relative overflow-hidden">
      {/* Dekorativ fon elementlari */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full opacity-50 pointer-events-none" />
      
      {/* Sarlavha */}
      <div className="flex items-center gap-4 mb-8 border-b-2 pb-4" style={{ borderColor: d.secondary }}>
        <div className="w-2 h-10 rounded-full" style={{ backgroundColor: d.primary }} />
        <h2 className="text-3xl font-black uppercase tracking-tight" style={{ color: d.primary }}>
          {slide.title || "Ma'lumot"}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar z-10">
        {slide.content && (
          <p className="text-[18px] leading-relaxed text-slate-700 text-justify mb-6 font-medium">{slide.content}</p>
        )}

        {slide.bullets && slide.bullets.length > 0 && (
          <ul className="grid gap-4">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[14px] font-black text-white shadow-md" style={{ backgroundColor: d.primary }}>
                  {i + 1}
                </span>
                <span className="text-[16px] font-semibold text-slate-700 leading-relaxed pt-1">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {slide.foreignData && slide.foreignData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {slide.foreignData.map((item: any, idx: number) => (
              <div key={idx} className="flex flex-col gap-3 rounded-2xl border-l-4 p-5 shadow-sm bg-white" style={{ borderLeftColor: d.accent }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.flag || "🏳️"}</span>
                  <h3 className="font-black text-lg" style={{ color: d.primary }}>{item.country}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {slide.tableData && (
          <div className="mt-4 overflow-hidden rounded-2xl border shadow-sm">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-slate-100" style={{ color: d.primary }}>
                <tr>
                  {slide.tableData.headers?.map((h: string, i: number) => (
                    <th key={i} className="p-4 font-black uppercase tracking-wider border-b">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.tableData.rows?.map((row: string[], i: number) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-slate-50 transition-colors">
                    {row.map((cell: string, j: number) => (
                      <td key={j} className="p-4 font-medium text-slate-700 align-top">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
