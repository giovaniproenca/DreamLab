import { services } from "@/data/services";
import { whatsappLink } from "@/config/site";
import { useReveal } from "@/lib/useReveal";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="servicos" aria-labelledby="servicos-title" className="border-t hairline bg-white py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="02"
          label="Serviços"
          id="servicos-title"
          title="Do clique ao site no ar."
          intro="Seis frentes que se complementam. Você pode contratar um serviço isolado ou montar um pacote completo para a sua marca."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-brand border hairline bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {services.map((s, i) => (
            <li
              key={s.id}
              id={`servico-${s.id}`}
              className="reveal group relative flex flex-col bg-white p-7 transition-colors duration-500 ease-editorial hover:bg-[#f8f8f3] md:p-9"
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-brand bg-black text-white transition-colors duration-500 group-hover:bg-olive-500">
                  <Icon name={s.icon} size={24} />
                </span>
                <div className="flex items-center gap-3">
                  {s.isNew ? <span className="tag">Novo</span> : null}
                  <span className="eyebrow">{s.number}</span>
                </div>
              </div>

              <h3 className="mt-10 text-h4 md:text-h3">{s.title}</h3>
              <p className="mt-4 text-muted leading-relaxed">{s.summary}</p>

              <ul className="mt-6 space-y-2 border-t hairline pt-6 text-[0.9375rem]">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <Icon name="spark" size={16} className="mt-1 shrink-0 text-olive-500" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-8 text-[0.9375rem] font-bold">
                {s.portfolio ? (
                  <a href={`#portfolio`} data-portfolio-tab={s.portfolio} className="inline-flex items-center gap-2 text-olive-600 hover:text-black">
                    Ver portfólio
                    <Icon name="arrow-right" size={18} />
                  </a>
                ) : null}
                <a
                  href={whatsappLink(s.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-olive-600"
                  aria-label={`Pedir orçamento de ${s.title} pelo WhatsApp`}
                >
                  Pedir orçamento
                  <Icon name="arrow-up-right" size={18} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
