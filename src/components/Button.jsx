import { clsx } from 'clsx'

export default function Button({ children, variant = 'primary', className, icon, ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm px-6 py-3"
  
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900 shadow-sm",
    secondary: "bg-white text-neutral-900 hover:bg-neutral-50 border border-neutral-200 focus:ring-neutral-900/50 shadow-sm",
    ghost: "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-900/50"
  }

  return (
    <button 
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
      {icon && <iconify-icon icon={icon} width="18" height="18"></iconify-icon>}
    </button>
  )
}