# ClickUp Hygiene Campaign

A slide-style presentation site that explains how to use ClickUp well: what each feature is, how to use it, and how to keep it clean and structured.

## Context

The company uses ClickUp to manage teams, departments, and people, but there is no consistent structure or top-level visibility. This campaign teaches one topic at a time so everyone can manage their ClickUp properly.

## How to run

1. Open `index.html` in a browser, or
2. Use a local server (e.g. `npx serve .` or Live Server in VS Code) to avoid any path issues with assets.

## Project structure

```
Click-up-hygine/
├── index.html          # All slides (one section per slide)
├── css/
│   └── styles.css      # Typography and slide layout
├── js/
│   └── main.js         # Slide navigation (arrows, keyboard, dots)
├── assets/
│   └── screenshots/    # Put section screenshots here
│       └── inbox-overview.png
├── README.md
└── SECTION-TEMPLATE.md # How to add a new section
```

## Adding a new section (e.g. Spaces, Lists, Statuses)

Each topic follows the same pattern:

1. **What it is** — One slide explaining the feature and clearing up common confusions.
2. **Screenshot + context** — One slide with a screenshot and a short caption.
3. **How to use the UI** — What each tab/button/area means (like Inbox tabs).
4. **How to clean / manage it** — Steps or tips to keep things tidy.
5. **How to use it properly** — Best practices in daily work.

### Steps

1. Take a screenshot of the feature in ClickUp and save it as `assets/screenshots/<topic>-overview.png` (or similar).
2. In `index.html`, duplicate one of the existing slide `<section>...</section>` blocks.
3. Update `data-slide` to the next number.
4. Replace the content: heading, body text, list, and image `src`/`alt`/caption.
5. In `js/main.js`, the total slide count is taken from the DOM, so no change needed there.
6. Update the “More sections coming” slide or remove it when you add a real next section.

See **SECTION-TEMPLATE.md** for copy-paste HTML snippets.

## Current sections

- **Inbox** — Task updates feed (not messages), tab meanings (Primary / Other / Later / Cleared), how to clean and use it properly.

## Typography & design

- **Fonts:** DM Sans (body), DM Serif Display (headings).
- **Layout:** One slide per viewport; navigation via arrows, keyboard (←/→), and dot indicators.
- **Screenshots:** Full-width in their slide, with a short caption below.

You can change colors and spacing in `css/styles.css` (see `:root` variables).
