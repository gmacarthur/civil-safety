import type { Metadata } from "next";

import { CourseResults } from "@/components/courses/CourseResults";
import { courses } from "@/data/courses";
import { parseCourseSearchParams, searchCourses } from "@/lib/courses";
import type { CourseSearchParams } from "@/types";

type CoursesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Course Search",
  description:
    "Search Civil Safety courses across construction, mining, high-risk tickets, plant and machinery, and online training.",
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;

  let parsed: CourseSearchParams = {};
  try {
    parsed = parseCourseSearchParams(params);
  } catch {
    parsed = {};
  }

  const result = searchCourses(parsed);

  return (
    <section className="section-pad min-h-[60vh] bg-surface">
      <CourseResults
        courses={result.courses}
        catalogTotal={courses.length}
        query={parsed.q ?? ""}
        category={parsed.category ?? ""}
        location={parsed.location ?? ""}
        popular={parsed.popular ?? false}
      />
    </section>
  );
}
