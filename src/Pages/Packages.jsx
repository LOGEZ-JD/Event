import React from 'react'
import { PACKAGES } from '../data'
import { Link } from 'react-router-dom'

export default function Packages(){
  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-extrabold">Packages</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PACKAGES.map(p => (
          <article key={p.id} className="glass p-4 event-card">
            <div className="h-44 rounded-md overflow-hidden mb-3" style={{ background: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(255,255,255,0.02)), url(${p.img}) center/cover` }} />
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-slate-200/80 text-sm">{p.desc}</p>
              </div>
              <div className="text-right">
                <div className="font-bold">₹{p.price.toLocaleString()}</div>
                <Link to={`/details/${p.id}`} className="mt-2 inline-block text-sm px-3 py-1 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] text-white">Details</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
