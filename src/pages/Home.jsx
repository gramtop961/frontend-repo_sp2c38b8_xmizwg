import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <section className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 bg-white">
              <img src={`https://images.unsplash.com/photo-1529336953121-a4bd37a2f34a?q=80&w=800&auto=format&fit=crop`} alt="Coaching" className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="font-semibold text-lg">Program {i}</h3>
              <p className="text-gray-600 mt-1">Inițiative de formare, coaching și exerciții cognitive asistate de AI.</p>
              <button onClick={()=>alert('în lucru')} className="mt-4 px-4 py-2 rounded-md bg-gray-900 text-white">Detalii — în lucru</button>
            </div>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Asistent AI (demo)</h2>
          <p className="text-gray-700 mb-4">Întreabă orice despre programe, exerciții sau AI. Răspunsurile sunt simulate local pentru demonstrație.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
