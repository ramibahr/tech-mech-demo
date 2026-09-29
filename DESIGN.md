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
- A raster logo mark (`tech-mech-logo.png`) rather than a styled-text wordmark, sized per-instance and scaled down on narrow viewports

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

Three functional one-offs sit outside this core palette, each locked to a single expected context: an amber `#f59e0b` for the 5-star rating glyphs (the color users expect from a star rating), the real UK number-plate colors (`#F5C518` yellow, `#003399` GB-strip blue, `#FFD700` star gold) for the contact page's Reg Plate field — a visitor expects that element to look like an actual number plate, not a themed one — and `#CC0000` (with its hover glow `rgba(204,0,0,0.4)`) for the Services grid's card accent line and hover state, a deliberately different red from `--red`/`#e01e24` rather than a drift value. None should spread beyond their one use.

### Named Rules
**The Small-Text Red Rule.** `#e01e24` is for large/bold text and non-text surfaces (icons, borders, backgrounds, shadows) only. Any time red is the *color of small text* — a badge, an active nav state, a status value — use Diagnostic Red — Accessible (`#ff525a`) instead, so it clears 4.5:1 contrast on the near-black backgrounds.

**The One Signal Rule.** Diagnostic Red is the only color allowed to mean "act here" or "this matters now." If something new needs emphasis, it earns red or it doesn't get emphasis — it does not get a second accent color.

## Typography

**Display Font:** Bebas Neue (with sans-serif fallback) — free on Google Fonts, single regular weight only (no bold cut; see Named Rules below).
**Body Font:** Work Sans (with sans-serif fallback), weights 300–600.
**Plate Font:** `'Charles Wright', 'Arial Black', 'Arial', monospace` — a third, locked one-off alongside the real UK plate colors (see Colors above), attempted only on `.plate-input`/`.plate-wrap` (the contact form's Reg Plate field). Charles Wright is the actual DVLA plate typeface; essentially no visitor has it installed, so in practice this renders as the Arial Black look the plate already had — the declaration exists for the rare visitor who does, not as a font this system otherwise uses. Not a role available to any other element.

**Logo Mark:** a raster image (`tech-mech-logo.png` — `//` in brand red, italic "TECH-MECH" in white, a red rule under "TECH" only, "AUTOMOTIVE" tracked out beneath), not a styled-text wordmark — no dedicated logo typeface is loaded. The source has a solid pure-black (`#000000`) background rather than an alpha channel, so it's shown with `mix-blend-mode: lighten` (inline, alongside the height) rather than a resting background color — pure black contributes nothing under `lighten`, so it reads as transparent against any of the site's near-black surfaces without an image re-export. `.site-logo` is set to a fixed `height: 35px` per instance (inline, matching both the nav and footer usage) and scales down to `26px` at the `600px` mobile breakpoint so it can't crowd the hamburger or overflow the nav row. Identical asset and treatment in the nav and the footer, both still wrapped in the `.logo-mark` link back to `index.html`.

*Provenance note:* this pairing replaced an earlier Big Shoulders Display / Montserrat combination (itself a substitute for pbwl.uk's unlicensed Uncage/Gotham reference) on explicit direction — a deliberate creative choice, not a licensing workaround.

**Character:** Bebas Neue's tall, extremely condensed, all-caps-only geometry gives every structural element (headings, nav, buttons, labels) a stenciled, industrial poster feel — sharper and more graphic than the previous Big Shoulders Display, with no lowercase forms at all. Work Sans carries all reading copy in a calmer, humanist, proportionally-spaced register so long-form trust-building copy stays easy to read against the dark ground.

### Hierarchy
- **Display** (700, `clamp(3rem, 9vw, 6rem)`, line-height 0.95): Hero title only. Uppercase, 2px tracking, red used on the emphasized word.
- **Headline** (700, `clamp(2rem, 5vw, 3rem)`, line-height 1.08): Section titles (About, Services, Gallery, Reviews, Contact). Uppercase, 1px tracking, red on the emphasized word.
- **Title — Large** (600, 22px, line-height 1.2): Contact form title. The upper step of the Title family.
- **Title** (600, 19px, line-height 1.2): Service names, review author names. The default step. Review author names ("James D.") carry an explicit `text-transform: uppercase` — Bebas Neue has no distinct lowercase forms, so this makes the always-caps rendering deliberate rather than an accidental font fallback.
- **Title — Small** (600, 14px, line-height 1.2): About pillar titles, review-avatar initials — Title-family treatment at micro scale.
- **Body — Large** (300, 17px, line-height 1.75): Hero subhead. Also reused, coincidentally at the same size, for the review-card star row.
- **Body** (400, 16px, line-height 1.65): Primary paragraph copy — about body.
- **Body — Small** (400, 14px, line-height 1.7): Secondary/supporting copy — service and contact descriptions, form subtitle and field text, footer tagline and links.
- **Body — Extra Small** (400, 13px, line-height 1.6): Tertiary copy — about pillar descriptions, footer hours and copyright line.
- **Label** (600, 12px, letter-spacing 1.5px, uppercase): Footer column titles.
- **Label — Small** (500, 13px, letter-spacing 1.5px, uppercase): Nav links, footer pill buttons.
- **Label — Extra Small** (600, 11px, letter-spacing 1.5px, uppercase): Hero badge, about-image badge label, form field labels.
- **Label — 2XS** (600, 10px, letter-spacing 1.5px, uppercase): Logo secondary line, hero stat labels, contact detail labels, tightest mobile step of Label — Extra Small.
- **Stat** (700, `2rem`, line-height 1, red): The hero stat-bar numbers and the about-image badge number — one shared step; these two contexts must always match. One stat value ("All Makes") is text rather than a digit and carries an explicit `text-transform: uppercase` for the same reason as review author names above.

### Named Rules
**The No-Eyebrow Rule.** No kicker/eyebrow label sits above a section heading. The heading carries its own weight — delete the label rather than adding one back, even when a reference layout uses one.

### Named Rules
**The All-Caps Structure Rule.** Anything that is structural chrome rather than reading content — nav, buttons, labels, section eyebrows, stat labels — is Bebas Neue, uppercase, and tracked out. Anything meant to be read at length is Work Sans, sentence case, untracked. This is now a hard constraint, not just a style choice: Bebas Neue has no true lowercase forms, so any mixed-case content assigned to it renders as caps regardless of source text — check new copy in a head-font role for readability before adding it (a long sentence-case tagline, for instance, would read poorly force-capitalized and belongs in Work Sans instead).

**The Single-Weight Display Rule.** Bebas Neue ships one weight (400/regular) on Google Fonts — there is no true bold cut. Existing `font-weight: 500/600/700` declarations on head-font elements are harmless (browsers either ignore the request or apply synthetic/faux bold) but no longer select a genuinely different weight the way they did with Big Shoulders Display's real 400–700 range. Weight is no longer a lever for hierarchy within the head-font role — use size, tracking, and color instead.

## Layout

**Architecture:** the site is 5 separate static HTML files (`index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`) sharing one external `styles.css`, one external `main.js` (deferred, cached across page navigations), and near-identical header/nav/footer markup — no framework, no templating, matching the project's plain-HTML stack. Only Home (`index.html`) carries the Hero; every other page uses `body:not(.has-hero) { padding-top: calc(--announce-h + --nav-h) }` to clear the fixed header instead. Home is a lean, proof-driven scroll (Hero, Brand Ribbon, Reviews); About/Services/Gallery/Contact each get their own full page, entered from the persistent nav.

A centered `1160px` container holds every section, with side padding that steps down for smaller screens (`32px` → `24px` → `20px` at the `960px`/`600px` breakpoints, via `.container`). Section vertical padding follows the same idea: a `--section-py` custom property runs `120px` (desktop) → `96px` (≤960px) → `72px` (≤600px), keeping the slow, confident scroll cadence appropriate to a considered purchase decision (booking a repair) while staying dense enough not to feel padded-out on mobile.

Each secondary page's lead section (`#about`, `#services`, `#gallery`, `#contact`) uses a separate, smaller `--section-pt` (`60px`, flat across breakpoints) for its *top* padding specifically, while keeping `--section-py` for its bottom — `padding: var(--section-pt) 0 var(--section-py)`. `--section-py` on both sides would stack on top of `body:not(.has-hero)`'s own header-clearance padding (`announce-h + nav-h`, ~`112px`, required so content isn't hidden under the fixed bars), pushing the visible gap before the page's own heading to ~`232px` — most of which read as dead space rather than intentional breathing room, not the slow-scroll cadence the full `--section-py` rhythm is for elsewhere on the page.

Section intro headers (Services, Gallery, Reviews) are centered and capped at `640px`, with a responsive gap to their grid (`clamp(48px, 6vw, 64px)`) — heading, then supporting copy, then content. Split layouts (About's text+image, Contact's info+form) keep their headers left-aligned inside their column instead, since they're introducing a paired layout rather than a full-width grid.

Grids vary by content density: About is a locked `1fr 1fr` two-column split (`80px` gap); Reviews uses an auto-fill/auto-fit responsive grid (`minmax(280–300px, 1fr)`, `28–32px` gap) so card count adapts to viewport; Gallery is a deliberate asymmetric 12-column mosaic (`20px` gap) rather than a uniform grid, giving the "shop tour" imagery a curated, non-repetitive feel; Contact splits `1fr 1.1fr` (`80px` gap), favoring the form slightly.

Services' 17 cards are one flat `.services-grid`, explicit (not auto-fill) column counts — 4 at full desktop width, stepping down to 3 (`≤1100px`), 2 (`≤768px`) and 1 (`≤600px`) — since the card count itself is now the point. Built with `flex-wrap` rather than CSS Grid specifically because 17 doesn't divide evenly by 4 or 2: a fixed-column grid always strands a lone card alone on the last row at those widths, left-aligned with visible empty space beside it. Flexbox treats each wrapped row as its own line, so `justify-content: center` centers a short last row as a group; each card's `flex-basis` (`calc(25% - 21px)` at 4-up, adjusted per breakpoint) is sized so a *full* row's cards-plus-gaps sum to exactly 100%, leaving centering nothing to act on there — only a genuinely incomplete row visibly shifts. `flex-grow: 0` keeps a lone card at the normal card width instead of stretching to fill the row. Each card is icon + name + a single short description line, kept intentionally to one line (not the 2-3 sentence paragraphs the earlier 7-card set had, which would make a 17-card grid very tall). Every card shares a fixed `min-height` (`240px`) rather than sizing to its own content, so title/description length differences don't produce a ragged grid — `min-height` rather than `height` so a card that genuinely needs a 3rd wrapped line still grows instead of clipping. The earlier version's 3 named subgroups (General & Diagnostics / Mechanical & Handling / Electrical & Bodywork) are gone — regrouping 17 items into a handful of subsections would be arbitrary at this count, where a flat, consistent grid is easier to scan.

Responsive behavior collapses at three breakpoints: `960px` (nav becomes a hamburger drawer, two-column grids stack to one, the About portrait image is dropped rather than shrunk, section padding steps down to `96px`), `768px` (the gallery mosaic re-flows to a simpler stacked/paired layout), and `600px` (section padding steps down to `72px`, container padding to `20px`, and component padding tightens, e.g. the contact form panel drops from `44px 40px` to `28px 20px`).

## Elevation & Depth

The system is flat at rest — cards are distinguished from their background purely by a `1px` Graphite Border, never a resting shadow. Depth is earned only as a response to interaction: hovering a service or review card lifts it (`translateY(-4px` to `-6px)`) and introduces a diffuse neutral shadow (`0 16px 48px rgba(0,0,0,0.35)` to `0 24px 60px rgba(0,0,0,0.45)`), while the border simultaneously tints toward red. Primary buttons and the scroll-to-top control use a second, distinct shadow language — a colored glow keyed to Diagnostic Red (e.g. `0 8px 30px rgba(224,30,36,0.4)`) — reserved for the system's highest-intent controls.

### Shadow Vocabulary
- **Card Lift** (`box-shadow: 0 16px 48px rgba(0,0,0,0.35)` / `0 24px 60px rgba(0,0,0,0.45)`): Neutral diffuse shadow on card hover; pairs with the `translateY` lift and border tint.
- **Red Glow** (`box-shadow: 0 8px 30px rgba(224,30,36,0.4)` / `0 4px 20px rgba(224,30,36,0.45)`): Colored glow reserved for primary CTAs and the scroll-to-top button — signals "the one thing to press."

### Named Rules
**The Earned-Shadow Rule.** Nothing casts a shadow at rest. Shadows exist only as feedback for an action just taken (hover) or an action available (a primary control) — never as decoration.

## Shapes

Two coexisting corner languages carry distinct meaning. Structural containers — cards, panels, image frames, badges, primary/outline buttons — use a consistent `10px` radius (`--radius`), giving the system a precise, machined-edge feel (precise and restrained, not soft). Small icon chips use slightly tighter or looser variants of the same family (`8px` for compact icon tiles, `12px` for larger service icons and the scroll-to-top button). Fully-rounded pill shapes (`50px` radius or `50%` circle) are reserved for a narrower set: the hero status badge, the footer's phone/email contact buttons, and avatars — anything that reads as a tag, a contact affordance, or a person, rather than a content container.

### Named Rules
**The Container-vs-Pill Rule.** `10px` radius means "this holds content." Full-pill/circle radius means "this is a badge, a person, or a direct contact action." The two never swap roles.

## Components

Controls throughout are precise and restrained: sharp, deliberate hover feedback with no unnecessary motion, and no control changes shape or radius on interaction — only color, border, shadow, and position.

### Buttons
- **Shape:** `10px` radius (`--radius`), matching the container language, not the pill language.
- **Primary:** Diagnostic Red fill, white text, `14px 32px` padding, Label typography (Bebas Neue, uppercase, tracked).
- **Hover / Focus:** Fill darkens to Diagnostic Red — Deep; lifts `2px` (`translateY(-2px)`); gains the Red Glow shadow.
- **Outline (secondary):** Transparent fill, `2px` white-at-20%-opacity border, white text; on hover the border and text both shift to Diagnostic Red and it lifts `2px` (no fill change — stays outline).
- **Footer Pill CTAs (Phone / Email):** The one place buttons take the pill shape (`50px` radius) instead of `10px` — a deliberate signal that these are direct-contact actions, not form submissions. Phone is tinted Diagnostic Red at low opacity at rest and fills solid red with a matching glow on hover. Email has no brand color to carry, so it's neutral instead — white-at-6%-opacity at rest, filling solid white with dark text on hover — rather than inventing an accent for it.

### Cards / Containers
- **Corner Style:** `10px` radius, consistently.
- **Background:** Charcoal Card (`#171717`) on a Near-Black or Charcoal Alt section background — always one neutral step lighter than what's behind it.
- **Border:** `1px` Graphite Border at rest; tints toward Diagnostic Red at ~30–35% opacity on hover.
- **Shadow Strategy:** None at rest; Card Lift shadow + `4–6px` upward translate on hover (see Elevation & Depth).
- **Internal Padding:** `36px 30–32px` for service/review cards; `44px 40px` for the larger contact form panel (tightening to `28px 20px` at the smallest breakpoint).

### Inputs / Fields
- **Style:** Charcoal Alt fill, `1px` Graphite Border, `8px` radius (one step tighter than cards), `14px 16px` padding, white text, mid-grey placeholder (`#808080` — raised from an earlier `#484848` that measured 2.06:1 against the Charcoal Alt fill, well under the 4.5:1 AA floor; `#808080` clears 4.78:1).
- **Focus:** Border shifts to Diagnostic Red and gains a soft red focus ring (`box-shadow: 0 0 0 3px rgba(224,30,36,0.1)`) — no border-width change, ring only.
- **Labels:** Label typography (Bebas Neue, uppercase, `11px`, tracked, Steel Grey) sits above each field, never inline/floating.

### Navigation
- **Style:** Fixed, solid `#0a0a0a` — sitting below a separate, darker announcement bar (`#1a0809`) that carries phone/hours info. Deliberately opaque rather than glassmorphic: a translucent nav over a blur let whatever scrolled underneath shift its apparent color, which broke the logo image's `mix-blend-mode: lighten` transparency trick (see Logo Mark below) by blending it against a moving target instead of one fixed near-black. Every page (Home, About, Services, Gallery, Contact) shares the identical nav; the logo always links back to `index.html`.
- **Layout:** Three independent elements spread edge-to-edge across the header via `justify-content: space-between` — the logo flush left, the five page links (Home/About/Services/Gallery/Contact) as their own group, and the Enquire Now CTA flush right — so the header uses its full width instead of clustering everything toward one side. Below `1100px`, the link group and CTA both hide in favor of the hamburger, whose drawer repeats the same "Enquire Now" link. A second "Enquire Now" button repeats beneath the homepage's reviews grid (`.reviews-cta`), since the fixed nav's own CTA is unavailable across that same band and reviews is the page's highest-trust moment; unlike the nav's, it links to `contact.html#enquiry-section` rather than the bare page, jumping straight to the form card instead of the page top (`.contact-form-wrap`'s `scroll-margin-top` keeps that landing clear of the fixed header).
- **Typography:** Label style (Bebas Neue, uppercase, tracked), `16px`/`1.75px` tracking, larger than the `13px` Label — Small role used elsewhere (footer pills), so the primary nav reads with the same visual weight as the logo wordmark and Enquire Now button rather than thinner than both. Links sit on a `44px` gap.
- **States:** Links go from Steel/Fog Grey to Diagnostic Red on hover; the current page's link is the same Diagnostic Red, set via a small shared script that matches `location.pathname` against each link's `href` — no underline, no background change.
- **Mobile:** Below `1100px` (widened from the original `960px` to give the 5-item nav room before crowding), the hamburger opens a full-screen overlay drawer (`rgba(10,10,10,0.98)`, `24px` backdrop blur) with large centered links and body scroll locked while open — a deliberate step up from a dropdown panel, matching the multi-page structure's own navigation pattern. The primary CTA link keeps its solid-button treatment inside the drawer; any link click closes it. The drawer reserves the fixed header's height as top padding (so links never render underneath the announcement bar/nav) and scrolls internally if content ever exceeds the viewport; below `500px` of viewport height (landscape phones) link padding and font-size tighten so the full menu fits without scrolling. Keyboard focus is trapped within the drawer while open (Tab/Shift+Tab cycles its own links rather than escaping to page content behind it), matching the same trap on the gallery lightbox.

### Signature Component: Hero Stat Bar
A full-width glass strip (`rgba(0,0,0,0.55)`, blurred) pinned to the bottom of the hero, divided into equal cells by hairline verticals. Each cell pairs a large Diagnostic Red display number (years experience, vehicles serviced, rating, coverage) with a tiny tracked-out grey label beneath — the system's most concentrated trust-signal moment, functioning like a dashboard readout rather than a typical stat-counter widget. Wraps to a 2×2 grid at `768px` and below; on short landscape viewports (`≤500px` tall) it's dropped entirely so the hero's title/CTA stay reachable without scrolling, since the `620px` height floor plus the pinned bar would otherwise push primary content below the fold. Because the bar is absolutely positioned over the hero rather than laid out in flow, `#hero` reserves `184px` of bottom padding (`288px` at the `768px` 2-row breakpoint) so the centered hero content never grows into it — that reserve is zeroed on the `≤500px`-tall breakpoint where the bar is hidden. Symmetrically at the top, `#hero`'s `padding-top` is `announce-h + nav-h` plus `48px`: the bare `announce-h + nav-h` term only clears the fixed bars (content starts exactly at their bottom edge, zero gap), so the extra `48px` is what actually separates the hero-badge from the navbar.

### Signature Component: Hero Slideshow
Home's hero background is a stack of full-bleed images (`.hero-slide`), one `.active` at a time, auto-crossfading every 6s (`opacity` transition, ~1.6s) with a slow ambient scale-down on the active slide (`scale(1.06)` → `scale(1)`, ~7s) — the same restrained Ken Burns feel the old single-image hover-zoom had, now ambient for every visitor instead of desktop-hover-only. `prefers-reduced-motion` disables the interval entirely and shows the first slide static. The existing dark gradient overlay and brightness-0.28 dim sit on top of every slide identically, so the red/black identity never shifts as slides change.

Currently rendering as a single static slide (`images/hero-engine-bay-1600.webp`, a real workshop photo replacing the earlier Unsplash stock set): of the real photos supplied, only one had a composition dense/dark enough to read well full-bleed behind hero text — the crossfade rotation needs at least two, and the mechanism itself (`main.js`'s `heroSlideshow` interval) already no-ops safely when `.hero-slide` count is 1, so nothing broke, it's just dormant. Add more `.hero-slide` divs (each with a `data-bg`, per the existing pattern in git history) if further wide/dark photos become available and the crossfade is wanted back.

### Signature Component: Form Success State
The contact page's enquiry form (a real Netlify Forms submission, `data-netlify="true"`, posted via `fetch` so the page never reloads) swaps to a confirmation state on success rather than resetting itself: the form is hidden and a `.form-success` panel takes its place in the same card — a checkmark icon in a Red Glow circle (same icon-on-tint treatment as `.contact-detail-icon`, just larger) above a single line of Body — Large copy ("Thank you, we'll be in touch shortly!"). Toggled via an `.is-visible` class rather than the `hidden` attribute, since the panel needs `display:flex` once shown and a bare class-selector rule would otherwise tie with the UA `[hidden]` default and lose based on source order.


## Do's and Don'ts

### Do:
- **Do** keep Diagnostic Red to signal-carrying elements only (CTAs, active states, key numbers) — never a background fill for large areas.
- **Do** use `10px` radius for anything that holds content, and reserve full-pill/circle radius for badges, avatars, and direct-contact buttons.
- **Do** let shadows appear only in response to hover or on the highest-intent controls — nothing casts a shadow at rest.
- **Do** keep Bebas Neue uppercase for structural chrome (nav, buttons, labels, eyebrows) and Work Sans sentence-case for anything meant to be read at length.

### Don't:
- **Don't** introduce a second accent color alongside Diagnostic Red — new emphasis needs earn red or don't get emphasis.
- **Don't** add resting shadows to cards or panels — depth is earned through interaction, not applied by default.
- **Don't** give a content-holding container a pill or circular radius, or a badge/avatar a `10px` radius — the two corner languages must stay separate.
