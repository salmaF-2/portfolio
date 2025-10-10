import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Timeline = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Technicien Spécialisé en Développement Fullstack",
      institution: "Cité des Métiers et des Compétences Souss Massa",
      icon: GraduationCap,
    },
    {
      year: "2024",
      title: "ALX Software Engineering Program",
      description: "Formation intensive en développement fullstack",
      icon: Award,
    },
    {
      year: "2018",
      title: "Licence en Physique Fondamentale",
      institution: "Université Ibn Zohr",
      icon: BookOpen,
    },
  ]

  return (
    <section id="journey" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Mon parcours
        </h2>

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const Icon = item.icon
            
            return (
              <div
                key={index}
                className="flex items-start gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icône */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Contenu */}
                <div className="flex-1 bg-card p-6 rounded-2xl soft-shadow hover:hover-shadow transition-all duration-300">
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 text-foreground">{item.title}</h3>
                  {item.institution && (
                    <p className="text-muted-foreground">{item.institution}</p>
                  )}
                  {item.description && (
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Timeline