import React from 'react';

export function TerminalLogoBadge({ size = 34, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${Math.round(size * 0.26)}px`,
        backgroundColor: '#0f1013',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.35)',
      }}
    >
      <svg
        width={Math.round(size * 0.58)}
        height={Math.round(size * 0.58)}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 10L16 16L8.5 22"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="18.5"
          y1="22"
          x2="25"
          y2="22"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function BrandLogo({ size = 34 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
      <TerminalLogoBadge size={size} />
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
        rizalino<span style={{ color: '#71717a', fontWeight: 500 }}>.dev</span>
      </span>
    </div>
  );
}

export default BrandLogo;
