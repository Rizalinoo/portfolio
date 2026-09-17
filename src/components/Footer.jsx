import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { TerminalLogoBadge } from './BrandLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '3rem 0 4rem 0',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Logo & Note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <TerminalLogoBadge size={32} />
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-pure)', fontFamily: 'var(--font-mono)' }}>
                rizalino<span style={{ color: 'var(--text-low)', fontWeight: 500 }}>.dev</span>
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-low)' }}>
                {personalInfo.name}
              </div>
            </div>
          </div>

          {/* Center Copyright & Email */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem',
              color: 'var(--text-low)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <div>© {new Date().getFullYear()} Rizalino De Guzman. All rights reserved.</div>
            <a
              href={`mailto:${personalInfo.email}`}
              style={{
                color: 'var(--text-med)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-pure)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-med)')}
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-full)',
            }}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
