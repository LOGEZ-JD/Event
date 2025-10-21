import React from 'react'

export default function HeroSoft(){
  return (
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">Soft, elegant events — designed for memories</h1>
          <p className="mt-4 text-gray-600 max-w-xl">We combine creative design and technology to plan birthdays, engagements, weddings and corporate events with full transparency.</p>
          <div className="mt-6 flex gap-3">
            <a href="/packages" className="btn-soft">Browse Packages</a>
            <a href="/contact" className="px-6 py-3 rounded-full border border-gray-200 text-gray-700">Custom Quote</a>
          </div>
        </div>

        <div className="relative">
          <div className="soft-glass p-6 rounded-lg animate-fadeUp">
            <h4 className="font-semibold">Featured Service</h4>
            <p className="text-gray-600 mt-2">Wedding orchestration with live event dashboard and guest automation.</p>
            <div className="mt-4 flex gap-2">
              <div className="p-3 bg-white rounded shadow-sm">Icon</div>
              <div className="p-3 bg-white rounded shadow-sm">Icon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
