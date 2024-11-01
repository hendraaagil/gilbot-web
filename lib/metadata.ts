import type { Metadata } from 'next'

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL('https://gilbot.hendraaagil.dev')

export function createMetadata(): Metadata {
  return {
    alternates: { canonical: baseUrl },
    metadataBase: baseUrl,
    description:
      'GilBot adalah bot WhatsApp yang bisa menjalankan beberapa perintah melalui chat. Seperti membuat stiker, download video TikTok / Instagram, dan masih banyak lagi. Chat dengan GilBot sekarang! 🤘',
    title: {
      template: '%s / GilBot',
      default: 'GilBot / WhatsApp Bot',
    },
    keywords: ['whatsapp bot', 'bot', 'chatbot', 'whatsapp', 'stiker'],
  }
}
