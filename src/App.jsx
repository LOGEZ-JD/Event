import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Packages from './Pages/Packages'
import Details from './Pages/Details'
import Contact from './Pages/Contact'
import Admin from './pages/Admin'
import Plans from './Pages/Plans'

export default function App(){
  return (
    <div className="min-h-screen bg-bgSoft">
      <Navbar />
      <main className="py-8">
        <div className="container px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}
