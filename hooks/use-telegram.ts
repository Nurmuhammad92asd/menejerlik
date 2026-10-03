// src/hooks/use-telegram.ts

'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  getTelegramUser,
  getWebApp,
  initTelegram,
  type TelegramUser,
  type TelegramWebApp,
} from '@/lib/telegram'

/**
 * Telegram WebApp bilan ishlash uchun asosiy hook
 */
export function useTelegram() {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null)
  const [user, setUser] = useState<TelegramUser | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const app = getWebApp()

    if (!app) {
      setIsReady(true)
      return
    }

    try {
      initTelegram()

      setWebApp(app)
      setUser(getTelegramUser())
      setIsReady(true)
    } catch (error) {
      console.error(
        'Telegram initialization error:',
        error
      )

      setIsReady(true)
    }
  }, [])

  return {
    webApp,
    user,
    isReady,
    isTelegram: webApp !== null,
  }
}

/**
 * Telegram BackButton bilan ishlash
 */
export function useBackButton(
  onBack?: () => void,
  enabled: boolean = true
) {
  const [isVisible, setIsVisible] = useState(false)

  const handleBack = useCallback(() => {
    if (onBack) {
      onBack()
    }
  }, [onBack])

  useEffect(() => {
    const app = getWebApp()

    if (!app?.BackButton) {
      return
    }

    const backButton = app.BackButton

    if (!enabled) {
      backButton.hide()
      setIsVisible(false)

      return
    }

    backButton.show()
    setIsVisible(true)

    backButton.onClick(handleBack)

    return () => {
      backButton.offClick(handleBack)
      backButton.hide()
      setIsVisible(false)
    }
  }, [enabled, handleBack])

  return {
    isVisible,
    show: () => {
      const app = getWebApp()

      if (app?.BackButton) {
        app.BackButton.show()
        setIsVisible(true)
      }
    },
    hide: () => {
      const app = getWebApp()

      if (app?.BackButton) {
        app.BackButton.hide()
        setIsVisible(false)
      }
    },
  }
}

/**
 * Telegram foydalanuvchisini olish
 */
export function useTelegramUser() {
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    const telegramUser = getTelegramUser()

    setUser(telegramUser)
  }, [])

  return user
}

/**
 * Telegram WebApp obyektini olish
 */
export function useTelegramWebApp() {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null)

  useEffect(() => {
    setWebApp(getWebApp())
  }, [])

  return webApp
}
