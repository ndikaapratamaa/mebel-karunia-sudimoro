import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";
import { categories, inCategory, products } from "@/data/catalog";

export const metadata: Metadata = { title: "Produk", description: "Katalog mebel: lemari, kursi, meja, tempat tidur, dan rak." };

function ProductSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="aspect-[4/5] rounded-xl bg-garis" />
      <div className="mt-3 h-4 w-3/4 rounded bg-garis" />
      <div className="mt-2 h-4 w-1/2 rounded bg-garis" />
    </div>
  );
}

type SearchParams = Promise<{ kategori?: string }>;

/** Rangka halaman yang tampil sementara kategori dari alamat (?kategori=) dibaca. */
function ProdukFallback() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-16">
      <h1 className="font-display text-4xl text-tinta">Katalog Produk</h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// searchParams dibaca saat permintaan, jadi harus berada di dalam Suspense agar build (Cache Components) tidak gagal.
async function ProdukContent({ searchParams }: { searchParams: SearchParams }) {
  const { kategori } = await searchParams;
  const active = categories.find((c) => c.slug === kategori) ?? categories[0];
  const items = products.filter((p) => inCategory(p, active.slug));

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-16">
      <header>
        <h1 className="font-display text-4xl text-tinta">Katalog Produk</h1>
        <p className="mt-2 text-samar">Pilih kategori, buka produk yang Anda suka, lalu pesan lewat WhatsApp.</p>
      </header>

      <nav aria-label="Kategori produk" className="mt-8 border-b border-garis">
        <ul className="-mb-px flex gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => {
            const isActive = c.slug === active.slug;
            return (
              <li key={c.slug} className="shrink-0">
                <Link
                  href={`/produk?kategori=${c.slug}`}
                  scroll={false}
                  aria-current={isActive ? "true" : undefined}
                  className={`block whitespace-nowrap border-b-2 pb-4 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "border-tinta text-tinta" : "border-transparent text-samar hover:text-tinta"
                  }`}
                >
                  {c.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section aria-labelledby="kategori-aktif" className="mt-8">
        <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="kategori-aktif" className="font-display text-2xl text-tinta">{active.name}</h2>
          <p className="text-sm text-samar">{active.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.length > 0
            ? items.map((p, i) => <ProductCard key={p.slug} product={p} index={i} categoryLabel={active.name} />)
            : [0, 1, 2, 3].map((i) => <ProductSkeleton key={i} />)}
        </div>
        {items.length === 0 && <p className="mt-6 text-sm text-samar">Produk untuk kategori ini segera hadir.</p>}
      </section>
    </div>
  );
}

export default function ProdukPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<ProdukFallback />}>
      <ProdukContent searchParams={searchParams} />
    </Suspense>
  );
}
