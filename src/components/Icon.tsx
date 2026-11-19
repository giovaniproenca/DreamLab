import type { SVGProps } from "react";

/**
 * Ícones de linha do design system Dream Lab: grade 24×24, traço 1.5px,
 * pontas arredondadas, sem preenchimento. Usam `currentColor`, então
 * herdam a cor do texto.
 */
const paths = {
  spark: (
    <>
      <path d="M15 12h6M14.6 13.5l5.19 3M13.5 14.6l3 5.19M12 15v6M10.5 14.6l-3 5.19M9.4 13.5l-5.19 3M9 12H3M9.4 10.5l-5.19-3M10.5 9.4l-3-5.19M12 9V3M13.5 9.4l3-5.19M14.6 10.5l5.19-3" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.6l1.4-2h7l1.4 2h2.6A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10.5 21 7.5v9l-5-3" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5v7l5.5-3.5z" />
    </>
  ),
  aperture: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.3 3.3 9.5 11.6M20.4 9.2l-9.6.1M18.2 18.4l-4.8-8.3M9.7 20.7l4.8-8.3M3.6 14.8l9.6-.1M5.8 5.6l4.8 8.3" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z" />
      <path d="m14.5 7.5 3 3" />
    </>
  ),
  drone: (
    <>
      <rect x="9.5" y="10.5" width="5" height="3" rx="1" />
      <path d="M9.5 11 7 8.5M14.5 11 17 8.5M9.5 13 7 15.5M14.5 13l2.5 2.5" />
      <ellipse cx="6" cy="7.5" rx="3" ry="1" />
      <ellipse cx="18" cy="7.5" rx="3" ry="1" />
      <ellipse cx="6" cy="16.5" rx="3" ry="1" />
      <ellipse cx="18" cy="16.5" rx="3" ry="1" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M3 8h18" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-left": <path d="M19 12H5M11 6l-6 6 6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.2-4.1A8 8 0 1 1 8.3 19z" />
      <path d="M9.2 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.6 1.5c.1.2 0 .4-.1.6l-.5.6c-.1.1-.1.3 0 .5a5.6 5.6 0 0 0 2.4 2.2c.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.5-2.6.1a8.6 8.6 0 0 1-4.4-4.2c-.6-1.3-.3-2.4.2-3.1z" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number; title?: string };

export function Icon({ name, size = 24, title, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
