# WebCompass Frontend

Academic project page for **WebCompass: A Unified Multimodal Benchmark and Evaluation Framework for Web Coding**.

Production deployment target:

- GitHub Pages project site
- URL: `https://huayuankou9-arch.github.io/WebCompass/`
- Base path: `/WebCompass`

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui-style base components (`components/ui/*`)
- Framer Motion
- lucide-react
- Recharts

## Local Development

```bash
cd Frontend
npm install
npm run dev
```

Local URL: `http://localhost:3000`

## Production Build (Static Export)

```bash
npm run build
```

This project uses Next.js static export (`output: "export"`) and generates the deployable static files in `out/`.

## GitHub Pages Deployment

Deployment is fully automated by GitHub Actions:

- Workflow file: `.github/workflows/deploy.yml`
- Trigger: push to `main` or `master`
- Flow:
1. Install dependencies
2. Build static site
3. Upload Pages artifact (`out/`)
4. Deploy with `actions/deploy-pages`

GitHub repository Pages source should be configured to **GitHub Actions**.

## Automatic Update Flow

After this setup, every push to the default branch automatically updates:

`https://huayuankou9-arch.github.io/WebCompass/`

## Deployment-specific Notes

- `next.config.js` applies static export + repo base path in production.
- Metadata and OG paths are generated with `/WebCompass` in production.
- Local `npm run dev` remains normal (no base path in development).

## Project Structure

```text
Frontend/
  .github/workflows/deploy.yml
  app/
  components/
  data/
  lib/
  public/
  styles/
```