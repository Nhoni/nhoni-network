import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/pages/Contact.css'

function Contact() {
  const formRef = useRef()
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setFormStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Erreur EmailJS :', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="nhoni-contact-page">
      {/* Fond animé violet qui couvre TOUTE la page */}
      <div className="animated-bg"></div>

      {/* Hero titre */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title">Contact</h1>
          <p className="hero-subtitle">
            Parlons de votre projet. Je vous réponds sous 24 heures.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">

            {formStatus === 'success' && (
              <div className="form-message success">
                Message envoyé ! Je vous répondrai très bientôt.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-message error">
                Erreur lors de l’envoi. Réessayez ou écrivez-moi directement.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="nhoni-form">

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Nom complet *</label>
                  <input type="text" id="name" name="name" required placeholder="Votre nom prénom" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required placeholder="votre@email.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Téléphone (facultatif)</label>
                  <input type="tel" id="phone" name="phone" placeholder="06 00 00 00 00" />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Service souhaité *</label>
                  <select id="service" name="service" required>
                    <option value="">Sélectionnez un service</option>
                    <option value="web">Web & UI Design</option>
                    <option value="branding">Identité Visuelle</option>
                    <option value="video">Montage Vidéo</option>
                    <option value="print">Supports Print</option>
                    <option value="strategy">Stratégie Digitale</option>
                    <option value="seo">SEO & Optimisation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-field full">
                <label htmlFor="message">Votre message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Décrivez votre projet, vos besoins, budget approximatif..."
                />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              </button>

            </form>

            <p className="form-footer">
              Ou écrivez-moi directement :{' '}
              <a href="mailto:contact@nhoni.network">contact@nhoni.network</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact