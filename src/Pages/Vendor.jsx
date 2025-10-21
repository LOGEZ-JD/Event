import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import BookingModal from '../components/BookingModal'

export default function Vendor(){
  const { id } = useParams()
  const [vendor, setVendor] = useState(null)
  const [reviews, setReviews] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(()=> {
    api.get(`/vendors/${id}`).then(r=> setVendor(r.data)).catch(()=>{})
    api.get(`/vendors/${id}/reviews`).then(r=> setReviews(r.data)).catch(()=>{})
  },[id])

  if(!vendor) return <div>Loading vendor...</div>

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold">{vendor.company_name || vendor.name}</h1>
        <p className="small-muted mt-2">{vendor.bio}</p>

        <div className="mt-6">
          <h4 className="font-semibold">Reviews</h4>
          <div className="mt-3 space-y-3">
            {reviews.map(r=> (
              <div key={r.id} className="card">
                <div className="flex justify-between">
                  <div><strong>{r.user_name || 'User'}</strong><div className="small-muted">{r.rating} ★</div></div>
                  <div className="small-muted">{new Date(r.created_at).toLocaleDateString()}</div>
                </div>
                <p className="mt-2">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="card">
        <div>Phone: {vendor.contact?.phone}</div>
        <div className="mt-2">Email: {vendor.contact?.email}</div>
        <div className="mt-4">
          <button className="btn" onClick={()=>setOpen(true)}>Book Vendor</button>
        </div>
      </aside>

      {open && <BookingModal vendor={vendor} onClose={()=>setOpen(false)} />}
    </div>
  )
}
