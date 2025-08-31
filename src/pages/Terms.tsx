// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
// import { FileText } from 'lucide-react';

// export default function Terms() {
//   return (
//     <>
//       <Helmet>
//         <title>Terms & Conditions - EcomSharks</title>
//         <meta name="description" content="EcomSharks terms and conditions. Read our service terms, user responsibilities, and legal agreements." />
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-br from-sand to-white">
//         <div className="container mx-auto px-4 py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <FileText className="h-16 w-16 text-shark-teal mx-auto mb-6" />
//             <h1 className="text-5xl font-bold mb-6">Terms & <span className="shark-gradient-text">Conditions</span></h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Please read these terms and conditions carefully before using our services.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8"
//           >
//             <div className="prose prose-lg max-w-none">
//               <p className="text-muted-foreground mb-8">
//                 <strong>Last updated:</strong> {new Date().toLocaleDateString()}
//               </p>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Agreement to Terms</h2>
//                 <p className="text-muted-foreground">
//                   By accessing and using EcomSharks services, you accept and agree to be bound by the
//                   terms and provision of this agreement.
//                 </p>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Services</h2>
//                 <p className="text-muted-foreground mb-4">
//                   EcomSharks provides growth marketing, conversion optimization, and related ecommerce
//                   scaling services. Our services include:
//                 </p>
//                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                   <li>Growth marketing strategy and execution</li>
//                   <li>Conversion rate optimization</li>
//                   <li>Paid advertising management</li>
//                   <li>Email marketing campaigns</li>
//                   <li>Analytics and performance tracking</li>
//                 </ul>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Client Responsibilities</h2>
//                 <p className="text-muted-foreground mb-4">
//                   Clients agree to:
//                 </p>
//                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                   <li>Provide accurate and complete information</li>
//                   <li>Grant necessary access to platforms and data</li>
//                   <li>Respond to requests in a timely manner</li>
//                   <li>Comply with all applicable laws and regulations</li>
//                 </ul>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Payment Terms</h2>
//                 <p className="text-muted-foreground">
//                   Payment terms will be specified in individual service agreements. All fees are
//                   non-refundable unless otherwise specified in writing.
//                 </p>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Limitation of Liability</h2>
//                 <p className="text-muted-foreground">
//                   EcomSharks shall not be liable for any indirect, incidental, special, consequential,
//                   or punitive damages arising from the use of our services.
//                 </p>
//               </section>

//               <section>
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Contact Information</h2>
//                 <p className="text-muted-foreground">
//                   For questions about these Terms & Conditions, please contact us at{' '}
//                   <a href="mailto:legal@ecomsharks.com" className="text-shark-teal hover:underline">
//                     legal@ecomsharks.com
//                   </a>
//                 </p>
//               </section>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState, useEffect } from "react";
import { FileText, ArrowRight } from "lucide-react";

const Terms = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <FileText className="h-16 w-16 text-lime-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-white">
            Terms & <span className="text-lime-400">Conditions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our
            ecommerce services.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-400 mb-8">
              <strong className="text-white">Last updated:</strong>{" "}
              {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Agreement to Terms
              </h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Ecommerce Shark services, you accept and
                agree to be bound by the terms and provisions of this agreement.
                If you do not agree to these terms, please do not use our
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Ecommerce Services
              </h2>
              <p className="text-gray-300 mb-4">
                Ecommerce Shark provides comprehensive ecommerce platform
                solutions, growth marketing, and digital commerce optimization
                services. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Complete ecommerce platform and store management</li>
                <li>Growth marketing strategy and execution</li>
                <li>Conversion rate optimization and A/B testing</li>
                <li>Paid advertising management across multiple channels</li>
                <li>Email marketing automation and campaigns</li>
                <li>Analytics, reporting, and performance tracking</li>
                <li>Inventory management and order fulfillment</li>
                <li>Payment processing and financial integrations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Merchant Responsibilities
              </h2>
              <p className="text-gray-300 mb-4">
                As a merchant using our ecommerce platform, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Provide accurate and complete business and product information
                </li>
                <li>Grant necessary access to platforms, accounts, and data</li>
                <li>
                  Respond to requests and communications in a timely manner
                </li>
                <li>
                  Comply with all applicable laws, regulations, and industry
                  standards
                </li>
                <li>Maintain accurate inventory and product descriptions</li>
                <li>
                  Honor all customer orders and provide quality customer service
                </li>
                <li>
                  Use our platform in accordance with acceptable use policies
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Payment Terms
              </h2>
              <p className="text-gray-300 mb-4">
                Payment terms will be specified in individual service agreements
                and platform subscriptions:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Monthly or annual subscription fees are due in advance</li>
                <li>Transaction fees apply to processed orders</li>
                <li>
                  All fees are non-refundable unless otherwise specified in
                  writing
                </li>
                <li>Late payments may result in service suspension</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Intellectual Property
              </h2>
              <p className="text-gray-300 mb-4">
                The Ecommerce Shark platform, including all software, designs,
                and proprietary technology, remains our intellectual property.
                Merchants retain ownership of their:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Product content, images, and descriptions</li>
                <li>Brand assets and trademarks</li>
                <li>Customer data and order information</li>
                <li>Marketing content created independently</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Service Availability
              </h2>
              <p className="text-gray-300">
                While we strive for 99.9% uptime, we cannot guarantee
                uninterrupted service. We may perform maintenance, updates, or
                experience technical issues that temporarily affect platform
                availability. We will provide advance notice when possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Limitation of Liability
              </h2>
              <p className="text-gray-300">
                Ecommerce Shark shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                from the use of our ecommerce platform or services, including
                but not limited to lost profits, revenue, or business
                opportunities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Termination
              </h2>
              <p className="text-gray-300">
                Either party may terminate this agreement with 30 days written
                notice. Upon termination, you will retain access to export your
                data for 90 days, after which it may be permanently deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms & Conditions, please
                contact us:
              </p>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-6">
                <p className="text-gray-300 mb-2">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:legal@ecommerceshark.com"
                    className="text-lime-400 hover:underline"
                  >
                    legal@ecommerceshark.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Address:</strong> 123 Commerce
                  Street, Digital District, Tech City 12345
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <button
              className="group text-green-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              style={{ backgroundColor: "#a3e635" }}
            >
              Back to Home
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
