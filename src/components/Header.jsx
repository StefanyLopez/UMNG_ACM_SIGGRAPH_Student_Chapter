import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useTranslation();

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* Logo */}
        <NavLink to="/" className="site-logo" aria-label={t.nav.alt_logo}>
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
              { to: '/',         label: t.nav.home },
              { to: '/about',    label: t.nav.about },
              { to: '/events',   label: t.nav.events },
              { to: '/officers', label: t.nav.officers },
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
            <li>
              <button 
                onClick={toggleLanguage} 
                className="lang-switcher"
                aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
