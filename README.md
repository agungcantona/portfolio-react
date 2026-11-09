# Agung Cantona — Portfolio

Personal portfolio of **I Gede Agung Cantona Suryabisana**, a Web & CRM Developer based in Bali.
I build and maintain property websites, from the front end and the CMS to the SEO, tracking,
CRM and AI automation that turn visitors into qualified leads.

<!-- Add the live link once deployed, e.g. **Live site:** https://your-domain.com -->

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-plain-1572B6?logo=css3&logoColor=white)

---

## Features

- **Bilingual (English / Indonesian).** All text switches instantly without reloading, and the `<html lang>` attribute stays in sync for SEO and screen readers.
- **Light and dark mode.** Follows the visitor's system setting on the first visit, remembers their choice after that, and never flashes the wrong theme on load.
- **Scroll animations.** Sections fade in as you scroll, using `IntersectionObserver`, and stay still for visitors who prefer reduced motion.
- **Active-section navbar.** The menu highlights where you are on the page, with a mobile hamburger menu on small screens.
- **Content kept apart from code.** Every piece of text and data (projects, experience, skills) lives in one file, [`src/data/content.js`](src/data/content.js).
- **No UI libraries.** Hand-written CSS with design tokens (CSS variables), so the whole look can be re-themed from one place.
- **Ready to share.** Basic SEO and Open Graph meta tags, plus a downloadable CV.

## Sections

| Section | What it shows |
| --- | --- |
| Hero | Intro, role, call-to-action buttons and quick stats |
| About | Background and quick facts |
| Skills | Tools grouped by Web Development, CMS & Hosting, CRM & Automation, SEO & Analytics |
| Projects | Property websites I built and maintain, with my role, highlights and tech used |
| Experience | Work timeline, education and certifications |
| Contact | Email, WhatsApp, LinkedIn and GitHub |

## Selected projects

| Project | Role | Stack |
| --- | --- | --- |
| [Bali Villa Realty](https://balivillarealty.com) | Web & CRM Developer | WordPress, Elementor Pro, Houzez, PHP, JavaScript, Cloudflare |
| [iLot Property Bali](https://ilotpropertybali.com) | Web & CRM Developer | WordPress, Elementor Pro, GoHighLevel, AI automation, GA4, GTM |
| [BNA Property](https://bnaproperty.com) | Web Developer | WordPress, Elementor, ACF, SEO |
| [We Provide Property](https://weprovideproperty.com) | Web Developer | WordPress, Elementor, ACF, SEO |

## Tech stack

- **React 18**: function components, `useState`, `useEffect` and custom hooks (`useReveal`, `useActiveSection`)
- **Vite 5**: dev server and production build
- **Plain CSS**: custom properties for theming, responsive layout with Grid and Flexbox
- **Google Fonts**: Inter and JetBrains Mono

## Project structure

```
src/
├── data/content.js      # all text and data (EN + ID)
├── components/          # Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
├── hooks/               # useReveal (scroll animation), useActiveSection (scrollspy)
├── App.jsx              # language and theme state
└── index.css            # styles and colour tokens for both themes
```

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Contact

- **Email:** [agungcantona.work@gmail.com](mailto:agungcantona.work@gmail.com)
- **LinkedIn:** [linkedin.com/in/agung-cantona](https://www.linkedin.com/in/agung-cantona/)
- **GitHub:** [github.com/agungcantona](https://github.com/agungcantona)

---

© I Gede Agung Cantona Suryabisana. All rights reserved.
