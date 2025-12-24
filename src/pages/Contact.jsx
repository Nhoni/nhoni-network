import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const formRef = useRef()
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Envoi UNIQUEMENT vers Moi (template "Contactez-nous")
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setFormStatus('success')
      formRef.current.reset() // Vide le formulaire
    } catch (error) {
      console.error('Erreur EmailJS :', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          Une question ou un projet en tête ? Contactez-moi par email via le formulaire ci-dessous, je vous réponds sous 24h.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="contact-content">
        {/* Informations de contact */}
        <div className="contact-info">
          <h2>Coordonnées</h2>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@nhoni.network">contact@nhoni.network</a>
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Réponse sous 24h maximum
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h3>Localisation</h3>
              <p>Île-de-France, France</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
                Prestations à distance dans toute la France
              </p>
            </div>
          </div>
          <div className="contact-hours">
            <h3>⏰ Disponibilités</h3>
            <p>Lundi - Vendredi : 9h00 - 18h00</p>
            <p>Réponse par email sous 24h</p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="contact-form">
          <h2>Envoyez-moi un message</h2>

          {formStatus === 'success' && (
            <div className="form-message success">
              ✓ Message envoyé avec succès ! Je vous répondrai très vite.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="form-message error">
              ✗ Une erreur est survenue. Veuillez réessayer.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Téléphone (facultatif)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service souhaité *</label>
              <select id="service" name="service" required>
                <option value="">-- Sélectionnez un service --</option>
                <option value="web">Webdesign & Développement</option>
                <option value="logo">Identité visuelle / Logo</option>
                <option value="flyer">Flyer / Affiche</option>
                <option value="video">Montage vidéo</option>
                <option value="pdf">Édition PDF</option>
                <option value="pack">Pack complet</option>
                <option value="autre">Autre / Conseil</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Votre message *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Décrivez votre projet, vos besoins, votre budget..."
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>

      {/* CTA */}
      <section className="contact-cta">
        <h2>Besoin d'un devis rapide ?</h2>
        <p>
          Décrivez-moi votre projet via le formulaire ou écrivez-moi directement à{' '}
          <strong>contact@nhoni.network</strong>. Je vous répondrai avec une solution adaptée.
        </p>
      </section>
    </div>
  )
}

export default Contact