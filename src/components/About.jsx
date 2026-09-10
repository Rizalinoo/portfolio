import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Code2, Layers, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layers size={22} />,
      title: "Quality Websites & Systems",
      description: "Dedicated to crafting clean, responsive, and resilient digital products. Every interface is pixel-crafted and every backend is engineered for stability."
    },
    {
      icon: <Zap size={22} />,
      title: "Agentic Tooling Mastery",
      description: "Harnessing Gemini Antigravity, Claude, and Codex as active co-pilots to accelerate scaffolding, solve complex logic, and elevate quality."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Speed Without Compromise",
      description: "Combining cutting-edge AI assistance with disciplined engineering standards to ship finished, production-ready systems 10x faster."
    }
  ];

  return (
    <section id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={13} />
            <span>Development Methodology</span>
          </div>
          <h2 className="section-title">Quality systems, powered by agentic tools.</h2>
          <p className="section-subtitle">
            Building responsive websites and scalable software systems with the collaborative power of Gemini, Codex, and Claude.
          </p>
        </div>

        {/* Story Card & Highlights Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="about-grid">
          
          {/* Main Story Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-spotlight"
            style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                fontWeight: 700,
                color: 'var(--text-pure)',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              The Developer Behind the Code
            </h3>
            <p
              style={{
                color: 'var(--text-med)',
                fontSize: '1.02rem',
                lineHeight: '1.75',
                marginBottom: '1.25rem',
              }}
            >
              {personalInfo.bio}
            </p>
            <p
              style={{
                color: 'var(--text-med)',
                fontSize: '1.02rem',
                lineHeight: '1.75',
              }}
            >
              Whether it's creating responsive business websites, complex administrative management systems, or custom web tools, I combine modern engineering with agentic tools like Gemini Antigravity, OpenAI Codex, and Claude. This empowers me to rapidly transform concepts into polished, dependable software with uncompromising quality.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                color: 'var(--text-high)',
                fontSize: '0.88rem',
              }}
            >
              <Globe size={16} color="var(--text-low)" />
              <span>Based in {personalInfo.location}</span>
            </div>
          </motion.div>

          {/* 3 Value Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="card-spotlight"
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.75rem',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--accent-glow)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-pure)',
                    flexShrink: 0,
                  }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      color: 'var(--text-pure)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p style={{ color: 'var(--text-med)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
