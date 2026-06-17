import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

// logos with black brand color, inverted in dark mode
const INVERT = new Set(["nextjs", "vercel", "rust", "express"]);

interface Skill {
  name: string;
  slug: string;
}

const SKILL_GROUPS: { label: string; items: Skill[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Go", slug: "go" },
      { name: "Java", slug: "java" },
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" },
      { name: "Rust", slug: "rust" },
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
      { name: "Node.js", slug: "nodejs" },
      { name: "Express", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Gin", slug: "gin" },
      { name: "Spring Boot", slug: "springboot" },
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
    label: "Tools & Platforms",
    items: [
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
      { name: "Nginx", slug: "nginx" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Vercel", slug: "vercel" },
      { name: "Linux", slug: "linux" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold mb-6">Skills</h2>
      </BlurFade>
      <div className="flex flex-col gap-6">
        {SKILL_GROUPS.map((group, gi) => (
          <BlurFade key={group.label} delay={BLUR_FADE_DELAY * 10 + gi * 0.05}>
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:w-40 md:pt-1.5 flex-none">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 px-3 flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <Image
                      src={`/skills/${item.slug}.svg`}
                      alt={item.name}
                      width={16}
                      height={16}
                      className={`size-4 ${INVERT.has(item.slug) ? "dark:invert" : ""}`}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
