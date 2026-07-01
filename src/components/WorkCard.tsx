"use client";

import Image from "next/image";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  logoUrl?: string;
  company: string;
  href?: string;
  role: string;
  start: string;
  end?: string;
  bullets?: string[];
  isLast?: boolean;
  badge?: string;
}

export default function WorkCard({ logoUrl, company, href, role, start, end, bullets, isLast, badge }: WorkCardProps) {
  const [imgError, setImgError] = useState(false);
  const [nameHovered, setNameHovered] = useState(false);

  return (
    <div className="flex gap-x-3">
      {/* timeline column */}
      <div className="flex flex-col items-center flex-none w-3 relative">
        {!isLast && <div className="absolute top-0 bottom-0 w-px bg-border" />}
        <div className="flex items-center justify-center size-10 md:size-12 flex-none relative z-10">
          <div className="border border-border rounded-full p-[2px] bg-background">
            <span className="size-[6px] rounded-full bg-black dark:bg-white animate-pulse block" />
          </div>
        </div>
      </div>

      {/* accordion content */}
      <div className={`flex-1 min-w-0 ${!isLast ? "pb-6" : ""}`}>
        <Accordion.Root type="single" collapsible className="w-full">
          <Accordion.Item value={company}>
            <Accordion.Header asChild>
              <Accordion.Trigger className="w-full cursor-pointer group">
                <div className="flex items-center gap-x-3 justify-between w-full">
                  <div className="flex items-center gap-x-3 min-w-0">
                    {logoUrl && !imgError ? (
                      <Image
                        src={logoUrl}
                        alt={company}
                        width={48}
                        height={48}
                        className={cn(
                          "size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none transition-all duration-200",
                          href && nameHovered && "border-white shadow-[0_0_16px_2px_rgba(255,255,255,0.35)]"
                        )}
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="min-w-0 flex flex-col gap-0.5 text-left">
                      <div className="font-semibold leading-none flex items-center gap-1.5">
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={() => setNameHovered(true)}
                            onMouseLeave={() => setNameHovered(false)}
                            className="decoration-muted-foreground/40 underline underline-offset-2 hover:decoration-foreground"
                          >
                            {company}
                          </a>
                        ) : (
                          <p>{company}</p>
                        )}
                        {badge && (
                          <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] font-medium leading-none text-muted-foreground flex-none">
                            {badge}
                          </span>
                        )}
                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                          <ChevronRight className={cn(
                            "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0",
                            nameHovered && "!opacity-0"
                          )} />
                          <ChevronDown className={cn(
                            "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0",
                            "group-data-[state=open]:opacity-100",
                            nameHovered && "!opacity-0"
                          )} />
                          {href && (
                            <ArrowUpRight className={cn(
                              "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200",
                              nameHovered ? "opacity-100" : "opacity-0"
                            )} />
                          )}
                        </span>
                      </div>
                      <p className="text-[12px] text-foreground font-normal mt-[3px]">{role}</p>
                    </div>
                  </div>
                  <div className="flex-1" />
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {start} - {end ?? "Present"}
                  </div>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            {bullets && bullets.length > 0 && (
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <ul className="flex flex-col gap-2 ml-[calc(3rem+0.75rem)]">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-[5px] size-[3px] rounded-full bg-white flex-none" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            )}
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
