import { useState } from "react";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Explore Projects", href: "#projects" },
  { label: "Roadmaps", href: "#roadmaps" },
  { label: "Skills", href: "#skills" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d1b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label="CodePath home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/25">
            <Code2 size={22} strokeWidth={2.5} />
          </span>
          <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight">
            code<span className="text-indigo-400">path</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/login" className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
            Log in
          </a>
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-indigo-100">
            Get started <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                {link.label}
              </a>
            ))}
            <a href="/login" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl border border-white/10 px-3 py-3 text-center text-sm font-semibold">
              Log in
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-white px-3 py-3 text-center text-sm font-bold text-slate-950">
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
