import { Lightbulb, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

const skills = [
  {
    icon: Lightbulb,
    title: 'Prompt Engineering',
    desc: 'Học cách giao tiếp và đặt ranh giới kỹ thuật với AI, biến nó từ công cụ sinh chữ thành "người phản biện" kiến trúc phần mềm hiệu quả.',
    color: 'text-sky-400',
    bg: 'bg-sky-950/40 border-sky-900/40',
  },
  {
    icon: Users,
    title: 'Collaboration & Async',
    desc: 'Thay đổi hoàn toàn tư duy làm việc nhóm — thiết lập quy trình giao tiếp bất đồng bộ trơn tru qua Discord, Trello và Google Docs.',
    color: 'text-orange-400',
    bg: 'bg-orange-950/40 border-orange-900/40',
  },
];

export default function Summary() {
  return (
    <section id="summary" className="relative px-6 py-24">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-orange-400 mb-4 font-sans">
            Phản ánh cá nhân
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Tổng kết</h2>
        </div>

        {/* Personal reflection */}
        <div className="mb-14 rounded-2xl border border-white/5 bg-[#161b22] p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Trải nghiệm & Cảm nhận Cá nhân</h3>
          </div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Quá trình xây dựng Portfolio là một bước đệm giúp tôi chuyển đổi từ việc tiếp thu lý thuyết
            thụ động sang{' '}
            <span className="text-sky-400 font-medium">chủ động làm chủ các công cụ số</span>. Việc tự tay
            thiết kế và cấu trúc các công cụ quản lý dự án giúp tôi rèn luyện{' '}
            <span className="text-orange-400 font-medium">tính kỷ luật và tư duy hệ thống</span> —
            tố chất bắt buộc của một Architect/DevOps tương lai.
          </p>
        </div>

        {/* Key skills */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.title}
              className={`rounded-xl border p-8 ${s.bg}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <s.icon size={28} className={s.color} />
                <h3 className={`text-lg font-semibold ${s.color}`}>{s.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Biggest challenge */}
        <div className="rounded-2xl border border-amber-900/30 bg-amber-950/20 p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle size={28} className="text-amber-400 flex-shrink-0" />
            <h3 className="text-xl font-semibold text-white">Thách thức Lớn nhất & Bài học Cốt lõi</h3>
          </div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            Thách thức lớn nhất là nguy cơ{' '}
            <span className="text-red-400 font-medium">"hallucination" (ảo giác)</span> của AI khi sinh
            ra các đoạn code đa luồng sai logic — ví dụ: quên block{' '}
            <span className="font-mono text-orange-400">try-finally</span> khi dùng{' '}
            <span className="font-mono text-sky-400">Lock</span>, dễ gây{' '}
            <span className="text-red-400">Deadlock</span>.
          </p>
          <div className="rounded-xl border border-white/5 bg-[#0d1117] p-6">
            <p className="text-sm text-emerald-400 mb-2 font-sans font-medium">Bài học cốt lõi</p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              AI chỉ cung cấp{' '}
              <span className="text-orange-400 font-medium">nguyên liệu thô</span>. Tư duy phản biện,
              kỹ năng debug độc lập và nguyên tắc kiểm chứng độc lập mới là yếu tố
              quyết định chất lượng và sự an toàn của hệ thống.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-3 rounded-full border border-white/5 bg-[#161b22] px-8 py-4">
            <span className="font-mono text-sm text-slate-500">MSV: 25020389</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="font-mono text-sm text-sky-400">Nguyễn Quốc Thái</span>
            <span className="h-3 w-px bg-white/10" />
            <span className="font-mono text-sm text-slate-500">UET · K70 · IT</span>
          </div>
          <p className="mt-6 font-mono text-sm text-slate-500">
            © 2025 · Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
