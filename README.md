# QSource

A modern staffing, consulting, and technology services platform built with Next.js 16, React 19, and Material-UI.

**Live Demo:** [https://qsource-website.vercel.app/](https://qsource-website.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Services](#services)
- [Pages](#pages)
- [Testing](#testing)
- [Team](#team)
- [Contributing](#contributing)

## 👥 Team

This project is a collaborative effort by an experienced development team:

| Team Member | Role & Contributions                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| **Bhola**   | Homepage & Website Layout - Designed and implemented the overall website structure and home page components |
| **Sahil**   | Find Job Page & Job Application - Built the job listing page and job application functionality              |
| **Pavan**   | Our Services Page - Created the comprehensive services showcase page                                        |
| **Damodar** | About Us & Contact Page - Developed the company information and contact form pages                          |

## 🎯 Overview

QSource is a comprehensive business solution platform that provides:

- **Staffing and Recruitment Services** - Connect qualified professionals with opportunity
- **IT Consulting** - Expert guidance on technology strategy and implementation
- **Software Development** - Custom development solutions tailored to your needs
- **AI & ML Solutions** - Cutting-edge artificial intelligence and machine learning services
- **Cloud Computing** - Scalable cloud infrastructure and migration services
- **Cybersecurity Solutions** - Protect your business with enterprise-grade security

The platform serves multiple industries including Healthcare, Technology, Finance, Manufacturing, Government, and Retail.

## ✨ Features

- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Built with Material-UI for a professional appearance
- **Multi-page Application** - Home, About, Services, Find Jobs, and Contact pages
- **Job Listings** - Browse available job opportunities
- **Industry Coverage** - Expertise across multiple industry sectors
- **Professional Certifications** - Verified credentials and partnerships
- **Contact Form** - Easy customer inquiry and communication
- **Performance Optimized** - Uses Next.js 16 and React Compiler for optimal performance

## 🛠 Tech Stack

### Core Framework

- **Next.js** 16.0.7 - React framework for production
- **React** 19.2.0 - UI library
- **TypeScript** 5 - Type-safe development

### UI & Styling

- **Material-UI (MUI)** 7.3.6 - Component library
- **@emotion/react & @emotion/styled** - CSS-in-JS styling solution
- **Lucide React** - Icon library

### Testing

- **Jest** 30.2.0 - JavaScript testing framework
- **@testing-library/react** - React testing utilities
- **@testing-library/dom** - DOM testing utilities

### Development Tools

- **ESLint** 9 - Code quality and linting
- **ts-node** - TypeScript execution
- **Babel React Compiler** - Optimized React compilation

## 📁 Project Structure

```
qsource/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── page.tsx             # Home page
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── findjobs/            # Job listings page
│   │   └── ourservices/         # Services page
│   └── components/
│       ├── Home/                # Home page components
│       │   ├── HeroSection.tsx
│       │   ├── HowWeWorkSection.tsx
│       │   ├── PartnershipSection.tsx
│       │   ├── ServicesSection.tsx
│       │   └── WhatWeOfferSection.tsx
│       ├── About/               # About page components
│       │   └── About.tsx
│       ├── contact/             # Contact page components
│       │   └── Contact.tsx
│       ├── jobs/                # Job pages components
│       │   ├── ContactSection.tsx
│       │   ├── JobHeroSection.tsx
│       │   ├── JobOpeningsSection.tsx
│       │   └── RecruitingSection.tsx
│       ├── OurServices/         # Services components
│       │   ├── Elevating.tsx
│       │   ├── SmoothSailing.tsx
│       │   ├── Synergizing.tsx
│       │   └── WhyChoose.tsx
│       ├── ThemeRegistry/       # Theme configuration
│       │   ├── theme.ts
│       │   └── ThemeRegistry.tsx
│       ├── Navbar.tsx           # Navigation component
│       ├── Footer.tsx           # Footer component
│       └── __tests__/           # Component tests
├── public/                       # Static assets
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup file
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/qsource.git
cd qsource
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables (if needed):

```bash
cp .env.example .env.local
```

## 📝 Available Scripts

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Testing

Run all tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

Run tests in watch mode:

```bash
npm test -- --watch
```

### Linting

Check code quality:

```bash
npm run lint
```

## 🎨 Services

QSource offers comprehensive services across six main areas:

1. **IT Consulting** - Strategic technology guidance and implementation
2. **Software Development** - Custom development solutions
3. **AI & ML Solutions** - Advanced artificial intelligence and machine learning
4. **Cloud Computing** - Infrastructure and migration services
5. **Staffing and Recruitment** - Professional talent acquisition
6. **Cybersecurity Solutions** - Enterprise security services

## 📄 Pages

### Home (`/`)

Landing page featuring:

- Hero section with call-to-action
- Services overview
- What we offer section
- How we work process
- Partnership section

### About (`/about`)

Company information including:

- Mission statement
- Vision statement
- Core values
- Industry expertise
- Professional certifications

### Services (`/ourservices`)

Detailed information about all service offerings:

- Elevating services
- Smooth sailing solutions
- Synergizing partnerships
- Why choose us section

### Find Jobs (`/findjobs`)

Job listing and recruitment page with:

- Job hero section
- Recruiting information
- Open job listings
- Contact section for inquiries

### Contact (`/contact`)

Contact form and information for:

- Customer inquiries
- Service requests
- Partnership opportunities
- General communication

## 🧪 Testing

The project includes comprehensive unit tests for components:

- Component rendering tests
- User interaction tests
- Integration tests

Test files are located in `src/components/__tests__/` directory.

### Test Coverage

Key test files:

- `ContactSection.test.tsx`
- `Footer.test.tsx`
- `HeroSection.test.tsx`
- `HowWeWorkSection.test.tsx`
- `JobHeroSection.test.tsx`
- `JobOpeningsSection.test.tsx`
- `Navbar.test.tsx`
- `PartnershipSection.test.tsx`
- `RecruitingSection.test.tsx`
- `ServicesSection.test.tsx`
- `WhatWeOfferSection.test.tsx`

## 🎯 Key Features

### Responsive Design

Built with Material-UI's responsive grid system, ensuring perfect display on all devices from mobile to desktop.

### Performance

- Next.js 16 with optimized rendering
- React Compiler for automatic optimizations
- Image optimization for faster load times
- Code splitting for efficient bundle management

### Type Safety

- Full TypeScript support
- Strict type checking enabled
- Type definitions for all libraries

### Accessibility

- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance

## 🌐 Deployment

The application is deployed on Vercel at:
[https://qsource-website.vercel.app/](https://qsource-website.vercel.app/)

To deploy your own version:

1. Push your code to a Git repository
2. Connect to Vercel
3. Deploy with a single click

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📜 License

This project is private and all rights are reserved.

## 📧 Contact

For inquiries or support, visit [https://qsource-website.vercel.app/contact](https://qsource-website.vercel.app/contact)

---

**Built with ❤️ by QSource**
