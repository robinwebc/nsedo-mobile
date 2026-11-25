# nSedo Mobile

Official website for nSedo Mobile, Robin’s Android phone brand, based in Bangladesh.

The site is a static [Astro](https://astro.build) export. It is built for GitHub Pages at [https://robinwebc.github.io/nsedo-mobile/](https://robinwebc.github.io/nsedo-mobile/).

## What’s on the site

- Home, phone lineup, a page each for the X1, A5, and Go, comparison, support, about, news
- Privacy, terms, and warranty policy
- English and Bangla, switched from the header. The choice stays in this browser only
- Indicative prices in BDT. There is no basket and no payment
- Contact and “Notify me” open an email to robinwebc@gmail.com
- The service-centre table is a placeholder and is labelled as one

Phone pictures are flat vector previews of the finishes, drawn for this site.

## Develop

Node.js 22.

```bash
npm install
npm run dev
```

The dev server uses the `/nsedo-mobile/` base path.

```bash
npm run build
npm run preview
```

`npm run build` writes `dist/` and checks internal links, the base path, titles, and the placeholder warning on the support page.

## GitHub Pages

`.github/workflows/pages.yml` builds on every push to `main` and deploys with `actions/deploy-pages`. The configure step sets `enablement: true` on `actions/configure-pages`.

That flag asks GitHub to create the Pages site (source: GitHub Actions) if it does not exist yet. The action’s own documentation says this call needs a token **other than** the default `GITHUB_TOKEN` — a personal access token with the `repo` scope, or a GitHub App with `administration:write` and `pages:write`. The workflow token can deploy once Pages exists, but it often cannot create the Pages site the first time.

If the deploy fails on “Create Pages site failed”, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. Re-run the workflow. No other manual toggle should be required after that.

Prices, service centres, and warranty wording on the site are the published product statement. The centre list must be replaced before anyone treats it as a real address.
