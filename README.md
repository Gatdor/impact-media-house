# Impact Media House — Website

A responsive React + Vite website starter for Impact Media House. The project includes Home, About, Services, Portfolio, portfolio detail, Contact, and draft Privacy pages.

## Important launch notes

This project deliberately does **not** invent the business's contact details, mission, staff, clients, awards, testimonials, or past projects. Service descriptions are proposed draft copy and must be confirmed. Portfolio tiles are clearly labelled placeholders and must be replaced before launch.

The official logo was not included as a file in the project-generation context. Add the exact original logo image at:

`public/images/impact-media-house-logo.png`

The logo component preserves the supplied file as-is. Until the file is added, a simple text fallback appears; this fallback is not a replacement official logo. Add approved `favicon.png` and `social-preview.jpg` to `public/images/` before production, or update the metadata paths.

## Requirements

- Node.js 20.19+ or a current compatible Node.js LTS release
- npm

## Install and run locally

```bash
npm install
npm run dev
```

Vite will print a local development URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. Confirm the build completes and manually test all routes and form states before deployment.

## Contact form setup (required for live submissions)

The form is intentionally not presented as live until a real submission endpoint is configured. One straightforward option is Formspree:

1. Create a form with your chosen form provider and configure its spam protection / allowed domains.
2. Copy its endpoint URL.
3. For local development, create a `.env` file from `.env.example` and set `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`.
4. In your hosting provider's environment settings, set the same variable for the production build.
5. Rebuild and test a successful submission, a rejected submission and the form's loading state. Check the provider's inbox / delivery settings.

`VITE_FORMSPREE_ENDPOINT` is public client configuration, not a secret. Never put private API keys in `VITE_*` variables. If you need more control over personal data, use a server-side endpoint instead and validate submissions on the server.

## Deployment

This is a Vite single-page app. Deploy the project to a static host such as Netlify, Vercel, Cloudflare Pages or a web server that supports SPA fallback.

Typical settings:

- Build command: `npm run build`
- Publish/output directory: `dist`
- Node version: current supported LTS
- Environment variable: `VITE_FORMSPREE_ENDPOINT` (after the form provider is configured)
- Optional environment variable: `VITE_SITE_URL` (set to the final canonical HTTPS domain)

Configure the host to rewrite unknown application paths to `/index.html` so routes such as `/portfolio/example` work when loaded directly. Enable HTTPS. Add a verified domain and canonical URL metadata before launch.

## Content updates

- Services: edit `src/data/site.js` and remove any services the business does not offer.
- Portfolio: edit `portfolioItems` in `src/data/site.js`; add image files under `public/images/`; use accurate project details and approved media only.
- Facebook: the official URL is centralized as `FACEBOOK_URL` in `src/data/site.js`.
- Brand logo: place the exact file at `public/images/impact-media-house-logo.png`.
- Contact details: update the Contact page only after the phone, email and location have been confirmed.
- Copy: review draft mission/vision-style language and all service descriptions before launch.

## Current included routes

- `/`
- `/about`
- `/services`
- `/portfolio`
- `/portfolio/:slug`
- `/contact`
- `/privacy`

## Before public launch checklist

- [ ] Add and visually verify the exact official logo.
- [ ] Replace portfolio placeholder art with approved media and real project details.
- [ ] Confirm which services are actually offered.
- [ ] Confirm phone / WhatsApp, email, exact public address (if desired), hours and business contact owner.
- [ ] Configure and test the form provider or implement a server-side endpoint.
- [ ] Review and approve the privacy notice and data retention process.
- [ ] Add an approved favicon and social sharing image.
- [ ] Set production domain, canonical metadata and hosting SPA fallback.
- [ ] Run `npm run build` and test on mobile, tablet and desktop.
- [ ] Check all images, links, keyboard navigation, contrast, reduced motion and form error/success states.
- [ ] Confirm permission and consent for all published photos, videos, logos and client references.

## Notes

The website uses Google Fonts from a hosted stylesheet; if external font requests are undesirable, remove the font links in `index.html` and use system fonts. The privacy page is a draft placeholder and is not legal advice or a complete privacy policy.
