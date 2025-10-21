import React, { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-extrabold">Contact & Custom Quote</h2>
      <p className="mt-2 text-slate-200/80 max-w-xl">Tell us about your event and we’ll craft a plan.</p>

      {!sent ? (
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{ e.preventDefault(); setSent(true) }}>
          <input required placeholder="Name" className="p-3 rounded bg-transparent border border-white/8 text-white" />
          <input required type="email" placeholder="Email" className="p-3 rounded bg-transparent border border-white/8 text-white" />
          <input placeholder="Phone" className="p-3 rounded bg-transparent border border-white/8 text-white" />
          <textarea placeholder="Tell us about your event" rows="4" className="p-3 rounded bg-transparent border border-white/8 text-white"></textarea>
          <div className="md:col-span-2">
            <button className="px-5 py-3 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] text-white">Send Request</button>
          </div>
        </form>
      ) : (
        <div className="glass p-6 mt-6">
          <h4 className="text-xl font-semibold">Thanks — we’ll reach out soon.</h4>
        </div>
      )}
    </section>
  )
}
