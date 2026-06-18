import { cn } from "@/lib/cn";

const sizes = {
  sm: "h-10",
  md: "h-[46px]",
} as const;

type LogoProps = {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = "md", className, priority = false }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="Civil Safety — Safety and Training"
      width={1072}
      height={230}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "block w-auto max-w-none object-contain object-left",
        sizes[size],
        className,
      )}
    />
  );
}
