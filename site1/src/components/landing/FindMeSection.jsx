import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function FindMeSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "You're on the bread list! 🍞",
        description: "We'll send you updates on fresh bakes and pre-orders.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="find-me" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-accent mb-4">
            Where to Find Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Grab a Loaf <span className="italic font-medium">In Person</span>
          </h2>
        </motion.div>

        {/* Schedule Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground text-center mb-16 relative overflow-hidden"
        >
          {/* Decorative grain pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 80%, white 1px, transparent 1px)",
              backgroundSize: "100px 100px, 80px 80px, 120px 120px"
            }} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-6 h-6" />
              <span className="font-body text-sm tracking-[0.2em] uppercase opacity-80">
                Weekly Market
              </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Lehi Farmers Market
            </h3>

            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 opacity-80" />
              <p className="font-body text-lg md:text-xl opacity-90">
                Every Saturday, 8 AM – 1 PM
              </p>
            </div>

            <p className="font-body text-base opacity-70 max-w-md mx-auto mt-4">
              Look for the table with the tall bread baskets and the smell you can follow from the parking lot.
            </p>
          </div>
        </motion.div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-background rounded-3xl p-8 md:p-12 border border-border/50 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent">
              Stay Connected
            </p>
          </div>

          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Join the Bread List
          </h3>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            Get fresh updates on bake days, new flavors, and pre-order windows—straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full px-6 py-3 h-12 font-body bg-muted border-0 focus-visible:ring-primary"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 font-body tracking-wide"
            >
              {isSubmitting ? "Joining..." : "Subscribe"}
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:jake@jakessourdough.com"
              className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}