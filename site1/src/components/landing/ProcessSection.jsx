import React from "react";
import { motion } from "framer-motion";
import { Sprout, Clock, Flame } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    number: "01",
    title: "The Starter",
    description:
      "It all begins with a living sourdough culture, carefully nurtured over years. Fed daily with organic flour and filtered water, our starter is the soul of every loaf—bringing complex flavors and natural leavening.",
  },
  {
    icon: Clock,
    number: "02",
    title: "The Long Ferment",
    description:
      "No rush, no shortcuts. Each batch ferments for 24 to 48 hours, developing deep flavor, a tender crumb, and the signature tang that only time can create. This slow process also makes the bread easier to digest.",
  },
  {
    icon: Flame,
    number: "03",
    title: "The Bake",
    description:
      "Scored by hand and baked in a screaming-hot stone oven, each loaf develops a thick, crackling crust with a soft, airy interior. The kind of bread that fills your kitchen with an aroma you'll never forget.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-4">
            Our Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Made the <span className="italic font-medium">Traditional</span> Way
          </h2>
          <p className="font-body text-muted-foreground mt-5 max-w-2xl mx-auto text-base md:text-lg">
            Real sourdough takes time. Here's how we turn three simple ingredients into something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-background rounded-2xl p-8 md:p-10 h-full border border-border/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                {/* Number */}
                <span className="font-heading text-6xl font-bold text-primary/10 absolute top-4 right-6">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}