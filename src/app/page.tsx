import { Navbar } from '@/components/navbar'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import Markdown from 'react-markdown'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import TiltedCard from '@/components/TiltedCard'
import ResumeCard from '@/components/ResumeCard'
import WorkCard from '@/components/WorkCard'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

const BLUR_FADE_DELAY = 0.04

const WORK = [
  {
    company: "Institut Teknologi Bandung",
    role: "Computational Thinking Lab Assistant",
    start: "Oct 2024",
    end: "Dec 2024",
    logoUrl: "/education/itb.png",
    bullets: [
      "Supervised bi-weekly Python-based labs for 60+ students, overseeing the implementation of 3 algorithmic problem sets while providing on-site technical guidance.",
      "Evaluated student submissions and provided actionable feedback on algorithmic logic, code efficiency, and best practices.",
    ],
  },
]

const EDUCATION = [
  {
    company: "Institut Teknologi Bandung",
    role: "Bachelor's Degree of Computer Science",
    start: "Aug 2023",
    end: "Present",
    logoUrl: "/education/itb.png",
  },
  {
    company: "SMAK 1 Penabur Jakarta",
    role: "High School, Natural Science",
    start: "Jul 2020",
    end: "Apr 2023",
    logoUrl: "/education/penabur.png",
  },
]

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-center">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm Brian`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-150 md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text="Penultimate-year CS student passionate about backend engineering, cloud infrastructure, and building systems that are scalable and resilient in production."
              />
            </div>
            {/* Profile Picture */}
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={'My Photo'}
                  src={'/profile/me.png'}
                  className="object-cover"
                />
                <AvatarFallback>Foto</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert [&_p]:my-0">
              <div>
                <div className="flex vertical-align justify-center gap-4 mb-3">
                  <TiltedCard
                    className="w-full h-full"
                    title="Computer Science @ ITB"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        3rd-year Computer Science student at Bandung Institute
                        of Technology. Focusing on Software System Engineering.
                      </Markdown>
                    </div>
                  </TiltedCard>
                  <TiltedCard
                    className="w-full h-full"
                    title="Software & Cloud"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        Focused on backend development and cloud-native
                        technologies. Interested in how systems are designed
                        to be resilient, maintainable, and scalable in
                        production.
                      </Markdown>
                    </div>
                  </TiltedCard>
                </div>
                <div className="flex vertical-align justify-center gap-4">
                  <TiltedCard
                    className="w-full h-full"
                    title="Currently Learning"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        Diving deeper into cloud infrastructure, specifically
                        AWS. Exploring how to design and deploy systems that
                        scale reliably in the cloud.
                      </Markdown>
                    </div>
                  </TiltedCard>
                  <TiltedCard
                    className="w-full h-full"
                    title="The Approach"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        Focusing on daily discipline and execution over rigid
                        long-term plans. Sustainable growth is about winning
                        every single day.
                      </Markdown>
                    </div>
                  </TiltedCard>
                </div>
              </div>
            </div>

          </BlurFade>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold mb-6">Work Experience</h2>
          </BlurFade>
          <div className="flex flex-col">
            {WORK.map((item, index) => (
              <BlurFade key={item.company + index} delay={BLUR_FADE_DELAY * 6 + index * 0.05}>
                <WorkCard {...item} isLast={index === WORK.length - 1} />
              </BlurFade>

            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold mb-6">Education</h2>
          </BlurFade>
          <div className="flex flex-col">
            {EDUCATION.map((item, index) => (
              <BlurFade key={item.company + index} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <ResumeCard {...item} isLast={index === EDUCATION.length - 1} />
              </BlurFade>

            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Education old */}
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills */}
      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects */}
      {/* <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section> */}

      {/* Hackatons */}
      {/* <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section> */}

      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-2xl">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brian Ricardo Tamin. All rights reserved.
        </p>
      </footer>

      <Navbar />
    </main>
  )
}
