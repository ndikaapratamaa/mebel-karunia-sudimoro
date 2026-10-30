import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";
import { revealDelay } from "@/lib/reveal";

const steps = [
  "Pilih produk yang Anda suka di katalog.",
  "Kirim pesan lewat WhatsApp, sebutkan nama produknya.",
  "Bahas ukuran, harga, dan detail pesanan bersama kami.",
];

export function WhatsAppCta() {
  return (
    <section id="whatsapp" className="scroll-mt-24 border-t border-tinta/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="reveal lg:col-span-6">
          <h2 className="font-display text-3xl leading-tight text-tinta sm:text-4xl lg:text-5xl">Sudah menemukan yang cocok?</h2>
          <p className="mt-5 max-w-md text-lg text-redup">Kirim pesan sekarang, kami bantu dari sana.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(messages.general)}>Pesan lewat WhatsApp</Button>
          </div>
        </div>
        <ol className="reveal lg:col-span-6 lg:pl-10" style={revealDelay(1)}>
          {steps.map((s, i) => (
            <li key={s} className="flex gap-5 border-t border-tinta/15 py-6">
              <span className="font-display text-3xl text-samar">{i + 1}</span>
              <span className="pt-1 text-lg text-tinta">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
