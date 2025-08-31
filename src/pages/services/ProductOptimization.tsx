import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Search,
  TrendingUp,
  Target,
  Eye,
  Star,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductOptimization: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description:
        "In-depth keyword analysis to improve your product discoverability.",
    },
    {
      icon: Eye,
      title: "Title Optimization",
      description:
        "Craft compelling product titles that rank higher and convert better.",
    },
    {
      icon: Star,
      title: "Description Enhancement",
      description: "Write persuasive product descriptions that drive sales.",
    },
    {
      icon: Target,
      title: "Image Optimization",
      description:
        "Optimize product images for better visibility and engagement.",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description:
        "Monitor and analyze your listing performance with detailed reports.",
    },
    {
      icon: BarChart3,
      title: "Competitor Analysis",
      description: "Stay ahead of competitors with strategic market insights.",
    },
  ];

  const results = [
    {
      metric: "Search Ranking",
      improvement: "+250%",
      description: "Average improvement in search visibility",
    },
    {
      metric: "Click-Through Rate",
      improvement: "+180%",
      description: "Increase in product page visits",
    },
    {
      metric: "Conversion Rate",
      improvement: "+120%",
      description: "Boost in sales conversion",
    },
    {
      metric: "Revenue Growth",
      improvement: "+300%",
      description: "Average revenue increase",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Audit & Analysis",
      description:
        "Comprehensive review of your current listings and competitor analysis.",
    },
    {
      step: 2,
      title: "Keyword Research",
      description:
        "Identify high-converting keywords for your products and niche.",
    },
    {
      step: 3,
      title: "Content Optimization",
      description:
        "Optimize titles, descriptions, and bullet points for maximum impact.",
    },
    {
      step: 4,
      title: "Performance Monitoring",
      description:
        "Track results and make data-driven adjustments for continuous improvement.",
    },
  ];

  return (
    <div className="min-h-screen animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B1220] to-[#0E7490] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slideDown">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Product Listing
                <span className="text-[#F97316]"> Optimization</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Transform your product listings into sales magnets. Our
                optimization experts will boost your visibility, rankings, and
                conversions across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#EA580C] transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Optimize My Listings</span>
                  <ArrowRight size={20} />
                </button>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1220] transition-all duration-200 flex items-center justify-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Listing Optimization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of your product listings optimized for maximum
              visibility and sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B1220] to-[#0E7490] rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic improvements our optimization service delivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#F5F7FA] rounded-2xl animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-[#0E7490] mb-2">
                  {result.improvement}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-600 text-sm">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold mb-4">
              Our Optimization Process
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A systematic approach to maximizing your product listing
              performance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-6 animate-slideLeft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideLeft">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Why Optimize Your Listings?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  In today's competitive marketplace, having great products
                  isn't enough. Your listings need to be optimized to stand out,
                  rank higher, and convert visitors into customers.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Increase organic search visibility
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Improve click-through rates
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Boost conversion rates
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">Outrank competitors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Maximize ROI on advertising
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg animate-slideRight">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                    <span className="text-gray-700">
                      Comprehensive keyword research
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                    <span className="text-gray-700">
                      Title and description optimization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                    <span className="text-gray-700">
                      Image optimization and enhancement
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                    <span className="text-gray-700">
                      Competitor analysis report
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                    <span className="text-gray-700">
                      Performance tracking dashboard
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                    <span className="text-gray-700">
                      Monthly optimization reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Listings?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't let poor listings hold back your sales potential. Let our
              experts optimize your products for maximum visibility and
              conversions.
            </p>
            <button className="bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105">
              <span>Start Optimizing Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductOptimization;
