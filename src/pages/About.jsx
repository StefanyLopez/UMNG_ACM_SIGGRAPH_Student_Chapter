import React from 'react';
import { Card, Badge } from '../components';
import '../styles/About.css';

/* ─── Datos ─────────────────────────────────────────────── */
const areas = [
  { icon: '🎨', nombre: 'Gráficos 3D' },
  { icon: '🎬', nombre: 'Animación' },
  { icon: '🕶️', nombre: 'Realidad Virtual' },
  { icon: '📱', nombre: 'Realidad Aumentada' },
  { icon: '🖥️', nombre: 'UI / UX Design' },
  { icon: '✨', nombre: 'Efectos Visuales' },
  { icon: '🎮', nombre: 'Videojuegos' },
  { icon: '🤖', nombre: 'IA Generativa' },
];

const valores = [
  { icon: '🔬', titulo: 'Rigor técnico', desc: 'Aprendemos las herramientas correctamente antes de romper las reglas. La técnica sólida libera la creatividad.' },
  { icon: '🌱', titulo: 'Aprendizaje abierto', desc: 'Todo el mundo fue principiante. Celebramos las preguntas y los errores como parte del proceso.' },
  { icon: '🤝', titulo: 'Comunidad activa', desc: 'Construimos una red real: nos apoyamos, colaboramos en proyectos y celebramos los logros del otro.' },
  { icon: '🌍', titulo: 'Impacto local', desc: 'Conectamos a la industria colombiana con el estándar global de ACM SIGGRAPH desde Bogotá.' },
];

const historia = [
  { año: '2024-2', hito: 'Fundación del chapter en la UMNG como primer capítulo estudiantil de ACM SIGGRAPH en Latinoamerica.' },
  { año: '2024-2', hito: 'Primer ciclo de workshops: Blender, Substance Painter y principios de Modelado. Más de 80 asistentes.' },
  { año: '2025-2', hito: 'Afiliación oficial a ACM SIGGRAPH International. Primeros miembros participando en la conferencia SIGGRAPH 2025 Vancouver.' },
  { año: '2026-2', hito: 'Lanzamiento del sitio web oficial y apertura de convocatoria semestral de nuevos miembros.' },
];

/* ─── Componente ─────────────────────────────────────────── */
export default function About() {
  return (
    <main className="about">

      {/* ── Header ── */}
      <section className="page-hero" aria-label="Sobre nosotros">
        <div className="container">
          <Badge variant="info" size="sm">Sobre el chapter</Badge>
          <h1 className="page-hero-title">Una comunidad para<br />creadores digitales</h1>
          <p className="page-hero-subtitle">
            El UMNG ACM SIGGRAPH Student Chapter es el espacio donde estudiantes
            de ingeniería, diseño y multimedia se reúnen para explorar la intersección
            entre arte y tecnología.
          </p>
        </div>
      </section>

      {/* ── Misión & Áreas ── */}
      <section className="section" aria-labelledby="mision-titulo">
        <div className="container about-split">
          <div className="about-mission">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="mision-titulo" className="section-title">Misión</h2>
            <p className="about-mission-text">
              Formar una comunidad universitaria de alta calidad alrededor del
              estudio, la práctica y la difusión de los gráficos por computador,
              la animación digital y los medios interactivos — con estándares
              internacionales ACM SIGGRAPH.
            </p>

            <div className="about-vision">
              <h3 className="about-vision-title">Visión</h3>
              <p>
                Ser el capítulo de referencia en Latinoamérica para la formación
                creativo-técnica en artes digitales, conectando a la comunidad
                universitaria con la industria global.
              </p>
            </div>
          </div>

          <div className="about-areas">
            <h3 className="about-areas-title">Áreas de enfoque</h3>
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
      <section className="section valores-section" aria-labelledby="valores-titulo">
        <div className="container">
          <header className="section-header text-center">
            <span className="accent-line" style={{ margin: '0 auto var(--space-4)' }} aria-hidden="true" />
            <h2 id="valores-titulo" className="section-title">Nuestros valores</h2>
          </header>

          <ul className="grid grid-auto">
            {valores.map((v, i) => (
              <li key={i}>
                <Card variant="default" className="valor-card">
                  <div className="valor-icon" aria-hidden="true">{v.icon}</div>
                  <h3 className="valor-titulo">{v.titulo}</h3>
                  <p className="valor-desc">{v.desc}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Historia ── */}
      <section className="section historia-section" aria-labelledby="historia-titulo">
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="historia-titulo" className="section-title">Historia del chapter</h2>
            <p className="section-subtitle">Dos años construyendo comunidad.</p>
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
