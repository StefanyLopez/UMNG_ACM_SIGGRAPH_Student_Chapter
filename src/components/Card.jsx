/**
 * Card.jsx — Componente de tarjeta genérica
 * Props:
 *   children   {ReactNode}  Contenido interno
 *   className  {string}     Clases CSS adicionales
 *   variant    {'default'|'elevated'|'outlined'}  Estilo visual
 *   onClick    {function}   Handler opcional (hace la card clickeable)
 */
import React from 'react';

export default function Card({ children, className = '', variant = 'default', onClick }) {
  const variantClass = variant === 'default' ? '' : `card--${variant}`;
  const clickable    = onClick ? 'card--clickable' : '';

  return (
    <div
      className={`card ${variantClass} ${clickable} ${className}`.trim()}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
    >
      {children}
    </div>
  );
}
