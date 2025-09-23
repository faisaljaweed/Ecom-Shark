import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Shield,
  ShoppingCart,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

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
                Ecommerce <span className="text-lime-400">Sharks</span>
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
                  Founded in 2016, Ecommerce SharkS emerged from a simple
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
              Why Ecommerce Sharks?
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
            <Link to="/contact">
              <button
                className="group text-green-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
                style={{ backgroundColor: "#a3e635" }}
              >
                Start Your Success Story
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
