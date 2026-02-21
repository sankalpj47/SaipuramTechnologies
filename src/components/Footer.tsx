import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary rounded-t-[3rem] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-display font-bold text-lg">S</span>
                </div>
                <span className="font-display text-xl text-primary-foreground">
                  Saipuram
                </span>
              </div>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                AI-Powered Pharma Intelligence.
                <br />
                Empowering innovation from molecule to market.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <span className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-2">Navigation</span>
              <a href="/#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">About</a>
              <Link to="/products-services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Products & Services</Link>
              <Link to="/case-studies" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Case Studies</Link>
              <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Blog</Link>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Contact</a>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
              <span className="text-primary-foreground/40 text-xs uppercase tracking-wider mb-2">Resources</span>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/40">
              © 2025 Saipuram Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
