import Image from "next/image";
import { products, promotions } from "@/data/catalog";
import { revealDelay } from "@/lib/reveal";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { SmartLink } from "../SmartLink";

/* TODO: pastikan syarat "bayar 3x dalam 3 bulan, tanpa bunga" dengan pemilik usaha. */
/** Banner promo di beranda. Hilang bila `promotions` kosong. */
export function Promo() {
  if (promotions.length === 0) return null;
  const featured = products.find((p) => p.slug === "kursi-tamu-sudut-L-busa") ?? products.find((p) => p.image);

  return (
    <section id="promo" className="relative scroll-mt-32 overflow-hidden bg-tinta text-white">
      {/* Teks dekoratif sangat samar di belakang konten */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[9rem] leading-none text-white/5 sm:text-[14rem] lg:-bottom-16 lg:text-[26rem]"
      >
        PROMO
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-24">
        <div className="reveal">
          <span className="promo-glow inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Promo Akhir Tahun
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">Bayar 3x Tanpa Bunga.</h2>
          <p className="mt-4 max-w-md leading-relaxed text-gray-300">
            Mewujudkan rumah impian jadi lebih ringan. Nikmati kemudahan pembayaran 3x dalam 3 bulan untuk semua koleksi mebel pilihan.
          </p>
          <div className="mt-8">
            <SmartLink
              href={whatsappLink(messages.promoClaim)}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-black transition-all duration-100 ease-in-out hover:scale-[1.03] hover:bg-gray-200 active:scale-95"
            >
              Klaim Promo via WhatsApp
            </SmartLink>
          </div>
        </div>

        <div className="reveal" style={revealDelay(1)}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-700">
            {featured?.image && (
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
