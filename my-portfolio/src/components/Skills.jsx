import { Code2, Users, Lightbulb, MessageSquare, Palette, Crown } from 'lucide-react'

const Skills = () => {
  const technicalSkills = [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git & GitHub'
  ]

  const softSkills = [
    { name: 'Travail d\'équipe', icon: Users },
    { name: 'Résolution de problèmes', icon: Lightbulb },
    { name: 'Communication', icon: MessageSquare },
    { name: 'Créativité', icon: Palette },
    { name: 'Leadership', icon: Crown },
    { name: 'Adaptabilité', icon: Code2 }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Mes compétences
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Compétences techniques */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Techniques</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background text-foreground rounded-xl font-medium soft-shadow hover:hover-shadow hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Personnelles</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl soft-shadow hover:hover-shadow transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills