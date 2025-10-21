import React, { useState } from 'react'
import api from '../api'
import PaymentWidget from './PaymentWidget'

export default function BookingModal({ vendor, onClose }){
  const [form, setForm] = useState({ name:'', email:'', phone:'', date:'' })
  const [bookingId, setBookingId] = useState(null)
  const [bookingTaskId, setBookingTaskId] = useState(null)
  const [loading, setLoading] = useState(false)

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    try {
      // create booking for the vendor's service (simplified)
      const res = await api.post('/bookings', {
        user_id: 1,
        event_id: vendor.event_id || null,
        title: `Booking for ${vendor.company_name || vendor.name}`,
        address: 'User provided address',
        date: form.date,
        tasks: [{ task_key: vendor.task_key || vendor.task_id, specs:{}, qty:1 }]
      })
      // expect backend returns booking id and booking_task ids
      setBookingId(res.data.id)
      setBookingTaskId(res.data.booking_task_ids?.[0] || null)
    } catch (err) {
      console.error(err)
      alert('Failed to create booking')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="bg-white rounded-lg w-full max-w-md p-4">
        <button className="float-right" onClick={onClose}>✕</button>
        <h3 className="font-semibold">Book {vendor.company_name || vendor.name}</h3>

        {!bookingId ? (
          <form onSubmit={submit} className="mt-3 space-y-3">
            <input required placeholder="Full name" className="w-full p-2 border rounded" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input required placeholder="Email" className="w-full p-2 border rounded" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <input placeholder="Phone" className="w-full p-2 border rounded" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            <input type="date" className="w-full p-2 border rounded" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} />
            <div className="flex gap-2">
              <button disabled={loading} className="btn flex-1">{loading? 'Creating…' : 'Create Booking'}</button>
              <button type="button" className="px-4 py-2 rounded border" onClick={onClose}>Cancel</button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mt-2">Booking created (id: {bookingId})</div>
            <div className="mt-3">
              <PaymentWidget amount={(vendor.base_price || vendor.priceFrom || 0)} bookingId={bookingId} bookingTaskId={bookingTaskId} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
