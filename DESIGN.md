---
name: Courage & Court
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e6bdba'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#ad8885'
  outline-variant: '#5c3f3d'
  surface-tint: '#ffb3ae'
  primary: '#ffb3ae'
  on-primary: '#68000c'
  primary-container: '#ce1126'
  on-primary-container: '#ffe0dd'
  inverse-primary: '#c0001f'
  secondary: '#77dc88'
  on-secondary: '#003914'
  secondary-container: '#007932'
  on-secondary-container: '#99fea7'
  tertiary: '#c6c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#676767'
  on-tertiary-container: '#e6e6e6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ae'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930015'
  secondary-fixed: '#93f9a2'
  secondary-fixed-dim: '#77dc88'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  stats-number:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 32px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered to capture the raw energy and elite professionalism of the Bravehearts Basketball Team. It targets a dual audience: passionate fans seeking real-time engagement and team administrators managing complex performance data. 

The aesthetic is **High-Contrast / Bold**, drawing inspiration from modern sports broadcasting and professional league identities. It utilizes aggressive visual weights, intentional asymmetry, and a rigorous commitment to the national colors of Malawi. The interface should feel kinetic, even in static states, evoking the speed and power of the game. Every element is designed to command attention, using clean lines and a structured grid to ensure that high-density statistics remain legible and actionable.

## Colors
The palette is rooted in the Malawi national flag, optimized for a high-performance digital environment. This design system defaults to **dark mode** to maximize the vibrance of the team colors and reduce eye strain during data-heavy administrative tasks.

- **Primary (Red):** Used for critical actions, live game indicators, and primary branding. It represents the "Braveheart" spirit.
- **Secondary (Green):** Used for success states, positive statistical trends, and secondary highlights.
- **Tertiary/Surface (Black/Dark Gray):** The foundation of the UI. Backgrounds use a deep charcoal (#121212) rather than pure black to maintain depth and shadow visibility.
- **Neutral/Accent (White/Light Gray):** Reserved for high-readability text and sharp borders to create the "clean lines" required for professional data visualization.

## Typography
Typography is the primary driver of the "Athletic" feel. We use a pairing of **Montserrat** for its bold, geometric confidence and **Inter** for its systematic clarity in data-dense areas.

- **Display & Headlines:** Set in Montserrat with heavy weights (800-900). Use tight letter-spacing to create a "compact" and impactful look. All headlines should be treated as architectural elements.
- **Body:** Set in Inter for maximum legibility in articles, player bios, and administrative tables.
- **Data & Stats:** We introduce **JetBrains Mono** for numerical data and game clocks. This monospaced font ensures that digits align perfectly in live scoreboards and comparison tables, reinforcing the technical nature of the sport.
- **Labels:** Use uppercase Montserrat for section headers and "overlines" to create clear hierarchy.

## Layout & Spacing
The system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing logic is based on a 4px baseline, but we lean heavily into "Large" and "Extra Large" blocks of white space (or dark space in this case) to separate high-intensity content blocks.

- **Dashboard Layout:** Uses a fixed sidebar (280px) for navigation, with a fluid content area for stats and graphs.
- **Data Density:** In administrative views, use "md" (16px) padding for tables. In fan-facing editorial views, increase padding to "xl" (48px) to allow imagery to breathe.
- **Asymmetry:** Occasionally break the grid with "full-bleed" imagery or stats cards that overflow the container to create a sense of movement.

## Elevation & Depth
In this design system, depth is achieved through **Bold Borders** and **Tonal Layers** rather than soft shadows. This maintains the "clean, professional lines" requested.

- **Surface Tiers:** Background is #121212. Cards and containers use #1E1E1E. Active or hovered elements use #2A2A2A.
- **Borders:** Instead of shadows, use 1px or 2px solid borders. For standard cards, use a subtle #333 border. For "featured" cards or active states, use a Primary Red (#CE1126) border.
- **Hard Shadows:** If a shadow is required for popovers, use a 0-blur, high-opacity black shadow displaced by 4px or 8px (Brutalist style) to maintain the aggressive aesthetic.

## Shapes
This design system utilizes **Sharp (0px)** corners. Every button, card, input, and image container must have 90-degree angles. This conveys a sense of discipline, strength, and technical precision.

- **Iconography:** Use sharp-edged, stroke-based icons (2px weight). Avoid rounded terminals.
- **Decorative Elements:** Use 45-degree diagonal cuts on decorative backgrounds or "clipped" corners on player cards to suggest speed and forward momentum.

## Components
- **Player Cards:** Large-scale action photography with a "cutout" effect where the player overlaps the top border. Stats (PPG, RPG) are displayed in the footer using JetBrains Mono. Use a vertical Red gradient overlay on one side for text legibility.
- **Buttons:** High-contrast blocks. Primary buttons are Solid Red with White text (Bold Montserrat). Secondary buttons are Ghost-style with a White 2px border.
- **Dynamic Graphs:** Line charts should use a Primary Red stroke (3px) with a subtle Green gradient fill below the line. Use sharp "points" instead of rounded dots for data markers.
- **Inputs:** Solid #1E1E1E background with a bottom-only 2px White border. Focus states shift the border color to Primary Red.
- **Game Stats Table:** High-density layout using Inter. Row hover states should use the Secondary Green at 10% opacity to highlight the current line without obscuring data.
- **Status Chips:** Use rectangular badges for "Live," "Final," or "Postponed." "Live" should pulse between Primary Red and a darker shade.