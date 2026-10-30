import type { ReactNode } from "react";

export function PageIntro({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="border-b border-tinta/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-xl text-lg leading-relaxed text-redup">{children}</div>}
      </div>
    </div>
  );
}
