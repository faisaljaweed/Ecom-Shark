// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import {
//   Users,
//   Target,
//   Heart,
//   Award,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// export default function About() {
//   const values = [
//     {
//       icon: Heart,
//       title: "Customer First",
//       description:
//         "Every decision we make starts with our customers. Your satisfaction is our north star.",
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description:
//         "We never settle for good enough. We constantly push boundaries to deliver exceptional experiences.",
//     },
//     {
//       icon: Users,
//       title: "Community",
//       description:
//         "We believe in building lasting relationships and supporting the communities we serve.",
//     },
//     {
//       icon: Target,
//       title: "Innovation",
//       description:
//         "We embrace new technologies and ideas to continuously improve and evolve.",
//     },
//   ];

//   const milestones = [
//     {
//       year: "2020",
//       title: "The Beginning",
//       description:
//         "EcomSharks was born from a vision to revolutionize online shopping with premium quality and exceptional service.",
//     },
//     {
//       year: "2021",
//       title: "Growing Fast",
//       description:
//         "Reached 10,000+ happy customers and expanded our product catalog to over 1,000 premium items.",
//     },
//     {
//       year: "2022",
//       title: "Recognition",
//       description:
//         "Won 'Best Customer Service' award and launched our same-day delivery service in major cities.",
//     },
//     {
//       year: "2023",
//       title: "Innovation",
//       description:
//         "Introduced AI-powered recommendations and sustainable packaging across all shipments.",
//     },
//     {
//       year: "2024",
//       title: "Excellence",
//       description:
//         "Achieved 99.9% customer satisfaction rate and expanded to serve customers nationwide.",
//     },
//   ];
//   const teamStats = [
//     { number: "50+", label: "Team Members" },
//     { number: "100K+", label: "Happy Customers" },
//     { number: "500K+", label: "Orders Delivered" },
//     { number: "99.9%", label: "Satisfaction Rate" },
//   ];
//   return (
//     <>
//       <Helmet>
//         <title>About Us - EcomSharks</title>
//         <meta
//           name="description"
//           content="Learn about EcomSharks' mission, vision, and commitment to exceptional e-commerce experiences."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-br from-sand to-white">
//         <div className="container mx-auto px-4 py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <Users className="h-16 w-16 text-shark-teal mx-auto mb-6" />
//             <h1 className="text-5xl font-bold mb-6">
//               About <span className="shark-gradient-text">EcomSharks</span>
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               We're passionate about scaling ecommerce brands through
//               data-driven strategies and precision marketing that delivers
//               explosive growth.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {[
//               {
//                 icon: <Target className="h-12 w-12 text-shark-teal" />,
//                 title: "Our Mission",
//                 description:
//                   "To help ambitious ecommerce brands achieve sustainable, explosive growth through precision marketing and data-driven optimization strategies.",
//               },
//               {
//                 icon: <Heart className="h-12 w-12 text-coral" />,
//                 title: "Our Values",
//                 description:
//                   "Transparency, results-driven approach, and long-term partnerships built on trust and measurable success.",
//               },
//               {
//                 icon: <Users className="h-12 w-12 text-shark-teal" />,
//                 title: "Our Team",
//                 description:
//                   "Growth marketing experts, conversion specialists, and data analysts dedicated to scaling your brand with precision.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
//                 className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="mb-4 flex justify-center">{item.icon}</div>
//                 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="min-h-screen">
//         {/* Hero Section */}
//         <section className="relative bg-gradient-to-br from-[#0B1220] to-[#0E7490] text-white py-20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//                 Meet the <span className="text-[#F97316]">EcomSharks</span>
//                 <br />
//                 Family
//               </h1>
//               <p className="text-xl mb-8 text-gray-200 leading-relaxed">
//                 We're not just another ecommerce company. We're passionate
//                 innovators on a mission to transform your shopping experience
//                 into something extraordinary.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Our Story */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-6xl mx-auto">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                 <div>
//                   <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                     Our Story
//                   </h2>
//                   <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                     EcomSharks was founded by a team of passionate entrepreneurs
//                     who experienced firsthand the frustrations of online
//                     shopping: slow shipping, poor quality products, and terrible
//                     customer service.
//                   </p>
//                   <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                     We asked ourselves: "What if online shopping could be
//                     different? What if it could be fast, reliable, and actually
//                     enjoyable?"
//                   </p>
//                   <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                     That question became our mission. Today, we're proud to
//                     serve over 100,000 customers who trust us to deliver not
//                     just products, but exceptional experiences that exceed
//                     expectations.
//                   </p>
//                   <div className="flex items-center space-x-2 text-[#0E7490]">
//                     <CheckCircle size={24} />
//                     <span className="text-lg font-semibold">
//                       Trusted by 100,000+ customers worldwide
//                     </span>
//                   </div>
//                 </div>
//                 <div className="bg-[#F5F7FA] rounded-2xl p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                     Why We Started
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-[#F97316] rounded-full mt-3 flex-shrink-0"></div>
//                       <p className="text-gray-700">
//                         Frustrated with slow and unreliable shipping
//                       </p>
//                     </div>
//                     <div className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-[#F97316] rounded-full mt-3 flex-shrink-0"></div>
//                       <p className="text-gray-700">
//                         Disappointed by poor quality products online
//                       </p>
//                     </div>
//                     <div className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-[#F97316] rounded-full mt-3 flex-shrink-0"></div>
//                       <p className="text-gray-700">
//                         Tired of unresponsive customer service
//                       </p>
//                     </div>
//                     <div className="flex items-start space-x-3">
//                       <div className="w-2 h-2 bg-[#F97316] rounded-full mt-3 flex-shrink-0"></div>
//                       <p className="text-gray-700">
//                         Wanted to create something better for everyone
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our Values */}
//         <section className="py-20 bg-[#F5F7FA]">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Our Core Values
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 These principles guide everything we do and shape the way we
//                 serve our customers every single day.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => {
//                 const IconComponent = value.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
//                   >
//                     <div className="w-20 h-20 bg-gradient-to-br from-[#0B1220] to-[#0E7490] rounded-full flex items-center justify-center mx-auto mb-6">
//                       <IconComponent className="text-white" size={32} />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* Timeline */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                 Our Journey
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 From a small startup to a trusted ecommerce leader - here's how
//                 we've grown together.
//               </p>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="relative">
//                 <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#0E7490]"></div>
//                 <div className="space-y-12">
//                   {milestones.map((milestone, index) => (
//                     <div
//                       key={index}
//                       className="relative flex items-start space-x-8"
//                     >
//                       <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
//                         <div className="w-3 h-3 bg-white rounded-full"></div>
//                       </div>
//                       <div className="flex-1 pb-8">
//                         <div className="flex items-center space-x-4 mb-2">
//                           <span className="text-2xl font-bold text-[#0E7490]">
//                             {milestone.year}
//                           </span>
//                           <h3 className="text-xl font-bold text-gray-900">
//                             {milestone.title}
//                           </h3>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">
//                           {milestone.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="py-20 bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold mb-4">By the Numbers</h2>
//               <p className="text-xl text-gray-200">
//                 Our growth is powered by your trust and satisfaction
//               </p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {teamStats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-4xl md:text-5xl font-bold text-[#F97316] mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-lg text-gray-200">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-[#F5F7FA]">
//           <div className="container mx-auto px-4 text-center">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Ready to Join Our Family?
//               </h2>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 Experience the difference that genuine care, premium quality,
//                 and exceptional service can make. Join thousands of customers
//                 who trust EcomSharks for their online shopping needs.
//               </p>
//               <button className="bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 inline-flex items-center space-x-2">
//                 <span>Start Shopping Today</span>
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  // Heart,
  // Lightbulb,
  Shield,
  ShoppingCart,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "10K+", label: "Active Stores" },
    { number: "8+", label: "Years Experience" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "100+", label: "Team Members" },
  ];

  const values = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth",
      description:
        "We help ecommerce businesses scale rapidly with data-driven strategies and cutting-edge technology.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Constantly evolving our platform to stay ahead of ecommerce trends and market demands.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust",
      description:
        "Building secure, reliable solutions that merchants and customers can depend on every day.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description:
        "Empowering businesses to sell worldwide with localized solutions and international expertise.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Chief Executive Officer",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Ecommerce visionary with 12+ years building scalable retail platforms.",
    },
    {
      name: "Maria Santos",
      role: "Chief Technology Officer",
      image:
        "https://images.pexels.com/photos/3211473/pexels-photo-3211473.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Tech leader specializing in high-performance ecommerce infrastructure and AI.",
    },
    {
      name: "David Kim",
      role: "Head of Growth",
      image:
        "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Growth strategist helping brands achieve 10x revenue growth through optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <ShoppingCart className="w-16 h-16 text-lime-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Ecommerce <span className="text-lime-400">Shark</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dominating the digital marketplace with cutting-edge ecommerce
              solutions that drive explosive growth and maximize profits for
              ambitious retailers.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-lime-400/20 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-lime-400/10 rounded-full opacity-40 animate-bounce"></div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Ecommerce Journey
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Founded in 2016, Ecommerce Shark emerged from a simple
                  observation: most online retailers were struggling with
                  outdated platforms and inefficient processes that limited
                  their growth potential.
                </p>
                <p className="text-lg">
                  We started as a small team of ecommerce experts and developers
                  who understood the pain points of scaling online businesses.
                  Our mission was clear - create a platform that could handle
                  massive growth while remaining simple to use.
                </p>
                <p className="text-lg">
                  Today, we power thousands of successful online stores, from
                  ambitious startups to enterprise retailers, helping them
                  achieve unprecedented growth in the competitive digital
                  marketplace.
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ecommerce team collaboration"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-6 -right-6 bg-lime-400 text-green-900 p-6 rounded-xl shadow-xl">
                  <p className="text-sm font-semibold">Since 2016</p>
                  <p className="text-2xl font-bold">8+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-lime-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500 p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-lime-400 mr-4" />
                  <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To revolutionize ecommerce by providing merchants with
                  powerful, intuitive tools that eliminate barriers to online
                  success and unlock unlimited growth potential in the digital
                  marketplace.
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500 p-8 rounded-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <Users className="w-10 h-10 text-lime-400 mr-4" />
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To become the dominant force in ecommerce technology,
                  empowering every entrepreneur to build thriving online
                  businesses that compete with industry giants and reshape
                  global commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The core principles that fuel our relentless pursuit of ecommerce
              excellence and merchant success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Shark Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the ecommerce experts who are revolutionizing online retail
              and driving merchant success worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group bg-gray-700 border border-gray-600 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150 + 1000}ms` }}
              >
                <div className="aspect-w-4 aspect-h-5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-lime-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Ecommerce Shark?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just build ecommerce platforms - we create growth engines
              that transform businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`group bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <ShoppingCart className="w-12 h-12 text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-2xl font-bold text-white mb-4">
                Complete Platform
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Everything you need to run a successful online store - from
                inventory management to payment processing and analytics.
              </p>
            </div>

            <div
              className={`group bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1350ms" }}
            >
              <TrendingUp className="w-12 h-12 text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-2xl font-bold text-white mb-4">
                Proven Results
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Our merchants see an average 300% increase in sales within the
                first year of using our platform.
              </p>
            </div>

            <div
              className={`group bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1500ms" }}
            >
              <Award className="w-12 h-12 text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-2xl font-bold text-white mb-4">
                Expert Support
              </h4>
              <p className="text-gray-300 leading-relaxed">
                24/7 dedicated support from ecommerce specialists who understand
                your business and growth challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful merchants who trust Ecommerce Shark
              to power their growth and maximize their profits.
            </p>
            <button
              className="group text-green-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              style={{ backgroundColor: "#a3e635" }}
            >
              Start Your Success Story
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
