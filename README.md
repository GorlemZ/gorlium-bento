# Gorlium Bento

Gorlium is a web application built with a variety of technologies, written as a frontend exercise to learn about [Bento](https://www.bento-ds.com/). This README will guide you through the technologies used and how to run the application locally.

## Technologies Used: **React, TypeScript, Vite, Vanilla Extract, TurboRepo**

## Project Structure

As suggested [HERE](https://developer.bento-ds.com/Getting%20Started/project-structure), the project structure is the following:

```
.
├── packages/
│   ├── app/
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   ├── design-system/
│   │   ├── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
├── .gitignore
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.0.0)
- PNPM (>= 6.0.0)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/gorlium-bento.git
cd gorlium-bento
```

2. Install dependencies:

```sh
pnpm install
```

### Running the Application

Start the app:

```sh
pnpm build
pnpm start
```

This will locally build and start the app.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Deployment

Deployment is handled automatically by Netlify using the Netlify GitHub App integration.

### How it works

- When you push changes to the `main` branch, Netlify detects the update via the GitHub App (not a webhook).
- Netlify pulls the latest code, runs the build command, and deploys the result to the live site.
- No manual configuration of webhooks is required; the integration is managed through the Netlify dashboard.

### Customization

Build settings and environment variables can be configured in the Netlify dashboard or in the `netlify.toml` file.
