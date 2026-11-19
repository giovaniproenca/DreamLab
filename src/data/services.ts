import type { IconName } from "@/components/Icon";

export type Service = {
  id: string;
  number: string;
  title: string;
  icon: IconName;
  summary: string;
  deliverables: string[];
  /** Serviço com portfólio por nicho (Fotografia e Vídeo). */
  portfolio?: "fotografia" | "video";
  isNew?: boolean;
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    id: "fotografia",
    number: "01",
    title: "Fotografia",
    icon: "camera",
    summary:
      "Ensaios, produtos, espaços e campanhas com direção de arte e tratamento autoral, pensados para o lugar onde a imagem vai viver.",
    deliverables: ["Direção de arte e roteiro de cenas", "Ensaios em estúdio ou locação", "Tratamento e entrega em alta"],
    portfolio: "fotografia",
    whatsappMessage: "Olá, Dream Lab! Quero um orçamento de fotografia.",
  },
  {
    id: "video",
    number: "02",
    title: "Produção de vídeo",
    icon: "video",
    summary:
      "Do roteiro à edição final: filmes institucionais, campanhas, aftermovies e conteúdos verticais com ritmo e linguagem de cinema.",
    deliverables: ["Roteiro e pré-produção", "Captação e som direto", "Edição, cor e versões para redes"],
    portfolio: "video",
    whatsappMessage: "Olá, Dream Lab! Quero um orçamento de produção de vídeo.",
  },
  {
    id: "drone",
    number: "03",
    title: "Imagens aéreas",
    icon: "drone",
    summary:
      "Fotos e vídeos com drone para revelar a escala de um empreendimento, a geografia de um evento ou a paisagem de um destino.",
    deliverables: ["Planejamento de voo", "Foto e vídeo aéreo em 4K", "Integração com a captação em solo"],
    whatsappMessage: "Olá, Dream Lab! Quero um orçamento de imagens aéreas com drone.",
  },
  {
    id: "websites",
    number: "04",
    title: "Criação de websites",
    icon: "monitor",
    summary:
      "Sites institucionais e portfólios rápidos, responsivos e prontos para receber o seu cliente pelo celular, com a mesma estética das suas imagens.",
    deliverables: ["Estrutura, textos e design", "Desenvolvimento responsivo", "SEO básico e publicação"],
    isNew: true,
    whatsappMessage: "Olá, Dream Lab! Quero saber mais sobre a criação de websites.",
  },
  {
    id: "social",
    number: "05",
    title: "Social media",
    icon: "grid",
    summary:
      "Planejamento e produção de conteúdo recorrente para que o seu perfil tenha consistência visual e uma narrativa de marca clara.",
    deliverables: ["Linha editorial e calendário", "Produção mensal de foto e vídeo", "Peças para feed, stories e reels"],
    whatsappMessage: "Olá, Dream Lab! Quero saber mais sobre social media.",
  },
  {
    id: "ugc",
    number: "06",
    title: "UGC",
    icon: "phone",
    summary:
      "Conteúdo com cara de gente real: vídeos curtos, espontâneos e verticais que geram identificação e funcionam muito bem em anúncios.",
    deliverables: ["Roteiros curtos e ganchos", "Gravação com criadores", "Edição nativa para redes"],
    whatsappMessage: "Olá, Dream Lab! Quero saber mais sobre conteúdo UGC.",
  },
];
