import React from 'react';
import { OfficerCard, Badge } from '../components';
import { useTranslation } from '../context/LanguageContext';
import '../styles/Officers.css';

/* ─── Componente ─────────────────────────────────────────── */
export default function Officers() {
  const { t } = useTranslation();

  const semestres = [
    {
      id: '2026-2',
      label: t.officers.semesters.s1,
      activo: true,
      officers: [
        {
          name: 'Stefany López Buitrago',
          role: t.officers.roles.president,
          emoji: '👩‍💻',
          bio: t.officers.bios.stefany,
          socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/steff2loop/' }, { platform: 'GitHub', url: 'https://github.com/StefanyLopez' }],
        },
        {
          name: 'Nicolás García Sierra',
          role: t.officers.roles.vice,
          emoji: '🎨',
          bio: t.officers.bios.nicolas,
          socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/nicolas-daniel-garcia-sierra-978aa3223/' }],
        },
        {
          name: 'Juan José Camacho',
          role: t.officers.roles.secretary,
          emoji: '🎬',
          bio: t.officers.bios.juan,
          socials: [{ platform: 'GitHub', url: 'https://github.com/JuanJoII' }, { platform: 'LinkedIn', url: '#' }],
        },
        {
          name: 'Mateo Moya',
          role: t.officers.roles.treasurer,
          emoji: '📢',
          bio: '',
          socials: [{ platform: 'LinkedIn', url: '#' }],
        },
      ],
    },
    {
      id: '2025-2',
      label: t.officers.semesters.s2,
      activo: false,
      officers: [
        {
          name: 'Stefany López Buitrago',
          role: t.officers.roles.president_alt,
          emoji: '🖥️',
          bio: '',
          socials: [{ platform: 'GitHub', url: '#' }, { platform: 'LinkedIn', url: '#' }],
        },
        {
          name: 'María Camila Garzón',
          role: t.officers.roles.vice_alt,
          emoji: '✨',
          bio: '',
          socials: [{ platform: 'LinkedIn', url: '#' }],
        },
        {
          name: 'Luisa Perez',
          role: t.officers.roles.secretary_alt,
          emoji: '🎨',
          bio: '',
          socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/luisa-mar%C3%ADa-p%C3%A9rez-vargas-03493630b/' }],
        },
        {
          name: 'Felipe Forero',
          role: t.officers.roles.treasurer,
          emoji: '📊',
          bio: '',
          socials: [{ platform: 'LinkedIn', url: 'https://www.linkedin.com/in/felipe-forero-rodriguez-2128b123b/' }],
        },
      ],
    },
  ];

  const hallOfFame = [
    { name: 'Felipe Forero',  role: t.officers.hall_of_fame.roles.founder, year: '2024', emoji: '🏆' },
    { name: 'Luisa Perez',     role: t.officers.hall_of_fame.roles.cofounder, year: '2024', emoji: '⭐' },
    { name: 'Stefany López',   role: t.officers.hall_of_fame.roles.first_president, year: '2024', emoji: '🎖️' },
  ];

  return (
    <main className="officers">

      {/* ── Page header ── */}
      <section className="page-hero" aria-label={t.nav.officers}>
        <div className="container">
          <Badge variant="info" size="sm">{t.officers.hero.eyebrow}</Badge>
          <h1 className="page-hero-title">{t.officers.hero.title}<br />{t.officers.hero.title_accent}</h1>
          <p className="page-hero-subtitle">
            {t.officers.hero.subtitle}
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
                <Badge variant="success" size="md">{t.officers.active}</Badge>
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
            <h2 id="hall-titulo" className="section-title">{t.officers.hall_of_fame.title}</h2>
            <p className="section-subtitle">
              {t.officers.hall_of_fame.subtitle}
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
