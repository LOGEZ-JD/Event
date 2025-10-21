import React from 'react'
import AnimatedCard from '../components/AnimatedCard'
import { PACKAGES } from '../data'

export default function Plans(){
  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-extrabold">Plans & Pricing</h2>
      <p className="mt-2 text-slate-200/80 max-w-2xl">Choose a plan or customize. Each plan is backed by a dedicated manager and real-time event dashboard.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6">
          <h3 className="text-xl font-semibold">Starter</h3>
          <div className="text-3xl font-extrabold mt-4">₹9,999</div>
          <ul className="mt-4 text-slate-200/80 space-y-2">
            <li>Basic decor</li>
            <li>Vendor suggestions</li>
            <li>2-hour event coordination</li>
          </ul>
        </div>
        <div className="glass p-6">
          <h3 className="text-xl font-semibold">Deluxe</h3>
          <div className="text-3xl font-extrabold mt-4">₹39,999</div>
          <ul className="mt-4 text-slate-200/80 space-y-2">
            <li>Full decor & catering</li>
            <li>Photographer & DJ</li>
            <li>Guest management</li>
          </ul>
        </div>
        <div className="glass p-6">
          <h3 className="text-xl font-semibold">Royal</h3>
          <div className="text-3xl font-extrabold mt-4">₹199,999</div>
          <ul className="mt-4 text-slate-200/80 space-y-2">
            <li>Premium venues</li>
            <li>Custom design & entertainment</li>
            <li>Live streaming & analytics</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PACKAGES.map(p => <AnimatedCard key={p.id} pkg={p} />)}
      </div>
    </section>
  )
}
