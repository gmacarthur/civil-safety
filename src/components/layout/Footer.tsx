import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";

import { DeadLink } from "@/components/ui/DeadLink";
import { Logo } from "@/components/ui/Logo";
import { site, socialLinks } from "@/data/site";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export function Footer() {
  return (
    <footer className="section-pad bg-brand-dark py-[22px] text-text-inverse">
      <div className="flex flex-col items-start gap-[18px] lg:flex-row lg:items-center lg:justify-between lg:gap-[30px]">
        <DeadLink aria-label={`${site.name} home`} className="shrink-0">
          <Logo size="sm" />
        </DeadLink>

        <div className="flex flex-col items-start gap-3 font-body text-[13.5px] font-medium sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-[18px] sm:gap-y-3 lg:gap-[30px]">
          <DeadLink className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-green" aria-hidden="true" />
            {site.phone}
          </DeadLink>
          <span
            className="hidden h-[18px] w-px bg-divider sm:block"
            aria-hidden="true"
          />
          <DeadLink className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand-green" aria-hidden="true" />
            {site.email}
          </DeadLink>
        </div>

        <div className="flex shrink-0 items-center gap-3.5">
          <span className="font-body text-[11px] font-bold tracking-[0.8px] text-text-subtle">
            FOLLOW US
          </span>
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.platform];
            return (
              <DeadLink
                key={link.platform}
                aria-label={link.label}
                className="flex h-[26px] w-[26px] items-center justify-center rounded bg-social-bg text-text-social"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </DeadLink>
            );
          })}
        </div>
      </div>

      <p className="mt-4 border-t border-border-dark pt-4 text-center font-body text-[11px] text-text-subtle lg:text-left">
        © {new Date().getFullYear()} {site.name}. RTO {site.rto}. All rights
        reserved.
      </p>
    </footer>
  );
}
