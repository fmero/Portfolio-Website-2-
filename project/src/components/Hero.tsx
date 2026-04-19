import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-4 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Alex
            <br />
            <span className="text-slate-400">Morgan</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
            Full-stack developer crafting thoughtful digital experiences. I build
            clean, performant web applications with modern technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border border-slate-300 text-slate-700 text-sm font-semibold rounded-full hover:border-slate-500 hover:text-slate-900 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-700 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
