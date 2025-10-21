import React, { useState } from 'react'

/*
  PaymentOptions: unique methods:
  - SplitPay: choose % down now and schedule remainder
  - QR Pay: show animated QR code (stub)
  - Pay Link: send SMS/WhatsApp link (stub)
*/
export default function PaymentOptions({ amount = 0, item = '' }){
  const [method, setMethod] = useState('split')
  const [splitPct, setSplitPct] = useState(30)
  const [linkSent, setLinkSent] = useState(false)

  const down = Math.round((splitPct/100) * amount)

  return (
    <div>
      <div className="text-sm text-slate-200/80">Payment options</div>
      <div className="mt-3 space-y-3">
        <label className={`flex items-center gap-3 p-3 rounded ${method==='split' ? 'glass border-white/8' : 'bg-transparent'}`}>
          <input type="radio" name="pm" checked={method==='split'} onChange={()=>setMethod('split')} />
          <div>
            <div className="font-semibold">Split-Pay</div>
            <div className="text-xs text-slate-200/80">Pay part now ({splitPct}%) and schedule remainder</div>
            <div className="mt-2 flex items-center gap-2">
              <input type="range" min="10" max="90" value={splitPct} onChange={(e)=>setSplitPct(Number(e.target.value))} />
              <div className="text-xs">Now: ₹{down.toLocaleString()}</div>
            </div>
          </div>
        </label>

        <label className={`flex items-center gap-3 p-3 rounded ${method==='qr' ? 'glass border-white/8' : ''}`}>
          <input type="radio" name="pm" checked={method==='qr'} onChange={()=>setMethod('qr')} />
          <div>
            <div className="font-semibold">QR Pay</div>
            <div className="text-xs text-slate-200/80">Show animated QR, scan to pay instantly</div>
            {method === 'qr' && (
              <div className="mt-3 bg-white/6 p-3 rounded grid place-items-center">
                {/* animated placeholder QR */}
                <div className="w-36 h-36 bg-white/8 qr-glow rounded-md grid place-items-center text-xs">QR CODE</div>
                <div className="mt-2 text-xs text-slate-200/70">Scan to pay ₹{amount.toLocaleString()}</div>
              </div>
            )}
          </div>
        </label>

        <label className={`flex items-center gap-3 p-3 rounded ${method==='link' ? 'glass border-white/8' : ''}`}>
          <input type="radio" name="pm" checked={method==='link'} onChange={()=>setMethod('link')} />
          <div>
            <div className="font-semibold">Pay-Link</div>
            <div className="text-xs text-slate-200/80">Send secure link via WhatsApp/SMS</div>
            {method === 'link' && (
              <div className="mt-2 flex gap-2">
                <input placeholder="Phone number" className="flex-1 p-2 rounded bg-transparent border border-white/8 text-white" />
                <button onClick={()=>setLinkSent(true)} className="px-3 py-1 rounded bg-white text-[#061025]">Send</button>
              </div>
            )}
            {linkSent && <div className="text-xs text-green-400 mt-2">Link sent!</div>}
          </div>
        </label>
      </div>
    </div>
  )
}
