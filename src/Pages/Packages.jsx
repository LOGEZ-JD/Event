import React from 'react'
import { PACKAGES } from '../data'
import PackageCard from '../Components/PackageCard'

export default function Packages(){
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">All Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PACKAGES.map(p => <PackageCard key={p.id} pkg={p} />)}
      </div>
    </>
  )
}
