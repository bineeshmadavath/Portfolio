import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 pb-12">
      <div className="max-w-2xl mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
          Selected Case Studies
        </h1>
        <p className="text-lg text-neutral-600 leading-relaxed">
          A collection of my recent work focusing on user experience, interface design, and complex problem-solving across various industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}