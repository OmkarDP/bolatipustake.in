# 📚 Bolati Pustake — बोलती पुस्तके

> **"जेव्हा पुस्तके बोलू लागतात..."** | *"When books begin to speak..."*

[![Live Site](https://img.shields.io/badge/Live-bolatipustake.in-7A0A1E?style=for-the-badge&logo=globe)](https://bolatipustake.in)
[![YouTube](https://img.shields.io/badge/YouTube-बोलती%20पुस्तके-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@bolati_pustake)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

---

## 🌟 About the Project

**Bolati Pustake** (बोलती पुस्तके) is the official website for a pioneering Marathi audio literature movement founded by **Dasharath Patil** during the COVID-19 lockdown of 2020. More than just a web presence, this site is a digital cultural hub celebrating and preserving Maharashtra's rich literary heritage through high-quality audiobooks and narrations.

The movement has made **300+ Marathi novels** and **5000+ short stories** accessible in audio format — completely free — for:
- Literature enthusiasts across all age groups
- Visually impaired and non-readers
- Farmers, homemakers, soldiers, students, and working professionals
- The global Marathi diaspora

The website is available in both **मराठी (Marathi)** and **English** — users can toggle between the two languages from the top navigation bar.

---

## 🚀 Live Demo

| Resource | Link |
|---|---|
| 🌐 Website | [https://bolatipustake.in](https://bolatipustake.in) |
| 📺 Main YouTube Channel | [Bolati Pustake](https://www.youtube.com/@bolati_pustake) |
| 📺 Secondary Channel | [Sahityaratna](https://www.youtube.com/@bolti_pustake) |
| 📧 Email | [mailtodashy@gmail.com](mailto:mailtodashy@gmail.com) |
| 📱 WhatsApp | [+91 9960120521](https://wa.me/919960120521) |

---

## ✨ Features

### 🎨 Design & UI
- **Premium aesthetics** — Warm cream/maroon/gold color palette inspired by traditional Marathi book culture
- **Glassmorphism effects** — Subtle transparency and blur effects on UI elements
- **Framer Motion animations** — Smooth entrance, scroll-triggered, and floating animations throughout
- **Fully responsive** — Works perfectly on mobile (320px+), tablet, and desktop
- **Custom typography** — Noto Serif Devanagari (headings) + Hind (body text) from Google Fonts
- **Custom scrollbar** — Gold-accented scrollbar matching brand aesthetic
- **Ornamental dividers** — Traditional gold separator lines between sections

### 🌐 Bilingual Support (i18n)
- **Toggle between Marathi & English** using a compact pill button (`[ म | EN ]`) in the top header
- Language preference is persisted in `localStorage` across sessions
- Full translation for all 13 page sections — not just labels, but all narratives, titles, and descriptions
- Brand names ("Bolati Pustake", "Sahityaratna", "Dasharath Patil") preserved in both languages
- Numbers in Devanagari digits (Marathi mode) or Western numerals (English mode)

### 📊 Interactive Visitor Counter
- Real-time simulated visitor count with Devanagari/English number formatting
- Animated count-up on page load using Framer Motion `animate()`
- Periodic live updates to simulate active browsing activity
- Two variants: **compact** (footer badge) and **card** (Stats section)
- Count stored and persisted in `localStorage`

### 📱 Progressive Web App (PWA)
- Installable as a PWA on Android and iOS via `site.webmanifest`
- Custom theme color `#6b1d2f` (maroon) for mobile browser chrome
- App icons configured for home screen installation
- Standalone display mode for an app-like experience

### 🔍 SEO & Discoverability
- Comprehensive meta tags (title, description, keywords, robots)
- Open Graph tags for WhatsApp, Facebook, and LinkedIn previews
- Twitter Card large image support
- Schema.org JSON-LD structured data:
  - `WebSite` entity
  - `Organization` entity with founder details
  - `CreativeWorkSeries` for the audiobook collection
  - `FAQPage` with 3 common questions
- Geographic metadata (Maharashtra, India)
- `sitemap.xml` listing all major page sections
- `robots.txt` with sitemap URL and crawl delay directive
- Canonical URL tag
- GoatCounter analytics (privacy-friendly, lightweight)

### 📐 Interactive Sitemap
- Visual sitemap section with clickable cards scrolling to sections
- Technical tab showing architecture details
- System specs panel listing framework, styling, animations, and icon library

### 📬 Contact Form with Webhook
- Live contact form submitting to a Zapier/n8n webhook (`automation.mysamvedana.org`)
- Full form validation with required fields
- Loading state during submission
- Success/error state feedback messages in active language

---

## 🗂️ Project Structure

```
bolatipustake.in/
│
├── public/                     # Static assets served at root
│   ├── logo.png                # Brand logo (primary)
│   ├── logo-preview.png        # Smaller logo for OG/favicon
│   ├── og-image.png            # Open Graph preview image (1200×630)
│   ├── portrait.png            # Founder portrait photo
│   ├── hero_illustration.png   # Hero section illustration
│   ├── favicon.svg             # SVG favicon
│   ├── icons.svg               # Icon sprite sheet
│   ├── robots.txt              # Search engine crawl directives
│   ├── sitemap.xml             # XML sitemap for search indexing
│   └── site.webmanifest        # PWA manifest
│
├── src/
│   ├── main.jsx                # React entry point (mounts App to #root)
│   ├── App.jsx                 # Root component + LanguageProvider wrapper
│   ├── index.css               # Global styles + Tailwind directives
│   ├── App.css                 # Legacy / utility CSS
│   │
│   ├── context/
│   │   └── LanguageContext.jsx # i18n context with full translations (mr/en)
│   │
│   └── components/
│       ├── Header.jsx          # Fixed top navigation + language toggle
│       ├── Hero.jsx            # Hero section with CTA buttons
│       ├── About.jsx           # Founder story, community highlights, quote
│       ├── Stats.jsx           # Impact metrics + VisitorCounter
│       ├── Journey.jsx         # Timeline of milestones
│       ├── MissionVision.jsx   # Mission and Vision cards
│       ├── WhyUs.jsx           # Feature grid (4 key differentiators)
│       ├── Literature.jsx      # Featured books and authors
│       ├── SupportCTA.jsx      # Channel subscribe CTA banner
│       ├── Contact.jsx         # Contact form + info cards
│       ├── Sitemap.jsx         # Visual/Technical sitemap with tabs
│       ├── VisitorCounter.jsx  # Animated visitor count (card & compact)
│       └── Footer.jsx          # Brand footer with links + visitor badge
│
├── index.html                  # HTML entry point + SEO meta + JSON-LD
├── package.json                # Project metadata and dependencies
├── vite.config.js              # Vite build configuration
├── tailwind.config.js          # Custom design tokens (colors, fonts)
├── postcss.config.js           # PostCSS config for Tailwind
└── .oxlintrc.json              # Oxlint linting rules
```

---

## 🧩 Component Details

### `Header.jsx`
Fixed, scrolling-aware top navigation bar:
- **Logo** — Brand logo + Bolati Pustake name + tagline
- **Desktop nav** — Inline navigation links with hover underline animation
- **Language toggle** — Small `[ म | EN ]` pill switch (maroon active state)
- **CTA button** — "सहभागी व्हा / Get Involved" (maroon rounded pill)
- **Mobile drawer** — Animated slide-down menu with all links + two channel buttons
- Scroll state changes background from transparent → frosted glass

### `Hero.jsx`
Full-height homepage hero section:
- Animated badge, tagline, and H1 headline
- Description paragraph about the movement
- Two CTA buttons: "Listen on YouTube" + "About Us" with bounce arrow icon
- Right column: Floating illustration with glow frame and pulsing soundwave overlay
- Background: Gold and maroon radial blurs

### `About.jsx`
Founder story and community connection section:
- Story narrative about the COVID-19 lockdown origin
- Two feature mini-cards: "Inclusive Community" + "Emotional Bond"
- Framed portrait of Dasharath Patil with name/role overlay
- Animated quote blockquote with large decorative quotation mark
- Section opening animated book SVG divider

### `Stats.jsx`
Impact metric cards row:
- **300+** Marathi novels narrated
- **5000+** high-quality story narrations
- **Lakhs+** enthusiastic listeners
- **Numerous** renowned authors & publishers
- Each card has icon, large number, label, description
- Below the grid: Full `VisitorCounter` card

### `VisitorCounter.jsx`
Dual-variant live visitor counter:
- **Card variant** (default) — Shown in Stats section, full-width card with pulsing LIVE badge, animated count, and active readers sub-stat
- **Compact variant** — Used in Footer, inline pill with green pulse dot and listener count
- Count starts from a base of 287,419 and auto-increments every 10s
- Displays Devanagari digits in Marathi mode, Western numerals in English mode

### `Journey.jsx`
Alternating left-right timeline of 4 milestones:
- **2020** — Channel founding during lockdown
- **2021** — First calls from visually impaired listeners
- **2022–2023** — Broad community expansion, 300+ novels
- **2024–2026** — Vision for a standalone Audiobook App
- Each card has: Year, title, description
- Vertical center line with colored icon dots

### `MissionVision.jsx`
Two-column mission and vision cards:
- **Mission** (maroon top border) — Making Marathi literature freely accessible worldwide via digital audiobooks
- **Vision** (gold top border) — Building a professional Marathi Audiobook App that respects author royalties

### `WhyUs.jsx`
2×2 feature highlight grid:
- **Authentic Narration** — Dasharath Patil's expressive voice
- **Respect for Dialects** — Focus on authentic rural Marathi
- **Cultural Heritage Preservation** — Digitizing rare classics
- **Empowerment for Visually Impaired** — Fully dedicated accessibility

### `Literature.jsx`
Featured books and authors:
- **3 featured works** (Uchalya, Aakkarmashi, Aaydan) with category tag, author, description, playlist link, and "Full Narration Available" status
- **2 featured authors** (Jaywant Dalvi, H.M. Marathe) with role and description
- All book data sourced from `LanguageContext` translations

### `SupportCTA.jsx`
Dark maroon banner CTA:
- Two poetic quotes (gold italic text)
- Cultural appeal narrative
- Two channel subscription cards: **Bolati Pustake** and **Sahityaratna**
- Free note disclaimer

### `Contact.jsx`
Contact form and information section:
- Email, Phone/WhatsApp info cards
- Founder contact card (Dasharath Patil)
- 5-field form (Name, Phone, Email, Subject, Message)
- Submits via POST to `https://automation.mysamvedana.org/webhook/bolati-pustake-web`
- Loading, success, and error states

### `Sitemap.jsx`
Interactive website structure viewer with two tabs:
- **Visual Sitemap tab** — 9 section cards (click to scroll to section) + policies section
- **Technical tab** — 4 architecture feature cards + tech stack specs panel (React 19, Vite 8, TailwindCSS, Framer Motion, Lucide React)

### `Footer.jsx`
Bottom footer with brand, navigation, and legal:
- Brand logo, tagline, description
- Social links: two YouTube channels, email, WhatsApp
- Navigation quick links column
- Policy/Terms links column
- Bottom bar: Copyright, compact visitor counter, founder footer credit

### `LanguageContext.jsx`
Central i18n system:
- `LanguageContext` React context + `LanguageProvider` wrapper
- `useLanguage()` custom hook exposing `{ lang, toggleLanguage, t }`
- `t('path.to.key')` — dot-notation accessor returning translated string or array
- Fallback to Marathi if a key is missing in English translations
- `localStorage` persistence of user's language preference
- Updates `document.documentElement.lang` for accessibility

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream-light` | `#FDFBF7` | Section backgrounds, cards |
| `cream` | `#FAF6F0` | Page background |
| `cream-dark` | `#E2D9CB` | Dividers, borders |
| `maroon-light` | `#A02B3E` | Hover states |
| `maroon` | `#7A0A1E` | Primary brand color, CTAs |
| `maroon-dark` | `#540310` | Footer background, overlays |
| `gold-light` | `#C5A059` | Accents, scrollbar, underlines |
| `gold` | `#8F6C2C` | Secondary accent |
| `gold-dark` | `#6E501C` | Subtle gold text |
| `charcoal-light` | `#3C3C3C` | Body text |
| `charcoal` | `#222222` | Headings |
| `charcoal-dark` | `#141414` | High-contrast text |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings (H1–H6) | Noto Serif Devanagari | 400 / 500 / 600 / 700 / 800 |
| Body text | Hind | 400 / 500 / 600 / 700 |
| Fallback sans-serif | Noto Sans Devanagari | — |

### Custom Utilities
- `.maroon-gradient-bg` — `135deg` gradient from maroon → maroon-dark
- `.cream-gradient-bg` — Vertical cream fade
- `.gold-gradient-border` — Gold gradient border-image
- `.ornamental-line` — Centered decorative line divider with gold fade
- `.ornamental-symbol` — Gold icon in ornamental line center

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.x | UI component library |
| **Vite** | 8.x | Build tool & dev server |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Framer Motion** | 12.x | Animations & transitions |
| **Lucide React** | 1.x | Icon library |
| **PostCSS** | 8.x | CSS processing pipeline |
| **Autoprefixer** | 10.x | CSS vendor prefixes |
| **Oxlint** | 1.x | Fast JS/TS linting |

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** `>=18.x`
- **npm** `>=9.x` or **pnpm**

### 1. Clone the Repository
```bash
git clone https://github.com/OmkarDP/BolatiPustakeWeb.git
cd BolatiPustakeWeb
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The site will be available at **`http://localhost:5173`**

### 4. Build for Production
```bash
npm run build
```
Outputs optimized static files to the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint the Codebase
```bash
npm run lint
```

---

## 🚀 CI/CD — GitHub Actions Deployment Pipeline

The site is automatically deployed to **AWS S3 + CloudFront** on every push to `main` via a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

> **Zero long-lived credentials** — authentication uses **GitHub OIDC**, so no AWS access keys are ever stored in GitHub Secrets.

---

### 🔄 Workflow Overview

The workflow is structured into **6 phases**, running on `ubuntu-latest` with a hard 15-minute job timeout:

```
Phase 1 — Pre-flight checks      Validate secrets/variables + enforce main-only deployment
Phase 2 — Build                  Checkout → Setup Node 22 → npm ci → vite build
Phase 3 — AWS Authentication     Exchange GitHub OIDC JWT for temporary AWS session credentials
Phase 4 — Infrastructure check   Verify S3 bucket + CloudFront distribution are accessible
Phase 5 — Deployment             Atomic-ordered two-pass S3 sync + CloudFront invalidation
Phase 6 — Post-deployment        Write Markdown summary to the Actions "Summary" tab
```

**Triggers:**
- `push` to `main` branch — automatic production deploy
- `workflow_dispatch` — manual deploy from the GitHub Actions UI (main-only guard enforced)

**Concurrency:** A newer push cancels any in-progress run (`cancel-in-progress: true`) to prevent two deploys from racing and leaving S3 in an inconsistent state.

---

### 🔐 GitHub OIDC Authentication

GitHub mints a short-lived OIDC JWT for each workflow run. The [`aws-actions/configure-aws-credentials`](https://github.com/aws-actions/configure-aws-credentials) action exchanges it with **AWS STS `AssumeRoleWithWebIdentity`** for temporary credentials.

**Security properties:**
- ✅ No long-lived AWS access keys stored anywhere
- ✅ Session credentials auto-expire after 900 seconds (matches job timeout)
- ✅ `role-session-name` embeds `run_id` + `run_attempt` for full **CloudTrail traceability**
- ✅ Account guard: verifies `sts get-caller-identity` account matches `vars.AWS_ACCOUNT_ID` before touching any resource

```yaml
permissions:
  contents: read    # actions/checkout needs to clone the repo
  id-token: write   # required to mint the OIDC JWT
```

---

### ⚙️ Required Repository Configuration

Go to **Settings → Secrets and variables → Actions** to add these:

#### Variables (`vars.*`)

| Variable | Example Value | Description |
|---|---|---|
| `AWS_REGION` | `ap-south-1` | AWS region where S3 + CloudFront live |
| `AWS_ACCOUNT_ID` | `508375325181` | AWS account ID (guards wrong-account deploys) |
| `S3_BUCKET` | `bolatipustake-in-prod` | S3 bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | `EXXXXXXXXXXXX` | CloudFront distribution ID |

#### Secrets (`secrets.*`)

| Secret | Example Value | Description |
|---|---|---|
| `AWS_ROLE_ARN` | `arn:aws:iam::508375325181:role/OIDC-bolatipustake.in` | Full ARN of the IAM role to assume |

---

### 🏗️ One-Time AWS Setup

#### 1. Add GitHub as an OIDC Identity Provider

In **IAM → Identity providers → Add provider**:

| Field | Value |
|---|---|
| Provider type | `OpenID Connect` |
| Provider URL | `https://token.actions.githubusercontent.com` |
| Audience | `sts.amazonaws.com` |

#### 2. Create the IAM Role

Create a role with the following **trust policy** (see [`role.json`](role.json) in the repo root):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:OmkarDP/bolatipustake.in:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

> ⚠️ **Use `StringEquals`, not `StringLike`** — wildcards in `StringLike` allow unintended repos or branches to assume this role.

#### 3. Attach IAM Permissions Policy

The role needs only the minimum permissions to deploy:

| Permission | Resource | Why |
|---|---|---|
| `s3:ListBucket` | `arn:aws:s3:::bolatipustake-in-prod` | Pre-flight bucket check |
| `s3:PutObject`, `s3:DeleteObject`, `s3:GetObject` | `arn:aws:s3:::bolatipustake-in-prod/*` | Upload build files + clean stale files |
| `cloudfront:GetDistribution` | Distribution ARN | Pre-flight status check |
| `cloudfront:CreateInvalidation` | Distribution ARN | Cache invalidation after deploy |

---

### 📦 S3 Sync Strategy (Atomic-Ordered Two-Pass)

The deployment uses a **two-pass ordered sync** to guarantee zero broken page loads during a deploy:

```
Pass 1 → Upload hashed assets (assets/*)     Cache-Control: public, max-age=31536000, immutable
Pass 2 → Upload non-hashed files             Cache-Control: no-cache, no-store, must-revalidate
         (index.html, robots.txt, etc.)       + --delete (removes stale files from S3)
```

**Why this order matters:** If a user loads the new `index.html` while assets are still uploading, the browser requests new hashed filenames (e.g., `assets/index-BcD3f9xQ.js`) — which **must already be in S3**. Uploading assets before HTML ensures this invariant is always satisfied.

**Build validation** runs before any S3 upload with four guards:
1. `dist/` directory exists
2. `dist/` is not empty
3. `dist/index.html` exists (SPA entry point)
4. Total bundle size ≤ `15,000 KB` threshold

---

### ⚡ CloudFront Invalidation

After upload, only **entry-point paths** are invalidated (not hashed assets):

```
/index.html   — Main SPA entry point
/404.html     — Custom error page (for SPA route fallback)
```

Hashed assets (`assets/*`) are **not invalidated** — their filenames change with every build, so no browser or CDN ever serves a stale hashed URL.

> 💰 AWS provides **1,000 free invalidation paths/month**. Two paths per deploy = ~$0 cost for typical usage.

---

### 📋 Deployment Summary

Every successful run writes a Markdown summary to the **Actions → Summary** tab:

| Field | Value |
|---|---|
| Status | ✅ Success |
| Commit | SHA of deployed commit |
| Branch | `main` |
| Build size | Total `dist/` size in KB |
| S3 Bucket | Bucket name + region |
| CloudFront | Distribution ID |
| Live URL | [https://bolatipustake.in](https://bolatipustake.in) |

> **Rollback:** Re-run any previous successful workflow from the **Actions** tab to restore the previous deployment instantly.

---

## 🌍 Environment & Deployment

This is a **static Single-Page Application (SPA)** — there is no backend server. It can be deployed to any static hosting platform:

| Platform | Notes |
|---|---|
| **Vercel** | Connect GitHub repo, auto-deploys on push |
| **Netlify** | Drop the `dist/` folder or connect repo |
| **Cloudflare Pages** | Fast global CDN, excellent for India |
| **GitHub Pages** | Enable in repo settings, set build output to `dist/` |
| **cPanel / Apache** | Upload `dist/` contents to `public_html/` |

> **Important for SPAs**: If hosting on Apache or Nginx, configure your server to redirect all routes to `index.html` to prevent 404 errors on page refresh.

**Apache `.htaccess` example:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🌐 Internationalization (i18n)

The website supports two languages with instant, client-side switching:

| Language | Code | Script |
|---|---|---|
| Marathi | `mr` | Devanagari (देवनागरी) |
| English | `en` | Latin |

### How it Works

1. The `LanguageProvider` wraps the entire app in `App.jsx`
2. All text strings live in the `translations` object inside `LanguageContext.jsx`
3. Components use the `useLanguage()` hook and call `t('section.key')` to get text
4. Toggle with the `[ म | EN ]` button in the Header
5. Language preference is saved in `localStorage` as `'bolati_pustake_lang'`

### Adding a New Translation Key

**Step 1:** Add the key to both `mr` and `en` inside `LanguageContext.jsx`:
```js
// Inside translations object:
mr: {
  hero: {
    newKey: 'मराठी मजकूर'
  }
},
en: {
  hero: {
    newKey: 'English text'
  }
}
```

**Step 2:** Use it in any component:
```jsx
import { useLanguage } from '../context/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  return <p>{t('hero.newKey')}</p>;
}
```

---

## 📦 SEO Files Reference

| File | Location | Purpose |
|---|---|---|
| `robots.txt` | `public/robots.txt` | Instructs search engine crawlers |
| `sitemap.xml` | `public/sitemap.xml` | Section URLs for indexing |
| `site.webmanifest` | `public/site.webmanifest` | PWA configuration |
| JSON-LD Schema | `index.html` | Structured data for rich results |
| Open Graph | `index.html` `<head>` | Social media link previews |
| Twitter Card | `index.html` `<head>` | Twitter/X link previews |

---

## 📸 Screenshots

> *(Add screenshots of deployed pages here for a richer README)*

| Section | Description |
|---|---|
| Hero | Full-screen landing with illustration |
| About | Founder portrait + story + quote |
| Stats | Impact metrics with visitor counter |
| Journey | Alternating timeline cards |
| Literature | Book cards and author profiles |
| Contact | Contact form + info cards |
| Sitemap | Visual + technical tabs |

---

## 🤝 Contributing

This project is maintained by the **Bolati Pustake** team. If you'd like to contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/your-feature`
3. **Commit** your changes: `git commit -m "feat: add your feature"`
4. **Push** to your branch: `git push origin feat/your-feature`
5. **Open** a Pull Request

### Commit Message Convention
We follow **Conventional Commits**:

```
feat(section): short description of what was added
fix(component): what bug was fixed
chore: dependency update or config change
docs: README or documentation update
style: formatting or CSS-only changes
refactor: code restructure without behavior change
```

---

## 📄 License

This project is **proprietary** to Bolati Pustake (बोलती पुस्तके). All content, brand assets, and literary materials are owned by their respective creators and authors.

> All content on this platform is produced out of love for Marathi literature and culture. It is completely free for listeners worldwide.

---

## 📞 Contact & Credits

| Role | Person | Contact |
|---|---|---|
| Founder & Narrator | Dasharath Patil (दशरथ पाटील) | [mailtodashy@gmail.com](mailto:mailtodashy@gmail.com) |
| Web Development | Omkar Patil | GitHub: OmkarDP |

---

## ⭐ Acknowledgements

- **Marathi Authors** — Laxman Gaikwad, Sharankumar Limbale, Urmila Pawar, Jaywant Dalvi, H. M. Marathe, and all the extraordinary voices of Marathi literature
- **Listeners** — Every visually impaired friend, farmer, homemaker, soldier, and student who made this movement meaningful
- **Google Fonts** — For providing beautiful free Devanagari typography
- **Framer Motion Team** — For the animation library that brings this site to life
- **Vite & React teams** — For the blazing fast development experience

---

<div align="center">

**मराठी साहित्याचा आवाज, प्रत्येक घरापर्यंत 🎙️📚**

*"The voice of Marathi literature, reaching every home"*

[![bolatipustake.in](https://img.shields.io/badge/Visit-bolatipustake.in-7A0A1E?style=for-the-badge)](https://bolatipustake.in)

</div>