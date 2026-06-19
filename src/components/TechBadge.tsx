import Image from "next/image";

// maps a tech stack display name to its logo slug in /public/skills
const SLUG_MAP: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Go: "go",
  Java: "java",
  Python: "python",
  PHP: "php",
  Rust: "rust",
  C: "c",
  "C++": "cplusplus",
  Kotlin: "kotlin",
  "Next.js": "nextjs",
  React: "react",
  "Tailwind CSS": "tailwind",
  "Jetpack Compose": "jetpackcompose",
  "Node.js": "nodejs",
  Express: "express",
  NestJS: "nestjs",
  Gin: "gin",
  "Spring Boot": "springboot",
  PostgreSQL: "postgresql",
  Redis: "redis",
  SQLite: "sqlite",
  Git: "git",
  Docker: "docker",
  Nginx: "nginx",
  DigitalOcean: "digitalocean",
  Vercel: "vercel",
  Linux: "linux",
  gRPC: "grpc",
  "Claude API": "claude",
  NumPy: "numpy",
  "Socket.io": "socketio",
  TensorFlow: "tensorflow",
  Keras: "keras",
  Jupyter: "jupyter",
};

// black logos that need inverting in dark mode
const INVERT = new Set(["nextjs", "vercel", "rust", "express", "numpy", "socketio"]);

export default function TechBadge({ name }: { name: string }) {
  const slug = SLUG_MAP[name];

  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium border border-border rounded-md px-2 py-0.5 text-muted-foreground">
      {slug && (
        <Image
          src={`/skills/${slug}.svg`}
          alt={name}
          width={12}
          height={12}
          className={`size-3 ${INVERT.has(slug) ? "dark:invert" : ""}`}
        />
      )}
      {name}
    </span>
  );
}
