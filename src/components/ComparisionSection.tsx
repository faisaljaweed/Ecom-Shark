import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const growthPoints = [
  { text: "Maximized Sales Potential: Open up powerful data-infused revenue generation and spurring growth mechanisms." },
  { text: "Stronger Brand: Create a brand of significance to prominence, trust, and thrive in the market." },
  { text: "Streamlined Operations: Reduce time spent in effective processes, leaving more time for things that do matter." },
  { text: "Scalable Growth: Extend your reach through dedicated assistance and strategic market entry." },
  { text: "Transparent Results: Pay for success only—our remuneration models guarantee results that matter." },
];

const diyPoints = [
  { text: "Experience & Expertise: Inexperience often leads to critical errors, slow operations, and legal hurdles that can hinder your momentum." },
  { text: "Business Strategy: Starting from zero means endless trial runs and research—without any promise of real success." },
  { text: "Financial Management: Handling the books solo can be overwhelming and may trigger expensive mistakes along the way." },
  { text: "Employee Oversight: Staying on top of your team eats into planning time, reducing your focus on core business goals." },
  { text: "Strategy & Growth: Guesswork slows growth and leaves you behind, missing out on key moves your competition is making." },
];

export default function ComparisonSection() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white">
        The Edge That Makes <br />
        <span className="text-lime-400"> Our System Better!</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-lg shadow"
        >
          <h3 className="text-lg font-bold mb-4 text-[#a3e635]">
            Growth With The Rocket Retail
          </h3>
          <ul className="space-y-4">
            {growthPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: false }}
                className="flex items-start gap-2"
              >
                <CheckCircle className="text-green-500 mt-1" size={20} />
                <p className="text-sm text-white">{point.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-lg shadow"
        >
          <h3 className="text-lg font-bold mb-4 text-[#a3e635]">
            DIY (Beginning Solo)
          </h3>
          <ul className="space-y-4">
            {diyPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: false }}
                className="flex items-start gap-2"
              >
                <XCircle className="text-red-500 mt-1" size={20} />
                <p className="text-white text-sm">{point.text}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
