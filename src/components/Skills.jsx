import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { skills } from '../data/portfolioData';
import {
  GeminiLogo,
  ClaudeLogo,
  CodexLogo,
  SolidityLogo,
  FilebaseLogo,
  ReactLogo,
  NodeLogo,
  MongoLogo,
  getSkillLogo
} from './TechLogos';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skills.map(s => s.category)];

  const displayedSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  // Key showcase tools with visual logo badges
  const featuredToolchain = [
    { name: 'Google Gemini', icon: <GeminiLogo size={20} />, label: 'AI Synthesis' },
    { name: 'Claude 3.5', icon: <ClaudeLogo size={20} />, label: 'Architecture' },
    { name: 'OpenAI Codex', icon: <CodexLogo size={20} />, label: 'Code Gen' },
    { name: 'Solidity', icon: <SolidityLogo size={20} />, label: 'Smart Contracts' },
    { name: 'Filebase', icon: <FilebaseLogo size={20} />, label: 'Decentralized IPFS' },
    { name: 'React', icon: <ReactLogo size={20} />, label: 'Frontend' },
    { name: 'Node.js', icon: <NodeLogo size={20} />, label: 'Backend API' },
    { name: 'MongoDB', icon: <MongoLogo size={20} />, label: 'Database' },
  ];

  return (
    <section id="skills" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={13} />
            <span>Tools & Capabilities</span>
          </div>
          <h2 className="section-title">Agentic tools & full-stack development.</h2>
          <p className="section-subtitle">
            Harmonizing agentic AI tools—Gemini Antigravity, OpenAI Codex, and Claude—with core web, database, and decentralized technologies.
          </p>
        </div>

        {/* Featured Visual Toolchain Grid */}
        <div className="toolchain-showcase-grid">
          {featuredToolchain.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="toolchain-card"
            >
              <div className="toolchain-icon-box">
                {tool.icon}
              </div>
              <div>
                <div className="toolchain-name">{tool.name}</div>
                <div className="toolchain-label">{tool.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.45rem 1.05rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  border: isSelected
                    ? '1px solid var(--text-pure)'
                    : '1px solid var(--border-subtle)',
                  backgroundColor: isSelected ? 'var(--text-pure)' : 'var(--accent-glow)',
                  color: isSelected ? 'var(--bg-black)' : 'var(--text-med)',
                  fontWeight: isSelected ? 600 : 400,
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {displayedSkills.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-spotlight"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '1rem',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      color: 'var(--text-pure)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {categoryGroup.category}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-low)',
                    }}
                  >
                    {categoryGroup.items.length} tools
                  </span>
                </div>

                {/* Items List with Visual SVG Icons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {categoryGroup.items.map((item, i) => (
                    <div
                      key={i}
                      className="skill-item-row"
                    >
                      <div className="skill-item-logo-box">
                        {getSkillLogo(item.name, 15)}
                      </div>
                      <span className="skill-item-title">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .toolchain-showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 640px) {
          .toolchain-showcase-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }
        }
        @media (min-width: 1024px) {
          .toolchain-showcase-grid {
            grid-template-columns: repeat(8, 1fr);
          }
        }
        .toolchain-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.15rem 0.75rem;
          background: var(--bg-surface-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: all 0.25s ease;
        }
        .toolchain-card:hover {
          background: var(--bg-hover);
          border-color: var(--border-medium);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.15);
        }
        .toolchain-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-glow);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-pure);
          margin-bottom: 0.65rem;
        }
        .toolchain-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-pure);
          line-height: 1.2;
        }
        .toolchain-label {
          font-size: 0.68rem;
          font-family: var(--font-mono);
          color: var(--text-low);
          margin-top: 0.2rem;
        }

        .skill-item-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.55rem 0.8rem;
          border-radius: var(--radius-sm);
          background-color: var(--accent-glow);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s ease;
        }
        .skill-item-row:hover {
          background-color: var(--bg-hover);
          border-color: var(--border-medium);
          transform: translateX(4px);
        }
        .skill-item-logo-box {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: var(--accent-glow);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-high);
          flex-shrink: 0;
        }
        .skill-item-title {
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--text-high);
        }
      `}</style>
    </section>
  );
}
