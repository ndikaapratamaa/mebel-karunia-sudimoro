import Link from "next/link";
import { articles } from "@/data/content";
import { ArticleGrid } from "../ArticleGrid";
import { EmptyState } from "./EmptyState";

export function Articles() {
  return (
    <section id="artikel" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-samar">Artikel &amp; Tips</p>
            <h2 className="mt-3 font-display text-3xl text-tinta">Tips Memilih &amp; Merawat Mebel</h2>
          </div>
          <Link href="/artikel" className="text-sm text-tinta hover:underline">
            Lihat semua artikel →
          </Link>
        </div>

        <div className="mt-10">
          {articles.length > 0 ? (
            <ArticleGrid items={articles} fallbackHref="/artikel" />
          ) : (
            <EmptyState
              title="Artikel sedang disiapkan"
              text="Tulisan seputar memilih, merawat, dan menata mebel akan ditambahkan di sini."
            />
          )}
        </div>
      </div>
    </section>
  );
}
