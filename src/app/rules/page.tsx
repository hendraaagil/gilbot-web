import type { Metadata } from 'next'
import { Footer, Rules as RulesSection } from '@/components'

export const metadata: Metadata = {
  title: 'Rules',
}

export default function Rules() {
  return (
    <>
      <RulesSection />
      <hr className="w-full border" />
      <Footer />
    </>
  )
}
