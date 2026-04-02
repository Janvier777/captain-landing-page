# Captain.ai — Figma Make Refinement Prompt
## Fix typography hierarchy, visual clutter, and navigation flow

---

## PROMPT

Redesign the Captain.ai landing page with these specific changes. Keep the same warm gradient background, color palette, glassmorphism style, and content — but fix the visual hierarchy and readability.

**GLOBAL TYPOGRAPHY CHANGES (apply to every section):**
- There are THREE headline sizes, not one. Stop making every headline the same massive size:
  - Hero headline ("Captain."): 80px bold — this is the ONLY headline this big
  - Section headlines ("One input. A complete plan." / "Plan. Route. Execute."): 40-44px bold — significantly smaller than hero
  - Section sub-labels ("HOW CAPTAIN WORKS" / "SEE IT WORK"): 13px uppercase, letter-spacing 3px, in coral or teal — small but visible with good contrast against the background
- Body text: 17-18px, line-height 1.7, warm gray (#4A4458) — slightly darker than current for better readability
- Reduce overall text boldness. Not every sentence needs to be bold. Use bold only for: headlines, card titles, and ONE key phrase per section maximum.

**SECTION 1: HERO — simplify and focus**
- Keep the robotic/mechanical hand illustration — it adds visual personality and energy to the hero. But push it slightly further into the background (reduce opacity to ~70-80%) so it doesn't compete with the text and task input mockup for attention.
- Visual hierarchy should flow top-to-bottom in this exact order:
  1. Small pill badge at top: "Now onboarding design partners" (keep this, it's nice)
  2. "Captain." in 80px bold indigo — the biggest text on the entire page
  3. "your team's 24/7 command center." in 28px, light weight (300 or 400), muted lavender-gray (#7B6F99) — NOT bold, much lighter than current
  4. One line of description in 17px warm gray, max-width 600px, centered
  5. The task input mockup card (glassmorphism) with "Make a pitch deck for our Series A." — this should be prominent, roughly 700px wide
  6. "Get Early Access" button + "Watch it work ↓" link
  7. "Built for teams of 3–15" in small muted text
- The robotic hands and gradient blobs should layer BEHIND the text content. The text and task input are the foreground; the illustration and blobs are atmosphere.
- Total hero height: about 90vh. Lots of whitespace. Let it breathe.

**SECTION 2: PROBLEM — reduce emphasis competition**
- Section label "THE BOTTLENECK ISN'T EXECUTION" in 13px uppercase coral, with enough top padding (80-100px) to separate clearly from the section above.
- Headline "Your team has 10 AI tools. Nobody's flying the plane." in 40px bold indigo. NOT 56-64px.
- Body text in regular weight (400), warm gray. Remove the bold styling from "Everyone is 10x more productive — alone." and "Right now, that's you. In Slack. At midnight." — instead, make these lines slightly larger (19px) and in a deeper color (#3B3680 indigo) to create gentle emphasis without shouting. Only ONE of these two lines should have emphasis, not both. Pick the closer: "Right now, that's you. In Slack. At midnight." in 19px indigo, no bold.
- Remove the 3D object illustration (the floating mechanical box). Replace with nothing — the stat cards below provide the visual interest.
- Stat cards: keep the large gradient numbers (58%, 67%) — these are great. But make the label text below them slightly larger (15px) and darker for readability.

**SECTION 3: HOW IT WORKS — more breathing room**
- Section label "HOW CAPTAIN WORKS" in 13px uppercase teal.
- Headline "One input. A complete plan. Automatic execution." in 40px bold indigo.
- Three cards: add more horizontal gap between them (32px instead of 16px). 
- The 01/02/03 watermark numbers are nice — keep them but make them even lighter (8% opacity) so they don't compete with the card content.
- Card titles should be 20px bold, card descriptions 15px regular. The current cards feel slightly text-heavy — tighten the descriptions to 2 lines max each.
- Add 24px internal padding on all sides of each card.

**SECTION 4: WORKFLOW TIMELINE — this section is great, minor tweaks**
- Headline "'Make a pitch deck' → 7 steps → done." in 40px bold indigo (not bigger).
- The task input mockup and the step cards below are the best part of the page — keep them as-is.
- Make the connecting line between steps slightly more visible — currently it's too faint. Use a 2px line in soft lavender (#C8B8E8).
- Step cards: the AI badges (teal) and HUMAN badges (if they appear further down the timeline) should be slightly bolder in color for better contrast.

**SECTION 5: CAPABILITIES — good, minor hierarchy fix**
- Headline "Plan. Route. Execute. Oversee." in 40px bold — NOT the same 56px as current.
- The 2x2 card grid is well-structured. Keep it.
- The "KEY DIFFERENTIATOR" badge on the "Wait for Humans" card is a nice touch — keep it.
- Card titles: 22px bold. Card descriptions: 16px regular. Icons: keep current sizing.
- Add a subtle top-edge gradient stripe to each card (like a 4px colored line at the top): indigo for Plan, peach for Route & Execute, coral for Wait for Humans, teal for Oversee.

**SECTION 6: INTEGRATIONS — good, tighten spacing**
- Headline "Your AI agents. Your tools. One control layer." in 36px bold (slightly smaller than section headlines — this is a supporting section, not a primary one).
- The integration pills are clean. Tighten the vertical gap between the AI MODELS row and CONNECTED TOOLS rows.
- Add very subtle hover states on each pill: a slight lift and glow effect (design the hover state as a second variant).

**ADDITIONAL VISUAL NAVIGATION AIDS:**

1. Add subtle section dividers: a thin horizontal line (1px, 8% opacity white) or a slight background gradient shift between sections. Currently sections bleed into each other — the reader can't tell where one ends and another begins.

2. Add a floating "scroll indicator" in the hero: a small animated down-arrow or chevron near the bottom of the hero section, pulsing gently, to invite scrolling.

3. Consider adding a sticky progress indicator: a thin horizontal bar at the very top of the page (above the nav) that fills as the user scrolls, showing how far down the page they are. Color: a subtle lavender-to-peach gradient, 3px tall.

4. The nav bar should have slightly more internal padding (16px vertical → 20px) and the nav links should be 15px, not 14px.

5. Add anchor link highlighting: when the user scrolls to a section, the corresponding nav link should subtly change color (this will be done in code, but design the "active" state — perhaps the link turns indigo with a subtle underline).

**Overall: the page should feel like it has a clear visual rhythm:**
- BIG moment (hero) → pause (whitespace) → medium moment (problem) → pause → medium moment (how it works) → pause → visual showcase (workflow timeline) → pause → supporting info (capabilities, integrations) → BIG moment (CTA)

Right now every section feels equally loud. Create peaks and valleys in visual intensity.