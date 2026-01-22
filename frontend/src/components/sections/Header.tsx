import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-nook-navy/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">
              Nooklead
            </span>
            <span className="text-nook-blue-light text-xs ml-1">Â®</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              SoluÃ§Ãµes
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
              Planos
            </a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">
              Sobre
            </a>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition-colors">
              Log in
            </button>
            <button className="btn-primary">
              ComeÃ§ar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#home" className="block text-white/80 hover:text-white">
              Home
            </a>
            <a href="#features" className="block text-white/80 hover:text-white">
              SoluÃ§Ãµes
            </a>
            <a href="#pricing" className="block text-white/80 hover:text-white">
              Planos
            </a>
            <a href="#faq" className="block text-white/80 hover:text-white">
              Sobre
            </a>
            <div className="pt-4 space-y-2">
              <button className="block w-full text-left text-white/80 hover:text-white">
                Log in
              </button>
              <button className="btn-primary w-full">
                ComeÃ§ar Agora
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
