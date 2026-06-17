import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight } from "lucide-react";
import TechBadge from "@/components/TechBadge";

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
  {
    title: "Portfolio Website",
    dates: "2025",
    description:
      "This site, built with Next.js and Tailwind CSS, focused on clean design and strong SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/brii26",
    gradient: "from-violet-500/30 to-fuchsia-500/30",
  },
  {
    title: "Project Five",
    dates: "2025",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Node.js", "Express"],
    href: "https://github.com/brii26",
    gradient: "from-cyan-500/30 to-blue-500/30",
  },
  {
    title: "Project Six",
    dates: "2025",
    description:
      "A short description of what this project does and the problem it solves.",
    tags: ["Kotlin", "Jetpack Compose"],
    href: "https://github.com/brii26",
    gradient: "from-amber-500/30 to-yellow-500/30",
  },
];

export default function ProjectsSection() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="relative mx-3 flex items-center rounded-full bg-primary px-4 py-1.5 shadow-[0_0_10px_0px_rgba(80,100,131,0.15)]">
              <span className="text-background text-sm font-medium">
                My Projects
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
          </div>
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mt-[3px]">
Check out my latest work
          </h3>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
            From machine learning and mobile apps to distributed systems and
            complex web applications. Here are a few of my favorites.
          </p>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, pi) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + pi * 0.05}>
            <a
              href={project.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-border rounded-xl overflow-hidden bg-background hover:ring-2 hover:ring-muted hover:shadow-[0_0_54px_0px_rgba(80,100,131,0.15)] transition-all duration-200"
            >
              {/* gradient thumbnail */}
              <div className="h-52 w-full overflow-hidden">
                <div
                  className={`h-full w-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out group-hover:scale-[1.3]`}
                />
              </div>

              {/* card body */}
              <div className="flex flex-col gap-1.5 p-3.5 flex-1">
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
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </a>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/brii26"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            More projects
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </BlurFade>
    </div>
  );
}
