# AGENTS.md

## Cursor Cloud specific instructions

This is an **Electron desktop application** (Hermes Desktop) — a GUI for the Hermes Agent AI assistant. It uses Node.js 22+, npm, React 19, TypeScript 5.9, Tailwind CSS 4, and electron-vite.

### Key commands

All standard dev commands are in `package.json`:

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` |
| Lint | `npm run lint` |
| Type check | `npm run typecheck` |
| Tests | `npm test` |
| Build | `npm run build` |

### Gotchas

- **Native module rebuild**: `npm install` runs a `postinstall` hook (`electron-builder install-app-deps`) that rebuilds `better-sqlite3` for the Electron runtime. If you see SQLite errors at runtime, re-run `npm install`.
- **Headless environment**: Running `npm run dev` in a headless Cloud VM will produce dbus and GPU errors in the console — these are harmless. The Electron app still launches and renders correctly via Xvfb.
- **Onboarding gate**: The app requires either a local Hermes Agent installation (`~/.hermes`) or a remote connection to proceed past the welcome screen. Without a running backend, you can only test the onboarding flow and UI rendering.
- **Husky hooks**: Pre-commit (lint + test) and pre-push (build) hooks only run on `release` or `release/*` branches, so they won't fire on feature branches.
- **No external services needed**: No Docker, no databases, no environment variables required for development. The app uses embedded SQLite via `better-sqlite3`.
