import { Mail, Phone, Github, Facebook, GraduationCap } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Cột trái: Thông tin */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-24 lg:px-16 xl:px-24">
          {/* Glow effect */}
          <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[100px]" />

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
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
              Xin chào, tôi là <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-500">
                Nguyễn Quốc Thái
              </span>
            </h1>

            {/* Tiêu đề phụ */}
            <p className="mb-10 text-xl sm:text-2xl italic text-slate-600 max-w-2xl leading-relaxed">
              "Một 'tân binh' đầy tham vọng tại K70 ngành Công nghệ Thông tin, UET."
            </p>

            {/* Divider */}
            <div className="mb-10 h-px w-full max-w-lg bg-gradient-to-r from-slate-300 to-transparent" />

            {/* Thông tin liên hệ */}
            <div className="mb-12">
              <h3 className="mb-5 inline-block text-base font-semibold uppercase tracking-wider text-slate-700 underline decoration-violet-500/50 decoration-2 underline-offset-8">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-4 mt-5 text-lg">
                <li className="flex items-center gap-4 text-slate-600 transition-colors hover:text-slate-900">
                  <Mail size={22} className="text-violet-600" />
                  <span>25020389@vnu.edu.vn</span>
                </li>
                <li className="flex items-center gap-4 text-slate-600 transition-colors hover:text-slate-900">
                  <Phone size={22} className="text-violet-600" />
                  <span>0978474084</span>
                </li>
                <li className="flex items-center gap-5 pt-3">
                  <a href="https://www.facebook.com/thaisodupee/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-200/50 p-2 text-slate-600 transition-all hover:bg-violet-600 hover:text-white">
                    <Facebook size={24} />
                  </a>
                  <a href="https://github.com/Thaisodupe-coder/Thaisodupe-coder.github.io" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-200/50 p-2 text-slate-600 transition-all hover:bg-violet-600 hover:text-white">
                    <Github size={24} />
                  </a>
                </li>
              </ul>
            </div>

            {/* 3 Nút bấm */}
            <div className="flex flex-wrap gap-5">
              <button onClick={() => scrollTo('about')} className="rounded-lg border-2 border-violet-600 bg-transparent px-8 py-3.5 text-base font-semibold tracking-wide text-violet-600 shadow-[inset_0_0_0_0_#7c3aed] transition-all duration-500 ease-out hover:text-white hover:shadow-[inset_0_-100px_0_0_#7c3aed] active:scale-90">
                Bản thân
              </button>
              <button onClick={() => scrollTo('projects')} className="rounded-lg border-2 border-violet-600 bg-transparent px-8 py-3.5 text-base font-semibold tracking-wide text-violet-600 shadow-[inset_0_0_0_0_#7c3aed] transition-all duration-500 ease-out hover:text-white hover:shadow-[inset_0_-100px_0_0_#7c3aed] active:scale-90">
                Dự án
              </button>
              <button onClick={() => scrollTo('summary')} className="rounded-lg border-2 border-violet-600 bg-transparent px-8 py-3.5 text-base font-semibold tracking-wide text-violet-600 shadow-[inset_0_0_0_0_#7c3aed] transition-all duration-500 ease-out hover:text-white hover:shadow-[inset_0_-100px_0_0_#7c3aed] active:scale-90">
                Tổng kết
              </button>
            </div>
          </div>
        </div>

        {/* Cột phải: Hình ảnh chân dung */}
        <div className="relative h-96 w-full lg:h-screen lg:min-h-screen">
          <img
            src="/reports/main-pg.png"
            alt="Công nghệ thông tin"
            className="h-full w-full object-cover object-center"
          />
          {/* Lớp phủ gradient để hòa trộn ảnh vào background tối (đã giảm trắng) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent lg:bg-gradient-to-r lg:from-slate-50 lg:via-slate-50/20 lg:to-transparent" />
        </div>

      </div>
    </section>
  );
}
