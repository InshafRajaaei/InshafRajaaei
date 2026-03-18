import { ExternalLink, Github } from 'lucide-react'
import projects from '../data/projects.json'

export default function FeaturedProjects() {
  const featuredProjects = projects.projects.filter(p => p.featured)

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="card card-hover group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="mb-6 overflow-hidden rounded-lg h-48 relative group/img">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-text-secondary text-sm mb-4">
              {project.problem}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-xs font-bold text-accent mb-3">TECH STACK</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-medium text-accent">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-accent border-opacity-20">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent transition-colors"
              >
                <Github size={16} /> Code
              </a>
              {project.demo !== "Proprietary - Internal Enterprise Tool" && (
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent transition-colors"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-16">
        <a href="#allprojects" className="btn-secondary inline-flex items-center gap-2">
          View More Projects
        </a>
      </div>
    </section>
  )
}
