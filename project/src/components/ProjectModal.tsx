import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#161b22] shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-2xl border-b border-white/5 bg-[#161b22] px-6 py-5">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.gradient}`}>
              <project.icon size={20} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs text-slate-500">{project.badge}</p>
              <h2 className="text-base font-semibold text-white leading-snug">{project.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 rounded-md border border-white/10 p-1.5 text-slate-500 transition-all hover:border-red-500/50 hover:text-red-400"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">
          {/* Objective */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-widest text-sky-500 font-sans">
              Mục tiêu
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">{project.objective}</p>
          </div>

          {/* Content sections */}
          {project.sections.map((sec, i) => (
            <div key={i}>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-orange-400 font-sans">
                {sec.heading}
              </h3>
              {sec.items ? (
                <ul className="space-y-2">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                      <span
                        dangerouslySetInnerHTML={{ __html: item }}
                        className="leading-relaxed"
                      />
                    </li>
                  ))}
                </ul>
              ) : sec.code ? (
                <pre className="overflow-x-auto rounded-lg border border-white/5 bg-[#0d1117] p-4 font-mono text-xs leading-relaxed text-sky-300">
                  {sec.code}
                </pre>
              ) : null}
            </div>
          ))}

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
