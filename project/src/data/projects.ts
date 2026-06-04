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
        heading: 'Các thao tác thực hành chi tiết',
        items: [
          '<strong>Tạo lập và Tổ chức:</strong> Thiết lập không gian lưu trữ với thư mục gốc <span class="font-mono text-sky-600">ThucHanh_NguyenQuocThai</span> và phân cấp logic bằng các thư mục con (như <span class="font-mono text-orange-600">TaiLieu</span>) trên phân vùng ổ đĩa an toàn (không thuộc ổ hệ thống C:).',
          '<strong>Quy tắc định danh:</strong> Áp dụng triệt để quy tắc <span class="font-mono text-emerald-600">PascalCase</span> (viết hoa chữ cái đầu của mỗi từ, không sử dụng dấu tiếng Việt hay khoảng trắng) cho mọi tệp tin nhằm đảm bảo tính tương thích đa nền tảng.',
          '<strong>Điều hướng dữ liệu:</strong> Thực hành nhuần nhuyễn việc quản lý vòng đời tệp tin: Từ khởi tạo văn bản, đổi tên (<span class="font-mono text-sky-600">Rename</span>), đến việc sao chép (<span class="font-mono text-sky-600">Copy/Paste</span>) và di chuyển tệp tin (<span class="font-mono text-sky-600">Cut/Paste</span>) giữa các phân vùng thư mục một cách chính xác.',
          '<strong>Bảo mật và Phục hồi:</strong> Nắm vững sự khác biệt giữa thao tác xóa tạm thời (đưa vào Recycle Bin) và thao tác xóa vĩnh viễn (<span class="font-mono text-red-500">Shift + Delete</span>). Trực tiếp thực hành các bước khôi phục (Restore) tệp tin quan trọng từ thùng rác về vị trí cũ.'
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
        heading: 'Chiến lược tìm kiếm nâng cao',
        items: [
          'Sử dụng các toán tử <span class="font-mono text-sky-600">intitle:</span> kết hợp <span class="font-mono text-sky-600">site:</span> (như ieee.org, springer.com) để thu hẹp phạm vi kết quả vào các kho dữ liệu khoa học uy tín, tìm đích danh tiêu đề "Fragile Base Class".',
          'Áp dụng linh hoạt các toán tử logic <span class="font-mono text-sky-600">AND, OR</span> và đặc biệt là toán tử loại trừ <span class="font-mono text-sky-600">-C++</span> để khử nhiễu, đảm bảo kết quả chỉ tập trung vào ngôn ngữ Java.',
          'Truy vết chuyên gia bằng toán tử <span class="font-mono text-sky-600">author:</span> (ví dụ: "Joshua Bloch" kết hợp "Effective Java") nhằm tham khảo các Best Practices từ chính kiến trúc sư trưởng của JDK lõi.'
        ],
      },
      {
        heading: 'Phân tích tài liệu và Đánh giá',
        items: [
          '<strong>Thẩm định 10 nguồn học thuật:</strong> Phân loại độ tin cậy của các bài báo, sách chuyên khảo (từ năm 1986 đến 2024) dựa trên 5 tiêu chí khắt khe: Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Số lượng trích dẫn và Tính cập nhật.',
          '<strong>Vạch trần bản chất FBC:</strong> Các nghiên cứu kinh điển và hiện đại đều chỉ ra rằng: Lạm dụng ghi đè phương thức (Method Overriding) phá vỡ tính đóng gói. Cơ chế đa hình động khiến lớp con phụ thuộc quá chặt vào cài đặt ẩn của lớp cha, làm hệ thống giòn vỡ và dễ sinh lỗi đệ quy khi thư viện gốc được cập nhật.',
          '<strong>Giải pháp Kiến trúc:</strong> Áp dụng triệt để khuyến nghị từ giới học thuật: "Thiết kế rõ ràng cho việc kế thừa, nếu không thì phải cấm nó" bằng từ khóa <span class="font-mono text-emerald-600">final</span>. Đồng thời, biến nguyên tắc <span class="text-orange-600 font-medium">Ưu tiên Tổng hợp hơn Kế thừa (Composition over Inheritance)</span> thành tiêu chuẩn mặc định khi thiết kế hệ thống OOP.'
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
        heading: 'Quá trình tinh chỉnh Prompt qua 3 tác vụ',
        items: [
          '<strong>Tác vụ 1 (JavaFX Concurrency):</strong> Từ một câu lệnh chung chung "Tóm tắt API", đã nâng cấp thành cấu trúc yêu cầu AI đóng vai Senior Dev, tập trung phân tích sâu việc sử dụng Task/Service thay vì Thread thuần nhằm giải quyết bài toán <span class="text-orange-600 font-medium">Thread-safety</span> khi cập nhật UI.',
          '<strong>Tác vụ 2 (Bản chất Đa hình):</strong> Buộc AI từ bỏ việc định nghĩa lý thuyết suông để chuyển sang giải thích cơ chế <span class="text-orange-600 font-medium">Dynamic Method Dispatch</span> nằm sâu dưới tầng JVM. Việc gán vai Giảng viên đã giúp AI đưa ra các ví dụ trực quan, hỗ trợ hiểu sâu thay vì học vẹt.',
          '<strong>Tác vụ 3 (Toán Giải tích 2):</strong> Tối ưu hóa việc sinh bộ câu hỏi trắc nghiệm Toán bằng cách ràng buộc rõ các chủ đề (đạo hàm hướng, vi phân toàn phần) và ép buộc AI xuất kết quả bằng định dạng mã <span class="font-mono text-sky-600">LaTeX</span> kèm lời giải chi tiết theo từng bước.'
        ],
      },
      {
        heading: '4 Nguyên tắc cốt lõi của Prompt Engineering',
        items: [
          '<span class="text-sky-600 font-medium">Ràng buộc kỹ thuật cụ thể (Specificity):</span> Luôn giới hạn rõ ràng thư viện, phiên bản và tình huống sử dụng để tránh việc AI sinh ra các hàm cũ hoặc gây lỗi (như IllegalStateException).',
          '<span class="text-sky-600 font-medium">Tư duy theo bước (Chain-of-thought):</span> Yêu cầu AI trình bày logic suy luận tuần tự từ bản chất đến thực thi, cực kỳ hiệu quả khi cần gỡ lỗi (debug) các đoạn mã phức tạp.',
          '<span class="text-sky-600 font-medium">Gán vai chuyên gia (Role-Playing):</span> Định hướng AI đóng các vai trò cụ thể để tự động điều chỉnh thuật ngữ, tông giọng và chiều sâu kiến thức cho phù hợp với dự án.',
          '<span class="text-sky-600 font-medium">Kiểm soát định dạng đầu ra:</span> Lợi dụng sức mạnh của Markdown, Bảng biểu hoặc LaTeX để dữ liệu AI trả về có cấu trúc hoàn chỉnh, sẵn sàng sao chép và tái sử dụng ngay.'
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
        heading: 'Thiết lập Không gian làm việc số',
        items: [
          '<strong>Trello (Điều phối tiến độ):</strong> Xây dựng bảng Kanban 4 cột tiêu chuẩn (Backlog, Doing, Review, Done). Tối ưu hóa việc phân chia công việc bằng cách sử dụng Thẻ nhãn màu (Label) theo module (JavaFX, Database), tích hợp Checklist bên trong từng thẻ và gán Due Date chặt chẽ.',
          '<strong>Discord (Giao tiếp nhóm):</strong> Tổ chức server chuyên biệt, phân tách rõ ràng luồng thông tin thành các kênh: <span class="font-mono text-sky-600">#thong-bao-chung</span> (chỉ nhận thông báo) và <span class="font-mono text-sky-600">#thao-luan-code</span>. Tận dụng Voice Channel và tính năng Share Screen để thiết lập các buổi Pair-programming trực tiếp.',
          '<strong>Google Workspace (Lưu trữ đồng bộ):</strong> Áp dụng quy tắc đặt tên tệp thống nhất tuyệt đối theo cú pháp <span class="font-mono text-orange-600">[MãTask]_[Nộidung]_[Tácgiả]</span>, kết hợp phân quyền truy cập nghiêm ngặt thư mục hệ thống.'
        ],
      },
      {
        heading: 'Xử lý các Thách thức trong Cộng tác ảo',
        items: [
          '<strong>Vấn đề trôi thông báo quan trọng:</strong> Khi các buổi tranh luận tìm Bug code kéo dài làm loãng kênh chat, nhóm đã áp dụng tính năng <span class="text-emerald-600 font-medium">Thread (Luồng hội thoại phụ)</span> trên Discord để đóng gói từng chủ đề lại, giữ cho kênh chính luôn gọn gàng.',
          '<strong>Sự cố xung đột nội dung văn bản:</strong> Gặp tình trạng ghi đè xóa mất dữ liệu của nhau khi nhiều người cùng chỉnh sửa file Docs. Nhanh chóng chuyển đổi toàn bộ quy trình sang chế độ <span class="text-emerald-600 font-medium">Suggesting (Đề xuất)</span>, yêu cầu tác giả gốc phải kiểm duyệt chéo và Accept mới được áp dụng.'
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
        heading: 'Quy trình tích hợp đa công cụ (3 Giai đoạn)',
        items: [
          '<strong>Giai đoạn 1 (Lên ý tưởng - Google Gemini):</strong> Đóng vai Senior Dev yêu cầu AI lập dàn ý về ZGC, Thread Pool và quản lý String trong Java. AI hỗ trợ sinh mã nguồn, nhưng sinh viên phải trực tiếp can thiệp <span class="text-orange-600 font-medium">60%</span> để chỉnh sửa cú pháp và bổ sung hàm đo lường thời gian thực thi <span class="font-mono text-slate-500">System.nanoTime</span>.',
          '<strong>Giai đoạn 2 (Trực quan hóa - DALL-E 3):</strong> Sử dụng kỹ thuật prompt tạo ảnh phẳng (flat vector) với tone màu Dark-neon để trực quan hóa quá trình thu gom rác bộ nhớ. AI tạo hình khối tốt nhưng thất bại hoàn toàn khi sinh text, yêu cầu sinh viên phải sử dụng phần mềm ngoài để cắt cúp và tự chèn Text Label thủ công (<span class="text-orange-600 font-medium">Can thiệp 50%</span>).',
          '<strong>Giai đoạn 3 (Bố cục tự động - Canva AI):</strong> Áp dụng công cụ Magic Design chuyển khối Text thành Layout Infographic. Tuy nhiên, AI không hiểu đặc thù của code, khiến sinh viên phải tái cấu trúc toàn bộ lưới (Grid) và thiết lập lại font chữ Monospace cho các khối lệnh (<span class="text-orange-600 font-medium">Can thiệp 70%</span>).'
        ],
      },
      {
        heading: 'Đánh giá AI và Đạo đức sáng tạo',
        items: [
          '<strong>AI là "Cỗ máy dựng Mockup":</strong> Quá trình làm việc chứng minh AI giúp phá vỡ rào cản khởi đầu, tạo ra vật liệu thô cực nhanh, nhưng tuyệt đối không thể thay thế tư duy sắp xếp kiến trúc của kỹ sư.',
          '<strong>Nguy cơ ảo giác cực độ:</strong> Việc phụ thuộc AI khi sinh các đoạn code đa luồng tiềm ẩn nguy cơ AI bịa đặt các API không tồn tại. Mọi thông tin đều phải được đối chiếu với tài liệu Official.',
          '<strong>Minh bạch trong học thuật:</strong> Cần rạch ròi ranh giới giữa việc "sử dụng AI để cấu trúc tư duy" và "đạo văn mã nguồn". Báo cáo đã trung thực lượng hóa tỷ lệ % đóng góp của sinh viên vào từng công đoạn.'
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
        heading: 'Thực tế áp dụng AI trong hệ thống Đấu giá Online',
        items: [
          '<strong>Tối ưu Database xuất sắc:</strong> AI đã tư vấn chính xác việc sử dụng <span class="text-emerald-600 font-medium">Composite Index</span> trên MySQL InnoDB, đáp ứng hoàn hảo yêu cầu truy xuất giá thầu (Bid) tốc độ cao của hệ thống.',
          '<strong>Nhận diện mã độc & Lỗi đa luồng:</strong> Chức năng cập nhật Realtime do AI đề xuất sử dụng List thuần đã gây ra lỗi <span class="font-mono text-red-500">ConcurrentModificationException</span>. Sinh viên đã phải tự debug và thiết kế lại bằng <span class="font-mono text-sky-600">CopyOnWriteArrayList</span> và ThreadPool riêng biệt.',
          '<strong>Xử lý Race Condition:</strong> Tình huống hóc búa nhất là code AI sinh ra thiếu khối lệnh <span class="font-mono text-orange-600">try-finally</span> khi thao tác với Lock trong môi trường đấu giá đồng thời, tiềm ẩn nguy cơ khóa chết hệ thống (Deadlock). Khối mã này đã bị loại bỏ và viết lại thủ công hoàn toàn.'
        ],
      },
      {
        heading: 'Bộ 6 nguyên tắc kỹ sư cá nhân',
        items: [
          '<span class="text-orange-600 font-medium">Think First, Prompt Later:</span> Tuyệt đối không dùng AI để bắt đầu từ con số không. Phải có sẵn bản vẽ UML và ý tưởng luồng dữ liệu trước khi đặt câu hỏi.',
          '<span class="text-orange-600 font-medium">Quy tắc giải thích 100%:</span> Bất kỳ dòng lệnh nào (đặc biệt là xử lý Concurrent) đưa vào dự án đều phải được hiểu cặn kẽ. Không hiểu = Xóa bỏ.',
          '<span class="text-orange-600 font-medium">Active Refactoring:</span> Chống lại sự cám dỗ của việc Copy-Paste mù quáng. Bắt buộc phải gõ lại và tái cấu trúc mã theo chuẩn Google Java Style Guide.',
          '<span class="text-orange-600 font-medium">Independent Verification:</span> Coi mọi thông tin AI đưa ra là "có thể sai". Luôn đối chiếu chéo các thư viện phức tạp qua Unit Test (JUnit) độc lập.',
          '<span class="text-orange-600 font-medium">Data Privacy (Bảo mật):</span> Tuyệt đối không đẩy toàn bộ mã nguồn nội bộ của dự án lên nền tảng AI công cộng, chỉ cung cấp mã giả (pseudo-code) để hỏi thuật toán.',
          '<span class="text-orange-600 font-medium">Transparent Disclosure:</span> Trung thực minh bạch trong học thuật. Khai báo rõ ràng các module đã nhờ AI phản biện, khẳng định quyền làm chủ sản phẩm cuối cùng.'
        ],
      },
    ],
    tags: ['AI Ethics', 'Academic Integrity', 'Best Practices', 'ReentrantLock'],
    reportFile: '/reports/bai6.pdf',
  },
];
