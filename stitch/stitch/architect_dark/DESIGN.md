# Design System Specification: The Architectural Minimalist

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Architect"**

This design system is built for Inshaf Rajaaei to communicate technical authority, security, and scalability. It moves beyond "standard" dark mode portfolios by adopting an editorial, high-end aesthetic that favors structural integrity over decorative flourishes. 

The "Digital Architect" identity breaks the template look by utilizing **intentional asymmetry** and **tonal layering**. We treat the browser as a canvas of deep space where content isn't just "placed," but "anchored." By leveraging a strict typographic scale and a high-contrast palette, we ensure that the core message—"I build secure and scalable web applications"—is the undisputed hero of the experience.

---

## 2. Colors & Surface Philosophy

The palette is anchored in a deep charcoal (`surface: #131313`) with a striking emerald accent (`primary: #4edea3`).

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are prohibited for sectioning.** Conventional dividers make a site look like a bootstrap template. Instead, define boundaries through:
- **Background Shifts:** Transition from `surface` to `surface-container-low` to signal a new content block.
- **Negative Space:** Use the `spacing-16` (5.5rem) or `spacing-20` (7rem) spacing tokens to create a mental break between sections.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the Material tiers to create "nested" depth:
- **Base Layer:** `surface` (#131313)
- **Sectional Layer:** `surface-container-low` (#1c1b1b) for large content areas.
- **Component Layer:** `surface-container` (#201f1f) for cards or interactive modules.
- **Floating Layer:** `surface-bright` (#3a3939) for elevated elements like tooltips or modals.

### The "Glass & Gradient" Rule
Flat design can feel "dead" if overused. To add "visual soul":
- **Signature CTA Gradient:** Use a linear gradient from `primary` (#4edea3) to `primary-container` (#10b981) at 135 degrees for primary buttons to give them a subtle, machined-metal luster.
- **The Glass Anchor:** Use `surface-container-highest` with a 70% opacity and a 12px backdrop-blur for sticky navigation bars. This allows the content to bleed through, creating a sense of environmental continuity.

---

## 3. Typography
We use **Inter** across all scales to maintain a cohesive, technical, and modern appearance. The hierarchy is designed to be "Top-Heavy," using massive display sizes against tight, readable body text to mimic high-end architectural journals.

*   **Display (The Statement):** `display-lg` (3.5rem). Use for the hero value proposition. Letter-spacing should be set to `-0.02em` for a tighter, more authoritative look.
*   **Headings (The Structure):** `headline-md` (1.75rem). Used for project titles. Bold weight.
*   **Body (The Content):`body-lg` (1rem). Set with a generous line-height (1.6) to ensure the technical descriptions feel approachable.
*   **Labels (The Data):** `label-md` (0.75rem). Use `on-surface-variant` (#bbcabf) in All-Caps with `0.05em` letter-spacing for category tags (e.g., "SECURITY", "SCALABILITY").

---

## 4. Elevation & Depth

### Tonal Layering Principle
Avoid "Drop Shadows" whenever possible. Instead, achieve elevation by "stacking" surface tokens. 
*   Place a `surface-container-low` card atop a `surface-container-lowest` background. The subtle 2% shift in brightness is more sophisticated than a heavy shadow.

### Ambient Shadows
If an element *must* float (e.g., a modal), use a "Tinted Ambient Shadow":
*   **Values:** `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);`
*   **The Ghost Border:** For accessibility on containers, use a `1px` border of `outline-variant` (#3c4a42) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Background: Gradient (`primary` to `primary-container`), Text: `on-primary` (#003824). Radius: `0` (Sharp, angular). 
*   **Secondary (Ghosted):** Background: Transparent, Border: `outline` (#86948a) at 40% opacity. Text: `primary`.
*   **Interaction:** On hover, the primary button should shift 2px up with a subtle `primary_fixed` outer glow.

### Cards & Lists
*   **Project Cards:** No borders. Use `surface-container-low`. On hover, transition the background to `surface-container`.
*   **List Items:** Forbid divider lines. Use `spacing-3.5` (1.2rem) padding between items. Use a `2px` vertical accent of `primary` on the left side of the *active* list item only.

### Technical Tags (Chips)
*   **Style:** `surface-container-high` background, `label-md` typography.
*   **Radius:** `full` (9999px) to contrast against the sharp-edged layout.

### Input Fields
*   **Minimalist State:** Only a bottom border of `outline-variant`. Upon focus, the border transitions to `primary` with a height of 2px.
*   **Error State:** Text and border shift to `error` (#ffb4ab).

---

## 6. Do's and Don'ts

### Do
*   **DO** use "Aggressive Whitespace." If you think there is enough space between sections, double it.
*   **DO** use `surface-container-lowest` for the code-block backgrounds to emphasize the "Secure/Scalable" brand.
*   **DO** align text to a strict left-margin to create a strong vertical "axis" for the eye to follow.

### Don't
*   **DON'T** use pure #000000. It kills the depth of the `primary` emerald. Use `surface` (#131313).
*   **DON'T** use 100% opaque borders. They create "visual noise" that contradicts the professional, clean aesthetic.
*   **DON'T** use bounce or spring animations. If an animation is required, use a subtle "Ease-In-Out" (200ms) on opacity and Y-axis translation (4px) only.