import { Code, Brain, Cloud, CheckCircle } from 'lucide-react'
import servicesData from '../data/services.json'

const iconMap = {
  Code: Code,
  Brain: Brain,
  Cloud: Cloud,
  CheckCircle: CheckCircle,
}

export default function Services() {
  return (
    <section id="services" className="section-container bg-dark-light/50">
      <h2 className="section-title">What I Can Do For You</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {servicesData.services.map((service, index) => {
          const IconComponent = iconMap[service.icon]
          return (
            <div
              key={service.id}
              className="card card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <IconComponent size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mt-1">{service.title}</h3>
              </div>

              <p className="text-text-secondary mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-text-secondary group/item hover:text-accent transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
