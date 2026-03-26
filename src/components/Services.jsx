import servicesData from '../data/services.json'
import { Terminal, BrainCircuit, Cloud, CheckCircle, Check, Settings } from 'lucide-react'

const iconMap = {
  Code: Terminal,
  Brain: BrainCircuit,
  Cloud: Cloud,
  CheckCircle: CheckCircle
}

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 md:px-8 mb-32 pt-16">
      <div className="text-center mb-16">
        <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant block mb-2">
          What I Can Do
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-on-surface mb-4">Core Capabilities</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.services.map((service) => (
          <div key={service.id} className="bg-surface-container p-6 md:p-8 border border-outline-variant/20 hover:border-primary/40 transition-all group rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-primary bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                {(() => {
                  const Icon = iconMap[service.icon] || Settings;
                  return <Icon size={36} />;
                })()}
              </div>
              <h3 className="text-2xl font-bold text-on-surface">{service.title}</h3>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
