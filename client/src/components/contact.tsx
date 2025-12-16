import { motion } from "framer-motion";
import { useLanguage } from "../lib/language";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            {t("section.contact")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t("contact.phone")}</div>
                  <a href="tel:0937655080" className="text-lg font-medium hover:text-primary transition-colors">
                    0937655080
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{t("contact.email")}</div>
                  <a href="mailto:dinhduclt03@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    dinhduclt03@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">GitHub</div>
                  <a href="https://github.com/ducn03" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                    github.com/ducn03
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white/[0.02] border border-white/5 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6">Education</h3>
              <div className="mb-6">
                <div className="text-primary font-medium mb-1">FPT - APTECH</div>
                <div className="text-sm text-muted-foreground">Information Technology and Programming</div>
                <div className="text-xs text-muted-foreground/60 mt-1">2021 - 2023</div>
              </div>
              <div className="border-t border-white/5 pt-6">
                 <h3 className="text-xl font-bold mb-4">Certificates</h3>
                 <div className="text-sm text-muted-foreground">
                   Managing an Agile Team (Dec 2022)
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
