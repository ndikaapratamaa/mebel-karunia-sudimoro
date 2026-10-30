import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";
import { getCategory, priceLabel, type Product } from "@/data/catalog";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { SmartLink } from "./SmartLink";
import { revealDelay } from "@/lib/reveal";

/** `categoryLabel`: nama kategori yang ditampilkan di kartu (mis. tab yang sedang dibuka). Kosong = kategori utama produk. */
export function ProductCard({ product, index = 0, categoryLabel }: { product: Product; index?: number; categoryLabel?: string }) {
  const label = product.material ?? categoryLabel ?? getCategory(product.category)?.name;
  return (
    <article className="reveal flex flex-col" style={revealDelay(index)}>
      <Link href={`/produk/${product.slug}`} className="group block transition-transform duration-100 active:scale-95">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-abu">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {business.showSampleBadge && !product.image && (
            <span className="absolute left-3 top-3 rounded bg-putih/90 px-2 py-1 text-[10px] font-semibold text-tinta">
              Contoh produk
            </span>
          )}
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-wide text-samar">{label}</p>
        <h3 className="mt-1 font-display text-lg leading-tight text-tinta">{product.name}</h3>
        <p className="mt-1 text-sm font-semibold text-tinta">
          {priceLabel(product)}
        </p>
      </Link>
      <div className="mt-auto pt-3">
        <SmartLink
          href={whatsappLink(messages.product(product.name))}
          className="inline-block text-sm font-medium text-redup transition-all duration-100 hover:translate-x-1 active:scale-95"
        >
          Tanya via WA →
        </SmartLink>
      </div>
    </article>
  );
}
