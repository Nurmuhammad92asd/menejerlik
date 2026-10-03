'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  getTelegramUser,
  getWebApp,
  initTelegram,
  type TelegramUser,
  type TelegramWebApp,
} from '@/lib/telegram'

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

    initTelegram()

    setWebApp(app)
    setUser(getTelegramUser())
    setIsReady(true)
  }, [])

  return {
    webApp,
    user,
    isReady,
    isTelegram: webApp !== null,
  }
}

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

    show() {
      const app = getWebApp()

      if (app?.BackButton) {
        app.BackButton.show()
        setIsVisible(true)
      }
    },

    hide() {
      const app = getWebApp()

      if (app?.BackButton) {
        app.BackButton.hide()
        setIsVisible(false)
      }
    },
  }
}

export function useTelegramUser() {
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(getTelegramUser())
  }, [])

  return user
}

export function useTelegramWebApp() {
  const [webApp, setWebApp] =
    useState<TelegramWebApp | null>(null)

  useEffect(() => {
    setWebApp(getWebApp())
  }, [])

  return webApp
}
