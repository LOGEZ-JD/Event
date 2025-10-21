import React, { useState } from 'react'
import axios from 'axios'

export default function BookingModal({ pkg, onClose }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', date:'', notes:'' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    try {
      // POST to backend: /api/bookings
      const res = await axios.post('/api/bookings', { package_id: pkg.id, ...form })
      setMessage('Booking received. We will contact you shortly.')
    } catch (err) {
      setMessage('Error creating booking.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <button className="float-right" onClick={onClose}>✕</button>
        <h3 className="text-xl font-semibold">Book: {pkg.title}</h3>
        <form onSubmit={submit} className="mt-4 space-y-3">
          <input required placeholder="Full name" className="w-full p-3 border rounded" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          <input required placeholder="Email" className="w-full p-3 border rounded" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input placeholder="Phone" className="w-full p-3 border rounded" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <input type="date" className="w-full p-3 border rounded" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
          <textarea placeholder="Notes" className="w-full p-3 border rounded" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading} className="btn-primary">{loading? 'Sending…' : 'Proceed to Payment'}</button>
            <button type="button" className="btn-outline" onClick={onClose}>Cancel</button>
          </div>
        </form>
        {message && <div className="mt-3 text-sm text-green-600">{message}</div>}
      </div>
    </div>
  )
}
