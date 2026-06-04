import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Giới thiệu' },
  { id: 'about', label: 'Bản thân' },
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
          ? 'border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 text-sky-600 transition-opacity hover:opacity-80"
        >
          <Terminal size={24} />
          <span className="font-mono text-base font-medium tracking-wider text-sky-600">
            NQT<span className="text-orange-600">.</span>dev
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`nav-link text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors ${active === s.id ? 'text-sky-600 font-semibold' : ''}`}
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
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md md:hidden shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`nav-link text-lg font-medium text-slate-600 hover:text-slate-900 w-full text-left ${active === s.id ? 'text-sky-600 font-semibold' : ''}`}
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
