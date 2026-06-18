import { CourseCard } from "@/components/courses/CourseCard";
import { CourseSearchForm } from "@/components/courses/CourseSearchForm";
import { Container } from "@/components/ui/Container";
import type { Course } from "@/types";

type CourseResultsProps = {
  courses: Course[];
  catalogTotal: number;
  query: string;
  category: string;
  location: string;
  popular: boolean;
};

export function CourseResults({
  courses,
  catalogTotal,
  query,
  category,
  location,
  popular,
}: CourseResultsProps) {
  const hasActiveFilters = Boolean(query || category || location || popular);
  const resultsLabel = hasActiveFilters
    ? `Showing ${courses.length} of ${catalogTotal} courses`
    : `Showing all ${catalogTotal} courses`;
  return (
    <Container className="py-10">
      <header className="mb-8">
        <p className="mb-1.5 font-body text-xs font-bold tracking-[1.5px] text-brand-red">
          COURSE SEARCH
        </p>
        <h1 className="font-heading text-[30px] font-extrabold uppercase text-text-primary">
          Find your next qualification
        </h1>
        <p className="mt-2 font-body text-sm text-text-muted">
          Browse {catalogTotal} nationally recognised courses across
          construction, mining and high-risk training.
        </p>
      </header>

      <CourseSearchForm
        query={query}
        category={category}
        location={location}
        popular={popular}
      />

      <p
        className="mt-6 font-body text-sm text-text-muted"
        aria-live="polite"
        aria-atomic="true"
      >
        {resultsLabel}
      </p>

      {courses.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-border bg-surface px-6 py-12 text-center">
          <h2 className="font-heading text-lg font-bold text-text-primary">
            No courses found
          </h2>
          <p className="mt-2 font-body text-sm text-text-muted">
            Try adjusting your search terms or filters to find a matching
            course.
          </p>
        </div>
      )}
    </Container>
  );
}
