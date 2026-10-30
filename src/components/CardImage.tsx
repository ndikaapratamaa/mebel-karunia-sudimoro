import Image from "next/image";

/** Foto kartu. Hanya dirender bila path foto diisi; tidak ada gambar pengganti. */
export function CardImage({ src, alt, className = "aspect-[4/3]" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-abu ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}
