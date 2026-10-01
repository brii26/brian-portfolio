import { Navbar } from '@/components/navbar'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import Markdown from 'react-markdown'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import TiltedCard from '@/components/TiltedCard'
import ResumeCard from '@/components/ResumeCard'
import WorkCard from '@/components/WorkCard'
import ActivityChip from '@/components/ActivityChip'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

const BLUR_FADE_DELAY = 0.04

const WORK = [
  {
    company: 'Mirae Asset Sekuritas',
    href: 'https://sekuritas.miraeasset.co.id/who-we-are',
    role: 'Backend Engineer Intern',
    start: 'Oct 2026',
    end: 'Jan 2027',
    dateOverride: 'Starting Oct 2026',
    logoUrl: '/work/mirae.png',
    incoming: true,
    bullets: ['Incoming, starting October 2026.'],
  },
  {
    company: 'BFI Finance',
    href: 'https://www.bfi.co.id',
    role: 'Software Engineer Intern',
    start: 'Jul 2026',
    end: 'Present',
    logoUrl: '/work/bfi.png',
    active: true,
    bullets: [
      'Built a document template engine with React (TypeScript), Spring Boot (Java), and PostgreSQL, generating print-ready layouts for 65+ templates used by 200+ branch offices across Indonesia.',
    ],
    tech: [
      { name: 'Java', slug: 'java' },
      { name: 'Spring Boot', slug: 'springboot' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'React', slug: 'react' },
      { name: 'PostgreSQL', slug: 'postgresql' },
    ],
  },
]

const EDUCATION = [
  {
    company: 'Bandung Institute of Technology',
    role: "Bachelor's Degree of Computer Science",
    start: 'Aug 2023',
    end: 'Present',
    logoUrl: '/education/itb.png',
    bullets: [
      '3x Lab Assistant, Computational Thinking',
      'Finance Staff at Inkubator IT',
      'Secretary & Treasurer at Amateur Radio Club',
      'Part of Google Developer Student Clubs (Software Engineering Path)',
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex flex-col">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              yOffset={8}
              text={`Hi, I'm Brian`}
            />
            <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between items-center">
              <BlurFadeText
                className="text-muted-foreground max-w-150 text-[15px] md:text-[17px] lg:text-[19px]"
                delay={BLUR_FADE_DELAY}
                text="Software Engineer with full-stack internship experience engineering solutions for financial institutions, passionate about backend engineering, system design, and distributed systems."
              >
                Software Engineer with{' '}
                <span className="font-bold underline underline-offset-2 text-foreground">
                  full-stack internship experience
                </span>{' '}
                engineering solutions for{' '}
                <span className="font-bold underline underline-offset-2 text-foreground">
                  financial institutions
                </span>
                , passionate about backend engineering, system design, and
                distributed systems.
              </BlurFadeText>
              {/* Profile Picture */}
              <BlurFade delay={BLUR_FADE_DELAY}>
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
          <div className="order-3 -mt-[21px]">
            <div className="flex flex-wrap gap-2">
              <BlurFade
                delay={BLUR_FADE_DELAY + 0.3}
                yOffset={0}
                className="flex"
              >
                <ActivityChip
                  logoUrl="/education/itb.png"
                  label="Final Year CS Student"
                  sublabel="Bandung Institute of Technology"
                />
              </BlurFade>
              <BlurFade
                delay={BLUR_FADE_DELAY * 2 + 0.3}
                yOffset={0}
                className="flex"
              >
                <ActivityChip
                  logoUrl="/work/bfi.png"
                  label="Software Engineer Intern"
                  sublabel="BFI Finance"
                />
              </BlurFade>
            </div>
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
                        Final-year Computer Science student at Bandung
                        Institute of Technology. Focusing on Software System
                        Engineering.
                      </Markdown>
                    </div>
                  </TiltedCard>
                  <TiltedCard
                    className="w-full h-full"
                    title="Software & System Design"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        Focused on backend development and system design.
                        Interested in how systems are designed to be resilient,
                        maintainable, and scalable in production.
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
              <BlurFade
                key={item.company + index}
                delay={BLUR_FADE_DELAY * 6 + index * 0.05}
              >
                <WorkCard
                  {...item}
                  isLast={index === WORK.length - 1}
                  titleIsRole
                />
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
              <BlurFade
                key={item.company + index}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
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
