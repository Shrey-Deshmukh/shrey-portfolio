# shrey.cluster — Personal Portfolio

My portfolio, designed as a live infrastructure control plane: I'm the cluster, each section is a node, and packets flow between them. It's a nod to the storage, Kubernetes and replication work I did at HPE.

## Tech Stack
- React 19 + Vite
- [Motion](https://motion.dev) for animation
- Hand-written SVG and CSS (design tokens, light/dark themes)
- Netlify (CI/CD & hosting)

## Features
- Interactive cluster map hero, with a **simulate failover** demo that reroutes traffic through a peer node
- `kubectl describe`-style About panel, a scroll-driven replication timeline with count-up metrics, and project "pods" that tail logs on hover
- `ping shrey` contact section
- Light/dark theme toggle, keyboard accessible, and respects `prefers-reduced-motion`
- Content lives in `src/data/`, so updates don't touch components

## Development
```bash
npm install
npm run dev     # local dev server
npm run lint
npm run build   # production build in dist/
```

## Deployment
The site is deployed on Netlify with continuous deployment enabled.
Every push to the main branch triggers an automatic build and deploy.

## Live Site
👉 https://shrey-deshmukh.netlify.app/
