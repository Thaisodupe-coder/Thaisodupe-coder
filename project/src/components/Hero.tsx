import { Mail, Phone, Github, Facebook, GraduationCap } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#0d1117]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Cột trái: Thông tin */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
          {/* Glow effect */}
          <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

          <div className="fade-in-up">
            {/* Icon/Logo UET */}
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white p-1.5 border border-violet-500/30 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/vi/b/bf/Logo_HUET.svg" 
                alt="UET Logo" 
                className="h-full w-full object-contain"
              />
            </div>

            {/* Tiêu đề chính */}
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
              Xin chào, tôi là <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
                Nguyễn Quốc Thái
              </span>
            </h1>

            {/* Tiêu đề phụ */}
            <p className="mb-8 text-lg italic text-slate-400 max-w-lg leading-relaxed">
              "Một 'tân binh' đầy tham vọng tại K70 ngành Công nghệ Thông tin, UET."
            </p>

            {/* Divider */}
            <div className="mb-8 h-px w-full max-w-md bg-gradient-to-r from-white/20 to-transparent" />

            {/* Thông tin liên hệ */}
            <div className="mb-10">
              <h3 className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-slate-300 underline decoration-violet-500/50 decoration-2 underline-offset-8">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                  <Mail size={18} className="text-violet-400" />
                  <span>25020389@vnu.edu.vn</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                  <Phone size={18} className="text-violet-400" />
                  <span>0978474084</span>
                </li>
                <li className="flex items-center gap-4 pt-2">
                  <a href="https://www.facebook.com/thaisodupee/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/5 p-2 text-slate-400 transition-all hover:bg-violet-500 hover:text-white">
                    <Facebook size={20} />
                  </a>
                  <a href="https://github.com/Thaisodupe-coder/Thaisodupe-coder.github.io" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/5 p-2 text-slate-400 transition-all hover:bg-violet-500 hover:text-white">
                    <Github size={20} />
                  </a>
                </li>
              </ul>
            </div>

            {/* 3 Nút bấm */}
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('about')} className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                Bản thân
              </button>
              <button onClick={() => scrollTo('projects')} className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                Dự án
              </button>
              <button onClick={() => scrollTo('summary')} className="rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                Tổng kết
              </button>
            </div>
          </div>
        </div>

        {/* Cột phải: Hình ảnh chân dung */}
        <div className="relative h-96 w-full lg:h-screen lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
            alt="Công nghệ thông tin"
            className="h-full w-full object-cover object-center"
          />
          {/* Lớp phủ gradient để hòa trộn ảnh vào background tối */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent lg:bg-gradient-to-r lg:from-[#0d1117] lg:via-[#0d1117]/50 lg:to-transparent" />
        </div>

      </div>
    </section>
  );
}
