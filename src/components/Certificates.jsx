import certificatesData from '../data/certificates.json'

export default function Certificates({ onShowAll }) {
  const certificates = certificatesData.certificates.slice(0, 2)

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-8 mb-32 pt-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-[#bbcabf] block mb-2">
            Continuous Learning
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Certificates & Awards</h2>
        </div>
        <button 
          onClick={onShowAll}
          className="text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer"
        >
          View All Certificates <span className="material-symbols-outlined">north_east</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-surface-container p-8 flex flex-col border border-outline-variant/20 hover:border-primary/50 transition-colors group cursor-pointer rounded-sm"
            onClick={() => window.open(cert.url, '_blank')}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                  workspace_premium
                </span>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-on-surface-variant font-medium">{cert.issuer}</p>
              </div>
            </div>
            
            <div className="mb-8 space-y-1">
              <p className="text-sm text-[#bbcabf] font-mono tracking-wider">
                ISSUED: {cert.issued}
              </p>
              <p className="text-sm text-[#bbcabf] font-mono tracking-wider">
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
    </section>
  )
}
