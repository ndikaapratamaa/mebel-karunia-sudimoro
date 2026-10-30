export type Testimonial = {
  name: string;
  text?: string;
  place?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  photo?: string;
};

export type Room = { slug: string; title: string; text: string; href: string; image?: string };
export const rooms: Room[] = [
  { slug: "mebel-interior", title: "Mebel & Interior", text: "Kursi, meja, lemari, dipan.", href: "/produk", image: "/foto-lemari/lemari-2-pintu-ukir-daun-01.jpg" },
  { slug: "kusen-pintu", title: "Kusen & Pintu", text: "Pintu, jendela, dan kusen.", href: "/produk", image: "/foto-pintu/pintu-2-daun-kaca-panel-01.jpg" },
  { slug: "proyek-bangunan", title: "Proyek Bangunan", text: "Gazebo, joglo, dan mimbar.", href: "/produk?kategori=gazebo", image: "/foto-gazebo/gazebo-cokelat-pagar-balusters-01.jpg" },
  { slug: "kerajinan", title: "Kerajinan", text: "Hiasan, kandang, dan lainnya.", href: "/produk", image: "/foto-galeri/pengrajin-mengukir-kayu-01.jpg" },
  { slug: "custom-desain", title: "Custom Desain", text: "Ukuran dan model khusus.", href: "/kontak", image: "/foto-galeri/pengerjaan-meja-ukir-bangku-kayu-01.jpg" },
];

export const storyImage: string | undefined = "/foto-cerita.jpg";

/** Foto unggulan di banner promo (rasio 4:3). Kosong = kotak abu-abu netral. */
export const promoImage: string | undefined = "/foto-kursi/kursi-tamu-set-ukir-emas-02.jpg";

export const testimonials: Testimonial[] = [{ name: "" }, { name: "" }, { name: "" }];

/**
 * KERANGKA SEMENTARA: isi artikel asli Anda tidak ada di file ini.
 * Kembalikan dari git/backup, atau kirim halaman artikelnya agar tipe dan datanya disamakan.
 */
export type Article = {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
  body?: string[];
};
export const articles: Article[] = [];

export type Faq = { question: string; answer: string };
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
