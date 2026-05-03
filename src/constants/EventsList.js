import translations from "../locales/translations";

const t = translations.es;

export const proximosEventos = [
  {
    id: 1,
    titulo: t.events.data.upcoming[0].titulo,
    imagenUrl: "https://i.ytimg.com/vi/elA_iyGQRx0/maxresdefault.jpg",
    fecha: "2026-04-12",
    hora: "14:00",
    descripcion: t.events.data.upcoming[0].descripcion,
    lugar: t.events.data.upcoming[0].lugar,
    tags: ["Workshop", "Blender", "Gratuito"],
    capacidad: 30,
    tipo: "workshop",
    socialLink: "https://www.instagram.com/blender.official/",
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
    fecha: "2026-05-10",
    hora: "09:00",
    descripcion: t.events.data.upcoming[2].descripcion,
    lugar: t.events.data.upcoming[2].lugar,
    tags: ["Game Jam", "Competencia", "48h"],
    capacidad: 60,
    tipo: "jam",
    registroUrl: "#",
  },
];

export const eventosPassados = [
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