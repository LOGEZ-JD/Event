import React from 'react'
import { Link } from 'react-router-dom'

// ✅ Corrected imports (lowercase paths)
import GradientBlob from '../Components/GradientBlob'
import AnimatedCard from '../Components/AnimatedCard'
import BookingOrbit from '../Components/BookingOrbit'
import { PACKAGES } from '../data'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* background gradient blobs */}
      <GradientBlob />

      <section className="container mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SECTION — text content */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Events that <span className="text-[#08AEEA]">shine</span> — planned to perfection
          </h1>

          <p className="mt-4 text-slate-200/80 max-w-xl">
            We craft experiences for birthdays, engagements, weddings, housewarmings and corporate events.
            With creative ideas, flawless execution, and tech-powered coordination — we make your moments unforgettable.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/packages"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-[#7439FF] to-[#08AEEA] text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Explore Packages
            </Link>
            <Link
              to="/plans"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              See Plans
            </Link>
          </div>

          {/* Featured packages section */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PACKAGES.slice(0, 2).map((p) => (
              <AnimatedCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION — Booking Orbit (unique booking design) */}
        <div className="flex items-center justify-center">
          <BookingOrbit packages={PACKAGES} />
        </div>
      </section>
    </main>
  )
}
