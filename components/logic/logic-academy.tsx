// components/logic/logic-academy.tsx
'use client'

import { useEffect, useState } from 'react'
import type { GameType, Lang } from './logic-types'
import { t } from './logic-i18n'
import {
  FALLACY_GAMES,
  REAL_FAKE_GAMES,
  LOGIC_LOCK_GAMES,
  ARGUMENT_CHAIN_GAMES,
} from './logic-games'
import {
  FallacyHunter,
  RealOrFake,
  LogicLock,
  ArgumentChain,
} from './logic-ui'

const STORAGE_KEY = 'menejerlik-logic-progress-v1'
const LANG_KEY = 'menejerlik-logic-lang'

type Mode = 'hub' | GameType

export default function LogicAcademy({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<Mode>('hub')
  const [gameIdx, setGameIdx] = useState(0)
  const [lang, setLang] = useState<Lang>('uz')
  const [totalXp, setTotalXp] = useState(0)
  const [completedGames, setCompletedGames] = useState<string[]>([])

  // Load
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(LANG_KEY)
      if (savedLang === 'uz' || savedLang === 'en') setLang(savedLang)

      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const data = JSON.parse(raw)
        if (typeof data.totalXp === 'number') setTotalXp(data.totalXp)
        if (Array.isArray(data.completedGames)) setCompletedGames(data.completedGames)
      }
    } catch {}
  }, [])

  // Save
  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang)
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ totalXp, completedGames }))
    } catch {}
  }, [lang, totalXp, completedGames])

  const addXp = (xp: number, gameId: string) => {
    if (xp > 0) setTotalXp(v => v + xp)
    setCompletedGames(prev => prev.includes(gameId) ? prev : [...prev, gameId])
  }

  const switchLanguage = () => {
    setLang(l => (l === 'uz' ? 'en' : 'uz'))
  }

  /* ═══════════════════════════════════════════
     HUB
  ═══════════════════════════════════════════ */

  if (mode === 'hub') {
    const totalGames =
      FALLACY_GAMES.length +
      REAL_FAKE_GAMES.length +
      LOGIC_LOCK_GAMES.length +
      ARGUMENT_CHAIN_GAMES.length

    return (
      <section className="flex flex-col gap-5">
        {/* Language */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-fuchsia-700"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {t(lang, 'backToHome')}
          </button>

          <button
            onClick={switchLanguage}
            className="rounded-xl border bg-card px-3 py-2 text-[11px] font-black transition hover:bg-muted"
          >
            🌐 {lang === 'uz' ? 'UZ' : 'EN'}
          </button>
        </div>

        {/* Hero */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-fuchsia-700 via-purple-700 to-indigo-800 p-6 text-white shadow-2xl">
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-fuchsia-300/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full bg-indigo-300/20 blur-2xl" />
          <div className="relative">
            <div className="text-4xl">🧠</div>
            <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-200">
              {t(lang, 'tagline')}
            </p>
            <h1 className="mt-1 text-3xl font-black tracking-tight">
              {t(lang, 'academyTitle')}
            </h1>
            <p className="mt-2 max-w-md text-[12px] leading-6 text-white/80">
              {t(lang, 'academySubtitle')}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <StatBox value={`${totalXp}`} label={t(lang, 'totalXp')} />
              <StatBox value={`${completedGames.length}/${totalGames}`} label={t(lang, 'completed')} />
              <StatBox value={`${completedGames.length}`} label={t(lang, 'games')} />
            </div>
          </div>
        </div>

        {/* Games */}
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-700">
            {t(lang, 'chooseGame')}
          </p>
          <div className="mt-3 grid gap-3">
            {/* Fallacy */}
            <GameCard
              icon="🔍"
              gradient="from-red-500 to-orange-500"
              title={t(lang, 'fallacyTitle')}
              desc={t(lang, 'fallacyDesc')}
              count={`${FALLACY_GAMES.length}`}
              onClick={() => { setGameIdx(0); setMode('fallacy') }}
            />

            {/* Real/Fake */}
            <GameCard
              icon="📱"
              gradient="from-amber-500 to-yellow-500"
              title={t(lang, 'realFakeTitle')}
              desc={t(lang, 'realFakeDesc')}
              count={`${REAL_FAKE_GAMES.length}`}
              onClick={() => { setGameIdx(0); setMode('real-fake') }}
            />

            {/* Lock */}
            <GameCard
              icon="🔒"
              gradient="from-indigo-600 to-blue-600"
              title={t(lang, 'logicLockTitle')}
              desc={t(lang, 'logicLockDesc')}
              count={`${LOGIC_LOCK_GAMES.length}`}
              onClick={() => { setGameIdx(0); setMode('logic-lock') }}
            />

            {/* Chain */}
            <GameCard
              icon="🔗"
              gradient="from-violet-600 to-fuchsia-600"
              title={t(lang, 'argumentChainTitle')}
              desc={t(lang, 'argumentChainDesc')}
              count={`${ARGUMENT_CHAIN_GAMES.length}`}
              onClick={() => { setGameIdx(0); setMode('argument-chain') }}
            />
          </div>
        </div>

        {/* Info */}
        <div className="rounded-[25px] border border-fuchsia-100 bg-fuchsia-50/70 p-5 dark:border-fuchsia-900/20 dark:bg-fuchsia-950/10">
          <div className="flex gap-3">
            <div className="text-xl">💡</div>
            <div>
              <p className="text-sm font-black">{t(lang, 'academyTitle')}</p>
              <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                {lang === 'uz'
                  ? "O'yinlar orqali mantiqiy fikrlashni kuchaytiring. Har bir to'g'ri javob XP beradi."
                  : 'Strengthen logical thinking through games. Every correct answer gives XP.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  /* ═══════════════════════════════════════════
     GAMES
  ═══════════════════════════════════════════ */

  // FALLACY
  if (mode === 'fallacy') {
    const game = FALLACY_GAMES[gameIdx]
    return (
      <FallacyHunter
        game={game}
        lang={lang}
        index={gameIdx}
        total={FALLACY_GAMES.length}
        onComplete={(correct, xp) => {
          if (correct) addXp(xp, game.id)
          setTimeout(() => {
            if (gameIdx + 1 < FALLACY_GAMES.length) {
              setGameIdx(i => i + 1)
            } else {
              setMode('hub')
            }
          }, 2200)
        }}
        onBack={() => {
          if (gameIdx + 1 < FALLACY_GAMES.length) {
            setGameIdx(i => i + 1)
          } else {
            setMode('hub')
          }
        }}
      />
    )
  }

  // REAL/FAKE
  if (mode === 'real-fake') {
    const game = REAL_FAKE_GAMES[gameIdx]
    return (
      <RealOrFake
        game={game}
        lang={lang}
        index={gameIdx}
        total={REAL_FAKE_GAMES.length}
        onComplete={(correct, xp) => {
          if (correct) addXp(xp, game.id)
        }}
        onBack={() => {
          if (gameIdx + 1 < REAL_FAKE_GAMES.length) {
            setGameIdx(i => i + 1)
          } else {
            setMode('hub')
          }
        }}
      />
    )
  }

  // LOGIC LOCK
  if (mode === 'logic-lock') {
    const game = LOGIC_LOCK_GAMES[gameIdx]
    return (
      <LogicLock
        game={game}
        lang={lang}
        onComplete={(correctCount, total, xp) => {
          addXp(xp, game.id)
          setTimeout(() => {
            if (gameIdx + 1 < LOGIC_LOCK_GAMES.length) {
              setGameIdx(i => i + 1)
            } else {
              setMode('hub')
            }
          }, 2200)
        }}
        onBack={() => setMode('hub')}
      />
    )
  }

  // ARGUMENT CHAIN
  if (mode === 'argument-chain') {
    const game = ARGUMENT_CHAIN_GAMES[gameIdx]
    return (
      <ArgumentChain
        game={game}
        lang={lang}
        onComplete={(correct, xp) => {
          if (correct) addXp(xp, game.id)
        }}
        onBack={() => {
          if (gameIdx + 1 < ARGUMENT_CHAIN_GAMES.length) {
            setGameIdx(i => i + 1)
          } else {
            setMode('hub')
          }
        }}
      />
    )
  }

  return null
}

/* =========================================================
   UI COMPONENTS
========================================================= */

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
      <p className="text-base font-black">{value}</p>
      <p className="mt-0.5 text-[7px] font-bold uppercase tracking-wider text-white/60">
        {label}
      </p>
    </div>
  )
}

function GameCard({
  icon,
  gradient,
  title,
  desc,
  count,
  onClick,
}: {
  icon: string
  gradient: string
  title: string
  desc: string
  count: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[25px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
    >
      <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${gradient}`} />
      <div className="flex items-center gap-4">
        <div
          className={`flex size-14 shrink-0 items-center justify-center rounded-[19px] bg-gradient-to-br ${gradient} text-2xl text-white shadow-lg`}
        >
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-black">{title}</h3>
            <span className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-black">
              {count}
            </span>
          </div>
          <p className="mt-1 text-[10px] leading-5 text-muted-foreground">{desc}</p>
        </div>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all group-hover:translate-x-1 group-hover:bg-fuchsia-50 group-hover:text-fuchsia-700">
          →
        </div>
      </div>
    </button>
  )
}
