import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Admin(){
  const [packages, setPackages] = useState([])
  const [form, setForm] = useState({ title:'', price:'', img:'', short:'', details:'' })

  useEffect(()=> {
    axios.get('/api/packages').then(r=>setPackages(r.data)).catch(()=>{})
  },[])

  async function add(e){
    e.preventDefault()
    try {
      await axios.post('/api/packages', form)
      const r = await axios.get('/api/packages')
      setPackages(r.data)
      setForm({ title:'', price:'', img:'', short:'', details:'' })
    } catch (err) { alert('Error') }
  }

  async function remove(id){
    await axios.delete('/api/packages/'+id)
    setPackages(packages.filter(p=>p.id!==id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin — Packages</h1>
      <form onSubmit={add} className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input required placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="p-2 border rounded" />
        <input required placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} className="p-2 border rounded" />
        <input placeholder="Image URL" value={form.img} onChange={e=>setForm({...form,img:e.target.value})} className="p-2 border rounded" />
        <input placeholder="Short" value={form.short} onChange={e=>setForm({...form,short:e.target.value})} className="p-2 border rounded md:col-span-3" />
        <textarea placeholder="Details" value={form.details} onChange={e=>setForm({...form,details:e.target.value})} className="p-2 border rounded md:col-span-3"></textarea>
        <div className="md:col-span-3">
          <button className="btn-primary">Add Package</button>
        </div>
      </form>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {packages.map(p=>(
          <div key={p.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-600">₹{p.price}</div>
              </div>
              <div>
                <button className="btn-outline mr-2">Edit</button>
                <button className="btn-outline" onClick={()=>remove(p.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
