import { Download, ArrowRight } from 'lucide-react'
import { MdWavingHand } from 'react-icons/md';
const Hero = () => {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv_salmaAlfadili.pdf' 
    link.download = 'Salma_AL_FADILI_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 bg-gradient-to-br from-background to-primary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* --- MODIFICATION ICI --- */}
          {/* On ajoute 'relative z-10' pour s'assurer que ce bloc est toujours au premier plan */}
          <div className="flex-1 text-center md:text-left animate-slide-up relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Bonjour, je suis <span className="text-primary">Salma</span> <MdWavingHand className="inline-block" />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Développeuse Fullstack Passionnée
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Je crée des applications web modernes avec React, Node.js et les dernières technologies. 
              Passionnée par l'innovation et la résolution de problèmes complexes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollTo('projects')}
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 soft-shadow hover:hover-shadow"
              >
                Voir mes projets
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={downloadCV}
                className="border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </button>
            </div>
          </div>

          {/* Avatar animé */}
          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center soft-shadow animate-float">
                <img 
                  src="/pic.png" 
                  alt="Salma Al Fadili" 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero