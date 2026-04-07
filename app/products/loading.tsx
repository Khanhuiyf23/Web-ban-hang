export default function Loading() {
  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-96 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
      ))}
    </div>
  );
}
