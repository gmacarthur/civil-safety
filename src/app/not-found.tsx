import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="section-pad min-h-[60vh] bg-surface py-20">
      <Container className="max-w-xl text-center">
        <p className="mb-2 font-body text-xs font-bold tracking-[1.5px] text-brand-red">
          404
        </p>
        <h1 className="font-heading text-[30px] font-extrabold uppercase text-text-primary">
          Page not found
        </h1>
        <p className="mt-3 font-body text-sm text-text-muted">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="ghost">Back to home</Button>
          <Button href="/courses" variant="ghost">
            Search courses
          </Button>
        </div>
      </Container>
    </section>
  );
}
