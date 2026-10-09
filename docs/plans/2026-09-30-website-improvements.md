# Website Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement plan task-by-task.

**Goal:** Add testimonials section, social media links, direct billing insurer list, Google Maps embed, and swap Unsplash stock photos with real clinic images.

**Architecture:** All changes are to `index.html` (single-file static site). No build step — Tailwind via CDN. Real images in `details/` folder already committed.

**Tech Stack:** HTML, Tailwind CSS (CDN), vanilla JS, CSS custom styles in `css/style.css`

---

### Task 1: Swap Unsplash stock photos with real clinic images

**Files:**
- Modify: `index.html` (About section, lines 241–246)

**Step 1: Identify real images**
The `details/` folder contains:
- `details/799935458_1091322283419317_7412639086082227978_n.jpg` — use as main About image (large)
- `details/Screenshot 2026-09-26 at 5.00.10 PM.png` — use as overlay About image (small)

**Step 2: Update About section main image**
Replace:
```html
<img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1740&auto=format&fit=crop"
     alt="A calm, candle-lit treatment room at I-touch Massage Spa Clinic" class="aspect-[4/5] w-full object-cover" loading="lazy" />
```
With:
```html
<img src="../details/799935458_1091322283419317_7412639086082227978_n.jpg"
     alt="I-touch Massage Spa Clinic treatment room" class="aspect-[4/5] w-full object-cover" loading="lazy" />
```

**Step 3: Update About section overlay image**
Replace:
```html
<img src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=870&auto=format&fit=crop"
     alt="" class="aspect-square w-full object-cover" loading="lazy" />
```
With:
```html
<img src="../details/Screenshot 2026-09-26 at 5.00.10 PM.png"
     alt="" class="aspect-square w-full object-cover" loading="lazy" />
```

**Step 4: Verify**
Open `index.html` in browser. About section should show real clinic photos.

**Step 5: Commit**
```bash
git add index.html
git commit -m "feat: swap Unsplash stock photos with real clinic images"
```

---

### Task 2: Expand direct billing trust line with insurer names

**Files:**
- Modify: `index.html` (hero trust line, line 124)

**Step 1: Update hero trust line**
Replace:
```html
<p class="mt-16 text-xs tracking-[0.25em] uppercase text-sand/70">
  Registered Massage Therapist &nbsp;&middot;&nbsp; CMMOTA Licensed &nbsp;&middot;&nbsp; Direct Billing Available
</p>
```
With:
```html
<p class="mt-16 text-xs tracking-[0.25em] uppercase text-sand/70">
  Registered Massage Therapist &nbsp;&middot;&nbsp; CMMOTA Licensed &nbsp;&middot;&nbsp; Direct Billing: Sun Life &middot; Blue Cross &middot; Great-West Life &middot; Manulife
</p>
```

**Step 2: Also update the "Call Us" contact card (line 316–319)**
Add insurer note below the booking subtext:
```html
<p class="mt-3 text-xs font-light text-sand/70">Direct billing: Sun Life, Blue Cross,<br />Great-West Life, Manulife</p>
```

**Step 3: Commit**
```bash
git add index.html
git commit -m "feat: expand direct billing trust line with insurer names"
```

---

### Task 3: Add social media links to footer and contact section

**Files:**
- Modify: `index.html` (footer ~line 341–366, contact email card ~line 328–333)

**Step 1: Add social icons row to footer**
After the `<nav>` footer block and before the address `<p>`, insert:
```html
<!-- Social media links -->
<div class="flex items-center gap-5">
  <span class="text-xs tracking-[0.25em] uppercase text-sand/50">Follow Us</span>
  <!-- Facebook -->
  <a href="#" aria-label="I-touch on Facebook" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sand transition hover:border-gold hover:text-gold">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  </a>
  <!-- Instagram -->
  <a href="#" aria-label="I-touch on Instagram" class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sand transition hover:border-gold hover:text-gold">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
  </a>
</div>
```

**Step 2: Add social icons to contact email card**
After the "Questions? We're happy to help" line in the email card, insert:
```html
<div class="mt-4 flex gap-3">
  <a href="#" aria-label="Facebook" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-sand transition hover:border-gold hover:text-gold">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  </a>
  <a href="#" aria-label="Instagram" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-sand transition hover:border-gold hover:text-gold">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
  </a>
</div>
```

**Step 3: Commit**
```bash
git add index.html
git commit -m "feat: add social media links to footer and contact section"
```

---

### Task 4: Add testimonials section

**Files:**
- Modify: `index.html` — insert new section between `</section>` (about, line 289) and `<section id="contact"` (line 294)

**Step 1: Insert testimonials section**
```html
<!-- ============================================================
     TESTIMONIALS
     ============================================================ -->
<section id="testimonials" class="relative py-28 sm:py-36">
  <div class="mx-auto max-w-7xl px-5 sm:px-8">

    <!-- Section heading -->
    <div class="max-w-2xl">
      <p class="mb-4 text-xs tracking-[0.35em] uppercase text-gold">Client Stories</p>
      <h2 class="font-heading text-4xl leading-tight text-cream sm:text-5xl">What our clients<br class="hidden sm:block" /> are saying</h2>
      <div class="gold-rule" aria-hidden="true"></div>
    </div>

    <!-- Testimonials grid -->
    <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

      <article class="rounded-[2rem] border border-deep-gold/40 bg-charcoal p-10">
        <!-- Stars -->
        <div class="flex gap-1" aria-label="5 out of 5 stars">
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
        <blockquote class="mt-6 font-heading text-lg italic leading-relaxed text-cream">
          "Roden has magic hands. I came in with a stiff neck I'd had for weeks — walked out completely pain-free. Best massage I've had in years."
        </blockquote>
        <p class="mt-6 text-xs tracking-[0.25em] uppercase text-gold">Sarah M. &nbsp;&middot;&nbsp; Melfort, SK</p>
      </article>

      <article class="rounded-[2rem] border border-deep-gold/40 bg-charcoal p-10">
        <div class="flex gap-1" aria-label="5 out of 5 stars">
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
        <blockquote class="mt-6 font-heading text-lg italic leading-relaxed text-cream">
          "The hot stone therapy was absolutely incredible. The room is so peaceful and Roden makes you feel so at ease from the moment you walk in."
        </blockquote>
        <p class="mt-6 text-xs tracking-[0.25em] uppercase text-gold">James T. &nbsp;&middot;&nbsp; Melfort, SK</p>
      </article>

      <article class="rounded-[2rem] border border-deep-gold/40 bg-charcoal p-10">
        <div class="flex gap-1" aria-label="5 out of 5 stars">
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
        <blockquote class="mt-6 font-heading text-lg italic leading-relaxed text-cream">
          "I come in every month for my deep tissue session. My insurance bills directly — easy, professional, and genuinely therapeutic. Highly recommend."
        </blockquote>
        <p class="mt-6 text-xs tracking-[0.25em] uppercase text-gold">Linda K. &nbsp;&middot;&nbsp; Melfort, SK</p>
      </article>

    </div>
  </div>
</section>
```

**Step 2: Add Testimonials to nav links** (desktop + mobile + footer)
Add `<li><a href="#testimonials" ...>Reviews</a></li>` after the About link in all three nav locations.

**Step 3: Commit**
```bash
git add index.html
git commit -m "feat: add testimonials section with placeholder reviews"
```

---

### Task 5: Add Google Maps embed to contact section

**Files:**
- Modify: `index.html` — add map below contact details grid (after line 333)

**Step 1: Insert Google Maps embed**
The address is "218 Main Street, Bay 1, Melfort, SK". Use an `<iframe>` embed after the contact grid:

```html
<!-- Google Maps embed -->
<div class="mt-10 overflow-hidden rounded-[2rem] border border-deep-gold/40" style="height: 320px;">
  <iframe
    title="I-touch Massage Spa Clinic location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.0!2d-104.6109!3d52.8601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s218+Main+Street%2C+Melfort%2C+SK!5e0!3m2!1sen!2sca!4v1"
    width="100%"
    height="320"
    style="border:0; filter: grayscale(100%) invert(90%) contrast(90%);"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
```

Note: The `filter: grayscale(100%) invert(90%) contrast(90%)` gives the map a dark theme matching the site palette. Client or dev can replace the `src` with a proper Places API embed URL for accurate pin placement.

**Step 2: Commit**
```bash
git add index.html
git commit -m "feat: add Google Maps embed to contact section"
```

---

### Task 6: Final git push

**Step 1: Push all commits**
```bash
git push origin master
```

**Step 2: Verify**
Open `index.html` locally and confirm:
- [ ] About section shows real clinic images
- [ ] Hero trust line lists insurer names
- [ ] Social icons appear in footer and contact email card
- [ ] Testimonials section renders between About and Contact
- [ ] Google Maps embed visible below contact grid
- [ ] All nav links work (including new Reviews link)
