import { useState } from 'react';
import type React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Stethoscope,
  Cpu,
  Landmark,
  CheckCircle2,
  Plus,
  Workflow,
  Lock,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import fullStackImg from '../assets/full stack 1.png';
import systemIntegrationImg from '../assets/System integration and legacy modernization.png';
import cloudDevOpsImg from '../assets/Cloud architecture and DevOps services.png';
import cybersecurityImg from '../assets/Cybersecurity and data protection.png';

const services = [
  {
    id: '01',
    icon: Stethoscope,
    title: 'Healthcare Tech Solutions',
    blurb: 'HIPAA-compliant systems built for patient care at scale.',
    tags: ['HIPAA', 'EHR', 'Telemedicine', 'HL7'],
    points: [
      'EHR (Electronic Health Record) integration and modernization',
      'HIPAA-compliant system architecture and data management',
      'Patient data integration platforms',
      'Telemedicine and telehealth platform development',
      'Healthcare analytics and business intelligence',
    ],
  },
  {
    id: '02',
    icon: Cpu,
    title: 'AI & Machine Learning',
    blurb: 'Intelligent systems that learn, predict, and automate.',
    tags: ['Predictive AI', 'NLP', 'Automation', 'Computer Vision'],
    points: [
      'Custom AI/ML model development and deployment',
      'Predictive analytics for business intelligence',
      'Intelligent automation solutions',
      'Natural language processing (NLP) implementations',
      'Computer vision applications',
    ],
  },
  {
    id: '03',
    icon: Landmark,
    title: 'Finance & FinTech',
    blurb: 'Compliant, high-throughput systems for modern finance.',
    tags: ['Payments', 'AML/KYC', 'Blockchain', 'Analytics'],
    points: [
      'Payment systems and processing platforms',
      'Regulatory compliance solutions (AML, KYC)',
      'Transaction processing and settlement systems',
      'Blockchain and cryptocurrency solutions',
      'Financial data analytics and reporting',
    ],
  },
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
      <span className="text-sky-400 text-xs font-medium tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

// ─── Wireframe sphere — copied exactly, unmodified, from the reference component ──

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

function ServicesHero() {
  return (
    <section className="hero-bg grid-bg min-h-screen flex items-center relative overflow-x-hidden overflow-y-visible pt-20">
      <div className="max-w-7xl mx-auto px-[3%] sm:px-6 w-full py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTag>What We Do</SectionTag>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-800 text-white leading-[1.05] mb-4">
              Services built for
              <br />
              <span className="gradient-text">regulated industries.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-8">
              Secure, scalable, and compliant technology across Healthcare, AI,
              and Finance — delivered by architects who understand your
              regulatory environment.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <a
                href="#focus-areas"
                className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
              >
                Explore Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>*/}
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-7 py-3.5 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20">
                Talk to Our Experts

<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />

              </Link>
            
            </div>
          </div>

          {/* Right — wireframe sphere + Saturn-style ring, no container, ring fixed in place.
              Sized with a Tailwind width (not a fixed px + scale hack) so it never exceeds
              the viewport and can't force the page to scroll horizontally on mobile. */}
          <div className="relative flex justify-center w-full overflow-hidden">
            <div
              className="relative flex items-center justify-center w-[95%] mx-auto sm:w-[300px] sm:mx-0 lg:w-[340px] max-w-full aspect-square"
            >

              {/* Central sphere with a fixed Saturn-style ring that crosses through its middle — back half behind, front half in front.
                  Scaled up as a whole ONLY below the sm breakpoint so the ring reads at ~95% of the mobile screen width
                  instead of the smaller size it was at before. sm and up render at scale-100 (unchanged from before). */}
              <div className="relative z-10 scale-[0.75] sm:scale-100 origin-center" style={{ perspective: 1100 }}>
                {/* Ring back half — sits behind the sphere */}
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

                {/* Ring front half — sits in front of the sphere */}
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
    </section>
  );
}

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  tags: string[];
  points: string[];
};

function ServiceRow({
  service,
  isOpen,
  onToggle,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen ? 'bg-white/[0.03] border-sky-500/30' : 'bg-white/[0.015] border-white/10'
      }`}
    >
      <button onClick={onToggle} className="w-full flex items-start gap-3 sm:gap-5 px-4 sm:px-5 md:px-7 py-5 sm:py-6 md:py-7 pr-3 sm:pr-4 md:pr-6 text-left group focus:outline-none focus-visible:outline-none">
        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 shrink-0 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center group-hover:bg-sky-500/15 transition-colors">
          <Icon size={20} className="text-sky-400 sm:w-[22px] sm:h-[22px]" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`font-display font-600 text-lg sm:text-xl md:text-2xl transition-colors ${isOpen ? 'text-sky-400' : 'text-white group-hover:text-sky-400'}`}>
            {service.title}
          </h3>
          <p className="text-slate-500 text-xs md:text-sm mt-1.5">{service.blurb}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {service.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] md:text-xs whitespace-nowrap bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-sky-500 border-sky-500 rotate-45'
              : 'border-white/10 group-hover:bg-sky-500 group-hover:border-sky-500'
          }`}
        >
          <Plus size={16} className={isOpen ? 'text-white' : 'text-slate-400 group-hover:text-white'} />
        </div>
      </button>

      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-7 px-4 sm:px-5 md:px-7 md:pl-[108px]">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-3xl">
              {service.points.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesList() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section id="focus-areas" className="relative bg-[#080c18] border-t border-white/10 py-14 md:py-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-[3%] sm:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <SectionTag>Our Focus Areas</SectionTag>
          <h2 className="font-display text-4xl lg:text-5xl font-700 text-white leading-tight">
            Three domains.
            <br />
            <span className="gradient-text">Full depth.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-4">
            We don't dabble. Each vertical is staffed by specialists with domain-specific
            regulatory and engineering expertise.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    image: fullStackImg,
    icon: Workflow,
    title: 'Full-Stack Development',
    desc: 'End-to-end web, mobile, and cloud application development tailored to your domain.',
  },
  {
    image: systemIntegrationImg,
    icon: Cpu,
    title: 'System Integration & Modernization',
    desc: 'Legacy modernization and seamless connectivity between existing and new systems.',
  },
  {
    image: cloudDevOpsImg,
    icon: Lock,
    title: 'Cloud Architecture & DevOps',
    desc: 'Scalable cloud infrastructure, CI/CD pipelines, and automated deployments.',
  },
  {
    image: cybersecurityImg,
    icon: Shield,
    title: 'Cybersecurity & Data Protection',
    desc: 'Data protection, compliance audits, and enterprise-grade security posture.',
  },
];

function Capabilities() {
  return (
    <section className="bg-[#0a0f1e] py-14">
      <div className="max-w-6xl mx-auto px-[3%] sm:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <SectionTag>More Ways We Deliver</SectionTag>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-white">
            Services that go <span className="gradient-text">beyond the core.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {capabilities.map(({ image, icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-sky-500/30 hover:shadow-glow"
            >
              <div className="relative h-56 overflow-hidden">
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-sky-500/10 via-[#0e1a2e] to-teal-500/10 flex items-center justify-center">
                    <Icon size={48} className="text-sky-400/40" strokeWidth={1.25} />
                  </div>
                )}

                <div className="absolute top-4 left-4 right-4 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0a0f1e]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-sky-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">
                    {title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: '01', icon: Workflow, title: 'Discover', desc: 'We audit your current systems, map compliance requirements, and identify the highest-leverage opportunities for impact.' },
  { num: '02', icon: Lock, title: 'Architect', desc: 'Our engineers design a secure, compliant, future-proof blueprint aligned with HIPAA, AML/KYC, or your regulatory needs.' },
  { num: '03', icon: Cpu, title: 'Build', desc: 'Agile delivery in transparent sprints — production-grade code, full test coverage, and continuous deployment.' },
  { num: '04', icon: Shield, title: 'Operate', desc: '24/7 monitoring, proactive maintenance, and compliance-aware evolution so your platform stays healthy.' },
];

function Process() {
  return (
    <section className="bg-[#050810] py-20">
      <div className="max-w-7xl mx-auto px-[3%] sm:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <SectionTag>How We Work</SectionTag>
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

function ComplianceTicker() {
  const items = ['HIPAA Compliant', 'AML Ready', 'KYC Certified', 'SOC 2 Aligned', 'GDPR Aware', 'PCI-DSS Capable'];
  return (
    <div className="solid-card border-y border-sky-500/10 py-5 overflow-hidden">
      <div className="flex gap-16 items-center whitespace-nowrap animate-marquee">
        {[...items, ...items].map((c, i) => (
          <span key={i} className="text-slate-600 text-sm font-medium tracking-wide uppercase flex items-center gap-2">
            <CheckCircle2 size={14} className="text-teal-500/60" />
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

function CTASection() {
  return (
    <section className="bg-[#0a0f1e] py-16">
      <div className="max-w-4xl mx-auto px-[3%] sm:px-6 text-center">
        <SectionTag>Let's Build</SectionTag>
        <h2 className="font-display text-3xl lg:text-4xl font-700 text-white leading-tight mb-5">
          Ready to transform your enterprise —
          <br />
          <span className="gradient-text">with AI, cloud, and confidence?</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Whether it's a HIPAA-compliant healthcare platform, an AI-powered
          automation engine, or a secure financial system — our team delivers
          enterprise software built to scale, built to comply, and built to last.
        </p>
        <div className="flex justify-center mb-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-sky-500/20"
          >
            Talk to Our Experts
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
       
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] overflow-x-hidden">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      {/*<ComplianceTicker />*/}
      <Capabilities />
      {/*<Process />*/}
      <CTASection />
      <Footer />
    </div>
  );
}