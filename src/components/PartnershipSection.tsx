import { motion } from "framer-motion";
import { Store, Package, BarChart3, ShieldCheck } from "lucide-react"; // Example icons

const partnershipData = [
  {
    icon: <Store className="w-12 h-12 text-purple-500" />,
    title: "Store Setup",
    desc: "We build your online store from scratch, making sure it looks professional and easy to use.",
  },
  {
    icon: <Package className="w-12 h-12 text-yellow-500" />,
    title: "Inventory Control",
    desc: "We track inventory levels daily to keep popular products available at all times.",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-green-500" />,
    title: "Growth Strategy",
    desc: "We track performance, adjust strategies, and keep your business moving forward.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    title: "Brand Protection",
    desc: "We monitor and manage customer reviews to protect your brand’s reputation.",
  },
];

export default function PartnershipSection() {
  return (
    <section className="bg-gray-900 py-20 px-6 lg-mx-72">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Ecommerce Shark{" "}
          <span className="text-lime-400">DONE-FOR-YOU PARTNERSHIP</span> WORKS
        </h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Partnering with us means handing over the reins to a team dedicated to
          building and scaling your online business.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {partnershipData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            style={{
              minHeight: "340px", // Increased height
              marginLeft: "8px", // More left gap
              marginRight: "8px", // More right gap
            }}
          >
            {/* Auto Rotate Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="mb-6"
            >
              {item.icon}
            </motion.div>

            <h3 className="text-xl font-bold mb-3 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
