import React from 'react';

export function RLogoBadge({ size = 34, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${Math.round(size * 0.26)}px`,
        backgroundColor: 'rgba(17, 14, 28, 0.85)',
        border: '1px solid rgba(134, 59, 255, 0.28)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 2px 10px rgba(134, 59, 255, 0.18)',
        overflow: 'hidden',
        padding: '3px',
      }}
    >
      <img
        src="/favicon.svg"
        alt="R Logo"
        width={Math.round(size * 0.72)}
        height={Math.round(size * 0.72)}
        style={{
          display: 'block',
          objectFit: 'contain',
          filter: 'drop-shadow(0 1px 4px rgba(134, 59, 255, 0.35))',
        }}
      />
    </div>
  );
}

// Alias for seamless compatibility across Navbar and Footer
export const TerminalLogoBadge = RLogoBadge;

export function BrandLogo({ size = 34 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
      <RLogoBadge size={size} />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '-0.02em',
          color: '#ffffff',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        rizalino<span style={{ color: '#8e8e93', fontWeight: 500 }}>.dev</span>
      </span>
    </div>
  );
}

export default BrandLogo;
