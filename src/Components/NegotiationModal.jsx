import React, { useState, useEffect } from 'react'
import api from '../api'

export default function NegotiationModal({ vendor, onClose, assignmentId }){
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')

  useEffect(()=> {
    // optionally fetch existing messages for an assignment
    if(assignmentId){
      api.get(`/negotiations?assignment_id=${assignmentId}`).then(r=> setMessages(r.data)).catch(()=>{})
    } else {
      setMessages([{id:1, from:'vendor', text:`Hi — base price ₹${vendor.base_price || vendor.priceFrom}` }])
    }
  },[vendor, assignmentId])

  async function send(){
    if(!text) return
    const msg = { assignment_id: assignmentId, from_user_id: 1, to_user_id: vendor.user_id || null, message: text }
    try {
      const r = await api.post('/negotiations', msg)
      setMessages(prev => [...prev, r.data])
      setText('')
    } catch (e){
      alert('Failed to send message')
    }
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="bg-white rounded-lg w-full max-w-2xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Negotiate with {vendor.company_name || vendor.name}</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="mt-3 h-56 overflow-auto border rounded p-3">
          {messages.map(m => (
            <div key={m.id} className={m.from_user_id === 1 ? 'text-right' : ''}>
              <div className={`inline-block p-2 rounded ${m.from_user_id === 1 ? 'bg-sky-500 text-white' : 'bg-gray-100'}`}>{m.message || m.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex gap-2">
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Offer / message" className="flex-1 p-2 border rounded" />
          <button onClick={send} className="grad-badge">Send</button>
        </div>
      </div>
    </div>
  )
}
