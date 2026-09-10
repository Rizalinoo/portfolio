import React from 'react';

// Google Gemini 4-pointed sparkle
export function GeminiLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Anthropic Claude Asterisk
export function ClaudeLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M13.2 2H10.8V8.6L6.1 3.9L4.4 5.6L9.1 10.3H2.5V12.7H9.1L4.4 17.4L6.1 19.1L10.8 14.4V21H13.2V14.4L17.9 19.1L19.6 17.4L14.9 12.7H21.5V10.3H14.9L19.6 5.6L17.9 3.9L13.2 8.6V2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// OpenAI / Codex Swirl
export function CodexLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

// React Atom
export function ReactLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  );
}

// Node.js Hexagon
export function NodeLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" />
      <path d="M12 12V22" />
      <path d="M12 12L21 7.2" />
      <path d="M12 12L3 7.2" />
    </svg>
  );
}

// MongoDB Leaf
export function MongoLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2C12 2 6 9 6 15C6 18.5 8.7 21.5 12 22C15.3 21.5 18 18.5 18 15C18 9 12 2 12 2Z" />
      <path d="M12 2V22" />
    </svg>
  );
}

// Solidity Rhombus
export function SolidityLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 6L12 2L17 6L12 10L7 6Z" />
      <path d="M7 12L12 8L17 12L12 16L7 12Z" />
      <path d="M7 18L12 14L17 18L12 22L7 18Z" />
    </svg>
  );
}

// Filebase / IPFS Cube
export function FilebaseLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

// Ethereum / Ethers
export function EthereumLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 4.5 12.5 12 16 19.5 12.5 12 2" />
      <polygon points="12 16 4.5 12.5 12 22 19.5 12.5 12 16" />
    </svg>
  );
}

// Tailwind / Styling Waves
export function TailwindLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 12c.5-2.5 2.5-4 5-4 3.5 0 4.5 3 6 3s2.5-1 3-2c-.5 2.5-2.5 4-5 4-3.5 0-4.5-3-6-3s-2.5 1-3 2z" />
      <path d="M2 17c.5-2.5 2.5-4 5-4 3.5 0 4.5 3 6 3s2.5-1 3-2c-.5 2.5-2.5 4-5 4-3.5 0-4.5-3-6-3s-2.5 1-3 2z" />
    </svg>
  );
}

// TypeScript / Code Badge
export function CodeLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// Security / Encryption Shield
export function ShieldLogo({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="2" />
      <path d="M12 13v3" />
    </svg>
  );
}

// Helper function to return the matching logo component for a skill name
export function getSkillLogo(name, size = 16) {
  const lower = name.toLowerCase();

  if (lower.includes('gemini') || lower.includes('antigravity')) {
    return <GeminiLogo size={size} />;
  }
  if (lower.includes('claude')) {
    return <ClaudeLogo size={size} />;
  }
  if (lower.includes('codex') || lower.includes('openai')) {
    return <CodexLogo size={size} />;
  }
  if (lower.includes('solidity')) {
    return <SolidityLogo size={size} />;
  }
  if (lower.includes('filebase') || lower.includes('ipfs') || lower.includes('storage')) {
    return <FilebaseLogo size={size} />;
  }
  if (lower.includes('ethers') || lower.includes('blockchain') || lower.includes('dapp')) {
    return <EthereumLogo size={size} />;
  }
  if (lower.includes('react') || lower.includes('next')) {
    return <ReactLogo size={size} />;
  }
  if (lower.includes('node')) {
    return <NodeLogo size={size} />;
  }
  if (lower.includes('mongo')) {
    return <MongoLogo size={size} />;
  }
  if (lower.includes('tailwind') || lower.includes('css') || lower.includes('framer')) {
    return <TailwindLogo size={size} />;
  }
  if (lower.includes('aes') || lower.includes('security') || lower.includes('encryption')) {
    return <ShieldLogo size={size} />;
  }
  return <CodeLogo size={size} />;
}
