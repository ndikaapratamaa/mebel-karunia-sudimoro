import type { Metadata } from "next";
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import { business } from "@/config/business";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: { default: `${business.name} | Katalog dan pemesanan mebel`, template: `%s | ${business.name}` },
  description: business.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="h-full">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
