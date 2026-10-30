import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const styles = {
  solid: "bg-tinta text-putih hover:bg-stone-800 hover:shadow-lg",
  outline: "border border-tinta/40 text-tinta hover:border-tinta hover:bg-tinta hover:text-putih",
};

/** Tautan bergaya tombol. Tautan eksternal (WhatsApp) dibuka di tab baru. */
export function Button({ href, children, variant = "solid", className = "" }: Props) {
  const cls = `inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-all duration-100 ease-in-out hover:scale-[1.03] active:scale-95 ${styles[variant]} ${className}`;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
