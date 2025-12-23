import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import './Portfolio.css'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  // Données d'exemple (à remplacer par tes vraies réalisations)
  const projects = [
    {
      id: 1,
      title: 'Logo entreprise tech',
      category: 'Logo',
      description: 'Création d\'identité visuelle pour une startup tech',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Site web restaurant',
      category: 'Web',
      description: 'Site vitrine responsive pour un restaurant local',
      icon: '🌐'
    },
    {
      id: 3,
      title: 'Flyer événement',
      category: 'Flyer',
      description: 'Design de flyer pour un événement culturel',
      icon: '📄'
    },
    {
      id: 4,
      title: 'Vidéo présentation',
      category: 'Vidéo',
      description: 'Montage vidéo pour présentation d\'entreprise',
      icon: '🎬'
    },
    {
      id: 5,
      title: 'Identité visuelle complète',
      category: 'Logo',
      description: 'Logo, charte graphique et supports pour association',
      icon: '🎨'
    },
    {
      id: 6,
      title: 'Site e-commerce',
      category: 'Web',
      description: 'Boutique en ligne moderne et performante',
      icon: '🌐'
    }
  ]

  const categories = ['Tous', 'Web', 'Logo', 'Flyer', 'Vidéo']

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="portfolio-page">
      {/* Header */}
      <div className="portfolio-header">
        <h1>Réalisations</h1>
        <p>
          Découvrez quelques-uns de mes projets récents. 
          Chaque création est unique et pensée sur mesure.
        </p>
      </div>

      {/* Filtres */}
      <div className="portfolio-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      {filteredProjects.length > 0 ? (
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image">
                {project.icon}
              </div>
              <div className="portfolio-content">
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="portfolio-empty">
          <h3>Aucun projet dans cette catégorie</h3>
          <p>Revenez bientôt pour découvrir mes nouvelles réalisations !</p>
        </div>
      )}

      {/* CTA */}
      <section className="portfolio-cta">
        <h2>Un projet en tête ?</h2>
        <p>Créons ensemble quelque chose d'unique</p>
        <Link to="/contact">
          <Button variant="secondary">Me contacter</Button>
        </Link>
      </section>
    </div>
  )
}

export default Portfolio