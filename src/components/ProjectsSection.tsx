import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

interface Project {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  href?: string;
  gradient: string;
}

const PROJECTS: Project[] = [
  {
    title: "Scrape LM",
    dates: "2025",
    description:
      "A scraping pipeline that feeds structured data into language models for downstream analysis.",
    tags: ["Python", "Next.js", "PostgreSQL"],
    href: "https://github.com/brii26",
    gradient: "from-sky-500/30 to-indigo-500/30",
  },
  {
    title: "E-Commerce Microservices",
    dates: "2025",
    description:
      "A distributed e-commerce backend split into independent services communicating over a message broker.",
    tags: ["Go", "Docker", "PostgreSQL", "Redis"],
    href: "https://github.com/brii26",
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    title: "gRPC Microservices",
    dates: "2025",
    description:
      "Service-to-service communication built on gRPC with strongly typed contracts and streaming support.",
    tags: ["Go", "gRPC", "Docker"],
    href: "https://github.com/brii26",
    gradient: "from-orange-500/30 to-rose-500/30",
  },
];

export default function ProjectsSection() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold mb-6">Projects</h2>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, pi) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + pi * 0.05}>
            <a
              href={project.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-border rounded-xl overflow-hidden bg-background hover:ring-2 hover:ring-muted transition-all duration-200"
            >
              {/* gradient thumbnail */}
              <div className={`h-32 w-full bg-gradient-to-br ${project.gradient}`} />

              {/* card body */}
              <div className="flex flex-col gap-2 p-4 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold leading-none">{project.title}</h3>
                    <time className="text-xs text-muted-foreground">{project.dates}</time>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-none" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium border border-border rounded-md px-2 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
