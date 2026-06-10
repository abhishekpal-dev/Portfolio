import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#hero', title: 'Home', icon: 'home' },
  { href: '#about', title: 'About', icon: 'user' },
  { href: '#experience', title: 'Experience', icon: 'briefcase' },
  { href: '#projects', title: 'Projects', icon: 'code' },
  { href: '#contact', title: 'Contact', icon: 'message' },
]

function NavIcon({ icon }) {
  switch (icon) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    case 'user':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      )
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    case 'message':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach(s => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  // Close drawer when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const close = e => {
      if (!e.target.closest('nav') && !e.target.closest('.nav-mobile-drawer')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">
          AP<span>.</span>
        </a>

        {/* Desktop icon dock */}
        <div className="nav-dock">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              title={link.title}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
            >
              <NavIcon icon={link.icon} />
            </a>
          ))}
        </div>

        {/* Desktop resume button */}
        <a href="/Abhishek_Pal_Software_Developer_Resume.pdf" className="resume-btn" download>
          ↓ Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile slide-down drawer */}
      <div className={`nav-mobile-drawer${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? 'active' : ''}
            onClick={closeMenu}
          >
            <NavIcon icon={link.icon} />
            {link.title}
          </a>
        ))}
        <a
          href="/Abhishek_Pal_Software_Developer_Resume.pdf"
          className="nav-drawer-resume"
          download
          onClick={closeMenu}
        >
          ↓ Download Resume
        </a>
      </div>
    </>
  )
}
