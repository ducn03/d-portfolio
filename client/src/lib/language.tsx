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
  "hero.role": { en: "Backend Engineer", vi: "Kỹ sư Backend" },
  "hero.cta": { en: "Contact Me", vi: "Liên hệ ngay" },
  "hero.download": { en: "Download CV", vi: "Tải CV" },
  "section.experience": { en: "Work Experience", vi: "Kinh nghiệm làm việc" },
  "section.skills": { en: "Technical Skills", vi: "Kỹ năng chuyên môn" },
  "section.contact": { en: "Get In Touch", vi: "Liên hệ" },
  "contact.email": { en: "Email", vi: "Email" },
  "contact.phone": { en: "Phone", vi: "Số điện thoại" },
  "contact.location": { en: "Location", vi: "Địa chỉ" },
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
