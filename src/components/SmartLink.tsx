import Link from "next/link";
import type { ReactNode } from "react";

/** Tautan internal memakai Link; tautan eksternal (WhatsApp, sosial media) dibuka di tab baru. */
export function SmartLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
