"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export type SearchItem = { label: string; hint: string; href: string; keywords: string };

type Props = {
  items: SearchItem[];
  whatsappHref: string;
  /** Hasil ditampilkan di bawah kolom (untuk menu HP), bukan melayang. */
  inline?: boolean;
  onNavigate?: () => void;
};

export function SearchBox({ items, whatsappHref, inline = false, onNavigate }: Props) {
  const router = useRouter();
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const q = query.trim();
  const results = useMemo(() => {
    const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return [];
    return items
      .filter((it) => {
        const text = `${it.label} ${it.hint} ${it.keywords}`.toLowerCase();
        return tokens.every((t) => text.includes(t));
      })
      .slice(0, 6);
  }, [items, q]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const finish = () => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) {
      router.push(results[0].href);
      finish();
    }
  };

  const showPanel = open && q.length > 0;
  const external = whatsappHref.startsWith("http");

  return (
    <div ref={box} className="relative w-full">
      <form role="search" onSubmit={onSubmit} className="relative">
        <label htmlFor={id} className="sr-only">Cari produk</label>
        <input
          id={id}
          type="search"
          value={query}
          autoComplete="off"
          placeholder="Cari meja, lemari..."
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          className="h-11 w-full rounded-full border border-tinta/30 bg-putih pl-5 pr-24 text-[15px] text-tinta placeholder:text-redup/70 focus:border-tinta"
        />
        <button
          type="submit"
          className="absolute right-1 top-1 h-9 rounded-full bg-tinta px-5 text-sm font-semibold text-putih transition-all duration-100 ease-in-out hover:scale-[1.03] hover:bg-stone-800 active:scale-95"
        >
          Cari
        </button>
      </form>

      {showPanel && (
        <div
          className={
            inline
              ? "mt-3 border border-tinta/20 bg-putih"
              : "absolute left-0 right-0 top-full z-50 mt-2 border border-tinta/20 bg-putih shadow-lg"
          }
        >
          {results.length > 0 ? (
            <ul className="divide-y divide-tinta/10">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} onClick={finish} className="flex items-baseline justify-between gap-4 px-4 py-3 transition-colors duration-100 hover:bg-abu active:scale-[0.98]">
                    <span className="font-medium text-tinta">{r.label}</span>
                    <span className="shrink-0 text-sm text-redup">{r.hint}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p role="status" className="px-4 py-4 text-redup">
              Belum ada hasil untuk &ldquo;{q}&rdquo;.{" "}
              <a
                href={whatsappHref}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-semibold text-tinta underline decoration-tinta/30 underline-offset-4"
              >
                Tanyakan lewat WhatsApp
              </a>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
