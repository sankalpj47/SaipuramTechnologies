import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">S</span>
            </div>
            <span className="font-display font-semibold text-xl text-foreground">
              Saipuram
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Link to="/products-services" className="text-muted-foreground hover:text-foreground transition-colors">
              Products & Services
            </Link>
            <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors">
              Value
            </a>
            <Button className="gradient-bg text-primary-foreground hover:opacity-90">
              Contact Us
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Link to="/products-services" className="text-muted-foreground hover:text-foreground transition-colors">
              Products & Services
            </Link>
            <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors">
              Value
            </a>
            <Button className="gradient-bg text-primary-foreground hover:opacity-90 w-full">
              Contact Us
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
