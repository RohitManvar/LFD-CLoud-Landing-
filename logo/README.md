# LFD Cloud Official Brand Logo Kit

Welcome to the official **LFD Cloud** logo and brand assets repository. This folder provides every official format, resolution, and lockup of the LFD Cloud brand identity for web, digital products, marketing, presentations, and commercial print.

---

## 📁 Directory Structure

```
logo/ (and public/logo/)
├── svg/                    # Lossless vector graphics (Infinite scaling, crisp everywhere)
│   ├── lfd-cloud-logo-black.svg
│   ├── lfd-cloud-logo-white.svg
│   ├── lfd-cloud-logo-primary.svg
│   ├── lfd-cloud-logo-primary-white.svg
│   ├── lfd-cloud-logo-cyan.svg
│   ├── lfd-cloud-stacked-black.svg
│   ├── lfd-cloud-stacked-white.svg
│   ├── lfd-cloud-stacked-primary.svg
│   ├── lfd-cloud-stacked-primary-white.svg
│   ├── lfd-cloud-icon-black.svg
│   ├── lfd-cloud-icon-white.svg
│   ├── lfd-cloud-icon-primary.svg
│   ├── lfd-cloud-wordmark-black.svg
│   ├── lfd-cloud-wordmark-white.svg
│   └── lfd-cloud-wordmark-primary.svg
│
├── png/                    # Transparent raster assets (1x, 2x, 4x Retina & 4K)
│   ├── *-1x.png            # Standard web resolution (512px / 256px)
│   ├── *-2x.png            # Retina display resolution (1024px / 512px)
│   ├── *-4x.png            # Ultra-HD 4K resolution (2048px / 1024px)
│   └── *.png               # Default high-res (1024px)
│
├── webp/                   # Next-gen web format (Ultra compressed, transparent alpha)
├── jpg/                    # Solid background high-res JPEGs (For Word, PPT, documents)
├── pdf/                    # Pure vector print-ready PDFs (Commercial printing, press)
├── eps/                    # Encapsulated PostScript vector (Adobe Illustrator, InDesign)
├── favicons/               # Browser favicons and mobile app icons
│   ├── favicon.ico         # Multi-res (16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256)
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.png
│   ├── apple-touch-icon.png (180x180)
│   ├── android-chrome-192x192.png
│   └── android-chrome-512x512.png
│
├── preview.html            # Interactive visual brand asset viewer & downloader
├── logo-manifest.json      # Complete machine-readable asset catalog
└── README.md               # Brand guidelines and usage documentation
```

---

## 🎨 Brand Color Palette

| Color Name | Hex Code | RGB | Role / Usage |
|---|---|---|---|
| **Faber Navy** | `#002244` | `rgb(0, 34, 68)` | Core corporate brand color, foundation of mark & typography |
| **Ocean Navy** | `#013755` | `rgb(1, 55, 85)` | Secondary deep tone for vertical gradient bars |
| **Tech Teal** | `#027785` | `rgb(2, 119, 133)` | Dynamic energy accent, main body to swoosh transition |
| **Vibrant Cyan** | `#00D2D3` | `rgb(0, 210, 211)` | Forward-looking AI transformation highlight, swoosh tip |
| **Dark Obsidian** | `#090D16` | `rgb(9, 13, 22)` | Primary dark mode background & dark typography |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | Light backgrounds & dark-mode white typography |

---

## 🔤 Typography

- **Primary Brand Font**: Geist / Inter (system fallback: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`)
- **Wordmark Weight**: ExtraBold (`800`) or Bold (`700`)
- **Letter Spacing**: Tracking Tight (`-0.025em`)
- **All SVG, EPS, and PDF files** have typography converted into **pure vector Bézier curves (outlined glyphs)**, ensuring 100% visual fidelity with **zero font dependencies** on any device or software.

---

## 📊 Format Selection Guide (When to Use What)

| Format | Transparency | Scalability | Best Used For |
|---|---|---|---|
| **SVG** | ✅ Yes | ♾️ Infinite | Websites, React components, Figma, Sketch, responsive web UI |
| **PNG** | ✅ Yes | 🔍 Multi-scale (1x, 2x, 4x) | Social media, video overlays, slides, email signatures, app dev |
| **WEBP** | ✅ Yes | 🔍 Raster (1024px) | High-performance websites, progressive web apps (PWAs) |
| **JPG** | ❌ Solid Bg | 🔍 Ultra-HD (2048px) | Microsoft Word, PowerPoint, formal PDF reports, printouts |
| **PDF** | ✅ Yes | ♾️ Infinite Vector | Commercial offset printing, corporate brochures, event banners |
| **EPS** | ✅ Yes | ♾️ Infinite Vector | Professional print prepress, Adobe Illustrator, CorelDraw |
| **ICO** | ✅ Yes | 🔍 Multi-res | Browser tab favicon, Windows desktop shortcut icon |

---

## 💻 Web & React Code Examples

### 1. HTML Picture Element (Adaptive Dark/Light Mode)
```html
<picture>
  <source srcset="/logo/svg/lfd-cloud-logo-white.svg" media="(prefers-color-scheme: dark)">
  <img src="/logo/svg/lfd-cloud-logo-primary.svg" alt="LFD Cloud Logo" width="214" height="58">
</picture>
```

### 2. Standard Favicon Setup in `<head>`
```html
<link rel="icon" type="image/svg+xml" href="/logo/svg/lfd-cloud-icon-primary.svg" />
<link rel="icon" type="image/x-icon" href="/logo/favicons/favicon.ico" />
<link rel="icon" type="image/png" sizes="32x32" href="/logo/favicons/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/logo/favicons/apple-touch-icon.png" />
```

### 3. React / Tailwind Component
```jsx
export const BrandLogo = ({ variant = 'primary', className = 'h-8 w-auto' }) => (
  <img 
    src={`/logo/svg/lfd-cloud-logo-${variant}.svg`} 
    alt="LFD Cloud" 
    className={className} 
  />
);
```

---

## 🌐 Interactive Visual Preview

Open [`/logo/preview.html`](preview.html) in your browser or run your local dev server and navigate to:
`http://localhost:5173/logo/preview.html`

The interactive preview portal allows you to:
- Switch live between Dark, Light, and Checkerboard backgrounds
- Filter by category (Horizontal, Stacked, Icon Only, Wordmark, Favicons)
- Download any format with a single click
- Copy clean SVG code directly to your clipboard
