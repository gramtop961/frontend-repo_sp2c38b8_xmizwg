import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const submit = (e) => {
    e.preventDefault()
    alert('în lucru')
  }
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <p className="mt-2 text-gray-700">Completează formularul. Datele de contact sunt marcate „în lucru” până la publicarea oficială.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium">Nume</label>
            <input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300" placeholder="în lucru" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300" placeholder="în lucru" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mesaj</label>
            <textarea className="mt-1 w-full px-3 py-2 rounded-md border border-gray-300 h-32" placeholder="în lucru" />
          </div>
          <button className="px-4 py-2 rounded-md bg-gray-900 text-white">Trimite — în lucru</button>
        </form>
        <div className="mt-8 space-y-2 text-sm">
          <p><strong>Telefon:</strong> în lucru</p>
          <p><strong>Adresă:</strong> în lucru</p>
          <p><strong>Program:</strong> în lucru</p>
        </div>
        <p className="mt-6 text-sm text-gray-600">Declarație AI: textul formularului și mesajele au fost asistate de AI.</p>
      </main>
      <Footer />
    </div>
  )
}
