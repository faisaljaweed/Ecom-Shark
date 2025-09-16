import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Star, Share2, CheckCircle } from 'lucide-react';
import Center_Services_Content from './Center_Content_Services/Center_Services_Content';

export default function InfluencerService() {
  const features = [
    {
      icon: Users,
      title: 'Influencer Discovery',
      description: 'Find the right influencers in your niche with advanced search and AI-driven recommendations.'
    },
    {
      icon: Star,
      title: 'Campaign Management',
      description: 'Plan, launch, and manage influencer collaborations all in one platform.'
    },
    {
      icon: Share2,
      title: 'Engagement Tracking',
      description: 'Measure likes, shares, comments, and reach from each influencer post.'
    },
    {
      icon: CheckCircle,
      title: 'ROI Measurement',
      description: 'Track return on investment with real-time campaign analytics and conversions.'
    }
  ];

  const benefits = [
    'Boost brand awareness faster',
    'Target the right audience through trusted voices',
    'Automated campaign tracking',
    'Save time finding influencers',
    'Proven engagement and ROI growth'
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
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#a3e635] to-[#a3e635]">
              <Users className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            Influencer <span className="text-lime-400"> Marketing </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborate with the right influencers to amplify your brand presence and reach your target audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-[#a3e635] transition">
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

         <Center_Services_Content/>

        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8">Why Influencer Marketing?</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Grow with Influencers?</h2>
          <p className="text-gray-300 mb-8">Expand your reach and build trust through authentic influencer partnerships.</p>
          <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
