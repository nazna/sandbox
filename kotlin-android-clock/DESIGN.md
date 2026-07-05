---
name: Android CLI Test
description: High-precision developer console and agent exploration app
colors:
  primary: "#00a46e"
  neutral-bg: "#101010"
  neutral-surface: "#1c1c1c"
  accent: "#76bcc6"
  ink: "#f2f4f2"
  muted: "#929692"
typography:
  display:
    fontFamily: "sans-serif"
    fontSize: "32sp"
    fontWeight: 700
    lineHeight: "40sp"
  body:
    fontFamily: "sans-serif"
    fontSize: "16sp"
    fontWeight: 400
    lineHeight: "24sp"
rounded:
  sm: "4dp"
  md: "8dp"
  lg: "16dp"
spacing:
  sm: "8dp"
  md: "16dp"
  lg: "24dp"
---

# Design System: Android CLI Test

## 1. Overview

**Creative North Star: "The High-Precision Console"**

This visual system is modeled after professional developer consoles, command-line interfaces, and technical monitoring tools. It is characterized by high information density, clear typographic hierarchy, and a strict structural layout. 

The aesthetic rejects default Android template styling (such as basic Material 3 purple/pink color schemes, generic text placements, and floating decorative components) in favor of a clean, dark-mode terminal canvas. Colors are used deliberately to convey state and hierarchy, rather than for decoration.

**Key Characteristics:**
- High-contrast, dark-mode first design
- Restrained color application with precise highlights
- Strict alignment to a vertical/horizontal grid
- Flat container geometry utilizing tonal layering instead of drop shadows

## 2. Colors

The color palette uses a dark neutral scheme with a vibrant green primary color representing moss or terminal green, and a cyan accent for informational highlights.

### Primary
- **Console Green** (#00a46e / oklch(0.62 0.16 150.0)): Used for primary interactive actions, active navigation states, progress indicator highlights, and focus borders.

### Accent
- **Cyan Signal** (#76bcc6 / oklch(0.70 0.14 190.0)): Used for secondary highlights, informative status badges, and subtle links.

### Neutral
- **Console Dark BG** (#101010 / oklch(0.08 0 0.0)): The screen background. Achromatic near-black.
- **Console Surface** (#1c1c1c / oklch(0.12 0 0.0)): Background for cards, panels, list items, and containers.
- **Console Ink** (#f2f4f2 / oklch(0.95 0.005 150.0)): Soft off-white for high-readability body text.
- **Console Muted** (#929692 / oklch(0.60 0.003 150.0)): Medium gray for borders, inactive tabs, and secondary/meta labels.

### Named Rules
**The 15% Highlight Rule.** Primary and Accent colors must occupy ≤15% of the total screen space. Their role is to focus attention on interactive points; over-saturation destroys the console aesthetic.
**The Tonal Contrast Rule.** Background and surfaces must never be tinted with warm hues. They remain strictly achromatic to ensure color accuracy of primary/accent states.

## 3. Typography

**Display Font:** System Sans-Serif
**Body Font:** System Sans-Serif
**Label/Mono Font:** System Monospace

Typography is structured for readability in a technical context. Monospace is used strategically for dynamic figures, timestamps, code snippets, and terminal logs.

### Hierarchy
- **Display** (Bold, 32sp, 40sp): Used for main indicator figures (like the live time display).
- **Headline** (SemiBold, 24sp, 32sp): Screen titles and major action headings.
- **Title** (Medium, 18sp, 24sp): Section dividers and card titles.
- **Body** (Normal, 16sp, 24sp): Descriptive text, logs, and secondary explanations. Max line length: 65ch.
- **Label** (Medium, 12sp, 16sp): Form field names, badges, buttons, and metadata.

### Named Rules
**The Figure Monospace Rule.** Any dynamic numerical data, counters, or timestamps must be typeset in System Monospace to prevent layout shifting on updates.

## 4. Elevation

The console layout is flat-by-default. Layering and hierarchy are achieved by nesting `Console Surface` containers inside the `Console Dark BG`, separated by clean `Console Muted` borders.

### Shadow Vocabulary
- **Flat-by-default**: Drop shadows are prohibited for standard components. Surfaces are flat. Shadows are reserved solely for overlay elements like dialogs or float menus.

## 5. Components

### Cards / Containers
- **Corner Style:** Rounded (8dp / md)
- **Background:** Console Surface
- **Border:** 1dp solid Console Muted
- **Internal Padding:** 16dp (md)

### Buttons
- **Shape:** Rounded (8dp / md)
- **Primary:** Background Console Green, text Console Dark BG (high contrast)
- **Secondary:** Transparent background, border 1dp solid Console Muted, text Console Ink
- **Interactive States:** Pressed state scales down slightly (0.98x) and deepens background.

### Inputs / Fields
- **Style:** Background Console Surface, border 1dp solid Console Muted, text Console Ink
- **Focus:** Border changes to Console Green with 1dp thickness.

## 6. Do's and Don'ts

### Do:
- **Do** format all timestamps and counters in Monospace font.
- **Do** use tonal surface nesting (Console Surface on Console Dark BG) for layout structure.
- **Do** check that text on Console Green fills is high-contrast black or near-black.
- **Do** maintain a strict 8dp-based grid for paddings and margins.

### Don't:
- **Don't** use Material 3 purple/pink color schemes in any screens.
- **Don't** use decorative drop shadows on static cards or buttons.
- **Don't** use gradient text or acid-bright neon backgrounds.
- **Don't** pair fonts that are similar but not identical (stick to system sans-serif and monospace).
