import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Amazon from "../images/img/amazon.png";
import Shopify from "../images/img/Shopify.png";
import Ebay from "../images/img/ebay.png";
import Walmart from "../images/img/Walmart.png";
import TikTok from "../images/img/tiktok.png";
import Etsy from "../images/img/etsy.png";
import GoogleAds from "../images/img/GoogleAds.png";
import Influncer from "../images/img/influncer.png";
import MetaAds from "../images/img/MetaAds.png";
import SocialMedia from "../images/img/Social _Media_Marketing.png";
const services = [
  {
    id: "amazon",
    name: "Amazon",
    icon: Amazon,
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
    icon: Ebay,
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
    icon: Walmart,
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
    icon: Shopify,
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
    icon: TikTok,
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
  // 🔥 New Services
  {
    id: "etsy",
    name: "Etsy",
    icon: Etsy,
    description:
      "Boost your Etsy shop with tailored automation and marketing strategies for handmade and creative products.",
    features: [
      "SEO Optimization",
      "Custom Order Handling",
      "Sales Insights",
      "Customer Engagement",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "influencer",
    name: "Influencer Marketing",
    icon: Influncer,
    description:
      "Grow your brand reach by collaborating with the right influencers across multiple platforms.",
    features: [
      "Influencer Discovery",
      "Campaign Management",
      "Engagement Tracking",
      "ROI Measurement",
    ],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "googleppc",
    name: "Google PPC",
    icon: GoogleAds,
    description:
      "Maximize visibility and drive conversions with targeted Google Ads and pay-per-click campaigns.",
    features: [
      "Keyword Research",
      "Ad Optimization",
      "Conversion Tracking",
      "Budget Management",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    id: "adcampaign",
    name: "Ad Campaign",
    icon: GoogleAds,
    description:
      "Plan and execute high-performing ad campaigns across different platforms for maximum impact.",
    features: [
      "Creative Design",
      "Audience Targeting",
      "Performance Reports",
      "A/B Testing",
    ],
    color: "from-teal-500 to-teal-600",
  },
  {
    id: "metaads",
    name: "Meta Ad Campaign",
    icon: MetaAds,
    description:
      "Run powerful ad campaigns on Facebook and Instagram with advanced targeting and analytics.",
    features: [
      "Precise Audience Targeting",
      "Ad Creative Optimization",
      "Budget Control",
      "Performance Analytics",
    ],
    color: "from-blue-700 to-indigo-600",
  },
  {
    id: "socialmedia",
    name: "Social Media Handling",
    icon: SocialMedia,
    description:
      "Build and maintain your brand’s social presence with complete social media management services.",
    features: [
      "Content Scheduling",
      "Community Management",
      "Analytics Reporting",
      "Brand Growth",
    ],
    color: "from-cyan-500 to-cyan-600",
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
                    className={`p-3 rounded-xl bg-gradient-to-r  mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="h-14 w-14 text-white"
                    />
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
