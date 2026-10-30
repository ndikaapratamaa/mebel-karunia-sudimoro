import Image from "next/image";
import { business } from "@/config/business";
import { customServiceImage } from "@/data/content";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";

/*
 * TODO: konfirmasi dengan pemilik sebelum tayang: workshop di Sudimoro, pengrajin ahli,
 * estimasi harga transparan, pengiriman sampai rumah, pemasangan, dan konsultasi desain gratis.
 */
const steps = [
  { title: "Diskusi & Ukur Ruangan", text: "Kirim ukuran dan referensi desain via WhatsApp." },
  { title: "Pilih Material & Biaya", text: "Tentukan jenis kayu dan dapatkan estimasi harga transparan." },
  { title: "Produksi & Pengiriman", text: "Dibuat presisi dan dikirim aman sampai ke rumah Anda." },
];

export function CustomService() {
  return (
    <section id="custom" className="scroll-mt-24 bg-abu/70 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl bg-garis">
          {customServiceImage && (
            <Image
              src={customServiceImage}
              alt={`Workshop ${business.place}, Pacitan`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
          <span className="absolute bottom-4 left-4 rounded-full bg-putih/90 px-4 py-2 text-xs text-tinta backdrop-blur-sm">
            Workshop {business.place}, Pacitan
          </span>
        </div>

        <div className="reveal">
          <p className="text-xs uppercase tracking-wider text-samar">Layanan custom</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-tinta lg:text-4xl">
            Bentuk Ruangan Unik? Kami Bikin Mebel yang Pas.
          </h2>
          <p className="mt-4 text-redup">
            Dibuat langsung oleh pengrajin ahli. Mulai dari sketsa hingga terpasang di rumah Anda.
          </p>

          <ol className="mt-10">
            {steps.map((s, i) => (
              <li key={s.title} className="mb-6 flex gap-4">
                <span className="font-display text-3xl text-samar/70">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-tinta">{s.title}</h3>
                  <p className="mt-1 text-sm text-redup">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6">
            <Button href={whatsappLink(messages.custom)}>Konsultasi Desain (Gratis)</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
