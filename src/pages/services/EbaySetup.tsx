import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  Target,
  DollarSign,
  Zap,
  CheckCircle,
} from "lucide-react";

import ebay from "../../images/img/ebay.png";
import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";
export default function EbayService() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Automated Listing Creation",
      description:
        "Generate compelling eBay listings with optimized titles, descriptions, and competitive pricing strategies.",
    },
    {
      icon: Target,
      title: "Bid Management",
      description:
        "Smart bidding algorithms that maximize your winning chances while maintaining optimal profit margins.",
    },
    {
      icon: DollarSign,
      title: "Sales Analytics",
      description:
        "Comprehensive reporting and analytics to track performance, identify trends, and optimize your strategy.",
    },
    {
      icon: Zap,
      title: "Cross-Platform Sync",
      description:
        "Seamlessly synchronize inventory, pricing, and product data across multiple sales channels.",
    },
  ];

  const benefits = [
    "Boost auction win rates by 40%",
    "Save 10+ hours weekly on listing management",
    "Optimize pricing for maximum profitability",
    "Automate feedback and customer communication",
    "Monitor competitor activities in real-time",
    "Integrate with your existing tools and workflows",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/service"
          className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl ">
           
              <img src={ebay} alt="eBay" className="h-24 w-24 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            EBay <span className="text-[#a3e635]"> Automation </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master the art of eBay selling with intelligent automation tools
            designed to maximize your profits and minimize your workload in the
            competitive auction marketplace.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#a3e635] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 mr-4">
                  <feature.icon className="h-6 w-6 text-[#a3e635]" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            eBay Success Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 text-lime-400 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <Center_Services_Content/>
        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Start Winning More Auctions Today
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your eBay selling strategy with powerful automation that
            works around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
