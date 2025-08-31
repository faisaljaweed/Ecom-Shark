import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  AlertTriangle,
  Eye,
  FileText,
  Scale,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

const BrandProtection: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: "Brand Monitoring",
      description:
        "24/7 monitoring of your brand across all major marketplaces and platforms.",
    },
    {
      icon: AlertTriangle,
      title: "Counterfeit Detection",
      description:
        "Advanced detection systems to identify and remove counterfeit products.",
    },
    {
      icon: Eye,
      title: "Unauthorized Seller Tracking",
      description:
        "Track and take action against unauthorized sellers of your products.",
    },
    {
      icon: FileText,
      title: "IP Protection",
      description:
        "Comprehensive intellectual property protection and enforcement.",
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description:
        "Ensure your brand complies with all marketplace and regulatory requirements.",
    },
    {
      icon: Lock,
      title: "Account Security",
      description:
        "Protect your seller accounts from hijacking and unauthorized access.",
    },
  ];

  const threats = [
    {
      title: "Counterfeit Products",
      description: "Fake products damage your brand reputation and steal sales",
      impact: "Revenue loss up to 40%",
    },
    {
      title: "Unauthorized Sellers",
      description:
        "Unauthorized resellers undercut prices and violate MAP policies",
      impact: "Price erosion of 25-50%",
    },
    {
      title: "Brand Hijacking",
      description: "Competitors steal your brand name and redirect customers",
      impact: "Customer confusion and loss",
    },
    {
      title: "IP Infringement",
      description: "Trademark and copyright violations dilute your brand value",
      impact: "Legal costs and brand damage",
    },
  ];

  const protectionLevels = [
    {
      name: "Basic Protection",
      price: "$299/month",
      features: [
        "Daily brand monitoring",
        "Counterfeit detection",
        "Basic reporting",
        "Email alerts",
        "Manual takedown requests",
      ],
    },
    {
      name: "Advanced Protection",
      price: "$599/month",
      features: [
        "Real-time monitoring",
        "AI-powered detection",
        "Automated takedowns",
        "Legal support",
        "Detailed analytics",
        "Priority response",
      ],
      popular: true,
    },
    {
      name: "Enterprise Protection",
      price: "$1,299/month",
      features: [
        "Complete brand protection",
        "Dedicated account manager",
        "Legal enforcement team",
        "Custom monitoring rules",
        "White-glove service",
        "24/7 support",
      ],
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
                Brand Protection &
                <span className="text-[#F97316]"> Compliance</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Protect your brand from counterfeits, unauthorized sellers, and
                compliance violations. Our comprehensive protection service
                safeguards your reputation and revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#EA580C] transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Protect My Brand</span>
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
              Complete Brand Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection services to safeguard your brand across
              all channels
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

      {/* Threats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Brand Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the risks that could be damaging your brand and revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-200 rounded-2xl p-8 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <AlertTriangle
                    className="text-red-500 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {threat.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{threat.description}</p>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {threat.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Levels */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the right level of brand protection for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {protectionLevels.map((level, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp ${
                  level.popular
                    ? "bg-gradient-to-br from-[#0B1220] to-[#0E7490] text-white relative"
                    : "bg-white border border-gray-200"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      level.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {level.name}
                  </h3>
                  <div
                    className={`text-4xl font-bold mb-2 ${
                      level.popular ? "text-[#F97316]" : "text-[#0E7490]"
                    }`}
                  >
                    {level.price}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle
                        size={20}
                        className={`flex-shrink-0 ${
                          level.popular ? "text-[#F97316]" : "text-[#0E7490]"
                        }`}
                      />
                      <span
                        className={`${
                          level.popular ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                    level.popular
                      ? "bg-[#F97316] text-white hover:bg-[#EA580C]"
                      : "bg-[#0E7490] text-white hover:bg-[#0B1220]"
                  }`}
                >
                  Get Protected
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-4xl font-bold mb-4">Protection Results</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our brand protection service delivers measurable results for our
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div
              className="text-center animate-slideUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-4xl font-bold text-[#F97316] mb-2">
                10,000+
              </div>
              <div className="text-lg">Counterfeits Removed</div>
            </div>
            <div
              className="text-center animate-slideUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl font-bold text-[#F97316] mb-2">95%</div>
              <div className="text-lg">Threat Detection Rate</div>
            </div>
            <div
              className="text-center animate-slideUp"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl font-bold text-[#F97316] mb-2">
                24hrs
              </div>
              <div className="text-lg">Average Response Time</div>
            </div>
            <div
              className="text-center animate-slideUp"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl font-bold text-[#F97316] mb-2">500+</div>
              <div className="text-lg">Brands Protected</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Don't Let Brand Threats Damage Your Business
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every day you wait, counterfeiters and unauthorized sellers are
              stealing your revenue and damaging your reputation. Protect your
              brand today.
            </p>
            <button className="bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105">
              <span>Start Protection Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandProtection;
