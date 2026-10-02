import { Briefcase, Megaphone, Shuffle, Sparkles, UsersRound, Wallet, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICONS: Record<string, LucideIcon> = {
  asoslar: Briefcase,
  liderlik: Sparkles,
  marketing: Megaphone,
  moliya: Wallet,
  kadrlar: UsersRound,
  aralash: Shuffle,
}

export function CategoryIcon({ id, className }: { id: string; className?: string }) {
  const Icon = ICONS[id] ?? Briefcase
  return <Icon className={cn('size-5', className)} aria-hidden="true" />
}
