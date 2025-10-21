import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
  const loc = useLocation().pathname
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-sky-500 to-violet-600 text-white grid place-items-center font-bold">EL</div>
          <div>
            <div className="font-semibold">EventLinker</div>
            <div className="small-muted">connect • negotiate • book</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/events" className={loc.startsWith('/events') ? 'font-semibold' : ''}>Events</Link>
          <Link to="/" className="">How it works</Link>
        </nav>
      </div>
    </header>
  )
}
