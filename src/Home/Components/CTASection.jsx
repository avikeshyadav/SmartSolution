import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-5 pb-20 md:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-indigo-300/20 bg-gradient-to-br from-indigo-600/25 via-[#151a37] to-cyan-600/10 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[90px]" />
        <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-indigo-200"><Sparkles size={22} /></span>
        <h2 className="relative mx-auto mt-5 max-w-2xl font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white sm:text-4xl">Your next project starts with one small step.</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">Choose an idea today. Learn what you need. Build it one task at a time.</p>
        <a href="#projects" className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-indigo-100">Find my first project <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}
