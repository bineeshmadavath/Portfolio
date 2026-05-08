export default function Resume() {
  const competencies = [
    {
      title: 'UX Strategy',
      items: 'User Research, Information Architecture, Usability Testing, Wireframing, & Rapid Prototyping.'
    },
    {
      title: 'Product Design',
      items: 'Design Systems, Human-in-the-loop (HITL) Workflows, & UX Guidelines.'
    },
    {
      title: 'Technical Integration',
      items: 'Front-end Dev (HTML5, CSS3, Sass, JS, Angular, React, Tailwind), WCAG Compliance.'
    },
    {
      title: 'AI-Assisted Design',
      items: 'AI-augmented prototyping and LLM-assisted coding.'
    }
  ]

  const tools = [
    {
      title: 'Design',
      items: ['Figma', 'Adobe Creative Suite', 'Canva', 'InVision', 'Miro', 'FigJam', 'Whimsical']
    },
    {
      title: 'Development',
      items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'jQuery', 'Bootstrap', 'Ionic', 'Sass', 'VS Code', 'Git']
    },
    {
      title: 'AI Ecosystem',
      items: ['Gemini', 'ChatGPT', 'GitHub Copilot', 'Firebase Studio', 'Google AI Studio', 'Lovable', 'Figma Make', 'MCP Server']
    },
    {
      title: 'Product Management',
      items: ['Jira', 'Azure DevOps', 'Confluence']
    }
  ]

  const ustRoles = [
    {
      project: 'SmartOps / SmartVision',
      tag: 'Intelligent Document Processing',
      period: 'Sept 2020 – Present',
      summary:
        'UST SmartOps is an intelligent automation platform that combines generative AI, human-in-the-loop processes, and autonomous agents, delivering unprecedented operational efficiency, employee productivity, and cost takeout across enterprise IT systems.',
      contributions: [
        { label: 'UX Transformation', text: 'Re-architected the document extraction and validation interface, reducing "Human-in-the-loop" processing time by 25% through optimized review screens and advanced filtering.' },
        { label: 'Scalable Design Systems', text: 'Engineered a comprehensive component library in Figma, reducing design-to-development handoff time by 40% and ensuring 100% UI consistency across the product suite.' },
        { label: 'Accessibility & UX Research', text: 'Conducted iterative usability testing with stakeholders, leading to a 15% increase in user task completion rates by aligning with WCAG 2.1 AA standards.' },
        { label: 'Tech-Design Bridge', text: 'Provided direct HTML/CSS/Angular support, resolving 90% of front-end UI bugs during the sprint cycle and improving implementation fidelity.' }
      ]
    },
    {
      project: 'MBO Partners Marketplace',
      tag: 'Marketplace Platform',
      period: 'March 2020 – Sept 2020',
      summary:
        "MBO Partners' white-glove network delivers rapid matching, fixed pricing, and proven ROI by connecting companies with 130,000+ vetted Fortune 500 professionals across 112+ specialties.",
      contributions: [
        { label: 'UI Audit & Alignment', text: 'Performed comprehensive UI audits that identified and resolved over 50+ visual discrepancies, aligning the production app with established brand standards.' },
        { label: 'Centralized Documentation', text: 'Developed a centralized style guide and UX flow library in Whimsical, decreasing onboarding time for new developers by 30%.' }
      ]
    },
    {
      project: 'Princess Cruises',
      tag: 'Hospitality & Travel',
      period: 'Jan 2013 – March 2020',
      summary:
        'Facilitated operations for an award-winning cruise line that provides immersive travel experiences, personalized service, and world-class entertainment across 330+ global destinations.',
      contributions: [
        { label: 'Princess@Sea', text: 'Designed a multilingual, responsive Drupal-based platform, achieving a 95% positive user sentiment rating across diverse guest demographics and devices.' },
        { label: 'Video on Demand (VOD)', text: 'Developed a TV-based UI using React, improving remote-based navigation speed by 20% through simplified Information Architecture.' },
        { label: 'Yield Management System', text: 'Streamlined complex data visualization for inventory and pricing reports, enabling stakeholders to make pricing decisions 15% faster through intuitive dashboard design.' }
      ]
    }
  ]

  const earlier = [
    { role: 'Senior Graphic Artist', company: 'Greencraft IT Solutions', period: 'May 2011 – Dec 2012' },
    { role: 'Creative Head', company: 'Buglebees Design Studios', period: 'Jan 2008 – April 2011' },
    { role: 'Senior Artist / Animator', company: 'Sherston Educational Software', period: 'July 2004 – Jan 2008' },
    { role: 'Flash Designer / Animator', company: 'Tekathlon Systems India', period: 'Feb 2002 – June 2004' },
    { role: 'Graphic Designer', company: 'Digi Sign Pvt. Ltd.', period: 'March 2000 – Jan 2002' }
  ]

  const education = [
    'Google UX Design Professional Certificate (Google)',
    'Claude Code in Action (Anthropic Education)',
    'Diploma in Electronics Engineering (Govt. Polytechnic Tirurangadi)',
    'Diploma in Designing and Animation (Domain Infotech Manjeri)'
  ]

  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-20 bg-white/80 rounded-[20px] shadow-sm p-10">
      {/* Header */}
      <div className="pt-8 pb-10 border-b border-neutral-200">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-3">
              Bineesh Madavath
            </h1>
            <p className="text-lg text-neutral-600">
              Product Designer · UX Strategist · UI Developer
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                India
              </span>
              <a href="tel:+919496750372" className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors">
                <iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                +91 9496750372
              </a>
              <a href="mailto:bineesh.m@gmail.com" className="inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors">
                <iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                bineesh.m@gmail.com
              </a>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition-colors"
          >
            <iconify-icon icon="solar:printer-linear" width="18"></iconify-icon>
            Print / Save PDF
          </button>
        </div>
      </div>

      {/* Summary */}
      <Section number="01" title="Professional Summary">
        <p className="text-neutral-600 leading-relaxed">
          Strategic Product Design Lead with over 15 years of total IT experience, including 8+ years specializing in UX/UI design for enterprise-scale digital transformation. Expert in human-centered design, accessibility (WCAG), and AI-augmented workflows (Gemini, MCP, Figma Make). Unique hybrid background in UI Development and Design Systems, enabling seamless collaboration between creative vision and engineering execution. Proven success in optimizing complex workflows for Intelligent Document Processing (IDP), Hospitality, and Marketplace platforms.
        </p>
      </Section>

      {/* Competencies */}
      <Section number="02" title="Key Competencies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {competencies.map((c) => (
            <div key={c.title} className="bg-white border border-neutral-200 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-violet-600 uppercase tracking-wider mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{c.items}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section number="03" title="Tools & Technologies">
        <div className="flex flex-col gap-6">
          {tools.map((t) => (
            <div key={t.title}>
              <h3 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">
                {t.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section number="04" title="Professional Experience">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-xl font-medium text-neutral-900">
              UST <span className="text-neutral-400 font-normal">— Product Design Lead – 1</span>
            </h3>
            <span className="text-sm text-neutral-500 font-medium">January 2013 – Present</span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {ustRoles.map((role) => (
            <div
              key={role.project}
              className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">{role.project}</h4>
                  <span className="text-xs text-violet-600 font-semibold uppercase tracking-wider">
                    {role.tag}
                  </span>
                </div>
                <span className="text-sm text-neutral-500 font-medium">{role.period}</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mt-3 mb-5">
                {role.summary}
              </p>
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                Role & Contributions
              </div>
              <ul className="flex flex-col gap-3">
                {role.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600">
                      <iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon>
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      <span className="font-medium text-neutral-900">{c.label}:</span> {c.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Earlier Experience */}
      <Section number="05" title="Earlier Experience">
        <div className="flex flex-col divide-y divide-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
          {earlier.map((e, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-5 py-4 bg-white"
            >
              <div>
                <div className="text-sm font-medium text-neutral-900">{e.role}</div>
                <div className="text-sm text-neutral-500">{e.company}</div>
              </div>
              <span className="text-sm text-neutral-500 font-medium">{e.period}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section number="06" title="Education & Certifications">
        <ul className="flex flex-col gap-3">
          {education.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
                <iconify-icon icon="solar:diploma-linear" width="14"></iconify-icon>
              </div>
              <span className="text-sm text-neutral-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}

function Section({ number, title, children }) {
  return (
    <section className="pt-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs font-bold text-violet-600 tracking-wider">{number}</span>
        <span className="h-px w-6 bg-neutral-300"></span>
        <h2 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">{title}</h2>
      </div>
      {children}
    </section>
  )
}
