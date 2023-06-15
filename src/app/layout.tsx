import type { Metadata } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://gilbot.hendraaagil.dev')
const title = 'GilBot | WhatsApp Bot'
const description =
  'GilBot adalah bot WhatsApp yang bisa menjalankan beberapa perintah melalui chat. Seperti membuat stiker, download video TikTok / Instagram, dan masih banyak lagi. Chat dengan GilBot sekarang! 🤘'

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: title,
  description: description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: title,
    description: description,
  },
  twitter: { card: 'summary_large_image' },
  keywords: ['whatsapp bot', 'bot', 'chatbot', 'whatsapp', 'stiker'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="https://analytics.hendraaagil.dev/script.js"
            data-website-id="6f846a92-699e-46f4-aa94-1c9096a7b798"
            async
          />
        )}
      </head>
      <body className={plusJakarta.className}>{children}</body>
    </html>
  )
}
