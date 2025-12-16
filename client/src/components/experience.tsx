import { motion } from "framer-motion";
import { useLanguage } from "../lib/language";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "M_Service JSC (MoMo E-Wallet)",
      role: "Software Engineer I, Merchant",
      period: "Mar 2025 – Present",
      description: "Serving 40K+ merchant partners across payment integration and mini-app ecosystem.",
      achievements: [
        "Developed payout & cashout microservices using Java (Spring Boot) for secure fund transfers.",
        "Built Kafka-based event system for real-time synchronization.",
        "Implemented Redis caching and distributed locks for high-concurrency operations.",
        "Automated fund switching and optimized Oracle SQL queries."
      ]
    },
    {
      company: "Hima Army Co., Ltd",
      role: "Backend Java Developer",
      period: "Mar 2024 – Mar 2025",
      description: "F&B tech startup with products: TheCoffeeBox and TheTO Order App.",
      achievements: [
        "Designed scalable RESTful APIs using Spring Boot and Quarkus.",
        "Developed Kafka-based event-driven services for async workflows.",
        "Integrated Redis caching to reduce database load.",
        "Built secure payment integrations (VnPay, MoMo, ZaloPay) and OTP verification."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12"
        >
          {t("section.experience")}
        </motion.h2>

        <div className="grid gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-white/5 bg-white/[0.02] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="text-lg text-primary/80 font-medium">{exp.company}</div>
                </div>
                <div className="text-sm font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
