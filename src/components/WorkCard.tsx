"use client";

import Image from "next/image";
import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  logoUrl?: string;
  company: string;
  role: string;
  start: string;
  end?: string;
  bullets?: string[];
  isLast?: boolean;
}

export default function WorkCard({ logoUrl, company, role, start, end, bullets, isLast }: WorkCardProps) {
  const [imgError, setImgError] = useState(false);

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
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {logoUrl && !imgError ? (
                      <Image
                        src={logoUrl}
                        alt={company}
                        width={48}
                        height={48}
                        className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5 text-left">
                      <div className="font-semibold leading-none flex items-center gap-1.5">
                        {company}
                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                          <ChevronRight className={cn(
                            "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0"
                          )} />
                          <ChevronDown className={cn(
                            "absolute h-3.5 w-3.5 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0",
                            "group-data-[state=open]:opacity-100"
                          )} />
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">{role}</div>
                    </div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {start} - {end ?? "Present"}
                  </div>
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            {bullets && bullets.length > 0 && (
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <ul className="flex flex-col gap-2 pt-3 ml-[calc(3rem+0.75rem)]">
                  {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-[5px] size-1.5 rounded-full bg-muted-foreground/60 flex-none" />
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
