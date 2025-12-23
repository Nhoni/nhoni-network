import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '1rem', background: '#6A2EB8', color: 'white' }}>
      <nav style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Réalisations</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>À propos</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header