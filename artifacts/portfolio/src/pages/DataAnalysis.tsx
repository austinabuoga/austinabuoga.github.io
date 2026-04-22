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
import {
  Terminal, Activity, Github, Globe, Briefcase, Clock,
  Database, ChevronRight, Linkedin, Mail, Award, Wrench,
  ExternalLink, Calendar, Phone, MessageCircle, BarChart2, ArrowLeft
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const skillsData = [
  { subject: "SQL/Python", A: 95, fullMark: 100 },
  { subject: "Data Analysis", A: 92, fullMark: 100 },
  { subject: "Data Viz", A: 88, fullMark: 100 },
  { subject: "Reporting", A: 90, fullMark: 100 },
  { subject: "Feature Eng.", A: 87, fullMark: 100 },
];

const capabilities = [
  { name: "SQL / Python", val: 95 },
  { name: "Data Visualization (Power BI / Excel)", val: 88 },
  { name: "Feature Engineering & Analysis", val: 90 },
  { name: "Dashboard Design & Reporting", val: 87 },
];

const identityInfo = [
  { label: "STATUS", value: "HIRE_READY", icon: <Activity className="w-4 h-4" /> },
  { label: "REGION", value: "KENYA / GLOBAL", icon: <Globe className="w-4 h-4" /> },
  { label: "SPECIALIZATION", value: "DATA ANALYTICS", icon: <Briefcase className="w-4 h-4" /> },
  { label: "UPTIME", value: "24/7/365", icon: <Clock className="w-4 h-4" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ALL_SCREENSHOTS: string[] = [
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

const NAV_ITEMS = [
  { id: "metrics", label: "METRICS" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "SKILLS" },
  { id: "tools", label: "TOOLS" },
  { id: "certs", label: "CERTS" },
  { id: "contact", label: "CONTACT" },
];

export default function DataAnalysis() {
  const [, navigate] = useLocation();
  const [showPhone, setShowPhone] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setNavVisible(window.scrollY > 220);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: "-80px 0px -60% 0px" }
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
      if (e.key === "ArrowRight" && idx < ALL_SCREENSHOTS.length - 1) setLightbox(ALL_SCREENSHOTS[idx + 1]);
      if (e.key === "ArrowLeft" && idx > 0) setLightbox(ALL_SCREENSHOTS[idx - 1]);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-mono selection:bg-primary/30 selection:text-primary relative overflow-x-hidden p-4 md:p-8 lg:p-12 pb-24">
      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-primary border border-primary/40 px-3 py-1 text-xs tracking-widest hover:bg-primary hover:text-background transition-all">
            CLOSE ✕
          </button>
          {lightboxIndex >= 0 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-primary/60 tracking-widest font-mono">
              {lightboxIndex + 1} / {ALL_SCREENSHOTS.length}
            </div>
          )}
          {hasPrev && (
            <button onClick={e => { e.stopPropagation(); setLightbox(ALL_SCREENSHOTS[lightboxIndex - 1]); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary border border-primary/40 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-background transition-all text-lg" aria-label="Previous">‹</button>
          )}
          {hasNext && (
            <button onClick={e => { e.stopPropagation(); setLightbox(ALL_SCREENSHOTS[lightboxIndex + 1]); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary border border-primary/40 w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-background transition-all text-lg" aria-label="Next">›</button>
          )}
          <img src={lightbox} alt="Screenshot" className="max-w-full max-h-[90vh] object-contain border border-primary/20 shadow-2xl" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* Sticky Nav */}
      {navVisible && (
        <nav className="fixed top-0 left-0 right-0 z-[90] bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-lg shadow-black/40">
          <div className="flex items-center overflow-x-auto px-4 py-0 gap-0" style={{ scrollbarWidth: "none" }}>
            <button
              onClick={() => navigate("/")}
              className="text-xs px-3 py-3 tracking-widest shrink-0 text-muted-foreground hover:text-primary/70 border-b-2 border-transparent flex items-center gap-1"
            >
              <ArrowLeft className="w-3 h-3" /> HOME
            </button>
            <span className="text-primary text-xs pr-3 shrink-0 opacity-40 border-r border-border/30 py-3 mr-1">~/data</span>
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-xs px-3 py-3 tracking-widest shrink-0 transition-all duration-200 border-b-2 ${
                  activeSection === id
                    ? "text-primary border-primary font-bold"
                    : "text-muted-foreground border-transparent hover:text-primary/70"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] z-50" />

      <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-5xl mx-auto space-y-16 relative z-10">

        {/* Back button */}
        <motion.div variants={itemVariants}>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </button>
        </motion.div>

        {/* Header */}
        <motion.header variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-3 border border-border p-4 bg-card/50 backdrop-blur-sm shadow-[0_0_15px_rgba(52,211,153,0.05)]">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </div>
            <span className="text-xs tracking-widest uppercase opacity-70">Data Analysis Terminal — Initialized</span>
            <div className="flex-1 border-t border-border/50 border-dashed mx-4" />
            <Terminal className="w-4 h-4 opacity-50" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-emerald-50 mb-2" style={{ textShadow: "0 0 20px rgba(52,211,153,0.3)" }}>
                AUSTIN ABUOGA
              </h1>
              <p className="text-primary text-sm md:text-base max-w-xl leading-relaxed opacity-90">
                &gt; DATA ANALYST — SQL · PYTHON · POWER BI · EXCEL. TURNING RAW DATA INTO DECISIONS.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://github.com/austin-abuoga" target="_blank" rel="noreferrer" className="group flex items-center gap-2 border border-primary/30 bg-primary/5 hover:bg-primary/20 px-6 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>/GITHUB</span>
              </a>
              <a href="https://www.linkedin.com/in/austin-abuoga-49447937b/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 border border-primary/30 bg-primary/5 hover:bg-primary/20 px-6 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
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
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">DATA_METRICS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "RECORDS ANALYZED", value: "1.5M+", trend: "Instagram User Analytics Dataset" },
              { label: "REVENUE MODELED", value: "$13M", trend: "51,291 orders · Global Superstore" },
              { label: "CUSTOMERS SEGMENTED", value: "10,000", trend: "Low / Medium / High / VIP tiers" },
            ].map((kpi, i) => (
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
                  <div className="h-full bg-primary w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">DATA_PROJECTS</h2>
          </div>

          {/* Project 1 */}
          <div className="border border-border/40 bg-card p-6 space-y-6">
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
            <div className="border-l-2 border-primary/40 pl-4">
              <div className="text-xs opacity-50 tracking-wider mb-2">OBJECTIVE://</div>
              <p className="text-sm opacity-80 leading-relaxed">
                End-to-end analysis of engagement patterns and usage behaviours across 1.5M+ Instagram users, examining how demographic factors — age, gender, and occupation — correlate with platform activity. Built a full data pipeline from raw CSV ingestion through to an interactive Power BI dashboard.
              </p>
            </div>
            <div>
              <div className="text-xs opacity-50 tracking-wider mb-3">PIPELINE://</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { tool: "PYTHON · PANDAS", detail: "Loaded and inner-merged two raw CSVs (1.5M+ rows) — handled column deduplication and joined datasets on user_id, then automated export to production-ready CSV via .to_csv()" },
                  { tool: "PYTHON · FEATURE ENGINEERING", detail: "Engineered 4 custom columns: engagement_score, total_daily_minutes, usage_category (Low/Medium/High), and age_group (5 demographic bands)" },
                  { tool: "PYTHON · MATPLOTLIB", detail: "Generated a bar chart visualising average daily Instagram usage segmented by gender — styled for presentation-ready output" },
                  { tool: "SQL · POSTGRESQL / DBEAVER", detail: "Imported cleaned data into PostgreSQL and executed GROUP BY queries to aggregate avg daily usage by gender, avg engagement by age, and avg usage by occupation" },
                  { tool: "EXCEL · PIVOT TABLES", detail: "Performed initial exploratory data analysis on the raw dataset using Excel pivot tables — cross-tabulated usage metrics to validate trends before formalising in Python" },
                  { tool: "POWER BI · DASHBOARD", detail: "Built a multi-page interactive dashboard with slicers for gender, age group, and occupation — covering engagement distribution, usage time patterns, and high-engagement user profiling" },
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
                  { src: ALL_SCREENSHOTS[0], label: "PYTHON · VS CODE" },
                  { src: ALL_SCREENSHOTS[1], label: "MATPLOTLIB · CHART" },
                  { src: ALL_SCREENSHOTS[2], label: "EXCEL · CLEANED DATA" },
                  { src: ALL_SCREENSHOTS[3], label: "SQL · DBEAVER" },
                  { src: ALL_SCREENSHOTS[4], label: "POWER BI · 1" },
                  { src: ALL_SCREENSHOTS[5], label: "POWER BI · 2" },
                  { src: ALL_SCREENSHOTS[6], label: "POWER BI · 3" },
                  { src: ALL_SCREENSHOTS[7], label: "POWER BI · 4" },
                  { src: ALL_SCREENSHOTS[8], label: "POWER BI · 5" },
                  { src: ALL_SCREENSHOTS[9], label: "POWER BI · 6" },
                  { src: ALL_SCREENSHOTS[10], label: "POWER BI · 7" },
                  { src: ALL_SCREENSHOTS[11], label: "POWER BI · 8" },
                  { src: ALL_SCREENSHOTS[12], label: "POWER BI · 9" },
                  { src: ALL_SCREENSHOTS[13], label: "POWER BI · 10" },
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

          {/* Project 2 */}
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
                End-to-end sales analysis pipeline built on the Global Superstore dataset — examining which products generate the most revenue, which regions perform best, which months have the highest sales, and who the top customers are. Built a full pipeline through to a 3-page interactive Power BI dashboard covering $13M in total revenue across 4,873 customers.
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
                  { src: ALL_SCREENSHOTS[14], label: "PYTHON · VS CODE" },
                  { src: ALL_SCREENSHOTS[15], label: "EXCEL · CLEANED DATA" },
                  { src: ALL_SCREENSHOTS[16], label: "MATPLOTLIB · CHARTS" },
                  { src: ALL_SCREENSHOTS[17], label: "POWER BI · OVERVIEW" },
                  { src: ALL_SCREENSHOTS[18], label: "POWER BI · REVENUE/MONTH" },
                  { src: ALL_SCREENSHOTS[19], label: "POWER BI · REVENUE/REGION" },
                  { src: ALL_SCREENSHOTS[20], label: "POWER BI · SALES PERF" },
                  { src: ALL_SCREENSHOTS[21], label: "POWER BI · TOP PRODUCTS" },
                  { src: ALL_SCREENSHOTS[22], label: "POWER BI · SEGMENTS" },
                  { src: ALL_SCREENSHOTS[23], label: "POWER BI · CUSTOMERS" },
                  { src: ALL_SCREENSHOTS[24], label: "POWER BI · INSIGHTS" },
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

          {/* Project 3 */}
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
                End-to-end customer segmentation pipeline classifying 10,000 customers into four behavioural tiers — Low, Medium, High, and VIP — based on total spend using quantile-based segmentation. Built a full pipeline through to a 3-page Power BI dashboard surfacing spending patterns, order frequency, and top customers.
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
                  { src: ALL_SCREENSHOTS[25], label: "PYTHON · VS CODE 1" },
                  { src: ALL_SCREENSHOTS[26], label: "PYTHON · VS CODE 2" },
                  { src: ALL_SCREENSHOTS[27], label: "EXCEL · SEGMENTS" },
                  { src: ALL_SCREENSHOTS[28], label: "MATPLOTLIB · CHARTS" },
                  { src: ALL_SCREENSHOTS[29], label: "POWER BI · OVERVIEW" },
                  { src: ALL_SCREENSHOTS[30], label: "POWER BI · SEGMENTS" },
                  { src: ALL_SCREENSHOTS[31], label: "POWER BI · TOP CUSTOMERS" },
                  { src: ALL_SCREENSHOTS[32], label: "POWER BI · CUSTOMERS DRILL" },
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
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Austin" dataKey="A" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "0" }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.section>

        {/* Tools */}
        <motion.section id="tools" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Wrench className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">TOOLS_STACK</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Python", role: "Pandas, Matplotlib, Seaborn, Feature Engineering", tag: "PRIMARY" },
              { name: "SQL / PostgreSQL", role: "DBeaver, GROUP BY aggregations, data import", tag: "PRIMARY" },
              { name: "Power BI", role: "Multi-page dashboards, slicers, KPI cards", tag: "ANALYTICS" },
              { name: "Excel", role: "EDA, Pivot Tables, data validation", tag: "ANALYTICS" },
            ].map((tool, i) => (
              <div key={i} className="border border-border/40 bg-card p-4 space-y-2 hover:border-primary/40 transition-colors">
                <div className="text-[9px] text-primary tracking-widest">{tool.tag}</div>
                <div className="text-sm font-bold text-emerald-50">{tool.name}</div>
                <div className="text-xs opacity-60 leading-relaxed">{tool.role}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certs */}
        <motion.section id="certs" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CERTIFICATIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Introduction to Programming Using Python", issuer: "Horizon Institute of Technology", date: "Nov 2025", skills: "Python" },
              { title: "Introduction to Programming Using Python", issuer: "IT Bulls", date: "Nov 2025", skills: "Python" },
              { title: "AI Engineer Explorer", issuer: "School of AI", date: "Dec 2025", skills: "Machine Learning, AI" },
              { title: "Rust (Programming Language)", issuer: "School of AI", date: "Nov 2025", skills: "Rust" },
              { title: "Search Engine Optimization", issuer: "Udemy", date: "Dec 2025", skills: "SEO" },
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

        {/* Contact */}
        <motion.section id="contact" variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CONTACT</h2>
          </div>
          <div className="border border-primary/20 bg-card p-8 text-center space-y-6">
            <div>
              <div className="text-xs opacity-50 tracking-wider mb-2">OPEN_TO_WORK://</div>
              <h3 className="text-2xl font-bold text-emerald-50 mb-2">Let's Analyse Something Together</h3>
              <p className="text-sm opacity-70 max-w-md mx-auto leading-relaxed">
                Available for data analytics, dashboard development, and reporting contracts. Let's talk.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a href="mailto:Abuogaaustin@gmail.com" className="flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm tracking-widest hover:bg-primary hover:text-background transition-all duration-200 font-bold">
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
              <a href="https://www.linkedin.com/in/austin-abuoga-49447937b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-border/40 text-muted-foreground px-6 py-3 text-sm tracking-widest hover:border-primary/40 hover:text-primary transition-all duration-200">
                <Linkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <a href="https://github.com/austin-abuoga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-border/40 text-muted-foreground px-6 py-3 text-sm tracking-widest hover:border-primary/40 hover:text-primary transition-all duration-200">
                <Github className="w-4 h-4" />
                GITHUB
              </a>
            </div>
            <div className="text-xs opacity-30 tracking-wider pt-2">RESPONSE_TIME: &lt; 24H</div>
          </div>
        </motion.section>

        {/* Cross-link */}
        <motion.div variants={itemVariants} className="text-center border-t border-border/20 pt-8">
          <p className="text-xs opacity-40 tracking-wider mb-3">ALSO SEE://</p>
          <button
            onClick={() => navigate("/social")}
            className="inline-flex items-center gap-2 border border-border/40 text-muted-foreground px-6 py-3 text-xs tracking-widest hover:border-primary/40 hover:text-primary transition-all"
          >
            SOCIAL MEDIA PORTFOLIO →
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="pt-12 pb-8 border-t border-border/30 text-center opacity-60 text-xs flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <span className="w-2 h-2 bg-primary block rounded-full animate-pulse" />
            <span className="w-2 h-2 bg-primary block rounded-full animate-pulse delay-75" />
            <span className="w-2 h-2 bg-primary block rounded-full animate-pulse delay-150" />
          </div>
          <div>TRANSMISSION END // AUSTIN_ABUOGA — DATA_ANALYSIS</div>
        </motion.footer>
      </motion.div>
    </div>
  );
}
