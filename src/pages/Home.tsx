import {  motion } from "framer-motion";

import { TrendingUp, Users, Award, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";
import Testiimonial from "@/lib/Testimonial/Testimonial";
import ServicesSection from "@/components/Section";
import PartnershipSection from "@/components/PartnershipSection";
import HomeSection from "@/components/HomeSection";
import RotatingIcons from "@/components/AnimatedAutoCircle";
import FAQSection from "@/components/HomeImportantQuery";
import ComparisonSection from "@/components/ComparisionSection";
// import dashboardImg from "../images/dashvoard.jpg";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import img1 from "../images/Slider/1.jpg";
import img2 from "../images/Slider/2.jpg";
import img3 from "../images/Slider/3.jpg";
import OfferTag from "@/components/OfferTag";

const images = [img1, img2, img3];
export default function Home() {
  // const navigation=useNavigate()
  const [, setCurrent] = useState(0);

  // Auto change image after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
     const [currentIndex, setCurrentIndex] = useState(0);
     
     
     useEffect(() => {
     const interval = setInterval(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     }, 3000); // 3 seconds interval
     
     
     return () => clearInterval(interval);
     }, []);
  return (
    <>
      <div className="min-h-screen ">
        <OfferTag />

<div className="relative w-full overflow-hidden">
  <div
    className="flex transition-transform duration-700"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((img, index) => (
      <div
        key={index}
        className="w-full flex-shrink-0 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-screen"
      >
        <img
  src={img}
  alt={`Slide ${index}`}
  className="w-full h-full object-contain sm:object-cover"
/>

      </div>
    ))}
  </div>
</div>

        {/* <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container py-20 lg:h-[90vh] md:h-[60vh] sm:h-[40vh] rounded-2xl shadow-lg overflow-hidden"
        >
          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 4 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[current]})`,
              }}
            />
          </AnimatePresence>
        </motion.section> */}
        

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto px-4 py-20 bg-[#1e272e]"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white pb-3">
              Why <span className="text-lime-400">EcomSharks</span>
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to
              deliver exceptional growth for your brand
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp className="h-12 w-12 text-shark-teal" />,
                title: "Explosive Growth",
                description:
                  "Average 300% revenue increase within 6 months through our proven scaling strategies",
              },
              {
                icon: <Users className="h-12 w-12 text-coral" />,
                title: "Expert Team",
                description:
                  "Dedicated specialists in conversion optimization, paid ads, and growth marketing",
              },
              {
                icon: <Award className="h-12 w-12 text-shark-teal" />,
                title: "Proven Results",
                description:
                  "Over 500+ successful brand transformations with measurable ROI and sustainable growth",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="py-20 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ready to <span className="text-lime-400">Start Shopping</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the
              EcomSharks difference today.
            </p>
            <Link
              to="/service"
              className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 inline-flex items-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.section>
        <section>
          <RotatingIcons />
        </section>
        <section className=" bg-[#1e272e]">
          <Testiimonial />
        </section>
        <section className="py-20 bg-[#1e272e]">
          <ServicesSection />
        </section>
        <ComparisonSection />
        <PartnershipSection />
        <HomeSection />
        <FAQSection />
      </div>
    </>
  );
}
