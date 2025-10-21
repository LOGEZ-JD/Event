import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/*
  BookingOrbit: unique radial booking UI.
  - nodes represent quick booking choices: Plan, Custom, Contact, QuickPay
  - clicking center opens a stepper (we navigate to /contact or /packages for simplicity)
*/
export default function BookingOrbit({ packages = [] }){
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

  const nodes = [
    { id: 'plan', label: 'Plans', action: ()=>nav('/plans') },
    { id: 'packages', label: 'Packages', action: ()=>nav('/packages') },
    { id: 'quick', label: 'QuickBook', action: ()=>alert('QuickBook — launch short booking flow') },
    { id: 'pay', label: 'PayLink', action: ()=>alert('Send PayLink to client — demo') }
  ]

  return (
    <div className="relative">
      <div className="orbit-wrapper">
        {/* orbit circle */}
        <div className="absolute inset-0 rounded-full border border-white/6"></div>

        {nodes.map((n, i) => {
          const angle = (i / nodes.length) * Math.PI * 2
          const r = 110
          const x = 160 + Math.cos(angle) * r - 42
          const y = 160 + Math.sin(angle) * r - 42
          return (
            <button key={n.id}
              onClick={n.action}
              style={{ left: x, top: y }}
              className="orbit-node glass cursor-pointer shadow-lg transition transform hover:scale-105"
            >
              <div className="text-sm text-white px-3">{n.label}</div>
            </button>
          )
        })}

        {/* center */}
        <div className="orbit-center">
          <button onClick={()=>setOpen(s=>!s)} className="w-40 h-40 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] text-white font-bold shadow-2xl">
            {open ? 'Close' : 'Book'}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-6 glass p-4 w-80 rounded-lg mx-auto text-center animate-pop">
          <h4 className="font-semibold">Orbit Quick Book</h4>
          <p className="text-sm text-slate-200/80 mt-2">Choose a package, customize, and pay using Split-Pay or QR Pay.</p>
          <div className="mt-4 grid grid-cols-1 gap-2">
            {packages.slice(0,3).map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded border border-white/6">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-xs text-slate-200/70">₹{p.price.toLocaleString()}</div>
                </div>
                <button onClick={()=>window.location.href = `/details/${p.id}`} className="px-3 py-1 rounded bg-white text-[#061025]">Select</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
