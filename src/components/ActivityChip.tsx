import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface ActivityChipProps {
  logoUrl?: string
  icon?: LucideIcon
  label: string
  sublabel: string
}

export default function ActivityChip({
  logoUrl,
  icon: Icon,
  label,
  sublabel,
}: ActivityChipProps) {
  return (
    <div className="group relative inline-flex">
      <div className="flex items-center gap-1.5 h-8 pl-1 pr-3 rounded-full border border-border bg-background transition-shadow duration-200 hover:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] cursor-default">
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt={sublabel}
            width={24}
            height={24}
            className="size-6 rounded-full object-cover flex-none bg-white"
          />
        ) : (
          Icon && (
            <div className="flex items-center justify-center size-6 rounded-full bg-muted flex-none">
              <Icon className="size-3.5 text-foreground" />
            </div>
          )
        )}
        <span className="text-xs font-medium whitespace-nowrap">{label}</span>
      </div>
      <div className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-muted-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
        {sublabel}
      </div>
    </div>
  )
}
