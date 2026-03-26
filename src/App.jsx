import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllProjects from './components/AllProjects'
import Certificates from './components/Certificates'
import AllCertificates from './components/AllCertificates'

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  return (
    <div className="bg-background text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container font-body">
      <Navigation onNavClick={() => { setShowAllProjects(false); setShowAllCertificates(false); }} />
      <main>
        {showAllProjects ? (
          <div className="pt-24 min-h-screen">
            <AllProjects />
          </div>
        ) : showAllCertificates ? (
          <div className="pt-24 min-h-screen">
            <AllCertificates />
          </div>
        ) : (
          <>
            <Hero />
            <FeaturedProjects onShowAll={() => { setShowAllProjects(true); setShowAllCertificates(false); window.scrollTo(0, 0); }} />
            <Certificates onShowAll={() => { setShowAllCertificates(true); setShowAllProjects(false); window.scrollTo(0, 0); }} />
            <Skills />
            <Services />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
