import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  BarChart3,
  Settings,
  Zap,
  CheckCircle,

} from "lucide-react";
import Amazon from "../../images/img/amazon.png";

import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";

export default function AmazonService() {
  const features = [
    {
      icon: Package,
      title: "Product Listing Automation",
      description:
        "Automatically create and optimize product listings with AI-powered titles, descriptions, and keyword optimization.",
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      description:
        "Real-time inventory synchronization across all channels with automatic stock level monitoring and alerts.",
    },
    {
      icon: Settings,
      title: "Order Processing",
      description:
        "Streamlined order fulfillment with automated tracking updates and customer communication workflows.",
    },
    {
      icon: Zap,
      title: "Price Optimization",
      description:
        "Dynamic pricing strategies based on competitor analysis, demand patterns, and profit margin goals.",
    },
  ];

  const benefits = [
    "Increase sales velocity by up to 300%",
    "Reduce manual processing time by 85%",
    "Improve listing visibility and search rankings",
    "Maintain competitive pricing automatically",
    "Scale operations without additional staff",
    "24/7 automated monitoring and updates",
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
              <img src={Amazon} alt="Amazon" className="h-24 w-24" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            Amazon <span className="text-[#a3e635]">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dominate the world's largest marketplace with our comprehensive
            Amazon automation suite. From listing optimization to order
            fulfillment, we've got your entire Amazon operation covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#a3e635] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-orange-500/20 mr-4">
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

        <Center_Services_Content/>
     
        {/* Benefits Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Why Choose Our Amazon Automation?
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

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Automate Your Amazon Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful sellers who have scaled their Amazon
            operations with our automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started Today
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
