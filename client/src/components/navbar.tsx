import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useLanguage } from "../lib/language";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { label: t("nav.experience"), href: "/#experience" },
    { label: t("nav.skills"), href: "/#skills" },
    { label: t("nav.blog"), href: "/blog" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // If it's a hash link and we're already on home, scroll manually
    if (href.startsWith("/#")) {
      if (location === "/") {
        const id = href.replace("/", "");
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div 
            className="text-xl font-bold font-serif cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Duc Nguyen
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a 
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </Link>
          ))}
          
          <div className="h-4 w-px bg-border mx-2" />

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full w-9 h-9"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full w-9 h-9"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <span className="uppercase">{language}</span>
          </Button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2 ml-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <a 
                onClick={() => handleNavClick(item.href)}
                className="text-lg font-medium text-left py-2 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
