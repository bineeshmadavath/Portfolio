export default function About() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pt-8">
        
        {/* Left Column: Text */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
              Hi, I'm Bineesh.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              I am a Strategic Product Design Lead with over 15 years of total IT experience, including 8+ years specializing in UX/UI design for enterprise-scale digital transformation.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              My unique hybrid background in UI Development and Design Systems enables seamless collaboration between creative vision and engineering execution. I am an expert in human-centered design, accessibility (WCAG), and AI-augmented workflows.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              I have a proven track record of optimizing complex workflows for Intelligent Document Processing (IDP), Hospitality, and Marketplace platforms, always ensuring products are intuitive, scalable, and technically sound.
            </p>
          </div>

          <div className="h-px w-full bg-neutral-200 my-4" />

          {/* Experience Timeline */}
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Experience</h2>
            <div className="flex flex-col gap-8">
              {[
                {
                  role: "Product Design Lead - 1",
                  company: "UST",
                  period: "2013 — Present",
                  desc: "Led UX transformation for SmartOps (IDP), reducing HITL processing time by 25%. Engineered comprehensive Figma component libraries, resolved front-end UI bugs, and improved accessibility by aligning with WCAG 2.1 AA standards."
                },
                {
                  role: "UX/UI Consultant",
                  company: "Green Eye Case Study",
                  period: "2020 — 2021",
                  desc: "Led the end-to-end UX design of a civic engagement platform for environmental action. Conducted user research, designed reporting and reward workflows, and improved community participation through gamification and accessibility."
                },
                {
                  role: "Product Designer / UI Developer",
                  company: "Princess Cruises",
                  period: "2013 — 2020",
                  desc: "Designed Princess@Sea, a responsive platform reaching 95% positive user sentiment. Built TV-based VOD interfaces with React and streamlined Yield Management visualization dashboards."
                },
                {
                  role: "Senior Graphic Artist",
                  company: "Greencraft IT Solutions",
                  period: "2011 — 2012",
                  desc: "Drove creative direction and UI execution for early-stage digital products and marketing efforts."
                },
                {
                  role: "Creative Head",
                  company: "Buglebees Design Studios",
                  period: "2008 — 2011",
                  desc: "Led a design team producing interactive experiences, shaping the digital footprint for diverse regional clients."
                }
              ].map((job, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-8 group">
                  <div className="sm:w-32 flex-shrink-0 text-sm font-medium text-neutral-500 pt-1">
                    {job.period}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 group-hover:text-black transition-colors">{job.role}</h3>
                    <div className="text-sm text-neutral-500 mb-2 font-medium">{job.company}</div>
                    <p className="text-sm text-neutral-600 leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Image & Skills */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 relative">
            <img 
              src="/bineesh-profile-v2.png" 
              alt="Bineesh Profile" 
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wider">Design & Strategy</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Figma', 'Figma Make', 'Miro', 'FigJam', 'Whimsical', 'InVision', 'Adobe CC'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-700">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wider">Development & AI</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'Angular', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Sass', 'Gemini', 'GitHub Copilot', 'MCP Server'].map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-700">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wider">Certifications</h3>
            <ul className="text-sm text-neutral-600 flex flex-col gap-2">
              <li>• Google UX Design Professional Certificate</li>
              <li>• Claude Code in Action (Anthropic)</li>
              <li>• Diploma in Electronics Engineering</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}