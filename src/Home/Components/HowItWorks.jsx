import { ArrowRight, ClipboardList, Lightbulb, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const items = [
  { number: "01", title: "Pick your goal", description: "Tell CodePath what you want to build and your current experience level.", icon: Lightbulb },
  { number: "02", title: "Follow daily tasks", description: "Build one manageable feature at a time, from the homepage to the database.", icon: ClipboardList },
  { number: "03", title: "Ship your project", description: "Test your work, publish it, and keep the project in your portfolio.", icon: Trophy },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Simple by design" title="From confused to confident" description="A guided workflow designed for students who want to stop getting stuck after tutorials." />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ number, title, description, icon: Icon }) => (
            <article key={number} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
              <div className="flex items-center justify-between">
                <span className="font-['Space_Grotesk'] text-4xl font-bold text-white/15">{number}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-300"><Icon size={22} /></span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
