import { motion } from "framer-motion";
import { useLanguage } from "../lib/language";

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "M_Service JSC (MoMo E-Wallet)",
      role: t("exp.momo.role"),
      period: "Mar 2025 – " + t("experience.present"),
      description: t("exp.momo.desc"),
      achievements: [
        t("exp.momo.ach1"),
        t("exp.momo.ach2"),
        t("exp.momo.ach3"),
        t("exp.momo.ach4"),
      ]
    },
    {
      company: "Hima Army Co., Ltd",
      role: t("exp.hima.role"),
      period: "Mar 2024 – Mar 2025",
      description: t("exp.hima.desc"),
      achievements: [
        t("exp.hima.ach1"),
        t("exp.hima.ach2"),
        t("exp.hima.ach3"),
        t("exp.hima.ach4"),
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-background">
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
              className="group relative border border-border bg-card rounded-3xl p-8 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="text-lg text-primary font-medium">{exp.company}</div>
                </div>
                <div className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
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
