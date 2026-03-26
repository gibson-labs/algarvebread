import React from "react";
import { motion } from "framer-motion";

const BAKER_IMAGE = "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/5f8c01ce8_generated_f9a910da.png";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={BAKER_IMAGE}
                alt="The baker in his kitchen"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-4">
              Meet the Baker
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Baking Bread,
              <br />
              <span className="italic font-medium text-primary">Building Community</span>
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Hey, I'm Jake. What started as a late-night experiment with flour, water, and wild yeast in my home kitchen has turned into something I never expected—a passion that feeds my whole neighborhood.
              </p>
              <p>
                I fell in love with the slow, honest process of sourdough. No shortcuts, no preservatives—just time, patience, and the best local ingredients I can find. Every loaf is shaped by hand, fermented for 24+ hours, and baked with a crust that sings when it cools.
              </p>
              <p>
                There's nothing better than handing someone a warm loaf and watching their face light up. That's why I do this. Bread brings people together, and I'm honored to be a small part of your table.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-16 h-0.5 bg-primary/30" />
              <p className="font-heading italic text-primary text-lg">— Jake</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}