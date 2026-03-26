import projectsData from '../data/projects.json'

export default function FeaturedProjects({ onShowAll }) {
  const featured = projectsData.projects.filter(p => p.featured)
  const mainProject = featured[0]
  const sideProjects = featured.slice(1, 3)

  return (
    <section id="projects" className="bg-surface-container-low py-24 mb-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-[#bbcabf] block mb-2">
              Featured Work
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white">Scalable Solutions</h2>
          </div>
          <button 
            onClick={onShowAll}
            className="text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            View All Projects <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Project Card */}
          {mainProject && (
            <div className="md:col-span-8 group cursor-pointer" onClick={() => window.open(mainProject.github, '_blank')}>
              <div className="bg-surface-container h-[500px] relative overflow-hidden flex flex-col justify-end p-8 border border-outline-variant/20 rounded-sm">
                <img 
                  alt={mainProject.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                  src={mainProject.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex gap-3 mb-4 flex-wrap">
                    {mainProject.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-surface-container-high border border-outline-variant/30 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">{mainProject.title}</h3>
                  <p className="text-on-surface-variant max-w-lg mb-6 leading-relaxed line-clamp-2">
                    {mainProject.problem}
                  </p>
                  <span className="material-symbols-outlined text-primary text-3xl group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Side Project Cards */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {sideProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-surface-container p-8 flex-1 border border-outline-variant/20 hover:bg-surface-bright/20 transition-colors group cursor-pointer rounded-sm"
                onClick={() => window.open(project.github, '_blank')}
              >
                <div className="mb-8">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">
                    {index === 0 ? 'database' : 'cloud_sync'}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-3">
                    {project.problem}
                  </p>
                </div>
                <span className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  Details <span className="material-symbols-outlined text-sm">open_in_new</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
