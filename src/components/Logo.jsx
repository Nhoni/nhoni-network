import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img 
        src="/logo.png" 
        alt="Nhoni Network" 
        className="logo" 
      />
      <span className="logo-text">Nhoni Network</span>
    </Link>
  )
}

export default Logo