import React from 'react'

export default function VendorCard({ vendor, onNegotiate, onBook, onAssign, onView }){
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold">{vendor.company_name || vendor.name}</h4>
          <div className="small-muted">{vendor.city || vendor.area} • {vendor.rating || vendor.avg_rating} ★</div>
          <div className="mt-2 small-muted">{vendor.bio || vendor.description}</div>
        </div>

        <div className="text-right">
          <div className="font-bold">₹{(vendor.base_price || vendor.priceFrom || 0).toLocaleString()}</div>
          <div className="mt-2 flex flex-col gap-2">
            <button onClick={onView} className="px-3 py-1 rounded border small-muted">View</button>
            <button onClick={onNegotiate} className="px-3 py-1 rounded border small-muted">Negotiate</button>
            <button onClick={onAssign} className="btn">Assign</button>
          </div>
        </div>
      </div>
    </div>
  )
}
