import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import {
  // Zap,
  // Shield,
  // Star,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
// import Logo from "@/components/Logo";
import { Link, useNavigate } from "react-router-dom";
import Testiimonial from "@/lib/Testimonial/Testimonial";
import ServicesSection from "@/components/Section";
import PartnershipSection from "@/components/PartnershipSection";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  const navigation = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-sand to-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20 relative bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            >
              Build, Scale & Dominate Ecommerce
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-gray-200"
            >
              Full-stack growth for marketplaces and DTC—strategy, execution,
              and analytics in one place.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="bg-[#a3e635]  text-green-900 font-semibold px-6 py-3 rounded-lg transition duration-300">
                Get Started
              </button>
              <button
                onClick={() => navigation("/about")}
                className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition duration-300"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="container mx-auto px-4 py-20 bg-[#1e272e]"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Why <span className="text-white">EcomSharks</span>?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to
              deliver exceptional growth for your brand
            </p>
          </div>

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <section className="py-20 bg-[#1e272e]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Shopping?
              </h2>
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
            </div>
          </section>
        </motion.section>
        <section className=" bg-[#1e272e]">
          <Testiimonial />
        </section>
        <section className="py-20 bg-[#1e272e]">
          <ServicesSection />
        </section>
        <PartnershipSection />
        <HomeSection />
      </div>
    </>
  );
}
