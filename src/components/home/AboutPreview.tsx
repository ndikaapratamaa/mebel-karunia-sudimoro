import { business } from "@/config/business";
import { Button } from "../Button";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">Usaha mebel dari {business.place}.</h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-batang">
        {business.name} menyediakan mebel untuk rumah. Cerita usaha, proses pengerjaan, dan bahan yang digunakan akan ditambahkan di halaman Tentang.
      </p>
      <div className="mt-8">
      
        <Button href="/tentang" variant="outline">Kenali usaha kami</Button>
      </div>
    </section>
  );
}
