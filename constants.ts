
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
    { name: 'Problem Solving', icon: '🧠' },
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
    title: 'Academic Project: Mini Shell',
    description: 'A simplified UNIX shell implementation in C, demonstrating process management, I/O redirection, and piping. Developed as part of an Operating Systems coursework.',
    image: 'https://picsum.photos/400/300?random=1', // Placeholder image
    techStack: ['C', 'Linux', 'System Calls'],
    githubLink: 'https://github.com/your-github/mini-shell', // Customize
  },
  {
    title: 'Learning Project: This Portfolio Website',
    description: 'My first deployed project! A responsive portfolio built from scratch to showcase skills in React and Tailwind CSS. Focus on clean UI/UX and modern development practices.',
    image: 'https://picsum.photos/400/300?random=2', // Placeholder image
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/your-github/portfolio', // Customize
  },
  {
    title: 'Machine Learning Assignment: Image Classifier',
    description: 'Developed a convolutional neural network (CNN) to classify images using TensorFlow and Keras. Explored different architectures and hyperparameter tuning for optimal performance.',
    image: 'https://picsum.photos/400/300?random=3', // Placeholder image
    techStack: ['Python', 'TensorFlow', 'Keras', 'Jupyter Notebook'],
    githubLink: 'https://github.com/your-github/ml-image-classifier', // Customize
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