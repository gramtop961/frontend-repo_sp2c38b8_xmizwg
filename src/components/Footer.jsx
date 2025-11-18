import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} trainingpshyco. Toate drepturile rezervate.</p>
        <div className="flex items-center gap-4">
          <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-gray-900 underline">Rețele sociale — în lucru</a>
          <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-gray-900 underline">CV — în lucru</a>
          <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-gray-900 underline">Tutoriale — în lucru</a>
        </div>
      </div>
    </footer>
  )
}
