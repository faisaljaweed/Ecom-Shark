// import { TestimonialSlider } from "@/components/TestimonialSlider";

// const Testiimonial = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       {/* <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
//             Testimonial Slider
//           </h1>
//           <p className="text-xl md:text-2xl text-muted-foreground mb-8">
//             Beautiful, responsive testimonial slider with Framer Motion
//             animations
//           </p>
//         </div>
//       </section> */}

//       {/* Testimonial Section */}
//       <TestimonialSlider />

//       {/* Footer */}
//       {/* <section className="py-16 px-4 text-center">
//         <p className="text-muted-foreground">
//           Built with React, Tailwind CSS, and Framer Motion
//         </p>
//       </section> */}
//     </div>
//   );
// };

// export default Testiimonial;
import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../images/01.jpg";
import img2 from "../../images/02.jpg";
import img3 from "../../images/03.jpg";
import img4 from "../../images/04.jpg";
import { useNavigate } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    name: "Emily Hughes",
    role: "Brand Owner",
    img: img1,
    quote: "My Amazon listings had so many errors and got suppressed...",
  },
  {
    id: 2,
    name: "Henry Reed",
    role: "Business Owner",
    img: img2,
    quote: "My Amazon listings had so many errors and got suppressed...",
  },
  {
    id: 3,
    name: "Joanne Eriksen",
    role: "Co-Founder",
    img: img3,
    quote: "My Amazon listings had so many errors and got suppressed...",
  },
  {
    id: 4,
    name: "Mark Philip",
    role: "Founder",
    img: img4,
    quote: "My Amazon listings had so many errors and got suppressed...",
  },
];

export default function TestimonialSection() {
  const [hovered, setHovered] = useState<number | null>(0);
  const navigation = useNavigate();
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto h-auto md:h-[500px] bg-gradient-to-r from-green-900 to-green-700 rounded-3xl overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-0 md:w-1/2 bg-lime-100 rounded-none md:rounded-r-[2rem]">
        {hovered !== null && testimonials[hovered]?.quote ? (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Clutch
            </h2>
            <p className="text-base md:text-lg text-gray-800 mb-6 leading-relaxed">
              {testimonials[hovered].quote}
            </p>
            <button
              onClick={() => navigation("/contact")}
              className="bg-lime-400 hover:bg-lime-500 transition-colors px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-green-900 w-fit"
            >
              Book a Meeting →
            </button>
            <p className="mt-4 text-sm font-medium text-gray-600">
              {testimonials[hovered].name} — {testimonials[hovered].role}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Happy Clients
            </h2>
            <p className="text-base md:text-lg text-gray-800">
              Hover over the images to see what our clients have to say.
            </p>
          </>
        )}
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="flex flex-row md:flex-1 items-center justify-center gap-2 px-2 py-4 md:py-0">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              flex: hovered === index ? 3 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-xl cursor-pointer h-[300px] md:h-[90%] shadow-lg"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-full h-full object-cover"
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 w-full bg-black/50 text-white text-xs md:text-sm p-2 text-center">
              {t.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
