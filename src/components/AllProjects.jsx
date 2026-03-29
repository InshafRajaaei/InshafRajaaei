import { ExternalLink, Github, Linkedin } from 'lucide-react'
import projects from '../data/projects.json'

export default function AllProjects() {
  const allProjects = projects.projects

  return (
    <section id="allprojects" className="bg-surface-container-low py-24 mb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-16 text-center">All Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-surface-container p-6 md:p-8 flex flex-col border border-outline-variant/20 hover:border-primary/50 transition-all group cursor-pointer rounded-sm"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Project Image */}
              <div className="mb-6 overflow-hidden rounded-sm h-48 relative group/img -mx-6 -mt-6 md:-mx-8 md:-mt-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="mb-3 inline-block px-3 py-1 bg-primary/20 border border-primary rounded-sm text-xs font-bold text-primary">
                  FEATURED
                </div>
              )}

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">
                {project.problem}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 border border-primary/30 rounded-sm text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded-sm text-xs font-medium text-primary">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-primary/20 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-primary/10 hover:bg-primary/20 rounded-sm text-primary text-sm transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.demo && project.demo !== "Proprietary - Internal Enterprise Tool" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-primary/10 hover:bg-primary/20 rounded-sm text-primary text-sm transition-colors"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
                {project.linkedin && (
                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-primary/10 hover:bg-primary/20 rounded-sm text-primary text-sm transition-colors"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
