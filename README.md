# Hayah International Ministries — Website

A clean, multi-page static site built with **Eleventy (11ty)**, Nunjucks templates, and responsive CSS. No frontend framework overhead — pure HTML, CSS, and vanilla JavaScript.

---

## Quick Start

### Prerequisites
- **Node.js** (v16 or newer) — [download here](https://nodejs.org)
- A text editor (VS Code, Sublime, etc.)

### Installation

1. **Clone or download** this folder to your machine
2. **Open terminal** and navigate to the project:
   ```bash
   cd hayah-site
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

**Start the dev server** (with live reload):
```bash
npm start
```

Then open your browser to **`http://localhost:8080`** and you'll see the site. Any changes you make to files will auto-refresh in the browser.

### Building for Deployment

When ready to deploy, compile all pages:
```bash
npm run build
```

This creates a `_site/` folder with pure static HTML files. Upload this folder to:
- **Netlify** (drag & drop or GitHub sync)
- **Vercel** (GitHub sync)
- **GitHub Pages** (GitHub sync)
- **Traditional hosting** (any host with FTP or file manager)

---

## Project Structure

```
hayah-site/
├── README.md                    ← You are here
├── package.json                 ← Dependencies & scripts
├── .eleventy.js                 ← Build config
└── src/
    ├── _includes/               ← Shared templates (used on every page)
    │   ├── base.njk             ← Master layout (<head>, navbar, footer)
    │   ├── navbar.njk           ← Navigation (edit once, applies everywhere)
    │   └── footer.njk           ← Footer (edit once, applies everywhere)
    │
    ├── assets/                  ← CSS, JS, images
    │   ├── styles.css           ← All styling (1700+ lines, fully responsive)
    │   ├── scripts.js           ← Mobile menu & scroll animations
    │   └── images/              ← Your photos
    │       ├── 001_duo_transparent.png
    │       └── 003_worship_ottawa.jpeg
    │
    └── pages/                   ← Content pages (each becomes a URL)
        ├── index.njk            → `/` (home page)
        ├── about.njk            → `/about`
        ├── our-mission.njk      → `/our-mission`
        ├── events.njk           → `/events`
        ├── gallery.njk          → `/gallery`
        ├── publications.njk     → `/publications`
        ├── the-bridge.njk       → `/the-bridge`
        ├── give.njk             → `/give`
        └── contact.njk          → `/contact`
```

---

## Maintenance Guide

### Adding a New Event

1. Open `src/events.njk`
2. Find the existing event card (look for `<article class="event-card">`)
3. **Copy** the entire `<article>` block and paste it below
4. **Edit** the following fields:
   - `event-date`: Change the date
   - `event-title` (id & h3): Event name
   - `event-desc`: Event description
   - `event-meta` (location): Update location
   - Event link/URL

Example:
```html
<article class="event-card fade-up" style="transition-delay:0.1s" aria-labelledby="event-2-title">
  <div class="event-image" style="background:var(--navy-soft)">
    <!-- ... SVG placeholder ... -->
  </div>
  <div class="event-body">
    <div class="event-date">October 15, 2025</div>
    <h3 class="event-title" id="event-2-title">Your Event Name</h3>
    <p class="event-desc">Your event description here.</p>
    <!-- ... -->
  </div>
</article>
```

4. Save and refresh your browser — you'll see the new event immediately.

### Adding a Gallery Photo

1. **Copy** your photo to `src/assets/images/`
2. Open `src/gallery.njk`
3. Find the `<div class="media-grid">` section
4. **Copy** a `<div class="media-card">` block and paste below
5. **Replace** the SVG placeholder with your image:

```html
<div class="media-card fade-up" style="transition-delay:0.06s" role="listitem">
  <img src="/assets/images/your-photo.jpg" alt="Describe the photo" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />
  <div class="media-overlay">
    <div class="media-label">Your Photo Title</div>
  </div>
</div>
```

6. Save and refresh.

### Updating Navigation Links

The navbar and footer appear on every page. To change a link or add a new one:

1. **For navbar:** Edit `src/_includes/navbar.njk`
2. **For footer:** Edit `src/_includes/footer.njk`
3. Make your changes once
4. Save — the navbar/footer automatically updates on all 9 pages

Example navbar link:
```html
<a href="/events" class="{{ page.url | isActive('/events') }}">Events</a>
```

The `| isActive` filter automatically highlights the current page with the `active` class.

### Updating Website Copy / Text

Copy is organized by page. To change text:

1. Open the relevant `.njk` file in `src/`
2. Find the text you want to change
3. Edit it directly
4. Save and refresh

Example:
- **Home page text** → `src/index.njk`
- **About page text** → `src/about.njk`
- **Events title & description** → `src/events.njk`

### Updating Styling (Colors, Fonts, Spacing)

All styling lives in one file: `src/assets/styles.css`

**Color changes:**
```css
:root {
  --navy: #0d1b2a;        /* Main dark color */
  --gold: #c9963a;        /* Accent color */
  --cream: #fafaf7;       /* Background */
  /* ... etc ... */
}
```

**Font changes:**
The site uses Google Fonts:
- **Serif headings:** "Cormorant Garamond" (change in `.hero h1`, `.section-heading`, etc.)
- **Body text:** "DM Sans" (change in `body`, `p`, etc.)

To change fonts, edit the Google Fonts URL in `src/_includes/base.njk`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@300;400;600&display=swap" rel="stylesheet" />
```

### Adding a New Page

Want to add a page (e.g., `/blog`, `/sermons`)?

1. **Create a new file** in `src/` named `your-page.njk`
2. **Start with this template:**
```yaml
---
layout: base.njk
title: Page Title
description: A short description for search engines.
---

<div class="page-header">
  <div class="container page-header-inner">
    <div class="page-header-eyebrow">CATEGORY</div>
    <h1 class="page-header-title">Page <em>Title</em></h1>
    <p class="page-header-sub">Optional subtitle describing the page.</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <!-- Your content here -->
  </div>
</section>
```

3. **Add the nav link** in `src/_includes/navbar.njk`:
```html
<a href="/your-page">Your Page</a>
```

4. Save and build — the page is now live at `/your-page`

---

## Deployment

### Netlify (Recommended)

**Option A — Drag & Drop (Quickest)**
1. Run `npm run build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `_site/` folder into the drop zone
4. Done! Your site is live with a temporary URL

**Option B — GitHub Sync (Recommended for ongoing updates)**
1. Push your project to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `_site`
5. Every time you push to GitHub, Netlify automatically rebuilds

### GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages → Build and deployment**
3. Choose **GitHub Actions** as source
4. Create a `.github/workflows/build.yml` file with:
```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: '_site'
      - uses: actions/deploy-pages@v1
```

5. Push the workflow file — GitHub automatically builds and deploys on every push

### Traditional Hosting (cPanel, FTP, etc.)

1. Run `npm run build`
2. Upload the `_site/` folder contents via FTP/File Manager to your hosting account's `public_html/` folder
3. Done!

---

## Troubleshooting

### "npm: command not found"
You haven't installed Node.js. Download it from [nodejs.org](https://nodejs.org) and install.

### "Port 8080 is already in use"
Another process is using that port. Either:
- Stop the other process
- Or run on a different port: `npx @11ty/eleventy --serve --port=8081`

### "Changes aren't showing up in the browser"
- Hard refresh your browser: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)
- Make sure you saved the file in your editor
- Check the terminal — if there are red errors, fix them and save again

### "My CSS changes aren't showing"
- Make sure you edited `src/assets/styles.css` (not another file)
- Hard refresh the browser
- Make sure your dev server is still running (`npm start`)

### "I broke something, how do I undo?"
If you have Git set up:
```bash
git status                  # See what changed
git diff src/file.njk       # See the specific changes
git checkout src/file.njk   # Revert the file
```

If no Git, just manually revert your changes or re-download the original file.

---

## Performance Tips

- **Images:** Keep photos under 1 MB. Use `.jpg` for photos, `.png` for graphics
- **Lazy loading:** All gallery images have `loading="lazy"` — they don't load until the user scrolls to them
- **CSS:** All styling is in one file, loaded once — no render-blocking
- **JS:** Minimal JavaScript (just mobile menu + scroll animations) — site is fast

---

## Support & Questions

- **Eleventy docs:** https://www.11ty.dev
- **Nunjucks template syntax:** https://mozilla.github.io/nunjucks/
- **CSS customization:** See `src/assets/styles.css` for design tokens (`--navy`, `--gold`, etc.)

---

## License

This site is built for Hayah International Ministries Inc. © 2024–2025. All rights reserved.

**Built with:**
- Eleventy (11ty) — zero JavaScript at runtime
- Nunjucks templating — shared components (navbar, footer)
- Responsive CSS — works on all devices
- Vanilla JavaScript — no dependencies

**No framework bloat. Just clean, maintainable HTML.**
