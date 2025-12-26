import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../components/Logo'  
import '../styles/pages/Services.css'

function Services() {
  const location = useLocation()
  const [activeFilter, setActiveFilter] = useState('Tous')

  const services = [
    { id: 'web', title: 'Web & UI Design', description: 'Création de sites web modernes, rapides et entièrement responsives. Interfaces intuitives optimisées pour tous les appareils. Focus sur l’expérience utilisateur, performances et accessibilité pour convertir vos visiteurs en clients.' },
    { id: 'logo', title: 'Identité Visuelle', description: 'Conception de logos uniques, chartes graphiques complètes et branding sur mesure. Recherche créative et déclinaisons sur tous supports pour une image de marque forte, cohérente et mémorable.' },
    { id: 'video', title: 'Montage Vidéo', description: 'Montage professionnel de vidéos promotionnelles, teasers et motion design. Effets dynamiques, musique adaptée et storytelling impactant pour capter l’attention sur les réseaux sociaux.' },
    { id: 'flyer', title: 'Supports Print', description: 'Conception et mise en forme de flyers, brochures, affiches, cartes de visite et roll up Qualité professionnelle prête pour l’impression, avec optimisation des couleurs et respect des normes techniques.' },
    { id: 'strategy', title: 'Stratégie Digitale', description: 'Audit de présence en ligne, conseil en communication et plan stratégique personnalisé. Définition d’objectifs clairs et accompagnement pour maximiser votre retour sur investissement.' },
    { id: 'seo', title: 'SEO & Optimisation', description: 'Optimisation pour les moteurs de recherche, amélioration de la vitesse et structure technique. Pour gagner en visibilité organique et attirer un trafic qualifié durablement.' },
  ]

  const categories = ['Tous', 'Web & UI Design', 'Identité Visuelle', 'Montage Vidéo', 'Supports Print', 'Stratégie Digitale', 'SEO & Optimisation']

  const pageTitle = 'Services'

  const filteredService = activeFilter === 'Tous' 
    ? null 
    : services.find(s => s.title === activeFilter)

  return (
    <main className="nhoni-services-page">
      <div className="animated-bg"></div>

      

      {/* Hero avec illustration */}
      <section className="services-hero">
        <div className="container text-center">
          <div className="services-illustration">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradient)" strokeWidth="8" opacity="0.3" />
              <path d="M60 80 L80 120 L120 100 L140 140 L100 60 Z" fill="url(#gradient)" opacity="0.6" />
              <circle cx="100" cy="100" r="30" fill="url(#gradient)" opacity="0.8" />
              <circle cx="70" cy="70" r="15" fill="white" opacity="0.7" />
              <circle cx="130" cy="130" r="20" fill="white" opacity="0.5" />
            </svg>
          </div>

          <h1 className="hero-title">Services</h1>
          <p className="hero-subtitle">
            Choisissez le service qui vous intéresse ci-dessous.
          </p>
        </div>
      </section>

      {/* Boutons de sélection */}
      <section className="services-filters-section">
        <div className="container">
          <div className="services-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Description du service sélectionné */}
      <section className="services-description-section">
        <div className="container">
          {filteredService ? (
            <div className="service-detail">
              <h2 className="service-title">{filteredService.title}</h2>
              <p className="service-description">
                {filteredService.description}
              </p>
            </div>
          ) : (
            <div className="service-default">
              <p className="default-text">
                Cliquez sur un service ci-dessus pour découvrir les détails
              </p>
              <div className="click-hint">
                <svg className="arrow-up" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA violet */}
      <section className="services-cta">
        <div className="container text-center">
          <h2>Un projet en tête ?</h2>
          <p>Discutons-en ensemble et donnons vie à vos idées</p>
          <Link to="/contact" className="cta-button">
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Services