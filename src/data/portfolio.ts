/**
 * PORTFÓLIO
 * ───────────────────────────────────────────────────────────────
 * Para trocar uma imagem: coloque o arquivo em /public/portfolio/...
 * e preencha o campo `src` (ex.: "/portfolio/fotografia/moda/01.jpg").
 * Enquanto `src` estiver vazio, o site mostra um espaço reservado
 * com a proporção correta.
 *
 * Proporções fixas para manter a grade consistente:
 *   - Capa do nicho ............ 4:5 (retrato)
 *   - Galeria de fotografia .... 4:5 e 3:2
 *   - Galeria de vídeo ......... 16:9 (horizontal) e 9:16 (vertical)
 *
 * Vídeos: preencha `video` com um link do YouTube ou do Vimeo.
 * Recomendações: imagens em .webp ou .jpg, até 1600px no maior lado, ~300 KB.
 */

export type Ratio = "4/5" | "3/2" | "16/9" | "9/16" | "1/1";

export type MediaItem = {
  src?: string;
  alt: string;
  ratio: Ratio;
  /** Link do YouTube/Vimeo (apenas para vídeos). */
  video?: string;
  caption?: string;
};

export type Niche = {
  slug: string;
  title: string;
  description: string;
  cover: MediaItem;
  gallery: MediaItem[];
};

export type PortfolioKind = "fotografia" | "video";

export type PortfolioGroup = {
  kind: PortfolioKind;
  label: string;
  intro: string;
  niches: Niche[];
};

/** Lista oficial de nichos, em ordem alfabética, usada nos dois serviços. */
export const NICHES = [
  { slug: "arquitetura-hospitalidade", title: "Arquitetura & Hospitalidade" },
  { slug: "eventos-experiencias", title: "Eventos & Experiências" },
  { slug: "gastronomia", title: "Gastronomia" },
  { slug: "lifestyle-pessoas", title: "Lifestyle & Pessoas" },
  { slug: "moda", title: "Moda" },
] as const;

const photoDescriptions: Record<string, string> = {
  "arquitetura-hospitalidade":
    "Hotéis, pousadas, restaurantes e projetos de interiores fotografados com luz natural e enquadramentos que valorizam cada material.",
  "eventos-experiencias":
    "Casamentos, lançamentos, festivais e encontros corporativos registrados com discrição, atentos aos detalhes e às pessoas.",
  gastronomia:
    "Pratos, bebidas e bastidores de cozinha com styling cuidadoso, para cardápios, delivery, redes e campanhas.",
  "lifestyle-pessoas":
    "Retratos, ensaios de marca pessoal e cenas do cotidiano que mostram quem está por trás do negócio.",
  moda: "Campanhas, lookbooks e e-commerce com direção de arte, casting e luz pensados para cada coleção.",
};

const videoDescriptions: Record<string, string> = {
  "arquitetura-hospitalidade":
    "Tours cinematográficos, vídeos de empreendimento e filmes de experiência para hotéis e espaços.",
  "eventos-experiencias":
    "Aftermovies, teasers e coberturas completas, com versões curtas entregues para redes enquanto o evento ainda repercute.",
  gastronomia: "Receitas, bastidores e filmes de marca que despertam apetite em poucos segundos de tela.",
  "lifestyle-pessoas": "Vídeos de marca pessoal, depoimentos e narrativas documentais com pessoas reais.",
  moda: "Fashion films, campanhas e conteúdos verticais com movimento, ritmo e trilha sob medida.",
};

const photoPattern: Ratio[] = ["4/5", "3/2", "4/5", "4/5", "3/2", "4/5"];
// Linhas no desktop: [16:9 + 9:16], [9:16 + 16:9], [16:9 + 9:16]
const videoPattern: Ratio[] = ["16/9", "9/16", "9/16", "16/9", "16/9", "9/16"];

function buildGallery(kind: PortfolioKind, title: string): MediaItem[] {
  const pattern = kind === "fotografia" ? photoPattern : videoPattern;
  return pattern.map((ratio, i) => ({
    src: "",
    ratio,
    alt: `${title}: ${kind === "fotografia" ? "fotografia" : "vídeo"} ${String(i + 1).padStart(2, "0")}`,
    ...(kind === "video" ? { video: "" } : {}),
  }));
}

function buildGroup(kind: PortfolioKind): Niche[] {
  const descriptions = kind === "fotografia" ? photoDescriptions : videoDescriptions;
  return NICHES.map(({ slug, title }) => ({
    slug,
    title,
    description: descriptions[slug],
    cover: { src: "", ratio: "4/5", alt: `${title}: capa` },
    gallery: buildGallery(kind, title),
  }));
}

export const portfolio: Record<PortfolioKind, PortfolioGroup> = {
  fotografia: {
    kind: "fotografia",
    label: "Fotografia",
    intro: "Imagens com direção, luz e intenção, organizadas pelo universo de cada cliente.",
    niches: buildGroup("fotografia"),
  },
  video: {
    kind: "video",
    label: "Produção de vídeo",
    intro: "Filmes curtos e longos, horizontais e verticais, para contar a história da sua marca em movimento.",
    niches: buildGroup("video"),
  },
};

export function findNiche(kind: string | undefined, slug: string | undefined) {
  if (kind !== "fotografia" && kind !== "video") return undefined;
  const group = portfolio[kind];
  const niche = group.niches.find((n) => n.slug === slug);
  return niche ? { group, niche } : undefined;
}
