export type TelegramUser = {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
}

type CloudCallback<T> = (error: string | null, value?: T) => void

export type TelegramWebApp = {
  initData: string
  initDataUnsafe: { user?: TelegramUser }
  version: string
  colorScheme: 'light' | 'dark'
  isVersionAtLeast: (version: string) => boolean
  ready: () => void
  expand: () => void
  setHeaderColor: (color: string) => void
  setBackgroundColor: (color: string) => void
  enableClosingConfirmation: () => void
  disableClosingConfirmation: () => void
  openTelegramLink: (url: string) => void
  onEvent: (event: string, handler: () => void) => void
  offEvent: (event: string, handler: () => void) => void
  BackButton: {
    show: () => void
    hide: () => void
    onClick: (cb: () => void) => void
    offClick: (cb: () => void) => void
  }
  HapticFeedback: {
    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void
    notificationOccurred: (type: 'error' | 'success' | 'warning') => void
    selectionChanged: () => void
  }
  CloudStorage: {
    getItem: (key: string, cb: CloudCallback<string>) => void
    setItem: (key: string, value: string, cb?: CloudCallback<boolean>) => void
  }
}

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp }
  }
}

export function getWebApp(): TelegramWebApp | undefined {
  if (typeof window === 'undefined') return undefined
  const wa = window.Telegram?.WebApp
  return wa && wa.initData ? wa : undefined
}

export function supports(version: string) {
  return getWebApp()?.isVersionAtLeast(version) ?? false
}

export function haptic(kind: 'success' | 'error' | 'light' | 'selection') {
  const wa = getWebApp()
  if (!wa || !supports('6.1')) return
  if (kind === 'light') wa.HapticFeedback.impactOccurred('light')
  else if (kind === 'selection') wa.HapticFeedback.selectionChanged()
  else wa.HapticFeedback.notificationOccurred(kind)
}

export function setClosingConfirmation(enabled: boolean) {
  const wa = getWebApp()
  if (!wa || !supports('6.2')) return
  if (enabled) wa.enableClosingConfirmation()
  else wa.disableClosingConfirmation()
}

export function shareText(text: string) {
  const url = typeof window !== 'undefined' ? window.location.origin : ''
  const link = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
  const wa = getWebApp()
  if (wa) wa.openTelegramLink(link)
  else window.open(link, '_blank', 'noopener,noreferrer')
}
