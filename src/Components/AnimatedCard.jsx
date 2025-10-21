import React from 'react'
import { Link } from 'react-router-dom'

export default function AnimatedCard({ pkg }){
  return (
    <article className="glass p-4 flex gap-4 items-center event-card">
      <div className="w-20 h-20 rounded-lg overflow-hidden" style={{ background: `url(${pkg.img}) center/cover`}} />
      <div>
        <h4 className="font-semibold">{pkg.title}</h4>
        <p className="text-sm text-slate-200/80">{pkg.desc}</p>
        <div className="mt-2 flex gap-2 items-center">
          <div className="font-bold">₹{pkg.price.toLocaleString()}</div>
          <Link to={`/details/${pkg.id}`} className="text-xs px-2 py-1 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] text-white">Details</Link>
        </div>
      </div>
    </article>
  )
}
