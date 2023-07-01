import { Credits, Features, Footer, Hero } from '@/components'

export default function Home() {
  return (
    <>
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
