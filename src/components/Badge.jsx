/**
 * Badge.jsx — Etiqueta / tag visual
 * Props:
 *   children  {ReactNode}
 *   variant   {'info'|'success'|'warning'|'danger'|'neutral'}
 *   size      {'sm'|'md'}
 */
import React from 'react';

export default function Badge({ children, variant = 'neutral', size = 'sm' }) {
  return (
    <span className={`badge badge--${size} badge--${variant}`}>
      {children}
    </span>
  );
}
