import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 py-8">
      <div className="container px-6 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} EventStudio</div>
        <div>Made with care • hello@eventstudio.example</div>
      </div>
    </footer>
  )
}
