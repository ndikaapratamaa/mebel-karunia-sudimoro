/**
 * Konfigurasi bisnis terpusat.
 * Ubah data di sini, seluruh website ikut berubah.
 * Nilai `null` / kosong = belum diketahui, jangan diisi dengan tebakan.
 */
export const business = {
  name: "Mebel Karunia Sudimoro",
  shortName: "Mebel Karunia",
  place: "Sudimoro",
  region: "Pacitan, Jawa Timur",
  tagline:
    "Berdiri sejak tahun 2000. Pengrajin mebel kayu jati solid dari Sudimoro, Pacitan. Melayani custom & pengiriman ke seluruh Indonesia.",
  description:
    "Katalog mebel dari Mebel Karunia Sudimoro. Lihat produk, lalu pesan langsung lewat WhatsApp.",

  /** Nomor WhatsApp format internasional tanpa +, spasi, atau strip. Contoh: "62812xxxxxxx". */
  whatsappNumber: "6283846457618",
  /** Alamat lengkap usaha. Isi setelah dikonfirmasi pemilik. */
  address: "Dsn. Mekarsari, Ds. Sudimoro, Jawa Timur" as string | null,
  /** Jam buka, misalnya "Senin sampai Sabtu, 08.00 sampai 17.00". */
  openingHours: "Buka Setiap Hari: 07.00 - 16.00 WIB." as string | null,
  /** Tautan Google Maps ke lokasi. Kosong = tombol memakai pencarian Google Maps dari alamat. */
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=-8.217171072149707,111.36436352843468" as string | null,
  /**
   * URL embed Google Maps (src iframe dari "Bagikan > Sematkan peta"). Kosong = peta tampil sebagai kotak pengganti.
   * Tingkat zoom diatur oleh angka setelah "!1d" (jarak pandang dalam meter): makin kecil makin dekat.
   */
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450!2d111.36436352843468!3d-8.217171072149707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79694b459f5a9f%3A0xc7109c2c4a0e4c9a!2sMEBEL%20KARUNIA!5e0!3m2!1sid!2sid!4v1792998581609!5m2!1sid!2sid" as string | null,
  email: "mebelkerajinankarunia@gmail.com" as string | null,
  /** Nomor WhatsApp untuk tampilan teks (footer). */
  whatsappDisplay: "+62 838 4645 7618",

  /** Tampilkan label "Contoh produk" selama katalog masih berisi data contoh. */
  showSampleBadge: true,
};

/** Media sosial di footer. `handle` = nama akun yang ditampilkan. */
export const socials = [
  { label: "Instagram", handle: "mebel.karunia.9", href: "https://www.instagram.com/mebel.karunia.9" },
  { label: "TikTok", handle: "karunia_mebel", href: "https://www.tiktok.com/@karunia_mebel" },
  // Alamat halaman Facebook belum ada, jadi tautannya membuka pencarian nama halaman.
  {
    label: "Facebook",
    handle: "MEBEL KARUNIA SUDIMORO",
    href: "https://www.facebook.com/search/top?q=MEBEL%20KARUNIA%20SUDIMORO",
  },
];

/** Menu header. Tiap tautan menuju bagian di homepage (diawali "/" agar tetap berfungsi dari halaman lain). */
export const headerLinks = [
  { href: "/#hero", label: "Beranda" },
  { href: "/#kategori", label: "Kategori" },
  { href: "/#produk", label: "Produk" },
  { href: "/#galeri", label: "Galeri" },
  { href: "/#cerita", label: "Tentang Kami" },
  { href: "/#lokasi", label: "Kontak" },
];

/** Menu navigasi di footer. */
export const footerLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/produk", label: "Katalog Produk" },
  { href: "/kontak", label: "Kontak" },
];
