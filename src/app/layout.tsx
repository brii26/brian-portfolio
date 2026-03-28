import { Navbar } from '@/components/navbar'
import { Providers } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LightRays } from '@/components/magicui/light-rays'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "Brian's Portofolio",
  description: 'A simple portofolio about Brian Ricardo Tamin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased relative',
          geist.variable,
          geistMono.variable,
        )}
      >
        <Providers>
          <TooltipProvider delayDuration={0}>
            {/* <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0"> */}
            {/* <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              /> */}
            <LightRays />
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

// export function Component() {
// 	return (
// 	  <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
// 		<div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
// 		  <span className="text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60">
// 			Ambient glow
// 		  </span>
// 		  <h1 className="text-foreground text-4xl font-bold md:text-5xl">
// 			Light Rays
// 		  </h1>
// 		  <p className="max-w-md text-sm text-slate-800/80 md:text-base dark:text-slate-200/80">
// 			Drop this component into any container and it will fill the space with
// 			softly animated light rays shining from above.
// 		  </p>
// 		</div>
// 		<LightRays />
// 	  </div>
// 	)
//   }
