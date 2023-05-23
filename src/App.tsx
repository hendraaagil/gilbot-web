import { Credits, Features, Footer, Hero } from './components'

function App() {
  return (
    <div className="to flex min-h-screen flex-col items-center justify-center bg-green-700 bg-gradient-to-br from-green-300 text-white">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center space-y-8 px-2 pb-8 md:px-8">
        <Hero />
        <hr className="w-full border" />
        <Features />
        <hr className="w-full border" />
        <Credits />
        <hr className="w-full border" />
        <Footer />
      </main>
    </div>
  )
}

export default App
