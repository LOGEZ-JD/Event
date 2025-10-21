import React from 'react'

export default function TaskCard({ task, onSelect }){
  return (
    <div className="card flex items-center justify-between">
      <div>
        <div className="font-medium">{task.title}</div>
        <div className="small-muted">{task.description}</div>
      </div>
      <button onClick={onSelect} className="px-3 py-1 rounded border">Select</button>
    </div>
  )
}
