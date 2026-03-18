import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-light border-t border-accent border-opacity-20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Inshaf</h3>
            <p className="text-text-secondary">
              Building secure and scalable web applications that drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['Projects', 'Skills', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold mb-4 text-text-primary">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/InshafRajaaei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark border border-accent border-opacity-20 rounded-lg hover:border-opacity-100 hover:bg-accent/10 transition-all duration-300"
              >
                <Github size={20} className="text-accent" />
              </a>
              <a
                href="https://linkedin.com/in/inshafrmnaazir/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark border border-accent border-opacity-20 rounded-lg hover:border-opacity-100 hover:bg-accent/10 transition-all duration-300"
              >
                <Linkedin size={20} className="text-accent" />
              </a>
              <a
                href="mailto:inshafrmnaazir@gmail.com"
                className="p-3 bg-dark border border-accent border-opacity-20 rounded-lg hover:border-opacity-100 hover:bg-accent/10 transition-all duration-300"
              >
                <Mail size={20} className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent border-opacity-20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © {currentYear} Inshaf Rajaaei. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-accent" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
