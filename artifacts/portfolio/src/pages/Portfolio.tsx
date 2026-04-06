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
import { Terminal, Activity, Github, Globe, Briefcase, Clock, Database, ChevronRight, Linkedin, Building2 } from "lucide-react";

const skillsData = [
  { subject: "SQL/Python", A: 95, fullMark: 100 },
  { subject: "Data Analysis", A: 92, fullMark: 100 },
  { subject: "Social Strategy", A: 98, fullMark: 100 },
  { subject: "Power BI", A: 88, fullMark: 100 },
  { subject: "Graphic Design", A: 85, fullMark: 100 },
];

const kpiMetrics = [
  { label: "FOLLOWER GROWTH", value: "260%", trend: "90 → 324 // OUTERING FC" },
  { label: "ACCOUNTS REACHED", value: "817", trend: "+872.6% // MK CREATIVE HUB" },
  { label: "PROFILE ACTIVITY", value: "+322.7%", trend: "VS PREVIOUS PERIOD // MK" },
];

const capabilities = [
  { name: "SQL / Python / Excel", val: 95 },
  { name: "Data Visualization (Power BI)", val: 88 },
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
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">SYS_METRICS</h2>
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
                    <span className="text-xs text-primary border border-primary/30 px-2 py-0.5 tracking-wide">TENURE: 1 YR 8 MONTHS</span>
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
                  Grew Outering FC's Instagram from 90 to 324 followers over 20 months through consistent content creation and branded graphic design — establishing a recognisable digital identity for the football club from the ground up.
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
                  <p className="text-sm opacity-80 leading-relaxed">Spearheaded the visual identity and campaign strategy for International Women's Day, spotlighting the company's four female founders to drive brand authority and engagement.</p>
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
                  <span className="text-xs border border-border/40 text-muted-foreground px-2 py-1 tracking-wide">Employment: Full-time</span>
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
