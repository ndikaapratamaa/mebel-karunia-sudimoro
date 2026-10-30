import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { promotions } from "@/data/catalog";
import { messages, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = { title: "Promosi", description: "Penawaran dan promo terbaru dari Mebel Karunia Sudimoro." };

export default function PromosiPage() {
  return (
    <>
      <PageIntro title="Promosi">Penawaran yang sedang berjalan akan ditampilkan di sini.</PageIntro>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        {promotions.length === 0 ? (
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 className="font-display text-4xl leading-tight lg:col-span-6">Belum ada promo yang berjalan.</h2>
            <div className="lg:col-span-6">
              <p className="max-w-md text-lg leading-relaxed text-redup">
                Setiap ada penawaran baru, informasinya dipasang di halaman ini. Ingin tahu lebih dulu, tanyakan langsung lewat WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={whatsappLink(messages.promo)}>Tanya promo lewat WhatsApp</Button>
                <Button href="/produk" variant="outline">Lihat katalog</Button>
              </div>
            </div>
          </div>
        ) : (
          <ul className="divide-y divide-tinta/15 border-y border-tinta/15">
            {promotions.map((p) => (
              <li key={p.slug} className="grid gap-4 py-8 lg:grid-cols-12">
                <h2 className="font-display text-3xl lg:col-span-5">{p.title}</h2>
                <div className="lg:col-span-7">
                  <p className="text-lg leading-relaxed text-redup">{p.description}</p>
                  {p.period && <p className="mt-2 font-medium text-tinta">{p.period}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
        {promotions.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={whatsappLink(messages.promo)}>Tanya promo lewat WhatsApp</Button>
            <Button href="/produk" variant="outline">Lihat katalog</Button>
          </div>
        )}
      </div>
    </>
  );
}
