import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight text-slate-950" onClick={closeMenu}>
          <span className="grid size-9 place-items-center rounded-xl bg-violet-600 text-sm text-white">BT</span>
          <span>B.Tech <span className="text-violet-700">Tech-Guide</span></span>
        </Link>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-links"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl">{isOpen ? '×' : '☰'}</span>
        </button>
        <div id="primary-links" className={`${isOpen ? 'flex' : 'hidden'} order-3 w-full flex-col gap-1 pb-2 md:order-none md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:pb-0`}>
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-violet-50 text-violet-800' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-violet-50 text-violet-800' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}>Projects</NavLink>
          <NavLink to="/internships" onClick={closeMenu} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-violet-50 text-violet-800' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`}>Internships</NavLink>
        </div>
      </nav>
    </header>
  )
}
