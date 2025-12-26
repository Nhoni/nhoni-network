import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import '../styles/pages/Home.css'

const AppleCard = ({ icon, title, text }) => (
  <div className="apple-card h-100">
    <div className="apple-icon">{icon}</div>
    <h5 className="fw-semibold">{title}</h5>
    <p>{text}</p>
  </div>
)

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
          baseColor: 0x7c3aed,       // Violet principal (comme ton thème)
          backgroundColor: 0x000000, // Fond noir
          amplitudeFactor: 2.0,      // Plus intense
          size: 2.0                  // Taille du halo
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="home">

      {/* HERO avec le vrai effet Halo Vanta.js (il bouge, pulse, réagit à la souris) */}
      <section className="hero-vanta" ref={heroRef}>
        {/* Overlay sombre pour que le texte blanc soit bien lisible */}
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

      {/* VALEURS */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <AppleCard icon="🎯" title="Stratégie" text="Chaque projet est conçu pour atteindre vos objectifs" />
            </div>
            <div className="col-md-4">
              <AppleCard icon="✨" title="Créativité" text="Une identité forte, cohérente et mémorable" />
            </div>
            <div className="col-md-4">
              <AppleCard icon="⚡" title="Exigence" text="Qualité, précision et accompagnement humain" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title text-center">
            Expertises
          </h2>

          <div className="row g-4 mt-4">
            <div className="col-lg-3 col-md-6">
              <AppleCard icon="💻" title="Web & UI" text="Sites modernes, rapides et responsives" />
            </div>
            <div className="col-lg-3 col-md-6">
              <AppleCard icon="🎨" title="Identité visuelle" text="Logo, flyers, branding" />
            </div>
            <div className="col-lg-3 col-md-6">
              <AppleCard icon="🎬" title="Vidéo" text="Montage & contenus promotionnels" />
            </div>
            <div className="col-lg-3 col-md-6">
              <AppleCard icon="📄" title="Documents" text="PDF, mise en page professionnelle" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="container">
          <div className="cta-box">
            <h2>Donnons vie à votre projet</h2>
            <p>Discutons ensemble de votre besoin</p>
            <Link to="/contact" className="btn-main">
              Me contacter
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home