import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
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
            © {year} UMNG ACM SIGGRAPH Student Chapter · Cajicá - Bogotá, Colombia
          </p>
          <p className="footer-copy footer-copy--right">
            Afiliado a <a href="https://www.siggraph.org" target="_blank" rel="noopener noreferrer">ACM SIGGRAPH</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
