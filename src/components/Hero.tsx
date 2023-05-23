import { HiChatBubbleBottomCenterText } from 'react-icons/hi2'
import avatar from '../assets/avatar.jpg'

export const Hero = () => {
  const whatsappLink = 'https://wa.me/6285163036290?text=Halo'

  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-8">
      <img
        src={avatar}
        alt="Avatar"
        className="pointer-events-none min-w-0 max-w-[200px] rounded-full border-8 shadow md:max-w-xs"
      />
      <h1 className="text-4xl font-bold">GilBot</h1>
      <button
        className="flex items-center rounded bg-green-700 px-4 py-3 text-xl font-bold transition-transform hover:scale-95"
        onClick={() => window.open(whatsappLink, '_blank', 'noopener, noreferrer')}
      >
        <HiChatBubbleBottomCenterText className="mr-2" />
        Chat
      </button>
    </section>
  )
}