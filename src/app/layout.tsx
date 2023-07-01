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
  title: {
    default: title,
    template: `%s - ${title}`,
  },
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
      <body className={plusJakarta.className}>
        <div className="to flex min-h-screen flex-col items-center justify-center bg-green-700 bg-gradient-to-br from-green-400 text-white">
          <main className="flex w-full max-w-5xl flex-col items-center justify-center space-y-8 px-2 pb-8 md:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
