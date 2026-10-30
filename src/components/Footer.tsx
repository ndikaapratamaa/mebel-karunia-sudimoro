import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { business, footerLinks, socials } from "@/config/business";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { IconClock, IconFacebook, IconInstagram, IconMail, IconPin, IconTikTok, IconWhatsApp } from "./icons";
import { Logo } from "./Logo";
import { SmartLink } from "./SmartLink";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const link = "text-redup hover:text-tinta";
const title = "text-sm font-semibold text-tinta";
const socialIcons: Record<string, IconType> = {
  Instagram: IconInstagram,
  TikTok: IconTikTok,
  Facebook: IconFacebook,
};

function ContactRow({ Icon, children }: { Icon: IconType; children: ReactNode }) {
  return (
    <li className="mb-3 flex items-center gap-3">
      <Icon className="shrink-0 text-samar" />
      <span>{children}</span>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-tinta/15 bg-putih">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-redup">{business.tagline}</p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className={title}>Navigasi</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={title}>Hubungi Kami</h2>
          <ul className="mt-4 text-sm text-redup">
            {business.address && <ContactRow Icon={IconPin}>{business.address}.</ContactRow>}
            {business.openingHours && <ContactRow Icon={IconClock}>{business.openingHours}</ContactRow>}
            {business.email && (
              <ContactRow Icon={IconMail}>
                <a href={`mailto:${business.email}`} className={link}>{business.email}</a>
              </ContactRow>
            )}
            <ContactRow Icon={IconWhatsApp}>
              <SmartLink href={whatsappLink(messages.general)} className="font-semibold text-green-600 hover:underline">
                {business.whatsappDisplay}
              </SmartLink>
            </ContactRow>
          </ul>
        </div>

        <nav aria-label="Media sosial">
          <h2 className={title}>Media Sosial</h2>
          <ul className="mt-4 text-sm">
            {socials.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <li key={s.label}>
                  <SmartLink href={s.href} className={`group mb-3 flex items-center gap-3 ${link}`}>
                    {Icon && <Icon className="shrink-0 text-samar transition-colors group-hover:text-tinta" />}
                    <span>{s.label} ({s.handle})</span>
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="border-t border-tinta/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-samar sm:px-8">© 2026 Karunia Mebel. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
