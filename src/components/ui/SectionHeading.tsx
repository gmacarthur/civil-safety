import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div>
        {eyebrow ? (
          <p className="mb-1.5 font-body text-xs font-bold tracking-[1.5px] text-brand-red">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-heading text-[26px] font-extrabold uppercase leading-tight tracking-tight text-text-primary md:text-[30px]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
