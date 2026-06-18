"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { courseCategories } from "@/data/courses";
import { locations } from "@/data/locations";

type CourseSearchFormProps = {
  query: string;
  category: string;
  location: string;
  popular: boolean;
};

function buildSearchParams({
  query,
  category,
  location,
  popular,
}: CourseSearchFormProps): string {
  const params = new URLSearchParams();
  const trimmedQuery = query.trim();

  if (trimmedQuery) params.set("q", trimmedQuery);
  if (category) params.set("category", category);
  if (location) params.set("location", location);
  if (popular) params.set("popular", "true");

  return params.toString();
}

export function CourseSearchForm({
  query: initialQuery,
  category: initialCategory,
  location: initialLocation,
  popular: initialPopular,
}: CourseSearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState(initialLocation);
  const [popularOnly, setPopularOnly] = useState(initialPopular);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setQuery(initialQuery);
    setCategory(initialCategory);
    setLocation(initialLocation);
    setPopularOnly(initialPopular);
  }, [initialQuery, initialCategory, initialLocation, initialPopular]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeout = window.setTimeout(() => {
      const nextParams = buildSearchParams({
        query,
        category,
        location,
        popular: popularOnly,
      });
      const currentParams = window.location.search.replace(/^\?/, "");

      if (nextParams === currentParams) return;

      router.replace(nextParams ? `/courses?${nextParams}` : "/courses", {
        scroll: false,
      });
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [query, category, location, popularOnly, router]);

  return (
    <form
      className="grid gap-4 rounded-lg border border-border-muted bg-white p-5 shadow-sm md:grid-cols-2 xl:grid-cols-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="md:col-span-2 xl:col-span-4">
        <label htmlFor="course-filter-search" className="form-label mb-1.5">
          Search courses
        </label>
        <input
          id="course-filter-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search courses, tickets or keywords..."
          className="form-field"
        />
      </div>

      <div>
        <label htmlFor="course-filter-category" className="form-label mb-1.5">
          Category
        </label>
        <select
          id="course-filter-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="form-field"
        >
          <option value="">All categories</option>
          {courseCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="course-filter-location" className="form-label mb-1.5">
          Location
        </label>
        <select
          id="course-filter-location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          className="form-field"
        >
          <option value="">All locations</option>
          {locations.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-end">
        <label className="flex cursor-pointer items-center gap-2 font-body text-sm text-text-primary">
          <input
            type="checkbox"
            checked={popularOnly}
            onChange={(event) => setPopularOnly(event.target.checked)}
            className="h-4 w-4 rounded border-border text-brand-green focus:ring-brand-green"
          />
          Popular courses only
        </label>
      </div>
    </form>
  );
}
