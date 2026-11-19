/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURAÇÃO DO SITE: troque aqui os dados de contato.
 *  Tudo o que aparece no site (botões de WhatsApp, rodapé,
 *  seção de contato) lê deste arquivo.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: "Studio Dream Lab",
  shortName: "Dream Lab",
  tagline: "Creative Studio",
  url: "https://studiodreamlab.com",

  /** WhatsApp no formato internacional, só números: 55 + DDD + número. */
  whatsapp: "5500000000000", // TODO: substituir pelo número real
  /** Como o número aparece escrito na tela. */
  whatsappDisplay: "+55 (00) 00000-0000", // TODO

  email: "contato@studiodreamlab.com", // TODO: confirmar
  instagram: "studiodreamlab", // TODO: confirmar o @ (sem o @)
  location: "Brasil", // TODO: cidade / região de atuação

  /** Mensagem padrão que já vem escrita ao abrir o WhatsApp. */
  defaultMessage: "Olá, Dream Lab! Vim pelo site e gostaria de conversar sobre um projeto.",
} as const;

export function whatsappLink(message: string = site.defaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const instagramLink = `https://instagram.com/${site.instagram}`;
export const emailLink = `mailto:${site.email}`;
