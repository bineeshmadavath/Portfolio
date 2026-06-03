import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header 
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/80 backdrop-blur-md border-neutral-200 py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2 group"
        >
          <div className="w-6 h-6 rounded-sm bg-neutral-900 text-white flex items-center justify-center font-semibold text-xs group-hover:scale-105 transition-transform">
            BM
          </div>
          <span>Bineesh Madavath</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-neutral-900 relative",
                location.pathname === link.path ? "text-neutral-900" : "text-neutral-500"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-neutral-900 rounded-full" />
              )}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            className="text-sm font-medium px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-transparent transition-all text-white"
            onClick={(e) => e.preventDefault()}
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-neutral-500 hover:text-neutral-900 p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <iconify-icon 
            icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
            width="24" 
            height="24"
          ></iconify-icon>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-base font-medium py-2",
                location.pathname === link.path ? "text-neutral-900" : "text-neutral-500"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#" 
            className="text-sm font-medium px-4 py-2 mt-2 rounded-lg bg-neutral-900 border border-transparent text-center text-white"
            onClick={(e) => e.preventDefault()}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}