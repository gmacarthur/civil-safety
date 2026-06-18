import { z } from "zod";

import { courses } from "@/data/courses";
import type { Course, CourseSearchParams, CourseSearchResult } from "@/types";

export const courseSearchSchema = z.object({
  q: z.string().max(100).optional(),
  category: z.string().max(80).optional(),
  location: z.string().max(80).optional(),
  popular: z
    .enum(["true", "false"])
    .optional()
    .transform((value) => value === "true"),
});

function matchesQuery(course: Course, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  const haystack = [
    course.title,
    course.subtitle ?? "",
    course.category,
    ...course.keywords,
  ]
    .join(" ")
    .toLowerCase();

  return normalized.split(/\s+/).every((term) => haystack.includes(term));
}

function matchesLocation(course: Course, location: string): boolean {
  const normalized = location.trim().toLowerCase();
  if (!normalized) return true;

  if (course.locations.includes("all")) return true;

  return course.locations.some(
    (slug) =>
      slug.includes(normalized) ||
      slug.replace(/-/g, " ").includes(normalized),
  );
}

export function searchCourses(params: CourseSearchParams = {}): CourseSearchResult {
  const filtered = courses.filter((course) => {
    if (params.popular && !course.popular) return false;
    if (params.category && course.category !== params.category) return false;
    if (params.location && !matchesLocation(course, params.location)) return false;
    if (params.q && !matchesQuery(course, params.q)) return false;
    return true;
  });

  return {
    courses: filtered,
    total: filtered.length,
  };
}

export function parseCourseSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): CourseSearchParams {
  const raw = {
    q: getSingleValue(searchParams.q),
    category: getSingleValue(searchParams.category),
    location: getSingleValue(searchParams.location),
    popular: getSingleValue(searchParams.popular),
  };

  const parsed = courseSearchSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Invalid search parameters");
  }

  return parsed.data;
}

function getSingleValue(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}
