# dokkit.space — marketing site

Public website for [Dokkit](https://dokkit.space): a personal thinking tool (not a chatbot).

## Stack

- Next.js (App Router)
- Deployed on Vercel
- Product app is separate (`task-manager`); this site rewrites `/app` to the app origin

## Local

```bash
npm install
npm run dev
```

## Production env (Vercel)

| Variable | Purpose |
|----------|---------|
| `DOKKIT_APP_ORIGIN` | App base URL **without** trailing slash (e.g. `https://task-manager-xxx.vercel.app`). Used to rewrite `/app` → application. |

## Key pages

| Path | Content |
|------|---------|
| `/` | Homepage |
| `/pricing` | Free vs Dokkit plan (USD $6/month) |
| `/privacy` | Privacy Policy (NZ + AU / US / CA) |
| `/terms` | Terms of Service |
| `/faq` | FAQ |
| `/how-it-works`, `/features`, `/about` | Product story |

Support: support@dokkit.space

## Related

Application repository: `mkuhtze-code/task-manager`
