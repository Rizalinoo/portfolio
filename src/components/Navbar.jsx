import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-2xl border border-white/10'
              : 'bg-transparent border border-transparent'
          }`}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-pure)',
              }}
            >
              <Terminal size={17} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-pure)',
              }}
            >
              rizalino<span style={{ color: 'var(--text-low)' }}>.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="desktop-menu"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-pure)' : 'var(--text-med)',
                    backgroundColor: isActive ? 'var(--accent-glow)' : 'transparent',
                    border: isActive
                      ? '1px solid var(--border-medium)'
                      : '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-pure)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-med)';
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Socials & CTA */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }} className="desktop-actions">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-med)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--accent-glow)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-pure)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-med)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-med)',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-pure)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-med)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-med)',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-pure)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-med)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Actions (Theme Toggle + Hamburger) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-header-actions">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-pure)',
                border: '1px solid var(--border-subtle)',
                background: 'var(--accent-glow)',
                cursor: 'pointer',
              }}
              className="mobile-btn"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-pure)',
                cursor: 'pointer',
                padding: '0.4rem',
              }}
              className="mobile-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: 'hidden',
              background: theme === 'light' ? 'rgba(255, 255, 255, 0.96)' : 'rgba(10, 10, 13, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div className="container" style={{ padding: '1.5rem 1.5rem 2rem 1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'var(--text-high)',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-subtle)',
                    }}
                  >
                    {link.name}
                  </a>
                ))}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 820px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
          .mobile-header-actions {
            display: none !important;
          }
        }
      `}</style>
    </motion.header>
  );
}
