import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'
import { projects } from '../data/projects'

export default function Home() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-12 animate-in fade-in duration-700 slide-in-from-bottom-4">
      {/* Hero Section */}
      <section className="pt-12 md:pt-24 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Strategic Product Design Lead
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
          Bridging the gap between creative vision and <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-400">engineering execution</span>.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 font-normal leading-relaxed mb-10 max-w-2xl">
          I'm Bineesh, a Product Designer & UI Developer with 15+ years of experience specializing in enterprise-scale digital transformation, AI-augmented workflows, and seamless technical integration.
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
      </section>

      {/* Selected Work Section */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900">Selected Work</h2>
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