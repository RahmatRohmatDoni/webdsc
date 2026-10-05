# PROMPT: Redesign Website Developer Student Club (DSC)

## CONTEXT

Kamu akan membangun ulang website **Developer Student Club (DSC)** — sebuah komunitas mahasiswa teknologi di kampus. Website ini sudah ada project scaffolding-nya di Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript. Kamu hanya perlu menulis ulang semua komponen dan halaman.

Logo DSC terlampir — berbentuk geometris angular dari 3 shape yang overlap, menggunakan warna **merah (#D42B2B)**, **oranye (#E87A2F)**, dan **kuning (#F4B740)**. Logo ini angular, sharp, dan bold — bukan rounded atau playful.

---

## DESIGN DIRECTION — WAJIB DIIKUTI

### Referensi Visual (pelajari layout, spacing, dan feel-nya)
- **Linear.app** — clean dark UI, purposeful animations, content-first
- **Vercel.com** — bold typography, grid-based, futuristic feel
- **Raycast.com** — smooth transitions, polished dark mode
- **Stripe.com** — editorial typography, confident use of color

### Anti AI-Slop Rules — DILARANG KERAS:
1. **JANGAN** pakai emoji sebagai icon (🌐📱🎨 dll). Gunakan inline SVG icons atau jangan pakai icon sama sekali.
2. **JANGAN** buat stats bar "120+ / 24 / 6 / 3" — angka random filler yang semua AI buat.
3. **JANGAN** pakai pattern section yang repetitif (label merah uppercase → heading → desc → grid cards — berulang identik di setiap section).
4. **JANGAN** pakai gradient text `linear-gradient` pada heading — ini ciri khas AI slop tahun 2024-2025.
5. **JANGAN** pakai radial-gradient glow blobs (`.glow-red`, `.glow-orange`) — ini decorative filler.
6. **JANGAN** pakai pill badges berlebihan (rounded-full colored pills di mana-mana).
7. **JANGAN** pakai "Siap Berkembang Bersama?" atau CTA generic serupa.
8. **JANGAN** buat card yang semuanya identik — ukuran sama, padding sama, shadow sama. Variasikan.
9. **JANGAN** pakai `hover: translateY(-2px) shadow` di semua card — ini terlalu umum.
10. **JANGAN** center-align heading + subtext di section (kayak SaaS landing page). Align left.

### YANG HARUS DILAKUKAN:
1. **Typography sebagai design element utama** — heading besar (text-5xl - text-7xl), mix font weight (bold + light), let text breathe.
2. **Asymmetric layouts** — bukan semua grid 3 kolom. Campur 7:5, full-width, 8:4, single column.
3. **Warna brand sebagai accent, bukan dekorasi** — merah hanya untuk CTA dan active state, oranye untuk secondary highlights, kuning untuk subtle details. 90% halaman netral.
4. **Strong visual hierarchy** — setiap section harus punya rhythm berbeda. Jangan copy-paste structure.
5. **Whitespace yang berani** — jangan takut area kosong. Padding section besar (py-20, py-32).
6. **Horizontal rules / dividers** sebagai design element — bukan cuma pemisah.
7. **Dark mode harus proper** — bukan cuma invert warna. Dark mode harus punya personality sendiri. Gunakan warm dark tones (#0C0A09, #1C1917) bukan pure black.
8. **Tiap halaman harus punya karakter sendiri** — homepage beda rhythm dari members, events beda dari news.

---

## TECH STACK (sudah terinstall, jangan install library baru)
- Next.js 16.3.8 (App Router) — `LayoutProps<"/">`, `PageProps<"/events/[id]">`, `await params`, `preload` bukan `priority` di Image
- Tailwind CSS v4 — pakai `@import "tailwindcss"` dan `@theme inline`, BUKAN `tailwind.config.js`
- TypeScript
- React 19
- Font: Inter (sudah di-setup via `next/font/google`)

### Breaking Changes Next.js 16 yang harus diikuti:
- `params` di dynamic routes HARUS di-`await`: `const { id } = await params;`
- Image component pakai `preload` bukan `priority`
- Layout types: `LayoutProps<"/">` (global type, no import)
- Page types: `PageProps<"/events/[id]">` (global type, no import)

---

## PROJECT STRUCTURE
```
dsc-website/
├── src/
│   ├── app/
│   │   ├── globals.css          ← design system (tokens, dark mode, utilities)
│   │   ├── layout.tsx           ← root layout (ThemeProvider, Navbar, Footer)
│   │   └── (public)/
│   │       ├── page.tsx         ← HOMEPAGE
│   │       ├── members/page.tsx
│   │       ├── events/page.tsx
│   │       ├── events/[id]/page.tsx
│   │       ├── news/page.tsx
│   │       ├── news/[slug]/page.tsx
│   │       ├── leaderboard/page.tsx
│   │       └── feedback/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx     ← sudah ada, jangan ubah
│   │   └── ThemeToggle.tsx      ← sudah ada, jangan ubah
│   └── data/                    ← mock data, jangan ubah isinya
│       ├── members.ts
│       ├── events.ts
│       ├── news.ts
│       └── leaderboard.ts
└── public/
    └── logo-dsc.png
```

---

## DARK MODE IMPLEMENTATION
- Pakai `.dark` class di `<html>` (sudah di-handle ThemeProvider + inline script anti-FOUC)
- CSS variables di `:root` dan `.dark` override
- Navbar HARUS pakai hardcoded hex dengan explicit `dark:` prefix (bukan token) — karena token cascade bisa bikin text invisible
- Section yang intentionally dark (misal hero atau event strip) pakai hardcoded `bg-[#0C0A09]` agar tidak flip di dark mode

---

## ANIMASI — INSTRUKSI DETAIL

### Prinsip:
- **Purposeful** — animasi hanya pada element yang perlu menarik perhatian
- **Subtle** — distance kecil (8-16px translate), duration 600-1000ms
- **Performant** — pakai CSS animations/transitions, BUKAN library pihak ketiga (jangan AOS, Framer Motion, dll)
- **Respect `prefers-reduced-motion`**

### Implementasi yang diinginkan:
1. **Page entrance** — saat halaman pertama load, heading dan subtext fade-in dari opacity 0 ke 1 dengan sedikit translateY(8px). Stagger delay antar element (heading 0ms, subtext 150ms, CTA 300ms). Duration ~800ms. Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo ease-out).

2. **Scroll reveal** — buat komponen `<Reveal>` client component yang pakai IntersectionObserver. Saat element masuk viewport, fade in + translateY(12px) ke posisi normal. Duration 700ms. Once only. Threshold 0.1. **JANGAN** apply ke semua element — hanya section headings dan card groups.

3. **Hover micro-interactions** — cards: subtle border-color change atau background shift. Links: underline slide-in dari kiri. Buttons: scale(0.98) on active.

4. **Navbar** — saat scroll down, navbar background berubah dari transparent ke blur (backdrop-blur-xl). Pakai scroll event listener atau IntersectionObserver pada hero section.

5. **Stagger pada card grids** — saat card group muncul di viewport, setiap card delay 60-80ms. Buat `<StaggerGroup>` component.

### CSS easing yang dipakai:
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## MOCK DATA (sudah ada, import dari `@/data/`)

### Members (12 orang):
- 4 Core Team: Ketua, Wakil, Sekretaris, Bendahara
- 6 Head of Division: Web, Mobile, UI/UX, Data Science, Cloud, Game Dev
- 2 Staff
- Fields: id, name, role, division, photo, socials {instagram?, github?, linkedin?}, bio

### Events (6 events):
- 4 completed, 1 ongoing, 1 upcoming
- Fields: id, title, date, time, location, description, image, status, attendees, maxAttendees

### News (5 articles):
- Categories: Announcement, Recap, Tutorial, Achievement
- Fields: id, title, slug, excerpt, content, author, date, image, category

### Leaderboard (10 entries):
- Fields: rank, memberId, name, points, eventsAttended, contributions

---

## HALAMAN YANG HARUS DIBUAT

### 1. Homepage (`(public)/page.tsx`)
Layout ideas (BUKAN instruksi rigid, improvisasi):
- Hero: Typography besar, tagline bold, 2 CTA buttons. Sidebar kanan bisa logo besar atau info strip. Background subtle — bukan gradient blob.
- Section tentang DSC — teks saja, editorial 2-column, tanpa heading "Apa itu DSC?"
- Divisi — bukan 6 card identik. Bisa horizontal list, bisa table-like, bisa accordion. Yang penting informatif bukan decorative.
- Events preview — 3 upcoming/latest events, tampilkan tanggal + title + location. Dark background section.
- News preview — 1 featured besar + 2-3 list kecil.
- CTA join/feedback — simple, 1-2 baris + button.

### 2. Members (`(public)/members/page.tsx`)
- Core team lebih prominent (larger cards, more detail)
- Division heads dalam layout berbeda dari core team
- Staff bisa simple list

### 3. Events (`(public)/events/page.tsx`)
- Upcoming events lebih prominent
- Completed events dalam list/table format

### 4. Event Detail (`(public)/events/[id]/page.tsx`)
- Dynamic route, `await params`
- Layout: image placeholder, title, metadata (date, time, location), description, attendee count bar

### 5. News (`(public)/news/page.tsx`)
- Featured article besar
- Rest in grid atau list

### 6. News Detail (`(public)/news/[slug]/page.tsx`)
- Dynamic route, `await params`
- Article layout: max-width prose, image, content, author, date
- Related articles dari kategori sama

### 7. Leaderboard (`(public)/leaderboard/page.tsx`)
- Top 3 prominent
- Full ranking table/list

### 8. Feedback (`(public)/feedback/page.tsx`)
- Client component (`"use client"`)
- Form: nama, email, jenis (select), pesan (textarea)
- Submitted state

---

## FILES YANG HARUS DITULIS ULANG
1. `src/app/globals.css` — design system lengkap
2. `src/app/layout.tsx` — root layout
3. `src/components/Navbar.tsx` — responsive navbar
4. `src/components/Footer.tsx` — footer
5. Semua 8 halaman di `(public)/`
6. Komponen animasi baru jika diperlukan (Reveal, StaggerGroup)

## FILES YANG TIDAK BOLEH DIUBAH
- `src/components/ThemeProvider.tsx`
- `src/components/ThemeToggle.tsx`
- Semua file di `src/data/`
- `public/logo-dsc.png`
- `package.json`

---

## BAHASA
- UI content dalam **Bahasa Indonesia**
- Mock data sudah dalam Bahasa Indonesia, jangan ubah
- Nama-nama Indonesia di mock data

---

## OUTPUT
Tulis SEMUA file yang perlu ditulis ulang, lengkap, tidak ada yang di-skip atau "// rest stays the same". Setiap file harus complete dan production-ready.
