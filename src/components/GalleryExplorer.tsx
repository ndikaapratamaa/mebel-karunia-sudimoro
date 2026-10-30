"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { galeriKategori, type GaleriItem, type GaleriKategori } from "@/data/galeri";

type Filter = "semua" | GaleriKategori;

const PlayIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14Z" />
  </svg>
);

export function GalleryExplorer({ items, showFilter = true }: { items: GaleriItem[]; showFilter?: boolean }) {
  const [filter, setFilter] = useState<Filter>("semua");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const visible = useMemo(() => (filter === "semua" ? items : items.filter((g) => g.category === filter)), [items, filter]);
  const counts = useMemo(() => {
    const c: Record<string, number> = { semua: items.length };
    for (const g of items) c[g.category] = (c[g.category] ?? 0) + 1;
    return c;
  }, [items]);

  const isOpen = openIndex !== null;
  const current = openIndex !== null ? visible[openIndex] : undefined;

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (dir: 1 | -1) => setOpenIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  // Kunci scroll halaman, fokus ke tombol tutup, dan kontrol keyboard saat lightbox terbuka.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, video"));
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  return (
    <div>
      {showFilter && (
      <nav aria-label="Kategori galeri" className="border-b border-garis">
        <ul className="-mb-px flex gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {([{ slug: "semua", name: "Semua" }, ...galeriKategori] as { slug: Filter; name: string }[]).map((c) => {
            const active = c.slug === filter;
            return (
              <li key={c.slug} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setFilter(c.slug)}
                  aria-pressed={active}
                  className={`flex items-baseline gap-1.5 whitespace-nowrap border-b-2 pb-4 text-sm font-medium transition-all duration-100 active:scale-95 ${
                    active ? "border-tinta text-tinta" : "border-transparent text-samar hover:text-tinta"
                  }`}
                >
                  {c.name}
                  <span className="text-xs font-normal text-samar">{counts[c.slug] ?? 0}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      )}

      <ul key={filter} className={`${showFilter ? "mt-8" : "mt-6"} columns-1 gap-4 sm:columns-2 lg:columns-3`}>
        {visible.map((g, i) => (
          <li key={g.slug} className="slide-fade mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpenIndex(i);
              }}
              aria-label={`Buka ${g.video ? "video" : "foto"}: ${g.title}`}
              className="group block w-full text-left transition-transform duration-100 active:scale-[0.98]"
            >
              <div className="relative overflow-hidden rounded-xl bg-garis">
                <Image
                  src={g.image}
                  alt={g.title}
                  width={g.w}
                  height={g.h}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                {g.video && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-putih/90 text-tinta shadow-sm">
                      <PlayIcon />
                    </span>
                  </span>
                )}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="block text-sm font-medium text-white">{g.title}</span>
                </span>
              </div>
              <p className="mt-2 text-sm text-tinta">{g.title}</p>
              {showFilter && (
                <p className="mt-0.5 text-xs uppercase tracking-wider text-samar">
                  {galeriKategori.find((k) => k.slug === g.category)?.name}
                  {g.video ? " · Video" : ""}
                </p>
              )}
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="slide-fade fixed inset-0 z-[60] flex flex-col bg-black/90"
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 text-white" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm text-white/70" aria-live="polite">
              {openIndex! + 1} / {visible.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl transition-all duration-100 hover:bg-white/20 active:scale-95"
            >
              ×
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Sebelumnya"
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-all duration-100 hover:bg-white/20 active:scale-95 sm:left-4"
            >
              ‹
            </button>

            <div key={current.slug} className="slide-fade flex max-h-full max-w-full items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {current.video ? (
                <video
                  src={current.video}
                  poster={current.image}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="max-h-[75vh] max-w-full rounded-lg"
                />
              ) : (
                <Image
                  src={current.image}
                  alt={current.title}
                  width={current.w}
                  height={current.h}
                  sizes="100vw"
                  priority
                  className="h-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
                />
              )}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Berikutnya"
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-all duration-100 hover:bg-white/20 active:scale-95 sm:right-4"
            >
              ›
            </button>
          </div>

          <div className="px-5 py-5 text-center text-white" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-lg">{current.title}</p>
            <p className="mx-auto mt-1 max-w-xl text-sm text-white/70">{current.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
