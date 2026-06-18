import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { DeadLink } from "@/components/ui/DeadLink";
import { mapPins } from "@/data/locations";
import { site } from "@/data/site";

export function LocationsCta() {
  return (
    <section id="locations" className="grid grid-cols-1 bg-surface xl:grid-cols-[1.55fr_1fr]">
      <div className="section-pad section-y-lg flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        <div className="flex-1">
          <p className="mb-2 font-body text-xs font-bold tracking-[1.2px] text-brand-red">
            TRAINING ACROSS AUSTRALIA
          </p>
          <h2 className="font-heading text-[30px] leading-[1.05] font-extrabold uppercase text-text-primary">
            Find a location
            <br />
            near you.
          </h2>
          <p className="mt-3.5 font-body text-sm text-text-secondary">
            {site.stats.locations} training locations nationwide.
          </p>
          <DeadLink className="mt-[18px] inline-flex items-center gap-2 font-body text-xs font-bold tracking-[0.7px] text-text-primary">
            VIEW ALL LOCATIONS
            <ArrowRight
              className="h-[15px] w-[15px] text-brand-green-dark"
              aria-hidden="true"
            />
          </DeadLink>
        </div>

        <div className="relative mx-0 h-[220px] w-full max-w-[280px] shrink-0 sm:h-[270px]">
          <Image
            src="/images/au-map.svg"
            alt="Australia training locations map"
            fill
            className="object-contain opacity-90"
          />
          {mapPins.map((pin, index) => (
            <span
              key={`${pin.positionClass}-${index}`}
              className={`absolute h-[13px] w-[13px] -translate-x-1/2 -translate-y-full rotate-[-45deg] rounded-full rounded-br-none border-[1.5px] border-white bg-brand-green-pin shadow-[0_1px_3px_rgba(0,0,0,0.3)] ${pin.positionClass}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="section-pad section-y-lg flex flex-col justify-center bg-brand-green">
        <h2 className="font-heading text-[26px] leading-[1.05] font-extrabold uppercase text-cta-text">
          READY TO START
          <br />
          YOUR JOURNEY?
        </h2>
        <p className="mt-3 max-w-[280px] font-body text-sm leading-normal text-text-on-green">
          Book your training today and take the first step towards a safer
          future.
        </p>
        <Button variant="dark" size="md" className="mt-[22px] self-start">
          BOOK TRAINING NOW
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
