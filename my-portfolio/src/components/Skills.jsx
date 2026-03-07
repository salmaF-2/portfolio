import { Code2, Users, Lightbulb, MessageSquare, Palette, Crown, KanbanSquare } from 'lucide-react'

const Skills = () => {
  const technicalSkills = [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 
    'Node.js', 'Express.js', 'Python', 'Laravel', 'Php', 'MongoDB', 'MySQL', 
    'Git & GitHub', 'Docker', 'DevOps',
    'Java', 'J2EE', 'Android Studio (Java)', 'Swift', 'Flutter', 'React Native',
    'UX/UI', 'Automatisation AI'
]

  const methodologies = [
    'Scrum', 'Jira', 'UML', 'Gantt', 'PERT', 'Mural', 'Card Sorting'
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

        {/* --- MODIFICATION 2 : Amélioration de la grille pour 3 sections --- */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Compétences techniques (prend une colonne) */}
          <div className="lg:col-span-1 animate-fade-in">
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
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft skills & Méthodologies (prennent deux colonnes) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Méthodologies */}
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  {/* --- AJOUT 3 : Nouvelle icône pour la section --- */}
                  <KanbanSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Méthodologies</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {methodologies.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background text-foreground rounded-xl font-medium soft-shadow hover:hover-shadow hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Personnelles</h3>
              </div>
              <div className="space-y-4">
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
      </div>
    </section>
  )
}

export default Skills