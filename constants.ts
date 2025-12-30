
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
    title: 'Valeo India Pvt Ltd - Software Internship',
    mode: 'Onsite',
    date: 'June 2025 - July 2025',
    description: 'Collaborated in a team to develop an innovative software solution for a real-world problem statement. Gained practical experience in rapid prototyping, teamwork, and presenting technical ideas under pressure.',
  },
  {
    title: 'Network Geeks - Data Science Internship',
    mode: 'Remote',
    date: 'June 2025 - July 2025',
    description: 'Collaborated in a team to develop an innovative software solution for a real-world problem statement. Gained practical experience in rapid prototyping, teamwork, and presenting technical ideas under pressure.',
  },
  {
    title: 'Caplin Point Laboratories - Software Internship',
    mode: 'Onsite',
    date: 'December 2025 - Present',
    description: 'Collaborated in a team to develop an innovative software solution for a real-world problem statement. Gained practical experience in rapid prototyping, teamwork, and presenting technical ideas under pressure.',
  },
  {
    title: 'Smart India Hackathon Participant',
    date: 'March 2023',
    description: 'Collaborated in a team to develop an innovative software solution for a real-world problem statement. Gained practical experience in rapid prototyping, teamwork, and presenting technical ideas under pressure.',
  },
  {
    title: 'Coursework: Operating Systems',
    date: 'August 2023 - December 2023',
    description: 'Deep dived into processes, threads, memory management, and file systems. Implemented a mini shell, CPU scheduling algorithms, and studied synchronization primitives.',
  },
  {
    title: 'Coursework: Data Structures & Algorithms',
    date: 'January 2023 - May 2023',
    description: 'Mastered fundamental data structures like arrays, linked lists, trees, and graphs, alongside essential algorithms for sorting, searching, and graph traversal. Applied these concepts to solve complex problems.',
  },
  {
    title: 'Coursework: Machine Learning Fundamentals',
    date: 'January 2024 - May 2024',
    description: 'Learned core ML concepts including supervised/unsupervised learning, model evaluation, and common algorithms (linear regression, decision trees, neural networks). Applied Python libraries like Scikit-learn and TensorFlow.',
  },
  {
    title: 'Self-Learning: React & Modern Frontend',
    date: 'Ongoing since July 2023',
    description: 'Independently learning React, TypeScript, and modern frontend frameworks like Next.js and styling with Tailwind CSS. Focused on building responsive, interactive user interfaces and understanding component-based architecture.',
  },
  {
    title: 'Self-Learning: Docker & Cloud Platforms (GCP)',
    date: 'Ongoing since January 2024',
    description: 'Exploring containerization with Docker to streamline development workflows and deployment. Gaining foundational knowledge in Google Cloud Platform (GCP) for deploying web applications and managing cloud resources.',
  },
];

// --- Contact Section ---
export const CONTACT_INFO = {
  email: 'samrithashree23@gmail.com',
  location: 'India',
};