import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Acasă' },
  { to: '/despre', label: 'Despre mine' },
  { to: '/portofoliu', label: 'Portofoliu' },
  { to: '/ai-instrumente', label: 'AI & Instrumente' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-gray-500/40 bg-gray-500/40 border-b border-gray-200/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="font-extrabold tracking-tight text-gray-900 text-lg">
              trainingpshyco
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-900/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="md:hidden">
              {/* Minimal mobile menu: simple links row */}
              <details className="relative">
                <summary className="list-none px-3 py-2 rounded-md text-sm font-medium bg-gray-900 text-white cursor-pointer">Meniu</summary>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-200 p-2">
                  {navItems.map((item) => (
                    <Link key={item.to} to={item.to} className="block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
