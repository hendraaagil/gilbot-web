import './global.css'
import type { ReactNode } from 'react'

import { RootProvider } from 'fumadocs-ui/provider'
import { Banner } from 'fumadocs-ui/components/banner'
import { Inter } from 'next/font/google'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata()

const inter = Inter({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <Banner>
            <p>
              GilBot hadir di{' '}
              <a
                href="https://t.me/gilchatbot"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              . ✈️
            </p>
          </Banner>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
