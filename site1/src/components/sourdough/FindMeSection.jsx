import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function FindMeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();
  const f = t.findMe;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      id="find-me"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(to bottom, #F5F0EA, #EAF0ED)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-inter text-sage-500 text-sm font-medium tracking-widest uppercase">
            {f.eyebrow}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-600 mt-3 mb-4">
            {f.headline}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #9E7850 0%, #7E5C38 100%)' }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)" }}
          />
          <div className="relative p-10 md:p-14 text-center">
            <div className="text-6xl mb-6">🏪</div>
            <h3 className="font-playfair text-3xl md:text-4xl text-cream-50 mb-2">{f.marketName}</h3>
            <p className="font-inter text-wheat-300 text-sm uppercase tracking-widest font-medium mb-6">{f.marketSub}</p>
            <div className="inline-flex items-center gap-3 bg-wheat-300 text-brown-700 rounded-full px-8 py-4 font-inter font-bold text-lg mb-8 shadow-xl">
              {f.marketTime}
            </div>
            <p className="font-inter text-cream-200/80 text-base max-w-md mx-auto leading-relaxed">{f.marketDesc}</p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {f.pills.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 font-inter text-cream-100 text-sm"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-brown-100"
          >
            <div className="text-3xl mb-4">📬</div>
            <h3 className="font-playfair text-2xl text-brown-600 mb-2">{f.listTitle}</h3>
            <p className="font-inter text-brown-300 text-sm mb-6 leading-relaxed">{f.listDesc}</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage-50 border border-sage-200 rounded-xl p-5 text-center"
              >
                <div className="text-3xl mb-2">🎉</div>
                <p className="font-playfair text-sage-600 text-lg">{f.successTitle}</p>
                <p className="font-inter text-sage-500 text-sm mt-1">{f.successSub}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.placeholder}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brown-200 font-inter text-sm text-brown-500 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-brown-300 placeholder:text-brown-200"
                />
                <button
                  type="submit"
                  className="w-full bg-brown-500 hover:bg-brown-600 text-cream-50 font-inter font-semibold py-3 rounded-xl text-sm transition-colors duration-200"
                >
                  {f.cta}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-brown-100"
          >
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-playfair text-2xl text-brown-600 mb-2">{f.followTitle}</h3>
            <p className="font-inter text-brown-300 text-sm mb-6 leading-relaxed">{f.followDesc}</p>

            <div className="space-y-3">
              {[
                { platform: "Instagram", handle: "@marcusbakes", emoji: "📸", bg: "bg-gradient-to-r from-purple-50 to-pink-50", border: "border-purple-100", text: "text-purple-600" },
                { platform: "Facebook", handle: "Marcus' Sourdough", emoji: "👍", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-600" },
                { platform: "TikTok", handle: "@marcusbakes", emoji: "🎬", bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-800" },
              ].map((social) => (
                <a
                  key={social.platform}
                  href="#"
                  className={`flex items-center gap-4 ${social.bg} border ${social.border} rounded-xl px-4 py-3 hover:scale-[1.02] transition-transform duration-200 group`}
                >
                  <span className="text-2xl">{social.emoji}</span>
                  <div>
                    <div className={`font-inter font-semibold text-sm ${social.text}`}>{social.platform}</div>
                    <div className="font-inter text-brown-300 text-xs">{social.handle}</div>
                  </div>
                  <span className="ml-auto font-inter text-xs text-brown-200 group-hover:text-brown-400 transition-colors">Follow →</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}