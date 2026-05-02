import React from "react";
import { Card, Badge, Button, Timeline, EventCard } from "../components";
import { useTranslation } from "../context/LanguageContext";
import "../styles/Events.css";

/* ─── Componente ─────────────────────────────────────────── */
export default function Events() {
  const { t, language } = useTranslation();

  const proximosEventos = [
    {
      id: 1,
      titulo: t.events.data.upcoming[0].titulo,
      fecha: "2026-04-12",
      hora: "14:00",
      descripcion: t.events.data.upcoming[0].descripcion,
      lugar: t.events.data.upcoming[0].lugar,
      tags: ["Workshop", "Blender", "Gratuito"],
      capacidad: 30,
      tipo: "workshop",
      registroUrl: "#",
    },
    {
      id: 2,
      titulo: t.events.data.upcoming[1].titulo,
      fecha: "2026-04-25",
      hora: "16:00",
      descripcion: t.events.data.upcoming[1].descripcion,
      lugar: t.events.data.upcoming[1].lugar,
      tags: ["Charla", "VFX", "Industria"],
      capacidad: 80,
      tipo: "charla",
      registroUrl: "#",
    },
    {
      id: 3,
      titulo: t.events.data.upcoming[2].titulo,
      imagenUrl: "https://i.ytimg.com/vi/elA_iyGQRx0/maxresdefault.jpg",
      fecha: "2026-05-10",
      hora: "09:00",
      descripcion: t.events.data.upcoming[2].descripcion,
      lugar: t.events.data.upcoming[2].lugar,
      tags: ["Game Jam", "Competencia", "48h"],
      capacidad: 60,
      tipo: "jam",
      socialLink: "https://www.instagram.com/blender.official/",
      registroUrl: "#",
    },
  ];

  const eventosPassados = [
    {
      title: t.events.data.past[0].title,
      date: "2026-03-14",
      speaker: null,
      description: t.events.data.past[0].description,
      tags: ["Workshop", "After Effects", "Motion"],
      attendees: 22,
    },
    {
      title: t.events.data.past[1].title,
      date: "2026-03-05",
      speaker: "Mg. Laura Pinzón — UNAL",
      description: t.events.data.past[1].description,
      tags: ["Charla", "IA", "Diseño"],
      attendees: 47,
    },
    {
      title: t.events.data.past[2].title,
      date: "2026-03-05",
      speaker: null,
      description: t.events.data.past[2].description,
      tags: ["Workshop", "Maya", "Animación"],
      attendees: 18,
    },
    {
      title: t.events.data.past[3].title,
      date: "2026-02-06",
      speaker: null,
      description: t.events.data.past[3].description,
      tags: ["Portfolio", "Feedback", "Comunidad"],
      attendees: 14,
    },
    {
      title: t.events.data.past[4].title,
      date: "2026-01-24",
      speaker: "PhD. Marcela Torres — Profesora UMNG",
      description: t.events.data.past[4].description,
      tags: ["Charla", "CG", "Tendencias"],
      attendees: 61,
    },
  ];

  const tipoColor = {
    workshop: "info",
    charla: "success",
    jam: "warning",
  };

  function formatFecha(dateStr, lang) {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    const mesesEs = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];
    const mesesEn = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const meses = lang === "en" ? mesesEn : mesesEs;
    return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`;
  }

  return (
    <main className="events">
      {/* ── Page header ── */}
      <section className="page-hero" aria-label={t.nav.events}>
        <div className="container">
          <Badge variant="info" size="sm">
            {t.events.hero.eyebrow}
          </Badge>
          <h1 className="page-hero-title">{t.events.hero.title}</h1>
          <p className="page-hero-subtitle">{t.events.hero.subtitle}</p>
        </div>
      </section>

      {/* ── Próximos ── */}
      <section className="section" aria-labelledby="proximos-titulo">
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="proximos-titulo" className="section-title">
              {t.events.upcoming.title}
            </h2>
          </header>

          <ul className="grid grid-auto events-grid">
            {proximosEventos.map((ev) => (
              <li key={ev.id}>
                <EventCard
                  event={ev}
                  tipoColor={tipoColor}
                  formatFecha={formatFecha}
                  language={language}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pasados ── */}
      <section
        className="section pasados-section"
        aria-labelledby="pasados-titulo"
      >
        <div className="container">
          <header className="section-header">
            <span className="accent-line" aria-hidden="true" />
            <h2 id="pasados-titulo" className="section-title">
              {t.events.past.title}
            </h2>
            <p className="section-subtitle">{t.events.past.subtitle}</p>
          </header>

          <Timeline items={eventosPassados} />
        </div>
      </section>

      {/* ── Archivo ── */}
      <section
        className="section archivo-section"
        aria-labelledby="archivo-titulo"
      >
        <div className="container">
          <div className="archivo-box">
            <span className="archivo-icon" aria-hidden="true">
              📁
            </span>
            <div>
              <h2 id="archivo-titulo" className="archivo-titulo">
                {t.events.archive.title}
              </h2>
              <p className="archivo-desc">{t.events.archive.desc}</p>
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
