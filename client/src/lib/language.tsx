import { useState, createContext, useContext, ReactNode } from "react";

type Language = "en" | "vi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  "nav.about": { en: "About", vi: "Giới thiệu" },
  "nav.experience": { en: "Experience", vi: "Kinh nghiệm" },
  "nav.skills": { en: "Skills", vi: "Kỹ năng" },
  "nav.contact": { en: "Contact", vi: "Liên hệ" },
  "nav.blog": { en: "Blog", vi: "Bài viết" },
  
  "hero.role": { en: "Backend Engineer", vi: "Kỹ sư Backend" },
  "hero.cta": { en: "Contact Me", vi: "Liên hệ ngay" },
  "hero.download": { en: "Download CV", vi: "Tải CV" },
  "hero.description": { 
    en: "Backend engineer passionate about building reliable systems. Curious, hands-on, and eager to explore new technologies.", 
    vi: "Kỹ sư Backend đam mê xây dựng các hệ thống tin cậy. Ham học hỏi, thực tế và luôn sẵn sàng khám phá công nghệ mới."
  },
  
  "section.experience": { en: "Work Experience", vi: "Kinh nghiệm làm việc" },
  "section.skills": { en: "Technical Skills", vi: "Kỹ năng chuyên môn" },
  "section.contact": { en: "Get In Touch", vi: "Liên hệ" },
  
  "experience.present": { en: "Present", vi: "Hiện tại" },
  
  // MoMo Experience
  "exp.momo.role": { en: "Software Engineer I, Merchant", vi: "Kỹ sư phần mềm I, Merchant" },
  "exp.momo.desc": { 
    en: "Serving 40K+ merchant partners across payment integration and mini-app ecosystem.", 
    vi: "Phục vụ hơn 40K đối tác bán hàng thông qua tích hợp thanh toán và hệ sinh thái mini-app." 
  },
  "exp.momo.ach1": { 
    en: "Developed payout & cashout microservices using Java (Spring Boot) for secure fund transfers.", 
    vi: "Phát triển microservices thanh toán & rút tiền sử dụng Java (Spring Boot) để chuyển tiền an toàn." 
  },
  "exp.momo.ach2": { 
    en: "Built Kafka-based event system for real-time synchronization.", 
    vi: "Xây dựng hệ thống sự kiện dựa trên Kafka để đồng bộ hóa thời gian thực." 
  },
  "exp.momo.ach3": { 
    en: "Implemented Redis caching and distributed locks for high-concurrency operations.", 
    vi: "Triển khai Redis caching và khóa phân tán cho các hoạt động đồng thời cao." 
  },
  "exp.momo.ach4": { 
    en: "Automated fund switching and optimized Oracle SQL queries.", 
    vi: "Tự động hóa chuyển quỹ và tối ưu hóa truy vấn Oracle SQL." 
  },

  // Hima Army Experience
  "exp.hima.role": { en: "Backend Java Developer", vi: "Lập trình viên Java Backend" },
  "exp.hima.desc": { 
    en: "F&B tech startup with products: TheCoffeeBox and TheTO Order App.", 
    vi: "Startup công nghệ F&B với các sản phẩm: TheCoffeeBox và TheTO Order App." 
  },
  "exp.hima.ach1": { 
    en: "Designed scalable RESTful APIs using Spring Boot and Quarkus.", 
    vi: "Thiết kế RESTful APIs mở rộng sử dụng Spring Boot và Quarkus." 
  },
  "exp.hima.ach2": { 
    en: "Developed Kafka-based event-driven services for async workflows.", 
    vi: "Phát triển các dịch vụ hướng sự kiện dựa trên Kafka cho quy trình không đồng bộ." 
  },
  "exp.hima.ach3": { 
    en: "Integrated Redis caching to reduce database load.", 
    vi: "Tích hợp Redis caching để giảm tải cơ sở dữ liệu." 
  },
  "exp.hima.ach4": { 
    en: "Built secure payment integrations (VnPay, MoMo, ZaloPay) and OTP verification.", 
    vi: "Xây dựng tích hợp thanh toán an toàn (VnPay, MoMo, ZaloPay) và xác thực OTP." 
  },

  "skills.languages": { en: "Languages & Frameworks", vi: "Ngôn ngữ & Frameworks" },
  "skills.databases": { en: "Databases", vi: "Cơ sở dữ liệu" },
  "skills.infrastructure": { en: "Infrastructure & Cache", vi: "Hạ tầng & Cache" },
  "skills.architecture": { en: "Architecture", vi: "Kiến trúc phần mềm" },

  "award.title": { en: "Ranked 2nd in TechWiz (Mobile Category)", vi: "Hạng 2 cuộc thi TechWiz (Hạng mục Mobile)" },
  "award.desc": { en: "Global competition - August 2023", vi: "Cuộc thi toàn cầu - Tháng 8/2023" },

  "contact.email": { en: "Email", vi: "Email" },
  "contact.phone": { en: "Phone", vi: "Số điện thoại" },
  "contact.education": { en: "Education", vi: "Học vấn" },
  "contact.certificates": { en: "Certificates", vi: "Chứng chỉ" },
  "contact.school": { en: "Information Technology and Programming", vi: "Công nghệ thông tin và Lập trình" },
  "contact.cert.agile": { en: "Managing an Agile Team", vi: "Quản lý nhóm Agile" },

  "blog.title": { en: "Latest Articles", vi: "Bài viết mới nhất" },
  "blog.subtitle": { 
    en: "Sharing insights on backend engineering, system design, and scalability.", 
    vi: "Chia sẻ kiến thức về kỹ thuật backend, thiết kế hệ thống và khả năng mở rộng." 
  },
  "blog.readMore": { en: "Read More", vi: "Đọc thêm" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
