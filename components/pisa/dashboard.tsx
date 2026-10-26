// components/pisa/dashboard.tsx
'use client'

import type { Domain, SkillState, Difficulty } from './types'
import { DOMAIN_META, DIFFICULTY_META } from './data'
import { BackButton, HeroStat, SkillBar } from './ui'

export default function Dashboard({
  onBack, onLearn, onTest, skills, totalXp, bestLevel,
}: {
  onBack: () => void
  onLearn: (d: Domain) => void
  onTest: (d: Domain | null) => void
  skills: SkillState
  totalXp: number
  bestLevel: Difficulty
}) {
  return (
    <section className="flex flex-col gap-6">
      <BackButton onClick={onBack} text="O'quvchi Akademiyasi" />

      {/* HERO */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#04142d] via-[#083b6b] to-[#087db5] p-6 text-white shadow-2xl shadow-blue-900/20">
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-cyan-300/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-blue-400/10 blur-2xl" />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-cyan-100">
              International Assessment
            </div>
            <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl">🌍</div>
          </div>
          <div className="mt-7">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">MENEJERLIK BY NURMUHAMMAD</p>
            <h1 className="mt-2 text-[31px] font-black tracking-tight">PISA Academy</h1>
            <p className="mt-3 max-w-xl text-[12px] leading-6 text-white/70">
              Avval o'rganing, keyin sinab ko'ring. Tahlil qiling. Dalil toping. Qaror qabul qiling.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            <HeroStat value={`${bestLevel}/8`} label="Eng yuqori daraja" />
            <HeroStat value={`${totalXp}`} label="Jami XP" />
            <HeroStat value={`${skills.mathematics}%`} label="Matematika" />
          </div>
        </div>
      </div>

      {/* DOMAINS */}
      <div>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">PISA DOMAINS</p>
            <h2 className="mt-1 text-xl font-black">Savodxonlik yo'nalishlari</h2>
          </div>
          <span className="rounded-full bg-muted px-2.5 py-1 text-[9px] font-bold text-muted-foreground">4 yo'nalish</span>
        </div>
        <div className="grid gap-3">
          {(Object.entries(DOMAIN_META) as [Domain, typeof DOMAIN_META[Domain]][]).map(([id, item]) => {
            const accuracy = skills[id]
            return (
              <div key={id} className="group relative overflow-hidden rounded-[25px] border bg-card p-5 shadow-sm transition-all hover:shadow-xl">
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.gradient}`} />
                <div className="flex items-center gap-4">
                  <div className={`flex size-14 shrink-0 items-center justify-center rounded-[19px] bg-gradient-to-br ${item.gradient} text-2xl text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-black">{item.title}</h3>
                      <span className="text-[10px] font-black text-muted-foreground">{accuracy}%</span>
                    </div>
                    <p className="mt-1 text-[10px] leading-5 text-muted-foreground">{item.description}</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className={`h-full rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-700`} style={{ width: `${accuracy}%` }} />
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button onClick={() => onLearn(id)} className="rounded-xl bg-blue-600 py-2.5 text-[11px] font-black text-white transition hover:bg-blue-700">
                    📚 O'rganish
                  </button>
                  <button onClick={() => onTest(id)} className="rounded-xl border py-2.5 text-[11px] font-black transition hover:bg-muted">
                    🎯 Test
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* FULL CHALLENGE */}
      <button onClick={() => onTest(null)} className="group relative overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-700 via-blue-700 to-cyan-600 p-5 text-left text-white shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1">
        <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-white/5" />
        <div className="relative flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-[19px] border border-white/10 bg-white/10 text-2xl">🏆</div>
          <div className="flex-1">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-100">ULTIMATE CHALLENGE</p>
            <h2 className="mt-1 text-lg font-black">PISA Full Challenge</h2>
            <p className="mt-1 text-[10px] leading-5 text-white/70">4 yo'nalish. Adaptive engine. 8 daraja. Bitta katta sinov.</p>
          </div>
          <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
        </div>
      </button>

      {/* SKILL MAP */}
      <div className="rounded-[28px] border bg-card p-5 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">SKILL MAP</p>
            <h2 className="mt-1 text-lg font-black">Rivojlanish xaritasi</h2>
          </div>
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-lg dark:bg-blue-950/20">📊</div>
        </div>
        <div className="mt-6 flex flex-col gap-5">
          {(Object.entries(DOMAIN_META) as [Domain, typeof DOMAIN_META[Domain]][]).map(([id, item]) => (
            <SkillBar key={id} icon={item.icon} title={item.short} value={skills[id]} gradient={item.gradient} />
          ))}
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="rounded-[25px] border border-amber-100 bg-amber-50/70 p-5 dark:border-amber-900/20 dark:bg-amber-950/10">
        <div className="flex gap-3">
          <div className="text-xl">💡</div>
          <div>
            <p className="text-sm font-black">PISA Academy haqida</p>
            <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
              Ushbu tizim PISA frameworklaridan ilhomlangan original mashqlar asosida. Bu OECDning rasmiy PISA testi emas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
