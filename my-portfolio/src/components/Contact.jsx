import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé ! Je vous répondrai rapidement.')
    setFormData({ name: '', email: '', message: '' })
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
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-semibold hover:bg-primary/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 soft-shadow hover:hover-shadow"
            >
              <Send size={20} />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact