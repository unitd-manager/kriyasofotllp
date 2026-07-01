import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Shield,
  Zap,
  Globe,
  Code2,
  Cloud,
  Database,
  Cpu,
  BarChart3,
  Lock,
  Layers,
  GitBranch,
  CheckCircle2,
  ArrowUpRight,
  Play,
} from 'lucide-react';

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Services', 'About', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 flex items-center justify-center">
            <Cpu size={16} className="text-white" />
          </div>
          <span className="font-display font-700 text-white text-lg tracking-tight">
            KriyaSoft <span className="text-sky-400">LLP</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="nav-link text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
            Sign In
          </a>
          <a
            href="#"
            className="text-sm font-medium bg-gradient-to-r from-sky-500 to-teal-400 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f1e]/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l} href="#" className="text-slate-300 text-sm hover:text-white">
              {l}
            </a>
          ))}
          <a
            href="#"
            className="text-sm font-medium bg-gradient-to-r from-sky-500 to-teal-400 text-white px-5 py-2.5 rounded-full text-center mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

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
                Enterprise Technology Partner
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-800 text-white leading-[1.05] mb-6">
              Engineering
              <br />
              <span className="gradient-text">scalable</span> systems
              <br />
              for tomorrow.
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
              KriyaSoft LLP builds mission-critical technology for enterprises — cloud infrastructure,
              intelligent software, and end-to-end digital transformation delivered by senior engineers.
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

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '12+', label: 'Years of Expertise' },
                    { value: '80+', label: 'Projects Delivered' },
                    { value: '98%', label: 'Client Retention' },
                    { value: '24/7', label: 'Support Coverage' },
                  ].map(({ value, label }) => (
                    <div key={label} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                      <p className="font-display font-700 text-2xl text-white mb-0.5">{value}</p>
                      <p className="text-xs text-slate-500">{label}</p>
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
                    Trusted by 40+ enterprise teams
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-teal-400/10 border border-teal-400/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-teal-400" />
                  <span className="text-xs text-teal-300 font-medium">ISO 27001 Certified</span>
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
    'HealthTech', 'FinanceCore', 'AeroSystems', 'DataVault',
    'CloudNative', 'SecureLogic', 'NexGen AI', 'ScaleUp Labs',
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
    icon: Cloud,
    title: 'Cloud Architecture',
    desc: 'Design and migration of enterprise-grade cloud infrastructure on AWS, Azure, and GCP — built for scale, resilience, and cost efficiency.',
    tags: ['Multi-cloud', 'IaC', 'FinOps'],
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    desc: 'End-to-end product development — from architecture design through delivery — using modern stacks and engineering best practices.',
    tags: ['React', 'Node.js', 'Microservices'],
  },
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    desc: 'Predictive analytics, intelligent automation, and custom ML models that turn complex data into strategic competitive advantages.',
    tags: ['LLMs', 'MLOps', 'Data Pipelines'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Proactive threat modeling, penetration testing, compliance automation and 24/7 monitoring to protect critical business assets.',
    tags: ['Zero Trust', 'SOC2', 'SIEM'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    desc: 'Unified data platforms, real-time streaming pipelines, and warehouse solutions that power analytics and business intelligence.',
    tags: ['Kafka', 'dbt', 'Snowflake'],
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    desc: 'Strategic advisory and delivery programs that modernize legacy systems, streamline operations, and drive measurable ROI.',
    tags: ['Strategy', 'Change Mgmt', 'APIs'],
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
              Full-spectrum technology
              <br />
              <span className="gradient-text">under one roof.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm lg:text-right">
            Modular, scalable services that integrate seamlessly — so your team never has to manage multiple vendors.
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
    icon: Shield,
    name: 'Financial Services',
    points: ['Real-time transaction processing', 'Regulatory compliance automation', 'Fraud detection systems'],
    color: 'from-sky-500/8 to-[#0e1631]',
    accent: 'text-sky-400',
    border: 'border-sky-500/20',
  },
  {
    icon: Zap,
    name: 'Healthcare & Life Sciences',
    points: ['HIPAA-compliant platforms', 'Clinical data interoperability', 'Telehealth infrastructure'],
    color: 'from-teal-500/8 to-[#0e1631]',
    accent: 'text-teal-400',
    border: 'border-teal-500/20',
  },
  {
    icon: Layers,
    name: 'Manufacturing & Supply Chain',
    points: ['IoT sensor integration', 'Predictive maintenance AI', 'ERP modernization'],
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
            Built for sectors where
            <br />
            <span className="gradient-text">precision matters.</span>
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
    icon: BarChart3,
    title: 'Discover',
    desc: 'We audit your current systems, map business goals, and identify the highest-leverage opportunities for impact.',
  },
  {
    num: '02',
    icon: GitBranch,
    title: 'Architect',
    desc: 'Our engineers design a robust, future-proof solution blueprint aligned with your constraints and ambitions.',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Build',
    desc: 'Agile delivery in transparent sprints — production-grade code, full test coverage, and continuous deployment.',
  },
  {
    num: '04',
    icon: Zap,
    title: 'Operate',
    desc: '24/7 monitoring, proactive maintenance, and ongoing evolution so your platform stays healthy and ahead.',
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
    { value: '5★', label: 'Average Client Rating' },
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

// ─── Case Study Teaser ────────────────────────────────────────────────────────

const caseStudies = [
  {
    industry: 'FinTech',
    title: 'Real-time payments platform processing 2M+ transactions daily',
    result: '60% latency reduction',
    img: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    industry: 'Healthcare',
    title: 'HIPAA-compliant telehealth infrastructure for 500k patients',
    result: '99.99% uptime achieved',
    img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    industry: 'Logistics',
    title: 'AI-powered supply chain optimization for global manufacturer',
    result: '35% ops cost savings',
    img: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

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
              Results that speak
              <br />
              <span className="gradient-text">for themselves.</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sky-400 text-sm font-medium hover:text-sky-300 transition-colors group"
          >
            View all case studies
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map(({ industry, title, result, img }) => (
            <div
              key={title}
              className="card-hover group solid-card rounded-2xl overflow-hidden cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// ─── Testimonial ─────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      'KriyaSoft LLP completely re-architected our payments backend. We went from weekly outages to 99.99% uptime in under six months. They think like owners, not vendors.',
    name: 'Marcus Webb',
    role: 'CTO, ClearPay Financial',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote:
      'The AI-driven supply chain platform KriyaSoft delivered cut our operational costs by 35%. Their engineers understood our domain deeply — the results speak for themselves.',
    name: 'Priya Nair',
    role: 'VP Engineering, LogiCore Systems',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote:
      'We needed a HIPAA-compliant telehealth platform built fast and built right. KriyaSoft delivered both — on schedule, zero compliance issues, and our team actually loved working with them.',
    name: 'Dr. James Harlow',
    role: 'CIO, MedLink Health',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#050810] py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sky-400 text-xs font-medium tracking-widest uppercase mb-3">
            What Clients Say
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white">
            Trusted by teams who
            <br />
            <span className="gradient-text">demand results.</span>
          </h2>
        </div>

        {/* Sliding track */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map(({ quote, name, role, img }, i) => (
              <div key={i} className="w-full shrink-0 px-4">
                <div className="max-w-3xl mx-auto solid-card rounded-3xl p-10 lg:p-14 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-teal-400/20 border border-sky-500/20 flex items-center justify-center mx-auto mb-8">
                    <span className="text-sky-400 text-2xl font-serif leading-none">"</span>
                  </div>
                  <blockquote className="font-display text-xl lg:text-2xl font-400 text-white leading-relaxed mb-10">
                    {quote}
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={img}
                      alt={name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-sky-500/30"
                    />
                    <div className="text-left">
                      <p className="text-white font-medium text-sm">{name}</p>
                      <p className="text-slate-500 text-xs">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-sky-400' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 flex items-center justify-center">
                <Cpu size={14} className="text-white" />
              </div>
              <span className="font-display font-700 text-white">
                KriyaSoft <span className="text-sky-400">LLP</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              Enterprise technology services for scale-up companies and global enterprises.
            </p>
          </div>

          {[
            {
              heading: 'Services',
              links: ['Cloud Architecture', 'Software Engineering', 'AI & ML', 'Cybersecurity', 'Data Engineering'],
            },
            {
              heading: 'Company',
              links: ['About', 'Case Studies', 'Careers', 'Blog', 'Contact'],
            },
            {
              heading: 'Legal',
              links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-white text-sm font-medium mb-4">{heading}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-slate-500 text-sm hover:text-slate-300 transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} KriyaSoft LLP. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built for engineers, by engineers.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
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
      <Testimonial />
      <Footer />
    </div>
  );
}
