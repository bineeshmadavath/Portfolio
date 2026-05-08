
import { Link } from 'react-router-dom';
import heroImage from '../../Thumbnail-Greeneye.png';

export default function GreenEye() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-24 bg-white rounded-[20px]">
      {/* Header / Back Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-green-700 transition-colors group"
        >
          <iconify-icon icon="solar:arrow-left-linear" width="18" height="18" className="group-hover:-translate-x-1 transition-transform"></iconify-icon>
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-green-50 text-green-700 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
            UX Case Study
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight">
            Green Eye<br />
            Civic Engagement Platform
          </h1>
          <p className="text-lg lg:text-xl text-neutral-500 max-w-xl">
            Empowering citizens to report littering, track environmental activities, and access educational resources for a cleaner community.
          </p>
        </div>
        {/* Hero Mockup */}
        <div className="flex-1 w-full relative">
          <div className="bg-neutral-100 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden group aspect-[16/9]">
            <img
              src={heroImage}
              alt="Green Eye Platform Mockup"
              className="w-full h-full object-cover block scale-110 transition-transform duration-700 group-hover:scale-[1.21]"
            />
          </div>
        </div>
      </div>

      {/* Project Meta — full-width single column below hero image */}
      <div className="max-w-6xl mx-auto px-6 pb-12 border-b border-neutral-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 lg:p-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Role</div>
              <div className="text-sm text-neutral-500">UX/Product Designer</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Tools</div>
              <div className="text-sm text-neutral-500">Figma, React</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Timeline</div>
              <div className="text-sm text-neutral-500">4 Weeks</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 shrink-0">
              <iconify-icon icon="solar:devices-linear" width="20"></iconify-icon>
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900">Project Type</div>
              <div className="text-sm text-neutral-500">Civic Tech / Sustainability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Project Overview & User Research */}
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>01</span> PROJECT OVERVIEW
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Green Eye is a community-driven web application designed to empower citizens to report littering, track environmental activities, and access educational resources. The platform aims to foster civic engagement, reward positive actions, and support local environmental initiatives.
          </p>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>02</span> USER RESEARCH
          </h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            User research included interviews and surveys with local residents, environmental volunteers, and municipal staff. Key insights were gathered on motivations, barriers, and technology usage patterns.
          </p>
        </div>
        {/* Pain Points & Persona */}
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>03</span> PAIN POINTS
          </h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-8 space-y-2">
            <li>Lack of awareness about how to report littering</li>
            <li>Difficulty tracking personal environmental impact</li>
            <li>Limited incentives for community participation</li>
            <li>Accessibility barriers for older adults and non-tech-savvy users</li>
          </ul>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>04</span> PERSONA
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-2">
            <div className="font-semibold text-neutral-900">Name: <span className="font-normal">Priya Nair</span></div>
            <div className="font-semibold text-neutral-900">Age: <span className="font-normal">32</span></div>
            <div className="font-semibold text-neutral-900">Occupation: <span className="font-normal">School Teacher</span></div>
            <div className="font-semibold text-neutral-900">Goals: <span className="font-normal">Keep her neighborhood clean, educate students about sustainability, easily report issues</span></div>
            <div className="font-semibold text-neutral-900">Frustrations: <span className="font-normal">Complicated reporting processes, lack of feedback after reporting, inaccessible digital tools</span></div>
          </div>
        </div>
      </div>

      {/* User Journey Map */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
          <span>05</span> USER JOURNEY MAP
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-green-200 rounded-xl text-sm">
            <thead className="bg-green-50">
              <tr>
                <th className="px-3 py-2 border-b border-green-200 text-left">Stage</th>
                <th className="px-3 py-2 border-b border-green-200 text-left">Action</th>
                <th className="px-3 py-2 border-b border-green-200 text-left">Emotion</th>
                <th className="px-3 py-2 border-b border-green-200 text-left">Opportunity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b border-green-100">Awareness</td>
                <td className="px-3 py-2 border-b border-green-100">Learns about app</td>
                <td className="px-3 py-2 border-b border-green-100">Curious</td>
                <td className="px-3 py-2 border-b border-green-100">Social media campaigns</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-green-100">Onboarding</td>
                <td className="px-3 py-2 border-b border-green-100">Signs up, explores</td>
                <td className="px-3 py-2 border-b border-green-100">Hopeful</td>
                <td className="px-3 py-2 border-b border-green-100">Simple onboarding, tips</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-green-100">Reporting</td>
                <td className="px-3 py-2 border-b border-green-100">Submits litter report</td>
                <td className="px-3 py-2 border-b border-green-100">Empowered</td>
                <td className="px-3 py-2 border-b border-green-100">Fast, photo-based reporting</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-green-100">Tracking</td>
                <td className="px-3 py-2 border-b border-green-100">Views activities</td>
                <td className="px-3 py-2 border-b border-green-100">Motivated</td>
                <td className="px-3 py-2 border-b border-green-100">Gamified rewards</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Learning</td>
                <td className="px-3 py-2">Reads articles</td>
                <td className="px-3 py-2">Inspired</td>
                <td className="px-3 py-2">Curated educational content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Usability Findings, Mockups, Accessibility, Takeaways */}
      <div className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>06</span> USABILITY FINDINGS
          </h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-8 space-y-2">
            <li>Users preferred a single-tap report submission</li>
            <li>Visual feedback (e.g., progress bars, confirmation screens) increased engagement</li>
            <li>Some users struggled with map-based location selection</li>
            <li>Accessibility improvements needed for color contrast and text size</li>
          </ul>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>07</span> LOW-FI & HI-FI MOCKUPS
          </h2>
          <p className="text-neutral-700 italic mb-4">Black-and-white wireframes and colorful, detailed UI mockups created in Figma or on paper, showing layout and navigation. (Attach images or Figma links here.)</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>08</span> ACCESSIBILITY CONSIDERATIONS
          </h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-8 space-y-2">
            <li>Sufficient color contrast for text and buttons</li>
            <li>Alt text for all images and icons</li>
            <li>Keyboard navigability for all interactive elements</li>
            <li>Scalable text and responsive layouts</li>
          </ul>
          <h2 className="text-sm font-bold text-green-700 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>09</span> TAKEAWAYS & NEXT STEPS
          </h2>
          <ul className="list-disc pl-6 text-neutral-700 space-y-2">
            <li>Community engagement is key to sustained usage</li>
            <li>Gamification and rewards drive participation</li>
            <li>Next steps: Launch pilot in more neighborhoods, integrate with local government systems, and conduct further accessibility testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
