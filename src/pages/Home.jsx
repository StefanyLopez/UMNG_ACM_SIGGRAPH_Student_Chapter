import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from '../components';
import { useTranslation } from '../context/LanguageContext';
import '../styles/Home.css';

/* ─── Componente ─────────────────────────────────────────── */
export default function Home() {
  const { t } = useTranslation();

  const areas = [
    { icon: '🎨', titulo: t.areas.graphics.title,    desc: t.areas.graphics.desc, tag: t.areas.graphics.tag },
    { icon: '🎬', titulo: t.areas.animation.title,   desc: t.areas.animation.desc, tag: t.areas.animation.tag },
    { icon: '🕶️', titulo: t.areas.vr_ar.title,       desc: t.areas.vr_ar.desc, tag: t.areas.vr_ar.tag },
    { icon: '🖥️', titulo: t.areas.games.title,       desc: t.areas.games.desc, tag: t.areas.games.tag },
    { icon: '✨', titulo: t.areas.vfx.title,         desc: t.areas.vfx.desc, tag: t.areas.vfx.tag },
    { icon: '🤝', titulo: t.areas.networking.title,  desc: t.areas.networking.desc, tag: t.areas.networking.tag },
  ];

  const stats = [
    { valor: '30+', etiqueta: t.stats.members },
    { valor: '4+',  etiqueta: t.stats.events_year },
    { valor: '4',   etiqueta: t.stats.semesters },
    { valor: '3',   etiqueta: t.stats.disciplines },
  ];

  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="hero" aria-label="Bienvenida">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <Badge variant="info" size="sm">{t.hero.eyebrow}</Badge>
          </div>
          <h1 className="hero-title">
            {t.hero.title}<br />
            <span className="hero-title-accent">{t.hero.title_accent}</span>
          </h1>
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
          <div className="hero-actions">
            <Button href="/events" variant="primary" size="lg">
              {t.hero.cta_events}
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              {t.hero.cta_about}
            </Button>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">↓</div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar" aria-label="Estadísticas">
        <div className="container">
          <ul className="stats-list">
            {stats.map((s, i) => (
              <li key={i} className="stat-item">
                <span className="stat-valor">{s.valor}</span>
                <span className="stat-etiqueta">{s.etiqueta}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Áreas ── */}
      <section className="section areas-section" aria-labelledby="areas-titulo">
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 className="section-title" id="areas-titulo">{t.areas.title}</h2>
            <p className="section-subtitle">
              {t.areas.subtitle}
            </p>
          </header>

          <ul className="grid grid-auto areas-grid">
            {areas.map((area, i) => (
              <li key={i}>
                <Card variant="default" className="area-card">
                  <div className="area-icon" aria-hidden="true">{area.icon}</div>
                  <div className="area-body">
                    <div className="area-header-row">
                      <h3 className="area-titulo">{area.titulo}</h3>
                      <Badge variant="info" size="sm">{area.tag}</Badge>
                    </div>
                    <p className="area-desc">{area.desc}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section" aria-label="Llamado a la acción">
        <div className="container">
          <div className="cta-box">
            <span className="cta-icon" aria-hidden="true">🚀</span>
            <h2 className="cta-title">{t.cta.title}</h2>
            <p className="cta-text">
              {t.cta.text}
            </p>
            <div className="cta-actions">
              <Button href="/officers" variant="primary" size="lg">
                {t.cta.btn_team}
              </Button>
              <Button href="/events" variant="secondary" size="lg">
                {t.cta.btn_events}
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
