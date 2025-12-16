import { motion } from "framer-motion";
import { useLanguage } from "../lib/language";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Mail, Phone } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-muted-foreground mb-8">
              {t("hero.role")}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50"
          >
            Nguyen Dinh Duc
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Backend engineer passionate about building reliable systems. 
            Curious, hands-on, and eager to explore new technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full text-base h-14 px-8"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta")} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base h-14 px-8 border-white/10 hover:bg-white/5"
              onClick={() => window.open('/attached_assets/CV_-_NGUYEN_DINH_DUC_-_SWE_1.5_1765859334694.pdf', '_blank')}
            >
              {t("hero.download")} <Download className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
    </section>
  );
}
