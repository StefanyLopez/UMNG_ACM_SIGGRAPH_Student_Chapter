/**
 * Button.jsx — Botón reutilizable
 * Props:
 *   children   {ReactNode}
 *   onClick    {function}
 *   variant    {'primary'|'secondary'|'tertiary'}
 *   size       {'sm'|'md'|'lg'}
 *   disabled   {boolean}
 *   href       {string}     Si se pasa, renderiza como <a>
 *   type       {string}     'button' | 'submit' | 'reset'
 *   ariaLabel  {string}
 */
import React from 'react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  type = 'button',
  ariaLabel,
  className = '',
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
