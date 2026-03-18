import { ExternalLink, Github } from 'lucide-react'
import projects from '../data/projects.json'

export default function AllProjects() {
  const allProjects = projects.projects

  return (
    <section id="allprojects" className="section-container bg-dark-light/50">
      <h2 className="section-title">All Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <div
            key={project.id}
            className="card card-hover group"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Project Image */}
            <div className="mb-6 overflow-hidden rounded-lg h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="mb-3 inline-block px-3 py-1 bg-accent/20 border border-accent rounded-full text-xs font-bold text-accent">
                FEATURED
              </div>
            )}

            {/* Content */}
            <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-text-secondary text-sm mb-4 line-clamp-2">
              {project.problem}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs font-medium text-accent">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-accent border-opacity-20">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-accent/10 hover:bg-accent/20 rounded text-accent text-sm transition-colors"
              >
                <Github size={14} /> Code
              </a>
              {project.demo !== "Proprietary - Internal Enterprise Tool" && (
                <a
                  href="#"
                  className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-accent/10 hover:bg-accent/20 rounded text-accent text-sm transition-colors"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
