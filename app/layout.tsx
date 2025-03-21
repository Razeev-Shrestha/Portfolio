import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

import { Header } from '@/components/Header'
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContext'
import { Footer } from '@/components/Footer'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { ThemeContextProvider } from '@/context/ActiveThemeContext'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Rajeev Shrestha',
  applicationName: `Rajeev Shrestha's Portfolio`,
  generator: 'Next.js',
  keywords: [
    'Next.js',
    'React.Js',
    'Node.JS',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'RSC',
    'Server Actions',
  ],
  robots: 'index, follow',
  metadataBase: new URL('https://rajeevshrestha.com.np'),
  authors: [{ name: 'Rajeev Shrestha', url: 'https://rajeevshrestha.com.np' }],
  description:
    'Rajeev Shrestha is a front-end developer with 3 years of experience and based in Kathmandu, Nepal.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajeevshrestha.com.np',
    title: 'Portfolio | Rajeev Shrestha',
    description:
      'Rajeev Shrestha is a front-end developer with 3 years of experience and based in Kathmandu, Nepal.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 scrollbar-hide text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
