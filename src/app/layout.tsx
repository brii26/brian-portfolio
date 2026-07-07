import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LightRays } from '@/components/magicui/light-rays'
import { Component as SpotlightCursor } from '@/components/ui/cursor'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mono',
})

const SITE_URL = 'https://brianricardo.dev'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Brian Ricardo Tamin',
    template: '%s | Brian Ricardo Tamin',
  },
  description:
    'Brian Ricardo Tamin is a Computer Science student passionate about backend engineering, cloud infrastructure, and building scalable, resilient systems.',
  keywords: [
    'Brian',
    'Ricardo',
    'Tamin',
    'Brian Ricardo',
    'Brian Tamin',
    'Ricardo Tamin',
    'Brian Ricardo Tamin',
    'Brian Ricardo Tamin portfolio',
    'software engineer',
    'backend engineer',
    'cloud engineer',
    'Institut Teknologi Bandung',
  ],
  authors: [{ name: 'Brian Ricardo Tamin', url: SITE_URL }],
  creator: 'Brian Ricardo Tamin',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Brian Ricardo Tamin',
    description:
      'Computer Science student passionate about backend engineering, cloud infrastructure, and building scalable, resilient systems.',
    siteName: 'Brian Ricardo Tamin',
    locale: 'en_US',
    images: [{ url: '/profile/me.png', width: 1200, height: 630, alt: 'Brian Ricardo Tamin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Ricardo Tamin',
    description:
      'Computer Science student passionate about backend engineering, cloud infrastructure, and building scalable, resilient systems.',
    images: ['/profile/me.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Brian Ricardo Tamin',
  url: SITE_URL,
  image: `${SITE_URL}/profile/me.png`,
  jobTitle: 'Software Engineer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Institut Teknologi Bandung',
  },
  sameAs: [
    'https://github.com/brii26',
    'https://www.linkedin.com/in/brianrt2/',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/profile/me.png" as="image" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          geist.variable,
          geistMono.variable,
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <TooltipProvider delayDuration={0}>
            <LightRays />
            <SpotlightCursor config={{ radius: 100 }} />
            {/* </div> */}
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}