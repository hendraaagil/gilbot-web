import './global.css'
import type { ReactNode } from 'react'

import { RootProvider } from 'fumadocs-ui/provider'
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
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
