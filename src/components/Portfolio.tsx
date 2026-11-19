import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { portfolio, type PortfolioKind } from "@/data/portfolio";
import { useReveal } from "@/lib/useReveal";
import { Icon } from "./Icon";
import { Media } from "./Media";
import { SectionHeading } from "./SectionHeading";

const tabs: { kind: PortfolioKind; label: string; icon: "camera" | "video" }[] = [
  { kind: "fotografia", label: "Fotografia", icon: "camera" },
  { kind: "video", label: "Produção de vídeo", icon: "video" },
];

export function Portfolio() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<PortfolioKind>("fotografia");
  const tabRefs = useRef<Record<PortfolioKind, HTMLButtonElement | null>>({ fotografia: null, video: null });
  const baseId = useId();

  // Links "Ver portfólio" nos cards de serviço trocam a aba certa.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-portfolio-tab]");
      const tab = el?.dataset.portfolioTab;
      if (tab === "fotografia" || tab === "video") setActive(tab);
    };
    document.addEventListener("click", onClick);
    const hash = new URLSearchParams(window.location.search).get("portfolio");
    if (hash === "video" || hash === "fotografia") setActive(hash);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next: PortfolioKind = active === "fotografia" ? "video" : "fotografia";
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const group = portfolio[active];
  const isVideo = active === "video";

  return (
    <section ref={ref} id="portfolio" aria-labelledby="portfolio-title" className="theme-dark py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="03"
          label="Portfólio"
          id="portfolio-title"
          title="Trabalhos organizados por universo."
          intro="Escolha entre fotografia e vídeo e navegue pelos nichos em que atuamos. Cada um tem a sua galeria completa."
        />

        <div
          role="tablist"
          aria-label="Tipo de portfólio"
          onKeyDown={onKeyDown}
          className="reveal sticky top-[calc(var(--header-h)+12px)] z-20 mt-12 inline-flex rounded-full border border-[#262626] bg-black/80 p-1 backdrop-blur md:mt-16"
        >
          {tabs.map((t) => {
            const selected = active === t.kind;
            return (
              <button
                key={t.kind}
                ref={(el) => (tabRefs.current[t.kind] = el)}
                role="tab"
                type="button"
                id={`${baseId}-tab-${t.kind}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(t.kind)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 text-[0.9375rem] font-bold transition-colors duration-300 sm:px-6 ${
                  selected ? "bg-white text-black" : "text-[#b3b3b3] hover:text-white"
                }`}
              >
                <Icon name={t.icon} size={18} />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          key={active}
          className="mt-10 animate-fade-up"
        >
          <p className="max-w-xl text-muted">{group.intro}</p>

          <ol className="mt-10 border-t border-[#262626]">
            {group.niches.map((niche, i) => {
              const preview = isVideo
                ? [niche.gallery[0], niche.gallery[1]]
                : [niche.cover, niche.gallery[2], niche.gallery[3]].map((m) => ({ ...m, ratio: "4/5" as const }));
              const to = `/portfolio/${active}/${niche.slug}`;
              return (
                <li key={niche.slug} className="group border-b border-[#262626] py-10 md:py-14">
                  <article className="grid gap-8 md:grid-cols-12 md:gap-8" aria-labelledby={`${baseId}-${niche.slug}`}>
                    <div className="flex flex-col md:col-span-4">
                      <span className="eyebrow">{String(i + 1).padStart(2, "0")} / 05</span>
                      <h3 id={`${baseId}-${niche.slug}`} className="mt-4 text-h3 md:text-[2.25rem] md:leading-[1.1]">
                        <Link to={to} className="hover:text-olive-300 transition-colors">
                          {niche.title}
                        </Link>
                      </h3>
                      <p className="mt-4 max-w-sm text-muted leading-relaxed">{niche.description}</p>
                      <Link
                        to={to}
                        className="mt-6 inline-flex items-center gap-2 self-start font-bold text-olive-300 md:mt-auto md:pt-8"
                      >
                        Ver galeria completa
                        <Icon name="arrow-right" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <Link
                      to={to}
                      tabIndex={-1}
                      aria-hidden
                      className={`-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:col-span-8 md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 ${
                        isVideo ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-3"
                      } [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
                    >
                      {preview.map((m, k) => (
                        <div
                          key={k}
                          className={`shrink-0 snap-start ${
                            isVideo
                              ? m.ratio === "9/16"
                                ? "w-[42%] md:w-[13.5rem]"
                                : "w-[86%] md:w-auto"
                              : "w-[70%] md:w-auto"
                          }`}
                        >
                          <Media item={m} isVideo={isVideo} sizes="(min-width: 768px) 25vw, 70vw" className={isVideo && m.ratio === "9/16" ? "md:h-full md:!aspect-auto" : ""} />
                        </div>
                      ))}
                    </Link>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
