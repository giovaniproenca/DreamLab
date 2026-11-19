import { useCallback, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Contact } from "@/components/Contact";
import { Icon } from "@/components/Icon";
import { Lightbox } from "@/components/Lightbox";
import { Media } from "@/components/Media";
import { whatsappLink } from "@/config/site";
import { findNiche, portfolio } from "@/data/portfolio";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { useReveal } from "@/lib/useReveal";

export default function NichePage() {
  const { kind, slug } = useParams();
  const found = findNiche(kind, slug);
  const ref = useReveal<HTMLDivElement>();
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);

  useDocumentMeta(
    found ? `${found.niche.title} · ${found.group.label} | Studio Dream Lab` : "Studio Dream Lab",
    found?.niche.description,
    `/portfolio/${kind}/${slug}`,
  );

  if (!found) return <Navigate to="/" replace />;
  const { group, niche } = found;
  const isVideo = group.kind === "video";
  const otherKind = isVideo ? "fotografia" : "video";
  const others = group.niches.filter((n) => n.slug !== niche.slug);
  const viewable = niche.gallery.filter((m) => (isVideo ? m.video : m.src));

  const openItem = (m: (typeof niche.gallery)[number]) => {
    const i = viewable.indexOf(m);
    if (i >= 0) setIndex(i);
  };

  return (
    <div ref={ref}>
      <section aria-labelledby="nicho-title" className="pb-16 pt-[calc(var(--header-h)+3rem)] md:pb-24 md:pt-[calc(var(--header-h)+5rem)]">
        <div className="container">
          <nav aria-label="Você está em" className="reveal">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-subtle">
              <li><Link to="/" className="link-underline hover:text-ink">Início</Link></li>
              <li aria-hidden>/</li>
              <li><Link to={`/?portfolio=${group.kind}#portfolio`} className="link-underline hover:text-ink">{group.label}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">{niche.title}</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12 md:items-end">
            <div className="reveal md:col-span-8">
              <span className="tag">
                <Icon name={isVideo ? "video" : "camera"} size={14} />
                {group.label}
              </span>
              <h1 id="nicho-title" className="display mt-6 text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] text-balance">
                {niche.title}
              </h1>
            </div>
            <div className="reveal md:col-span-4" style={{ ["--reveal-delay" as string]: "120ms" }}>
              <p className="text-lg leading-relaxed text-muted">{niche.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Olá, Dream Lab! Vi o portfólio de ${niche.title} (${group.label}) e quero um orçamento.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Icon name="whatsapp" size={20} />
                  Pedir orçamento
                </a>
                <Link to={`/portfolio/${otherKind}/${niche.slug}`} className="btn btn-ghost">
                  Ver em {portfolio[otherKind].label.toLowerCase()}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section aria-label={`Galeria de ${niche.title}`} className="pb-24 md:pb-36">
        <div className="container">
          {isVideo ? (
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
              {niche.gallery.map((m, i, all) => {
                const vertical = m.ratio === "9/16";
                // No celular, verticais andam em pares; um vertical sozinho fica centralizado.
                const paired = vertical && (all[i - 1]?.ratio === "9/16" || all[i + 1]?.ratio === "9/16");
                return (
                <li
                  key={i}
                  className={`reveal ${
                    vertical ? (paired ? "col-span-1 md:col-span-4" : "col-span-2 mx-auto w-1/2 md:col-span-4 md:mx-0 md:w-full") : "col-span-2 md:col-span-8"
                  }`}
                  style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
                >
                  <GalleryButton onOpen={() => openItem(m)} enabled={Boolean(m.video)} label={m.alt}>
                    <Media item={m} isVideo sizes="(min-width: 768px) 66vw, 100vw" className={m.ratio === "9/16" ? "md:h-full md:!aspect-auto" : ""} />
                  </GalleryButton>
                </li>
                );
              })}
            </ul>
          ) : (
            <ul className="columns-2 gap-3 md:columns-3 md:gap-4 [&>li]:mb-3 md:[&>li]:mb-4">
              {niche.gallery.map((m, i) => (
                <li key={i} className="reveal break-inside-avoid" style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                  <GalleryButton onOpen={() => openItem(m)} enabled={Boolean(m.src)} label={m.alt}>
                    <Media item={m} sizes="(min-width: 768px) 33vw, 50vw" />
                  </GalleryButton>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Outros nichos */}
      <section aria-labelledby="outros-title" className="border-t hairline bg-white py-20 md:py-28">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <h2 id="outros-title" className="text-h3 md:text-h2">Outros nichos em {group.label.toLowerCase()}</h2>
          </div>
          <ul className="mt-10 border-t hairline">
            {others.map((n) => (
              <li key={n.slug} className="border-b hairline">
                <Link to={`/portfolio/${group.kind}/${n.slug}`} className="group flex items-center justify-between gap-6 py-6">
                  <span className="text-h5 md:text-h4 font-heading font-bold transition-colors group-hover:text-olive-600">{n.title}</span>
                  <Icon name="arrow-right" size={24} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
      <Lightbox items={viewable} index={index} onClose={close} onIndex={setIndex} />
    </div>
  );
}

function GalleryButton({
  enabled,
  onOpen,
  label,
  children,
}: {
  enabled: boolean;
  onOpen: () => void;
  label: string;
  children: React.ReactNode;
}) {
  if (!enabled) return <>{children}</>;
  return (
    <button type="button" onClick={onOpen} className="block h-full w-full text-left" aria-label={`Ampliar: ${label}`}>
      {children}
    </button>
  );
}
