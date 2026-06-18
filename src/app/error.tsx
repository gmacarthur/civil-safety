"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="section-pad min-h-[60vh] bg-surface py-20">
      <Container className="max-w-xl text-center">
        <p className="mb-2 font-body text-xs font-bold tracking-[1.5px] text-brand-red">
          SOMETHING WENT WRONG
        </p>
        <h1 className="font-heading text-[30px] font-extrabold uppercase text-text-primary">
          We hit a snag
        </h1>
        <p className="mt-3 font-body text-sm text-text-muted">
          An unexpected error occurred while loading this page. Please try again.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset}>Try again</Button>
          <Button variant="ghost">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
