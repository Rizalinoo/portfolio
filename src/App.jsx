import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Dynamic Animated Background */}
        <BackgroundCanvas />

        {/* Main Content Layer */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Hero />
            <div className="ambient-glow-bar" />
            <About />
            <div className="ambient-glow-bar" />
            <Skills />
            <div className="ambient-glow-bar" />
            <Projects />
            <div className="ambient-glow-bar" />
            <Experience />
            <div className="ambient-glow-bar" />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
