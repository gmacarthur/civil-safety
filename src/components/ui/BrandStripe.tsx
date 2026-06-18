export function BrandStripe() {
  return (
    <div className="flex h-[5px] w-full" aria-hidden="true">
      <div className="flex-1 bg-brand-red" />
      <div className="flex-1 bg-brand-yellow" />
      <div className="flex-1 bg-brand-green-dark" />
    </div>
  );
}
