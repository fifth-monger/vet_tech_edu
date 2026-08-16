import { NavLink, Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react'

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M17 8v10H7v12h10v10h14V30h10V18H31V8H17Z" /><path className="brand-paw" d="M19 29c0-3 2.2-5 5-5s5 2 5 5c0 2.3-2 4-5 4s-5-1.7-5-4Z" /></svg></span>
}

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); document.querySelector('main')?.focus() }, [location.pathname])
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="brand" to="/" aria-label="Vet Tech Learning home"><BrandMark /><span><strong>Vet Tech</strong><small>Learning</small></span></NavLink>
          <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /><span className="sr-only">Toggle navigation</span></button>
          <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
            <NavLink to="/" end>Dashboard</NavLink><NavLink to="/courses">Courses</NavLink><NavLink to="/review">Review</NavLink><NavLink className="nav-progress" to="/progress">My progress</NavLink>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex="-1"><Outlet /></main>
      <footer className="site-footer"><div className="page-container footer-grid"><div><div className="brand brand--footer"><BrandMark /><span><strong>Vet Tech Learning</strong></span></div><p>Clear foundations for thoughtful veterinary care.</p></div><div className="footer-notice"><strong>Educational use only</strong><p>This app supports study. It does not replace supervised training, veterinary direction, clinic protocols, or applicable laws.</p></div></div></footer>
    </div>
  )
}
