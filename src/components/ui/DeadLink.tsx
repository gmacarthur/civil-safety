import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type DeadLinkProps = ComponentPropsWithoutRef<"span"> & {
  children: ReactNode;
};

export function DeadLink({ className, children, ...props }: DeadLinkProps) {
  return (
    <span
      aria-disabled="true"
      className={cn("cursor-default", className)}
      {...props}
    >
      {children}
    </span>
  );
}
