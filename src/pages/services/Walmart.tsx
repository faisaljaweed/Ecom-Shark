import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Store,
  Upload,
  RefreshCw,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Walmart from "../../images/img/Walmart.png";
import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";
export default function WalmartService() {
  const features = [
    {
      icon: Upload,
      title: "Bulk Product Upload",
      description:
        "Efficiently upload thousands of products to Walmart Marketplace with automated data formatting and validation.",
    },
    {
      icon: RefreshCw,
      title: "Real-time Inventory Sync",
      description:
        "Keep your inventory levels accurate across all channels with instant synchronization and low-stock alerts.",
    },
    {
      icon: Store,
      title: "Order Processing Hub",
      description:
        "Centralized order management system that automates fulfillment workflows and shipping notifications.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Advanced analytics dashboard providing insights into sales trends, customer behavior, and market opportunities.",
    },
  ];

  const benefits = [
    "Reduce product onboarding time by 90%",
    "Eliminate inventory discrepancies",
    "Automate compliance with Walmart standards",
    "Optimize product visibility and rankings",
    "Streamline returns and refund processing",
    "Scale to handle enterprise-level volumes",
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
              {/* <Store className="h-16 w-16 text-white" /> */}
              <img src={Walmart} alt="Walmart" className="h-24 w-24 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold  text-white mb-6 bg-clip-text text-transparent">
            Walmart <span className="text-[#a3e635]">Marketplace</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock the potential of America's largest retailer with
            enterprise-grade automation tools designed to scale your business on
            Walmart Marketplace efficiently and profitably.
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
                <div className="p-2 rounded-lg bg-blue-600/20 mr-4">
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
            Walmart Marketplace Advantages
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
            Scale Your Walmart Marketplace Presence
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to leverage Walmart's massive customer base and grow
            your business exponentially.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started Now
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
