import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import DSVGallery from './components/DSVGallery'
import FundReception from './components/FundReception'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FundReception />
        <Testimonials />
        <Gallery />
        <DSVGallery />
      </main>
      <Footer />
    </div>
  )
}
