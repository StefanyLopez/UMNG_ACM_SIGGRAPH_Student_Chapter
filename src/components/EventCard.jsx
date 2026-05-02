import React from 'react';
import { Badge, Button } from './index';
import { useTranslation } from '../context/LanguageContext';

export default function EventCard({ event, tipoColor, formatFecha, language }) {
  const { t } = useTranslation();

  return (
    <article className="event-card">
      {event.imagenUrl && (
        <div className="event-card-image">
          <img src={event.imagenUrl} alt={event.titulo} />
        </div>
      )}

      <div className="event-card-content">
        <div className="event-card-header">
          <Badge variant={tipoColor[event.tipo] || 'neutral'} size="sm">
            {event.tipo.charAt(0).toUpperCase() + event.tipo.slice(1)}
          </Badge>
          <time className="event-fecha">{formatFecha(event.fecha, language)}</time>
        </div>

        <h3 className="event-titulo">{event.titulo}</h3>
        <p className="event-desc">{event.descripcion}</p>

        <div className="event-meta">
          <span>{t.events.meta.location.replace('{place}', event.lugar)}</span>
          <span>{t.events.meta.time.replace('{time}', event.hora)}</span>
          <span>{t.events.meta.capacity.replace('{capacity}', event.capacidad)}</span>
        </div>

        <div className="event-tags">
          {event.tags.map((tag, i) => (
            <Badge key={i} variant="neutral" size="sm">{tag}</Badge>
          ))}
        </div>
      </div>

      <div className="event-card-footer">
        {event.socialLink && (
          <a 
            href={event.socialLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="event-social-link"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/>
            </svg>
            {t.events.meta.viewPost || 'Ver publicación'}
          </a>
        )}
        <Button href={event.registroUrl} variant="primary" size="sm" className="event-cta">
          {t.events.meta.register}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5m14 0-4 4m4-4-4-4"/>
          </svg>
        </Button>
      </div>
    </article>
  );
}