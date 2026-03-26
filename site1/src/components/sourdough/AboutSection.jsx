import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-24 px-6" style={{ background: 'linear-gradient(to bottom, #FDFAF5, #EDF5F3)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brown-200 rounded-2xl" />
              <img
                src="https://media.base44.com/images/public/69c45d580787817b3a98b5cb/5f8c01ce8_generated_f9a910da.png"
                alt="The Baker"
                className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute z-20 -bottom-5 -right-5 bg-brown-500 text-cream-50 font-playfair italic text-sm px-5 py-3 rounded-xl shadow-lg">
                {a.badge}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="font-inter text-sage-500 text-sm font-medium tracking-widest uppercase">
              {a.eyebrow}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl text-brown-600 mt-3 mb-6 leading-tight">
              {a.headline1}<br /><em>{a.headline2}</em>
            </h2>

            <div className="space-y-4 font-inter text-brown-400 leading-relaxed text-[15px]">
              <p>{a.p1}</p>
              <p dangerouslySetInnerHTML={{ __html: a.p2 }} />
              <p>{a.p3}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-brown-100">
              {a.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-playfair text-3xl text-brown-500 font-bold">{stat.number}</div>
                  <div className="font-inter text-brown-300 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}