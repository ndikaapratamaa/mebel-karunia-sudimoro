import { IconHammer, IconLeaf, IconRuler, IconTruck } from "./strength-icons";

/*
 * TODO: konfirmasi semua klaim di bawah dengan pemilik usaha sebelum website dipublikasikan,
 * terutama jenis kayu (jati), pengrajin dan workshop sendiri, kemasan, dan asuransi pengiriman.
 */
const strengths = [
  { Icon: IconLeaf, title: "100% Kayu Jati Solid", text: "Bukan partikel atau palem. Awet hingga puluhan tahun." },
  { Icon: IconRuler, title: "Bisa Custom Ukuran", text: "Pas untuk ruangan sempit, bentuk L, atau desain khusus." },
  { Icon: IconHammer, title: "Pengrajin Lokal Asli", text: "Dibuat langsung di workshop Sudimoro, Pacitan." },
  { Icon: IconTruck, title: "Pengiriman Aman", text: "Dikemas kayu berlapis dan diasuransikan penuh." },
];

export function Strengths() {
  return (
    <section id="keunggulan" className="scroll-mt-24 bg-[#F9F8F6] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ Icon, title, text }, i) => (
            <li
              key={title}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={
                i > 0
                  ? "reveal flex flex-col items-center text-center lg:border-l lg:border-gray-300 lg:pl-6"
                  : "reveal flex flex-col items-center text-center"
              }
            >
              <Icon className="h-8 w-8 text-gray-800" />
              <h3 className="mt-3 font-sans text-sm font-bold uppercase tracking-wide text-gray-900">{title}</h3>
              <p className="mt-2 font-sans text-xs leading-relaxed text-gray-500">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
