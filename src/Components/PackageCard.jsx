import React from 'react'
import { Link } from 'react-router-dom'

export default function PackageCard({ pkg }) {
  return (
    <article className="card p-4">
      <img src={pkg.img} alt={pkg.title} className="w-full pkg-img rounded-md mb-4" />
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-semibold">{pkg.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{pkg.short}</p>
        </div>
        <div className="text-right">
          <div className="font-bold">₹{pkg.price.toLocaleString()}</div>
          <Link to={`/details/${pkg.id}`} className="inline-block mt-2 btn-primary text-sm">View</Link>
        </div>
      </div>
    </article>
  )
}
