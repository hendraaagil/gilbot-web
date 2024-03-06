import dynamic from 'next/dynamic'
import { Credits, Features, Footer, Hero } from '@/components'

const Announcement = dynamic(() => import('@/components/Announcement'), { ssr: false })

export default function Home() {
  return (
    <>
      <Announcement />
      <Hero />
      <hr className="w-full border" />
      <Features />
      <hr className="w-full border" />
      <Credits />
      <hr className="w-full border" />
      <Footer />
    </>
  )
}
