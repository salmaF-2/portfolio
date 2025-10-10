import { Heart, Code, Sparkles } from 'lucide-react'

const About = () => {
  const qualities = [
    {
      icon: Heart,
      title: 'Passionnée',
      description: 'Animée par la création de solutions digitales innovantes et impactantes.'
    },
    {
      icon: Code,
      title: 'Technique',
      description: 'Spécialiste en développement de code propre, efficace et scalable.'
    },
    {
      icon: Sparkles,
      title: 'Créative',
      description: 'Toujours à la recherche de nouvelles technologies et approches uniques.'
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          À propos de moi
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {qualities.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-background soft-shadow hover:hover-shadow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Développeuse fullstack passionnée, je combine créativité et expertise technique 
            pour créer des applications web performantes. Mon objectif est de transformer 
            vos idées en solutions digitales élégantes et fonctionnelles.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About