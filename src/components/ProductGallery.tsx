"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Jeda antar slide otomatis (ms). Naikkan angkanya bila ingin lebih lambat. */
const SLIDE_INTERVAL = 5000;

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  // Slide otomatis hanya bila fotonya lebih dari satu. Timer dimulai ulang tiap `current` berubah,
  // jadi setelah pengunjung klik thumbnail, slide berikutnya baru jalan setelah jeda penuh.
  // Berhenti saat kursor/fokus di galeri atau pengunjung meminta reduced motion.
  useEffect(() => {
    if (total < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setCurrent((c) => (c + 1) % total), SLIDE_INTERVAL);
    return () => window.clearTimeout(id);
  }, [current, paused, total]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-abu">
        <Image
          key={images[current]}
          src={images[current]}
          alt={`${alt}, foto ${current + 1} dari ${images.length}`}
          fill
          priority={current === 0}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="slide-fade object-contain"
        />
      </div>

      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Lihat foto ${i + 1}`}
                aria-current={i === current}
                className={`relative block aspect-square w-full overflow-hidden rounded-lg bg-abu transition-all duration-300 ease-in-out active:scale-95 ${
                  i === current ? "ring-2 ring-tinta ring-offset-2 ring-offset-putih" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="120px" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
