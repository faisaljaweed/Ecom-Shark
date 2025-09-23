import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MessageSquare,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";
import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";
import SocialMediahandling from "../../images/img/Social _Media_Marketing.png";
export default function SocialMediaService() {
  const features = [
    {
      icon: Calendar,
      title: "Content Scheduling",
      description:
        "Plan and schedule posts across platforms with a unified calendar and auto-posting.",
    },
    {
      icon: MessageSquare,
      title: "Community Management",
      description:
        "Engage with followers, handle queries and moderate communities to build trust.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Track engagement, growth and content performance with easy-to-read reports.",
    },
    {
      icon: Users,
      title: "Brand Growth Strategy",
      description:
        "Custom growth plans focusing on reach, followers quality and long-term engagement.",
    },
  ];

  const benefits = [
    "Consistent brand voice across channels",
    "Faster follower response and higher retention",
    "Content that drives real engagement",
    "Data-led strategy for steady growth",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/service"
          className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl ">
              <img
                src={SocialMediahandling}
                alt="Shopify"
                className="h-24 w-24 text-white"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            Social Media <span className="text-[#a3e635]"> Handling </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-service social media management: content planning, posting,
            community engagement and analytics to grow your brand organically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl border border-[#a3e635] hover:border-[#a3e635] transition"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 mr-4">
                  <f.icon className="h-6 w-6 text-[#a3e635]" />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
              </div>
              <p className="text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">
            Benefits of Social Media Handling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 text-lime-400 mr-3" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <Center_Services_Content />

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Strengthen Your Social Presence?
          </h2>
          <p className="text-gray-300 mb-8">
            Let us manage day-to-day activity while you focus on product and
            strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all">
              Start Now
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400">
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
