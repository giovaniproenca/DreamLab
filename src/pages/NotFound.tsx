import { Link } from "react-router-dom";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export default function NotFound() {
  useDocumentMeta("Página não encontrada | Studio Dream Lab");
  return (
    <section className="theme-dark flex min-h-[100svh] items-center">
      <div className="container">
        <p className="eyebrow">Erro 404</p>
        <h1 className="display mt-6 text-[3rem] md:text-[5rem]">Esta página saiu de cena.</h1>
        <Link to="/" className="btn btn-primary mt-10">Voltar ao início</Link>
      </div>
    </section>
  );
}
