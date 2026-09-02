---
name: Tech-Mech
description: Transparent, no-upsell automotive repair — a dark diagnostic bay lit by a single red signal.
colors:
  diagnostic-red: "#e01e24"
  diagnostic-red-deep: "#b01820"
  diagnostic-red-a11y: "#ff525a"
  near-black: "#0d0d0d"
  charcoal-card: "#171717"
  charcoal-alt: "#111111"
  near-black-deep: "#070707"
  near-black-ribbon: "#080808"
  near-black-announce: "#1a0809"
  graphite-border: "#242424"
  white: "#ffffff"
  steel-grey: "#9a9a9a"
  fog-grey: "#cccccc"
typography:
  display:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(3rem, 9vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "2px"
  headline:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "1px"
  headline-sm:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(26px, 5vw, 40px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "1px"
  title-lg:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "1px"
  title:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.5px"
  title-sm:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.5px"
  body-lg:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: "normal"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body-xs:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "1.5px"
  label-sm:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "1.5px"
  label-xs:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "1.5px"
  label-2xs:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "1.5px"
  stat:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  wordmark:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-2px"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  pill: "50px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
  section-sm: "72px"
  section-md: "96px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.diagnostic-red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.diagnostic-red-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  card:
    backgroundColor: "{colors.charcoal-card}"
    rounded: "{rounded.md}"
    padding: "36px 30px"
  input:
    backgroundColor: "{colors.charcoal-alt}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
---

# Design System: Tech-Mech

## Overview

**Creative North Star: "The Diagnostic Bay"**

Tech-Mech reads as a workshop instrument panel, not a marketing brochure: a near-black canvas (`#0d0d0d`) that recedes so completely that the single accent — Diagnostic Red (`#e01e24`) — reads with the authority of a warning light on a scan tool. The system is industrial and disciplined: condensed all-caps Bebas Neue headings, generous 120px section rhythm, flat dark-on-darker card surfaces distinguished by hairline borders rather than shadows, and controls that stay quiet until touched. Confidence comes from control, not noise — the palette never competes with the red, and the red never appears without reason (a CTA, a stat, an active state, a safety cue).

No anti-reference has been confirmed yet; this system should keep favoring instrument-panel restraint over decorative flourish as it's extended.

**Key Characteristics:**
- Near-black canvas with a single, disciplined red signal color
- Condensed, all-caps Bebas Neue for anything structural (headings, labels, nav, buttons)
- Flat surfaces at rest; depth and red-tinted glow appear only as hover feedback
- Generous, consistent 120px vertical section rhythm; tight, precise component padding
- A dedicated logo typeface (Barlow Condensed) that never leaks into body UI

## Colors

The palette is built from one signal color against a near-black neutral scale — everything else is in service of making Diagnostic Red the only thing that draws the eye.

### Primary
- **Diagnostic Red** (`#e01e24`): The system's single accent. CTAs, active/hover states, icon glyphs, stat numbers, section-label eyebrows, the blinking "open" indicator. Used with restraint — never as a fill for large surfaces, only for signal-carrying elements.
- **Diagnostic Red — Deep** (`#b01820`): The pressed/hover-darken state for primary red surfaces (e.g. `.btn-primary:hover`).
- **Diagnostic Red — Accessible** (`#ff525a`): A lightened variant reserved for red used as *text* at small sizes (hero badge, active nav state, form focus rings, warning values) — `#e01e24` only clears WCAG AA contrast on the near-black backgrounds at large/bold sizes; this variant clears 4.5:1 at any size.

### Neutral
- **Near-Black** (`#0d0d0d`): Base page background.
- **Charcoal Card** (`#171717`): Elevated surface fill for cards, service tiles, review tiles, the contact form panel.
- **Charcoal Alt** (`#111111`): Alternating section background (About, Gallery, Contact) that separates sections without a hard color break; also the fill for form inputs.
- **Near-Black — Deep** (`#070707`): The footer's own background — one step darker than the base Near-Black, marking it as the page's floor.
- **Near-Black — Ribbon** (`#080808`): The manufacturer brand-ribbon strip's background — sits between Near-Black and Deep.
- **Near-Black — Announce** (`#1a0809`): The fixed announce bar's background — a faint red tint mixed into the near-black to tie it visually to the Diagnostic Red system despite being the page's darkest, most utilitarian strip.
- **Graphite Border** (`#242424`): The hairline border that does the separating work shadows would otherwise do.
- **White** (`#ffffff`): Primary text on dark, primary button text.
- **Steel Grey** (`#9a9a9a`): Muted/secondary text — stat labels, descriptions, footer copy.
- **Fog Grey** (`#cccccc`): Body copy that needs more presence than Steel Grey (hero subhead, about body, review quotes).

Three functional one-offs sit outside this core palette, each locked to a single expected context: an amber `#f59e0b` for the 5-star rating glyphs (the color users expect from a star rating), WhatsApp's own brand green `#25d366` for the WhatsApp contact button, and the real UK number-plate colors (`#F5C518` yellow, `#003399` GB-strip blue, `#FFD700` star gold) for the Reg Lookup tool's plate graphic — a visitor expects that element to look like an actual number plate, not a themed one. None of these should spread beyond their one use.

### Named Rules
**The Small-Text Red Rule.** `#e01e24` is for large/bold text and non-text surfaces (icons, borders, backgrounds, shadows) only. Any time red is the *color of small text* — a badge, an active nav state, a status value — use Diagnostic Red — Accessible (`#ff525a`) instead, so it clears 4.5:1 contrast on the near-black backgrounds.

**The One Signal Rule.** Diagnostic Red is the only color allowed to mean "act here" or "this matters now." If something new needs emphasis, it earns red or it doesn't get emphasis — it does not get a second accent color.

## Typography

**Display Font:** Bebas Neue (with sans-serif fallback) — free on Google Fonts, single regular weight only (no bold cut; see Named Rules below).
**Body Font:** Work Sans (with sans-serif fallback), weights 300–600.
**Wordmark Font:** Barlow Condensed — reserved exclusively for the logo mark (italic primary line + tracked-out secondary line); never used for headings, body, or UI labels.

*Provenance note:* this pairing replaced an earlier Big Shoulders Display / Montserrat combination (itself a substitute for pbwl.uk's unlicensed Uncage/Gotham reference) on explicit direction — a deliberate creative choice, not a licensing workaround.

**Character:** Bebas Neue's tall, extremely condensed, all-caps-only geometry gives every structural element (headings, nav, buttons, labels) a stenciled, industrial poster feel — sharper and more graphic than the previous Big Shoulders Display, with no lowercase forms at all. Work Sans carries all reading copy in a calmer, humanist, proportionally-spaced register so long-form trust-building copy stays easy to read against the dark ground.

### Hierarchy
- **Display** (700, `clamp(3rem, 9vw, 6rem)`, line-height 0.95): Hero title only. Uppercase, 2px tracking, red used on the emphasized word.
- **Headline** (700, `clamp(2rem, 5vw, 3rem)`, line-height 1.08): Section titles (About, Services, Gallery, Reviews, Contact). Uppercase, 1px tracking, red on the emphasized word.
- **Headline — Small** (700, `clamp(26px, 5vw, 40px)`, line-height 1.1): The Reg Lookup panel's own heading — same headline language, tuned for a narrower 680px column.
- **Title — Large** (600, 22px, line-height 1.2): Contact form title. The upper step of the Title family.
- **Title** (600, 19px, line-height 1.2): Service names, review author names. The default step. Review author names ("James D.") carry an explicit `text-transform: uppercase` — Bebas Neue has no distinct lowercase forms, so this makes the always-caps rendering deliberate rather than an accidental font fallback.
- **Title — Small** (600, 14px, line-height 1.2): About pillar titles, review-avatar initials — Title-family treatment at micro scale.
- **Body — Large** (300, 17px, line-height 1.75): Hero subhead. Also reused, coincidentally at the same size, for the review-card star row.
- **Body** (400, 16px, line-height 1.65): Primary paragraph copy — about body.
- **Body — Small** (400, 14px, line-height 1.7): Secondary/supporting copy — service and contact descriptions, form subtitle and field text, footer tagline and links, reg-lookup values.
- **Body — Extra Small** (400, 13px, line-height 1.6): Tertiary copy — about pillar descriptions, footer hours and copyright line.
- **Label** (600, 12px, letter-spacing 1.5px, uppercase): Footer column titles.
- **Label — Small** (500, 13px, letter-spacing 1.5px, uppercase): Nav links, footer pill buttons, reg-card title bar.
- **Label — Extra Small** (600, 11px, letter-spacing 1.5px, uppercase): Hero badge, about-image badge label, form field labels, reg field labels.
- **Label — 2XS** (600, 10px, letter-spacing 1.5px, uppercase): Logo secondary line, hero stat labels, contact detail labels, tightest mobile step of Label — Extra Small.
- **Stat** (700, `2rem`, line-height 1, red): The hero stat-bar numbers and the about-image badge number — one shared step; these two contexts must always match. One stat value ("All Makes") is text rather than a digit and carries an explicit `text-transform: uppercase` for the same reason as review author names above.

### Named Rules
**The No-Eyebrow Rule.** No kicker/eyebrow label sits above a section heading. The heading carries its own weight — delete the label rather than adding one back, even when a reference layout uses one.

### Named Rules
**The All-Caps Structure Rule.** Anything that is structural chrome rather than reading content — nav, buttons, labels, section eyebrows, stat labels — is Bebas Neue, uppercase, and tracked out. Anything meant to be read at length is Work Sans, sentence case, untracked. This is now a hard constraint, not just a style choice: Bebas Neue has no true lowercase forms, so any mixed-case content assigned to it renders as caps regardless of source text — check new copy in a head-font role for readability before adding it (a long sentence-case tagline, for instance, would read poorly force-capitalized and belongs in Work Sans instead).

**The Single-Weight Display Rule.** Bebas Neue ships one weight (400/regular) on Google Fonts — there is no true bold cut. Existing `font-weight: 500/600/700` declarations on head-font elements are harmless (browsers either ignore the request or apply synthetic/faux bold) but no longer select a genuinely different weight the way they did with Big Shoulders Display's real 400–700 range. Weight is no longer a lever for hierarchy within the head-font role — use size, tracking, and color instead.

## Layout

**Architecture:** the site is 5 separate static HTML files (`index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`) sharing one external `styles.css` and near-identical header/nav/footer markup — no framework, no templating, matching the project's plain-HTML stack. Only Home (`index.html`) carries the Hero; every other page uses `body:not(.has-hero) { padding-top: calc(--announce-h + --nav-h) }` to clear the fixed header instead. Home is a lean, proof-driven scroll (Hero, Reg Lookup, Brand Ribbon, Reviews); About/Services/Gallery/Contact each get their own full page, entered from the persistent nav.

A centered `1160px` container holds every section, with side padding that steps down for smaller screens (`32px` → `24px` → `20px` at the `960px`/`600px` breakpoints, via `.container`). Section vertical padding follows the same idea: a `--section-py` custom property runs `120px` (desktop) → `96px` (≤960px) → `72px` (≤600px), keeping the slow, confident scroll cadence appropriate to a considered purchase decision (booking a repair) while staying dense enough not to feel padded-out on mobile.

Section intro headers (Services, Gallery, Reviews) are centered and capped at `640px`, with a responsive gap to their grid (`clamp(48px, 6vw, 64px)`) — heading, then supporting copy, then content. Split layouts (About's text+image, Contact's info+form) keep their headers left-aligned inside their column instead, since they're introducing a paired layout rather than a full-width grid.

Grids vary by content density: About is a locked `1fr 1fr` two-column split (`80px` gap); Services and Reviews use auto-fill/auto-fit responsive grids (`minmax(280–300px, 1fr)`, `28–32px` gap) so card count adapts to viewport; Gallery is a deliberate asymmetric 12-column mosaic (`20px` gap) rather than a uniform grid, giving the "shop tour" imagery a curated, non-repetitive feel; Contact splits `1fr 1.1fr` (`80px` gap), favoring the form slightly.

Services' 7 cards are split into 3 named subgroups (`.services-group`) — General & Diagnostics, Mechanical & Handling, Electrical & Bodywork — each with its own `.services-group-title` (Label — Small typography, a hairline `--border` bottom rule) above its own `.services-grid`, rather than one flat 7-card wall. This keeps any single visible group at 2-3 cards, matching the same ≤4-visible-options scanability standard the rest of the system already follows at decision points.

Responsive behavior collapses at three breakpoints: `960px` (nav becomes a hamburger drawer, two-column grids stack to one, the About portrait image is dropped rather than shrunk, section padding steps down to `96px`), `768px` (the gallery mosaic re-flows to a simpler stacked/paired layout), and `600px` (section padding steps down to `72px`, container padding to `20px`, and component padding tightens, e.g. the contact form panel drops from `44px 40px` to `28px 20px`).

## Elevation & Depth

The system is flat at rest — cards are distinguished from their background purely by a `1px` Graphite Border, never a resting shadow. Depth is earned only as a response to interaction: hovering a service or review card lifts it (`translateY(-4px` to `-6px)`) and introduces a diffuse neutral shadow (`0 16px 48px rgba(0,0,0,0.35)` to `0 24px 60px rgba(0,0,0,0.45)`), while the border simultaneously tints toward red. Primary buttons and the scroll-to-top control use a second, distinct shadow language — a colored glow keyed to Diagnostic Red (e.g. `0 8px 30px rgba(224,30,36,0.4)`) — reserved for the system's highest-intent controls.

### Shadow Vocabulary
- **Card Lift** (`box-shadow: 0 16px 48px rgba(0,0,0,0.35)` / `0 24px 60px rgba(0,0,0,0.45)`): Neutral diffuse shadow on card hover; pairs with the `translateY` lift and border tint.
- **Red Glow** (`box-shadow: 0 8px 30px rgba(224,30,36,0.4)` / `0 4px 20px rgba(224,30,36,0.45)`): Colored glow reserved for primary CTAs and the scroll-to-top button — signals "the one thing to press."

### Named Rules
**The Earned-Shadow Rule.** Nothing casts a shadow at rest. Shadows exist only as feedback for an action just taken (hover) or an action available (a primary control) — never as decoration.

## Shapes

Two coexisting corner languages carry distinct meaning. Structural containers — cards, panels, image frames, badges, primary/outline buttons — use a consistent `10px` radius (`--radius`), giving the system a precise, machined-edge feel (precise and restrained, not soft). Small icon chips use slightly tighter or looser variants of the same family (`8px` for compact icon tiles, `12px` for larger service icons and the scroll-to-top button). Fully-rounded pill shapes (`50px` radius or `50%` circle) are reserved for a narrower set: the hero status badge, the footer's WhatsApp/phone contact buttons, and avatars — anything that reads as a tag, a contact affordance, or a person, rather than a content container.

### Named Rules
**The Container-vs-Pill Rule.** `10px` radius means "this holds content." Full-pill/circle radius means "this is a badge, a person, or a direct contact action." The two never swap roles.

## Components

Controls throughout are precise and restrained: sharp, deliberate hover feedback with no unnecessary motion, and no control changes shape or radius on interaction — only color, border, shadow, and position.

### Buttons
- **Shape:** `10px` radius (`--radius`), matching the container language, not the pill language.
- **Primary:** Diagnostic Red fill, white text, `14px 32px` padding, Label typography (Bebas Neue, uppercase, tracked).
- **Hover / Focus:** Fill darkens to Diagnostic Red — Deep; lifts `2px` (`translateY(-2px)`); gains the Red Glow shadow.
- **Outline (secondary):** Transparent fill, `2px` white-at-20%-opacity border, white text; on hover the border and text both shift to Diagnostic Red and it lifts `2px` (no fill change — stays outline).
- **Footer Pill CTAs (WhatsApp / Phone):** The one place buttons take the pill shape (`50px` radius) instead of `10px` — a deliberate signal that these are direct-contact actions, not form submissions. Each is tinted toward its own brand color at low opacity at rest (WhatsApp green / Diagnostic Red) and fills solid on hover with a matching colored glow.

### Cards / Containers
- **Corner Style:** `10px` radius, consistently.
- **Background:** Charcoal Card (`#171717`) on a Near-Black or Charcoal Alt section background — always one neutral step lighter than what's behind it.
- **Border:** `1px` Graphite Border at rest; tints toward Diagnostic Red at ~30–35% opacity on hover.
- **Shadow Strategy:** None at rest; Card Lift shadow + `4–6px` upward translate on hover (see Elevation & Depth).
- **Internal Padding:** `36px 30–32px` for service/review cards; `44px 40px` for the larger contact form panel (tightening to `28px 20px` at the smallest breakpoint).

### Inputs / Fields
- **Style:** Charcoal Alt fill, `1px` Graphite Border, `8px` radius (one step tighter than cards), `14px 16px` padding, white text, Steel-Grey-adjacent placeholder (`#484848`).
- **Focus:** Border shifts to Diagnostic Red and gains a soft red focus ring (`box-shadow: 0 0 0 3px rgba(224,30,36,0.1)`) — no border-width change, ring only.
- **Labels:** Label typography (Bebas Neue, uppercase, `11px`, tracked, Steel Grey) sits above each field, never inline/floating.

### Navigation
- **Style:** Fixed, glassmorphic — near-black at 92% opacity with a `14px` backdrop blur — sitting below a separate, darker announcement bar (`#1a0809`) that carries phone/hours info. Every page (Home, About, Services, Gallery, Contact) shares the identical nav; the logo always links back to `index.html`.
- **Layout:** Three independent elements spread edge-to-edge across the header via `justify-content: space-between` — the logo flush left, the five page links (Home/About/Services/Gallery/Contact) as their own group, and the Book Now CTA flush right — so the header uses its full width instead of clustering everything toward one side. Below `1100px`, the link group and CTA both hide in favor of the hamburger. A second "Book Now" button repeats beneath the homepage's reviews grid (`.reviews-cta`), since the fixed nav's own CTA is unavailable across that same band and reviews is the page's highest-trust moment.
- **Typography:** Label style (Bebas Neue, uppercase, tracked), `16px`/`1.75px` tracking, larger than the `13px` Label — Small role used elsewhere (footer pills, reg-card title bar), so the primary nav reads with the same visual weight as the logo wordmark and Book Now button rather than thinner than both. Links sit on a `44px` gap.
- **States:** Links go from Steel/Fog Grey to Diagnostic Red on hover; the current page's link is the same Diagnostic Red, set via a small shared script that matches `location.pathname` against each link's `href` — no underline, no background change.
- **Mobile:** Below `1100px` (widened from the original `960px` to give the 5-item nav room before crowding), the hamburger opens a full-screen overlay drawer (`rgba(10,10,10,0.98)`, `24px` backdrop blur) with large centered links and body scroll locked while open — a deliberate step up from a dropdown panel, matching the multi-page structure's own navigation pattern. The primary CTA link keeps its solid-button treatment inside the drawer; any link click closes it. The drawer reserves the fixed header's height as top padding (so links never render underneath the announcement bar/nav) and scrolls internally if content ever exceeds the viewport; below `500px` of viewport height (landscape phones) link padding and font-size tighten so the full menu fits without scrolling. Keyboard focus is trapped within the drawer while open (Tab/Shift+Tab cycles its own links rather than escaping to page content behind it), matching the same trap on the gallery lightbox.

### Signature Component: Hero Stat Bar
A full-width glass strip (`rgba(0,0,0,0.55)`, blurred) pinned to the bottom of the hero, divided into equal cells by hairline verticals. Each cell pairs a large Diagnostic Red display number (years experience, vehicles serviced, rating, coverage) with a tiny tracked-out grey label beneath — the system's most concentrated trust-signal moment, functioning like a dashboard readout rather than a typical stat-counter widget. Wraps to a 2×2 grid at `768px` and below; on short landscape viewports (`≤500px` tall) it's dropped entirely so the hero's title/CTA stay reachable without scrolling, since the `620px` height floor plus the pinned bar would otherwise push primary content below the fold.

### Signature Component: Hero Slideshow
Home's hero background is a stack of full-bleed images (`.hero-slide`), one `.active` at a time, auto-crossfading every 6s (`opacity` transition, ~1.6s) with a slow ambient scale-down on the active slide (`scale(1.06)` → `scale(1)`, ~7s) — the same restrained Ken Burns feel the old single-image hover-zoom had, now ambient for every visitor instead of desktop-hover-only. `prefers-reduced-motion` disables the interval entirely and shows the first slide static. The existing dark gradient overlay and brightness-0.28 dim sit on top of every slide identically, so the red/black identity never shifts as slides change.


## Do's and Don'ts

### Do:
- **Do** keep Diagnostic Red to signal-carrying elements only (CTAs, active states, key numbers) — never a background fill for large areas.
- **Do** use `10px` radius for anything that holds content, and reserve full-pill/circle radius for badges, avatars, and direct-contact buttons.
- **Do** let shadows appear only in response to hover or on the highest-intent controls — nothing casts a shadow at rest.
- **Do** keep Bebas Neue uppercase for structural chrome (nav, buttons, labels, eyebrows) and Work Sans sentence-case for anything meant to be read at length.

### Don't:
- **Don't** introduce a second accent color alongside Diagnostic Red — new emphasis needs earn red or don't get emphasis.
- **Don't** use Barlow Condensed anywhere outside the logo wordmark.
- **Don't** add resting shadows to cards or panels — depth is earned through interaction, not applied by default.
- **Don't** give a content-holding container a pill or circular radius, or a badge/avatar a `10px` radius — the two corner languages must stay separate.
