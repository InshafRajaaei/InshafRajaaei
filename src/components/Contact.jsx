import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-container relative overflow-hidden" style={{background: 'linear-gradient(135deg, #12172e 0%, #1a0f2e 100%)'}}>
      <h2 className="section-title">Let's Work Together</h2>

      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
          Ready to bring your project to life? Let's connect and discuss how I can help you build something amazing.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:inshafrmnaazir@gmail.com"
          className="btn-primary inline-flex items-center justify-center gap-2 mb-12"
        >
          <Mail size={20} /> Send me an Email
        </a>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <a
          href="mailto:inshafrmnaazir@gmail.com"
          className="card card-hover group text-center"
        >
          <div className="p-4 bg-accent/10 rounded-lg mb-4 inline-block group-hover:bg-accent/20 transition-colors">
            <Mail size={32} className="text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-text-secondary mb-4 break-all">inshafrmnaazir@gmail.com</p>
          <div className="flex items-center justify-center gap-2 text-accent group-hover:gap-4 transition-all">
            Get in touch <ArrowRight size={16} />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/inshafrmnaazir/"
          target="_blank"
          rel="noopener noreferrer"
          className="card card-hover group text-center"
        >
          <div className="p-4 bg-accent/10 rounded-lg mb-4 inline-block group-hover:bg-accent/20 transition-colors">
            <Linkedin size={32} className="text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
          <p className="text-text-secondary mb-4">Connect with me</p>
          <div className="flex items-center justify-center gap-2 text-accent group-hover:gap-4 transition-all">
            Visit profile <ArrowRight size={16} />
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/InshafRajaaei"
          target="_blank"
          rel="noopener noreferrer"
          className="card card-hover group text-center"
        >
          <div className="p-4 bg-accent/10 rounded-lg mb-4 inline-block group-hover:bg-accent/20 transition-colors">
            <Github size={32} className="text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-2">GitHub</h3>
          <p className="text-text-secondary mb-4">Check my code</p>
          <div className="flex items-center justify-center gap-2 text-accent group-hover:gap-4 transition-all">
            View repos <ArrowRight size={16} />
          </div>
        </a>
      </div>

      {/* Response Time */}
      <div className="text-center mt-12 p-6 border border-accent border-opacity-20 rounded-lg max-w-2xl mx-auto">
        <p className="text-text-secondary">
          I typically respond within <span className="text-accent font-bold">24-48 hours</span>. Looking forward to hearing from you!
        </p>
      </div>
    </section>
  )
}
