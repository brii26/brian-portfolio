"use client";

import Image from "next/image";
import { useState } from "react";

interface ResumeCardProps {
  logoUrl?: string;
  company: string;
  role: string;
  start: string;
  end?: string;
  isLast?: boolean;
}

export default function ResumeCard({ logoUrl, company, role, start, end, isLast }: ResumeCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex gap-x-3">
      {/* timeline column */}
      <div className="flex flex-col items-center flex-none w-3 relative">
        {/* connector line */}
        {!isLast && <div className="absolute top-5 md:top-6 -bottom-5 md:-bottom-6 w-px bg-border" />}
        {/* dot overlay */}
        <div className="flex items-center justify-center size-8 md:size-10 flex-none relative z-10">
          <div className="border border-border rounded-full p-[2px] bg-background">
            <span className="size-[6px] rounded-full bg-black dark:bg-white animate-pulse block" />
          </div>
        </div>
      </div>

      {/* card content */}
      <div className={`flex items-center gap-x-3 justify-between flex-1 min-w-0 ${!isLast ? "pb-6" : ""}`}>
        <div className="flex items-center gap-x-3 flex-1 min-w-0">
          {logoUrl && !imgError ? (
            <Image
              src={logoUrl}
              alt={company}
              width={40}
              height={40}
              className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="size-10 md:size-12 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
          )}
          <div className="flex-1 min-w-0 flex flex-col gap-0.5">
            <div className="font-semibold leading-none">{company}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </div>
        <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
          {start} - {end ?? "Present"}
        </div>
      </div>
    </div>
  );
}
