import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Shield,
  HeartPulse,
  Landmark,
  Cpu,
  Stethoscope,
  Lock,
  LineChart,
  Workflow,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Sparkles,
  Activity,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';
import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { caseStudies } from '../data/caseStudies';


// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-bg grid-bg min-h-screen flex items-center relative overflow-hidden pt-10">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-[2.5%] sm:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Healthcare · AI · Finance
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-white leading-[1.05] mb-2">
             Creating Intelligent 
              <br />
              <span className="gradient-text">Solutions for a</span>
              <br />
               Digital World
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-4">
              Kriyasoft delivers enterprise software, AI-powered automation, cloud solutions, and digital transformation services for Healthcare, Financial Services, and AI-driven businesses. We build secure, scalable, and compliant technology that helps organizations innovate with confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
              >
                Talk to Our Experts
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right — floating animated panel, same container/content design as the services page hero */}
<div className="relative flex justify-center lg:justify-end">
  <div className="float-animation relative w-full flex justify-center">
    <div className="stat-card rounded-2xl sm:rounded-3xl w-full max-w-[520px] p-5 sm:p-8 glow-pulse">
      {/* Experience badge — first item in the card */}
      <div className="mb-5 relative overflow-hidden rounded-xl border border-sky-500/25 bg-gradient-to-r from-sky-500/15 via-teal-400/10 to-sky-500/15 px-4 py-3.5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
          <Sparkles size={16} className="text-teal-300" />
        </div>
        <div className="min-w-0">
          <p className="font-display font-800 text-lg text-white leading-none">
            10<span className="text-teal-300">+</span> Years
            <span className="text-slate-300 font-500 text-sm"> of Excellence</span>
          </p>
          <p className="text-slate-400 text-[11px] mt-1">
            Experienced team of architects, engineers &amp; domain specialists
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 gap-2">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-[10px] font-medium tracking-widest uppercase whitespace-nowrap">
            Live Service Snapshot
          </span>
        </div>
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: Activity, label: 'Healthcare', status: 'HIPAA Compliant', color: 'text-sky-400' },
          { icon: BrainCircuit, label: 'AI & Machine Learning', status: 'Predictions Live', color: 'text-teal-400' },
          { icon: ShieldCheck, label: 'Finance & Fintech', status: 'AML/KYC Verified', color: 'text-blue-400' },
        ].map(({ icon: Icon, label, status, color }) => (
          <div
            key={label}
            className="bg-white/[0.04] rounded-xl p-4 border border-white/10 flex items-center gap-3 hover:bg-white/[0.07] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <Icon size={18} className={color} />
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{label}</p>
              <p className={`text-xs ${color}`}>{status}</p>
            </div>
            <CheckCircle2 size={16} className="text-teal-400 ml-auto shrink-0" />
          </div>
        ))}
      </div>

      <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-3">
        <div className="flex -space-x-2 shrink-0">
          {['bg-sky-400', 'bg-teal-400', 'bg-blue-400'].map((c, i) => (
            <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-[#0a0f1e]`} />
          ))}
        </div>
        <span className="text-xs text-slate-400">
          Trusted across healthcare, finance &amp; AI
        </span>
      </div>
    </div>

    <div className="hidden sm:flex absolute -top-5 -right-5 bg-teal-400/10 border border-teal-400/25 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg items-center gap-2">
      <CheckCircle2 size={16} className="text-teal-400" />
      <span className="text-sm text-teal-300 font-medium whitespace-nowrap">
        HIPAA · AML · KYC Ready
      </span>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <ChevronDown size={18} />
      </div>
    </section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

function ClientTicker() {
  const clients = [
    'Healthcare',
    'Artificial Intelligence',
    'Financial Services',
    'Cloud Technologies',
    'Enterprise Software',
    'Digital Transformation',
  ];
  return (
    <div className="solid-card border-y border-sky-500/10 py-5 overflow-hidden">
      <div className="flex gap-16 items-center whitespace-nowrap animate-marquee">
        {[...clients, ...clients].map((c, i) => (
          <span key={i} className="text-slate-600 text-sm font-medium tracking-wide uppercase">
            {c}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
      `}</style>
    </div>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Stethoscope,
    title: 'Healthcare Tech Solutions',
    points: [
      'EHR (Electronic Health Record) integration and modernization',
      'HIPAA-compliant system architecture and data management',
      'Patient data integration platforms',
      'Telemedicine and telehealth platform development',
      'Healthcare analytics and business intelligence',
    ],
    tags: ['EHR/HL7', 'HIPAA', 'Telehealth'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    points: [
      'Custom AI/ML model development and deployment',
      'Predictive analytics for business intelligence',
      'Intelligent automation solutions',
      'Natural language processing (NLP) implementations',
      'Computer vision applications',
    ],
    tags: ['Predictive AI', 'NLP', 'Automation'],
  },
  {
    icon: Landmark,
    title: 'Finance & FinTech',
    points: [
      'Payment systems and processing platforms',
      'Regulatory compliance solutions (AML, KYC)',
      'Transaction processing and settlement systems',
      'Blockchain and cryptocurrency solutions',
      'Financial data analytics and reporting',
    ],
    tags: ['Payments', 'AML/KYC', 'Blockchain'],
  },
];

function Services() {
  return (
    <section className="bg-[#080c18] py-20">
      <div className="max-w-7xl mx-auto px-[2.5%] sm:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                What We Do
              </span>
            </div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
            One Platform. 
            <br />
            <span className="gradient-text">Every Critical Industry.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {services.map(({ icon: Icon, title, points, tags }) => (
            <div
              key={title}
              className="card-hover group solid-card rounded-2xl p-6 sm:p-7 cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center group-hover:bg-sky-500/15 transition-colors">
                  <Icon size={20} className="text-sky-400" />
                </div>
                <h3 className="font-display font-600 text-teal-400 text-lg">{title}</h3>
              </div>
              <ul className="space-y-2.5 mb-6">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                    <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-5 border-t border-white/5">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs whitespace-nowrap bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Capabilities ─────────────────────────────────────────────────────────────
const capabilities = [
  {
    icon: Workflow,
    title: "Full-Stack Custom Development",
    short: "Development",
    desc:
      "End-to-end product engineering across web, mobile, and cloud using modern frameworks that scale with your business.",
    tech: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: LineChart,
    title: "System Integration & Modernization",
    short: "Integration",
    desc:
      "Connect enterprise systems and modernize legacy platforms while maintaining business continuity.",
    tech: ["REST APIs", "ERP", "CRM", "Microservices"],
  },
  {
    icon: Cpu,
    title: "Cloud Architecture & DevOps",
    short: "Cloud",
    desc:
      "Scalable cloud infrastructure, CI/CD pipelines and automated deployments for modern applications.",
    tech: ["AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Data Protection",
    short: "Security",
    desc:
      "Enterprise-grade cybersecurity, compliance and advanced protection for mission-critical applications.",
    tech: ["SOC2", "HIPAA", "IAM", "Encryption"],
  },
];

function Capabilities() {
  const [active, setActive] = useState(0);

  const current = capabilities[active];
  const Icon = current.icon;

  return (
    <section className="bg-[#0a0f1e] py-20">
      <div className="max-w-7xl mx-auto px-[2.5%] sm:px-6">

        {/* Heading */}

        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />

            <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
              Full-Spectrum Engineering
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technology Capabilities
          </h2>

        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-6 sm:gap-8 items-stretch">

          {/* LEFT PANEL */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col h-auto lg:h-[420px]">

            {capabilities.map((item, index) => (

              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`flex-1 px-5 sm:px-6 py-4 flex items-center justify-between gap-3 border-b last:border-b-0 transition-all duration-300

                ${
                  active === index
                    ? "bg-sky-500/10 border-sky-500/20"
                    : "border-white/10 hover:bg-white/[0.05]"
                }`}
              >

                <div className="text-left min-w-0">

                  <h3
                    className={`text-lg font-semibold transition-colors truncate

                    ${
                      active === index
                        ? "text-sky-400"
                        : "text-white"
                    }`}
                  >
                    {item.short}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 truncate">
                    {item.title}
                  </p>

                </div>

                <ArrowRight
                  size={20}
                  className={`shrink-0 transition-all duration-300

                  ${
                    active === index
                      ? "text-sky-400 translate-x-2"
                      : "text-slate-500"
                  }`}
                />

              </button>

            ))}

          </div>

          {/* RIGHT PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 flex flex-col justify-between h-auto lg:h-[420px]">

  <div>

    {/* Icon + Heading */}

    <div className="flex items-center gap-4 mb-4">

      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">

        <Icon
          size={28}
          className="text-sky-400 sm:w-8 sm:h-8"
        />

      </div>

      <div className="min-w-0">

        <p className="text-[11px] uppercase tracking-[0.25em] text-sky-400 font-semibold mb-1">
          Capability
        </p>

        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          {current.title}
        </h3>

      </div>

    </div>

    {/* Description */}

    <p className="text-slate-400 text-base leading-7 max-w-xl mb-6">
      {current.desc}
    </p>

    {/* Technologies */}

    <div>

      <p className="text-lg font-semibold uppercase tracking-[0.25em] text-slate-100 mb-3">
        Technologies
      </p>

      <div className="flex flex-wrap gap-2">

        {current.tech.map((tech) => (

          <span
            key={tech}
            className="px-4 py-2 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300 text-sm font-medium transition-all duration-300 hover:bg-sky-500/20 hover:border-sky-400 hover:scale-105"
          >
            {tech}
          </span>

        ))}

      </div>

    </div>

  </div>

  {/* Bottom Footer */}
  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">

  <div className="flex -space-x-2 shrink-0">

    {[
      "bg-sky-400",
      "bg-teal-400",
      "bg-blue-400",
    ].map((color, index) => (

      <div
        key={index}
        className={`w-8 h-8 rounded-full ${color} border-2 border-[#0a0f1e]`}
      />

    ))}

  </div>

  <span className="text-sm text-slate-400">
    Enterprise-grade solutions built for modern businesses
  </span>

</div>

</div>

</div>

</div>

</section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    icon: Workflow,
    title: 'Discover',
    desc: 'We audit your current systems, map compliance requirements, and identify the highest-leverage opportunities for impact.',
  },
  {
    num: '02',
    icon: Lock,
    title: 'Architect',
    desc: 'Our engineers design a secure, compliant, future-proof blueprint aligned with HIPAA, AML/KYC, or your regulatory needs.',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Build',
    desc: 'Agile delivery in transparent sprints — production-grade code, full test coverage, and continuous deployment.',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Operate',
    desc: '24/7 monitoring, proactive maintenance, and compliance-aware evolution so your platform stays healthy and audit-ready.',
  },
];

function Process() {
  return (
    <section className="bg-[#050810] py-20">
      <div className="max-w-7xl mx-auto px-[2.5%] sm:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                How We Work
              </span>
            </div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
            A disciplined process.
            <br />
            <span className="gradient-text">Measurable outcomes.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map(({ num, icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-6 h-px bg-gradient-to-r from-sky-500/40 to-teal-400/40 z-10" />
              )}
              <div className="card-hover solid-card rounded-2xl p-6 sm:p-7 h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-sky-400" />
                  </div>
                  <span className="font-display font-700 text-3xl text-white/5">{num}</span>
                </div>
                <h3 className="font-display font-600 text-white text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

function CaseStudies() {
  return (
    <section className="bg-[#080c18] py-20">
      <div className="max-w-7xl mx-auto px-[2.5%] sm:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
              Case Studies
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white">
            Results across
            <br />
            <span className="gradient-text">healthcare, finance & AI.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map(({ slug, industry, title, img }) => (
            <Link
              to={`/case-studies/${slug}`}
              key={slug}
              className="card-hover group solid-card rounded-2xl overflow-hidden cursor-pointer block"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover object-center scale-[1.02] group-hover:scale-[1.06] transition-transform duration-500 ease-out transform-gpu"
                  style={{ backfaceVisibility: 'hidden' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c18] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-sky-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {industry}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-white font-medium text-base leading-snug mb-4">{title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sky-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                  Read More
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="bg-[#0a0f1e] py-24">
      <div className="max-w-4xl mx-auto px-[2.5%] sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Let's Build
              </span>
            </div>
        <h2 className="font-display text-3xl lg:text-4xl font-700 text-white leading-tight mb-5">
          Ready to transform your enterprise —
          <br />
          <span className="gradient-text">with AI, cloud, and confidence?</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Whether it's a HIPAA-compliant healthcare platform, an AI-powered automation
          engine, or a secure financial system — our team delivers enterprise software
          built to scale, built to comply, and built to last.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
        >
          Talk to Our Experts
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <ClientTicker />
      <Services />
      <Capabilities />
      <Process />
      <CaseStudies />
      <CTASection />
      <Footer />
    </div>
  );
}