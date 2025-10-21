import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard({ ev }){
  return (
    <Link to={`/events/${ev.id}`} className="card hover:shadow-lg block">
      <h4 className="font-semibold">{ev.title || ev.name}</h4>
      <p className="small-muted mt-1">{ev.description}</p>
    </Link>
  )
}
