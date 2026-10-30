import Link from "next/link";
import { headerLinks } from "@/config/business";
import { categories, products } from "@/data/catalog";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { SearchBox, type SearchItem } from "./SearchBox";

const navLink = "flex items-center gap-1.5 py-4 text-sm font-medium text-redup transition-colors hover:text-tinta";

export function Header() {
  const order = whatsappLink(messages.general);
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? "Produk";

  const searchItems: SearchItem[] = [
    ...products.map((p) => ({
      label: p.name,
      hint: categoryName(p.category),
      href: `/produk/${p.slug}`,
      keywords: p.summary,
    })),
    ...categories.map((c) => ({
      label: c.name,
      hint: "Kategori",
      href: `/produk?kategori=${c.slug}`,
      keywords: c.description,
    })),
  ];

  return (
    <>
      <div id="site-header-wrap" className="relative z-50">
      <header
        id="site-header"
        className="z-50 border-b border-tinta/10 bg-putih transition-[background-color,box-shadow] duration-300 ease-in-out"
      >
        <div className="mx-auto flex h-[73px] max-w-7xl items-center gap-6 px-5 sm:px-8">
          <Logo />
          <div className="mx-auto hidden w-full max-w-xl lg:block">
            <SearchBox items={searchItems} whatsappHref={order} />
          </div>
          <div className="hidden lg:block">
            <Button href={order} className="min-h-11 px-6">Chat WhatsApp</Button>
          </div>
          <MobileNav
            orderHref={order}
            links={headerLinks}
            categories={categories.map((c) => ({ href: `/produk?kategori=${c.slug}`, label: c.name }))}
            searchItems={searchItems}
          />
        </div>

        <nav aria-label="Menu utama" className="hidden border-t border-tinta/10 lg:block">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-start gap-6 md:gap-8">
            {headerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLink}>{item.label}</Link>
              </li>
            ))}
          </ul>
          </div>
        </nav>
      </header>
      </div>
    </>
  );
}
