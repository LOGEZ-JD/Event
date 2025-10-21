import React from 'react'
import PackageCard from '../Components/PackageCard'
import { PACKAGES } from '../data'

export default function Plans(){
  return (
    <div>
      <h1 className="text-3xl font-bold">Plans</h1>
      <p className="text-gray-600">Choose from Starter / Standard / Premium</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* simplified plan cards */}
        <div className="card p-6">
          <h3 className="font-semibold">Starter</h3>
          <div className="text-2xl font-bold mt-3">₹9,999</div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Standard</h3>
          <div className="text-2xl font-bold mt-3">₹39,999</div>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Premium</h3>
          <div className="text-2xl font-bold mt-3">₹199,999</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PACKAGES.map(p => <PackageCard key={p.id} pkg={p} />)}
      </div>
    </div>
  )
}
