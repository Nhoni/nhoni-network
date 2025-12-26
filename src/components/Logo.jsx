import { Link } from 'react-router-dom'
import '../styles/components/Logo.css'

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img 
        src="/logo.png" 
        alt="Nhoni Network" 
        className="logo" 
      />          
      <span className="site-name">NHONI NETWORK</span>

    </Link>
  )
}

export default Logo