import { motion } from "framer-motion";
import { useLanguage } from "../lib/language";
import { Navbar } from "../components/navbar";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "wouter";

// Mock Data for Blog Posts
const BLOG_POSTS = [
  {
    id: 1,
    title: {
      en: "Scaling Microservices with Spring Boot and Kafka",
      vi: "Mở rộng Microservices với Spring Boot và Kafka"
    },
    excerpt: {
      en: "Learn how we handled high-throughput payment processing by decoupling services using an event-driven architecture.",
      vi: "Tìm hiểu cách chúng tôi xử lý thanh toán lưu lượng lớn bằng cách tách rời các dịch vụ sử dụng kiến trúc hướng sự kiện."
    },
    date: "2025-03-10",
    readTime: { en: "8 min read", vi: "8 phút đọc" },
    category: "Backend",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: {
      en: "Optimizing Database Performance with Redis Caching",
      vi: "Tối ưu hóa hiệu suất cơ sở dữ liệu với Redis Caching"
    },
    excerpt: {
      en: "Strategies for implementing effective caching layers to reduce database load and improve API response times.",
      vi: "Các chiến lược triển khai lớp caching hiệu quả để giảm tải cơ sở dữ liệu và cải thiện thời gian phản hồi API."
    },
    date: "2025-02-15",
    readTime: { en: "6 min read", vi: "6 phút đọc" },
    category: "Database",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: {
      en: "Building Reliable Payment Systems: Lessons Learned",
      vi: "Xây dựng hệ thống thanh toán tin cậy: Bài học kinh nghiệm"
    },
    excerpt: {
      en: "Key principles for ensuring transactional integrity, handling idempotency, and managing distributed transactions.",
      vi: "Các nguyên tắc chính để đảm bảo tính toàn vẹn giao dịch, xử lý tính lũy đẳng và quản lý giao dịch phân tán."
    },
    date: "2025-01-20",
    readTime: { en: "10 min read", vi: "10 phút đọc" },
    category: "System Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Blog() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain" />
      <Navbar />
      
      <main className="pt-32 pb-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {t("blog.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title[language]} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime[language]}
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title[language]}
                </h2>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                  {post.excerpt[language]}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <User className="w-4 h-4" />
                    Duc Nguyen
                  </div>
                  <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("blog.readMore")} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Nguyen Dinh Duc. All rights reserved.</p>
      </footer>
    </div>
  );
}
