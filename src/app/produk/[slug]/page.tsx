import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { business } from "@/config/business";
import { getCategory, getProduct, priceLabel, products } from "@/data/catalog";
import { messages, whatsappLink } from "@/lib/whatsapp";

// Semua slug sudah diketahui lewat generateStaticParams; ini mencegah peringatan "URL data" (badge Issue) di mode dev.
export const instant = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const categoryNames = [product.category, ...(product.alsoIn ?? [])].map((s) => getCategory(s)?.name).filter(Boolean).join(", ");
  const gallery = product.images ?? (product.image ? [product.image] : []);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
      <nav aria-label="Jejak halaman" className="text-sm text-redup">
        <Link href="/produk" className="hover:text-tinta">Produk</Link>
        <span aria-hidden="true"> / </span>
        <Link href={`/produk?kategori=${product.category}`} className="hover:text-tinta">{category?.name}</Link>
      </nav>

      <div className={`mt-8 ${gallery.length > 0 ? "grid items-start gap-10 lg:grid-cols-2 lg:gap-14" : ""}`}>
        {gallery.length > 0 && <ProductGallery images={gallery} alt={product.name} />}
        <div className="max-w-2xl">
          {business.showSampleBadge && gallery.length === 0 && <p className="text-sm text-redup">Contoh produk</p>}
          <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-6 text-2xl font-semibold text-tinta">{priceLabel(product)}</p>
          <p className="mt-6 text-lg leading-relaxed text-redup">{product.description}</p>

          <dl className="mt-8 divide-y divide-tinta/15 border-y border-tinta/15">
            <div className="flex justify-between gap-6 py-4"><dt className="text-redup">Kategori</dt><dd className="text-right font-medium">{categoryNames}</dd></div>
            <div className="flex justify-between gap-6 py-4"><dt className="text-redup">Ukuran, bahan, finishing</dt><dd className="text-right font-medium">Tanyakan lewat WhatsApp</dd></div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(messages.product(product.name))}>Pesan lewat WhatsApp</Button>
            <Button href="/produk" variant="outline">Kembali ke katalog</Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl">Lihat juga</h2>
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
