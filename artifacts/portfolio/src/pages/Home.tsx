import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-[100dvh] bg-[#080808] text-white flex flex-col overflow-hidden relative">

      {/* Matrix watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <img src="/matrix-choice.jpg" alt="" className="w-[80%] h-[80%] object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 20%, #080808 80%)" }}
        />
      </div>

      {/* Header */}
      <motion.header
        {...fade(0)}
        className="relative z-10 px-10 py-6 flex items-center justify-between border-b border-white/[0.04]"
      >
        <div className="flex items-center gap-3">
          <img src="/logo-black.png" alt="A17" className="w-10 h-10 object-contain opacity-90" />
          <div>
            <p className="text-[11px] font-bold text-white tracking-[0.12em] leading-none">AUSTIN ABUOGA</p>
            <p className="text-[9px] text-white/25 tracking-[0.3em] uppercase mt-1">Social Media · Data Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/austinabuoga" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/austinabuoga-49447937b/" target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:Abuogaaustin@gmail.com" className="text-white/20 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <motion.div {...fade(0.12)} className="relative z-10 px-10 pt-12 pb-6">
        <p className="text-[10px] text-white/20 tracking-[0.4em] uppercase mb-5">
          Portfolio — Select a discipline
        </p>
        <h1 className="text-[clamp(2.8rem,7.5vw,5.5rem)] font-black leading-[0.88] tracking-tight">
          <span className="text-white">Two disciplines.</span>
          <br />
          <span className="text-white/20 font-extralight italic">One mind.</span>
        </h1>
      </motion.div>

      {/* Columns */}
      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 px-10 pb-10 gap-8 mt-4">

        {/* Social Media */}
        <motion.div
          {...fade(0.26)}
          onClick={() => navigate("/social")}
          className="group cursor-pointer flex flex-col pt-6 border-t-2 border-rose-500/40 hover:border-rose-500 transition-colors duration-[400ms]"
        >
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[9px] text-rose-400/50 group-hover:text-rose-300 tracking-[0.28em] uppercase font-mono px-3 py-1 rounded-full border border-rose-500/20 group-hover:border-rose-500/60 bg-rose-500/0 group-hover:bg-rose-500/10 transition-all duration-[400ms]"
              style={{ boxShadow: "0 0 0 0 rgba(244,63,94,0)" }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = "0 0 14px 2px rgba(244,63,94,0.35)")}
              onMouseOut={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(244,63,94,0)")}
            >
              <span className="w-1 h-1 rounded-full bg-rose-500/40 group-hover:bg-rose-400 transition-colors" />
              01 / Social Media
            </span>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.6rem)] font-black text-white leading-[1.0] tracking-tight">
              Social<br />
              <em className="not-italic text-rose-400 font-black">Media</em><br />
              Management
            </h2>
          </div>
          <p className="text-white/25 text-[13px] leading-relaxed mt-5 mb-6 group-hover:text-white/40 transition-colors max-w-[240px]">
            Client cases, growth metrics, campaigns & strategy.
          </p>
          <div className="flex items-center gap-2 text-rose-400/60 group-hover:text-rose-400 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 mt-auto">
            <span>View portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </motion.div>

        {/* Data Analysis */}
        <motion.div
          {...fade(0.38)}
          onClick={() => navigate("/data")}
          className="group cursor-pointer flex flex-col pt-6 border-t-2 border-amber-500/40 hover:border-amber-500 transition-colors duration-[400ms]"
        >
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[9px] text-amber-400/50 group-hover:text-amber-300 tracking-[0.28em] uppercase font-mono px-3 py-1 rounded-full border border-amber-500/20 group-hover:border-amber-500/60 bg-amber-500/0 group-hover:bg-amber-500/10 transition-all duration-[400ms]"
              style={{ boxShadow: "0 0 0 0 rgba(245,158,11,0)" }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = "0 0 14px 2px rgba(245,158,11,0.35)")}
              onMouseOut={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(245,158,11,0)")}
            >
              <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
              02 / Data Analysis
            </span>
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.6rem)] font-black text-white leading-[1.0] tracking-tight">
              Data<br />
              <em className="not-italic text-amber-400 font-black">Analysis</em><br />
              &amp; Insights
            </h2>
          </div>
          <p className="text-white/25 text-[13px] leading-relaxed mt-5 mb-6 group-hover:text-white/40 transition-colors max-w-[240px]">
            SQL, Python, Power BI dashboards &amp; data pipelines.
          </p>
          <div className="flex items-center gap-2 text-amber-400/60 group-hover:text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 mt-auto">
            <span>View portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.footer
        {...fade(0.48)}
        className="relative z-10 px-10 py-4 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2"
      >
        <span className="text-[10px] text-white/15 tracking-widest">Abuogaaustin@gmail.com</span>
        <span className="text-[10px] text-white/15 tracking-widest">+254 799 867 387 · Kenya / Global</span>
      </motion.footer>

    </div>
  );
}
