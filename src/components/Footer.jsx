import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-pure)',
              }}
            >
              <Terminal size={15} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-pure)' }}>
                {personalInfo.name}
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-low)' }}>
                Monochrome Engineering Portfolio
              </div>
            </div>
          </div>

          {/* Center Copyright */}
          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-low)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            © {new Date().getFullYear()} • Crafted with React & Framer Motion
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
