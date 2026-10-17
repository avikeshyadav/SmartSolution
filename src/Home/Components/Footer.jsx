import { Code2, Mail, MoveUpRight } from "lucide-react";

const columns = [
  { title: "Platform", links: [{ label: "Explore projects", href: "#projects" }, { label: "Learning roadmaps", href: "#roadmaps" }, { label: "Skill explorer", href: "#skills" }] },
  { title: "Learn", links: [{ label: "How it works", href: "#how-it-works" }, { label: "Beginner projects", href: "#projects" }, { label: "Full-stack path", href: "#roadmaps" }] },
  { title: "Support", links: [{ label: "About CodePath", href: "#home" }, { label: "Contact", href: "mailto:hello@codepath.example" }, { label: "Privacy", href: "#footer" }] },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/[0.08] bg-[#070b16]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-white"><Code2 size={20} /></span>
              <span className="font-['Space_Grotesk'] text-lg font-bold">code<span className="text-indigo-400">path</span></span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">A clearer path from learning code to building projects you can be proud of.</p>
            <div className="mt-5 flex gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Code2" className="rounded-lg border border-white/10 p-2.5 text-slate-400 hover:text-white"><Code2 size={17} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Code2" className="rounded-lg border border-white/10 p-2.5 text-slate-400 hover:text-white"><Code2 size={17} /></a>
              <a href="mailto:hello@codepath.example" aria-label="Email" className="rounded-lg border border-white/10 p-2.5 text-slate-400 hover:text-white"><Mail size={17} /></a>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}><a href={link.href} className="inline-flex items-center gap-1 text-sm text-slate-500 transition hover:text-indigo-300">{link.label} <MoveUpRight size={12} /></a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CodePath. Built for curious minds.</p>
          <p>Learn by building · Keep shipping</p>
        </div>
      </div>
    </footer>
  );
}
