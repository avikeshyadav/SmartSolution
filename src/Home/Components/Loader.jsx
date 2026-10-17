
export default function Loader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-indigo-400/20 border-t-indigo-500" />

        <p className="mt-4 text-sm text-slate-400">
          Loading CodePath...
        </p>
      </div>
    </div>
  );
}
