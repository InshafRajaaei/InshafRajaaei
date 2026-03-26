import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import certificatesData from '../data/certificates.json'

export default function Certificates() {
  const allCertificates = certificatesData.certificates
  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(allCertificates.length / itemsPerPage)
  const startIdx = currentPage * itemsPerPage
  const displayedCertificates = allCertificates.slice(startIdx, startIdx + itemsPerPage)

  const handlePrevious = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const goToPage = (pageNum) => {
    setCurrentPage(pageNum)
  }

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-8 mb-32 pt-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant block mb-2">
            Continuous Learning
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-on-surface mb-4">Certificates & Awards</h2>
        </div>
        <div className="text-sm text-on-surface-variant">
          Showing {startIdx + 1} to {Math.min(startIdx + itemsPerPage, allCertificates.length)} of {allCertificates.length}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {displayedCertificates.map((cert) => (
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

      {/* Navigation Controls */}
      <div className="flex items-center justify-between md:justify-center gap-4">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full border border-outline-variant/30 hover:bg-surface-container-high hover:border-primary/50 transition-all text-on-surface-variant hover:text-primary"
          title="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Page Dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentPage 
                  ? 'bg-primary w-8' 
                  : 'bg-outline-variant/50 hover:bg-outline-variant'
              }`}
              title={`Page ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 rounded-full border border-outline-variant/30 hover:bg-surface-container-high hover:border-primary/50 transition-all text-on-surface-variant hover:text-primary"
          title="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  )
}

