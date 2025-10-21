import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [sent, setSent] = useState(false)

  async function submit(e){
    e.preventDefault()
    try {
      await axios.post('/api/contact', form)
      setSent(true)
    } catch (err) {
      alert('Error sending message')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Contact</h1>
      {!sent ? (
        <form onSubmit={submit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="p-3 border rounded" />
          <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="p-3 border rounded" />
          <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="p-3 border rounded" />
          <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="p-3 border rounded md:col-span-2"></textarea>
          <div className="md:col-span-2">
            <button className="btn-primary">Send</button>
          </div>
        </form>
      ) : (
        <div className="card p-4">Thanks! We'll contact you soon.</div>
      )}
    </div>
  )
}
