import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/portfolio" className="nav-link">Réalisations</Link>
        <Link to="/about" className="nav-link">À propos</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  )
}

export default Header