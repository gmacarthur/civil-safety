import { Award, Briefcase, MapPin, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { BrandStripe } from "@/components/ui/BrandStripe";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
};

const stats: StatItem[] = [
  {
    icon: Users,
    value: site.stats.studentsTrained,
    label: "STUDENTS TRAINED",
    color: "text-brand-red",
  },
  {
    icon: Award,
    value: site.stats.satisfaction,
    label: "STUDENT SATISFACTION",
    color: "text-brand-yellow",
  },
  {
    icon: MapPin,
    value: String(site.stats.locations),
    label: "TRAINING LOCATIONS",
    color: "text-brand-green-dark",
  },
  {
    icon: Briefcase,
    value: site.stats.employmentRate,
    label: "EMPLOYMENT RATE",
    color: "text-brand-green-dark",
  },
];

export function StatsBar() {
  return (
    <>
      <section className="section-pad bg-brand-dark pt-[58px] pb-[30px] lg:pt-[62px]">
        <Container>
          <div className="flex flex-wrap lg:items-center lg:justify-between">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="flex w-1/2 basis-1/2 items-center gap-4 px-2 py-3.5 lg:w-auto lg:flex-1 lg:justify-center lg:border-r lg:border-border-stat lg:px-3.5 lg:py-0 last:lg:border-r-0"
                >
                  <span className={stat.color}>
                    <Icon
                      className="h-[34px] w-[34px] shrink-0"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <div className="font-heading text-2xl leading-none font-extrabold text-white">
                      {stat.value}
                    </div>
                    <div className="mt-[3px] font-body text-[11px] font-semibold tracking-[0.8px] text-text-nav">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 ? (
                    <span
                      className="ml-auto hidden h-full w-px self-stretch bg-border-stat lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <BrandStripe />
    </>
  );
}
