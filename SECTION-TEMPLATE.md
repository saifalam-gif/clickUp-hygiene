# Section template — Add a new ClickUp topic

Use this as a checklist and copy-paste source when adding a new segment (e.g. Spaces, Lists, Statuses, Automations).

## 1. What it is (one slide)

```html
<section class="slide" data-slide="N">
  <div class="slide__inner">
    <p class="kicker">Section X</p>
    <h2 class="slide__heading">[Feature Name] — What it is</h2>
    <p class="lead">[One sentence: what this feature is for.]</p>
    <p class="body">[Short paragraph: common misunderstanding + correct use.]</p>
  </div>
</section>
```

## 2. Screenshot + context (one slide)

```html
<section class="slide slide--screenshot" data-slide="N+1">
  <div class="slide__inner">
    <h2 class="slide__heading">[Feature Name] — Where to find it & what you see</h2>
    <figure class="screenshot-block">
      <img src="assets/screenshots/[feature]-overview.png" alt="[Describe the screen]" class="screenshot-block__img" />
      <figcaption class="screenshot-block__caption">[One line: what the screenshot shows.]</figcaption>
    </figure>
  </div>
</section>
```

- Save your screenshot as `assets/screenshots/[feature]-overview.png`.

## 3. What each part means (e.g. tabs, buttons)

```html
<section class="slide" data-slide="N+2">
  <div class="slide__inner">
    <h2 class="slide__heading">[Feature Name] — What each [tab/area] means</h2>
    <ul class="tab-list">
      <li><strong>[Name]</strong> — [What it’s for.]</li>
      <!-- repeat -->
    </ul>
    <p class="body">[Optional tip on how to use them.]</p>
  </div>
</section>
```

## 4. How to clean / manage it (steps)

```html
<section class="slide" data-slide="N+3">
  <div class="slide__inner">
    <h2 class="slide__heading">[Feature Name] — How to clean it</h2>
    <ol class="step-list">
      <li><strong>[Step 1]</strong> — [Description.]</li>
      <li><strong>[Step 2]</strong> — [Description.]</li>
    </ol>
  </div>
</section>
```

## 5. How to use it properly (best practices)

```html
<section class="slide" data-slide="N+4">
  <div class="slide__inner">
    <h2 class="slide__heading">[Feature Name] — How to use it properly</h2>
    <ul class="tip-list">
      <li>[Best practice 1.]</li>
      <li>[Best practice 2.]</li>
    </ul>
  </div>
</section>
```

## Checklist per section

- [ ] Screenshot saved in `assets/screenshots/`
- [ ] All new slides have correct `data-slide` (sequential numbers)
- [ ] Image `src` and `alt` point to your screenshot
- [ ] Caption describes what the screenshot shows
