import { Link } from 'react-router-dom';
import { ArrowLeft, Megaphone, Target, BarChart3, Layers, CheckCircle } from 'lucide-react';
import Center_Services_Content from './Center_Content_Services/Center_Services_Content';

export default function AdCampaignService() {
  const features = [
    {
      icon: Megaphone,
      title: 'Creative Design',
      description: 'High-converting ad creatives tailored for each platform and audience.'
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Laser-focused audience segmentation to reach users most likely to convert.'
    },
    {
      icon: BarChart3,
      title: 'Performance Reports',
      description: 'Clear, actionable reports showing ROAS, CTR, CPA and other key metrics.'
    },
    {
      icon: Layers,
      title: 'A/B Testing',
      description: 'Systematic testing of creatives, headlines and CTAs to maximize performance.'
    }
  ];

  const benefits = [
    'Better ad performance with continuous optimization',
    'Lower cost-per-acquisition through precise targeting',
    'Creative assets that convert',
    'Transparent reporting for data-driven decisions'
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
            <div className="p-4 rounded-2xl bg-[#a3e635]">
              <Megaphone className="h-16 w-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
            Ad Campaign <span className='text-[#a3e635]'>Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            End-to-end ad campaign strategy and execution across platforms — creative, targeting, testing, and analytics — so your ads actually grow your business.
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
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Ad Campaigns?</h2>
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
          <h2 className="text-3xl font-bold mb-6">Want Ads That Actually Work?</h2>
          <p className="text-gray-300 mb-8">We handle the full ad lifecycle so you can scale without wasting budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all">
              Get Started
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
