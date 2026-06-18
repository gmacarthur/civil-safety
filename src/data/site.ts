import type { NavItem, SocialLink } from "@/types";

import { locations } from "./locations";

export const site = {
  name: "Civil Safety",
  tagline: "Safety and Training",
  description:
    "Leading safety and training provider for mining, civil, construction and primary industries. RTO 32381, nationally recognised training focused on workplace safety and student success.",
  rto: "32381",
  phone: "1300 248 457",
  phoneHref: "tel:1300248457",
  email: "info@civilsafety.edu.au",
  courseEnquiryUrl: "https://secure.civilsafety.edu.au/course-enquiry/",
  studentPortalUrl: "https://civilsafety.app.axcelerate.com/learner/",
  stats: {
    studentsTrained: "20,000+",
    satisfaction: "95%",
    locations: locations.length,
    employmentRate: "80%",
  },
} as const;

export const navigation: NavItem[] = [
  { label: "Courses", href: "/courses", hasDropdown: true },
  { label: "Locations", href: "/courses?location=", hasDropdown: true },
  { label: "Funding", href: "/courses?category=Funding" },
  { label: "Students", href: site.studentPortalUrl, hasDropdown: true },
  { label: "About", href: "/courses", hasDropdown: true },
  { label: "Contact", href: "/courses" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/civilsafetyrto",
    platform: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/civilsafetyrto",
    platform: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/2849427",
    platform: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@civilsafetyrto32381",
    platform: "youtube",
  },
];

export const popularSearchChips = [
  "Standard 11",
  "Forklift",
  "Working at Heights",
  "EWP",
  "Dogging",
] as const;
