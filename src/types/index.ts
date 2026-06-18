export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  platform: "facebook" | "instagram" | "linkedin" | "youtube";
};

export type Location = {
  slug: string;
  name: string;
  state: string;
};

export type Course = {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  duration: string;
  locations: string[];
  priceFrom?: number;
  keywords: string[];
  popular?: boolean;
  imageAlt: string;
};

export type Review = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type CourseSearchParams = {
  q?: string;
  category?: string;
  location?: string;
  popular?: boolean;
};

export type CourseSearchResult = {
  courses: Course[];
  total: number;
};
