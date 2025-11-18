import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">trainingpshyco</h1>
          <p className="mt-4 text-lg text-gray-700">Coaching, training și explorare cognitivă asistată de AI. Un spațiu modern, etic și transparent pentru a învăța și a evolua.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/ai-instrumente" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black transition">AI & Instrumente</Link>
            <Link to="/portofoliu" className="px-5 py-3 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 transition">Vezi portofoliu</Link>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Declarație AI: această secțiune (ero) și animația centrală au fost asistate de inteligența artificială.
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 to-white" />
    </section>
  )
}
