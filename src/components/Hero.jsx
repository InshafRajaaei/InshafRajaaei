import heroImg from '../data/hero.jpg'

export default function Hero() {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-8 mb-32 pt-32 lg:pt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-6 block font-semibold">
            Available for specialized roles
          </span>
          <h1 className="text-[3.5rem] md:text-[5rem] leading-[1.1] font-extrabold tracking-tighter mb-8 text-white">
            Inshaf Rajaaei
          </h1>
          <p className="text-2xl md:text-3xl font-light text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            I build <span className="hero-gradient-text font-bold">secure and scalable</span> web applications for the modern infrastructure.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="primary-cta-gradient text-on-primary px-8 py-4 text-lg font-bold shadow-2xl hover:brightness-110 transition-all flex items-center gap-2 rounded-sm">
              View Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a href="#contact" className="border border-outline/40 text-primary px-8 py-4 text-lg font-bold hover:bg-primary/5 transition-all inline-flex items-center rounded-sm">
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-primary/10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img
              alt="Technical environment"
              className="w-full h-full object-cover"
              src={heroImg}
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface/80 backdrop-blur-md border-l-4 border-primary">
              <p className="text-xs font-mono text-primary mb-1">CURRENT_STATUS</p>
              <p className="text-sm font-medium text-white">Architecting distributed systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
