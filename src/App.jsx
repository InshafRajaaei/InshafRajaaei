import { useState, useEffect } from 'react'
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
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setDarkMode(savedTheme === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    if (darkMode) {
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [darkMode])

  return (
    <div className={`${darkMode ? 'dark' : 'light'} bg-background text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container font-body transition-colors duration-300`}>
      <Navigation onNavClick={() => { setShowAllProjects(false); setShowAllCertificates(false); }} darkMode={darkMode} onThemeToggle={() => setDarkMode(!darkMode)} />
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
            <Certificates />
            <Skills />
            <Services />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
