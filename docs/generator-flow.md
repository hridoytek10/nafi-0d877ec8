## Landing Page Generator Flow

This project includes a simple landing page generator that works with templates under `templates/`.

High-level flow:

- User selects a template and submits data matching `data/site.json`.
- Backend copies the template into `/tmp/{buildId}`.
- Backend overwrites `data/site.json` with user data and saves `/public/profile.jpg`.
- Backend creates a GitHub repo and (stub) deployment on Vercel.
- API returns `buildId`, `repoUrl`, and `liveUrl`.

Key files:

- `lib/templates.ts`: lists templates and resolves paths.
- `lib/fs-utils.ts`: copies template directories and writes `site.json` / profile image.
- `lib/github.ts`: stubbed helpers for creating and pushing to a repo.
- `lib/vercel.ts`: stubbed helper for triggering a deployment.
- `app/api/generate/route.ts`: orchestrates the full generation pipeline.
- `templates/*/data/site.json`: **single source of editable content** for each template.

