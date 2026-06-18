import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CourseCard } from "@/components/courses/CourseCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPopularCourses } from "@/data/courses";

export function PopularCourses() {
  const popularCourses = getPopularCourses();

  return (
    <section className="section-pad bg-surface py-[46px] pb-14">
      <Container>
        <SectionHeading
          eyebrow="POPULAR COURSES"
          title="Get the skills. Get the job."
          action={
            <Link
              href="/courses?popular=true"
              className="flex items-center gap-2 font-body text-xs font-bold tracking-[0.8px] text-text-primary transition-colors hover:text-brand-green-darker"
            >
              VIEW ALL COURSES
              <ArrowRight
                className="h-[15px] w-[15px] text-brand-green-dark"
                aria-hidden="true"
              />
            </Link>
          }
        />

        <div className="mt-7 grid grid-cols-2 gap-4 min-[561px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {popularCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
