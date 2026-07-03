import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
      <section className="hero-bg grid-bg relative overflow-hidden pt-6">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 w-full pt-24 pb-20 relative">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
              About Kriyasoft
            </span>
          </div>

          <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-800 text-white leading-[1.05] max-w-4xl mb-8">
            A technology partner for{" "}
            <span className="gradient-text">Healthcare, AI,</span> and Finance
          </h1>

          <p className="text-slate-400 text-lg font-semibold leading-relaxed max-w-2xl mb-10 border-l-2 border-sky-500/30 pl-6">
            Kriyasoft is a technology services firm specializing in enterprise
            solutions for three primary sectors: Healthcare, AI, and Finance. With
            10+ years of industry experience, our team of architects, engineers, and
            domain specialists delivers secure, scalable, and compliant solutions
            that drive measurable business value.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20 mb-16"
          >
            Talk to Our Experts
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Credentials strip — small blurred glass cards, homepage-style hover */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["10+", "Years Experience"],
              ["Architects", "Systems Design"],
              ["Engineers", "AI · Platform"],
              ["Domain Specialists", "Healthcare · Finance"],
            ].map(([top, bottom]) => (
              <div
                key={top}
                className="bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/10 px-5 py-6 transition-all duration-300 hover:bg-white/[0.09] hover:border-sky-400/30 hover:-translate-y-1"
              >
                <div className="font-display text-xl lg:text-2xl font-800 text-white mb-1.5">
                  {top}
                </div>
                <div className="font-medium text-[12px] uppercase tracking-widest text-slate-400">
                  {bottom}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — editorial row instead of card grid */}
      <section className="bg-[#080c18] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            {/*<div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Principles
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight">
              Operating principles.
            </h2>
          </div>*/}


           <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Principles
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight">
              Operating principles.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, body], i) => (
              <div
                key={title}
                className={`py-8 pr-6 ${i !== 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${
                  i % 2 !== 0 ? "md:border-l md:border-white/10 md:pl-8" : ""
                }`}
              >
                <h3 className="font-display font-700 text-sky-400 text-xl mb-3">
                  {title}
                </h3>
                <p className="text-slate-400 text-sm font-semibold leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — horizontal on desktop, vertical on mobile */}
      <section className="bg-[#0a0f1e] py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Trajectory
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight">
              Ten-plus years, compounded.
            </h2>
          </div>

          {/* Desktop horizontal rail */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-sky-500/20 -translate-y-1/2" />
            <div className="grid grid-cols-4 gap-6 relative">
              {timeline.map(([year, body], i) => (
                <div
                  key={year}
                  className={`flex flex-col ${i % 2 === 0 ? "justify-end pb-10" : "justify-start pt-10 mt-auto"}`}
                >
                  {i % 2 === 0 && (
                    <div className="solid-card rounded-xl p-5 mb-6">
                      <div className="font-display text-xs uppercase tracking-widest text-sky-400 mb-2">
                        {year}
                      </div>
                      <div className="text-slate-300 text-sm font-semibold leading-relaxed">{body}</div>
                    </div>
                  )}
                  <span className="relative mx-auto flex h-4 w-4 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/60" />
                    <span className="relative h-3 w-3 rounded-full bg-sky-400" />
                  </span>
                  {i % 2 !== 0 && (
                    <div className="solid-card rounded-xl p-5 mt-6">
                      <div className="font-display text-xs uppercase tracking-widest text-sky-400 mb-2">
                        {year}
                      </div>
                      <div className="text-slate-300 text-sm font-semibold leading-relaxed">{body}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet vertical rail */}
          <ol className="lg:hidden relative space-y-6 border-l border-sky-500/20 pl-8">
            {timeline.map(([year, body]) => (
              <li key={year} className="relative">
                <span className="absolute -left-[2.4rem] flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400/60" />
                  <span className="relative h-3 w-3 rounded-full bg-sky-400" />
                </span>
                <div className="solid-card rounded-xl p-5">
                  <div className="font-display text-xs uppercase tracking-widest text-sky-400 mb-2">
                    {year}
                  </div>
                  <div className="text-slate-300 text-sm font-semibold leading-relaxed">{body}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team — formal roster rows instead of a card grid */}
      <section className="bg-[#050810] py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Crew
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white leading-tight">
              The people behind the systems.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {team.map(([name, role], i) => (
              <div
                key={name}
                className="group flex items-center justify-between gap-6 py-6 border-b border-white/10 hover:bg-white/[0.03] transition-colors px-2"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-slate-600 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CheckCircle2 size={18} className="text-sky-400 shrink-0" />
                  <span className="font-display font-700 text-white text-lg">
                    {name}
                  </span>
                </div>
                <span className="font-semibold text-[13px] uppercase tracking-widest text-slate-500 text-right">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}