import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24 bg-slate-50">
      {/* Subtle top divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-sky-300 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-600 mb-4 font-sans">
            Nhập môn công nghệ số & ứng dụng AI
          </p>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Dự án & Bài tập
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed">
            6 bài tập thực hành từ môn học, minh chứng năng lực ứng dụng công nghệ, quản lý công việc và sử dụng AI có trách nhiệm.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="card-glow group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm text-left hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Top accent bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${p.gradient}`} />

              <div className="flex flex-1 flex-col p-5">
                {/* Icon + badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg`}>
                    <p.icon size={24} className="text-white" />
                  </div>
                  <span className="font-mono text-sm text-slate-500">{p.badge}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-semibold leading-snug text-slate-900 group-hover:text-sky-600 transition-colors">
                  {p.title}
                </h3>

                {/* Summary */}
                <p className="flex-1 text-sm leading-relaxed text-slate-600 mb-6">
                  {p.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags?.slice(0, 2).map((t) => (
                      <span key={t} className="tag text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md border border-slate-200">{t}</span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1.5 text-sm text-slate-500 group-hover:text-sky-600 transition-colors">
                    Chi tiết
                    <ExternalLink size={16} />
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
