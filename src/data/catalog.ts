/**
 * Data katalog CONTOH. Ganti dengan produk asli.
 * Nama produk, bahan, dan harga saat ini adalah data contoh (dummy) untuk tata letak, belum data usaha.
 * Selama `business.showSampleBadge` aktif, tiap produk diberi label "Contoh produk".
 * - `image` / `images`: path foto di folder /public. Untuk banyak foto pakai `...foto("slug", jumlah)`.
 *   Kosong = kartu tampil tanpa foto.
 * - `price`: isi angka rupiah bila harga sudah pasti. Kosong = "Tanyakan harga".
 */
export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Kategori utama (dipakai untuk breadcrumb, label kartu, dan produk terkait). */
  category: string;
  /** Kategori tambahan: produk ikut tampil di tab kategori ini, tanpa meninggalkan kategori utama. */
  alsoIn?: string[];
  summary: string;
  description: string;
  featured?: boolean;
  /** Jenis kayu, misalnya "Kayu Jati". Isi hanya bila sudah dipastikan; kosong = kartu menampilkan nama kategori. */
  material?: string;
  /** Foto sampul (otomatis foto pertama bila memakai `foto()`). */
  image?: string;
  /** Semua foto produk; tampil sebagai galeri di halaman detail. */
  images?: string[];
  price?: number;
};

/** Foto di /public/<folder> bernama `<slug>-01.jpg`, `-02.jpg`, dst. Folder bawaan: foto-kursi; lainnya: foto-lemari, foto-meja, foto-rak, foto-dipan, foto-gazebo, foto-mimbar, foto-pintu, foto-kusen, foto-joglo. */
const foto = (slug: string, jumlah: number, folder = "foto-kursi") => {
  const images = Array.from({ length: jumlah }, (_, i) => `/${folder}/${slug}-${String(i + 1).padStart(2, "0")}.jpg`);
  return { image: images[0], images };
};

export type Promotion = {
  slug: string;
  title: string;
  description: string;
  period?: string;
  /** Kalimat singkat untuk baris pengumuman di atas header. Kosong = memakai `title`. */
  announcement?: string;
};

export const categories: Category[] = [
  { slug: "lemari", name: "Lemari", description: "Penyimpanan pakaian dan perlengkapan rumah." },
  { slug: "kursi-sofa", name: "Kursi dan sofa", description: "Tempat duduk untuk ruang makan dan ruang tamu." },
  { slug: "meja", name: "Meja", description: "Meja makan, meja kerja, meja belajar, dan meja rias." },
  { slug: "tempat-tidur", name: "Tempat tidur", description: "Dipan dan ranjang untuk kamar tidur." },
  { slug: "rak", name: "Rak", description: "Rak TV, rak pajangan, dan rak serbaguna." },
  { slug: "gazebo", name: "Gazebo", description: "Gazebo kayu untuk taman, halaman, dan area bersantai." },
  { slug: "mimbar", name: "Mimbar dan Podium", description: "Mimbar masjid, podium kayu, dan bedug." },
  { slug: "pintu", name: "Pintu", description: "Pintu kayu satu daun dan dua daun." },
  { slug: "kusen", name: "Kusen", description: "Kusen kayu untuk pintu dan jendela." },
  { slug: "joglo", name: "Rumah Joglo", description: "Rumah joglo kayu bergaya tradisional." },
];

export const products: Product[] = [
  {
    slug: "gazebo-cokelat-bangku-dalam",
    name: "Gazebo Kayu Cokelat Bangku Dalam",
    category: "gazebo",
    summary: "Gazebo kayu cokelat beratap genteng merah dengan bangku di sisi dalam.",
    description:
      "Gazebo kayu berfinishing cokelat dengan atap genteng merah berornamen, tiang kokoh, pagar rendah, dan bangku panjang di sisi dalam. Cocok untuk taman atau halaman yang ingin punya tempat bersantai. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("gazebo-cokelat-bangku-dalam", 5, "foto-gazebo"),
    price: 14500000, // harga sementara (proyek besar), ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-sudut-L-busa",
    name: "Kursi Tamu Sudut L Busa",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Kursi tamu sudut L dengan bantalan busa dan meja kaca.",
    description:
      "Kursi tamu model sudut L dengan sandaran berjeruji, dilengkapi bantalan busa bermotif dan meja tamu bertop kaca. Cocok untuk ruang tamu yang ingin tempat duduk luas dalam satu sudut. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("kursi-tamu-sudut-L-busa", 4),
    price: 6500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-sudut-L-hitam",
    name: "Kursi Tamu Sudut L Hitam",
    category: "kursi-sofa",
    summary: "Kursi tamu sudut L berwarna hitam dengan motif bunga keemasan.",
    description:
      "Kursi tamu sudut L berfinishing hitam dengan panel motif bunga keemasan pada sandaran, lengkap dengan meja tamu bertop kaca. Tampilannya tegas dan kontras untuk ruang tamu modern. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-sudut-L-hitam", 1),
    price: 7200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-sudut-L-motif",
    name: "Kursi Tamu Sudut L Motif",
    category: "kursi-sofa",
    summary: "Kursi tamu sudut L dengan sandaran berpola dan bantal bermotif.",
    description:
      "Kursi tamu sudut L berfinishing coklat kemerahan dengan sandaran berpola ukir tembus, bantal bermotif geometris, dan meja tamu yang memiliki rak di bagian bawah. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-sudut-L-motif", 1),
    price: 7000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-sudut-L-ukir-bulat",
    name: "Kursi Tamu Sudut L Ukir Bulat",
    category: "kursi-sofa",
    summary: "Kursi tamu sudut L dengan ukiran medali bulat keemasan.",
    description:
      "Kursi tamu sudut L dengan ukiran medali bulat berwarna emas pada setiap panel sandaran. Dilengkapi meja tamu bertop kaca, berfinishing merah kecoklatan mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-sudut-L-ukir-bulat", 1),
    price: 7500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-sudut-L-ukir-burung",
    name: "Kursi Tamu Sudut L Ukir Burung",
    category: "kursi-sofa",
    summary: "Kursi tamu sudut L dengan ukiran burung keemasan.",
    description:
      "Kursi tamu sudut L dengan ukiran burung keemasan pada panel sandaran. Meja tamu bertop kaca memperlihatkan ukiran serupa di bawahnya, dengan finishing merah kecoklatan mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-sudut-L-ukir-burung", 1),
    price: 8000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-sudut-L-ukir-teratai",
    name: "Kursi Tamu Sudut L Ukir Teratai",
    category: "kursi-sofa",
    summary: "Kursi tamu sudut L dengan ukiran teratai keemasan.",
    description:
      "Kursi tamu sudut L berfinishing gelap dengan ukiran teratai keemasan pada sandaran. Meja tamunya bertop kaca dengan hiasan teratai di bawahnya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-sudut-L-ukir-teratai", 1),
    price: 8000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-emas",
    name: "Kursi Tamu Set Ukir Emas",
    category: "kursi-sofa",
    summary: "Set kursi tamu dengan ukiran dan panel keemasan.",
    description:
      "Set kursi tamu dengan panel keemasan pada sandaran dan lengan berukir tembus, ditambah meja tamu kecil. Finishing coklat kemerahan mengilap memberi kesan hangat dan mewah. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("kursi-tamu-set-ukir-emas", 7),
    price: 8500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-angsa",
    name: "Kursi Tamu Set Ukir Angsa",
    category: "kursi-sofa",
    summary: "Set kursi tamu dengan relief angsa keemasan.",
    description:
      "Set kursi tamu dengan relief angsa keemasan pada sandaran, lengan besar yang melengkung, dan finishing merah kecoklatan mengilap. Terdiri dari kursi panjang dan kursi tunggal. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-set-ukir-angsa", 1),
    price: 8500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-bunga",
    name: "Kursi Tamu Set Ukir Bunga",
    category: "kursi-sofa",
    summary: "Set kursi tamu dengan ukiran bunga.",
    description:
      "Set kursi tamu dengan ukiran bunga pada sandaran dan sisi dudukan, dilengkapi meja tamu berukir. Finishing coklat hangat yang serasi dengan ruang tamu bergaya tradisional. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-set-ukir-bunga", 1),
    price: 7800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-klasik",
    name: "Kursi Tamu Set Ukir Klasik",
    category: "kursi-sofa",
    summary: "Set kursi tamu bergaya klasik dengan ukiran mahkota.",
    description:
      "Set kursi tamu bergaya klasik dengan ukiran di bagian atas sandaran, lengan melengkung, dan meja tamu berkaki lengkung. Finishing coklat tua mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-set-ukir-klasik", 1),
    price: 9000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-matahari",
    name: "Kursi Tamu Set Ukir Matahari",
    category: "kursi-sofa",
    summary: "Set kursi tamu dengan ukiran motif matahari pada sandaran.",
    description:
      "Set kursi tamu dengan sandaran tinggi berukir motif matahari dan bunga yang diberi warna terang sebagai aksen. Lengan melengkung dengan finishing coklat mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-set-ukir-matahari", 1),
    price: 9500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-mawar",
    name: "Kursi Tamu Set Ukir Mawar",
    category: "kursi-sofa",
    summary: "Set kursi tamu dengan ukiran mawar keemasan.",
    description:
      "Set kursi tamu dengan ukiran mawar keemasan pada sandaran dan finishing merah tua yang mengilap. Terdiri dari kursi panjang dan kursi tunggal. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tamu-set-ukir-mawar", 1),
    price: 8200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tamu-set-ukir-jati-mentah",
    name: "Kursi Tamu Set Ukir Jati Mentah",
    category: "kursi-sofa",
    summary: "Set kursi tamu berukir dalam warna kayu alami.",
    description:
      "Set kursi tamu berukir dengan sandaran tinggi dan ornamen ukir tembus, dalam warna kayu alami tanpa finishing. Cocok bila Anda ingin menentukan sendiri warna akhirnya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    material: "Kayu Jati",
    ...foto("kursi-tamu-set-ukir-jati-mentah", 1),
    price: 7000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-makan-sandaran-tinggi",
    name: "Kursi Makan Sandaran Tinggi",
    category: "kursi-sofa",
    summary: "Kursi makan dengan sandaran tinggi berjeruji vertikal.",
    description:
      "Kursi makan dengan sandaran tinggi berjeruji vertikal dalam warna kayu alami. Dapat dipesan satuan atau satu set sesuai jumlah kursi yang Anda butuhkan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-makan-sandaran-tinggi", 1),
    price: 650000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-teras-bulat-meja-finishing",
    name: "Kursi Teras Bulat dengan Meja (Finishing)",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Kursi teras bulat dengan meja bundar, sudah difinishing jingga kecoklatan mengilap.",
    description:
      "Kursi teras berbentuk bulat dengan sandaran melengkung berjeruji dan meja bundar kecil, sudah difinishing warna jingga kecoklatan yang mengilap. Siap pakai untuk teras atau sudut santai di halaman. Ukuran dan bahan dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("kursi-teras-bulat-meja-finishing", 2),
    price: 2200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-teras-bulat-meja-natural",
    name: "Kursi Teras Bulat dengan Meja (Kayu Natural)",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Kursi teras bulat dengan meja bundar, kayu alami belum difinishing.",
    description:
      "Kursi teras berbentuk bulat dengan sandaran melengkung berjeruji dan meja bundar kecil dalam versi kayu alami yang belum difinishing. Cocok bagi yang ingin memilih warna finishing sendiri atau mempertahankan tampilan kayu apa adanya. Ukuran, bahan, dan pilihan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-teras-bulat-meja-natural", 4),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "kursi-teras-papan",
    name: "Kursi Teras Papan",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Dua kursi teras berpapan dan satu meja kecil.",
    description:
      "Dua kursi teras dengan sandaran dan lengan dari papan, ditambah meja kecil dengan rak bawah. Model ekonomis berwarna merah tua untuk teras rumah. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-teras-papan", 1),
    price: 1200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-tunggu-panjang",
    name: "Kursi Tunggu Panjang",
    category: "kursi-sofa",
    summary: "Kursi tunggu panjang dengan sandaran berjeruji.",
    description:
      "Kursi tunggu panjang dengan sandaran dan dudukan berjeruji, berbingkai gelap. Cocok untuk ruang tunggu, teras, atau kantor. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-tunggu-panjang", 1),
    price: 1800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "bangku-panjang-hitam",
    name: "Bangku Panjang Hitam",
    category: "kursi-sofa",
    summary: "Bangku panjang dua dudukan berwarna hitam.",
    description:
      "Bangku panjang berfinishing hitam dengan sandaran berjeruji dan lengan di kedua sisi. Muat untuk dua orang, cocok untuk teras atau ruang tamu. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("bangku-panjang-hitam", 1),
    price: 1400000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-ayunan-taman",
    name: "Kursi Ayunan Taman",
    category: "kursi-sofa",
    summary: "Kursi ayunan kayu dengan atap kecil untuk taman.",
    description:
      "Kursi ayunan dari kayu dengan atap kecil dan rangka berdiri sendiri, jadi tidak perlu digantung pada bangunan. Cocok untuk taman atau teras yang luas. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("kursi-ayunan-taman", 1),
    price: 4500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-santai-malas",
    name: "Kursi Santai Malas",
    category: "kursi-sofa",
    summary: "Kursi santai dengan sandaran miring dan dudukan berjeruji.",
    description:
      "Kursi santai dengan sandaran miring dan dudukan berjeruji kayu, nyaman untuk bersantai di teras atau halaman. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-santai-malas", 1),
    price: 1300000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "meja-makan-4-kursi",
    name: "Meja Makan 4 Kursi",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja makan persegi dengan empat kursi.",
    description:
      "Meja makan persegi dengan empat kursi bersandaran jeruji vertikal. Permukaan meja berfinishing mengilap dan mudah dibersihkan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    material: "Kayu Jati Solid",
    ...foto("meja-makan-4-kursi", 2),
    price: 6000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "meja-makan-bulat-kursi-bulat",
    name: "Meja Makan Bulat Kursi Bulat",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja makan bulat dengan kursi bersandaran melengkung.",
    description:
      "Meja makan bulat dengan kursi bersandaran melengkung berjeruji yang bisa dirapatkan ke meja sehingga hemat ruang. Cocok untuk ruang makan yang tidak terlalu luas. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-makan-bulat-kursi-bulat", 1),
    price: 5500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "meja-makan-kursi-jari",
    name: "Meja Makan Kursi Jari",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja makan persegi panjang dengan kursi bersandaran jeruji.",
    description:
      "Meja makan persegi panjang dengan kursi bersandaran jeruji (model jari) dan lengan melengkung. Finishing coklat tua mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-makan-kursi-jari", 1),
    price: 5800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "meja-makan-oval-6-kursi",
    name: "Meja Makan Oval 6 Kursi",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja makan oval dengan enam kursi berukir.",
    description:
      "Meja makan oval dengan enam kursi berukir bermotif bulat dan dudukan berlapis kain bermotif. Kaki meja dibubut dengan finishing mengilap, cocok untuk keluarga besar. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-makan-oval-6-kursi", 1),
    price: 12000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "meja-makan-persegi-panjang",
    name: "Meja Makan Persegi Panjang",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja makan persegi panjang dengan kursi bersandaran jeruji.",
    description:
      "Meja makan persegi panjang dengan beberapa kursi bersandaran jeruji. Finishing coklat kemerahan yang rapi, muat untuk makan bersama keluarga. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-makan-persegi-panjang", 1),
    price: 6500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "meja-kursi-siswa",
    name: "Meja dan Kursi Siswa",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja panjang dengan dua kursi untuk siswa.",
    description:
      "Meja panjang dengan dua kursi bersandaran, berwarna kayu terang. Cocok untuk sekolah, tempat les, atau ruang belajar di rumah. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-kursi-siswa", 2),
    price: 650000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "kursi-belajar-meja-rak",
    name: "Meja Belajar dengan Rak dan Kursi",
    category: "kursi-sofa",
    alsoIn: ["meja"],
    summary: "Meja belajar dengan rak atas dan laci, lengkap dengan kursi.",
    description:
      "Meja belajar dengan rak di bagian atas, laci, dan lemari kecil di sisi bawah, dilengkapi kursi bersandaran jeruji melengkung. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kursi-belajar-meja-rak", 1),
    price: 2200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-1-pintu-cermin",
    name: "Lemari 1 Pintu Cermin",
    category: "lemari",
    summary: "Lemari pakaian satu pintu dengan cermin panjang.",
    description:
      "Lemari pakaian ramping satu pintu berfinishing coklat tua dengan cermin panjang di daun pintu. Pas untuk kamar yang tidak terlalu luas. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-1-pintu-cermin", 1, "foto-lemari"),
    price: 1500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-ganda",
    name: "Lemari 2 Pintu Cermin Ganda",
    category: "lemari",
    summary: "Lemari dua pintu dengan cermin di kedua pintu.",
    description:
      "Lemari pakaian dua pintu berfinishing coklat kemerahan mengilap dengan cermin di kedua daun pintu; cermin di pintu kanan lebih panjang. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-ganda", 1, "foto-lemari"),
    price: 2600000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-panjang",
    name: "Lemari 2 Pintu Cermin Panjang",
    category: "lemari",
    summary: "Lemari dua pintu dengan cermin panjang di satu pintu.",
    description:
      "Lemari pakaian dua pintu berfinishing coklat tua mengilap dengan cermin panjang di satu daun pintu dan panel kayu polos di pintu lainnya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-panjang", 1, "foto-lemari"),
    price: 2500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-penuh",
    name: "Lemari 2 Pintu Cermin Penuh",
    category: "lemari",
    summary: "Lemari dua pintu dengan cermin besar di kedua pintu.",
    description:
      "Lemari pakaian dua pintu berfinishing coklat tua mengilap dengan cermin besar di kedua daun pintu, menyisakan panel kayu di bagian bawah. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-penuh", 1, "foto-lemari"),
    price: 2800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-atas",
    name: "Lemari 2 Pintu Cermin Atas",
    category: "lemari",
    summary: "Lemari dua pintu dengan cermin di bagian atas satu pintu.",
    description:
      "Lemari pakaian dua pintu berfinishing coklat kemerahan dengan cermin di bagian atas satu pintu, sedangkan bagian bawah dan pintu lainnya berpanel kayu. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-atas", 1, "foto-lemari"),
    price: 2300000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-kecil",
    name: "Lemari 2 Pintu Cermin Kecil",
    category: "lemari",
    summary: "Lemari dua pintu dengan cermin kecil di satu pintu.",
    description:
      "Lemari pakaian dua pintu berfinishing coklat kemerahan mengilap dengan cermin berukuran kecil di satu pintu dan kornis kayu di bagian atas. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-kecil", 1, "foto-lemari"),
    price: 2200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-kayu-terang",
    name: "Lemari 2 Pintu Cermin Kayu Terang",
    category: "lemari",
    summary: "Lemari dua pintu berwarna kayu terang dengan cermin panjang.",
    description:
      "Lemari pakaian dua pintu berwarna kayu terang mengilap dengan panel pintu berpola dan cermin panjang di pintu sebelah kanan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-kayu-terang", 2, "foto-lemari"),
    price: 2400000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-cermin-laci",
    name: "Lemari 2 Pintu Cermin dengan Laci",
    category: "lemari",
    summary: "Lemari dua pintu dengan cermin tengah dan tiga laci.",
    description:
      "Lemari pakaian dua pintu dengan cermin di bagian tengah dan tiga laci di bawahnya, berfinishing coklat kemerahan mengilap. Praktis untuk menyimpan pakaian sekaligus berhias. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-cermin-laci", 2, "foto-lemari"),
    price: 3200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-polos",
    name: "Lemari 2 Pintu Polos",
    category: "lemari",
    summary: "Lemari pakaian dua pintu dengan panel polos.",
    description:
      "Lemari pakaian dua pintu dengan panel pintu polos tanpa cermin, berwarna kayu coklat. Tampilannya sederhana dan rapi untuk kamar apa saja. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-polos", 1, "foto-lemari"),
    price: 2000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-sliding-cermin",
    name: "Lemari Sliding 2 Pintu Cermin",
    category: "lemari",
    summary: "Lemari pakaian pintu geser dengan cermin.",
    description:
      "Lemari pakaian dengan dua pintu geser (sliding) dan cermin pada pintunya, sehingga tidak memakan ruang saat dibuka. Cocok untuk kamar yang sempit. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-sliding-cermin", 2, "foto-lemari"),
    price: 3000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-sliding-cermin-laci",
    name: "Lemari Sliding 2 Pintu Cermin dengan Laci",
    category: "lemari",
    summary: "Lemari pintu geser dengan cermin dan deretan laci di sisi samping.",
    description:
      "Lemari pakaian pintu geser dua pintu dengan cermin, dilengkapi deretan laci di sisi samping untuk menyimpan perlengkapan kecil. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-sliding-cermin-laci", 1, "foto-lemari"),
    price: 3800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-sliding-laci",
    name: "Lemari Sliding 2 Pintu dengan Laci",
    category: "lemari",
    summary: "Lemari pintu geser dengan laci di bagian bawah.",
    description:
      "Lemari pakaian dua pintu geser berfinishing coklat kemerahan dengan laci di bagian bawah dan cermin pada pintu. Pintu geser menghemat ruang di dalam kamar. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-sliding-laci", 2, "foto-lemari"),
    price: 3400000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-sliding-polos",
    name: "Lemari Sliding 2 Pintu Polos",
    category: "lemari",
    summary: "Lemari pakaian pintu geser dengan panel polos.",
    description:
      "Lemari pakaian dua pintu geser dengan panel polos berfinishing coklat kemerahan mengilap. Bentuknya sederhana dan tidak memakan ruang saat dibuka. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-sliding-polos", 1, "foto-lemari"),
    price: 2800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-sliding-putih",
    name: "Lemari Sliding 2 Pintu Putih",
    category: "lemari",
    summary: "Lemari pakaian pintu geser berwarna putih dengan cermin kecil.",
    description:
      "Lemari pakaian dua pintu geser berwarna putih dengan cermin kecil di salah satu pintu. Tampilannya terang dan bersih untuk kamar bergaya modern. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-sliding-putih", 2, "foto-lemari"),
    price: 2900000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-ukir",
    name: "Lemari 2 Pintu Ukir",
    category: "lemari",
    summary: "Lemari pakaian dua pintu dengan ukiran pada daun pintu.",
    description:
      "Lemari pakaian dua pintu dengan ukiran pada kedua daun pintunya, berfinishing warna kayu hangat. Memberi sentuhan khas kerajinan kayu pada kamar. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-ukir", 2, "foto-lemari"),
    price: 3500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-ukir-cermin",
    name: "Lemari 2 Pintu Ukir Cermin",
    category: "lemari",
    summary: "Lemari dua pintu dengan satu pintu berukir dan satu pintu bercermin.",
    description:
      "Lemari pakaian dua pintu dengan satu daun pintu berukir dan satu daun pintu bercermin, berfinishing coklat tua mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-ukir-cermin", 1, "foto-lemari"),
    price: 3600000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-2-pintu-ukir-daun",
    name: "Lemari 2 Pintu Ukir Daun",
    category: "lemari",
    summary: "Lemari dua pintu coklat tua dengan ukiran daun keemasan.",
    description:
      "Lemari pakaian dua pintu berfinishing coklat tua mengilap dengan ukiran daun berwarna emas pada kedua pintunya. Tampilannya mewah dan menonjol di kamar. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-2-pintu-ukir-daun", 1, "foto-lemari"),
    price: 4200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-3-pintu-cermin",
    name: "Lemari 3 Pintu Cermin",
    category: "lemari",
    summary: "Lemari pakaian tiga pintu dengan panel cermin.",
    description:
      "Lemari pakaian tiga pintu berfinishing coklat tua dengan panel cermin pada pintunya. Muat banyak pakaian untuk satu keluarga. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-3-pintu-cermin", 2, "foto-lemari"),
    price: 3800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-3-pintu-cermin-laci",
    name: "Lemari 3 Pintu Cermin dengan Laci",
    category: "lemari",
    summary: "Lemari tiga pintu dengan cermin dan laci di bagian bawah.",
    description:
      "Lemari pakaian tiga pintu dengan cermin di pintu tengah dan laci di bagian bawah, berfinishing coklat kemerahan. Ruang simpannya lega dan rapi. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-3-pintu-cermin-laci", 1, "foto-lemari"),
    price: 4500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-3-pintu-cermin-tengah",
    name: "Lemari 3 Pintu Cermin Tengah",
    category: "lemari",
    summary: "Lemari pakaian tiga pintu dengan cermin di pintu tengah.",
    description:
      "Lemari pakaian tiga pintu dengan cermin di pintu tengah, tersedia dalam warna kayu terang mengilap. Muat banyak pakaian dan cukup lega untuk satu keluarga. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-3-pintu-cermin-tengah", 3, "foto-lemari"),
    price: 4000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-3-pintu-cermin-ukir-emas",
    name: "Lemari 3 Pintu Cermin Ukir Emas",
    category: "lemari",
    summary: "Lemari tiga pintu dengan cermin tengah dan ukiran keemasan.",
    description:
      "Lemari pakaian tiga pintu dengan cermin di tengah dan ukiran berwarna emas di kedua pintu samping, berfinishing coklat tua mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-3-pintu-cermin-ukir-emas", 1, "foto-lemari"),
    price: 5500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-3-pintu-sliding-rias-laci",
    name: "Lemari Rias Sliding 3 Pintu dengan Laci",
    category: "lemari",
    summary: "Lemari rias putih pintu geser dengan cermin dan tiga laci.",
    description:
      "Lemari rias putih dengan pintu geser, cermin, dan tiga laci berwarna oranye kemerahan di sisi samping. Satu perabot untuk pakaian sekaligus berhias. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-3-pintu-sliding-rias-laci", 1, "foto-lemari"),
    price: 4800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-3-pintu-ukir-cermin",
    name: "Lemari 3 Pintu Ukir Cermin",
    category: "lemari",
    summary: "Lemari tiga pintu dengan cermin tengah dan ukiran bunga.",
    description:
      "Lemari pakaian tiga pintu dengan cermin di tengah dan ukiran bunga yang menonjol di kedua pintu samping, lengkap dengan laci kecil di bawah cermin. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-3-pintu-ukir-cermin", 1, "foto-lemari"),
    price: 5200000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-kaca-2-susun",
    name: "Lemari Kaca 2 Susun",
    category: "lemari",
    summary: "Lemari kaca dua susun dengan bagian bawah tertutup.",
    description:
      "Lemari dua susun dengan pintu kaca di bagian atas untuk memajang barang dan pintu kayu tertutup di bagian bawah untuk penyimpanan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-kaca-2-susun", 1, "foto-lemari"),
    price: 2500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-kaca-ukir-2-susun",
    name: "Lemari Kaca Ukir 2 Susun",
    category: "lemari",
    summary: "Lemari kaca dua susun dengan ukiran dan mahkota di bagian atas.",
    description:
      "Lemari pajangan dua susun dengan pintu kaca di atas, pintu berukir di bawah, dan hiasan mahkota ukir di bagian puncaknya. Cocok untuk ruang tamu. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-kaca-ukir-2-susun", 1, "foto-lemari"),
    price: 4500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-putih-minimalis",
    name: "Lemari Putih Minimalis",
    category: "lemari",
    summary: "Lemari pakaian putih dengan cermin tengah dan dua laci.",
    description:
      "Lemari pakaian berwarna putih bergaya minimalis dengan cermin di bagian tengah, beberapa pintu, dan dua laci di bawahnya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-putih-minimalis", 1, "foto-lemari"),
    price: 2700000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-rias-pink-sliding-laci",
    name: "Lemari Rias Pink Sliding dengan Laci",
    category: "lemari",
    summary: "Lemari rias pink pintu geser dengan cermin, laci, dan bangku.",
    description:
      "Lemari rias berwarna pink dengan pintu geser, cermin, dan laci, lengkap dengan bangku rias berdudukan anyaman. Manis untuk kamar anak perempuan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-rias-pink-sliding-laci", 3, "foto-lemari"),
    price: 4500000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-rias-sliding-putih-laci",
    name: "Lemari Rias Sliding Putih dengan Laci",
    category: "lemari",
    summary: "Lemari rias putih pintu geser dengan cermin dan laci.",
    description:
      "Lemari rias putih dengan pintu geser, cermin, dan laci di sisi samping. Tampilannya bersih dan terang untuk kamar bergaya modern. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-rias-sliding-putih-laci", 1, "foto-lemari"),
    price: 4000000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "lemari-sudut-kaca-ukir",
    name: "Lemari Sudut Kaca Ukir",
    category: "lemari",
    summary: "Lemari pajangan sudut berbentuk setengah lingkaran dengan kaca dan ukiran.",
    description:
      "Lemari pajangan untuk sudut ruangan dengan bentuk setengah lingkaran, berkaca, berukir, dan berhias mahkota keemasan di bagian atas. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("lemari-sudut-kaca-ukir", 1, "foto-lemari"),
    price: 3800000, // harga sementara, ganti dengan harga asli
  },
  {
    slug: "dipan-kayu-sandaran-lengkung",
    name: "Dipan Kayu Sandaran Lengkung",
    category: "tempat-tidur",
    summary: "Dipan kayu berfinishing coklat dengan sandaran kepala melengkung.",
    description:
      "Dipan kayu berfinishing coklat dengan sandaran kepala panel yang bagian atasnya melengkung, rangka rendah, dan kaki kokoh. Alas kasur memakai papan bilah (kisi-kisi). Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("dipan-kayu-sandaran-lengkung", 1, "foto-dipan"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "dipan-kayu-sandaran-panel-polos",
    name: "Dipan Kayu Sandaran Panel Polos",
    category: "tempat-tidur",
    summary: "Dipan kayu finishing merah kecoklatan mengilap dengan sandaran panel polos.",
    description:
      "Dipan kayu berfinishing merah kecoklatan mengilap dengan sandaran kepala dua panel polos yang tinggi dan alas kasur berbilah kayu. Modelnya sederhana dan mudah dipadukan dengan kamar bergaya apa pun. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("dipan-kayu-sandaran-panel-polos", 1, "foto-dipan"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "dipan-laci-rak-kepala-hitam",
    name: "Dipan Laci Rak Kepala Hitam",
    category: "tempat-tidur",
    summary: "Dipan hitam dengan dua laci di sisi dan rak terbuka pada sandaran kepala.",
    description:
      "Dipan berwarna hitam dengan dua laci penyimpanan di sisi depan dan rak terbuka pada sandaran kepala untuk menaruh buku atau barang kecil. Cocok untuk kamar yang butuh tambahan ruang simpan tanpa menambah lemari. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("dipan-laci-rak-kepala-hitam", 1, "foto-dipan"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "dipan-laci-samping-rak-kepala",
    name: "Dipan Laci Samping Rak Kepala",
    category: "tempat-tidur",
    summary: "Dipan kayu finishing mengilap dengan laci di dua sisi dan rak di sandaran kepala.",
    description:
      "Dipan kayu berfinishing coklat kemerahan mengilap dengan laci penyimpanan di sisi samping dan sisi depan, serta rak bersekat pada sandaran kepala. Banyak ruang simpan untuk pakaian dan perlengkapan kamar. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("dipan-laci-samping-rak-kepala", 1, "foto-dipan"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "tempat-tidur-king-size",
    name: "Tempat Tidur King Size",
    category: "tempat-tidur",
    summary: "Tempat tidur ukuran king size.",
    description:
      "Contoh produk tempat tidur king size. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    material: "Kayu Jati",
    price: 7500000,
  },
  {
    slug: "meja-kerja-laci-pintu",
    name: "Meja Kerja Laci dan Pintu",
    category: "meja",
    summary: "Meja kerja dengan satu laci dan lemari kecil berpintu di sisi kanan.",
    description:
      "Meja kerja kayu dengan permukaan mengilap, satu laci di bagian atas, dan lemari kecil berpintu di sisi kanan. Foto menampilkan beberapa warna finishing, dari coklat tua sampai coklat terang. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-kerja-laci-pintu", 3, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-kasir-laci-pintu",
    name: "Meja Kasir Laci dan Pintu",
    category: "meja",
    summary: "Meja kasir dengan laci dan lemari kecil, difoto bersama satu kursi.",
    description:
      "Meja kasir berfinishing coklat kemerahan mengilap, dengan laci di bagian atas dan lemari kecil berpintu di sisi kanan. Pada foto, meja difoto bersama satu kursi bersandaran melengkung; tanyakan apakah kursi termasuk dalam pesanan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-kasir-laci-pintu", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-komputer-rak-keyboard",
    name: "Meja Komputer dengan Rak Keyboard",
    category: "meja",
    summary: "Meja komputer dengan rak keyboard yang bisa ditarik dan rak di sisi bawah.",
    description:
      "Meja komputer dengan rak keyboard yang bisa ditarik keluar dan rak terbuka di sisi bawah untuk perangkat atau buku. Foto menampilkan dua pilihan warna: kayu terang, dan coklat kemerahan dengan kaki hitam. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-komputer-rak-keyboard", 2, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-bundar-kayu",
    name: "Meja Bundar Kayu",
    category: "meja",
    summary: "Meja bundar kayu mengilap dengan kaki disilangkan penyangga.",
    description:
      "Meja bundar berukuran kecil dengan permukaan kayu mengilap berwarna coklat kemerahan dan empat kaki yang dikuatkan penyangga bersilang. Cocok sebagai meja sudut atau meja teras. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-bundar-kayu", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-bundar-putih-2-tingkat",
    name: "Meja Bundar Putih 2 Tingkat",
    category: "meja",
    summary: "Meja bundar putih dua tingkat dengan kaki kayu bulat.",
    description:
      "Meja bundar dua tingkat berwarna putih dengan kaki kayu bulat berwarna coklat. Tampilannya ringan dan cocok sebagai meja sudut atau meja di samping kursi. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-bundar-putih-2-tingkat", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-belajar-anak-rak",
    name: "Meja Belajar Anak dengan Rak",
    category: "meja",
    summary: "Meja belajar anak berwarna putih dengan rak, laci, dan lemari berpanel merah muda.",
    description:
      "Meja belajar anak berwarna putih dengan rak di bagian atas, laci, dan lemari kecil berpanel merah muda bergambar karakter kartun. Cocok untuk kamar anak perempuan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-belajar-anak-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-kayu-cermin-rak",
    name: "Meja Rias Kayu Cermin dan Rak",
    category: "meja",
    summary: "Meja rias kayu dengan cermin, rak terbuka, laci, lemari kecil, dan bangku.",
    description:
      "Meja rias kayu berfinishing coklat dengan cermin, rak terbuka di sisi samping, laci, lemari kecil, dan bangku rias yang serasi. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-kayu-cermin-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-lemari-kaca-samping",
    name: "Meja Rias Lemari Kaca Samping",
    category: "meja",
    summary: "Meja rias dengan cermin tinggi dan lemari berpintu kaca di sisi samping.",
    description:
      "Meja rias kayu coklat mengilap dengan cermin tinggi, lemari berpintu kaca di sisi samping, laci, dan bangku rias. Rapi untuk menyimpan perlengkapan berhias. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-lemari-kaca-samping", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-ukir-cermin-tinggi",
    name: "Meja Rias Ukir Cermin Tinggi",
    category: "meja",
    summary: "Meja rias dengan cermin tinggi berbingkai ukir dan rak kecil di kedua sisi.",
    description:
      "Meja rias berfinishing coklat dengan cermin tinggi yang berbingkai ukir di bagian atas, rak kecil di kedua sisi cermin, laci, dan bangku rias. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("meja-rias-ukir-cermin-tinggi", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-putih-cermin-rak",
    name: "Meja Rias Putih Cermin dan Rak",
    category: "meja",
    summary: "Meja rias putih dengan cermin tinggi, rak terbuka, laci, dan bangku.",
    description:
      "Meja rias berwarna putih dengan cermin tinggi, rak terbuka di sisi kanan, laci, lemari kecil, dan bangku rias. Tampilannya bersih dan terang. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-putih-cermin-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-putih-pink-cermin-rak",
    name: "Meja Rias Putih Pink",
    category: "meja",
    summary: "Meja rias putih dengan panel merah muda, cermin, rak kecil, dan bangku.",
    description:
      "Meja rias berwarna putih dengan aksen merah muda pada rak, laci, lemari kecil, dan dudukan bangku, lengkap dengan cermin tinggi. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-putih-pink-cermin-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-putih-ungu-cermin-rak",
    name: "Meja Rias Putih Ungu",
    category: "meja",
    summary: "Meja rias putih dengan aksen ungu muda, cermin, rak kecil, dan bangku.",
    description:
      "Meja rias berwarna putih dengan aksen ungu muda pada rak, laci, lemari kecil, dan dudukan bangku, lengkap dengan cermin tinggi. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-putih-ungu-cermin-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-biru-oranye-cermin-rak",
    name: "Meja Rias Biru Oranye",
    category: "meja",
    summary: "Meja rias berwarna cerah dengan cermin berbingkai biru dan rak samping.",
    description:
      "Meja rias dengan meja berwarna oranye, laci kuning, cermin berbingkai biru, rak biru di sisi samping, dan bangku biru. Warnanya ceria untuk kamar anak. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-biru-oranye-cermin-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "meja-rias-warna-warni-cermin-rak",
    name: "Meja Rias Warna-warni",
    category: "meja",
    summary: "Meja rias warna cerah, tersedia dalam pilihan merah muda dan oranye-biru.",
    description:
      "Dua meja rias berwarna cerah: satu berwarna merah muda dan satu berwarna oranye dengan cermin biru. Masing-masing dilengkapi cermin, rak, laci, dan bangku rias. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("meja-rias-warna-warni-cermin-rak", 1, "foto-meja"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-tv-kayu-laci-pintu",
    name: "Rak TV Kayu Laci dan Pintu",
    category: "rak",
    summary: "Rak TV kayu dengan dua pintu, dua laci, dan ruang terbuka di tengah.",
    description:
      "Rak TV kayu berfinishing coklat kemerahan mengilap dengan pintu di kedua sisi, dua laci, dan ruang terbuka di tengah untuk perangkat seperti dekoder. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("rak-tv-kayu-laci-pintu", 1, "foto-rak"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-tv-kayu-minimalis",
    name: "Rak TV Kayu Minimalis",
    category: "rak",
    summary: "Rak TV rendah berwarna kayu terang dengan dua laci dan rak terbuka.",
    description:
      "Rak TV rendah berwarna kayu terang dengan dua laci di sisi kiri, dua rak terbuka di tengah, dan satu pintu di sisi kanan. Bentuknya sederhana dan rapi. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("rak-tv-kayu-minimalis", 1, "foto-rak"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-tv-putih-laci",
    name: "Rak TV Putih Laci",
    category: "rak",
    summary: "Rak TV putih dengan satu laci, ruang terbuka, dan dua pintu geser.",
    description:
      "Rak TV berwarna putih dengan satu laci di tengah, ruang terbuka di atasnya, dan dua pintu geser di kedua sisi. Pada foto tertulis ukuran 120x50x35. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("rak-tv-putih-laci", 1, "foto-rak"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-tv-ukir-pintu-kaca",
    name: "Rak TV Ukir Pintu Kaca",
    category: "rak",
    summary: "Rak TV berukir dengan pintu kaca dan pegangan keemasan.",
    description:
      "Rak TV berukir dengan pintu kaca di bagian tengah, pegangan keemasan, dan hiasan ukir yang diberi warna terang. Bentuk sisinya melengkung dengan finishing coklat mengilap. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    ...foto("rak-tv-ukir-pintu-kaca", 2, "foto-rak"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-display-merah-2-tingkat",
    name: "Rak Display Merah 2 Tingkat",
    category: "rak",
    summary: "Rak display merah mengilap dengan dua tingkat rak putih terbuka.",
    description:
      "Rak display berwarna merah mengilap dengan dua tingkat rak putih yang terbuka dan sisi melengkung. Cocok untuk memajang barang. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("rak-display-merah-2-tingkat", 1, "foto-rak"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-serbaguna-sekat",
    name: "Rak Serbaguna Sekat",
    category: "rak",
    summary: "Rak tinggi dengan delapan sekat terbuka berwarna kayu kuning keemasan.",
    description:
      "Rak tinggi dengan delapan sekat terbuka dalam dua kolom, berwarna kayu kuning keemasan. Bisa dipakai untuk buku, pajangan, atau perlengkapan lain. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("rak-serbaguna-sekat", 1, "foto-rak"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rak-buku-custom",
    name: "Rak Buku Custom",
    category: "rak",
    summary: "Rak buku yang bisa dibuat sesuai ukuran.",
    description:
      "Contoh produk rak buku custom. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    featured: true,
    material: "Kayu Jati",
    price: 2500000,
  },
  {
    slug: "gazebo-cokelat-meja-bangku",
    name: "Gazebo Kayu Cokelat Meja dan Bangku",
    category: "gazebo",
    summary: "Gazebo kayu cokelat dengan satu set meja dan bangku di dalam.",
    description:
      "Gazebo kayu berfinishing cokelat beratap genteng merah, dilengkapi meja dan bangku kayu di bagian dalam sehingga siap dipakai untuk berkumpul atau menerima tamu di luar ruangan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("gazebo-cokelat-meja-bangku", 1, "foto-gazebo"),
    price: 18000000, // harga sementara (proyek besar), ganti dengan harga asli
  },
  {
    slug: "gazebo-cokelat-pagar-balusters",
    name: "Gazebo Kayu Cokelat Pagar Balusters",
    category: "gazebo",
    summary: "Gazebo kayu cokelat dengan pagar balusters dan bangku di dalam.",
    description:
      "Gazebo kayu berfinishing cokelat beratap genteng merah dengan pagar rendah model balusters (jeruji) di sekeliling dan bangku di bagian dalam. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("gazebo-cokelat-pagar-balusters", 1, "foto-gazebo"),
    price: 15500000, // harga sementara (proyek besar), ganti dengan harga asli
  },
  {
    slug: "gazebo-marun-bangku-dalam",
    name: "Gazebo Kayu Marun Bangku Dalam",
    category: "gazebo",
    summary: "Gazebo kayu berwarna marun beratap genteng merah dengan bangku di dalam.",
    description:
      "Gazebo kayu berwarna marun dengan atap genteng merah berornamen, pagar rendah, dan bangku di sisi dalam. Tampilan warnanya tegas dan serasi dengan halaman bergaya tradisional. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("gazebo-marun-bangku-dalam", 1, "foto-gazebo"),
    price: 13500000, // harga sementara (proyek besar), ganti dengan harga asli
  },
  {
    slug: "gazebo-marun-pagar-rendah",
    name: "Gazebo Kayu Marun Pagar Rendah",
    category: "gazebo",
    summary: "Gazebo kayu berwarna marun dengan pagar rendah dan atap genteng merah.",
    description:
      "Gazebo kayu berwarna marun dengan atap genteng merah berornamen dan pagar rendah di sisi bangunan, menyisakan ruang terbuka yang lega di bagian dalam. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("gazebo-marun-pagar-rendah", 3, "foto-gazebo"),
    price: 12500000, // harga sementara (proyek besar), ganti dengan harga asli
  },
  {
    slug: "gazebo-merah-pagar-balusters",
    name: "Gazebo Kayu Merah Pagar Balusters",
    category: "gazebo",
    summary: "Gazebo kayu merah dengan pagar balusters dan atap genteng merah.",
    description:
      "Gazebo kayu berwarna merah dengan pagar model balusters (jeruji) dan atap genteng merah berornamen di bagian puncak dan sudut-sudutnya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("gazebo-merah-pagar-balusters", 2, "foto-gazebo"),
    price: 16000000, // harga sementara (proyek besar), ganti dengan harga asli
  },
  {
    slug: "mimbar-masjid-kaligrafi-emas",
    name: "Mimbar Masjid Kaligrafi Emas",
    category: "mimbar",
    summary: "Mimbar berbentuk podium dengan kaligrafi dan ukiran berwarna emas.",
    description:
      "Mimbar kayu berfinishing coklat kemerahan mengilap dengan panel kaligrafi berwarna emas, tiang hias emas di sisinya, dan ukiran emas di bagian atas. Pada foto, mimbar difoto bersama satu podium kecil bermotif serupa. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("mimbar-masjid-kaligrafi-emas", 1, "foto-mimbar"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "mimbar-masjid-kubah-ukir",
    name: "Mimbar Masjid Kubah Ukir",
    category: "mimbar",
    summary: "Mimbar masjid kayu beratap kubah kecil dengan panel sandaran berukir tembus.",
    description:
      "Mimbar masjid dari kayu dengan atap kubah kecil yang ditopang tiang, serta panel sandaran dan sisi berukir tembus. Bentuknya mengikuti mimbar tradisional yang ditempatkan di depan jamaah. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("mimbar-masjid-kubah-ukir", 1, "foto-mimbar"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "mimbar-masjid-ukir-emas",
    name: "Mimbar Masjid Ukir Emas",
    category: "mimbar",
    summary: "Mimbar podium dengan mahkota ukir emas, kaligrafi timbul, dan tiang hias.",
    description:
      "Mimbar berbentuk podium dengan mahkota ukir berwarna emas di bagian atas, kaligrafi timbul di bagian depan, dan tiang hias emas di kedua sisinya. Foto menampilkan dua warna finishing, coklat terang dan coklat tua. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("mimbar-masjid-ukir-emas", 2, "foto-mimbar"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "podium-kayu-kaligrafi",
    name: "Podium Kayu Kaligrafi",
    category: "mimbar",
    summary: "Podium kayu dengan kaligrafi lafaz Allah berwarna emas di bagian depan.",
    description:
      "Podium kayu berfinishing coklat mengilap dengan kaligrafi lafaz Allah berwarna emas di bagian depan. Foto menampilkan dua model: bingkai bulat berlatar kayu dan bingkai bulat berlatar hitam. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("podium-kayu-kaligrafi", 2, "foto-mimbar"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "podium-kayu-lubang-geometris",
    name: "Podium Kayu Lubang Geometris",
    category: "mimbar",
    summary: "Podium kayu ramping dengan bidang atas miring dan penyangga berlubang pola geometris.",
    description:
      "Podium kayu ramping dengan bidang atas yang miring dan penyangga berlubang pola geometris, berdiri di atas alas kayu yang lebar. Tampilannya sederhana dan ringan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("podium-kayu-lubang-geometris", 1, "foto-mimbar"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "bedug-masjid-kayu-penyangga",
    name: "Bedug Masjid Kayu dengan Penyangga",
    category: "mimbar",
    summary: "Bedug kayu dengan penyangga berbentuk silang.",
    description:
      "Bedug masjid dari kayu berfinishing coklat dengan kulit pada bagian depan yang dikuatkan paku di tepinya, dan penyangga kayu berbentuk silang agar bedug berdiri miring. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("bedug-masjid-kayu-penyangga", 1, "foto-mimbar"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-garis-natural",
    name: "Pintu 1 Daun Garis Natural",
    category: "pintu",
    summary: "Pintu satu daun berwarna kayu natural dengan alur garis pada permukaannya.",
    description:
      "Pintu satu daun berwarna kayu natural dengan alur garis vertikal dan horizontal pada permukaannya. Tampilannya terang dan sederhana. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-garis-natural", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-kurva-natural",
    name: "Pintu 1 Daun Kurva Natural",
    category: "pintu",
    summary: "Pintu satu daun berwarna kayu natural dengan alur lengkung.",
    description:
      "Pintu satu daun berwarna kayu natural dengan alur lengkung yang dipadukan garis horizontal pada permukaannya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-kurva-natural", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-kurva-oranye",
    name: "Pintu 1 Daun Kurva Oranye",
    category: "pintu",
    summary: "Pintu satu daun oranye kecoklatan dengan alur lengkung dan handel tuas.",
    description:
      "Pintu satu daun berwarna oranye kecoklatan dengan alur lengkung di bagian tengah dan handel tuas berwarna perak. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-kurva-oranye", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-minimalis-oranye",
    name: "Pintu 1 Daun Minimalis Oranye",
    category: "pintu",
    summary: "Pintu satu daun oranye dengan alur garis horizontal.",
    description:
      "Pintu satu daun berwarna oranye dengan alur garis horizontal yang sederhana, bergaya minimalis. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-minimalis-oranye", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-panel-garis-natural",
    name: "Pintu 1 Daun Panel Garis Natural",
    category: "pintu",
    summary: "Pintu satu daun natural dengan panel dan alur garis.",
    description:
      "Pintu satu daun berwarna kayu natural dengan panel dan alur garis. Foto menampilkan sepasang daun pintu. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-panel-garis-natural", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-panel-kotak-klasik",
    name: "Pintu 1 Daun Panel Kotak Klasik",
    category: "pintu",
    summary: "Pintu satu daun coklat tua dengan panel kotak timbul dan kusen berhias.",
    description:
      "Pintu satu daun berwarna coklat tua dengan panel kotak timbul di satu sisi, kusen berhias di bagian atas, dan handel tuas. Bergaya klasik. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-panel-kotak-klasik", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-1-daun-panel-samping-oranye",
    name: "Pintu 1 Daun Panel Samping Oranye",
    category: "pintu",
    summary: "Pintu satu daun oranye dengan panel persegi panjang di sisi kiri.",
    description:
      "Pintu satu daun berwarna oranye dengan deretan panel persegi panjang di sisi kiri dan alur garis horizontal di sisi kanan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-1-daun-panel-samping-oranye", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-garis-horizontal",
    name: "Pintu 2 Daun Garis Horizontal",
    category: "pintu",
    summary: "Pintu dua daun coklat dengan alur horizontal dan handel logam panjang.",
    description:
      "Pintu dua daun berwarna coklat dengan alur garis horizontal dan handel logam panjang, terpasang dalam kusen kayu. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-garis-horizontal", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-garis-merah",
    name: "Pintu 2 Daun Garis Merah",
    category: "pintu",
    summary: "Pintu dua daun merah tua dengan alur garis.",
    description:
      "Pintu dua daun berwarna merah tua dengan alur garis dan kotak kecil pada permukaannya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-garis-merah", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-kaca-kecil",
    name: "Pintu 2 Daun Kaca Kecil",
    category: "pintu",
    summary: "Pintu dua daun coklat kemerahan dengan kaca kecil dan alur horizontal.",
    description:
      "Pintu dua daun berwarna coklat kemerahan dengan beberapa kaca kecil dan alur garis horizontal, lengkap dengan handel panjang. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-kaca-kecil", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-kaca-kecil-oranye",
    name: "Pintu 2 Daun Kaca Kecil Oranye",
    category: "pintu",
    summary: "Pintu dua daun oranye dengan dua kaca kecil di tiap daun.",
    description:
      "Pintu dua daun berwarna oranye dengan dua kaca kecil di tiap daun dan handel berwarna keemasan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-kaca-kecil-oranye", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-kaca-panel",
    name: "Pintu 2 Daun Kaca Panel",
    category: "pintu",
    summary: "Pintu dua daun coklat kemerahan dengan kaca vertikal sempit dan panel.",
    description:
      "Pintu dua daun berwarna coklat kemerahan dengan kaca vertikal yang sempit, panel di sekelilingnya, dan handel panjang. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-kaca-panel", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-kaca-vertikal-kusen-samping",
    name: "Pintu 2 Daun Kaca Vertikal Kusen Samping",
    category: "pintu",
    summary: "Pintu dua daun coklat tua dengan kaca vertikal, jendela samping, dan ventilasi.",
    description:
      "Pintu dua daun berwarna coklat tua dengan kaca vertikal di bagian tengah, jendela di kedua sisi kusen, dan ventilasi di bagian atas. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-kaca-vertikal-kusen-samping", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-kaca-vertikal-ventilasi",
    name: "Pintu 2 Daun Kaca Vertikal Ventilasi",
    category: "pintu",
    summary: "Pintu dua daun dengan kaca vertikal dan jendela ventilasi di atasnya.",
    description:
      "Pintu dua daun dengan dua kaca vertikal di tiap daun dan jendela ventilasi di bagian atas kusen. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-kaca-vertikal-ventilasi", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-kurva-ventilasi",
    name: "Pintu 2 Daun Kurva Ventilasi",
    category: "pintu",
    summary: "Pintu dua daun oranye kemerahan dengan panel lengkung dan ventilasi.",
    description:
      "Pintu dua daun berwarna oranye kemerahan dengan panel berbentuk lengkung dan ventilasi di bagian atasnya. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-kurva-ventilasi", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "pintu-2-daun-ukir-logo",
    name: "Pintu 2 Daun Ukir Logo",
    category: "pintu",
    summary: "Pintu dua daun coklat kemerahan dengan ukiran tepi dan lambang bulat di tengah.",
    description:
      "Pintu dua daun berwarna coklat kemerahan dengan ukiran di tepi, alur kotak berlian, dan lambang bulat di bagian tengah. Foto diambil saat proses finishing. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("pintu-2-daun-ukir-logo", 1, "foto-pintu"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "kusen-kayu-jendela-tumpuk",
    name: "Kusen Kayu Jendela Bertumpuk",
    category: "kusen",
    summary: "Kusen jendela kayu yang dirangkai bertingkat, difoto di workshop.",
    description:
      "Kusen jendela dari kayu yang dirangkai bertingkat, difoto di workshop sebelum dipasang. Di sebelahnya terlihat rangka jendela berkaca yang sedang disiapkan. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("kusen-kayu-jendela-tumpuk", 1, "foto-kusen"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
  {
    slug: "rumah-joglo-atap-genteng-merah",
    name: "Rumah Joglo Atap Genteng Merah",
    category: "joglo",
    summary: "Rumah joglo kayu dengan atap bertingkat genteng merah dan tiang kayu.",
    description:
      "Rumah joglo dengan atap bertingkat bergenteng merah dan deretan tiang kayu yang menopang bangunan terbuka. Sebuah proyek bangunan yang dikerjakan langsung oleh tim kami. Ukuran, bahan, dan finishing dapat ditanyakan langsung sebelum memesan.",
    ...foto("rumah-joglo-atap-genteng-merah", 1, "foto-joglo"),
    // harga belum diisi: kosong = "Tanyakan harga". Isi bila sudah pasti.
  },
];

/** Kosongkan bila tidak ada promo aktif. Jangan menambah promo yang belum pasti. */
export const promotions: Promotion[] = [
  {
    slug: "promo-akhir-tahun",
    title: "Promosi menjelang akhir tahun",
    announcement: "Promo akhir tahun: bayar 3x dalam 3 bulan, tanpa bunga.",
    description:
      "Beli mebel di Karunia Mebel Sudimoro dengan kemudahan bayar 3 kali dalam 3 bulan, tanpa bunga. Tersedia meja kursi, lemari, tempat tidur, kitchen set, rak buku, dan lainnya. Cek segera selagi stok masih tersedia, dan tanyakan detailnya lewat WhatsApp.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
/** Apakah produk tampil di kategori ini (kategori utama atau tambahan). */
export const inCategory = (p: Product, slug: string) => p.category === slug || !!p.alsoIn?.includes(slug);

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const featuredProducts = () => products.filter((p) => p.featured);
export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
export const priceLabel = (p: Product) => (p.price ? `Mulai ${formatRupiah(p.price)}` : "Tanyakan harga");
