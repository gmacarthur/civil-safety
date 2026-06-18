"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { popularSearchChips } from "@/data/site";
import { cn } from "@/lib/cn";

export function CourseSearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function navigateToSearch(value: string) {
    const trimmed = value.trim();
    if (!trimmed) {
      router.push("/courses");
      return;
    }

    router.push(`/courses?q=${encodeURIComponent(trimmed)}`);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigateToSearch(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-search relative z-[5] flex translate-y-[26px] flex-col items-stretch gap-[14px] rounded-lg bg-white p-4 lg:translate-y-[38px] lg:flex-row lg:items-center lg:gap-5 lg:p-[18px_22px]"
    >
      <div className="hidden shrink-0 text-brand-dark lg:flex">
        <Search className="h-[30px] w-[30px]" aria-hidden="true" />
      </div>

      <div className="flex-1 border-b border-border-light pb-[14px] lg:border-r lg:border-b-0 lg:pb-0 lg:pr-5">
        <label htmlFor="course-search" className="form-label mb-[5px]">
          What course are you looking for?
        </label>
        <div className="flex flex-col gap-3 min-[561px]:flex-row min-[561px]:items-center">
          <input
            id="course-search"
            name="q"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses, tickets or keywords..."
            className={cn("form-field min-[561px]:flex-1 lg:max-w-[420px]")}
          />
          <Button
            type="submit"
            size="md"
            className="w-full shrink-0 min-[561px]:w-auto"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            SEARCH
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-[9px]">
        <span className="w-full font-body text-[10px] font-bold tracking-[0.6px] text-text-hint sm:w-auto">
          POPULAR SEARCHES:
        </span>
        {popularSearchChips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => navigateToSearch(chip)}
            className="cursor-pointer rounded bg-surface-chip px-[11px] py-1.5 font-body text-xs font-semibold text-text-chip transition-colors hover:bg-brand-green/15 hover:text-brand-green-darker"
          >
            {chip}
          </button>
        ))}
      </div>
    </form>
  );
}
