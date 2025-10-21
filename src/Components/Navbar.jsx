import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation().pathname
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/plans', label: 'Plans' },
    { to: '/packages', label: 'Packages' },
    { to: '/contact', label: 'Contact' }
  ]
  return (
    <nav className="glass px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] flex items-center justify-center text-white font-bold shadow-lg">O</div>
        <div>
          <div className="text-white font-bold">OrbitEvents</div>
          <div className="text-xs text-slate-200/70">Design • Plan • Execute</div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {nav.map(n => (
          <Link key={n.to} to={n.to} className={`text-slate-200/90 ${loc === n.to ? 'font-semibold text-white' : 'hover:text-white/90'}`}>{n.label}</Link>
        ))}
        <Link to="/contact" className="px-4 py-2 bg-gradient-to-br from-[#7439FF] to-[#08AEEA] rounded-full text-white">Get Quote</Link>
      </div>
    </nav>
  )
}
