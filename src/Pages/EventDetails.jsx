import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import TaskCard from '../components/TaskCard'
import VendorCard from '../components/VendorCard'
import NegotiationModal from '../components/NegotiationModal'
import BookingModal from '../components/BookingModal'

export default function EventDetails(){
  const { id } = useParams() // event id
  const [event, setEvent] = useState(null)
  const [tasks, setTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState(null)
  const [vendors, setVendors] = useState([])
  const [negotiationVendor, setNegotiationVendor] = useState(null)
  const [bookingVendor, setBookingVendor] = useState(null)
  const [assignmentsMap, setAssignmentsMap] = useState({}) // bookingTaskId -> assignment

  useEffect(()=>{
    // fetch event details and tasks
    api.get(`/events/${id}`).then(r=> setEvent(r.data)).catch(()=>{})
    api.get(`/tasks?event_id=${id}`).then(r=> setTasks(r.data)).catch(()=>{})
  },[id])

  useEffect(()=>{
    if(!selectedTask) return
    // fetch vendors for this task, optionally pass city
    api.get(`/vendors?task_id=${selectedTask.id}`).then(r=> setVendors(r.data)).catch(()=> setVendors([]))
  },[selectedTask])

  // poll assignment status every 8s — adjust to websocket in prod
  useEffect(()=>{
    let t
    async function poll(){
      try{
        const r = await api.get(`/assignments?booking_task_ids=${Object.keys(assignmentsMap).join(',')}`)
        // r.data expected list of assignments -> update map
        const updated = {...assignmentsMap}
        r.data.forEach(a => { updated[a.booking_task_id] = a })
        setAssignmentsMap(updated)
      }catch(e){}
    }
    if(Object.keys(assignmentsMap).length){
      t = setInterval(poll, 8000)
    }
    return ()=> clearInterval(t)
  },[assignmentsMap])

  async function handleAssign(vendor){
    // Create booking if user hasn't created booking: for demo we'll create a booking and booking_task first.
    // In real app: create booking then pass bookingTask id here.
    try {
      const bookingRes = await api.post('/bookings', {
        user_id: 1, // demo user; use auth in real app
        event_id: id,
        title: `${event?.title} booking`,
        address: 'User address',
        date: null,
        tasks: [{ task_key: selectedTask.key_name || selectedTask.id, qty: 1 }]
      })
      const bookingId = bookingRes.data.id
      // backend should return booking_task id(s). For this UI we assume returned booking_task_id.
      const bookingTaskId = bookingRes.data.booking_task_ids?.[0] || bookingRes.data.booking_task_id || null

      // now create assignment for bookingTask
      const assignRes = await api.post('/assignments', {
        booking_task_id: bookingTaskId,
        vendor_id: vendor.id,
        proposer_user_id: 1,
        proposed_price: vendor.base_price || vendor.priceFrom || 0
      })
      // save assignment in map to track updates
      setAssignmentsMap(prev => ({ ...prev, [bookingTaskId]: assignRes.data }))
      alert('Assignment proposed. Vendor will be notified.')
    } catch (err){
      console.error(err)
      alert('Error creating booking/assignment (see console)')
    }
  }

  if(!event) return <div>Loading...</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{event.title}</h1>
          <div className="small-muted">{event.description}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside>
          <h3 className="font-semibold mb-3">Tasks</h3>
          <div className="space-y-3">
            {tasks.map(t => (
              <TaskCard key={t.id} task={t} onSelect={()=>setSelectedTask(t)} />
            ))}
          </div>
        </aside>

        <section className="lg:col-span-2">
          <h3 className="font-semibold">Vendors {selectedTask ? `for "${selectedTask.title}"` : ''}</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vendors.length ? vendors.map(v => (
              <VendorCard key={v.id} vendor={v}
                onNegotiate={()=> setNegotiationVendor(v)}
                onBook={()=> setBookingVendor(v)}
                onAssign={()=> handleAssign(v)}
              />
            )) : <div className="text-gray-500">No vendors found for this task.</div>}
          </div>
        </section>
      </div>

      {negotiationVendor && <NegotiationModal vendor={negotiationVendor} onClose={()=>setNegotiationVendor(null)} />}
      {bookingVendor && <BookingModal vendor={bookingVendor} onClose={()=>setBookingVendor(null)} />}
    </div>
  )
}
