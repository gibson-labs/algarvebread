import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const breadImages = [
  "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/806887c1c_generated_7ff52db1.png",
  "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/2354b08d6_generated_e2d2e2d8.png",
  "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/67e5762f8_generated_88c92460.png",
  "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/8a4fc3d5f_generated_3d8815ec.png",
  "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/614e7740a_generated_4f3e9094.png",
  "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/f588ffa5b_generated_6af0cabd.png",
];

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useLang();
  const g = t.gallery;

  return (
    <section id="breads" className="py-24 px-6" style={{ background: '#FDFAF5' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-inter text-sage-500 text-sm font-medium tracking-widest uppercase">
            {g.eyebrow}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-600 mt-3 mb-4">
            {g.headline}
          </h2>
          <p className="font-inter text-brown-300 max-w-md mx-auto text-base leading-relaxed">
            {g.sub}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {g.breads.map((bread, i) => (
            <motion.div
              key={bread.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={breadImages[i]}
                  alt={bread.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-700/80 via-brown-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 bg-wheat-300 text-brown-700 font-inter text-xs font-bold px-3 py-1 rounded-full">
                  {bread.tag}
                </div>
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-0 left-0 right-0 p-4"
                    >
                      <p className="font-inter text-cream-100 text-sm leading-relaxed">{bread.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="bg-cream-100 px-5 py-4 border-t border-brown-100">
                <h3 className="font-playfair text-lg text-brown-600">{bread.name}</h3>
                <p className="font-inter text-brown-300 text-xs mt-1">{g.available}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center font-inter text-brown-300 text-sm mt-10"
        >
          {g.note}
        </motion.p>
      </div>
    </section>
  );
}