# Portfolio Website with CI/CD Pipeline

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A modern, responsive portfolio website showcasing projects, skills, and experience with automated CI/CD deployment**

[Live Demo](https://samrithashree.github.io) • [Contact](mailto:samrithashree23@gmail.com) • [LinkedIn](https://www.linkedin.com/in/samritha-shree-r/)

</div>

---

## Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Lightning Fast**: Built with Vite for blazing-fast performance
- **Smooth Navigation**: React Scroll for seamless section transitions
- **Contact Form**: Integrated EmailJS for direct messaging
- **Type Animations**: Dynamic text animations for engaging hero section
- **CI/CD Pipeline**: Automated deployment via GitHub Actions (80% faster deployment)
- **Accessible**: WCAG-compliant with semantic HTML and ARIA labels

---

## Tech Stack

### Frontend
- **React 19.2.1** - UI library
- **TypeScript 5.8.2** - Type safety
- **Vite 6.2.0** - Build tool
- **Tailwind CSS** - Styling framework

### Libraries & Integrations
- **react-icons** - Icon components
- **react-scroll** - Smooth scrolling navigation
- **react-type-animation** - Typing effects
- **@emailjs/browser** - Contact form integration

### DevOps & Deployment
- **GitHub Actions** - CI/CD automation
- **AWS S3** - Cloud hosting
- **GitHub Pages** - Alternative deployment

---

## Project Structure

```
SamrithaPortfolio/
├── public/
│   └── projects/          # Project screenshots
├── src/
│   ├── components/
│   │   ├── About.tsx          # About section
│   │   ├── CompetitiveProgramming.tsx
│   │   ├── Contact.tsx        # Contact form with EmailJS
│   │   ├── Experience.tsx     # Timeline of internships
│   │   ├── Footer.tsx         # Footer with social links
│   │   ├── Hero.tsx           # Hero section with animations
│   │   ├── Navbar.tsx         # Responsive navigation
│   │   ├── ProjectCard.tsx    # Reusable project card
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Skills.tsx         # Skills grid
│   │   ├── SkillCard.tsx      # Individual skill component
│   │   ├── SocialIcons.tsx    # Social media links
│   │   ├── SectionWrapper.tsx # HOC for sections
│   │   ├── TimelineItem.tsx   # Experience timeline item
│   │   └── Button.tsx         # Reusable button component
│   ├── constants.ts       # Data constants (projects, skills, etc.)
│   ├── App.tsx           # Main app component
│   ├── index.tsx         # Entry point
│   └── index.css         # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SamrithaShree/SamrithaPortfolio.git
   cd SamrithaPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact form)
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Add your credentials to the `Contact.tsx` component

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Customization Guide

### Update Personal Information

1. **Edit `src/constants.ts`** to update:
   - Projects showcase
   - Skills and technologies
   - Experience timeline
   - Social media links
   - Contact information

2. **Replace project images** in `public/projects/`

3. **Update EmailJS configuration** in `Contact.tsx`:
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### Styling Customization

- **Colors**: Modify Tailwind classes in components
- **Fonts**: Update in `index.css`
- **Animations**: Adjust timing in component files

---

## CI/CD Pipeline

### Automated Deployment Features

- **Dual Deployment**: AWS S3 + GitHub Pages
- **Auto-trigger**: Deploys on push to `main` branch
- **Build Optimization**: Vite production builds
- **80% Faster**: Automated vs manual deployment

### Pipeline Configuration

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Installs dependencies
2. Builds production bundle
3. Deploys to AWS S3
4. Publishes to GitHub Pages

### Setup Your Own Pipeline

1. **GitHub Secrets**: Add to repository settings
   ```
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
   AWS_REGION
   AWS_S3_BUCKET
   ```

2. **GitHub Pages**: Enable in repository settings → Pages → Source: `gh-pages` branch

---

## Performance Metrics

- **Lighthouse Score**: 95+ (Performance)
- **Mobile-First**: Responsive breakpoints
- **Accessibility**: WCAG AA compliant
- **Load Time**: < 2s (optimized assets)

---

## Key Sections

### 1. Hero Section
- Dynamic typing animation
- Social media links
- Call-to-action buttons

### 2. About
- Professional introduction
- Education details
- Career objectives

### 3. Skills
- Categorized skill sets
- Languages, Frameworks, Tools
- Cloud & DevOps technologies

### 4. Projects
- Featured projects with images
- Tech stack badges
- GitHub repository links

### 5. Competitive Programming
- LeetCode statistics
- Problem-solving achievements
- Algorithm expertise

### 6. Experience
- Internship timeline
- Company logos
- Key achievements

### 7. Contact
- Working contact form
- Email integration
- Social media links

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **React Team** - Amazing framework
- **Vite** - Blazing fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
- **React Icons** - Comprehensive icon library

---

## Contact

**Samritha Shree R**

- Portfolio: [samrithashree.github.io](https://samrithashree.github.io)
- LinkedIn: [samritha-shree-r](https://www.linkedin.com/in/samritha-shree-r/)
- GitHub: [@SamrithaShree](https://github.com/SamrithaShree)
- Email: samrithashree23@gmail.com
- LeetCode: [samrithashree](https://leetcode.com/samrithashree/)

---

<div align="center">

### Star this repo if you found it helpful!

Made by [Samritha Shree](https://github.com/SamrithaShree)

</div>