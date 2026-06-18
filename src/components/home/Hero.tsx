import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-brand-dark text-white">
      <div className="flex min-h-0 flex-col lg:min-h-[470px] lg:flex-row">
        <div className="z-[2] max-w-none flex-1 px-5 pt-[38px] pb-8 lg:max-w-[560px] lg:px-10 lg:pt-[62px] lg:pb-0">
          <h1 className="font-heading text-[38px] font-black uppercase leading-[0.96] tracking-[-1px] min-[561px]:text-[46px] xl:text-[58px]">
            <span className="block text-brand-red">Get Certified.</span>
            <span className="block text-brand-yellow">Get On Site.</span>
            <span className="block text-brand-green-dark">Get Working.</span>
          </h1>
          <p className="mt-[22px] max-w-[340px] font-body text-[17px] leading-[1.45] font-normal text-text-on-dark">
            Australia&apos;s trusted provider of construction, mining and
            high-risk training.
          </p>
          <div className="mt-[30px] flex w-full flex-col gap-3 min-[561px]:w-auto min-[561px]:flex-row min-[561px]:flex-wrap min-[561px]:gap-4">
            <Button
              href="/courses"
              size="md"
              className="w-full min-[561px]:w-auto"
            >
              FIND A COURSE
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="w-full min-[561px]:w-auto"
            >
              VIEW LOCATIONS
            </Button>
          </div>
        </div>

        <div className="relative mt-0 min-h-[260px] w-full flex-none overflow-hidden lg:min-h-[470px] lg:flex-1">
          <Image
            src="/images/hero.png"
            alt="Civil Safety worker on a mine site"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_30%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-dark lg:from-0% lg:via-transparent lg:via-28% lg:to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
