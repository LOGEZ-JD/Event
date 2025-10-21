import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import Vendor from './pages/Vendor'

export default function App(){
  return (
    <div className="min-h-screen body-bg">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/events/:id" element={<EventDetails/>} />
          <Route path="/vendor/:id" element={<Vendor/>} />
        </Routes>
      </main>
    </div>
  )
}
