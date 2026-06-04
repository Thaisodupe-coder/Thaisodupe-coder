import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import type { Project } from '../data/projects';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/reports/trang3.jpg"
          alt="Projects Background"
          className="h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white" />
      </div>

      {/* Subtle top divider glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-sky-300 to-transparent z-10" />

      <div className="relative z-10 mx-auto max-w-6xl">
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
            className="card-glow group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Lớp nền màu pastel (tự động theo màu thẻ) không trong suốt, đậm lên khi hover */}
              <div className={`absolute inset-0 opacity-[0.12] transition-opacity duration-500 group-hover:opacity-[0.25] bg-gradient-to-br ${p.gradient}`} />

              {/* Top accent bar (đã làm dày hơn để nổi bật màu sắc) */}
              <div className={`relative z-10 h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />

              <div className="relative z-10 flex flex-1 flex-col p-5">
                {/* Icon + badge */}
                <div className="mb-4 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg`}>
                    <p.icon size={24} className="text-white" />
                  </div>
                  <span className={`inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm border ${p.btnBorder} ${p.btnTextHover}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`mb-3 text-lg font-semibold leading-snug text-slate-900 transition-colors ${p.colorTextHover}`}>
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
                      <span key={t} className="tag text-xs px-2.5 py-1 bg-white text-slate-600 rounded-md border border-slate-200">{t}</span>
                    ))}
                  </div>
                  <span className={`flex items-center gap-1.5 text-sm font-bold transition-all duration-300 group-hover:translate-x-1.5 ${p.btnTextHover}`}>
                    <span className="relative">
                      Chi tiết
                      <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
                    </span>
                    <ExternalLink size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
