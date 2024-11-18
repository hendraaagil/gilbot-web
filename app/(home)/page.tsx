import clsx from 'clsx'
import Image from 'next/image'
import avatar from '@/assets/avatar.jpg'
import { MessagesSquare } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <section className="relative my-8 w-full overflow-hidden rounded-md border py-48 transition-colors">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-blue-500 opacity-10"></div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-transparent to-blue-500 opacity-0 transition duration-500 hover:opacity-50"></div>

        <div className="pointer-events-none relative flex flex-col items-center space-y-8">
          <Image
            src={avatar}
            alt="Avatar"
            className="pointer-events-none min-w-0 max-w-48 rounded-full border-8 shadow md:max-w-xs"
            priority
          />
          <h1 className="text-4xl font-bold">GilBot</h1>
        </div>
      </section>

      <a
        href="/chat"
        className={clsx(
          'flex items-center justify-center space-x-2',
          'w-full rounded-md border bg-blue-600 py-4 text-center text-lg text-white transition-colors duration-1000',
          'hover:bg-blue-700',
        )}
        target="_blank"
      >
        <MessagesSquare />
        <span>Chat</span>
      </a>
    </>
  )
}
