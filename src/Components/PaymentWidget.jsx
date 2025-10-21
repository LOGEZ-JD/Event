import React, { useState } from 'react'
import api from '../api'

export default function PaymentWidget({ amount=0, bookingId, bookingTaskId }){
  const [method, setMethod] = useState('split')
  const [pct, setPct] = useState(30)
  const [loading, setLoading] = useState(false)

  const down = Math.round(amount * pct / 100)

  async function pay(){
    setLoading(true)
    try {
      if(method === 'link'){
        const res = await api.post('/payments/create-paylink', { booking_id: bookingId, amount })
        alert('Pay link created: ' + (res.data.link || '(demo)'))
      } else {
        const amt = method === 'split' ? down : amount
        const res = await api.post('/payments/create-intent', { booking_id: bookingId, assignment_id: bookingTaskId, amount: amt, method, split_pct: pct })
        alert('Payment initiated (demo).')
      }
    } catch (err){
      console.error(err)
      alert('Payment failed (see console)')
    } finally { setLoading(false) }
  }

  return (
    <div className="space-y-3">
      <label className="flex items-start gap-3">
        <input type="radio" name="pm" checked={method==='split'} onChange={()=>setMethod('split')} />
        <div>
          <div className="font-semibold">Split-pay</div>
          <div className="small-muted">Pay {pct}% as advance</div>
          {method==='split' && <input type="range" min="10" max="90" value={pct} onChange={e=>setPct(Number(e.target.value))} />}
        </div>
      </label>

      <label className="flex items-start gap-3">
        <input type="radio" name="pm" checked={method==='full'} onChange={()=>setMethod('full')} />
        <div>
          <div className="font-semibold">Full payment</div>
        </div>
      </label>

      <label className="flex items-start gap-3">
        <input type="radio" name="pm" checked={method==='link'} onChange={()=>setMethod('link')} />
        <div>
          <div className="font-semibold">Pay-link</div>
          <div className="small-muted">Generate secure payment link</div>
        </div>
      </label>

      <div className="mt-2">
        <button className="btn w-full" onClick={pay} disabled={loading}>{loading? 'Processing…' : `Pay ₹${(method==='split'? down : amount).toLocaleString()}`}</button>
      </div>
    </div>
  )
}
