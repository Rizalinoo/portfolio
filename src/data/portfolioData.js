export const personalInfo = {
  name: "Rizalino De Guzman",
  role: "Full Stack Web & Systems Developer",
  tagline: "Building high-quality websites, robust systems, and intelligent solutions powered by AI-driven development.",
  location: "Available for Projects & Remote Roles",
  email: "rizalino.dev@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  bio: "I build modern websites, production systems, and intelligent web applications that deliver exceptional user experiences and dependable performance. My development workflow is AI-driven at its core — leveraging agentic AI tools for code generation, architecture review, and rapid iteration, allowing me to ship faster, maintain cleaner codebases, and craft polished digital solutions with uncompromising quality.",
  stats: [
    { label: "Execution Speed", value: "10x" },
    { label: "Flagship Project", value: "ReviewMate" },
    { label: "AI Workflow", value: "Agentic Dev" }
  ]
};

export const skills = [
  {
    category: "Agentic Tools & AI Workflow",
    items: [
      { name: "Gemini Antigravity & IDE", level: "Expert" },
      { name: "Google Gemini 2.5 Flash Vision", level: "Expert" },
      { name: "Claude (Sonnet & Artifacts)", level: "Expert" },
      { name: "OpenAI Codex & Models", level: "Expert" },
      { name: "Agentic Pair Programming", level: "Expert" },
      { name: "Prompt Architecture & Workflows", level: "Expert" }
    ]
  },
  {
    category: "Mobile & Civic Systems",
    items: [
      { name: "React Native & Expo SDK 57", level: "Expert" },
      { name: "Expo Router (Navigation & Deep Links)", level: "Expert" },
      { name: "Device Sensors (Pitch / Gyroscope)", level: "Expert" },
      { name: "Leaflet GIS & React Native Maps", level: "Expert" },
      { name: "Cryptographic SHA-256 Client Hashing", level: "Expert" },
      { name: "Forensic Anti-Fraud Verification", level: "Expert" }
    ]
  },
  {
    category: "Cloud, Backend & Serverless",
    items: [
      { name: "Firebase (Firestore, Auth, Storage)", level: "Expert" },
      { name: "Firebase Cloud Functions (Node.js 20)", level: "Expert" },
      { name: "Node.js & Express Architecture", level: "Expert" },
      { name: "MongoDB & Mongoose (Databases)", level: "Expert" },
      { name: "RESTful API Engineering", level: "Expert" },
      { name: "Spatial Deduplication (<50m)", level: "Expert" }
    ]
  },
  {
    category: "Decentralized & Web3",
    items: [
      { name: "Filebase (IPFS / S3-Compatible Storage)", level: "Expert" },
      { name: "AWS SigV4 Authentication Protocol", level: "Expert" },
      { name: "Solidity (Smart Contracts & EVM)", level: "Advanced" },
      { name: "Ethers.js (Custodial Blockchain Services)", level: "Expert" },
      { name: "AES-256 Client-Side Encryption", level: "Expert" },
      { name: "Immutable Integrity Proofs & CIDs", level: "Expert" }
    ]
  },
  {
    category: "Frontend & UI Engineering",
    items: [
      { name: "React 18 & Vite Ecosystem", level: "Expert" },
      { name: "TypeScript & JavaScript (ESNext)", level: "Expert" },
      { name: "Leaflet GIS Spatial Mapping", level: "Expert" },
      { name: "Vanilla CSS & Modern Design Systems", level: "Expert" },
      { name: "Tailwind CSS & Framer Motion", level: "Expert" },
      { name: "Responsive UI/UX Layouts", level: "Expert" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Bantay Kalsada: Civic Tech & Tamper-Proof Incident Platform",
    category: "Systems",
    description: "An end-to-end civic-technology platform built for Philippine municipalities to detect and resolve road hazards (potholes, missing manholes, road collapses, floods) with tamper-proof forensic verification. Citizens capture incidents via a React Native mobile app with device pitch sensor leveling (≥22°) and SHA-256 client-side cryptographic hashing. Firebase Cloud Functions orchestrate Google Gemini 2.5 Flash Multimodal Vision AI for automated severity scoring, spatial deduplication (<50m), and decentralized Filebase (IPFS) archival, while LGU engineers triage incidents and dispatch crews via a real-time GIS dashboard.",
    tags: [
      "React Native (Expo SDK 57)",
      "React 18 & Vite",
      "Google Gemini 2.5 Flash Vision",
      "Firebase & Cloud Functions",
      "Filebase (IPFS / AWS SigV4)",
      "SHA-256 Cryptography",
      "Leaflet GIS",
      "TypeScript Monorepo"
    ],
    metrics: "Sensor pitch lock (≥22°) • Gemini 2.5 Flash AI scoring • <50m spatial deduplication",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    architecture: [
      {
        title: "Citizen Mobile Client (React Native / Expo Router)",
        desc: "Forensic anti-fraud camera, device gyroscope/pitch leveling lock (≥22°), SHA-256 client-side hashing, and real-time GPS geotagging on interactive maps."
      },
      {
        title: "Firebase Cloud Functions & Serverless Engine",
        desc: "Authoritative server-side orchestration handling onReportCreate/onStatusChange triggers, audit logs, and instant Expo push notifications to citizen devices."
      },
      {
        title: "Google Gemini 2.5 Flash Multimodal Vision AI",
        desc: "Automated road hazard severity scoring, recapture fraud detection, and spatial deduplication clustering within a 50-meter radius."
      },
      {
        title: "Decentralized Archival (Filebase / IPFS)",
        desc: "Tamper-proof evidence locker leveraging Filebase S3-compatible IPFS decentralized storage secured via AWS SigV4 authentication."
      },
      {
        title: "LGU Operations Dashboard (React 18 / Vite)",
        desc: "Live incident triage stream, Leaflet GIS spatial mapping, crew dispatch roster management, and mandatory before/after resolution proof enforcement."
      },
      {
        title: "Monorepo Codebase Structure",
        desc: "Clean modular architecture partitioned into mobile/ (Expo), dashboard/ (Vite), functions/ (Node.js 20 serverless), and shared/ (TypeScript contracts & schemas)."
      }
    ]
  },
  {
    id: 2,
    title: "ReviewMate: AI & Blockchain Study Platform",
    category: "Systems",
    description: "An AI-powered, blockchain-secured educational web application designed to automate the creation of study reviewers, flashcards, and quizzes from lecture notes. Utilizes Google Gemini for high-speed NLP content processing, client-side AES-256 encryption, decentralized IPFS storage via Filebase, and a custodial server-side blockchain service using Ethers.js and Solidity smart contracts for immutable academic integrity assurance without requiring student crypto wallets.",
    tags: ["React / Next.js", "Node.js & Express", "MongoDB", "Google Gemini AI", "Filebase (IPFS)", "Solidity", "Ethers.js", "AES-256"],
    metrics: "Sub-10s AI generation • Decentralized IPFS • Custodial Web3 Verification",
    github: "https://github.com",
    live: "https://review-mate-ph.vercel.app/",
    featured: true
  }
];

export const experiences = [
  {
    period: "2023 — Present",
    role: "Full Stack Web & Systems Developer",
    company: "Client Solutions & System Development",
    description: "Architecting ReviewMate and full-stack web systems with an AI-driven development workflow. Leveraging agentic AI tools for rapid iteration, code generation, and architecture review. Delivering production-ready solutions using React, Node.js, and MongoDB while following Agile and Scrum methodologies to maintain velocity and code quality.",
    technologies: ["React", "Node.js", "MongoDB", "Agentic AI Tools", "Ethers.js", "AES-256", "Agile", "Scrum"]
  },
  {
    period: "2022 — 2023",
    role: "Web Application Developer",
    company: "Innovate Web Studio",
    description: "Developed and shipped custom responsive websites and web application systems. Built REST APIs, implemented secure authentication workflows, and optimized database indexing for enterprise clients. Worked within Agile and Scrum teams to deliver iterative releases on schedule.",
    technologies: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Agile", "Scrum"]
  },
  {
    period: "2021 — 2022",
    role: "Frontend & Website Developer",
    company: "Digital Horizon Agency",
    description: "Crafted modern web interfaces, customer-facing landing pages, and interactive client portals with strong attention to typography, responsive layouts, and cross-browser consistency.",
    technologies: ["JavaScript", "React", "CSS3 / Modern UI", "Node.js", "Git"]
  }
];
