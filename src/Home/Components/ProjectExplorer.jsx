import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Clock3, Layers, Search, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const projects = [
  { title: "Developer Portfolio", category: "Frontend", level: "Beginner", time: "3–5 days", description: "Showcase your skills, projects, and contact details in a polished personal website.", stack: ["HTML", "Tailwind CSS", "JavaScript"], color: "from-indigo-500/25 to-violet-500/5", icon: "✦" },
  { title: "Student Task Manager", category: "Full Stack", level: "Intermediate", time: "7–10 days", description: "Create tasks, set deadlines, track progress, and keep your study routine organized.", stack: ["React", "Node.js", "SQL"], color: "from-cyan-500/20 to-blue-500/5", icon: "✓" },
  { title: "Campus Marketplace", category: "Full Stack", level: "Intermediate", time: "2–3 weeks", description: "Let students list books and supplies, browse items, and contact sellers.", stack: ["React", "Express", "Database"], color: "from-emerald-500/20 to-teal-500/5", icon: "↗" },
  { title: "Weather Dashboard", category: "Frontend", level: "Beginner", time: "2–4 days", description: "Practice API requests, loading states, and responsive cards with weather data.", stack: ["HTML", "CSS", "JavaScript"], color: "from-amber-500/20 to-orange-500/5", icon: "☼" },
  { title: "AI Study Buddy", category: "AI", level: "Advanced", time: "2–4 weeks", description: "Prototype a study assistant that organizes notes and creates revision prompts.", stack: ["Python", "API", "Database"], color: "from-fuchsia-500/20 to-purple-500/5", icon: "✧" },
  { title: "Expense Tracker", category: "Full Stack", level: "Intermediate", time: "1–2 weeks", description: "Record expenses, group spending, and visualize monthly totals.", stack: ["React", "Node.js", "SQL"], color: "from-rose-500/20 to-pink-500/5", icon: "₹" },
];

const categories = ["All", "Frontend", "Full Stack", "AI"];

export default function ProjectExplorer() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onSearch = (event) => setSearch(event.detail || "");
    window.addEventListener("codepath-search", onSearch);
    return () => window.removeEventListener("codepath-search", onSearch);
  }, []);

  const filtered = useMemo(() => projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const term = search.trim().toLowerCase();
    const matchesSearch = !term || [project.title, project.description, project.category, ...project.stack].join(" ").toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  }), [activeCategory, search]);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Build something real"
          title="Pick a project. Get a plan."
          description="Every project breaks down into clear tasks, required skills, and a practical build sequence."
          action={<span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-2 text-xs font-semibold text-indigo-200"><Sparkles size={14} /> Guided project paths</span>}
        />

        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${activeCategory === category ? "bg-white text-slate-950" : "border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"}`}>
                {category}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c1323] px-3.5 py-2.5 md:w-72">
            <Search size={17} className="text-slate-500" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects..." className="w-full bg-transparent text-sm outline-none placeholder:text-slate-600" />
          </label>
        </div>

        {filtered.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <article key={project.title} className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1323] transition hover:-translate-y-1 hover:border-white/20">
                <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.28) 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-[#0b1020]/70 text-3xl text-white shadow-xl backdrop-blur">{project.icon}</span>
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#080d1b]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-200">{project.category}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-black/20 px-2.5 py-1 text-[10px] font-semibold text-white">{project.level}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => <span key={tech} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-slate-300">{tech}</span>)}
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500"><Clock3 size={14} /> {project.time}</span>
                    <button type="button" onClick={() => alert(`${project.title}\n\nSuggested stack: ${project.stack.join(", ")}\n\nNext step: create a project plan and break it into daily tasks.`)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200">
                      View plan <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 px-6 py-14 text-center">
            <Layers className="mx-auto text-slate-600" size={28} />
            <p className="mt-3 font-semibold text-white">No projects found</p>
            <p className="mt-1 text-sm text-slate-500">Try another search or category.</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); }} className="mt-4 text-sm font-semibold text-indigo-300">Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
