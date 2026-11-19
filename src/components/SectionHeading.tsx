import type { ReactNode } from "react";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "split" | "stack";
};

/** Cabeçalho editorial de seção: número + rótulo em hairline, título grande e introdução. */
export function SectionHeading({ index, label, title, intro, id, align = "split" }: Props) {
  return (
    <header className="reveal">
      <div className="flex items-center gap-4 border-b hairline pb-4">
        <span className="eyebrow !text-[var(--accent)]">{index}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <div
        className={`mt-8 grid gap-6 md:mt-12 ${
          align === "split" ? "md:grid-cols-12 md:items-end" : ""
        }`}
      >
        <h2 id={id} className="display text-[2.25rem] sm:text-[3rem] lg:text-[4rem] md:col-span-7 text-balance">
          {title}
        </h2>
        {intro ? (
          <p className="text-muted text-lg leading-relaxed md:col-span-5 md:col-start-8 max-w-prose">{intro}</p>
        ) : null}
      </div>
    </header>
  );
}
