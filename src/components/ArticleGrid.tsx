import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { business } from "@/config/business";
import type { Article } from "@/data/content";

/** `fallbackHref`: tujuan kartu yang tidak punya `href`. Kosong = kartu tampil tanpa tautan. */
export function ArticleGrid({ items, fallbackHref }: { items: Article[]; fallbackHref?: string }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((a) => {
        const href = a.href ?? fallbackHref;
        const body: ReactNode = (
          <>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-garis">
              {a.image && (
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              )}
              {business.showSampleBadge && (
                <span className="absolute left-3 top-3 rounded bg-putih/90 px-2 py-1 text-[10px] font-semibold text-tinta">
                  Contoh artikel
                </span>
              )}
            </div>
            {a.tag && <p className="mt-4 text-xs uppercase text-samar">{a.tag}</p>}
            <h3 className="mt-1 font-display text-lg leading-snug text-tinta">{a.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-redup">{a.excerpt}</p>
            {href && (
              <span className="mt-3 inline-block text-sm font-semibold text-tinta transition-colors group-hover:text-redup">
                Baca selengkapnya →
              </span>
            )}
          </>
        );
        return (
          <li key={a.slug}>
            {href ? (
              <Link href={href} className="group block">{body}</Link>
            ) : (
              <div>{body}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
