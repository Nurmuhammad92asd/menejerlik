export type TelegramUser = {
  id: number
  first_name?: string
  last_name?: string
  username?: string
  language_code?: string
  is_premium?: boolean
  photo_url?: string
}

export type TelegramWebApp = {
  initData: string
  initDataUnsafe: {
    user?: TelegramUser
    query_id?: string
    auth_date?: number
    hash?: string
    [key: string]: unknown
  }

  colorScheme: 'light' | 'dark'
  platform: string
  version: string

  ready: () => void
  expand: () => void
  close: () => void

  setHeaderColor?: (color: string) => void
  setBackgroundColor?: (color: string) => void

  MainButton?: {
    text: string
    color: string
    textColor: string
    isVisible: boolean
    isActive: boolean
    show: () => void
    hide: () => void
    enable: () => void
    disable: () => void
    setText: (text: string) => void
    onClick: (callback: () => void) => void
    offClick: (callback: () => void) => void
  }

  BackButton?: {
    isVisible: boolean
    show: () => void
    hide: () => void
    onClick: (callback: () => void) => void
    offClick: (callback: () => void) => void
  }

  HapticFeedback?: {
    impactOccurred: (
      style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'
    ) => void
    notificationOccurred: (
      type: 'error' | 'success' | 'warning'
    ) => void
    selectionChanged: () => void
  }

  [key: string]: unknown
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp
    }
  }
}

export function getWebApp(): TelegramWebApp | null {
  if (typeof window === 'undefined') {
    return null
  }

  return window.Telegram?.WebApp ?? null
}

export function getTelegramUser(): TelegramUser | null {
  const webApp = getWebApp()

  if (!webApp) {
    return null
  }

  return webApp.initDataUnsafe?.user ?? null
}

export function getInitData(): string {
  const webApp = getWebApp()

  return webApp?.initData ?? ''
}

export function isTelegramWebApp(): boolean {
  return getWebApp() !== null
}

export function supports(version: string): boolean {
  const webApp = getWebApp()

  if (!webApp?.version) {
    return false
  }

  const current = webApp.version.split('.').map(Number)
  const required = version.split('.').map(Number)

  const maxLength = Math.max(current.length, required.length)

  for (let i = 0; i < maxLength; i++) {
    const currentPart = current[i] ?? 0
    const requiredPart = required[i] ?? 0

    if (currentPart > requiredPart) {
      return true
    }

    if (currentPart < requiredPart) {
      return false
    }
  }

  return true
}

export function initTelegram(): TelegramWebApp | null {
  const webApp = getWebApp()

  if (!webApp) {
    return null
  }

  try {
    webApp.ready()
    webApp.expand()
  } catch (error) {
    console.error('Telegram WebApp initialization error:', error)
  }

  return webApp
}
