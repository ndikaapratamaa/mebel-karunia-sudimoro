import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { testimonials } from "@/data/content";
import { messages, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ulasan Pelanggan",
  description: "Ulasan pelanggan Mebel Karunia Sudimoro.",
};

export default function UlasanPage() {
  return (
    <>
      <PageIntro title="Ulasan Pelanggan">Cerita dari mereka yang sudah memesan mebel di sini.</PageIntro>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        {testimonials.length > 0 ? (
          <TestimonialGrid items={testimonials} />
        ) : (
          <p className="max-w-md text-lg leading-relaxed text-redup">
            Ulasan pelanggan akan ditampilkan di sini setelah dikumpulkan.
          </p>
        )}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={whatsappLink(messages.general)}>Tanya lewat WhatsApp</Button>
          <Button href="/produk" variant="outline">Lihat katalog</Button>
        </div>
      </div>
    </>
  );
}
