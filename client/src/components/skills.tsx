import { motion } from "framer-motion";
import { useLanguage } from "../lib/language";
import { Database, Server, Terminal, Workflow, Code2, Globe } from "lucide-react";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Java", "Spring Boot", "Quarkus"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Infrastructure & Cache",
      icon: <Server className="w-6 h-6" />,
      skills: ["Redis", "Kafka", "Docker", "CI/CD"]
    },
    {
      title: "Architecture",
      icon: <Workflow className="w-6 h-6" />,
      skills: ["Microservices", "Event-Driven", "Monolithic", "OOP"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-12"
        >
          {t("section.skills")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-black border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Award Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden text-center md:text-left"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-3xl">
              🏆
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Ranked 2nd in TechWiz (Mobile Category)</h3>
              <p className="text-muted-foreground">Global competition - August 2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
