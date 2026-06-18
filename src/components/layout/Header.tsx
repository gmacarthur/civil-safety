"use client";

import { ChevronDown, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { DeadLink } from "@/components/ui/DeadLink";
import { Logo } from "@/components/ui/Logo";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const logo = <Logo size="md" priority />;

  return (
    <header className="relative flex items-center gap-3.5 bg-brand-dark px-5 py-4 lg:gap-9 lg:px-10">
      {isHome ? (
        <DeadLink className="shrink-0" aria-label={`${site.name} home`}>
          {logo}
        </DeadLink>
      ) : (
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          {logo}
        </Link>
      )}

      <nav
        id="mobile-navigation"
        className={cn(
          "mx-auto items-center gap-7 font-body text-sm font-semibold tracking-[0.3px] text-text-nav",
          menuOpen
            ? "shadow-nav-mobile absolute top-full right-0 left-0 z-[60] flex flex-col items-stretch gap-0 border-t border-border-dark-muted bg-brand-dark-elevated px-5 py-1.5 pb-4"
            : "hidden lg:flex lg:flex-row",
        )}
        aria-label="Main navigation"
      >
        {navigation.map((item) => {
          const className = cn(
            "nav-item",
            menuOpen &&
              "flex w-full justify-between border-b border-border-dark py-[13px] text-[15px]",
          );
          const content = (
            <>
              {item.label}
              {item.hasDropdown ? (
                <ChevronDown className="h-3 w-3 opacity-70" aria-hidden="true" />
              ) : null}
            </>
          );

          if (item.label === "Courses") {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={className}
                onClick={() => setMenuOpen(false)}
              >
                {content}
              </Link>
            );
          }

          return (
            <DeadLink
              key={item.label}
              className={className}
              onClick={() => setMenuOpen(false)}
            >
              {content}
            </DeadLink>
          );
        })}
      </nav>

      <div className="ml-auto flex shrink-0 items-center gap-3.5 lg:gap-[22px]">
        <Link
          href="/courses"
          className="hidden p-1 text-text-inverse transition-colors hover:text-brand-green lg:flex"
          aria-label="Search courses"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </Link>

        <Button size="sm" className="hidden sm:inline-flex">
          BOOK TRAINING
        </Button>

        <button
          type="button"
          className="flex items-center justify-center p-1.5 text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-[26px] w-[26px]" aria-hidden="true" />
          ) : (
            <Menu className="h-[26px] w-[26px]" aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
