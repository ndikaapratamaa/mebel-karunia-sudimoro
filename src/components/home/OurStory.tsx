import Image from "next/image";
import { storyImage } from "@/data/content";
import { revealDelay } from "@/lib/reveal";

/* TODO: konfirmasi dengan pemilik usaha sebelum tayang: tahun berdiri (2000), pindah tempat (2012), dan kayu jati solid. */
export function OurStory() {
  return (
    <section id="cerita" className="scroll-mt-32 bg-abu/70 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div className="reveal">
          <p className="text-xs uppercase tracking-wider text-samar">Cerita Kami</p>
          <h2 className="mt-3 font-display text-3xl text-tinta">Tumbuh Sejak Tahun 2000.</h2>
          <p className="mt-4 leading-relaxed text-redup">
            Bermula dari usaha kecil di Sudimoro. Pada tahun 2012, kami memantapkan langkah dengan pindah tempat dan
            berbenah. Sedikit demi sedikit, Karunia Mebel kini tumbuh menjadi pengrajin mebel kayu jati solid yang
            mengutamakan kualitas, presisi, dan kepuasan pelanggan.
          </p>
        </div>

        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-xl bg-garis" style={revealDelay(1)}>
          {storyImage && (
            <Image
              src={storyImage}
              alt="Dua orang duduk di bangku kayu di workshop Karunia Mebel, Sudimoro"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
