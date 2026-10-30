import type { Metadata } from "next";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Button } from "@/components/Button";
import { PageIntro } from "@/components/PageIntro";
import { articles } from "@/data/content";
import { messages, whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Artikel & Tips",
  description: "Tips memilih dan merawat mebel dari Mebel Karunia Sudimoro.",
};

export default function ArtikelPage() {
  return (
    <>
      <PageIntro title="Artikel & Tips">Tulisan seputar memilih dan merawat mebel.</PageIntro>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        {articles.length > 0 ? (
          <ArticleGrid items={articles} />
        ) : (
          <p className="max-w-md text-lg leading-relaxed text-redup">
            Artikel akan ditampilkan di sini. Ada pertanyaan seputar mebel? Tanyakan langsung lewat WhatsApp.
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
