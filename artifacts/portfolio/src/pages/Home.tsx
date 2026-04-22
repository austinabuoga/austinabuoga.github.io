import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { BarChart2, Megaphone, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] text-white flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 flex items-center justify-between border-b border-white/5">
        <div className="text-sm font-semibold tracking-widest text-white/60 uppercase">Austin Abuoga</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/austin-abuoga" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/austin-abuoga-49447937b/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:Abuogaaustin@gmail.com" className="text-white/40 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl"
        >
          <div className="mb-3 inline-block text-xs tracking-[0.25em] text-white/30 uppercase border border-white/10 px-3 py-1 rounded-full">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-4 mb-6 bg-gradient-to-br from-white via-white/90 to-white/40 bg-clip-text text-transparent leading-tight">
            Austin<br />Abuoga
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-12">
            Social Media Manager & Data Analyst — Kenya / Global.<br />
            Choose a portfolio to explore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            {/* Social Media Card */}
            <motion.button
              onClick={() => navigate("/social")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative text-left p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-rose-950/30 via-pink-950/20 to-transparent hover:border-rose-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-6 group-hover:bg-rose-500/20 transition-colors">
                  <Megaphone className="w-6 h-6 text-rose-400" />
                </div>
                <div className="text-xs text-rose-400/70 tracking-widest uppercase mb-2">Portfolio 01</div>
                <h2 className="text-xl font-bold text-white mb-3">Social Media Management</h2>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  Client case studies, content campaigns, growth metrics, and social strategy work.
                </p>
                <div className="flex items-center gap-2 text-rose-400 text-sm font-medium">
                  <span>View portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>

            {/* Data Analysis Card */}
            <motion.button
              onClick={() => navigate("/data")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative text-left p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-950/30 via-teal-950/20 to-transparent hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <BarChart2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-xs text-emerald-400/70 tracking-widest uppercase mb-2">Portfolio 02</div>
                <h2 className="text-xl font-bold text-white mb-3">Data Analysis</h2>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  SQL, Python, Power BI dashboards, and data pipeline projects.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <span>View portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
        <span>Abuogaaustin@gmail.com</span>
        <span>+254 799 867 387 · Kenya / Global</span>
      </footer>
    </div>
  );
}
