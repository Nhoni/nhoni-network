import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import '../styles/pages/Home.css'

function Home() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const heroRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect && heroRef.current) {
      setVantaEffect(
        window.VANTA.HALO({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0x7c3aed,       // Violet principal
          backgroundColor: 0x000000, // Fond noir pour le halo
          amplitudeFactor: 2.0,
          size: 2.0
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <main className="home">

      {/* HERO – seul élément visible sur la page d'accueil */}
      <section className="hero-vanta" ref={heroRef}>
        <div className="hero-overlay"></div>

        <div className="container text-center hero-content">
          <p className="hero-label">
            Studio créatif digital
          </p>

          <h1 className="hero-title">
            Nhoni Network
          </h1>

          <p className="hero-subtitle">
            Design, web et supports visuels pensés pour sublimer votre image
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn-main">
              Demander un devis
            </Link>
            <Link to="/services" className="btn-outline">
              Voir les services
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home