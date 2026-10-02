'use client'

import { useEffect, useRef, useState } from 'react'
import { getWebApp, supports, type TelegramUser } from '@/lib/telegram'

const HEADER_COLORS = { light: '#f5f6f9', dark: '#16181d' }

function applyColorScheme() {
  const wa = getWebApp()
  if (!wa) return
  const scheme = wa.colorScheme
  const root = document.documentElement
  root.classList.toggle('dark', scheme === 'dark')
  root.classList.toggle('light', scheme === 'light')
  if (supports('6.1')) {
    wa.setHeaderColor(HEADER_COLORS[scheme])
    wa.setBackgroundColor(HEADER_COLORS[scheme])
  }
}

export function useTelegram() {
  const [user, setUser] = useState<TelegramUser | null>(null)
  const [isTelegram, setIsTelegram] = useState(false)

  useEffect(() => {
    const wa = getWebApp()
    if (!wa) return
    wa.ready()
    wa.expand()
    applyColorScheme()
    setIsTelegram(true)
    setUser(wa.initDataUnsafe.user ?? null)
    wa.onEvent('themeChanged', applyColorScheme)
    return () => wa.offEvent('themeChanged', applyColorScheme)
  }, [])

  return { user, isTelegram }
}

export function useBackButton(visible: boolean, onBack: () => void) {
  const onBackRef = useRef(onBack)
  onBackRef.current = onBack

  useEffect(() => {
    const wa = getWebApp()
    if (!wa || !supports('6.1')) return
    const handler = () => onBackRef.current()
    if (visible) {
      wa.BackButton.show()
      wa.BackButton.onClick(handler)
    } else {
      wa.BackButton.hide()
    }
    return () => wa.BackButton.offClick(handler)
  }, [visible])
}
