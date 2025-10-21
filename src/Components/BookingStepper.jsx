import React, { useState } from 'react'

export default function BookingStepper(){
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name:'', email:'', phone:'', notes:'' })

  function next(){ setStep(s => Math.min(4, s+1)) }
  function back(){ setStep(s => Math.max(1, s-1)) }

  return (
    <div className="soft-glass p-4 rounded-md">
      <div className="flex items-center gap-4">
        <div className="stepper">
          <div className="step">{step >= 1 ? '1' : '1'}</div>
          <div className="text-sm text-gray-500">Choose</div>
        </div>
        <div className="flex-1 h-px bg-gray-200" />
        <div className="stepper">
          <div className="step">{step >= 2 ? '2' : '2'}</div>
          <div className="text-sm text-gray-500">Details</div>
        </div>
        <div className="flex-1 h-px bg-gray-200" />
        <div className="stepper">
          <div className="step">{step >= 3 ? '3' : '3'}</div>
          <div className="text-sm text-gray-500">Payment</div>
        </div>
      </div>

      <div className="mt-4">
        {step === 1 && (
          <div>
            <p className="text-gray-600">Select a package from the Packages page or request a custom plan.</p>
            <div className="mt-3 flex gap-2">
              <button onClick={next} className="btn-soft">Proceed</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={(e)=>{ e.preventDefault(); next(); }}>
            <input required placeholder="Full name" className="w-full p-3 rounded border mb-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
            <input required placeholder="Email" className="w-full p-3 rounded border mb-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
            <textarea placeholder="Notes / requests" className="w-full p-3 rounded border mb-2" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}/>
            <div className="flex justify-between">
              <button type="button" onClick={back} className="px-4 py-2 rounded border">Back</button>
              <button type="submit" className="btn-soft">Continue to Payment</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div>
            <p className="text-gray-600">Choose a payment option below.</p>
            <div className="mt-3">
              <div className="soft-glass p-3 rounded mb-3">
                <div className="flex items-center justify-between">
                  <div><strong>Split-Pay</strong><div className="text-sm text-gray-600">Pay 30% now, rest later</div></div>
                  <button className="px-3 py-1 rounded bg-white text-gray-800">Select</button>
                </div>
              </div>

              <div className="soft-glass p-3 rounded">
                <div className="flex items-center justify-between">
                  <div><strong>QR Pay</strong><div className="text-sm text-gray-600">Scan QR to pay instantly</div></div>
                  <button className="px-3 py-1 rounded bg-white text-gray-800">Show QR</button>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button onClick={back} className="px-4 py-2 rounded border">Back</button>
              <button onClick={()=>{ alert('Booking confirmed (demo)'); setStep(1); }} className="btn-soft">Confirm Booking</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
