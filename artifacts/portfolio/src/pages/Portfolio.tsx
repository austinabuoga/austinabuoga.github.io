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
import { Terminal, Activity, Github, Globe, Briefcase, Clock, Database, ChevronRight, Linkedin, Building2, Mail, Award, Wrench, ExternalLink, Calendar, Layers, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

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

export default function Portfolio() {
  const [showPhone, setShowPhone] = useState(false);
  const outeringTenure = getTenure(2024, 7);
  const outeringMonths = getTotalMonths(2024, 7);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground font-mono selection:bg-primary/30 selection:text-primary relative overflow-x-hidden p-4 md:p-8 lg:p-12 pb-24">
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
                href="https://github.com/Kratosmatthews"
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
        <motion.section variants={itemVariants} className="space-y-4">
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
        <motion.section variants={itemVariants} className="space-y-6">
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
        <motion.section variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CONTENT_PORTFOLIO</h2>
          </div>

          {/* MK Creative Hub Work Samples */}
          <div className="space-y-3">
            <div className="text-xs opacity-50 tracking-wider">MK_CREATIVE_HUB // INSTAGRAM CONTENT — MARCH 2026</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["/mk-content-3.png", "/mk-content-1.png", "/mk-content-2.png"].map((src, i) => (
                <div key={i} className="border border-border/40 bg-card overflow-hidden group relative">
                  <img src={src} alt={`MK Creative Hub content ${i + 1}`} className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs text-primary tracking-wider">CONTENT DESIGN // CANVA</span>
                  </div>
                </div>
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
        <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        <motion.section variants={itemVariants} className="space-y-6">
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
        <motion.section variants={itemVariants} className="space-y-6">
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
        <motion.section variants={itemVariants} className="space-y-6">
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
        <motion.section variants={itemVariants} className="space-y-6">
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

        {/* Contact */}
        <motion.section variants={itemVariants} className="space-y-6">
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
                href="https://github.com/Kratosmatthews"
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
