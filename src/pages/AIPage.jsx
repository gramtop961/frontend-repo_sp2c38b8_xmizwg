import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AIChat from '../components/AIChat'

export default function AIPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <section>
          <h1 className="text-3xl font-extrabold">AI & Instrumente</h1>
          <p className="mt-2 text-gray-700">Plan de integrare AI: vom folosi modele de limbaj pentru asistență, clasificare feedback, sumarizare notițe și generare de idei. Instrumente potențiale: OpenAI/Anthropic pentru LLM, Whisper pentru transcrieri, spaCy pentru NLP clasic, și sisteme vectoriale pentru căutare semantică. Utilizare responsabilă: limitarea bias-ului, explicabilitate minimă a rezultatelor, logare transparentă a interacțiunilor, respectarea confidențialității și a consimțământului explicit. Evaluare continuă a performanței și a impactului.</p>
        </section>

        <section className="rounded-xl border border-gray-200 p-6 bg-white">
          <h2 className="text-xl font-bold mb-2">Cartă etică</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Confidențialitate: minimizarea datelor, stocare criptată, retenție limitată.</li>
            <li>Consimțământ: informare clară, opțiuni de opt-in/opt-out, retragere facilă.</li>
            <li>Transparență: etichetarea conținutului asistat de AI, jurnalizarea deciziilor automate.</li>
            <li>Responsabilitate: audit periodic, canale de feedback, remediere rapidă.</li>
            <li>Echitate: testare pe seturi diverse, monitorizare de bias, intervenție umană.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Asistent AI (demo)</h2>
          <AIChat />
        </section>

        <p className="text-sm text-gray-600">Declarație AI: această pagină a fost redactată și structurată cu asistență AI.</p>
      </main>
      <Footer />
    </div>
  )
}
