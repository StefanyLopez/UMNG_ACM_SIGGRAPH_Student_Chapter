/**
 * Timeline.jsx — Timeline visual de eventos
 * Props:
 *   items  {Array<{title, description, date, speaker, tags, attendees}>}
 */
import React from 'react';
import Badge from './Badge';
import '../styles/Timeline.css';

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot" />
            {index < items.length - 1 && <div className="timeline-line" />}
          </div>

          <div className="timeline-content">
            <div className="timeline-meta">
              <time className="timeline-date">{formatDate(item.date)}</time>
              {item.attendees !== undefined && (
                <span className="timeline-attendees">
                  {item.attendees} asistentes
                </span>
              )}
            </div>

            <h3 className="timeline-title">{item.title}</h3>

            {item.speaker && (
              <p className="timeline-speaker">🎤 {item.speaker}</p>
            )}

            <p className="timeline-description">{item.description}</p>

            {item.tags && item.tags.length > 0 && (
              <div className="timeline-tags">
                {item.tags.map((tag, i) => (
                  <Badge key={i} variant="neutral" size="sm">{tag}</Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Formatea "2025-11-20" → "20 Nov 2025" */
function formatDate(dateString) {
  if (!dateString) return '';
  const [y, m, d] = dateString.split('-');
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`;
}
