import Image from "next/image";
import type { Testimonial } from "@/data/content";
import { revealDelay } from "@/lib/reveal";

export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((t, i) => (
        <li key={i} className="reveal" style={revealDelay(i, 3)}>
          {t.text ? (
            <figure className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
              {t.rating && (
                <p role="img" aria-label={`Penilaian ${t.rating} dari 5`} className="text-sm tracking-wide text-tinta">
                  {"★".repeat(t.rating)}
                </p>
              )}
              <blockquote className={`text-sm leading-relaxed text-redup ${t.rating ? "mt-4" : ""}`}>{t.text}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                {t.photo && (
                  <Image src={t.photo} alt="" width={40} height={40} className="h-10 w-10 shrink-0 rounded object-cover" />
                )}
                <div>
                  <p className="text-sm font-bold text-tinta">{t.name}</p>
                  {t.place && <p className="text-xs text-samar">{t.place}</p>}
                </div>
              </figcaption>
            </figure>
          ) : (
            /* Kerangka kosong: bintang abu-abu, garis pengganti teks, kotak foto, dan dua garis nama. */
            <div aria-hidden="true" className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm tracking-wide text-tinta/20">★★★★★</p>
              <div className="mt-4">
                <div className="mb-2 h-2 w-full rounded bg-garis" />
                <div className="mb-2 h-2 w-full rounded bg-garis" />
                <div className="h-2 w-3/4 rounded bg-garis" />
              </div>
              <div className="mt-auto flex items-center gap-3 pt-6">
                <div className="h-10 w-10 shrink-0 rounded bg-garis" />
                <div>
                  <div className="mb-2 h-2 w-24 rounded bg-garis" />
                  <div className="h-2 w-32 rounded bg-garis" />
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
