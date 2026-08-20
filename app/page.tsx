import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FundReception from './components/FundReception'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <FundReception />
        <Solutions />
        <Industries />
        <Stats />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
