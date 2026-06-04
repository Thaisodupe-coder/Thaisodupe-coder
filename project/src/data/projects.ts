import {
  FolderOpen,
  Search,
  MessageSquare,
  Users,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export interface ProjectSection {
  heading: string;
  items?: string[];
  code?: string;
}

export interface Project {
  id: string;
  badge: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  gradient: string;
  colorBg: string;
  colorTextHover: string;
  objective: string;
  sections: ProjectSection[];
  tags?: string[];
  reportFile?: string;
}

export const projects: Project[] = [
  {
    id: 'bai1',
    badge: 'Bài tập 01',
    title: 'Thao tác cơ bản với Tệp tin & Thư mục',
    summary: 'Thiết lập cấu trúc thư mục phân cấp, áp dụng quy tắc đặt tên PascalCase và quản lý tệp tin hệ thống.',
    icon: FolderOpen,
    gradient: 'from-sky-500 to-blue-600',
    colorBg: 'bg-sky-50/60 hover:bg-sky-100 border-sky-200',
    colorTextHover: 'group-hover:text-sky-600',
    objective: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp thống nhất, đảm bảo tính nhất quán và tránh lỗi môi trường đa nền tảng.',
    sections: [
      {
        heading: 'Cấu trúc thư mục',
        code: `ThucHanh_NguyenQuocThai/
├── TaiLieu/
│   ├── GhiChuQuanTrong.txt
│   └── DiChuyen.txt
├── BaiTap/
│   └── Lab01/
└── KetQua/`,
      },
      {
        heading: 'Quy tắc áp dụng',
        items: [
          'Thiết lập cấu trúc thư mục <span class="font-mono text-sky-600">phân cấp rõ ràng</span> trên ổ đĩa cục bộ, bắt đầu bằng thư mục gốc <span class="font-mono text-orange-600">ThucHanh_NguyenQuocThai</span>.',
          'Áp dụng quy tắc đặt tên <span class="font-mono text-sky-600">PascalCase</span> — viết hoa chữ cái đầu mỗi từ, không dấu — tránh lỗi trên môi trường Linux/macOS.',
          'Ví dụ tên tệp hợp lệ: <span class="font-mono text-orange-600">GhiChuQuanTrong.txt</span>, <span class="font-mono text-orange-600">DiChuyen.txt</span>.',
          'Thực hành các thao tác: New Folder, Rename, Copy/Cut & Paste để thuần thục quản lý hệ thống tệp.',
        ],
      },
    ],
    tags: ['File System', 'PascalCase', 'Windows', 'Organization'],
    reportFile: '/reports/bai1.pdf',
  },
  {
    id: 'bai2',
    badge: 'Bài tập 02',
    title: 'Tìm kiếm & Đánh giá Thông tin Học thuật',
    summary: 'Áp dụng 5 toán tử tìm kiếm nâng cao để nghiên cứu chuyên sâu về Fragile Base Class và Method Overriding trong Java.',
    icon: Search,
    gradient: 'from-orange-500 to-amber-600',
    colorBg: 'bg-orange-50/60 hover:bg-orange-100 border-orange-200',
    colorTextHover: 'group-hover:text-orange-600',
    objective: 'Áp dụng toán tử tìm kiếm nâng cao để tìm kiếm và đánh giá nguồn tin chuyên sâu về bài toán Fragile Base Class trong Java.',
    sections: [
      {
        heading: 'Chiến lược tìm kiếm (5 toán tử)',
        items: [
          '<span class="font-mono text-sky-600">intitle:"fragile base class" site:ieee.org OR site:springer.com</span> — Lọc bài báo khoa học trên IEEE/Springer có tiêu đề chứa từ khóa.',
          '<span class="font-mono text-sky-600">"Fragile Base Class" AND "Method Overriding" filetype:pdf</span> — Tìm tài liệu PDF chứa chính xác 2 cụm từ.',
          '<span class="font-mono text-sky-600">author:"Joshua Bloch" AND "Effective Java" inheritance</span> — Tìm best practices từ tác giả kiến trúc Java Core.',
          '<span class="font-mono text-sky-600">(composition OR inheritance) AND "best practices" "Java"</span> — So sánh hai kỹ thuật thiết kế.',
          '<span class="font-mono text-sky-600">"Fragile Base Class" -C++ "Java"</span> — Loại trừ ngôn ngữ C++ để tránh nhiễu kết quả.',
        ],
      },
      {
        heading: 'Đánh giá nguồn & kết luận',
        items: [
          'Đánh giá <span class="font-mono text-orange-600">10 nguồn học thuật</span> (Mikhajlov, Businge, Snyder...) dựa trên 5 tiêu chí: Tác giả, Cơ quan xuất bản, Phương pháp, Trích dẫn, Tính cập nhật.',
          'Kết quả: Lạm dụng ghi đè <span class="text-red-600">phá vỡ tính đóng gói</span> và gây ra Fragile Base Class Problem.',
          'Khuyến nghị: Ưu tiên <span class="text-emerald-600 font-medium">Composition (Tổng hợp)</span> hơn <span class="text-slate-500">Inheritance (Kế thừa)</span> theo nguyên tắc của Effective Java.',
        ],
      },
    ],
    tags: ['Google Scholar', 'IEEE', 'Java', 'OOP', 'Research'],
    reportFile: '/reports/bai2.pdf',
  },
  {
    id: 'bai3',
    badge: 'Bài tập 03',
    title: 'Viết Prompt Hiệu quả cho Tác vụ Học tập',
    summary: 'Áp dụng kỹ thuật Prompt Engineering (Role-playing, Chain-of-thought, Constraints) cho 3 tác vụ lập trình và toán học.',
    icon: MessageSquare,
    gradient: 'from-emerald-500 to-teal-600',
    colorBg: 'bg-emerald-50/60 hover:bg-emerald-100 border-emerald-200',
    colorTextHover: 'group-hover:text-emerald-600',
    objective: 'Trình bày sự cải tiến Prompt qua từng bước và so sánh chất lượng đầu ra trước/sau khi áp dụng kỹ thuật Prompt Engineering.',
    sections: [
      {
        heading: '3 tác vụ thực hành',
        items: [
          '<span class="text-sky-600 font-medium">Tác vụ 1 — Tóm tắt API JavaFX:</span> Nâng cấp từ "Tóm tắt API" thành prompt đóng vai Senior Dev, yêu cầu giải quyết bài toán <span class="font-mono text-orange-600">Thread-safety</span> (updateMessage lên UI Thread).',
          '<span class="text-sky-600 font-medium">Tác vụ 2 — Giải thích tính đa hình:</span> Yêu cầu AI giải thích sâu cơ chế <span class="font-mono text-orange-600">Dynamic Method Dispatch</span> ở tầng JVM thay vì chỉ nêu định nghĩa bề mặt.',
          '<span class="text-sky-600 font-medium">Tác vụ 3 — Tạo đề toán Giải tích 2:</span> Yêu cầu cụ thể xuất ra bằng mã <span class="font-mono text-orange-600">LaTeX</span>, bao quát đạo hàm hướng, vi phân toàn phần, kèm lời giải chi tiết.',
        ],
      },
      {
        heading: 'Kỹ thuật áp dụng',
        items: [
          '<span class="font-mono text-sky-600">Role-playing</span>: Gán vai trò cụ thể (Senior Dev, Giáo sư Toán) để định hướng ngữ cảnh.',
          '<span class="font-mono text-sky-600">Chain-of-thought</span>: Yêu cầu AI trình bày lập luận từng bước trước khi đưa ra kết luận.',
          '<span class="font-mono text-sky-600">Specific Constraints</span>: Ràng buộc format đầu ra (LaTeX, code block), độ sâu kỹ thuật và phạm vi nội dung.',
        ],
      },
    ],
    tags: ['Prompt Engineering', 'ChatGPT', 'JavaFX', 'LaTeX', 'JVM'],
    reportFile: '/reports/bai3.pdf',
  },
  {
    id: 'bai4',
    badge: 'Bài tập 04',
    title: 'Hợp tác Trực tuyến trong Dự án Nhóm',
    summary: 'Phối hợp phát triển "Phần mềm Quản lý Thư viện Java" dùng Trello, Discord và Google Workspace.',
    icon: Users,
    gradient: 'from-violet-500 to-blue-600',
    colorBg: 'bg-violet-50/60 hover:bg-violet-100 border-violet-200',
    colorTextHover: 'group-hover:text-violet-600',
    objective: 'Minh chứng việc phối hợp trực tuyến hiệu quả trong dự án "Phần mềm Quản lý Thư viện Java", từ quản lý tiến độ đến giao tiếp và lưu trữ.',
    sections: [
      {
        heading: 'Trello — quản lý tiến độ',
        items: [
          'Xây dựng bảng Kanban <span class="font-mono text-sky-600">4 cột</span>: Backlog → Doing → Review → Done.',
          'Áp dụng <span class="text-orange-600">nhãn màu</span> phân loại task: JavaFX, Database, Báo cáo.',
          'Thiết lập <span class="font-mono text-sky-600">Due Date</span> chặt chẽ, gắn assignee rõ ràng cho từng card.',
        ],
      },
      {
        heading: 'Discord — giao tiếp & debug',
        items: [
          'Phân chia kênh rõ ràng: <span class="font-mono text-orange-600">#thong-bao-chung</span>, <span class="font-mono text-orange-600">#thao-luan-code</span>.',
          'Sử dụng tính năng <span class="text-sky-600">Thread</span> để giải quyết tình trạng trôi thông báo khi debug session kéo dài.',
        ],
      },
      {
        heading: 'Google Workspace — tài liệu',
        items: [
          'Cấu trúc Drive với <span class="text-sky-600">phân quyền nghiêm ngặt</span> — tránh ghi đè tệp nhau.',
          'Áp dụng chế độ <span class="font-mono text-orange-600">Suggesting</span> (Đề xuất) trên Google Docs, giải quyết triệt để việc ghi đè nội dung.',
        ],
      },
    ],
    tags: ['Trello', 'Discord', 'Google Workspace', 'Kanban', 'Async'],
    reportFile: '/reports/bai4.pdf',
  },
  {
    id: 'bai5',
    badge: 'Bài tập 05',
    title: 'AI Tạo sinh Hỗ trợ Sáng tạo Nội dung',
    summary: 'Sản xuất Infographic "Best Practices tối ưu Java 25" tích hợp Gemini, DALL-E 3 và Canva AI.',
    icon: Palette,
    gradient: 'from-rose-500 to-orange-500',
    colorBg: 'bg-rose-50/60 hover:bg-rose-100 border-rose-200',
    colorTextHover: 'group-hover:text-rose-600',
    objective: 'Trưng bày Infographic "Best Practices tối ưu Java 25" được sản xuất thông qua quy trình tích hợp đa công cụ AI tạo sinh.',
    sections: [
      {
        heading: 'Quy trình tích hợp AI',
        items: [
          '<span class="text-sky-600 font-medium">Google Gemini:</span> Phân tích kỹ thuật, lập dàn ý về <span class="font-mono text-orange-600">ZGC (Z Garbage Collector)</span>, xử lý Thread Pool và sinh code so sánh hiệu năng String/StringBuilder.',
          '<span class="text-sky-600 font-medium">DALL-E 3:</span> Trực quan hóa khái niệm trừu tượng (vùng nhớ Eden, Survivor) bằng prompt chi tiết với dark theme & neon colors.',
          '<span class="text-sky-600 font-medium">Canva AI (Magic Design):</span> Xây dựng bố cục Infographic từ text — can thiệp thủ công <span class="text-orange-600 font-medium">70%</span> để tái cấu trúc lưới và font Monospace cho code blocks.',
        ],
      },
      {
        heading: 'Chủ đề nội dung',
        items: [
          'ZGC — Z Garbage Collector: cơ chế và lợi thế với GC pause < 1ms.',
          'Thread Pool optimization: cấu hình <span class="font-mono text-sky-600">ExecutorService</span> tối ưu.',
          'String vs StringBuilder: so sánh hiệu năng qua benchmark code.',
        ],
      },
    ],
    tags: ['Gemini', 'DALL-E 3', 'Canva AI', 'Java 25', 'Infographic'],
    reportFile: '/reports/bai5.pdf',
  },
  {
    id: 'bai6',
    badge: 'Bài tập 06',
    title: 'Sử dụng AI Có Trách nhiệm',
    summary: 'Xây dựng bộ nguyên tắc cá nhân 6 điều về sử dụng AI trong môi trường học thuật và phát triển phần mềm.',
    icon: ShieldCheck,
    gradient: 'from-slate-500 to-sky-600',
    colorBg: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
    colorTextHover: 'group-hover:text-sky-600',
    objective: 'Trình bày bộ nguyên tắc cá nhân về sử dụng AI trong môi trường học thuật, đảm bảo tính toàn vẹn học thuật và chất lượng kỹ thuật.',
    sections: [
      {
        heading: 'Bộ nguyên tắc cá nhân',
        items: [
          '<span class="font-mono text-orange-600">Think First, Prompt Later:</span> Tự vẽ UML và định hình kiến trúc trước khi dùng AI — AI là trợ lý, không phải người thiết kế.',
          '<span class="font-mono text-orange-600">Quy tắc giải thích 100%:</span> Không giữ lại bất kỳ dòng code nào (ví dụ: <span class="font-mono text-sky-600">ReentrantLock</span>) nếu không tự giải thích được cơ chế hoạt động.',
          '<span class="font-mono text-orange-600">Active Refactoring:</span> Không copy-paste mù quáng; phải tái cấu trúc theo <span class="text-sky-600">Google Java Style Guide</span>.',
          '<span class="font-mono text-orange-600">Independent Verification:</span> Kiểm chứng đề xuất phức tạp bằng tài liệu Official hoặc Unit Test.',
          '<span class="font-mono text-orange-600">Data Privacy:</span> Chỉ cung cấp pseudo-code hoặc error stack trace khi debug — bảo mật kiến trúc nội bộ.',
          '<span class="font-mono text-orange-600">Minh bạch Trích dẫn:</span> Khai báo rõ ràng phần đóng góp của AI trong báo cáo và tài liệu kỹ thuật.',
        ],
      },
    ],
    tags: ['AI Ethics', 'Academic Integrity', 'Best Practices', 'ReentrantLock'],
    reportFile: '/reports/bai6.pdf',
  },
];
