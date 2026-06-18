import { Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { reviews } from "@/data/reviews";
import { cn } from "@/lib/cn";

const avatarClasses = [
  "bg-brand-red text-white",
  "bg-brand-yellow text-brand-dark",
  "bg-brand-green text-cta-text",
] as const;

export function Testimonials() {
  return (
    <section className="section-pad bg-brand-dark-panel py-11 lg:py-12">
      <Container>
        <h2 className="mb-[26px] font-heading text-[26px] font-extrabold uppercase text-white">
          REAL TRAINING.{" "}
          <span className="text-brand-green-dark">REAL OUTCOMES.</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 min-[881px]:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_0.85fr]">
          {reviews.map((review, index) => (
            <article
              key={review.name}
              className="flex flex-col rounded-md border border-border-panel bg-brand-dark-card p-[18px]"
            >
              <blockquote className="flex-1 font-body text-sm leading-normal font-normal text-text-inverse italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[5px] font-heading text-xs font-bold tracking-[0.4px]",
                    avatarClasses[index % avatarClasses.length],
                  )}
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-heading text-[12.5px] font-bold tracking-[0.4px] text-white">
                    {review.name}
                  </p>
                  <p className="font-body text-[11.5px] text-text-faint">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <aside className="flex flex-col justify-center rounded-md border border-border-panel bg-brand-dark-card p-[18px]">
            <p className="font-heading text-2xl font-extrabold text-white">
              4.8 <span className="text-[15px] text-text-faint">/ 5</span>
            </p>
            <div className="mt-1.5 flex gap-0.5 text-brand-yellow">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-[17px] w-[17px] fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-2 font-body text-xs leading-snug text-text-subtle">
              Based on 1,200+
              <br />
              student reviews
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
