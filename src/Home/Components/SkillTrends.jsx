import { Code2, Braces, Coffee, Database, Globe, Layers3, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const skills = [
  { name: "JavaScript", label: "Web interactivity", icon: Braces, color: "text-amber-300", bg: "bg-amber-400/10", level: "Start here", trend: "Frontend + Backend" },
  { name: "Python", label: "Automation & backend", icon: Code2, color: "text-sky-300", bg: "bg-sky-400/10", level: "Beginner friendly", trend: "Data + Web + AI" },
  { name: "Java", label: "Enterprise apps", icon: Coffee, color: "text-orange-300", bg: "bg-orange-400/10", level: "OOP focused", trend: "Backend + Android" },
  { name: "SQL", label: "Work with data", icon: Database, color: "text-violet-300", bg: "bg-violet-400/10", level: "Core skill", trend: "Every data-driven app" },
];

export default function SkillTrends() {
  return (
    <section id="skills" className="border-y border-white/[0.06] bg-white/[0.018] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Choose what to learn"
          title="Skills that turn ideas into apps"
          description="Don't learn every language at once. Pick a goal, then follow a focused stack and roadmap."
          action={<a href="#roadmaps" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200">View roadmaps <ArrowUpRight size={16} /></a>}
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map(({ name, label, icon: Icon, color, bg, level, trend }) => (
            <article key={name} className="group rounded-2xl border border-white/[0.08] bg-[#0c1323] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30">
              <div className="flex items-start justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg} ${color}`}><Icon size={23} /></span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">{level}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{name}</h3>
              <p className="mt-1 text-sm text-slate-400">{label}</p>
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Common use cases</p>
                <p className="mt-1.5 text-xs text-slate-300">{trend}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-600">Note: Skill cards describe common use cases, not live job-market statistics.</p>
      </div>
    </section>
  );
}
