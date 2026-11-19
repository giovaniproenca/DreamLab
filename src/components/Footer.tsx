import { emailLink, instagramLink, site, whatsappLink } from "@/config/site";
import { NICHES } from "@/data/portfolio";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="theme-dark pb-28 pt-16 md:pb-12">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="white" className="w-[160px]" />
            <p className="mt-6 max-w-xs text-muted">Fotografia, produção de vídeo e criação de websites.</p>
          </div>

          <nav aria-label="Portfólio de fotografia" className="md:col-span-3">
            <p className="eyebrow">Fotografia</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {NICHES.map((n) => (
                <li key={n.slug}>
                  <Link to={`/portfolio/fotografia/${n.slug}`} className="link-underline text-muted hover:text-white">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Portfólio de vídeo" className="md:col-span-3">
            <p className="eyebrow">Produção de vídeo</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {NICHES.map((n) => (
                <li key={n.slug}>
                  <Link to={`/portfolio/video/${n.slug}`} className="link-underline text-muted hover:text-white">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="eyebrow">Contato</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              <li><a className="link-underline text-muted hover:text-white" href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a className="link-underline text-muted hover:text-white" href={emailLink}>E-mail</a></li>
              <li><a className="link-underline text-muted hover:text-white" href={instagramLink} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[#262626] pt-6 text-sm text-subtle sm:flex-row sm:justify-between">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.22em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
