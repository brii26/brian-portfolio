'use client'
import { Dock, DockIcon } from '@/components/magicui/dock'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/components/icons'
import { useTheme } from 'next-themes'
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Navbar() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[var(--glow)]">
        {/* Home */}
        <Tooltip>
          <TooltipTrigger>
            <a href="/" target={undefined}>
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <Icons.home className="size-full" />
              </DockIcon>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Home</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {/* Seperator 1 */}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* Projects */}
        <Tooltip>
          <TooltipTrigger>
            <a href="/" target={undefined}>
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <Icons.projects className="size-full" />
              </DockIcon>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Projects</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {/* Github */}
        <Tooltip>
          <TooltipTrigger>
            <a href="https://github.com/brii26" target="_blank">
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <Icons.gitHub className="size-full" />
              </DockIcon>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Github</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {/* Linkedin */}
        <Tooltip>
          <TooltipTrigger>
            <a href="https://www.linkedin.com/in/brianrt2/" target="_blank">
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <Icons.linkedin className="size-full" />
              </DockIcon>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Linkedin</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {/* Contact */}
        <Tooltip>
          <TooltipTrigger>
            <a href="/" target={undefined}>
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <Icons.contact className="size-full" />
              </DockIcon>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Contact</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

        {/* Seperator 2 */}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* Toggle Mode */}
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <Icons.toggle_mode className="size-full" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>{resolvedTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  )
}
