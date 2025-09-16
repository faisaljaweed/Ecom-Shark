import { Link } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Mail,
  BarChart,
  CheckCircle,
} from "lucide-react";
import Shopify from "../../images/img/Shopify.png";
import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";
export default function ShopifyService() {
  const features = [
    {
      icon: TrendingUp,
      title: "Store Management",
      description:
        "Complete store automation including product updates, inventory management, and order processing workflows.",
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description:
        "Automated email campaigns, social media posting, and customer retention strategies that drive repeat sales.",
    },
    {
      icon: Users,
      title: "Customer Insights",
      description:
        "Advanced customer analytics and segmentation to personalize experiences and increase conversion rates.",
    },
    {
      icon: BarChart,
      title: "Sales Optimization",
      description:
        "AI-powered recommendations for pricing, promotions, and product placement to maximize revenue growth.",
    },
  ];

  const benefits = [
    "Increase conversion rates by up to 45%",
    "Automate 80% of routine store operations",
    "Improve customer lifetime value by 60%",
    "Reduce cart abandonment rates significantly",
    "Scale marketing efforts without complexity",
    "Integrate with 100+ third-party applications",
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
             
              <img src={Shopify} alt="Shopify" className="h-24 w-24 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent">
            Shopify <span className="text-[#a3e635]">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your Shopify store into a revenue-generating machine with
            our comprehensive automation suite. From marketing to fulfillment,
            we optimize every aspect of your e-commerce operation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-[#a3e635] transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-500/20 mr-4">
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
            Shopify Store Growth Results
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
            Supercharge Your Shopify Store
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join successful store owners who have automated their operations and
            achieved sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Launch Automation
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              See Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
