import { ArrowRight, Github, Linkedin, Mail, BarChart2, Megaphone } from "lucide-react";

export function BoldMinimal() {
  return (
    <div
      className="min-h-screen text-white flex flex-col font-['Inter'] overflow-hidden relative"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Faint matrix figure in upper-right */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none select-none overflow-hidden">
        <img
          src="/__mockup/images/matrix-choice.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.07]"
          style={{ maskImage: "linear-gradient(to left, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/__mockup/images/logo-black.png" alt="A17" className="w-10 h-10 object-contain" />
          <span className="text-sm font-bold text-white/60 tracking-widest uppercase">Austin Abuoga</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/30 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
          <a href="#" className="text-white/30 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="text-white/30 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col items-start justify-center px-8 gap-10">
        {/* Name block */}
        <div>
          <div className="text-[clamp(4rem,12vw,8rem)] font-black leading-[0.88] tracking-tighter text-white">
            Austin<br />
            <span className="text-white/20">Abuoga</span>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <div className="h-px w-8 bg-white/20" />
            <p className="text-white/40 text-sm tracking-wide">Social Media Manager & Data Analyst</p>
          </div>
        </div>

        {/* Portfolio cards — bold horizontal strip */}
        <div className="w-full grid grid-cols-2 gap-4 max-w-3xl">
          {/* Social */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/60 to-rose-950/80 group-hover:from-rose-800/70 transition-all duration-400" />
            <div className="absolute inset-0 border border-rose-500/20 rounded-2xl group-hover:border-rose-500/50 transition-all duration-400" />
            <div className="relative z-10 p-6">
              <Megaphone className="w-7 h-7 text-rose-400 mb-4" />
              <div className="text-[10px] text-rose-400/50 tracking-[0.25em] uppercase mb-1.5">Portfolio 01</div>
              <h2 className="text-xl font-black text-white mb-2 leading-tight">Social Media Management</h2>
              <p className="text-white/40 text-xs leading-relaxed mb-5">Campaigns, growth metrics, content & client cases.</p>
              <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Enter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 to-sky-950/80 group-hover:from-sky-800/70 transition-all duration-400" />
            <div className="absolute inset-0 border border-sky-500/20 rounded-2xl group-hover:border-sky-500/50 transition-all duration-400" />
            <div className="relative z-10 p-6">
              <BarChart2 className="w-7 h-7 text-sky-400 mb-4" />
              <div className="text-[10px] text-sky-400/50 tracking-[0.25em] uppercase mb-1.5">Portfolio 02</div>
              <h2 className="text-xl font-black text-white mb-2 leading-tight">Data Analysis</h2>
              <p className="text-white/40 text-xs leading-relaxed mb-5">SQL, Python, Power BI dashboards & pipelines.</p>
              <div className="flex items-center gap-1.5 text-sky-400 text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Enter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-4 border-t border-white/5 flex items-center justify-between text-xs text-white/20">
        <span>Abuogaaustin@gmail.com</span>
        <span>+254 799 867 387 · Kenya / Global</span>
      </footer>
    </div>
  );
}
