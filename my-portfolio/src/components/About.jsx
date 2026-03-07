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
      description: 'Développement d’applications web et mobiles avec un code propre, performant et maintenable.'
    },
    {
      icon: Sparkles,
      title: 'User-Centered',
      description: 'Je conçois des applications centrées sur l’utilisateur avec une expérience simple et intuitive.'
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

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Développeuse fullstack passionnée, je crée des applications web et mobiles modernes
            en utilisant des technologies comme React, Node.js et Flutter. J’accorde une grande
            importance à l’expérience utilisateur, à la performance et à la qualité du code.
            Mon objectif est de transformer des idées en solutions digitales utiles,
            élégantes et centrées sur l’utilisateur.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            J’utilise également des bonnes pratiques modernes comme Git, les API REST,
            l’architecture propre et les méthodologies Agile afin de construire des
            applications robustes, évolutives et faciles à maintenir.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About