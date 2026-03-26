export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 mb-20 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary/30 hidden lg:block"></div>
          <p className="text-[1.75rem] font-bold leading-snug text-white relative z-10">
            "Engineering is more than writing code—it's about creating structural integrity in a digital landscape. I focus on building systems that don't just work, but scale and persist through failure."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-primary"></div>
            <span className="text-sm font-bold uppercase tracking-widest">Inshaf Rajaaei</span>
          </div>
        </div>
        
        <div className="space-y-6 lg:pl-8">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">The Philosophy</h2>
          <p className="text-on-surface-variant leading-relaxed">
            With over 8 years in full-stack development, I've pivoted my focus toward the backbone of modern web architecture. I specialize in bridging the gap between elegant user interfaces and robust, secure server-side logic.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Every project I undertake begins with a security-first audit and a horizontal scalability blueprint. Whether it's a fintech application requiring hardened authentication or a high-traffic e-commerce platform, the goal remains the same: uncompromising performance.
          </p>
          <div className="pt-6">
            <a 
              href="/resume.pdf" 
              download
              className="border-b-2 border-primary text-primary font-bold pb-1 hover:text-primary-fixed transition-all"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
