import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen text-gray-900" style={{background:'#FFE8D6'}}>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-extrabold">Despre mine</h1>
        <p className="mt-4 text-gray-800">Salut! Sunt fondatorul trainingpshyco. Lucrez la intersecția dintre psihologie, educație și tehnologie. Platforma pune accent pe etică, confidențialitate și transparență.</p>
        <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop" alt="Portret" className="rounded-xl mt-6 w-full object-cover" />
        <div className="mt-8 space-y-3">
          <a href="#" onClick={(e)=>e.preventDefault()} className="inline-flex underline">Email — în lucru</a><br />
          <a href="#" onClick={(e)=>e.preventDefault()} className="inline-flex underline">LinkedIn — în lucru</a><br />
          <a href="#" onClick={(e)=>e.preventDefault()} className="inline-flex underline">Documente — în lucru</a>
        </div>
        <p className="mt-6 text-sm text-gray-700">Declarație AI: secțiunea aceasta a fost redactată cu asistență AI pentru coerență și concizie.</p>
      </main>
      <Footer />
    </div>
  )
}
