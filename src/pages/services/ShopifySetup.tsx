// import React from "react";
// import {
//   ArrowRight,
//   CheckCircle,
//   ShoppingBag,
//   Palette,
//   CreditCard,
//   Smartphone,
//   Globe,
//   Zap,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const ShopifySetup: React.FC = () => {
//   const features = [
//     {
//       icon: ShoppingBag,
//       title: "Complete Store Setup",
//       description:
//         "Full Shopify store configuration with products, collections, and navigation.",
//     },
//     {
//       icon: Palette,
//       title: "Custom Theme Design",
//       description:
//         "Professional theme customization that matches your brand perfectly.",
//     },
//     {
//       icon: CreditCard,
//       title: "Payment Integration",
//       description:
//         "Setup multiple payment gateways for seamless customer transactions.",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Optimization",
//       description:
//         "Ensure your store looks perfect and functions flawlessly on all devices.",
//     },
//     {
//       icon: Globe,
//       title: "SEO Configuration",
//       description:
//         "Optimize your store for search engines to drive organic traffic.",
//     },
//     {
//       icon: Zap,
//       title: "Speed Optimization",
//       description:
//         "Optimize loading speeds for better user experience and conversions.",
//     },
//   ];

//   const packages = [
//     {
//       name: "Starter",
//       price: "$499",
//       description: "Perfect for new businesses",
//       features: [
//         "Basic store setup",
//         "Theme installation",
//         "Up to 25 products",
//         "Payment gateway setup",
//         "Basic SEO setup",
//         "Mobile optimization",
//       ],
//     },
//     {
//       name: "Professional",
//       price: "$999",
//       description: "Most popular choice",
//       features: [
//         "Complete store setup",
//         "Custom theme design",
//         "Up to 100 products",
//         "Multiple payment gateways",
//         "Advanced SEO optimization",
//         "Speed optimization",
//         "Social media integration",
//         "Analytics setup",
//       ],
//       popular: true,
//     },
//     {
//       name: "Enterprise",
//       price: "$1,999",
//       description: "For established businesses",
//       features: [
//         "Premium store setup",
//         "Fully custom design",
//         "Unlimited products",
//         "Advanced integrations",
//         "Custom functionality",
//         "Multi-language support",
//         "Advanced analytics",
//         "Priority support",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen animate-fadeIn">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#0B1220] to-[#0E7490] text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="animate-slideDown">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//                 Shopify Store
//                 <span className="text-[#F97316]"> Setup</span>
//               </h1>
//               <p className="text-xl mb-8 text-gray-200 leading-relaxed">
//                 Launch your professional Shopify store with our expert setup
//                 service. From design to deployment, we handle everything so you
//                 can focus on selling.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#EA580C] transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105">
//                   <span>Build My Store</span>
//                   <ArrowRight size={20} />
//                 </button>
//                 <Link
//                   to="/services"
//                   className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1220] transition-all duration-200 flex items-center justify-center"
//                 >
//                   View All Services
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-[#F5F7FA]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16 animate-slideUp">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Complete Shopify Solution
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Everything you need for a successful Shopify store, professionally
//               configured
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#0B1220] to-[#0E7490] rounded-full flex items-center justify-center mb-6">
//                     <IconComponent className="text-white" size={28} />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Packages Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16 animate-slideUp">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Choose Your Package
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Select the perfect Shopify setup package for your business needs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {packages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideUp ${
//                   pkg.popular
//                     ? "bg-gradient-to-br from-[#0B1220] to-[#0E7490] text-white relative"
//                     : "bg-white border border-gray-200"
//                 }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <div className="text-center mb-8">
//                   <h3
//                     className={`text-2xl font-bold mb-2 ${
//                       pkg.popular ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {pkg.name}
//                   </h3>
//                   <div
//                     className={`text-4xl font-bold mb-2 ${
//                       pkg.popular ? "text-[#F97316]" : "text-[#0E7490]"
//                     }`}
//                   >
//                     {pkg.price}
//                   </div>
//                   <p
//                     className={`${
//                       pkg.popular ? "text-gray-200" : "text-gray-600"
//                     }`}
//                   >
//                     {pkg.description}
//                   </p>
//                 </div>
//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, featureIndex) => (
//                     <li
//                       key={featureIndex}
//                       className="flex items-center space-x-3"
//                     >
//                       <CheckCircle
//                         size={20}
//                         className={`flex-shrink-0 ${
//                           pkg.popular ? "text-[#F97316]" : "text-[#0E7490]"
//                         }`}
//                       />
//                       <span
//                         className={`${
//                           pkg.popular ? "text-gray-200" : "text-gray-700"
//                         }`}
//                       >
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
//                     pkg.popular
//                       ? "bg-[#F97316] text-white hover:bg-[#EA580C]"
//                       : "bg-[#0E7490] text-white hover:bg-[#0B1220]"
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#F5F7FA]">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-4xl mx-auto animate-slideUp">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Ready to Launch Your Shopify Store?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Join thousands of successful merchants who chose our Shopify setup
//               service. Your professional store is just one click away.
//             </p>
//             <button className="bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105">
//               <span>Start Building Today</span>
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShopifySetup;

import { Link } from "react-router-dom";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Mail,
  BarChart,
  CheckCircle,
} from "lucide-react";

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
          to="/"
          className="inline-flex items-center text-lime-400 hover:text-lime-300 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600">
              <TrendingUp className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Shopify Automation
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
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-green-500/20 mr-4">
                  <feature.icon className="h-6 w-6 text-green-400" />
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
