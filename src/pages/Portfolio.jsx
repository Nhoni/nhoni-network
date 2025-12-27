import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Portfolio.css'
import parfumsVideo from '../assets/parfums inspiré de grandes marques.mp4'
import choganThumbnail from '../assets/chogan_f.png'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Logo startup tech',
      category: 'Logo',
      description: 'Identité visuelle moderne pour une startup innovante',
      imageUrl: 'https://cdn.prod.website-files.com/5de2db6d3719a1e2f3e4454c/6682aa19df64a278f889a65e_best-startup-logos.jpg'
    },
    {
      id: 2,
      title: 'Site Association',
      category: 'Web',
      description: 'Site responsive élégant avec dons paypal intégrés',
      imageUrl: '/src/assets/aecv.png',
      link: 'https://aecv1.vercel.app'  
    },
    {
      id: 3,
      title: 'Flyer événement culturel',
      category: 'Flyer',
      description: 'Design impactant pour un festival local',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/02/52/12/62/1000_F_252126233_0zxMOCALq026zwrFArTHfClsRBfElKbc.jpg'
    },
    {
      id: 4,
      title: 'Vidéo promotionnelle',
      category: 'Vidéo',
      description: 'Montage dynamique pour lancement produit',
      type: 'video',
      videoUrl: parfumsVideo,
      thumbnail: choganThumbnail
    },
    {
  id: 5,
  title: 'Branding Nhoni Network',
  category: 'Logo & charte graphique',
  description: 'Charte graphique complète et supports print',
  imageUrl: '/src/assets/branding.png'
},
    {
      id: 6,
      title: 'Portfolio d\'une développeuse web',
      category: 'Web',
      description: 'Portfolio d\'une développeuse web full stack',
      imageUrl: '/src/assets/mon_portfolio.png',
      link: 'https://mbemba-nhora-portfolio.vercel.app/' 
    }
  ]

  const categories = ['Tous', 'Web', 'Logo', 'Flyer', 'Vidéo']

  const filteredProjects = activeFilter === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl)
    setShowVideoModal(true)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setCurrentVideo(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <main className="nhoni-portfolio-page">

      <section className="portfolio-hero">
        <div className="container text-center">
          <h1 className="hero-title">Réalisations</h1>
          <p className="hero-subtitle">
            Quelques projets sélectionnés, conçus avec soin et précision.
          </p>
        </div>
      </section>

      <section className="portfolio-filters-section">
        <div className="container">
          <div className="portfolio-filters">
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

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="card-media">
                  <img 
                    src={project.type === 'video' ? project.thumbnail : project.imageUrl} 
                    alt={project.title} 
                    className="card-image" 
                  />
                </div>
                <div className="card-content">
                  <span className="card-category">{project.category}</span>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>

                  {project.type === 'video' && (
                    <button
                      onClick={() => openVideoModal(project.videoUrl)}
                      className="project-link video-button"
                    >
                      Voir la vidéo →
                    </button>
                  )}

                  {project.category === 'Web' && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Voir le site →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container text-center">
          <h2>Un projet en tête ?</h2>
          <p>Créons ensemble quelque chose d'exceptionnel</p>
          <Link to="/contact" className="cta-button">
            Me contacter
          </Link>
        </div>
      </section>

      {showVideoModal && currentVideo && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              ✕
            </button>
            <div className="video-container">
              <video 
                controls 
                autoPlay
                className="modal-video"
                key={currentVideo}
              >
                <source src={currentVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}

export default Portfolio