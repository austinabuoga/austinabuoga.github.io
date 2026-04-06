import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import { Terminal, Activity, Github, Globe, Briefcase, Clock, Database, ChevronRight, Linkedin, Building2 } from "lucide-react";
import { useState } from "react";

const kenyaData = [
  { month: "Jan", reach: 800000 },
  { month: "Feb", reach: 1200000 },
  { month: "Mar", reach: 2100000 },
  { month: "Apr", reach: 4300000 },
];

const brandRefreshData = [
  { day: "D1", impressions: 4500 },
  { day: "D2", impressions: 7200 },
  { day: "D3", impressions: 12000 },
  { day: "D4", impressions: 18500 },
  { day: "D5", impressions: 29800 },
];

const skillsData = [
  { subject: "SQL/Python", A: 95, fullMark: 100 },
  { subject: "Data Analysis", A: 92, fullMark: 100 },
  { subject: "ROI Modeling", A: 90, fullMark: 100 },
  { subject: "Social Strategy", A: 98, fullMark: 100 },
  { subject: "Power BI", A: 88, fullMark: 100 },
  { subject: "Graphic Design", A: 85, fullMark: 100 },
];

const kpiMetrics = [
  { label: "REACH", value: "4.3M", trend: "+103% YOY" },
  { label: "PROFILE VISITS", value: "29.8K", trend: "ENGAGEMENT OPTIMIZED" },
  { label: "DATA DRIVEN", value: "100%", trend: "STRATEGY LED" },
];

const capabilities = [
  { name: "SQL / Python / Excel", val: 95 },
  { name: "Data Visualization (Power BI)", val: 88 },
  { name: "Social Media Strategy", val: 98 },
  { name: "Graphics Design & Copywriting", val: 85 },
];

const brandsData = [
  { name: "MK Creative Hub", type: "Creative Agency", logo: "/mk-creative-hub-logo.png" },
  { name: "Outering FC", type: "Football Club", logo: "/outering-fc-logo.png" },
  { name: "Safaricom PLC", type: "Telecom", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Safaricom_logo.svg/500px-Safaricom_logo.svg.png" },
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
  const [hoveredChart, setHoveredChart] = useState<string | null>(null);

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

        {/* Campaigns / Charts */}
        <motion.section variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold tracking-widest text-emerald-50">CAMPAIGN_TELEMETRY</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 1 */}
            <div 
              className="border border-border bg-card p-6 relative group h-[400px]"
              onMouseEnter={() => setHoveredChart('reach')}
              onMouseLeave={() => setHoveredChart(null)}
              data-testid="card-chart-reach"
            >
              <div className="mb-4">
                <div className="text-xs opacity-60 mb-1">TARGET_OP:</div>
                <div className="text-lg font-bold text-emerald-50">OP_KENYA_REACH_2026</div>
                <div className="text-sm text-primary/70">Market Penetration Analysis</div>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={kenyaData}>
                    <defs>
                      <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val / 1000000}M`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Area type="monotone" dataKey="reach" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorReach)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-card/95 backdrop-blur-sm border border-primary p-6 transition-opacity duration-300 flex flex-col justify-center ${hoveredChart === 'reach' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="text-2xl font-bold text-emerald-50 mb-4">CASE STUDY: KENYA REACH</div>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  Initiated a strategic content pivot analyzing regional engagement data. By cross-referencing peak active hours with algorithmic preferences, organic reach skyrocketed to 4.3M in Q1.
                </p>
                <div className="text-xs text-primary font-bold tracking-widest border-t border-border/50 pt-4 mt-auto">
                  STATUS: SUCCESS // OVER_DELIVERED
                </div>
              </div>
            </div>

            {/* Chart 2 */}
            <div 
              className="border border-border bg-card p-6 relative group h-[400px]"
              onMouseEnter={() => setHoveredChart('visits')}
              onMouseLeave={() => setHoveredChart(null)}
              data-testid="card-chart-visits"
            >
              <div className="mb-4">
                <div className="text-xs opacity-60 mb-1">TARGET_OP:</div>
                <div className="text-lg font-bold text-emerald-50">TRAFFIC_INJECTION</div>
                <div className="text-sm text-primary/70">Profile Visit Campaign</div>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={brandRefreshData}>
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val / 1000}k`} />
                    <Tooltip 
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.2 }}
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0' }}
                    />
                    <Bar dataKey="impressions" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-card/95 backdrop-blur-sm border border-primary p-6 transition-opacity duration-300 flex flex-col justify-center ${hoveredChart === 'visits' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="text-2xl font-bold text-emerald-50 mb-4">CASE STUDY: TRAFFIC INJECTION</div>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  Engineered a 5-day content funnel designed strictly for profile conversion. Leveraged A/B tested copy and strategic CTA placement to drive 29.8K direct visits, validating the engagement hypothesis.
                </p>
                <div className="text-xs text-primary font-bold tracking-widest border-t border-border/50 pt-4 mt-auto">
                  STATUS: SUCCESS // OPTIMIZED
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
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 max-w-[120px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                    />
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
