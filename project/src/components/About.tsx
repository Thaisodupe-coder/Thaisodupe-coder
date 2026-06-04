import { User, Book, Heart, Target, Rocket } from 'lucide-react';

export default function About() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative px-6 py-24 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://vietjack.me/storage/uploads/images/526/dai-hoc-cong-nghe-3-1659687487.jpg"
          alt="UET Background"
          className="h-full w-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />
      </div>

      {/* Divider phía trên */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-slate-300 to-transparent z-10" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Tiêu đề chính */}
        <h2 className="mb-10 text-4xl font-bold text-slate-900 sm:text-5xl">
          Thêm về bản thân
        </h2>

        {/* Đoạn văn mở đầu */}
        <p className="mx-auto mb-20 max-w-4xl text-lg leading-relaxed text-slate-700 sm:text-xl">
          "Tại khoa Công nghệ thông tin - Đại học Công nghệ, tôi không chỉ học lập trình; tôi học cách tư duy hệ thống. Portfolio này là cuốn nhật ký số ghi lại hành trình tôi chinh phục kỹ nghệ Prompt, điều phối dự án và ứng dụng AI. Sự khác biệt nằm ở Tư duy con người."
        </p>

        {/* Khối Thẻ thông tin (Grid 3 columns) */}
        <div className="mb-16 grid gap-6 sm:grid-cols-3">
          {/* Thẻ 1 */}
          <div className="relative flex flex-col items-center rounded-2xl border border-sky-100 bg-sky-50/60 backdrop-blur-sm p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-sky-200 text-sky-600 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
              <User size={20} />
            </div>
            <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-800">Thông tin cá nhân</h3>
            <p className="text-base leading-relaxed text-slate-600">
              Họ và tên: Nguyễn Quốc Thái<br />
              Mã sinh viên: 25020389
            </p>
          </div>

          {/* Thẻ 2 */}
          <div className="relative flex flex-col items-center rounded-2xl border border-indigo-100 bg-indigo-50/60 backdrop-blur-sm p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-indigo-200 text-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Book size={20} />
            </div>
            <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-800">Chuyên ngành</h3>
            <p className="text-base leading-relaxed text-slate-600">
              Ngành Công nghệ thông tin<br />
              Khóa K70 | UET - VNU
            </p>
          </div>

          {/* Thẻ 3 */}
          <div className="relative flex flex-col items-center rounded-2xl border border-orange-100 bg-orange-50/60 backdrop-blur-sm p-6 shadow-lg transition-transform hover:-translate-y-1">
            <div className="absolute -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-orange-200 text-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
              <Heart size={20} />
            </div>
            <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-800">Sở thích</h3>
            <p className="text-base leading-relaxed text-slate-600">
              🤖 Khám phá AI<br />
              💻 Lập trình hệ thống<br />
              📖 Đọc sách
            </p>
          </div>
        </div>

        {/* Mục tiêu Portfolio & Định hướng */}
        <div className="mx-auto max-w-3xl space-y-10 rounded-2xl border border-slate-200 bg-slate-50/80 backdrop-blur-sm p-10 text-left shadow-lg">
          <div>
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-slate-900">
              <Target className="text-sky-600" size={28} />
              Mục tiêu Portfolio
            </h3>
            <p className="pl-10 text-lg text-slate-600 leading-relaxed">
              Hệ thống hóa hành trình rèn luyện kỹ năng số. Đây là minh chứng cho sự chuyển đổi từ tư duy thụ động sang năng lực thực thi chuyên nghiệp trong kỷ nguyên mới.
            </p>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-slate-900">
              <Rocket className="text-orange-600" size={28} />
              Định hướng phát triển
            </h3>
            <p className="pl-10 text-lg text-slate-600 leading-relaxed">
              Phát triển chuyên môn sâu để trở thành Software Architect kết hợp DevOps. Trọng tâm song song là rèn luyện kỹ năng làm việc nhóm (teamwork) và nâng cao năng lực giao tiếp, đàm phán với khách hàng.
            </p>
          </div>
        </div>

        {/* Nút Liên hệ viền xám */}
        <button onClick={() => scrollTo('hero')} className="mt-16 rounded-lg border border-slate-300 px-10 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)]">
          Liên hệ
        </button>
      </div>
    </section>
  );
}