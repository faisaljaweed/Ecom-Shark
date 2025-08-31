import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingUp,
  DollarSign,
  BarChart3,
  Zap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const PerformanceMarketing: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "PPC Campaign Management",
      description:
        "Expert management of Google Ads, Amazon PPC, and social media advertising campaigns.",
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description:
        "Optimize your funnels and landing pages to maximize conversion rates.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Detailed performance tracking and actionable insights for continuous improvement.",
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description:
        "Precise audience segmentation and targeting for maximum ROI.",
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description:
        "Smart budget allocation across channels for optimal performance.",
    },
    {
      icon: Zap,
      title: "Campaign Automation",
      description:
        "Automated bid management and campaign optimization for efficiency.",
    },
  ];

  const platforms = [
    {
      name: "Google Ads",
      description: "Search, Display, Shopping, and YouTube advertising",
      features: [
        "Keyword research",
        "Ad creation",
        "Bid management",
        "Landing page optimization",
      ],
    },
    {
      name: "Amazon PPC",
      description: "Sponsored Products, Brands, and Display campaigns",
      features: [
        "Product targeting",
        "Keyword optimization",
        "ACOS optimization",
        "Campaign scaling",
      ],
    },
    {
      name: "Facebook & Instagram",
      description: "Social media advertising across Meta platforms",
      features: [
        "Creative testing",
        "Audience research",
        "Retargeting",
        "Lookalike audiences",
      ],
    },
    {
      name: "Microsoft Ads",
      description: "Bing and Microsoft network advertising",
      features: [
        "Search campaigns",
        "Shopping ads",
        "Audience targeting",
        "Import optimization",
      ],
    },
  ];

  const results = [
    {
      metric: "Average ROAS",
      value: "4.2x",
      description: "Return on ad spend",
    },
    {
      metric: "Cost Reduction",
      value: "35%",
      description: "Lower cost per acquisition",
    },
    {
      metric: "Conversion Increase",
      value: "180%",
      description: "Improved conversion rates",
    },
    {
      metric: "Revenue Growth",
      value: "250%",
      description: "Average revenue increase",
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
                Performance
                <span className="text-[#F97316]"> Marketing</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Drive measurable results with data-driven marketing campaigns.
                Our performance marketing experts maximize your ROI across all
                digital advertising platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#EA580C] transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Boost My Sales</span>
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

      {/* Services Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Performance Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service performance marketing to drive qualified traffic and
              maximize conversions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
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
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advertising Platforms We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert campaign management across all major advertising platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <ul className="space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle
                        size={18}
                        className="text-[#0E7490] flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold mb-4">
              Proven Performance Results
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our data-driven approach delivers measurable results for our
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-[#F97316] mb-2">
                  {result.value}
                </div>
                <div className="text-xl font-semibold mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-200 text-sm">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideLeft">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Marketing Process
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We follow a proven methodology to ensure your marketing
                  campaigns deliver maximum ROI and sustainable growth.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Strategy Development
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Analyze your business and create a custom marketing
                        strategy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Campaign Setup
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Launch optimized campaigns across selected platforms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Optimization
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Continuously optimize for better performance and ROI
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Reporting & Scaling
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Provide detailed reports and scale successful campaigns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg animate-slideRight">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What You Get
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Dedicated marketing specialist
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Custom campaign strategy
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Weekly performance reports
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      24/7 campaign monitoring
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Conversion tracking setup
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-[#0E7490] flex-shrink-0"
                    />
                    <span className="text-gray-700">
                      Monthly strategy calls
                    </span>
                  </li>
                </ul>
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
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop wasting money on ineffective advertising. Let our performance
              marketing experts drive qualified traffic and maximize your ROI.
            </p>
            <button className="bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105">
              <span>Start Growing Today</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
