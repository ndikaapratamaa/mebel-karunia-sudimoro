import type { ReactNode } from "react";

/** Keterangan rapi untuk bagian yang kontennya belum diisi. */
export function EmptyState({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 border border-tinta/20 bg-putih px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-12">
      <div className="max-w-xl">
        <h3 className="font-display text-2xl text-tinta">{title}</h3>
        <p className="mt-3 leading-relaxed text-redup">{text}</p>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
