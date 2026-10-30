import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/content";
import { revealDelay } from "@/lib/reveal";

export function Categories() {
  return (
    <section id="kategori" className="scroll-mt-32 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-samar">Kategori</p>
            <h2 className="mt-3 font-display text-3xl text-tinta">Mau Cari Mebel untuk Ruangan Apa?</h2>
          </div>
          <Link href="/produk" className="inline-block text-sm text-tinta transition-transform duration-100 hover:underline active:scale-95">
            Lihat semua produk →
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {rooms.map((room, i) => (
            <li key={room.slug} className="reveal" style={revealDelay(i, 5)}>
              <Link href={room.href} className="group block transition-transform duration-100 active:scale-95">
                {/* Foto muncul bila `image` diisi di data/content.ts; selama kosong tampil blok netral. */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-garis">
                  {room.image && (
                    <Image
                      src={room.image}
                      alt={room.title}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg text-tinta">
                  {room.title}{" "}
                  <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </h3>
                <p className="mt-1 text-sm text-samar">{room.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
