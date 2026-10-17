export default function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-indigo-300">{eyebrow}</p>}
        <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
        {description && <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}
