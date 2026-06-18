import type { Location } from "@/types";

export const locations: Location[] = [
  { slug: "head-office", name: "Head Office", state: "QLD" },
  { slug: "brisbane", name: "Brisbane", state: "QLD" },
  { slug: "gold-coast", name: "Gold Coast", state: "QLD" },
  { slug: "cairns", name: "Cairns", state: "QLD" },
  { slug: "townsville", name: "Townsville", state: "QLD" },
  { slug: "mackay", name: "Mackay", state: "QLD" },
  { slug: "rockhampton", name: "Rockhampton", state: "QLD" },
  { slug: "gladstone", name: "Gladstone", state: "QLD" },
  { slug: "bundaberg", name: "Bundaberg", state: "QLD" },
  { slug: "mareeba", name: "Mareeba", state: "QLD" },
  { slug: "moranbah", name: "Moranbah", state: "QLD" },
  { slug: "perth", name: "Perth", state: "WA" },
  { slug: "kalgoorlie", name: "Kalgoorlie", state: "WA" },
  { slug: "bunbury", name: "Bunbury", state: "WA" },
  { slug: "newman", name: "Newman", state: "WA" },
  { slug: "weipa", name: "Weipa", state: "QLD" },
];

export const mapPins = [
  { positionClass: "left-[25%] top-[47%]" },
  { positionClass: "left-[22%] top-[58%]" },
  { positionClass: "left-1/2 top-[29%]" },
  { positionClass: "left-[57%] top-[55%]" },
  { positionClass: "left-[57%] top-[62%]" },
  { positionClass: "left-3/4 top-[38%]" },
  { positionClass: "left-[80%] top-[48%]" },
  { positionClass: "left-[80%] top-[63%]" },
  { positionClass: "left-[83%] top-[60%]" },
  { positionClass: "left-[72%] top-3/4" },
  { positionClass: "left-[85%] top-[71%]" },
  { positionClass: "left-[80%] top-[91%]" },
] as const;
