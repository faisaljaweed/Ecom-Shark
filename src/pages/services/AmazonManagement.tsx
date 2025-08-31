// import React from "react";
// import {
//   ArrowRight,
//   CheckCircle,
//   TrendingUp,
//   Shield,
//   Users,
//   BarChart3,
//   Package,
//   Star,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const AmazonManagement: React.FC = () => {
//   const features = [
//     {
//       icon: TrendingUp,
//       title: "Sales Optimization",
//       description:
//         "Maximize your Amazon sales with data-driven strategies and proven techniques.",
//     },
//     {
//       icon: Shield,
//       title: "Account Protection",
//       description:
//         "Keep your Amazon seller account safe from suspensions and policy violations.",
//     },
//     {
//       icon: Users,
//       title: "Customer Management",
//       description:
//         "Handle customer inquiries, reviews, and feedback professionally.",
//     },
//     {
//       icon: BarChart3,
//       title: "Performance Analytics",
//       description:
//         "Track key metrics and get detailed reports on your account performance.",
//     },
//     {
//       icon: Package,
//       title: "Inventory Management",
//       description:
//         "Optimize your inventory levels and prevent stockouts or overstock situations.",
//     },
//     {
//       icon: Star,
//       title: "Review Management",
//       description:
//         "Improve your product ratings and manage customer reviews effectively.",
//     },
//   ];

//   const benefits = [
//     "Increase sales by up to 300% within 6 months",
//     "Reduce account suspension risks by 95%",
//     "Improve product rankings and visibility",
//     "24/7 account monitoring and support",
//     "Dedicated Amazon specialist assigned",
//     "Monthly performance reports and insights",
//   ];

//   return (
//     <div className="min-h-screen animate-fadeIn">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#0B1220] to-[#0E7490] text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="animate-slideDown">
//               <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//                 Amazon Account
//                 <span className="text-[#F97316]"> Management</span>
//               </h1>
//               <p className="text-xl mb-8 text-gray-200 leading-relaxed">
//                 Let our Amazon experts handle your seller account while you
//                 focus on growing your business. We'll optimize your listings,
//                 manage your inventory, and maximize your sales potential.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#EA580C] transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105">
//                   <span>Get Started Today</span>
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
//               Complete Amazon Management
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive Amazon management service covers every aspect of
//               your seller account
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

//       {/* Benefits Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="animate-slideLeft">
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                   Why Choose Our Amazon Management?
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                   Our team of Amazon specialists has helped hundreds of sellers
//                   achieve remarkable growth on the platform. We combine deep
//                   platform knowledge with proven strategies to deliver results.
//                 </p>
//                 <ul className="space-y-4">
//                   {benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-center space-x-3">
//                       <CheckCircle
//                         size={20}
//                         className="text-[#0E7490] flex-shrink-0"
//                       />
//                       <span className="text-gray-700">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-gradient-to-br from-[#0B1220] to-[#0E7490] rounded-2xl p-8 text-white animate-slideRight">
//                 <h3 className="text-2xl font-bold mb-6">Success Metrics</h3>
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-[#F97316] mb-2">
//                       500+
//                     </div>
//                     <div className="text-sm">Accounts Managed</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-[#F97316] mb-2">
//                       300%
//                     </div>
//                     <div className="text-sm">Average Sales Increase</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-[#F97316] mb-2">
//                       99.5%
//                     </div>
//                     <div className="text-sm">Account Safety Rate</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-[#F97316] mb-2">
//                       24/7
//                     </div>
//                     <div className="text-sm">Support Available</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-[#F5F7FA]">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-4xl mx-auto animate-slideUp">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Ready to Dominate Amazon?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Join hundreds of successful sellers who trust EcomSharks with
//               their Amazon business. Let's grow your sales together.
//             </p>
//             <button className="bg-gradient-to-r from-[#0B1220] to-[#0E7490] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105">
//               <span>Start Your Amazon Journey</span>
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AmazonManagement;
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  BarChart3,
  Settings,
  Zap,
  CheckCircle,
} from "lucide-react";

export default function AmazonService() {
  const features = [
    {
      icon: Package,
      title: "Product Listing Automation",
      description:
        "Automatically create and optimize product listings with AI-powered titles, descriptions, and keyword optimization.",
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      description:
        "Real-time inventory synchronization across all channels with automatic stock level monitoring and alerts.",
    },
    {
      icon: Settings,
      title: "Order Processing",
      description:
        "Streamlined order fulfillment with automated tracking updates and customer communication workflows.",
    },
    {
      icon: Zap,
      title: "Price Optimization",
      description:
        "Dynamic pricing strategies based on competitor analysis, demand patterns, and profit margin goals.",
    },
  ];

  const benefits = [
    "Increase sales velocity by up to 300%",
    "Reduce manual processing time by 85%",
    "Improve listing visibility and search rankings",
    "Maintain competitive pricing automatically",
    "Scale operations without additional staff",
    "24/7 automated monitoring and updates",
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
            <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600">
              <Package className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Amazon Automation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dominate the world's largest marketplace with our comprehensive
            Amazon automation suite. From listing optimization to order
            fulfillment, we've got your entire Amazon operation covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-orange-500/20 mr-4">
                  <feature.icon className="h-6 w-6 text-orange-400" />
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
            Why Choose Our Amazon Automation?
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
            Ready to Automate Your Amazon Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful sellers who have scaled their Amazon
            operations with our automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#a3e635] text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started Today
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
