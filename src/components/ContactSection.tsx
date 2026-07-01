import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

interface Contact {
  label: string;
  icon: string;
  href: string;
  invert?: boolean;
}

const CONTACTS: Contact[] = [
  { label: "Email", icon: "gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=brianricardotamin@gmail.com" },
  { label: "WhatsApp", icon: "whatsapp", href: "https://wa.me/6281315066919" },
  { label: "Instagram", icon: "instagram", href: "https://instagram.com/brianricardo26" },
  { label: "LINE", icon: "line", href: "https://line.me/ti/p/~brian_rt" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/brianrt2/" },
];

export default function ContactSection() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="border border-border rounded-xl p-10 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 shadow-[0_0_10px_0px_rgba(80,100,131,0.15)]">
            <span className="text-background text-sm font-medium">Contact</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-md text-muted-foreground text-balance">
              {/* I&apos;m currently seeking an internship opportunity. Feel free to
              reach out on any platform, I&apos;ll get back to you whenever I
              can. */}
              Feel free to reach out on any platform, I&apos;ll get back to
              you whenever I can.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.label}
                  className="group flex size-11 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
                >
                  <Image
                    src={`/contact/${c.icon}.svg`}
                    alt={c.label}
                    width={20}
                    height={20}
                    className={`size-5 ${c.invert ? "dark:invert" : ""}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
