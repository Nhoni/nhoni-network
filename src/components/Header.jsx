import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../styles/components/Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container-fluid position-relative">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2 site-brand"
        ><Logo />
        </Link>

        {/* Burger (mobile) */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation centrée */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-center">

            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Réalisations</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">À propos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header
