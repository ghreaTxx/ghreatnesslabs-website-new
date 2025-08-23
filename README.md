# Ghreatness Labs Website

A modern, professional website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Modern UI with Tailwind CSS
- 🎭 Framer Motion animations
- 🎯 3D elements with Three.js
- 📱 Fully responsive design
- 🔒 TypeScript for type safety
- 🎪 Professional component architecture

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd ghreatness-labs-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── providers.tsx     # Context providers
├── components/            # Reusable components
│   ├── 3d/               # 3D components
│   ├── sections/         # Page sections
│   ├── ui/               # UI components
│   ├── Footer.tsx        # Footer component
│   ├── LoadingScreen.tsx # Loading screen
│   └── Navigation.tsx    # Navigation component
├── public/               # Static assets
│   ├── assets/          # General assets
│   └── images/          # Image assets
└── ...config files
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js, React Three Fiber
- **Icons:** Lucide React
- **Development:** ESLint, PostCSS

## License

Private - All rights reserved