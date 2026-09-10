import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Check, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingTop: 'clamp(5.5rem, 12vw, 8rem)', paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: 'var(--accent-glow)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem 0.85rem',
                marginBottom: '1.5rem',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-med)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Available for projects & roles
              </span>
            </div>

            {/* Title & Tagline */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                color: 'var(--text-pure)',
              }}
            >
              Building quality websites & systems{' '}
              <span className="gradient-text">with agentic precision.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(0.98rem, 2.4vw, 1.15rem)',
                color: 'var(--text-med)',
                maxWidth: '620px',
                lineHeight: 1.68,
                marginBottom: '2rem',
              }}
            >
              I'm <strong style={{ color: 'var(--text-high)' }}>{personalInfo.name}</strong>, a {personalInfo.role}. {personalInfo.tagline}
            </p>

            {/* CTAs with Mobile Responsiveness */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary hero-btn">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary hero-btn"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} color="#22c55e" /> : <Copy size={16} />}
                <span>{copied ? 'Email copied!' : 'Copy email'}</span>
              </button>

              <a
                href="#contact"
                className="btn btn-outline hero-btn"
              >
                <span>Contact me</span>
              </a>
            </div>

            {/* Responsive Quick Metrics */}
            <div className="hero-stats-grid">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} style={{ padding: '0.5rem 0' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(1.4rem, 4vw, 1.85rem)',
                      fontWeight: 700,
                      color: 'var(--text-pure)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-low)', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Terminal / Code Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%' }}
          >
            <div
              className="card-spotlight"
              style={{
                background: 'linear-gradient(180deg, #131318 0%, #0a0a0d 100%)',
                border: '1px solid var(--border-medium)',
                padding: '0',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#33333d' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#33333d' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#33333d' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-low)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Terminal size={13} />
                  <span>developer.config.ts</span>
                </div>
                <span style={{ width: '28px' }} />
              </div>

              {/* Terminal Code Body */}
              <div
                style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.72rem, 2.2vw, 0.82rem)',
                  lineHeight: '1.75',
                  color: '#d4d4d8',
                  overflowX: 'auto',
                  wordBreak: 'break-word',
                }}
              >
                <div>
                  <span style={{ color: '#71717a' }}>// Active developer configuration</span>
                </div>
                <div>
                  <span style={{ color: '#a1a1aa' }}>export const</span>{' '}
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>engineer</span> = {'{'}
                </div>
                <div style={{ paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
                  <span style={{ color: '#a1a1aa' }}>builder:</span>{' '}
                  <span style={{ color: '#e4e4e7' }}>"{personalInfo.name}"</span>,
                </div>
                <div style={{ paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
                  <span style={{ color: '#a1a1aa' }}>primaryCraft:</span>{' '}
                  <span style={{ color: '#e4e4e7' }}>"High-Quality Websites & Systems"</span>,
                </div>
                <div style={{ paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
                  <span style={{ color: '#a1a1aa' }}>agenticTools:</span>{' '}
                  <span style={{ color: '#e4e4e7' }}>["Gemini Antigravity", "Codex", "Claude"]</span>,
                </div>
                <div style={{ paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
                  <span style={{ color: '#a1a1aa' }}>coreStack:</span>{' '}
                  <span style={{ color: '#e4e4e7' }}>["React", "Node.js", "Solidity", "Filebase", "MongoDB"]</span>,
                </div>
                <div style={{ paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
                  <span style={{ color: '#a1a1aa' }}>mission:</span>{' '}
                  <span style={{ color: '#e4e4e7' }}>"Polished, High-Impact Digital Systems"</span>,
                </div>
                <div style={{ paddingLeft: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
                  <span style={{ color: '#a1a1aa' }}>status:</span>{' '}
                  <span style={{ color: '#22c55e' }}>"available_for_new_projects"</span>
                </div>
                <div>{'};'}</div>
                <div style={{ marginTop: '0.65rem', color: '#71717a' }}>
                  <span style={{ color: '#ffffff' }}>&gt;</span> agentic synthesis active...{' '}
                  <span style={{ color: '#22c55e' }}>Websites & Systems Engine</span> [ONLINE]
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          align-items: center;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }
        @media (min-width: 580px) {
          .hero-stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 460px) {
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn {
            width: 100%;
          }
        }
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.9fr !important;
          }
          .hero-stats-grid {
            margin-top: 3.5rem;
            padding-top: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
