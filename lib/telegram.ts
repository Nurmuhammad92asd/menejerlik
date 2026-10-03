// src/lib/telegram.ts

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

  enableClosingConfirmation?: () => void
  disableClosingConfirmation?: () => void

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

/**
 * Telegram WebApp obyektini olish
 */
export function getWebApp(): TelegramWebApp | null {
  if (typeof window === 'undefined') {
    return null
  }

  return window.Telegram?.WebApp ?? null
}

/**
 * Telegram foydalanuvchisini olish
 */
export function getTelegramUser(): TelegramUser | null {
  const webApp = getWebApp()

  if (!webApp) {
    return null
  }

  return webApp.initDataUnsafe?.user ?? null
}

/**
 * Telegram initData
 */
export function getInitData(): string {
  const webApp = getWebApp()

  return webApp?.initData ?? ''
}

/**
 * Ilova Telegram ichida ishlayotganini tekshirish
 */
export function isTelegramWebApp(): boolean {
  return getWebApp() !== null
}

/**
 * Telegram WebApp versiyasini tekshirish
 *
 * Masalan:
 * supports('6.1')
 * supports('7.0')
 */
export function supports(version: string): boolean {
  const webApp = getWebApp()

  if (!webApp?.version) {
    return false
  }

  const current = webApp.version.split('.').map(Number)
  const required = version.split('.').map(Number)

  const length = Math.max(current.length, required.length)

  for (let i = 0; i < length; i++) {
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

/**
 * Telegram WebApp ni ishga tushirish
 */
export function initTelegram(): TelegramWebApp | null {
  const webApp = getWebApp()

  if (!webApp) {
    return null
  }

  try {
    webApp.ready()
    webApp.expand()
  } catch (error) {
    console.error(
      'Telegram WebApp initialization error:',
      error
    )
  }

  return webApp
}

/**
 * Haptic feedback
 */
export function haptic(
  type:
    | 'light'
    | 'medium'
    | 'heavy'
    | 'rigid'
    | 'soft'
    | 'success'
    | 'error'
    | 'warning' = 'light'
): void {
  const webApp = getWebApp()

  if (!webApp?.HapticFeedback) {
    return
  }

  try {
    if (
      type === 'success' ||
      type === 'error' ||
      type === 'warning'
    ) {
      webApp.HapticFeedback.notificationOccurred(type)
    } else {
      webApp.HapticFeedback.impactOccurred(type)
    }
  } catch (error) {
    console.error(
      'Telegram haptic error:',
      error
    )
  }
}

/**
 * Ilovadan chiqishda tasdiqlash oynasini yoqish/o‘chirish
 */
export function setClosingConfirmation(
  enabled: boolean
): void {
  const webApp = getWebApp()

  if (!webApp) {
    return
  }

  try {
    if (enabled) {
      webApp.enableClosingConfirmation?.()
    } else {
      webApp.disableClosingConfirmation?.()
    }
  } catch (error) {
    console.error(
      'Telegram closing confirmation error:',
      error
    )
  }
}

/**
 * Telegram orqali matn ulashish
 */
export function shareText(text: string): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const encodedText = encodeURIComponent(text)

    const shareUrl =
      `https://t.me/share/url?url=&text=${encodedText}`

    window.open(
      shareUrl,
      '_blank',
      'noopener,noreferrer'
    )
  } catch (error) {
    console.error(
      'Telegram share error:',
      error
    )
  }
}
