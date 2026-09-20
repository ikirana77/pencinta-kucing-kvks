# Pencinta Kucing KVKS — Project Context (V6 baseline)

## Purpose and positioning

Pencinta Kucing KVKS is a voluntary, unofficial campus community initiative for resident cats at Kolej Vokasional Kuala Selangor (KVKS). The site is a digital home for those cats, a living cat directory, a welfare information hub, and a community reporting gateway. It is **not** an official KVKS organisation website, veterinary clinic, or official emergency channel.

Target production domain: **https://cats.ekvks.com**.

## Locked decisions

- Core line: **“They live here too.”**
- Community flow: **Nampak → Maklumkan → Pantau → Bantu**.
- Visual DNA: **“Warm Editorial × Campus Community × Resident Cat Journal”**. Preserve the existing visual identity, Fraunces and Inter hierarchy, spacing, warm palette, cards, and page composition.
- Keep the lightweight static HTML, CSS, and vanilla JavaScript architecture. Continue the existing site; do not rebuild it or add a framework without an explicit request.
- Never invent cat names, sex, age, medical conditions, sterilisation or vaccination status, ownership, location, or history. Use honest labels such as “Belum diketahui”, “Belum disahkan”, and “Maklumat belum tersedia”. A photo alone does not verify a cat's identity or history.

## Information architecture and current pages

The six primary navigation links are Home, Kucing Kami, Perlukan Bantuan?, Kisah Kami, Komuniti, and Tentang. The individual profile and Abdul memorial are linked from related content and the footer.

| Page | File | Current role |
| --- | --- | --- |
| Home | `dist/index.html` | Hero, cat photo collage, four-step flow, directory preview, memorial teaser, help prompt. |
| Our Cats / Kucing Kami | `dist/our-cats.html` | Directory introduction, status legend, three unverified placeholder cards, privacy guidance. |
| Individual Cat Profile | `dist/cat-profile.html` | One incomplete placeholder profile linked from the first directory card. |
| Need Help? | `dist/need-help.html` | Four-step guidance, urgency examples, WhatsApp join and report action, privacy warning. |
| Our Story | `dist/our-story.html` | Origin story and link to Abdul memorial. |
| Abdul Memorial | `dist/abdul-memorial.html` | Tribute, Abdul image, locked memorial line, four-step legacy. |
| Community / Community Rules | `dist/community.html` | Eight community rules and examples of factual versus accusatory reports. |
| About | `dist/about.html` | Purpose, voluntary scope, participant roles, privacy boundaries. |

## Abdul memorial rules

Abdul was an orange resident cat whose story prompted the initiative. Describe the problem as a communication gap: information about his condition reached people who could help too late. Never blame an individual or group. Preserve this exact line without rewriting, translating, removing, or altering it:

> “We couldn't change Abdul's story. But his story changed what we do next.”

The memorial page currently inserts a visual HTML line break between the two sentences. The Home teaser contains the line in one text run.

## Reporting, privacy, and community principles

Reporting currently runs through the WhatsApp group at <https://chat.whatsapp.com/El5I6PEjYeG7RCA0sKOxS8?mode=gi_t>. A reporter must join the group first. Recommend a photo where appropriate, a **general** location, approximate time, and the cat's visible condition. The Need Help page warns that members may see a participant's WhatsApp profile name and phone number.

Never publish exact nest or hiding locations, private phone numbers or conversations, or reporter identities without permission. Prefer general campus locations. Apply the community principle **“Share what was observed, not assumptions.”** A suitable example is: “Saya nampak seekor kucing oren berjalan tempang berhampiran bengkel sekitar 10.30 pagi.” Avoid accusations about people, students, staff, departments, or organisations.

## Technology and implementation

- Static HTML5 pages with `lang="ms"`, shared header/footer, page titles and descriptions, inline SVG favicon data URLs, and relative links.
- One shared stylesheet, `dist/assets/styles.css`, with CSS custom properties and existing component classes such as `.section-shell`, `.button`, `.cat-card`, `.directory-card`, `.status`, and `.privacy-callout`. Layout starts with a mobile view and changes at 720px and 960px. Desktop navigation appears at 960px.
- One vanilla JavaScript file, `dist/assets/site.js`, for the footer year, active navigation state from `data-page`, mobile menu toggle and close behavior, and scroll reveal. It supports Escape, link selection, and resize closure; reduced-motion users receive visible content without reveal motion.
- Google Fonts supplies Fraunces and Inter; CSS specifies local/system fallbacks. No package manifest, framework, build script, or test suite is present.
- `.openai/hosting.json` points static hosting at `dist/`. The project root is not the published document root. No Git repository metadata was present in this received workspace.

## Source Control & Deployment

GitHub will be the source of truth for future changes. `dist/` contains the deployable static site and must remain tracked. Production changes should originate from this repository rather than direct cPanel edits. Credentials must never be committed; store them only in GitHub Secrets when deployment is configured. The transport to `cats.ekvks.com` is not yet finalized. See `DEPLOYMENT.md` and the validation-only `.github/workflows/deploy.yml` scaffold.

## Directory and file structure at receipt

```text
.
├── .openai/
│   └── hosting.json
└── dist/
    ├── index.html
    ├── our-cats.html
    ├── cat-profile.html
    ├── need-help.html
    ├── our-story.html
    ├── abdul-memorial.html
    ├── community.html
    ├── about.html
    └── assets/
        ├── styles.css
        ├── site.js
        ├── abdul-memorial.jpg
        ├── hero-cat-orange.webp
        ├── hero-cat-black-mother.webp
        ├── hero-cat-black-family.webp
        ├── hero-cat-black-kitten.webp
        └── hero-cat-tuxedo.webp
```

`PROJECT_CONTEXT.md` and `CHANGELOG.md` live at the project root and were added after this inventory.

## Current assets

Five 900 × 900 WebP cat images form the Home collage: orange cat, black adult cat, black cat with two kittens, black kitten, and black-and-white cat. The 1254 × 1254 JPEG is used in Abdul's memorial. The other pages currently use CSS photo placeholders. All six image files were opened and visually inspected; their provenance and the identities of any cats beyond the supplied Abdul memorial context are not independently verified. The favicon is embedded in each HTML page rather than stored as a separate file.

## Navigation, responsiveness, and link audit

The header repeats six primary links on every page. The footer links to Kucing Kami, community rules, and Abdul's memorial. `data-page="cats"` keeps the directory nav item active on the profile; `data-page="story"` keeps Kisah Kami active on the memorial. The mobile menu is hidden by default below 960px and toggled by `.menu-toggle`; desktop navigation is shown from 960px. The stylesheet includes reduced-motion support and visible focus and skip-link styles.

On the V6 inventory, an HTML path and fragment check found **128 local references and no broken local targets**. This was a static path check, not a browser rendering or external-service test.

## Known limitations and baseline findings

- Kucing Kami is not yet a living directory: three repeated unknown cards appear, and only the first links to a generic placeholder profile. Home also shows two unknown preview cards. The site must wait for verified cat records before publishing specific facts.
- The existing cat images are confined to the Home collage and Abdul memorial. Reuse them in profiles only when the corresponding cat and permission/provenance are verified.
- Home has no direct WhatsApp reporting action. Its help link reaches the existing reporting route.
- `cat-profile.html` says online reports are coming later, which is stale beside the active WhatsApp route on `need-help.html`.
- The mobile menu's screen-reader text stays “Buka menu” while expanded; the accessible label can eventually switch to “Tutup menu”.
- Production SEO does not yet include canonical URLs, OpenGraph metadata, `sitemap.xml`, or `robots.txt`.
- BM/English terminology varies across pages. The existing design and locked English lines should be preserved while improving consistency in future small edits.
- There is no data source or update workflow for cat records and no reusable per-cat profile implementation yet.
- External font and WhatsApp availability, browser layout, and the authenticity or rights status of supplied images were not verified in this baseline audit.

## Development rules

For each future implementation, keep the change small, controlled, documented in `CHANGELOG.md`, and reversible where practical. Preserve mobile responsiveness, accessibility, visual DNA, and the existing architecture. Reuse CSS classes sensibly; inspect current HTML, CSS, JavaScript, and assets before editing. Verify internal links and image paths after changes. Do not add unnecessary dependencies. Keep sensitive locations and personal information out of public content. Do not start backlog work merely because it is listed here.

## Recommended future backlog

1. Replace the repeated directory placeholders with a truthful directory state and a process for adding only verified resident-cat entries; confirm image identity and permission before attaching photos.
2. Turn `cat-profile.html` into a reusable, data-grounded profile pattern when verified records are available.
3. Add a direct WhatsApp reporting call to action on Home and align the stale profile reporting copy with the current group flow.
4. Improve mobile menu accessible text, then verify keyboard and narrow-screen behavior in a browser.
5. Add production canonical and OpenGraph metadata, `sitemap.xml`, and `robots.txt` after confirming deployment URL behavior.
6. Standardise BM/English terms while retaining the locked English lines and warm editorial voice.

**Next single development task recommendation:** scope and implement a truthful Kucing Kami directory state using only verified cat data, with the existing layout and images kept until their identity and usage are confirmed. Wait for an explicit request before starting it.
