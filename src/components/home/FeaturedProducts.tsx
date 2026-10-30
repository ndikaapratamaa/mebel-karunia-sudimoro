import Link from "next/link";
import { products } from "@/data/catalog";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";
import { ProductCard } from "../ProductCard";
import { EmptyState } from "./EmptyState";

export function FeaturedProducts() {
  // Produk unggulan lebih dulu, lalu produk lain, maksimal 8.
  const items = [...products].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).slice(0, 8);
  return (
    <section id="produk" className="scroll-mt-32 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-samar">Produk unggulan</p>
            <h2 className="mt-3 font-display text-3xl text-tinta">Beberapa Pilihan untuk Memulai</h2>
            <p className="mt-2 text-sm text-samar">Ukuran, bahan, dan harga bisa ditanyakan langsung sebelum Anda memesan.</p>
          </div>
          <Link href="/produk" className="inline-block text-sm text-tinta transition-transform duration-100 hover:underline active:scale-95">
            Lihat seluruh katalog →
          </Link>
        </div>

        <div className="mt-12">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Produk unggulan sedang disiapkan"
              text="Pilihan produk akan ditampilkan di sini. Sementara itu, tanyakan produk yang Anda cari lewat WhatsApp."
              action={<Button href={whatsappLink(messages.general)}>Tanya lewat WhatsApp</Button>}
            />
          )}
        </div>
      </div>
    </section>
  );
}
