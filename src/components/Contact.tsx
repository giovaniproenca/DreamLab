import { emailLink, instagramLink, site, whatsappLink } from "@/config/site";
import { useReveal } from "@/lib/useReveal";
import { Icon, type IconName } from "./Icon";

export function Contact() {
  const ref = useReveal<HTMLElement>();

  const channels: { icon: IconName; label: string; value: string; href: string; external?: boolean }[] = [
    { icon: "whatsapp", label: "WhatsApp", value: site.whatsappDisplay, href: whatsappLink(), external: true },
    { icon: "mail", label: "E-mail", value: site.email, href: emailLink },
    { icon: "instagram", label: "Instagram", value: `@${site.instagram}`, href: instagramLink, external: true },
  ];

  return (
    <section ref={ref} id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-olive-500 py-24 text-white md:py-36">
      <div className="container relative">
        <div className="flex items-center gap-4 border-b border-white/25 pb-4">
          <span className="eyebrow !text-white">04</span>
          <span className="eyebrow !text-white/90">Contato</span>
        </div>

        <div className="mt-12 grid gap-14 md:mt-16 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <h2 id="contato-title" className="display text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] text-balance">
              Vamos criar algo juntos?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90">
              Conte rapidamente sobre o seu projeto. Respondemos pelo WhatsApp com os próximos passos e uma proposta
              sob medida.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-10 w-full bg-black text-white hover:bg-white hover:text-black sm:w-auto !px-8 !py-4 text-lg"
            >
              <Icon name="whatsapp" size={22} />
              Chamar no WhatsApp
            </a>
          </div>

          <ul className="reveal self-end md:col-span-5" style={{ ["--reveal-delay" as string]: "140ms" }}>
            {channels.map((c) => (
              <li key={c.label} className="border-t border-white/25 last:border-b">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <Icon name={c.icon} size={22} />
                    <span>
                      <span className="block text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white/90">{c.label}</span>
                      <span className="block text-lg font-bold break-all">{c.value}</span>
                    </span>
                  </span>
                  <Icon name="arrow-up-right" size={22} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Icon name="spark" size={520} strokeWidth={0.6} className="pointer-events-none absolute -bottom-40 -right-40 text-white/10 animate-spin-slow" />
    </section>
  );
}
