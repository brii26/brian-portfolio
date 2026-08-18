'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import TechStack, { type Tech } from '@/components/TechStack'

interface WorkCardProps {
  logoUrl?: string
  company: string
  href?: string
  role: string
  start: string
  end?: string
  dateOverride?: string
  bullets?: string[]
  tech?: Tech[]
  isLast?: boolean
  badge?: string
  titleIsRole?: boolean
  active?: boolean
  incoming?: boolean
}

export default function WorkCard({
  logoUrl,
  company,
  href,
  role,
  start,
  end,
  dateOverride,
  bullets,
  tech,
  isLast,
  badge,
  titleIsRole,
  active,
  incoming,
}: WorkCardProps) {
  const title = titleIsRole ? role : company
  const subtitle = titleIsRole ? company : role
  const [imgError, setImgError] = useState(false)
  const [cardHovered, setCardHovered] = useState(false)

  const Wrapper = href ? 'a' : 'div'

  return (
    <div className="flex gap-x-3">
      {/* timeline column */}
      <div className="flex flex-col items-center flex-none w-3 relative">
        {!isLast && (
          <div className="absolute top-5 md:top-6 -bottom-5 md:-bottom-6 w-px bg-border" />
        )}
        <div className="flex items-center justify-center size-10 md:size-12 flex-none relative z-10">
          <div className="border border-border rounded-full p-[2px] bg-background">
            <span
            className={cn(
              'size-[6px] rounded-full animate-pulse block',
              active && 'bg-green-500',
              incoming && 'bg-yellow-500',
              !active && !incoming && 'bg-black dark:bg-white',
            )}
          />
          </div>
        </div>
      </div>

      {/* content */}
      <div
        className={`flex-1 min-w-0 ${!isLast ? 'pb-[calc(1.5rem+5px)]' : 'pb-2'}`}
      >
        <Wrapper
          {...(href
            ? { href, target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
          className={cn(
            'block w-full rounded-lg -m-2 p-2 transition-colors duration-200',
            href && 'cursor-pointer hover:bg-muted/50',
          )}
        >
          <div className="flex items-center gap-x-3 justify-between w-full">
            <div className="flex items-center gap-x-3 min-w-0">
              {logoUrl && !imgError ? (
                <Image
                  src={logoUrl}
                  alt={company}
                  width={40}
                  height={40}
                  className={cn(
                    'size-10 md:size-12 border-0 rounded-[30%] shadow overflow-hidden object-contain bg-white flex-none transition-all duration-200',
                    company === 'Bandung Institute of Technology' && 'p-px',
                    href &&
                      cardHovered &&
                      'shadow-[0_0_16px_2px_rgba(255,255,255,0.35)]',
                  )}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="size-10 md:size-12 border border-border rounded-[30%] shadow bg-muted flex-none" />
              )}
              <div className="min-w-0 flex flex-col gap-0.5 text-left">
                <div className="font-semibold leading-none flex items-center gap-1.5">
                  <span
                    className={cn(
                      href &&
                        'underline underline-offset-2 transition-colors duration-200',
                      href &&
                        (cardHovered
                          ? 'decoration-foreground'
                          : 'decoration-muted-foreground/40'),
                    )}
                  >
                    {title}
                  </span>
                  {badge && (
                    <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium leading-none text-muted-foreground flex-none">
                      {badge}
                    </span>
                  )}
                  {href && (
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ArrowUpRight
                        className={cn(
                          'absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200',
                          cardHovered ? 'opacity-100' : 'opacity-0',
                        )}
                      />
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-foreground font-normal mt-[3px]">
                  {subtitle}
                </p>
              </div>
            </div>
            <div className="flex-1" />
            <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
              {dateOverride ?? `${start} - ${end ?? 'Present'}`}
            </div>
          </div>
          {bullets && bullets.length > 0 && (
            <ul className="flex flex-col gap-2 ml-[calc(3rem+0.75rem)] mt-0.5 pb-2 max-w-[75%]">
              {bullets.map((b, i) => (
                <li key={i} className="text-xs text-muted-foreground">
                  {b}
                </li>
              ))}
            </ul>
          )}
          {tech && tech.length > 0 && (
            <div className="ml-[calc(3rem+0.75rem)]">
              <TechStack items={tech} />
            </div>
          )}
        </Wrapper>
      </div>
    </div>
  )
}
