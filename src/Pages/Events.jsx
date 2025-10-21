import React, { useEffect, useState } from 'react'
import api from '../api'
import EventCard from '../components/EventCard'

export default function Events(){
  const [events, setEvents] = useState([])
  useEffect(()=> {
    api.get('/events').then(r=>setEvents(r.data)).catch(()=>{})
  },[])
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(e => <EventCard key={e.id} ev={e} />)}
      </div>
    </div>
  )
}
