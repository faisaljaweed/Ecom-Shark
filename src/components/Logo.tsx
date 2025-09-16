import { motion } from 'framer-motion';
import logo from "../images/logo.jpg"
interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
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
    className={`${sizeClasses[size]} rounded-full object-cover`} 
  />
        {/* <svg
          className={`${sizeClasses[size]} text-shark-teal`}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        > */}
          {/* Shark fin shape */}
          {/* <path
            d="M20 4L35 32C35 32 28 28 20 28C12 28 5 32 5 32L20 4Z"
            fill="currentColor"
            className="drop-shadow-sm"
          /> */}
          {/* Inner detail */}
          {/* <path
            d="M20 8L30 28C30 28 25 25 20 25C15 25 10 28 10 28L20 8Z"
            fill="#F97316"
            opacity="0.8"
          /> */}
          {/* Highlight */}
          {/* <path
            d="M20 4L25 16L20 20L15 16L20 4Z"
            fill="white"
            opacity="0.3"
          />
        </svg> */}
      </motion.div>
      
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col"
        >
          <span className={`font-bold ${textSizeClasses[size]} text-white`}>
            EcomSharks
          </span>
          {size === 'lg' && (
            <span className="text-sm text-muted-foreground font-medium -mt-1">
              We scale ecommerce brands with precision.
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
}