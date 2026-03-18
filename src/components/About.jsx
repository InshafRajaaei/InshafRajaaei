export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            I am a Computer Engineering undergraduate with a strong focus on building scalable, production-ready software systems. What sets me apart is my ability to manage the entire engineering lifecycle—from developing full-stack applications and training machine learning models to deploying them securely via automated cloud CI/CD pipelines.
          </p>

          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            My journey spans across multiple domains: competitive programming, fullstack development, machine learning, and DevOps. This diverse experience allows me to approach problems holistically and deliver comprehensive solutions that not only work but scale.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-accent/20 rounded-full font-bold text-accent">01</span>
                <p className="text-text-secondary">4+ years of hands-on development experience</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-accent/20 rounded-full font-bold text-accent">02</span>
                <p className="text-text-secondary">20+ projects across web, mobile, AI, and DevOps</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-accent/20 rounded-full font-bold text-accent">03</span>
                <p className="text-text-secondary">Passionate about clean code and scalable architecture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="glow-accent">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
              alt="Inshaf Rajaaei"
              className="w-full rounded-2xl border border-accent border-opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  )
}
