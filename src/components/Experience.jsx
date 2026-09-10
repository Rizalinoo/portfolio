import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={13} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">Experience & impact.</h2>
          <p className="section-subtitle">
            Leading engineering efforts, architecting platforms, and shipping systems that sustain enterprise workloads.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical central subtle line */}
          <div
            className="timeline-vertical-line"
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              width: '1px',
              background: 'linear-gradient(180deg, var(--border-bright), var(--border-subtle))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="timeline-entry"
                style={{ position: 'relative' }}
              >
                {/* Timeline node icon */}
                <div
                  className="timeline-node"
                  style={{
                    position: 'absolute',
                    top: '6px',
                    width: '17px',
                    height: '17px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-black)',
                    border: '3px solid var(--text-pure)',
                    boxShadow: '0 0 10px var(--accent-glow)',
                  }}
                />

                <div
                  className="card-spotlight"
                  style={{ padding: 'clamp(1.2rem, 3.5vw, 2rem)' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.6rem',
                      gap: '0.5rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                        fontWeight: 700,
                        color: 'var(--text-pure)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-med)',
                      }}
                    >
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--text-med)',
                      marginBottom: '0.85rem',
                    }}
                  >
                    {exp.company}
                  </div>

                  <p
                    style={{
                      color: 'var(--text-high)',
                      fontSize: '0.9rem',
                      lineHeight: '1.68',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Tech stack used in this role */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.technologies.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .timeline-vertical-line {
          left: 10px;
        }
        .timeline-node {
          left: 2px;
        }
        .timeline-entry {
          padding-left: 32px;
        }
        @media (min-width: 600px) {
          .timeline-vertical-line {
            left: 20px;
          }
          .timeline-node {
            left: 12px;
          }
          .timeline-entry {
            padding-left: 55px;
          }
        }
      `}</style>
    </section>
  );
}
