import React from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import api from '../api'
import { useEffect, useState } from 'react'

export default function Home(){
  const [events, setEvents] = useState([])

  useEffect(()=>{
    api.get('/events').then(r=>setEvents(r.data)).catch(()=>{/* fallback: empty */})
  },[])

  return (
    <div className="space-y-8">
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">EventLinker — connect users & vendors</h1>
          <p className="small-muted mt-2">Choose an event type and find best vendors for each task.</p>
          <div className="mt-4">
            <Link to="/events" className="btn">Browse events</Link>
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold">Quick Search</h3>
          <p className="small-muted mt-2">Search by city and event to see suggested vendors.</p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Event types</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.length ? events.map(ev => <EventCard key={ev.id} ev={ev} />) : (
            <div className="text-gray-500">No events found (backend maybe offline)</div>
          )}
        </div>
      </section>
    </div>
  )
}
