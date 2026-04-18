import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Logo */}
        <NavLink to="/" className="site-logo" aria-label="UMNG ACM SIGGRAPH - Inicio">
          <div className="logo-mark" aria-hidden="true">
            <span>S</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">ACM SIGGRAPH</span>
            <span className="logo-sub">UMNG Student Chapter</span>
          </div>
        </NavLink>

        {/* Nav */}
        <nav className="site-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {[
              { to: '/',         label: 'Inicio' },
              { to: '/about',    label: 'Nosotros' },
              { to: '/events',   label: 'Eventos' },
              { to: '/officers', label: 'Equipo' },
            ].map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
