import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSending, setIsSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message:
          "Configuration EmailJS manquante. Ajoute REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID et REACT_APP_EMAILJS_PUBLIC_KEY dans ton fichier .env puis redémarre le serveur."
      })
      return
    }

    try {
      setIsSending(true)
      setSubmitStatus({ type: '', message: '' })

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        {
          publicKey
        }
      )

      setSubmitStatus({ type: 'success', message: 'Message envoyé ! Je vous répondrai rapidement.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: "Échec de l'envoi. Réessaie dans un instant ou contacte-moi directement par email."
      })
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Contactez-moi
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Discutons de votre projet ensemble !
        </p>

        {submitStatus.message ? (
          <div
            className={`mb-10 rounded-xl border px-4 py-3 text-center soft-shadow transition-all duration-300 ${
              submitStatus.type === 'success'
                ? 'border-green-500/30 bg-green-500/10 text-green-700'
                : 'border-red-500/30 bg-red-500/10 text-red-700'
            }`}
          >
            {submitStatus.message}
          </div>
        ) : null}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Restons en contact</h3>
            <p className="text-muted-foreground mb-8">
              Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités.
            </p>

            <div className="flex items-start gap-4 p-4 bg-background rounded-xl soft-shadow hover:hover-shadow transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">salmafadili003@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-background rounded-xl soft-shadow hover:hover-shadow transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                <p className="text-muted-foreground">Agadir Souss Massa, Maroc</p>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 soft-shadow"
                required
                disabled={isSending}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 soft-shadow"
                required
                disabled={isSending}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 soft-shadow"
                required
                disabled={isSending}
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSending}
              className={`w-full bg-primary text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 soft-shadow hover:hover-shadow ${
                isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/80 hover:scale-105'
              }`}
            >
              <Send size={20} />
              {isSending ? 'Envoi...' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact