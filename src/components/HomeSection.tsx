import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import wallmart from "../images/download.png";
import Amazom from "../images/download (2).png";
import ebay from "../images/download (3).png";
import etsy from "../images/download (4).png";
import meta from "../images/download (5).png";
import { useNavigate } from "react-router-dom";
const steps = [
  {
    title: "ONBOARDING & STORE SETUP",
    description:
      "We’ll set up your store, customize it to match your vision, and get it ready for Amazon, Walmart or TikTok.",
    img: "https://picsum.photos/200/300", // Replace with your actual image
  },
  {
    title: "FULL-TIME MANAGEMENT",
    description:
      "From sourcing products to processing orders and tracking performance, we handle it all to drive steady growth.",
    img: "https://picsum.photos/200/300",
  },
  {
    title: "EARN PASSIVE REVENUE",
    description:
      "With regular performance updates, your store targets 15%+ profit margins while we manage everything for you.",
    img: "https://picsum.photos/200/300",
  },
];

export default function HomeSection() {
  const navigation = useNavigate();
  return (
    <section className="bg-[#1E272E] py-16 px-6 md:px-12 lg:px-20">
      <Testimonial />
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          PARTNER WITH JUNGLECOM AUTOMATION IN{" "}
          <span className="text-[#A3E635]">3 SIMPLE STEPS</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#2A2F35] rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={step.img}
              alt={step.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between flex-1">
              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[#82878] text-sm mb-6">{step.description}</p>
              <button
                onClick={() => navigation("/contact")}
                className="bg-[#A3E635] text-black font-semibold flex items-center justify-center gap-2 py-2 rounded-xl hover:bg-[#84CC16] transition"
              >
                BOOK A MEETING NOW! <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <Requirements />
      <MyCompanyPage />
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-[#1E272E] py-16 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        {/* Profile images */}
        <div className="flex justify-center mb-6 -space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-14 h-14 rounded-full border-4 border-[#A3E635] object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/women/75.jpg"
            alt="user"
            className="w-14 h-14 rounded-full border-4 border-white object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-14 h-14 rounded-full border-4 border-white object-cover"
          />
          <img
            src="https://randomuser.me/api/portraits/men/85.jpg"
            alt="user"
            className="w-14 h-14 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Testimonial text */}
        <p className="text-white text-lg italic mb-6">
          “Handling six stores was total chaos for me. But now Junglecom
          Automation handles all for me, from inventory to returns, even
          customers; it feels like I hired an Inhouse team.”
        </p>

        {/* Author */}
        <div>
          <h4 className="text-white font-semibold">Evelyn Rodriguez</h4>
          <p className="text-sm text-gray-400">
            Co-Founder{" "}
            <a href="#" className="text-[#A3E635] hover:underline font-medium">
              @ Everly &amp; Co.
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

const requirements = [
  {
    icon: "💰",
    title: "INITIAL CAPITAL INVESTMENT",
    description:
      "A one-time investment covers your store setup, product research, and onboarding to get your business ready to launch.",
  },
  {
    icon: "💵",
    title: "INVENTORY FUNDING",
    description:
      "You’ll need to provide funds or credit upfront for initial products and restocking to keep your store running smoothly.",
  },
  {
    icon: "🧠",
    title: "A LONG-TERM MINDSET",
    description:
      "We work with clients who understand e-commerce takes time, and are ready to commit to steady, lasting growth.",
  },
  {
    icon: "🤝",
    title: "POSITIVE COLLABORATION",
    description:
      "Open communication and a positive approach help us manage your store effectively and build a strong partnership.",
  },
];

function Requirements() {
  return (
    <section className="bg-gradient-to-b from-[#063A1F] to-[#00220F] py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-[#A3E635]">REQUIREMENTS</span> TO PARTNER WITH
          JUNGLECOM AUTOMATION
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {requirements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="p-6"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const MyCompanyPage = () => {
  return (
    <div className=" bg-gray-700 text-white font-sans overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-center bg-gray-800 items-center py-8 px-4 md:px-16 gap-4 md:gap-8 border-b border-gray-800">
        {/* "Let's work together" Card */}
        <div className="flex-1 flex items-center p-6 bg-transparent rounded-4xl relative w-full md:w-auto">
          <div className="bg-[#1A1A1A] rounded-full  flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Let's work together</h3>
            <p className="text-gray-400 text-sm">
              Start building revenue together.
            </p>
          </div>
          <button className="ml-auto p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Separator Line */}
        <div className="hidden md:block w-px h-24 bg-gray-700"></div>

        {/* "Meet the team" Card */}
        <div className="flex-1 flex items-center p-6 bg-transparent rounded-2xl relative w-full md:w-auto">
          <div className="bg-[#1A1A1A] rounded-full p-4 flex-shrink-0">
            {/* Team Icon */}
            <div className="bg-[#1A1A1A] rounded-full p-4 flex-shrink-0">
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Meet the team</h3>
            <p className="text-gray-400 text-sm">
              Say hi to the people behind the process.
            </p>
          </div>
          <button className="ml-auto p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Partnerships Section */}
      <div className="flex flex-col items-center py-16 px-4 relative">
        <div className="flex items-center mb-8">
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="Avatar"
            className="w-16 h-16 rounded-full mr-4 border-2 border-gray-700"
          />
          <p className="text-lg font-medium text-gray-300">
            Proudly Celebrating{" "}
            <span className="font-bold text-white">5+ Years</span> in eCommerce!
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img
            src={etsy}
            alt="Walmart"
            className="h-24 opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src={Amazom}
            alt="Amazon"
            className="h-24 opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src={ebay}
            alt="eBay"
            className="h-24 opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src={wallmart}
            alt="Etsy"
            className="h-24 opacity-70 hover:opacity-100 transition-opacity"
          />
          <img
            src={meta}
            alt="Meta"
            className="h-24 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </div>
  );
};

MyCompanyPage;
