import { Link } from 'react-router-dom'
import Button from '../components/Button'
import heroImage from '../../heroimage-physiotherapy.png'

export default function PhysioBooking() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-24 bg-white">
      {/* Header / Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-violet-600 transition-colors group"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="18" height="18" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16 border-b border-neutral-100">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-violet-50 text-violet-600 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
            UX Case Study
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight">
            Rewake Physio & Rehab<br />
            Appointment Platform
          </h1>
          <p className="text-lg lg:text-xl text-neutral-500 mb-10 max-w-xl">
            Simplifying physiotherapy appointment booking for patients and streamlining operations for clinics.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600">
                <iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">Role</div>
                <div className="text-sm text-neutral-500">UX Designer</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600">
                <iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">Tools</div>
                <div className="text-sm text-neutral-500">Figma, FigJam</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600">
                <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">Timeline</div>
                <div className="text-sm text-neutral-500">4 Weeks</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600">
                <iconify-icon icon="solar:devices-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">Project Type</div>
                <div className="text-sm text-neutral-500">Web Application</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Mockup */}
        <div className="flex-1 w-full relative">
          <div className="bg-neutral-100 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden group">
            <img 
              src={heroImage} 
              alt="Rewake Physio Appointment Platform Mockup" 
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]" 
            />
          </div>
        </div>
      </div>

      {/* 01 & 02 Sections */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* 01 THE PROBLEM */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>01</span> THE PROBLEM
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Rewake Physio and Rehab relied on manual scheduling, calls and spreadsheets which led to inefficiencies and a poor experience for both patients and staff.
          </p>
          <ul className="space-y-4">
            {[
              "Double bookings and scheduling conflicts",
              "High administrative workload",
              "No real-time visibility of availability",
              "Poor patient experience and communication",
              "High no-shows and manual follow-ups"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <iconify-icon icon="solar:close-square-bold" width="14"></iconify-icon>
                </div>
                <span className="text-sm text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 02 PROJECT GOALS */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>02</span> PROJECT GOALS
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
                <iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
              </div>
              <div>
                <div className="font-bold text-emerald-600 text-sm mb-1">Business Goal</div>
                <div className="text-sm text-neutral-600">Increase appointment booking conversion and improve operational efficiency.</div>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                <iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
              </div>
              <div>
                <div className="font-bold text-blue-600 text-sm mb-1">User Goal</div>
                <div className="text-sm text-neutral-600">Enable patients to book appointments quickly, easily and with confidence.</div>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-violet-500 flex-shrink-0">
                <iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
              </div>
              <div>
                <div className="font-bold text-violet-600 text-sm mb-1">Efficiency Goal</div>
                <div className="text-sm text-neutral-600">Reduce no-shows, manual errors and administrative workload.</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 03 USERS & STAKEHOLDERS */}
      <div className="max-w-6xl mx-auto px-6 pb-20 border-b border-neutral-100">
        <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-8 flex items-center gap-2">
          <span>03</span> USERS & STAKEHOLDERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 flex-shrink-0">
               <iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Patients</div>
              <div className="text-sm text-neutral-500">Individuals seeking physiotherapy treatment and easy booking.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
               <iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Admin Staff</div>
              <div className="text-sm text-neutral-500">Manage bookings, communicate and handle day-to-day operations.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center text-violet-500 flex-shrink-0">
               <iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Physiotherapists</div>
              <div className="text-sm text-neutral-500">Need structured schedules and availability management.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
               <iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
            </div>
            <div>
              <div className="font-bold text-neutral-900 text-sm mb-1">Clinic Management</div>
              <div className="text-sm text-neutral-500">Oversees operations, reports and business growth.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 04 & 05 Sections */}
      <div className="max-w-6xl mx-auto px-6 py-24 border-b border-neutral-100 flex flex-col gap-24">
        
        {/* 04 THE SOLUTION */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>04</span> THE SOLUTION
          </h2>
          <p className="text-neutral-600 mb-10 leading-relaxed max-w-3xl">
            A centralized, role-based platform that automates slot management, improves booking accuracy and enables real-time communication.
          </p>
          
          {/* Conceptual Diagram */}
          <div className="relative flex items-center justify-center p-8 bg-neutral-50 rounded-2xl border border-neutral-100 max-w-4xl mx-auto">
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Connecting lines - simplified for HTML layout */}
                <div className="w-full h-px bg-neutral-200 absolute top-1/2 -translate-y-1/2 border-dashed border-t-2 border-neutral-200"></div>
                <div className="h-full w-px bg-neutral-200 absolute left-1/2 -translate-x-1/2 border-dashed border-l-2 border-neutral-200"></div>
             </div>
             
             <div className="relative z-10 w-full h-64 flex flex-col items-center justify-between">
                <div className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium shadow-sm flex items-center gap-2">
                   <iconify-icon icon="solar:clock-circle-linear" className="text-emerald-500"></iconify-icon> Real-time Availability
                </div>
                
                <div className="w-full flex justify-between">
                   <div className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium shadow-sm flex items-center gap-2">
                     <iconify-icon icon="solar:user-check-linear" className="text-blue-500"></iconify-icon> Patient Booking
                   </div>
                   <div className="w-16 h-16 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30 text-white">
                      <iconify-icon icon="solar:calendar-bold" width="32"></iconify-icon>
                   </div>
                   <div className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium shadow-sm flex items-center gap-2">
                     <iconify-icon icon="solar:settings-bold" className="text-violet-500"></iconify-icon> Admin Dashboard
                   </div>
                </div>
                
                <div className="w-full flex justify-around px-8 mt-4">
                   <div className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium shadow-sm flex items-center gap-2">
                     <iconify-icon icon="logos:whatsapp-icon"></iconify-icon> WhatsApp Confirm
                   </div>
                   <div className="px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium shadow-sm flex items-center gap-2">
                     <iconify-icon icon="solar:document-text-linear" className="text-orange-500"></iconify-icon> Reports
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* 05 KEY FEATURES */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>05</span> KEY FEATURES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'solar:calendar-add-linear', title: '3-Step Booking Flow', color: 'text-violet-500' },
              { icon: 'solar:clock-circle-linear', title: 'Real-time Slot Availability', color: 'text-emerald-500' },
              { icon: 'solar:widget-5-linear', title: 'Admin Booking Dashboard', color: 'text-blue-500' },
              { icon: 'solar:magnifer-linear', title: 'Search & Filters for Bookings', color: 'text-violet-500' },
              { icon: 'solar:pen-linear', title: 'Update / Edit / Delete Bookings', color: 'text-orange-500' },
              { icon: 'logos:whatsapp-icon', title: 'WhatsApp Confirmations', color: '' },
              { icon: 'vscode-icons:file-type-excel', title: 'Excel Export Reports', color: '' },
              { icon: 'solar:user-id-linear', title: 'Physiotherapist Profile Mgmt', color: 'text-blue-500' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`mb-4 text-4xl ${feature.color}`}>
                  <iconify-icon icon={feature.icon}></iconify-icon>
                </div>
                <div className="text-sm font-bold text-neutral-800 leading-snug">{feature.title}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 06 & 07 Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-b border-neutral-100 flex flex-col lg:flex-row gap-16">
        
        {/* 06 USER JOURNEY */}
        <div className="lg:w-1/2">
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-10 flex items-center gap-2">
            <span>06</span> USER JOURNEY
          </h2>
          
          <div className="mb-12">
            <h3 className="text-emerald-600 font-bold mb-6">Patient Booking Journey</h3>
            <div className="flex justify-between items-start relative">
              <div className="absolute top-6 left-10 right-10 h-0 border-t-2 border-dashed border-neutral-200 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                <div className="w-12 h-12 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 mb-3">
                  <iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">1. Select Date & Physio</div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                <div className="w-12 h-12 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 mb-3">
                  <iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">2. Choose Available Slot</div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                <div className="w-12 h-12 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-500 mb-3">
                  <iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">3. Enter Details</div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/4">
                <div className="w-12 h-12 bg-emerald-500 border-2 border-emerald-500 rounded-full flex items-center justify-center text-white mb-3 shadow-md shadow-emerald-500/20">
                  <iconify-icon icon="solar:check-read-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">4. Confirmation</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-blue-600 font-bold mb-6">Admin Management Journey</h3>
            <div className="flex justify-between items-start relative">
              <div className="absolute top-6 left-6 right-6 h-0 border-t-2 border-dashed border-neutral-200 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/5">
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 mb-3">
                  <iconify-icon icon="solar:lock-password-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">1. Login</div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/5">
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 mb-3">
                  <iconify-icon icon="solar:list-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">2. View Bookings</div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/5">
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 mb-3">
                  <iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">3. Filter</div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center w-1/5">
                <div className="w-12 h-12 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 mb-3">
                  <iconify-icon icon="solar:pen-linear" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">4. Update</div>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center w-1/5">
                <div className="w-12 h-12 bg-white border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 mb-3">
                  <iconify-icon icon="logos:whatsapp-icon" width="24"></iconify-icon>
                </div>
                <div className="text-xs font-medium text-neutral-600">5. Notify</div>
              </div>
            </div>
          </div>

        </div>

        {/* 07 ADMIN DASHBOARD PREVIEW */}
        <div className="lg:w-1/2">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase flex items-center gap-2">
              <span>07</span> ADMIN DASHBOARD PREVIEW
            </h2>
            <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
              <div className="w-6 h-6 bg-neutral-200 rounded-full overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="Admin" className="w-full h-full object-cover" />
              </div>
              Admin User
              <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
            </div>
          </div>
          
          <div className="aspect-[4/3] bg-neutral-100 rounded-xl border border-neutral-200 shadow-sm overflow-hidden flex items-center justify-center relative">
            {/* Dashboard Placeholder */}
            <div className="absolute inset-0 bg-neutral-50 flex flex-col">
              {/* Header */}
              <div className="h-12 bg-white border-b border-neutral-200 flex items-center px-4 justify-between">
                <div className="flex gap-2 text-neutral-400">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="font-medium text-neutral-500 text-sm flex items-center gap-2">
                   <iconify-icon icon="solar:shield-user-bold" className="text-violet-500"></iconify-icon> Dashboard Preview
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center text-neutral-400 flex-col gap-3">
                 <iconify-icon icon="solar:monitor-camera-linear" className="text-6xl text-neutral-300"></iconify-icon>
                 <span className="font-medium text-sm">Dashboard Interface Placeholder</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 08, 09, 10 Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 border-b border-neutral-100 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        
        {/* 08 UX & DESIGN DECISIONS */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-8 flex items-center gap-2">
            <span>08</span> UX & DESIGN DECISIONS
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <iconify-icon icon="solar:routing-2-linear" className="text-emerald-500 text-2xl flex-shrink-0 mt-1"></iconify-icon>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">Guided Booking Flow</div>
                <div className="text-xs text-neutral-600">A simple 3-step flow reduces cognitive load and improves booking completion rate.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <iconify-icon icon="solar:clock-circle-linear" className="text-blue-500 text-2xl flex-shrink-0 mt-1"></iconify-icon>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">Real-time Availability</div>
                <div className="text-xs text-neutral-600">Shows only valid slots to prevent double bookings and build user trust.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <iconify-icon icon="solar:widget-5-linear" className="text-violet-500 text-2xl flex-shrink-0 mt-1"></iconify-icon>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">Admin Dashboard</div>
                <div className="text-xs text-neutral-600">Centralized control for quick actions, better visibility and faster operations.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <iconify-icon icon="logos:whatsapp-icon" className="text-2xl flex-shrink-0 mt-1"></iconify-icon>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">WhatsApp Integration</div>
                <div className="text-xs text-neutral-600">Leverages a familiar channel to improve confirmation and reduce no-shows.</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <iconify-icon icon="solar:lock-keyhole-linear" className="text-orange-500 text-2xl flex-shrink-0 mt-1"></iconify-icon>
              <div>
                <div className="font-bold text-neutral-900 text-sm mb-1">Role-based Access</div>
                <div className="text-xs text-neutral-600">Ensures patient data privacy and secure access to admin functionalities.</div>
              </div>
            </div>
          </div>
        </div>

        {/* 09 IMPACT */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-8 flex items-center gap-2">
            <span>09</span> IMPACT
          </h2>
          <p className="text-sm text-neutral-600 mb-6">The platform is designed to create measurable impact across users and business operations.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
              <iconify-icon icon="solar:trend-up-square-linear" className="text-emerald-500 text-3xl mb-2"></iconify-icon>
              <div className="font-bold text-emerald-800 text-sm mb-1">Higher Booking Conversion</div>
              <div className="text-xs text-emerald-700/80">Expected increase with self-service booking</div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <iconify-icon icon="solar:clock-circle-linear" className="text-blue-500 text-3xl mb-2"></iconify-icon>
              <div className="font-bold text-blue-800 text-sm mb-1">Reduced Admin Workload</div>
              <div className="text-xs text-blue-700/80">Less manual scheduling & follow-ups</div>
            </div>
            <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
              <iconify-icon icon="solar:graph-down-linear" className="text-violet-500 text-3xl mb-2"></iconify-icon>
              <div className="font-bold text-violet-800 text-sm mb-1">Fewer No-Shows</div>
              <div className="text-xs text-violet-700/80">Quick confirmations & reminders via WhatsApp</div>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <iconify-icon icon="solar:chart-square-linear" className="text-orange-500 text-3xl mb-2"></iconify-icon>
              <div className="font-bold text-orange-800 text-sm mb-1">Better Operational Visibility</div>
              <div className="text-xs text-orange-700/80">Real-time data and exportable reports</div>
            </div>
          </div>
        </div>

        {/* 10 FUTURE ENHANCEMENTS */}
        <div>
          <h2 className="text-sm font-bold text-violet-600 tracking-wider uppercase mb-8 flex items-center gap-2">
            <span>10</span> FUTURE ENHANCEMENTS
          </h2>
          <div className="space-y-3">
            {[
              "Full slot management (block/unblock, custom slots)",
              "Extended physiotherapist management (edit & remove)",
              "Automated reminders and follow-up notifications",
              "Integrated contact form backend",
              "Role & permission management for larger teams",
              "Advanced analytics and reporting dashboard"
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100 group hover:bg-neutral-100 transition-colors cursor-default">
                <span className="text-xs font-medium text-neutral-700">{item}</span>
                <iconify-icon icon="solar:alt-arrow-right-linear" className="text-neutral-400 group-hover:text-violet-500 transition-colors"></iconify-icon>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-violet-50 border border-violet-100 rounded-2xl p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-violet-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30">
            <iconify-icon icon="solar:heart-bold" width="28"></iconify-icon>
          </div>
          <div>
            <h3 className="text-lg font-bold text-violet-900 mb-2">Key Takeaway</h3>
            <p className="text-sm text-violet-800/80 leading-relaxed">
              This project shows how user-centered design and automation can transform a traditionally manual process into a seamless, efficient and delightful experience for both patients and clinic staff.
            </p>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 border border-neutral-100 rounded-2xl p-8 relative">
          <iconify-icon icon="solar:quote-left-bold" className="absolute top-6 left-6 text-4xl text-neutral-200"></iconify-icon>
          <iconify-icon icon="solar:quote-right-bold" className="absolute bottom-6 right-6 text-4xl text-neutral-200"></iconify-icon>
          <div className="relative z-10 h-full flex items-center justify-center px-8 text-center">
            <p className="text-lg font-medium text-neutral-700 italic">
              "Design is not just what it looks like, it's how it works and how it helps people."
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}