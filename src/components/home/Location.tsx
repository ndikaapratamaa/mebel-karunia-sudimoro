import { business } from "@/config/business";
import { Button } from "../Button";
import { revealDelay } from "@/lib/reveal";

export function Location() {
  const mapsHref =
    business.mapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name}, ${business.address ?? business.region}`)}`;

  return (
    <section id="lokasi" className="scroll-mt-32 bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div className="reveal">
          <p className="text-xs uppercase tracking-wider text-samar">Lokasi Kami</p>
          <h2 className="mt-3 font-display text-3xl text-tinta">Mampir ke Workshop Kami</h2>
          <p className="mb-6 mt-2 text-redup">
            Silakan datang langsung untuk melihat kualitas kayu dan proses pengerjaannya.
          </p>

          <dl className="mb-8 space-y-4">
            {business.address && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-samar">Alamat</dt>
                <dd className="mt-1 text-tinta">{business.address}.</dd>
              </div>
            )}
            {business.openingHours && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-samar">Jam</dt>
                <dd className="mt-1 text-tinta">{business.openingHours}</dd>
              </div>
            )}
            {business.email && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-samar">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${business.email}`} className="text-tinta hover:underline">{business.email}</a>
                </dd>
              </div>
            )}
          </dl>

          <Button href={mapsHref}>Buka di Google Maps →</Button>
        </div>

        <div style={revealDelay(1)} className="reveal relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-garis text-sm text-samar">
          {business.mapsEmbedUrl ? (
            <iframe
              src={business.mapsEmbedUrl}
              title={`Peta lokasi ${business.name}`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            "[ Google Maps Iframe akan ditaruh di sini ]"
          )}
        </div>
      </div>
    </section>
  );
}
