import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { business } from "@/config/business";
import { isWhatsAppReady, messages, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Kontak", description: `Hubungi ${business.name} untuk bertanya atau memesan.` };

export default function KontakPage() {
  return (
    <>
      <PageIntro title="Kontak dan pemesanan">Pemesanan dilakukan lewat WhatsApp.</PageIntro>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <section id="pesan" className="scroll-mt-28 lg:col-span-6">
          <h2 className="font-display text-3xl sm:text-4xl">Pesan lewat WhatsApp</h2>
          {isWhatsAppReady ? (
            <>
              <p className="mt-4 max-w-md text-lg text-redup">Sebutkan nama produk yang Anda minati, lalu tanyakan ukuran, bahan, dan harganya.</p>
              <div className="mt-8"><Button href={whatsappLink(messages.general)}>Buka WhatsApp</Button></div>
            </>
          ) : (
            <>
              <p className="mt-4 max-w-md text-lg text-redup">Nomor WhatsApp belum tersedia di website ini. Silakan lihat katalog dulu, informasi kontak akan segera ditambahkan.</p>
              <div className="mt-8"><Button href="/produk">Lihat katalog</Button></div>
            </>
          )}
        </section>

        <section className="lg:col-span-5 lg:col-start-8">
          <h2 className="font-display text-3xl">Informasi usaha</h2>
          <dl className="mt-6 divide-y divide-tinta/15 border-y border-tinta/15">
            <div className="py-4"><dt className="text-redup">Usaha</dt><dd className="mt-1 font-medium">{business.name}</dd></div>
            <div className="py-4"><dt className="text-redup">Alamat</dt><dd className="mt-1 font-medium">{business.address ?? "Akan ditambahkan"}</dd></div>
            <div className="py-4"><dt className="text-redup">Jam buka</dt><dd className="mt-1 font-medium">{business.openingHours ?? "Akan ditambahkan"}</dd></div>
          </dl>
        </section>
      </div>
    </>
  );
}
