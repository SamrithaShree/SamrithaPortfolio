
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiLeetcode,
  SiPython,
  SiJavascript,
  SiC,
  SiPostgresql,
  SiReact,
  SiDjango,
  SiFastapi,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiRailway,
} from 'react-icons/si';

import { 
  SiNodedotjs, SiExpress, SiHtml5, SiCss3, SiTailwindcss, SiVite,
  SiAmazon, SiGithubactions, SiSqlite, 
  SiMysql, SiFirebase,
  SiNumpy, SiPandas, SiScikitlearn, SiPostman
} from 'react-icons/si';

import { 
  FaDatabase, FaCloud, FaServer, FaTerminal, FaChartLine,
  FaMobileAlt, FaBrain, FaCog, FaPencilAlt, FaRobot,
  FaPuzzlePiece, FaBoxOpen, FaBuilding, FaGlobe, FaBug,
  FaTools, FaUsers, FaCode
} from 'react-icons/fa';

// --- Navigation ---
export const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Competitive Programming', href: 'competitive-programming' },
  { name: 'Experience', href: 'experience' },
  { name: 'Contact', href: 'contact' },
];
// --- Social Links ---

export const SOCIAL_LINKS = [
  { icon: FaGithub, href: 'https://github.com/SamrithaShree', ariaLabel: 'GitHub Profile' }, 
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/samritha-shree-r/', ariaLabel: 'LinkedIn Profile' }, 
  { icon: SiLeetcode, href: 'https://leetcode.com/samrithashree/', ariaLabel: 'LeetCode Profile' }, 
];

export const SKILLS = {
  'Languages': [
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: FaCode }, 
    { name: 'C/C++', icon: SiC },
    { name: 'JavaScript', icon: SiJavascript },
  ],

  'Web Technologies': [
    { name: 'React.js', icon: SiReact },
    { name: 'Django', icon: SiDjango },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Vite', icon: SiVite },
  ],

  'Cloud & DevOps': [
    { name: 'AWS S3', icon: SiAmazon },
    { name: 'AWS EC2', icon: FaServer },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Git', icon: SiGit },
    { name: 'CI/CD Pipelines', icon: FaCog },
    { name: 'SFTP', icon: FaCloud },
    { name: 'FileZilla', icon: FaDatabase },
    { name: 'Docker', icon: SiDocker },
  ],

  'Databases': [
    { name: 'SQLite', icon: SiSqlite },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'IndexedDB', icon: FaDatabase },
    { name: 'ChromaDB', icon: FaDatabase },
  ],

  'AI/ML & Data Science': [
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Pandas', icon: SiPandas },
    { name: 'Matplotlib', icon: FaChartLine },
    { name: 'Scikit-learn', icon: SiScikitlearn },
    { name: 'Neural Networks', icon: FaBrain },
    { name: 'Transformers', icon: FaRobot },
    { name: 'Prompt Engineering', icon: FaPencilAlt },
    { name: 'Gemini API', icon: SiGooglecloud },
  ],

  'Tools & Platforms': [
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Google Apps Script', icon: SiGooglecloud },
    { name: 'Google Looker Studio', icon: FaChartLine },
    { name: 'AppSheet', icon: FaMobileAlt },
    { name: 'Postman', icon: SiPostman },
    { name: 'VS Code', icon: FaCode },
    { name: 'Logisim', icon: FaCog },
    { name: 'Automation Anywhere (RPA)', icon: FaRobot },
    { name: 'Terminal / CLI', icon: FaTerminal },
  ],

  'Core Competencies': [
    { name: 'Data Structures & Algorithms', icon: FaPuzzlePiece },
    { name: 'Object-Oriented Programming', icon: FaBoxOpen },
    { name: 'System Design', icon: FaBuilding },
    { name: 'REST APIs', icon: FaGlobe },
    { name: 'Version Control', icon: SiGit },
    { name: 'Debugging', icon: FaBug },
    { name: 'Programming Skills', icon: FaCode },
    { name: 'Software Development', icon: FaTools },
    { name: 'Community Building', icon: FaUsers },
  ],
};

// --- Projects Section ---
export const PROJECTS = [
  {
    title: 'Movie Recommender System (MovieLens 1M)',
    description: 'Solo-built and evaluated SVD matrix factorization and PyTorch Neural Collaborative Filtering (NCF) against popularity & random baselines on ~995K ratings (6,040 users, 3,043 movies). Optimized ranking metrics (Precision@10, Recall@10, NDCG@10) where SVD achieved ~202% Precision@10 improvement over random baseline.',
    image: '/projects/MovieRecommender.png',
    techStack: ['PyTorch', 'Python', 'RecSys', 'SVD', 'NCF', 'MovieLens'],
    githubLink: 'https://github.com/SamrithaShree/netflix-recsys'
  },
  {
    title: 'CiviCore – Modular Smart-City Platform',
    description: 'Ranked 18th on cross-track leaderboard in 24-hr TetherX Hackathon (CodeChef VIT Chennai). Engineered a modular smart-city operations backend managing civic incidents, automated SLA tracking via 3 cron workers, geospatial routing, RBAC governance, and real-time threat monitoring.',
    image: '/projects/CiviCore.png',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Cron Workers', 'RBAC'],
    githubLink: 'https://github.com/SamrithaShree/civicore'
  },
  {
    title: 'NAAM – Bilingual Civic Agricultural Platform',
    description: 'Bilingual freelance platform connecting farmers, volunteers, and investors within the farming community. Features localized routing, accessibility controls, keyboard-navigable search across 9+ pages and 16 URLs, and automated Vitest/RTL test suites. Live in active production.',
    image: '/projects/NAAM.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Vercel', 'Cloudflare'],
    githubLink: 'https://www.naamfarmers.org'
  },
  {
    title: 'Elite Intel – Web Analytics Platform',
    description: 'Responsive frontend web application for real-time intelligence analytics. Built with interactive visual components, dynamic dark-mode glassmorphism design system, high-performance data streams, and seamless navigation.',
    image: '/projects/EliteIntel.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubLink: 'https://eliteintel.vercel.app'
  },
  {
    title: 'Digital Learning Platform for Rural Education',
    description: 'Full-stack Progressive Web App for Smart India Hackathon 2025. Provides offline-first education for rural students with multilingual support (3 languages) and intelligent caching.',
    image: '/projects/DigitalLearning.png',
    techStack: ['React', 'Django', 'SQLite', 'IndexedDB'],
    githubLink: 'https://github.com/SamrithaShree/digital_learning'
  },
  {
    title: 'Portfolio Website with CICD Pipeline',
    description: 'Responsive portfolio with automated CICD pipelines via GitHub Actions, deployed to AWS S3 & GitHub Pages. Reduced deployment time by 80% through DevOps automation.',
    image: '/projects/Portfolio.png',
    techStack: ['React', 'Tailwind CSS', 'AWS S3', 'GitHub Actions', 'CICD'],
    githubLink: 'https://github.com/SamrithaShree/SamrithaPortfolio' 
  },
  {
    title: 'ThinkFirst AI Socratic Learning Assistant',
    description: 'GDG Hackathon project: AI-powered learning platform using Gemini API that provides context-aware hints instead of direct answers, following Socratic methodology.',
    image: '/projects/ThinkFirstAI.png',
    techStack: ['React', 'Firebase', 'Gemini API', 'Prompt Engineering'],
    githubLink: 'https://github.com/SamrithaShree/thinkfirst-ai'
  },
  {
    title: 'C++ Data Structures & Algorithms Lab',
    description: '12 modular programs implementing List, Queue, Tree, Hash, Graph ADTs with core algorithms (DFS, BFS, Dijkstra, Prim, Kruskal, AVL trees) using clean OOP architecture.',
    image: '/projects/C++DataStructures.png',
    techStack: ['C++', 'STL', 'Graph Algorithms', 'AVL Trees'],
    githubLink: 'https://github.com/SamrithaShree/data-structures-lab'
  },
  {
    title: 'NGO Connect Platform',
    description: 'Full-stack platform to help non-profits streamline operations. Built during Science Seekers Ideathon (3rd Place). Demonstrates social impact engineering.',
    image: '/projects/NGOConnect.png',
    techStack: ['React', 'Django', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/SamrithaShree/ngo-connect'
  },
];

// --- Experience/Learning Section ---
export const EXPERIENCE_TIMELINE = [
  {
    title: 'Adiuvo Diagnostics - Part-time AI Associate',
    mode: 'Hybrid',
    date: 'July 2026 - Present',
    description: 'Retained following AI internship to engineer NIR clinical oxygenation mapping pipelines (fine-tuned SegFormer segmentation & XGBoost physics-delta correction on 1,700+ images) and solo-build an automated Firebase inventory management dashboard in active production use.',
  },
  {
    title: 'Adiuvo Diagnostics - AI Intern',
    mode: 'Onsite',
    date: 'May 2026 - June 2026',
    description: 'Built a 3-class bioburden sterility classifier from raw time-of-flight sensor data for Raspberry Pi devices. Extracted custom wave features via deconvolution & mathematical curve-fitting, training a Random Forest model achieving 88% accuracy (+18% over physics baseline).',
  },
  {
    title: 'Caplin Point Laboratories - Cloud Engineering Intern',
    mode: 'Onsite',
    date: 'December 2025',
    description: 'Implemented CI/CD pipelines using GitHub Actions to automate portfolio deployment to AWS S3 and GitHub Pages, reducing deployment time by 80%. Deployed and configured AWS EC2 instances with secure SFTP file transfers using FileZilla and CLI tools. Gained hands-on experience with DevOps practices including AWS cloud services, version control integration, and infrastructure automation.',
  },
  {
    title: 'Valeo India Pvt Ltd - Information Systems Intern',
    mode: 'Onsite',
    date: 'June 2025 - July 2025',
    description: 'Developed automation tools using Google Apps Script to streamline workflows, including an auto-email sender and calendar event generator. Created an interactive training module on Google Looker Studio for 50 users, improving training efficiency by 40%. Completed certifications in AppSheet for no-code development and RPA with Automation Anywhere.',
  },
  {
    title: 'NetworkGeek - Data Science Intern',
    mode: 'Remote',
    date: 'June 2025 - July 2025',
    description: 'Secured 1st place on Public Leaderboard and 2nd place on Private Leaderboard in a Kaggle Customer Churn Prediction competition. Built machine learning models including Neural Networks and Transformers using Python, NumPy, Pandas, and Scikit-learn on datasets with 10,000+ records.',
  },
];

// --- Contact Section ---
export const CONTACT_INFO = {
  email: 'samrithashree23@gmail.com',
  location: 'India',
};