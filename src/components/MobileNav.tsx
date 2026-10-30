"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchBox, type SearchItem } from "./SearchBox";
import { SmartLink } from "./SmartLink";

type NavLink = { href: string; label: string };

export function MobileNav({
  orderHref,
  links,
  categories,
  searchItems,
}: {
  orderHref: string;
  links: NavLink[];
  categories: NavLink[];
  searchItems: SearchItem[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const external = orderHref.startsWith("http");
  const close = () => setOpen(false);

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-seluler"
        className="inline-flex h-11 items-center gap-2 rounded-full border border-tinta/30 px-4 text-sm font-semibold text-tinta transition-all duration-100 ease-in-out hover:bg-abu active:scale-95"
      >
        {open ? "Tutup" : "Menu"}
        <span aria-hidden="true" className="flex w-4 flex-col gap-[5px]">
          <span className={`h-0.5 bg-tinta transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 bg-tinta transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 bg-tinta transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>

      {open && (
        <nav
          id="menu-seluler"
          aria-label="Menu utama"
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-130px)] overflow-y-auto border-b border-tinta/15 bg-putih px-5 pb-8 pt-5 sm:px-8"
        >
          <SearchBox items={searchItems} whatsappHref={orderHref} inline onNavigate={close} />

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-samar">Kategori produk</p>
          <ul className="mt-2 divide-y divide-tinta/15 border-y border-tinta/15">
            {categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} onClick={close} className="block py-3 text-tinta transition-transform duration-100 active:scale-95">{c.label}</Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 divide-y divide-tinta/15 border-b border-tinta/15">
            {links.map((item) => (
              <li key={item.href}>
                <SmartLink href={item.href} onClick={close} className="block py-3.5 font-display text-2xl text-tinta transition-transform duration-100 active:scale-95">
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>

          <a
            href={orderHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={close}
            className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-tinta px-7 text-[15px] font-semibold text-putih transition-all duration-100 ease-in-out hover:scale-[1.02] hover:bg-stone-800 active:scale-95"
          >
            Chat WhatsApp
          </a>
        </nav>
      )}
    </div>
  );
}
