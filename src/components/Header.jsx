import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import '../styles/components/Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (path) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      navigate(path)
    }, 100)
  }

  return (
    <>
      <header className="apple-header">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link to="/" className="header-logo-text" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="header-nav-desktop d-none d-lg-block">
            <ul className="header-nav-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Réalisations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <button
            className="header-burger d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu d-lg-none" onClick={() => setIsMenuOpen(false)}>
          <nav onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-links">
              <li>
                <button type="button" onClick={() => handleNavClick('/')}>
                  Accueil
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('/services')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('/portfolio')}>
                  Réalisations
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick('/contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header