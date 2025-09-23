import { motion } from "framer-motion";
import leftImage from "../images/sam-club.webp";
import centerImage from "../images/ebay.webp";
import rightImage from "../images/Logo3.png";

export default function HomeSection() {
  return (
    <section className="bg-[#1E272E] py-16 px-6 md:px-12 lg:px-20">
      <Testimonial />
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
          “Handling six stores was total chaos for me. But now EcomShark
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
    <section className=" bg-[#0e1827] py-16 px-6 md:px-12 mt-4 lg:px-20">
      {/* bg-gradient-to-b from-[#282829] to-[#262727] */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-[#A3E635]">REQUIREMENTS</span> TO PARTNER WITH
          ECOMSHARK AUTOMATION
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
    <div className="flex md:flex-row flex-col items-center justify-center gap-10 py-20 bg-[#1e272e]">
      <div className="w-full md:w-1/3 flex justify-center">
        <img src={leftImage} alt="Left" className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/3 flex justify-center rounded-lg">
        <img
          src={rightImage}
          alt="Right"
          className="max-w-72 h-auto rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <img src={centerImage} alt="Center" className="max-w-full h-auto" />
      </div>
    </div>
  );
};
MyCompanyPage;
