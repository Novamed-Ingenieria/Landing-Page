---
name: Novamed Ingeniería
description: Precision-driven design system for biomedical technology management
colors:
  primary: "#0C466B"
  primary-deep: "#08344F"
  secondary: "#197B9D"
  secondary-light: "#2894B0"
  secondary-mist: "#E8F5F8"
  abyss: "#062F49"
  accent-indigo: "#6366F1"
  accent-emerald: "#10B981"
  alert: "#C2472E"
  alert-soft: "#FBEAE6"
  warn: "#C08A1E"
  warn-soft: "#FBF1DC"
  graphite: "#17232B"
  surface-alt: "#F7F8F8"
  surface-muted: "#F5F6F7"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lg:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  sm: "0.375rem"
  md: "0.625rem"
  lg: "0.875rem"
  xl: "1.125rem"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary}dd"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  button-outline-dark:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "14px 28px"
  card-elevated:
    backgroundColor: "{colors.white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.xl}"
    padding: "28px"
  navbar:
    backgroundColor: "{colors.white}f2"
    textColor: "{colors.graphite}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
---

# Design System: Novamed Ingeniería

## Overview

**Creative North Star: "The Precision Dashboard"**

The design system embodies institutional precision meets modern clarity — like a well-calibrated instrument dashboard. Every visual decision flows from this metaphor: surfaces are organized and purposeful, data feels connected and alive, and trust is conveyed through engineering rather than decoration.

The personality is professional without being cold, technical without being alienating. Depth is achieved through layered shadows and tonal shifts rather than flat minimalism. The system feels engineered — each component has a clear role, each color communicates function, and the overall density balances information richness with scanability.

**Key Characteristics:**
- Deep institutional navy as the anchoring presence, vibrant teal as the connecting thread
- Layered depth through ambient shadows and tonal gradients
- Tactile interactive elements that respond and lift
- Grid overlays as a recurring texture reinforcing the "connected network" feeling
- Uppercase eyebrows and labels creating consistent information hierarchy
- Dark gradient sections creating dramatic contrast between light and deep navy

## Colors

The palette is institutional navy anchored by vibrant teal, with semantic accents for status and a neutral system for structure.

### Primary
- **Deep Navy** (#0C466B): The dominant institutional color. Used for primary buttons, section headings on light backgrounds, active navigation states, and the brand anchor across all surfaces.
- **Navy Abyss** (#08344F): The deepest navy, used for dark section gradients, hero backgrounds, and the deepest layer of the brand depth scale.

### Secondary
- **Teal** (#197B9D): The connecting thread. Used for secondary accents, the "active" indicator line, feature card top borders, eyebrow pill backgrounds, and the secondary button variant.
- **Light Teal** (#2894B0): The luminous accent. Used for decorative blur orbs, gradient highlights, the top glow line on dark sections, and hover-state accents on dark surfaces.
- **Mist** (#E8F5F8): The lightest tint. Used for subtle background washes and decorative border elements on dark surfaces.

### Tertiary
- **Indigo** (#6366F1): Accent for Pro-tier plan indicators and select feature card variants. Rare and purposeful.
- **Emerald** (#10B981): Success and positive-state color. Used for check marks, the WhatsApp card, and the Enterprise tier accent.

### Neutral
- **Graphite** (#17232B): Primary text color on light surfaces. Near-black with a cool blue undertone.
- **Surface Alt** (#F7F8F8): Light section background. A barely-there gray that creates section separation.
- **Surface Muted** (#F5F6F7): Secondary surface background for comparison tables and alternate sections.
- **White** (#FFFFFF): Card backgrounds, text on dark surfaces, and the primary canvas.

### Semantic
- **Alert** (#C2472E): Error and destructive states. Soft variant: #FBEAE6.
- **Warn** (#C08A1E): Warning and caution states. Soft variant: #FBF1DC.

### Named Rules

**The Teal Accent Rule.** The light teal (#2894B0) is used on ≤15% of any given screen. Its rarity as a glow, blur, or highlight is what makes it feel alive rather than decorative.

**The Gradient Depth Rule.** Dark sections always use a three-stop gradient (abyss → dark → deep) never a flat fill. This creates the "instrument panel" depth that defines the system's character.

## Typography

**Display Font:** DM Sans (with system-ui, sans-serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)

**Character:** A geometric sans-serif that balances technical precision with approachability. The consistent weight range (400–700) creates clear hierarchy without visual noise. Uppercase treatment with wide tracking on labels and eyebrows creates an institutional rhythm.

### Hierarchy
- **Display** (700, clamp(3rem, 7vw, 4.5rem), 1.08): Hero headlines only. Tight tracking (-0.04em) for compressed, impactful statements. Appears once per page.
- **Headline** (700, clamp(1.875rem, 4vw, 3rem), 1.1): Section headings. Slightly looser tracking (-0.02em). The workhorse of page structure.
- **Title** (700, 1.125rem, 1.3): Card titles, feature names, FAQ questions. Bold and scannable.
- **Body** (400, 1rem, 1.6): Descriptive text, paragraph content. Comfortable reading rhythm.
- **Body LG** (400, 1.125rem, 1.6): Hero descriptions and lead paragraphs. Slightly larger for emphasis without weight.
- **Label** (700, 0.75rem, 1.4, 0.14em, uppercase): Eyebrow tags, section badges, metadata. Always uppercase with wide tracking.

### Named Rules

**The Eyebrow Rule.** Every major section opens with an uppercase label in teal or brand-blue, set in a pill-shaped badge. This is the system's information architecture signature — it tells the visitor what they're looking at before the headline does.

## Layout

The system uses a centered content model with a max-width of 7xl (1280px) for full sections and 6xl (1152px) for constrained content. The navbar is a floating pill at max-w-6xl, fixed to the top with backdrop blur.

Spacing follows an 8px base grid: sections use 20–28 (py-20 to py-28) vertical padding, cards use 28px (p-7) internal padding, and gaps between grid items are 24–32px.

A recurring page-grid overlay (80px grid lines at 2% opacity) appears in hero and dark sections, masked with a radial gradient to fade from the top. This texture reinforces the "connected network" metaphor without competing with content.

Responsive behavior: single-column on mobile, two-column mid-range, three to four columns at desktop. The navbar collapses to a hamburger at the `lg` breakpoint. Cards stack vertically on mobile and grid on desktop.

## Elevation & Depth

The system uses a layered shadow vocabulary with four elevation levels, all tinted with the primary navy hue to maintain color coherence. Shadows are structural (defining hierarchy) rather than ambient (decorative).

### Shadow Vocabulary
- **Level 1** (`0 1px 2px rgba(12,70,107,0.06), 0 1px 3px rgba(12,70,107,0.06)`): Resting cards and subtle surface separation.
- **Level 2** (`0 6px 16px rgba(12,70,107,0.09), 0 2px 6px rgba(12,70,107,0.07)`): Default buttons, focused cards, and standard interactive elevation.
- **Level 3** (`0 16px 32px rgba(12,70,107,0.12), 0 4px 10px rgba(12,70,107,0.1)`): Hovered cards, navbar, and elevated interactive states.
- **Level 4** (`0 28px 56px rgba(12,70,107,0.16), 0 10px 20px rgba(12,70,107,0.12)`): Hero elements, modals, and peak elevation.

### Named Rules

**The Flat-By-Default Rule.** Cards rest at elevation level 1. They lift to level 2 on hover with a simultaneous -2px translate-Y. This micro-interaction is the system's primary tactile feedback.

**The Tinted Shadow Rule.** All shadows use the primary navy rgba(12,70,107,...) rather than neutral black. This keeps the depth feeling cohesive with the brand palette and prevents gray shadows from clashing with the blue-toned surfaces.

## Shapes

The form language is rounded and confident. Corners are generous but not circular — the system favors rounded rectangles that feel engineered rather than playful.

### Corner Scale
- **Sm** (0.375rem / 6px): Small elements like badges, pills, and inline indicators.
- **Md** (0.625rem / 10px): Buttons, inputs, and compact interactive elements.
- **Lg** (0.875rem / 14px): Primary button radius, the system's default interactive corner.
- **Xl** (1.125rem / 18px): Cards, containers, and major content blocks.
- **2xl** (used as utility class): Large cards, pricing cards, and feature containers.
- **3xl**: CTA banners and full-width section containers.
- **Full**: Decorative orbs, badges, and avatar-like elements.

### Recurring Geometry
- Decorative circles and orbs appear as background texture — always with generous blur (blur-3xl) and the brand-light teal at low opacity.
- The navbar is a floating rounded rectangle, not a full-width bar.
- Cards have a consistent top-border accent (3px) using the relevant tier or feature color.
- FAQ items use a 3px left border in brand-blue as the accent signature.

## Components

### Buttons
- **Shape:** Rounded-lg (0.875rem radius). Inline-flex with centered content and gap-2 icon spacing.
- **Primary:** Deep navy background (#0C466B), white text. Shadow level 2 at rest, level 3 on hover. Subtle -1px translate-Y on hover.
- **Secondary:** Teal background (#197B9D), white text. Same shadow and hover treatment as primary.
- **Outline:** Transparent background, primary navy text, 25% opacity border. Border thickens to 50% on hover with a 5% primary tint fill.
- **Outline Dark:** Transparent background, white text, 30% opacity border. White/10 fill on hover. Used exclusively on dark gradient surfaces.
- **Sizes:** md (px-5 py-2.5 text-sm) and lg (px-7 py-3.5 text-sm).

### Cards
- **Corner Style:** Rounded-2xl (used as utility class on containers).
- **Background:** White on light surfaces; gradient navy on dark sections.
- **Shadow Strategy:** card-elevated-sm class provides level 1 shadow at rest, level 3 on hover with -2px translateY.
- **Border:** 1px border at low opacity. Top-border accent (3px) in the relevant tier/feature color.
- **Internal Padding:** p-7 (28px) standard; p-8 (32px) for feature/value cards.

### Navigation
- **Style:** Fixed floating pill at top of viewport. Backdrop blur (backdrop-blur-xl) with 95% opacity white background. Rounded-2xl with level 3 shadow.
- **Typography:** 14px, font-semibold, uppercase, tracking-wide. Active state uses primary navy color with a teal underline indicator (0.5px height, animated with layoutId).
- **Mobile:** Hamburger menu at lg breakpoint. Full-screen overlay with motion animations.

### Section Headers
- **Eyebrow:** Uppercase pill badge. Light surfaces: teal/12 background with secondary text. Dark surfaces: white/10 background with white/90 text. px-3.5 py-1, 12px font, bold, wide tracking.
- **Title:** Headline scale (3xl-4xl), bold, tight leading. Light: graphite text. Dark: white text.
- **Description:** Body-lg scale, muted foreground on light, white/70 on dark. Max-width 2xl, mx-auto centered.

### FAQ Accordion
- **Style:** Rounded-xl container with 1px border at 50% opacity. Left border accent (3px) in brand-blue.
- **Summary:** Flex row with question text and a brand-blue circular indicator (6x6, brand-blue/10 background). Plus icon rotates 180° on open.
- **Content:** Muted foreground text, same padding as summary horizontal, with bottom padding.

### Pricing Cards
- **Standard:** White card with card-elevated-sm, top-border accent (3px) matching tier color. Icon in tier-colored background circle. Feature list with tier-colored check marks.
- **Popular (Basic):** Full gradient background (brand-deep → brand-abyss), white text, elevated shadow (level 4). "Más popular" badge positioned at top center. White top-border accent.
- **Comparison Table:** Rounded-2xl container with level 2 shadow. Header row uses brand gradient. Category rows use brand-blue/5 tint. Check marks in tier-colored circles.

## Do's and Don'ts

### Do:
- **Do** use the three-stop navy gradient for all dark sections — never flat fills.
- **Do** apply the page-grid overlay in hero and dark sections at 20–40% opacity.
- **Do** use uppercase tracking-wide labels as section openers — they're the system's signature.
- **Do** use tinted navy shadows (rgba(12,70,107,...)) — never neutral black shadows.
- **Do** keep the teal accent scarce — it should feel like a highlight, not a wash.
- **Do** lift cards on hover with both shadow elevation and -2px translateY.
- **Do** use decorative blur orbs (brand-light at low opacity) as background texture.

### Don't:
- **Don't** use flat dark backgrounds — always apply the gradient depth.
- **Don't** exceed 15% teal coverage on any single screen.
- **Don't** use neutral black box-shadows — always tint with the brand navy.
- **Don't** skip the eyebrow label on section headings — it's structural, not decorative.
- **Don't** use circular corners on cards or buttons — the system's geometry is rounded-rectangle.
- **Don't** place primary-colored elements on dark gradient backgrounds — use outline-dark or secondary variants instead.
- **Don't** flatten the navbar into a full-width bar — it stays as a floating pill.
