import { ArrowRight, Check, Compass, GitBranch, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  { number: "01", title: "Learn the foundations", duration: "Week 1–2", detail: "HTML, CSS basics, files, folders, and how the web works.", tags: ["HTML", "CSS"], icon: Compass },
  { number: "02", title: "Make pages interactive", duration: "Week 3–4", detail: "JavaScript variables, functions, DOM, events, and form validation.", tags: ["JavaScript"], icon: GitBranch },
  { number: "03", title: "Build a complete UI", duration: "Week 5–6", detail: "React components, props, state, responsive layouts, and Tailwind CSS.", tags: ["React", "Tailwind"], icon: Check },
  { number: "04", title: "Connect the backend", duration: "Week 7–9", detail: "APIs, Node.js, Express, database basics, and authentication concepts.", tags: ["Node.js", "SQL"], icon: Rocket },
];

export default function RoadmapSection() {
  return (
    <section id="roadmaps" className="border-y border-white/[0.06] bg-[#0b1120] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Your learning path"
          title="Know what to learn next"
          description="A practical sequence for building a JavaScript full-stack project. Adjust the pace to your current level."
        />
        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map(({ number, title, duration, detail, tags, icon: Icon }, index) => (
            <article key={number} className="relative rounded-2xl border border-white/[0.08] bg-[#0e1628] p-5">
              {index < steps.length - 1 && <div className="absolute right-[-17px] top-10 z-10 hidden h-px w-8 bg-indigo-400/40 lg:block" />}
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-3xl font-bold text-white/15">{number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300"><Icon size={20} /></span>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-indigo-300">{duration}</p>
              <h3 className="mt-2 text-base font-bold text-white">{title}</h3>
              <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-400">{detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => <span key={tag} className="rounded-lg bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-slate-300">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 to-cyan-500/[0.04] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <h3 className="font-bold text-white">Already have a project idea?</h3>
            <p className="mt-1 text-sm text-slate-400">Start with your goal, then identify only the skills that project needs.</p>
          </div>
          <a href="#projects" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-400">Choose a project <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
