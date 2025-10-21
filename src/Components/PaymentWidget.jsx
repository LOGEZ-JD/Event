import React, { useState } from 'react'

export default function PaymentWidget({ amount=0, item='' }){
  const [method, setMethod] = useState('split')
  const [split, setSplit] = useState(30)
  const down = Math.round(amount * split / 100)

  return (
    <div className="soft-glass p-4 rounded-md">
      <h4 className="font-semibold">Payment</h4>
      <div className="mt-3">
        <label className="flex items-center gap-3">
          <input type="radio" name="pm" checked={method==='split'} onChange={()=>setMethod('split')} />
          <div>
            <div className="font-medium">Split-Pay</div>
            <div className="text-sm text-gray-600">Pay {split}% now: ₹{down.toLocaleString()}</div>
            <input type="range" min="10" max="90" value={split} onChange={e=>setSplit(Number(e.target.value))} />
          </div>
        </label>

        <label className="flex items-start gap-3 mt-3">
          <input type="radio" name="pm" checked={method==='qr'} onChange={()=>setMethod('qr')} />
          <div>
            <div className="font-medium">QR Pay</div>
            <div className="text-sm text-gray-600">Scan to pay full amount instantly</div>
            {method === 'qr' && <div className="mt-2 bg-white p-4 rounded text-center">[ QR CODE ]</div>}
          </div>
        </label>
      </div>

      <div className="mt-4">
        <button onClick={()=>alert('Payment demo - integrate gateway')} className="btn-soft w-full">Pay ₹{amount.toLocaleString()}</button>
      </div>
    </div>
  )
}
