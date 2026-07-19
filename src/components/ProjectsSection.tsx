import BlurFade from "@/components/magicui/blur-fade";
import { Globe, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import TechBadge from "@/components/TechBadge";
import { Icons } from "@/components/icons";

const BLUR_FADE_DELAY = 0.04;

interface ProjectLink {
  type: "github" | "website";
  href: string;
}

interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  gradient: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Scrape LM",
    slug: "scrape-lm",
    description:
      "An AI news aggregator that turns natural-language prompts into structured queries via Claude, scraping Google News in real time with Redis caching.",
    tags: ["Next.js", "Go", "Redis", "Claude API", "Docker", "TypeScript", "Gin"],
    links: [
      { type: "github", href: "https://github.com/brii26/scrape-lm" },
      // { type: "website", href: "https://scrapelm.com" },
    ],
    gradient: "from-sky-500/30 to-indigo-500/30",
    image: "/projects/scrape-lm.webp",
  },
  {
    title: "Nimonspedia",
    slug: "nimonspedia",
    description:
      "A full-featured e-commerce platform with a PHP MVC marketplace and a Node.js real-time layer for live chat and auctions.",
    tags: ["PHP", "Node.js", "React", "TypeScript", "PostgreSQL", "Socket.io", "Docker"],
    links: [{ type: "github", href: "https://github.com/brii26/nimonspedia" }],
    gradient: "from-emerald-500/30 to-teal-500/30",
    image: "/projects/nimonspedia-home.webp",
  },
  {
    title: "Distributed KV Store (Raft)",
    slug: "kvraft-rs",
    description:
      "A fault-tolerant distributed key-value store implementing the Raft consensus algorithm in Rust, with leader election, log replication, and crash recovery over gRPC.",
    tags: ["Rust", "gRPC"],
    links: [{ type: "github", href: "https://github.com/brii26/kvraft-rs" }],
    gradient: "from-orange-500/30 to-rose-500/30",
    image: "/projects/kvraft.webp",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "This site, built with Next.js and Tailwind CSS, focused on clean design and strong SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { type: "github", href: "https://github.com/brii26/brian-portfolio" },
      { type: "website", href: "https://brianricardo.dev" },
    ],
    gradient: "from-violet-500/30 to-fuchsia-500/30",
    image: "/projects/portfolio-home.webp",
  },
  {
    title: "Image Classifier & Captioner",
    slug: "image-captioner",
    description:
      "A from-scratch deep learning project: CNN image classification and RNN/LSTM image captioning, implemented in pure NumPy with manual backpropagation.",
    tags: ["Python", "NumPy", "TensorFlow", "Keras", "Jupyter"],
    links: [{ type: "github", href: "https://github.com/brii26/image-captioner" }],
    gradient: "from-cyan-500/30 to-blue-500/30",
    image: "/projects/image-captioner.webp",
  },
  {
    title: "nimons360",
    slug: "nimons360",
    description:
      "An Android family location-tracking app with a live MapLibre map, rotating markers, and real-time GPS and device status broadcasting.",
    tags: ["Kotlin", "Jetpack Compose", "SQLite"],
    links: [{ type: "github", href: "https://github.com/brii26/nimons360" }],
    gradient: "from-amber-500/30 to-yellow-500/30",
    image: "/projects/nimons360.webp",
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
            <div className="group relative flex flex-col h-full border border-border rounded-xl overflow-hidden bg-background hover:ring-2 hover:ring-muted hover:shadow-[0_0_54px_0px_rgba(80,100,131,0.15)] transition-all duration-200">
              {/* whole-card link -> GitHub for now */}
              <a
                href={
                  project.links?.find((l) => l.type === "github")?.href ??
                  project.links?.[0]?.href ??
                  "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="absolute inset-0 z-10"
              />
              {/* TODO: switch to detail page once built
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`More about ${project.title}`}
                className="absolute inset-0 z-10"
              /> */}
              {/* thumbnail */}
              <div className="relative h-52 w-full overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.3]"
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out group-hover:scale-[1.3]`}
                  />
                )}
                {/* link badges */}
                {project.links && project.links.length > 0 && (
                  <div className="absolute top-2 right-2 flex gap-1.5 z-20">
                    {project.links.map((link) => (
                      <a
                        key={link.type}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-md bg-black/70 backdrop-blur-sm px-2 py-1 text-[11px] font-medium text-white hover:bg-black/90 transition-colors"
                      >
                        {link.type === "github" ? (
                          <Icons.gitHub className="size-3" />
                        ) : (
                          <Globe className="size-3" />
                        )}
                        {link.type === "github" ? "GitHub" : "Website"}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* card body */}
              <div className="flex flex-col gap-1.5 p-3.5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-none">{project.title}</h3>
                  <ArrowUpRight className="flex-none size-4 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tags.slice(0, 5).map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                  {project.tags.length > 5 && (
                    <span className="inline-flex items-center text-[11px] font-medium border border-border rounded-md px-2 py-0.5 text-muted-foreground">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
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
