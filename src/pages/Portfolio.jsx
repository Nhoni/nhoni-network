import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Portfolio.css'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tous')

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
      imageUrl: 'https://themewagon.com/wp-content/uploads/2021/12/restoran.png',
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
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/041/387/387/non_2x/corporate-business-video-thumbnail-and-professional-web-banner-design-template-vibrant-yellow-and-blue-with-dynamic-color-thumbnails-on-live-streams-for-video-promotion-vector.jpg'
    },
    {
      id: 5,
      title: 'Branding association',
      category: 'Logo',
      description: 'Charte graphique complète et supports print',
      imageUrl: 'https://cdn.dribbble.com/userupload/13198757/file/original-d8c1a37afb4fe9b790bb466677548f16.png?resize=400x0'
    },
    {
      id: 6,
      title: 'Portfolio développeur',
      category: 'Web',
      description: 'Portfolio d\'un dev',
      imageUrl: 'https://cdn.dribbble.com/userupload/16803371/file/original-258538e13a4aa7698862929bb5dd831e.png?resize=752x&vertical=center',
      link: 'https://portfolio-iota-one-22.vercel.app/' 
    },
  ]

  const categories = ['Tous', 'Web', 'Logo', 'Flyer', 'Vidéo']

  const filteredProjects = activeFilter === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeFilter)

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
                  <img src={project.imageUrl} alt={project.title} className="card-image" />
                </div>
                <div className="card-content">
                  <span className="card-category">{project.category}</span>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>

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

    </main>
  )
}

export default Portfolio