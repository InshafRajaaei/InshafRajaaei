import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import AllProjects from './components/AllProjects'
import Skills from './components/Skills'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  return (
    <div className="bg-dark text-text-primary min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects onViewMore={() => setShowAllProjects(true)} />
      {showAllProjects && <AllProjects />}
      <Skills />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
