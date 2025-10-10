import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Salma AL FADILI — Créé avec ❤️ et créativité
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 soft-shadow"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 soft-shadow"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:salma.alfadili@example.com"
              className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 soft-shadow"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer