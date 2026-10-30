import Image from "next/image";
import { business } from "@/config/business";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";
import { SmartLink } from "../SmartLink";
import { revealDelay } from "@/lib/reveal";

/* TODO: pastikan klaim "kayu jati", "kayu solid", "pengrajin lokal", dan "custom presisi" dengan pemilik usaha. */
export function Hero() {
  return (
    <section id="hero" className="scroll-mt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-12 lg:py-24">
        <div className="reveal lg:col-span-6">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-tinta sm:text-6xl lg:text-7xl">
            Mebel Kayu Jati dari {business.place}, Pacitan.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-redup">
            Bikin ruangan lebih hidup dengan mebel kayu solid buatan pengrajin lokal. Bisa custom presisi sesuai ukuran ruangan dan selera keluarga.
          </p>
          <div className="mt-9">
            <Button href="/produk">Lihat Koleksi</Button>
          </div>
          <SmartLink
            href={whatsappLink(messages.custom)}
            className="mt-5 inline-block font-medium text-tinta underline decoration-tinta/30 underline-offset-4 hover:decoration-tinta"
          >
            Punya ukuran khusus? Tanya pengrajin kami →
          </SmartLink>
        </div>

        <figure className="reveal relative lg:col-span-6" style={revealDelay(1)}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_28px_60px_-28px_rgba(28,25,23,0.4)]">
            <Image
              src="/foto-toko.jpg"
              alt={`Toko ${business.name} di ${business.place}, ${business.region}`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-redup lg:absolute lg:left-0 lg:top-full">
            Toko {business.shortName}, {business.place}, {business.region}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
