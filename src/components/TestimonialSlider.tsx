import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    content:
      "This solution has completely transformed how we approach our marketing campaigns. The results speak for themselves - we've seen a 300% increase in engagement.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "InnovateCorp",
    content:
      "Exceptional service and outstanding results. The team went above and beyond to deliver exactly what we needed. Highly recommend to anyone looking for quality.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Product Manager",
    company: "StartupHub",
    content:
      "Working with this team has been a game-changer for our product development. Their expertise and dedication are unmatched in the industry.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "FutureTech",
    content:
      "The technical expertise and innovative solutions provided have helped us scale our platform beyond our expectations. Truly impressive work.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Designer",
    company: "CreativeStudio",
    content:
      "Amazing attention to detail and creative solutions. They understood our vision perfectly and delivered beyond our expectations.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "James Smith",
    role: "Founder",
    company: "TechStart",
    content:
      "Professional, reliable, and results-driven. This partnership has been instrumental in our company's growth and success.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

const useResponsiveItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        // lg
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        // md
        setItemsPerPage(2);
      } else {
        // sm
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return itemsPerPage;
};

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = useResponsiveItemsPerPage();

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Reset index when items per page changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  // const handlePrevious = () => {
  //   setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  // };

  // const handleNext = () => {
  //   setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  // };

  const handleDotClick = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
        }`}
      />
    ));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const totalDots = Math.ceil(testimonials.length / itemsPerPage);

  return (
    <section className="py-16 px-4 bg-testimonial-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Our <span className="shark-gradient-text">Client's Say</span>?
          </h2>
          {/* </motion.h2> */}
        </div>

        {/* Testimonial Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentIndex}-${itemsPerPage}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className={`grid gap-6 ${
                  itemsPerPage === 3
                    ? "grid-cols-1 lg:grid-cols-3"
                    : itemsPerPage === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-testimonial rounded-2xl p-6 md:p-8 shadow-testimonial border border-testimonial-border h-full flex flex-col"
                  >
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-primary/20" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg leading-relaxed text-foreground mb-6 font-medium flex-1">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 mt-auto">
                        <motion.img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <div className="hidden md:block">
             
            </div>
          )}
        </div>

        {/* Navigation Dots */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalDots }, (_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                onClick={() => handleDotClick(index * itemsPerPage)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}

        {/* Mobile Navigation */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-4 mt-8 md:hidden">
           
          </div>
        )}
      </div>
    </section>
  );
};
