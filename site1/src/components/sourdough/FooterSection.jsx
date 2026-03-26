import React from "react";
import { useLang } from "@/lib/LanguageContext";

export default function FooterSection() {
  const { t } = useLang();
  const f = t.footer;
  const nav = t.nav;

  return (
    <footer className="py-12 px-6" style={{ background: '#5A3E22' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-brown-600/40">
          <div className="text-center md:text-left">
            <div className="font-playfair text-2xl text-cream-50 mb-1">{f.brand}</div>
            <p className="font-inter text-brown-200/60 text-xs">{f.location}</p>
          </div>

          <nav className="flex gap-6">
            {[
              { label: nav.about, href: "#about" },
              { label: nav.process, href: "#process" },
              { label: nav.breads, href: "#breads" },
              { label: nav.findMe, href: "#find-me" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="font-inter text-brown-200/70 hover:text-wheat-200 text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { emoji: "📸", label: "Instagram" },
              { emoji: "👍", label: "Facebook" },
              { emoji: "🎬", label: "TikTok" },
            ].map((s) => (
              <a key={s.label} href="#" title={s.label} className="w-9 h-9 bg-brown-600/40 hover:bg-brown-500/60 rounded-full flex items-center justify-center text-base transition-colors">
                {s.emoji}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8">
          <p className="font-inter text-brown-200/50 text-xs">{f.rights}</p>
          <a href="mailto:lachlan@algarvebreadco.com" className="font-inter text-brown-200/60 hover:text-wheat-200 text-xs transition-colors">
            lachlan@algarvebreadco.com
          </a>
        </div>
      </div>
    </footer>
  );
}