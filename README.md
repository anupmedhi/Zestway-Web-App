# Zestway Website

Marketing website for Zestway India, a growth partner for food and beverage businesses. The site presents Zestway's services across branding, marketing, creative production, business consulting, POS software, and operations support.

## Tech Stack

- React 18
- Create React App
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000). It reloads automatically when files change.

## Available Scripts

```bash
npm start
```

Runs the app in development mode.

```bash
npm test
```

Starts the React test runner in watch mode.

```bash
npm run build
```

Creates an optimized production build in the `build` directory.

```bash
npm run deploy
```

Builds the site and publishes the `build` directory with `gh-pages`.

## Project Structure

```text
public/
  images/          Static images used by the website
  CNAME            Custom domain configuration for www.zestway.in
src/
  components/      Page sections and reusable UI components
  App.js           Main page composition
  index.js         React entry point
  index.css        Tailwind entry styles
  App.css          App-level styles
```

## Main Sections

- `Header` - top navigation
- `Hero` - headline, calls to action, and hero image
- `AboutUs` - mission and vision content
- `Services` - service categories and offerings
- `Portfolio` - sample work and brand presence
- `PosTeaser` - POS software highlight
- `WhyChooseUs` - differentiators
- `Testimonials` - client feedback
- `CtaSection` - contact prompt
- `Footer` - contact details and links

## Deployment Notes

The project is configured with:

- `homepage: "."` in `package.json` so built assets resolve relatively.
- `public/CNAME` set to `www.zestway.in` for the custom domain.
- `gh-pages` as the deployment package.

Before deploying, run a production build locally to catch compile issues:

```bash
npm run build
```
