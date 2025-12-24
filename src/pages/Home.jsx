import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import '../styles/pages/Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <p className="tagline">Création digitale & visuelle</p>
        <h1>Nhoni Network</h1>
        <p className="subtitle">Des créations digitales pensées pour votre identité</p>
        <div className="hero-buttons">
          <Link to="/contact">
            <Button variant="secondary">Demander un devis</Button>
          </Link>
          <Link to="/services">
            <Button variant="primary">Découvrir mes services</Button>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <h2>Services</h2>
        <div className="services-grid">
          <ServiceCard
            icon="🌐"
            title="Webdesign & Développement"
            description="Sites web modernes, responsives et performants, du design au développement"
          />
          <ServiceCard
            icon="🎨"
            title="Identité visuelle"
            description="Logos, flyers, affiches et supports de communication personnalisés"
          />
          <ServiceCard
            icon="🎬"
            title="Montage vidéo"
            description="Vidéos de présentation, montage et édition pour valoriser vos projets"
          />
          <ServiceCard
            icon="📄"
            title="Édition PDF"
            description="Mise en forme et modification de documents pour un rendu professionnel"
          />
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="why-section">
        <h2>Pourquoi Nhoni Network ?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h3>🎯 Sur mesure</h3>
            <p>Des solutions adaptées à vos besoins et votre identité</p>
          </div>
          <div className="why-item">
            <h3>👂 À l'écoute</h3>
            <p>Accompagnement personnalisé tout au long du projet</p>
          </div>
          <div className="why-item">
            <h3>⚡ Efficace</h3>
            <p>Des créations modernes et professionnelles, livrées dans les délais</p>
          </div>
          <div className="why-item">
            <h3>💜 Créatif</h3>
            <p>Des visuels qui vous ressemblent et marquent les esprits</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Prêt à démarrer votre projet ?</h2>
        <p>Contactez-moi pour discuter de vos besoins</p>
        <Link to="/contact">
          <Button variant="secondary">Me contacter</Button>
        </Link>
      </section>
    </div>
  )
}

export default Home