import React from "react";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-semibold text-foreground">
              Jake's Sourdough
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Handcrafted in Lehi, Utah
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:jake@jakessourdough.com"
              className="hover:text-foreground transition-colors"
            >
              jake@jakessourdough.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jake's Sourdough. All rights reserved. Made with flour, water, salt & love.
          </p>
        </div>
      </div>
    </footer>
  );
}