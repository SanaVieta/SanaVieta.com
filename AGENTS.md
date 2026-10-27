# Agents.md for Next.JS checkout application

## Codebase structure

Single-Page react app using vite under the hood

```
├── AGENTS.md
├── ATTRIBUTIONS.md
├── default_shadcn_theme.css
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.mjs
├── public
├── skills-lock.json
├── src
│   ├── app
│   │   ├── components
│   │   └── Pages
│   ├── contexts
│   ├── hooks
│   ├── imports
│   ├── services
│   ├── styles
│   ├── test
│   └── types
├── tsconfig.json
├── vercel.json
├── vite.config.ts
└── yarn.lock
```

## Build Commands

```bash
yarn install
yarn dev     # dev server, http://localhost:5173
yarn build   # production build
yarn start   # run production build
```

## TypeScript

Type-check against the repo's own `tsconfig.json` (strict mode, target ES2022,
bundler module resolution, `@/*` path alias to repo root):

```bash
pnpm exec tsc --noEmit
```

Do not hand-roll a separate tsconfig for single-file checks — it won't pick up the `@/*`
path mapping this one includes.

Format all TypeScript per the repo's `.prettierrc` (single quotes, semicolons, 2-space
indent, 100-char print width, trailing commas on multiline, parens around arrow params).

- `strict: true` — no implicit `any`, handle `null`/`undefined` explicitly.
- `moduleResolution: "bundler"` — import extensionless, no `.js` suffixes on relative TS
  imports.
- `isolatedModules: true` — every file must transpile standalone; re-export types with
  `export type`.
- `@/*` maps to `./src/*` — import via `@/app/...`, `@/services/...`, `@/hooks/...` etc.
  rather than long relative paths.

## Key Directories (Quick Reference)

- `services/shopifyServices.ts` — all Shopify Storefront API calls (cart
  create/fetch/update/remove, product fetch); add new GraphQL queries here
- `services/handleCheckout.ts` — redirects to the Stripe checkout URL
- `contexts/` — React contexts so components can read/update that state without prop
  drilling
- `hooks/` — thin hooks that consume the contexts and are what components actually import

## Development Tips

- Needs `VITE_STORE_URL` and `VITE_ACCESS_TOKEN` in `.env` for local dev — Shopify
  Storefront API endpoint and access token, consumed in `services/shopifyServices.ts`.

## Secrets and Env Safety

- Don't invent or hardcode real payment/identity provider credentials — this app only
  talks to the in-repo fakes.
- If real env vars are introduced later, never commit `.env.local` or paste secret values
  into chat, commits, or logs.

## Learning and Self-Improvement

- If you get corrected, or find a bug/mistake in the existing code while implementing a
  solution, document it in `docs/learnings.md`.
- When the `systematic-debugging` or `receiving-code-review` skill flows surface a root
  cause or a correction, that finding's write-up step is this file — don't drop it after
  the flow ends.

## Commit and PR Style

- Target branch: `candidate/<your-name>`.
- Include `WRITEUP.md` in the PR.
