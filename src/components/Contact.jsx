import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create a FormData object with your access key and form data
      const data = new FormData()
      data.append('access_key', '5bf925d8-8d0e-4ca4-be03-4c7a7636bbbe')
      data.append('name', formData.name)
      data.append('email', formData.email)
      data.append('subject', formData.subject)
      data.append('message', formData.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 md:px-8 mb-20 pt-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center">
          <span className="text-[0.75rem] uppercase tracking-[0.05em] font-['Inter'] text-primary block mb-4 font-bold">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6">
            Ready to scale?
          </h2>
          <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
            I'm currently available for specialized roles and freelance opportunities. Let's discuss how I can help bring structural integrity to your digital infrastructure.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={24} className="text-primary" />
              <div>
                <p className="text-sm text-on-surface-variant">Email</p>
                <a href="mailto:inshafrmnaazir@gmail.com" className="text-on-surface font-semibold hover:text-primary transition-colors">
                  inshafrmnaazir@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={24} className="text-primary" />
              <div>
                <p className="text-sm text-on-surface-variant">Alternative</p>
                <p className="text-on-surface font-semibold">
                  inshafrajaei@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-surface-container p-6 md:p-8 border border-outline-variant/20 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-on-surface-variant mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-sm text-on-surface placeholder-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-on-surface-variant mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-sm text-on-surface placeholder-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-on-surface-variant mb-2">
                SUBJECT
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-sm text-on-surface placeholder-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors"
                placeholder="Project Discussion"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-on-surface-variant mb-2">
                YOUR MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-surface-container-high border border-outline-variant/30 rounded-sm text-on-surface placeholder-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm text-green-400">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-sm text-red-400">
                Failed to send message. Please try again or email directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full primary-cta-gradient text-on-primary px-8 py-4 text-lg font-bold hover:brightness-110 disabled:opacity-50 transition-all inline-flex items-center justify-center gap-2 rounded-sm"
            >
              <Send size={24} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


