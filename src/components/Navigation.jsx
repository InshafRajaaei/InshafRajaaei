import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation({ onNavClick, darkMode, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-outline-variant/10 transition-colors duration-300">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
        <a href="#hero" onClick={onNavClick} className="text-xl font-black tracking-tighter text-on-surface uppercase cursor-pointer">
          INSHAF.DEV
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={onNavClick}
              className="text-on-surface-variant hover:text-primary transition-colors font-['Inter'] font-medium tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {/* Theme Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={!darkMode}
              onChange={onThemeToggle}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-surface-container-high peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary border border-outline-variant/50 transition-colors"></div>
          </label>
          
          <a 
            href="#contact" 
            onClick={onNavClick}
            className="hidden md:inline-block primary-cta-gradient text-on-primary px-5 py-2 font-medium hover:scale-105 active:scale-95 transition-all text-sm rounded-sm"
          >
            Hire Me
          </a>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-primary"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-container-high border-t border-outline-variant/20 p-4 absolute w-full left-0 top-full">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => { setIsOpen(false); if(onNavClick) onNavClick(); }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 primary-cta-gradient text-on-primary text-center px-5 py-3 font-medium transition-all rounded-sm"
            onClick={() => { setIsOpen(false); if(onNavClick) onNavClick(); }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}

