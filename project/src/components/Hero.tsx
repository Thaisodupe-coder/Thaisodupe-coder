import { useEffect, useState } from 'react';
import { MapPin, BookOpen, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const typewriterPhrases = [
  'Software Architect',
  'DevOps Engineer',
  'System Designer',
  'Problem Solver',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % typewriterPhrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status badge */}
        <div className="fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-sky-900/60 bg-sky-950/30 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span className="font-mono text-xs text-sky-400">K70 · UET - ĐHQGHN · 2025</span>
        </div>

        {/* Name */}
        <h1 className="fade-in-up fade-in-up-delay-1 mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Nguyễn Quốc Thái
        </h1>

        {/* Typewriter */}
        <div className="fade-in-up fade-in-up-delay-2 mb-6 flex items-center justify-center gap-2">
          <span className="font-mono text-lg text-slate-500 sm:text-xl">~/future/</span>
          <span className="font-mono text-lg font-medium text-orange-400 sm:text-xl">{displayed}</span>
          <span className="cursor-blink font-mono text-lg text-orange-400 sm:text-xl">|</span>
        </div>

        {/* Description */}
        <p className="fade-in-up fade-in-up-delay-3 mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Sinh viên ngành{' '}
          <span className="text-sky-400 font-medium">Công nghệ Thông tin</span> với định hướng
          trở thành{' '}
          <span className="text-orange-400 font-medium">Software Architect + DevOps</span> —
          thiết kế kiến trúc, vận hành hệ thống và sử dụng AI có trách nhiệm.
        </p>

        {/* Meta chips */}
        <div className="fade-in-up fade-in-up-delay-4 mb-10 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={14} className="text-sky-500" />
            Hà Nội, Việt Nam
          </span>
          <span className="h-4 w-px bg-white/10" />
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <BookOpen size={14} className="text-sky-500" />
            MSV: 25020389
          </span>
          <span className="h-4 w-px bg-white/10" />
          <span className="tag">Nhập môn CN Số & AI</span>
        </div>

        {/* CTA */}
        <div className="fade-in-up fade-in-up-delay-5 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          >
            Xem Dự án
            <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </button>
          <a
            href="mailto:thai@example.com"
            className="flex items-center gap-2 rounded-lg border border-white/10 px-6 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-sky-500/50 hover:text-sky-400"
          >
            <Mail size={16} />
            Liên hệ
          </a>
        </div>

        {/* Social */}
        <div className="fade-in-up fade-in-up-delay-5 mt-8 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-md border border-white/10 p-2 text-slate-500 transition-all hover:border-sky-500/40 hover:text-sky-400"
          >
            <Github size={16} />
          </a>
          <a
            href="#"
            className="rounded-md border border-white/10 p-2 text-slate-500 transition-all hover:border-sky-500/40 hover:text-sky-400"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-mono">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
