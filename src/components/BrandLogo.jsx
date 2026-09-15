import React from 'react';

export function RLogoBadge({ size = 34, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${Math.round(size * 0.24)}px`,
        backgroundColor: '#000000',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      }}
    >
      <img
        src="/logo.png"
        alt="R Logo"
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}

// Alias for backwards compatibility across Navbar and Footer
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
