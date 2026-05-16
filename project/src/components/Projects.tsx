import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24">
      {/* Subtle top divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-sky-500 mb-3 font-sans">
            Nhập môn công nghệ số & ứng dụng AI
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Dự án & Bài tập
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-slate-400 text-sm leading-relaxed">
            6 bài tập thực hành từ môn học, minh chứng năng lực ứng dụng công nghệ, quản lý công việc và sử dụng AI có trách nhiệm.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="card-glow group relative flex flex-col overflow-hidden rounded-xl bg-[#161b22] text-left"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Top accent bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${p.gradient}`} />

              <div className="flex flex-1 flex-col p-5">
                {/* Icon + badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} shadow-lg`}>
                    <p.icon size={20} className="text-white" />
                  </div>
                  <span className="font-mono text-xs text-slate-600">{p.badge}</span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-sm font-semibold leading-snug text-white group-hover:text-sky-300 transition-colors">
                  {p.title}
                </h3>

                {/* Summary */}
                <p className="flex-1 text-xs leading-relaxed text-slate-500 mb-4">
                  {p.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags?.slice(0, 2).map((t) => (
                      <span key={t} className="tag text-[10px] px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-slate-600 group-hover:text-sky-400 transition-colors">
                    Chi tiết
                    <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
