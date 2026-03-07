import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'GreenFlo',
      description: 'Application web pour la gestion de serres intelligentes, avec suivi des données de capteurs en temps réel.',
      technologies: ['React', 'Node.js', 'MongoDB', 'IoT', 'ESP32'],
      image: '/projects/greenflo.png', 
      githubUrl: 'https://github.com/salmaF-2/greenflo', 
      liveUrl: 'https://greenflo-demo.com', 
    },
    {
      title: 'Manzo',
      description: 'Plateforme de mise en relation pour les services à domicile, facilitant la prise de rendez-vous.',
      technologies: ['React', 'Node.js', 'Express.js', 'Tailwind'],
      image: '/projects/manzo.png',
      githubUrl: 'https://github.com/salmaF-2/manzo',
      liveUrl: '', 
    },
    {
      title: 'Arrosi',
      description: 'Simulation de gestion d\'arrosage selon la météo, l\'état du sol, la culture et la parcelle.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Weather API'],
      image: '/projects/arrosi.png',
      githubUrl: 'https://github.com/salmaF-2/arrosi',
      liveUrl: '',
    },
    {
      title: 'PharmaVie',
      description: 'Site e-commerce pour la vente de produits pharmaceutiques avec gestion de stock et commandes.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: '/projects/pharmavie.png',
      githubUrl: 'https://github.com/Pharmavie/Pharmavie/tree/brancheSalma',
      liveUrl: '',
    },
    {
      title: 'Movies App',
      description: 'Application web pour rechercher et consulter des informations sur des films via une API externe.',
      technologies: ['Laravel', 'MySQL', 'Bootstrap'],
      image: '/projects/movies.png',
      githubUrl: 'https://github.com/salmaF-2/movies-app',
      liveUrl: '',
    },
    {
      title: 'Gestion de Bibliothèque',
      description: 'Logiciel de bureau pour la gestion des prêts, des retours et du catalogue d\'une bibliothèque.',
      technologies: ['Python', 'Tkinter', 'pymongo'],
      image: '/projects/bibliotheque.png',
      githubUrl: 'https://github.com/salmaF-2/bibliotheque',
      liveUrl: '',
    },
    {
      title: 'TowOn',
      description: 'Application mobile de gestion de remorquage avec localisation de l\'utilisateur et suivi des demandes.',
      technologies: ['Flutter', 'Dart', 'GPS', 'OpenStreetMap', 'Mobile'],
      image: '/projects/towon.jpeg',
      githubUrl: 'https://github.com/salmaF-2/towon',
      liveUrl: '',
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Mes projets
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Découvrez une sélection de mes réalisations, du front-end au back-end.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden soft-shadow hover:hover-shadow transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* --- MODIFICATION 1 : Image du projet --- */}
              <div className="relative aspect-video">
                <img 
                  src={project.image} 
                  alt={`Aperçu du projet ${project.title}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay avec les liens qui apparaît au survol */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  
                  {/* --- MODIFICATION 2 : Liens fonctionnels --- */}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2 soft-shadow">
                      <ExternalLink size={16} />
                      Voir
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center gap-2 soft-shadow">
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">
                  {project.description}
                </p>
                {/* --- MODIFICATION 3 : Affichage des technologies --- */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
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