import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const items = [
  { title: 'Workshop atenție & memorie', img: 'https://images.unsplash.com/photo-1554295405-ffe3a8fd36a5?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Program coaching 1:1', img: 'https://images.unsplash.com/photo-1518081461904-9ac5b5f2eac8?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Analiza feedback-ului cu AI', img: 'https://images.unsplash.com/photo-1534759846116-5797f4b6f6b2?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-extrabold">Portofoliu</h1>
        <p className="mt-2 text-gray-700">Selecție de proiecte și programe.&nbsp; Declarație AI: descrierile au fost editate cu sprijin AI.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
              <img src={it.img} alt={it.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{it.title}</h3>
                <button onClick={()=>alert('în lucru')} className="mt-3 px-4 py-2 rounded-md bg-gray-900 text-white">Detalii — în lucru</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
