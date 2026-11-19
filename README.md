# Studio Dream Lab: site institucional

Site de apresentação do Studio Dream Lab (fotografia, produção de vídeo e criação de websites), feito para ser enviado aos clientes pelo WhatsApp. É mobile-first, editorial e segue o design system Dream Lab.

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS 3 + React Router. É compatível com o Lovable via GitHub.

## Estrutura

| Rota | Conteúdo |
|---|---|
| `/` | Início (hero), 01 Sobre, 02 Serviços (6), 03 Portfólio (abas Fotografia / Produção de vídeo × 5 nichos), 04 Contato |
| `/portfolio/:tipo/:nicho` | Galeria completa do nicho (`tipo` = `fotografia` ou `video`) |

Nichos (iguais nos dois serviços, em ordem alfabética): Arquitetura & Hospitalidade · Eventos & Experiências · Gastronomia · Lifestyle & Pessoas · Moda.

## O que editar

| O quê | Arquivo |
|---|---|
| WhatsApp, e-mail, Instagram, mensagem padrão | `src/config/site.ts` |
| Foto ou vídeo de abertura (hero) | `src/data/hero.ts` + arquivos em `public/hero/` |
| Textos e entregas dos serviços | `src/data/services.ts` |
| Descrições dos nichos, capas e galerias | `src/data/portfolio.ts` + arquivos em `public/portfolio/<tipo>/<nicho>/` |
| Cores e tipografia (tokens) | `tailwind.config.ts` e `src/index.css` |

### Trocar as imagens do portfólio

1. Coloque o arquivo em `public/portfolio/fotografia/moda/01.webp` (por exemplo).
2. Em `src/data/portfolio.ts`, preencha o `src` do item: `src: "/portfolio/fotografia/moda/01.webp"`.
3. Para vídeos, preencha `video` com o link do YouTube ou do Vimeo e `src` com uma miniatura.

Proporções fixas: capas 4:5; fotos 4:5 e 3:2; vídeos 16:9 e 9:16. Use `.webp` ou `.jpg` com até 1600 px no maior lado (~300 KB) para carregar rápido no celular.

## Rodar localmente

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## SEO

- Título, meta description, Open Graph (prévia do link no WhatsApp: `public/og-image.png`), JSON-LD e canonical em `index.html`. As páginas de nicho atualizam o título e a descrição.
- Um único `h1` por página, com `h2` por seção e `h3` por card.
- `public/robots.txt` e `public/sitemap.xml`. Ajuste o domínio se não for `studiodreamlab.com`.

## Design system

Raleway 700 (títulos) e Urbanist 400/700 (texto); oliva `#6f760a` como destaque; base creme `#f8f8f3` com seções pretas (hero, portfólio, rodapé); cantos de 12 px; ícones de linha de 1.5 px. Os logos oficiais estão em `public/brand/`.
