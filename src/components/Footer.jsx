import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}/logo_siggraph.svg`} alt="icono" className="logo-mark" />
            <span className="footer-chapter-name">UMNG ACM SIGGRAPH</span>
          </div>
          <p className="footer-desc">
            {t.footer.description}
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h3 className="footer-col-title">{t.footer.links}</h3>
            <ul>
              <li><NavLink to="/" className="footer-link">{t.nav.home}</NavLink></li>
              <li><NavLink to="/about" className="footer-link">{t.nav.about}</NavLink></li>
              <li><NavLink to="/events" className="footer-link">{t.nav.events}</NavLink></li>
              <li><NavLink to="/officers" className="footer-link">{t.nav.officers}</NavLink></li>
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
            <h3 className="footer-col-title">{t.footer.social}</h3>
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
