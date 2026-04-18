import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Officers from './pages/Officers';
import './styles/tokens.css';
import './styles/App.css';

/* ─── Header ─────────────────────────────────────────────── */
function Header() {
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
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-mark logo-mark--sm" aria-hidden="true"><span>S</span></div>
            <span className="footer-chapter-name">UMNG ACM SIGGRAPH</span>
          </div>
          <p className="footer-desc">
            Capítulo estudiantil de la Universidad Militar Nueva Granada.
            Conectamos arte y tecnología en Bogotá.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h3 className="footer-col-title">Páginas</h3>
            <ul>
              <li><NavLink to="/" className="footer-link">Inicio</NavLink></li>
              <li><NavLink to="/about" className="footer-link">Nosotros</NavLink></li>
              <li><NavLink to="/events" className="footer-link">Eventos</NavLink></li>
              <li><NavLink to="/officers" className="footer-link">Equipo</NavLink></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">ACM SIGGRAPH</h3>
            <ul>
              <li><a href="https://www.siggraph.org" target="_blank" rel="noopener noreferrer" className="footer-link">siggraph.org</a></li>
              <li><a href="https://www.acm.org" target="_blank" rel="noopener noreferrer" className="footer-link">acm.org</a></li>
              <li><a href="https://chapters.siggraph.org" target="_blank" rel="noopener noreferrer" className="footer-link">Student Chapters</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col-title">Contacto</h3>
            <ul>
              <li>
                <a href="mailto:siggraph@umng.edu.co" className="footer-link">
                  siggraph@umng.edu.co
                </a>
              </li>
              <li><a href="#" className="footer-link">Instagram</a></li>
              <li><a href="#" className="footer-link">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copy">
            © {anio} UMNG ACM SIGGRAPH Student Chapter · Cajicá - Bogotá, Colombia
          </p>
          <p className="footer-copy footer-copy--right">
            Afiliado a <a href="https://www.siggraph.org" target="_blank" rel="noopener noreferrer">ACM SIGGRAPH</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/events"   element={<Events />} />
          <Route path="/officers" element={<Officers />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
