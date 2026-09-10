import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, CheckCircle, X, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Featured', 'Websites', 'Systems'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.featured;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={13} />
            <span>Featured Deliverables</span>
          </div>
          <h2 className="section-title">Websites & systems built for production.</h2>
          <p className="section-subtitle">
            A showcase of responsive websites, enterprise management portals, and client systems crafted with precision and agentic tooling.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '0.5rem 1.15rem',
                  fontSize: '0.84rem',
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
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="card-spotlight"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-med)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {project.category}
                  </span>

                  {project.featured && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--accent-glow)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-pure)',
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-pure)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-med)',
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.description}
                </p>

                {/* Key Metric Pill */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#e4e4e7',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Activity size={12} color="#22c55e" />
                  <span>{project.metrics}</span>
                </div>
              </div>

              <div>
                {/* Tech tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--text-high)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    View Details <ArrowUpRight size={14} />
                  </span>

                  <div style={{ display: 'flex', gap: '0.75rem' }} onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      style={{ color: 'var(--text-med)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-med)')}
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      style={{ color: 'var(--text-med)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-med)')}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '16px',
                  maxWidth: '620px',
                  maxHeight: '88vh',
                  overflowY: 'auto',
                  width: '100%',
                  padding: 'clamp(1.25rem, 4vw, 2rem)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-med)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {selectedProject.category} System
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-med)',
                      cursor: 'pointer',
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--text-pure)',
                    marginBottom: '1rem',
                  }}
                >
                  {selectedProject.title}
                </h3>

                <p style={{ color: 'var(--text-med)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {selectedProject.description}
                </p>

                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--accent-glow)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-low)', marginBottom: '0.3rem' }}>
                    Production Performance Target:
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: '#22c55e' }}>
                    {selectedProject.metrics}
                  </div>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-low)', marginBottom: '0.6rem' }}>
                    Technologies & Libraries:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <span>Live Showcase</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
