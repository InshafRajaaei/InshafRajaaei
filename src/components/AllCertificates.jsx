import { ExternalLink, Award } from 'lucide-react'
import certificatesData from '../data/certificates.json'

export default function AllCertificates() {
  const allCertificates = certificatesData.certificates

  return (
    <section id="allcertificates" className="bg-surface-container-low py-24 mb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-on-surface mb-16 text-center">All Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-surface-container p-6 md:p-8 flex flex-col border border-outline-variant/20 hover:border-primary/50 transition-colors group cursor-pointer rounded-sm"
              onClick={() => window.open(cert.url, '_blank')}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Award size={40} className="text-primary mb-4 block" />
                  <h3 className="text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-on-surface-variant text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="mb-8 space-y-1">
                <p className="text-xs text-on-surface-variant font-mono tracking-wider">
                  ISSUED: {cert.issued}
                </p>
                <p className="text-xs text-on-surface-variant font-mono tracking-wider">
                  ID: {cert.credentialId}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap mt-auto pt-6 border-t border-outline-variant/10">
                {cert.skills.map(skill => (
                  <span key={skill} className="bg-surface-container-high border border-outline-variant/30 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-on-surface">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
