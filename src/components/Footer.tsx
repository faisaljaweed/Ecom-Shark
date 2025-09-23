import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";
import Stripe from "../images/Stripe.webp";
import Shopify from "../images/shopify.webp";
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Contact", path: "/contact" },
];

const services = [
  { name: "Amazon", path: "/service/amazon" },
  {
    name: "Walmart",
    path: "/service/walmart",
  },
  { name: "ebay", path: "/service/ebay" },
  { name: "Tiktok shop", path: "/service/tiktokshop" },
  { name: "Shopify", path: "/service/shopify" },
];

const legal = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "" },
  { name: "Twitter", icon: Twitter, href: "" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "",
  },
  { name: "YouTube", icon: Youtube, href: "" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-shark-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-6" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              We scale ecommerce brands with precision through data-driven
              strategies, conversion optimization, and growth marketing that
              delivers explosive results.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-[#a3e635]" />
                <span className="text-sm">+1 (909) 7435903</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-[#a3e635]" />
                <span className="text-sm">info@ecomsharkz.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-[#a3e635]" />
                <span className="text-sm">
                  3549 Iowa Avenue, Riverside, CA 92507
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#a3e635] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-[#a3e635] transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-[#a3e635] transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    // target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-lime-400/20 hover:text-[#a3e635] transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
        {/* Stripe Payment */}
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-between pt-6">
          <div className="w-100 sm:w-40 md:w-[40%]">
            <img
              alt="Shopify"
              src={Shopify}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-100 sm:w-40 md:w-[40%]">
            <img
              alt="Stripe"
              src={Stripe}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} EcomSharks. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with precision for explosive growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
