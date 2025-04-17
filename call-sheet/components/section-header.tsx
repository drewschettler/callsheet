import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string
  icon?: ReactNode
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {icon && <div className="text-[#7B00FF]">{icon}</div>}
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
    </div>
  )
}
