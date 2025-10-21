import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PACKAGES } from '../data'
import BookingModal from '../Components/BookingModal'
import PaymentOptionsUI from '../Components/PaymentOptionsUI'

export default function Details(){
  const { id } = useParams()
  const pkg = PACKAGES.find(p => p.id === id) || PACKAGES[0]
  const [open, setOpen] = useState(false)
  const [bookingId, setBookingId] = useState(null)

  // booking flow will POST to backend and return bookingId; here BookingModal does that

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <img src={pkg.img} alt={pkg.title} className="w-full rounded-md mb-4" />
        <h2 className="text-2xl font-bold">{pkg.title}</h2>
        <p className="mt-3 text-gray-600">{pkg.details}</p>
      </div>

      <aside className="card p-4">
        <div className="flex items-center justify-between">
          <div><div className="text-sm text-gray-600">Starting at</div><div className="text-xl font-bold">₹{pkg.price.toLocaleString()}</div></div>
          <div className="text-sm text-gray-500">Type</div>
        </div>

        <div className="mt-4">
          <button className="btn-primary w-full" onClick={()=>setOpen(true)}>Book Now</button>
        </div>

        {open && <BookingModal pkg={pkg} onClose={()=>setOpen(false)} />}
        {/* After booking creation, pass bookingId to PaymentOptionsUI */}
        {bookingId && <PaymentOptionsUI amount={pkg.price} bookingId={bookingId} />}
      </aside>
    </div>
  )
}
