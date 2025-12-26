import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/components/Header.css'

function Header() {
  return (
    <header className="apple-header">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Logo + Nom du site à gauche – sur mobile et desktop */}
        <Link to="/" className="header-logo-text d-flex align-items-center gap-3">
          <Logo />
        </Link>

        {/* Navigation centrée – sur desktop  */}
        <nav className="header-nav-desktop d-none d-lg-block">
          <ul className="header-nav-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Réalisations</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Burger – visible sur mobile/tablette */}
        <button
          className="header-burger d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#appleMobileMenu"
          aria-controls="appleMobileMenu"
          aria-expanded="false"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu mobile full-screen –  sur mobile */}
        <div className="collapse mobile-menu d-lg-none" id="appleMobileMenu">
          <ul className="mobile-nav-links">
            <li><Link to="/" data-bs-toggle="collapse" data-bs-target="#appleMobileMenu">Accueil</Link></li>
            <li><Link to="/services" data-bs-toggle="collapse" data-bs-target="#appleMobileMenu">Services</Link></li>
            <li><Link to="/portfolio" data-bs-toggle="collapse" data-bs-target="#appleMobileMenu">Réalisations</Link></li>
            <li><Link to="/about" data-bs-toggle="collapse" data-bs-target="#appleMobileMenu">À propos</Link></li>
            <li><Link to="/contact" data-bs-toggle="collapse" data-bs-target="#appleMobileMenu">Contact</Link></li>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Header