import Image from "next/image";
import Link from "next/link";
import { galeri, galeriKategori, galeriUnggulan } from "@/data/galeri";
import { revealDelay } from "@/lib/reveal";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";
import { EmptyState } from "./EmptyState";

export function Portfolio() {
  const unggulan = galeriUnggulan();
  const [utama, ...lainnya] = unggulan;
  const label = (slug: string) => galeriKategori.find((k) => k.slug === slug)?.name;

  const tile = (g: (typeof galeri)[number], big = false) => (
    <Link
      href="/galeri"
      aria-label={`${g.title}, buka galeri lengkap`}
      className="group relative block h-full w-full overflow-hidden rounded-xl bg-garis transition-transform duration-100 active:scale-[0.98]"
    >
      <Image
        src={g.image}
        alt={g.title}
        fill
        sizes={big ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-16 text-white sm:p-5 sm:pt-20">
        <span className="block text-[10px] uppercase tracking-wider text-white/75">{label(g.category)}</span>
        <span className={`mt-1 block font-display leading-snug ${big ? "text-xl sm:text-2xl" : "text-sm sm:text-base"}`}>{g.title}</span>
      </span>
    </Link>
  );

  return (
    <section id="galeri" className="scroll-mt-32 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider text-samar">Galeri Proyek</p>
            <h2 className="mt-3 font-display text-3xl text-tinta">Dari Workshop ke Rumah Pelanggan</h2>
            <p className="mt-2 text-sm text-samar">
              Intip proses pengerjaan di workshop, pemasangan di lokasi, sampai pengiriman ke pelanggan.
            </p>
          </div>
          <Link
            href="/galeri"
            className="hidden items-center gap-1 text-sm font-medium text-tinta transition-transform duration-100 hover:underline active:scale-95 sm:inline-flex"
          >
            Lihat semua ({galeri.length} foto &amp; video) →
          </Link>
        </div>

        <div className="mt-12">
          {utama ? (
            <>
              <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                <li className="reveal col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto lg:min-h-[28rem]">{tile(utama, true)}</li>
                {lainnya.slice(0, 4).map((g, i) => (
                  <li key={g.slug} className="reveal aspect-[4/3]" style={revealDelay(i + 1, 4)}>
                    {tile(g)}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <Button href="/galeri" variant="outline">
                  Lihat semua galeri →
                </Button>
              </div>
            </>
          ) : (
            <EmptyState
              title="Galeri sedang disiapkan"
              text="Foto hasil pekerjaan akan ditampilkan di sini."
              action={<Button href={whatsappLink(messages.portfolio)} variant="outline">Tanya contoh pekerjaan</Button>}
            />
          )}
        </div>
      </div>
    </section>
  );
}
