export function CaseStudiesSkeleton() {
  return (
    <section className="section-padding px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 h-4 w-24 animate-pulse rounded bg-white/5" />
        <div className="mb-4 h-10 w-2/3 max-w-md animate-pulse rounded-lg bg-white/5" />
        <div className="h-4 w-full max-w-lg animate-pulse rounded bg-white/5" />
      </div>
      <div className="mt-12 flex gap-6 px-6">
        <div className="h-[500px] w-[85vw] shrink-0 animate-pulse rounded-3xl bg-white/[0.03] md:w-[60vw] lg:w-[45vw]" />
      </div>
    </section>
  );
}
