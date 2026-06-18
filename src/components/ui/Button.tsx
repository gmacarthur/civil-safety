import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-cta-text hover:bg-brand-green-dark focus-visible:ring-brand-green",
  secondary:
    "border border-btn-secondary-border bg-transparent text-white hover:border-white focus-visible:ring-white",
  dark: "bg-brand-dark text-white hover:bg-brand-dark-elevated focus-visible:ring-brand-dark",
  ghost: "bg-transparent text-text-primary hover:text-brand-green focus-visible:ring-brand-green",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[22px] py-[13px] text-[13px]",
  md: "px-[22px] py-[15px] text-[13px]",
  lg: "px-6 py-[15px] text-[13px]",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded font-body font-bold tracking-[1px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
