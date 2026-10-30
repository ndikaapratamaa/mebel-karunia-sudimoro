/**
 * Konten homepage yang diisi bertahap. Biarkan array kosong bila belum ada;
 * homepage otomatis menampilkan keterangan "sedang disiapkan".
 * Isi hanya dengan data asli. Entri contoh di bawah wajib diganti sebelum website dipublikasikan.
 * `image`: path foto di folder /public (misalnya "/portofolio/ruang-tamu.jpg"). Kosong = kartu tanpa foto.
 */

/**
 * `place` = keterangan di bawah nama, misalnya produk dan kota.
 * Tanpa `text`, kartu tampil sebagai kerangka kosong (garis abu-abu pengganti teks); `name` diabaikan.
 * Untuk ulasan asli, isi `name` dan `text`; `rating` (1-5) dan `photo` hanya tampil bila diisi.
 */
export type Testimonial = {
  name: string;
  text?: string;
  place?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  photo?: string;
};

export type Room = { slug: string; title: string; text: string; href: string; image?: string };

/**
 * Pintu masuk berdasarkan ruangan di homepage. Isi `image` dengan foto tegak (rasio 4:5) dari /public,
 * misalnya "/ruangan/ruang-tamu.jpg". Selama kosong, blok foto tampil sebagai blok netral.
 */
export const rooms: Room[] = [
  { slug: "mebel-interior", title: "Mebel & Interior", text: "Kursi, meja, lemari, dipan.", href: "/produk", image: "/foto-lemari/lemari-2-pintu-ukir-daun-01.jpg" },
  { slug: "kusen-pintu", title: "Kusen & Pintu", text: "Pintu, jendela, dan kusen.", href: "/produk", image: "/foto-pintu/pintu-2-daun-kaca-panel-01.jpg" },
  { slug: "proyek-bangunan", title: "Proyek Bangunan", text: "Gazebo, joglo, dan mimbar.", href: "/produk?kategori=gazebo", image: "/foto-gazebo/gazebo-cokelat-pagar-balusters-01.jpg" },
  { slug: "kerajinan", title: "Kerajinan", text: "Hiasan, kandang, dan lainnya.", href: "/produk", image: "/foto-galeri/pengrajin-mengukir-kayu-01.jpg" },
  { slug: "custom-desain", title: "Custom Desain", text: "Ukuran dan model khusus.", href: "/kontak", image: "/foto-galeri/pengerjaan-meja-ukir-bangku-kayu-01.jpg" },
];

/** Foto (rasio 4:3) untuk bagian Cerita Kami, misalnya "/cerita.jpg" di folder /public. Kosong = blok netral. */
export const storyImage: string | undefined = "/foto-cerita.jpg";

/*
 * Tiga proyek di bawah adalah DATA CONTOH untuk tata letak (bukan karya atau pelanggan nyata).
 * Selama `business.showSampleBadge` aktif, kartu diberi label "Contoh proyek".
 * Ganti dengan proyek asli, atau kosongkan array agar tampil keterangan "sedang disiapkan".
 */


/*
 * Tiga kartu di bawah adalah KERANGKA KOSONG untuk tata letak (belum ada ulasan nyata).
 * Ganti dengan ulasan asli (dengan izin pelanggan) sebelum website dipublikasikan,
 * atau kosongkan array agar tampil keterangan "belum tersedia".
 */
export const testimonials: Testimonial[] = [{ name: "" }, { name: "" }, { name: "" }];

export type Faq = { question: string; answer: string };

/*
 * TODO: konfirmasi semua jawaban dengan pemilik usaha sebelum website dipublikasikan, terutama
 * estimasi waktu pembuatan, metode pembayaran, pengiriman dan asuransi, jenis kayu, garansi (1-3 tahun, anti-rayap),
 * serta hari dan jam buka workshop.
 */
export const faqs: Faq[] = [
  {
    question: "Berapa lama proses pembuatan custom mebel?",
    answer: "Rata-rata 2-4 minggu tergantung tingkat kesulitan desain dan antrean workshop.",
  },
  {
    question: "Apakah bisa custom ukuran untuk ruangan sempit atau bentuk L?",
    answer:
      "Sangat bisa. Justru itu keunggulan kami. Kirimkan ukuran ruangan Anda via WhatsApp, pengrajin kami akan bantu hitung dimensi yang paling pas.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami menerima pembayaran tunai (cash) maupun transfer bank.",
  },
  {
    question: "Apakah bisa dikirim ke luar kota?",
    answer: "Bisa. Kami menggunakan ekspedisi khusus furniture dengan pengemasan kayu berlapis dan asuransi penuh.",
  },
  {
    question: "Jenis kayu apa saja yang tersedia?",
    answer:
      "Kami menyediakan bermacam-macam jenis kayu berkualitas seperti Kayu Jati Solid, Mahoni, dan jenis kayu keras lainnya sesuai permintaan.",
  },
  {
    question: "Apakah ada garansi untuk produknya?",
    answer: "Ya. Kami memberikan garansi struktur kayu dan anti-rayap selama 1-3 tahun tergantung jenis kayu yang dipilih.",
  },
  {
    question: "Apakah bisa request warna finishing tertentu?",
    answer: "Tentu. Kami menyediakan berbagai pilihan warna cat dan finishing sesuai selera Anda.",
  },
  {
    question: "Bisa datang langsung ke showroom untuk lihat barang?",
    answer:
      "Sangat kami persilakan. Silakan mampir ke workshop kami di Sudimoro, Pacitan yang buka setiap hari. Jam kerja operasional 07.00 - 16.00 WIB, dan jam pelayanan 06.00 - 19.00 WIB.",
  },
];
