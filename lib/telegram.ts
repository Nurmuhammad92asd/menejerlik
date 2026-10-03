/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * =========================================================
 * TELEGRAM MINI APP (WebApp) YORDAMCHILARI
 * ---------------------------------------------------------
 * hooks/use-telegram.ts va hooks/use-history.ts shu fayldan
 * getWebApp va supports ni import qiladi.
 *
 * ESLATMA: bu fayl asl faylning qayta tiklangan nusxasi.
 * Imkoni bo‘lsa, GitHub History'dagi asl versiyani qaytaring.
 * =========================================================
 */

/** Telegram WebApp obyekti (turlar erkin: har xil metodlar ishlatiladi) */
export type TelegramWebApp = any

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp
    }
  }
}

/**
 * Telegram ichida ochilgan bo‘lsa WebApp obyektini qaytaradi.
 * Oddiy brauzerda yoki serverda null qaytaradi.
 */
export function getWebApp(): TelegramWebApp | null {
  if (typeof window === 'undefined') return null

  return window.Telegram?.WebApp ?? null
}

/**
 * Funksiya yoki versiya qo‘llab-quvvatlanishini tekshiradi.
 *
 * Quyidagi chaqirish usullarining hammasi ishlaydi:
 *   supports('6.1')                    — versiya kamida 6.1 mi
 *   supports('HapticFeedback')         — shu imkoniyat mavjudmi
 *   supports(webApp, '6.1')            — berilgan WebApp uchun
 *   supports(webApp, 'HapticFeedback')
 */
export function supports(...args: unknown[]): boolean {
  const first = args[0]

  const app: TelegramWebApp | null =
    first && typeof first === 'object' ? first : getWebApp()

  if (!app) return false

  const key = args.find((arg) => typeof arg === 'string') as string | undefined

  if (!key) return true

  // Versiya ko‘rinishidagi kalit: "6.1", "7.0"
  if (/^\d+(\.\d+)*$/.test(key)) {
    try {
      return typeof app.isVersionAtLeast === 'function'
        ? Boolean(app.isVersionAtLeast(key))
        : false
    } catch {
      return false
    }
  }

  // Imkoniyat nomi ko‘rinishidagi kalit: "HapticFeedback", "CloudStorage"
  return Boolean(app[key])
}
export function haptic(
  type: 'light' | 'medium' | 'heavy' | 'success' | 'error' | 'warning' = 'light'
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
    console.error('Telegram haptic error:', error)
  }
}
export function setClosingConfirmation(enabled: boolean): void {
  const webApp = getWebApp()

  if (!webApp) {
    return
  }

  try {
    const webAppWithClosing = webApp as TelegramWebApp & {
      enableClosingConfirmation?: () => void
      disableClosingConfirmation?: () => void
    }

    if (enabled) {
      webAppWithClosing.enableClosingConfirmation?.()
    } else {
      webAppWithClosing.disableClosingConfirmation?.()
    }
  } catch (error) {
    console.error(
      'Telegram closing confirmation error:',
      error
    )
  }
}
