import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft, ArrowRight, TrendingUp, Users, Eye, Heart,
  Instagram, ExternalLink, CheckCircle, Megaphone, Palette,
  FileText, Target, Calendar, Star, BarChart2, Mail, Phone, Linkedin, Github,
  ZoomIn, ZoomOut, X
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

function getTenure(startYear: number, startMonth: number): string {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  let months = now.getMonth() - startMonth;
  if (months < 0) { years--; months += 12; }
  if (years === 0) return `${months} ${months === 1 ? "month" : "months"}`;
  if (months === 0) return `${years} ${years === 1 ? "yr" : "yrs"}`;
  return `${years} ${years === 1 ? "yr" : "yrs"} ${months} ${months === 1 ? "month" : "months"}`;
}

function getTotalMonths(startYear: number, startMonth: number): number {
  const now = new Date();
  return (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth);
}

const MK_SCREENSHOTS = [
  "/mk-14.png", "/mk-15.png", "/mk-16.png", "/mk-17.png",
  "/mk-18.png", "/mk-19.png", "/mk-20.png", "/mk-21.png",
  "/mk-22.png", "/mk-32.png", "/mk-33.png", "/mk-34.png",
  "/mk-35.png", "/mk-36.png", "/mk-37.png", "/mk-38.png",
];

const OFC_SCREENSHOTS = [
  "/ofc-1.jpg", "/ofc-2.jpg", "/ofc-3.jpg", "/ofc-4.jpg",
  "/ofc-5.jpg", "/ofc-6.jpg", "/ofc-7.jpg", "/ofc-8.jpg",
  "/ofc-9.jpg", "/ofc-10.jpg", "/ofc-11.jpg", "/ofc-12.jpg",
  "/ofc-13.jpg", "/ofc-14.jpg", "/ofc-15.jpg",
];

const CONTENT_SCREENSHOTS = MK_SCREENSHOTS;

const NAV = [
  { id: "results", label: "Results" },
  { id: "clients", label: "Clients" },
  { id: "content", label: "Content" },
  { id: "services", label: "Services" },
  { id: "timeline", label: "Timeline" },
  { id: "contact", label: "Contact" },
];

export default function SocialMedia() {
  const [, navigate] = useLocation();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>(CONTENT_SCREENSHOTS);
  const [zoom, setZoom] = useState(1);
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const outeringTenure = getTenure(2024, 7);
  const outeringMonths = getTotalMonths(2024, 7);
  const imgRef = useRef<HTMLImageElement>(null);

  const lbIdx = lightbox ? lightboxImages.indexOf(lightbox) : -1;

  const openLightbox = (src: string, images: string[]) => { setLightboxImages(images); setLightbox(src); setZoom(1); };
  const closeLightbox = () => { setLightbox(null); setZoom(1); };
  const prev = useCallback(() => {
    if (lbIdx > 0) { setLightbox(lightboxImages[lbIdx - 1]); setZoom(1); }
  }, [lbIdx, lightboxImages]);
  const next = useCallback(() => {
    if (lbIdx < lightboxImages.length - 1) { setLightbox(lightboxImages[lbIdx + 1]); setZoom(1); }
  }, [lbIdx, lightboxImages]);

  useEffect(() => {
    const handleScroll = () => setNavVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.2, rootMargin: "-80px 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") setZoom(z => Math.min(z + 0.25, 4));
      if (e.key === "-") setZoom(z => Math.max(z - 0.25, 0.5));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, next, prev]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-[100dvh] bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
              <span className="text-white/50 text-sm font-mono">{lbIdx + 1} / {CONTENT_SCREENSHOTS.length}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={e => { e.stopPropagation(); setZoom(z => Math.max(z - 0.25, 0.5)); }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  title="Zoom out (−)"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-white/60 text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={e => { e.stopPropagation(); setZoom(z => Math.min(z + 0.25, 4)); }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  title="Zoom in (+)"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-rose-500/70 flex items-center justify-center text-white transition-colors ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Prev */}
            {lbIdx > 0 && (
              <button
                onClick={e => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}

            {/* Image */}
            <div className="overflow-auto max-w-full max-h-full flex items-center justify-center p-16" onClick={e => e.stopPropagation()}>
              <motion.img
                ref={imgRef}
                key={lightbox}
                src={lightbox}
                alt="Content preview"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ transform: `scale(${zoom})`, transformOrigin: "center", transition: "transform 0.2s ease" }}
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-xl shadow-2xl select-none"
                draggable={false}
              />
            </div>

            {/* Next */}
            {lbIdx < CONTENT_SCREENSHOTS.length - 1 && (
              <button
                onClick={e => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}

            {/* Thumbnail strip */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-2 px-5 py-4 overflow-x-auto justify-center" style={{ scrollbarWidth: "none" }} onClick={e => e.stopPropagation()}>
              {lightboxImages.map((src, i) => (
                <button
                  key={i}
                  onClick={() => { setLightbox(src); setZoom(1); }}
                  className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${lightbox === src ? "border-rose-400 opacity-100" : "border-white/20 opacity-50 hover:opacity-80"}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-20 right-5 text-white/20 text-[10px] text-right leading-5 select-none">
              ← → navigate &nbsp;·&nbsp; +/− zoom &nbsp;·&nbsp; Esc close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Nav */}
      {navVisible && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-rose-500 transition-colors py-4 pr-4 border-r border-gray-100 mr-2 shrink-0"
            >
              <ArrowLeft className="w-3 h-3" /> Home
            </button>
            {NAV.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-xs px-3 py-4 shrink-0 transition-all border-b-2 font-medium ${
                  activeSection === id
                    ? "text-rose-500 border-rose-500"
                    : "text-gray-400 border-transparent hover:text-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Hero */}
      <section className="relative bg-[#1a0a0f] text-white pt-24 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,63,94,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(244,63,94,0.10),_transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-rose-400 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </button>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-8">
              <img
                src="/logo-black.png"
                alt="A17 Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-rose-500/15 text-rose-400 text-xs font-bold px-4 py-2 rounded-full mb-8 border border-rose-500/20 tracking-widest uppercase">
              <Megaphone className="w-3.5 h-3.5" />
              Social Media Management
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
              Austin<br />
              <span className="text-rose-500">Abuoga.</span>
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-2xl leading-relaxed mb-10">
              I build brands that move — through strategy, design, and content that turns scrolls into communities.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/austinabuoga-49447937b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              </a>
              <a
                href="mailto:Abuogaaustin@gmail.com"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-rose-400 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-xl transition-all"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results / KPIs */}
      <section id="results" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Impact Metrics</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-none">Numbers<br />don't lie.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-6 h-6 text-rose-500" />, value: "260%", label: "Follower Growth", sub: "90 → 324 followers · Outering FC" },
              { icon: <Eye className="w-6 h-6 text-rose-500" />, value: "817", label: "Accounts Reached", sub: "+872.6% period-over-period · MK Creative Hub" },
              { icon: <TrendingUp className="w-6 h-6 text-rose-500" />, value: "+322.7%", label: "Profile Activity", sub: "In 30 days · MK Creative Hub" },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-gray-950 rounded-3xl p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-6">{kpi.icon}</div>
                  <div className="text-5xl font-black text-white mb-2">{kpi.value}</div>
                  <div className="text-sm font-bold text-white/80 mb-2">{kpi.label}</div>
                  <div className="text-xs text-white/30 leading-relaxed">{kpi.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MK 30-day breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 rounded-3xl border-2 border-gray-100 p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <span className="text-base font-bold text-gray-900">MK Creative Hub — 30-Day Snapshot</span>
              <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">25 Feb – 26 Mar 2026</span>
            </div>
            <p className="text-sm text-gray-400 mb-8">Detailed platform analytics from my last month managing the account.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Total Views", value: "2,478" },
                { label: "Accounts Reached", value: "817", sub: "+872.6%" },
                { label: "Total Interactions", value: "248" },
                { label: "Profile Visits", value: "92", sub: "+318.2%" },
                { label: "Profile Activity", value: "93", sub: "+322.7%" },
                { label: "Top Reel Views", value: "578", sub: "Women's Day" },
              ].map((m, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1 font-medium">{m.label}</div>
                  <div className="text-3xl font-black text-gray-900">{m.value}</div>
                  {m.sub && <div className="text-xs text-rose-500 font-bold mt-1">{m.sub}</div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Cases */}
      <section id="clients" className="py-24 px-6 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-rose-400" />
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Client Cases</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-12 leading-none">Who I've<br />worked with.</h2>
          </motion.div>

          <div className="space-y-6">
            {/* Outering FC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden border border-white/10 p-1">
                  <img src="/outering-fc-logo.png" alt="Outering FC" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-black text-white">Outering FC</h3>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="text-sm text-white/40">Football Club · Contract · {outeringTenure}</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Social Media Management", "Graphic Design", "Instagram"].map(s => (
                      <span key={s} className="text-xs bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Starting Followers", value: "90" },
                  { label: "Current Followers", value: "324" },
                  { label: "Total Growth", value: "+260%" },
                  { label: "New Followers", value: "+234" },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                    <div className="text-2xl font-black text-white">{m.value}</div>
                    <div className="text-xs text-white/30 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-rose-500/10 rounded-2xl p-5 border border-rose-500/20 mb-6">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">Key Achievement</div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Grew Outering FC's Instagram from 90 to 324 followers over {outeringMonths} months through consistent content creation and branded graphic design — establishing a recognisable digital identity for the football club from the ground up.
                </p>
              </div>

              {/* OFC content grid */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Content Samples</span>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {OFC_SCREENSHOTS.map((src, i) => (
                    <motion.button
                      key={i}
                      onClick={() => openLightbox(src, OFC_SCREENSHOTS)}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 cursor-zoom-in aspect-square bg-white/5"
                    >
                      <img
                        src={src}
                        alt={`Outering FC content ${i + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* MK Creative Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden border border-white/10 p-1">
                  <img src="/mk-creative-hub-logo.png" alt="MK Creative Hub" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-black text-white">MK Creative Hub</h3>
                    <span className="text-xs font-bold text-white/40 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">Former</span>
                  </div>
                  <div className="text-sm text-white/40">Creative Agency · Contract · 4 months</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Social Media Management", "Strategy", "Graphic Design", "Copywriting", "SMO", "SEO"].map(s => (
                      <span key={s} className="text-xs bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Strategic Design & Orchestration", desc: "Spearheaded the visual identity and campaign strategy spotlighting 4 female founders to drive brand authority and engagement." },
                  { title: "Viral Growth & Reach", desc: "Achieved a +322.7% surge in profile activity, with the flagship Women's Day reel garnering 578 views and contributing to a 872.6% period-over-period increase in accounts reached." },
                  { title: "Content Optimization", desc: "Shifted the engagement paradigm by prioritizing short-form video — Reels accounted for 96.3% of all platform interactions." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                      <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safaricom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 overflow-hidden border border-white/10 p-2">
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Safaricom_logo.svg/500px-Safaricom_logo.svg.png" alt="Safaricom PLC" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-2xl font-black text-white">Safaricom PLC</h3>
                    <span className="text-xs font-bold text-white/40 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">Former</span>
                  </div>
                  <div className="text-sm text-white/40">Telecom · Contract · 6 months (Feb–Jul 2023)</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Casting Coordinator", "Character Development", "Campaign Production", "Social Media Marketing"].map(s => (
                      <span key={s} className="text-xs bg-rose-500/15 text-rose-400 border border-rose-500/20 px-2.5 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Character Development", desc: "Developed a unique character persona that resonated with the target demographic, forming the creative foundation of the campaign." },
                  { title: "Viral Campaign Execution", desc: "Part of a cross-functional team of 5 that produced a viral Safaricom football advertisement campaign, generating a measurable increase in brand engagement within the first month of launch." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                      <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Portfolio */}
      <section id="content" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Content Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-3 leading-none">The work.</h2>
            <p className="text-gray-400 text-base mb-3">Instagram content created for MK Creative Hub — 2025/2026</p>
            <p className="text-gray-400 text-sm mb-12">Click any image to open. Use arrow keys or buttons to navigate. Use +/− or the zoom buttons to zoom in and out.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {CONTENT_SCREENSHOTS.map((src, i) => (
              <motion.button
                key={i}
                onClick={() => openLightbox(src, MK_SCREENSHOTS)}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm cursor-zoom-in aspect-[4/5] bg-gray-100"
              >
                <img
                  src={src}
                  alt={`Content sample ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-gray-950 rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center p-1 overflow-hidden">
                <img src="/outering-fc-logo.png" alt="Outering FC" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Outering FC — Live Instagram Account</div>
                <div className="text-xs text-white/30 mt-0.5">Managed for {outeringTenure} · Social Media & Graphic Design</div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/outering_fc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all hover:scale-105 shrink-0"
            >
              <Instagram className="w-3.5 h-3.5" />
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-none">What I offer.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Megaphone className="w-6 h-6 text-rose-500" />, title: "Social Media Management", desc: "Full account management — strategy, content calendar, scheduling, community engagement, and performance tracking.", tag: "Core" },
              { icon: <Palette className="w-6 h-6 text-rose-500" />, title: "Graphic Design", desc: "Branded visuals, carousel posts, campaign graphics, and content design using Canva.", tag: "Core" },
              { icon: <FileText className="w-6 h-6 text-rose-500" />, title: "Copywriting & SEO", desc: "Scroll-stopping captions, SEO-optimised content, and messaging that converts.", tag: "Content" },
              { icon: <BarChart2 className="w-6 h-6 text-rose-500" />, title: "Data Analytics & Reporting", desc: "Performance dashboards, insight reports, and data-driven recommendations using Power BI and Excel.", tag: "Analytics" },
              { icon: <Target className="w-6 h-6 text-rose-500" />, title: "Campaign Strategy", desc: "End-to-end campaign planning and execution — from brief to content to post-campaign analysis.", tag: "Strategy" },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-3xl p-7 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors">
                  {svc.icon}
                </div>
                <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2">{svc.tag}</div>
                <h3 className="text-base font-black text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Timeline</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-none">Career history.</h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                role: "Social Media Manager & Graphic Designer",
                company: "Outering FC",
                period: "Aug 2024 – Present",
                type: "Contract",
                status: "Active",
                active: true,
                points: ["Grew Instagram from 90 to 324 followers (+260%)", `Consistent content and branded design over ${outeringMonths} months`],
              },
              {
                role: "Social Media Strategist & Designer",
                company: "MK Creative Hub",
                period: "Dec 2025 – Mar 2026",
                type: "Contract",
                status: "Former",
                active: false,
                points: ["Orchestrated Women's Day campaign — 578 reel views, +872.6% accounts reached", "Drove +322.7% profile activity surge in 30 days"],
              },
              {
                role: "Casting Coordinator",
                company: "Safaricom PLC",
                period: "Feb 2023 – Jul 2023",
                type: "Contract",
                status: "Former",
                active: false,
                points: ["Developed unique character persona for a viral football ad campaign", "Part of cross-functional team of 5 · drove brand engagement lift in Month 1"],
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-3xl p-7 border-2 border-gray-100 hover:border-rose-200 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-base font-black text-gray-900">{job.role}</h3>
                    <div className="text-base text-rose-500 font-bold mt-0.5">{job.company}</div>
                    <div className="text-xs text-gray-400 mt-1">{job.period} · {job.type}</div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                    job.active
                      ? "text-emerald-600 bg-emerald-50 border-emerald-200"
                      : "text-gray-400 bg-gray-50 border-gray-200"
                  }`}>
                    {job.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-500">
                      <ArrowRight className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#1a0a0f] text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">Let's build<br /><span className="text-rose-500">together.</span></h2>
            <p className="text-white/50 text-lg mb-10">
              Ready to grow your brand's social presence? I'm currently available for new projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:Abuogaaustin@gmail.com"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" /> Abuogaaustin@gmail.com
              </a>
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-rose-400 text-white/60 hover:text-white text-sm font-medium px-7 py-3.5 rounded-xl transition-all w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                {showPhone ? "+254 799 867 387" : "Show phone number"}
              </button>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
              <a href="https://github.com/austinabuoga" target="_blank" rel="noreferrer" className="text-white/20 hover:text-rose-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/austinabuoga-49447937b/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-rose-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <button
                onClick={() => navigate("/data")}
                className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-rose-400 transition-colors"
              >
                Also see my Data Analysis portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
