import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Boutique Bracelets Code Morse',
      description: 'Application web créative permettant de concevoir des bracelets personnalisés en utilisant le code Morse.',
      technologies: 'React, JavaScript, CSS, HTML',
      emoji: '👩‍🎨'
    },
    {
      title: 'Gestionnaire d\'Emploi du Temps',
      description: 'Application de gestion des emplois du temps, absences et notifications en temps réel.',
      technologies: 'React, Node.js, MySQL, Express.js',
      emoji: '📅'
    },
    {
      title: 'Portfolio Personnel',
      description: 'Site vitrine moderne et animé reflétant mon parcours et ma créativité.',
      technologies: 'HTML, CSS, JavaScript',
      emoji: '💼'
    },
    {
      title: 'API REST Blog',
      description: 'API RESTful complète pour la gestion d\'articles et d\'utilisateurs avec authentification.',
      technologies: 'Node.js, Express.js, MongoDB',
      emoji: '📝'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Mes projets
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations en développement web.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden soft-shadow hover:hover-shadow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <div className="text-6xl">{project.emoji}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <button className="bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2 soft-shadow">
                    <ExternalLink size={16} />
                    Voir
                  </button>
                  <button className="bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2 soft-shadow">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <span className="px-3 py-1 bg-primary/10 rounded-full">
                    {project.technologies}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects