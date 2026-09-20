# Changelog

## V6 — Deployed Abdul memorial image sizing

- Made the Abdul memorial photo and image selectors more specific, with an explicit single-column mobile layout, a 4:5 image ratio, and a 22rem photo width and 28rem image height cap from the existing tablet breakpoint.
- Changed all eight pages to request `assets/styles.css?v=3` so browsers fetch the updated stylesheet after deployment. The stylesheet filename, memorial image, wording, bilingual system, and other page layouts are unchanged.

## V6 — Abdul memorial portrait responsiveness

- Constrained the memorial photo and text section to a comfortable reading width, with a 40/60 two-column split from the existing tablet breakpoint and a smaller gap at tablet sizes.
- Limited Abdul’s desktop portrait to a controlled 4:5 crop and 28rem maximum height, keeping his face in view. On mobile the unchanged image appears above the text at full available width with its original square framing.
- Preserved all memorial copy, the image file, bilingual behavior, and the existing visual style.

## V6 — Bilingual BM/English option

- Added a compact BM | EN selector to the shared header on all eight pages. BM remains the default; manual choices persist in `localStorage` and `?lang=bm` / `?lang=en` override and save the preference.
- Added one English translation dictionary in `dist/assets/site.js` for page copy, accessible labels, image descriptions, page titles, and meta descriptions. The existing BM HTML remains the source copy, and the locked brand and Abdul memorial lines remain unchanged.
- Kept the existing layout and mobile navigation, with only small selector styles and a scrollable mobile menu. No new dependency, page copy architecture, or deployment change was added.

## V6 — Favicon asset version

- Renamed the unchanged PK artwork from `dist/assets/favicon.svg` to `dist/assets/favicon-v2.svg` and updated all eight HTML favicon references to refresh browser caches.

## V6 — Custom PK favicon

- Added a self-contained `PK` SVG favicon using the existing burnt-orange and warm-ivory brand colours.
- Replaced the inline paw favicon reference on all eight static HTML pages with `assets/favicon.svg`; no visible page content or behavior changed.

## V6 — GitHub deployment preparation

- Initialized Git on `main` in the existing project root and added a minimal `.gitignore` that keeps `dist/` tracked.
- Added a validation-only GitHub Actions scaffold at `.github/workflows/deploy.yml` with generic GitHub Secrets placeholders and no upload step.
- Added `DEPLOYMENT.md` and a short Source Control & Deployment section to `PROJECT_CONTEXT.md`.
- No website content, CSS, JavaScript, images, assets, or other files inside `dist/` were changed.

## V6 — Abdul memorial eyebrow wording

- Changed the memorial eyebrow to “Apa yang kita pelajari daripada Abdul”, displayed in uppercase by the existing style. No other memorial content or styling changed.

## V6 — Sensitive information copy refinement

- Replaced the right-hand body text in the Kucing Kami and About “JAGA MAKLUMAT SENSITIF” sections with the approved WhatsApp coordination wording. Kept the eyebrow, heading, layout, and reporting flow unchanged.

## V6 — Home hero CTA alignment

- Kept the orange hero button's label centered and on one line from 720px upward; the action row now wraps whole controls when horizontal space is limited.
- Limited the secondary hero link underline to its text label and kept the arrow attached to the final word when the link wraps. Wording, colours, fonts, and destinations are unchanged.

## V6 — Need Help warning box removal

- Removed the “Jangan kongsi secara terbuka” warning box and its four-item list from the Need Help page. The existing WhatsApp reporting section and its spacing remain unchanged.

## V6 — Abdul card and directory note refinement

- Removed Abdul's unknown general-location row from his Kucing Kami card while keeping the memorial status, description, image, and link.
- Changed the small directory note to “Maklumat kucing akan dikemas kini apabila disahkan.” No other cat cards or page styles changed.

## V6 — Privacy callout clarification

- Replaced the Kucing Kami and About privacy callout copy with the approved wording explaining that WhatsApp reports are visible to group members and that the website publishes only general cat welfare information.
- Removed the callouts' broad promises about reporter phone numbers or identities being hidden. Kept the Kucing Kami callout's existing highlighted box treatment with a single full-width message.
- Left the WhatsApp reporting route and other page content unchanged.

## V6 — Abdul directory status wording

- Changed only Abdul's Kucing Kami card status wording from “Telah meninggal dunia” to “DALAM KENANGAN”, retaining the existing status style.

## V6 — Verified Abdul directory correction

- Identified the orange cat image as Abdul in the Kucing Kami card and matching Home preview, using the user-confirmed fact. Marked his status “Telah meninggal dunia” and linked the card to his existing memorial.
- Removed Abdul's unknown-name row. Left his general location unknown and kept the other three cats' descriptive labels and unknown names unchanged.
- Updated directory introduction text to distinguish Abdul's verified identity from the three unnamed cats.
- Set the four-card directory grid to one column on mobile and two columns from 720px upward. Preserved the existing card styling and Abdul memorial page.
- Verified all eight HTML pages: 135 local file and fragment references resolve, the Abdul card points to the memorial, all image paths exist and have alt text, and the CSS defines the intended mobile/tablet/desktop column counts.

## V6 — Kucing Kami directory image patch

- Replaced three repeated placeholder cards on Kucing Kami with four cards using existing local cat photos and observable coat descriptions. Names and general locations remain explicitly unknown; individual profiles remain unverified.
- Removed the generic `cat-profile.html` link from directory cards because it does not identify a verified individual cat. The profile template file remains available for a later, data-grounded update.
- Updated the two Home directory preview cards to match the photo-based directory, and made two Home collage alt descriptions neutral about family relationships.
- Added minimal image sizing rules within the existing card design. No new assets, framework, data source, reporting flow, or SEO files were added.
- Verified all eight pages: 133 local file and fragment references resolve, all image elements have alt text, and the shared JavaScript passes `node --check`.

## V6 — Baseline

- Received the existing Pencinta Kucing KVKS static website as the official V6 baseline before continued development in VS Code.
- Inventoried all eight HTML pages, the shared CSS and JavaScript, hosting configuration, and six local cat images.
- Checked 128 local HTML references; no broken local file or fragment targets were found.
- Added `PROJECT_CONTEXT.md` to record the site's locked decisions, architecture, assets, limitations, and future backlog.
- Added this changelog. No HTML, CSS, JavaScript, image, or hosting file was modified for the baseline.
