import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";

const steps = [
  "Pilih produk yang Anda suka di katalog.",
  "Kirim pesan lewat WhatsApp, sebutkan nama produknya.",
  "Bahas ukuran, harga, dan detail pesanan bersama kami.",
];

export function OrderCta() {
  return (
    <section className="bg-sengon">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <h2 className="font-display text-4xl leading-tight text-kopi sm:text-5xl">Sudah menemukan yang cocok?</h2>
          <p className="mt-5 max-w-md text-lg text-kopi/80">Kirim pesan sekarang, kami bantu dari sana.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(messages.general)} variant="solid">Pesan lewat WhatsApp</Button>
            <Button href="/produk" variant="outline" className="border-kopi/40 text-kopi hover:bg-kopi hover:text-kapas">Lihat katalog</Button>
          </div>
        </div>
        <ol className="space-y-6 lg:col-span-6 lg:pl-10">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-5 border-t border-kopi/25 pt-6">
              <span className="font-display text-3xl text-jati-tua">{i + 1}</span>
              <span className="pt-1 text-lg text-kopi">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
