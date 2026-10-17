import { useState } from "react";
import { ArrowRight, Search, Sparkles, Play, CheckCircle2, Terminal, Code2, Circle } from "lucide-react";

const suggestions = ["Portfolio website", "Full-stack app", "AI chatbot"];

export default function Header() {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const target = document.getElementById("projects");
    target?.scrollIntoView({ behavior: "smooth" });
    if (query.trim()) {
      window.dispatchEvent(new CustomEvent("codepath-search", { detail: query.trim() }));
    }
  };

  return (
    <header id="home" className="relative isolate overflow-hidden">
      <div className="grid-glow pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute left-1/2 top-[-230px] -z-10 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3.5 py-2 text-xs font-semibold text-indigo-200">
            <Sparkles size={14} />
            YOUR IDEA → A REAL PROJECT
            <span className="rounded-full bg-indigo-300/15 px-2 py-0.5 text-[10px] text-indigo-100">BETA</span>
          </div>

          <h1 className="max-w-3xl font-['Space_Grotesk'] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stop watching tutorials.
            <span className="mt-2 block bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-200 bg-clip-text text-transparent">
              Start building projects.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
            Choose an idea, discover the skills you need, and follow daily bite-sized tasks until your project is ready to launch. No guesswork. Just progress.
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-white/10 bg-[#11182a] p-2 shadow-2xl shadow-black/20 focus-within:border-indigo-400/50">
            <Search className="ml-2 shrink-0 text-slate-500" size={20} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What do you want to build?"
              aria-label="Search project ideas"
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-400" type="submit">
              Find ideas <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="mr-1">Try:</span>
            {suggestions.map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => setQuery(suggestion)} className="rounded-full border border-white/10 px-3 py-1.5 transition hover:border-indigo-400/40 hover:text-indigo-200">
                {suggestion}
              </button>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Beginner friendly</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Daily guided tasks</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Build at your pace</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1526] shadow-glow">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-slate-500">project-workspace.jsx</span>
              </div>
              <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">IN PROGRESS</span>
            </div>

            <div className="grid sm:grid-cols-[145px_1fr]">
              <aside className="hidden border-r border-white/[0.08] p-4 sm:block">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-600">Workspace</p>
                {["Overview", "Daily tasks", "Tech stack", "Resources"].map((item, index) => (
                  <div key={item} className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-xs ${index === 1 ? "bg-indigo-500/15 text-indigo-200" : "text-slate-500"}`}>
                    <Circle size={8} fill={index === 1 ? "currentColor" : "none"} /> {item}
                  </div>
                ))}
              </aside>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-500">YOUR FIRST PROJECT</p>
                    <h3 className="mt-1 font-['Space_Grotesk'] text-xl font-bold">Developer Portfolio</h3>
                    <p className="mt-1 text-xs text-slate-500">Beginner · 7 daily tasks</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300"><Code2 size={21} /></span>
                </div>

                <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#090f1e] p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Project progress</span><span className="font-semibold text-white">2 of 7 tasks</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[29%] rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Today's task</h4>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-300">Day 03</span>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-indigo-400/20 bg-indigo-400/[0.07] p-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-200"><Terminal size={18} /></span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Build your homepage hero</p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">Create a headline, short intro, and a clear call-to-action.</p>
                      <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-500"><span>⏱ 35 min</span><span>HTML + Tailwind CSS</span></div>
                    </div>
                  </div>
                </div>

                <button type="button" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-slate-950 transition hover:bg-indigo-100">
                  <Play size={15} fill="currentColor" /> Explore your first project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-16 hidden rounded-xl border border-white/10 bg-[#141d31] px-4 py-3 shadow-xl sm:block">
            <p className="text-[10px] text-slate-500">SKILLS UNLOCKED</p>
            <p className="mt-1 text-sm font-bold text-white">HTML <span className="text-indigo-300">+</span> CSS</p>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/10 bg-[#141d31] px-4 py-3 shadow-xl sm:block">
            <p className="text-[10px] text-slate-500">DAILY STREAK</p>
            <p className="mt-1 text-sm font-bold text-white">🔥 3 days in a row</p>
          </div>
        </div>
      </div>
    </header>
  );
}
