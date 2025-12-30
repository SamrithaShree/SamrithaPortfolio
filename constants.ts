
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

// --- Skills Section ---
export const SKILLS = {
  'Core': [
    { name: 'Data Structures & Algorithms', icon: '🧑‍💻' }, // Using emoji for generic concepts
    { name: 'Problem Solving Capacity', icon: '🧠' },
  ],
  'Languages': [
    { name: 'Python', icon: SiPython },
    { name: 'Java', icon: '☕' }, 
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'C', icon: SiC },
    { name: 'SQL', icon: SiPostgresql },
  ],
  'Learning': [
    { name: 'React', icon: SiReact },
    { name: 'Django', icon: SiDjango },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Docker', icon: SiDocker },
  ],
  'Tools': [
    { name: 'Git', icon: SiGit },
    // Fix: Replaced SiVisualstudiocode with an emoji as it's not exported
    { name: 'VS Code', icon: '💻' },
    { name: 'Terminal/CLI', icon: '💻' }, // Replaced FaTerminal with emoji
  ],
  'Platforms': [
    { name: 'GCP Basics', icon: SiGooglecloud },
    { name: 'Railway.app', icon: SiRailway },
    { name: 'LeetCode', icon: SiLeetcode },
  ],
};

// --- Projects Section ---
export const PROJECTS = [
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
    image: 'https://picsum.photos/400/300?random=3',
    techStack: ['React', 'Tailwind CSS', 'AWS S3', 'GitHub Actions', 'CICD'],
    githubLink: 'https://github.com/SamrithaShree/portfolio-website' // Your main portfolio repo
  },
  {
    title: 'ThinkFirst AI Socratic Learning Assistant',
    description: 'GDG Hackathon project: AI-powered learning platform using Gemini API that provides context-aware hints instead of direct answers, following Socratic methodology.',
    image: 'https://picsum.photos/400/300?random=4',
    techStack: ['React', 'Firebase', 'Gemini API', 'Prompt Engineering'],
    githubLink: 'https://github.com/SamrithaShree/thinkfirst-ai'
  },
  {
    title: 'C Data Structures & Algorithms Lab',
    description: '12 modular programs implementing List, Queue, Tree, Hash, Graph ADTs with core algorithms (DFS, BFS, Dijkstra, Prim, Kruskal, AVL trees) using clean OOP architecture.',
    image: 'https://picsum.photos/400/300?random=5',
    techStack: ['C', 'STL', 'Graph Algorithms', 'AVL Trees'],
    githubLink: 'https://github.com/SamrithaShree/c-data-structures-lab'
  },
  {
    title: 'NGO Connect Platform',
    description: 'Full-stack platform to help non-profits streamline operations. Built during Science Seekers Ideathon (3rd Place). Demonstrates social impact engineering.',
    image: 'https://picsum.photos/400/300?random=6',
    techStack: ['React', 'Django', 'PostgreSQL', 'AWS'],
    githubLink: 'https://github.com/SamrithaShree/ngo-connect'
  },
  {
    title: 'Recommendation System (ML Project)',
    description: 'Built hybrid recommendation engine using SVD, Neural Collaborative Filtering (NCF), XGBoost, and LightGBM. Academic ML coursework demonstrating advanced recommender systems.',
    image: 'https://picsum.photos/400/300?random=9',
    techStack: ['Python', 'SVD', 'NCF', 'XGBoost', 'LightGBM'],
    githubLink: 'https://github.com/SamrithaShree/recommendation-system'
  },
];

// --- Experience/Learning Section ---
export const EXPERIENCE_TIMELINE = [
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