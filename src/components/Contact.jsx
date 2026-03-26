export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 mb-20 pt-16">
      <div className="bg-surface-container-low p-12 md:p-20 text-center border border-outline-variant/20 rounded-sm">
        <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-primary block mb-4 font-bold">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Ready to scale?
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          I'm currently available for specialized roles and freelance opportunities. Let's discuss how I can help bring structural integrity to your digital infrastructure.
        </p>
        <a 
          href="mailto:inshafrmnaazir@gmail.com" 
          className="primary-cta-gradient text-on-primary px-8 py-4 text-lg font-bold hover:brightness-110 transition-all inline-flex items-center gap-2 rounded-sm"
        >
          <span className="material-symbols-outlined">mail</span>
          Contact Me
        </a>
      </div>
    </section>
  )
}
