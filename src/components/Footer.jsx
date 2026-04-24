export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-neutral-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © {currentYear} Bineesh Madavath. Designed & Built with React.
        </p>
        
        <div className="flex items-center gap-5 text-neutral-500">
          <a href="#" className="hover:text-neutral-900 transition-colors" aria-label="Twitter">
            <iconify-icon icon="simple-icons:x" width="18" height="18"></iconify-icon>
          </a>
          <a href="#" className="hover:text-neutral-900 transition-colors" aria-label="LinkedIn">
            <iconify-icon icon="simple-icons:linkedin" width="18" height="18"></iconify-icon>
          </a>
          <a href="#" className="hover:text-neutral-900 transition-colors" aria-label="GitHub">
            <iconify-icon icon="simple-icons:github" width="18" height="18"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  )
}