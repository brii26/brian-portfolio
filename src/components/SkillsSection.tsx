import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Java", "Python", "PHP", "Rust", "Kotlin"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Jetpack Compose"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "Gin", "Spring Boot"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Redis", "SQLite"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "Docker", "Nginx", "DigitalOcean", "Vercel", "Linux"],
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
                    key={item}
                    className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 px-3 flex items-center text-sm font-medium text-foreground"
                  >
                    {item}
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
