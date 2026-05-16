import { User, Book, Heart, Target, Rocket } from 'lucide-react';

export default function About() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative px-6 py-24 bg-[#0d1117]">
      {/* Divider phía trên */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto max-w-4xl text-center">
        {/* Tiêu đề chính */}
        <h2 className="mb-8 text-3xl font-bold text-blue-400 sm:text-4xl">
          Thêm về bản thân
        </h2>

        {/* Đoạn văn mở đầu */}
        <p className="mx-auto mb-16 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          "Tại khoa Công nghệ thông tin - Đại học Công nghệ, tôi không chỉ học lập trình; tôi học cách tư duy hệ thống. Portfolio này là cuốn nhật ký số ghi lại hành trình tôi chinh phục kỹ nghệ Prompt, điều phối dự án và ứng dụng AI. Sự khác biệt nằm ở Tư duy con người."
        </p>

        {/* Khối Thẻ thông tin (Grid 3 columns) */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {/* Thẻ 1 */}
          <div className="relative flex flex-col items-center rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              <User size={20} />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-violet-300">Thông tin cá nhân</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Họ và tên: Nguyễn Quốc Thái<br />
              Mã sinh viên: 25020389
            </p>
          </div>

          {/* Thẻ 2 */}
          <div className="relative flex flex-col items-center rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              <Book size={20} />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-violet-300">Chuyên ngành</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Công nghệ thông tin<br />
              UET - VNU
            </p>
          </div>

          {/* Thẻ 3 */}
          <div className="relative flex flex-col items-center rounded-2xl border border-violet-500/30 bg-violet-950/20 p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              <Heart size={20} />
            </div>
            <h3 className="mt-6 mb-3 text-lg font-semibold text-violet-300">Sở thích</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              🤖 Khám phá AI<br />
              💻 Lập trình hệ thống<br />
              📖 Đọc sách
            </p>
          </div>
        </div>

        {/* Mục tiêu Portfolio & Định hướng */}
        <div className="mx-auto max-w-2xl space-y-8 rounded-2xl border border-white/5 bg-[#161b22] p-8 text-left">
          <div>
            <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-white">
              <Target className="text-sky-400" size={24} />
              Mục tiêu Portfolio
            </h3>
            <p className="pl-8 text-slate-400 leading-relaxed">
              Hệ thống hóa hành trình rèn luyện kỹ năng số. Đây là minh chứng cho sự chuyển đổi từ tư duy thụ động sang năng lực thực thi chuyên nghiệp trong kỷ nguyên mới.
            </p>
          </div>

          <div>
            <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-white">
              <Rocket className="text-orange-400" size={24} />
              Định hướng phát triển
            </h3>
            <p className="pl-8 text-slate-400 leading-relaxed">
              Khát vọng xây dựng những "xương sống" công nghệ bền vững trong vai trò Software Architect kết hợp DevOps tương lai.
            </p>
          </div>
        </div>

        {/* Nút Liên hệ viền tím */}
        <button onClick={() => scrollTo('hero')} className="mt-12 rounded-lg border-2 border-violet-500 px-8 py-3 text-sm font-semibold text-violet-400 transition-all hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]">
          Liên hệ
        </button>
      </div>
    </section>
  );
}