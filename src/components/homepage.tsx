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
import Navbar from './Navbar';
import Footer from './Footer';
import { caseStudies } from '../data/caseStudies';

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-bg grid-bg min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
                Healthcare · AI · Finance
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-800 text-white leading-[1.05] mb-6">
              Engineering
              <br />
              <span className="gradient-text">regulated</span> systems
              <br />
              at scale.
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
              KriyaSoft LLP is a technology services firm building secure, compliant,
              scalable systems for Healthcare, AI, and Finance — from HIPAA-grade
              platforms to real-time payment infrastructure and predictive intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 font-medium px-7 py-3.5 rounded-full transition-all duration-200"
              >
                <Play size={14} className="fill-current" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right – stats panel */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="float-animation relative">
              <div className="stat-card rounded-2xl p-8 w-full max-w-sm glow-pulse">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                    At a Glance
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <span className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: '12+', label: 'Years of Expertise' },
                    { value: '98%', label: 'Client Retention' },
                    { value: '24/7', label: 'Support Coverage' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white/[0.03] rounded-xl p-3 border border-white/5 text-center">
                      <p className="font-display font-700 text-xl text-white mb-0.5">{value}</p>
                      <p className="text-[11px] text-slate-500 leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['bg-sky-400', 'bg-teal-400', 'bg-blue-400'].map((c, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 rounded-full ${c} border-2 border-[#0a0f1e]`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">
                    Trusted across healthcare, finance & AI
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-teal-400/10 border border-teal-400/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-400" />
                  <span className="text-xs text-teal-300 font-medium">HIPAA · AML · KYC Ready</span>
                </div>
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
    'HealthNet Systems', 'ClearPay Financial', 'MedLink Health', 'LogiCore AI',
    'CarePath Digital', 'SettleWorks', 'VisionGrid AI', 'TrustLedger',
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
    desc: 'EHR integration and modernization, HIPAA-compliant architecture, patient data platforms, and telehealth systems built for scale.',
    tags: ['EHR/HL7', 'HIPAA', 'Telehealth'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    desc: 'Custom AI/ML model development, predictive analytics, intelligent automation, NLP, and computer vision applications.',
    tags: ['Predictive AI', 'NLP', 'Computer Vision'],
  },
  {
    icon: Landmark,
    title: 'Finance & FinTech',
    desc: 'Payment processing platforms, AML/KYC compliance, transaction settlement systems, and blockchain solutions.',
    tags: ['Payments', 'AML/KYC', 'Blockchain'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Proactive threat modeling, compliance automation, and data protection for systems operating under regulatory scrutiny.',
    tags: ['Zero Trust', 'Data Protection'],
  },
  {
    icon: LineChart,
    title: 'Analytics & BI',
    desc: 'Healthcare, financial, and operational analytics platforms that turn raw data into decisions leadership can act on.',
    tags: ['Dashboards', 'Reporting', 'BI'],
  },
  {
    icon: Workflow,
    title: 'Cloud & Full-Stack Delivery',
    desc: 'Full-stack custom development, legacy modernization, and cloud/DevOps architecture across web, mobile, and cloud.',
    tags: ['Cloud', 'DevOps', 'Full-Stack'],
  },
];

function Services() {
  return (
    <section className="bg-[#080c18] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
              Purpose-built for
              <br />
              <span className="gradient-text">regulated industries.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm lg:text-right">
            Secure, scalable, compliant solutions across Healthcare, AI, and Finance — delivered by one team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="card-hover group solid-card rounded-2xl p-7 cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center mb-5 group-hover:bg-sky-500/15 transition-colors">
                <Icon size={20} className="text-sky-400" />
              </div>
              <h3 className="font-display font-600 text-white text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-3 py-1"
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

// ─── Industries ───────────────────────────────────────────────────────────────

const industries = [
  {
    icon: HeartPulse,
    name: 'Healthcare',
    points: ['HIPAA-compliant system architecture', 'EHR integration & modernization', 'Telehealth & patient data platforms'],
    color: 'from-sky-500/8 to-[#0e1631]',
    accent: 'text-sky-400',
    border: 'border-sky-500/20',
  },
  {
    icon: Cpu,
    name: 'AI & Machine Learning',
    points: ['Predictive analytics & BI', 'Intelligent process automation', 'NLP & computer vision'],
    color: 'from-teal-500/8 to-[#0e1631]',
    accent: 'text-teal-400',
    border: 'border-teal-500/20',
  },
  {
    icon: Landmark,
    name: 'Finance & FinTech',
    points: ['Payment processing platforms', 'AML / KYC regulatory compliance', 'Transaction settlement systems'],
    color: 'from-blue-500/10 to-blue-500/5',
    accent: 'text-blue-400',
    border: 'border-blue-500/15',
  },
];

function Industries() {
  return (
    <section className="bg-[#0a0f1e] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
            Industry Focus
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
            Deep in three sectors,
            <br />
            <span className="gradient-text">not spread thin.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, name, points, color, accent, border }) => (
            <div
              key={name}
              className={`card-hover rounded-2xl p-8 bg-gradient-to-b ${color} border ${border}`}
            >
              <div className={`w-10 h-10 rounded-xl bg-white/5 border ${border} flex items-center justify-center mb-6`}>
                <Icon size={18} className={accent} />
              </div>
              <h3 className={`font-display font-600 text-lg mb-4 ${accent}`}>{name}</h3>
              <ul className="space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className={`${accent} mt-0.5 shrink-0`} />
                    <span className="text-slate-400 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
    <section className="bg-[#050810] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
            A disciplined process.
            <br />
            <span className="gradient-text">Measurable outcomes.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map(({ num, icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-12px)] w-6 h-px bg-gradient-to-r from-sky-500/40 to-teal-400/40 z-10" />
              )}
              <div className="card-hover solid-card rounded-2xl p-7 h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center">
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

// ─── Metrics Bar ──────────────────────────────────────────────────────────────

function MetricsBar() {
  const metrics = [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '<2h', label: 'Incident Response' },
    { value: '40+', label: 'Certified Engineers' },
    { value: '10+', label: 'Years in Market' },
  ];

  return (
    <section className="bg-gradient-to-r from-sky-600 to-teal-500 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-800 text-4xl text-white mb-1">{value}</p>
              <p className="text-white/70 text-sm">{label}</p>
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
    <section className="bg-[#080c18] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
              Case Studies
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-700 text-white">
              Results across
              <br />
              <span className="gradient-text">healthcare, finance & AI.</span>
            </h2>
          </div>
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
              <div className="p-6">
                <h3 className="text-white font-medium text-base leading-snug mb-4">{title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-teal-400 text-sm font-medium">{result}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
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
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-4">
          Let's Build
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-700 text-white leading-tight mb-5">
          Secure, compliant, scalable —
          <br />
          <span className="gradient-text">engineered for your sector.</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Whether it's a HIPAA-compliant platform, a real-time payments system, or an
          AI model that needs to ship — our team has delivered it before, in regulated
          environments where getting it right the first time matters.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
        >
          Start a Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
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
      <Industries />
      <Process />
      <MetricsBar />
      <CaseStudies />
      <CTASection />
      <Footer />
    </div>
  );
}