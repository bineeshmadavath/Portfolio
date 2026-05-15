import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'

import Contact from './pages/Contact'
import PhysioBooking from './pages/PhysioBooking'
import Smartops from './pages/Smartops'
import Resume from './pages/Resume'
import GreenEye from './pages/GreenEye'
import CreativeWorks from './pages/CreativeWorks'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/smartops" element={<Smartops />} />
          <Route path="/work/physio-booking" element={<PhysioBooking />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/green-eye" element={<GreenEye />} />
          <Route path="/creative-works" element={<CreativeWorks />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App