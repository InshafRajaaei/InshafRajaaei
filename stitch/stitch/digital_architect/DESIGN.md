# Design System Strategy: The Digital Architect

## 1. Overview & Creative North Star
**Creative North Star: "Structural Precision"**

This design system is built for the developer who views code as a blueprint and the browser as a site of construction. It moves away from the "soft" web of rounded corners and generic shadows, leaning into a high-end editorial aesthetic that balances the technical rigor of an architectural firm with the minimalist luxury of a modern gallery.

The system is defined by **0px border radii**, intentional asymmetry, and a high-contrast typographic hierarchy. By utilizing the "Cyprus" and "Sand" palette, we create a workspace that feels grounded and authoritative. We avoid the "template" look by using exaggerated whitespace and tonal layering rather than traditional structural lines.

---

## 2. Colors & Tonal Architecture
The palette is rooted in the deep, intellectual depth of **Cyprus (#004643)** and the sophisticated warmth of **Sand (#F0EDE5)**. 

### Surface Hierarchy & Nesting
To achieve "The Digital Architect" look, we must abandon traditional dividers. Hierarchy is built through a "Nested Plate" approach:
- **Base Layer:** Use `surface` (#14140F) for dark mode or a custom light-mode Sand variant.
- **Sectioning:** Instead of a border, use `surface-container-low` (#1C1C17) for large content blocks.
- **Emphasis:** Nested elements (like code snippets or project cards) should sit on `surface-container-high` (#2A2A25) to create a natural, "stepped" elevation.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Boundaries must be defined solely through background color shifts. For example, a project gallery section should be a `surface-container-low` block sitting flush against a `surface` background.

### Signature Textures
- **The Technical Gradient:** For primary CTAs or Hero backgrounds, use a subtle linear gradient from `primary` (#98D1CC) to `primary-container` (#004643) at a 135-degree angle. This adds "soul" to the technical layout.
- **Glassmorphism:** For floating navigation or modals, use `surface-variant` at 60% opacity with a `backdrop-blur` of 20px. This ensures the "Digital Architect" vibe feels layered and atmospheric.

---

## 3. Typography
The typography strategy relies on the tension between the geometric, technical `Space Grotesk` and the highly legible, humanist `Manrope`.

- **Display & Headlines (Space Grotesk):** These are your structural beams. Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em). This font choice signals technical precision.
- **Body Text (Manrope):** Use `body-lg` (1rem) for all long-form content. The contrast between the eccentric headlines and the stable body text creates an editorial, high-end feel.
- **Data Labels (Inter):** Use `label-md` for metadata, tags, and "micro-copy." Inter’s neutrality acts as the "functional annotation" on your architectural plans.

---

## 4. Elevation & Depth
In this design system, we do not "lift" objects with shadows; we "carve" them with tone.

- **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers. 
    - *Example:* A `surface-container-lowest` card placed on a `surface-container-low` background creates a "recessed" look, common in high-end cabinetry and architecture.
- **Ambient Shadows:** If a floating element is required (e.g., a dropdown), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 70, 67, 0.15)`. The shadow color should be a tinted version of "Cyprus" to maintain the brand’s tonal integrity.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` (#404847) at **15% opacity**. It should be barely perceptible, serving as a suggestion of a boundary rather than a hard wall.

---

## 5. Components

### Buttons
- **Primary:** Square corners (`0px`), `primary` background, `on-primary` text. Use `title-sm` typography. 
- **Tertiary:** No background. `primary` text with a 2px bottom-border that expands on hover. 
- **Interaction:** On hover, the primary button should shift to `primary-fixed-dim`, creating a subtle "lit" effect.

### Cards & Projects
- **Rule:** Forbid divider lines. 
- **Structure:** Use `surface-container-high` as the card base. Use the `spacing-6` (2rem) token for internal padding to give the content "gallery-style" breathing room.
- **Asymmetry:** Experiment with placing text in the top-left and metadata (using `label-sm`) in the bottom-right to break the standard grid.

### Input Fields
- **Styling:** A single bottom-border using `outline` (#899391). Background should be `surface-container-lowest`. 
- **Focus State:** The bottom border transitions to 2px `primary`.

### Navigation
- **The "Structural Nav":** A vertical navigation bar on the left side of the screen using `surface-container-low`, creating a permanent architectural anchor for the site.

---

## 6. Do’s and Don’ts

### Do:
- **Embrace the Grid:** Use the `spacing-20` (7rem) token for section margins. Large gaps signify luxury and intentionality.
- **Use Monospace for Accents:** Use Inter for "Version Numbers" or "Date Modified" to lean into the developer/architect theme.
- **Monochromatic Accents:** Use `tertiary` (#FAB79A) sparingly—only for critical alerts or "Live Now" indicators.

### Don’t:
- **No Rounded Corners:** Never use `border-radius`. Everything is a sharp 90-degree angle.
- **No Heavy Shadows:** Avoid the standard "Material Design" look. If it looks like a card floating over a phone screen, it’s wrong. It should look like an etched surface.
- **No Generic Icons:** Use thin-stroke, geometric icons that match the weight of the `outline` token.
- **No Center Alignment:** For hero sections, favor left-aligned typography with wide-right margins to create an editorial layout.