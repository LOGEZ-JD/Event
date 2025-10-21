// src/components/GradientBlob.jsx
import React from 'react'

export default function GradientBlob(){
  return (
    <>
      <div
        className="absolute -left-40 -top-28 w-96 h-96 rounded-full blur-3xl opacity-80"
        style={{
          background: 'linear-gradient(135deg, rgba(116,57,255,0.9), rgba(8,174,234,0.75))',
          mixBlendMode: 'screen'
        }}
      />
      <div
        className="absolute -right-40 bottom-12 w-80 h-80 rounded-full blur-2xl opacity-70"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.9), rgba(255,99,132,0.6))',
          mixBlendMode: 'screen'
        }}
      />
    </>
  )
}
