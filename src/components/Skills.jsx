import skillsData from '../data/skills.json'

const iconMap = {
  frontend: 'web',
  backend: 'terminal',
  mobile: 'phone_iphone',
  ai_ml: 'psychology',
  devops: 'cloud_done',
  qa: 'bug_report',
  databases: 'storage',
  tools: 'build'
}

const labelMap = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  ai_ml: 'AI & ML',
  devops: 'DevOps',
  qa: 'QA',
  databases: 'Databases',
  tools: 'Tools'
}

export default function Skills() {
  const categories = Object.entries(skillsData.skills);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 mb-32 pt-12 mt-[-4rem]">
      <div className="text-center mb-16">
        <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant block mb-2">
          The Architecture
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-on-surface">Technical Authority</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(([key, data]) => (
          <div key={key} className="bg-surface-container p-6 flex flex-col items-center justify-center text-center gap-3 border border-outline-variant/10 hover:border-primary/40 transition-all rounded-sm">
            <span className="material-symbols-outlined text-primary text-3xl">
              {iconMap[key] || 'settings'}
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-on-surface">
              {labelMap[key] || key}
            </span>
            <p className="text-[10px] text-on-surface-variant">
              {data.skills.slice(0, 3).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
