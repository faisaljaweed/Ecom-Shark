// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet-async';
// import { Shield } from 'lucide-react';

// export default function Privacy() {
//   return (
//     <>
//       <Helmet>
//         <title>Privacy Policy - EcomSharks</title>
//         <meta name="description" content="EcomSharks privacy policy. Learn how we collect, use, and protect your personal information." />
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-br from-sand to-white">
//         <div className="container mx-auto px-4 py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <Shield className="h-16 w-16 text-shark-teal mx-auto mb-6" />
//             <h1 className="text-5xl font-bold mb-6">Privacy <span className="shark-gradient-text">Policy</span></h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Information We Collect</h2>
//                 <p className="text-muted-foreground mb-4">
//                   We collect information you provide directly to us, such as when you create an account,
//                   request our services, or contact us for support.
//                 </p>
//                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                   <li>Contact information (name, email, phone number)</li>
//                   <li>Company information and business details</li>
//                   <li>Communication preferences</li>
//                   <li>Usage data and analytics</li>
//                 </ul>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">How We Use Your Information</h2>
//                 <p className="text-muted-foreground mb-4">
//                   We use the information we collect to provide, maintain, and improve our services:
//                 </p>
//                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
//                   <li>Deliver our growth marketing services</li>
//                   <li>Communicate with you about our services</li>
//                   <li>Analyze and improve our service offerings</li>
//                   <li>Comply with legal obligations</li>
//                 </ul>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Information Sharing</h2>
//                 <p className="text-muted-foreground">
//                   We do not sell, trade, or otherwise transfer your personal information to third parties
//                   without your consent, except as described in this policy or as required by law.
//                 </p>
//               </section>

//               <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Data Security</h2>
//                 <p className="text-muted-foreground">
//                   We implement appropriate security measures to protect your personal information against
//                   unauthorized access, alteration, disclosure, or destruction.
//                 </p>
//               </section>

//               <section>
//                 <h2 className="text-2xl font-semibold mb-4 text-shark-dark">Contact Us</h2>
//                 <p className="text-muted-foreground">
//                   If you have any questions about this Privacy Policy, please contact us at{' '}
//                   <a href="mailto:privacy@ecomsharks.com" className="text-shark-teal hover:underline">
//                     privacy@ecomsharks.com
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

import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Ecommerce Shark</title>
        <meta
          name="description"
          content="Ecommerce Shark privacy policy. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Shield className="h-16 w-16 text-lime-400 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6 text-white">
              Privacy <span className="text-lime-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-400 mb-8">
                <strong className="text-white">Last updated:</strong>{" "}
                {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Information We Collect
                </h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as
                  when you create an account, request our ecommerce services, or
                  contact us for support.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Business information and ecommerce store details</li>
                  <li>Communication preferences</li>
                  <li>Usage data and analytics from your store</li>
                  <li>Payment and billing information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to provide, maintain, and
                  improve our ecommerce services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Deliver our ecommerce platform and growth services</li>
                  <li>Process transactions and manage your store</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Analyze store performance and optimize conversions</li>
                  <li>Send important updates about our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Information Sharing
                </h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy or as required by law.
                </p>
                <p className="text-gray-300">
                  We may share information with trusted service providers who
                  assist us in operating our ecommerce platform, conducting our
                  business, or serving our users, provided they agree to keep
                  this information confidential.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Data Security
                </h2>
                <p className="text-gray-300 mb-4">
                  We implement industry-standard security measures to protect
                  your personal information against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>SSL encryption for all data transmission</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Secure data storage with backup systems</li>
                  <li>Limited access to personal information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Your Rights
                </h2>
                <p className="text-gray-300 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access and review your personal data</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability for your store information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Cookies and Tracking
                </h2>
                <p className="text-gray-300">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our platform, analyze usage patterns, and
                  improve our ecommerce services. You can control cookie
                  settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="bg-gray-700 border border-gray-600 rounded-lg p-6">
                  <p className="text-gray-300 mb-2">
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:privacy@ecommerceshark.com"
                      className="text-lime-400 hover:underline"
                    >
                      privacy@ecommerceshark.com
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Address:</strong> 123
                    Commerce Street, Digital District, Tech City 12345
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
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
