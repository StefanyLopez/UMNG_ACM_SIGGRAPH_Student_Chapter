import React from 'react';
import { Card, Badge, Button, Timeline } from '../components';
import { useTranslation } from '../context/LanguageContext';
import '../styles/Events.css';

/* ─── Datos ─────────────────────────────────────────────── */
const proximosEventos = [
  {
    id: 1,
    titulo: 'Workshop: Introducción a Blender',
    fecha: '2026-04-12',
    hora: '14:00',
    descripcion: 'Aprende los fundamentos de Blender: navegación, modelado básico y render. Perfecto para principiantes sin experiencia previa.',
    lugar: 'Sala de Cómputo UMNG',
    tags: ['Workshop', 'Blender', 'Gratuito'],
    capacidad: 30,
    tipo: 'workshop',
    registroUrl: '#',
  },
  {
    id: 2,
    titulo: 'Charla: VFX en la industria colombiana',
    fecha: '2026-04-25',
    hora: '16:00',
    descripcion: 'Profesionales del sector audiovisual comparten su experiencia creando efectos visuales para cine y televisión nacional.',
    lugar: 'Auditorio Principal UMNG',
    tags: ['Charla', 'VFX', 'Industria'],
    capacidad: 80,
    tipo: 'charla',
    registroUrl: '#',
  },
  {
    id: 3,
    titulo: 'Game Jam Interna — Primavera 2026',
    fecha: '2026-05-10',
    hora: '09:00',
    descripcion: 'Crea un videojuego en 48 horas con tu equipo. Tema a revelar el día del evento. Todos los niveles son bienvenidos.',
    lugar: 'Campus UMNG',
    tags: ['Game Jam', 'Competencia', '48h'],
    capacidad: 60,
    tipo: 'jam',
    registroUrl: '#',
  },
];

const eventosPassados = [
  {
    title: 'Workshop: Motion Graphics en After Effects',
    date: '2026-03-14',
    speaker: null,
    description: 'Introducción a la animación de texto, formas y composición de cámara con Adobe After Effects.',
    tags: ['Workshop', 'After Effects', 'Motion'],
    attendees: 22,
  },
  {
    title: 'Charla: IA Generativa y el futuro del diseño',
    date: '2026-03-05',
    speaker: 'Mg. Laura Pinzón — UNAL',
    description: 'Reflexión crítica sobre el impacto de modelos generativos (Midjourney, Stable Diffusion) en el flujo de trabajo del diseñador.',
    tags: ['Charla', 'IA', 'Diseño'],
    attendees: 47,
  },
  {
    title: 'Workshop: Rigging de personajes en Maya',
    date: '2026-02-20',
    speaker: null,
    description: 'Creación de esqueletos, controladores y blend shapes para personajes animables en producciones 3D.',
    tags: ['Workshop', 'Maya', 'Animación'],
    attendees: 18,
  },
  {
    title: 'Sesión abierta: Portfolio Review',
    date: '2026-02-06',
    speaker: null,
    description: 'Revisión colectiva de portafolios de miembros con feedback constructivo del equipo y de docentes invitados.',
    tags: ['Portfolio', 'Feedback', 'Comunidad'],
    attendees: 14,
  },
  {
    title: 'Charla inaugural 2026: Tendencias en CG',
    date: '2026-01-24',
    speaker: 'PhD. Marcela Torres — Profesora UMNG',
    description: 'Panorama de las tendencias actuales en computer graphics: path tracing en tiempo real, NeRF y gráficos neuronales.',
    tags: ['Charla', 'CG', 'Tendencias'],
    attendees: 61,
  },
];

const tipoColor = {
  workshop: 'info',
  charla:   'success',
  jam:      'warning',
};

function formatFecha(dateStr, lang) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const mesesEs = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const mesesEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const meses = lang === 'en' ? mesesEn : mesesEs;
  return `${parseInt(d)} ${meses[parseInt(m)-1]} ${y}`;
}

/* ─── Componente ─────────────────────────────────────────── */
export default function Events() {
  const { t, language } = useTranslation();

  return (
    <main className="events">

      {/* ── Page header ── */}
      <section className="page-hero" aria-label={t.nav.events}>
        <div className="container">
          <Badge variant="info" size="sm">{t.events.hero.eyebrow}</Badge>
          <h1 className="page-hero-title">{t.events.hero.title}</h1>
          <p className="page-hero-subtitle">
            {t.events.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Próximos ── */}
      <section className="section" aria-labelledby="proximos-titulo">
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="proximos-titulo" className="section-title">{t.events.upcoming.title}</h2>
          </header>

          <ul className="grid grid-auto events-grid">
            {proximosEventos.map(ev => (
              <li key={ev.id}>
                <Card variant="default" className="event-card">
                  <div className="event-card-header">
                    <Badge variant={tipoColor[ev.tipo] || 'neutral'} size="sm">
                      {ev.tipo.charAt(0).toUpperCase() + ev.tipo.slice(1)}
                    </Badge>
                    <time className="event-fecha">{formatFecha(ev.fecha, language)}</time>
                  </div>

                  <h3 className="event-titulo">{ev.titulo}</h3>
                  <p className="event-desc">{ev.descripcion}</p>

                  <div className="event-meta">
                    <span>{t.events.meta.location.replace('{place}', ev.lugar)}</span>
                    <span>{t.events.meta.time.replace('{time}', ev.hora)}</span>
                    <span>{t.events.meta.capacity.replace('{capacity}', ev.capacidad)}</span>
                  </div>

                  <div className="event-tags">
                    {ev.tags.map((tag, i) => (
                      <Badge key={i} variant="neutral" size="sm">{tag}</Badge>
                    ))}
                  </div>

                  <Button href={ev.registroUrl} variant="primary" size="sm" className="event-cta">
                    {t.events.meta.register}
                  </Button>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pasados ── */}
      <section className="section pasados-section" aria-labelledby="pasados-titulo">
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="pasados-titulo" className="section-title">{t.events.past.title}</h2>
            <p className="section-subtitle">
              {t.events.past.subtitle}
            </p>
          </header>

          <Timeline items={eventosPassados} />
        </div>
      </section>

      {/* ── Archivo ── */}
      <section className="section archivo-section" aria-labelledby="archivo-titulo">
        <div className="container">
          <div className="archivo-box">
            <span className="archivo-icon" aria-hidden="true">📁</span>
            <div>
              <h2 id="archivo-titulo" className="archivo-titulo">{t.events.archive.title}</h2>
              <p className="archivo-desc">
                {t.events.archive.desc}
              </p>
            </div>
            <Button variant="tertiary" size="sm" disabled>
              {t.events.archive.btn}
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
