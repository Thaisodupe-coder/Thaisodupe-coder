import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Giới thiệu' },
  { id: 'projects', label: 'Dự án' },
  { id: 'summary', label: 'Tổng kết' },
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-[#0d1117]/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 text-sky-400 transition-opacity hover:opacity-80"
        >
          <Terminal size={18} />
          <span className="font-mono text-sm font-medium tracking-wider text-sky-400">
            NQT<span className="text-orange-400">_</span>dev
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`nav-link ${active === s.id ? 'active' : ''}`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-slate-400 transition-transform duration-200 ${menuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-slate-400 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-slate-400 transition-transform duration-200 ${menuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-white/5 bg-[#0d1117]/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`nav-link text-base ${active === s.id ? 'active' : ''}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
