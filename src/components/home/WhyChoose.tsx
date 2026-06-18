import { Award, Calendar, DollarSign, Users } from "lucide-react";

import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: Users,
    title: "Industry Experienced Trainers",
    description:
      "Learn from professionals with decades of real industry experience across mining, civil and construction.",
    color: "text-brand-red",
  },
  {
    icon: Calendar,
    title: "Flexible Learning",
    description:
      "Face-to-face, onsite, online or blended training — courses 7 days a week across multiple locations.",
    color: "text-brand-yellow",
  },
  {
    icon: Award,
    title: "Nationally Recognised",
    description:
      "High quality training that meets Australian standards, delivered by RTO 32381.",
    color: "text-brand-green-dark",
  },
  {
    icon: DollarSign,
    title: "Funding Options",
    description:
      "CSQ, CTF, User Choice, ISEP, VETiS and more — government funding and payment plans available.",
    color: "text-brand-green-dark",
  },
] as const;

export function WhyChoose() {
  return (
    <section className="section-pad bg-white py-12 lg:py-[52px]">
      <Container>
        <h2 className="mb-[30px] font-heading text-[26px] font-extrabold uppercase text-text-primary">
          WHY CHOOSE <span className="text-brand-red">CIVIL</span>{" "}
          <span className="text-brand-yellow">SAFETY</span>?
        </h2>

        <div className="grid grid-cols-1 gap-[30px] min-[881px]:grid-cols-2 min-[881px]:gap-x-0 min-[881px]:gap-y-[30px] xl:grid-cols-4 xl:gap-0">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isLast = index === pillars.length - 1;

            return (
              <div
                key={pillar.title}
                className={
                  isLast
                    ? "px-0 xl:pl-[26px]"
                    : "border-border-subtle px-0 xl:border-r xl:px-[26px]"
                }
              >
                <span className={`mb-3.5 flex ${pillar.color}`}>
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-[15px] leading-tight font-bold text-text-primary">
                  {pillar.title}
                </h3>
                <p className="font-body text-[13.5px] leading-normal font-normal text-text-muted">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
