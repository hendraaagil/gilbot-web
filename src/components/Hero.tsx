'use client'

import Image from 'next/image'
import { HiArrowSmallDown, HiChatBubbleBottomCenterText } from 'react-icons/hi2'
import avatar from '@/assets/avatar.jpg'

export const Hero = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center space-y-8">
      <Image
        src={avatar}
        alt="Avatar"
        className="pointer-events-none min-w-0 max-w-[200px] rounded-full border-8 shadow md:max-w-xs"
        priority
      />
      <h1 className="text-4xl font-bold">GilBot</h1>
      <button
        className="flex items-center rounded bg-green-700 px-4 py-3 text-xl font-bold transition-transform hover:scale-95"
        data-umami-event="Chat Button"
        onClick={() => window.location.reload()}
      >
        <HiChatBubbleBottomCenterText className="mr-2" />
        Chat
      </button>
      <p className="mt-2">
        * Jangan lupa baca{' '}
        <a href="/rules" className="font-medium hover:underline">
          /rules
        </a>
        .
      </p>
      <div className="absolute bottom-4 animate-bounce rounded-full bg-white p-3 text-2xl font-bold text-green-700 shadow">
        <HiArrowSmallDown />
      </div>
    </section>
  )
}
