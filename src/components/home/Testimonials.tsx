import Link from "next/link";
import { testimonials } from "@/data/content";
import { TestimonialGrid } from "../TestimonialGrid";
import { EmptyState } from "./EmptyState";

export function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-24 bg-abu/70 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="reveal text-xs uppercase tracking-wider text-samar">Testimoni Pelanggan</p>
        <div className="reveal mt-3 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-tinta">Kata Mereka yang Sudah Punya</h2>
          <Link href="/ulasan" className="hidden shrink-0 text-sm text-tinta transition-transform duration-100 hover:underline active:scale-95 md:block">
            Lihat semua ulasan →
          </Link>
        </div>

        <div className="mt-10">
          {testimonials.length > 0 ? (
            <TestimonialGrid items={testimonials} />
          ) : (
            <EmptyState
              title="Testimoni belum tersedia"
              text="Ulasan dari pelanggan akan ditampilkan di sini setelah dikumpulkan."
            />
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/ulasan" className="inline-block text-sm text-tinta transition-transform duration-100 hover:underline active:scale-95">
            Lihat Semua Ulasan →
          </Link>
        </div>
      </div>
    </section>
  );
}
