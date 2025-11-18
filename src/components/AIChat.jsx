import React, { useState } from 'react'

// Simple frontend-only AI assist mockup. It simulates suggestions locally.
export default function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Salut! Sunt asistentul tău. Întreabă-mă despre antrenamente, mindfulness sau instrumente AI. (demo)' },
  ])
  const [input, setInput] = useState('')

  const onSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input.trim() }
    // naive simulated reply
    const reply = {
      role: 'ai',
      content:
        input.toLowerCase().includes('mind')
          ? 'Mindfulness: începe cu 5 minute de respirație conștientă zilnic. (răspuns generat de AI - demo)'
          : input.toLowerCase().includes('ai')
          ? 'Instrumente AI: folosește modele de sumarizare pentru notițe și clasificare pentru feedback. (demo)'
          : 'Mulțumesc! Îți voi trimite un ghid scurt adaptat. (răspuns AI simulat)'
    }
    setMessages((m) => [...m, userMsg, reply])
    setInput('')
  }

  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white">
      <div className="h-64 overflow-y-auto space-y-3 mb-3">
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === 'ai' ? 'text-gray-800' : 'text-gray-900 font-medium'}>
            <span className="inline-block px-3 py-2 rounded-lg max-w-[90%]" style={{background: m.role==='ai'?'#F3F4F6':'#E5E7EB'}}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={onSend} className="flex gap-2">
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Scrie un mesaj..."
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
        <button className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Trimite</button>
      </form>
      <p className="mt-2 text-xs text-gray-500">Declarație AI: Chat-ul este o simulare locală de răspuns AI pentru demo.</p>
    </div>
  )
}
