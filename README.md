# Gorlium Bento

A React monorepo built with Turborepo that implements a design system using Bento components, Vite, TypeScript, and vanilla-extract for styling.

## 🛠️ Tech Stack

### Build System & Tools

- **Turborepo** - High-performance build system for JavaScript/TypeScript monorepos
- **Vite** - Next generation frontend tooling
- **esbuild** - An extremely fast JavaScript/TypeScript bundler
- **tsup** - Bundle TypeScript libraries with no config
- **PNPM** - Fast, disk space efficient package manager

### Frontend Core

- **React 18**
- **TypeScript 5**
- **@buildo/bento-design-system** - A composable design system
- **vanilla-extract** - Zero-runtime CSS-in-TS

### Development & Quality

- **ESLint** - Pluggable linting utility
- **TypeScript ESLint** - TypeScript support for ESLint

## 📁 Project Structure

```bash
.
├── packages/
│   ├── app/              # Main application
│   │   ├── src/
│   │   └── vite.config.ts
│   └── design-system/    # Shared design system
│       ├── src/
│       └── tsup.config.ts
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- PNPM installed globally (`npm install -g pnpm`)

### Install Dependencies

1. Clone the repository

```bash
git clone https://github.com/yourusername/gorlium-bento.git
cd gorlium-bento
```

2. Install packages

```bash
pnpm install
```

### Development

1. Start the development server

```bash
pnpm start
```

2. Open your browser and navigate to `http://localhost:5173`

### Build

1. Create production builds

```bash
pnpm build
```

2. The build outputs will be in:

- `packages/app/dist` for the main application
- `packages/design-system/dist` for the design system

## 📜 Available Scripts

- `pnpm start` - Start development servers (runs in parallel for all packages)
- `pnpm build` - Build all packages for production
- `pnpm lint` - Run ESLint on all packages

## 🏗️ Workspace Structure

The monorepo consists of the following packages:

- **app**: Main React application using Vite
- **design-system**: Shared design system built on Bento components

## 🔧 Configuration Files

- `turbo.json` - Turborepo pipeline configuration
- `pnpm-workspace.yaml` - PNPM workspace configuration
- `tsconfig.json` - Base TypeScript configuration
- `vite.config.ts` - Vite configuration for the main app
- `tsup.config.ts` - tsup configuration for the design system

## 📝 Development Notes

- The design system uses vanilla-extract for zero-runtime CSS-in-TS styling
- ESLint is configured with React Hooks and TypeScript rules
- Turborepo manages the build pipeline and caching
- Hot Module Replacement is enabled for development
