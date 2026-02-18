# MotoTagz

**Automatic crash detection and emergency response for motorcycle riders.**  
Detects accidents in real time and alerts emergency contacts when the rider can't call for help.  
*Ride confident — help arrives when you need it most.*

---

## About

MotoTagz is a first-of-its-kind motorcycle protection app. It uses smart sensors and instant alerts so that if you can't call for help, the app does it for you. The website presents the product, features, and how it works for riders and their families.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build & dev server)
- **React Router 7** (routing)
- **Tailwind CSS 4** (styling)
- **Font Awesome** (solid + brands icons)
- **ESLint** (linting)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app at **http://localhost:3030** (or the next available port).

### Build

```bash
npm run build
```

Output is in `dist/`. Use a static host or any Node server to serve it.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── Layout.tsx       # Header (navbar + mobile menu), footer
├── pages/
│   ├── Home.tsx         # Landing: hero, how it works, features, CTA, etc.
│   ├── AboutUs.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   └── Blog.tsx
├── App.tsx              # Routes
├── main.tsx
└── index.css            # Tailwind + CSS variables (theme colors)
public/
├── img/                 # Images (e.g. homeBg.jfif, publicContain.jfif)
└── logo.png             # Site logo
```

## Routes

| Path            | Page        |
|-----------------|------------|
| `/`             | Home       |
| `/about`        | About Us   |
| `/features`     | Features   |
| `/how-it-works` | How It Works |
| `/blog`         | Blog       |

## Theme (CSS Variables)

Defined in `src/index.css`:

- `--primary-color` – main brand red
- `--dark-text-color`, `--gray-text-color`
- `--dark-background-color`, `--light-background-color`
- `--accent-color`, `--accent2-color`, `--accent3-color`
- `--primary-button-text-color`, `--primary-button-hover-bg-color`
- `--light-border-color`, `--medium-background-color`

## License

Private. © 2026 MotoTagz LLC. All rights reserved.
