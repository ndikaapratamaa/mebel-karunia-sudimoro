import { faqs } from "@/data/content";
import { messages, whatsappLink } from "@/lib/whatsapp";
import { SmartLink } from "../SmartLink";
import { revealDelay } from "@/lib/reveal";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-12 lg:px-12">
        <div className="reveal lg:col-span-4">
          <p className="text-xs uppercase tracking-wider text-samar">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-tinta">Pertanyaan yang Sering Diajukan</h2>
          <p className="mt-2 text-sm text-samar">Belum menemukan jawabannya? Tim kami siap membantu.</p>
          <SmartLink
            href={whatsappLink(messages.general)}
            className="mt-4 inline-block text-sm font-semibold text-tinta hover:underline"
          >
            Tanya lewat WhatsApp →
          </SmartLink>
        </div>

        <div className="reveal lg:col-span-8" style={revealDelay(1)}>
          {faqs.map((f) => (
            <details key={f.question} className="group border-b border-tinta/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-semibold text-tinta [&::-webkit-details-marker]:hidden">
                {f.question}
                <span aria-hidden="true" className="shrink-0 font-display text-xl leading-none text-samar">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">&minus;</span>
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-redup">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
