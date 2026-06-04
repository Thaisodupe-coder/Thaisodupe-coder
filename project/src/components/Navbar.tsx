import { useEffect, useState } from 'react';
import { Code } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Giới thiệu', activeText: 'text-violet-600', hoverText: 'hover:text-violet-600', underlineBg: 'bg-violet-600' },
  { id: 'about', label: 'Bản thân', activeText: 'text-sky-600', hoverText: 'hover:text-sky-600', underlineBg: 'bg-sky-600' },
  { id: 'projects', label: 'Dự án', activeText: 'text-emerald-600', hoverText: 'hover:text-emerald-600', underlineBg: 'bg-emerald-600' },
  { id: 'summary', label: 'Tổng kết', activeText: 'text-orange-600', hoverText: 'hover:text-orange-600', underlineBg: 'bg-orange-600' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.getBoundingClientRect().top : 9999 };
      });

      const current = offsets.filter((o) => o.top <= 120).at(-1);
      if (current) setActive(current.id);
      else setActive('hero');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 rounded-full transition-all duration-300 ${
        scrolled
          ? 'border border-slate-200 bg-white/95 backdrop-blur-md shadow-lg'
          : 'border border-slate-200/50 bg-white/60 backdrop-blur-md shadow-sm'
      }`}
    >
      <nav className="mx-auto flex w-full items-center justify-between px-6 py-3">
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-3 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
            <Code size={20} className="text-white" />
          </div>
          <span className="font-sans text-lg font-bold tracking-wide text-slate-800 transition-colors duration-300 group-hover:text-sky-600">
            Nguyễn Quốc Thái
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`group relative text-lg font-medium transition-all duration-300 hover:-translate-y-1 ${
                  active === s.id ? `${s.activeText} font-semibold` : `text-slate-600 ${s.hoverText}`
                }`}
              >
                {s.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${s.underlineBg} ${active === s.id ? 'scale-x-100' : ''}`} />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-slate-600 transition-transform duration-200 ${menuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-slate-600 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-slate-600 transition-transform duration-200 ${menuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-[calc(100%+1rem)] w-full rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`group relative inline-block text-left text-lg font-medium transition-all duration-300 hover:-translate-y-1 ${
                    active === s.id ? `${s.activeText} font-semibold` : `text-slate-600 ${s.hoverText}`
                  }`}
                >
                  {s.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${s.underlineBg} ${active === s.id ? 'scale-x-100' : ''}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
