import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Target, Zap, BarChart3, Mail, Search } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="h-12 w-12 text-shark-teal" />,
    title: "Growth Marketing",
    description: "Comprehensive growth strategies that scale your revenue through multi-channel marketing campaigns and data-driven optimization.",
    features: ["Customer acquisition", "Retention strategies", "Lifecycle marketing", "Growth experimentation"]
  },
  {
    icon: <Target className="h-12 w-12 text-coral" />,
    title: "Conversion Optimization",
    description: "Maximize your website's potential with systematic testing and optimization to increase conversion rates and revenue per visitor.",
    features: ["A/B testing", "Landing page optimization", "Checkout optimization", "User experience analysis"]
  },
  {
    icon: <Zap className="h-12 w-12 text-shark-teal" />,
    title: "Paid Advertising",
    description: "Strategic paid advertising campaigns across Google, Facebook, and other platforms to drive qualified traffic and maximize ROI.",
    features: ["Google Ads management", "Facebook & Instagram ads", "Campaign optimization", "Performance tracking"]
  },
  {
    icon: <Mail className="h-12 w-12 text-coral" />,
    title: "Email Marketing",
    description: "Build and nurture customer relationships through strategic email campaigns that drive repeat purchases and increase lifetime value.",
    features: ["Email automation", "Segmentation strategies", "Campaign design", "Performance optimization"]
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-shark-teal" />,
    title: "Analytics & Tracking",
    description: "Comprehensive analytics setup and reporting to track performance, identify opportunities, and make data-driven decisions.",
    features: ["Analytics setup", "Custom dashboards", "Performance reporting", "Data analysis"]
  },
  {
    icon: <Search className="h-12 w-12 text-coral" />,
    title: "SEO Optimization",
    description: "Improve your organic search visibility and drive qualified traffic through strategic SEO optimization and content marketing.",
    features: ["Technical SEO", "Content optimization", "Link building", "Local SEO"]
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - EcomSharks | Growth Marketing & Conversion Optimization</title>
        <meta name="description" content="Comprehensive ecommerce growth services including growth marketing, conversion optimization, paid advertising, and analytics. Scale your brand with precision." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-sand to-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <TrendingUp className="h-16 w-16 text-shark-teal mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Our <span className="shark-gradient-text">Services</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive ecommerce growth solutions designed to scale your brand with precision and deliver measurable results that drive explosive growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-6 flex justify-center lg:justify-start">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-center lg:text-left leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-shark-teal uppercase tracking-wide">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-coral rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16 p-12 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Brand?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our precision growth strategies can deliver explosive results for your ecommerce business.
            </p>
            <button className="px-8 py-4 shark-gradient text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Your Free Growth Plan
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
}