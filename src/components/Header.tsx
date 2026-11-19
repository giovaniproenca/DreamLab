import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { whatsappLink } from "@/config/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

type Props = {
  /** A página começa com uma seção escura atrás do cabeçalho. */
  overDark?: boolean;
};

export function Header({ overDark = true }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const dark = overDark && !scrolled && !open;
  const href = (h: string) => (isHome ? h : `/${h}`);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-brand focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-editorial ${
          dark
            ? "theme-dark !bg-transparent border-b border-transparent"
            : "bg-[#f8f8f3]/85 backdrop-blur-md border-b border-[#dbddc2]/70"
        }`}
        style={{ height: "var(--header-h)" }}
      >
        <div className="container flex h-full items-center justify-between gap-6">
          <Link to="/" aria-label="Dream Lab, página inicial" className="shrink-0" onClick={() => isHome && window.scrollTo({ top: 0 })}>
            <Logo variant={dark ? "white" : "black"} className="w-[118px] sm:w-[132px]" />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={href(item.href)} className="link-underline text-[0.9375rem] font-bold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn hidden sm:inline-flex !min-h-[42px] !py-2 !px-5 ${dark ? "btn-accent" : "btn-primary"}`}
            >
              <Icon name="whatsapp" size={20} />
              Fale conosco
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-brand lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile em tela cheia */}
      <div
        id="menu-mobile"
        className={`theme-dark fixed inset-0 z-40 flex flex-col pt-[var(--header-h)] transition-[opacity,visibility] duration-500 ease-editorial lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Menu mobile" className="container flex flex-1 flex-col justify-between pb-safe pt-8">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li
                key={item.href}
                className="border-b border-[#262626] transition-[opacity,transform] duration-700 ease-editorial"
                style={{
                  transitionDelay: open ? `${80 + i * 50}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(12px)",
                }}
              >
                <a
                  href={href(item.href)}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-[2.5rem]">{item.label}</span>
                  <span className="eyebrow">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="btn btn-primary mt-10 w-full"
          >
            <Icon name="whatsapp" size={20} />
            Conversar no WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
