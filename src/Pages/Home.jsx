import React from 'react'
import { PACKAGES } from '../data'
import PackageCard from '../Components/PackageCard'

export default function Home(){
  return (
    <div className="grid gap-10">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">EventStudio — beautiful events, stress-free</h1>
          <p className="mt-4 text-gray-600">We plan weddings, birthdays, corporate events, housewarmings and more — with transparent pricing and real-time coordination.</p>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold">Why choose us</h4>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li>• Dedicated manager</li>
            <li>• Vendor vetted network</li>
            <li>• Live event status dashboard</li>
            <li>• Post-event analytics</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map(p => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>
    </div>
  )
}
