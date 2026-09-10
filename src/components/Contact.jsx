import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={13} />
            <span>Initiate Contact</span>
          </div>
          <h2 className="section-title">Let's build something extraordinary.</h2>
          <p className="section-subtitle">
            Have a website project, system architecture requirement, or collaboration inquiry? Drop a note or reach out directly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="contact-grid">
          
          {/* Left: Contact Info & Channels */}
          <div>
            <div
              className="card-spotlight"
              style={{
                padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    fontWeight: 700,
                    color: 'var(--text-pure)',
                    marginBottom: '1rem',
                  }}
                >
                  Direct Communication
                </h3>
                <p style={{ color: 'var(--text-med)', fontSize: '0.92rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  I respond promptly to inquiries regarding new websites, systems, and engineering consultations.
                </p>

                {/* Email Box */}
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--accent-glow)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-low)', marginBottom: '0.4rem' }}>
                    PRIMARY EMAIL
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 'clamp(0.85rem, 2.8vw, 0.95rem)', fontWeight: 600, color: 'var(--text-pure)', wordBreak: 'break-all' }}>
                      {personalInfo.email}
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-high)',
                        borderRadius: '6px',
                        padding: '0.4rem 0.65rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        flexShrink: 0,
                      }}
                      aria-label="Copy email"
                    >
                      {copied ? <Check size={14} color="#22c55e" /> : <Copy size={14} />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Status indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '2rem' }}>
                  <span
                    style={{
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-med)' }}>
                    Currently accepting new projects & client work
                  </span>
                </div>
              </div>

              {/* Social Channels List */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-low)', marginBottom: '0.85rem' }}>
                  NETWORK PROFILES
                </div>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'GitHub', href: personalInfo.github, icon: <GithubIcon size={16} /> },
                    { label: 'LinkedIn', href: personalInfo.linkedin, icon: <LinkedinIcon size={16} /> },
                    { label: 'X / Twitter', href: personalInfo.twitter, icon: <TwitterIcon size={16} /> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div>
            <div
              className="card-spotlight"
              style={{ padding: 'clamp(1.25rem, 4vw, 2.5rem)' }}
            >
              <h3
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                  fontWeight: 700,
                  color: 'var(--text-pure)',
                  marginBottom: '1.25rem',
                }}
              >
                Send a Message
              </h3>

              {isSubmitted && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '8px',
                    color: '#22c55e',
                    fontSize: '0.88rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                  <span>Message sent successfully! I will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-med)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        backgroundColor: 'var(--accent-glow)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: 'var(--text-pure)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-med)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.connor@domain.com"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        backgroundColor: 'var(--accent-glow)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: 'var(--text-pure)',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-med)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="New Website / Custom System / Consultation"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      backgroundColor: 'var(--accent-glow)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-pure)',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-med)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your goals, features, or timeline..."
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      backgroundColor: 'var(--accent-glow)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-pure)',
                      fontSize: '16px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--border-medium)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', marginTop: '0.25rem' }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        @media (min-width: 580px) {
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
