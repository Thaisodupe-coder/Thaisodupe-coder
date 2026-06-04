import { useEffect } from 'react';
import { X, FileText } from 'lucide-react';
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
      style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-2xl border-b border-slate-200 bg-white px-6 py-5">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.gradient}`}>
              <project.icon size={20} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs text-slate-500">{project.badge}</p>
              <h2 className="text-base font-semibold text-slate-900 leading-snug">{project.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 rounded-md border border-slate-200 p-1.5 text-slate-500 transition-all hover:bg-slate-100 hover:border-red-500/50 hover:text-red-500"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">
          {/* Objective */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-widest text-sky-600 font-sans">
              Mục tiêu
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">{project.objective}</p>
          </div>

          {/* Content sections */}
          {project.sections.map((sec, i) => (
            <div key={i}>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-orange-600 font-sans">
                {sec.heading}
              </h3>
              {sec.items ? (
                <ul className="space-y-2">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
                      <span
                        dangerouslySetInnerHTML={{ __html: item }}
                        className="leading-relaxed"
                      />
                    </li>
                  ))}
                </ul>
              ) : sec.code ? (
                <pre className="overflow-x-auto rounded-lg border-l-4 border-slate-300 bg-slate-100 p-4 font-mono text-xs leading-relaxed text-slate-800 shadow-inner">
                  {sec.code}
                </pre>
              ) : null}
            </div>
          ))}

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((t) => (
                <span key={t} className="tag text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200">{t}</span>
              ))}
            </div>
          )}

          {/* Report Button */}
          {project.reportFile && (
            <div className="mt-8 flex justify-center border-t border-slate-200 pt-6">
              <style>{`
                @keyframes rotate624 {
                  0% { transform: rotate(0deg) translate3d(0, 0, 0); }
                  25% { transform: rotate(3deg) translate3d(0, 0, 0); }
                  50% { transform: rotate(-3deg) translate3d(0, 0, 0); }
                  75% { transform: rotate(1deg) translate3d(0, 0, 0); }
                  100% { transform: rotate(0deg) translate3d(0, 0, 0); }
                }
                @keyframes storm1261 {
                  0% { transform: translate3d(0, 0, 0) translateZ(0); }
                  25% { transform: translate3d(4px, 0, 0) translateZ(0); }
                  50% { transform: translate3d(-3px, 0, 0) translateZ(0); }
                  75% { transform: translate3d(2px, 0, 0) translateZ(0); }
                  100% { transform: translate3d(0, 0, 0) translateZ(0); }
                }
                .btn-shine-effect:hover {
                  animation: rotate624 0.7s ease-in-out both;
                }
                .btn-shine-effect:hover span {
                  animation: storm1261 0.7s ease-in-out both;
                  animation-delay: 0.06s;
                }
              `}</style>
              <a
                href={
                  project.reportFile.endsWith('.docx')
                    ? `https://docs.google.com/viewer?url=${encodeURIComponent(
                        'https://thaisodupe-coder.github.io' + project.reportFile
                      )}`
                    : project.reportFile
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-shine-effect relative z-0 flex cursor-pointer items-center justify-center overflow-hidden rounded-[10px] border bg-white px-[35px] py-[17px] no-underline outline-none transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)] after:absolute after:-left-[75px] after:-top-[50px] after:-z-10 after:h-[155px] after:w-[50px] after:rotate-[35deg] after:opacity-40 after:transition-all after:duration-[550ms] after:ease-[cubic-bezier(0.19,1,0.22,1)] hover:after:left-[120%] ${project.btnBorder} ${project.btnText} ${project.btnShine}`}
              >
                <span className={`relative z-20 flex items-center gap-2 text-[14px] font-medium uppercase tracking-[0.7px] ${project.btnTextHover}`}>
                  <FileText size={20} />
                  Xem Báo Cáo Chi Tiết
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
