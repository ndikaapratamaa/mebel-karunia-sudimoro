import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { business } from "@/config/business";

export const metadata: Metadata = { title: "Tentang", description: `Mengenal ${business.name}.` };

export default function TentangPage() {
  return (
    <>
      <PageIntro title={`Tentang ${business.shortName}`}>
        {business.name} adalah usaha mebel dari {business.place}.
      </PageIntro>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div>
          {/* TODO: isi dengan sejarah usaha, proses pengerjaan, dan bahan yang dipakai setelah dikonfirmasi pemilik. */}
          <p className="max-w-xl text-lg leading-relaxed text-redup">
            Halaman ini disiapkan untuk cerita usaha: sejak kapan berdiri, siapa yang mengerjakan, bahan apa yang dipakai, dan bagaimana pesanan dikerjakan. Informasi tersebut akan ditambahkan setelah dikonfirmasi pemilik usaha.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-redup">
            Sementara itu, Anda bisa melihat katalog dan bertanya langsung lewat WhatsApp.
          </p>
          <div className="mt-8"><Button href="/produk">Lihat katalog</Button></div>
        </div>
      </div>
    </>
  );
}
