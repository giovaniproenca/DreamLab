import { useEffect, useState } from "react";
import { whatsappLink } from "@/config/site";
import { Icon } from "./Icon";

/** Botão fixo de WhatsApp no celular: aparece depois do hero e some na seção de contato. */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contato");
    let inContact = false;
    const io = contact
      ? new IntersectionObserver(([e]) => {
          inContact = e.isIntersecting;
          update();
        })
      : null;
    if (contact && io) io.observe(contact);
    function update() {
      setVisible(window.scrollY > window.innerHeight * 0.6 && !inContact);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io?.disconnect();
    };
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`btn btn-primary fixed bottom-4 left-4 right-4 z-40 shadow-[0_10px_30px_rgba(0,0,0,.25)] transition-[opacity,transform] duration-500 ease-editorial md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <Icon name="whatsapp" size={20} />
      Conversar no WhatsApp
    </a>
  );
}
