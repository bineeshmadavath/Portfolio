import { useState } from 'react'
import Button from '../components/Button'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-12 max-w-4xl mx-auto pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
            Let's build something great.
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            I'm always open to discussing new opportunities, UX strategies, or consulting on complex enterprise workflows. Feel free to reach out directly.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="mailto:bineesh.m@gmail.com" className="group flex items-center gap-4 text-neutral-600 hover:text-neutral-900 transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-50 transition-colors shadow-sm">
                <iconify-icon icon="solar:letter-linear" width="20" height="20"></iconify-icon>
              </div>
              <span className="text-lg font-medium">bineesh.m@gmail.com</span>
            </a>

            <a href="tel:+919496750372" className="group flex items-center gap-4 text-neutral-600 hover:text-neutral-900 transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-50 transition-colors shadow-sm">
                <iconify-icon icon="solar:phone-linear" width="20" height="20"></iconify-icon>
              </div>
              <span className="text-lg font-medium">+91 9496750372</span>
            </a>
            
            <a href="#" className="group flex items-center gap-4 text-neutral-600 hover:text-neutral-900 transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-50 transition-colors shadow-sm">
                <iconify-icon icon="simple-icons:linkedin" width="18" height="18"></iconify-icon>
              </div>
              <span className="text-lg font-medium">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 shadow-sm p-6 md:p-8 rounded-3xl">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <iconify-icon icon="solar:check-circle-linear" width="32" height="32"></iconify-icon>
              </div>
              <h3 className="text-2xl font-medium text-neutral-900 mb-2">Message sent!</h3>
              <p className="text-neutral-600">Thanks for reaching out. I'll get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700 ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}