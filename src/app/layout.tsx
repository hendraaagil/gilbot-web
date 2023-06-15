import type { Metadata } from 'next'
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
  openGraph: {
    title: title,
    description: description,
  },
  keywords: ['whatsapp bot', 'bot', 'chatbot', 'whatsapp', 'stiker'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>{children}</body>
    </html>
  )
}
