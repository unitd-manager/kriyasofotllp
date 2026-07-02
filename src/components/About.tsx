import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const values = [
  ["Domain Depth", "Architects and engineers with deep expertise in regulated industries — healthcare, finance, AI."],
  ["Compliance First", "HIPAA, PCI-DSS, AML, KYC, SOC 2 baked into design, not bolted on after."],
  ["Velocity", "Compounding speed across product, platform, and people — measurable outcomes."],
  ["Honesty", "Direct reporting, transparent trade-offs, no theatrical roadmaps."],
];

const timeline = [
  ["2014", "Founded as a 3-person engineering studio focused on enterprise integration."],
  ["2017", "First major healthcare deployment — HIPAA-compliant EHR integration platform."],
  ["2021", "AI & ML practice launched. Crossed 50+ production deployments."],
  ["2026", "10+ years in market, serving healthcare, finance, and AI clients across three continents."],
];

const team = [
  ["Architects", "Systems & Solution Design"],
  ["AI Engineers", "ML / NLP / Vision"],
  ["Security Specialists", "Compliance & Audit"],
  ["Domain Experts", "Healthcare · Finance"],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg grid-bg min-h-[80vh] flex items-center relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
              About the Studio
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-800 text-white leading-[1.05] mb-6">
            A small studio for
            <br />
            <span className="gradient-text">large systems.</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We embed with leadership teams to design, ship, and operate the
            systems that decide competitive outcomes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
            >
              Talk to the Studio
            </Link>
            <Link
              to="/services"
              className="flex items-center gap-2 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 font-medium px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#080c18] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
              Principles
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
              Operating principles.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(([title, body]) => (
              <div key={title} className="card-hover solid-card rounded-2xl p-7">
                <h3 className="font-display font-600 text-sky-400 text-lg mb-3">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0a0f1e] py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
              Trajectory
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
              Seven years, compounded.
            </h2>
          </div>

          <ol className="relative space-y-6 border-l border-sky-500/20 pl-8">
            {timeline.map(([year, body]) => (
              <li key={year} className="relative">
                <span className="absolute -left-[2.4rem] flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/60" />
                  <span className="relative h-3 w-3 rounded-full bg-sky-400" />
                </span>
                <div className="card-hover solid-card rounded-2xl p-6">
                  <div className="font-display text-xs uppercase tracking-widest text-sky-400 mb-2">
                    {year}
                  </div>
                  <div className="text-slate-300 text-base leading-relaxed">{body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#050810] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
              Crew
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
              The people behind the systems.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(([name, role]) => (
              <div key={name} className="card-hover group solid-card rounded-2xl p-7">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/30 to-teal-400/30 ring-1 ring-sky-500/30 mb-5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <CheckCircle2 size={20} className="text-sky-400" />
                </div>
                <div className="font-display font-600 text-white text-lg mb-1">{name}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}