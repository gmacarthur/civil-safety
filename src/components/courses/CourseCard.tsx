import { ArrowRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import type { Course } from "@/types";

type CourseCardProps = {
  course: Course;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  const priceLabel = course.priceFrom
    ? `FROM $${course.priceFrom}`
    : "ENQUIRE";

  return (
    <article
      className={cn(
        "shadow-card flex flex-col overflow-hidden rounded-md bg-white",
        className,
      )}
    >
      <div className="relative h-24 overflow-hidden bg-surface-placeholder">
        <Image
          src={`/images/courses/${course.slug}.png`}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 560px) 50vw, 200px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-[13px] pt-[13px]">
        <h3 className="font-heading text-sm font-bold leading-tight text-text-primary">
          {course.title}
        </h3>
        {course.subtitle ? (
          <p className="mt-px font-body text-[12.5px] font-medium text-text-muted">
            {course.subtitle}
          </p>
        ) : null}

        <div className="mt-[11px] flex items-center gap-[7px] font-body text-xs text-text-secondary">
          <Clock className="h-[13px] w-[13px] text-text-hint" aria-hidden="true" />
          <span>{course.duration}</span>
        </div>

        <div className="mt-[5px] flex items-center gap-[7px] font-body text-xs text-text-secondary">
          <MapPin className="h-[13px] w-[13px] text-text-hint" aria-hidden="true" />
          <span>
            {course.locations.includes("all")
              ? "All Locations"
              : `${course.locations.length} Locations`}
          </span>
        </div>
      </div>

      <div className="mt-[13px] flex items-center justify-between border-t border-border-card px-[13px] py-[11px]">
        <span className="font-body text-xs font-bold tracking-[0.5px] text-brand-green-darker">
          {priceLabel}
        </span>
        <Link
          href={`/courses?q=${encodeURIComponent(course.title)}`}
          className="text-brand-green-darker transition-colors hover:text-brand-green"
          aria-label={`View ${course.title}`}
        >
          <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
