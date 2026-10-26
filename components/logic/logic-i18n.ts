// components/logic/logic-i18n.ts
import type { Lang } from './logic-types'

export const LOGIC_I18N = {
  uz: {
    // Hub
    academyTitle: 'Logic Academy',
    academySubtitle: "Mantiqiy fikrlashni o'yinlar orqali kuchaytiring",
    tagline: 'Logic Playground',
    chooseGame: "O'yinni tanlang",
    back: 'Orqaga',
    backToHome: 'Bosh sahifa',
    language: 'Til',
    uzbek: "O'zbekcha",
    english: 'English',

    // Stats
    totalXp: 'Jami XP',
    completed: 'Bajarilgan',
    bestStreak: 'Eng yaxshi streak',
    games: "O'yinlar",

    // Games list
    fallacyTitle: 'Fallacy Hunter',
    fallacyDesc: "Mantiqiy xatoni toping",
    realFakeTitle: 'Real yoki Soxta',
    realFakeDesc: '30 sekundda qaror qabul qiling',
    logicLockTitle: 'Mantiqiy Qulf',
    logicLockDesc: "Qulflarni ketma-ket oching",
    argumentChainTitle: 'Argument Zanjiri',
    argumentChainDesc: "Dalillarni to'g'ri tartibda joylashtiring",

    // Game play
    question: 'Savol',
    of: 'dan',
    next: 'Keyingi',
    finish: 'Yakunlash',
    check: 'Tekshirish',
    correct: "To'g'ri!",
    wrong: 'Xato',
    timeUp: 'Vaqt tugadi!',
    seconds: 'sek',
    xpEarned: 'XP olindi',
    explanation: 'Izoh',
    source: 'Manba',
    reason: 'Sabab',
    real: 'Haqiqiy',
    fake: 'Soxta',
    lock: 'Qulf',
    fallacies: 'Mantiqiy xatolar',
    tapInOrder: "To'g'ri tartibda bosing",
    yourOrder: 'Sizning tartibingiz',
    correctOrder: "To'g'ri tartib",
    playAgain: "Yana o'ynash",
    allDone: "Barcha o'yinlar tugadi!",
    greatJob: 'Zo\'r ish!',
    start: 'Boshlash',
    hint: "Maslahat: har bir variantni o'qing",

    // Fallacy names
    'fallacy.authority': "Obro'ga murojaat",
    'fallacy.bandwagon': "Ko'pchilikka murojaat",
    'fallacy.false-dilemma': 'Soxta dilemma',
    'fallacy.ad-hominem': 'Shaxsiyatga hujum',
    'fallacy.straw-man': "Qo'g'irchoq argument",
    'fallacy.slippery-slope': "Sirg'anchiq nishab",
    'fallacy.circular': 'Aylanma mantiq',
    'fallacy.appeal-emotion': 'Hissiyotga murojaat',
    'fallacy.hasty-generalization': 'Shoshilinch umumlashtirish',
    'fallacy.false-cause': 'Soxta sabab',
  },
  en: {
    academyTitle: 'Logic Academy',
    academySubtitle: 'Strengthen logical thinking through games',
    tagline: 'Logic Playground',
    chooseGame: 'Choose a game',
    back: 'Back',
    backToHome: 'Home',
    language: 'Language',
    uzbek: "O'zbekcha",
    english: 'English',

    totalXp: 'Total XP',
    completed: 'Completed',
    bestStreak: 'Best streak',
    games: 'Games',

    fallacyTitle: 'Fallacy Hunter',
    fallacyDesc: 'Spot the logical fallacy',
    realFakeTitle: 'Real or Fake',
    realFakeDesc: 'Decide in 30 seconds',
    logicLockTitle: 'Logic Lock',
    logicLockDesc: 'Open the locks in sequence',
    argumentChainTitle: 'Argument Chain',
    argumentChainDesc: 'Put the arguments in the correct order',

    question: 'Question',
    of: 'of',
    next: 'Next',
    finish: 'Finish',
    check: 'Check',
    correct: 'Correct!',
    wrong: 'Wrong',
    timeUp: "Time's up!",
    seconds: 's',
    xpEarned: 'XP earned',
    explanation: 'Explanation',
    source: 'Source',
    reason: 'Reason',
    real: 'Real',
    fake: 'Fake',
    lock: 'Lock',
    fallacies: 'Logical fallacies',
    tapInOrder: 'Tap in the correct order',
    yourOrder: 'Your order',
    correctOrder: 'Correct order',
    playAgain: 'Play again',
    allDone: 'All games completed!',
    greatJob: 'Great job!',
    start: 'Start',
    hint: 'Tip: read each option carefully',

    'fallacy.authority': 'Appeal to Authority',
    'fallacy.bandwagon': 'Bandwagon',
    'fallacy.false-dilemma': 'False Dilemma',
    'fallacy.ad-hominem': 'Ad Hominem',
    'fallacy.straw-man': 'Straw Man',
    'fallacy.slippery-slope': 'Slippery Slope',
    'fallacy.circular': 'Circular Reasoning',
    'fallacy.appeal-emotion': 'Appeal to Emotion',
    'fallacy.hasty-generalization': 'Hasty Generalization',
    'fallacy.false-cause': 'False Cause',
  },
} as const

export type I18nKey = keyof typeof LOGIC_I18N.uz

export function t(lang: Lang, key: I18nKey): string {
  return (LOGIC_I18N[lang] as Record<string, string>)[key] ?? key
}

export function tt(lang: Lang, obj: { uz: string; en: string }): string {
  return obj[lang]
}

export function tl(lang: Lang, obj: { uz: string[]; en: string[] }): string[] {
  return obj[lang]
}
