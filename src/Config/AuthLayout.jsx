import { ArrowLeft, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLayout({ children, title, subtitle, mode = "login" }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080d1b] px-4 py-10 text-slate-100 sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px)", backgroundSize: "42px 42px", maskImage: "linear-gradient(to bottom, black, transparent 90%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c1323]/95 shadow-2xl shadow-black/40 lg:grid-cols-[.9fr_1.1fr]">
        <aside className="relative hidden flex-col justify-between overflow-hidden border-r border-white/10 bg-gradient-to-br from-indigo-500/20 via-[#11172c] to-cyan-500/10 p-10 lg:flex">
          <div className="absolute -right-20 top-32 h-64 w-64 rounded-full border border-indigo-300/10" />
          <div className="absolute -right-10 top-42 h-44 w-44 rounded-full border border-indigo-300/10" />
          <Link to="/" className="relative inline-flex w-fit items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white"><Code2 size={22} /></span>
            <span className="font-['Space_Grotesk'] text-xl font-bold">code<span className="text-indigo-300">path</span></span>
          </Link>

          <div className="relative my-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-2 text-xs font-semibold text-indigo-200"><Sparkles size={14} /> LEARN BY BUILDING</span>
            <h2 className="mt-6 font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white">Your next big idea starts with a small step.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Follow a clear path, complete daily coding tasks, and turn what you learn into projects you can show the world.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between text-xs"><span className="text-slate-400">Your next milestone</span><span className="text-indigo-200">Day 01</span></div>
              <p className="mt-2 font-semibold text-white">Build your first project</p>
              <div className="mt-4 h-1.5 rounded-full bg-white/10"><div className="h-1.5 w-1/4 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" /></div>
            </div>
          </div>

          <p className="relative text-xs text-slate-500">Learn at your pace. Build with purpose.</p>
        </aside>

        <section className="p-6 sm:p-10 lg:p-12">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <div className="mb-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300 lg:hidden"><Code2 size={24} /></div>
            <h1 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p>
          </div>
          {children}
          <p className="mt-8 text-center text-xs leading-5 text-slate-600">By continuing, you agree to use CodePath responsibly. Add your Terms and Privacy Policy before launching.</p>
        </section>
      </div>
    </main>
  );
}
