import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Use lowercase folder names (conventional & less error-prone)
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Plans from './Pages/Plans'
import Packages from './Pages/Packages'
import Details from './Pages/Details'
import Contact from './Pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-[#061025] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main content (routes) */}
      <main className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
