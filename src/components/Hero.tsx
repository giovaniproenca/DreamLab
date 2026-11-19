import { hero } from "@/data/hero";
import { whatsappLink } from "@/config/site";
import { Icon } from "./Icon";

export function Hero() {
  const hasMedia = Boolean(hero.video || hero.image);

  return (
    <section id="inicio" aria-labelledby="hero-title" className="theme-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Fundo: foto ou vídeo */}
      <div className="absolute inset-0 -z-10">
        {hero.video ? (
          <video
            className="h-full w-full object-cover"
            src={hero.video}
            poster={hero.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={hero.alt}
          />
        ) : hero.image ? (
          <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" fetchPriority="high" />
        ) : (
          <HeroArt />
        )}
        {hasMedia ? <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" /> : null}
      </div>

      <div className="container flex flex-1 flex-col justify-end pb-10 pt-[calc(var(--header-h)+3rem)] md:pb-14">
        <p className="eyebrow animate-fade-up !text-[#d9d9d9]">Studio Dream Lab · Creative Studio</p>

        <h1
          id="hero-title"
          className="display mt-6 max-w-[14ch] animate-fade-up text-[3rem] [animation-delay:120ms] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem]"
        >
          Imagens que fazem a sua marca ser <span className="text-olive-300">lembrada</span>.
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <p className="max-w-md animate-fade-up text-lg leading-relaxed text-[#d9d9d9] [animation-delay:240ms] md:col-span-5">
            Fotografia, produção de vídeo e criação de websites para marcas que querem se apresentar com clareza,
            elegância e intenção.
          </p>
          <div className="flex animate-fade-up flex-col gap-3 [animation-delay:360ms] sm:flex-row md:col-span-7 md:justify-end">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="whatsapp" size={20} />
              Conversar no WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-ghost !border-white/30 hover:!border-white">
              Ver portfólio
              <Icon name="arrow-right" size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/15 pt-5 text-sm text-[#b3b3b3] md:mt-16">
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            <li>Fotografia</li>
            <li aria-hidden>·</li>
            <li>Vídeo</li>
            <li aria-hidden>·</li>
            <li>Websites</li>
          </ul>
          <a href="#sobre" className="hidden items-center gap-2 sm:flex">
            Role para conhecer
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/25">
              <Icon name="arrow-right" size={16} className="rotate-90" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Composição gráfica da marca, usada enquanto não houver foto/vídeo de abertura. */
function HeroArt() {
  const rays = Array.from({ length: 24 }, (_, i) => {
    const a = (i * Math.PI) / 12;
    return {
      x1: Math.cos(a) * 60,
      y1: Math.sin(a) * 60,
      x2: Math.cos(a) * 230,
      y2: Math.sin(a) * 230,
    };
  });

  return (
    <div className="relative h-full w-full bg-black" role="img" aria-label="Espaço para foto ou vídeo de abertura">
      <div className="absolute right-[-8%] top-[-10%] h-[70%] w-[46%] rounded-brand bg-olive-500 opacity-60 md:opacity-90 md:right-[6%] md:w-[22%]" />
      <div className="absolute right-[14%] top-[22%] hidden h-[34%] w-[26%] rounded-brand bg-olive-950 md:block" />
      <div className="absolute right-[32%] top-[14%] hidden h-[18%] w-[11%] rounded-brand border border-[#262626] bg-navy-500 md:block" />
      <svg
        viewBox="-240 -240 480 480"
        className="absolute right-[-30%] top-[6%] w-[90%] animate-spin-slow text-white/35 md:text-white/80 md:right-[2%] md:top-[18%] md:w-[38%]"
        aria-hidden
      >
        {rays.map((r, i) => (
          <line key={i} {...r} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        ))}
        <circle r="18" fill="currentColor" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}
