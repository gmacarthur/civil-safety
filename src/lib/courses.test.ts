import { describe, expect, it } from "vitest";

import { courses } from "@/data/courses";
import {
  courseSearchSchema,
  parseCourseSearchParams,
  searchCourses,
} from "@/lib/courses";

describe("searchCourses", () => {
  it("returns all courses when no filters are applied", () => {
    const result = searchCourses();

    expect(result.courses).toHaveLength(courses.length);
    expect(result.total).toBe(courses.length);
  });

  it("filters by keyword across title and keywords", () => {
    const result = searchCourses({ q: "forklift" });

    expect(result.courses).toHaveLength(1);
    expect(result.courses[0]?.slug).toBe("forklift");
  });

  it("requires every search term to match", () => {
    const result = searchCourses({ q: "standard 11" });

    expect(result.courses.map((course) => course.slug)).toEqual(
      expect.arrayContaining(["standard-11", "standard-11-refresher"]),
    );
    expect(result.courses.every((course) => course.slug.includes("standard-11"))).toBe(
      true,
    );
  });

  it("filters by category", () => {
    const result = searchCourses({ category: "Funding" });

    expect(result.courses).toHaveLength(2);
    expect(result.courses.every((course) => course.category === "Funding")).toBe(
      true,
    );
  });

  it("filters by location slug and matches courses available everywhere", () => {
    const brisbane = searchCourses({ location: "brisbane" });
    const perth = searchCourses({ location: "perth" });

    expect(brisbane.courses.some((course) => course.slug === "standard-11")).toBe(
      true,
    );
    expect(perth.courses.some((course) => course.slug === "bhp-waio-voc")).toBe(
      true,
    );
    expect(
      brisbane.courses.some((course) => course.slug === "bhp-waio-voc"),
    ).toBe(false);
  });

  it("filters popular courses only", () => {
    const result = searchCourses({ popular: true });

    expect(result.courses.length).toBeGreaterThan(0);
    expect(result.courses.every((course) => course.popular)).toBe(true);
  });

  it("combines multiple filters", () => {
    const result = searchCourses({
      q: "mining",
      category: "Mining Courses",
      popular: true,
    });

    expect(result.courses).toHaveLength(1);
    expect(result.courses[0]?.slug).toBe("standard-11");
  });

  it("returns an empty result when nothing matches", () => {
    const result = searchCourses({ q: "underwater basket weaving" });

    expect(result.courses).toHaveLength(0);
    expect(result.total).toBe(0);
  });
});

describe("courseSearchSchema", () => {
  it("parses valid query parameters", () => {
    const parsed = courseSearchSchema.parse({
      q: "forklift",
      category: "Plant and Machinery",
      location: "brisbane",
      popular: "true",
    });

    expect(parsed).toEqual({
      q: "forklift",
      category: "Plant and Machinery",
      location: "brisbane",
      popular: true,
    });
  });

  it("rejects query strings that are too long", () => {
    const parsed = courseSearchSchema.safeParse({
      q: "a".repeat(101),
    });

    expect(parsed.success).toBe(false);
  });
});

describe("parseCourseSearchParams", () => {
  it("normalises array search params to a single value", () => {
    const parsed = parseCourseSearchParams({
      q: ["forklift", "ignored"],
      popular: ["true"],
    });

    expect(parsed).toEqual({
      q: "forklift",
      popular: true,
    });
  });

  it("throws when parameters are invalid", () => {
    expect(() =>
      parseCourseSearchParams({
        popular: "maybe",
      }),
    ).toThrow("Invalid search parameters");
  });
});

describe("GET /api/courses", () => {
  it("returns matching courses for valid query parameters", async () => {
    const { GET } = await import("@/app/api/courses/route");
    const response = await GET(
      new Request("http://localhost/api/courses?q=forklift&popular=true"),
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.courses).toHaveLength(1);
    expect(body.courses[0]?.slug).toBe("forklift");
    expect(response.headers.get("Cache-Control")).toContain("s-maxage=60");
  });

  it("returns 400 for invalid query parameters", async () => {
    const { GET } = await import("@/app/api/courses/route");
    const response = await GET(
      new Request("http://localhost/api/courses?popular=maybe"),
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Invalid search parameters");
    expect(body.details.popular).toBeDefined();
  });
});
