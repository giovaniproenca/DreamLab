type Props = { variant?: "black" | "white"; className?: string };

/** Logo oficial (PNG do design system). Nunca redesenhar o wordmark. */
export function Logo({ variant = "black", className = "" }: Props) {
  return (
    <img
      src={`/brand/dreamlab-logo-${variant}.png`}
      alt="Dream Lab, Creative Studio"
      width={633}
      height={165}
      className={`h-auto ${className}`}
      decoding="async"
    />
  );
}
