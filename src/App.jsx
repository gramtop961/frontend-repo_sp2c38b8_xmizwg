import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import AIPage from './pages/AIPage'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/despre" element={<About />} />
      <Route path="/portofoliu" element={<Portfolio />} />
      <Route path="/ai-instrumente" element={<AIPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
