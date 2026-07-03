import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  CheckCircle2,
  Clock,
  Tag,
  Calendar,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

/* ─── Reading progress bar ─── */
const ReadingProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      if (progressRef.current) progressRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-white/10 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-75"
      />
    </div>
  );
};

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 140]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const otherStudies = caseStudies.slice(0, 3);

  return (
    <>
      <ReadingProgress />

      <section className="relative min-h-screen overflow-hidden bg-[#050816]">
        {/* Ambient glows */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/8 blur-[180px] rounded-full" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/8 blur-[160px] rounded-full" />
          <div className="absolute bottom-0 left-1/2 w-[700px] h-[400px] -translate-x-1/2 bg-blue-600/6 blur-[180px] rounded-full" />
        </div>

        {/* ── HERO ── */}
        <div ref={heroRef} className="relative h-[55vh] min-h-[420px] max-h-[560px] overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
            <img src={study.img} alt={study.title} className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/40 via-transparent to-transparent" />

          <div className="absolute top-20 left-14 z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-cyan-400 border border-white/20 hover:border-cyan-300 backdrop-blur-md rounded-full pl-2 pr-5 py-2 text-white hover:text-black text-sm font-semibold shadow-lg shadow-black/30 transition-all duration-300 group w-fit"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 transition">
                <ArrowLeft className="w-3.5 h-3.5" />
              </span>
              Back to Journal
            </Link>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="pb-14"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/25 text-cyan-300 text-[11px] font-bold uppercase tracking-[0.2em]">
                  <Tag className="w-3 h-3" />
                  {study.industry}
                </span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-white/50 text-xs flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Trending
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] max-w-4xl tracking-tight mb-7">
                {study.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-sm flex-shrink-0">
                    K
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">KriyaSoft LLP</p>
                    <p className="text-white/40 text-[11px]">Engineering &amp; Delivery Team</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <span className="flex items-center gap-1.5 text-white/50 text-sm">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {study.date}
                </span>
                <span className="flex items-center gap-1.5 text-white/50 text-sm">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {study.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Summary callout */}
            <div className="relative rounded-2xl border-l-[3px] border-cyan-400 bg-gradient-to-r from-cyan-500/8 to-transparent pl-6 pr-6 py-5 mb-12">
              <p className="text-lg text-white/80 leading-relaxed">{study.summary}</p>
            </div>

            {/* Overview */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-3 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-cyan-400 before:to-blue-500">
                Overview
              </h3>
              <p className="text-gray-400 leading-[2] text-[17px]">
                Delivered as part of KriyaSoft's {study.industry} practice, this engagement
                shows how a compliant, well-architected system directly translates into
                measurable operational results — not just a technical upgrade.
              </p>
            </div>

            {/* The Challenge */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-3 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-cyan-400 before:to-blue-500">
                The Challenge
              </h3>
              <p className="text-gray-400 leading-[2] text-[17px]">{study.challenge}</p>
            </div>

            {/* ── How It Rolled Out — FULL WIDTH ── */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-cyan-400 before:to-blue-500">
                How It Rolled Out
              </h3>
              <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-7 border-l border-cyan-500/20 pl-6">
                {study.phases.map((phase, i) => (
                  <li key={phase.title} className="relative">
                    <span className="absolute -left-[1.9rem] flex h-3 w-3 items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    </span>
                    <div className="text-[10px] uppercase tracking-widest text-cyan-400 mb-1 font-bold">
                      Phase {String(i + 1).padStart(2, '0')} — {phase.title}
                    </div>
                    <div className="text-gray-400 text-[13px] leading-relaxed">{phase.desc}</div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Building the Solution */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-4 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-cyan-400 before:to-blue-500">
                Building the Solution
              </h3>

              <div className="float-left mr-8 mb-5 mt-1 w-[50%] sm:w-[42%] rounded-2xl overflow-hidden border border-cyan-400/15 shadow-[0_8px_60px_rgba(0,200,255,0.07),0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
                <div className="relative aspect-[4/3]">
                  <img
                    src={study.secondaryImg}
                    alt={`${study.title} detail`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050816]/20 pointer-events-none" />
                </div>
              </div>

              <p className="text-gray-400 leading-[2] text-[17px] mb-5">
                Every layer of this engagement was designed around one principle:
                compliance and performance aren't a trade-off when they're built in
                from day one, not bolted on after launch.
              </p>

              <ul className="space-y-4">
                {study.solution.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="clear-both" />
            </div>

            {/* ── Recent Case Studies (pull quote removed above this) ── */}
            <div className="mb-14">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">
                Recent Case Studies
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherStudies.map((s, i) => (
                  <Link
                    key={s.slug}
                    to={`/case-studies/${s.slug}`}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/30 to-transparent" />
                      <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] text-cyan-300 bg-black/50 backdrop-blur-sm border border-cyan-500/20 px-2.5 py-1 rounded-full font-semibold">
                        {s.industry}
                      </span>
                      <span className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/50 text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="px-5 py-4 flex flex-col flex-1">
                      <h4 className="text-white text-sm font-semibold leading-snug mb-1.5 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                        {s.title}
                      </h4>
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-3">
                        {s.summary}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-white/30 text-[11px] flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {s.date}
                        </span>
                        <span className="flex items-center gap-1 text-cyan-400 text-xs font-semibold">
                          Read
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Author + share footer */}
            <div className="pt-8 border-t border-white/8 flex items-center justify-between gap-6 flex-wrap mb-14">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-lg flex-shrink-0">
                  K
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">KriyaSoft LLP</p>
                  <p className="text-xs text-gray-400">Engineering &amp; Delivery Team</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/60 hover:border-cyan-400/40 hover:text-cyan-300 transition-all text-sm">
                <Share2 className="w-3.5 h-3.5" /> Share case study
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}