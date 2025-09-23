import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import amazon from "../images/img/amazon.png";
import shopify from "../images/img/Shopify.png";
import tiktok from "../images/img/tiktok.png";
import walmart from "../images/img/Walmart.png";
import ebay from "../images/img/ebay.png";
import etsy from "../images/img/etsy.png";

const services = [
  {
    id: 1,
    icon: (
      <img src={amazon} alt="Amazon" className="w-12 h-12 object-contain" />
    ),
    title: "Amazon Automation",
    link: "#",
    desc: "Full store creation, product sourcing, listing optimization, and account management.",
    tag: "Account setup, sourcing, tracking",
    color: "text-yellow-400",
  },
  {
    id: 2,
    icon: (
      <img src={shopify} alt="Amazon" className="w-12 h-12 object-contain" />
    ),
    title: "Shopify Automation",
    link: "#",
    desc: "Full store creation, product sourcing, listing optimization, and account management.",
    tag: "Store setup, marketing",
    color: "text-green-400",
  },
  {
    id: 3,
    icon: (
      <img src={tiktok} alt="Amazon" className="w-12 h-12 object-contain" />
    ),
    title: "TikTok Automation",
    link: "#",
    desc: "Full store creation, product sourcing, listing optimization, and account management.",
    tag: "Store setup, TikTok ads",
    color: "text-green-400",
  },
  {
    id: 4,
    icon: (
      <img src={walmart} alt="Amazon" className="w-12 h-12 object-contain" />
    ),
    title: "Walmart Automation",
    link: "#",
    desc: "Full store creation, product sourcing, listing optimization, and account management.",
    tag: "Walmart setup, listing",
    color: "text-green-400",
  },
  {
    id: 5,
    icon: <img src={ebay} alt="Amazon" className="w-12 h-12 object-contain" />,
    title: "eBay Automation",
    link: "#",
    desc: "Full store creation, product sourcing, listing optimization, and account management.",
    tag: "eBay setup, listing",
    color: "text-green-400",
  },
  {
    id: 6,
    icon: <img src={etsy} alt="Amazon" className="w-12 h-12 object-contain" />,
    title: "Etsy Automation",
    link: "#",
    desc: "Full store creation, product sourcing, listing optimization, and account management.",
    tag: "Etsy setup, marketing",
    color: "text-green-400",
  },
];

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 270; // Card width + gap

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }
  };

  const navigation = useNavigate();
  return (
    <div className="bg-gray-900 flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 py-12 gap-8 relative">
      {/* LEFT SIDE */}
      <div className="md:w-1/3 flex flex-col justify-center text-white">
        <h2 className="text-yellow-400 font-bold text-lg uppercase">
          Complete Store Management While You Stay Hands-off
        </h2>
        <p className="mt-4 leading-relaxed">
          We manage the entire store setup from scratch including product
          research, sourcing, listing optimization, and marketing strategies.
        </p>
        <div className="flex gap-4 mt-6">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaLinkedin size={20} />
        </div>
        <button
          onClick={() => navigation("/contact")}
          className="bg-lime-400 hover:bg-lime-500 transition-colors px-6 py-3 rounded-lg font-semibold text-green-900 w-fit mt-6"
        >
          Schedule a Call →
        </button>
      </div>
      <div className="md:w-2/3 relative">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10 hidden md:block"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 pb-4 scrollbar-hide overflow-x-auto md:overflow-hidden"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 w-[250px] h-[320px] flex-shrink-0 shadow-lg cursor-pointer"
            >
              <div>{service.icon}</div>
              <h3 className={`mt-4 font-bold text-xl ${service.color}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
              <p className="text-green-600 text-xs mt-3">{service.tag}</p>
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10 hidden md:block"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
