import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import nabaLogo from "@/assets/Naba.png";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={nabaLogo} alt="Naba" className="h-10" />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isActive("/faq") ? "text-accent" : "text-foreground"
              }`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
