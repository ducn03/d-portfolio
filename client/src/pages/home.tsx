import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { LanguageProvider } from "@/lib/language";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
        <div className="grain" />
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5">
          <p>© {new Date().getFullYear()} Nguyen Dinh Duc. All rights reserved.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}
