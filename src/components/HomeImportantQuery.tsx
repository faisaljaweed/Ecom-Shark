import { useState } from "react";

const faqData = [
  {
    question: "Why should I choose The Ecom Sharks for my Amazon business?",
    answer:
      "The Ecom Sharks is one of the top full-service agencies in this industry. It boasts a roadmap from success to sustainable growth for each brand. Our specialized solutions are made to measure results through creative content and advertising.",
  },
  {
    question: "How does The Ecom Sharks optimize product listings?",
    answer:
      "We use advanced SEO, market research, and optimization techniques to make your listings more visible and appealing to customers.",
  },
  {
    question: "Can The Ecom Sharksl help with global expansion?",
    answer:
      "Yes, we have expertise in expanding your business to multiple global marketplaces.",
  },
  {
    question: "What industries does The Ecom Sharks cater to?",
    answer:
      "We work across multiple industries, including retail, fashion, electronics, and more.",
  },
  {
    question: "How quickly can I see results with The Ecom Sharks?",
    answer:
      "Depending on your business type, you can start seeing improvements within weeks.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <div>
         <h1 className="text-5xl md:text-3xl text-center font-bold text-white mb-6">
                 Explore More about us
     Insight  <span className="text-lime-400">into Your Most Important Queries!</span>
              </h1>
    </div>
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">        
      {/* LEFT SIDE - QUESTIONS */}
      <div className="flex flex-col gap-3">
        {faqData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex justify-between items-center px-4 py-3 rounded-md transition-all duration-300 ${
              activeIndex === index
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            <span className="text-left">{item.question}</span>
            <span className="text-xl">→</span>
          </button>
        ))}
      </div>

      {/* RIGHT SIDE - ANSWER */}
      <div className="bg-black rounded-xl p-6 flex items-center justify-center">
        <div className="bg-white rounded-lg px-6 py-14 max-w-lg text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Answer To The Question</h3>
          <p className="text-gray-600 ">{faqData[activeIndex].answer}</p>
        </div>
      </div>
    </div>
    </>
  );
}
