# Senior DevOps Portfolio Architecture 🚀

<div align="center">

[![Live Production](https://img.shields.io/badge/Live-Production-00c1d4?style=for-the-badge&logo=googledomains&logoColor=white)](https://samrithashree.io)
[![CI/CD Pipeline](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/SamrithaShree/SamrithaPortfolio/actions)
[![Global CDN](https://img.shields.io/badge/CloudFront-Edge%20Caching-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/cloudfront/)
[![SSL/TLS](https://img.shields.io/badge/Security-SSL/TLS-brightgreen?style=for-the-badge&logo=lets-encrypt&logoColor=white)](https://samrithashree.io)

**An enterprise-grade, high-performance static portfolio architected for global scalability, automated delivery, and maximum security.**

[View Live Site](https://samrithashree.io) • [Architecture Docs](#system-architecture) • [Performance Metrics](#performance)

</div>

---

## 🏗️ System Architecture

This project follows a modern **"Push-to-Deploy"** workflow, leveraging a fully automated CI/CD pipeline and multi-cloud distribution strategy for 100% uptime and global reach.

### Deployment Workflow
1.  **Code Commit**: Developer pushes changes to the `main` branch.
2.  **GitHub Actions**: Triggers the `Deploy to AWS and GitHub Pages` workflow.
3.  **Build Phase**: Production bundle is generated using Vite, optimizing for performance (code splitting, tree shaking).
4.  **Multi-Cloud Distribution**:
    *   **AWS Infrastructure**: Artifacts are synced to an **S3 Bucket** (origin) and distributed via **CloudFront CDN** (edge).
    *   **Secondary Node**: Automated push to `SamrithaShree.github.io` for high-availability backup.
5.  **Invalidation**: Automatic CloudFront cache invalidation ensures the latest version is served globally within seconds.

---

## ⚡ Performance

Engineered for speed, this portfolio achieves industry-leading performance metrics by utilizing an **Edge-First** delivery model.

*   **Sub-100ms TTFB**: Leveraging GitHub Pages and AWS CloudFront's global edge-caching network.
*   **Static Site Generation (SSG)**: Pre-rendered HTML for near-instantaneous page loads.
*   **Asset Optimization**: Blazing-fast asset delivery through Vite-optimized bundles and compressed media.
*   **Global CDN Distribution**: Content is served from the closest geographical point-of-presence (PoP) to the user.

---

## 🛡️ Security & Reliability

Security is baked into the infrastructure, ensuring a safe and reliable experience for all visitors.

*   **Custom Domain Integration**: Secure `.io` domain integration with automatic **SSL/TLS termination**.
*   **HTTPS Everywhere**: Enforced HSTS and 256-bit encryption for all data in transit.
*   **Secrets Management**: Zero-exposure policy utilizing **GitHub Secrets** for all sensitive AWS credentials and API keys.
*   **Automated Backups**: Dual-deployment strategy (AWS + GitHub Pages) ensures site availability even during regional cloud outages.

---

## 🛠️ CI/CD Pipeline (GitHub Actions)

The robust pipeline ensures that every release is stable, optimized, and delivered without manual intervention.

```yaml
# Simplified Workflow Logic
jobs:
  build:
    - Install & Cache Dependencies
    - Production Build (Vite)
    - Artifact Upload
  deploy:
    - AWS S3 Sync & CloudFront Invalidation
    - GitHub Pages Synchronization (High Availability)
```

---

## 💻 Tech Stack

### Frontend Core
- **React 19.2.1** - High-performance UI library
- **TypeScript 5.8.2** - Type-safe development
- **Tailwind CSS** - Utility-first styling for lean CSS bundles

### Infrastructure & DevOps
- **Vite 6.2.0** - Blazing-fast build tool
- **GitHub Actions** - CI/CD orchestration
- **AWS S3 / CloudFront** - Primary hosting and global distribution
- **GitHub Pages** - Redundant edge hosting

---

## 📂 Project Structure

```bash
Portfolio/
├── .github/workflows/    # CI/CD Pipeline (Infrastructure as Code)
├── components/           # Reusable UI components
├── assets/               # Optimized media and images
├── constants.ts          # Centralized data management
├── vite.config.ts        # Build optimization configuration
└── index.html            # SPA Entry point
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/SamrithaShree/SamrithaPortfolio.git

# Install dependencies
npm install

# Launch development server (Hot Module Replacement enabled)
npm run dev

# Execute production build
npm run build
```

---

## 📧 Contact & Network

**Samritha Shree R**

- **Live Site**: [samrithashree.io](https://samrithashree.io)
- **LinkedIn**: [samritha-shree-r](https://www.linkedin.com/in/samritha-shree-r/)
- **GitHub**: [@SamrithaShree](https://github.com/SamrithaShree)
- **Email**: [samrithashree23@gmail.com](mailto:samrithashree23@gmail.com)

---

<div align="center">

### Optimized for Speed. Secured for Scale. 🚀

Made with ❤️ by [Samritha Shree](https://github.com/SamrithaShree)

</div>
