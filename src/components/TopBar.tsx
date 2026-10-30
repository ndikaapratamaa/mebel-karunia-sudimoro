import Link from "next/link";
import { promotions } from "@/data/catalog";

/** Baris pengumuman di atas header. Tampil hanya bila ada promo aktif di catalog.ts. */
export function TopBar() {
  const promo = promotions[0];
  if (!promo) return null;
  return (
    <div className="border-b border-tinta/10 bg-putih">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-2.5 text-center text-xs sm:px-8 sm:text-sm">
        <p className="font-medium text-tinta">{promo.announcement ?? promo.title}</p>
        <Link href="/#promo" className="font-semibold text-tinta underline decoration-tinta/30 underline-offset-4 hover:decoration-tinta">
          Lihat promo
        </Link>
      </div>
    </div>
  );
}
