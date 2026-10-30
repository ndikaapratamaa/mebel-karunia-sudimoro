"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollEffects() {
  const pathname = usePathname();

  // Fade-up setiap elemen masuk viewport (scroll turun maupun naik).
  // Dijalankan ulang tiap pindah halaman agar elemen baru ikut diamati.
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("active"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const observeAll = () => document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));
    observeAll();
    // Kartu yang dirender belakangan (mis. ganti kategori di /produk) ikut diamati.
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  // Navbar: menempel (fixed) + blur + bayangan hanya setelah halaman di-scroll.
  // Header tetap di alur normal sampai menyentuh sisi atas layar,
  // lalu jadi fixed; pembungkus diberi tinggi yang sama agar konten tidak melompat.
  useEffect(() => {
    const wrap = document.getElementById("site-header-wrap");
    const header = document.getElementById("site-header");
    if (!wrap || !header) return;

    const fixedCls = ["fixed", "top-0", "w-full"];
    const blurCls = ["backdrop-blur-md", "bg-white/90", "shadow-sm"];
    let stuck = false;

    const update = () => {
      const shouldStick = wrap.getBoundingClientRect().top <= 0 && window.scrollY > 0;
      if (shouldStick && !stuck) {
        wrap.style.height = `${header.offsetHeight}px`;
        header.classList.add(...fixedCls);
        stuck = true;
      } else if (!shouldStick && stuck) {
        header.classList.remove(...fixedCls);
        wrap.style.height = "";
        stuck = false;
      }

      if (window.scrollY > 8) {
        header.classList.remove("bg-putih");
        header.classList.add(...blurCls);
      } else {
        header.classList.remove(...blurCls);
        header.classList.add("bg-putih");
      }
    };

    const onResize = () => {
      if (stuck) wrap.style.height = `${header.offsetHeight}px`;
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
