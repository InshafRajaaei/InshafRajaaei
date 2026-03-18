import skillsData from '../data/skills.json'

export default function Skills() {
  const skillCategories = Object.values(skillsData.skills)

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={category.category}
            className="card card-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold mb-6 text-accent">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center text-text-secondary hover:text-accent transition-colors group cursor-default"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
