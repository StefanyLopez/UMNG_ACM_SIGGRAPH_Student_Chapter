import React from "react";
import { Card, Badge } from "../components";
import { useTranslation } from "../context/LanguageContext";
import "../styles/About.css";

/* ─── Componente ─────────────────────────────────────────── */
export default function About() {
  const { t } = useTranslation();

  const areas = [
    { icon: "🎨", nombre: t.about.areas.graphics },
    { icon: "🎬", nombre: t.about.areas.animation },
    { icon: "🕶️", nombre: t.about.areas.vr },
    { icon: "📱", nombre: t.about.areas.ar },
    { icon: "🖥️", nombre: t.about.areas.uiux },
    { icon: "✨", nombre: t.about.areas.vfx },
    { icon: "🎮", nombre: t.about.areas.games },
    { icon: "🤖", nombre: t.about.areas.ai },
  ];

  const valores = [
    {
      icon: "🔬",
      titulo: t.about.values.rigor.title,
      desc: t.about.values.rigor.desc,
    },
    {
      icon: "🌱",
      titulo: t.about.values.learning.title,
      desc: t.about.values.learning.desc,
    },
    {
      icon: "🤝",
      titulo: t.about.values.community.title,
      desc: t.about.values.community.desc,
    },
    {
      icon: "🌍",
      titulo: t.about.values.impact.title,
      desc: t.about.values.impact.desc,
    },
  ];

  const historia = [
    { año: "2024-2", hito: t.about.history.h1 },
    { año: "2024-2", hito: t.about.history.h2 },
    { año: "2025-2", hito: t.about.history.h3 },
    { año: "2026-2", hito: t.about.history.h4 },
  ];

  return (
    <main className="about">
      {/* ── Header ── */}
      <section className="page-hero" aria-label={t.nav.about}>
        <div className="container">
          <Badge variant="info" size="sm">
            {t.about.hero.eyebrow}
          </Badge>
          <h1 className="page-hero-title">
            {t.about.hero.title}
            <br />
            {t.about.hero.title_accent}
          </h1>
          <p className="page-hero-subtitle">{t.about.hero.subtitle}</p>
        </div>
      </section>

      {/* ── Misión & Áreas ── */}
      <section className="section" aria-labelledby="mision-titulo">
        <div className="container about-split">
          <div className="about-mission">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="mision-titulo" className="section-title">
              {t.about.mission.title}
            </h2>
            <p className="about-mission-text">{t.about.mission.text}</p>

            <div className="about-vision">
              <h3 className="about-vision-title">{t.about.vision.title}</h3>
              <p>{t.about.vision.text}</p>
            </div>
          </div>

          <div className="about-areas">
            <h3 className="about-areas-title">{t.about.areas.title}</h3>
            <ul className="areas-grid-sm">
              {areas.map((a, i) => (
                <li key={i} className="area-chip">
                  <span aria-hidden="true">{a.icon}</span>
                  {a.nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Valores ── */}
      <section
        className="section valores-section"
        aria-labelledby="valores-titulo"
      >
        <div className="container">
          <header className="section-header text-center">
            <span
              className="accent-line"
              style={{ margin: "0 auto var(--space-4)" }}
              aria-hidden="true"
            />
            <h2 id="valores-titulo" className="section-title">
              {t.about.values.title}
            </h2>
          </header>

          <ul className="grid grid-auto">
            {valores.map((v, i) => (
              <li key={i}>
                <Card variant="default" className="valor-card">
                  <div className="valor-icon" aria-hidden="true">
                    {v.icon}
                  </div>
                  <h3 className="valor-titulo">{v.titulo}</h3>
                  <p className="valor-desc">{v.desc}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Historia ── */}
      <section
        className="section historia-section"
        aria-labelledby="historia-titulo"
      >
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="historia-titulo" className="section-title">
              {t.about.history.title}
            </h2>
            <p className="section-subtitle">{t.about.history.subtitle}</p>
          </header>

          <ol className="historia-timeline">
            {historia.map((h, i) => (
              <li key={i} className="historia-item">
                <div className="historia-anio">{h.año}</div>
                <div className="historia-hito">{h.hito}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
