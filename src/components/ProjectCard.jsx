import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link 
      to={project.link} 
      className="group relative flex flex-col gap-4 outline-none rounded-2xl p-3 hover:bg-white/30 transition-colors border border-transparent hover:border-neutral-200 hover:shadow-sm"
      onClick={(e) => {
        if(project.link === '#') e.preventDefault()
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200/50 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Icon */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20"></iconify-icon>
        </div>
      </div>
      
      <div className="flex flex-col px-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2 group-hover:text-black transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-medium text-neutral-600 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}