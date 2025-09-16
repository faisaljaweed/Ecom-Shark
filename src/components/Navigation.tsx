
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  revenue: z.string().min(1, "Please select your revenue range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ✅ Dropdown remove karke simple Services link
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" }, // direct link
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsModalOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const onSubmit = (data: ContactFormData) => {
    console.log("Growth plan request:", data);
    alert("Thank you! We'll send your free growth plan within 24 hours.");
    reset();
    setIsModalOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-transparent backdrop-blur-md border-b border-border/50 shadow-lg"
            : "bg-[#1e272e] backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/">
              <Logo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {/* ✅ Simple Link Only */}
                  <Link
                    to={item.path}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors hover:text-[#a3e635]",
                      location.pathname === item.path
                        ? "text-[#a3e635]"
                        : "text-white"
                    )}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-900"
                      />
                    )}
                  </Link>

                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#a3e635] text-green-900 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                Get a Free Growth Plan
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-muted-foreground hover:text-shark-teal transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden py-4 border-t border-border/50"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-3 text-sm font-medium transition-colors hover:text-shark-teal hover:bg-sand/50 rounded-lg",
                      location.pathname === item.path
                        ? "text-shark-teal bg-shark-teal/10"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full mt-4 px-6 py-3 shark-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg text-sm"
                >
                  Get a Free Growth Plan
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-[#18202f] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl text-white font-bold shark-gradient-text">
                      Get Your Free Growth Plan
                    </h2>
                    <p className="text-muted-foreground mt-2 text-white">
                      Tell us about your brand and we'll create a custom growth
                      strategy
                    </p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="block text-sm text-white font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="modal-name"
                        className="w-full px-4 py-3 rounded-lg border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="modal-email"
                        className="block text-sm text-white font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        id="modal-email"
                        className="w-full px-4 py-3 rounded-lg border border-border text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company + Revenue */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="modal-company"
                        className="block text-sm text-white font-medium text-foreground mb-2"
                      >
                        Company *
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        id="modal-company"
                        className="w-full px-4 py-3 rounded-lg border border-border text-white placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="modal-revenue"
                        className="block text-sm text-white font-medium text-foreground mb-2"
                      >
                        Monthly Revenue *
                      </label>
                      <select
                        {...register("revenue")}
                        id="modal-revenue"
                        className="w-full px-4 py-3 rounded-lg border border-border text-black/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select revenue range</option>
                        <option value="0-10k">$0 - $10k</option>
                        <option value="10k-50k">$10k - $50k</option>
                        <option value="50k-100k">$50k - $100k</option>
                        <option value="100k-500k">$100k - $500k</option>
                        <option value="500k+">$500k+</option>
                      </select>
                      {errors.revenue && (
                        <p className="mt-1 text-sm text-destructive">
                          {errors.revenue.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="modal-message"
                      className="block text-sm text-white font-medium text-foreground mb-2"
                    >
                      Tell us about your growth goals *
                    </label>
                    <textarea
                      {...register("message")}
                      id="modal-message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="What are your biggest challenges? What growth goals do you want to achieve?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#a3e635] text-green-900 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
                  >
                    <Send className="h-5 w-5" />
                    Get My Free Growth Plan
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
