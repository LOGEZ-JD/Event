import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation().pathname
  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-40">
      <div className="container px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg grad-accent flex items-center justify-center text-white font-bold">ES</div>
          <div>
            <div className="font-semibold text-lg">EventStudio</div>
            <div className="text-xs text-gray-500">Plan • Execute • Delight</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/packages" className={loc === '/packages' ? 'font-semibold' : ''}>Packages</Link>
          <Link to="/plans" className={loc === '/plans' ? 'font-semibold' : ''}>Plans</Link>
          <Link to="/contact" className={loc === '/contact' ? 'font-semibold' : ''}>Contact</Link>
          <Link to="/admin" className="btn-outline">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
