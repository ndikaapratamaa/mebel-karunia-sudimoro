import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${business.name}, ke beranda`}>
      <Image src="/logo-karunia.png" alt="" width={48} height={48} className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" priority />
      <span className="leading-none">
        <span className="block font-display text-xl text-tinta">{business.shortName}</span>
        <span className="mt-1 block text-xs tracking-wide text-redup">{business.place}</span>
      </span>
    </Link>
  );
}
