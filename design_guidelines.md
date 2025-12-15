# Design Guidelines: Dirk Heinrich - Baufinanzierung

## Design Approach
**Reference-Based Approach**: Premium finance aesthetic inspired by high-end financial services (combining Swiss Life Select's professional trust with modern fintech clarity)

## Core Design Principles
- **Premium-Finance Aesthetic**: Clean, trustworthy, conversion-focused
- **Maximum Whitespace**: Generous breathing room between elements
- **No Template Look**: Custom, distinctive design language
- **Conversion Priority**: Every element drives toward "Finanzierung prüfen" CTA

## Color System
- **Primary**: White/Off-white backgrounds
- **Accent**: `#D82033` (red) - Used ONLY for CTAs and strategic highlights
- **Neutrals**: Soft grays for text hierarchy and subtle dividers
- **Trust**: Professional blue tones for Swiss Life Select branding elements

## Typography
- **Headlines**: Playfair Display (or Libre Baskerville) - Elegant serif, large sizes (48-72px desktop)
- **Body**: Inter (or Manrope) - Modern sans-serif, excellent readability (16-18px)
- **Hierarchy**: Strong contrast between headline and body weights
- **Line Height**: Generous (1.6-1.8 for body, 1.2-1.3 for headlines)

## Layout & Spacing
**Tailwind Units**: Primarily use 4, 8, 12, 16, 20, 24 (spacing-4, spacing-8, etc.)
- Hero padding: py-24 to py-32
- Section spacing: py-16 to py-24
- Component gaps: gap-8 to gap-12
- Container: max-w-7xl with px-6 to px-8

## Hero Section
**Layout**: Full viewport height (min-h-screen), centered content
- Large animated headline (fade + slide from bottom)
- Subheadline (delayed entrance, lighter weight)
- Swiss Life Select partner badge (top-right or subtle integration)
- Soft gradient background OR subtle animated lines/blur effect
- Primary CTA button: #D82033 with hover scale + shadow

**Hero Claim**: "Ihre Baufinanzierung. Klar. Sicher. Maßgeschneidert."

## Floating Funnel Card (Critical Component)
**Position**: Integrated within hero section, prominent but not obstructive
**Design**: Glassmorphism effect
- Backdrop blur, semi-transparent white background
- Soft shadow (shadow-2xl)
- Rounded corners (rounded-2xl)
- Slide + fade entrance animation from bottom

**Content Structure**:
- Title: "Finanzierung in 60 Sekunden prüfen"
- 3-step visual indicator (numbered circles or progress dots)
- Steps: 1) Kaufvorhaben auswählen, 2) Eckdaten eingeben, 3) Einschätzung erhalten
- Progress indicator showing Step 1/3
- CTA button: "Jetzt Finanzierung prüfen" (#D82033)
- Trust badges below: "✓ kostenlos · ✓ unverbindlich · ✓ Swiss Life Select Partner"

## Page Sections (Onepager Structure)
1. **Leistungen** (Services) - 4-column grid on desktop, cards with icons
2. **Warum Dirk Heinrich** - 2-3 column layout highlighting advantages
3. **Swiss Life Select Partner** - Logo + professional partnership statement
4. **Final CTA** - Full-width conversion section
5. **Footer** - Business address + Impressum modal trigger

## Component Library

**Buttons**:
- Primary: #D82033, white text, rounded-lg, px-8 py-4, hover scale(1.05) + shadow
- Secondary: White background, #D82033 text, border, same dimensions

**Cards**:
- White background, shadow-lg, rounded-xl
- Padding: p-8
- Hover: Subtle lift (translateY -2px)

**Service Cards**:
- Icon at top (circle background with #D82033 accent)
- Bold title
- Concise description
- Minimal, clean spacing

## Animation System
**Page Load**: Orchestrated sequence (0.8-1.2s total)
- Logo/badge fade in (0.2s)
- Headline slide up + fade (0.4s delay)
- Subheadline (0.6s delay)
- Funnel card slide in (0.8s delay)

**Scroll Animations**: Trigger at 10% viewport visibility
- Fade in from opacity 0 to 1 (0.6s)
- Slide up 30px to 0 (0.6s)
- Stagger child elements by 0.1s

**Micro-Interactions**:
- Button hover: Scale 1.05, shadow expansion (0.2s ease)
- Link hover: Color shift to #D82033 (0.15s)
- Card hover: Lift effect, shadow increase (0.3s ease)

**Performance**: All animations 60fps, use transform and opacity only

## Images
**Hero Background**: Subtle, professional - abstract geometric patterns OR soft gradient with light texture. NO stock photography of buildings/people in hero.
**Optional Section Images**: Professional consultation imagery (handshake, modern office) if needed for trust-building, but prioritize clean design over imagery.

## Mobile Optimization
- Funnel card: Full-width with reduced padding (p-6)
- Typography scales down (headlines 32-40px)
- Stack all grids to single column
- Maintain generous vertical spacing (py-12 to py-16)
- Touch-friendly CTAs (min-height: 48px)

## Footer
**Address**: Aarstraße 162, 65232 Taunusstein
**Impressum**: Modal or separate page (legal requirement)
**Layout**: Centered or 2-column on desktop