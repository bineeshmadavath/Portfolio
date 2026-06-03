import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function PhysioBooking() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-16">
      {/* Back navigation */}
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-10 group"
      >
        <iconify-icon icon="solar:arrow-left-linear" width="18" height="18" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
        Back to Work
      </Link>

      {/* Hero Section */}
      <div className="max-w-4xl mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {['UX Research', 'Healthcare', 'SaaS', 'Prototyping'].map(tag => (
            <span key={tag} className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200/60">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          Modernizing Healthcare: A Frictionless Physiotherapy Booking System
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
          Designing an intuitive, end-to-end patient portal and clinic management dashboard that reduced appointment no-shows by 40% while streamlining practitioner schedules.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-100 rounded-3xl overflow-hidden mb-16 border border-neutral-200">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173ff9e5e3c?w=1600&q=80" 
          alt="Healthcare tech interface context" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-neutral-200 pb-16">
        <div>
          <h3 className="text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wider">Role</h3>
          <p className="text-base font-medium text-neutral-900">Lead UX/UI Designer</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wider">Timeline</h3>
          <p className="text-base font-medium text-neutral-900">6 Months</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wider">Platform</h3>
          <p className="text-base font-medium text-neutral-900">Web & Mobile Web</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wider">Deliverables</h3>
          <p className="text-base font-medium text-neutral-900">Journey Maps, Hi-Fi Prototypes, Component Library</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Col - Sticky Navigation/Context */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-4 border-l-2 border-neutral-100 pl-6">
            <a href="#problem" className="text-sm font-medium text-neutral-900 hover:text-black transition-colors">The Problem</a>
            <a href="#solution" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">The Solution</a>
            <a href="#impact" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">Impact & Results</a>
          </div>
        </div>

        {/* Right Col - Details */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          
          <section id="problem">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-6">The Problem</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Independent physiotherapy clinics were struggling with outdated, paper-based scheduling and clunky legacy software. This resulted in a high rate of patient no-shows, frustrating double-bookings, and hours of administrative overhead every week for the clinic staff.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Patients found the booking process confusing, often abandoning the online form to call the clinic directly, which further burdened front-desk operations.
            </p>
          </section>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
              alt="Data and dashboard wireframing" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <section id="solution">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-6">The Solution</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              We engineered a dual-sided platform tailored specifically for physiotherapy workflows. For patients, we created a frictionless, step-by-step mobile booking experience. For practitioners, we built a comprehensive web dashboard combining calendar management, patient history, and automated reminders.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-xl font-medium text-neutral-900 mb-3 flex items-center gap-2">
                  <iconify-icon icon="solar:calendar-date-linear" className="text-neutral-500"></iconify-icon>
                  Smart Patient Scheduling
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Replaced a cumbersome single-page form with a conversational UI flow. Patients can easily filter by treatment type, preferred practitioner, and available time slots. Added automated SMS and email reminders.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-xl font-medium text-neutral-900 mb-3 flex items-center gap-2">
                  <iconify-icon icon="solar:health-linear" className="text-neutral-500"></iconify-icon>
                  Practitioner Dashboard
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  A high-density calendar view allowing practitioners to quickly view their day at a glance. Integrated quick-actions for updating patient SOAP notes without breaking workflow.
                </p>
              </div>
            </div>
          </section>

          <section id="impact" className="border-t border-neutral-200 pt-16">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-8">Impact & Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">40%</span>
                <span className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Reduction in no-shows</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">12hr</span>
                <span className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Admin time saved/wk</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">3x</span>
                <span className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Faster booking flow</span>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* Next Project Nav */}
      <div className="mt-24 pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-medium text-neutral-900 mb-2">Ready to discuss your project?</h3>
          <p className="text-neutral-600">Let's solve complex problems together.</p>
        </div>
        <Link to="/contact">
          <Button variant="primary" icon="solar:letter-linear">
            Get in touch
          </Button>
        </Link>
      </div>

    </div>
  )
}