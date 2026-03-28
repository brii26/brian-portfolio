import { Navbar } from '@/components/navbar'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import Markdown from 'react-markdown'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import TiltedCard from '@/components/TiltedCard'

const BLUR_FADE_DELAY = 0.04

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
                text="Informatics Engineering Student, Passionate about software engineering and currently exploring AI and automation."
              />
            </div>
            {/* Profile Picture */}
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={'My Photo'}
                  src={'/me.png'}
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
                    title="Informatics Engineering @ ITB"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        3rd-year Computer Science student at Bandung Institute
                        of Technology. Focusing on Software System Engineering
                        and AI.
                      </Markdown>
                    </div>
                  </TiltedCard>
                  <TiltedCard
                    className="w-full h-full"
                    title="AI & Software Enthusiast"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        Driven by curiosity, I’m constantly exploring software
                        systems, automation tools, and AI architectures to build
                        smarter and more efficient solutions.
                      </Markdown>
                    </div>
                  </TiltedCard>
                </div>
                <div className="flex vertical-align justify-center gap-4">
                  <TiltedCard
                    className="w-full h-full"
                    title="Hobbies"
                    glowColor="bg-black dark:bg-white"
                  >
                    <div className="text-xs">
                      <Markdown>
                        Resetting after a long day of coding with workouts and
                        night runs. A simple way to stay disciplined and keep
                        the mind clear.
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

            <div className="flex justify-center mt-8">
              <a href="/">
                <ShimmerButton className="w-48px h-10">
                  On Development...
                </ShimmerButton>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Education */}
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
      {/* <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section> */}
      <Navbar />
    </main>
  )
}
