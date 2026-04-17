/**
 * OfficerCard.jsx — Card especializada para oficiales del chapter
 * Props:
 *   name      {string}   Nombre completo
 *   role      {string}   Cargo (ej: "Presidenta")
 *   emoji     {string}   Emoji como avatar
 *   bio       {string}   Bio breve
 *   socials   {Array<{platform: string, url: string}>}
 *   semester  {string}   Semestre ej: "2026-1"
 */
import React from 'react';
import '../styles/OfficerCard.css';

const platformIcons = {
  LinkedIn:  'in',
  Instagram: 'ig',
  GitHub:    'gh',
  Twitter:   'tw',
  Email:     '@',
};

export default function OfficerCard({ name, role, emoji, bio, socials = [] }) {
  const initials = name
    ? name.split(' ').slice(0, 2).map(w => w[0]).join('')
    : '?';

  return (
    <div className="officer-card">
      <div className="officer-avatar">
        {emoji ? (
          <span className="officer-emoji" aria-hidden="true">{emoji}</span>
        ) : (
          <span className="officer-initials">{initials}</span>
        )}
      </div>

      <div className="officer-info">
        <span className="officer-role">{role}</span>
        <h3 className="officer-name">{name}</h3>
        {bio && <p className="officer-bio">{bio}</p>}
      </div>

      {socials.length > 0 && (
        <div className="officer-socials">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              className="officer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} en ${s.platform}`}
              title={s.platform}
            >
              {platformIcons[s.platform] || s.platform.slice(0, 2)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
