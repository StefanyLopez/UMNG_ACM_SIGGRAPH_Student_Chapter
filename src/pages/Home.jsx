import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Badge } from '../components';
import '../styles/Home.css';

/* ─── Datos ─────────────────────────────────────────────── */
const areas = [
  { icon: '🎨', titulo: 'Gráficos 3D',    desc: 'Modelado, escultura digital y animación tridimensional con las herramientas más usadas en la industria.', tag: 'Modelado' },
  { icon: '🎬', titulo: 'Animación',       desc: 'Principios de animación, rigging y producción de cortometrajes digitales desde concepto hasta render.', tag: 'Producción' },
  { icon: '🕶️', titulo: 'VR / AR',         desc: 'Experiencias inmersivas y aumentadas: diseño de espacios virtuales y prototipado de interfaces XR.', tag: 'Inmersivo' },
  { icon: '🖥️', titulo: 'Videojuegos',         desc: 'Diseño de videojuegos, investigación de usuarios y prototipado de productos digitales interactivos.', tag: 'Diseño' },
  { icon: '✨', titulo: 'VFX',             desc: 'Efectos visuales para cine y juegos: simulación de partículas, fluidos, telas y destrucción.', tag: 'Efectos' },
  { icon: '🤝', titulo: 'Networking',      desc: 'Conexión con profesionales de la industria, alumni y otros capítulos ACM SIGGRAPH del mundo.', tag: 'Comunidad' },
];

const stats = [
  { valor: '30+', etiqueta: 'Miembros activos' },
  { valor: '4+',  etiqueta: 'Eventos al año' },
  { valor: '4',   etiqueta: 'Semestres activos' },
  { valor: '3',   etiqueta: 'Disciplinas STEM-Arte' },
];

/* ─── Componente ─────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="hero" aria-label="Bienvenida">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <Badge variant="info" size="sm">ACM SIGGRAPH · UMNG · Cajicá - Bogotá</Badge>
          </div>
          <h1 className="hero-title">
            Donde el arte<br />
            <span className="hero-title-accent">encuentra la tecnología</span>
          </h1>
          <p className="hero-subtitle">
            Somos el capítulo estudiantil de ACM SIGGRAPH en la Universidad Militar
            Nueva Granada. Exploramos gráficos por computador, animación, VR/AR y
            diseño interactivo — juntos.
          </p>
          <div className="hero-actions">
            <Button href="/events" variant="primary" size="lg">
              Ver próximos eventos →
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Conocer el chapter
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
            <h2 className="section-title" id="areas-titulo">Qué hacemos</h2>
            <p className="section-subtitle">
              Más de seis áreas de enfoque para que explores lo que más te apasiona del
              universo de los gráficos por computador.
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
            <h2 className="cta-title">¿Listo para unirte?</h2>
            <p className="cta-text">
              Ser parte del chapter es gratis. Solo necesitas ganas de aprender,
              crear y colaborar con personas que comparten tus intereses.
            </p>
            <div className="cta-actions">
              <Button href="/officers" variant="primary" size="lg">
                Conocer el equipo
              </Button>
              <Button href="/events" variant="secondary" size="lg">
                Ver eventos
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
