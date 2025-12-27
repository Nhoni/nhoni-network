import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/pages/Contact.css'

function Contact() {
  const formRef = useRef()
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = (formData) => {
    const newErrors = {}

    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim()
    const service = formData.get('service')
    const message = formData.get('message')?.trim()

    if (!name) newErrors.name = 'Le nom est obligatoire'
    else if (name.length < 2) newErrors.name = 'Le nom doit contenir au moins 2 caractères'

    if (!email) newErrors.email = 'L’email est obligatoire'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email invalide'

    if (!service) newErrors.service = 'Veuillez sélectionner un service'

    if (!message) newErrors.message = 'Le message est obligatoire'
    else if (message.length < 10) newErrors.message = 'Le message doit faire au moins 10 caractères'

    // Téléphone : vraiment facultatif → aucune validation forcée
    // On ne fait rien ici même s’il est rempli ou mal formaté

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)
    setErrors({})

    const formData = new FormData(formRef.current)

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setFormStatus('success')
      formRef.current.reset()
      setErrors({})
    } catch (error) {
      console.error('Erreur EmailJS :', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="nhoni-contact-page">
      <div className="animated-bg"></div>

      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title">Contact</h1>
          <p className="hero-subtitle">
            Parlons de votre projet. Je vous réponds sous 24 heures.
          </p>
        </div>
      </section>

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

            <form ref={formRef} onSubmit={handleSubmit} className="nhoni-form" noValidate>

              {/* Honeypot anti-spam */}
              <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom prénom"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Téléphone (facultatif)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="06 00 00 00 00"
                    // Pas de required, pas d'erreur possible
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service souhaité *</label>
                  <select id="service" name="service" required aria-invalid={!!errors.service}>
                    <option value="">Sélectionnez un service</option>
                    <option value="web">Web & UI Design</option>
                    <option value="branding">Identité Visuelle</option>
                    <option value="video">Montage Vidéo</option>
                    <option value="print">Supports Print</option>
                    <option value="strategy">Stratégie Digitale</option>
                    <option value="seo">SEO & Optimisation</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.service && <span className="field-error">{errors.service}</span>}
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
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

            </form>

            <p className="form-footer">
              Ou écrivez-moi directement :{' '}
              <a href="mailto:contact@nhoni.network">nhoni.network@gmail.com</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact