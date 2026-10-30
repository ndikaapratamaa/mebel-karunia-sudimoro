# Mebel Karunia Sudimoro

Website katalog dan pemesanan via WhatsApp. Next.js (App Router), TypeScript, Tailwind CSS.
Status: **Fase 1** (fondasi dan beranda).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # cek build produksi
npm run lint
```

## Yang perlu diisi (semua di satu tempat)

| Apa | Di mana |
| --- | --- |
| Nomor WhatsApp, alamat, jam buka, media sosial | `src/config/business.ts` |
| Produk, kategori, promosi | `src/data/catalog.ts` |
| Foto asli | taruh di `public/produk/`, isi `image: "/produk/nama.jpg"` pada produk |
| Keunggulan usaha | `src/components/home/Strengths.tsx` |
| Cerita usaha | `src/app/tentang/page.tsx` |

Selama `whatsappNumber` kosong, semua tombol WhatsApp mengarah ke `/kontak`. Begitu diisi, tombol langsung membuka `wa.me` dengan pesan otomatis. Matikan label "Contoh produk" lewat `showSampleBadge: false`.

## Rute

`/`, `/produk`, `/produk/[slug]`, `/promosi`, `/tentang`, `/kontak`

## Catatan

- Next.js di project ini memakai `cacheComponents`. Hindari `new Date()` atau data dinamis di komponen server tanpa `"use cache"` / Suspense.
- Font di-host sendiri lewat `@fontsource` (Young Serif dan Hanken Grotesk).
