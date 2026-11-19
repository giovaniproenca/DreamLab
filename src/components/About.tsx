import { useReveal } from "@/lib/useReveal";
import { Media } from "./Media";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Conversa", text: "Entendemos a sua marca, o objetivo e onde as imagens vão ser usadas." },
  { n: "02", title: "Roteiro", text: "Definimos referências, cenas, locação, equipe e cronograma." },
  { n: "03", title: "Produção", text: "Captamos com direção de arte, luz e cuidado com cada detalhe." },
  { n: "04", title: "Entrega", text: "Edição, tratamento e versões prontas para cada canal." },
];

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="sobre" aria-labelledby="sobre-title" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="01"
          label="Sobre"
          id="sobre-title"
          title={<>Um estúdio criativo para marcas que pensam em imagem.</>}
        />

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
          <div className="reveal md:col-span-5">
            <Media item={{ ratio: "4/5", alt: "Equipe do Studio Dream Lab em produção", src: "" }} sizes="(min-width: 768px) 40vw, 100vw" />
          </div>

          <div className="flex flex-col justify-between gap-12 md:col-span-6 md:col-start-7">
            <div className="reveal space-y-6 text-lg leading-relaxed text-muted" style={{ ["--reveal-delay" as string]: "120ms" }}>
              <p className="text-ink text-[1.375rem] leading-snug md:text-[1.625rem]">
                O Dream Lab nasceu para unir fotografia, vídeo e, agora, websites em um só lugar, com a mesma
                linguagem do início ao fim.
              </p>
              <p>
                Trabalhamos com marcas de arquitetura, hospitalidade, eventos, gastronomia, lifestyle e moda. Cada
                projeto começa por uma pergunta simples: <strong className="text-ink">o que a sua imagem precisa dizer?</strong>
              </p>
              <p>
                A partir daí, cuidamos de tudo: roteiro, produção, edição e entrega, para que você tenha um material
                coeso, bonito e pronto para usar.
              </p>
            </div>

            <ol className="grid gap-px overflow-hidden rounded-brand border hairline bg-[var(--line)] sm:grid-cols-2">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className="reveal bg-[var(--background)] p-6"
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                >
                  <span className="eyebrow !text-[var(--accent)]">{s.n}</span>
                  <h3 className="mt-3 text-h5">{s.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
