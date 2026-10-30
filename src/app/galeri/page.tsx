import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { GalleryExplorer } from "@/components/GalleryExplorer";
import { PageIntro } from "@/components/PageIntro";
import { galeri, galeriPemilik, galeriTim } from "@/data/galeri";
import { messages, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Galeri Proyek",
  description: "Foto dan video proses pengerjaan, pemasangan, dan pengiriman dari Mebel Karunia Sudimoro.",
};

export default function GaleriPage() {
  return (
    <>
      <PageIntro title="Galeri Proyek">
        Proses pengerjaan di workshop, pemasangan di lokasi, dan pengiriman ke pelanggan. Pilih kategori, lalu ketuk foto untuk melihatnya lebih besar.
      </PageIntro>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <GalleryExplorer items={galeri} />

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-garis pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-redup">Ingin melihat contoh lain atau punya rencana proyek sendiri? Tanyakan langsung lewat WhatsApp.</p>
          <div className="flex flex-wrap gap-3">
            <Button href={whatsappLink(messages.portfolio)}>Tanya contoh pekerjaan</Button>
            <Button href={whatsappLink(messages.custom)} variant="outline">Mebel custom</Button>
          </div>
        </div>
      </div>

      <section aria-labelledby="di-balik-karunia" className="border-t border-garis bg-abu">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-xs uppercase tracking-wider text-samar">Di Balik Karunia Mebel</p>
          <h2 id="di-balik-karunia" className="mt-3 font-display text-3xl text-tinta">Kenali Pemilik dan Tim Kami</h2>
          <p className="mt-2 max-w-xl text-sm text-samar">Orang-orang di balik setiap mebel yang kami buat, dan kegiatan bersama yang pernah kami jalani.</p>

          <h3 className="mt-12 font-display text-xl text-tinta">Pemilik</h3>
          <GalleryExplorer items={galeriPemilik} showFilter={false} />

          <h3 className="mt-14 font-display text-xl text-tinta">Tim dan Kegiatan</h3>
          <GalleryExplorer items={galeriTim} showFilter={false} />
        </div>
      </section>
    </>
  );
}
