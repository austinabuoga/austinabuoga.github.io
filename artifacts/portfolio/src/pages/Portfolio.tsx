import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";
import { Terminal, Activity, Github, Globe, Briefcase, Clock, Database, ChevronRight, Linkedin, Building2, Mail, Award, Wrench, ExternalLink, Calendar, Layers, Phone, MessageCircle, BarChart2 } from "lucide-react";
import { useState, useEffect } from "react";

function getTenure(startYear: number, startMonth: number): string {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  let months = now.getMonth() - startMonth;
  if (months < 0) { years--; months += 12; }
  if (years === 0) return `${months} ${months === 1 ? 'MONTH' : 'MONTHS'}`;
  if (months === 0) return `${years} ${years === 1 ? 'YR' : 'YRS'}`;
  return `${years} ${years === 1 ? 'YR' : 'YRS'} ${months} ${months === 1 ? 'MONTH' : 'MONTHS'}`;
}

function getTotalMonths(startYear: number, startMonth: number): number {
  const now = new Date();
  return (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth);
}

const skillsData = [
  { subject: "SQL/Python", A: 95, fullMark: 100 },
  { subject: "Data Analysis", A: 92, fullMark: 100 },
  { subject: "Social Strategy", A: 98, fullMark: 100 },
  { subject: "Data Visualization", A: 88, fullMark: 100 },
  { subject: "Graphic Design", A: 85, fullMark: 100 },
];

const kpiMetrics = [
  { label: "FOLLOWER GROWTH", value: "260%", trend: "90 → 324 // OUTERING FC" },
  { label: "ACCOUNTS REACHED", value: "817", trend: "+872.6% // MK CREATIVE HUB" },
  { label: "PROFILE ACTIVITY", value: "+322.7%", trend: "VS PREVIOUS PERIOD // MK" },
];

const capabilities = [
  { name: "SQL / Python", val: 95 },
  { name: "Data Visualization (Power BI / Excel)", val: 88 },
  { name: "Social Media Strategy", val: 98 },
  { name: "Graphics Design & Copywriting", val: 85 },
];

const brandsData = [
  { name: "MK Creative Hub", type: "Creative Agency", logo: "/mk-creative-hub-logo.png", circleBg: false },
  { name: "Outering FC", type: "Football Club", logo: "/outering-fc-logo.png", circleBg: true },
  { name: "Safaricom PLC", type: "Telecom", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Safaricom_logo.svg/500px-Safaricom_logo.svg.png", circleBg: false },
];

const identityInfo = [
  { label: "STATUS", value: "HIRE_READY", icon: <Activity className="w-4 h-4" /> },
  { label: "REGION", value: "KENYA / GLOBAL", icon: <Globe className="w-4 h-4" /> },
  { label: "SPECIALIZATION", value: "DATA-DRIVEN GROWTH", icon: <Briefcase className="w-4 h-4" /> },
  { label: "UPTIME", value: "24/7/365", icon: <Clock className="w-4 h-4" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const NAV_ITEMS = [
    { id: 'metrics', label: 'METRICS' },
    { id: 'clients', label: 'CLIENTS' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'certs', label: 'CERTS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'data', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
];

const ALL_SCREENSHOTS: string[] = [
  "/mk-content-3.png",
  "/mk-content-1.png",
  "/mk-content-2.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/instagram_analysis.py%20-%20instagram-analytics-project%20-%20Visual%20Studio%20Code%204_10_2026%203_05_41%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Figure%201%204_10_2026%202_14_24%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/instagram_cleaned_data.csv%20-%20Excel%204_10_2026%203_04_56%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/DBeaver%2026.0.1%20-%20_postgres_%20Script-10%204_7_2026%207_52_35%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_46_18%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_46_34%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_47_02%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_47_59%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%204_30_03%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%204_51_19%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%204_51_31%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%205_17_40%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%205_24_15%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%205_29_05%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/sales_analysis.py%20-%20sales%20revenue%20dashboard%20-%20Visual%20Studio%20Code%204_11_2026%201_32_12%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/cleaned_sales_data.csv%20-%20Excel%204_11_2026%201_42_14%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/sales_summary.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%201_58_36%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_04_01%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_04_23%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_08_20%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_08_56%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_19_54%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_20_05%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_20_22%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/customer_segmentation.py%20-%20customer-segmentation-analysis%20-%20Visual%20Studio%20Code%204_11_2026%205_15_19%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/customer_segmentation.py%20-%20customer-segmentation-analysis%20-%20Visual%20Studio%20Code%204_11_2026%205_15_36%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/customer_segments.csv%20-%20Excel%204_12_2026%2012_11_44%20AM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Figure%201%204_11_2026%205_13_25%20PM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_38_47%20AM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_51_04%20AM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_48_13%20AM.png",
  "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_48_20%20AM.png",
];

export default function Portfolio() {
  const [showPhone, setShowPhone] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const outeringTenure = getTenure(2024, 7);
  const outeringMonths = getTotalMonths(2024, 7);

  useEffect(() => {
    const handleScroll = () => setNavVisible(window.scrollY > 220);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-80px 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const lightboxIndex = lightbox ? ALL_SCREENSHOTS.indexOf(lightbox) : -1;
  const hasPrev = lightboxIndex > 0;
  const hasNext = lightboxIndex >= 0 && lightboxIndex < ALL_SCREENSHOTS.length - 1;

  useEffect(() => {
    if (!lightbox) return;
    const idx = ALL_SCREENSHOTS.indexOf(lightbox);
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && idx < ALL_SCREENSHOTS.length - 1) setLightbox(ALL_SCREENSHOTS[idx + 1]);
      if (e.key === 'ArrowLeft' && idx > 0) setLightbox(ALL_SCREENSHOTS[idx - 1]);
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-mono selection:bg-primary/30 selection:text-primary relative overflow-x-hidden p-4 md:p-8 lg:p-12 pb-24">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-primary border border-primary/40 px-3 py-1 text-xs tracking-widest hover:bg-primary hover:text-background transition-all"
          >
            CLOSE ✕
          </button>

          {/* Counter */}
          {lightboxIndex >= 0 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-primary/60 tracking-widest font-mono">
              {lightboxIndex + 1} / {ALL_SCREENSHOTS.length}
            </div>
          )}

          {/* Prev arrow */}
          {hasPrev && (
            <button
              onClick={e => { e.stopPropagation(); setLightbox(ALL_SCREENSHOTS[lightboxIndex - 1]); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-primary border border-primary/40 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-background transition-all text-lg"
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Next arrow */}
          {hasNext && (
            <button
              onClick={e => { e.stopPropagation(); setLightbox(ALL_SCREENSHOTS[lightboxIndex + 1]); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary border border-primary/40 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-background transition-all text-lg"
              aria-label="Next"
            >
              ›
            </button>
          )}

          <img
            src={lightbox}
            alt="Content preview"
            className="max-w-full max-h-[90vh] object-contain border border-primary/20 shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* Sticky Nav */}
      {navVisible && (
        <nav className="fixed top-0 left-0 right-0 z-[90] bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-lg shadow-black/40">
          <div className="flex items-center overflow-x-auto px-4 py-0 gap-0" style={{ scrollbarWidth: 'none' }}>
            <span className="text-primary text-xs pr-3 shrink-0 opacity-40 border-r border-border/30 py-3 mr-1">~/</span>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-xs px-3 py-3 tracking-widest shrink-0 transition-all duration-200 border-b-2 ${
                  activeSection === id
                    ? 'text-primary border-primary font-bold'
                    : 'text-muted-foreground border-transparent hover:text-primary/70'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Scanline Grid Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] z-50"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto space-y-16 relative z-10"
      >
        {/* Header / Identity Area */}
        <motion.header variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-3 border border-border p-4 bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(52,211,153,0.05)]">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="text-xs tracking-widest uppercase opacity-70">System Initialized</span>
            <div className="flex-1 border-t border-border/50 border-dashed mx-4"></div>
            <Terminal className="w-4 h-4 opacity-50" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-emerald-50 mb-2 glow-text">
                AUSTIN ABUOGA
              </h1>
              <p className="text-primary text-sm md:text-base max-w-xl leading-relaxed opacity-90">
                &gt; SOCIAL MEDIA MANAGER & DATA ANALYST FOCUSED ON SCALING BRANDS THROUGH DATA-DRIVEN STRATEGY, PERFORMANCE ANALYTICS, AND HIGH-CONVERTING CONTENT.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/austin-abuoga"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 border border-primary/30 bg-primary/5 hover:bg-primary/20 px-6 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                data-testid="link-github"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>/GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/austin-abuoga-49447937b/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 border border-primary/30 bg-primary/5 hover:bg-primary/20 px-6 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>/LINKEDIN</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {identityInfo.map((info) => (
              <div key={info.label} className="border border-border/50 bg-card p-4 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 text-xs opacity-60 mb-2">
                  {info.icon}
                  <span>{info.label}</span>
                </div>
                <div className="font-semibold text-sm">{info.value}</div>
              </div>
            ))}
          </div>
        </motion.header>

        {/* KPIs */}
        <motion.section id="metrics" variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">IMPACT_METRICS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpiMetrics.map((kpi, i) => (
              <div key={i} className="relative border border-primary/20 bg-card p-6 overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  <Activity className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs opacity-60 mb-1 tracking-wider">{kpi.label}</div>
                  <div className="text-4xl font-bold text-emerald-50 mb-2">{kpi.value}</div>
                  <div className="text-sm text-primary flex items-center gap-1">
                    <ChevronRight className="w-4 h-4" />
                    {kpi.trend}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full">
                  <div className="h-full bg-primary w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Client Cases */}
        <motion.section id="clients" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CLIENT_CASES</h2>
          </div>

          <div className="space-y-8">
            {/* Outering FC */}
            <div className="border border-border bg-card p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 p-1">
                  <img src="/outering-fc-logo.png" alt="Outering FC" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-xs opacity-50 tracking-wider mb-1">CLIENT://</div>
                  <h3 className="text-xl font-bold text-emerald-50 tracking-widest">OUTERING FC</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs text-primary border border-primary/30 px-2 py-0.5 tracking-wide">TENURE: {outeringTenure}</span>
                    <span className="text-xs text-emerald-400 border border-emerald-400/30 px-2 py-0.5 tracking-wide">● ACTIVE</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs opacity-50 tracking-wider mb-2">SERVICES_DEPLOYED://</div>
                <div className="flex flex-wrap gap-2">
                  {["Social Media Management", "Graphic Design"].map(s => (
                    <span key={s} className="text-xs border border-primary/20 bg-primary/5 text-primary px-2 py-1 tracking-wide">{s}</span>
                  ))}
                  <span className="text-xs border border-border/40 text-muted-foreground px-2 py-1 tracking-wide">Platform: Instagram</span>
                </div>
              </div>

              <div>
                <div className="text-xs opacity-50 tracking-wider mb-3">PERFORMANCE_METRICS://</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "STARTING FOLLOWERS", value: "90" },
                    { label: "CURRENT FOLLOWERS", value: "324" },
                    { label: "TOTAL GROWTH", value: "+260%" },
                    { label: "NEW FOLLOWERS", value: "+234" },
                  ].map((m, i) => (
                    <div key={i} className="border border-border/40 p-3 bg-muted/10">
                      <div className="text-xs opacity-50 mb-1 tracking-wider">{m.label}</div>
                      <div className="text-2xl font-bold text-emerald-50">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-primary/40 pl-4">
                <div className="text-xs opacity-50 tracking-wider mb-1">KEY_ACHIEVEMENT://</div>
                <p className="text-sm opacity-80 leading-relaxed">
                  Grew Outering FC's Instagram from 90 to 324 followers over {outeringMonths} months through consistent content creation and branded graphic design — establishing a recognisable digital identity for the football club from the ground up.
                </p>
              </div>
            </div>

            {/* MK Creative Hub */}
            <div className="border border-border bg-card p-6 space-y-6">
              <div className="flex items-start gap-4">
                <img src="/mk-creative-hub-logo.png" alt="MK Creative Hub" className="w-16 h-16 object-contain mt-1" />
                <div className="flex-1">
                  <div className="text-xs opacity-50 tracking-wider mb-1">CLIENT://</div>
                  <h3 className="text-xl font-bold text-emerald-50 tracking-widest">MK CREATIVE HUB</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs text-primary border border-primary/30 px-2 py-0.5 tracking-wide">TENURE: 4 MONTHS</span>
                    <span className="text-xs text-muted-foreground border border-border/40 px-2 py-0.5 tracking-wide">● FORMER</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs opacity-50 tracking-wider mb-2">SERVICES_DEPLOYED://</div>
                <div className="flex flex-wrap gap-2">
                  {["Social Media Management", "Strategy", "Graphic Design", "Copywriting", "SMO", "SEO"].map(s => (
                    <span key={s} className="text-xs border border-primary/20 bg-primary/5 text-primary px-2 py-1 tracking-wide">{s}</span>
                  ))}
                  <span className="text-xs border border-border/40 text-muted-foreground px-2 py-1 tracking-wide">Platform: Instagram</span>
                  <span className="text-xs border border-border/40 text-muted-foreground px-2 py-1 tracking-wide">Employment: Contract</span>
                </div>
              </div>

              <div>
                <div className="text-xs opacity-50 tracking-wider mb-1">
                  PERFORMANCE_METRICS:// <span className="text-primary normal-case font-normal">Last 30 Days — 25 Feb to 26 Mar</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                  {[
                    { label: "TOTAL VIEWS", value: "2,478", sub: null },
                    { label: "ACCOUNTS REACHED", value: "817", sub: "+872.6%" },
                    { label: "TOTAL INTERACTIONS", value: "248", sub: null },
                    { label: "PROFILE VISITS", value: "92", sub: "+318.2%" },
                    { label: "PROFILE ACTIVITY", value: "93", sub: "+322.7%" },
                    { label: "TOP REEL VIEWS", value: "578", sub: "Women's Day" },
                  ].map((m, i) => (
                    <div key={i} className="border border-border/40 p-3 bg-muted/10">
                      <div className="text-xs opacity-50 mb-1 tracking-wider">{m.label}</div>
                      <div className="text-2xl font-bold text-emerald-50">{m.value}</div>
                      {m.sub && <div className="text-xs text-primary mt-0.5 tracking-wide">{m.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-primary/40 pl-4 space-y-4">
                <div className="text-xs opacity-50 tracking-wider mb-1">KEY_ACHIEVEMENTS://</div>
                <div className="space-y-1">
                  <div className="text-xs text-primary tracking-wider font-bold">STRATEGIC DESIGN & ORCHESTRATION</div>
                  <p className="text-sm opacity-80 leading-relaxed">Spearheaded the visual identity and campaign strategy for a campaign spotlighting 4 female founders to drive brand authority and engagement.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-primary tracking-wider font-bold">VIRAL GROWTH & REACH</div>
                  <p className="text-sm opacity-80 leading-relaxed">Achieved a +322.7% surge in profile activity, with the flagship reel garnering 578 views and contributing to a 872.6% period-over-period increase in total accounts reached.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-primary tracking-wider font-bold">CONTENT OPTIMIZATION</div>
                  <p className="text-sm opacity-80 leading-relaxed">Shifted the engagement paradigm by prioritizing short-form video, resulting in Reels accounting for 83.3% of all platform interactions.</p>
                </div>
              </div>
            </div>

            {/* Safaricom */}
            <div className="border border-border bg-card p-6 space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Safaricom_logo.svg/500px-Safaricom_logo.svg.png"
                  alt="Safaricom PLC"
                  className="w-16 h-16 object-contain mt-1"
                />
                <div className="flex-1">
                  <div className="text-xs opacity-50 tracking-wider mb-1">CLIENT://</div>
                  <h3 className="text-xl font-bold text-emerald-50 tracking-widest">SAFARICOM PLC</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs text-primary border border-primary/30 px-2 py-0.5 tracking-wide">TENURE: 6 MONTHS // FEB–JUL 2023</span>
                    <span className="text-xs text-muted-foreground border border-border/40 px-2 py-0.5 tracking-wide">● FORMER</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs opacity-50 tracking-wider mb-2">ROLE & SERVICES_DEPLOYED://</div>
                <div className="flex flex-wrap gap-2">
                  {["Casting Coordinator", "Character Development", "Social Media Marketing", "Campaign Production", "Recruiting"].map(s => (
                    <span key={s} className="text-xs border border-primary/20 bg-primary/5 text-primary px-2 py-1 tracking-wide">{s}</span>
                  ))}
                  <span className="text-xs border border-border/40 text-muted-foreground px-2 py-1 tracking-wide">Employment: Contract</span>
                </div>
              </div>

              <div>
                <div className="text-xs opacity-50 tracking-wider mb-3">ENGAGEMENT_OVERVIEW://</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "TEAM SIZE", value: "5", sub: "Cross-functional" },
                    { label: "CAMPAIGN TYPE", value: "Football Ad", sub: "Viral format" },
                    { label: "IMPACT WINDOW", value: "Month 1", sub: "Brand engagement lift" },
                  ].map((m, i) => (
                    <div key={i} className="border border-border/40 p-3 bg-muted/10">
                      <div className="text-xs opacity-50 mb-1 tracking-wider">{m.label}</div>
                      <div className="text-lg font-bold text-emerald-50">{m.value}</div>
                      {m.sub && <div className="text-xs text-primary mt-0.5 tracking-wide">{m.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-2 border-primary/40 pl-4 space-y-4">
                <div className="text-xs opacity-50 tracking-wider mb-1">KEY_ACHIEVEMENTS://</div>
                <div className="space-y-1">
                  <div className="text-xs text-primary tracking-wider font-bold">CHARACTER DEVELOPMENT</div>
                  <p className="text-sm opacity-80 leading-relaxed">Developed a unique character persona that resonated with the target demographic, forming the creative foundation of the campaign.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-primary tracking-wider font-bold">VIRAL CAMPAIGN EXECUTION</div>
                  <p className="text-sm opacity-80 leading-relaxed">Part of a team of 5 that developed a viral Safaricom football advertisement campaign, generating a measurable increase in brand engagement on social media within the first month of launch.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Portfolio */}
        <motion.section id="portfolio" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CONTENT_PORTFOLIO</h2>
          </div>

          {/* MK Creative Hub Work Samples */}
          <div className="space-y-3">
            <div className="text-xs opacity-50 tracking-wider">MK_CREATIVE_HUB // INSTAGRAM CONTENT — MARCH 2026</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["/mk-content-3.png", "/mk-content-1.png", "/mk-content-2.png"].map((src, i) => (
                <button key={i} onClick={() => setLightbox(src)} className="border border-border/40 bg-card overflow-hidden group relative text-left cursor-zoom-in w-full">
                  <img src={src} alt={`MK Creative Hub content ${i + 1}`} className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                    <ExternalLink className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary tracking-wider">CONTENT DESIGN // CANVA</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Outering FC */}
          <div className="border border-border/40 bg-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shrink-0">
                <img src="/outering-fc-logo.png" alt="Outering FC" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-xs opacity-50 tracking-wider mb-0.5">OUTERING_FC // INSTAGRAM</div>
                <div className="text-sm font-bold text-emerald-50">Live account managed for {outeringTenure.toLowerCase()}</div>
                <div className="text-xs text-primary/70 mt-0.5">Social Media Management · Graphic Design</div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/outering_fc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-primary/40 text-primary px-4 py-2 text-xs tracking-widest hover:bg-primary/10 transition-colors shrink-0"
            >
              <ExternalLink className="w-3 h-3" />
              VIEW ON INSTAGRAM
            </a>
          </div>
        </motion.section>

        {/* Skills & DNA */}
        <motion.section id="skills" variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold tracking-widest text-emerald-50">CAPABILITIES_MANIFEST</h2>
            </div>
            
            <div className="border border-border bg-card p-6 space-y-6">
              {capabilities.map((cap, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{cap.name}</span>
                    <span className="text-primary font-bold">{cap.val}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cap.val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold tracking-widest text-emerald-50">SKILL_DNA</h2>
            </div>
            
            <div className="border border-border bg-card p-6 h-[330px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Austin" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* Tools Stack */}
        <motion.section id="tools" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">TOOLS_STACK</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Canva", role: "Design & Content Creation", tag: "PRIMARY" },
              { name: "Meta Business Suite", role: "Social Media Management", tag: "PRIMARY" },
              { name: "Power BI", role: "Data Visualization & Reporting", tag: "ANALYTICS" },
              { name: "Excel", role: "Data Analysis & Reporting", tag: "ANALYTICS" },
            ].map((tool, i) => (
              <div key={i} className="border border-border/40 bg-card p-4 space-y-2 hover:border-primary/40 transition-colors">
                <div className="text-[9px] text-primary tracking-widest">{tool.tag}</div>
                <div className="text-sm font-bold text-emerald-50">{tool.name}</div>
                <div className="text-xs opacity-60 leading-relaxed">{tool.role}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section id="certs" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CERTIFICATIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Introduction to Programming Using Python", issuer: "Horizon Institute of Technology", date: "Nov 2025", skills: "Python" },
              { title: "Introduction to Programming Using Python", issuer: "IT Bulls", date: "Nov 2025", skills: "Python" },
              { title: "Search Engine Optimization", issuer: "Udemy", date: "Dec 2025", skills: "SEO" },
              { title: "AI Engineer Explorer", issuer: "School of AI", date: "Dec 2025", skills: "Machine Learning, AI" },
              { title: "Rust (Programming Language)", issuer: "School of AI", date: "Nov 2025", skills: "Rust" },
            ].map((cert, i) => (
              <div key={i} className="border border-border/40 bg-card p-4 flex gap-3 items-start hover:border-primary/40 transition-colors">
                <div className="w-8 h-8 border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <div className="text-sm font-bold text-emerald-50 leading-snug">{cert.title}</div>
                  <div className="text-xs text-primary/80">{cert.issuer}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] tracking-wider opacity-50 border border-border/40 px-1.5 py-0.5">{cert.date}</span>
                    <span className="text-[9px] tracking-wider text-primary/60">{cert.skills}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section id="services" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">SERVICES_OFFERED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Social Media Management", desc: "Full account management — strategy, content calendar, scheduling, community engagement, and performance tracking.", tag: "CORE" },
              { title: "Graphic Design", desc: "Branded visuals, carousel posts, campaign graphics, and content design using Canva.", tag: "CORE" },
              { title: "Copywriting & SEO", desc: "Scroll-stopping captions, SEO-optimised content, and messaging that converts.", tag: "CONTENT" },
              { title: "Data Analytics & Reporting", desc: "Performance dashboards, insight reports, and data-driven recommendations using Power BI and Excel.", tag: "ANALYTICS" },
              { title: "Campaign Strategy", desc: "End-to-end campaign planning and execution — from brief to content to post-campaign analysis.", tag: "STRATEGY" },
            ].map((svc, i) => (
              <div key={i} className="border border-border/40 bg-card p-5 space-y-2 hover:border-primary/40 transition-colors group">
                <div className="text-[9px] text-primary tracking-widest">{svc.tag}</div>
                <div className="text-sm font-bold text-emerald-50 group-hover:text-primary transition-colors">{svc.title}</div>
                <p className="text-xs opacity-70 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Career Timeline */}
        <motion.section id="timeline" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CAREER_TIMELINE</h2>
          </div>
          <div className="relative border-l-2 border-primary/20 ml-3 space-y-0">
            {[
              {
                role: "Social Media Manager & Graphic Designer",
                company: "Outering FC",
                period: "Aug 2024 – Present",
                type: "Contract",
                status: "ACTIVE",
                points: ["Grew Instagram from 90 to 324 followers (+260%)", `Consistent content creation and branded graphic design over ${outeringMonths} months`],
              },
              {
                role: "Social Media Strategist & Designer",
                company: "MK Creative Hub",
                period: "Dec 2025 – Mar 2026",
                type: "Contract",
                status: "FORMER",
                points: ["Orchestrated Women's Day campaign — 578 reel views, +872.6% accounts reached", "Drove +322.7% profile activity surge in 30 days"],
              },
              {
                role: "Casting Coordinator",
                company: "Safaricom PLC",
                period: "Feb 2023 – Jul 2023",
                type: "Full-time",
                status: "FORMER",
                points: ["Developed unique character persona for a viral football ad campaign", "Part of cross-functional team of 5 that drove brand engagement increase in Month 1"],
              },
            ].map((job, i) => (
              <div key={i} className="relative pl-8 pb-8">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full border-2 border-primary bg-background"></div>
                <div className="border border-border/40 bg-card p-4 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-emerald-50">{job.role}</div>
                      <div className="text-xs text-primary/80 mt-0.5">{job.company}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[9px] tracking-wider opacity-50 border border-border/40 px-1.5 py-0.5">{job.type}</span>
                      <span className={`text-[9px] tracking-wider px-1.5 py-0.5 border ${job.status === "ACTIVE" ? "text-emerald-400 border-emerald-400/30" : "text-muted-foreground border-border/40"}`}>● {job.status}</span>
                    </div>
                  </div>
                  <div className="text-[10px] opacity-50 tracking-wider">{job.period}</div>
                  <ul className="space-y-1">
                    {job.points.map((p, j) => (
                      <li key={j} className="text-xs opacity-70 flex gap-2">
                        <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Brands Section */}
        <motion.section variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CLIENT_ROSTER</h2>
          </div>
          <p className="text-xs opacity-50 -mt-4 tracking-wider uppercase">Brands Trusted With Their Digital Presence</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {brandsData.map((brand, i) => (
              <motion.div
                key={i}
                className="border border-border/40 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 p-6 flex flex-col items-center justify-center gap-3 group cursor-default"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-testid={`card-brand-${i}`}
              >
                <div className="h-12 w-full flex items-center justify-center">
                  {brand.logo ? (
                    brand.circleBg ? (
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400">
                        <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-12 max-w-[120px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                      />
                    )
                  ) : (
                    <div className="w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary/20 transition-colors">
                      {brand.name.charAt(0)}
                    </div>
                  )}
                </div>
                <span className="text-xs font-semibold tracking-widest text-center text-emerald-100/80 group-hover:text-emerald-50 transition-colors uppercase">
                  {brand.name}
                </span>
                {brand.type && (
                  <span className="text-[9px] opacity-40 tracking-wider uppercase">{brand.type}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Data Projects */}
        <motion.section id="data" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">DATA_PROJECTS</h2>
          </div>

          <div className="border border-border/40 bg-card p-6 space-y-6">
            {/* Project Header */}
            <div className="space-y-3">
              <div className="text-xs opacity-50 tracking-wider">PROJECT://</div>
              <h3 className="text-lg font-bold text-emerald-50 tracking-widest">INSTAGRAM USER ANALYTICS DASHBOARD</h3>
              <div className="flex flex-wrap gap-2">
                {["PYTHON", "SQL", "POWER BI", "EXCEL"].map(t => (
                  <span key={t} className="text-xs bg-primary/10 border border-primary/30 text-primary px-2 py-0.5 tracking-wide">{t}</span>
                ))}
                <span className="text-xs bg-card border border-border/40 text-muted-foreground px-2 py-0.5 tracking-wide">1.5M+ RECORDS</span>
              </div>
            </div>

            {/* Objective */}
            <div className="border-l-2 border-primary/40 pl-4">
              <div className="text-xs opacity-50 tracking-wider mb-2">OBJECTIVE://</div>
              <p className="text-sm opacity-80 leading-relaxed">
                End-to-end analysis of engagement patterns and usage behaviours across 1.5M+ Instagram users, examining how demographic factors — age, gender, and occupation — correlate with platform activity. Built a full data pipeline from raw CSV ingestion through to an interactive Power BI dashboard.
              </p>
            </div>

            {/* Pipeline */}
            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">PIPELINE://</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { tool: "PYTHON · PANDAS", detail: "Loaded and inner-merged two raw CSVs (1.5M+ rows) in VS Code — handled column deduplication and joined datasets on user_id using pandas merge(), then automated export to a production-ready CSV via .to_csv()" },
                  { tool: "PYTHON · FEATURE ENGINEERING", detail: "Engineered 4 custom columns: engagement_score (weighted sum of daily likes, comments, and weekly posts), total_daily_minutes (feed + reels + explore time), usage_category (Low/Medium/High threshold binning), and age_group (5 demographic bands)" },
                  { tool: "PYTHON · MATPLOTLIB", detail: "Generated a bar chart visualising average daily Instagram usage segmented by gender — styled with a professional colour palette for presentation-ready output" },
                  { tool: "SQL · POSTGRESQL / DBEAVER", detail: "Imported cleaned data into PostgreSQL and executed GROUP BY queries in DBeaver to aggregate avg(daily_usage_time) by gender, avg(engagement) by age, and avg usage by occupation — surfacing behavioural differences across demographic cohorts" },
                  { tool: "EXCEL · PIVOT TABLES", detail: "Performed initial exploratory data analysis on the raw dataset using Excel pivot tables — cross-tabulated usage metrics to validate trends before formalising transformations in Python" },
                  { tool: "POWER BI · DASHBOARD", detail: "Built a multi-page interactive dashboard connected to the cleaned CSV, with slicers for gender, age group, and occupation — report pages cover engagement distribution, usage time patterns, and high-engagement user profiling" },
                ].map(({ tool, detail }, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-background/40 border border-border/20">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-primary font-bold tracking-wider mb-1">{tool}</div>
                      <div className="text-xs opacity-70 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">SCREENSHOTS://</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/instagram_analysis.py%20-%20instagram-analytics-project%20-%20Visual%20Studio%20Code%204_10_2026%203_05_41%20PM.png", label: "PYTHON · VS CODE" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Figure%201%204_10_2026%202_14_24%20PM.png", label: "MATPLOTLIB · CHART" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/instagram_cleaned_data.csv%20-%20Excel%204_10_2026%203_04_56%20PM.png", label: "EXCEL · CLEANED DATA" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/DBeaver%2026.0.1%20-%20_postgres_%20Script-10%204_7_2026%207_52_35%20PM.png", label: "SQL · DBEAVER" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_46_18%20PM.png", label: "POWER BI · 1" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_46_34%20PM.png", label: "POWER BI · 2" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_47_02%20PM.png", label: "POWER BI · 3" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%203_47_59%20PM.png", label: "POWER BI · 4" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%204_30_03%20PM.png", label: "POWER BI · 5" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%204_51_19%20PM.png", label: "POWER BI · 6" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%204_51_31%20PM.png", label: "POWER BI · 7" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%205_17_40%20PM.png", label: "POWER BI · 8" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%205_24_15%20PM.png", label: "POWER BI · 9" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/instagram-analytics-dashboard/main/instagram-analytics-project/images/Power%20BI%20Desktop%204_10_2026%205_29_05%20PM.png", label: "POWER BI · 10" },
                ].map(({ src, label }, i) => (
                  <button key={i} onClick={() => setLightbox(src)} className="border border-border/40 bg-background/40 overflow-hidden group relative cursor-zoom-in w-full">
                    <img src={src} alt={label} className="w-full h-28 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-card/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                      <ExternalLink className="w-4 h-4 text-primary" />
                      <span className="text-xs text-primary tracking-wide">{label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-border/20">
              <a href="https://github.com/austin-abuoga/instagram-analytics-dashboard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-primary/40 text-primary px-4 py-2 tracking-widest hover:bg-primary hover:text-background transition-all font-bold">
                <Github className="w-3.5 h-3.5" /> GITHUB REPO
              </a>
              <a href="https://drive.google.com/drive/folders/1r-AjetcProhpRTlw5qY1HO5EjoTVzgRP?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-border/40 text-muted-foreground px-4 py-2 tracking-widest hover:border-primary/40 hover:text-primary transition-all">
                <ExternalLink className="w-3.5 h-3.5" /> POWER BI DASHBOARD
              </a>
              <a href="https://drive.google.com/drive/folders/1Qvk8JOwRBH91JX4RJbEric9rKomyddcC?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-border/40 text-muted-foreground px-4 py-2 tracking-widest hover:border-primary/40 hover:text-primary transition-all">
                <ExternalLink className="w-3.5 h-3.5" /> EXCEL ANALYSIS
              </a>
              <a href="https://www.kaggle.com/datasets/rockyt07/social-media-user-analysis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-border/40 text-muted-foreground px-4 py-2 tracking-widest hover:border-primary/40 hover:text-primary transition-all">
                <ExternalLink className="w-3.5 h-3.5" /> RAW DATASET
              </a>
            </div>
          </div>

          {/* Project 2: Sales Revenue Dashboard */}
          <div className="border border-border/40 bg-card p-6 space-y-6">
            <div className="space-y-3">
              <div className="text-xs opacity-50 tracking-wider">PROJECT://</div>
              <h3 className="text-lg font-bold text-emerald-50 tracking-widest">SALES REVENUE DASHBOARD</h3>
              <div className="flex flex-wrap gap-2">
                {["PYTHON", "SQL", "POWER BI", "EXCEL"].map(t => (
                  <span key={t} className="text-xs bg-primary/10 border border-primary/30 text-primary px-2 py-0.5 tracking-wide">{t}</span>
                ))}
                <span className="text-xs bg-card border border-border/40 text-muted-foreground px-2 py-0.5 tracking-wide">51,291 RECORDS</span>
              </div>
            </div>

            <div className="border-l-2 border-primary/40 pl-4">
              <div className="text-xs opacity-50 tracking-wider mb-2">OBJECTIVE://</div>
              <p className="text-sm opacity-80 leading-relaxed">
                End-to-end sales analysis pipeline built on the Global Superstore dataset — examining which products generate the most revenue, which regions perform best, which months have the highest sales, and who the top customers are. Built a full data pipeline from raw CSV ingestion through to a 3-page interactive Power BI dashboard covering $13M in total revenue across 4,873 customers.
              </p>
            </div>

            <div>
              <div className="text-xs opacity-50 tracking-wider mb-2">KEY_FINDINGS://</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {[
                  { label: "TOP PRODUCT", value: "Apple Smart Phone, Full Size" },
                  { label: "TOP REGION", value: "Central — ~$2.75M" },
                  { label: "PEAK MONTH", value: "December — ~$1.58M" },
                  { label: "TOP CUSTOMER", value: "Tom Ashbrook" },
                  { label: "TOTAL REVENUE", value: "$13M across 25K orders" },
                  { label: "LARGEST SEGMENT", value: "Consumer — 51.48% ($7M)" },
                ].map(({ label, value }, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-background/40 border border-border/20">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-primary font-bold tracking-wider mb-1">{label}</div>
                      <div className="text-xs opacity-70 leading-relaxed">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">PIPELINE://</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { tool: "PYTHON · PANDAS", detail: "Loaded raw Superstore CSV (51,291 rows), removed duplicates and nulls, converted Order.Date to datetime, and exported cleaned data to CSV" },
                  { tool: "PYTHON · FEATURE ENGINEERING", detail: "Engineered Year, Month, Month_Name, and Season columns (Winter/Spring/Summer/Fall) to enable time-based and seasonal analysis" },
                  { tool: "PYTHON · MATPLOTLIB / SEABORN", detail: "Generated summary visualisations: monthly revenue trend (line chart) and total revenue by region (bar chart) using the fivethirtyeight style" },
                  { tool: "SQL · POSTGRESQL / DBEAVER", detail: "Imported cleaned data into PostgreSQL and ran GROUP BY aggregation queries to compute total revenue by region, product, and customer segment" },
                  { tool: "EXCEL · PIVOT TABLES", detail: "Performed initial EDA on the raw dataset — cross-tabulated revenue by region, product category, and month to validate early trends before formalising in Python" },
                  { tool: "POWER BI · 3-PAGE DASHBOARD", detail: "Overview Dashboard (KPI cards: $13M revenue, 25K orders, 4,873 customers), Sales Performance (product/month/region charts), Customer Insights (top customers + segment pie chart)" },
                ].map(({ tool, detail }, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-background/40 border border-border/20">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-primary font-bold tracking-wider mb-1">{tool}</div>
                      <div className="text-xs opacity-70 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">SCREENSHOTS://</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/sales_analysis.py%20-%20sales%20revenue%20dashboard%20-%20Visual%20Studio%20Code%204_11_2026%201_32_12%20PM.png", label: "PYTHON · VS CODE" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/cleaned_sales_data.csv%20-%20Excel%204_11_2026%201_42_14%20PM.png", label: "EXCEL · CLEANED DATA" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/sales_summary.png", label: "MATPLOTLIB · CHARTS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%201_58_36%20PM.png", label: "POWER BI · OVERVIEW" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_04_01%20PM.png", label: "POWER BI · REVENUE/MONTH" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_04_23%20PM.png", label: "POWER BI · REVENUE/REGION" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_08_20%20PM.png", label: "POWER BI · SALES PERF" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_08_56%20PM.png", label: "POWER BI · TOP PRODUCTS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_19_54%20PM.png", label: "POWER BI · SEGMENTS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_20_05%20PM.png", label: "POWER BI · CUSTOMERS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/sales-revenue-dashboard/main/images/Power%20BI%20Desktop%204_11_2026%202_20_22%20PM.png", label: "POWER BI · INSIGHTS" },
                ].map(({ src, label }, i) => (
                  <button key={i} onClick={() => setLightbox(src)} className="border border-border/40 bg-background/40 overflow-hidden group relative cursor-zoom-in w-full">
                    <img src={src} alt={label} className="w-full h-28 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-card/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                      <ExternalLink className="w-4 h-4 text-primary" />
                      <span className="text-xs text-primary tracking-wide">{label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 border-t border-border/20">
              <a href="https://github.com/austin-abuoga/sales-revenue-dashboard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-primary/40 text-primary px-4 py-2 tracking-widest hover:bg-primary hover:text-background transition-all font-bold">
                <Github className="w-3.5 h-3.5" /> GITHUB REPO
              </a>
              <a href="https://www.kaggle.com/datasets/fatihilhan/global-superstore-dataset" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-border/40 text-muted-foreground px-4 py-2 tracking-widest hover:border-primary/40 hover:text-primary transition-all">
                <ExternalLink className="w-3.5 h-3.5" /> RAW DATASET
              </a>
            </div>
          </div>

          {/* Project 3: Customer Segmentation Analysis */}
          <div className="border border-border/40 bg-card p-6 space-y-6">
            <div className="space-y-3">
              <div className="text-xs opacity-50 tracking-wider">PROJECT://</div>
              <h3 className="text-lg font-bold text-emerald-50 tracking-widest">CUSTOMER SEGMENTATION ANALYSIS</h3>
              <div className="flex flex-wrap gap-2">
                {["PYTHON", "SQL", "POWER BI", "EXCEL"].map(t => (
                  <span key={t} className="text-xs bg-primary/10 border border-primary/30 text-primary px-2 py-0.5 tracking-wide">{t}</span>
                ))}
                <span className="text-xs bg-card border border-border/40 text-muted-foreground px-2 py-0.5 tracking-wide">10K CUSTOMERS</span>
              </div>
            </div>

            <div className="border-l-2 border-primary/40 pl-4">
              <div className="text-xs opacity-50 tracking-wider mb-2">OBJECTIVE://</div>
              <p className="text-sm opacity-80 leading-relaxed">
                End-to-end customer segmentation pipeline classifying 10,000 customers into four behavioural tiers — Low, Medium, High, and VIP — based on total spend using quantile-based segmentation. Built a full data pipeline from raw transaction data through to a 3-page Power BI dashboard surfacing spending patterns, order frequency, and top customers.
              </p>
            </div>

            <div>
              <div className="text-xs opacity-50 tracking-wider mb-2">KEY_FINDINGS://</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {[
                  { label: "TOTAL CUSTOMERS", value: "10,000 across 4 segments" },
                  { label: "AVERAGE SPEND", value: "$1,110 per customer" },
                  { label: "VIP CUSTOMERS", value: "2,500 — highest spend & frequency" },
                  { label: "VIP TOTAL SPEND", value: "approx. $5M (highest segment)" },
                  { label: "SEGMENTATION METHOD", value: "Quantile-based (qcut, q=4)" },
                  { label: "SPEND DISTRIBUTION", value: "Right-skewed — majority $500–$1,500, tail to $4K" },
                ].map(({ label, value }, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-background/40 border border-border/20">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-primary font-bold tracking-wider mb-1">{label}</div>
                      <div className="text-xs opacity-70 leading-relaxed">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">PIPELINE://</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { tool: "PYTHON · PANDAS", detail: "Loaded Customer_Transactions.csv, removed duplicates and nulls, converted last_purchase_date to datetime, and exported segmented data to CSV" },
                  { tool: "PYTHON · FEATURE ENGINEERING", detail: "Engineered Total Spend = num_purchases × avg_purchase_value, then applied quantile segmentation (qcut, q=4) to classify customers into Low / Medium / High / VIP tiers" },
                  { tool: "PYTHON · MATPLOTLIB / SEABORN", detail: "Generated two visualisations: Customer Segment Distribution (bar chart, equal 2,500 per tier) and Spending Distribution (histogram showing right-skewed pattern from $0 to $4K)" },
                  { tool: "EXCEL · SEGMENT REVIEW", detail: "Reviewed cleaned customer_segments.csv output in Excel to validate segment assignments and spending ranges before loading into Power BI" },
                  { tool: "SQL · POSTGRESQL / DBEAVER", detail: "Imported segmented data into PostgreSQL and ran GROUP BY aggregation queries to compute total spend, order frequency, and customer count per segment" },
                  { tool: "POWER BI · 3-PAGE DASHBOARD", detail: "Overview (10K customers, $1.11K avg spend, 2,500 VIP), Segmentation Dashboard (customers/spend/frequency per segment), Top Customers (ranked by total spend)" },
                ].map(({ tool, detail }, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-background/40 border border-border/20">
                    <ChevronRight className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-primary font-bold tracking-wider mb-1">{tool}</div>
                      <div className="text-xs opacity-70 leading-relaxed">{detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">SCREENSHOTS://</div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/customer_segmentation.py%20-%20customer-segmentation-analysis%20-%20Visual%20Studio%20Code%204_11_2026%205_15_19%20PM.png", label: "PYTHON · VS CODE 1" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/customer_segmentation.py%20-%20customer-segmentation-analysis%20-%20Visual%20Studio%20Code%204_11_2026%205_15_36%20PM.png", label: "PYTHON · VS CODE 2" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/customer_segments.csv%20-%20Excel%204_12_2026%2012_11_44%20AM.png", label: "EXCEL · SEGMENTS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Figure%201%204_11_2026%205_13_25%20PM.png", label: "MATPLOTLIB · CHARTS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_38_47%20AM.png", label: "POWER BI · OVERVIEW" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_51_04%20AM.png", label: "POWER BI · SEGMENTS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_48_13%20AM.png", label: "POWER BI · TOP CUSTOMERS" },
                  { src: "https://raw.githubusercontent.com/austin-abuoga/customer-segmentation-analysis/main/images/Power%20BI%20Desktop%204_12_2026%2012_48_20%20AM.png", label: "POWER BI · CUSTOMERS DRILL" },
                ].map(({ src, label }, i) => (
                  <button key={i} onClick={() => setLightbox(src)} className="border border-border/40 bg-background/40 overflow-hidden group relative cursor-zoom-in w-full">
                    <img src={src} alt={label} className="w-full h-28 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-card/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                      <ExternalLink className="w-4 h-4 text-primary" />
                      <span className="text-xs text-primary tracking-wide">{label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 border-t border-border/20">
              <a href="https://github.com/austin-abuoga/customer-segmentation-analysis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-primary/40 text-primary px-4 py-2 tracking-widest hover:bg-primary hover:text-background transition-all font-bold">
                <Github className="w-3.5 h-3.5" /> GITHUB REPO
              </a>
              <a href="https://www.kaggle.com/datasets/fares279/customers-transactions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs border border-border/40 text-muted-foreground px-4 py-2 tracking-widest hover:border-primary/40 hover:text-primary transition-all">
                <ExternalLink className="w-3.5 h-3.5" /> RAW DATASET
              </a>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CONTACT</h2>
          </div>
          <div className="border border-primary/20 bg-card p-8 text-center space-y-6">
            <div>
              <div className="text-xs opacity-50 tracking-wider mb-2">OPEN_TO_WORK://</div>
              <h3 className="text-2xl font-bold text-emerald-50 mb-2">Let's Build Something Together</h3>
              <p className="text-sm opacity-70 max-w-md mx-auto leading-relaxed">
                Available for social media management, graphic design, content strategy, and data analytics contracts. Let's talk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:Abuogaaustin@gmail.com"
                className="flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm tracking-widest hover:bg-primary hover:text-background transition-all duration-200 font-bold"
              >
                <Mail className="w-4 h-4" />
                ABUOGAAUSTIN@GMAIL.COM
              </a>
              <div className="relative">
                <button
                  onClick={() => setShowPhone(v => !v)}
                  className="flex items-center gap-2 border border-border/40 text-muted-foreground px-6 py-3 text-sm tracking-widest hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  +254 799 867 387
                </button>
                {showPhone && (
                  <div className="absolute top-full left-0 mt-1 w-full z-50 border border-primary/30 bg-card shadow-lg overflow-hidden">
                    <a
                      href="https://wa.me/254799867387"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowPhone(false)}
                      className="flex items-center gap-3 px-4 py-3 text-xs tracking-wider text-emerald-400 hover:bg-primary/10 transition-colors border-b border-border/30"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      CHAT ON WHATSAPP
                    </a>
                    <a
                      href="tel:+254799867387"
                      onClick={() => setShowPhone(false)}
                      className="flex items-center gap-3 px-4 py-3 text-xs tracking-wider text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      DIAL NUMBER
                    </a>
                  </div>
                )}
              </div>
              <a
                href="https://www.linkedin.com/in/austin-abuoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border/40 text-muted-foreground px-6 py-3 text-sm tracking-widest hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a
                href="https://github.com/austin-abuoga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border/40 text-muted-foreground px-6 py-3 text-sm tracking-widest hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GITHUB
              </a>
            </div>
            <div className="text-xs opacity-30 tracking-wider pt-2">RESPONSE_TIME: &lt; 24H</div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="pt-12 pb-8 border-t border-border/30 text-center opacity-60 text-xs flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-primary block rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-primary block rounded-full animate-pulse delay-75"></span>
            <span className="w-2 h-2 bg-primary block rounded-full animate-pulse delay-150"></span>
          </div>
          <div>TRANSMISSION END // AUSTIN_ABUOGA_PORTFOLIO</div>
        </motion.footer>

      </motion.div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 20px rgba(52, 211, 153, 0.3);
        }
      `}</style>
    </div>
  );
}
