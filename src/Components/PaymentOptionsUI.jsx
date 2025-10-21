import React, { useState } from 'react'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

export default function PaymentOptionsUI({ amount, bookingId }) {
  const [method, setMethod] = useState('split')
  const [splitPct, setSplitPct] = useState(30)
  const [processing, setProcessing] = useState(false)

  const down = Math.round(amount * splitPct / 100)

  async function payNow() {
    setProcessing(true)
    try {
      // create payment intent on backend: /api/payments/create-intent
      const res = await axios.post('/api/payments/create-intent', {
        booking_id: bookingId,
        method,
        amount: method === 'split' ? down : amount,
        split_pct: splitPct
      })
      const clientSecret = res.data.client_secret
      // use Stripe to complete card payment (if card)
      if (res.data.mode === 'stripe') {
        const stripe = await loadStripe(res.data.publishableKey)
        await stripe.confirmCardPayment(clientSecret) // in real use you pass payment_method via Elements
        alert('Payment success (demo).')
      } else {
        alert('Payment created. Follow instructions sent to client (demo).')
      }
    } catch (err) {
      console.error(err)
      alert('Payment failed (demo).')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="mt-4">
      <div className="soft-glass p-4 rounded">
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2"><input type="radio" name="pm" checked={method==='split'} onChange={()=>setMethod('split')} /> Split-Pay</label>
          <label className="flex items-center gap-2"><input type="radio" name="pm" checked={method==='card'} onChange={()=>setMethod('card')} /> Card</label>
          <label className="flex items-center gap-2"><input type="radio" name="pm" checked={method==='link'} onChange={()=>setMethod('link')} /> Pay-Link</label>
        </div>

        {method === 'split' && (
          <div className="mt-3">
            <input type="range" min="10" max="90" value={splitPct} onChange={e=>setSplitPct(Number(e.target.value))} />
            <div className="mt-2 text-sm">Pay now: ₹{down.toLocaleString()} ( {splitPct}% )</div>
          </div>
        )}

        <div className="mt-4 flex gap-3">
          <button className="btn-primary" onClick={payNow} disabled={processing}>{processing ? 'Processing…' : 'Pay'}</button>
        </div>
      </div>
    </div>
  )
}
