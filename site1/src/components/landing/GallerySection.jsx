import React from "react";
import { motion } from "framer-motion";

const breads = [
  {
    image: "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/806887c1c_generated_7ff52db1.png",
    name: "Classic Country Loaf",
    description: "Our signature — crispy crust, open crumb",
  },
  {
    image: "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/2354b08d6_generated_e2d2e2d8.png",
    name: "Jalapeño Cheddar",
    description: "A spicy, cheesy crowd favorite",
  },
  {
    image: "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/67e5762f8_generated_88c92460.png",
    name: "Rosemary Olive Oil",
    description: "Fragrant herbs meet golden crust",
  },
  {
    image: "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/8a4fc3d5f_generated_3d8815ec.png",
    name: "Seeded Multigrain",
    description: "Packed with seeds & whole grains",
  },
  {
    image: "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/614e7740a_generated_4f3e9094.png",
    name: "Cinnamon Raisin",
    description: "A sweet twist on sourdough",
  },
  {
    image: "https://media.base44.com/images/public/69c45d580787817b3a98b5cb/f588ffa5b_generated_6af0cabd.png",
    name: "Everything Sourdough",
    description: "All the toppings, all the flavor",
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-4">
            The Bread
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Fresh From the <span className="italic font-medium">Oven</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {breads.map((bread, index) => (
            <motion.div
              key={bread.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={bread.image}
                  alt={bread.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white mb-1">
                      {bread.name}
                    </h3>
                    <p className="font-body text-sm text-white/80">
                      {bread.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Always-visible caption on mobile */}
              <div className="mt-3 sm:hidden">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {bread.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {bread.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}