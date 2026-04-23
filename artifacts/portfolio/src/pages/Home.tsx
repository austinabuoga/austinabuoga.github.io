import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-[100dvh] bg-[#080808] text-white flex flex-col overflow-hidden">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="px-8 py-6 flex items-center justify-between relative z-10"
      >
        <div className="flex items-center gap-3">
          <img
            src="/logo-black.png"
            alt="A17"
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="text-base font-black text-white tracking-tight leading-none">Austin Abuoga</div>
            <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase mt-0.5">Social Media · Data Analysis</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/austinabuoga" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/austinabuoga-49447937b/" target="_blank" rel="noreferrer" className="text-white/30 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:Abuogaaustin@gmail.com" className="text-white/30 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </motion.header>

      {/* Main */}
      <main className="flex-1 flex flex-col">

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="px-8 pt-8 pb-6"
        >
          <div className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.92] tracking-tight">
            <span className="text-white">Austin</span><br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent">Abuoga.</span>
          </div>
          <p className="text-white/40 text-base mt-4 max-w-md leading-relaxed">
            Social Media Manager & Data Analyst — Kenya / Global.<br />
            Choose your path below.
          </p>
        </motion.div>

        {/* Choice section — matrix-inspired */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-1 mt-2"
        >
          {/* Matrix background */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/matrix-choice.jpg"
              alt=""
              className="w-full h-full object-cover object-center opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/90" />
          </div>

          {/* Portfolio cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-px min-h-[380px] mx-8 mb-8 rounded-2xl overflow-hidden border border-white/10">

            {/* Social Media */}
            <motion.div
              onClick={() => navigate("/social")}
              whileHover={{ backgroundColor: "rgba(136,19,55,0.15)" }}
              className="group relative bg-[#0f0508]/80 transition-all duration-500 p-8 flex flex-col justify-between cursor-pointer border-b md:border-b-0 md:border-r border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center mb-6 group-hover:bg-rose-500/25 transition-colors duration-300">
                  <img src="/logo-black.png" alt="A17" className="w-9 h-9 object-contain" />
                </div>
                <div className="text-[10px] text-rose-400/60 tracking-[0.25em] uppercase mb-2">Portfolio 01</div>
                <h2 className="text-2xl font-black text-white mb-3 leading-tight">Social Media<br />Management</h2>
                <p className="text-white/35 text-sm leading-relaxed">Client cases, growth metrics, content campaigns & strategy.</p>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-rose-400 text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
                <span>View portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* Data Analysis */}
            <motion.div
              onClick={() => navigate("/data")}
              whileHover={{ backgroundColor: "rgba(120,53,15,0.15)" }}
              className="group relative bg-[#05080f]/80 transition-all duration-500 p-8 flex flex-col justify-between cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center mb-6 group-hover:bg-amber-500/25 transition-colors duration-300">
                  <img src="/logo-black.png" alt="A17" className="w-9 h-9 object-contain" />
                </div>
                <div className="text-[10px] text-amber-400/60 tracking-[0.25em] uppercase mb-2">Portfolio 02</div>
                <h2 className="text-2xl font-black text-white mb-3 leading-tight">Data<br />Analysis</h2>
                <p className="text-white/35 text-sm leading-relaxed">SQL, Python, Power BI dashboards & data pipeline projects.</p>
              </div>
              <div className="relative z-10 flex items-center gap-2 text-amber-400 text-sm font-semibold mt-8 group-hover:gap-4 transition-all duration-300">
                <span>View portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/20">
        <span>Abuogaaustin@gmail.com</span>
        <span>+254 799 867 387 · Kenya / Global</span>
      </footer>
    </div>
  );
}
