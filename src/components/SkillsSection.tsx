import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { AwsLogo } from "@/components/AwsLogo";

const BLUR_FADE_DELAY = 0.04;

// logos with black brand color, inverted in dark mode
const INVERT = new Set(["nextjs", "vercel", "rust", "express", "linux"]);

interface Skill {
  name: string;
  slug: string;
  exploring?: boolean;
}

const SKILL_GROUPS: { label: string; items: Skill[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "Java", slug: "java" },
      { name: "Rust", slug: "rust" },
      { name: "Go", slug: "go" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" },
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "Kotlin", slug: "kotlin" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", slug: "nextjs" },
      { name: "React", slug: "react" },
      { name: "Tailwind CSS", slug: "tailwind" },
      { name: "Jetpack Compose", slug: "jetpackcompose" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", slug: "springboot" },
      { name: "Node.js", slug: "nodejs" },
      { name: "Express", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Gin", slug: "gin" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "SQLite", slug: "sqlite" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes", exploring: true },
      { name: "Kafka", slug: "apachekafka", exploring: true },
      // { name: "Prometheus", slug: "prometheus", exploring: true },
      // { name: "Grafana", slug: "grafana", exploring: true },
      { name: "Nginx", slug: "nginx" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Vercel", slug: "vercel" },
      // { name: "AWS", slug: "aws-logo", exploring: true },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "Linux", slug: "linux" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold">Tech Stack</h2>
        <p className="text-sm text-muted-foreground mt-1 mb-6">
          Technologies I&apos;ve worked with.
        </p>
      </BlurFade>
      <div className="flex flex-col">
        {SKILL_GROUPS.map((group, gi) => (
          <BlurFade key={group.label} delay={BLUR_FADE_DELAY * 10 + gi * 0.05}>
            <div
              className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-4 py-5 ${gi !== 0 ? "border-t border-border/60" : ""}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground md:w-40 md:pt-1.5 flex-none">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-1.5 w-16"
                  >
                    <div className="relative flex items-center justify-center size-[42px] rounded-[12px] border border-border transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-[0_20px_80px_-10px_rgba(0,0,0,0.5)]">
                      {item.slug === "aws-logo" ? (
                        <AwsLogo className="size-[25px] object-contain" />
                      ) : (
                        <Image
                          src={`/skills/${item.slug}.svg`}
                          alt={item.name}
                          width={25}
                          height={25}
                          className={`size-[25px] object-contain ${INVERT.has(item.slug) ? "dark:invert" : ""}`}
                        />
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-foreground text-center leading-tight">
                      {item.name}
                    </span>
                    {item.exploring && (
                      <span className="text-[9px] font-medium uppercase tracking-wide text-amber-500 leading-none">
                        Exploring
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
