# Kristin Watson — Editorial Portfolio & Art Direction

A high-concept, editorial fashion portfolio website modeled after the reference design, featuring bold typography, dynamic blue ambient lighting, and an interactive camera viewfinder crop reticle.

---

## ✦ Quick Start

You can run and explore this portfolio immediately without any build tools, server setup, or npm dependencies:

1. **Direct Browser Launch**:
   - Double-click **`index.html`** or right-click and choose **"Open with Chrome / Edge / Safari / Firefox"**.
   - URL: `file:///D:/New%20folder/index.html`

2. **Or run with any local static server (optional)**:
   ```bash
   # Python (if installed)
   python -m http.server 3000
   # or npx serve
   npx serve .
   ```

---

## ✦ Features & Design Anatomy

### 1. Hero Section (Reference Blueprint Match)
- **Typographic Hierarchy**: Giant, condensed uppercase display typeface (`Bebas Neue`) in pale ivory cream (`#FFFCD8`) featuring **"KRISTIN"** on the top-left and **"WATSON"** on the bottom-right.
- **Atmospheric Palette**: Multi-layer radiant electric cobalt blue (`#02123e` → `#0d54d9` → `#258bf5`) with subtle grain and soft ambient lighting halos.
- **Interactive Focus / Crop Viewfinder**:
  - Rectangular focus reticle with thin semi-transparent border and 4 corner handle dots.
  - **Draggable**: Click and drag anywhere inside the frame to reframe the portrait.
  - **Resizable**: Drag any of the 4 corner handles to change the focal crop dimensions.
  - **Live Camera HUD**: Displays real-time coordinates, lens metadata (`85mm f/1.4`, `ISO 100`, `4K RAW [REC]`).
- **Editorial Spine**: A sleek silver vertical margin on the left border evoking high-fashion monographs and art book bindings.

### 2. Selected Works (12)
- 12 curated, beautifully styled editorial projects (Vogue Italia, Saint Laurent, Acne Studios, Dazed, Harper's Bazaar, Balenciaga, Bottega Veneta, Jacquemus, etc.).
- **Interactive Category Filter**: Filter by `All (12)`, `Editorial`, `Fashion`, `Campaign`, `Runway`.
- **Fullscreen Lightbox**: Click any project card to open a full-resolution preview dialog with metadata, descriptions, and Prev/Next keyboard navigation (`←` / `→` / `ESC`).

### 3. Chronological Archive
- Minimalist, high-contrast tabular documentation of commissions and exhibitions.
- **Live Search**: Instant real-time filtering by client, title, year, or category.

### 4. Interactive Contact Drawer
- Click **"Contact Me ↗"** or **"Initiate Inquiry"** to reveal a sleek slide-in contact drawer.
- 1-click **"Copy Email"** button (`studio@kristinwatson.com`) with animated confirmation feedback.
- Project discipline selector pills and inquiry form with instant submission state.

### 5. Synthesized Audio Feedback (Zero Audio Files)
- Toggle the **"Audio: ON / OFF"** pill in the top header for subtle, elegant haptic audio chimes generated dynamically through the browser's native **Web Audio API**.

### 6. Quick Customizer Toolbar
- Floating bottom-right widget allowing you to:
  - Change the name live (e.g. your name instead of Kristin Watson).
  - Switch between 4 ambient themes: **Electric Cobalt** (default), **Midnight Noir**, **Cyber Cyan**, and **Neon Magenta**.
  - Toggle between the cropped reference portrait, high-res backdrop, or **upload your own photo** to preview in the viewfinder!
  - Center or reset the focus frame anytime.

---

## ✦ File Structure

```
d:/New folder/
├── index.html                   # Semantic HTML5 markup
├── style.css                    # Responsive CSS styling & animations
├── app.js                       # Interactive ES6 logic (Viewfinder, Filters, Lightbox, Audio)
├── README.md                    # Documentation & setup guide
├── reference.png                # Original reference image
└── assets/
    ├── hero-portrait.png        # High-definition cropped portrait
    ├── subject-clean-portrait.png
    ├── subject-clean-backdrop.png
    └── projects/                # 12 high-aesthetic editorial project SVGs
        ├── proj-1.svg
        ├── proj-2.svg
        └── ... (proj-3 to proj-12)
```

