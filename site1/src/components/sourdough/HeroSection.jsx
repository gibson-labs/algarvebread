import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://media.base44.com/images/public/69c45d580787817b3a98b5cb/952d6e6cd_generated_8a74e6bf.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brown-700/60 via-brown-600/40 to-brown-700/70" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-wheat-200/20 border border-wheat-300/40 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
        >
          <span className="text-wheat-200 text-sm font-inter font-medium tracking-widest uppercase">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream-50 leading-tight mb-6"
        >
          {t.hero.headline1}
          <br />
          <em className="text-wheat-300">{t.hero.headline2}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-inter text-cream-200 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#find-me"
            className="group bg-wheat-300 hover:bg-wheat-200 text-brown-700 font-inter font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-brown-900/40 inline-flex items-center gap-2"
          >
            {t.hero.cta}
          </a>
          <a href="#breads" className="font-inter text-cream-200 hover:text-wheat-200 underline underline-offset-4 text-sm transition-colors">
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cream-200/60"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </motion.svg>
      </motion.div>
    </section>
  );
}