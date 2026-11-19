import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export default function Home() {
  useDocumentMeta(
    "Studio Dream Lab | Fotografia, Produção de Vídeo e Websites",
    "Studio Dream Lab: estúdio criativo de fotografia, produção de vídeo, imagens aéreas, social media, UGC e criação de websites.",
    "/",
  );

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
