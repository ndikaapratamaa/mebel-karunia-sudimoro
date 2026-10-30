import { business } from "@/config/business";

export const isWhatsAppReady = business.whatsappNumber.trim().length > 0;

/**
 * Tautan pemesanan. Jika nomor WhatsApp belum diisi di config,
 * tombol diarahkan ke halaman kontak agar tidak ada tombol yang mati.
 */
export function whatsappLink(message?: string): string {
  if (!isWhatsAppReady) return "/kontak#pesan";
  const base = `https://wa.me/${business.whatsappNumber.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const messages = {
  general: `Halo ${business.name}, saya ingin bertanya tentang produk mebel.`,
  custom: `Halo ${business.name}, saya ingin membuat mebel sesuai kebutuhan. Boleh saya ceritakan ukuran dan model yang saya cari?`,
  portfolio: `Halo ${business.name}, boleh saya melihat contoh hasil pekerjaan Anda?`,
  portfolioProject: (title: string) =>
    `Halo ${business.name}, saya ingin melihat detail ${title}. Boleh dikirimkan fotonya?`,
  promo: `Halo ${business.name}, apakah ada promo yang sedang berjalan?`,
  promoClaim: `Halo ${business.name}, saya ingin klaim promo bayar 3x tanpa bunga. Boleh dijelaskan syarat dan produk yang bisa dicicil?`,
  product: (name: string) =>
    `Halo ${business.name}, saya tertarik dengan ${name}. Boleh tahu ukuran, bahan, dan harganya?`,
};
