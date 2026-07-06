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
} from 'lucide-react';
import React, { useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { caseStudies } from '../data/caseStudies';


// ─── Wireframe sphere — copied exactly, unmodified, from the services page ────

function WireSphere({ size }: { size: number }) {
  const t = size / 2;
  const wireRing: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "9999px",
    border: "1px solid rgba(186,230,253,0.55)",
    background: "transparent",
  };
  return (
    <div style={{ perspective: 1100 }}>
      <div
        style={{
          position: "absolute",
          width: size * 1.15,
          height: size * 1.15,
          left: -size * 0.075,
          top: -size * 0.075,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(125,211,252,0.35) 0%, rgba(125,211,252,0.22) 30%, rgba(125,211,252,0.08) 55%, transparent 75%)",
          filter: "blur(14px)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
          transform: `translate(-${t}px, -${t}px)`,
          animation: "cube-spin 22s linear infinite",
        }}
      >
     <div style={{ ...wireRing, transform: `rotateX(0deg)` }} />
        <div style={{ ...wireRing, transform: `rotateX(30deg)` }} />
        <div style={{ ...wireRing, transform: `rotateX(60deg)` }} />
        <div style={{ ...wireRing, transform: `rotateX(90deg)` }} />
        <div style={{ ...wireRing, transform: `rotateX(120deg)` }} />
        <div style={{ ...wireRing, transform: `rotateX(150deg)` }} />
        <div style={{ ...wireRing, transform: `rotateY(0deg)` }} />
        <div style={{ ...wireRing, transform: `rotateY(30deg)` }} />
        <div style={{ ...wireRing, transform: `rotateY(60deg)` }} />
        <div style={{ ...wireRing, transform: `rotateY(90deg)` }} />
        <div style={{ ...wireRing, transform: `rotateY(120deg)` }} />
       <div style={{ ...wireRing, transform: `rotateY(150deg)` }} /> 
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-bg grid-bg min-h-screen flex items-center relative overflow-x-hidden overflow-y-visible pt-10">
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

          {/* Right — wireframe sphere + Saturn-style ring, same design as services page */}
          <div className="relative flex justify-center w-full overflow-hidden">
            <div
              className="relative flex items-center justify-center w-[95%] mx-auto sm:w-[300px] sm:mx-0 lg:w-[340px] max-w-full aspect-square"
            >
              <div className="relative z-10 scale-[0.75] sm:scale-100 origin-center" style={{ perspective: 1100 }}>
                {/* Ring back half */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 480,
                    height: 480,
                    left: '50%',
                    top: '50%',
                    marginLeft: -240,
                    marginTop: -240,
                    transform: 'rotateX(72deg) rotateZ(-12deg)',
                    transformStyle: 'preserve-3d',
                    zIndex: 5,
                    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, transparent 30%, rgba(224,148,74,0.8) 35%, rgba(224,148,74,0.4) 45%, rgba(103,196,246,0.55) 54%, transparent 64%)',
                      filter: 'blur(0.3px)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: '1.5px solid rgba(224,148,74,0.75)' }}
                  />
                </div>

                <WireSphere size={170} />

                {/* Ring front half */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 480,
                    height: 480,
                    left: '50%',
                    top: '50%',
                    marginLeft: -240,
                    marginTop: -240,
                    transform: 'rotateX(72deg) rotateZ(-12deg)',
                    transformStyle: 'preserve-3d',
                    zIndex: 20,
                    clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, transparent 30%, rgba(224,148,74,0.8) 35%, rgba(224,148,74,0.4) 45%, rgba(103,196,246,0.55) 54%, transparent 64%)',
                      filter: 'blur(0.3px)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: '1.5px solid rgba(224,148,74,0.75)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <style>{`
            html, body { overflow-x: hidden; max-width: 100%; }
            @keyframes cube-spin { from { transform: rotateY(0deg) rotateX(8deg); } to { transform: rotateY(360deg) rotateX(8deg); } }
            @keyframes glow-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
          `}</style>
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
  const [active, setActive] = useState(2);

  const current = capabilities[active];
  const Icon = current.icon;

  return (
    <section className="bg-[#0a0f1e] py-20">
      <div className="max-w-7xl mx-auto px-[2.5%] sm:px-6">

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

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 flex flex-col justify-between h-auto lg:h-[420px]">

  <div>

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

    <p className="text-slate-400 text-base leading-7 max-w-xl mb-6">
      {current.desc}
    </p>

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
          {caseStudies.map(({ slug, industry, title, result, img }) => (
            <Link
              to={`/case-studies/${slug}`}
              key={slug}
              className="card-hover group solid-card rounded-2xl overflow-hidden cursor-pointer block"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c18] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-sky-500/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  {industry}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-white font-medium text-base leading-snug mb-4">{title}</h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-teal-400 text-sm font-medium">{result}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                  />
                </div>
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
    <div className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
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