import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #0a0e27 0%, #1a0f2e 50%, #0a0e27 100%)'}}>
      {/* Background Elements - Premium Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent opacity-8 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/40"></div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Inshaf <span className="gradient-text">Rajaaei</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed">
              I build <span className="text-accent font-bold">secure and scalable</span> web applications
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Full-Stack Developer • AI/ML Engineer • DevOps Specialist
            </p>
            <p className="text-text-secondary mb-12 leading-relaxed max-w-lg">
              With expertise in React, Node.js, Flutter, Python, and cloud infrastructure, I transform ideas into production-ready solutions that drive business growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/InshafRajaaei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-light border border-accent border-opacity-20 rounded-lg hover:border-opacity-100 hover:text-accent transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/inshafrmnaazir/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-light border border-accent border-opacity-20 rounded-lg hover:border-opacity-100 hover:text-accent transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:inshafrmnaazir@gmail.com"
                className="p-3 bg-dark-light border border-accent border-opacity-20 rounded-lg hover:border-opacity-100 hover:text-accent transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slideInLeft relative">
            <div className="glow-accent w-full aspect-square bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center border border-accent border-opacity-30">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
                alt="Inshaf Rajaaei"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
