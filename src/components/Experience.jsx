import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Compass, ArrowRight, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={13} />
            <span>Career Path</span>
          </div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey building software at scale.
          </p>
        </div>

        {/* Opportunity Card */}
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-spotlight"
            style={{
              padding: 'clamp(2rem, 5vw, 3rem)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Status Beacon */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.7)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#22c55e',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                Available for Hire
              </span>
            </div>

            {/* Main Statement */}
            <h3
              style={{
                fontSize: 'clamp(1.25rem, 3.2vw, 1.65rem)',
                fontWeight: 700,
                color: 'var(--text-pure)',
                letterSpacing: '-0.02em',
                maxWidth: '520px',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              Currently seeking new professional opportunities.
            </h3>

            {/* Subtext */}
            <p
              style={{
                color: 'var(--text-med)',
                fontSize: '1rem',
                lineHeight: 1.6,
                maxWidth: '460px',
                margin: 0,
              }}
            >
              Check back later for updates.
            </p>

            {/* Action Button */}
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.4rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
