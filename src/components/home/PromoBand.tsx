import { promotions } from "@/data/catalog";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "../Button";

export function PromoBand() {
  const active = promotions[0];
  return (
    <section className="bg-jati-tua text-krem">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl leading-tight text-kapas sm:text-5xl lg:text-6xl">
            {active ? active.title : "Belum ada promo yang berjalan."}
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pt-3">
          <p className="max-w-md text-lg leading-relaxed">
            {active
              ? active.description
              : "Penawaran terbaru akan dipasang di halaman promosi. Ingin tahu lebih dulu? Tanyakan langsung lewat WhatsApp."}
          </p>
          {active?.period && <p className="mt-3 text-sengon">{active.period}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/promosi" variant="light">Halaman promosi</Button>
            <Button href={whatsappLink(messages.promo)} variant="outline" className="border-krem/50 text-kapas hover:bg-kapas hover:text-kopi">
              Tanya promo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
