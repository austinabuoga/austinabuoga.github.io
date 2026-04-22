import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft, ArrowRight, TrendingUp, Users, Eye, Heart,
  Instagram, ExternalLink, CheckCircle, Megaphone, Palette,
  FileText, Target, Calendar, Star, BarChart2, Mail, Phone, Linkedin, Github
} from "lucide-react";
import { useState, useEffect } from "react";

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

const CONTENT_SCREENSHOTS = [
  "/mk-content-3.png",
  "/mk-content-1.png",
  "/mk-content-2.png",
];

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
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const outeringTenure = getTenure(2024, 7);
  const outeringMonths = getTotalMonths(2024, 7);

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
      const idx = CONTENT_SCREENSHOTS.indexOf(lightbox);
      if (e.key === "ArrowRight" && idx < CONTENT_SCREENSHOTS.length - 1) setLightbox(CONTENT_SCREENSHOTS[idx + 1]);
      if (e.key === "ArrowLeft" && idx > 0) setLightbox(CONTENT_SCREENSHOTS[idx - 1]);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const lbIdx = lightbox ? CONTENT_SCREENSHOTS.indexOf(lightbox) : -1;

  return (
    <div className="min-h-[100dvh] bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            ✕
          </button>
          {lbIdx > 0 && (
            <button
              onClick={e => { e.stopPropagation(); setLightbox(CONTENT_SCREENSHOTS[lbIdx - 1]); }}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors"
            >‹</button>
          )}
          {lbIdx < CONTENT_SCREENSHOTS.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); setLightbox(CONTENT_SCREENSHOTS[lbIdx + 1]); }}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors"
            >›</button>
          )}
          <img
            src={lightbox}
            alt="Content preview"
            className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

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
                className={`text-xs px-3 py-4 shrink-0 transition-all border-b-2 ${
                  activeSection === id
                    ? "text-rose-500 border-rose-500 font-semibold"
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
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,63,94,0.08),_transparent_60%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-rose-500 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </button>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-8">
              <img
                src="/logo-white.png"
                alt="A17 Logo"
                className="w-28 h-28 object-contain rounded-2xl"
              />
            </div>
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Megaphone className="w-3.5 h-3.5" />
              Social Media Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Austin Abuoga
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
              I grow brands on social media through strategy, design, and data-driven content — from 90 to 324 followers and beyond.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/austinabuoga-49447937b/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <Linkedin className="w-4 h-4" /> Connect on LinkedIn
              </a>
              <a
                href="mailto:Abuogaaustin@gmail.com"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-rose-300 text-gray-600 hover:text-rose-500 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" /> Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results / KPIs */}
      <section id="results" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Impact Metrics</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Results that speak for themselves</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-5 h-5 text-rose-500" />,
                value: "260%",
                label: "Follower Growth",
                sub: "90 → 324 followers · Outering FC",
              },
              {
                icon: <Eye className="w-5 h-5 text-rose-500" />,
                value: "817",
                label: "Accounts Reached",
                sub: "+872.6% period-over-period · MK Creative Hub",
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-rose-500" />,
                value: "+322.7%",
                label: "Profile Activity",
                sub: "In 30 days · MK Creative Hub",
              },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-5 group-hover:border-rose-200 transition-colors shadow-sm">
                  {kpi.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">{kpi.value}</div>
                <div className="text-sm font-semibold text-gray-700 mb-2">{kpi.label}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{kpi.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* MK 30-day breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 bg-gray-50 rounded-2xl p-7 border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-700">MK Creative Hub — 30-Day Snapshot</span>
              <span className="text-xs text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full">25 Feb – 26 Mar</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">Detailed platform analytics from my last month managing the account.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Total Views", value: "2,478" },
                { label: "Accounts Reached", value: "817", sub: "+872.6%" },
                { label: "Total Interactions", value: "248" },
                { label: "Profile Visits", value: "92", sub: "+318.2%" },
                { label: "Profile Activity", value: "93", sub: "+322.7%" },
                { label: "Top Reel Views", value: "578", sub: "Women's Day" },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">{m.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{m.value}</div>
                  {m.sub && <div className="text-xs text-rose-500 font-medium mt-0.5">{m.sub}</div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Cases */}
      <section id="clients" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Client Cases</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Who I've worked with</h2>
          </motion.div>

          <div className="space-y-6">
            {/* Outering FC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="p-7">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden border border-gray-200 p-1">
                    <img src="/outering-fc-logo.png" alt="Outering FC" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">Outering FC</h3>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Active</span>
                    </div>
                    <div className="text-sm text-gray-500">Football Club · Contract · {outeringTenure}</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Social Media Management", "Graphic Design", "Instagram"].map(s => (
                        <span key={s} className="text-xs bg-rose-50 text-rose-600 border border-rose-100 px-2.5 py-0.5 rounded-full">{s}</span>
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
                    <div key={i} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                      <div className="text-xl font-bold text-gray-900">{m.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-rose-50 rounded-xl p-5 border border-rose-100">
                  <div className="text-xs font-semibold text-rose-500 uppercase tracking-wider mb-2">Key Achievement</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Grew Outering FC's Instagram from 90 to 324 followers over {outeringMonths} months through consistent content creation and branded graphic design — establishing a recognisable digital identity for the football club from the ground up.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MK Creative Hub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="p-7">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden border border-gray-200 p-1">
                    <img src="/mk-creative-hub-logo.png" alt="MK Creative Hub" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">MK Creative Hub</h3>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">Former</span>
                    </div>
                    <div className="text-sm text-gray-500">Creative Agency · Contract · 4 months</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Social Media Management", "Strategy", "Graphic Design", "Copywriting", "SMO", "SEO"].map(s => (
                        <span key={s} className="text-xs bg-rose-50 text-rose-600 border border-rose-100 px-2.5 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Strategic Design & Orchestration", desc: "Spearheaded the visual identity and campaign strategy spotlighting 4 female founders to drive brand authority and engagement." },
                    { title: "Viral Growth & Reach", desc: "Achieved a +322.7% surge in profile activity, with the flagship Women's Day reel garnering 578 views and contributing to a 872.6% period-over-period increase in accounts reached." },
                    { title: "Content Optimization", desc: "Shifted the engagement paradigm by prioritizing short-form video — Reels accounted for 83.3% of all platform interactions." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">{item.title}</div>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Safaricom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="p-7">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden border border-gray-200 p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Safaricom_logo.svg/500px-Safaricom_logo.svg.png" alt="Safaricom PLC" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">Safaricom PLC</h3>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">Former</span>
                    </div>
                    <div className="text-sm text-gray-500">Telecom · Contract · 6 months (Feb–Jul 2023)</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Casting Coordinator", "Character Development", "Campaign Production", "Social Media Marketing"].map(s => (
                        <span key={s} className="text-xs bg-rose-50 text-rose-600 border border-rose-100 px-2.5 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Character Development", desc: "Developed a unique character persona that resonated with the target demographic, forming the creative foundation of the campaign." },
                    { title: "Viral Campaign Execution", desc: "Part of a cross-functional team of 5 that produced a viral Safaricom football advertisement campaign, generating a measurable increase in brand engagement within the first month of launch." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">{item.title}</div>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Portfolio */}
      <section id="content" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Content Portfolio</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Work samples</h2>
            <p className="text-gray-400 text-sm mb-10">Instagram content created for MK Creative Hub — March 2026</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {CONTENT_SCREENSHOTS.map((src, i) => (
              <motion.button
                key={i}
                onClick={() => setLightbox(src)}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm cursor-zoom-in aspect-[4/5]"
              >
                <img
                  src={src}
                  alt={`Content sample ${i + 1}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center gap-2 text-white text-xs font-medium">
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View full size</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center p-1 overflow-hidden">
                <img src="/outering-fc-logo.png" alt="Outering FC" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Outering FC — Live Instagram Account</div>
                <div className="text-xs text-gray-400 mt-0.5">Managed for {outeringTenure} · Social Media & Graphic Design</div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/outering_fc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shrink-0"
            >
              <Instagram className="w-3.5 h-3.5" />
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">What I offer</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Megaphone className="w-5 h-5 text-rose-500" />, title: "Social Media Management", desc: "Full account management — strategy, content calendar, scheduling, community engagement, and performance tracking.", tag: "Core" },
              { icon: <Palette className="w-5 h-5 text-rose-500" />, title: "Graphic Design", desc: "Branded visuals, carousel posts, campaign graphics, and content design using Canva.", tag: "Core" },
              { icon: <FileText className="w-5 h-5 text-rose-500" />, title: "Copywriting & SEO", desc: "Scroll-stopping captions, SEO-optimised content, and messaging that converts.", tag: "Content" },
              { icon: <BarChart2 className="w-5 h-5 text-rose-500" />, title: "Data Analytics & Reporting", desc: "Performance dashboards, insight reports, and data-driven recommendations using Power BI and Excel.", tag: "Analytics" },
              { icon: <Target className="w-5 h-5 text-rose-500" />, title: "Campaign Strategy", desc: "End-to-end campaign planning and execution — from brief to content to post-campaign analysis.", tag: "Strategy" },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-rose-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                  {svc.icon}
                </div>
                <div className="text-[10px] font-semibold text-rose-400 uppercase tracking-widest mb-2">{svc.tag}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="timeline" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">Timeline</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Career history</h2>
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
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{job.role}</h3>
                    <div className="text-sm text-rose-500 font-medium mt-0.5">{job.company}</div>
                    <div className="text-xs text-gray-400 mt-1">{job.period} · {job.type}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                    job.active
                      ? "text-emerald-600 bg-emerald-50 border-emerald-200"
                      : "text-gray-400 bg-white border-gray-200"
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
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's work together</h2>
            <p className="text-gray-500 text-base mb-8">
              Ready to grow your brand's social presence? I'm currently available for new projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:Abuogaaustin@gmail.com"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium px-6 py-3 rounded-xl transition-colors w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" /> Abuogaaustin@gmail.com
              </a>
              <button
                onClick={() => setShowPhone(!showPhone)}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-rose-300 text-gray-600 hover:text-rose-500 text-sm font-medium px-6 py-3 rounded-xl transition-colors w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" />
                {showPhone ? "+254 799 867 387" : "Show phone number"}
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a href="https://github.com/austinabuoga" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/austinabuoga-49447937b/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-rose-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-10 pt-6 border-t border-rose-100">
              <button
                onClick={() => navigate("/data")}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-rose-500 transition-colors"
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
