export const skillCategories = [
  {
    label: 'Languages',
    skills: [
      { icon: '🐍', name: 'Python' },
      { icon: '☕', name: 'Java' },
      { icon: '🟨', name: 'JavaScript' },
      { icon: '🔷', name: 'TypeScript' },
      { icon: '💎', name: 'C++' },
      { icon: '📄', name: 'SQL' },
    ],
  },
  {
    label: 'Backend & Infrastructure',
    skills: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '⚡', name: 'Kafka' },
      { icon: '🐳', name: 'Docker' },
      { icon: '🔴', name: 'Redis' },
      { icon: '🌐', name: 'Nginx' },
      { icon: '🔌', name: 'WebSocket' },
      { icon: '📡', name: 'REST API' },
      { icon: '📝', name: 'Swagger' },
    ],
  },
  {
    label: 'AI / Cloud',
    skills: [
      { icon: '☁️', name: 'AWS Bedrock' },
      { icon: '🤖', name: 'LLM APIs' },
      { icon: '🎭', name: 'Playwright' },
      { icon: '⚡', name: 'FastAPI' },
      { icon: '📊', name: 'MongoDB' },
      { icon: '🐘', name: 'PostgreSQL' },
    ],
  },
  {
    label: 'Frontend & Tools',
    skills: [
      { icon: '⚛️', name: 'React' },
      { icon: '🖥️', name: 'Electron' },
      { icon: '📦', name: 'EJS' },
      { icon: '🐙', name: 'Git' },
      { icon: '🔬', name: 'CDP' },
      { icon: '📋', name: 'Postman' },
    ],
  },
]

export const experiences = [
  {
    date: '2024 — Present',
    role: 'Software Developer',
    company: 'Mphasis Limited · Bangalore, India',
    description:
      'Building a distributed browser automation platform for MOFA form submission using an Electron helper app with WebSocket tunnel and CDP proxy architecture. Developed Kafka-backed job queues for high-throughput processing and AWS Bedrock-based AI tooling for intelligent automation. Designed Playwright & Docker infrastructure for scalable test orchestration.',
    tags: ['Kafka', 'Playwright', 'Docker', 'AWS Bedrock', 'WebSocket', 'CDP', 'Electron', 'Node.js'],
    accentDot: true,
  },
  {
    date: '2023 — 2024',
    role: 'Open Source & Personal Projects',
    company: 'Independent · Delhi, India',
    description:
      'Built KhaataBook — a full-stack expense management app using Node.js, EJS, and CSS. Developed Weather App and TODO App as JavaScript fundamentals projects. Built a Netflix Clone as a responsive frontend exercise.',
    tags: ['Node.js', 'EJS', 'JavaScript', 'CSS', 'REST API'],
  },
  {
    date: '2019 — 2023',
    role: 'B.Tech, Electrical Engineering',
    company: 'Delhi Technological University (DTU)',
    description:
      'Graduated from DTU with Electrical Engineering degree while developing strong CS fundamentals. Solved 800+ LeetCode problems and built CS-equivalent expertise in algorithms, data structures, and system design.',
    tags: ['DSA', 'Algorithms', 'C++', 'LeetCode'],
  },
]

export const projects = [
  {
    num: '01',
    name: 'KhaataBook',
    desc: 'Full-stack expense & daily records management app. CRUD operations, persistent storage, responsive UI.',
    tags: ['Node.js', 'EJS', 'CSS', 'Express'],
    url: 'https://github.com/abhishekpal-dev/KhaataBook',
  },
  {
    num: '02',
    name: 'Weather App',
    desc: 'Real-time weather dashboard using OpenWeather API. First JavaScript project — clean, functional UI.',
    tags: ['JavaScript', 'REST API', 'HTML/CSS'],
    url: 'https://github.com/abhishekpal-dev/Weather-App',
  },
  {
    num: '03',
    name: 'AR Alphabet Learning App',
    desc: 'Augmented Reality educational app for alphabet learning. Explores AR interfaces for early childhood education.',
    tags: ['AR', 'EJS', 'Node.js'],
    url: 'https://github.com/abhishekpal-dev/AR-Alphabet-Learning-App-',
  },
  {
    num: '04',
    name: 'Monday Media Project',
    desc: 'Media management and organization project built with JavaScript. Handles dynamic content rendering and state.',
    tags: ['JavaScript', 'DOM Manipulation'],
    url: 'https://github.com/abhishekpal-dev/Monday-Media-Project',
  },
  {
    num: '05',
    name: 'Netflix Clone',
    desc: 'Pixel-perfect Netflix frontend clone. Responsive layout, hover animations, CSS Grid & Flexbox mastery.',
    tags: ['HTML', 'CSS', 'Responsive'],
    url: 'https://github.com/abhishekpal-dev/Netflix-Clone',
  },
  {
    num: '06',
    name: 'Browser Automation Platform',
    desc: 'Distributed MOFA form-submission system — Electron + WebSocket tunnel + CDP proxy + Kafka job queue + AWS Bedrock AI.',
    tags: ['Kafka', 'Playwright', 'Electron', 'AWS Bedrock', 'Docker'],
    url: 'https://github.com/abhishekpal-dev',
    isWork: true,
  },
]
