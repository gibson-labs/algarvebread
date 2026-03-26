import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.breads, href: "#breads" },
    { label: t.nav.findMe, href: "#find-me" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brown-500/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-playfair text-xl text-cream-50 hover:text-wheat-200 transition-colors">
          🥖 Marcus' Sourdough
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm text-cream-200/80 hover:text-wheat-200 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#find-me"
            className="bg-wheat-300 hover:bg-wheat-200 text-brown-700 font-inter font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            {t.nav.saturdays}
          </a>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-1 py-1">
            <button
              onClick={() => setLang("en")}
              className={`font-inter text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                lang === "en" ? "bg-wheat-300 text-brown-700" : "text-cream-200/70 hover:text-cream-50"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`font-inter text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                lang === "pt" ? "bg-wheat-300 text-brown-700" : "text-cream-200/70 hover:text-cream-50"
              }`}
            >
              PT
            </button>
          </div>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-1 py-1">
            <button
              onClick={() => setLang("en")}
              className={`font-inter text-xs font-semibold px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "en" ? "bg-wheat-300 text-brown-700" : "text-cream-200/70"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`font-inter text-xs font-semibold px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "pt" ? "bg-wheat-300 text-brown-700" : "text-cream-200/70"
              }`}
            >
              PT
            </button>
          </div>
          <button
            className="text-cream-50 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-0.5 bg-cream-50 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-cream-50 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-cream-50 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown-500/98 backdrop-blur-md border-t border-brown-600/40"
          >
            <nav className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-inter text-cream-200 py-2 border-b border-brown-600/30 text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#find-me"
                onClick={() => setMenuOpen(false)}
                className="bg-wheat-300 text-brown-700 font-inter font-semibold text-sm px-5 py-3 rounded-full text-center mt-2"
              >
                {t.nav.saturdays}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}