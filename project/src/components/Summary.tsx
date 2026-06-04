import { Lightbulb, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

const skills = [
  {
    icon: Lightbulb,
    title: 'Prompt Engineering',
    desc: 'Học cách giao tiếp và đặt ranh giới kỹ thuật với AI, biến nó từ công cụ sinh chữ thành "người phản biện" kiến trúc phần mềm hiệu quả.',
    color: 'text-sky-600',
    bg: 'bg-sky-100 border-sky-300 shadow-sm',
  },
  {
    icon: Users,
    title: 'Collaboration & Async',
    desc: 'Thay đổi hoàn toàn tư duy làm việc nhóm — thiết lập quy trình giao tiếp bất đồng bộ trơn tru qua Discord, Trello và Google Docs.',
    color: 'text-orange-600',
    bg: 'bg-orange-100 border-orange-300 shadow-sm',
  },
];

export default function Summary() {
  return (
    <section id="summary" className="relative overflow-hidden px-6 py-24 bg-white">
      {/* Hiệu ứng Particles Background */}
      <style>{`
        .particles-container {
          position: absolute;
          inset: 0;
        }
        .particles-container::before {
          content: "";
          position: absolute;
          inset: -145%;
          rotate: -45deg;
          background: transparent;
          background-image:
            radial-gradient(4px 100px at 0px 235px, rgb(59, 130, 246), #0000),
            radial-gradient(4px 100px at 300px 235px, rgb(59, 130, 246), #0000),
            radial-gradient(1.5px 1.5px at 150px 117.5px, rgb(59, 130, 246) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 252px, rgb(139, 92, 246), #0000),
            radial-gradient(4px 100px at 300px 252px, rgb(139, 92, 246), #0000),
            radial-gradient(1.5px 1.5px at 150px 126px, rgb(139, 92, 246) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 150px, rgb(14, 165, 233), #0000),
            radial-gradient(4px 100px at 300px 150px, rgb(14, 165, 233), #0000),
            radial-gradient(1.5px 1.5px at 150px 75px, rgb(14, 165, 233) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 253px, rgb(168, 85, 247), #0000),
            radial-gradient(4px 100px at 300px 253px, rgb(168, 85, 247), #0000),
            radial-gradient(1.5px 1.5px at 150px 126.5px, rgb(168, 85, 247) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 204px, rgb(99, 102, 241), #0000),
            radial-gradient(4px 100px at 300px 204px, rgb(99, 102, 241), #0000),
            radial-gradient(1.5px 1.5px at 150px 102px, rgb(99, 102, 241) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 134px, rgb(59, 130, 246), #0000),
            radial-gradient(4px 100px at 300px 134px, rgb(59, 130, 246), #0000),
            radial-gradient(1.5px 1.5px at 150px 67px, rgb(59, 130, 246) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 179px, rgb(139, 92, 246), #0000),
            radial-gradient(4px 100px at 300px 179px, rgb(139, 92, 246), #0000),
            radial-gradient(1.5px 1.5px at 150px 89.5px, rgb(139, 92, 246) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 299px, rgb(14, 165, 233), #0000),
            radial-gradient(4px 100px at 300px 299px, rgb(14, 165, 233), #0000),
            radial-gradient(1.5px 1.5px at 150px 149.5px, rgb(14, 165, 233) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 215px, rgb(168, 85, 247), #0000),
            radial-gradient(4px 100px at 300px 215px, rgb(168, 85, 247), #0000),
            radial-gradient(1.5px 1.5px at 150px 107.5px, rgb(168, 85, 247) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 281px, rgb(99, 102, 241), #0000),
            radial-gradient(4px 100px at 300px 281px, rgb(99, 102, 241), #0000),
            radial-gradient(1.5px 1.5px at 150px 140.5px, rgb(99, 102, 241) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 158px, rgb(59, 130, 246), #0000),
            radial-gradient(4px 100px at 300px 158px, rgb(59, 130, 246), #0000),
            radial-gradient(1.5px 1.5px at 150px 79px, rgb(59, 130, 246) 100%, #0000 150%),
            radial-gradient(4px 100px at 0px 210px, rgb(139, 92, 246), #0000),
            radial-gradient(4px 100px at 300px 210px, rgb(139, 92, 246), #0000),
            radial-gradient(1.5px 1.5px at 150px 105px, rgb(139, 92, 246) 100%, #0000 150%);
          background-size:
            300px 235px, 300px 235px, 300px 235px, 300px 252px, 300px 252px, 300px 252px,
            300px 150px, 300px 150px, 300px 150px, 300px 253px, 300px 253px, 300px 253px,
            300px 204px, 300px 204px, 300px 204px, 300px 134px, 300px 134px, 300px 134px,
            300px 179px, 300px 179px, 300px 179px, 300px 299px, 300px 299px, 300px 299px,
            300px 215px, 300px 215px, 300px 215px, 300px 281px, 300px 281px, 300px 281px,
            300px 158px, 300px 158px, 300px 158px, 300px 210px, 300px 210px, 300px 210px;
          animation: hi 150s linear infinite;
        }
        @keyframes hi {
          0% { background-position: 0px 220px, 3px 220px, 151.5px 337.5px, 25px 24px, 28px 24px, 176.5px 150px, 50px 16px, 53px 16px, 201.5px 91px, 75px 224px, 78px 224px, 226.5px 350.5px, 100px 19px, 103px 19px, 251.5px 121px, 125px 120px, 128px 120px, 276.5px 187px, 150px 31px, 153px 31px, 301.5px 120.5px, 175px 235px, 178px 235px, 326.5px 384.5px, 200px 121px, 203px 121px, 351.5px 228.5px, 225px 224px, 228px 224px, 376.5px 364.5px, 250px 26px, 253px 26px, 401.5px 105px, 275px 75px, 278px 75px, 426.5px 180px; }
          to { background-position: 0px 6800px, 3px 6800px, 151.5px 6917.5px, 25px 13632px, 28px 13632px, 176.5px 13758px, 50px 5416px, 53px 5416px, 201.5px 5491px, 75px 17175px, 78px 17175px, 226.5px 17301.5px, 100px 5119px, 103px 5119px, 251.5px 5221px, 125px 8428px, 128px 8428px, 276.5px 8495px, 150px 9876px, 153px 9876px, 301.5px 9965.5px, 175px 13391px, 178px 13391px, 326.5px 13540.5px, 200px 14741px, 203px 14741px, 351.5px 14848.5px, 225px 18770px, 228px 18770px, 376.5px 18910.5px, 250px 5082px, 253px 5082px, 401.5px 5161px, 275px 6375px, 278px 6375px, 426.5px 6480px; }
        }
      `}</style>
      <div className="particles-container z-0 pointer-events-none" />

      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-orange-300 to-transparent z-10" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-orange-600 mb-4 font-sans">
            Phản ánh cá nhân
          </p>
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Tổng kết</h2>
        </div>

        {/* Personal reflection */}
        <div className="mb-14 rounded-2xl border border-blue-300 bg-blue-100 shadow-sm p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <CheckCircle2 size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Trải nghiệm & Cảm nhận Cá nhân</h3>
          </div>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Quá trình xây dựng Portfolio là một bước đệm giúp tôi chuyển đổi từ việc tiếp thu lý thuyết
            thụ động sang{' '}
            <span className="text-sky-600 font-medium">chủ động làm chủ các công cụ số</span>. Việc tự tay
            thiết kế và cấu trúc các công cụ quản lý dự án giúp tôi rèn luyện{' '}
            <span className="text-orange-600 font-medium">tính kỷ luật và tư duy hệ thống</span> —
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
              <p className="text-base leading-relaxed text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Biggest challenge */}
        <div className="rounded-2xl border border-amber-300 bg-amber-100 shadow-sm p-8 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle size={28} className="text-amber-600 flex-shrink-0" />
            <h3 className="text-xl font-semibold text-slate-900">Thách thức Lớn nhất & Bài học Cốt lõi</h3>
          </div>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
            Thách thức lớn nhất là nguy cơ{' '}
            <span className="text-red-600 font-medium">"hallucination" (ảo giác)</span> của AI khi sinh
            ra các đoạn code đa luồng sai logic — ví dụ: quên block{' '}
            <span className="font-mono text-orange-600">try-finally</span> khi dùng{' '}
            <span className="font-mono text-sky-600">Lock</span>, dễ gây{' '}
            <span className="text-red-600">Deadlock</span>.
          </p>
          <div className="rounded-xl border border-emerald-300 bg-emerald-100 p-6">
            <p className="text-sm text-emerald-600 mb-2 font-sans font-medium">Bài học cốt lõi</p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              AI chỉ cung cấp{' '}
              <span className="text-orange-600 font-medium">nguyên liệu thô</span>. Tư duy phản biện,
              kỹ năng debug độc lập và nguyên tắc kiểm chứng độc lập mới là yếu tố
              quyết định chất lượng và sự an toàn của hệ thống.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-3 rounded-full border border-slate-300 bg-slate-100 px-8 py-4 shadow-sm">
            <span className="font-mono text-sm text-slate-500">MSV: 25020389</span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="font-mono text-sm text-sky-600">Nguyễn Quốc Thái</span>
            <span className="h-3 w-px bg-slate-300" />
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
