import type { MediaItem, Ratio } from "@/data/portfolio";
import { Icon } from "./Icon";

const ratioLabel: Record<Ratio, string> = {
  "4/5": "4:5",
  "3/2": "3:2",
  "16/9": "16:9",
  "9/16": "9:16",
  "1/1": "1:1",
};

type Props = {
  item: MediaItem;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Mostra o ícone de play sobre a mídia (itens de vídeo). */
  isVideo?: boolean;
};

/**
 * Espaço de mídia com proporção fixa. Sem `src`, mostra um placeholder
 * que indica a proporção esperada. Com `src`, carrega a imagem com lazy-loading.
 */
export function Media({ item, className = "", sizes = "100vw", priority = false, isVideo = false }: Props) {
  return (
    <div
      className={`group/media relative overflow-hidden rounded-brand bg-[var(--surface)] ${className}`}
      style={{ aspectRatio: item.ratio }}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-editorial group-hover/media:scale-[1.03]"
        />
      ) : (
        <div
          role="img"
          aria-label={`${item.alt} (imagem a substituir)`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-[var(--line)] rounded-brand
            bg-[radial-gradient(120%_90%_at_30%_20%,#f1f1e7_0%,#e6e8d3_55%,#dbddc2_100%)]
            [.theme-dark_&]:bg-[radial-gradient(120%_90%_at_30%_20%,#1c1e03_0%,#111111_60%,#0a0a0a_100%)]"
        >
          <Icon name={isVideo ? "play" : "spark"} size={28} className="text-olive-500 [.theme-dark_&]:text-olive-300 opacity-70" />
          <span className="eyebrow !text-[0.625rem] !tracking-[0.2em]">{ratioLabel[item.ratio]} · substituir</span>
        </div>
      )}
      {isVideo && item.src ? (
        <span className="pointer-events-none absolute inset-0 grid place-items-center bg-black/10 text-white">
          <Icon name="play" size={48} />
        </span>
      ) : null}
    </div>
  );
}
