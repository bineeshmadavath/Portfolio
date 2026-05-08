import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { projects } from '../data/projects'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-12 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Hero Section */}
      <section className="pt-12 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Intro */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Strategic Product Design Lead
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Hi, I'm Bineesh.
            </h1>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              I am a Strategic Product Design Lead with over 15 years of total IT experience, including 8+ years specializing in UX/UI design for enterprise-scale digital transformation.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">
              My unique hybrid background in UI Development and Design Systems enables seamless collaboration between creative vision and engineering execution. I am an expert in human-centered design, accessibility (WCAG), and AI-augmented workflows.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed mb-10">
              I have a proven track record of optimizing complex workflows for Intelligent Document Processing (IDP), Hospitality, and Marketplace platforms, always ensuring products are intuitive, scalable, and technically sound.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button variant="primary" icon="solar:arrow-right-linear">
                  Let's Talk
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="secondary">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Design and tech workspace"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900">Selected Case Studies</h2>
          <Link to="/work" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
            See all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="border-t border-neutral-200 pt-16">
        <h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "solar:compass-square-linear",
              title: "UX Strategy",
              desc: "Deep user research, information architecture, usability testing, and rapid prototyping mapped to tangible business outcomes."
            },
            {
              icon: "solar:code-square-linear",
              title: "Technical Integration",
              desc: "Bringing designs to life with robust Front-end Dev skills (HTML5, CSS3, React, Angular, Tailwind) while maintaining strict WCAG compliance."
            },
            {
              icon: "solar:cpu-bold-duotone",
              title: "AI-Assisted Design",
              desc: "Pioneering the use of AI-augmented prototyping, LLM-assisted coding, and designing intuitive Human-in-the-loop (HITL) workflows."
            }
          ].map(item => (
            <div key={item.title} className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-neutral-200 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900">
                <iconify-icon icon={item.icon} width="24" height="24"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}