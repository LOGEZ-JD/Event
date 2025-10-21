import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-8">
      <div className="container mx-auto px-6 md:px-12 text-slate-300 flex items-center justify-between">
        <div>© {new Date().getFullYear()} OrbitEvents</div>
        <div className="text-sm">Built with care • hello@orbitevents.example</div>
      </div>
    </footer>
  )
}
