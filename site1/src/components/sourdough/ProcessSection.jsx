import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const stepColors = [
  { color: "bg-sage-50 border-sage-200", accent: "text-sage-500" },
  { color: "bg-wheat-100 border-wheat-300", accent: "text-brown-400" },
  { color: "bg-brown-50 border-brown-200", accent: "text-brown-500" },
];

export default function ProcessSection() {
  const { t } = useLang();
  const p = t.process;

  return (
    <section
      id="process"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(135deg, #7E5C38 0%, #9E7850 50%, #7E5C38 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-inter text-wheat-200 text-sm font-medium tracking-widest uppercase">
            {p.eyebrow}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream-50 mt-3 mb-4">
            {p.headline}
          </h2>
          <p className="font-inter text-cream-200/70 max-w-xl mx-auto text-base leading-relaxed">
            {p.sub}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {p.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border ${stepColors[i].color} p-8 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="absolute top-4 right-6 font-playfair text-7xl font-bold text-brown-200/30 select-none leading-none">
                {step.number}
              </div>
              <div className="text-5xl mb-5">{step.icon}</div>
              <h3 className="font-playfair text-2xl text-brown-600 mb-1">{step.title}</h3>
              <span className={`font-inter text-xs font-semibold uppercase tracking-wider ${stepColors[i].accent}`}>
                {step.subtitle}
              </span>
              <div className="my-4 h-px bg-brown-200/50" />
              <p className="font-inter text-brown-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-playfair italic text-cream-200/60 mt-12 text-lg"
        >
          {p.quote}
        </motion.p>
      </div>
    </section>
  );
}