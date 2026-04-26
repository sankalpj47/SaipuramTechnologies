import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "@/assets/header-logo.svg";

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
          <Link to="/" className="flex items-center gap-2">
            <img src={headerLogo} alt="Saipuram Technologies" className="h-14 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base font-medium hover:scale-105"
            >
              About
            </a>
            <Link to="/products-services" className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base font-medium hover:scale-105">
              Products & Services
            </Link>
            <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base font-medium hover:scale-105">
              Case Studies
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base font-medium hover:scale-105">
              Blog
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-all duration-200 text-base font-medium hover:scale-105">
              Contact
            </Link>
            <a href="https://tbep.saipuram.in/" target="_blank" rel="noopener noreferrer">
  <Button className="bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-105 transition-all duration-200 rounded-full px-8 py-3 text-base">
    Launch TBEP
  </Button>
</a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
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
            <Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full">
              Launch TBEP
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
