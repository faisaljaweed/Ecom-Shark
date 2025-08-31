import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Store,
  Smartphone,
  Package,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "amazon",
    name: "Amazon",
    icon: Package,
    description:
      "Comprehensive automation for product listing, inventory management, and order processing on Amazon marketplace.",
    features: [
      "Product Listing Automation",
      "Inventory Sync",
      "Order Management",
      "Price Optimization",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "ebay",
    name: "eBay",
    icon: ShoppingCart,
    description:
      "Streamline your eBay operations with automated listing creation, bidding management, and sales tracking.",
    features: [
      "Automated Listings",
      "Bid Management",
      "Sales Analytics",
      "Cross-Platform Sync",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "walmart",
    name: "Walmart",
    icon: Store,
    description:
      "Scale your Walmart marketplace presence with intelligent automation for inventory and order fulfillment.",
    features: [
      "Bulk Product Upload",
      "Real-time Inventory",
      "Order Processing",
      "Performance Analytics",
    ],
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "shopify",
    name: "Shopify",
    icon: TrendingUp,
    description:
      "Complete e-commerce automation solution for your Shopify store with advanced marketing tools.",
    features: [
      "Store Management",
      "Marketing Automation",
      "Customer Insights",
      "Sales Optimization",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    id: "tiktokshop",
    name: "TikTok Shop",
    icon: Smartphone,
    description:
      "Leverage the power of social commerce with automated TikTok Shop management and viral marketing.",
    features: [
      "Social Commerce",
      "Content Automation",
      "Trend Analysis",
      "Viral Marketing",
    ],
    color: "from-pink-500 to-pink-600",
  },
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            E-commerce Automation Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Streamline your online business across multiple platforms with our
            intelligent automation solutions. Scale efficiently and focus on
            growth while we handle the operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="group block transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gray-800 rounded-2xl p-8 h-full border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/10">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${service.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-lime-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center"
                      >
                        <div className="h-1.5 w-1.5 bg-lime-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <button className="bg-[#a3e635] text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 flex items-center group-hover:shadow-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-lime-400 mb-2">500+</div>
            <div className="text-gray-300">Active Clients</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-lime-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-lime-400 mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
