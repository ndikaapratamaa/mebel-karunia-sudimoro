import type { ReactNode } from "react";

export const textLink =
  "font-semibold text-tinta underline decoration-tinta/30 decoration-2 underline-offset-4 hover:decoration-tinta";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-samar">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-tinta sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-redup">{intro}</p>}
      </div>
      {action}
    </div>
  );
}
