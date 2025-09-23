import { motion } from "framer-motion";
import logo from "../images/Logo3.png";
interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <img
          src={logo}
          alt="EcomSharks Logo"
          className={`${sizeClasses[size]}  `}
        />
      </motion.div>
    </div>
  );
}
