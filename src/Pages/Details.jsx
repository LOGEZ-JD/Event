import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { PACKAGES } from '../data'
import PaymentOptions from '../components/PaymentOptions'

export default function Details(){
  const { id } = useParams()
  const pkg = PACKAGES.find(p => p.id === id) || PACKAGES[0]

  return (
    <section className="container mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img src={pkg.img} alt={pkg.title} className="w-full rounded-lg shadow-lg mb-6" />
          <h1 className="text-4xl font-extrabold">{pkg.title}</h1>
          <p className="mt-3 text-slate-200/80">{pkg.desc}</p>

          <div className="mt-6 glass p-4">
            <h4 className="font-semibold">What’s included</h4>
            <ul className="mt-2 text-slate-200/80">
              <li>• Venue coordination</li>
              <li>• Decor & theme</li>
              <li>• Catering management</li>
              <li>• Photography & video</li>
              <li>• On-site manager and tech dashboard</li>
            </ul>
          </div>
        </div>

        <aside className="glass p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-slate-200 text-sm">Starting at</div>
              <div className="text-3xl font-bold">₹{pkg.price.toLocaleString()}</div>
            </div>
            <div className="text-sm text-slate-400">{pkg.tag}</div>
          </div>

          <div className="mt-6">
            <h5 className="text-sm text-slate-200/80">Quick book</h5>
            <Link to="/packages" className="mt-3 inline-block w-full text-center py-3 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] text-white">Start Booking</Link>
          </div>

          <div className="mt-6">
            <PaymentOptions amount={pkg.price} item={pkg.title} />
          </div>
        </aside>
      </div>
    </section>
  )
}
