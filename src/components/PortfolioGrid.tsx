import Image from "next/image";
import { business } from "@/config/business";
import type { PortfolioItem } from "@/data/content";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { SmartLink } from "./SmartLink";
import { revealDelay } from "@/lib/reveal";

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.slug} className="reveal" style={revealDelay(i, 3)}>
          <SmartLink href={item.href ?? whatsappLink(messages.portfolioProject(item.title))} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-garis">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {business.showSampleBadge && (
                <span className="absolute left-3 top-3 rounded bg-putih/90 px-2 py-1 text-[10px] font-semibold text-tinta">
                  Contoh proyek
                </span>
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                Lihat Detail
              </span>
            </div>
            <h3 className="mt-3 font-display text-lg text-tinta">{item.title}</h3>
            {item.description && <p className="mt-1 text-xs text-samar">{item.description}</p>}
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
