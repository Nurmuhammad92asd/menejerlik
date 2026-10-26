// components/pisa/result-mode.tsx
'use client'

import type { Domain } from './types'
import { DOMAIN_META } from './data'
import { domainAccuracy } from './engine'
import { SkillBar } from './ui'
import type { TestResult } from './test-mode'

export default function ResultMode({
  result, onRetry, onDashboard,
}: {
  result: TestResult
  onRetry: () => void
  onDashboard: () => void
}) {
  const correct = result.answers.filter(a => a.correct).length
  const total = result.answers.length
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  const title = pct >= 85 ? 'Ajoyib natija!' : pct >= 70 ? 'Juda yaxshi!' : pct >= 50 ? 'Yaxshi boshlanish!' : 'Mashqni davom ettiring!'
  const icon = pct >= 85 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '🚀' : '💪'

  return (
    <section className="flex flex-col gap-5">
      <button onClick={onDashboard} className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground hover:text-blue-700">
        <span className="transition-transform group-hover:-translate-x-1">←</span> PISA Academy
      </button>

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#061733] via-[#0a4775] to-[#087fb4] p-7 text-center text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-cyan-300/10 blur-2xl" />
        <div className="relative">
          <div className="text-5xl">{icon}</div>
          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200">ADAPTIVE TEST YAKUNI</p>
          <h1 className="mt-2 text-5xl font-black tracking-tight">{pct}%</h1>
          <h2 className="mt-2 text-lg font-black">{title}</h2>
          <p className="mt-2 text-[11px] text-white/60">{correct} / {total} ta to'g'ri javob</p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-2">
        <ResultBox icon="✓" value={`${correct}`} label="To'g'ri" />
        <ResultBox icon="⭐" value={`+${result.sessionXp}`} label="XP" />
        <ResultBox icon="🎯" value={`${result.bestLevel}/8`} label="Max level" />
      </div>

      {/* DOMAIN PERFORMANCE */}
      <div className="rounded-[28px] border bg-card p-5 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">PERFORMANCE</p>
        <h2 className="mt-1 text-lg font-black">Savodxonlik profili</h2>
        <div className="mt-5 flex flex-col gap-5">
          {(Object.entries(DOMAIN_META) as [Domain, typeof DOMAIN_META[Domain]][]).map(([id, item]) => {
            const acc = domainAccuracy(result.answers, id)
            return <SkillBar key={id} icon={item.icon} title={item.short} value={acc} gradient={item.gradient} />
          })}
        </div>
      </div>

      {/* RECOMMENDATION */}
      <div className="rounded-[26px] border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/20 dark:bg-blue-950/10">
        <div className="flex gap-3">
          <div className="text-xl">🎯</div>
          <div>
            <p className="text-sm font-black">Keyingi qadam</p>
            <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
              {pct >= 80 ? "Siz murakkabroq savollarga tayyorsiz. Keyingi mashg'ulotda yuqoriroq daraja ochiladi."
              : pct >= 60 ? "Asosiy ko'nikmalar yaxshi shakllanmoqda. Xatolar ustida ishlaymiz."
              : "Avval asosiy ko'nikmalarni mustahkamlaymiz, so'ng murakkablikni oshiramiz."}
            </p>
          </div>
        </div>
      </div>

      <button onClick={onRetry} className="rounded-[21px] bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-sm font-black text-white shadow-lg">🔄 Yana adaptive test</button>
      <button onClick={onDashboard} className="rounded-[21px] border bg-card px-5 py-4 text-sm font-black transition hover:bg-muted">🌍 PISA Academy'ga qaytish</button>
    </section>
  )
}

function ResultBox({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="rounded-[22px] border bg-card p-4 text-center shadow-sm">
      <div className="flex justify-center text-lg">{icon}</div>
      <div className="mt-2 text-lg font-black">{value}</div>
      <div className="mt-1 text-[7px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  )
}
