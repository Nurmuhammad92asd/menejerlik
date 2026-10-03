'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  getTelegramUser,
  getWebApp,
  initTelegram,
  type TelegramUser,
  type TelegramWebApp,
} from '@/lib/telegram'

/* =========================================================
   useTelegram
   Telegram WebApp asosiy hook
========================================================= */

export function useTelegram() {
  const [webApp, setWebApp] =
    useState<TelegramWebApp | null>(null)

  const [user, setUser] =
    useState<TelegramUser | null>(null)

  const [isReady, setIsReady] =
    useState(false)

  useEffect(() => {
    let mounted = true

    try {
      const app = getWebApp()

      /*
       * Oddiy browser:
       * Telegram WebApp mavjud emas.
       */
      if (!app) {
        if (mounted) {
          setWebApp(null)
          setUser(null)
          setIsReady(true)
        }

        return
      }

      /*
       * Telegram WebAppni ishga tushiramiz.
       */
      initTelegram()

      /*
       * Telegram interfeysini tayyorlash.
       * Ayrim Telegram versiyalarida bu metodlar mavjud bo'lmasligi mumkin,
       * shuning uchun xavfsiz tekshiramiz.
       */
      try {
        app.ready?.()
      } catch {
        // Telegram ready() xatosi ilovani to'xtatmasin
      }

      try {
        app.expand?.()
      } catch {
        // expand() xatosi ilovani to'xtatmasin
      }

      if (!mounted) {
        return
      }

      setWebApp(app)
      setUser(getTelegramUser())
      setIsReady(true)
    } catch {
      /*
       * Telegram API ishlamasa ham,
       * web sayt ishlashda davom etadi.
       */
      if (mounted) {
        setWebApp(null)
        setUser(null)
        setIsReady(true)
      }
    }

    return () => {
      mounted = false
    }
  }, [])

  return {
    webApp,
    user,
    isReady,
    isTelegram: webApp !== null,
  }
}

/* =========================================================
   useBackButton
   Telegram native BackButton boshqaruvi

   Muhim:
   callback o'zgarganda Telegramga yangi listener
   qayta-qayta ulab yubormaymiz.

   Shu sababli testdagi:
   "Orqaga chiqish"
   va boshqa screenlar barqaror ishlaydi.
========================================================= */

export function useBackButton(
  onBack?: () => void,
  enabled: boolean = true,
) {
  const [isVisible, setIsVisible] =
    useState(false)

  /*
   * Eng muhim qism:
   * doim eng yangi onBack funksiyasini saqlaymiz.
   */
  const onBackRef =
    useRef<(() => void) | undefined>(onBack)

  useEffect(() => {
    onBackRef.current = onBack
  }, [onBack])

  /*
   * Telegram BackButton uchun BARQAROR handler.
   *
   * Bu funksiya har renderda yangilanmaydi.
   */
  const handleBack = useCallback(() => {
    try {
      onBackRef.current?.()
    } catch (error) {
      console.error(
        'Telegram BackButton error:',
        error,
      )
    }
  }, [])

  /*
   * Telegram BackButtonni boshqarish.
   */
  useEffect(() => {
    const app = getWebApp()

    if (!app?.BackButton) {
      setIsVisible(false)
      return
    }

    const backButton = app.BackButton

    /*
     * Hook o'chirilgan bo'lsa:
     * button yashiriladi.
     */
    if (!enabled) {
      try {
        backButton.offClick(handleBack)
      } catch {
        // listener mavjud bo'lmasligi mumkin
      }

      try {
        backButton.hide()
      } catch {
        // Telegram API xatosi
      }

      setIsVisible(false)

      return
    }

    /*
     * Avval eski listenerni olib tashlaymiz.
     * Bu duplicate clicklarning oldini oladi.
     */
    try {
      backButton.offClick(handleBack)
    } catch {
      // xavfsiz
    }

    /*
     * Keyin yangi listenerni ulaymiz.
     */
    try {
      backButton.onClick(handleBack)
      backButton.show()

      setIsVisible(true)
    } catch (error) {
      console.error(
        'Telegram BackButton setup error:',
        error,
      )

      setIsVisible(false)
    }

    /*
     * Cleanup
     */
    return () => {
      try {
        backButton.offClick(handleBack)
      } catch {
        // xavfsiz
      }

      try {
        backButton.hide()
      } catch {
        // xavfsiz
      }

      setIsVisible(false)
    }
  }, [enabled, handleBack])

  /*
   * Qo'lda SHOW
   */
  const show = useCallback(() => {
    const app = getWebApp()

    if (!app?.BackButton) {
      return
    }

    try {
      app.BackButton.show()
      setIsVisible(true)
    } catch (error) {
      console.error(
        'Telegram BackButton show error:',
        error,
      )
    }
  }, [])

  /*
   * Qo'lda HIDE
   */
  const hide = useCallback(() => {
    const app = getWebApp()

    if (!app?.BackButton) {
      return
    }

    try {
      app.BackButton.hide()
      setIsVisible(false)
    } catch (error) {
      console.error(
        'Telegram BackButton hide error:',
        error,
      )
    }
  }, [])

  return {
    isVisible,
    show,
    hide,
  }
}

/* =========================================================
   useTelegramUser
========================================================= */

export function useTelegramUser() {
  const [user, setUser] =
    useState<TelegramUser | null>(null)

  useEffect(() => {
    try {
      setUser(getTelegramUser())
    } catch {
      setUser(null)
    }
  }, [])

  return user
}

/* =========================================================
   useTelegramWebApp
========================================================= */

export function useTelegramWebApp() {
  const [webApp, setWebApp] =
    useState<TelegramWebApp | null>(null)

  useEffect(() => {
    try {
      setWebApp(getWebApp())
    } catch {
      setWebApp(null)
    }
  }, [])

  return webApp
}
