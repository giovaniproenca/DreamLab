import { useEffect, useRef } from "react";
import type { MediaItem } from "@/data/portfolio";
import { Icon } from "./Icon";

function toEmbed(url: string) {
  const yt = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0`;
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
  return url;
}

type Props = {
  items: MediaItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
};

export function Lightbox({ items, index, onClose, onIndex }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onIndex(((index ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex(((index ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onIndex]);

  const item = index !== null ? items[index] : null;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="theme-dark m-0 h-[100dvh] max-h-none w-screen max-w-none bg-black/95 p-0 backdrop:bg-black/80"
      aria-label="Visualização ampliada"
    >
      {item ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="eyebrow">
              {String((index ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-brand" aria-label="Fechar">
              <Icon name="close" size={26} />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center px-4 pb-6">
            {item.video ? (
              <iframe
                src={toEmbed(item.video)}
                title={item.alt}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="max-h-full w-full max-w-5xl rounded-brand"
                style={{ aspectRatio: item.ratio }}
              />
            ) : (
              <img src={item.src} alt={item.alt} className="max-h-full max-w-full rounded-brand object-contain" />
            )}
          </div>
          {items.length > 1 ? (
            <div className="flex justify-center gap-3 pb-6">
              <button type="button" className="btn btn-ghost" onClick={() => onIndex(((index ?? 0) - 1 + items.length) % items.length)} aria-label="Anterior">
                <Icon name="arrow-left" size={20} />
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => onIndex(((index ?? 0) + 1) % items.length)} aria-label="Próxima">
                <Icon name="arrow-right" size={20} />
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </dialog>
  );
}
