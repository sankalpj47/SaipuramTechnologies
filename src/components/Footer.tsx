import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import saipuramLogo from "@/assets/saipuram-logo.png";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "AI Research Agents", href: "#" },
      { label: "Discovery Engine", href: "#" },
      { label: "Conversational Intelligence", href: "#" },
      { label: "Enterprise Security", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "TBEP", href: "https://tbep.saipuram.in/" },
      { label: "TRACES", href: "https://traces.mbi.in.net/" },
      { label: "TAU-KG", href: "https://tau-kg.mbi.in.net/" },
      { label: "MolGen AI", href: "/products-services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
      
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Research Papers", href: "#" },
    ],
  },
];

const isInternal = (href: string) => href.startsWith("/");

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
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="mb-4">
                <img
                  src={saipuramLogo}
                  alt="Saipuram"
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                Unified AI Science Platform.
                <br />
                Combining Research, Discovery, and Intelligence in one place.
              </p>
            </div>

           {columns.map((col) => (
  <div key={col.title} className="flex flex-col gap-3">
    <span className="text-accent text-sm font-semibold mb-1">{col.title}</span>

    {col.links.map((link) =>
      isInternal(link.href) ? (
        <Link
          key={link.label}
          to={link.href}
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
        >
          {link.label}
        </Link>
      ) : (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
        >
          {link.label}
        </a>
      )
    )}
  </div>
))}
          </div>

          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/40">
              © 2026 Saipuram. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/40">
              AI: From Analysis to Prediction. To Accessible Intelligence.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
