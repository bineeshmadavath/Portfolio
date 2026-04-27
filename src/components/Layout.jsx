import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background ambient gradients */}
      <div className="fixed top-0 inset-x-0 h-screen overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-black/[0.03] blur-[120px]" />
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-black/[0.02] blur-[100px]" />
      </div>

      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}