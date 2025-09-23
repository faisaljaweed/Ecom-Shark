import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Monitor,
  Target,
  Image,
  Activity,
  CheckCircle,
} from "lucide-react";
import Center_Services_Content from "./Center_Content_Services/Center_Services_Content";
import MetaAds from "../../images/img/MetaAds.png";
export default function MetaAdsService() {
  const features = [
    {
      icon: Target,
      title: "Precise Audience Targeting",
      description:
        "Use demographic, interest and behaviour signals to reach high-value users on Facebook & Instagram.",
    },
    {
      icon: Image,
      title: "Creative Optimization",
      description:
        "Ad creative tailored for feeds, stories and reels to improve CTR and engagement.",
    },
    {
      icon: Monitor,
      title: "Dynamic Ads",
      description:
        "Show the right products to the right people automatically using dynamic catalog ads.",
    },
    {
      icon: Activity,
      title: "Pixel & Conversion Tracking",
      description:
        "Accurate event tracking for true measurement of conversions and ROAS.",
    },
  ];

  const benefits = [
    "Higher engagement with platform-native creatives",
    "Better conversion tracking for smarter budgets",
    "Automated dynamic personalization",
    "Cross-format campaigns (feed, stories, reels)",
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
                src={MetaAds}
                alt="Shopify"
                className="h-24 w-24 text-white"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            Meta (Facebook & Instagram){" "}
            <span className="text-lime-400"> Ad Campaigns </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Run highly-targeted Meta ad campaigns with pixel-backed measurement,
            creative optimization and dynamic product ads.
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
        <Center_Services_Content />

        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">Why Meta Ads?</h2>
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
          <h2 className="text-3xl font-bold mb-6">Scale on Meta Platforms</h2>
          <p className="text-gray-300 mb-8">
            From awareness to conversion, we optimize campaigns for every stage
            of the funnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all">
              Start Campaign
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400">
              Request Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
