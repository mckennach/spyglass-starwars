import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css';
import Header from '@/components/header/header';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars Planets',
  description: 'Star Wars Planets is a demo app built with Next.js and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Header />
              <main className="flex min-h-screen flex-col items-center justify-between py-10 dark:bg-neutral-900 dark:text-white">
                {children}
              </main>
          </Providers> 
        </body>
    </html>
  )
}
