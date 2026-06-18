import { CourseSearchBar } from "@/components/home/CourseSearchBar";
import { Hero } from "@/components/home/Hero";
import { LocationsCta } from "@/components/home/LocationsCta";
import { PopularCourses } from "@/components/home/PopularCourses";
import { StatsBar } from "@/components/home/StatsBar";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function HomePage() {
  return (
    <>
      <div className="bg-brand-dark">
        <Hero />
        <div className="section-pad pb-6 lg:pb-8">
          <CourseSearchBar />
        </div>
      </div>
      <StatsBar />
      <PopularCourses />
      <WhyChoose />
      <Testimonials />
      <LocationsCta />
    </>
  );
}
