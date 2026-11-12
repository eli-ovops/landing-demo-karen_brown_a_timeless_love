# Motion UI prototype - 2026-08-21

## Question

What visual system makes Karen Brown's local wedding-celebrant concept feel authored and emotionally specific, without inventing a portfolio, customer story or customer asset?

## Design read

Reading this as: an overhaul of a wedding-celebrant concept for design-conscious couples, with a cinematic and contemporary Australian language, leaning toward native CSS, high-contrast type and restrained scroll-led motion.

## Audit and dials

- Current page patterns to retire: repeated serif headlines, uniform light-section rhythm, information-card repetition, motionless media and a wedding-celebrant role that is too easy to miss.
- Keep: public factual claims, CTA paths, anchors, static L0 boundary and original concept imagery.
- Design variance: 8. Motion intensity: 6. Visual density: 3.
- Theme: dark forest with one muted rose accent. This is intentionally not a warm-paper wedding template.

## Three switchable directions

The local-only route is `site/prototype-motion.html?variant=a`, `b` or `c`. The bottom switcher also supports left and right arrow keys outside editable controls.

1. **A - Invitation.** A split media stage with an explicit "Karen Brown, Wedding Celebrant" service line and a direct statement that she plans and leads ceremonies. Motion explains hierarchy and gives the transition from landscape to ceremony support a sense of arrival.
2. **B - The Vow Room.** An intimate vertical image and a compact, editorial reading pace. The role and service are stated before the emotional promise. Motion opens the imagery and then lets the copy stay calm.
3. **C - Place, Then Promise.** A place-led cinematic opening with an explicit celebrant role, then a non-card-based progression from meeting to ceremony day. Motion makes the region feel like a setting rather than decorative stock.

## Motion rules

- Load, hover and view-entry transitions use only opacity, transform and clip-path.
- Every motion has a job: Hero reveals establish hierarchy; view reveals pace the narrative; CTA movement confirms direct interaction.
- `prefers-reduced-motion: reduce` disables all nonessential movement and leaves every section fully visible.
- No scroll event listener, parallax loop, marquee or autoplay media is used.

## Boundary

This is a throwaway local design instrument, not the client-facing Demo. It uses the existing ledgered original concept images, does not add factual claims, and does not alter the main `index.html` or production status. A selected direction must be rebuilt cleanly into the main page, then independently accepted.
