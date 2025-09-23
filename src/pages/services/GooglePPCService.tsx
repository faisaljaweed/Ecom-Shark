import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  BarChart3,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";
import GooglePPC from "../../images/img/GoogleAds.png";
export default function GooglePPCService() {
  const features = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Target high-intent keywords to drive relevant traffic.",
    },
    {
      icon: BarChart3,
      title: "Ad Optimization",
      description: "Continuously refine ad creatives and performance.",
    },
    {
      icon: DollarSign,
      title: "Conversion Tracking",
      description: "Measure ROI with real-time conversion tracking.",
    },
    {
      icon: CheckCircle,
      title: "Budget Control",
      description: "Maximize ROI by managing ad spend effectively.",
    },
  ];

  const benefits = [
    "Instant traffic boost",
    "Higher conversion rates",
    "Data-driven campaign adjustments",
    "Controlled ad spending",
    "Increase brand visibility on Google",
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
                src={GooglePPC}
                alt="Shopify"
                className="h-24 w-24 text-white"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            Google PPC <span className="text-[#a3e635]">Ad Campaigns</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get instant traffic and high-quality leads through data-driven
            Google Ads campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#a3e635] transition"
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

        <Center_Services_Content />

        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Google PPC?
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

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your PPC Campaign Today
          </h2>
          <p className="text-gray-300 mb-8">
            Drive more leads and grow your business with targeted Google Ads.
          </p>
          <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300">
            Launch Campaign
          </button>
        </div>
      </div>
    </div>
  );
}
