export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-8 max-w-7xl mx-auto gap-6">
        <div className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant text-center md:text-left">
          © {new Date().getFullYear()} Inshaf Rajaaei. Built for Scalability.
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <a className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com/in/inshafrmnaazir/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/InshafRajaaei" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-on-surface-variant hover:text-primary transition-colors" href="mailto:inshafrmnaazir@gmail.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}
