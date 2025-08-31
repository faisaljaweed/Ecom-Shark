import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Smartphone,
  Video,
  Heart,
  Rocket,
  CheckCircle,
} from "lucide-react";

export default function TiktokShopService() {
  const features = [
    {
      icon: Smartphone,
      title: "Social Commerce Integration",
      description:
        "Seamlessly connect your products with TikTok's social platform for native shopping experiences that convert.",
    },
    {
      icon: Video,
      title: "Content Automation",
      description:
        "Generate engaging product videos and social content that captures attention and drives viral engagement.",
    },
    {
      icon: Heart,
      title: "Trend Analysis",
      description:
        "AI-powered trend detection that identifies viral opportunities and optimizes your content strategy in real-time.",
    },
    {
      icon: Rocket,
      title: "Viral Marketing Engine",
      description:
        "Leverage TikTok's algorithm with strategic content distribution and influencer collaboration tools.",
    },
  ];

  const benefits = [
    "Tap into Gen Z and millennial markets",
    "Achieve 10x higher engagement rates",
    "Convert social views into direct sales",
    "Automate influencer partnership workflows",
    "Track viral content performance metrics",
    "Scale social commerce operations rapidly",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600">
              <Smartphone className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            TikTok Shop Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harness the explosive power of social commerce with TikTok Shop
            automation. Turn viral moments into sales with our cutting-edge
            social selling platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-pink-500/20 mr-4">
                  <feature.icon className="h-6 w-6 text-pink-400" />
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
            TikTok Shop Success Metrics
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
            Go Viral with Smart Commerce
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the social commerce revolution and turn TikTok engagement into
            profitable sales with our automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Start Going Viral
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
