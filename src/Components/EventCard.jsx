import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard({ item }){
  return (
    <article className="soft-glass p-4 rounded-md card-hover">
      <div className="h-44 rounded-md overflow-hidden mb-3" style={{ background: `url(${item.img}) center/cover` }} />
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold">{item.title}</h4>
          <div className="text-sm text-gray-600">{item.type} • {item.rating}★</div>
        </div>
        <div className="text-right">
          <div className="font-bold">₹{item.price.toLocaleString()}</div>
          <Link to={`/details/${item.id}`} className="inline-block mt-2 text-sm px-3 py-1 rounded-full bg-gradient-to-br from-primelight to-accentlight text-white">Book</Link>
        </div>
      </div>
    </article>
  )
}
