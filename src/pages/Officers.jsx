import React from 'react';
import { OfficerCard, Badge } from '../components';
import '../styles/Officers.css';

/* ─── Datos ─────────────────────────────────────────────── */
const semestres = [
  {
    id: '2026-2',
    label: 'Semestres 2025-2 - 2026-2',
    activo: true,
    officers: [
      {
        name: 'Stefany López Buitrago',
        role: 'Presidenta/Chair',
        emoji: '👩‍💻',
        bio: 'Especializada en desarrollo Frontend, modelado 3D y dirección de proyectos. Apasionada por la producción audiovisual y la gestión de comunidades creativas.',
        socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/steff2loop/' }, { platform: 'GitHub', url: 'https://github.com/StefanyLopez' }],
      },
      {
        name: 'Nicolás García Sierra',
        role: 'Vicepresidente/Vice-Chair',
        emoji: '🎨',
        bio: 'Desarrollador frontend, enfocado en crear interfaces intuitivas, funcionales y centradas en el usuario.',
        socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolas-daniel-garcia-sierra-978aa3223/' }],
      },
      {
        name: 'Juan José Camacho',
        role: 'Secretario/Secretary',
        emoji: '🎬',
        bio: 'Desarrollador Full Stack con experiencia en producción de contenido digital. Encargado de la documentación y coordinación interna del chapter.',
        socials: [{ platform: 'GitHub', url: 'https://github.com/JuanJoII' }, { platform: 'LinkedIn', url: '#' }],
      },
      {
        name: 'Mateo Moya',
        role: 'Tesorero/Treasurer',
        emoji: '📢',
        bio: '',
        socials: [{ platform: 'LinkedIn', url: '#' }],
      },
    ],
  },
  {
    id: '2025-2',
    label: 'Semestres 2024-2 - 2025-2',
    activo: false,
    officers: [
      {
        name: 'Stefany López Buitrago',
        role: 'Presidente/Chair',
        emoji: '🖥️',
        bio: '',
        socials: [{ platform: 'GitHub', url: '#' }, { platform: 'LinkedIn', url: '#' }],
      },
      {
        name: 'María Camila Garzón',
        role: 'Vicepresidenta/Vice-Chair',
        emoji: '✨',
        bio: '',
        socials: [{ platform: 'LinkedIn', url: '#' }],
      },
      {
        name: 'Luisa Perez',
        role: 'Secretaria/Secretary',
        emoji: '🎨',
        bio: '',
        socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/luisa-mar%C3%ADa-p%C3%A9rez-vargas-03493630b/' }],
      },
      {
        name: 'Felipe Forero',
        role: 'Tesorero/Treasurer',
        emoji: '📊',
        bio: '',
        socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-forero-rodriguez-2128b123b/' }],
      },
      
    ],
  },
];

const hallOfFame = [
  { name: 'Felipe Forero',  role: 'Fundador', year: '2024', emoji: '🏆' },
  { name: 'Luisa Perez',     role: 'Cofundadora', year: '2024', emoji: '⭐' },
  { name: 'Stefany López',   role: 'Primera Presidente', year: '2024', emoji: '🎖️' },
];

/* ─── Componente ─────────────────────────────────────────── */
export default function Officers() {
  return (
    <main className="officers">

      {/* ── Page header ── */}
      <section className="page-hero" aria-label="Oficiales">
        <div className="container">
          <Badge variant="info" size="sm">El equipo</Badge>
          <h1 className="page-hero-title">Quienes hacen<br />posible el chapter</h1>
          <p className="page-hero-subtitle">
            Cada año, un equipo de estudiantes voluntarios organiza eventos,
            gestiona la comunidad y representa al chapter ante ACM SIGGRAPH International.
          </p>
        </div>
      </section>

      {/* ── Semestres ── */}
      {semestres.map(sem => (
        <section key={sem.id} className="section semestre-section" aria-labelledby={`sem-${sem.id}`}>
          <div className="container">
            <header className="semestre-header">
              <div>
                <span className="accent-line" aria-hidden="true" />
                <h2 id={`sem-${sem.id}`} className="semestre-titulo">{sem.label}</h2>
              </div>
              {sem.activo && (
                <Badge variant="success" size="md">Activo</Badge>
              )}
            </header>

            <ul className="officers-grid">
              {sem.officers.map((o, i) => (
                <li key={i}>
                  <OfficerCard {...o} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* ── Hall of fame ── */}
      <section className="section hall-section" aria-labelledby="hall-titulo">
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="hall-titulo" className="section-title">Hall of Fame</h2>
            <p className="section-subtitle">
              Officers destacados que dieron forma al chapter desde sus inicios.
            </p>
          </header>

          <ul className="hall-grid">
            {hallOfFame.map((h, i) => (
              <li key={i} className="hall-card">
                <span className="hall-emoji" aria-hidden="true">{h.emoji}</span>
                <div className="hall-info">
                  <span className="hall-anio">{h.year}</span>
                  <strong className="hall-name">{h.name}</strong>
                  <span className="hall-role">{h.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
