/**
 * Foto & video galeri proyek (aset di /public/foto-galeri dan /public/video-galeri).
 * Tambah item baru di `galeri`: isi `slug` sesuai nama file (tanpa .jpg), `w`/`h` = ukuran piksel foto.
 * `featured` = urutan tampil di homepage (1 = foto utama yang besar). Kosongkan bila tidak ingin tampil di homepage.
 */
export type GaleriKategori = "workshop" | "bangunan" | "kusen-pintu" | "pengiriman" | "pemilik" | "tim";

export type GaleriItem = {
  slug: string;
  title: string;
  description: string;
  category: GaleriKategori;
  /** Foto (atau poster untuk video). */
  image: string;
  w: number;
  h: number;
  /** Path video .mp4 bila item ini video. */
  video?: string;
  featured?: number;
};

/** Kategori untuk filter di galeri utama. Foto pemilik dan tim ditampilkan terpisah di bagian bawah halaman galeri. */
export const galeriKategori: { slug: GaleriKategori; name: string }[] = [
  { slug: "workshop", name: "Workshop" },
  { slug: "bangunan", name: "Proyek Bangunan" },
  { slug: "kusen-pintu", name: "Kusen & Pintu" },
  { slug: "pengiriman", name: "Toko & Pengiriman" },
];

export const galeri: GaleriItem[] = [
  { slug: "pemasangan-rangka-joglo-kayu-01", title: "Pemasangan Rangka Joglo", description: "Rangka joglo dari kayu mulai berdiri dan dirangkai di lokasi.", category: "bangunan", image: "/foto-galeri/pemasangan-rangka-joglo-kayu-01.jpg", w: 1414, h: 1088, featured: 1 },
  { slug: "finishing-kursi-tamu-ukir-01", title: "Finishing Kursi Tamu Ukir", description: "Tahap finishing pada ukiran sandaran kursi tamu di workshop.", category: "workshop", image: "/foto-galeri/finishing-kursi-tamu-ukir-01.jpg", w: 1600, h: 1200, featured: 2 },
  { slug: "pengerjaan-rangka-lemari-kayu-01", title: "Pengerjaan Rangka Lemari", description: "Rangka dan badan lemari kayu dalam tahap pengerjaan.", category: "workshop", image: "/foto-galeri/pengerjaan-rangka-lemari-kayu-01.jpg", w: 1600, h: 1200, featured: 3 },
  { slug: "pembangunan-rangka-bangunan-kayu-panggung-01", title: "Rangka Bangunan Panggung", description: "Rangka kayu bangunan panggung dipasang di atas tiang beton.", category: "bangunan", image: "/foto-galeri/pembangunan-rangka-bangunan-kayu-panggung-01.jpg", w: 1600, h: 1200, featured: 4 },
  { slug: "pekerja-menggergaji-papan-bengkel-01", title: "Menggergaji Papan", description: "Papan kayu dipotong dengan mesin di workshop.", category: "workshop", image: "/foto-galeri/pekerja-menggergaji-papan-bengkel-01.jpg", w: 1600, h: 1200, featured: 5 },
  { slug: "pekerja-di-bengkel-potongan-kayu-01", title: "Suasana Workshop", description: "Potongan kayu dan pengerjaan rangka di workshop.", category: "workshop", image: "/foto-galeri/pekerja-di-bengkel-potongan-kayu-01.jpg", w: 1600, h: 1200 },
  { slug: "pekerja-mengolah-kayu-bengkel-01", title: "Mengolah Kayu", description: "Kayu diolah dengan mesin sebelum dirakit.", category: "workshop", image: "/foto-galeri/pekerja-mengolah-kayu-bengkel-01.jpg", w: 1280, h: 720 },
  { slug: "pekerja-menyiapkan-balok-kayu-01", title: "Menyiapkan Balok Kayu", description: "Pekerja menyiapkan balok dan papan kayu.", category: "workshop", image: "/foto-galeri/pekerja-menyiapkan-balok-kayu-01.jpg", w: 1600, h: 1200 },
  { slug: "pengerjaan-rangka-furnitur-ungu-01", title: "Pengerjaan Rangka Furnitur", description: "Rangka furnitur dikerjakan di area workshop terbuka.", category: "workshop", image: "/foto-galeri/pengerjaan-rangka-furnitur-ungu-01.jpg", w: 1600, h: 1200 },
  { slug: "pengrajin-mengukir-kayu-01", title: "Mengukir Kayu", description: "Pengrajin mengukir panel kayu dengan tangan.", category: "workshop", image: "/foto-galeri/pengrajin-mengukir-kayu-01.jpg", w: 904, h: 1600 },
  { slug: "pemasangan-rangka-joglo-kayu-02", title: "Rangka Joglo Berdiri", description: "Tiang dan balok joglo dari kayu dipasang oleh tim.", category: "bangunan", image: "/foto-galeri/pemasangan-rangka-joglo-kayu-02.jpg", w: 1200, h: 1248 },
  { slug: "pemasangan-rangka-atap-kayu-01", title: "Pemasangan Rangka Atap Kayu", description: "Rangka atap kayu dipasang langsung di lokasi.", category: "bangunan", image: "/foto-galeri/pemasangan-rangka-atap-kayu-01.jpg", w: 1200, h: 1600 },
  { slug: "pembangunan-bangunan-kayu-lantai-papan-01", title: "Pemasangan Lantai Papan", description: "Lantai papan dipasang pada bangunan kayu.", category: "bangunan", image: "/foto-galeri/pembangunan-bangunan-kayu-lantai-papan-01.jpg", w: 1200, h: 1600 },
  { slug: "pembangunan-rumah-perancah-bambu-01", title: "Pembangunan Rumah", description: "Pembangunan rumah dengan perancah bambu.", category: "bangunan", image: "/foto-galeri/pembangunan-rumah-perancah-bambu-01.jpg", w: 1600, h: 1200 },
  { slug: "pemasangan-kusen-pintu-jendela-rumah-01", title: "Pemasangan Kusen dan Jendela", description: "Kusen dan jendela dipasang di rumah pelanggan.", category: "kusen-pintu", image: "/foto-galeri/pemasangan-kusen-pintu-jendela-rumah-01.jpg", w: 904, h: 1600 },
  { slug: "pemasangan-kusen-pintu-jendela-rumah-02", title: "Pintu dan Jendela Siap Pasang", description: "Daun pintu dan jendela disiapkan di lorong bangunan.", category: "kusen-pintu", image: "/foto-galeri/pemasangan-kusen-pintu-jendela-rumah-02.jpg", w: 904, h: 1600 },
  { slug: "pemuatan-kusen-kayu-ke-pickup-01", title: "Muat Kusen Kayu ke Pickup", description: "Kusen kayu dimuat ke pickup untuk dikirim.", category: "kusen-pintu", image: "/foto-galeri/pemuatan-kusen-kayu-ke-pickup-01.jpg", w: 1200, h: 1600 },
  { slug: "pemuatan-pintu-jendela-kaca-ke-pickup-01", title: "Muat Pintu dan Jendela Kaca", description: "Pintu dan jendela berkaca dimuat dan diikat sebelum berangkat.", category: "kusen-pintu", image: "/foto-galeri/pemuatan-pintu-jendela-kaca-ke-pickup-01.jpg", w: 1200, h: 1600 },
  { slug: "pemuatan-pintu-jendela-kaca-ke-pickup-02", title: "Pengiriman Pintu dan Jendela", description: "Pintu dan jendela berkaca siap diantar ke lokasi.", category: "kusen-pintu", image: "/foto-galeri/pemuatan-pintu-jendela-kaca-ke-pickup-02.jpg", w: 1200, h: 1600 },
  { slug: "pickup-muat-furnitur-depan-toko-01", title: "Muat Furnitur di Depan Toko", description: "Furnitur dimuat ke pickup di depan toko.", category: "pengiriman", image: "/foto-galeri/pickup-muat-furnitur-depan-toko-01.jpg", w: 1600, h: 1200 },
  { slug: "toko-karunia-mebel-tampak-depan-01", title: "Toko Karunia Mebel", description: "Tampak depan toko dan showroom di Sudimoro.", category: "pengiriman", image: "/foto-galeri/toko-karunia-mebel-tampak-depan-01.jpg", w: 1600, h: 1200 },
  { slug: "video-muat-furnitur-ke-truk-01", title: "Muat Furnitur ke Truk", description: "Proses memuat furnitur ke truk.", category: "pengiriman", image: "/video-galeri/video-muat-furnitur-ke-truk-01.jpg", w: 480, h: 854, video: "/video-galeri/video-muat-furnitur-ke-truk-01.mp4" },
  { slug: "video-muat-kursi-bangku-ke-pickup-01", title: "Muat Kursi dan Bangku ke Pickup (1)", description: "Kursi dan bangku dimuat ke pickup.", category: "pengiriman", image: "/video-galeri/video-muat-kursi-bangku-ke-pickup-01.jpg", w: 480, h: 864, video: "/video-galeri/video-muat-kursi-bangku-ke-pickup-01.mp4" },
  { slug: "video-muat-kursi-bangku-ke-pickup-02", title: "Muat Kursi dan Bangku ke Pickup (2)", description: "Kursi dan bangku dimuat ke pickup.", category: "pengiriman", image: "/video-galeri/video-muat-kursi-bangku-ke-pickup-02.jpg", w: 480, h: 864, video: "/video-galeri/video-muat-kursi-bangku-ke-pickup-02.mp4" },
  { slug: "video-muat-kursi-tamu-ukir-ke-pickup-01", title: "Muat Kursi Tamu Ukir ke Pickup", description: "Kursi tamu ukir dimuat dengan hati-hati ke pickup.", category: "pengiriman", image: "/video-galeri/video-muat-kursi-tamu-ukir-ke-pickup-01.jpg", w: 480, h: 864, video: "/video-galeri/video-muat-kursi-tamu-ukir-ke-pickup-01.mp4" },
  { slug: "video-muat-lemari-rias-ke-pickup-01", title: "Muat Lemari Rias ke Pickup", description: "Lemari rias dimuat ke pickup.", category: "pengiriman", image: "/video-galeri/video-muat-lemari-rias-ke-pickup-01.jpg", w: 480, h: 854, video: "/video-galeri/video-muat-lemari-rias-ke-pickup-01.mp4" },
  { slug: "video-muat-meja-ke-pickup-01", title: "Muat Meja ke Pickup", description: "Meja dimuat ke pickup untuk dikirim.", category: "pengiriman", image: "/video-galeri/video-muat-meja-ke-pickup-01.jpg", w: 480, h: 864, video: "/video-galeri/video-muat-meja-ke-pickup-01.mp4" },
];

export const galeriUnggulan = () =>
  galeri.filter((g) => g.featured).sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

/** Bagian terpisah di paling bawah halaman /galeri, tidak ikut filter dan tidak tampil di homepage. */
export const galeriPemilik: GaleriItem[] = [
  { slug: "bos-mebel-di-kapal-01", title: "Pemilik di Atas Kapal", description: "Pemilik Karunia Mebel saat berada di atas kapal.", category: "pemilik", image: "/foto-galeri/bos-mebel-di-kapal-01.jpg", w: 1192, h: 1600 },
  { slug: "bos-mebel-selfie-kayu-gelondongan-01", title: "Di Antara Kayu Gelondongan", description: "Pemilik Karunia Mebel bersama tumpukan kayu gelondongan.", category: "pemilik", image: "/foto-galeri/bos-mebel-selfie-kayu-gelondongan-01.jpg", w: 1600, h: 1200 },
  { slug: "bos-mebel-selfie-alat-berat-01", title: "Bersama Alat Berat di Lokasi", description: "Pemilik Karunia Mebel di lokasi kerja dengan alat berat.", category: "pemilik", image: "/foto-galeri/bos-mebel-selfie-alat-berat-01.jpg", w: 1600, h: 1200 },
  { slug: "bos-mebel-main-voli-malam-01", title: "Main Voli di Malam Hari", description: "Pemilik Karunia Mebel saat bermain voli di malam hari.", category: "pemilik", image: "/foto-galeri/bos-mebel-main-voli-malam-01.jpg", w: 1600, h: 1200 },
  { slug: "bos-mebel-santai-duduk-01", title: "Santai Sejenak", description: "Pemilik Karunia Mebel saat beristirahat.", category: "pemilik", image: "/foto-galeri/bos-mebel-santai-duduk-01.jpg", w: 644, h: 856 },
  { slug: "foto-keluarga-selfie-01", title: "Bersama Keluarga", description: "Pemilik Karunia Mebel bersama keluarga.", category: "pemilik", image: "/foto-galeri/foto-keluarga-selfie-01.jpg", w: 1440, h: 1080 },
];

export const galeriTim: GaleriItem[] = [
  { slug: "foto-bersama-tiga-pekerja-01", title: "Tiga Anggota Tim", description: "Tiga anggota tim Karunia Mebel di workshop.", category: "tim", image: "/foto-galeri/foto-bersama-tiga-pekerja-01.jpg", w: 712, h: 716 },
  { slug: "foto-lama-pekerja-di-bengkel-01", title: "Foto Lama di Bengkel", description: "Arsip foto pekerja di bengkel.", category: "tim", image: "/foto-galeri/foto-lama-pekerja-di-bengkel-01.jpg", w: 652, h: 532 },
  { slug: "pekerja-berkumpul-dalam-ruangan-01", title: "Pekerja Berkumpul", description: "Para pekerja berkumpul dan bekerja di dalam ruangan.", category: "tim", image: "/foto-galeri/pekerja-berkumpul-dalam-ruangan-01.jpg", w: 1200, h: 1600 },
  { slug: "pengerjaan-meja-ukir-bangku-kayu-01", title: "Mengerjakan Meja Ukir dan Bangku", description: "Pengerjaan meja ukir dan bangku kayu.", category: "tim", image: "/foto-galeri/pengerjaan-meja-ukir-bangku-kayu-01.jpg", w: 624, h: 1204 },
  { slug: "pengerjaan-daun-pintu-kayu-01", title: "Pengerjaan Daun Pintu Kayu", description: "Daun pintu kayu dikerjakan bersama-sama.", category: "tim", image: "/foto-galeri/pengerjaan-daun-pintu-kayu-01.jpg", w: 900, h: 1200 },
  { slug: "pengunjung-di-showroom-kursi-ukir-01", title: "Pengunjung di Showroom", description: "Pengunjung melihat kursi ukir di showroom.", category: "tim", image: "/foto-galeri/pengunjung-di-showroom-kursi-ukir-01.jpg", w: 1600, h: 1200 },
  { slug: "penerimaan-anggota-pkl-di-showroom-01", title: "Penerimaan Anggota PKL", description: "Penerimaan anggota PKL di showroom.", category: "tim", image: "/foto-galeri/penerimaan-anggota-pkl-di-showroom-01.jpg", w: 1600, h: 1200 },
  { slug: "penerimaan-psg-pkl-smkn-2-sudimoro-2026-01", title: "Penerimaan PSG PKL SMKN 2 Sudimoro 2026", description: "Penerimaan peserta PSG PKL SMKN 2 Sudimoro tahun 2026.", category: "tim", image: "/foto-galeri/penerimaan-psg-pkl-smkn-2-sudimoro-2026-01.jpg", w: 720, h: 740 },
  { slug: "praktik-prakerin-smkn-2-sudimoro-01", title: "Praktik Prakerin SMKN 2 Sudimoro", description: "Siswa SMKN 2 Sudimoro berpraktik dalam program prakerin.", category: "tim", image: "/foto-galeri/praktik-prakerin-smkn-2-sudimoro-01.jpg", w: 1600, h: 1200 },
  { slug: "praktik-siswa-smkn-2-sudimoro-lapangan-01", title: "Praktik Siswa di Lapangan", description: "Siswa SMKN 2 Sudimoro berpraktik di lapangan.", category: "tim", image: "/foto-galeri/praktik-siswa-smkn-2-sudimoro-lapangan-01.jpg", w: 1600, h: 1200 },
  { slug: "foto-bersama-anggota-kkn-01", title: "Foto Bersama Anggota KKN (1)", description: "Kunjungan anggota KKN.", category: "tim", image: "/foto-galeri/foto-bersama-anggota-kkn-01.jpg", w: 900, h: 1600 },
  { slug: "foto-bersama-anggota-kkn-02", title: "Foto Bersama Anggota KKN (2)", description: "Kunjungan anggota KKN.", category: "tim", image: "/foto-galeri/foto-bersama-anggota-kkn-02.jpg", w: 900, h: 1600 },
  { slug: "foto-bersama-anggota-kkn-03", title: "Foto Bersama Anggota KKN (3)", description: "Kunjungan anggota KKN.", category: "tim", image: "/foto-galeri/foto-bersama-anggota-kkn-03.jpg", w: 900, h: 900 },
];
